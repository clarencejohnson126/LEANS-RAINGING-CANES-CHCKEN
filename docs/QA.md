# Qualitätssicherung · 05.10.2026

## Erfolgreich geprüft

- `npm install`: Lockfile vorhanden, Node 22.
- `npm run build`: Next.js-Produktionsbuild erfolgreich, alle Seiten statisch generiert.
- `npm run lint`: keine Fehler oder Warnungen.
- `npm run typecheck`: keine TypeScript-Fehler.
- `npm audit --omit=dev`: keine bekannten Runtime-Sicherheitslücken.
- Headless Chrome / Playwright: 1440, 768, 390 und 320 CSS-Pixel. Kein horizontaler Seitenüberlauf.
- Desktop-Hero, mobile Ansicht, Konzeptbild und Kartenbereich visuell geprüft.
- Mobile Navigation öffnet, navigiert und schließt.
- Karte schaltet per Button auf Sullivan Süd, inklusive zugehöriger Quellen und Hinweise.
- Eventvideo und Promo spielen nach Benutzeraktion; tatsächlicher Zeitfortschritt geprüft.
- Keine Browser-JavaScriptfehler oder fehlgeschlagenen HTTP-Ressourcen während des Tests.
- Alle Sprunglinks besitzen ein Ziel; kein Bild ohne Alt-Attribut.
- Reduced Motion: Smooth Scrolling ist ausgeschaltet.
- Impressum und Datenschutz liefern HTTP 200.
- Beide MP4-Dateien: lokale Auslieferung, H.264/AAC, faststart und Poster, kein Autoplay, preload none.
- Originaldateien per SHA-256 gegen das Inventar geprüft; unverändert.

Die strukturierten Browserergebnisse liegen in `browser-check.json`.

## Grenzen / offene Punkte

- Keine vollständige WCAG-Zertifizierung und kein separater realer iOS-/Safari-Gerätetest.
- Impressum und Datenschutz sind ausdrücklich markierte Entwürfe; rechtlicher Betreiber und Anschrift fehlen.
- Veröffentlichungsrechte und tatsächliche Eignung einer konkreten Fläche bleiben Betreiber-/Eigentümerprüfungen.
- Der vollständige npm-Audit meldet fünf transitive **Entwicklungsabhängigkeits**-Einträge zur derzeit noch ungepatchten `braces`-Kette von `eslint-config-next` (braces, micromatch, fast-glob, Next-Plugin und Config). Das betrifft die lokale Lint-Werkzeugkette, nicht die Runtime. Kein erzwungenes Next-Downgrade vorgenommen.

## Gestaltungsrevision

Auf Wunsch des Betreibers: schwarzer Grund, Rot/Weiß/Gelb, Permanent Marker für Brush-Headlines und Kaushan Script für den Markenschriftzug, Manrope für Lesetexte. Doppeltes Porträt durch eigenständige Eventaufnahme ersetzt. Gasflasche im bezeichneten Foto durch CSS-Bildausschnitt ausgeschlossen; Original unverändert. Promo-Film separat sichtbar. Sichtbare Herkunftskennzeichnung lautet „Konzeptvisualisierung“. Telefonlink zusätzlich auf korrektes Ziffernformat geprüft.
