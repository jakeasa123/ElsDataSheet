
function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function input_check() {
    if (isNaN(document.getElementById("ecPrice").value)) {
        document.getElementById("ecPrice").value = 230000
    }
    if (isNaN(document.getElementById("stonePrice").value)) {
        document.getElementById("stonePrice").value = 7000000
    }
    if (isNaN(document.getElementById("crystalPrice").value)) {
        document.getElementById("crystalPrice").value = 700000
    }
    if (isNaN(document.getElementById("scrollPrice").value)) {
        document.getElementById("scrollPrice").value = 54000000
    }
    
}

function executeCalc() {

    var int_formatter = new Intl.NumberFormat('en-US')

    input_check()

    var ecPrice = document.getElementById("ecPrice").value
    var stonePrice = document.getElementById("stonePrice").value
    var crystalPrice = document.getElementById("crystalPrice").value
    var scrollPrice = document.getElementById("scrollPrice").value
    
    // 輸入
    document.getElementById("inputECPrice").innerHTML = int_formatter.format(ecPrice)
    document.getElementById("inputStonePrice").innerHTML = int_formatter.format(stonePrice)
    document.getElementById("inputCrystalPrice").innerHTML = int_formatter.format(crystalPrice)
    document.getElementById("inputScrollPrice").innerHTML = int_formatter.format(scrollPrice)

    // 概要
    // Stone Pack
    var tempPackED = ecPrice * 800
    var tempPackPrice = stonePrice * 20
    var tempPackHammer = roundTo((tempPackED - tempPackPrice) / 3, 0)
    document.getElementById("resultStoneED").innerHTML = int_formatter.format(tempPackED)
    document.getElementById("resultStonePrice").innerHTML = int_formatter.format(tempPackPrice)
    document.getElementById("resultStoneHammer").innerHTML = int_formatter.format(tempPackHammer)

    // Crystal Pack
    tempPackED = ecPrice * 1050
    tempPackPrice = crystalPrice * 10
    tempPackHammer = roundTo((tempPackED - tempPackPrice) / 10, 0)
    document.getElementById("resultCrystalED").innerHTML = int_formatter.format(tempPackED)
    document.getElementById("resultCrystalPrice").innerHTML = int_formatter.format(tempPackPrice)
    document.getElementById("resultCrystalHammer").innerHTML = int_formatter.format(tempPackHammer)

    // Scroll Pack
    tempPackED = ecPrice * 1200
    tempPackPrice = scrollPrice * 5
    tempPackHammer = roundTo((tempPackED - tempPackPrice) / 5, 0)
    document.getElementById("resultScrollED").innerHTML = int_formatter.format(tempPackED)
    document.getElementById("resultScrollPrice").innerHTML = int_formatter.format(tempPackPrice)
    document.getElementById("resultScrollHammer").innerHTML = int_formatter.format(tempPackHammer)

    // Big Stone Pack
    tempPackED = ecPrice * 3000
    tempPackPrice = stonePrice * 100
    tempPackHammer = roundTo((tempPackED - tempPackPrice) / 20, 0)
    document.getElementById("resultBigStoneED").innerHTML = int_formatter.format(tempPackED)
    document.getElementById("resultBigStonePrice").innerHTML = int_formatter.format(tempPackPrice)
    document.getElementById("resultBigStoneHammer").innerHTML = int_formatter.format(tempPackHammer)
    
}