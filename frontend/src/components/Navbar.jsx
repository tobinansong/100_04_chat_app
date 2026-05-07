import { Link } from 'react-router-dom';
import { MessageSquare, LogOut, Settings, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
  const { authUser, logout } = useAuthStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-base-100/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-zinc-400 to-zinc-600 shadow-lg shadow-white/5">
            <MessageSquare className="h-5 w-5 text-black" />
          </div>
          <span>ChatApp</span>
        </Link>

        <nav className="flex items-center gap-1">
          {authUser ? (
            <>
              <Link
                to="/settings"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-all hover:bg-white/5 hover:text-white"
              >
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </Link>
              <Link
                to="/profile"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-all hover:bg-white/5 hover:text-white"
              >
                {authUser.profilePicture ? (
                  <img src={authUser.profilePicture} alt="" className="h-6 w-6 rounded-full object-cover" />
                ) : (
                  <User className="h-4 w-4" />
                )}
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <button
                onClick={logout}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-all hover:bg-white/5 hover:text-red-400"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-all hover:bg-white/5 hover:text-white"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="rounded-lg border border-zinc-600 bg-gradient-to-b from-zinc-500/20 to-transparent px-4 py-2 text-sm font-medium text-zinc-200 shadow-lg shadow-black/20 transition-all hover:border-zinc-500 hover:text-white"
              >
                Get started
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
