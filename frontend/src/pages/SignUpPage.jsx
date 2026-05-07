import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, AtSign } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import AuthImpagePatern from '../components/AuthImpagePatern';
import toast from 'react-hot-toast';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', username: '', email: '', password: '' });
  const { signup, isSigningUp } = useAuthStore();

  const validate = () => {
    if (!formData.fullName.trim()) return toast.error('Full name is required');
    if (!formData.username.trim()) return toast.error('Username is required');
    if (!formData.email.trim()) return toast.error('Email is required');
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error('Please enter a valid email address');
    if (!formData.password) return toast.error('Password is required');
    if (formData.password.length < 6) return toast.error('Password must be at least 6 characters');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate() === true) signup(formData);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(120,120,120,0.1),transparent)]" />

        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-zinc-500">Start chatting in seconds &mdash; it&apos;s free</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="group relative">
              <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600 transition-colors group-focus-within:text-zinc-300" />
              <input
                type="text"
                placeholder="Full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 py-3.5 pl-11 pr-4 text-sm text-zinc-200 outline-none transition-all placeholder:text-zinc-600 focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-700"
              />
            </div>

            <div className="group relative">
              <AtSign className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600 transition-colors group-focus-within:text-zinc-300" />
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 py-3.5 pl-11 pr-4 text-sm text-zinc-200 outline-none transition-all placeholder:text-zinc-600 focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-700"
              />
            </div>

            <div className="group relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600 transition-colors group-focus-within:text-zinc-300" />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 py-3.5 pl-11 pr-4 text-sm text-zinc-200 outline-none transition-all placeholder:text-zinc-600 focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-700"
              />
            </div>

            <div className="group relative">
              <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600 transition-colors group-focus-within:text-zinc-300" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password (min 6 characters)"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 py-3.5 pl-11 pr-12 text-sm text-zinc-200 outline-none transition-all placeholder:text-zinc-600 focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 transition-colors hover:text-zinc-300"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={isSigningUp}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-zinc-300 to-zinc-500 py-3.5 text-sm font-semibold text-black shadow-lg shadow-white/5 transition-all hover:from-zinc-200 hover:to-zinc-400 hover:shadow-white/10 disabled:opacity-50"
            >
              {isSigningUp ? 'Creating account...' : 'Create account'}
              {!isSigningUp && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-zinc-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-zinc-300 transition-colors hover:text-white">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <AuthImpagePatern
        title="Join the conversation"
        subtitle="Connect with friends and communities in real time. Your messages, your way — fast, secure, and always free."
      />
    </div>
  );
};

export default SignUpPage;
