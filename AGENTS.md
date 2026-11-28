# Arbeitsregeln für Coding Agents

Lies zuerst `README.md`, damit du Ziel und Aufbau des Projekts kennst. Antworte auf Deutsch, in einfachen Worten und ohne unnötigen Fachjargon.

## Ziel und Grenzen

- **Rahmen:** Prototyp für den AKKI Hackathon 2026. Die Nutzerinnen und Nutzer sind Ärztinnen und Ärzte, viele ohne IT-Kenntnisse.
- **Technik:** Node.js ab Version 20, `public/index.html` (HTML, CSS und JavaScript) und `server.js`. Kein React, kein Build-Schritt und keine zusätzlichen npm-Pakete, solange sie vermeidbar sind. Start mit `node --env-file=.env server.js`. Eine ausdrücklich vom Team beschlossene andere Technik ist erlaubt.
- **Sicherheit:** API-Schlüssel gehören nur in `.env` und dürfen nur serverseitig verwendet werden. Sie dürfen weder in Browser-Code noch in Terminal-Ausgaben oder Commits landen. `.env` muss in `.gitignore` stehen.
- **Daten:** Verwende nur öffentliche oder synthetische Testdaten. Echte Patientendaten dürfen niemals in Dateien, Prompts, Screenshots, Issues, Pull Requests, Logs oder Tests gelangen. Hochgeladene Bilder, Texte und Tonaufnahmen werden nicht gespeichert oder geloggt.
- **Medizinische Inhalte:** Ändere oder ergänze Systemprompts, Ampel-Definitionen, Schwellenwerte oder Algorithmen nur auf ausdrückliche Team-Anweisung. Übernimm freigegebene Inhalte wortgetreu.
- **Sichtbarer Hinweis:** In der App muss jederzeit stehen: „Prototyp – nur Testdaten. Kein Ersatz für ärztliche Beurteilung.“

## Zusammenarbeit im Team

- Klärt vor jedem Arbeitsschritt kurz das Ziel, die zuständige Person und die betroffenen Dateien. Haltet fest, wer Inhalte liefert, wer den Coding-Agenten bedient und wer den fertigen Stand prüft.
- Arbeitet in einem eigenen Arbeitszweig (Branch), der von `main` ausgeht. Ändert `main` nie direkt.
- Teilt Aufgaben so auf, dass nicht mehrere Personen gleichzeitig dieselbe Datei bearbeiten. Besonders bei `public/index.html` gibt es immer nur eine zuständige Person zur selben Zeit.
- Haltet Änderungen klein und verständlich. Speichert zusammengehörige Änderungen in einem Commit und ladet den Branch nach Prüfung hoch. Der Agent bereitet Titel und Beschreibung vor. Das Team öffnet den Pull Request (PR) selbst auf GitHub.
- Eine andere Person aus dem Team prüft den PR: Stimmen Inhalt und Umfang? Funktionieren Links und Darstellung? Sind keine Schlüssel oder echten Patientendaten enthalten?
- Setzt Änderungswünsche im selben Branch um. Die zuständige Person im Team entscheidet über das Zusammenführen (Merge) in `main`. Der Agent darf den Merge erst auf ihre ausdrückliche Anweisung ausführen, sofern er dazu berechtigt ist.
- Wenn Aufgabe, Zuständigkeit, medizinischer Inhalt oder gewünschte Änderung unklar ist, frage nach, bevor du weiterarbeitest.

## Arbeiten mit Coding-Agenten

- Sage vor größeren Änderungen kurz, was du ändern willst und welche Dateien betroffen sind.
- Erfinde keine Inhalte. Nutze vorhandene Quellen und markiere fehlende Angaben sichtbar, statt sie zu ergänzen.
- Führe nach Codeänderungen die App aus und prüfe sie im Browser. Bei reinen Textänderungen prüfe mindestens die Verweise und Abschnitte, die du geändert hast.
- Erkläre nach jeder Änderung in höchstens drei Sätzen, was sich geändert hat und wie das Team es prüfen kann.
