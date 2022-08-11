
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