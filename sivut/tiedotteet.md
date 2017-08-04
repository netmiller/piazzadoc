# Tiedotteet


!!! note "4.8.2017 [Netmiller, Esa Laitila]"
 	__Vanhat Piazzasivustot ajetaan alas 31.8.2017__<br>
Kevään versiovaihdossa jätettiin vanhat sivustot vielä __tarkistusmielessä__ paikalleen, vaikkakin kaikki muutokset on yliheitosta alkaen tehty uuden version sivustoihin. Vanhoihin tietoihin pääsi käsiksi mikäli haluttiin tarkistaa tai varmistaa että kaikki dokumentit ym. olivat siirtyneet uuteen.

Nyt nuo vanhat sivustot ovat toivon mukaan palvelleet tehtävänsä, ja niiden __aktiivinen päälläolo päättyy 31.8.2017__.  Tiedot kyllä varmistetaan ja on tarvittaessa saatavilla, mutta uudet sivut ovat nyt toimineet hyvin, ja tuorein sisältö löytyy sieltä.

!!! warning "27.7.2017 klo 20:00 [Netmiller, Esa Laitila]"
    __Uusien käyttäjätunnusten avaaminen__.

Piazzan uudessa versiossa näyttäisi olevan ohjelmavirhe, joka aiheuttaa sen että 
__uuden käyttäjätunnuksen avaaminen__ toimii muuten OK, mutta siellä on mahdollista lähettää __linkki/vahvistusviesti__ jonka kautta hänen pitäisi pystyä kirjautumaan sisään ensimmäisen kerran.

Mutta lähetetty linkki __ei mene oikeaan ruutuun/toimintoon__, vaan suoraan kirjautumissivustolle.

Ongelma korjataan kuntoon, mutta toistaiseksi kannattaa antaa uudelle käyttäjälle joku __tilapäinen salasana__, ja lähettää tieto siitä muita kanavia käyttäen ja __pyytää käyttäjää vaihtamaan salasanan__ heti kun pääsee kirjautumaan sisään ensimmäisen kerran.


!!! note "23.7.2017 [Netmiller, Esa Laitila]"
 	__Korjattu ongelma joka aiheutti sen että vähänkin isommat liitetiedostot/dokumentit eivät 
 	latautuneet Piazzalle vaan antoivat virhekoodin 413.__<br>
Nyt tuo on korjattu kuten aikaisemmassakin versiossa jossa liitetiedostojen max.koko oli 50 Mt. Voitte ilmoittaa minulle mikäli se ei riitä niin voidaan katsoa onko tarvetta vieläkin isommalle ylärajalle.


!!! note "10.6.2017 [Netmiller, Esa Laitila]"
 	__Vkolla 22 saatiin kaikkien Piazza-asiakkaiden versiovaihdot valmiiksi.__<br>
Uuden version myötä tulleet muutokset on kuvattu linkissä:<br>
[muutokset versiossa 4.3](muutokset_v43).


!!! tip "26.3.2017 [Netmiller, Esa Laitila]"
	__Korjattu tiedostojen lataukseen liittyvä ongelma__

Aika ajoin on kiusannut liitetiedostojen (Excel,Word,tms.) lataamiseen liittyvä ongelma, joka onkin antanut __vanhemman version__ ao.liitetiedostosta.
Ongelma littyy selaimen tapaan käyttää välimuistia, ja on vaihdellut riippuen käytetystä selaimesta. Yleensä sitä on yritetty korjata selaimen välimuistin tyhjentämisellä.

Tänään on tehty www-palvelimelle uudentyyppinen korjaus jossa tämä ongelma pitäisi nyt __korjaantua selaimesta riippumatta.__
Ilmoitelkaa minulle mikäli ongelma vieläkin _"kummittelee"_, mutta olen kyllä toiveikas että korjaus auttaa tähän asiaan.


!!! tip "12.3.2017 klo 17:15 [Netmiller, Esa Laitila]"
    __Piazzan suojattu yhteys korjattu__.

Toimivat kirjautumisosoitteet ovat :

* __http://piazzaonward.fi/__<apteekinnimi\>
* __https://piazzaonward.fi/__<apteekinnimi\>
* __https://www.piazzaonward.fi/__<apteekinnimi\>

jotka kaikki ohjataan automaattisesti osoitteeseen : __https://www.piazzaonward.fi/<apteekinnimi>__ joten ei ole väliä mitä noista ym.osoitemuodoista käyttää.

Mikäli huomaat jonkun URL-osoitteen joka toimii mielestäsi virheellisesti, niin ilmoitus minulle ja katsotaan voidaanko sille jotain tehdä.

!!! warning "10.3.2017 klo 10:30 [Netmiller, Esa Laitila]"
    __Piazzan suojattu SSL-yhteys ja URL-osoitteet__.

Pienenä yllätyksenä tuli tänään esiin että URL-osoite muodossa:

* https://piazzaonward.fi/<apteekinnimi> ei toimi oikein vaan __antaa varoituksen__

Tällä hetkellä toimivat kirjautumisosoitteet ovat :

* __http://piazzaonward.fi/<apteekinnimi>__
* __https://www.piazzaonward.fi/<apteekinnimi>__

Ongelma pyritään korjaamaan tulevan viikonlopun aikana, ja siihen asti em.toimivat osoitteet pitäisi olla kunnossa.


!!! tip "26.2.2017 klo 18:15 [Netmiller, Esa Laitila]"
    __Palvelimen päivitykset/muutokset tehty__.
* palvelimelle on asennettu SSL-sertifikaatti, jolla voidaan ottaa käyttöön __suojattu https__ yhteys
* toistaiseksi kaikki toimii vanhalla yhteyskäytännöllä, ja tiedotan muutoksista per apteekki
* tavoitteena on __porrastaa käyttöönottoa__ hieman, niin saadaan muutokset paremmin hallintaan
* lähetän jokaisen apteekin yhteyshenkilöille tietoa milloin käännän ao.apteekin yhteyden suojattuun "putkeen"
* tavoitteena on saada kaikki muutettua tulevan ja seuraavan viikon aikana (vkot 9 ~ 10)
* URL-osoitteisiin ei pitäisi tulla muutoksia, vaan serveri ohjaa yhteydet automaattisesti oikeaan yhteyskäytäntöön
* __mahdollisia vikatilanteita__ saattaa jossain erikoistapauksessa löytyä, ja ne pyritään korjaamaan nopeasti
* joten laittakaa ilmoitusta minulle heti jos huomaatte jotain joka voisi liittyä tähän muutokseen

!!! warning "21.2.2017 [Netmiller, Esa Laitila]"
    __Piazzan huoltokatko su 26.2.2016 klo 13 ~18__.
* Piazza-tietokannan päivitystä varten tarvitaan huoltokatko.
* Käyttökatko on suunniteltu su 26.2 klo 13:00 ja kestää max. 5 tuntia.
* Tässä on tavoite päivittää SSL-sertifikaatti mukaan, ja samalla tehdään määritykset jolla saadaan suojattu SSL-yhteys päälle automaattisesti

!!! tip "22.1.2017 klo 18:05 [Netmiller, Esa Laitila]"
    __Tietokannan korjaukset tehty__.
* Joissain tapauksissa on ollut ongelmana se ettei kaikkia kommentteja voitu poistaa mikäli oli tarvetta
* Piazza antoi jonkun "epämääräisen" virheilmoituksen
* Tietokannan korjausajolla näitä on pyritty korjaamaan
* __vastaavia saattaa vielä löytyä, ja niistä kannattaa heti ilmoittaa__
* huoltoajo on tehty varmuuden vuoksi vain niille apteekeille joilla ongelmaa esiintyi

!!! warning "19.1.2017 [Netmiller, Esa Laitila]"
    __Lyhyt huoltokatko su 22.1.2016 klo 17:00__.
* Piazza-tietokannan huoltamista varten tarvitaan pieni katkos käyttöön.
* Käyttökatko on suunniteltu su 22.1 klo 17:00 ja kestää noin tunnin.

!!! tip "2.1.2017 [Netmiller, Esa Laitila]"
    __Tarkennus varmistuksiin__.
* Piazza-tietokannan varmistuksia säilytetään 30pv (juoksevasti taaksepäin)
* Tuona aikana on mahdollista palauttaa tietoja mikäli jotain kadonnut tai on joku muu poikkeustilanne.
* Tässä tapauksessa ottakaa yhteyttä Piazzan tekniseen tukeen, niin selvitetään mitä voidaan tehdä.

!!! tip "12.11.2016 [Netmiller, Esa Laitila]"
	__Linkkien toiminta Piazzalla.__
* Mikäli ___Sivu-tyyppisissä___ dokumenteissa on käytetty linkkejä toiseen dokumenttiin,
ja niiden toiminnassa on ongelmia, niin varmista että linkit on tehty
__sisäisinä linkkeinä__.
* Ulkoisia linkkejä käytetään vain kun tehdään viittaus/linkki johonkin ulkopuoliseen sivustoon (esim. KELA, FIMEA, tms).

!!! warning "1.11.2016 [Netmiller, Esa Laitila]"
	Piazzan tekninen ylläpito ja kehitys on siirtynyt Netmillerin vastuulle.
	Tässä vaiheessa ei varsinaisen Piazzan toimintoihin ole tehty vielä muutoksia tai versiopäivityksiä, mutta kehitystä jatketaan
	kun varmistetaan että tämä "ylimenovaihe" toimii moitteetta.

----

!!! tip "8.9.2015 [Piazza Tuki]"
	Lisätty tarkennus dokumenttien linkitykseen siitä, että linkin lisääminen sivulta dokumenttiin ei toimi Internet Explorer -selaimella [Dokumenttien linkitys](dokumentin_tekeminen/#dokumenttien-linkitys).

!!! tip "6.5.2015 [Mirja Alaniemi]"
	Oletko huomannut, että sähköposteja voi lähettää suoraan piazzalta?<br>
	Lähettäminen on kerrottu piazzan käyttöohjeiden käyttöliittymän esittelyssä [Käyttöliittymän osat](kayttoliittyma/#sahkopostin-lahettaminen-ja-nakyman-tulostaminen)

!!! note "22.4.2015 [Mirja Alaniemi]"
 	Piazzan käyttöohjeet on päivitetty kauttaaltaan vastaamaan nykykäytäntöjä, ohjeisiin on lisätty esimerkkejä ja opastusta dokumenttien laatimisesta, hyväksymisestä, toimintaohjeista, kansioista, niiden järjestämisestä jne. Muutamat asiat ovat vuosien saatossa muuttuneet. Kannattaakin käydä katsomassa ainakin nämä ohjesivut:
	<ul>
	<li>[Kirjautuminen piazzalle](Kirjautuminen)</li>
	<li>[Sivueditorin vaihtaminen](SivuEditorit)</li>
	<li>[Kansioiden ylläpito](wiki:KansionTekeminen)</li>
	<li>[Dokumenttien laatiminen](DokumentinTekeminen)</li>
	<li>[Dokumenttien ylläpito](wiki:DokumentinJulkaiseminen)</li>
	<li>[Toimintaohjeet](DokumenttiHistoria)</li>
	</ul>
	Toivottavasti uusituista ohjeista on sinulle paljon hyötyä.<br>
	Entiseen tapaan vastaan kysymyksiin ja olen tukenanne.


----
