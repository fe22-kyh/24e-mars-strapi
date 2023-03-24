Skapa en matleveranstjänst där kunder kan registera nya matordrar och leverantörer kan uppdatera motsvarande matorder som levererad.

I designen föreslås det att du skapar två olika roller, en för matkunder och en för matleverantörer. Börja med att fokusera på matkunden, utveckla med leverantör i första level-up:en.

Vidare bör det även ingå en modeltyp (Content-type) som motsvarar en beställning med datan:
1. tid vid beställning
2. datum vid beställning
3. kundens telefonnummer
4. kundens email
5. varor (helt ok att spara om en text sträng ["Vesuvio", "Kebabtalrik", ...])

Observera att tanken är att endast authentiserad kunder ska ha tillgång till att göra nya beställningar.

För en mer visuell upplevelse **föreslås** en mock design i [images/](images/) design, med betoning på föreslås. Ifall du hellre skapar en egen så är det helt ok. I samma mapp finns det även bifogat bakgrunds svg ifall du vill spinna vidare på samma tema i leverans och administratör vy (se level ups).

### Level up 1
Skapa en vy för levenratörerna där de kan uppdatera statusen på leveranser.

Modeltyp som motsvarar statusen på en leverans bör innehålla följande data
1. beräknad leveranstid (helt ok att sätta 30 minuter från "nu")
2. levererad (true/false beroende om varorna är levererade)
3. leverantörs uid (unik identiferbar, e.g. id)

### Level up 2
Lägg till en administratörvy där administratören kan få tillgång till samtliga leveranser, pågående samt avslutade.

