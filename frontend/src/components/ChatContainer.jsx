import { useEffect, useRef } from 'react';
import { Loader } from 'lucide-react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser, subscribeToMessages, unsubscribeFromMessages } = useChatStore();
  const { authUser } = useAuthStore();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-1 flex-col">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto bg-base-100/50 p-4 space-y-1">
        {isMessagesLoading ? (
          <div className="flex h-full items-center justify-center">
            <Loader className="h-6 w-6 animate-spin text-base-content/50" />
          </div>
        ) : (
          messages.map((message) => {
            const isMine = message.senderId === authUser._id;
            return (
              <div key={message._id} className={`chat ${isMine ? 'chat-end' : 'chat-start'}`}>
                <div className="chat-image avatar">
                  <div className="w-8 rounded-full">
                    {isMine ? (
                      authUser.profilePicture ? (
                        <img src={authUser.profilePicture} alt="" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-primary/10 text-xs font-semibold text-primary">
                          {authUser.fullName.charAt(0)}
                        </div>
                      )
                    ) : selectedUser.profilePicture ? (
                      <img src={selectedUser.profilePicture} alt="" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/10 text-xs font-semibold text-primary">
                        {selectedUser.fullName.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>
                <div className="chat-header">
                  <time className="text-xs text-base-content/40">{formatTime(message.timestamp)}</time>
                </div>
                <div className={`chat-bubble ${isMine ? 'chat-bubble-primary' : ''}`}>
                  {message.image && (
                    <img src={message.image} alt="" className="mb-2 max-w-[200px] rounded-md" />
                  )}
                  {message.text && <p>{message.text}</p>}
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
