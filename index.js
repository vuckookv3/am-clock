var select = document.getElementById('select');
var text = document.getElementById('text');
var t = document.getElementById('t');
var customDrop = document.getElementsByClassName('custom-dropdown')[0];

select.onchange = function () {
    customDrop.remove();
    text.style.display = 'flex';
    select.disabled = true;
    t.innerHTML = getRandom(select.selectedIndex - 1);
}

// var DB = [
//     [
//         "Neka osoba misli na vas i jako vas voli ili želi.",
//         "Zamislite želju.",
//         "Voljena osoba misli na vaše telo.",
//         "Vaš dečko/devojka vas jako voli i želi da zauvek ostanete zajedno."
//     ],
//     [
//         "Imaćete mnogo sreće u ljubavi u narednom periodu.",
//         "Osoba koja vam se sviđa će vas pozvati.",
//         "Voljena osoba misli na vas.",
//         "Neka osoba vas često sanja."
//     ],
//     [
//         "Uskoro vam sledi susret sa osobom koja vas voli ili koju vi volite.",
//         "Osoba koja vam se sviđa vas je sanjala.",
//         "Voljena osoba razmišlja o vašim osećanjima.",
//         "Uskoro ćete doživeti prevaru od voljene osobe ili ćete vi nju prevariti."
//     ],
//     [
//         "Neka osoba vas jako puno voli.",
//         "Voljena osoba će vas razočarati.",
//         "Osoba kojoj se sviđate smišlja plan kako da vas osvoji.",
//         "Zamislite neku želju."
//     ],
//     [
//         "Postoji jedna osoba koja ne može da vas zaboravi i koja vas nikada neće zaboraviti.",
//         "Voljena osoba će vas jako iznervirati.",
//         "Vaš partner razmišlja o zajedničkoj budućnosti.",
//         "Želja koju ste zamislili će vam se ostvariti."
//     ],
//     [
//         "Neko će se uskoro zaljubiti u vas.",
//         "U narednom periodu ćete vi ili vaša voljena osoba imati problema sa zdravljem.",
//         "Vaš partner/partnerka stalno razmišlja o vama.",
//         "Neka osoba vas obožava."
//     ],
//     [
//         "Pred vama je pomirenje sa osobom koja vam mnogo znači.",
//         "Dobićete SMS od osobe kojoj se sviđate.",
//         "Osoba koja vam se sviđa noćima misli na vas.",
//         "Pomirićete se sa voljenom osobom."
//     ],
//     [
//         "Osoba u koju ste zaljubljeni nije iskrena prema vama, a moguće je čak i da vas vara.",
//         "Osoba koja vam se sviđa vas smatra prijateljem/prijateljicom.",
//         "Osoba kojoj se sviđate želi da vam se približi.",
//         "U narednom periodu doživećete iznenađenje ili ćete otkriti nečiju tajnu."
//     ],
//     [
//         "Jako ste ljubomorni na nekoga ili je neko ljubomoran na vas.",
//         "Stara ljubav misli na vas.",
//         "Osoba kojoj se sviđate počeće da flertuje sa vama.",
//         "Osoba u koju ste zaljubljeni vas ne voli. Najbolje bi bilo da je zaboravite."
//     ],
//     [
//         "Uskoro ćete imati telefonski poziv od osobe koju volite.",
//         "Doživećete radost na ljubavnom planu.",
//         "Osoba koja vam se sviđa smatra da ste lep par.",
//         "Jako ste poželjni i mnogi bi voleli da budu sa vama."
//     ],
//     [
//         "Plavi dečko ili plava devojka ima veliku želju da vas vidi.",
//         "Crni dečko/devojka misli na vas.",
//         "Neka osoba misli na vas po ceo dan.",
//         "Ljubomorni ste na nekoga ili je neko ljubomoran na vas."
//     ],
//     [
//         "Vaš dečko/devojka vas veoma voli.",
//         "Osoba koja vam se sviđa će vas poljubiti.",
//         "Osoba koju volite misli da vas ne zaslužuje.",
//         "Poljubićete se sa osobom koja vam se sviđa."
//     ],
//     [
//         "Provešćete strastvenu noć sa osobom koja vam se sviđa.",
//         "Očekuje vas svađa sa voljenom osobom.",
//         "Osoba koja vam se sviđa misli da je ne primećujete.",
//         "Uskoro ćete doživeti novu ljubav."
//     ],
//     [
//         "Smeđi dečko/devojka vas jako voli.",
//         "Bićete primećeni u društvu.",
//         "Osoba koja vam se sviđa misli da ste lepi.",
//         "Započećete ponovo vezu sa bivšim dečkom/devojkom."
//     ],
//     [
//         "Neka osoba ima veliku želju da vas poljubi.",
//         "Osoba koja vam se sviđa priznaće vam ljubav.",
//         "Vaš partner/partnerka ceni vašu iskrenost.",
//         "Pred vama je stabilna ljubavna veza."
//     ],
//     [
//         "Neka osoba ima veliku želju da bude sa vama.",
//         "Smeđi dečko/devojka misli na vas.",
//         "Potrebni ste vašem partneru/partnerki i on/ona mnogo misli na vas.",
//         "Vaša simpatija ipak nema želju da vas vidi."
//     ],
//     [
//         "U narednom periodu ćete doživeti neprijatnost ili će vas zadesiti nešto loše.",
//         "Pred vama je susret sa novom osobom.",
//         "Osoba koja vam se sviđa smatra da niste jedno za drugo.",
//         "Očekuju vas loše vesti u narednom periodu."
//     ],
//     [
//         "Uskoro ćete se poljubiti sa osobom koja vam se sviđa.",
//         "Stara ljubav želi da se pomirite.",
//         "Vaš partner/partnerka misli da ste jako nežna osoba.",
//         "Sledi vam zanimljiva avantura sa nekom osobom."
//     ],
//     [
//         "Uskoro ćete doživeti veliku ljubav i dugo ćete biti u vezi sa tom osobom.",
//         "Crni dečko/devojka misli na vas.",
//         "Osoba koja vam se sviđa smatra da ste zgodni.",
//         "Sledi vam iznenađenje."
//     ],
//     [
//         "Neka osoba koju ne poznajete je zaljubljena u vas i priželjkuje da bude u vezi sa vama.",
//         "Osoba sa kojom ste u vezi je jako ljubomorna.",
//         "Vaš partner/partnerka misli da ga/je varate.",
//         "U narednom periodu ćete se posvađati sa voljenom osobom, a moguće je i da ćete plakati."
//     ],
//     [
//         "Neka osoba vas čeka.",
//         "Vaš partner vam je veran.",
//         "Osoba koja vam se sviđa želi seks sa vama.",
//         "Dobićete poruku od osobe koja vam se sviđa."
//     ],
//     [
//         "Jako se sviđate osobi koja se vama sviđa.",
//         "Morate se odlučiti sa kim želite da budete u vezi.",
//         "Osoba koja vam se sviđa misli da ste jako lepi.",
//         "U narednom periodu vas očekuju lepe vesti i srećna dešavanja."
//     ],
//     [
//         "Pred vama je susret sa osobom koju volite.",
//         "Voljena osoba vas obožava.",
//         "Osoba koja vam se sviđa oseća da se i ona zaljubljuje u vas.",
//         "Sledi vam susret sa voljenom osobom."
//     ],
//     [
//         "Voljena osoba će vam nešto uskoro predložiti.",
//         "Plavi dečko/devojka misli na vas.",
//         "Osoba koju volite takođe voli vas.",
//         "Završićete u krevetu sa osobom koja vam se sviđa."
//     ]
// ];

var DB = [
    "Završićete u krevetu sa nekom osobom.",
    "Imaćete 7 mačaka do 50te godine.",
    "Osoba koja vam se sviđa ne misli isto i za vas.",
    "Upoznaćete osobu u koju ćete se razočarati.",
    "Izbegavajte svađe sa voljenim osobama",
    "U narednom periodu vas očekuju tužne vesti",
    "Uskoro ćete biti razočarani",
    "Već poznajete osobu za koju ćete se venčati.",
    "Nikada se nećete venčati.",
    "Jedna osoba misli da ste lepi.",
    "Neka osoba vas čeka da pustite poruku.",
    "Osoba koja vam se sviđa želi samo seks sa vama.",
    "U narednom periodu ćete se posvađati sa voljenom osobom, a moguće je i da ćete plakati.",
    "Vaš partner/partnerka misli da ga/je varate.",
    "Neka osoba koju ne poznajete je zaljubljena u vas i priželjkuje da bude u vezi sa vama.",
    "Crni dečko/devojka misli na vas.",
    "Očekuju vas loše vesti u narednom periodu.",
    "Osoba koja vam se sviđa smatra da niste jedno za drugo.",
    "U narednom periodu ćete doživeti neprijatnost ili će vas zadesiti nešto loše.",
    "Vaša simpatija ipak nema želju da vas vidi.",
    "Započećete ponovo vezu sa bivšim dečkom/devojkom koja se neće završiti dobro.",
    "Osoba koja vam se sviđa misli da je ne primećujete.",
    "Provešćete strastvenu noć sa osobom koja vam se sviđa.",
    "Osoba u koju ste zaljubljeni vas ne voli. Najbolje bi bilo da je zaboravite.",
    "Jako ste ljubomorni na nekoga ili je neko ljubomoran na vas.",
    "Osoba u koju ste zaljubljeni nije iskrena prema vama, a moguće je čak i da vas vara.",
    "U narednom periodu ćete vi ili vaša voljena osoba imati problema sa zdravljem.",
    "Uskoro ćete doživeti prevaru od voljene osobe ili ćete vi nju prevariti.",
    "Želja koju ste zamislili vam se neće ostvariti.",
    "Voljena osoba će vas jako iznervirati.",
    "Voljena osoba će vas razočarati.",
    "Imaćete mnogo nesreće u ljubavi u narednom periodu.",
    "Osoba sa kojom ste se jednom videli misli na vaše telo.",
    "Vreme je za promenu.",
];

function getRandom(i) {
    const randomNum = Math.floor(Math.random() * DB.length);
    // const rand = Math.floor(Math.random() * 4);
    // return DB[i][rand];
    return DB[randomNum];
}


var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);