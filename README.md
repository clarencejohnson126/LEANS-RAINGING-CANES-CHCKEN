# Lean’s · FRANKLIN Pilot

Digitaler Projekt-Pitch für einen vierwöchigen Coffee-&-Chicken-Pilot auf FRANKLIN Mannheim. Zielgruppe: MWSP, Flächenverantwortliche und Grundstückseigentümer. Die Website nutzt echte LOOPFEST-Aufnahmen als Proof of Concept und kennzeichnet Werbe- und KI-Konzeptmaterialien.

## Entwicklung

Node.js 22 LTS oder neuer empfohlen.

```sh
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm start
```

Next.js 16 (App Router), React, TypeScript, Tailwind CSS v4 und eigenes responsives CSS. Schriftdateien werden mit `next/font` beim Build eingebunden und anschließend lokal ausgeliefert. Kein Analytics, kein externer Videoplayer und kein externes Karten-Script. Interaktionen: mobile Navigation, Video-Start, Materialgalerie, Planungsdetails, vier auswählbare Suchräume, Kontaktlinks und Druckansicht.

## Vercel

1. GitHub-Repository `clarencejohnson126/LEANS-RAINGING-CANES-CHCKEN` in Vercel importieren.
2. Für einen ersten Preview-Deploy Branch `feature/mwsp-pilot-site` auswählen. Nach PR-Merge kann `main` der Production Branch sein.
3. Framework **Next.js**, Root Directory **./**. Standard-Build `npm run build`; keine eigene Output Directory.
4. Optional `NEXT_PUBLIC_SITE_URL=https://ihre-domain.de` setzen. Ohne diese Variable nutzt die Metadaten-Konfiguration die Vercel-Projektdomain, die Vercel-Deploymentdomain oder lokal `http://localhost:3000`.
5. Deploy ausführen. Assets werden vom Projekt selbst ausgeliefert.

Die Seite ist bewusst `noindex`, solange Betreiberanschrift und Rechtstexte fehlen. Vor öffentlichem Launch die TODOs unten erledigen und bei gewünschter Suchmaschinenindexierung `robots` in `src/app/layout.tsx` anpassen. Eine Preview funktioniert auch mit `noindex`.

## Inhalte ändern

- `src/config/brand.ts`: Markenname, kompakte Wortmarke, Descriptor, Claim. Der vollständige Markenname wird nur hier definiert. Wortmarke und Descriptor sind bewusste Kurzformen. Eingebrannter Text in Flyern/Videos bleibt Teil des Originalmaterials.
- `src/config/project.ts`: Laufzeit, Flächenbedarf, Ort, Ansprechpartner, bestätigte E-Mail/Telefon und Site-URL.
- `src/content/site.ts`: Navigation, fünf belegte Rezeptvarianten, vier Flyer-Combos, Projektstatus und Prüfpunkte.
- `src/content/locations.ts`: Suchraum-Texte, Quellen, Markierungen. Stand der Recherche: 05.10.2026.
- `src/app/page.tsx`: Storytelling-Texte und Abschnittsreihenfolge.
- `src/app/globals.css`: Farben, Typografie, Layout, Responsive- und Druckregeln. Bewegungen sind bewusst dezent; Reduced Motion deaktiviert Übergänge und Smooth Scrolling.

## Asset-Struktur

```
public/assets/
  loopfest/  # echte Eventbilder
  video/     # Event- und Promo-MP4, Poster als WebP
  food/      # aus der gelieferten Rezeptgrafik extrahierte Konzeptmotive
  flyer/     # bereitgestellte Vorder-/Rückseite als optimierte Kopie
  concept/   # ausdrücklich als KI-generiert markierte Zukunftsvision
  location/  # vom Nutzer gelieferter MWSP-Karten-Screenshot
```

Originale im übergeordneten Asset-Ordner wurden weder bearbeitet noch verschoben. `docs/assets-inventory.json` dokumentiert alle ursprünglich vorgefundenen Materialien mit Dateityp, Größe, Maßen, Videodaten und SHA-256. Die später gelieferte Karte ist separat in `docs/ASSET-ANALYSE.md` dokumentiert.

Neue Bilder als webgerechte Kopien hinzufügen, Alt-Texte und `next/image`-Dimensionen anpassen. KI-Bilder immer sichtbar als solche kennzeichnen. Rezeptmotive sind keine Belege für tatsächlich verkaufte Produktvarianten. Preise aus dem historischen Flyer werden nicht als verbindliche Pilotpreise dargestellt.

### Videos austauschen

`public/assets/video/loopfest.mp4` bzw. `promo.mp4` und das entsprechende `*-poster.webp` ersetzen. MP4/H.264 + AAC mit `faststart` verwenden. Seitenverhältnis hier 9:16. Videos starten nur durch Klick, `preload="none"`; kein Autoplay. Text unter dem Video entsprechend korrigieren. Bei geändertem Seitenverhältnis CSS anpassen.

## Standortrecherche

Die Karte verwendet die vom Nutzer bereitgestellte Kartenansicht als Hintergrund, lokal gespeichert; es werden keine Besucherdaten an einen Kartendienst geschickt. Nummern sind ungefähre Suchbereiche, **keine parzellenscharfen Ausweisungen, freien Flächen oder Genehmigungen**.

- Funari: B-Plan 71.52; Mischgebiete im südlichen Bereich zwischen Robert-Funari- und Bensheimer Straße. Nicht mit Funari Traumhaus gleichsetzen.
- Sullivan Süd: B-Plan 71.59, in Kraft seit 25.06.2026 laut amtlichem Verzeichnis. MI 1.1, MI 2, MI 3 unterscheiden sich von MI 1.2 (Parkgaragen). Durchführungsvertrag beachten.
- FRANKLIN Mitte: funktionaler Suchraum um die Nahversorgung, nicht pauschal als MI gekennzeichnet.
- Columbus: gewerblicher Suchraum; Teilflächen und Gastronomieeignung separat prüfen.

Primärquellen sind direkt in der Website verlinkt und in `docs/STANDORTRECHERCHE.md` dokumentiert. Der Verzeichnis-Auszug liegt in `docs/planning-register.json`. Private oder verkaufte Flächen sind nicht ausgeschlossen; Eigentümer werden erst nach Identifikation einer konkreten Fläche angesprochen. Es wurden keine Dritten kontaktiert.

## Vor öffentlicher Veröffentlichung

- Vollständigen rechtlichen Betreiber und ladungsfähige Anschrift in `/impressum` ergänzen; weitere einschlägige Angaben prüfen.
- `/datenschutz` an tatsächliches Hosting, Rechtsgrundlagen, Speicherdauern und Betroffenenrechte anpassen. Der aktuelle Inhalt ist deutlich als Entwurf markiert.
- Veröffentlichungsrechte für Personenaufnahmen, Markenmaterialien und die bereitgestellte MWSP-Kartengrafik abschließend klären. Quellenangabe ersetzt keine Lizenz.
- Projektstatus, Anhängerverfügbarkeit und Planungsstand vor dem Versand erneut prüfen.
- Kein konkreter Stellplatz und keine Genehmigung sind zugesagt; dies bleibt auch in der Website sichtbar.

## Qualitätssicherung

`docs/QA.md` dokumentiert Build, Lint, TypeScript, Browserprüfung, Assets und bekannte Grenzen. Die Runtime-Abhängigkeiten werden separat mit `npm audit --omit=dev` geprüft.
