function inv_power(a) {
    let eigen_vect = [1, 1];
    let temp_eigen_vect = [];
    let tab1 = [];
    let eigen_val;
    for (let i = 0; i < 10; i++) {
        temp_eigen_vect[0] = a[0][0] * eigen_vect[0] + a[0][1] * eigen_vect[1];
        temp_eigen_vect[1] = a[1][0] * eigen_vect[0] + a[1][1] * eigen_vect[1];
        console.log(temp_eigen_vect);
        if (Math.abs(temp_eigen_vect[0]) < Math.abs(temp_eigen_vect[1])) {
            eigen_val = temp_eigen_vect[0];
        }
        else {
            eigen_val = temp_eigen_vect[1];
        }
        eigen_vect[0] = temp_eigen_vect[0] / eigen_val;
        eigen_vect[1] = temp_eigen_vect[1] / eigen_val;
        tab1.push({ "eigen_val": eigen_val, "eigen_vect": [eigen_vect[0], eigen_vect[1]], "temp_eigen": [temp_eigen_vect[0], temp_eigen_vect[1]] });
        eigen.push([temp_eigen_vect[0], temp_eigen_vect[1]]);
    }
    return (tab1);
}
//# sourceMappingURL=in_powe.js.map