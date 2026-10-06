"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";

export function PhotoZoom({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <div className="photo-zoom">
      {children}
      <button
        className="photo-zoom-trigger"
        aria-label={`Bild vergrößern: ${alt}`}
        onClick={() => dialog.current?.showModal()}
      >
        <span aria-hidden="true">⤢</span>
      </button>
      <dialog
        className="image-dialog"
        ref={dialog}
        aria-label={alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="image-dialog-close"
          onClick={() => dialog.current?.close()}
          autoFocus
          aria-label="Bild schließen"
        >
          Schließen ×
        </button>
        <Image src={src} alt={alt} width={1800} height={3200} unoptimized />
      </dialog>
    </div>
  );
}
