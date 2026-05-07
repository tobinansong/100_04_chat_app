import { MessageSquare } from 'lucide-react';

const AuthImpagePatern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-zinc-900/30 border-l border-zinc-800 p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(120,120,120,0.08),transparent)]" />

      <div className="relative z-10 max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800/80 border border-zinc-700/50 shadow-lg">
              <MessageSquare className="h-8 w-8 text-zinc-300" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-400 opacity-40" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-zinc-500" />
            </span>
          </div>
        </div>

        <h2 className="mb-3 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
          {title}
        </h2>
        <p className="mb-10 text-sm leading-relaxed text-zinc-500">
          {subtitle}
        </p>

        <div className="space-y-4">
          {[
            { align: 'justify-start', width: 'max-w-[220px]', delay: '' },
            { align: 'justify-end', width: 'max-w-[180px]', delay: 'animation-delay-1' },
            { align: 'justify-start', width: 'max-w-[200px]', delay: 'animation-delay-2' },
          ].map((bubble, i) => (
            <div key={i} className={`flex ${bubble.align} animate-fade-in ${bubble.delay}`}>
              <div className={`${bubble.width} rounded-2xl border border-zinc-800 bg-zinc-800/50 p-4`}>
                <div className="mb-2 h-2 w-3/4 rounded-full bg-zinc-700" />
                <div className="h-2 w-1/2 rounded-full bg-zinc-700/60" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-zinc-600">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            Encrypted
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            Real-time
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            Free forever
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        {[
          'top-[15%] left-[10%]',
          'top-[70%] right-[15%]',
          'bottom-[20%] left-[20%]',
          'top-[30%] right-[10%]',
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} h-1 w-1 rounded-full bg-zinc-600/40`}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthImpagePatern;
