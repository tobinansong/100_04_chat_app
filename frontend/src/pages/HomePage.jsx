import { useChatStore } from '../store/useChatStore';
import Sidebar from '../components/Sidebar';
import NoChatSelected from '../components/NotChatSelected';
import ChatContainer from '../components/ChatContainer';

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-screen pt-16">
      <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-none border-x border-base-300 bg-base-100 shadow-xl lg:rounded-xl lg:my-4 lg:h-[calc(100vh-6rem)]">
        <Sidebar />
        {selectedUser ? <ChatContainer /> : <NoChatSelected />}
      </div>
    </div>
  );
};

export default HomePage;
