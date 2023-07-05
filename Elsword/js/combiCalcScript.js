var int_formatter = new Intl.NumberFormat('en-US')

// Basic Function
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

// Object
function initialData() {
    equipInfo.forEach(function(item) {
        appendEquip(item, true)
    });
    unreleaseEquipInfo.forEach(function(item) {
        appendEquip(item, false)
    });
    setInfo.forEach(function(item) {
        appendSet(item)
    });

    loadCookie()
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
    if (document.getElementById("inputEquipRadioAmet").checked) {
        document.getElementById("inputEquipUpgradeTopAmet").disabled = false
        document.getElementById("inputEquipUpgradeBottomAmet").disabled = false
        document.getElementById("inputEquipUpgradeGloveAmet").disabled = false
        document.getElementById("inputEquipUpgradeShoesAmet").disabled = false

        document.getElementById("inputEquipReforgeTopAmet").disabled = false
        document.getElementById("inputEquipReforgeBottomAmet").disabled = false
        document.getElementById("inputEquipReforgeGloveAmet").disabled = false
        document.getElementById("inputEquipReforgeShoesAmet").disabled = false

        document.getElementById("inputEquipUpgradeTopTene").disabled = true
        document.getElementById("inputEquipUpgradeBottomTene").disabled = true
        document.getElementById("inputEquipUpgradeGloveTene").disabled = true
        document.getElementById("inputEquipUpgradeShoesTene").disabled = true

        document.getElementById("inputEquipReforgeTopTene").disabled = true
        document.getElementById("inputEquipReforgeBottomTene").disabled = true
        document.getElementById("inputEquipReforgeGloveTene").disabled = true
        document.getElementById("inputEquipReforgeShoesTene").disabled = true

    } else if (document.getElementById("inputEquipRadioTene").checked) {
        document.getElementById("inputEquipUpgradeTopAmet").disabled = true
        document.getElementById("inputEquipUpgradeBottomAmet").disabled = true
        document.getElementById("inputEquipUpgradeGloveAmet").disabled = true
        document.getElementById("inputEquipUpgradeShoesAmet").disabled = true

        document.getElementById("inputEquipReforgeTopAmet").disabled = true
        document.getElementById("inputEquipReforgeBottomAmet").disabled = true
        document.getElementById("inputEquipReforgeGloveAmet").disabled = true
        document.getElementById("inputEquipReforgeShoesAmet").disabled = true

        document.getElementById("inputEquipUpgradeTopTene").disabled = false
        document.getElementById("inputEquipUpgradeBottomTene").disabled = false
        document.getElementById("inputEquipUpgradeGloveTene").disabled = false
        document.getElementById("inputEquipUpgradeShoesTene").disabled = false

        document.getElementById("inputEquipReforgeTopTene").disabled = false
        document.getElementById("inputEquipReforgeBottomTene").disabled = false
        document.getElementById("inputEquipReforgeGloveTene").disabled = false
        document.getElementById("inputEquipReforgeShoesTene").disabled = false

    } else {
        document.getElementById("inputEquipUpgradeTopAmet").disabled = false
        document.getElementById("inputEquipUpgradeBottomAmet").disabled = false
        document.getElementById("inputEquipUpgradeGloveAmet").disabled = false
        document.getElementById("inputEquipUpgradeShoesAmet").disabled = false

        document.getElementById("inputEquipReforgeTopAmet").disabled = false
        document.getElementById("inputEquipReforgeBottomAmet").disabled = false
        document.getElementById("inputEquipReforgeGloveAmet").disabled = false
        document.getElementById("inputEquipReforgeShoesAmet").disabled = false

        document.getElementById("inputEquipUpgradeTopTene").disabled = false
        document.getElementById("inputEquipUpgradeBottomTene").disabled = false
        document.getElementById("inputEquipUpgradeGloveTene").disabled = false
        document.getElementById("inputEquipUpgradeShoesTene").disabled = false

        document.getElementById("inputEquipReforgeTopTene").disabled = false
        document.getElementById("inputEquipReforgeBottomTene").disabled = false
        document.getElementById("inputEquipReforgeGloveTene").disabled = false
        document.getElementById("inputEquipReforgeShoesTene").disabled = false
    }
}

function appendEquip(input_data, default_enable) {
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
    if (default_enable) {
        tempChild.setAttribute("checked", "checked")
    }
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

    // 流血
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdBlood_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipBlood_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdBlood_" + idNumber).appendChild(tempChild)

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
        document.getElementById("combiEquipBlood_" + idNumber).value = "0"
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
        document.getElementById("combiEquipBlood_" + idNumber).value = input_data[9]
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

    // 流血
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdBlood_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetBlood_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdBlood_" + idNumber).appendChild(tempChild)

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
        document.getElementById("combiSetBlood_" + idNumber).value = "0"
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
        document.getElementById("combiSetBlood_" + idNumber).value = input_data[9]
    }
}

// Calc
function submitCalc() {
    if (inputCheck()) {
        saveCookie()

        calcNote = document.getElementById("calcNote")
        calcNote.value = ""

        // 0 攻擊力 + %, 1 暴擊傷害, 2 Boss 傷害, 3 特定技能傷害, 4 所有技能傷害, 5 兩極化, 6 適應力, 7 流血
        var charInfo = [0, 0, 0, 0, 0, 0, 0, 0]
        charInfo = updateByJob(charInfo)
        charInfo = updateByWeapon(charInfo)
        charInfo = updateByOther(charInfo)
        charInfo = updateByPersonal(charInfo)
        charInfo = updateByEquip(charInfo)
        charInfo = updateByFixedEffect(charInfo)

        if (document.getElementById("inputEquipRadioBoth").checked) {
            calcNote.value += "# 已經計入「職業特性」、「武器性能」、「其他數值」、「個人自訂」和「固定項目」數值。\n由於需要計算虹霓降魔防具與泰納布洛斯防具，此階段尚未計入\n"
        } else {
            calcNote.value += "# 已經計入「職業特性」、「武器性能」、「防具性能」、「其他數值」、「個人自訂」和「固定項目」數值。\n"
        }
        calcNote.value += "- 固定項目: 瑪瑙碎片或巴力溫毛飾、艾特島飾品組、嗜肉骨斷、聖獸與賦靈錄\n"
        calcNote.value += "- 目前數值: 攻擊力 + " + charInfo[0] + "%、暴擊傷害 + " + charInfo[1] + "%、Boss 傷害 + " + charInfo[2] + "%、特定技能傷害 + " + charInfo[3] + "%、所有技能傷害 + " + charInfo[4] + "%、兩極化 + " + charInfo[5] + "%、適應力 + " + charInfo[6] + "%\n\n"

        calcNote.value += "# 讀取考量選擇 ... ...\n"
        var equipDetail = readEquipInfo()
        var combiCount = 1
        equipDetail.forEach(function(part) {
            combiCount *= part.length
        });
        calcNote.value += "- 分類 [ 左五 ] 包含 [ " + equipDetail[0].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 武器 ] 包含 [ " + equipDetail[1].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 武器飾品 ] 包含 [ " + equipDetail[11].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 支援 ] 包含 [ " + equipDetail[2].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 臉上 ] 包含 [ " + equipDetail[10].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 臉中 ] 包含 [ " + equipDetail[3].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 上衣 ] 包含 [ " + equipDetail[4].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 下衣 ] 包含 [ " + equipDetail[5].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 手臂 ] 包含 [ " + equipDetail[6].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 耳環 ] 包含 [ " + equipDetail[7].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 項鍊 ] 包含 [ " + equipDetail[8].length + " ] 種選擇\n"
        calcNote.value += "- 分類 [ 聖獸戒指 ] 包含 [ " + equipDetail[9].length + " ] 種選擇\n"
        calcNote.value += "# 目前具有 [ " + int_formatter.format(combiCount) + " ] 種組合。\n\n"

        var setDetail = readSetInfo()
        calcNote.value += "# 讀取套裝效果 ... ...\n"
        calcNote.value += "# 得到 [ " + int_formatter.format(setDetail.length) + " ] 種套裝效果資料。\n\n"

        calcNote.value += "# 展開計算 ... ...\n"
        executeCalc(calcNote, charInfo, equipDetail, setDetail)
        calcNote.value += "# 計算完成。\n"

    } else {
        alert("進行試算中途無法進行數值轉換，可能有部分欄位包含非數字的字元。")
    }
}

function inputCheck() {
    var cancelFlag = true
    var checkTargetList = [
        // 職業特性
        'inputJobAtkPower', 'inputJobCritDmg', 'inputJobBossDmg', 'inputJobSkillDmg', 'inputJobAllSkillDmg',
        // 武器性能
        'inputWeaponUpgrade', 'inputWeaponAtkPower', 'inputWeaponCritDmg',
        // 防具性能
        'inputEquipUpgradeTopAmet', 'inputEquipReforgeTopAmet', 'inputEquipUpgradeBottomAmet', 'inputEquipReforgeBottomAmet', 'inputEquipUpgradeGloveAmet', 'inputEquipReforgeGloveAmet', 'inputEquipUpgradeShoesAmet', 'inputEquipReforgeShoesAmet',
        'inputEquipUpgradeTopTene', 'inputEquipReforgeTopTene', 'inputEquipUpgradeBottomTene', 'inputEquipReforgeBottomTene', 'inputEquipUpgradeGloveTene', 'inputEquipReforgeGloveTene', 'inputEquipUpgradeShoesTene', 'inputEquipReforgeShoesTene',
        // 其他數值 'inputOtherSkillDmg'
        'inputOtherBossDmgStone', 'inputOtherDeBuff', 'inputOtherReson',
        // 個人自訂
        'inputPerPolar', 'inputPerAtkPower', 'inputPerCritDmg', 'inputPerBossDmg', 'inputPerSkillDmg', 'inputPerAllSkillDmg', 'inputPerAdapt',
    ]
    checkTargetList.forEach(function(item) {
        if (isNaN(document.getElementById(item).value)) {
            cancelFlag = false
        }
    })
    return cancelFlag
}

function updateByJob(inputInfo) {
    // 0 攻擊力 + %, 1 暴擊傷害, 2 Boss 傷害, 3 特定技能傷害, 4 所有技能傷害, 5 兩極化, 6 適應力, 7 流血
    inputInfo[0] += parseFloat(document.getElementById("inputJobAtkPower").value)
    inputInfo[1] += parseFloat(document.getElementById("inputJobCritDmg").value)
    inputInfo[2] += parseFloat(document.getElementById("inputJobBossDmg").value)
    inputInfo[3] += parseFloat(document.getElementById("inputJobSkillDmg").value)
    inputInfo[4] += parseFloat(document.getElementById("inputJobAllSkillDmg").value)

    return inputInfo
}

function updateByWeapon(inputInfo) {
    // 0 攻擊力 + %, 1 暴擊傷害, 2 Boss 傷害, 3 特定技能傷害, 4 所有技能傷害, 5 兩極化, 6 適應力, 7 流血
    var weaponType = document.getElementById("inputWeaponType").value
    var weaponUpgrade = parseInt(document.getElementById("inputWeaponUpgrade").value)
    var weaponStage = parseInt(document.getElementById("inputWeaponStage").value)

    if (weaponType == "FOJ") {
        inputInfo[6] += 5

        if (weaponUpgrade >= 10) {
            inputInfo[4] += 10
        }
    }
    else if (weaponType == "VOS") {
        inputInfo[6] += 5

        if (weaponUpgrade >= 10) {
            inputInfo[0] += 10
        }
        if (weaponUpgrade >= 12) {
            inputInfo[5] += 7
        }
        if (weaponUpgrade >= 13) {
            inputInfo[1] += 10
        }

        if (weaponStage >= 5) {
            inputInfo[4] += 10
        }
    }
    else if (weaponType == "SOA") {
        inputInfo[6] += 5

        if (weaponUpgrade >= 10) {
            inputInfo[0] += 12
        }
        if (weaponUpgrade >= 11) {
            inputInfo[5] += 10
        }
        if (weaponUpgrade >= 13) {
            inputInfo[1] += 10
        }

        if (weaponStage >= 1) {
            inputInfo[4] += 10
        }
        if (weaponStage >= 3) {
            inputInfo[4] +=5
        }
        if (weaponStage >= 5) {
            inputInfo[4] += 5
        }
    }

    inputInfo[0] += parseFloat(document.getElementById("inputWeaponAtkPower").value)
    inputInfo[1] += parseFloat(document.getElementById("inputWeaponCritDmg").value)

    return inputInfo
}

function updateByOther(inputInfo) {
    // 0 攻擊力 + %, 1 暴擊傷害, 2 Boss 傷害, 3 特定技能傷害, 4 所有技能傷害, 5 兩極化, 6 適應力, 7 流血
    inputInfo[2] += parseFloat(document.getElementById("inputOtherBossDmgStone").value) * 2.5
    // inputInfo[3] += parseFloat(document.getElementById("inputOtherSkillDmg").value)

    return inputInfo
}

function updateByPersonal(inputInfo) {
    // 0 攻擊力 + %, 1 暴擊傷害, 2 Boss 傷害, 3 特定技能傷害, 4 所有技能傷害, 5 兩極化, 6 適應力, 7 流血
    inputInfo[0] += parseFloat(document.getElementById("inputPerAtkPower").value)
    inputInfo[1] += parseFloat(document.getElementById("inputPerCritDmg").value)
    inputInfo[2] += parseFloat(document.getElementById("inputPerBossDmg").value)
    inputInfo[3] += parseFloat(document.getElementById("inputPerSkillDmg").value)
    inputInfo[4] += parseFloat(document.getElementById("inputPerAllSkillDmg").value)
    inputInfo[5] += parseFloat(document.getElementById("inputPerPolar").value)
    inputInfo[6] += parseFloat(document.getElementById("inputPerAdapt").value)

    return inputInfo
}

function updateByEquip(inputInfo) {
    // Amet
    if (document.getElementById("inputEquipRadioAmet").checked) {
        // 0 攻擊力 + %, 1 暴擊傷害, 2 Boss 傷害, 3 特定技能傷害, 4 所有技能傷害, 5 兩極化, 6 適應力, 7 流血
        ["Top", "Bottom", "Glove", "Shoes"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Amet").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Amet").value

            // Basic
            inputInfo[6] += 2
            if (part == "Glove") {
                inputInfo[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                inputInfo[2] += 3
            }
            if (upgradeLv >= 11) {
                inputInfo[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                inputInfo[1] += 3
            }
            if (reforgeLv >= 6) {
                inputInfo[3] += 5
            }
            if (reforgeLv >= 9) {
                inputInfo[1] += 3
            }
            if (reforgeLv >= 12) {
                inputInfo[3] += 5
            }
            if (reforgeLv >= 15) {
                inputInfo[6] += 1
            }
            if (reforgeLv >= 18) {
                inputInfo[1] += 3
            }
            if (reforgeLv >= 21) {
                inputInfo[0] += 3
            }

        });

        if (document.getElementById("checkBoxAmetType").checked) {
            inputInfo[5] += 20
        }

    }
    // Tene
    else if (document.getElementById("inputEquipRadioTene").checked) {
        // 0 攻擊力 + %, 1 暴擊傷害, 2 Boss 傷害, 3 特定技能傷害, 4 所有技能傷害, 5 兩極化, 6 適應力, 7 流血
        ["Top", "Bottom", "Glove", "Shoes"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Tene").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Tene").value

            // Basic
            inputInfo[4] += 1.5
            inputInfo[6] += 2
            if (part == "Glove") {
                inputInfo[3] += 10
                inputInfo[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                inputInfo[2] += 5
            }
            if (upgradeLv >= 11) {
                inputInfo[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                inputInfo[1] += 3
            }
            if (reforgeLv >= 6) {
                inputInfo[3] += 5
            }
            if (reforgeLv >= 9) {
                inputInfo[1] += 3
            }
            if (reforgeLv >= 12) {
                inputInfo[3] += 5
            }
            if (reforgeLv >= 15) {
                inputInfo[0] += 2
            }
            if (reforgeLv >= 18) {
                inputInfo[3] += 5
            }
            if (reforgeLv >= 21) {
                inputInfo[6] += 2
            }

        });
    }

    return inputInfo
}

function updateByFixedEffect(inputInfo) {
    // 0 攻擊力 + %, 1 暴擊傷害, 2 Boss 傷害, 3 特定技能傷害, 4 所有技能傷害, 5 兩極化, 6 適應力, 7 流血

    // 瑪瑙碎片 or 巴力溫毛飾
    inputInfo[6] += 2

    // 艾特島飾品組
    inputInfo[0] += 1
    inputInfo[3] += 20

    // 嗜肉骨斷
    inputInfo[0] -= 24
    inputInfo[2] += 80

    // 聖獸
    inputInfo[0] += 3
    inputInfo[1] += 18
    inputInfo[2] += 15
    inputInfo[3] += 5

    // 賦靈錄
    inputInfo[0] += 3.75
    inputInfo[1] += 1.5
    inputInfo[2] += 5
    inputInfo[3] += 3
    inputInfo[5] += 1.2
    inputInfo[6] += 1

    return inputInfo
}

function readEquipInfo() {
    var idNumber = (document.getElementById("combiEquipTable").rows.length - 1)
    var tempArray = [[], [], [], [], [], [], [], [], [], [], [], []]

    for (i = 0 ; i < idNumber ; i++) {
        var part = document.getElementById("combiEquipPart_" + i).value
        var enable = document.getElementById("combiEquipEnable_" + i).checked

        if (enable) {
            if (part == "左五") {
                tempArray[0].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "武器") {
                tempArray[1].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "支援") {
                tempArray[2].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "臉中") {
                tempArray[3].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "上衣") {
                tempArray[4].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "下衣") {
                tempArray[5].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "手臂") {
                tempArray[6].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "耳環") {
                tempArray[7].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "項鍊") {
                tempArray[8].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "聖獸戒指") {
                tempArray[9].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "頭上") {
                tempArray[10].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            } else if (part == "武飾") {
                tempArray[11].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value),
                        parseFloat(document.getElementById("combiEquipBlood_" + i).value),
                    ]
                )
            }
        }
    }

    return tempArray
}

function readSetInfo() {
    var idNumber = (document.getElementById("combiSetTable").rows.length - 1)
    var tempArray = []

    for (i = 0 ; i < idNumber ; i++) {
        tempArray.push(
            [
                document.getElementById("combiSetName_" + i).value,
                document.getElementById("combiSetSetName_" + i).value,
                parseInt(document.getElementById("combiSetSetRequire_" + i).value),
                parseFloat(document.getElementById("combiSetSkillDmg_" + i).value),
                parseFloat(document.getElementById("combiSetAtkPower_" + i).value),
                parseFloat(document.getElementById("combiSetCritDmg_" + i).value),
                parseFloat(document.getElementById("combiSetPolar_" + i).value),
                parseFloat(document.getElementById("combiSetBossDmg_" + i).value),
                parseFloat(document.getElementById("combiSetAdapt_" + i).value),
                parseFloat(document.getElementById("combiSetBlood_" + i).value),
            ]
        )
    }

    return tempArray
}

function executeCalc(noteArea, charDetail, equipDetail, setDetail) {

    var needCoolDown = document.getElementById("checkBoxCooldown").checked
    var maxPolar = 55
    var maxAdapt = 55
    var deBuff = document.getElementById("inputOtherDeBuff").value
    var resonLv = document.getElementById("inputOtherReson").value

    var avatarLeft = equipDetail[0]
    var avatarWeapon = equipDetail[1]
    var accSupport = equipDetail[2]
    var accFaceTop = equipDetail[10]
    var accFaceMiddle = equipDetail[3]
    var accTop = equipDetail[4]
    var accBottom = equipDetail[5]
    var accHand = equipDetail[6]
    var accEarRing = equipDetail[7]
    var accNecklace = equipDetail[8]
    var artRing = equipDetail[9]
    var accWeapon = equipDetail[11]

    var calcType = document.getElementById("inputEquipRadioBoth").checked

    var bestAnswer = [0]

    // Both Calc
    if (calcType) {
        var equipTypeList = ["虹霓", "混搭", "泰納"]

        avatarLeft.forEach(function(ava_left) {
            avatarWeapon.forEach(function(ava_wp) {
                accSupport.forEach(function(acc_sup) {
                    accFaceTop.forEach(function(acc_face_top) {
                        accFaceMiddle.forEach(function(acc_face_mid) {
                            accTop.forEach(function(acc_top) {
                                accBottom.forEach(function(acc_btm) {
                                    accHand.forEach(function(acc_hand) {
                                        accEarRing.forEach(function(acc_ear_ring) {
                                            accNecklace.forEach(function(acc_neck) {
                                                artRing.forEach(function(art_ring) {
                                                    accWeapon.forEach(function(acc_weapon) {

                                                        equipTypeList.forEach(function(equipType) {

                                                            if (needCoolDown) {
                                                                if ((ava_left[0] == "埃力格") || (acc_top[0] == "童話上衣") || (acc_top[0] == "聖光上衣") || (acc_top[0] == "乙太上衣")) {
                                                                    bestAnswer = combiCalcBoth(
                                                                        equipType,
                                                                        charDetail.slice(),
                                                                        [
                                                                            ava_left,
                                                                            ava_wp,
                                                                            acc_sup,
                                                                            acc_face_top,
                                                                            acc_face_mid,
                                                                            acc_top,
                                                                            acc_btm,
                                                                            acc_hand,
                                                                            acc_ear_ring,
                                                                            acc_neck,
                                                                            art_ring,
                                                                            acc_weapon
                                                                        ],
                                                                        setDetail,
                                                                        maxPolar,
                                                                        maxAdapt,
                                                                        deBuff,
                                                                        resonLv,
                                                                        bestAnswer
                                                                    )
                                                                }
                                                            }

                                                            else {
                                                                bestAnswer = combiCalcBoth(
                                                                    equipType,
                                                                    charDetail.slice(),
                                                                    [
                                                                        ava_left,
                                                                        ava_wp,
                                                                        acc_sup,
                                                                        acc_face_top,
                                                                        acc_face_mid,
                                                                        acc_top,
                                                                        acc_btm,
                                                                        acc_hand,
                                                                        acc_ear_ring,
                                                                        acc_neck,
                                                                        art_ring,
                                                                        acc_weapon
                                                                    ],
                                                                    setDetail,
                                                                    maxPolar,
                                                                    maxAdapt,
                                                                    deBuff,
                                                                    resonLv,
                                                                    bestAnswer
                                                                )
                                                            }
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    }
    // Normal Calc
    else {
        var equipType = ""
        if (document.getElementById("inputEquipRadioAmet").checked) {
            equipType = "虹霓降魔防具"
            if (document.getElementById("checkBoxAmetType").checked) {
                equipType += " - 丹套"
            } else {
                equipType += " - 無設定"
            }
        } else {
            equipType = "泰納布洛斯防具"
            if (document.getElementById("checkBoxTeneType").checked) {
                equipType += " - 以「流血/團攻」進行計算"
            } else {
                equipType += " - 無設定"
            }
        }

        avatarLeft.forEach(function(ava_left) {
            avatarWeapon.forEach(function(ava_wp) {
                accSupport.forEach(function(acc_sup) {
                    accFaceTop.forEach(function(acc_face_top) {
                        accFaceMiddle.forEach(function(acc_face_mid) {
                            accTop.forEach(function(acc_top) {
                                accBottom.forEach(function(acc_btm) {
                                    accHand.forEach(function(acc_hand) {
                                        accEarRing.forEach(function(acc_ear_ring) {
                                            accNecklace.forEach(function(acc_neck) {
                                                artRing.forEach(function(art_ring) {
                                                    accWeapon.forEach(function(acc_weapon) {
                                                        if (needCoolDown) {
                                                            if ((ava_left[0] == "埃力格") || (acc_top[0] == "童話上衣")) {
                                                                bestAnswer = combiCalc(
                                                                    equipType,
                                                                    charDetail.slice(),
                                                                    [
                                                                        ava_left,
                                                                        ava_wp,
                                                                        acc_sup,
                                                                        acc_face_top,
                                                                        acc_face_mid,
                                                                        acc_top,
                                                                        acc_btm,
                                                                        acc_hand,
                                                                        acc_ear_ring,
                                                                        acc_neck,
                                                                        art_ring,
                                                                        acc_weapon
                                                                    ],
                                                                    setDetail,
                                                                    maxPolar,
                                                                    maxAdapt,
                                                                    deBuff,
                                                                    resonLv,
                                                                    bestAnswer
                                                                )
                                                            }
                                                        }

                                                        else {
                                                            bestAnswer = combiCalc(
                                                                equipType,
                                                                charDetail.slice(),
                                                                [
                                                                    ava_left,
                                                                    ava_wp,
                                                                    acc_sup,
                                                                    acc_face_top,
                                                                    acc_face_mid,
                                                                    acc_top,
                                                                    acc_btm,
                                                                    acc_hand,
                                                                    acc_ear_ring,
                                                                    acc_neck,
                                                                    art_ring,
                                                                    acc_weapon
                                                                ],
                                                                setDetail,
                                                                maxPolar,
                                                                maxAdapt,
                                                                deBuff,
                                                                resonLv,
                                                                bestAnswer
                                                            )
                                                        }
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    // Display
    // 0 攻擊力 + %, 1 暴擊傷害, 2 Boss 傷害, 3 特定技能傷害, 4 所有技能傷害, 5 兩極化, 6 適應力, 7 流血
    document.getElementById("resultValue").innerHTML = int_formatter.format(roundTo(bestAnswer[0], 2))

    document.getElementById("resultAtkPower").innerHTML = bestAnswer[1]
    document.getElementById("resultCritDmg").innerHTML = bestAnswer[2]
    document.getElementById("resultBossDmg").innerHTML = bestAnswer[3]
    document.getElementById("resultSkillDmg").innerHTML = bestAnswer[4]
    document.getElementById("resultAllSkillDmg").innerHTML = bestAnswer[5]
    document.getElementById("resultPolar").innerHTML = bestAnswer[6]
    document.getElementById("resultAdapt").innerHTML = bestAnswer[7]
    document.getElementById("resultBlood").innerHTML = bestAnswer[8]

    document.getElementById("resultResonPolar").innerHTML = bestAnswer[9]
    document.getElementById("resultResonBossDmg").innerHTML = bestAnswer[10]
    document.getElementById("resultResonAdapt").innerHTML = bestAnswer[11]

    document.getElementById("resultCombiEquip").innerHTML = bestAnswer[12]
    document.getElementById("resultCombiAvaLeft").innerHTML = bestAnswer[13]
    document.getElementById("resultCombiAvaWeapon").innerHTML = bestAnswer[14]
    document.getElementById("resultCombiAccSup").innerHTML = bestAnswer[15]
    document.getElementById("resultCombiAccFaceTop").innerHTML = bestAnswer[16]
    document.getElementById("resultCombiAccFaceMid").innerHTML = bestAnswer[17]
    document.getElementById("resultCombiAccTop").innerHTML = bestAnswer[18]
    document.getElementById("resultCombiAccBtm").innerHTML = bestAnswer[19]
    document.getElementById("resultCombiAccHand").innerHTML = bestAnswer[20]
    document.getElementById("resultCombiAccEarRing").innerHTML = bestAnswer[21]
    document.getElementById("resultCombiAccNeck").innerHTML = bestAnswer[22]
    document.getElementById("resultCombiArtRing").innerHTML = bestAnswer[23]

    console.log(bestAnswer)
    document.getElementById("resultCombiAccWeapon").innerHTML = bestAnswer[24]

    noteArea.value += "- 推薦組合: " + bestAnswer + "\n"
}

function combiCalc(equipType, charDetail, equipDetail, setDetail, maxPolar, maxAdapt, deBuff, resonLv, bestAnswer) {
    // Equip
    var useSetList = []
    if (document.getElementById("inputWeaponType").value == "SOA") {
        useSetList.push("18R")
    }

    equipDetail.forEach(function(equip) {
        if (equip[2] != "") {
            useSetList.push(equip[2])
        }

        charDetail[4] += equip[3]
        charDetail[0] += equip[4]
        charDetail[1] += equip[5]
        charDetail[5] += equip[6]
        charDetail[2] += equip[7]
        charDetail[6] += equip[8]
        charDetail[7] += equip[9]
    });

    // Set
    setDetail.forEach(function(set) {
        if (getOccurrence(useSetList, set[1]) >= set[2]) {
            charDetail[4] += set[3]
            charDetail[0] += set[4]
            charDetail[1] += set[5]
            charDetail[5] += set[6]
            charDetail[2] += set[7]
            charDetail[6] += set[8]
            charDetail[7] += set[9]
        }
    });

    // Reson
    if (resonLv > 0) {
        tempLv = Math.min(resonLv, 100)
        resonLv -= tempLv
        charDetail[3] += tempLv * 0.35
    }

    var adaptLv = 0
    if (resonLv > 0) {
        adaptLv = Math.min(resonLv, Math.max(0, roundTo((maxAdapt - charDetail[6]) / 0.07, 0)), 100)
        resonLv -= adaptLv
        charDetail[6] += adaptLv * 0.07
    }

    var polarLv = 0
    if (resonLv > 0) {
        polarLv = Math.min(resonLv, Math.max(0, roundTo((maxPolar - charDetail[5]) / 0.15, 0)), 50)
        resonLv -= polarLv
        charDetail[5] += polarLv * 0.15
    }

    var bossDmgLv = 0
    if (resonLv > 0) {
        bossDmgLv = Math.min(resonLv, 50)
        resonLv -= bossDmgLv
        charDetail[2] += bossDmgLv * 0.3
    }

    // Result
    var resultValue = 100.0
    if (equipDetail[3][0] == "122花冠") {
        resultValue *= 1.1
    } else if (equipDetail[3][0] == "156皇冠") {
        resultValue *= 1.05
    }
    resultValue *= (100 + charDetail[0]) / 100 * (150 + charDetail[1]) / 100 * (100 + charDetail[2]) / 100 * (100 + charDetail[3]) / 100 * (100 + charDetail[4]) / 100
    resultValue *= (100 + Math.min(maxPolar, charDetail[5])) / 100
    resultValue *= (100 - deBuff + Math.min(maxAdapt, charDetail[6])) / 100

    if (equipType == "泰納布洛斯防具 - 以「流血/團攻」進行計算") {
        charDetail[7] += 10
        resultValue *= 1.064
    } else if (equipType == "泰納布洛斯防具 - 無設定") {
        resultValue *= 1.064
    }

    // Blood
    resultValue *= (100 + charDetail[7]) / 100

    if (resultValue > bestAnswer[0]) {
        var resultList = [resultValue]

        charDetail.forEach(function(status) {
            resultList.push(status)
        });

        resultList.push(polarLv)
        resultList.push(bossDmgLv)
        resultList.push(adaptLv)

        resultList.push(equipType)
        equipDetail.forEach(function(equip) {
            resultList.push(equip[0])
        });

        return resultList
    } else {
        return bestAnswer
    }
}

function combiCalcBoth(equipType, charDetail, equipDetail, setDetail, maxPolar, maxAdapt, deBuff, resonLv, bestAnswer) {
    var resultValue = 100
    if (equipType == "虹霓") {
        ["Top", "Bottom", "Glove", "Shoes"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Amet").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Amet").value

            // Basic
            charDetail[6] += 2
            if (part == "Glove") {
                charDetail[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                charDetail[2] += 3
            }
            if (upgradeLv >= 11) {
                charDetail[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 6) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 9) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 12) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 15) {
                charDetail[6] += 1
            }
            if (reforgeLv >= 18) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 21) {
                charDetail[0] += 3
            }
        });

        if (document.getElementById("checkBoxAmetType").checked) {
            charDetail[5] += 20
        }
    }
    else if (equipType == "混搭") {
        // 虹霓
        ["Bottom", "Shoes"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Amet").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Amet").value

            // Basic
            charDetail[6] += 2
            if (part == "Glove") {
                charDetail[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                charDetail[2] += 3
            }
            if (upgradeLv >= 11) {
                charDetail[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 6) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 9) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 12) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 15) {
                charDetail[6] += 1
            }
            if (reforgeLv >= 18) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 21) {
                charDetail[0] += 3
            }
        });

        if (document.getElementById("checkBoxAmetType").checked) {
            charDetail[5] += 7
        }

        // 泰納
        ["Top", "Glove"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Tene").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Tene").value

            // Basic
            charDetail[4] += 1.5
            charDetail[6] += 2
            if (part == "Glove") {
                charDetail[3] += 10
                charDetail[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                charDetail[2] += 5
            }
            if (upgradeLv >= 11) {
                charDetail[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 6) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 9) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 12) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 15) {
                charDetail[0] += 2
            }
            if (reforgeLv >= 18) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 21) {
                charDetail[6] += 2
            }
        });

        if (document.getElementById("checkBoxTeneType").checked) {
            charDetail[7] += 10
        }
        resultValue *= 1.016
    }
    else {
        ["Top", "Bottom", "Glove", "Shoes"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Tene").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Tene").value

            // Basic
            charDetail[4] += 1.5
            charDetail[6] += 2
            if (part == "Glove") {
                charDetail[3] += 10
                charDetail[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                charDetail[2] += 5
            }
            if (upgradeLv >= 11) {
                charDetail[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 6) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 9) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 12) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 15) {
                charDetail[0] += 2
            }
            if (reforgeLv >= 18) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 21) {
                charDetail[6] += 2
            }
        });

        if (document.getElementById("checkBoxTeneType").checked) {
            charDetail[7] += 10
        }
        resultValue *= 1.064
    }

    // Equip
    var useSetList = []
    equipDetail.forEach(function(equip) {
        if (equip[2] != "") {
            useSetList.push(equip[2])
        }

        charDetail[4] += equip[3]
        charDetail[0] += equip[4]
        charDetail[1] += equip[5]
        charDetail[5] += equip[6]
        charDetail[2] += equip[7]
        charDetail[6] += equip[8]
        charDetail[7] += equip[9]
    });

    // Set
    setDetail.forEach(function(set) {
        if (getOccurrence(useSetList, set[1]) >= set[2]) {
            charDetail[4] += set[3]
            charDetail[0] += set[4]
            charDetail[1] += set[5]
            charDetail[5] += set[6]
            charDetail[2] += set[7]
            charDetail[6] += set[8]
            charDetail[7] += set[9]
        }
    });

    // Reson
    if (resonLv > 0) {
        tempLv = Math.min(resonLv, 100)
        resonLv -= tempLv
        charDetail[3] += tempLv * 0.35
    }

    var adaptLv = 0
    if (resonLv > 0) {
        adaptLv = Math.min(resonLv, Math.max(0, roundTo((maxAdapt - charDetail[6]) / 0.07, 0)), 100)
        resonLv -= adaptLv
        charDetail[6] += adaptLv * 0.07
    }

    var polarLv = 0
    if (resonLv > 0) {
        polarLv = Math.min(resonLv, Math.max(0, roundTo((maxPolar - charDetail[5]) / 0.15, 0)), 50)
        resonLv -= polarLv
        charDetail[5] += polarLv * 0.15
    }

    var bossDmgLv = 0
    if (resonLv > 0) {
        bossDmgLv = Math.min(resonLv, 50)
        resonLv -= bossDmgLv
        charDetail[2] += bossDmgLv * 0.3
    }

    // Result
    resultValue *= (100 + charDetail[0]) / 100 * (150 + charDetail[1]) / 100 * (100 + charDetail[2]) / 100 * (100 + charDetail[3]) / 100 * (100 + charDetail[4]) / 100
    resultValue *= (100 + Math.min(maxPolar, charDetail[5])) / 100
    resultValue *= (100 - deBuff + Math.min(maxAdapt, charDetail[6])) / 100

    // Blood
    resultValue *= (100 + charDetail[7]) / 100

    if (resultValue > bestAnswer[0]) {
        var resultList = [resultValue]

        charDetail.forEach(function(status) {
            resultList.push(status)
        });

        resultList.push(polarLv)
        resultList.push(bossDmgLv)
        resultList.push(adaptLv)

        resultList.push(equipType)
        equipDetail.forEach(function(equip) {
            resultList.push(equip[0])
        });

        return resultList
    } else {
        return bestAnswer
    }
}
