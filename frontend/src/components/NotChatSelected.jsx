import { MessageSquare } from 'lucide-react';

const NoChatSelected = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-base-100/50 p-16">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
        <MessageSquare className="h-8 w-8 text-primary" />
      </div>
      <h2 className="mb-2 text-xl font-bold text-base-content">Welcome to ChatApp</h2>
      <p className="text-sm text-base-content/60">
        Select a conversation from the sidebar to start chatting
      </p>
    </div>
  );
};

export default NoChatSelected;
