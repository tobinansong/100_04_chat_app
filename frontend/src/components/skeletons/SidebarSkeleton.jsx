import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="flex h-full w-20 flex-col border-r border-base-300 bg-base-100 lg:w-72">
      <div className="border-b border-base-300 p-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-base-content/70" />
          <span className="hidden text-sm font-semibold text-base-content lg:block">
            Contacts
          </span>
        </div>

        <div className="mt-3 hidden lg:block">
          <div className="skeleton h-9 w-full rounded-lg" />
        </div>

        <div className="mt-3 hidden items-center gap-2 lg:flex">
          <div className="skeleton h-4 w-4 rounded" />
          <div className="skeleton h-3 w-28 rounded" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {skeletonContacts.map((_, i) => (
          <div key={i} className="flex w-full items-center gap-3 p-3">
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton h-10 w-10 rounded-full" />
            </div>
            <div className="hidden min-w-0 lg:block">
              <div className="skeleton mb-1.5 h-3.5 w-28 rounded" />
              <div className="skeleton h-3 w-16 rounded" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
