
function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function input_check() {
    // const box = document.getElementById("goodEvilBox").value;
    const fragment = document.getElementById("goodEvilFragment").value;

    // if (isNaN(box)) {
    //     document.getElementById("goodEvilBox").value = '500000';
    // }

    if (isNaN(fragment)) {
        document.getElementById("goodEvilFragment").value = '200000';
    }
}

function executeCalc() {
    input_check();
    var int_formatter = new Intl.NumberFormat('en-US');

    // const box = parseFloat(document.getElementById("goodEvilBox").value);
    const fragment = parseFloat(document.getElementById("goodEvilFragment").value);

    var expectValue = 0;
    for (let i = 5; i <= 20; i++) {
        expectValue += (i / 5) * 0.05625 * fragment;
    }
    for (let i = 1; i <= 5; i++) {
        expectValue += i * 0.02 * fragment;
    }

    document.getElementById("expectValue").innerHTML = int_formatter.format(expectValue, 0)
}
