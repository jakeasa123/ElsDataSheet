
function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function input_check() {
    const etelDust = document.getElementById("etelDust").value;

    if (isNaN(etelDust)) {
        document.getElementById("etelDust").value = '10000';
    }
}

function executeCalc() {
    input_check();
    var int_formatter = new Intl.NumberFormat('en-US');

    const useMerchant = document.getElementById("useMerchant").checked;
    const etelDust = parseFloat(document.getElementById("etelDust").value);
    var jewelPrize = 6000;
    var amberPrize = 4500;
    if (useMerchant) {
        jewelPrize *= 0.76;
        amberPrize *= 0.76;
    }

    const etelStonePrize = etelDust * 5 + 100000;
    const etelSkyblueJewelPrize = etelStonePrize * 3 + 100000 + jewelPrize;
    const etelTopazPrize = etelStonePrize * 6 + 200000 + jewelPrize;
    const etelVioletJewelPrize = etelStonePrize * 10 + 300000 + jewelPrize;
    const etelAmberPrize = etelStonePrize * 15 + 500000 + amberPrize;

    document.getElementById("etelStonePrize").innerHTML = int_formatter.format(etelStonePrize, 0)
    document.getElementById("etelSkyblueJewelPrize").innerHTML = int_formatter.format(etelSkyblueJewelPrize, 0)
    document.getElementById("etelTopazPrize").innerHTML = int_formatter.format(etelTopazPrize, 0)
    document.getElementById("etelVioletJewelPrize").innerHTML = int_formatter.format(etelVioletJewelPrize, 0)
    document.getElementById("etelAmberPrize").innerHTML = int_formatter.format(etelAmberPrize, 0)
}
