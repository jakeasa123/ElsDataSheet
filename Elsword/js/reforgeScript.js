
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function executeCalc() {
    var equipType = document.querySelector('input[name="radioEquipType"]:checked').value
    var currentReforge = document.getElementById("currentReforge").value
    var targetReforge = document.getElementById("targetReforge").value

    if (isNaN(currentReforge) || isNaN(targetReforge)) {

        var tipModal = new bootstrap.Modal(document.getElementById('tipModal'))
        tipModal.show()

    } else {

        currentReforge = parseInt(currentReforge)
        targetReforge = parseInt(targetReforge)

        if ((currentReforge >= targetReforge) || (currentReforge > 21) || (targetReforge > 21)) {

            var tipModal = new bootstrap.Modal(document.getElementById('tipModal'))
            tipModal.show()

        } else {

            var questMatCost = []
            var dropMatCost = [
                2000, 2000, 2000, 2000, 2000, 2000,
                2000, 2000, 2000, 4000, 4000, 4000,
                4000, 4000, 4000, 6000, 6000, 6000,
                6000, 6000, 6000
            ]
            var magicCrystalCost = [
                100, 100, 100, 100, 100, 100,
                100, 100, 100, 200, 200, 200,
                200, 200, 200, 300, 300, 300,
                300, 300, 300
            ]
            var edCost = [
                300000, 300000, 300000, 300000, 300000, 300000,
                300000, 300000, 300000, 900000, 900000, 900000,
                900000, 900000, 900000, 1800000, 1800000, 1800000,
                1800000, 1800000, 1800000
            ]
            guaranteedGauge = [
                0.10000, 0.06667, 0.05000, 0.10000, 0.06667, 0.03333,
                0.10000, 0.05000, 0.02500, 0.10000, 0.03333, 0.01667,
                0.05000, 0.02500, 0.01250, 0.02500, 0.00833, 0.00417,
                0.02500, 0.00556, 0.00278
            ]
            guaranteedNeed = []
            guaranteedGauge.forEach(function(item, index, array) {
                guaranteedNeed.push(Math.ceil(1 / item))
            })
            upgradeRate = [
                0.1200, 0.1000, 0.0600, 0.1000, 0.0800, 0.0400,
                0.0800, 0.0500, 0.0200, 0.0600, 0.0300, 0.0100,
                0.0500, 0.0200, 0.0100, 0.0300, 0.0050, 0.0025,
                0.0300, 0.0050, 0.0025
            ]
            expectedValue = []
            for (i = 0 ; i < 21 ; i++) {
                expectedValue.push(
                    Math.ceil(1 + ((1 - upgradeRate[i]) - Math.pow(1 - upgradeRate[i], guaranteedNeed[i])) / upgradeRate[i])
                )
            }


            if (equipType == "radioAmet") {
                document.getElementById("tEquipType").innerHTML = "虹霓防具 " + currentReforge + " → " + targetReforge
                document.getElementById("tReforgeMaterial_1").innerHTML = "13 珠"
                document.getElementById("tReforgeMaterial_2").innerHTML = "13 冰"
                document.getElementById("tRequireDaysLbl_1").innerHTML = "所需天數 (175 / 週)"
                document.getElementById("tRequireDaysFullLbl_1").innerHTML = "所需天數 (275 / 週)"
                document.getElementById("tRequireDaysLbl_2").innerHTML = "所需天數 (175 / 週)"
                document.getElementById("tRequireDaysFullLbl_2").innerHTML = "所需天數 (275 / 週)"

                questMatCost = [
                    3, 3, 3, 3, 3, 3,
                    3, 3, 3, 6, 6, 6,
                    6, 6, 6, 9, 9, 9,
                    9, 9, 9
                ]
            } else {
                document.getElementById("tEquipType").innerHTML = "泰納防具 " + currentReforge + " → " + targetReforge
                document.getElementById("tReforgeMaterial_1").innerHTML = "17 珠"
                document.getElementById("tReforgeMaterial_2").innerHTML = "17 冰"
                document.getElementById("tRequireDaysLbl_1").innerHTML = "-"
                document.getElementById("tRequireDaysFullLbl_1").innerHTML = "所需天數 (2,100 / 週)"
                document.getElementById("tRequireDaysLbl_2").innerHTML = "-"
                document.getElementById("tRequireDaysFullLbl_2").innerHTML = "所需天數 (2,100 / 週)"

                questMatCost = [
                    15, 15, 15, 15, 15, 15,
                    15, 15, 15, 30, 30, 30,
                    30, 30, 30, 45, 45, 45,
                    45, 45, 45
                ]

                dropMatCost[8] = 4000
            }

            excTime = 0
            excQuestMatCost = 0
            excDropMatCost = 0
            excMagicCrystalCost = 0
            excEDCost = 0

            guaTime = 0
            guaQuestMatCost = 0
            guaDropMatCost = 0
            guaMagicCrystalCost = 0
            guaEDCost = 0

            for (i = currentReforge ; i < targetReforge ; i++) {
                excTime += expectedValue[i]
                excQuestMatCost += expectedValue[i] * questMatCost[i]
                excDropMatCost += expectedValue[i] * dropMatCost[i]
                excMagicCrystalCost += expectedValue[i] * magicCrystalCost[i]
                excEDCost += expectedValue[i] * edCost[i]

                guaTime += guaranteedNeed[i]
                guaQuestMatCost += guaranteedNeed[i] * questMatCost[i]
                guaDropMatCost += guaranteedNeed[i] * dropMatCost[i]
                guaMagicCrystalCost += guaranteedNeed[i] * magicCrystalCost[i]
                guaEDCost += guaranteedNeed[i] * edCost[i]
            }

            document.getElementById("tExcTime").innerHTML = numberWithCommas(excTime) + " 次"
            document.getElementById("tExcQuestMat").innerHTML = numberWithCommas(excQuestMatCost)
            document.getElementById("tExcDropMat").innerHTML = numberWithCommas(excDropMatCost)
            document.getElementById("tExcMagicCrystal").innerHTML = numberWithCommas(excMagicCrystalCost)
            document.getElementById("tExcED").innerHTML = numberWithCommas(excEDCost)

            document.getElementById("tGuaTime").innerHTML = numberWithCommas(guaTime) + " 次"
            document.getElementById("tGuaQuestMat").innerHTML = numberWithCommas(guaQuestMatCost)
            document.getElementById("tGuaDropMat").innerHTML = numberWithCommas(guaDropMatCost)
            document.getElementById("tGuaMagicCrystal").innerHTML = numberWithCommas(guaMagicCrystalCost)
            document.getElementById("tGuaED").innerHTML = numberWithCommas(guaEDCost)

            if (equipType == "radioAmet") {
                document.getElementById("tRequireDays_1").innerHTML = roundTo(excQuestMatCost / 550, 2) + " 週"
                document.getElementById("tRequireDaysFull_1").innerHTML = roundTo(excQuestMatCost / 550, 2) + " 週"
                document.getElementById("tRequireDays_2").innerHTML = roundTo(guaQuestMatCost / 550, 2) + " 週"
                document.getElementById("tRequireDaysFull_2").innerHTML = roundTo(guaQuestMatCost / 550, 2) + " 週"

            } else {
                document.getElementById("tRequireDays_1").innerHTML = "- 週"
                document.getElementById("tRequireDaysFull_1").innerHTML = roundTo(excQuestMatCost / 2100, 2) + " 週"
                document.getElementById("tRequireDays_2").innerHTML = "- 週"
                document.getElementById("tRequireDaysFull_2").innerHTML = roundTo(guaQuestMatCost / 2100, 2) + " 週"

            }
        }
    }
}