
function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function input_check() {
    const shadowdecon = document.getElementById("shadowdecon").value;
    if (isNaN(shadowdecon)) {
        document.getElementById("shadowdecon").value = '10000';
    }
    const reformStoneCountInput_1 = document.getElementById("reformStoneCountInput_1").value;
    if (isNaN(reformStoneCountInput_1)) {
        document.getElementById("reformStoneCountInput_1").value = '100';
    }
    const reformStoneCountInput_2 = document.getElementById("reformStoneCountInput_2").value;
    if (isNaN(reformStoneCountInput_2)) {
        document.getElementById("reformStoneCountInput_2").value = '100';
    }
    const reformStoneCountInput_3 = document.getElementById("reformStoneCountInput_3").value;
    if (isNaN(reformStoneCountInput_3)) {
        document.getElementById("reformStoneCountInput_3").value = '100';
    }
    const reformStoneCountInput_4 = document.getElementById("reformStoneCountInput_4").value;
    if (isNaN(reformStoneCountInput_4)) {
        document.getElementById("reformStoneCountInput_4").value = '100';
    }
}

function executeCalc() {
    input_check();
    var int_formatter = new Intl.NumberFormat('en-US');
    const shadowdecon = document.getElementById("shadowdecon").value;

    const shadowdeconOrePrize = shadowdecon / 20;
    
    const reformStonePrize_1 = shadowdecon * 1 + 20000;
    const reformStonePrize_2 = reformStonePrize_1 * 3 + 10000;
    const reformStonePrize_3 = reformStonePrize_2 * 3 + 20000;
    const reformStonePrize_4 = reformStonePrize_3 * 3 + 50000;

    const reformOrePrize_1 = (reformStonePrize_1 - 10000) / 5;
    const reformOrePrize_2 = (reformStonePrize_2 - 20000) / 5;
    const reformOrePrize_3 = (reformStonePrize_3 - 50000) / 5;
    const reformOrePrize_4 = (reformStonePrize_4 - 100000) / 5;

    document.getElementById("shadowdeconOrePrize").innerHTML = int_formatter.format(shadowdeconOrePrize, 0)
    document.getElementById("reformStonePrize_1").innerHTML = int_formatter.format(reformStonePrize_1, 0)
    document.getElementById("reformStonePrize_2").innerHTML = int_formatter.format(reformStonePrize_2, 0)
    document.getElementById("reformStonePrize_3").innerHTML = int_formatter.format(reformStonePrize_3, 0)
    document.getElementById("reformStonePrize_4").innerHTML = int_formatter.format(reformStonePrize_4, 0)
    document.getElementById("reformOrePrize_1").innerHTML = int_formatter.format(reformOrePrize_1, 0)
    document.getElementById("reformOrePrize_2").innerHTML = int_formatter.format(reformOrePrize_2, 0)
    document.getElementById("reformOrePrize_3").innerHTML = int_formatter.format(reformOrePrize_3, 0)
    document.getElementById("reformOrePrize_4").innerHTML = int_formatter.format(reformOrePrize_4, 0)
    
    const reformStoneCountInput_1 = document.getElementById("reformStoneCountInput_1").value;
    const reformStoneCountInput_2 = document.getElementById("reformStoneCountInput_2").value;
    const reformStoneCountInput_3 = document.getElementById("reformStoneCountInput_3").value;
    const reformStoneCountInput_4 = document.getElementById("reformStoneCountInput_4").value;
    
    document.getElementById("reformStoneCountPrize_1").innerHTML = int_formatter.format(reformStoneCountInput_1 * reformStonePrize_1, 0)
    document.getElementById("reformStoneCountPrize_2").innerHTML = int_formatter.format(reformStoneCountInput_2 * reformStonePrize_2, 0)
    document.getElementById("reformStoneCountPrize_3").innerHTML = int_formatter.format(reformStoneCountInput_3 * reformStonePrize_3, 0)
    document.getElementById("reformStoneCountPrize_4").innerHTML = int_formatter.format(reformStoneCountInput_4 * reformStonePrize_4, 0)

    document.getElementById("reformShadowdeconCount_1").innerHTML = int_formatter.format(reformStoneCountInput_1 * 1, 0)
    document.getElementById("reformShadowdeconCount_2").innerHTML = int_formatter.format(reformStoneCountInput_2 * 3, 0)
    document.getElementById("reformShadowdeconCount_3").innerHTML = int_formatter.format(reformStoneCountInput_3 * 9, 0)
    document.getElementById("reformShadowdeconCount_4").innerHTML = int_formatter.format(reformStoneCountInput_4 * 27, 0)
}
