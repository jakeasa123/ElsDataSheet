
function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}


function input_check(in_dmg_reduce, in_def) {
    // Damage Reduce
    if (isNaN(in_dmg_reduce)) {
        document.getElementById("dmgReduce").value = '30.0'
    } else {
        in_dmg_reduce = parseFloat(in_dmg_reduce)
        if (in_dmg_reduce < 0) {
            document.getElementById("dmgReduce").value = '0.0'
        } else if (in_dmg_reduce > 45) {
            document.getElementById("dmgReduce").value = '45.0'
        }
    }

    // Defence
    if (isNaN(in_def)) {
        document.getElementById("def").value = '11750'
    } else {
        in_def = parseInt(in_def)
        if (in_def < 0) {
            document.getElementById("def").value = '0'
        } else if (in_def > 99999) {
            document.getElementById("def").value = '99999'
        }
    }
}

function executeCalc() {

    var int_formatter = new Intl.NumberFormat('en-US')

    input_check(
        document.getElementById("dmgReduce").value,
        document.getElementById("def").value
    )

    var currentDmgReduce = parseFloat(document.getElementById("dmgReduce").value)
    var currentDefence = parseInt(document.getElementById("def").value)

    currentDefenceDmg = roundTo((currentDefence / (currentDefence + 4154.55)) * 100, 2)

    dmgReduceBuff = roundTo(currentDmgReduce * 1.1, 2)
    dmgReduceDmg = roundTo(((100 - dmgReduceBuff) / (100 - currentDmgReduce)) * 100, 2)

    document.getElementById("resultDmgReduce").innerHTML = currentDmgReduce + "%"
    document.getElementById("resultDmgReduceBuff").innerHTML = dmgReduceBuff + "%"
    document.getElementById("resultDmgReduceDmg").innerHTML = dmgReduceDmg + "%"

    defBuff = roundTo(currentDefence * 1.1, 2)
    defBuffDmg = roundTo((defBuff / (defBuff + 4154.55)) * 100, 2)
    defBuffDmg = roundTo(((100 - defBuffDmg) / (100 - currentDefenceDmg)) * 100, 2)


    document.getElementById("resultDef").innerHTML = int_formatter.format(currentDefence)
    document.getElementById("resultDefBuff").innerHTML = int_formatter.format(defBuff)
    document.getElementById("resultDefDmg").innerHTML = defBuffDmg + "%"
}
