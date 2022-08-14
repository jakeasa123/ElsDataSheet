int_formatter = new Intl.NumberFormat('en-US')

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function inputCheckSymbol() {
    if (isNaN(document.getElementById("inputIcePotion").value)) {
        document.getElementById("inputIcePotion").value = 80000
    }
    if (isNaN(document.getElementById("inputMountPotion").value)) {
        document.getElementById("inputMountPotion").value = 80000
    }
    if (isNaN(document.getElementById("inputAdaptPotion").value)) {
        document.getElementById("inputAdaptPotion").value = 900000
    }

    if (isNaN(document.getElementById("inputImprintStoneBox").value)) {
        document.getElementById("inputImprintStoneBox").value = 1750000
    }

    if (isNaN(document.getElementById("input15RCoupon").value)) {
        document.getElementById("input15RCoupon").value = 250000000
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

    document.getElementById("resultImprintStoneBox").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputImprintStoneBox").value) * 1 / 100, 0
        )
    )

    document.getElementById("result15RCoupon").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("input15RCoupon").value) * 1 / 500, 0
        )
    )
}

function inputCheckCrystal() {
    if (isNaN(document.getElementById("inputRandomImprintStoneCrystal").value)) {
        document.getElementById("inputRandomImprintStoneCrystal").value = 1750000
    }

    if (isNaN(document.getElementById("inputMountPotionCrystal").value)) {
        document.getElementById("inputMountPotionCrystal").value = 80000
    }

    if (isNaN(document.getElementById("inputGiantStoneCouponCrystal").value)) {
        document.getElementById("inputGiantStoneCouponCrystal").value = 230000000
    }

    if (isNaN(document.getElementById("input15RCouponCrystal").value)) {
        document.getElementById("input15RCouponCrystal").value = 250000000
    }
    if (isNaN(document.getElementById("inputRedStoneCouponCrystal").value)) {
        document.getElementById("inputRedStoneCouponCrystal").value = 3500000
    }
    if (isNaN(document.getElementById("inputBlueStoneCouponCrystal").value)) {
        document.getElementById("inputBlueStoneCouponCrystal").value = 3500000
    }
    if (isNaN(document.getElementById("inputYellowStoneCouponCrystal").value)) {
        document.getElementById("inputYellowStoneCouponCrystal").value = 3500000
    }
}

function executeCalcCrystal() {
    inputCheckCrystal()
    
    document.getElementById("resultRandomImprintStoneCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputRandomImprintStoneCrystal").value) * 1 / 1, 0
        )
    )
    
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