# Gemeinsam mit GitHub arbeiten

Kopiert die Prompts in Claude Code oder ChatGPT mit Codex. Der Agent hilft euch beim Arbeiten im Projekt. Die Anmeldung, Einladungen und Pull Requests erledigt ihr selbst auf GitHub.

## In drei Sätzen

- **Repository** ist der Projektordner auf GitHub.
- **Branch** ist ein eigener Arbeitszweig für eine Änderung. `main` bleibt dabei unberührt.
- **Pull Request (PR)** ist eine Bitte an das Team, euren Branch anzusehen und in `main` zu übernehmen.

## Was ihr braucht

- Ein kostenloses GitHub-Konto für die Person, die die Team-Kopie anlegt
- Ein eigenes GitHub-Konto für jedes Teammitglied, das Änderungen hochladen oder prüfen soll
- Claude Code oder ChatGPT mit Codex

## 1 · Eine Team-Kopie anlegen

1. Meldet euch auf GitHub an.
2. Öffnet das [Ausgangs-Repository](https://github.com/akkidgou-opensource/02-akki-website).
3. Klickt auf **Fork** und erstellt eine Kopie in eurem GitHub-Konto. Lasst den Repository-Namen `02-akki-website` stehen.
4. Bestimmt eine Person, die die Team-Kopie verwaltet. Sie lädt die übrigen Teammitglieder über **Settings → Collaborators** ein. Jede eingeladene Person nimmt die Einladung an.

Arbeitet als Team in dieser gemeinsamen Kopie. Eine persönliche Fork-Kopie pro Teammitglied ist für die Hackathon-Arbeit nicht nötig.

## 2 · Team-Kopie auf den Rechner holen

**Claude Code:** Öffnet ein Terminal. Ersetzt `TEAMKONTO` im Prompt durch das Konto, dem der Fork gehört.

```
Hilf mir, den Team-Fork TEAMKONTO/02-akki-website zu klonen. Prüfe zuerst, ob Git da ist. Falls ich mich anmelden muss, erkläre mir den nächsten Schritt und warte. Sag mir danach, welchen Ordner ich öffnen soll.
```

**ChatGPT mit Codex:** Wählt den Team-Fork in eurer verbundenen GitHub-Umgebung aus. Wenn ihr den Fork nicht seht, prüft die Einrichtung unten.

### Erweitert · Mit dem eigenen GitHub-Konto in ChatGPT arbeiten

Jedes Teammitglied kann sein eigenes GitHub-Konto über die GitHub-Verbindung in ChatGPT verknüpfen. Für die Arbeit mit dem **ChatGPT Codex Connector** richtet ihr beide Seiten ein:

1. **Wer das Repository oder den Fork verwaltet:** Installiert die GitHub-App **ChatGPT Codex Connector** beim Konto oder bei der Organisation, der das Repository gehört. Gebt der App Zugriff auf das Repository oder den Fork, in dem das Team arbeitet.
2. **Wer mitarbeitet:** Nehmt die Einladung mit eurem eigenen GitHub-Konto an. Richtet den **ChatGPT Codex Connector** auch für euer Konto ein und verbindet genau dieses Konto mit ChatGPT.

Eine Einladung allein gibt eurem Agenten keinen Schreibzugriff. Wenn der Agent den Fork nicht sieht oder nichts ändern kann, prüft die App auf beiden Seiten, das ausgewählte Repository und eure Rechte. Siehe auch [GitHub-Hilfe zur App-Installation](https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-a-third-party).

```
Prüfe, ob du auf TEAMKONTO/02-akki-website zugreifen kannst. Sag mir, ob du den Branch main lesen und ob du im Team-Fork schreiben kannst. Falls du das nicht feststellen kannst, sag mir, was ich in GitHub prüfen soll.
```

Je nach Zugriff kann der Agent Branches anlegen, Änderungen speichern und hochladen. Nach dem Review kann er auf ausdrückliche Anweisung auch beim Merge helfen, sofern die Verbindung und die Regeln des Repositories das erlauben. Sonst führt die zuständige Person den Merge in GitHub aus.

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

Wenn ein sinnvoller Zwischenstand fertig ist, lasst euch die Änderungen zeigen. **Commit** heißt, den Stand festzuhalten. **Push** heißt, den Branch zu GitHub hochzuladen.

Prompt für euren Coding-Agenten:
```
Prüfe die Änderungen in meinem Branch. Zeige mir, welche Dateien geändert wurden, und prüfe, dass weder .env noch Schlüssel oder echte Patientendaten enthalten sind. Erkläre den Unterschied zu main in einfachen Worten. Warte auf meine Zustimmung, bevor du Änderungen hochlädst.
```

Gebt dem Commit eine kurze Beschreibung, zum Beispiel `Kontaktseite ergänzt`. Ladet nur euren Branch hoch, niemals direkt `main`.

## 6 · Pull Request öffnen und prüfen lassen

Öffnet den Pull Request selbst im Browser. Manche GitHub-Verbindungen können in eurem Repository keinen PR anlegen, etwa wenn dem ChatGPT Codex Connector dort die Berechtigung fehlt. Der Agent kann euch Titel und Beschreibung vorbereiten. Öffnet eure Team-Kopie auf GitHub, klickt auf **Compare & pull request** oder geht zu **Pull requests → New pull request**. Wählt:

- **base:** eure Team-Kopie und `main`
- **compare:** euren Arbeits-Branch, zum Beispiel `feature/kontaktseite`

Beschreibt im PR kurz:

- Was wurde geändert?
- Wie wurde es geprüft?
- Was ist noch offen?

Eine andere Person aus dem Team prüft den PR und probiert die Änderung aus. Die Person, die den PR erstellt hat, sollte ihn nicht allein freigeben. Wenn etwas angepasst werden muss, ändert ihr denselben Branch; der PR zeigt danach automatisch den neuen Stand. Die zuständige Person im Team führt den Merge erst nach der Prüfung aus.

## 7 · Zum Ausgangs-Repository beitragen

Wenn ihr eine Verbesserung für alle Teams vorbereitet habt, öffnet den PR im Ausgangs-Repository im Browser. Wählt **compare across forks** und setzt:

- **base:** `akkidgou-opensource/02-akki-website`, Branch `main`
- **head:** euer Team-Fork und euer Arbeits-Branch

Prüft vor dem Öffnen, dass der PR nur die gemeinsam vereinbarte Änderung enthält. Das Team prüft die Änderungen und die Beschreibung, bevor es auf **Create pull request** klickt.

## Wenn es hakt

| Was ihr seht | Was hilft |
|---|---|
| „Permission denied“ oder „403“ | Prüft, ob ihr mit dem richtigen GitHub-Konto angemeldet seid und die Einladung zur Team-Kopie angenommen habt. |
| „rejected“ oder „non-fast-forward“ | Holt zuerst den aktuellen Stand. Überschreibt oder löscht keine Änderungen, die ihr nicht geprüft habt. Fragt eine:n Mentor:in, wenn ihr unsicher seid. |
| Der Agent sieht den Team-Fork nicht | Prüft die Einladung, das verbundene Konto und den App-Zugriff auf den Fork wie in Schritt 2. |
| Der Agent fragt nach Passwort oder Zugangsschlüssel | Gebt sie nicht ein. Meldet euch selbst im Browser an. |
| `.env` oder ein Schlüssel wurde hochgeladen | Informiert sofort eine:n Mentor:in. Der Schlüssel muss gesperrt und ersetzt werden; Löschen allein reicht nicht. |

## Drei Regeln

1. Schlüssel gehören nur in `.env` und niemals auf GitHub.
2. Verwendet keine echten Patientendaten, auch nicht „nur kurz zum Testen“.
3. Arbeitet in kleinen Branches und prüft jede Änderung, bevor sie in `main` landet.
