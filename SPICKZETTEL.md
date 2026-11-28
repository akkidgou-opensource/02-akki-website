# Spickzettel AKKI-Website · 8 Stunden

Acht Blöcke. Arbeitet als Team, sprecht Zuständigkeiten ab und prüft jeden Zwischenstand, bevor ihr weitermacht.

| Block | Zeit | Thema |
|---|---:|---|
| 1 | 30 Min. | Team und Setup |
| 2 | 45 Min. | Inhalte und Seitenstruktur festlegen |
| 3 | 60 Min. | Startseite |
| 4 | 45 Min. | Früh online stellen |
| 5 | 90 Min. | Unterseiten |
| 6 | 60 Min. | Design und Handy-Ansicht |
| 7 | 60 Min. | Impressum, Datenschutz, Prüfung |
| 8 | 60 Min. | Feinschliff, Demo, Pitch |

Bleiben 30 Minuten Puffer.

## Vor dem Start · Zusammenarbeit vereinbaren

- Bestimmt, wer die Team-Kopie des Repositories verwaltet und wer den fertigen Stand prüft.
- Verteilt Aufgaben und benennt pro Datei eine zuständige Person. Bearbeitet dieselbe Datei nicht gleichzeitig.
- Arbeitet für jede unabhängige Änderung in einem eigenen Branch. Ändert `main` nie direkt.
- Verwendet nur öffentliche oder erfundene Testdaten, niemals echte Patientendaten.

## Block 1 · Team und Setup

Öffnet die Team-Kopie des Repositories in Claude Code oder Codex und gebt diesen Prompt ein:
```
Lies zuerst README.md und AGENTS.md. Dieses Projekt ist ein Prototyp für den AKKI Hackathon. Prüfe, ob Node.js ab Version 20 installiert ist, und erkläre in drei einfachen Sätzen, wie wir vorgehen. Fasse die Teamregeln zusammen: Aufgaben verteilen, pro Datei eine zuständige Person benennen, Änderungen auf einem Branch machen und vor dem Merge prüfen lassen.
```
**Fertig, wenn:** Node.js passt, die Team-Kopie auf dem Rechner liegt und alle wissen, wer Inhalte erstellt, wer den Agenten bedient und wer PRs prüft.

## Block 2 · Inhalte und Struktur (ohne Code)

Legt gemeinsam fest:
- Wer ist der AKKI, was macht er und für wen ist die Seite?
- Welche Seiten braucht ihr? Vorschlag: Start, Projekte, Treffen, Kontakt.
- Welche Texte und Bilder gibt es schon (siehe `daten/QUELLEN.md`)?
- Wer liefert die Inhalte und wer prüft sie?

Schreibt Stichpunkte in `inhalte.md`. **Fertig, wenn:** Seitenliste, Zuständigkeiten und Stichpunkte stehen. Nutzt keine echten Patientendaten.

## Block 3 · Startseite

Sprecht ab, wer `public/index.html` und `server.js` bearbeitet. Erstellt einen Branch für diese Aufgabe und gebt den Prompt ein:
```
Erstelle von main einen neuen Branch namens feature/startseite. Baue die Startseite als public/index.html (HTML, CSS und JavaScript in einer Datei) und einen kleinen server.js zum lokalen Ansehen. Nutze nur die Inhalte aus inhalte.md und erfinde nichts. Aufbau: Kopf mit Navigation, kurzer Einstieg, drei Kacheln zu den Schwerpunkten, Fußzeile. Schlicht, gut lesbar und mobil zuerst. Starte den Server und prüfe die Seite.
```
**Fertig, wenn:** die Startseite auf Laptop und Handy lesbar ist. Speichert einen Zwischenstand im Branch und bittet eine andere Person um Prüfung.

## Block 4 · Früh online stellen

Die zuständige Person aus dem Team kümmert sich ums Veröffentlichen. Sie legt nötige Konten selbst an und gibt Passwörter oder Schlüssel nicht an den Agenten weiter.
```
Erkläre mir Schritt für Schritt, wie ich diesen Ordner als statische Seite veröffentliche, und bereite alles Nötige im Projekt vor. Passwörter und Anmeldungen übernehme ich selbst. Veröffentliche nichts ohne meine Bestätigung.
```
**Fertig, wenn:** die Seite unter einer echten URL erreichbar ist und das Team sie geprüft hat.

## Block 5 · Unterseiten

Bestimmt für jede Seite eine zuständige Person. Wenn eine Datei schon bearbeitet wird, wartet mit Änderungen daran, bis sie geprüft und übernommen ist.
```
Lege die abgestimmten Unterseiten aus inhalte.md an, jede mit derselben Navigation und Fußzeile wie die Startseite. Für „Projekte“ nutze nur bestätigte Titel, Beschreibungen und Links. Erfinde keine Inhalte; markiere fehlende Texte sichtbar mit „Text folgt“.
```
**Fertig, wenn:** mindestens zwei Unterseiten online sind und eine andere Person die Links geprüft hat.

## Block 6 · Design und Handy-Ansicht

Lasst eine Person die Darstellung prüfen und notiert konkrete Punkte, bevor sie ändert:
```
Vereinheitliche das Design: eine Schriftfamilie, zwei Farben plus Grautöne, einheitliche Abstände. Prüfe die Seite bei 380 Pixel Breite und behebe alles, was überläuft. Achte auf ausreichenden Kontrast und Alternativtexte für Bilder. Nenne vorher die Dateien, die du ändern wirst.
```
**Fertig, wenn:** die Seite auf dem Handy ohne seitliches Scrollen funktioniert und eine andere Person sie geprüft hat.

## Block 7 · Impressum, Datenschutz, Prüfung

- Impressum und Datenschutzerklärung mit echten Angaben füllen. Die Inhalte kommen vom Team, nicht von der KI.
- Keine Formulare oder Analyse-Dienste einbauen, solange der Datenschutz dafür nicht geklärt ist.

```
Prüfe alle Seiten auf tote Links, fehlende Seitentitel, fehlende Beschreibung für Suchmaschinen und Rechtschreibung. Liste die Funde auf. Ändere nichts, bis ich die Liste freigegeben habe.
```
**Fertig, wenn:** das Team die Prüfliste durchgesehen und offene Punkte geklärt hat.

## Block 8 · Feinschliff, Demo, Pitch

- Prüft den letzten Stand und öffnet für die fertige Änderung einen Pull Request.
- Eine andere Person prüft den PR und testet die Website. Die zuständige Person führt den Merge erst danach aus.
- Stellt den geprüften Stand online und testet die URL auf zwei Geräten.
- Macht Screenshots als Backup.
- Bereitet den Pitch vor: Warum eine eigene Seite? Live-Rundgang, Entstehung und nächste Schritte.
