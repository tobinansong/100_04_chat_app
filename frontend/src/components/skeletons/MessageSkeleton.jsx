const MessageSkeleton = () => {
  const skeletonMessages = [
    { align: "chat-start", widths: ["w-40"] },
    { align: "chat-start", widths: ["w-56"] },
    { align: "chat-end", widths: ["w-48"] },
    { align: "chat-start", widths: ["w-32"] },
    { align: "chat-end", widths: ["w-60"] },
    { align: "chat-end", widths: ["w-36"] },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-base-100/50 p-4 space-y-1">
      {skeletonMessages.map((msg, i) => (
        <div key={i} className={`chat ${msg.align}`}>
          <div className="chat-image avatar">
            <div className="w-8 rounded-full">
              <div className="skeleton h-full w-full rounded-full" />
            </div>
          </div>
          <div className="chat-header">
            <div className="skeleton h-3 w-12 rounded" />
          </div>
          <div className="chat-bubble bg-transparent p-0">
            {msg.widths.map((w, j) => (
              <div key={j} className={`skeleton h-4 ${w} rounded`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
