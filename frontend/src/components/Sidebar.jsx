import { useEffect, useState } from 'react';
import { Users, Search, Loader } from 'lucide-react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';

const Sidebar = () => {
  const { users, getUsers, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = users.filter((user) => {
    if (showOnlineOnly && !onlineUsers?.includes(user._id)) return false;
    if (search && !user.fullName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  if (isUsersLoading) {
    return (
      <aside className="flex h-full w-20 flex-col items-center justify-center border-r border-base-300 bg-base-100 lg:w-72">
        <Loader className="h-6 w-6 animate-spin text-base-content/50" />
      </aside>
    );
  }

  return (
    <aside className="flex h-full w-20 flex-col border-r border-base-300 bg-base-100 lg:w-72">
      <div className="border-b border-base-300 p-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-base-content/70" />
          <span className="hidden text-sm font-semibold text-base-content lg:block">Contacts</span>
        </div>
        <div className="mt-3 hidden lg:block">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-base-content/40" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-base-300 bg-base-200/50 py-2 pl-9 pr-3 text-sm text-base-content outline-none placeholder:text-base-content/40 focus:border-primary/50"
            />
          </div>
        </div>
        <div className="mt-3 hidden items-center gap-2 lg:flex">
          <label className="flex cursor-pointer items-center gap-2 text-xs text-base-content/60">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-xs checkbox-primary"
            />
            Show online only
          </label>
          <span className="text-xs text-base-content/40">
            ({onlineUsers ? onlineUsers.length - 1 : 0} online)
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`flex w-full items-center gap-3 p-3 transition-colors hover:bg-base-200 ${
              selectedUser?._id === user._id ? 'bg-base-200 ring-1 ring-base-300' : ''
            }`}
          >
            <div className="relative mx-auto lg:mx-0">
              {user.profilePicture ? (
                <img src={user.profilePicture} alt="" className="h-10 w-10 rounded-full object-cover" />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {user.fullName.charAt(0)}
                </div>
              )}
              {onlineUsers?.includes(user._id) && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-base-100 bg-success" />
              )}
            </div>
            <div className="hidden min-w-0 text-left lg:block">
              <p className="truncate text-sm font-medium text-base-content">{user.fullName}</p>
              <p className="text-xs text-base-content/50">
                {onlineUsers?.includes(user._id) ? 'Online' : 'Offline'}
              </p>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <p className="py-8 text-center text-xs text-base-content/40">No users found</p>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
