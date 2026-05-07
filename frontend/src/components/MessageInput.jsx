import { useState, useRef } from 'react';
import { X, Send, Image } from 'lucide-react';
import { useChatStore } from '../store/useChatStore';

const MessageInput = () => {
  const [text, setText] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    await sendMessage({
      text: text.trim(),
      image: imagePreview,
    });

    setText('');
    removeImage();
  };

  return (
    <div className="border-t border-base-300 bg-base-100 p-4">
      {imagePreview && (
        <div className="mb-3">
          <div className="relative inline-block">
            <img src={imagePreview} alt="Preview" className="h-20 rounded-lg border border-base-300 object-cover" />
            <button
              onClick={removeImage}
              className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-base-300 text-base-content hover:bg-error hover:text-error-content"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 rounded-lg border border-base-300 bg-base-200/50 px-4 py-2.5 text-sm text-base-content outline-none placeholder:text-base-content/40 focus:border-primary/50"
        />
        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="rounded-lg p-2.5 text-base-content/50 transition-colors hover:bg-base-200 hover:text-base-content"
        >
          <Image className="h-5 w-5" />
        </button>
        <button
          type="submit"
          disabled={!text.trim() && !imagePreview}
          className="rounded-lg bg-primary p-2.5 text-primary-content transition-colors hover:bg-primary/90 disabled:opacity-40"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
