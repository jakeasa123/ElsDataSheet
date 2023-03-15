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

    if (isNaN(document.getElementById("inputRedStone").value)) {
        document.getElementById("inputRedStone").value = 200000
    }
    if (isNaN(document.getElementById("inputBlueStone").value)) {
        document.getElementById("inputBlueStone").value = 200000
    }
    if (isNaN(document.getElementById("inputYellowStone").value)) {
        document.getElementById("inputYellowStone").value = 200000
    }
    if (isNaN(document.getElementById("inputGiantStone").value)) {
        document.getElementById("inputGiantStone").value = 900000
    }

    if (isNaN(document.getElementById("input12RCoupon").value)) {
        document.getElementById("input12RCoupon").value = 30000000
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

    document.getElementById("resultRedStone").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputRedStone").value) * 10 / 40, 0
        )
    )
    document.getElementById("resultBlueStone").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputBlueStone").value) * 10 / 40, 0
        )
    )
    document.getElementById("resultYellowStone").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputYellowStone").value) * 10 / 40, 0
        )
    )
    document.getElementById("resultGiantStone").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputGiantStone").value) * 2 / 40, 0
        )
    )

    document.getElementById("result12RCoupon").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("input12RCoupon").value) * 1 / 350, 0
        )
    )
}

function inputCheckCrystal() {
    if (isNaN(document.getElementById("inputMountPotionCrystal").value)) {
        document.getElementById("inputMountPotionCrystal").value = 30000
    }

    if (isNaN(document.getElementById("inputRedStoneCrystal").value)) {
        document.getElementById("inputRedStoneCrystal").value = 200000
    }
    if (isNaN(document.getElementById("inputBlueStoneCrystal").value)) {
        document.getElementById("inputBlueStoneCrystal").value = 200000
    }
    if (isNaN(document.getElementById("inputYellowStoneCrystal").value)) {
        document.getElementById("inputYellowStoneCrystal").value = 200000
    }
    if (isNaN(document.getElementById("inputGiantStoneCrystal").value)) {
        document.getElementById("inputGiantStoneCrystal").value = 900000
    }

    if (isNaN(document.getElementById("input12RCouponCrystal").value)) {
        document.getElementById("input12RCouponCrystal").value = 30000000
    }
}

function executeCalcCrystal() {
    inputCheckCrystal()

    document.getElementById("resultMountPotionCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputMountPotionCrystal").value) * 300 / 2, 0
        )
    )

    document.getElementById("resultRedStoneCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputRedStoneCrystal").value) * 60 / 3, 0
        )
    )
    document.getElementById("resultBlueStoneCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputBlueStoneCrystal").value) * 60 / 3, 0
        )
    )
    document.getElementById("resultYellowStoneCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputYellowStoneCrystal").value) * 60 / 3, 0
        )
    )
    document.getElementById("resultGiantStoneCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("inputGiantStoneCrystal").value) * 10 / 3, 0
        )
    )

    document.getElementById("result12RCouponCrystal").innerHTML = int_formatter.format(
        roundTo(
            parseInt(document.getElementById("input12RCouponCrystal").value) * 1 / 5, 0
        )
    )
}