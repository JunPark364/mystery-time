"use client";

import { Icon } from "@iconify/react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex flex-col items-end rounded-lg bg-white px-2 pb-2">
        <Icon
          icon="ic:round-close"
          onClick={onClose}
          className="cursor-pointer m-1"
          style={{ fontSize: "24px", color: "#757575" }}
        />

        {children}
      </div>
    </div>
  );
}
