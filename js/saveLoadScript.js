var int_formatter = new Intl.NumberFormat('en-US')
var save_target = [
    "inputJobAtkPower", "inputJobCritDmg", "inputJobBossDmg", "inputJobSkillDmg", "inputJobAllSkillDmg",

    "inputWeaponType", "inputWeaponUpgrade", "inputWeaponStage", "inputWeaponAtkPower", "inputWeaponCritDmg",
    "checkBoxAmetType", "inputEquipUpgradeTopAmet", "inputEquipReforgeTopAmet", "inputEquipUpgradeBottomAmet", "inputEquipReforgeBottomAmet", "inputEquipUpgradeGloveAmet", "inputEquipReforgeGloveAmet", "inputEquipUpgradeShoesAmet", "inputEquipReforgeShoesAmet",
    "checkBoxTeneType", "inputEquipUpgradeTopTene", "inputEquipReforgeTopTene", "inputEquipUpgradeBottomTene", "inputEquipReforgeBottomTene", "inputEquipUpgradeGloveTene", "inputEquipReforgeGloveTene", "inputEquipUpgradeShoesTene", "inputEquipReforgeShoesTene",

    "inputOtherBossDmgStone", "inputOtherDeBuff", "inputOtherReson", 

    "inputPerAtkPower", "inputPerCritDmg", "inputPerBossDmg", "inputPerSkillDmg", "inputPerAllSkillDmg", "inputPerPolar", "inputPerAdapt",
]
var save_special_target = [
    "inputEquipAmetBoth", "inputEquipTeneBoth", "inputEquipRadioBoth", "checkBoxCooldown", "checkBoxVer55"
]

function saveData() {
    var tempString = ""

    // Job
    tempString += document.getElementById("inputJobAtkPower").value
    tempString += ", " + document.getElementById("inputJobCritDmg").value
    tempString += ", " + document.getElementById("inputJobBossDmg").value
    tempString += ", " + document.getElementById("inputJobSkillDmg").value
    tempString += ", " + document.getElementById("inputJobAllSkillDmg").value

    // Weapon
    tempString += ", " + document.getElementById("inputWeaponType").value
    tempString += ", " + document.getElementById("inputWeaponUpgrade").value
    tempString += ", " + document.getElementById("inputWeaponStage").value
    tempString += ", " + document.getElementById("inputWeaponAtkPower").value
    tempString += ", " + document.getElementById("inputWeaponCritDmg").value

    // Equip
    tempString += ", " + document.getElementById("inputEquipRadioAmet").checked
    tempString += ", " + document.getElementById("inputEquipRadioTene").checked
    tempString += ", " + document.getElementById("inputEquipRadioBoth").checked
    tempString += ", " + document.getElementById("checkBoxAmetType").checked
    tempString += ", " + document.getElementById("inputEquipUpgradeTopAmet").value
    tempString += ", " + document.getElementById("inputEquipReforgeTopAmet").value
    tempString += ", " + document.getElementById("inputEquipUpgradeBottomAmet").value
    tempString += ", " + document.getElementById("inputEquipReforgeBottomAmet").value
    tempString += ", " + document.getElementById("inputEquipUpgradeGloveAmet").value
    tempString += ", " + document.getElementById("inputEquipReforgeGloveAmet").value
    tempString += ", " + document.getElementById("inputEquipUpgradeShoesAmet").value
    tempString += ", " + document.getElementById("inputEquipReforgeShoesAmet").value
    tempString += ", " + document.getElementById("checkBoxTeneType").checked
    tempString += ", " + document.getElementById("inputEquipUpgradeTopTene").value
    tempString += ", " + document.getElementById("inputEquipReforgeTopTene").value
    tempString += ", " + document.getElementById("inputEquipUpgradeBottomTene").value
    tempString += ", " + document.getElementById("inputEquipReforgeBottomTene").value
    tempString += ", " + document.getElementById("inputEquipUpgradeGloveTene").value
    tempString += ", " + document.getElementById("inputEquipReforgeGloveTene").value
    tempString += ", " + document.getElementById("inputEquipUpgradeShoesTene").value
    tempString += ", " + document.getElementById("inputEquipReforgeShoesTene").value

    // Other
    tempString += ", " + document.getElementById("inputOtherBossDmgStone").value
    tempString += ", " + document.getElementById("inputOtherDeBuff").value
    tempString += ", " + document.getElementById("inputOtherReson").value

    // Personal
    tempString += ", " + document.getElementById("inputPerAtkPower").value
    tempString += ", " + document.getElementById("inputPerCritDmg").value
    tempString += ", " + document.getElementById("inputPerBossDmg").value
    tempString += ", " + document.getElementById("inputPerSkillDmg").value
    tempString += ", " + document.getElementById("inputPerAllSkillDmg").value
    tempString += ", " + document.getElementById("inputPerPolar").value
    tempString += ", " + document.getElementById("inputPerAdapt").value
    
    // CheckBox
    tempString += ", " + document.getElementById("checkBoxCooldown").checked
    tempString += ", " + document.getElementById("checkBoxVer55").checked

    // Result
    var inputSaveData = document.getElementById("inputSaveData")
    inputSaveData.value = tempString
}

function copyData() {
    navigator.clipboard.writeText(document.getElementById("inputSaveData").value)
}

function loadData() {
    var inputData = document.getElementById("inputLoadData").value
    if (inputData != "") {
        inputData = inputData.split(", ")
        
        // Job
        document.getElementById("inputJobAtkPower").value = inputData[0]
        document.getElementById("inputJobCritDmg").value = inputData[1]
        document.getElementById("inputJobBossDmg").value = inputData[2]
        document.getElementById("inputJobSkillDmg").value = inputData[3]
        document.getElementById("inputJobAllSkillDmg").value = inputData[4]

        // Weapon
        document.getElementById("inputWeaponType").value = inputData[5]
        document.getElementById("inputWeaponUpgrade").value = inputData[6]
        document.getElementById("inputWeaponStage").value = inputData[7]
        document.getElementById("inputWeaponAtkPower").value = inputData[8]
        document.getElementById("inputWeaponCritDmg").value = inputData[9]

        // Equip
        document.getElementById("inputEquipRadioAmet").checked = parseBoolean(inputData[10])
        document.getElementById("inputEquipRadioTene").checked = parseBoolean(inputData[11])
        document.getElementById("inputEquipRadioBoth").checked = parseBoolean(inputData[12])
        document.getElementById("checkBoxAmetType").checked = parseBoolean(inputData[13])
        document.getElementById("inputEquipUpgradeTopAmet").value = inputData[14]
        document.getElementById("inputEquipReforgeTopAmet").value = inputData[15]
        document.getElementById("inputEquipUpgradeBottomAmet").value = inputData[16]
        document.getElementById("inputEquipReforgeBottomAmet").value = inputData[17]
        document.getElementById("inputEquipUpgradeGloveAmet").value = inputData[18]
        document.getElementById("inputEquipReforgeGloveAmet").value = inputData[19]
        document.getElementById("inputEquipUpgradeShoesAmet").value = inputData[20]
        document.getElementById("inputEquipReforgeShoesAmet").value = inputData[21]
        document.getElementById("checkBoxTeneType").checked = parseBoolean(inputData[22])
        document.getElementById("inputEquipUpgradeTopTene").value = inputData[23]
        document.getElementById("inputEquipReforgeTopTene").value = inputData[24]
        document.getElementById("inputEquipUpgradeBottomTene").value = inputData[25]
        document.getElementById("inputEquipReforgeBottomTene").value = inputData[26]
        document.getElementById("inputEquipUpgradeGloveTene").value = inputData[27]
        document.getElementById("inputEquipReforgeGloveTene").value = inputData[28]
        document.getElementById("inputEquipUpgradeShoesTene").value = inputData[29]
        document.getElementById("inputEquipReforgeShoesTene").value = inputData[30]

        // Other
        document.getElementById("inputOtherBossDmgStone").value = inputData[31]
        document.getElementById("inputOtherDeBuff").value = inputData[32]
        document.getElementById("inputOtherReson").value = inputData[33]

        // Personal
        document.getElementById("inputPerAtkPower").value = inputData[34]
        document.getElementById("inputPerCritDmg").value = inputData[35]
        document.getElementById("inputPerBossDmg").value = inputData[36]
        document.getElementById("inputPerSkillDmg").value = inputData[37]
        document.getElementById("inputPerAllSkillDmg").value = inputData[38]
        document.getElementById("inputPerPolar").value = inputData[39]
        document.getElementById("inputPerAdapt").value = inputData[40]
        
        // CheckBox
        document.getElementById("checkBoxCooldown").checked = parseBoolean(inputData[41])
        document.getElementById("checkBoxVer55").checked = parseBoolean(inputData[42])
    }
}

function parseBoolean(input_var) {
    if (input_var == "true") {
        return true
    } else {
        return false
    }
}

// Cookie
function saveCookie() {
    // Expire Date
    var expireDate = new Date()
    expireDate.setTime(expireDate.getTime() + 31536000000)
    expireDate = expireDate.toUTCString()

    // Save Cookie
    save_target.forEach(target => {
        document.cookie = "combiCalc_" + target + "=" + document.getElementById(target).value + "; expires=" + expireDate + "; path=/"
    });
    save_special_target.forEach(target => {
        if (document.getElementById(target).checked) {
            document.cookie = "combiCalc_" + target + "=1; expires=" + expireDate + "; path=/"
        } else {
            document.cookie = "combiCalc_" + target + "=0; expires=" + expireDate + "; path=/"
        }
    });
    
    alert('test')
}

function loadCookie() {
    if (document.cookie) {
        var cookieData = decodeURIComponent(document.cookie).split("; ")

        cookieData.forEach(cData => {
            tempData = cData.split("=")
            if (tempData[0].substr(0, 10) == "combiCalc_") {
                var tempName = tempData[0].substr(10)
                if (save_special_target.indexOf(tempName) >= 0) {
                    if (tempData[1] == "1") {
                        document.getElementById(target).checked = true
                    } else {
                        document.getElementById(target).checked = false
                    }
                } else {
                    document.getElementById(tempName).value = tempData[1]
                }
            }
        });
    } 
}

