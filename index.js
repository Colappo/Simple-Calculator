const P1 = document.getElementById("p1");
const P2 = document.getElementById("p2");

const B_x = document.getElementById("B-x");
const Bx_ = document.getElementById("B^2");
const Bxy = document.getElementById("B^y");
const Bp = document.getElementById("Bp");
const B7 = document.getElementById("B7");
const B8 = document.getElementById("B8");
const B9 = document.getElementById("B9");
const Bd = document.getElementById("B/");
const B4 = document.getElementById("B4");
const B5 = document.getElementById("B5");
const B6 = document.getElementById("B6");
const Bm = document.getElementById("Bx");
const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");
const B3 = document.getElementById("B3");
const Bmin = document.getElementById("B-");
const B0 = document.getElementById("B0");
const Bk = document.getElementById("B.");
const Br = document.getElementById("B=");
const Bplus = document.getElementById("B+");

let values = []
let char = []


let i = 0;

function addValueP() {
    values[i] = parseFloat(P1.innerHTML)
    char[i] = "+"
    P2.innerHTML = P1.innerHTML
    P1.innerHTML = ""
    i = i + 1
}

function addValueMi() {
    values[i] = parseFloat(P1.innerHTML)
    char[i] = "-"
    P2.innerHTML = P1.innerHTML
    P1.innerHTML = ""
    i = i + 1
}

function addValueMn() {
    values[i] = parseFloat(P1.innerHTML)
    char[i] = "x"
    P2.innerHTML = P1.innerHTML
    P1.innerHTML = ""
    i = i + 1
}

function addValueD() {
    values[i] = parseFloat(P1.innerHTML)
    char[i] = "/"
    P2.innerHTML = P1.innerHTML
    P1.innerHTML = ""
    i = i + 1
}

function addValuePo() {
    values[i] = parseFloat(P1.innerHTML)
    char[i] = "^"
    P2.innerHTML = P1.innerHTML
    P1.innerHTML = ""
    i = i + 1
}

function reverse() {
    P1.innerHTML = -parseFloat(P1.innerHTML)
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
                let iPo = 0;
                let potega = parseFloat(P2.innerHTML)
                let pp = P1.innerHTML
                console.log("P" + potega)

                while (true) {
                    if (P1.innerHTML === 0) {
                        P1.innerHTML = 1
                        break
                    }
                    else {
                        potega = parseFloat(potega) * parseFloat(P2.innerHTML)
                        console.log(potega)
                        if (iPo === parseFloat(pp) - 2) {
                            P1.innerHTML = potega
                            break
                        };
                        iPo++
                    }
                } 
                potega = 0
                values = []
                char = []
                break
        }
        i = 0
    }
}


B0.addEventListener("mouseup", () => {
    P1.innerHTML = P1.innerHTML + 0;
});

B1.addEventListener("mouseup", () => {
    P1.innerHTML = P1.innerHTML + 1;
});

B2.addEventListener("mouseup", () => {
    P1.innerHTML = P1.innerHTML + 2;
});

B3.addEventListener("mouseup", () => {
    P1.innerHTML = P1.innerHTML + 3;
});

B4.addEventListener("mouseup", () => {
    P1.innerHTML = P1.innerHTML + 4;
});

B5.addEventListener("mouseup", () => {
    P1.innerHTML = P1.innerHTML + 5;
});

B6.addEventListener("mouseup", () => {
    P1.innerHTML = P1.innerHTML + 6;
});

B7.addEventListener("mouseup", () => {
    P1.innerHTML = P1.innerHTML + 7;
});

B8.addEventListener("mouseup", () => {
    P1.innerHTML = P1.innerHTML + 8;
});

B9.addEventListener("mouseup", () => {
    P1.innerHTML = P1.innerHTML + 9;
});

Bplus.addEventListener("click", addValueP);
Bmin.addEventListener("click", addValueMi);
Bm.addEventListener("click", addValueMn);
Bd.addEventListener("click", addValueD);

B_x.addEventListener("click", reverse);
Bk.addEventListener("click", addDot);
Bx_.addEventListener("click", backspace);
Bxy.addEventListener("click", addValuePo);

Br.addEventListener("mouseup", execute)
