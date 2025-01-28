// trapazium ----------------------------------------------------------------
let tb_data = [];
let tb2_data = [];
let l10 = 0;
let l11 = 0;
let l12 = 0;
let f1 = 0;
let l20 = 0;
let l21 = 0;
let l22 = 0;
let f2 = 0;
let X = [];
function initialize_X() {
    let ini = Math.round(Math.random() * 3 + 1);
    X = [ini, ini + 1, ini + 2];
}
initialize_X();
let Y = [];
let y = Y[0];
let x = X[0] + 0.5;
console.log(`x => ${x}`);
let x_ex = X[0] - 0.5;
console.log(`x_ex => ${x_ex}`);
for (let i = 0; i < X.length; i++) {
    Y.push((Math.pow(X[i], 4)) + Math.round(Math.random() * 5 + 5));
}
function load_tb2() {
    for (let i = 0; i < 4; i++) {
        tb2_data.push([`X<sub>${i + 1}</sub> = ` + X[i], Y[i]]);
    }
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 4; i++) {
            if (i < 3 - j) {
                tb2_data[i].push(tb2_data[i + 1][1 + j] - tb2_data[i][1 + j]);
            }
            else {
                tb2_data[i].push('-');
            }
        }
    }
    console.log(tb2_data);
}
load_tb2();
//all varialbles
// let a: number[][] = [[2, -12], [1, -5]];
let c1 = Math.floor(Math.random() * 10 + 5);
let c2 = Math.floor(Math.random() * 5 - 5);
let c3 = Math.floor(Math.random() * 10 + 5);
let c4 = Math.floor(Math.random() * 5 - 5);
let a = [[c1, c2], [c4, c3]];
let a_inverse = [];
let det_a = 0;
let adj_a = [];
let values = [];
let evec = [];
let eigen_values = [];
let eigen = [];
let tab_data = [];
function calculation_1() {
    //a_inverse = inverse_matrix(a);
    a_inverse[0] = [];
    a_inverse[1] = [];
    det_a = a[1][1] * a[0][0] - a[1][0] * a[0][1];
    a_inverse[0][0] = a[1][1] / det_a;
    a_inverse[1][1] = a[0][0] / det_a;
    a_inverse[0][1] = -a[1][0] / det_a;
    a_inverse[1][0] = -a[0][1] / det_a;
    values = [];
    evec = [];
    evec.push([1, 1]);
    eigen_values = [];
    console.log(a_inverse);
}
function calculate_adj(mat, det_a) {
    let res = inverse_matrix(mat);
    let res_arr = [];
    for (let i = 0; i < mat.length; i++) {
        let arr = [];
        for (let j = 0; j < mat[0].length; j++) {
            arr.push(res[i][j] / det_a);
        }
        res_arr.push(arr);
    }
    return res_arr;
}
//# sourceMappingURL=data.js.map