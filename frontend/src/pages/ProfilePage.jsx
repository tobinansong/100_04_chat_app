import { useState } from 'react';
import { Camera, Mail, User, AtSign } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { resizeImage } from '../lib/utils';

const ProfilePage = () => {
  const { authUser, updateProfile, isUpdatingProfile } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const resized = await resizeImage(file, 500, 0.8);
    setSelectedImage(resized);
    updateProfile({ profilePicture: resized });
  };

  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-1 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
          Profile
        </h1>
        <p className="mb-10 text-sm text-zinc-500">Your personal information and public profile</p>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <div className="mb-8 flex flex-col items-center">
            <div className="group relative">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-800">
                {selectedImage || authUser?.profilePicture ? (
                  <img
                    src={selectedImage || authUser.profilePicture}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-10 w-10 text-zinc-500" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-zinc-600 bg-zinc-800 text-zinc-300 shadow-lg transition-all hover:border-zinc-500 hover:bg-zinc-700 hover:text-white">
                <Camera className="h-3.5 w-3.5" />
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              {isUpdatingProfile ? 'Uploading...' : 'Click the camera icon to upload a photo'}
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-400">Full name</label>
              <div className="group relative">
                <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
                <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 py-3 pl-11 pr-4 text-sm text-zinc-300">
                  {authUser?.fullName}
                </div>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-400">Username</label>
              <div className="group relative">
                <AtSign className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
                <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 py-3 pl-11 pr-4 text-sm text-zinc-300">
                  {authUser?.username}
                </div>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-zinc-400">Email</label>
              <div className="group relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
                <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 py-3 pl-11 pr-4 text-sm text-zinc-300">
                  {authUser?.email}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800/50 bg-zinc-800/30 px-4 py-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500">Member since</span>
                <span className="text-zinc-400">
                  {authUser?.timestamp && new Date(authUser.timestamp).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
