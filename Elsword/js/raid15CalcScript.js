int_formatter = new Intl.NumberFormat('en-US')

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function inputCheckSymbol() {
    if (isNaN(document.getElementById("inputIcePotion").value)) {
        document.getElementById("inputIcePotion").value = 30000
    }
    if (isNaN(document.getElementById("inputMountPotion").value)) {
        document.getElementById("inputMountPotion").value = 30000
    }
    if (isNaN(document.getElementById("inputAdaptPotion").value)) {
        document.getElementById("inputAdaptPotion").value = 300000
    }

    if (isNaN(document.getElementById("input15RCoupon").value)) {
        document.getElementById("input15RCoupon").value = 70000000
    }
}

function executeCalcSymbol() {
    inputCheckSymbol()

    document.getElementById("resultIcePotion").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputIcePotion").value) * 10 / 2, 0
        )
    )
    document.getElementById("resultMountPotion").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputMountPotion").value) * 10 / 2, 0
        )
    )
    document.getElementById("resultAdaptPotion").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputAdaptPotion").value) * 1 / 2, 0
        )
    )

    document.getElementById("result15RCoupon").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("input15RCoupon").value) * 1 / 500, 0
        )
    )
}

function inputCheckCrystal() {

    if (isNaN(document.getElementById("inputMountPotionCrystal").value)) {
        document.getElementById("inputMountPotionCrystal").value = 30000
    }

    if (isNaN(document.getElementById("inputGiantStoneCouponCrystal").value)) {
        document.getElementById("inputGiantStoneCouponCrystal").value = 180000000
    }

    if (isNaN(document.getElementById("input15RCouponCrystal").value)) {
        document.getElementById("input15RCouponCrystal").value = 70000000
    }
    if (isNaN(document.getElementById("inputRedStoneCouponCrystal").value)) {
        document.getElementById("inputRedStoneCouponCrystal").value = 288000000
    }
    if (isNaN(document.getElementById("inputBlueStoneCouponCrystal").value)) {
        document.getElementById("inputBlueStoneCouponCrystal").value = 288000000
    }
    if (isNaN(document.getElementById("inputYellowStoneCouponCrystal").value)) {
        document.getElementById("inputYellowStoneCouponCrystal").value = 288000000
    }
}

function executeCalcCrystal() {
    inputCheckCrystal()

    document.getElementById("resultMountPotionCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputMountPotionCrystal").value) * 300 / 2, 0
        )
    )

    document.getElementById("resultGiantStoneCouponCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputGiantStoneCouponCrystal").value) * 1 / 3, 0
        )
    )

    document.getElementById("result15RCouponCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("input15RCouponCrystal").value) * 1 / 5, 0
        )
    )
    document.getElementById("resultRedStoneCouponCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputRedStoneCouponCrystal").value) * 1 / 5, 0
        )
    )
    document.getElementById("resultBlueStoneCouponCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputBlueStoneCouponCrystal").value) * 1 / 5, 0
        )
    )
    document.getElementById("resultYellowStoneCouponCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputYellowStoneCouponCrystal").value) * 1 / 5, 0
        )
    )
}