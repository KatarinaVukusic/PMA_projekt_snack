# Projektne faze
- [X] - Opis projekta
- [x] - Početna struktura aplikacije
- [x] - Prototip
- [x] - Konzultacije
- [x] - Finalna verzija
- [ ] - Obrana projekta

# Opis projekta
## Kratki opis
Napraviti ću aplikaciju sa popisom obaveza. Kroz aplikaciju ćemo moći unositi naše obaveze. Kada izvršimo neku obavezu s popisa, označit ćemo je s izvršenom. Sve one obaveze koje su označene kao izvršene biti će prikazane na posebnom popisu. Aplikacija će imati i kalendar na kojemu ćemo moći vidjeti koliko obaveza imamo na određeni datum. Prilikom svakog novog unosa ili označavanja obaveze kao izvršenom, vodit će se statistika o ukupnom broju obaveza, te brojem izvršenih i neizvršenih obaveza. 

## Popis funkcionalnosti
1. mogućnost unosa obaveza.
2. mogućnost uvida na broj obaveza na određenom datumu u kalendaru.
3. pregled detalja neke obaveze.
4. mogućnost označavanja neke obaveze kao izvršenom.
5. računanje ukupnog broja obaveza
6. računanje broja izvršenih i neizvršenih obaveza.
6. prikaz popisa obaveza.
7. filtriranje popisa obaveza na samo izvršene obaveze.

## UPUTE
## Opis projekta
Potrebno je napisati kratki opis projekta.
Opis mora sadržavati popis osnovnih funkcionalnosti koje će biti implementirane (npr. "pretraživanje recepata", "unos novih recepta", "pretraživanje recepata po sastojcima" itd...)

## Početna struktura aplikacije

STRUKTURA:
Aplikacija se sastoji od mape s components u kojoj sam definirala izgled gumba i pojedinog elementa liste. Zatim imamo mapu data u kojoj se nalaze nas niz. Mapa models sadrzi konstruktor Obaveza koji nam služi za kreiranje novih obaveza. Imamo i mapu screens u kojoj se nalazi 5 ekrana: PocetniEkran,Kalendar,EkranUnos,DetaljniPrikaz i PrikazObaveza. Još imamo i mapu store u kojoj se nalaze definirsne akcije i reducer koji izvršava te akcije. 

NAVIGACIJA:
Navigacija kreće s početnog ekrana s kojeg možemo ići na popis svih obaveza, unos obaveza ili na kalendar. S popisa svih obaveza možemo ići na detaljan prikaz obaveze ili na unos nove obaveze preko headera. S ekrana detaljnog prikaza obaveze možemo ići na početni ekran s pomoću gumba u headeru ili se vratiti na popis obaveza. 
U unosu obaveze imamo gumb Odustani s kojeg idemo na ekran s kojeg smo ušli u unos, a s Dodavanjem nove obaveze idemo na početni ekran. S ekrana sa prikazom kalendara možemo se vratiti na početni ekran.

## Prototip
U ovoj fazi bi trebali imati "grubu" verziju svoje aplikacije. Ova verzija bi trebala imati implementirane osnovne funkcionalnosti koje su navedene u opisu projekta. Ne očekuje se da su implementirane SVE funkcionalnosti niti da su postojeće funkcionalnosti potpuno ispravne.

## Konzultacije
Nakon izrade prototipa potrebno se javiti nastavniku za termin konzultacija. Na konzultacijama ćete ukratko pokazati svoj prototip te će se po potrebi napraviti modifikacija početnih zahtjeva. Dovršeni projekti bez ove faze neće biti prihvaćeni.

## Finalna verzija
Nakon demonstracije prototipa možete nastaviti sa razvojem aplikacije i implementacijom svih funkcionalnosti. Prilikom razvoja potrebno je voditi dnevnik aktivnosti prema zadanim uputama.

## Obrana projekta
Zadnja faza je obrana projekta - nakon završetka finalne verzije svoje aplikacije javite se nastavniku za dogovor oko termina obrane projekta.
