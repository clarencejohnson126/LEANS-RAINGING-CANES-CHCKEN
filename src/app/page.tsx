import Image from "next/image";
import { LocationMap } from "@/components/location-map";
import Link from "next/link";
import { Header, PrintButton, Video } from "@/components/interactive";
import { brand } from "@/config/brand";
import { project } from "@/config/project";
import {
  checks,
  combos,
  flavors,
  questions,
  ready,
  requirements,
} from "@/content/site";
const Arrow = () => <span aria-hidden="true">↗</span>;
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="eyebrow">{children}</p>
);
export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Zum Inhalt
      </a>
      <Header />
      <main id="main">
        <section className="hero wrap" id="top">
          <div className="hero-copy">
            <Eyebrow>
              <i /> EIN FOOD-PROJEKT AUS MANNHEIM
            </Eyebrow>
            <h1>
              AUS FRANKLIN.
              <br />
              <span>FÜR FRANKLIN.</span>
            </h1>
            <p className="hero-note">
              Erst ein Fest. Jetzt der nächste Schritt.
            </p>
            <p className="hero-description">
              Beim LOOPFEST ausprobiert. Von der Community angenommen.
              Ausverkauft. Jetzt möchten wir unser Chicken-Konzept{" "}
              <strong>vier Wochen lang auf FRANKLIN</strong> erproben.
            </p>
            <div className="actions">
              <a className="button red" href="#pilot">
                Das Pilotprojekt <Arrow />
              </a>
              <a className="text-link" href="#standort">
                Was wir suchen <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-bottom">
              <span className="location-dot" aria-hidden="true">
                ⌖
              </span>
              <span>
                Hier hat alles angefangen.
                <br />
                <strong>FRANKLIN, Mannheim.</strong>
              </span>
              <span className="handwritten">
                klein starten.
                <br />
                groß denken.
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-main">
              <Image
                src="/assets/loopfest/approved-community.webp"
                alt="Besucherinnen und Besucher am Chicken-Stand beim LOOPFEST auf FRANKLIN"
                fill
                priority
                sizes="(max-width: 760px) 90vw, 48vw"
              />
              <span className="photo-label">
                ECHTE MOMENTE. ECHTES LOOPFEST.
              </span>
            </div>
            <div className="sold-sticker">
              <span>ERSTER TEST</span>
              <strong>
                AUS
                <br />
                VERKAUFT!
              </strong>
              <span>LOOPFEST · FRANKLIN</span>
            </div>
            <figure className="photo-small">
              <Image
                src="/assets/loopfest/approved-team.webp"
                alt="Frische Chicken-Portionen werden beim LOOPFEST gemeinsam angerichtet"
                width={390}
                height={540}
              />
              <figcaption>Frisch gemacht. Mitten auf FRANKLIN.</figcaption>
            </figure>
            <span className="hero-star" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>
        <div className="facts-bar">
          <div className="wrap facts">
            <div>
              <strong>04</strong>
              <span>WOCHEN PILOT</span>
            </div>
            <div>
              <strong>
                30–50 <small>m²</small>
              </strong>
              <span>GESUCHTE AUSSENFLÄCHE</span>
            </div>
            <div>
              <strong>01</strong>
              <span>MOBILER VERKAUFSANHÄNGER</span>
            </div>
            <div>
              <strong>COFFEE + CHICKEN</strong>
              <span>EIN PLATZ. ZWEI TAGESZEITEN.</span>
            </div>
          </div>
        </div>
        <section className="section wrap proof" id="loopfest">
          <div className="section-heading">
            <div>
              <Eyebrow>01 / DER PROOF OF CONCEPT</Eyebrow>
              <h2>
                EIN EVENT.
                <br />
                EIN TEST. <em>AUSVERKAUFT.</em>
              </h2>
            </div>
            <div className="heading-aside">
              <p>
                Keine Idee vom Reißbrett. Beim LOOPFEST haben Menschen aus dem
                Quartier unser Chicken gekauft – und uns Mut für den nächsten
                Schritt gemacht.
              </p>
              <p className="source-note">
                Ausverkauf und positive Resonanz: Rückblick des Betreibers.
                Fotos und Video: Originalaufnahmen vom Event.
              </p>
            </div>
          </div>
          <div className="proof-grid">
            <figure className="proof-photo">
              <div className="approved-proof-crop">
                <Image
                  src="/assets/loopfest/approved-stand.webp"
                  alt="Das Team bereitet Chicken am mobilen LOOPFEST-Stand zu"
                  width={1200}
                  height={1600}
                  sizes="(max-width:760px) 90vw, 40vw"
                />
              </div>
              <figcaption>
                <span>01 — MITTEN IM QUARTIER</span>
                <span>LOOPFEST ↗</span>
              </figcaption>
            </figure>
            <figure className="proof-photo second">
              <Image
                src="/assets/loopfest/approved-lean.webp"
                alt="Ein junger Mitwirkender neben dem bedruckten Aufsteller des Chicken-Projekts"
                width={1126}
                height={2000}
                sizes="(max-width:760px) 90vw, 28vw"
              />
              <figcaption>02 — VON DER IDEE ZUM ERSTEN STAND</figcaption>
            </figure>
            <div className="proof-quote">
              <span aria-hidden="true">“</span>
              <blockquote>
                Was als gemeinsames Food-Projekt mit meinem Sohn begann, wurde
                auf FRANKLIN Realität.
              </blockquote>
              <p>
                Clarence Johnson
                <br />
                <small>Initiator des Projekts</small>
              </p>
              <div className="proof-seal">
                HIER
                <br />
                FÄNGT’S AN.<span aria-hidden="true">↙</span>
              </div>
            </div>
          </div>
        </section>
        <section className="film-section">
          <div className="wrap film-grid">
            <div className="film-copy">
              <Eyebrow>UNGESTELLT. UNGEFILTERT. MITTENDRIN.</Eyebrow>
              <h2>
                SO HAT
                <br />
                ALLES
                <br />
                <span>ANGEFANGEN.</span>
              </h2>
              <p>
                Ein Stand. Frisch paniertes Chicken. Menschen aus der
                Nachbarschaft. Ein kleiner Einblick in unseren ersten
                Praxistest.
              </p>
              <span className="handwritten">12 Sekunden echtes Leben ↗</span>
            </div>
            <Video
              name="loopfest"
              title="Originalaufnahme vom LOOPFEST"
              caption="ORIGINALAUFNAHME · LOOPFEST AUF FRANKLIN · CA. 12 SEK."
            />
            <div className="film-side">
              <span className="huge-star" aria-hidden="true">
                ✳
              </span>
              <p>
                GUTES ESSEN
                <br />
                BRINGT
                <br />
                MENSCHEN
                <br />
                ZUSAMMEN.
              </p>
              <span>Das möchten wir weiterdenken.</span>
            </div>
          </div>
        </section>
        <section className="promo-section" id="promo">
          <div className="wrap promo-layout">
            <div className="promo-copy">
              <Eyebrow>DER PROMO-FILM</Eyebrow>
              <h2>
                CRISPY. JUICY.
                <br />
                <em>MADE BY LEAN.</em>
              </h2>
              <p className="promo-brand">{brand.name}</p>
              <p>
                Unser Chicken. Unsere Marke. Unsere Idee in 30 Sekunden. Der
                Promo-Film zeigt, wohin die Reise gehen soll.
              </p>
              <span className="concept-label-inline">
                PROMO · KONZEPTVISUALISIERUNG
              </span>
            </div>
            <Video
              name="promo"
              title="Promo-Video der Marke"
              caption={`${brand.name} · PROMO-FILM · 30 SEK.`}
            />
          </div>
        </section>
        <section className="section wrap food" id="konzept">
          <div className="section-heading">
            <div>
              <Eyebrow>02 / WENIG AUF DER KARTE. VIEL DAHINTER.</Eyebrow>
              <h2>
                FÜNF MAL CRUNCH.
                <br />
                <em>EIN KLARES KONZEPT.</em>
              </h2>
            </div>
            <div className="heading-aside">
              <p>
                Knusprige Chicken Strips, Pommes und Signature Sauce. Ein
                fokussiertes Angebot mit fünf Rezeptvarianten. Dazu alkoholfreie
                Getränke. Kein Alkohol.
              </p>
              <p className="source-note">
                Varianten aus den vorhandenen Rezeptunterlagen. Abbildungen:
                Konzeptvisualisierungen aus der Rezeptgrafik.
              </p>
            </div>
          </div>
          <div className="food-cards">
            {flavors.map((f, i) => (
              <article className="food-card" key={f.image}>
                <div className="food-image">
                  <Image
                    src={`/assets/food/${f.image}.webp`}
                    alt={`Konzeptvisualisierung: ${f.name}`}
                    width={630}
                    height={690}
                    sizes="(max-width:760px) 70vw, 22vw"
                  />
                  <span>0{i + 1}</span>
                </div>
                <div className="food-info">
                  <h3>{f.name}</h3>
                  <p>{f.note}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="menu-details">
            <div>
              <h3>DIE COMBOS</h3>
              <p>
                Aus dem bestehenden Flyer. Die Pilotkarte wird vor dem Start
                abgestimmt.
              </p>
            </div>
            <div className="combo-grid">
              {combos.map(([n, d]) => (
                <div key={n}>
                  <strong>{n}</strong>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
          <details className="materials">
            <summary>
              Ein Blick in die Originalunterlagen{" "}
              <span aria-hidden="true">+</span>
            </summary>
            <div className="materials-grid">
              <a
                href="/assets/flyer/front.webp"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/flyer/front.webp"
                  alt="Vorhandener Markenflyer, Vorderseite – Werbegestaltung"
                  width={464}
                  height={576}
                />
                Markenflyer ↗
              </a>
              <a
                href="/assets/flyer/menu.webp"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/flyer/menu.webp"
                  alt="Bestehender Menüflyer mit Basic, Crunch Combo, Big Boy Box und Family Pack"
                  width={464}
                  height={576}
                />
                Bisheriges Menü · keine verbindliche Pilotpreisliste ↗
              </a>
              <div>
                <p>
                  Werbematerialien / Konzeptdarstellungen. Diese Motive
                  dokumentieren die Markenidee, nicht den Eventbetrieb.
                </p>
              </div>
            </div>
          </details>
        </section>
        <section
          className="day-section"
          aria-label="Coffee und Chicken im Tagesverlauf"
        >
          <div className="wrap day-grid">
            <div>
              <Eyebrow>MORGENS</Eyebrow>
              <h2>
                BUT FIRST,
                <br />
                <span>COFFEE.</span>
              </h2>
              <p>
                Ein guter Start für das Quartier.
                <br />
                Ein kleines, bewusst kompaktes Coffee-Angebot.
              </p>
              <svg className="cup" viewBox="0 0 140 110" aria-hidden="true">
                <path d="M25 32h70v35c0 40-70 40-70 0zM95 39h15c28 0 26 36-15 35M18 99h87M44 22c-12-12 10-13 0-23M67 22c-12-12 10-13 0-23" />
              </svg>
            </div>
            <div>
              <Eyebrow>MITTAGS & ABENDS</Eyebrow>
              <h2>
                THEN COMES
                <br />
                <span>THE CRUNCH.</span>
              </h2>
              <p>
                Chicken Strips, Pommes und Sauce.
                <br />
                Streetfood mit einem klaren Fokus.
              </p>
              <span className="day-star" aria-hidden="true">
                ✳
              </span>
            </div>
          </div>
          <p className="day-note">
            Ein Standort, zwei Nutzungssituationen. Geplantes Tageskonzept –
            noch keine verbindlichen Öffnungszeiten.
          </p>
        </section>
        <section className="section wrap pilot" id="pilot">
          <div className="section-heading">
            <div>
              <Eyebrow>03 / DER NÄCHSTE SCHRITT</Eyebrow>
              <h2>
                VIER WOCHEN.
                <br />
                ECHTE <em>ERKENNTNISSE.</em>
              </h2>
            </div>
            <div className="heading-aside">
              <p>
                Ein gemieteter Verkaufsanhänger. Ein Standort auf FRANKLIN. Ein
                bewusst begrenzter Pilot, um aus einem erfolgreichen Event einen
                belastbaren Alltagstest zu machen.
              </p>
            </div>
          </div>
          <div className="pilot-grid">
            <div className="four">
              <strong>4</strong>
              <span>
                WOCHEN, UM
                <br />
                WEITERZUDENKEN.
              </span>
              <div className="handwritten">testen. lernen. entscheiden.</div>
            </div>
            <div className="pilot-questions">
              <h3>WAS WIR HERAUSFINDEN MÖCHTEN</h3>
              {questions.map((q, i) => (
                <div key={q}>
                  <span>0{i + 1}</span>
                  <p>{q}</p>
                  <span aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ready-panel">
            <div>
              <Eyebrow>DER STAND HEUTE</Eyebrow>
              <h3>VIEL IST VORBEREITET.</h3>
              <p>
                Konkrete Mietmöglichkeiten sind recherchiert. Der Anhänger ist
                noch nicht angemietet. Die Coffee-Erweiterung ist Teil des
                Pilotkonzepts.
              </p>
            </div>
            <ul>
              {ready.map((r) => (
                <li key={r}>
                  <span aria-hidden="true">✓</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="missing">
              <span>NOCH OFFEN</span>
              <strong>
                DER PASSENDE
                <br />
                PLATZ.
              </strong>
              <a href="#standort">
                Genau darum geht’s <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
        <section className="vision">
          <Image
            className="vision-desktop"
            src="/assets/concept/trailer.webp"
            alt="Zukunftsvision eines belebten Chicken-Pop-ups – kein realer Anhänger und kein bestätigter Standort"
            width={1672}
            height={941}
            sizes="100vw"
          />
          <Image
            className="vision-mobile"
            src="/assets/concept/trailer-mobile.webp"
            alt="Konzeptvisualisierung: Chicken-Pop-up mit Gästen – keine reale Standortaufnahme"
            width={941}
            height={1672}
            sizes="100vw"
          />
          <div className="vision-overlay">
            <span className="concept-label">KONZEPTVISUALISIERUNG</span>
            <h2>
              EIN KLEINER ORT.
              <br />
              VIEL <em>BEGEGNUNG.</em>
            </h2>
            <p>
              So könnte sich die Idee anfühlen. Kein reales Anhängermodell, kein
              zugesagter Standort.
            </p>
          </div>
        </section>
        <section className="section wrap location" id="standort">
          <div className="section-heading">
            <div>
              <Eyebrow>04 / WAS WIR SUCHEN</Eyebrow>
              <h2>
                KEIN LADENLOKAL.
                <br />
                <em>EIN PLATZ ZUM STARTEN.</em>
              </h2>
            </div>
            <div className="heading-aside">
              <p>
                Eine kleine Außenfläche für einen mobilen Verkaufsanhänger.
                Temporär, kompakt und rückbaubar. Für diesen ersten Pilot
                bewusst nur auf FRANKLIN.
              </p>
            </div>
          </div>
          <div className="location-grid">
            <div className="site-plan">
              <div className="plan-title">
                <strong>{project.area}</strong>
                <span>GESUCHTE ZIELGRÖSSE</span>
              </div>
              <div className="plan-boundary">
                <div className="customers">
                  <span>○　○　○</span>KUNDEN- & WARTEBEREICH
                </div>
                <div className="service">↓ VERKAUFSSEITE ↓</div>
                <div className="trailer">
                  <span>{brand.wordmark}</span>
                  <small>MOBILER VERKAUFSANHÄNGER</small>
                </div>
                <div className="technical">TECHNIK / ZUGANG</div>
              </div>
              <div className="plan-access">← SICHERE ZU- & ABWEGUNG →</div>
              <p>
                Prinzipdarstellung, nicht maßstäblich. Tatsächlicher Platzbedarf
                und freie Wege abhängig von Anhänger und Standort.
              </p>
            </div>
            <div className="requirements">
              {requirements.map(([h, p], i) => (
                <div key={h}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{h}</h3>
                    <p>{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <LocationMap />
        </section>
        <section className="responsibility">
          <div className="wrap responsibility-grid">
            <div>
              <Eyebrow>05 / MIT VERANTWORTUNG GEPLANT</Eyebrow>
              <h2>
                TEMPORÄR HEISST
                <br />
                NICHT <em>PROVISORISCH.</em>
              </h2>
              <p>
                „Durch meinen beruflichen Hintergrund im Bau- und
                Projektmanagement, unter anderem als Bauleiter, ist mir wichtig,
                dass der Pilot technisch und organisatorisch sauber umgesetzt
                wird.“
              </p>
              <span className="signature">Clarence Johnson</span>
            </div>
            <div className="check-list">
              {checks.map(([h, p]) => (
                <details key={h}>
                  <summary>
                    {h}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{p}</p>
                </details>
              ))}
              <p className="responsibility-note">
                Alle erforderlichen Anforderungen werden vor Betriebsaufnahme
                gemeinsam mit Eigentümer und zuständigen Stellen geprüft und
                umgesetzt.
              </p>
            </div>
          </div>
        </section>
        <section className="section wrap partner">
          <Eyebrow>06 / GEMEINSAM DEN NÄCHSTEN SCHRITT MACHEN</Eyebrow>
          <div className="partner-grid">
            <h2>
              AM LIEBSTEN
              <br />
              <em>GEMEINSAM.</em>
              <span className="handwritten">mit der MWSP.</span>
            </h2>
            <div>
              <p className="lead">
                Nach dem positiven Austausch mit Frau Lösch möchten wir zunächst
                gemeinsam mit der MWSP prüfen, ob sich für vier Wochen eine
                kleine geeignete Fläche finden lässt.
              </p>
              <p>
                Eine erste Einschätzung zu einem möglichen Standort, den
                Rahmenbedingungen und dem weiteren Abstimmungsweg wäre der
                nächste wertvolle Schritt.
              </p>
              <div className="plan-b">
                <strong>Und falls im eigenen Bestand nichts passt?</strong>
                <p>
                  Dann würden uns auch Hinweise oder Kontakte zu geeigneten
                  Grundstückseigentümern und Flächenverantwortlichen auf
                  FRANKLIN sehr helfen.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="contact" id="kontakt">
          <div className="wrap">
            <Eyebrow>PLATZ FÜR EINEN NEUEN IMPULS?</Eyebrow>
            <h2>
              UNS FEHLEN KEINE IDEEN.
              <br />
              UNS FEHLEN <span>{project.area}.</span>
            </h2>
            <div className="contact-bottom">
              <div>
                <p>
                  Für vier Wochen. Auf FRANKLIN.
                  <br />
                  Lassen Sie uns gemeinsam einen passenden Platz finden.
                </p>
                <strong>{project.contact.name}</strong>
                <span className="contact-brand">{brand.name}</span>
              </div>
              <div className="contact-actions">
                {project.contact.email ? (
                  <a
                    className="button cream"
                    href={`mailto:${project.contact.email}?subject=${encodeURIComponent("Flächenvorschlag für den FRANKLIN-Pilot")}`}
                  >
                    Fläche vorschlagen <Arrow />
                  </a>
                ) : (
                  <p className="contact-pending">
                    Persönlicher Kontakt über Clarence Johnson.
                    <br />
                    <small>
                      E-Mail und Telefon werden vor Veröffentlichung ergänzt.
                    </small>
                  </p>
                )}
                {project.contact.phone && (
                  <a
                    className="text-link"
                    href={`tel:${project.contact.phone.replace(/[^+\d]/g, "")}`}
                  >
                    {project.contact.phone}
                  </a>
                )}
                <PrintButton />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap footer">
        <a className="footer-brand" href="#top">
          {brand.name}
          <span>{brand.tagline}</span>
        </a>
        <p>Ein lokales Projekt. Ein bewusster nächster Schritt.</p>
        <div>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <a href="#top" aria-label="Zurück nach oben">
            ↑
          </a>
        </div>
      </footer>
    </>
  );
}
