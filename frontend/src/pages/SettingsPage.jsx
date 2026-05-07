import { useState } from 'react';
import { Bell, Moon, Shield } from 'lucide-react';

const sections = [
  {
    title: 'Notifications',
    icon: Bell,
    settings: [
      { id: 'push', label: 'Push notifications', description: 'Receive alerts when you get new messages' },
      { id: 'sound', label: 'Message sounds', description: 'Play a sound for incoming messages' },
      { id: 'email', label: 'Email notifications', description: 'Get a daily digest of unread messages' },
    ],
  },
  {
    title: 'Appearance',
    icon: Moon,
    settings: [
      { id: 'dark', label: 'Dark mode', description: 'Use a darker color scheme for the interface' },
      { id: 'compact', label: 'Compact view', description: 'Reduce spacing to show more messages' },
    ],
  },
  {
    title: 'Privacy',
    icon: Shield,
    settings: [
      { id: 'online', label: 'Show online status', description: 'Let others see when you are active' },
      { id: 'read', label: 'Read receipts', description: 'Show when you have read a message' },
    ],
  },
];

const SettingsPage = () => {
  const [toggles, setToggles] = useState({
    push: true,
    sound: true,
    email: false,
    dark: true,
    compact: false,
    online: true,
    read: true,
  });

  const toggle = (id) => setToggles((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="min-h-screen px-4 pt-24 pb-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-1 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
          Settings
        </h1>
        <p className="mb-10 text-sm text-zinc-500">Manage your preferences and account settings</p>

        <div className="space-y-6">
          {sections.map(({ title, icon: Icon, settings }) => (
            <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-3 border-b border-zinc-800/50 px-6 py-4">
                <Icon className="h-4 w-4 text-zinc-400" />
                <h2 className="text-sm font-semibold text-zinc-200">{title}</h2>
              </div>

              <div className="divide-y divide-zinc-800/50">
                {settings.map(({ id, label, description }) => (
                  <div key={id} className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{label}</p>
                      <p className="mt-0.5 text-xs text-zinc-500">{description}</p>
                    </div>
                    <button
                      onClick={() => toggle(id)}
                      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                        toggles[id] ? 'bg-zinc-400' : 'bg-zinc-700'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-black shadow transition-transform ${
                          toggles[id] ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
