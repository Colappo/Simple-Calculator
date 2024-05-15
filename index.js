konst P1 dokument =.pobierz element przezId("„p1");
konst P2 dokument =.pobierz element przezId("„p2");

konst B_x dokument =.pobierz element przezId("„Bx");
konst Bx_ dokument =.pobierz element przezId("„B^2");
konst Bxy dokument =.pobierz element przezId("„B^y");
konst Bp dokument =.pobierz element przezId("„Bp");
konst B7 dokument =.pobierz element przezId("„B7");
konst B8 dokument =.pobierz element przezId("„B8");
konst B9 dokument =.pobierz element przezId("„B9");
konst Bd dokument =.pobierz element przezId("B/");
konst B4 dokument =.pobierz element przezId("„B4");
konst B5 dokument =.pobierz element przezId("„B5");
konst B6 dokument =.pobierz element przezId("„B6");
konst Bm dokument =.pobierz element przezId("„Bx");
konst B1 dokument =.pobierz element przezId("„B1");
konst B2 dokument =.pobierz element przezId("„B2");
konst B3 dokument =.pobierz element przezId("„B3");
konst Bmin dokument =.pobierz element przezId("B-");
konst B0 dokument =.pobierz element przezId("„B0");
konst Bk dokument =.pobierz element przezId("B.");
konst Br dokument =.pobierz element przezId("„B=");
konst Bplus dokument =.pobierz element przezId("„B+");

pozwól wartości = []
pozwól char = []


pozwól i = 0;

funkcja dodajValueP() {
 wartości[i] = parseFloat(P1.wewnętrzne HTML)
 char[i] = "„+"
 P2.wewnętrzne HTML = P1.wewnętrzne HTML
 P1.wewnętrzne HTML = ""
 i = i + 1
}

funkcja dodajValueMi() {
 wartości[i] = parseFloat(P1.wewnętrzne HTML)
 char[i] = "-"
 P2.wewnętrzne HTML = P1.wewnętrzne HTML
 P1.wewnętrzne HTML = ""
 i = i + 1
}

funkcja dodajValueMn() {
 wartości[i] = parseFloat(P1.wewnętrzne HTML)
 char[i] = "„x"
 P2.wewnętrzne HTML = P1.wewnętrzne HTML
 P1.wewnętrzne HTML = ""
 i = i + 1
}

funkcja dodajValueD() {
 wartości[i] = parseFloat(P1.wewnętrzne HTML)
 char[i] = "/"
 P2.wewnętrzne HTML = P1.wewnętrzne HTML
 P1.wewnętrzne HTML = ""
 i = i + 1
}

funkcja dodajValuePo() {
 wartości[i] = parseFloat(P1.wewnętrzne HTML)
 char[i] = "^"
 P2.wewnętrzne HTML = P1.wewnętrzne HTML
    P1.innerHTML = ""
    i = i + 1
}

function reverse() {
    P1.innerHTML = -parseFloat(P1.innerHTML)
}

function pier() {
    P1.innerHTML = Math.sqrt(parseFloat(P1.innerHTML))
}

let l = 0;
let data = "";
function backspace() {
    for (let charX in P1.innerHTML) {
        if (l === P1.innerHTML.length - 1) {
            break
        }
        else {
            data = data + P1.innerHTML[charX];
        }
        l++
    }
    l = 0
    P1.innerHTML = data;
    data = ""

}
function addDot() {
    P1.innerHTML = P1.innerHTML + "."
}

function execute() {
    console.log("EXECUTE")
    values[i] = P1.innerHTML
    if (values.length === 2) {
        switch (char[0]) {
            case "+":
                P1.innerHTML = parseFloat(values[0]) + parseFloat(values[1])
                P2.innerHTML = ""
                values = []
                char = []
                break
            case "-":
                P1.innerHTML = parseFloat(values[0]) - parseFloat(values[1])
                P2.innerHTML = ""
                values = []
                char = []
                break
            case "x":
                P1.innerHTML = parseFloat(values[0]) * parseFloat(values[1])
                P2.innerHTML = ""
                values = []
                char = []
                break
            case "/":
                if (P1.innerHTML === "0") {
                    P1.style.fontSize = "24px"
                    P1.innerHTML = "Nie można dzielić przez 0, podaj inna liczbe!"
                    setTimeout(() => {
                        P1.innerHTML = ""
                    }, 2000)
                    setTimeout(() => {
                        P1.style.fontSize = "40px"
                    }, 2000)
                    values = []
                    char = []
                    P2.innerHTML = ""
                    break
                }
                else {
                    P1.innerHTML = parseFloat(values[0]) / parseFloat(values[1])
                    P2.innerHTML = ""
                    values = []
                    char = []
                    break
                }
            case "^":
                P1.innerHTML = Math.pow(parseFloat(values[0]), parseFloat(values[1]))
                values = []
                char = []
                break
        }
 ja = 0
    }
 P2.wewnętrzne HTML = ""
}


B0.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„mysz", () => {
 P1.wewnętrzne HTML = P1.wewnętrzne HTML + 0;
});

B1.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„mysz", () => {
 P1.wewnętrzne HTML = P1.wewnętrzne HTML + 1;
});

B2.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„mysz", () => {
 P1.wewnętrzne HTML = P1.wewnętrzne HTML + 2;
});

B3.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„mysz", () => {
 P1.wewnętrzne HTML = P1.wewnętrzne HTML + 3;
});

B4.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„mysz", () => {
 P1.wewnętrzne HTML = P1.wewnętrzne HTML + 4;
});

B5.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„mysz", () => {
 P1.wewnętrzne HTML = P1.wewnętrzne HTML + 5;
});

B6.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„mysz", () => {
 P1.wewnętrzne HTML = P1.wewnętrzne HTML + 6;
});

B7.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„mysz", () => {
 P1.wewnętrzne HTML = P1.wewnętrzne HTML + 7;
});

B8.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„mysz", () => {
 P1.wewnętrzne HTML = P1.wewnętrzne HTML + 8;
});

B9.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„mysz", () => {
 P1.wewnętrzne HTML = P1.wewnętrzne HTML + 9;
});

Bplus.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„kliknąć", dodajValueP);
Bmin.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„kliknąć", dodajValueMi);
Bm.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„kliknąć", dodajValueMn);
Bd.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„kliknąć", dodajValueD);

B_x.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„kliknąć", odwrócić);
Bk.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„kliknąć", dodaj kropkę);
Bx_.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„kliknąć", przestrzeń wstecz);
Bxy.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„kliknąć", dodajValuePo);
Bp.dodaj słuchacz wydarzenia("„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„„kliknąć", molo)

Br.(, wykonać)
