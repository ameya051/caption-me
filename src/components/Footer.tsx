import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
      <div className=" w-full flex mt-4 items-center justify-center   ">
        <h1 className="text-center text-5xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-700 dark:from-neutral-700 dark:to-neutral-900 select-none">
          CaptionMe
        </h1>
      </div>
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/" className="font-semibold text-xl">
                Caption<span className="text-primary">Me</span>
              </a>
            </div>
            <div className="text-muted-foreground text-sm">
              © {currentYear} CaptionMe. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
