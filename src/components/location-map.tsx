"use client";
import Image from "next/image";
import { useState } from "react";
import { locations, mapSources } from "@/content/locations";
export function LocationMap() {
  const [selected, setSelected] = useState(0);
  const place = locations[selected];
  return (
    <div className="map-section" id="karte">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FRANKLIN / UNSERE STANDORTSUCHE</p>
          <h2>
            HIER KÖNNTEN WIR
            <br />
            <em>INS GESPRÄCH KOMMEN.</em>
          </h2>
        </div>
        <div className="heading-aside">
          <p>
            Vier Suchbereiche, abgeleitet aus offiziellen Planunterlagen. Unser
            Fokus: eine passende Außenfläche in einem gewerblich oder gemischt
            genutzten Umfeld.
          </p>
          <p>
            <strong>Auch bereits verkaufte Grundstücke kommen infrage.</strong>{" "}
            Dann möchten wir mit dem jeweiligen Eigentümer über den temporären
            Pilot sprechen.
          </p>
        </div>
      </div>
      <div className="map-layout">
        <div>
          <div className="map-canvas">
            <Image
              src="/assets/location/franklin-map.webp"
              alt="Übersicht von FRANKLIN: Funari im Südwesten, FRANKLIN Mitte im Zentrum, Sullivan im Osten und Columbus entlang der B38 im Süden. Die nummerierten Schaltflächen markieren ungefähre Suchbereiche."
              width={1266}
              height={1057}
              sizes="(max-width:760px) 100vw, 60vw"
            />
            {locations.map((p, i) => (
              <button
                key={p.id}
                className={`map-pin ${selected === i ? "selected" : ""}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                onClick={() => setSelected(i)}
                aria-label={`Suchbereich ${p.number}: ${p.title}`}
                aria-pressed={selected === i}
                aria-controls="map-detail"
              >
                {p.number}
              </button>
            ))}
            <span className="map-badge">
              SUCHRÄUME · KEINE FREIEN PARZELLEN
            </span>
          </div>
          <p className="map-credit">
            Kartengrundlage: vom Betreiber bereitgestellter Screenshot der{" "}
            <a href={mapSources.interactive} target="_blank" rel="noreferrer">
              MWSP / FRANKLIN-Karte ↗
            </a>
            . Eigene Suchraum-Markierungen; keine amtlichen Gebietsgrenzen.
          </p>
        </div>
        <div className="map-information">
          <div
            className="map-tabs"
            role="group"
            aria-label="Suchbereich auswählen"
          >
            {locations.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
                aria-controls="map-detail"
              >
                <span>{p.number}</span>
                {p.title}
              </button>
            ))}
          </div>
          <div
            id="map-detail"
            className="map-detail"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="map-tag">{place.tag}</span>
            <h3>{place.title}</h3>
            <p className="map-address">{place.location}</p>
            <p>{place.finding}</p>
            <p className="map-proposal">{place.proposal}</p>
            <details key={place.id}>
              <summary>
                Was vor einer Anfrage zu prüfen ist{" "}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{place.caveat}</p>
            </details>
            <a
              className="text-link"
              href={place.source}
              target="_blank"
              rel="noreferrer"
            >
              {place.sourceLabel} ↗
            </a>
            {place.id === "sullivan" && (
              <a
                className="map-plan-link"
                href={mapSources.sullivanPlan}
                target="_blank"
                rel="noreferrer"
              >
                Amtliche Planzeichnung öffnen ↗
              </a>
            )}
            <small>{place.status}</small>
          </div>
        </div>
      </div>
      <div className="map-disclaimer">
        <strong>Suchvorschläge, keine Standortzusagen.</strong>
        <p>
          Illustrative Standortüberlegung – Verfügbarkeit und Eignung
          vorbehaltlich Prüfung durch MWSP, Eigentümer und zuständige Stellen.
          Die Markierungen zeigen ungefähre Suchbereiche, keine vermessenen
          Standplätze oder Grenzen von Misch- und Gewerbegebieten. Ein
          Planungsgebiet allein begründet keine Genehmigung für den mobilen
          Betrieb.
        </p>
      </div>
      <div className="map-links">
        <span>RECHERCHESTAND: 05.10.2026</span>
        <a href={mapSources.register} target="_blank" rel="noreferrer">
          Städtisches Planverzeichnis ↗
        </a>
        <a href={mapSources.interactive} target="_blank" rel="noreferrer">
          Offizielle interaktive Karte ↗
        </a>
      </div>
    </div>
  );
}
