
function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function inputPotionCheck() {
    if (isNaN(document.getElementById("magicPotionPrice").value)) {
        document.getElementById("magicPotionPrice").value = 30000
    }
    if (isNaN(document.getElementById("applePrice").value)) {
        document.getElementById("applePrice").value = 60000
    }
    if (isNaN(document.getElementById("recoveryPotionPrice").value)) {
        document.getElementById("recoveryPotionPrice").value = 15000
    }
    if (isNaN(document.getElementById("icePrice").value)) {
        document.getElementById("icePrice").value = 70000
    }
}

function executeCalcPotion() {

    var int_formatter = new Intl.NumberFormat('en-US')

    inputPotionCheck()
    var magicPotionPrice = document.getElementById("magicPotionPrice").value
    var applePrice = document.getElementById("applePrice").value
    var recoveryPotionPrice = document.getElementById("recoveryPotionPrice").value
    var icePrice = document.getElementById("icePrice").value
    
    // 輸入
    document.getElementById("inputMagicPotionPrice").innerHTML = int_formatter.format(magicPotionPrice)
    document.getElementById("inputApplePrice").innerHTML = int_formatter.format(applePrice)
    document.getElementById("inputRecoveryPotionPrice").innerHTML = int_formatter.format(recoveryPotionPrice)
    document.getElementById("inputIcePrice").innerHTML = int_formatter.format(icePrice)

    // 概要
    // 胖胖杯
    var tempPrice = magicPotionPrice * 5
    var tempPricePerRadish = roundTo(tempPrice / 1, 0)
    document.getElementById("resultMagicPotionPrice").innerHTML = int_formatter.format(tempPrice)
    document.getElementById("resultMagicPotionPricePerRadish").innerHTML = int_formatter.format(tempPricePerRadish)

    // 一般蘋果
    var tempPrice = applePrice * 10
    var tempPricePerRadish = roundTo(tempPrice / 5, 0)
    document.getElementById("resultApplePrice").innerHTML = int_formatter.format(tempPrice)
    document.getElementById("resultApplePricePerRadish").innerHTML = int_formatter.format(tempPricePerRadish)

    // 不重要的完全恢復藥水
    var tempPrice = recoveryPotionPrice * 10
    var tempPricePerRadish = roundTo(tempPrice / 5, 0)
    document.getElementById("resultRecoveryPotionPrice").innerHTML = int_formatter.format(tempPrice)
    document.getElementById("resultRecoveryPotionPricePerRadish").innerHTML = int_formatter.format(tempPricePerRadish)

    // 紅豆冰
    var tempPrice = icePrice * 10
    var tempPricePerRadish = roundTo(tempPrice / 10, 0)
    document.getElementById("resultIcePrice").innerHTML = int_formatter.format(tempPrice)
    document.getElementById("resultIcePricePerRadish").innerHTML = int_formatter.format(tempPricePerRadish)

}

function inputHedgehogCheck() {
    if (isNaN(document.getElementById("glaciaPrice").value)) {
        document.getElementById("glaciaPrice").value = 5000
    }
    if (isNaN(document.getElementById("reScrollPrice").value)) {
        document.getElementById("reScrollPrice").value = 6.5
    }

    if (isNaN(document.getElementById("burnerPriceA").value)) {
        document.getElementById("burnerPriceA").value = 14
    }
    if (isNaN(document.getElementById("topPrice").value)) {
        document.getElementById("topPrice").value = 200
    }
    if (isNaN(document.getElementById("btmPrice").value)) {
        document.getElementById("btmPrice").value = 200
    }
    if (isNaN(document.getElementById("glovePrice").value)) {
        document.getElementById("glovePrice").value = 200
    }
    if (isNaN(document.getElementById("shoesPrice").value)) {
        document.getElementById("shoesPrice").value = 200
    }
    if (isNaN(document.getElementById("hairPrice").value)) {
        document.getElementById("hairPrice").value = 200
    }
    if (isNaN(document.getElementById("speHairPrice").value)) {
        document.getElementById("speHairPrice").value = 200
    }

    if (isNaN(document.getElementById("weaponPrice").value)) {
        document.getElementById("weaponPrice").value = 300
    }
    if (isNaN(document.getElementById("acc1Price").value)) {
        document.getElementById("acc1Price").value = 300
    }
    if (isNaN(document.getElementById("acc2Price").value)) {
        document.getElementById("acc2Price").value = 300
    }
    if (isNaN(document.getElementById("acc3Price").value)) {
        document.getElementById("acc3Price").value = 300
    }
}

function executeCalcHedgehog() {

    var int_formatter = new Intl.NumberFormat('en-US')

    inputHedgehogCheck()
    var glaciaPrice = document.getElementById("glaciaPrice").value
    var reScrollPrice = document.getElementById("reScrollPrice").value * 1000000

    var burnerPrice = document.getElementById("burnerPriceA").value * 1000000
    var topPrice = document.getElementById("topPrice").value * 1000000
    var btmPrice = document.getElementById("btmPrice").value * 1000000
    var glovePrice = document.getElementById("glovePrice").value * 1000000
    var shoesPrice = document.getElementById("shoesPrice").value * 1000000
    var hairPrice = document.getElementById("hairPrice").value * 1000000
    var speHairPrice = document.getElementById("speHairPrice").value * 1000000

    var weaponPrice = document.getElementById("weaponPrice").value * 1000000
    var acc1Price = document.getElementById("acc1Price").value * 1000000
    var acc2Price = document.getElementById("acc2Price").value * 1000000
    var acc3Price = document.getElementById("acc3Price").value * 1000000
    
    // 自由兌換項目
    document.getElementById("resultAmetPrice").innerHTML = int_formatter.format(roundTo(glaciaPrice * 666.67 * 10 / 1, 0))
    document.getElementById("resultReScrollPrice").innerHTML = int_formatter.format(roundTo(reScrollPrice * 10 / 3, 0))

    // 群組兌換項目
    // Left
    document.getElementById("resultBurnerPriceA").innerHTML = int_formatter.format(roundTo(burnerPrice * 10 / 8, 0))

    document.getElementById("resultTopPrice").innerHTML = int_formatter.format(roundTo(topPrice / 14, 0))
    document.getElementById("resultBtmPrice").innerHTML = int_formatter.format(roundTo(btmPrice / 14, 0))
    document.getElementById("resultGlovePrice").innerHTML = int_formatter.format(roundTo(glovePrice / 13, 0))
    document.getElementById("resultShoesPrice").innerHTML = int_formatter.format(roundTo(shoesPrice / 13, 0))
    document.getElementById("resultHairPrice").innerHTML = int_formatter.format(roundTo(hairPrice / 16, 0))
    document.getElementById("resultSpeHairPrice").innerHTML = int_formatter.format(roundTo(speHairPrice / 16, 0))

    var fullPrice = burnerPrice * 10 + topPrice + btmPrice + glovePrice + shoesPrice + hairPrice + speHairPrice
    document.getElementById("fullPriceA").innerHTML = int_formatter.format(fullPrice)
    document.getElementById("resultFullPriceA").innerHTML = int_formatter.format(roundTo(fullPrice / 94, 0))

    // Right
    document.getElementById("burnerPriceB").value = burnerPrice / 1000000
    document.getElementById("resultBurnerPriceB").innerHTML = int_formatter.format(roundTo(burnerPrice * 10 / 8, 0))

    document.getElementById("resultWeaponPrice").innerHTML = int_formatter.format(roundTo(weaponPrice / 16, 0))
    document.getElementById("resultAcc1Price").innerHTML = int_formatter.format(roundTo(acc1Price / 16, 0))
    document.getElementById("resultAcc2Price").innerHTML = int_formatter.format(roundTo(acc2Price / 16, 0))
    document.getElementById("resultAcc3Price").innerHTML = int_formatter.format(roundTo(acc3Price / 16, 0))

    var fullPrice = burnerPrice * 10 + weaponPrice + acc1Price + acc2Price + acc3Price
    document.getElementById("fullPriceB").innerHTML = int_formatter.format(fullPrice)
    document.getElementById("resultFullPriceB").innerHTML = int_formatter.format(roundTo(fullPrice / 72, 0))


}