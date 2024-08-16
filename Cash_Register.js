function checkCashRegister(price, cash, cid) {
    const Cash = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
    let s = cash - price;
    let cs = a(s);
    let ch = w(cid);
    for ( i = 0; i < 9; i++) {
        if (ch[i][1] - cs[i][1] < 0) {
            return "INSUFFICIENT_FUNDS";
        }
        else if (ch[i][1] - cs[i][1] == 0) {
            return "CLOSED";
        }
    } 
    return "OPEN";
}

function a(s) {
    let x = 0;
    let z = 0;
    let c = 0;
    let v = 0;
    let b = 0;
    let n = 0;
    let m = 0;
    let l = 0;
    let k = 0;
    while (s > 0) {
        if (s >= 100) {
            s = s - 100;
            k += 1;
        }
        else if (s >= 20) {
            s = s - 20;
            l += 1;
        }
        else if (s >= 10) {
            s = s - 10;
            m += 1;
        }
        else if (s >= 5) {
            s = s - 5;
            n += 1;
        }
        else if (s >= 1) {
            s = s - 1;
            b += 1;
        }
        else if (s >= 0.25) {
            s = s - 0.25;
            v += 1;
        }
        else if (s >= 0.1) {
            s = s - 0.1;
            c += 1;
        }
        else if (s >= 0.05) {
            s = s - 0.05;
            z += 1;
        }
        else if (s >= 0.01) {
            s = s - 0.01;
            x += 1;
        }
    }  
    let q = [["PENNY", x], ["NICKEL", z], ["DIME", c], ["QUARTER", v], ["ONE", b], ["FIVE", n], ["TEN", m], ["TWENTY", l], ["ONE HUNDRED", k]]
    return q
}

function w(cid) {
    const Cash = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
    let r = 0;
    let d = 0;
    let f = 0;
    let g = 0;
    let h = 0;
    let j = 0;
    let p = 0;
    let o = 0;
    let u = 0;
    while (cid[0][1] > 0) {
        cid[0][1] = cid[0][1] - Cash["PENNY"]
        r += 1;
    }
    while (cid[1][1] > 0) {
        cid[1][1] = cid[1][1] - Cash["NICKEL"]
        d += 1;
    }
    while (cid[2][1] > 0) {
        cid[2][1] = cid[2][1] - Cash["DIME"]
        f += 1;
    }
    while (cid[3][1] > 0) {
        cid[3][1] = cid[3][1] - Cash["QUARTER"]
        g += 1;
    }
    while (cid[4][1] > 0) {
        cid[4][1] = cid[4][1] - Cash["ONE"]
        h += 1;
    }
    while (cid[5][1] > 0) {
        cid[5][1] = cid[5][1] - Cash["FIVE"]
        j += 1;
    }
    while (cid[6][1] > 0) {
        cid[6][1] = cid[6][1] - Cash["TEN"]
        p += 1;
    }
    while (cid[7][1] > 0) {
        cid[7][1] = cid[7][1] - Cash["TWENTY"]
        o += 1;
    }
    while (cid[8][1] > 0) {
        cid[8][1] = cid[8][1] - Cash["ONE HUNDRED"]
        u += 1;
    }
    let y = [["PENNY", r], ["NICKEL", d], ["DIME", f], ["QUARTER", g], ["ONE", h], ["FIVE", j], ["TEN", p], ["TWENTY", o], ["ONE HUNDRED", u]]
    return y;
}

checkCashRegister(19.5, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 0]])