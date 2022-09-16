
function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function input_check() {
    if (isNaN(document.getElementById("elEssencePrice").value)) {
        document.getElementById("elEssencePrice").value = 25000
    }
    if (isNaN(document.getElementById("elShardPrice").value)) {
        document.getElementById("elShardPrice").value = 50000
    }
    if (isNaN(document.getElementById("alchElixirPrice").value)) {
        document.getElementById("alchElixirPrice").value = 35000
    }
    if (isNaN(document.getElementById("crystalPrice").value)) {
        document.getElementById("crystalPrice").value = 5000
    }
    
}

function executeCalc() {

    var int_formatter = new Intl.NumberFormat('en-US')

    input_check()

    var elEssencePrice = document.getElementById("elEssencePrice").value
    var elShardPrice = document.getElementById("elShardPrice").value
    var alchElixirPrice = document.getElementById("alchElixirPrice").value
    var crystalPrice = document.getElementById("crystalPrice").value

    document.getElementById("resultBuy").innerHTML = int_formatter.format(elEssencePrice)

    document.getElementById("resultTransfer").innerHTML = int_formatter.format(
        roundTo(elShardPrice / 3, 0)
    )

    document.getElementById("resultAlchCreate").innerHTML = int_formatter.format(
        roundTo((alchElixirPrice * 3 + crystalPrice * 30 + 11200) / 20, 0)
    )
    
}