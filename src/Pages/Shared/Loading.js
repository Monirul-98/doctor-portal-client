import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-32">
        <div className="w-40 h-40 border-t-4 border-b-4 border-secondary rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
