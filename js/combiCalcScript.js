// Basic Function
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

// Object
function initialData() {
    equipInfo.forEach(function(item) {
        appendEquip(item)
    });
    setInfo.forEach(function(item) {
        appendSet(item)
    });
}

function weaponTypeSelect() {
    var weaponType = document.getElementById("inputWeaponType").value
    if (weaponType == "FOJ") {
        document.getElementById("inputWeaponStage").disabled = true;
    } else {
        document.getElementById("inputWeaponStage").disabled = false;
    }
}

function equipRadioSelect() {
    if (document.getElementById("inputEquipRadioOnlyOne").checked) {
        document.getElementById("inputEquipTypeTopB").disabled = true
        document.getElementById("inputEquipTypeBottomB").disabled = true
        document.getElementById("inputEquipTypeGloveB").disabled = true
        document.getElementById("inputEquipTypeShoesB").disabled = true

        document.getElementById("inputEquipUpgradeTopB").disabled = true
        document.getElementById("inputEquipUpgradeBottomB").disabled = true
        document.getElementById("inputEquipUpgradeGloveB").disabled = true
        document.getElementById("inputEquipUpgradeShoesB").disabled = true

        document.getElementById("inputEquipReforgeTopB").disabled = true
        document.getElementById("inputEquipReforgeBottomB").disabled = true
        document.getElementById("inputEquipReforgeGloveB").disabled = true
        document.getElementById("inputEquipReforgeShoesB").disabled = true
    } else {
        document.getElementById("inputEquipTypeTopB").disabled = false
        document.getElementById("inputEquipTypeBottomB").disabled = false
        document.getElementById("inputEquipTypeGloveB").disabled = false
        document.getElementById("inputEquipTypeShoesB").disabled = false

        document.getElementById("inputEquipUpgradeTopB").disabled = false
        document.getElementById("inputEquipUpgradeBottomB").disabled = false
        document.getElementById("inputEquipUpgradeGloveB").disabled = false
        document.getElementById("inputEquipUpgradeShoesB").disabled = false

        document.getElementById("inputEquipReforgeTopB").disabled = false
        document.getElementById("inputEquipReforgeBottomB").disabled = false
        document.getElementById("inputEquipReforgeGloveB").disabled = false
        document.getElementById("inputEquipReforgeShoesB").disabled = false

        document.getElementById("inputEquipTypeTopA").value = 13
        document.getElementById("inputEquipTypeBottomA").value = 13
        document.getElementById("inputEquipTypeGloveA").value = 13
        document.getElementById("inputEquipTypeShoesA").value = 13

        document.getElementById("inputEquipTypeTopB").value = 17
        document.getElementById("inputEquipTypeBottomB").value = 17
        document.getElementById("inputEquipTypeGloveB").value = 17
        document.getElementById("inputEquipTypeShoesB").value = 17
    }
}

function appendEquip(input_data) {
    var idNumber = (document.getElementById("combiEquipTable").rows.length - 1).toString()
    
    // tr
    var tempChild = document.createElement('tr')
    tempChild.setAttribute("id", "combiEquipTr_" + idNumber)
    tempChild.setAttribute("class", "text-center")
    document.getElementById("combiEquipList").appendChild(tempChild)

    // 啟用
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdEnable_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipEnable_" + idNumber)
    tempChild.setAttribute("class", "form-check-input")
    tempChild.setAttribute("type", "checkbox")
    tempChild.setAttribute("checked", "checked")
    document.getElementById("combiEquipTdEnable_" + idNumber).appendChild(tempChild)

    // 名稱
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdName_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipName_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdName_" + idNumber).appendChild(tempChild)

    // 部位
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdPart_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipPart_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdPart_" + idNumber).appendChild(tempChild)

    // 套裝
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdSetName_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipSetName_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdSetName_" + idNumber).appendChild(tempChild)

    // 技能傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdSkillDmg_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipSkillDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdSkillDmg_" + idNumber).appendChild(tempChild)

    // 攻擊力
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdAtkPower_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipAtkPower_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdAtkPower_" + idNumber).appendChild(tempChild)

    // 暴擊傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdCritDmg_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipCritDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdCritDmg_" + idNumber).appendChild(tempChild)

    // 兩極化
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdPolar_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipPolar_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdPolar_" + idNumber).appendChild(tempChild)

    // Boss 傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdBossDmg_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipBossDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdBossDmg_" + idNumber).appendChild(tempChild)

    // 適應力
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdAdapt_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipAdapt_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdAdapt_" + idNumber).appendChild(tempChild)
    
    if (input_data == false) {
        document.getElementById("combiEquipName_" + idNumber).value = "新增道具 " + idNumber
        document.getElementById("combiEquipPart_" + idNumber).value = ""
        document.getElementById("combiEquipSetName_" + idNumber).value = ""
        document.getElementById("combiEquipSkillDmg_" + idNumber).value = "0"
        document.getElementById("combiEquipAtkPower_" + idNumber).value = "0"
        document.getElementById("combiEquipCritDmg_" + idNumber).value = "0"
        document.getElementById("combiEquipPolar_" + idNumber).value = "0"
        document.getElementById("combiEquipBossDmg_" + idNumber).value = "0"
        document.getElementById("combiEquipAdapt_" + idNumber).value = "0"
    } else {
        document.getElementById("combiEquipName_" + idNumber).value = input_data[0]
        document.getElementById("combiEquipPart_" + idNumber).value = input_data[1]
        document.getElementById("combiEquipSetName_" + idNumber).value = input_data[2]
        document.getElementById("combiEquipSkillDmg_" + idNumber).value = input_data[3]
        document.getElementById("combiEquipAtkPower_" + idNumber).value = input_data[4]
        document.getElementById("combiEquipCritDmg_" + idNumber).value = input_data[5]
        document.getElementById("combiEquipPolar_" + idNumber).value = input_data[6]
        document.getElementById("combiEquipBossDmg_" + idNumber).value = input_data[7]
        document.getElementById("combiEquipAdapt_" + idNumber).value = input_data[8]
    }
}

function appendSet(input_data) {
    var idNumber = (document.getElementById("combiSetTable").rows.length - 1).toString()
    
    // tr
    var tempChild = document.createElement('tr')
    tempChild.setAttribute("id", "combiSetTr_" + idNumber)
    tempChild.setAttribute("class", "text-center")
    document.getElementById("combiSetList").appendChild(tempChild)

    // 名稱
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdName_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetName_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdName_" + idNumber).appendChild(tempChild)

    // 套裝
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdSetName_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetSetName_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdSetName_" + idNumber).appendChild(tempChild)

    // 件數
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdSetRequire_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetSetRequire_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdSetRequire_" + idNumber).appendChild(tempChild)

    // 技能傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdSkillDmg_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetSkillDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdSkillDmg_" + idNumber).appendChild(tempChild)

    // 攻擊力
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdAtkPower_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetAtkPower_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdAtkPower_" + idNumber).appendChild(tempChild)

    // 暴擊傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdCritDmg_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetCritDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdCritDmg_" + idNumber).appendChild(tempChild)

    // 兩極化
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdPolar_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetPolar_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdPolar_" + idNumber).appendChild(tempChild)

    // Boss 傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdBossDmg_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetBossDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdBossDmg_" + idNumber).appendChild(tempChild)

    // 適應力
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdAdapt_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetAdapt_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdAdapt_" + idNumber).appendChild(tempChild)
    
    if (input_data == false) {
        document.getElementById("combiSetName_" + idNumber).value = "新增套裝 " + idNumber
        document.getElementById("combiSetSetName_" + idNumber).value = ""
        document.getElementById("combiSetSetRequire_" + idNumber).value = "2"
        document.getElementById("combiSetSkillDmg_" + idNumber).value = "0"
        document.getElementById("combiSetAtkPower_" + idNumber).value = "0"
        document.getElementById("combiSetCritDmg_" + idNumber).value = "0"
        document.getElementById("combiSetPolar_" + idNumber).value = "0"
        document.getElementById("combiSetBossDmg_" + idNumber).value = "0"
        document.getElementById("combiSetAdapt_" + idNumber).value = "0"
    } else {
        document.getElementById("combiSetName_" + idNumber).value = input_data[0]
        document.getElementById("combiSetSetName_" + idNumber).value = input_data[1]
        document.getElementById("combiSetSetRequire_" + idNumber).value = input_data[2]
        document.getElementById("combiSetSkillDmg_" + idNumber).value = input_data[3]
        document.getElementById("combiSetAtkPower_" + idNumber).value = input_data[4]
        document.getElementById("combiSetCritDmg_" + idNumber).value = input_data[5]
        document.getElementById("combiSetPolar_" + idNumber).value = input_data[6]
        document.getElementById("combiSetBossDmg_" + idNumber).value = input_data[7]
        document.getElementById("combiSetAdapt_" + idNumber).value = input_data[8]
    }
}

// Calc
function submitCalc() {
    if (inputCheck()) {
        
    }
}

function inputCheck() {
    try {
        var tempNum = 0
        var checkTargetList = [
            // 職業特性
            'inputJobAtkPower', 'inputJobCritDmg', 'inputJobBossDmg', 'inputJobSkillDmg', 'inputJobAllSkillDmg',
            // 武器性能
            'inputWeaponUpgrade', 'inputWeaponAtkPower', 'inputWeaponCritDmg',
            // 防具性能
            'inputEquipUpgradeTopA', 'inputEquipReforgeTopA', 'inputEquipUpgradeBottomA', 'inputEquipReforgeBottomA', 'inputEquipUpgradeGloveA', 'inputEquipReforgeGloveA', 'inputEquipUpgradeShoesA', 'inputEquipReforgeShoesA', 
            'inputEquipUpgradeTopB', 'inputEquipReforgeTopB', 'inputEquipUpgradeBottomB', 'inputEquipReforgeBottomB', 'inputEquipUpgradeGloveB', 'inputEquipReforgeGloveB', 'inputEquipUpgradeShoesB', 'inputEquipReforgeShoesB', 
            // 其他數值
            'inputOtherBossDmgStone', 'inputOtherSkillDmg', 'inputOtherDeBuff', 'inputOtherReson',
            // 個人自訂
            'inputPerPolar', 'inputPerAtkPower', 'inputPerCritDmg', 'inputPerBossDmg', 'inputPerSkillDmg', 'inputPerAllSkillDmg', 'inputPerAdapt',
        ]
        checkTargetList.forEach(function(item) {
            // tempNum = parseFloat(document.getElementById(item).value)
            tempNum = parseFloat('0a')
            throw BreakException
        });
        return true
    }
    catch (e) {
        alert('部分欄位設置錯誤，可能是在應為數字的欄位中填入了數字以外的項目。' + e)
        return false
    }
}