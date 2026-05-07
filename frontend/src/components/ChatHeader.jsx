import { X } from 'lucide-react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers?.includes(selectedUser._id);

  return (
    <div className="flex items-center justify-between border-b border-base-300 bg-base-100 px-4 py-3">
      <div className="flex items-center gap-3">
        {selectedUser.profilePicture ? (
          <img src={selectedUser.profilePicture} alt="" className="h-9 w-9 rounded-full object-cover" />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {selectedUser.fullName.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-base-content">{selectedUser.fullName}</p>
          <p className="text-xs text-base-content/50">{isOnline ? 'Online' : 'Offline'}</p>
        </div>
      </div>
      <button
        onClick={() => setSelectedUser(null)}
        className="rounded-lg p-1.5 text-base-content/50 transition-colors hover:bg-base-200 hover:text-base-content"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ChatHeader;
