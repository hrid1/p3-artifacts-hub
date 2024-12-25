import React from "react";

const Spiner = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[calc(100vh-288px)]">
        <div className="rounded-md h-12 w-12 border-4 border-t-4 border-amber-300 animate-spin absolute"></div>
      </div>
    </div>
  );
};

export default Spiner;
