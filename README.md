<Fiók Nándor>
<GSTQLI>
Kliensoldali webprogramozás - beadandó
Ezt a megoldást a fent írt hallgató küldte be és készítette a Kliensoldali webprogramozás kurzus számonkéréséhez.
Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy használtam harmadik féltől
származó megoldásokat. Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé.
Az Eötvös Loránd Tudományegyetem Hallgatói Követelményrendszere
(ELTE szervezeti és működési szabályzata, II. Kötet, 74/C. §) kimondja, hogy mindaddig,
amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak jelentős részét -
saját munkájájaként mutatja be, az fegyelmi vétségnek számít.
A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.

-[ ] Az alkalmazás legalább 4 komponensből áll. (Enélkül a beadandót nem fogadjuk el.) (1pt)
Tehát léteznek például a következő komponensek:  
  - Film kártya komponens
  - Jegytípus választó komponens
  - Helykiválasztó komponens
  - Foglalás összesítő komponens
-[ ] Az alkalmazásban a komponenseket logikusan, funkciók szerint szétbontva hozta létre, ügyelve a tárgyon elsajátított alapelvekre. (2pt)
-[ ] Film kártyák és vetítések
  -[ ] A mai nap vetített filmek összes adatai megjelennek a kártyákon (3pt)
  -[ ] A napok között tudunk navigálni és a napot kiválasztva az adott napon vetített filmek jelennek meg (1pt)
  -[ ] A vetítések időpontjai megjelennek a kártyákon (1pt)
  -[ ] A vetítések közül választhatunk, a választott vetítés adatai megjelennek az oldal megfelelő részén (2pt)
-[ ] Jegytípusok
  -[ ] A különböző jegytípusok megjelennek és kiválaszthatjuk, hogy melyik jegytípusból hányat szeretnénk vásárolni, a különböző áraik megjelennek (2pt)
-[ ] Helykiválasztás
  -[ ] A moziterem ülésrendjének megjelenítése (2pt)
  -[ ] A foglalt helyek nem kiválaszthatóak, ez jelezve van a felhasználónak (2pt)
  -[ ] A teremben a székek kijelölhetőek, megfelelően eltárolódik (3pt)
  -[ ] Annyi helyet tudunk kiválasztani, ahány jegyet kiválasztottunk (1pt)
  -[ ] Kezelve van, hogy mi történik ha több jegyet akarunk kiválasztani (előről kezdődik a kijelölési folyamat, vagy nem enged többet kijelölni) (2pt)
-[ ] Foglalás összesítése
  -[ ] A foglalás részletei megjelennek, a kiválasztott vetítés adatai, a kiválasztott jegytípusok, a kiválaszott helyek, és a jegyek árainak összegzése (1pt)
  -[ ] A foglalás módosítása közben az összesítő folyamatosan frissül (3pt)
  -[ ] A foglalás véglegesítésével eltárolódnak a foglalás adatai, megint nem tudunk ugyanezekre a helyekre foglalni a vetítésen (2pt)
-[ ] Igényes, reszponzív, mobilra optimalizált megjelenés (3pt)

- Plusz pontok:
  -[ ] LocalStorage: A foglalás adatait LocalStorage-ba mentjük. Ha már létezik foglalás, az automatikusan betöltődik. Ehhez készíts egy saját Hook-ot, amivel a LocalStorage-ba el tudod menteni az értékeket. (3 pont)
  -[ ] Felugró ablak: Készíts egy felugró ablakot (Modal), amivel a foglalás véglegesítését tudjuk megjeleníteni! (2 pont)