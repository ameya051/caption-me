import React from "react";

const Accordion: React.FC = () => {
  return (
    <div className="m-2 space-y-2">
      <div
        className="group flex flex-col gap-2 rounded-lg bg-bg-gradient-from/70 p-5 text-white"
        tabIndex={1}
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span> How does it work? </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          All you need to do is upload a video of size not bigger than 10
          megabytes. After that, sit back and watch your video being
          'captionified'!
        </div>
      </div>

      <div
        className="group flex flex-col gap-2 rounded-lg bg-bg-gradient-from/70 p-5 text-white"
        tabIndex={2}
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span> What type of device do I require? </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          You can use our website from any Laptop/PC, Tablet or Smartphone.
        </div>
      </div>

      <div
        className="group flex flex-col gap-2 rounded-lg bg-bg-gradient-from/70 p-5 text-white"
        tabIndex={3}
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span> Is there any hidden cost to it? </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          Absolutely not! Although you will be restricted to upload videos not
          more than two times within a week from your device.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
