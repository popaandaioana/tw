window.onload = function() {

    function creare(tag, text) {
        var elnou = document.createElement(tag);
        var textnou = document.createTextNode(text);
        elnou.appendChild(textnou);
        return elnou;
    }

    //manipularea DOM-ului creare dinamica a meniului de navigatie

    var elem = document.getElementById("nav");

    var x = document.createElement("div");
    x.className = "topnav";
    elem.appendChild(x);


    var el = creare("a", "Acasa");
    el.href = "index.html";
    x.appendChild(el);

    var el = creare("a", "Fotbal");
    el.href = "#";
    el.id = "fotbal";
    x.appendChild(el);


    el = creare("a", "Handbal");
    el.href = "#";
    el.id = "handbal";
    x.appendChild(el);

    el = creare("a", "Tenis");
    el.href = "#";
    el.id = "tenis";
    x.appendChild(el);

    el = creare("a", "Alte sporturi");
    el.href = "#";
    el.id = "altesporturi";
    x.appendChild(el);

    el = creare("a", "Abonament");
    el.href = "#";
    el.id = "abonament";
    x.appendChild(el);

    //Folosirea evenimentelor Javascript declansate de mouse/tastatura

    x = document.querySelectorAll(".column");
    y = document.querySelectorAll(".row");


    var elem = document.getElementById("fotbal");
    elem.addEventListener("click", myfct1);

    function myfct1(event) {
        var elem1 = document.getElementById("formular");
        if (elem1)
            y[0].removeChild(elem1);
        for (var i = 0; i < x.length; i++) {
            y[0].appendChild(x[i]);
        }
        var f = document.querySelectorAll("article > h2");
        f[0].innerHTML = "Alex Cicâldău, omul meciului în victoria cu FCSB: „Era timpul să marchez și eu!” Cum explică mijlocașul Universității Craiova victoria din derby";
        f[1].innerHTML = "Universitatea Craiova – FCSB 2-0 | Andrei Vlad, explicații pentru forma slabă a FCSB-ului. „Problema a fost la noi! Nu avem ce să facem!”";
        f[2].innerHTML = "Universitatea Craiova – FCSB 2-0 | Oltenii au reintrat în lupta pentru titlu! Elevii lui Toni Petrea, joc modest în Bănie + Sărbătoare în vestiarul jucătorilor lui Ouzounidis ";
        f[3].innerHTML = "Istvan Kovacs i-a înfuriat și pe olteni! Cum l-a eliminat pe Bogdan Vătăjelu, după ce le-a refuzat un penalty celor de la FCSB";
        f = document.querySelectorAll("article > p");
        f[0].innerHTML = "Alex Cicâldău a marcat pentru Universitatea Craiova, iar oltenii sunt iar în lupta pentru titlu, după ce au trecut cu 2-0 de FCSB. Alex Cicâldău a dat lovitura cu FCSB, într-un meci în care Istvan Kovacs le-a refuzat un penalty celor de la FCSB, dar i-a și înfuriat pe olteni, după ce l-a eliminat pe Vătăjelu.";
        f[1].innerHTML = "Universitatea Craiova – FCSB s-a încheiat cu victoria oltenilor, scor 2-0, iar Andrei Vlad susține că gruparea antrenată de Toni Petrea a pierdut din cauza faptului că nu a avut ritm de joc.Totodată, goalkeeperul formației roș-albastre a explicat forma slabă a FCSB-ului din ultimele două etape jucate în play-off și susține că fotbaliștii lui Toni Petrea au obosit.";
        f[2].innerHTML = "Universitatea Craiova – FCSB s-a terminat cu victoria oltenilor, scor 2-0 (Cicâldău 37, Nistor 64) în etapa a 4-a din play-off-ul Ligii 1, iar echipa lui Toni Petrea este la al doilea eșec consecutiv, după ce în runda precedentă a fost învinsă de Sepsi OSK. ";
        f[3].innerHTML = "Istvan Kovacs l-a eliminat pe Bogdan Vătăjelu în repriza a doua a derby-ului dintre Universitatea Craiova și FCSB. Arbitrul le-a refuzat și oaspeților un posibil penalty, la faultul lui Nicușor Bancu asupra lui Romeo Niță.";
        img = document.getElementsByTagName("img");
        img[0].src = "./poze/fotbal1.jpg";
        img[1].src = "./poze/fotbal2.jpg";
        img[2].src = "./poze/fotbal3.jpg";
        img[3].src = "./poze/fotbal4.jpg";
    }
    //Handbal
    var elem = document.getElementById("handbal");
    elem.addEventListener("click", myfct2);

    function myfct2(event) {
        var elem1 = document.getElementById("formular");
        if (elem1)
            y[0].removeChild(elem1);
        for (var i = 0; i < x.length; i++) {
            y[0].appendChild(x[i]);
        }
        var f = document.querySelectorAll("article > h2");
        f[0].innerHTML = "România – Suedia 23-31, în calificările pentru Euro 2022 la handbal masculin. Nordicii au condus și cu 12 goluri diferență";
        f[1].innerHTML = "Samara da Silva a semnat cu Dunărea Brăila. Yvette Broch, prezentată oficial la CSM București";
        f[2].innerHTML = "Minaur Baia Mare a învins Rapid București în derby-ul zilei în Liga Florilor. Măgura Cisnădie a relansat bătălia pentru locul 4";
        f[3].innerHTML = "România – Suedia, Handbal masculin. Cine transmite la TV meciul de calificare la Campionatul European 2022. Nordicii vin cu multe vedete la Sibiu";
        f = document.querySelectorAll("article > p");
        f[0].innerHTML = "România a fost învinsă de Suedia cu 31-23 în calificările pentru Euro 2022 la handbal masculin. Prima reprezentativă nu a avut nicio șansă în fața vicecampioanei mondiale, diferența de exprimare fiind foarte mare.";
        f[1].innerHTML = "Samara da Silva a semnat cu Dunărea Brăila, astfel că se reîntoarce în Liga Florilor, după un sezon petrecut la Krim Ljubljana. În 2019, brazilianca a câștigat titlul de campioană cu SCM Rm. Vâlcea, echipă cu care a și jucat în Liga Campionilor.";
        f[2].innerHTML = "Minaur Baia Mare a învins Rapid București în derby-ul zilei în Liga Florilor. Formația lui Costică Buceschi s-a impus cu 25-21 și se menține la 3 puncte în spatele echipei CSM București. Într-un alt meci de mare interes, Măgura Cisnădie a întrecut Gloria Buzău cu 22-20 și a relansat bătălia pentru locul 4.";
        f[3].innerHTML = "România – Suedia, meci din Grupa 8 de calificare la Campionul European de handbal masculin 2022, se desfășoară miercuri, de la ora 18:00, la Sibiu. Disputa va putea fi urmărită în direct în România la TVR 1. Tricolorii susțin primul meci oficial după jocurile dureroare cu Kosovo.";
        img = document.getElementsByTagName("img");
        img[0].src = "./poze/handbal1.jpg";
        img[1].src = "./poze/handbal2.jpg";
        img[2].src = "./poze/handbal3.jpg";
        img[3].src = "./poze/handbal4.jpg";
    }
    //Tenis
    var elem = document.getElementById("tenis");
    elem.addEventListener("click", myfct3);

    function myfct3(event) {
        var elem1 = document.getElementById("formular");
        if (elem1)
            y[0].removeChild(elem1);
        for (var i = 0; i < x.length; i++) {
            y[0].appendChild(x[i]);
        }
        var f = document.querySelectorAll("article > h2");
        f[0].innerHTML = "Simona Halep a ajuns la Madrid! Mesajul româncei + Primele imagini la turneul lui Ion Țiriac";
        f[1].innerHTML = "S-a tras la sorți tabloul de la Madrid! Posibil duel Simona Halep – Sorana Cîrstea în sferturile de finală";
        f[2].innerHTML = "Se schimbă tradiția la Wimbledon! Cum va arăta formatul turneului la care Simona Halep e campioană en-titre";
        f[3].innerHTML = "Turneul de la Madrid se va disputa fără liderul mondial Novak Djokovic!";
        f = document.querySelectorAll("article > p");
        f[0].innerHTML = "Simona Halep a zburat la Madrid, imediat după ce a fost eliminată în semifinalele turneului de la Stuttgart. În Spania, numărul 3 WTA speră să câștige primul trofeu din acest an. Halep a primit un mesaj de bun venit din partea ibericilor.";
        f[1].innerHTML = "Jucătoarele din România și-au aflat adversarele la turneul WTA 1.000, patronat de românul Ion Țiriac, care începe miercuri la Madrid! Simona Halep și Sorana Cîrstea, cele două românce prezente pe tabloul principal, ar putea juca una împotriva celeilalte în sferturile de finală. ";
        f[2].innerHTML = "Tradiția începe să se schimbe și la Wimbledon, turneul de tenis cu cele mai multe cutume! Nu este vorba despre regula echipamentului alb-complet, care va dăinui probabil multă vreme, ci despre programul turneului. ";
        f[3].innerHTML = "Novak Djokovic, liderul mondial în proba masculină, nu va participa la ediţia din acest an a turneului de la Madrid, informează cotidianul Marca. Sârbul, care sâmbătă a fost eliminat în semifinale la Belgrad de Aslan Karatsev, are alte planuri decât participarea la Madrid, având în vedere şi faptul că vrea să joace în capitala Serbiei.";
        img = document.getElementsByTagName("img");
        img[0].src = "./poze/tenis1.jpg";
        img[1].src = "./poze/tenis2.jpg";
        img[2].src = "./poze/tenis3.jpg";
        img[3].src = "./poze/tenis4.jpg";
    }
    //Alte sporturi
    var elem = document.getElementById("altesporturi");
    elem.addEventListener("click", myfct4);

    function myfct4(event) {
        var elem1 = document.getElementById("formular");
        if (elem1)
            y[0].removeChild(elem1);
        for (var i = 0; i < x.length; i++) {
            y[0].appendChild(x[i]);
        }
        var f = document.querySelectorAll("article > h2");
        f[0].innerHTML = "Imagine inedită! Fostul stelist Eric Bicfalvi, prima mutare la Turneul Candidaților la Șah de la Ekaterinburg";
        f[1].innerHTML = "Schimbări radicale la lotul național de gimnastică! „Totul în anumite condiții”";
        f[2].innerHTML = "Fostul pugilist Marian Simion, azi comisar de polițíe, dezvăluiri incredibile după două decenii. De ce a refuzat un milion de dolari din partea lui Don King";
        f[3].innerHTML = "S-a stabilit finala Ligii Naţionale de baschet feminin! Primele partide sunt programate pe 5 și 6 mai.";
        f = document.querySelectorAll("article > p");
        f[0].innerHTML = "Eric Bicfalvi, internaționalul român de la formația Ural, a făcut, simbolic, prima mutare în locul marelui maestru rus Ian Nepomniaci, în ultima rundă a Turneului Candidaților la șah.";
        f[1].innerHTML = "După Campionatul European de gimnastică, din Elveția, de la Basel, unde Larisa Iordache a obținut calificarea la JO de la Tokyo, conducerea FR de Gimnastică pare să fie tot mai decisă privind realizarea unei schimbări la nivelul conducerii lotului de la Deva.";
        f[2].innerHTML = "Cu doar câteva zile Sărbătoarea Pascală, Marian Simion, unul dintre cei mai valoroși pugiliști ai României, a depănat amintiri despre perioada cantonamentelor petrecute de a lungul timpului, când îl prindea Paștele în plină pregătire.";
        f[3].innerHTML = "Sepsi Sfântu Gheorghe şi CSM Satu Mare sunt finalistele Ligii Naţionale de baschet feminin. Asta după ce au eliminat luni formaţiile Olimpia Braşov, respectiv pe FCC Baschet Arad, în meciul trei din cinci programate în semifinalele competiţiei.";
        img = document.getElementsByTagName("img");
        img[0].src = "./poze/altesporturi1.jpg";
        img[1].src = "./poze/altesporturi2.jpg";
        img[2].src = "./poze/altesporturi3.jpg";
        img[3].src = "./poze/altesporturi4.jpg";
    }
    //Abonament
    var elem = document.getElementById("abonament");
    elem.addEventListener("click", myfct5);

    function myfct5(event) {
        for (var i = 0; i < x.length; i++) {
            y[0].removeChild(x[i]);
        }
        //creare formular
        var br = document.createElement("br");
        var form = document.createElement("form");
        form.id = "formular";
        form.setAttribute("method", "post");
        //form.setAttribute("action", "");

        // Inserting a line break
        form.appendChild(br.cloneNode());
        // Inserting a line break
        form.appendChild(br.cloneNode());

        var ab = creare("h3", "Aboneaza-te!");

        // Create an input element for Full Name
        var FN = document.createElement("input");
        FN.setAttribute("type", "text");
        FN.setAttribute("name", "FullName");
        FN.setAttribute("placeholder", "Full Name");

        // Create an input element for emailID
        var EID = document.createElement("input");
        EID.setAttribute("type", "text");
        EID.setAttribute("name", "emailID");
        EID.setAttribute("placeholder", "E-Mail ID");

        // create a submit button
        var s = document.createElement("input");
        s.setAttribute("type", "submit");
        s.setAttribute("value", "Submit");

        form.appendChild(ab);

        // Append the full name input to the form
        form.appendChild(FN);

        // Append the emailID to the form
        form.appendChild(EID);
        form.appendChild(br.cloneNode());
        form.appendChild(br.cloneNode());

        // Append the submit button to the form
        form.appendChild(s);
        form.appendChild(br.cloneNode());

        // Inserting a line break
        form.appendChild(br.cloneNode());

        y[0].appendChild(form);
    }
}