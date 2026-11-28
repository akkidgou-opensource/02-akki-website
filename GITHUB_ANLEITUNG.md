# Gemeinsam mit GitHub arbeiten

Diese Anleitung führt euch vom Fork bis zum Pull Request. Ein Fork ist eure eigene Kopie des Ausgangs-Repositories. So könnt ihr sicher daran arbeiten und Änderungen erst nach einer Prüfung zusammenführen.

## In drei Sätzen

- **Repository** ist der Projektordner auf GitHub.
- **Branch** ist ein eigener Arbeitszweig für eine Änderung. `main` bleibt dabei unberührt.
- **Pull Request (PR)** ist eine Bitte an das Team, euren Branch anzusehen und in `main` zu übernehmen.

## Was ihr braucht

- Ein kostenloses GitHub-Konto für die Person, die die Team-Kopie anlegt
- Einen Rechner mit dem Projektordner und eurem Coding-Agenten (Claude Code oder Codex)
- GitHub Desktop oder GitHub CLI (`gh`); wenn etwas fehlt, kann euch ein:e Mentor:in helfen

## 1 · Eine Team-Kopie anlegen

1. Meldet euch auf GitHub an.
2. Öffnet das [Ausgangs-Repository](https://github.com/akkidgou-opensource/02-akki-website).
3. Klickt auf **Fork** und erstellt eine Kopie in eurem GitHub-Konto. Lasst den Repository-Namen `02-akki-website` stehen.
4. Bestimmt eine Person, die die Team-Kopie verwaltet. Sie lädt die übrigen Teammitglieder über **Settings → Collaborators** ein. Jede eingeladene Person nimmt die Einladung an.

Arbeitet als Team in dieser gemeinsamen Kopie. Eine persönliche Fork-Kopie pro Teammitglied ist für die Hackathon-Arbeit nicht nötig.

## 2 · Team-Kopie auf den Rechner holen

Nutzt in GitHub Desktop **File → Clone repository** und wählt eure Team-Kopie aus. Öffnet anschließend genau diesen Ordner in Claude Code oder Codex.

Wenn ihr die GitHub CLI nutzt, meldet euch einmal an:
```bash
gh auth login
```
Wählt **GitHub.com**, **HTTPS** und **Login with a web browser**. Bestätigt die Anmeldung im Browser. Teilt niemals euer Passwort oder einen Zugangsschlüssel mit einem Coding-Agenten.

Danach könnt ihr die Team-Kopie laden:
```bash
gh repo clone TEAMKONTO/02-akki-website
```
Ersetzt `TEAMKONTO` durch den GitHub-Namen der Person, die den Fork verwaltet.

## 3 · Aufgaben und Dateien verteilen

Bevor ihr loslegt, haltet kurz fest:

- Was soll geändert werden und woran erkennt ihr, dass es fertig ist?
- Wer liefert oder prüft die Inhalte?
- Wer arbeitet an welcher Datei?
- Wer prüft den Pull Request?

Bearbeitet dieselbe Datei nicht gleichzeitig. Wenn mehrere Aufgaben dieselbe Datei betreffen, legt ihre Reihenfolge fest und wartet mit der zweiten Änderung, bis die erste übernommen ist. Das ist besonders wichtig für `public/index.html`.

## 4 · Für jede Änderung einen Branch verwenden

Beginnt neue Arbeit immer mit dem aktuellen Stand von `main`. Gebt dem Branch einen verständlichen Namen, zum Beispiel `feature/kontaktseite` oder `fix/mobile-navigation`.

Ihr könnt euren Coding-Agenten bitten:
```
Prüfe, dass ich im geklonten Team-Repository bin. Erstelle von main einen neuen Branch namens feature/kontaktseite. Ändere nur die abgesprochene Aufgabe und fasse vorher kurz zusammen, welche Dateien du bearbeiten wirst. Arbeite nie direkt auf main.
```

Ein Branch sollte eine zusammenhängende Änderung enthalten. Wenn ihr an einer anderen Aufgabe beginnt, erstellt dafür einen neuen Branch.

## 5 · Änderung speichern und hochladen

Wenn ein sinnvoller Zwischenstand fertig ist, prüft die Änderung und speichert sie. In GitHub Desktop heißt das **Commit** (Änderung festhalten) und **Push** (Branch zu GitHub hochladen).

Prompt für euren Coding-Agenten:
```
Prüfe die Änderungen in meinem Branch. Zeige mir, welche Dateien geändert wurden, und prüfe, dass weder .env noch Schlüssel oder echte Patientendaten enthalten sind. Erkläre den Unterschied zu main in einfachen Worten. Warte auf meine Zustimmung, bevor du Änderungen hochlädst.
```

Gebt dem Commit eine kurze Beschreibung, zum Beispiel `Kontaktseite ergänzt`. Ladet nur euren Branch hoch, niemals direkt `main`.

## 6 · Pull Request öffnen und prüfen lassen

Öffnet eure Team-Kopie auf GitHub. GitHub bietet nach dem Hochladen meist **Compare & pull request** an. Wählt:

- **base:** eure Team-Kopie und `main`
- **compare:** euren Arbeits-Branch, zum Beispiel `feature/kontaktseite`

Beschreibt im PR kurz:

- Was wurde geändert?
- Wie wurde es geprüft?
- Was ist noch offen?

Eine andere Person aus dem Team prüft den PR und probiert die Änderung aus. Die Person, die den PR erstellt hat, sollte ihn nicht allein freigeben. Wenn etwas angepasst werden muss, ändert ihr denselben Branch; der PR zeigt danach automatisch den neuen Stand. Die zuständige Person im Team führt den Merge erst nach der Prüfung aus.

## 7 · Zum Ausgangs-Repository beitragen

Wenn ihr eine Verbesserung für alle Teams vorbereitet habt, könnt ihr dafür einen PR an das Ausgangs-Repository schicken:

- **base:** `akkidgou-opensource/02-akki-website`, Branch `main`
- **head:** euer Team-Fork und euer Arbeits-Branch

Prüft vor dem Öffnen, dass der PR nur die gemeinsam vereinbarte Änderung enthält. Das Team prüft den PR, bevor es ihn abschickt.

## Wenn es hakt

| Was ihr seht | Was hilft |
|---|---|
| „Permission denied“ oder „403“ | Prüft, ob ihr mit dem richtigen GitHub-Konto angemeldet seid und die Einladung zur Team-Kopie angenommen habt. |
| „rejected“ oder „non-fast-forward“ | Holt zuerst den aktuellen Stand. Überschreibt oder löscht keine Änderungen, die ihr nicht geprüft habt. Fragt eine:n Mentor:in, wenn ihr unsicher seid. |
| `gh: command not found` | Nutzt GitHub Desktop oder bittet eine:n Mentor:in um Hilfe bei der Installation. |
| Der Agent fragt nach Passwort oder Zugangsschlüssel | Gebt sie nicht ein. Nutzt `gh auth login` und bestätigt die Anmeldung selbst im Browser. |
| `.env` oder ein Schlüssel wurde hochgeladen | Informiert sofort eine:n Mentor:in. Der Schlüssel muss gesperrt und ersetzt werden; Löschen allein reicht nicht. |

## Drei Regeln

1. Schlüssel gehören nur in `.env` und niemals auf GitHub.
2. Verwendet keine echten Patientendaten, auch nicht „nur kurz zum Testen“.
3. Arbeitet in kleinen Branches und prüft jede Änderung, bevor sie in `main` landet.
