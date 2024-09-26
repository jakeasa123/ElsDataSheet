
function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function input_check() {
    const snowForzenOre = document.getElementById("snowForzenOre").value;
    const snowForzenStone_1 = document.getElementById("snowForzenStone_1").value;
    const snowForzenStone_2 = document.getElementById("snowForzenStone_2").value;
    const snowForzenStone_3 = document.getElementById("snowForzenStone_3").value;

    if (isNaN(snowForzenOre)) {
        document.getElementById("snowForzenOre").value = '30000';
    }

    if (isNaN(snowForzenStone_1)) {
        document.getElementById("snowForzenStone_1").value = '150000';
    }

    if (isNaN(snowForzenStone_2)) {
        document.getElementById("snowForzenStone_2").value = '750000';
    }

    if (isNaN(snowForzenStone_3)) {
        document.getElementById("snowForzenStone_3").value = '3750000';
    }
}

function executeCalc(editTarget) {
    input_check();
    var int_formatter = new Intl.NumberFormat('en-US');

    const autoCalc = document.getElementById("autoCalc").checked;
    var snowForzenOre = parseFloat(document.getElementById("snowForzenOre").value);
    var snowForzenStone_1 = parseFloat(document.getElementById("snowForzenStone_1").value);
    var snowForzenStone_2 = parseFloat(document.getElementById("snowForzenStone_2").value);
    var snowForzenStone_3 = parseFloat(document.getElementById("snowForzenStone_3").value);

    if (!autoCalc) {
        if (editTarget == 0) {
            snowForzenStone_1 = snowForzenOre * 5;
            document.getElementById("snowForzenStone_1").value = roundTo(snowForzenStone_1, 0);
            snowForzenStone_2 = snowForzenStone_1 * 5;
            document.getElementById("snowForzenStone_2").value = roundTo(snowForzenStone_2, 0);
            snowForzenStone_3 = snowForzenStone_2 * 5;
            document.getElementById("snowForzenStone_3").value = roundTo(snowForzenStone_3, 0);
        } else if (editTarget == 1) {
            snowForzenStone_2 = snowForzenStone_1 * 5;
            document.getElementById("snowForzenStone_2").value = roundTo(snowForzenStone_2, 0);
            snowForzenStone_3 = snowForzenStone_2 * 5;
            document.getElementById("snowForzenStone_3").value = roundTo(snowForzenStone_3, 0);
            snowForzenOre = snowForzenStone_1 / 5;
            document.getElementById("snowForzenOre").value = roundTo(snowForzenOre, 0);
        } else if (editTarget == 2) {
            snowForzenStone_3 = snowForzenStone_2 * 5;
            document.getElementById("snowForzenStone_3").value = roundTo(snowForzenStone_3, 0);
            snowForzenStone_1 = snowForzenStone_2 / 5;
            document.getElementById("snowForzenStone_1").value = roundTo(snowForzenStone_1, 0);
            snowForzenOre = snowForzenStone_1 / 5;
            document.getElementById("snowForzenOre").value = roundTo(snowForzenOre, 0);
        } else if (editTarget == 3) {
            snowForzenStone_2 = snowForzenStone_3 / 5;
            document.getElementById("snowForzenStone_2").value = roundTo(snowForzenStone_2, 0);
            snowForzenStone_1 = snowForzenStone_2 / 5;
            document.getElementById("snowForzenStone_1").value = roundTo(snowForzenStone_1, 0);
            snowForzenOre = snowForzenStone_1 / 5;
            document.getElementById("snowForzenOre").value = roundTo(snowForzenOre, 0);
        }
    }

    const genericPrize = snowForzenStone_1 * 50 + snowForzenStone_2 * 60 + snowForzenStone_3 * 30;
    const thirdPrize = snowForzenStone_1 * 75 + snowForzenStone_2 * 65 + snowForzenStone_3 * 45;
    const fourthPrize = snowForzenStone_1 * 75 + snowForzenStone_2 * 75 + snowForzenStone_3 * 70;

    document.getElementById("genericPrize").innerHTML = int_formatter.format(genericPrize, 0)
    document.getElementById("thirdPrize").innerHTML = int_formatter.format(thirdPrize, 0)
    document.getElementById("fourthPrize").innerHTML = int_formatter.format(fourthPrize, 0)
}
