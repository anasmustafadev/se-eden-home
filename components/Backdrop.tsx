import React, { ReactNode } from "react";

interface props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Backdrop = ({ isOpen, onClose, children }: props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative z-50 rounded-lg shadow-lg p-6 w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
        {children}
      </div>
    </div>
  );
};

export default Backdrop;
