import Link from "next/link";
import { project } from "@/config/project";
import { brand } from "@/config/brand";
export const metadata = { title: `Datenschutz | ${brand.name}` };
export default function Privacy() {
  return (
    <main className="wrap legal">
      <Link href="/">← Zurück zum Projekt</Link>
      <h1>DATENSCHUTZ</h1>
      <p className="todo">
        Vorbereiteter Informationsbereich – noch keine vollständige
        Datenschutzerklärung. Vor öffentlicher Veröffentlichung an das
        tatsächliche Hosting anpassen.
      </p>
      <h2>Technische Umsetzung</h2>
      <p>
        Diese Website bindet keine Werbetracker ein. Bilder, Videos und
        Schriftdateien werden mit der Website ausgeliefert. Die Standortskizze
        verwendet keinen externen Kartendienst. Es gibt kein Kontaktformular.
      </p>
      <h2>Besucherstatistik mit Vercel Web Analytics</h2>
      <p>
        Wir verwenden Vercel Web Analytics, um Besucherzahlen und Seitenaufrufe
        auszuwerten. Die Auswertung zeigt zusammengefasste Statistiken, unter
        anderem zu besuchten Seiten, verweisenden Websites, ungefähren
        Herkunftsregionen, Browsern und Gerätetypen. Einzelne Besucher werden
        uns nicht namentlich angezeigt. Laut Vercel verwendet der Dienst keine
        Drittanbieter-Cookies; die Besucherkennung wird nach 24 Stunden
        verworfen.
      </p>
      <p>
        Weitere Informationen zur Datenverarbeitung bietet Vercel in den{" "}
        <a
          href="https://vercel.com/docs/analytics/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzhinweisen zu Web Analytics
        </a>
        .
      </p>
      <h2>Kontaktaufnahme</h2>
      <p>
        Der E-Mail-Link öffnet Ihr E-Mail-Programm. Ihre Nachricht wird an{" "}
        <a href={`mailto:${project.contact.email}`}>{project.contact.email}</a>{" "}
        gesendet. Verantwortlicher Ansprechpartner für das Projekt ist{" "}
        {project.contact.name}.
      </p>
      <h2>Hosting</h2>
      <p className="todo">
        TODO: Tatsächlich eingesetzten Hostinganbieter, Verarbeitung technischer
        Zugriffsdaten, Zwecke, Rechtsgrundlagen, Speicherdauer, Empfänger und
        gegebenenfalls Drittlandübermittlungen ergänzen. Hostingkonfiguration
        und vertragliche Grundlagen prüfen.
      </p>
      <h2>Verantwortlicher und Rechte</h2>
      <p className="todo">
        TODO: Vollständige Kontaktdaten des Verantwortlichen, anwendbare
        Betroffenenrechte, zuständige Aufsichtsbehörde und Informationen zur
        Bearbeitung von Kontaktanfragen ergänzen und rechtlich prüfen lassen.
      </p>
    </main>
  );
}
