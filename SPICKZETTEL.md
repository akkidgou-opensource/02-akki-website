# Spickzettel AKKI-Website · 8 Stunden

Acht Blöcke. Jeden Prompt in Claude Code kopieren, das Ergebnis prüfen, dann weiter.

| Block | Zeit | Thema |
|---|---|---|
| 1 | 30 Min. | Setup |
| 2 | 45 Min. | Inhalte und Seitenstruktur festlegen |
| 3 | 60 Min. | Startseite |
| 4 | 45 Min. | Früh online stellen |
| 5 | 90 Min. | Unterseiten |
| 6 | 60 Min. | Design und Handy-Ansicht |
| 7 | 60 Min. | Impressum, Datenschutz, Prüfung |
| 8 | 60 Min. | Feinschliff, Demo, Pitch |

Bleiben 30 Minuten Puffer.

## Block 1 · Setup
```
Lies README.md und CLAUDE.md. Dieses Projekt ist eine statische Website ohne KI-Anbindung, es wird kein API-Schlüssel gebraucht. Prüfe, ob Node.js ab Version 20 installiert ist, und sag mir in drei Sätzen, wie wir vorgehen.
```
**Fertig, wenn:** Node passt und alle wissen, wer Inhalte schreibt und wer Claude Code bedient.

## Block 2 · Inhalte und Struktur (ohne Code)
Auf einem Blatt festlegen:
- Wer ist der AKKI, was macht er, für wen ist die Seite?
- Welche Seiten gibt es? Vorschlag: Start, Projekte, Treffen, Kontakt
- Welche Texte und Bilder gibt es schon (siehe `daten/QUELLEN.md`)?

Texte als Stichpunkte in `inhalte.md` schreiben. **Fertig, wenn:** Seitenliste und Stichpunkte stehen.

## Block 3 · Startseite
```
Baue die Startseite als public/index.html (HTML, CSS, JavaScript in einer Datei) und einen kleinen server.js zum lokalen Ansehen. Nimm die Inhalte aus inhalte.md und erfinde nichts dazu. Aufbau: Kopf mit Navigation, kurzer Einstieg, drei Kacheln zu den Schwerpunkten, Fußzeile. Schlicht, gut lesbar, mobil zuerst. Starte den Server und prüfe die Seite.
```
**Fertig, wenn:** die Startseite auf Laptop und Handy lesbar ist.

## Block 4 · Früh online stellen
Die Seite jetzt schon veröffentlichen, auch wenn sie unfertig ist. Ein kostenloses Konto bei einem Hosting-Dienst (z. B. Vercel) legt eine Person aus dem Team selbst an.
```
Erkläre mir Schritt für Schritt, wie ich diesen Ordner als statische Seite veröffentliche, und bereite alles Nötige im Projekt vor. Passwörter und Anmeldung übernehme ich selbst.
```
**Fertig, wenn:** die Seite unter einer echten URL erreichbar ist.

## Block 5 · Unterseiten
```
Lege die Unterseiten aus inhalte.md an, jede als eigene HTML-Datei mit derselben Navigation und Fußzeile wie die Startseite. Für die Seite „Projekte“ baue eine Liste mit Titel, Kurzbeschreibung und Link je Projekt. Erfinde keine Inhalte, markiere fehlende Texte sichtbar mit „Text folgt“.
```
**Fertig, wenn:** mindestens zwei Unterseiten online sind und alle Links funktionieren.

## Block 6 · Design und Handy-Ansicht
```
Vereinheitliche das Design: eine Schriftfamilie, zwei Farben plus Grautöne, einheitliche Abstände. Prüfe die Seite bei 380 Pixel Breite und behebe alles, was überläuft. Achte auf ausreichenden Kontrast und Alternativtexte für Bilder.
```
**Fertig, wenn:** die Seite auf dem Handy ohne seitliches Scrollen funktioniert.

## Block 7 · Impressum, Datenschutz, Prüfung
- Impressum und Datenschutzerklärung mit echten Angaben füllen. Die Inhalte kommen vom Team, nicht von der KI.
- Keine Formulare oder Analyse-Dienste einbauen, solange der Datenschutz dafür nicht geklärt ist.
```
Prüfe alle Seiten: tote Links, fehlende Seitentitel, fehlende Beschreibung für Suchmaschinen, Rechtschreibung. Liste die Funde auf und behebe sie nach meiner Freigabe.
```
**Fertig, wenn:** die Prüfliste leer ist.

## Block 8 · Feinschliff, Demo, Pitch
- Letzten Stand veröffentlichen, URL auf zwei Geräten testen
- Screenshots als Backup
- Pitch: Warum eine eigene Seite, Live-Rundgang, wie entstanden, was als Nächstes kommt
