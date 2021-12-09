var cells = document.querySelectorAll('.cell');
var msg = document.querySelector('.msg');
var btn = msg.querySelector('button');
var p = msg.querySelector('p');
var nue;
var Cp;
(function (Cp) {
    Cp["X"] = "x";
    Cp["O"] = "o";
})(Cp || (Cp = {}));
var cp;
var bdj = document.querySelector('.bd-j');
var arr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
btn.addEventListener('click', btns);
btns();
function btns() {
    msg.style.display = 'none';
    nue = 0;
    cp = Cp.O;
    cells.forEach(function (x) {
        var cell = x;
        cell.classList.remove(Cp.O, Cp.X);
        cell.removeEventListener('click', clickCell);
        cell.addEventListener('click', clickCell, { once: true });
    });
}
function wile(cp) {
    var iswile = arr.some(function (x) {
        if (cells[x[0]].classList.contains(cp) &&
            cells[x[1]].classList.contains(cp) &&
            cells[x[2]].classList.contains(cp)) {
            return true;
        }
        return false;
    });
    return iswile;
}
function clickCell(e) {
    nue++;
    var larget = e.target;
    larget.classList.add(cp);
    var iswile = wile(cp);
    p;
    if (iswile) {
        p.innerText = cp + '玩家，胜利';
        msg.style.display = 'block';
        return;
    }
    else if (nue === 9) {
        p.innerText = '平局';
        msg.style.display = 'block';
        return;
    }
    cp = cp === Cp.O ? Cp.X : Cp.O;
    bdj.classList.remove(Cp.X, Cp.O);
    bdj.classList.add(cp);
}
