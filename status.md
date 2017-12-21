# Status

## HTML & CSS

Jeg har lavet stort set alt HTML og CSS - der er jo altid plads til forbedringer. Det er lavet med bootstrap og tilpasset til Mobil first. 
3 sider: Forside, Produktside og Kontaktside.

* Forsiden henter de tre nyeste produkter (de tre sidst intastede produkter i databasen), samt de 3 populæreste, som jeg i dette tilfælde har sat til at være de 3 dyreste fra databasen.
* Produktsiden er en dropdownmenu hvor man kan vælge mellem 3 forskellige kategorier; Afspillere, Højtalere og Forstærkere. Klikker man på en af dem, hentes produkterne i den kategori på produktsiden. Klikker man herefter på et af disse produkter, hentes alle informationer om det enkelte produkt.
* Kontaktside indeholder en kontaktformular, som pt ikke virker.

## Database & API

Jeg har lavet min database med tabellerne Produkter, Kategori og Producent. Der er lavet forbindelser mellem dem. 

Mine api har forbindelse til databasen, og alle mine routes og fetch virker. 

Jeg har et søgefelt der virker på alle siderne, hvis man søger efter en del af produktets navn. 

Det eneste der ikke virker endnu, er min kontaktformular. Og så har jeg jo heller ikke noget login system.

## Mappestruktur - Frontend

Roden indeholder denne status.md fil, en tom README.md fil, package.json, app.js og en mappe med node_modules og min public mappe.

Public mappen indeholder mapperne bootstrap, fontawesome og produktbilleder, samt filerne arbejdsplan.md, index.html, kontakt.html, mymain.css, produkter.html produkter.js, endnu en tom README.md fil, search.js og jquery-3.2.1.min.js.

## Mappestruktur - API

Roden indeholder mapperne config, node_modules, routes og services(som indeholder en tom services.js fil), app.js, package.json og en tom README.md fil. 

Config-mappen indeholder sql.js fil som opretter forbindelse til databassen.

Routes-mappen indeholder min index.js, produkt.js som har alle mine routes til udtræk af produkter, og afspillere.js som har en udkommenteret route fordi den ikke skulle bruges alligevel, da jeg valgte at holde det hele i én fil.

---------------------------

*fetch* ligger inde i frontend -> public -> produkter.js + index.html

**Alle** markdown filer om projektet mangler, men det er svært at skrive om det når man ikke 100 % forstår hvad der foregår. Plus, jeg er virkelig dårlig til at tage noter!

------------------------

### Personlig Kommentar

Jeg er stadig lidt forvirret omkring hvordan det hele virker, og jeg synes det er ret uoverskueligt at finde rundt i hvornår det ligger i api-mappen og hvornår det er i frontend-mappen. 

Jeg tror jeg forstår, hvordan routes virker, og hvordan fetch virker, men jeg er sgu ikke sikker på jeg ville kunne starte forfra og vide hvad jeg skulle i hvilken rækkefølge. 

Jeg har ret godt styr på at oprette database og tabeller og forbinde dem, samt HTML og CSS (hvilket jeg finder sjovt at arbejde med) - men Javascript er indviklet, uoverskueligt og faktisk slet ikke sjovt. Jeg mister lysten til at lave noget, når jeg ikke forstår det eller kun kan finde ud af det, hvis der sidder en lærer ved siden af mig og dikterer hvad jeg skal skirve.

Det hjælper mig heller ikke rigtig at læse om det på nettet, og det der men at søge efter svarene er også svært, når jeg ikke helt ved hvad spørgsmålet er. Og det er svært at finde ud af hvad løsningen er, og hvad der er nemmeste, når der kommer en million forskellige svar. Derfor kan jeg bedre lide at spørge en lærer, end internettet eller en medstuderende!

Jeg er faktisk ret stresset over det, og ved at være bange for, om jeg overhovedet kan klare denne uddannelse :worried: 

# Julestatus

* På adminsiden virker opret, ret og slet.
* Login og logud virker.
* Jeg mangler at validerer alle formularer backend og frontend.
* Jeg mangler at kunne oprette/rette billeder på adminsiden.
* Det kunne have været smart med et sted på adminsiden, hvor man kan se de beskeder der bliver sendt fra kontaktformularen, så man ikke skal ind i databasen og tjekke det, samt evt. en "besvar"-knap, så man ikke skal ind i databasen og kopiere email fra databasen osv.
* Jeg har heller ikke fået oprettet droplet på DigitalOcean, så mit HI-FI projekt ligger fortsat kun local.

* Ved login får jeg dog denne besked i consollen og vi(Troels, Frank og jeg) har ikke kunnet finde ud af hvad det er. For fejlen kom fra den ene dag til den anden. Den ene dag var der intet, og dagen efter UDEN jeg havde rørt ved noget kode overhovedet, så kom fejlen: "Uncaught TypeError: Cannot set property 'onsubmit' of null
    at HTMLDocument.document.addEventListener (login.js:5)"