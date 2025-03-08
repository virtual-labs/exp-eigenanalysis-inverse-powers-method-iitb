let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Eigenanalysis - Inverse Power Method</h5>
        <p>Learning Objective: Find the smallest Eigen Value and Eigen Vector.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let a_html = get_matrix_html(2, 2, a, 'inline-block', '120px');
    calculation_1();
    let adj_a = calculate_adj(a_inverse, det_a);
    let ain_input = get_matrix_html(2, 2, [
        [
            `<input type='number' class='form-control' style='width: 120px;' id='ain-00' ><span id='ain-00-val-sp'></span>`,
            `<input type='number' class='form-control' style='width: 120px;' id='ain-01' ><span id='ain-01-val-sp'></span>`
        ],
        [
            `<input type='number' class='form-control' style='width: 120px;' id='ain-10' ><span id='ain-10-val-sp'></span>`,
            `<input type='number' class='form-control' style='width: 120px;' id='ain-11' ><span id='ain-11-val-sp'></span>`
        ]
    ], 'inline-block', '200px');
    let ain_html = get_matrix_html(2, 2, [[a_inverse[0][0].toFixed(4), a_inverse[0][1].toFixed(4)], [a_inverse[1][0].toFixed(4), a_inverse[1][1].toFixed(4)]], 'inline-block', '120px');
    let evec_html = get_matrix_html(2, 1, [
        [`<input type='number' class='form-control' style='width: 120px;' id='evec-0' ><span id='evec-0-val-sp'></span>`],
        [`<input type='number' class='form-control' style='width: 120px;' id='evec-1' ><span id='evec-1-val-sp'></span>`]
    ], 'inline-block', '120px');
    let ev_html = get_matrix_html(2, 1, [
        [`<input type='number' class='form-control' style='width: 120px;' id='ev-0' ><span id='ev-0-val-sp'></span>`],
        [`<input type='number' class='form-control' style='width: 120px;' id='ev-1' ><span id='ev-1-val-sp'></span>`]
    ], 'inline-block', '120px');
    let btn_text = get_collapse_btn_text("First iteration", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div style='text-align: center;' >A = ${a_html} </div> 

        <p style='color: blue;' >Note: We will be performing two iterations. Take all eigen vector elements to be 1 initially.</p>

        <p style='text-align: center;'><span style='display: iniline-block;'>$$ A^{-1} = \\frac{Adjoint \\ of \\ A}{|A|} $$</span></p>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ |A| \\ $$</span> = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='deta-inp' > <span id='deta-val-sp'></span></div>

        <div style='text-align: center;'><span style='font-size: 24px; display: inline-block;'>$$ A^{-1} \\ $$</span> = <span>${ain_input}</span></div>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>

        <br>

        

        <div id='fi' style='display: none;'>
        <p style='text-align: center; '>Assume initial guess for the eigen vector to be [1, 1]. Multiply this initial guess to get the new improved eigen vector.</p>
            <div style='text-align: center;'>
                ${ain_html} x ${evec_html} = ${ev_html}
                <br>
                <br>
                <br>
                <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a12();'  id='temp-btn-121' >Verify</button></div>
            </div>
        </div>
        



    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    inv_power(a_inverse);
    internal_calculations0();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations0() {
    let mat = matrix_multiplication(a_inverse, [[evec[0][0]], [evec[0][1]]]);
    console.log(mat);
    //    eigen.push([mat[0][0], mat[1][0]]);
}
function verify_a1() {
    let btn = document.getElementById('temp-btn-120');
    console.log(`det => ${det_a}, inverse a => ${a_inverse[0][0]}, ${a_inverse[0][1]}, ${a_inverse[1][0]}, ${a_inverse[1][1]}`);
    let inp0 = document.getElementById('deta-inp');
    let sp0 = document.getElementById('deta-val-sp');
    let inp = document.getElementById('ain-00');
    let sp = document.getElementById('ain-00-val-sp');
    let inp1 = document.getElementById('ain-01');
    let sp1 = document.getElementById('ain-01-val-sp');
    let inp2 = document.getElementById('ain-10');
    let sp2 = document.getElementById('ain-10-val-sp');
    let inp3 = document.getElementById('ain-11');
    let sp3 = document.getElementById('ain-11-val-sp');
    if (!verify_values(parseFloat(inp0.value), det_a)) {
        alert('determinant value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp.value), a_inverse[0][0])) {
        alert('row 1 and col 1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), a_inverse[0][1])) {
        alert('row 1 and col 2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a_inverse[1][0])) {
        alert('row 2 and col 1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), a_inverse[1][1])) {
        alert("row 2 and col 2 value is incorrect, calculate again.");
        return;
    }
    btn.remove();
    inp0.remove();
    sp0.innerText = `${det_a.toFixed(3)}`;
    inp.remove();
    sp.innerText = `${a_inverse[0][0].toFixed(4)}`;
    inp1.remove();
    sp1.innerText = `${a_inverse[0][1].toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${a_inverse[1][0].toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${a_inverse[1][1].toFixed(4)}`;
    alert('Your entered values are correct!!');
    let ele = document.getElementById('fi');
    ele.style.display = 'block';
}
function verify_a12() {
    let btn = document.getElementById('temp-btn-121');
    console.log(`eigen vector => ${evec[0][0]}, ${evec[0][1]} and eigen values ${eigen[0][0]}, ${eigen[0][1]}`);
    let inp = document.getElementById('evec-0');
    let sp = document.getElementById('evec-0-val-sp');
    let inp1 = document.getElementById('evec-1');
    let sp1 = document.getElementById('evec-1-val-sp');
    let inp2 = document.getElementById('ev-0');
    let sp2 = document.getElementById('ev-0-val-sp');
    let inp3 = document.getElementById('ev-1');
    let sp3 = document.getElementById('ev-1-val-sp');
    if (!verify_values(parseFloat(inp.value), evec[0][0])) {
        alert(' eigen vector row 1 and col 1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), evec[0][1])) {
        alert(' eigen vector row 2 and col 1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), eigen[0][0])) {
        alert('eigen value row 1 and col 1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), eigen[0][1])) {
        alert("eigen value row 2 and col 1 value is incorrect, calculate again.");
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${evec[0][0].toFixed(4)}`;
    inp1.remove();
    sp1.innerText = `${evec[0][1].toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${eigen[0][0].toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${eigen[0][1].toFixed(4)}`;
    alert('Your entered values are correct!!');
    // normalize by fiding smallest value
    if (eigen[0][0] < eigen[0][1]) {
        values.push(eigen[0][0]);
        evec[0][0] = 1;
        evec[0][1] = eigen[0][1] / eigen[0][0];
    }
    else {
        values.push(eigen[0][1]);
        evec[0][1] = 1;
        evec[0][0] = eigen[0][0] / eigen[0][1];
    }
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map