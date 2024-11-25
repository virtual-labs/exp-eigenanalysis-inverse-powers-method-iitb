function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Do Second Iteration</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let ev0_html = get_matrix_html(2, 1, [
        [parseFloat(eigen[0][0].toFixed(4))],
        [parseFloat(eigen[0][1].toFixed(4))]
    ], 'inline-block', '120px');
    let ev1_html = get_matrix_html(2, 1, [
        [`<input type='number' class='form-control' style='width: 120px;' id='a2-inp1' ><span id='a2-inp1-val-sp'></span>`],
        [`<input type='number' class='form-control' style='width: 120px;' id='a2-inp2' ><span id='a2-inp2-val-sp'></span>`]
    ], 'inline-block', '120px');
    let ain_html = get_matrix_html(2, 2, [[a_inverse[0][0].toFixed(4), a_inverse[0][1].toFixed(4)], [a_inverse[1][0].toFixed(4), a_inverse[1][1].toFixed(4)]], 'inline-block', '120px');
    let ev2 = get_matrix_html(2, 1, [[parseFloat(evec[0][0].toFixed(4))], [parseFloat(evec[0][1].toFixed(4))]], 'inline-block', '120px');
    let mm = matrix_multiplication(a_inverse, [[evec[0][0]], [evec[0][1]]]);
    // eigen[1][0] = mm[0][0];
    // eigen[1][1] = mm[1][0];
    eigen.push([mm[0][0], mm[1][0]]);
    let ev3_html = get_matrix_html(2, 1, [
        [`<input type='number' class='form-control' style='width: 120px;' id='ev3-1' ><span id='ev3-1-val-sp'></span>`],
        [`<input type='number' class='form-control' style='width: 120px;' id='ev3-2' ><span id='ev3-2-val-sp'></span>`]
    ], 'inline-block', '120px');
    let btn_text = get_collapse_btn_text("Second Iteration", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <p style='text-align: center;'>Normalizing by smallest element value</p>

        <div style='text-align: center;'>
            ${ev0_html} = ${values[0].toFixed(4)} x ${ev1_html}
        </div>


        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a21();'  id='temp-btn-first' >Verify</button></div>

        <div id='a2-second-section' style='display: none;'>


        <div style='text-align: center;'>
            ${ain_html} x ${ev2} = ${ev3_html}
        </div>
        

        <br>

       
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a2();'  id='temp-btn-20' >Verify</button></div>
        
        </div>
        
    </div>

    `;
    maindiv.innerHTML += text;
    // internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_a21() {
    let btn = document.getElementById('temp-btn-first');
    console.log(`run => ${evec[0][0]}, ${evec[0][1]}`);
    let inp1 = document.getElementById('a2-inp1');
    let sp1 = document.getElementById('a2-inp1-val-sp');
    let inp2 = document.getElementById('a2-inp2');
    let sp2 = document.getElementById('a2-inp2-val-sp');
    if (!verify_values(parseFloat(inp1.value), evec[0][0])) {
        alert('first row first column value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), evec[0][1])) {
        alert('second row first column value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${evec[0][0].toFixed(2)}`;
    inp2.remove();
    sp2.innerText = `${evec[0][1].toFixed(2)}`;
    alert('Your entered values are correct!!');
    let ele = document.getElementById('a2-second-section');
    ele.style.display = 'block';
}
function verify_a2() {
    let btn = document.getElementById('temp-btn-20');
    console.log(`run => ${eigen[1][0]}, ${eigen[1][1]}`);
    let inp1 = document.getElementById('ev3-1');
    let sp1 = document.getElementById('ev3-1-val-sp');
    let inp2 = document.getElementById('ev3-2');
    let sp2 = document.getElementById('ev3-2-val-sp');
    if (!verify_values(parseFloat(inp1.value), eigen[1][0])) {
        alert('first row first column value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), eigen[1][1])) {
        alert('second row first column value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${eigen[1][0].toFixed(2)}`;
    inp2.remove();
    sp2.innerText = `${eigen[1][1].toFixed(2)}`;
    alert('Your entered values are correct!!');
    let ele = document.getElementById('a2-second-section');
    ele.style.display = 'block';
    start_act3();
}
//# sourceMappingURL=activity2.js.map