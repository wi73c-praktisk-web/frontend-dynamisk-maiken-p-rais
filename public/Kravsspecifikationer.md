# Kravsspecifikationer

## Opret

* Der skal være en formular, som kan udfyldes og når der trykkes 'gem' bliver produktet oprettet i databasen.
* Under opretformularen ses en liste over alle eksisterende produkter, som trækkes direkte fra databasen med en fetch. Ud for hvert produkt er der en 'ret' og en 'slet' knap.
* Når et nyt produkt er oprettet vises den automatisk nederst på den eksisterende liste.

## Ret

* For at rette et produkt trykkes der på 'ret'-knappen ud for det valgte produkt. 
* Alt informationen for det valgte produkt hentes fra databasen og bliver smidt op i formularen, som nu er blevet til en ret formular. Der kan rettes i produktet og når der trykkes 'gem' gemmes rettelserne i databasen.

## Slet

* Når der trykkes på 'slet'-knappen kommer der en alert-boks op og spørger, om man er sikker på man vil slette produktet. Klikkes der ok, bliver produktet slettet fra databasen, og figurere således heller ikke længere på listen over eksisterende produkter.

## Login

* Administrationssiden skal være beskyttet af et login, så kun administratorer af siden kan oprette, rette og slette produkter.
* Når man forsøger at tilgå admin-side skal den komme op med et login, hvor der skal udfyldes brugernavn og password for at få adgang.