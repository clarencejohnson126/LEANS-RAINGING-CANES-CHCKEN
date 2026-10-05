"use client";
import { useRef, useState } from "react";
import { brand } from "@/config/brand";
import { navigation } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label={`${brand.name} – Start`}>
        <span className="crown" aria-hidden="true">
          ♛
        </span>
        <span>
          {brand.name}
          <small>{brand.tagline}</small>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {navigation.map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#kontakt">
        Platz für Neues? <span aria-hidden="true">↗</span>
      </a>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
      >
        {open ? "Schließen ×" : "Menü ☰"}
      </button>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Mobile Navigation"
        >
          {[...navigation, ["Kontakt", "kontakt"]].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
export function Video({
  name,
  title,
  caption,
}: {
  name: string;
  title: string;
  caption: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);
  async function play() {
    setStarted(true);
    try {
      await ref.current?.play();
    } catch {
      setError(true);
    }
  }
  return (
    <figure className={`video-card ${name}`}>
      <div className="video-frame">
        <video
          ref={ref}
          controls={started}
          playsInline
          preload="none"
          poster={`/assets/video/${name}-poster.webp`}
          aria-label={title}
          onError={() => setError(true)}
        >
          <source src={`/assets/video/${name}.mp4`} type="video/mp4" />
        </video>
        {!started && (
          <button
            className="play"
            onClick={play}
            aria-label={`${title} abspielen`}
          >
            <span aria-hidden="true">▶</span>
            <span>Film ansehen</span>
          </button>
        )}
      </div>
      <figcaption>{caption}</figcaption>
      {error && (
        <p>
          Das Video lässt sich hier nicht abspielen.{" "}
          <a href={`/assets/video/${name}.mp4`}>Videodatei öffnen</a>
        </p>
      )}
    </figure>
  );
}
export function PrintButton() {
  return (
    <button className="text-link" onClick={() => window.print()}>
      Projektübersicht drucken <span aria-hidden="true">↗</span>
    </button>
  );
}
