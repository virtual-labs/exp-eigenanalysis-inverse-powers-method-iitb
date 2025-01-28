//for starting first activity
function start_act3() {
    let btn_text = get_collapse_btn_text('Table with 10 iterations', 'tb3-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <p style='text-align: center;'>Table with 10 iterations</p>

        <div id='tab-3'></div>

    </div>

    `;
    maindiv.innerHTML += text;
    // internal_calculations1();
    load_tab3();
    setTimeout(() => {
        show_step('tb3-box');
    }, 150);
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function load_tab3() {
    let ele = document.getElementById('tab-3');
    //load table values
    if (eigen[1][0] < eigen[1][1]) {
        values.push(eigen[1][0]);
        evec.push([1, eigen[1][1] / eigen[1][0]]);
    }
    else {
        values.push(eigen[1][1]);
        evec[1] = [];
        evec[1][1] = 1;
        evec[1][0] = eigen[1][0] / eigen[1][1];
        evec.push([eigen[1][0] / eigen[1][1], 1]);
    }
    let header = ['Eigen Value', 'Eigen Vector'];
    tb_data = [];
    tb_data.push([
        values[0],
        get_matrix_html(2, 1, [[evec[0][0].toFixed(5)], [evec[0][1].toFixed(5)]], 'inline-block', '120px'),
    ]);
    tb_data.push([
        values[1],
        get_matrix_html(2, 1, [[evec[1][0].toFixed(5)], [evec[1][1].toFixed(5)]], 'inline-block', '120px'),
    ]);
    for (let i = 1; i < 9; i++) {
        console.log(i);
        let mm = matrix_multiplication(a_inverse, [[evec[i][0]], [evec[i][1]]]);
        eigen.push([mm[0][0], mm[1][0]]);
        if (eigen[i + 1][0] < eigen[i + 1][1]) {
            values.push(eigen[i + 1][0]);
            evec.push([1, eigen[i + 1][1] / eigen[i + 1][0]]);
        }
        else {
            values.push(eigen[i + 1][1]);
            evec.push([eigen[i + 1][0] / eigen[i + 1][1], 1]);
        }
        let mat = get_matrix_html(2, 1, [[evec[i + 1][0].toFixed(5)], [evec[i + 1][1].toFixed(5)]], 'inline-block', '120px');
        tb_data.push([values[i + 1], mat]);
    }
    let tb = new Display_Table(header, tb_data, ele);
    tb.load_table();
}
//# sourceMappingURL=activity3.js.map