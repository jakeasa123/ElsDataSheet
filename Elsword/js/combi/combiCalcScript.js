var int_formatter = new Intl.NumberFormat('en-US')

// Basic Function
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

function printData(notebook, describeText, displayData) {
    var tempText = `# ${describeText}\n`
    tempText += `# - 技能傷害: ${displayData.skillDmg}\n`
    tempText += `# - 全技傷　: ${displayData.allSkillDmg}\n`
    tempText += `# - 攻擊力　: ${displayData.atk}\n`
    tempText += `# - 暴擊傷害: ${displayData.critDmg}\n`
    tempText += `# - 兩極化　: ${displayData.polar}\n`
    tempText += `# - 對王傷害: ${displayData.bossDmg}\n`
    tempText += `# - 適應力　: ${displayData.adapt}\n`
    tempText += `# - 流血　　: ${displayData.bleed}\n`
    tempText += `# - 冷卻時間: ${displayData.cooldown}\n`
    tempText += `# - 魔界環境: ${displayData.debuff}\n`
    tempText += '\n'

    notebook.value += tempText
    rollDown(notebook)
}

function rollDown(notebook) {
    notebook.scrollTop = notebook.scrollHeight;
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
}

function appendEquip(input_data, default_enable) {
    var idNumber = (document.getElementById('equipListEquipTableBody').rows.length).toString()

    // tr
    var tempChild = document.createElement('tr')
    tempChild.setAttribute('id', 'equipListEquipTr_' + idNumber)
    tempChild.setAttribute('class', 'text-center')
    document.getElementById('equipListEquipTableBody').appendChild(tempChild)

    // 啟用
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdEnable_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipEnable_' + idNumber)
    tempChild.setAttribute('class', 'form-check-input')
    tempChild.setAttribute('type', 'checkbox')
    if (default_enable) {
        tempChild.setAttribute('checked', 'checked')
    }
    document.getElementById('equipListEquipTdEnable_' + idNumber).appendChild(tempChild)

    // 名稱
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdName_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipName_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdName_' + idNumber).appendChild(tempChild)

    // 部位
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdPart_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipPart_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdPart_' + idNumber).appendChild(tempChild)

    // 套裝
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdSetName_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipSetName_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdSetName_' + idNumber).appendChild(tempChild)

    // 技能傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdAllSkillDmg_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipAllSkillDmg_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdAllSkillDmg_' + idNumber).appendChild(tempChild)

    // 攻擊力
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdAtk_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipAtk_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdAtk_' + idNumber).appendChild(tempChild)

    // 暴擊傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdCritDmg_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipCritDmg_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdCritDmg_' + idNumber).appendChild(tempChild)

    // 兩極化
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdPolar_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipPolar_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdPolar_' + idNumber).appendChild(tempChild)

    // Boss 傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdBossDmg_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipBossDmg_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdBossDmg_' + idNumber).appendChild(tempChild)

    // 適應力
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdAdapt_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipAdapt_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdAdapt_' + idNumber).appendChild(tempChild)

    // 流血
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdBleed_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipBleed_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdBleed_' + idNumber).appendChild(tempChild)

    // 冷卻
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListEquipTdCooldown_' + idNumber)
    document.getElementById('equipListEquipTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListEquipCooldown_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListEquipTdCooldown_' + idNumber).appendChild(tempChild)

    if (input_data == false) {
        document.getElementById('equipListEquipName_' + idNumber).value = '新增道具 ' + idNumber
        document.getElementById('equipListEquipPart_' + idNumber).value = ''
        document.getElementById('equipListEquipSetName_' + idNumber).value = ''
        document.getElementById('equipListEquipAllSkillDmg_' + idNumber).value = '0'
        document.getElementById('equipListEquipAtk_' + idNumber).value = '0'
        document.getElementById('equipListEquipCritDmg_' + idNumber).value = '0'
        document.getElementById('equipListEquipPolar_' + idNumber).value = '0'
        document.getElementById('equipListEquipBossDmg_' + idNumber).value = '0'
        document.getElementById('equipListEquipAdapt_' + idNumber).value = '0'
        document.getElementById('equipListEquipBleed_' + idNumber).value = '0'
        document.getElementById('equipListEquipCooldown_' + idNumber).value = '0'
    } else {
        document.getElementById('equipListEquipName_' + idNumber).value = input_data.name
        document.getElementById('equipListEquipPart_' + idNumber).value = input_data.part
        document.getElementById('equipListEquipSetName_' + idNumber).value = input_data.set
        document.getElementById('equipListEquipAllSkillDmg_' + idNumber).value = input_data.allSkillDmg
        document.getElementById('equipListEquipAtk_' + idNumber).value = input_data.atk
        document.getElementById('equipListEquipCritDmg_' + idNumber).value = input_data.critDmg
        document.getElementById('equipListEquipPolar_' + idNumber).value = input_data.polar
        document.getElementById('equipListEquipBossDmg_' + idNumber).value = input_data.bossDmg
        document.getElementById('equipListEquipAdapt_' + idNumber).value = input_data.adapt
        document.getElementById('equipListEquipBleed_' + idNumber).value = input_data.bleed
        document.getElementById('equipListEquipCooldown_' + idNumber).value = input_data.cooldown
    }
}

function appendSet(input_data) {
    var idNumber = (document.getElementById('equipListSetTableBody').rows.length).toString()

    // tr
    var tempChild = document.createElement('tr')
    tempChild.setAttribute('id', 'equipListSetTr_' + idNumber)
    tempChild.setAttribute('class', 'text-center')
    document.getElementById('equipListSetTableBody').appendChild(tempChild)

    // 名稱
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdName_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetName_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdName_' + idNumber).appendChild(tempChild)

    // 套裝
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdKey_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetKey_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdKey_' + idNumber).appendChild(tempChild)

    // 件數
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdCount_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetCount_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdCount_' + idNumber).appendChild(tempChild)

    // 技能傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdAllSkillDmg_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetAllSkillDmg_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdAllSkillDmg_' + idNumber).appendChild(tempChild)

    // 攻擊力
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdAtk_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetAtk_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdAtk_' + idNumber).appendChild(tempChild)

    // 暴擊傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdCritDmg_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetCritDmg_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdCritDmg_' + idNumber).appendChild(tempChild)

    // 兩極化
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdPolar_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetPolar_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdPolar_' + idNumber).appendChild(tempChild)

    // Boss 傷害
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdBossDmg_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetBossDmg_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdBossDmg_' + idNumber).appendChild(tempChild)

    // 適應力
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdAdapt_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetAdapt_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdAdapt_' + idNumber).appendChild(tempChild)

    // 流血
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdBleed_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetBleed_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdBleed_' + idNumber).appendChild(tempChild)

    // 冷卻
    tempChild = document.createElement('td')
    tempChild.setAttribute('id', 'equipListSetTdCooldown_' + idNumber)
    document.getElementById('equipListSetTr_' + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute('id', 'equipListSetCooldown_' + idNumber)
    tempChild.setAttribute('class', 'form-control')
    document.getElementById('equipListSetTdCooldown_' + idNumber).appendChild(tempChild)

    if (input_data == false) {
        document.getElementById('equipListSetName_' + idNumber).value = '新增套裝 ' + idNumber
        document.getElementById('equipListSetKey_' + idNumber).value = ''
        document.getElementById('equipListSetCount_' + idNumber).value = '2'
        document.getElementById('equipListSetSkillDmg_' + idNumber).value = '0'
        document.getElementById('equipListSetAtk_' + idNumber).value = '0'
        document.getElementById('equipListSetCritDmg_' + idNumber).value = '0'
        document.getElementById('equipListSetPolar_' + idNumber).value = '0'
        document.getElementById('equipListSetBossDmg_' + idNumber).value = '0'
        document.getElementById('equipListSetAdapt_' + idNumber).value = '0'
        document.getElementById('equipListSetBleed_' + idNumber).value = '0'
        document.getElementById('equipListSetCooldown_' + idNumber).value = '0'
    } else {
        document.getElementById('equipListSetName_' + idNumber).value = input_data.name
        document.getElementById('equipListSetKey_' + idNumber).value = input_data.setKey
        document.getElementById('equipListSetCount_' + idNumber).value = input_data.count
        document.getElementById('equipListSetAllSkillDmg_' + idNumber).value = input_data.allSkillDmg
        document.getElementById('equipListSetAtk_' + idNumber).value = input_data.atk
        document.getElementById('equipListSetCritDmg_' + idNumber).value = input_data.critDmg
        document.getElementById('equipListSetPolar_' + idNumber).value = input_data.polar
        document.getElementById('equipListSetBossDmg_' + idNumber).value = input_data.bossDmg
        document.getElementById('equipListSetAdapt_' + idNumber).value = input_data.adapt
        document.getElementById('equipListSetBleed_' + idNumber).value = input_data.bleed
        document.getElementById('equipListSetCooldown_' + idNumber).value = input_data.cooldown
    }
}

// Calc
function submitCalc() {
    const notebook = document.getElementById('countAreaNotebook')
    notebook.value = '';

    if (inputCheck()) {
        var characterStatus = {
            skillDmg: 0,
            allSkillDmg: 0,
            atk: 0,
            critDmg: 0,
            polar: 0,
            bossDmg: 0,
            adapt: 0,
            bleed: 0,
            cooldown: 0,
            debuff: 0
        }
        printData(notebook, '初始化角色能力 ...', characterStatus)

        characterStatus = addAttributeByReson(characterStatus)
        printData(notebook, '計入共鳴效果: 技能傷害 + 35%, 兩極化 + 7.5%, 對 Boss 傷害 + 15%, 適應力 + 7%', characterStatus)

        characterStatus = addAttributeByPet(characterStatus)
        printData(notebook, '計入寵物效果: 攻擊力 + 2%', characterStatus)

        characterStatus = addAttributeByMasterPet(characterStatus)
        printData(notebook, '計入聖獸效果: 攻擊力 + 3%, 對 Boss 傷害 + 15%', characterStatus)

        characterStatus = addAttributeByCustomize(characterStatus)
        printData(notebook, '計入自定義效果: 技能傷害 + 5%', characterStatus)

        characterStatus = addAttributeByCollection(characterStatus)
        printData(
            notebook,
            '計入賦靈錄效果: ' +
            '攻擊力 + 3.75%, 對 Boss 傷害 + 5%, 技能傷害 + 3%, ' +
            '暴擊傷害 + 1.5%, 兩極化 + 1.2%, 適應力 + 1%, 所有技能傷害 + 1%',
            characterStatus
        )

        characterStatus = addAttributeByFixedAccessory(characterStatus)
        printData(
            notebook,
            '計入固定飾品效果: ' +
            '適應力 + 2% (巴利溫毛飾), ' +
            '攻擊力 + 1%, 技能傷害 + 20% (艾特島戒指), ' +
            '技能傷害 + 5%, 暴擊傷害 + 18% (聖獸裝備鑑定)',
            characterStatus
        )

        if (document.getElementById('countAreaBossKiller').checked) {
            characterStatus.atk -= 24
            characterStatus.bossDmg += 80
            printData(notebook, '計入嗜骨肉斷: 攻擊力 - 24%, 對 Boss 傷害 + 80%', characterStatus)
        }

        var tempText = ''
        characterStatus, tempText = addAttributeByCharacterStatus(characterStatus)
        printData(notebook, `計入角色性能輸入值: ${tempText}`, characterStatus)

        characterStatus, tempText = addAttributeByJobStatus(characterStatus)
        printData(notebook, `計入職業性能輸入值: ${tempText}`, characterStatus)

        characterStatus, tempText = addAttributeByWeaponStatus(characterStatus)
        printData(notebook, `計入武器性能輸入值: ${tempText}`, characterStatus)

        executeCalc(notebook, characterStatus)

    } else {
        alert('進行試算中途無法進行數值轉換，可能有部分欄位包含非數字的字元。')
    }
}

function inputCheck() {
    var cancelFlag = true
    var checkTargetList = [
        // Character Status
        'characterStatusAtk', 'characterStatusCritDmg', 'characterStatusBossDmg',
        'characterStatusSkillDmg', 'characterStatusAllSkillDmg', 'characterStatusPolar',
        'characterStatusAdapt', 'characterStatusBleed', 'characterStatusDebuff',
        'characterStatusBossDmgStone',
        // Job Status
        'jobStatusAtk', 'jobStatusCritDmg', 'jobStatusBossDmg',
        'jobStatusSkillDmg', 'jobStatusAllSkillDmg',
        // Weapon Status
        'weaponStatusUpgradeLevel', 'weaponStatusAtk', 'weaponStatusCritDmg',
        // Equip Status
        'equipStatusAmetTopUpgradeLevel', 'equipStatusAmetTopReforgeLevel',
        'equipStatusAmetBottomUpgradeLevel', 'equipStatusAmetBottomReforgeLevel',
        'equipStatusAmetGloveUpgradeLevel', 'equipStatusAmetGloveReforgeLevel',
        'equipStatusAmetShoesUpgradeLevel', 'equipStatusAmetShoesReforgeLevel',
        'equipStatusTeneTopUpgradeLevel', 'equipStatusTeneTopReforgeLevel',
        'equipStatusTeneBottomUpgradeLevel', 'equipStatusTeneBottomReforgeLevel',
        'equipStatusTeneGloveUpgradeLevel', 'equipStatusTeneGloveReforgeLevel',
        'equipStatusTeneShoesUpgradeLevel', 'equipStatusTeneShoesReforgeLevel',
    ]
    checkTargetList.forEach(function(item) {
        if (isNaN(document.getElementById(item).value)) {
            cancelFlag = false
        }
    })
    return cancelFlag
}

function addAttributeByReson(characterStatus) {
    characterStatus.skillDmg += 35
    characterStatus.polar += 7.5
    characterStatus.bossDmg += 15
    characterStatus.adapt += 7

    return characterStatus
}

function addAttributeByPet(characterStatus) {
    characterStatus.atk += 2

    return characterStatus
}

function addAttributeByMasterPet(characterStatus) {
    characterStatus.atk += 3
    characterStatus.bossDmg += 15

    return characterStatus
}

function addAttributeByCustomize(characterStatus) {
    characterStatus.skillDmg += 5

    return characterStatus
}

function addAttributeByCollection(characterStatus) {
    characterStatus.atk += 3.75
    characterStatus.bossDmg += 5
    characterStatus.skillDmg += 3
    characterStatus.critDmg += 1.5
    characterStatus.polar += 1.2
    characterStatus.adapt += 1
    characterStatus.allSkillDmg += 1

    return characterStatus
}

function addAttributeByFixedAccessory(characterStatus) {
    characterStatus.adapt += 2

    characterStatus.atk += 1
    characterStatus.skillDmg += 20

    characterStatus.skillDmg += 5
    characterStatus.critDmg += 18

    return characterStatus
}

function addAttributeByCharacterStatus(characterStatus) {
    const inputValue = {
        atk: document.getElementById('characterStatusAtk').value,
        critDmg: document.getElementById('characterStatusCritDmg').value,
        bossDmg: document.getElementById('characterStatusBossDmg').value,
        skillDmg: document.getElementById('characterStatusSkillDmg').value,
        allSkillDmg: document.getElementById('characterStatusAllSkillDmg').value,
        polar: document.getElementById('characterStatusPolar').value,
        adapt: document.getElementById('characterStatusAdapt').value,
        bleed: document.getElementById('characterStatusBleed').value,
    }
    inputValue.bossDmg = parseFloat(inputValue.bossDmg) + parseInt(document.getElementById('characterStatusBossDmgStone').value) * 2.5
    const debuff = parseInt(document.getElementById('characterStatusDebuff').value)

    for (const [key, value] of Object.entries(inputValue)) {
        characterStatus[key] += parseFloat(inputValue[key])
    }
    characterStatus.debuff = debuff;

    const tempText = `攻擊力 + ${inputValue.atk}%, ` +
                        `暴擊傷害 + ${inputValue.critDmg}%, ` +
                        `對 Boss 傷害 + ${inputValue.bossDmg}%, ` +
                        `技能傷害 + ${inputValue.skillDmg}%, ` +
                        `所有技能傷害 + ${inputValue.allSkillDmg}%, ` +
                        `兩極化 + ${inputValue.polar}%, ` +
                        `適應力 + ${inputValue.adapt}%, ` +
                        `流血 + ${inputValue.bleed}%, ` +
                        `環境 Debuff ${debuff}%`

    return characterStatus, tempText
}

function addAttributeByJobStatus(characterStatus) {
    const inputValue = {
        atk: document.getElementById('jobStatusAtk').value,
        critDmg: document.getElementById('jobStatusCritDmg').value,
        bossDmg: document.getElementById('jobStatusBossDmg').value,
        skillDmg: document.getElementById('jobStatusSkillDmg').value,
        allSkillDmg: document.getElementById('jobStatusAllSkillDmg').value,
    }

    for (const [key, value] of Object.entries(inputValue)) {
        characterStatus[key] += parseFloat(inputValue[key])
    }

    const tempText = `攻擊力 + ${inputValue.atk}%, ` +
                        `暴擊傷害 + ${inputValue.critDmg}%, ` +
                        `對 Boss 傷害 + ${inputValue.bossDmg}%, ` +
                        `技能傷害 + ${inputValue.skillDmg}%, ` +
                        `所有技能傷害 + ${inputValue.allSkillDmg}%, `

    return characterStatus, tempText
}

function addAttributeByWeaponStatus(characterStatus) {
    const inputValue = {
        type: document.getElementById('weaponStatusType').value,
        growLevel: document.getElementById('weaponStatusGrowLevel').value,
        upgradeLevel: parseInt(document.getElementById('weaponStatusUpgradeLevel').value),
        atk: parseFloat(document.getElementById('weaponStatusAtk').value),
        critDmg: parseFloat(document.getElementById('weaponStatusCritDmg').value),
    }

    var tempText = `使用 +${inputValue.upgradeLevel} ${inputValue.type} 武器 `
    if (inputValue.type === 'FOJ') {
        characterStatus.adapt += 5
        tempText += `[ 適應力 + 5%`

        if (inputValue.upgradeLevel >= 10) {
            characterStatus.allSkillDmg += 10
            tempText += `, 所有技能傷害 + 10%`
        }

        if (inputValue.upgradeLevel >= 12) {
            characterStatus.atk += 5
            tempText += `, 攻擊力 + 5%`
        }

        if (inputValue.upgradeLevel >= 13) {
            characterStatus.critDmg += 10
            tempText += `暴擊傷害 + 10%`
        }
        tempText += ` ]`
    }
    if (inputValue.type === 'VOS') {
        characterStatus.adapt += 5
        tempText += `[ 適應力 + 5%`

        if (inputValue.upgradeLevel >= 10) {
            characterStatus.atk += 10
            tempText += `, 攻擊力 + 10%`
        }

        if (inputValue.upgradeLevel >= 12) {
            characterStatus.polar += 7
            tempText += `, 兩極化 + 7%`
        }

        if (inputValue.upgradeLevel >= 13) {
            characterStatus.critDmg += 10
            tempText += `暴擊傷害 + 10%`
        }

        tempText += ` ] (成長 ${inputValue.growLevel} 階段 [ `
        if (inputValue.growLevel >= 5) {
            characterStatus.allSkillDmg += 10
            tempText += `所有技能傷害 + 10%`
        }
        tempText += ` ] )`
    }
    if (inputValue.type === 'SOA') {
        characterStatus.adapt += 5
        tempText += `[ 適應力 + 5%`

        if (inputValue.upgradeLevel >= 10) {
            characterStatus.atk += 12
            tempText += `, 攻擊力 + 12%`
        }

        if (inputValue.upgradeLevel >= 11) {
            characterStatus.polar += 10
            tempText += `, 兩極化 + 10%`
        }

        if (inputValue.upgradeLevel >= 13) {
            characterStatus.critDmg += 10
            tempText += `暴擊傷害 + 10%`
        }

        tempText += ` ] (成長 ${inputValue.growLevel} 階段 [ `
        if (inputValue.growLevel >= 1) {
            characterStatus.allSkillDmg += 10
            tempText += `所有技能傷害 + 10%`
        }
        if (inputValue.growLevel >= 3) {
            characterStatus.allSkillDmg += 5
            tempText += `, 所有技能傷害再 + 5%`
        }
        if (inputValue.growLevel >= 5) {
            characterStatus.allSkillDmg += 5
            tempText += `, 所有技能傷害再 + 5%`
        }
        tempText += ` ] )`
    }

    characterStatus.atk += inputValue.atk
    characterStatus.critDmg += inputValue.critDmg
    tempText += `, 魔力石 [ 攻擊力 + ${inputValue.atk}%, 暴擊傷害 + ${inputValue.critDmg}% ]`

    return characterStatus, tempText
}

function executeCalc(notebook, characterStatus) {
    var charWithEquipStatus = {
        amet: undefined, tene: undefined, mix: undefined
    }

    if (document.getElementById('equipStatusRadioAmet').checked) {
        charWithEquipStatus.amet = addAttributeByAmetEquipStatus(characterStatus)
        printData(notebook, `計入虹霓性能`, charWithEquipStatus.amet)
    }
    if (document.getElementById('equipStatusRadioTene').checked) {
        charWithEquipStatus.tene = addAttributeByTeneEquipStatus(characterStatus)
        printData(notebook, `計入泰納性能`, charWithEquipStatus.tene)
    }
    if (document.getElementById('equipStatusRadioMix').checked) {
        charWithEquipStatus.amet = addAttributeByAmetEquipStatus(characterStatus)
        printData(notebook, `計入虹霓性能`, charWithEquipStatus.amet)

        charWithEquipStatus.tene = addAttributeByTeneEquipStatus(characterStatus)
        printData(notebook, `計入泰納性能`, charWithEquipStatus.tene)

        charWithEquipStatus.mix = addAttributeByMixEquipStatus(characterStatus)
        printData(notebook, `計入混搭性能`, charWithEquipStatus.mix)
    }

    const equipDetail = readEquipInfo()
    const setDetail = readSetInfo()

    notebook.value += `# 統計可採用資料:\n`
    const partNames = Object.keys(equipDetail);
    var combiExpectCount = 1
    partNames.forEach((part) => {
        combiExpectCount *= equipDetail[part].length
        notebook.value += `# - ${part}: ${equipDetail[part].length} 件\n`
    })
    notebook.value += `# - 應當考量配置數量: ${numberWithCommas(combiExpectCount)} 套\n`

    const combiList = buildCombi(equipDetail, document.getElementById('equipStatusRadioMix').checked)
    notebook.value += `# - 運算得出配置數量: ${numberWithCommas(
        document.getElementById('equipStatusRadioMix').checked ?
        combiList.length * 3 :
        combiList.length
    )} 套\n\n`

    const calcResult = processCalc(charWithEquipStatus, combiList, equipDetail, setDetail)

}

function addAttributeByAmetEquipStatus(inputStatus) {
    var calcStatus = JSON.parse(JSON.stringify(inputStatus))

    const inputValue = {
        crimson: document.getElementById('equipStatusAmetCrimson').checked,
        top: {
            upgradeLevel: parseInt(document.getElementById('equipStatusAmetTopUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusAmetTopReforgeLevel').value),
        },
        bottom: {
            upgradeLevel: parseInt(document.getElementById('equipStatusAmetBottomUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusAmetBottomReforgeLevel').value),
        },
        glove: {
            upgradeLevel: parseInt(document.getElementById('equipStatusAmetGloveUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusAmetGloveReforgeLevel').value),
        },
        shoes: {
            upgradeLevel: parseInt(document.getElementById('equipStatusAmetShoesUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusAmetShoesReforgeLevel').value),
        },
    }

    // Set
    if (inputValue.crimson) {
        calcStatus.polar += 20
    }

    // Top
    calcStatus.adapt += 2
    if (inputValue.top.upgradeLevel >= 10) {
        calcStatus.bossDmg += 3
    }
    if (inputValue.top.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.top.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.top.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.top.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.top.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.top.reforgeLevel >= 15) {
        calcStatus.adapt += 1
    }
    if (inputValue.top.reforgeLevel >= 18) {
        calcStatus.critDmg += 3
    }
    if (inputValue.top.reforgeLevel >= 21) {
        calcStatus.atk += 3
    }

    // Bottom
    calcStatus.adapt += 2
    if (inputValue.bottom.upgradeLevel >= 10) {
        calcStatus.bossDmg += 3
    }
    if (inputValue.bottom.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.bottom.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.bottom.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.bottom.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.bottom.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.bottom.reforgeLevel >= 15) {
        calcStatus.adapt += 1
    }
    if (inputValue.bottom.reforgeLevel >= 18) {
        calcStatus.critDmg += 3
    }
    if (inputValue.bottom.reforgeLevel >= 21) {
        calcStatus.atk += 3
    }

    // Glove
    calcStatus.adapt += 2
    calcStatus.allSkillDmg += inputValue.glove.upgradeLevel * 5
    if (inputValue.glove.upgradeLevel >= 10) {
        calcStatus.bossDmg += 3
    }
    if (inputValue.glove.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.glove.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.glove.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.glove.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.glove.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.glove.reforgeLevel >= 15) {
        calcStatus.adapt += 1
    }
    if (inputValue.glove.reforgeLevel >= 18) {
        calcStatus.critDmg += 3
    }
    if (inputValue.glove.reforgeLevel >= 21) {
        calcStatus.atk += 3
    }

    // Shoes
    calcStatus.adapt += 2
    if (inputValue.shoes.upgradeLevel >= 10) {
        calcStatus.bossDmg += 3
    }
    if (inputValue.shoes.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.shoes.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.shoes.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.shoes.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.shoes.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.shoes.reforgeLevel >= 15) {
        calcStatus.adapt += 1
    }
    if (inputValue.shoes.reforgeLevel >= 18) {
        calcStatus.critDmg += 3
    }
    if (inputValue.shoes.reforgeLevel >= 21) {
        calcStatus.atk += 3
    }

    return calcStatus
}

function addAttributeByTeneEquipStatus(inputStatus) {
    var calcStatus = JSON.parse(JSON.stringify(inputStatus))

    const inputValue = {
        bleed: document.getElementById('equipStatusTeneTopTypeBleed').checked,
        option1st: document.getElementById('equipStatusTeneOption1st').checked,
        top: {
            upgradeLevel: parseInt(document.getElementById('equipStatusTeneTopUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusTeneTopReforgeLevel').value),
        },
        bottom: {
            upgradeLevel: parseInt(document.getElementById('equipStatusTeneBottomUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusTeneBottomReforgeLevel').value),
        },
        glove: {
            upgradeLevel: parseInt(document.getElementById('equipStatusTeneGloveUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusTeneGloveReforgeLevel').value),
        },
        shoes: {
            upgradeLevel: parseInt(document.getElementById('equipStatusTeneShoesUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusTeneShoesReforgeLevel').value),
        },
    }

    // Option 1st
    calcStatus.allSkillDmg += 1.5 * 4;

    // Top
    calcStatus.adapt += 2
    if (inputValue.bleed) {
        calcStatus.bleed += 10
    }
    if (inputValue.top.upgradeLevel >= 10) {
        calcStatus.bossDmg += 5
    }
    if (inputValue.top.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.top.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.top.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.top.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.top.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.top.reforgeLevel >= 15) {
        calcStatus.atk += 2
    }
    if (inputValue.top.reforgeLevel >= 18) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.top.reforgeLevel >= 21) {
        calcStatus.adapt += 2
    }

    // Bottom
    calcStatus.adapt += 2
    if (inputValue.bottom.upgradeLevel >= 10) {
        calcStatus.bossDmg += 5
    }
    if (inputValue.bottom.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.bottom.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.bottom.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.bottom.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.bottom.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.bottom.reforgeLevel >= 15) {
        calcStatus.atk += 2
    }
    if (inputValue.bottom.reforgeLevel >= 18) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.bottom.reforgeLevel >= 21) {
        calcStatus.adapt += 2
    }

    // Glove
    calcStatus.adapt += 2
    calcStatus.allSkillDmg += inputValue.glove.upgradeLevel * 5
    calcStatus.skillDmg += 10
    if (inputValue.glove.upgradeLevel >= 10) {
        calcStatus.bossDmg += 5
    }
    if (inputValue.glove.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.glove.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.glove.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.glove.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.glove.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.glove.reforgeLevel >= 15) {
        calcStatus.atk += 2
    }
    if (inputValue.glove.reforgeLevel >= 18) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.glove.reforgeLevel >= 21) {
        calcStatus.adapt += 2
    }

    // Shoes
    calcStatus.adapt += 2
    if (inputValue.shoes.upgradeLevel >= 10) {
        calcStatus.bossDmg += 5
    }
    if (inputValue.shoes.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.shoes.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.shoes.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.shoes.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.shoes.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.shoes.reforgeLevel >= 15) {
        calcStatus.atk += 2
    }
    if (inputValue.shoes.reforgeLevel >= 18) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.shoes.reforgeLevel >= 21) {
        calcStatus.adapt += 2
    }

    return calcStatus
}

function addAttributeByMixEquipStatus(inputStatus) {
    var calcStatus = JSON.parse(JSON.stringify(inputStatus))

    const inputValue = {
        crimson: document.getElementById('equipStatusAmetCrimson').checked,
        bleed: document.getElementById('equipStatusTeneTopTypeBleed').checked,
        option1st: document.getElementById('equipStatusTeneOption1st').checked,
        top: {
            upgradeLevel: parseInt(document.getElementById('equipStatusTeneTopUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusTeneTopReforgeLevel').value),
        },
        bottom: {
            upgradeLevel: parseInt(document.getElementById('equipStatusAmetBottomUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusAmetBottomReforgeLevel').value),
        },
        glove: {
            upgradeLevel: parseInt(document.getElementById('equipStatusTeneGloveUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusTeneGloveReforgeLevel').value),
        },
        shoes: {
            upgradeLevel: parseInt(document.getElementById('equipStatusAmetShoesUpgradeLevel').value),
            reforgeLevel: parseInt(document.getElementById('equipStatusAmetShoesReforgeLevel').value),
        },
    }

    // Set
    if (inputValue.crimson) {
        calcStatus.polar += 7
    }

    // Option 1st
    calcStatus.allSkillDmg += 1.5 * 2;

    // Top
    calcStatus.adapt += 2
    if (inputValue.bleed) {
        calcStatus.bleed += 10
    }
    if (inputValue.top.upgradeLevel >= 10) {
        calcStatus.bossDmg += 5
    }
    if (inputValue.top.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.top.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.top.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.top.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.top.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.top.reforgeLevel >= 15) {
        calcStatus.atk += 2
    }
    if (inputValue.top.reforgeLevel >= 18) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.top.reforgeLevel >= 21) {
        calcStatus.adapt += 2
    }

    // Bottom
    calcStatus.adapt += 2
    if (inputValue.bottom.upgradeLevel >= 10) {
        calcStatus.bossDmg += 3
    }
    if (inputValue.bottom.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.bottom.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.bottom.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.bottom.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.bottom.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.bottom.reforgeLevel >= 15) {
        calcStatus.adapt += 1
    }
    if (inputValue.bottom.reforgeLevel >= 18) {
        calcStatus.critDmg += 3
    }
    if (inputValue.bottom.reforgeLevel >= 21) {
        calcStatus.atk += 3
    }

    // Glove
    calcStatus.adapt += 2
    calcStatus.allSkillDmg += inputValue.glove.upgradeLevel * 5
    calcStatus.skillDmg += 10
    if (inputValue.glove.upgradeLevel >= 10) {
        calcStatus.bossDmg += 5
    }
    if (inputValue.glove.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.glove.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.glove.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.glove.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.glove.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.glove.reforgeLevel >= 15) {
        calcStatus.atk += 2
    }
    if (inputValue.glove.reforgeLevel >= 18) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.glove.reforgeLevel >= 21) {
        calcStatus.adapt += 2
    }

    // Shoes
    calcStatus.adapt += 2
    if (inputValue.shoes.upgradeLevel >= 10) {
        calcStatus.bossDmg += 3
    }
    if (inputValue.shoes.upgradeLevel >= 11) {
        calcStatus.adapt += 1
    }
    if (inputValue.shoes.reforgeLevel >= 3) {
        calcStatus.critDmg += 3
    }
    if (inputValue.shoes.reforgeLevel >= 6) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.shoes.reforgeLevel >= 9) {
        calcStatus.critDmg += 3
    }
    if (inputValue.shoes.reforgeLevel >= 12) {
        calcStatus.skillDmg += 5
    }
    if (inputValue.shoes.reforgeLevel >= 15) {
        calcStatus.adapt += 1
    }
    if (inputValue.shoes.reforgeLevel >= 18) {
        calcStatus.critDmg += 3
    }
    if (inputValue.shoes.reforgeLevel >= 21) {
        calcStatus.atk += 3
    }

    return calcStatus
}

function readEquipInfo() {
    var idNumber = (document.getElementById('equipListEquipTableBody').rows.length - 1)
    var tempArray = {
        '左五': [], '武器': [], '支援': [],
        '臉中': [], '上衣': [], '下衣': [],
        '手臂': [], '耳環': [], '項鍊': [],
        '臉上': [], '武飾': [], '聖獸戒指': [],
    }

    for (i = 0 ; i < idNumber ; i++) {
        const enable = document.getElementById('equipListEquipEnable_' + i).checked

        if (enable) {
            const part = document.getElementById('equipListEquipPart_' + i).value
            tempArray[part].push(
                {
                    name: document.getElementById('equipListEquipName_' + i).value,
                    part: document.getElementById('equipListEquipPart_' + i).value,
                    set: document.getElementById('equipListEquipSetName_' + i).value,
                    allSkillDmg: parseFloat(document.getElementById('equipListEquipAllSkillDmg_' + i).value),
                    atk: parseFloat(document.getElementById('equipListEquipAtk_' + i).value),
                    critDmg: parseFloat(document.getElementById('equipListEquipCritDmg_' + i).value),
                    polar: parseFloat(document.getElementById('equipListEquipPolar_' + i).value),
                    bossDmg: parseFloat(document.getElementById('equipListEquipBossDmg_' + i).value),
                    adapt: parseFloat(document.getElementById('equipListEquipAdapt_' + i).value),
                    bleed: parseFloat(document.getElementById('equipListEquipBleed_' + i).value),
                    cooldown: parseFloat(document.getElementById('equipListEquipCooldown_' + i).value),
                }
            )
        }
    }

    return tempArray
}

function readSetInfo() {
    var idNumber = (document.getElementById('equipListSetTableBody').rows.length - 1)
    var tempArray = []

    for (i = 0 ; i < idNumber ; i++) {
        tempArray.push(
            {
                name: document.getElementById('equipListSetName_' + i).value,
                setKey: document.getElementById('equipListSetKey_' + i).value,
                count: parseInt(document.getElementById('equipListSetCount_' + i).value),
                allSkillDmg: parseFloat(document.getElementById('equipListSetAllSkillDmg_' + i).value),
                atk: parseFloat(document.getElementById('equipListSetAtk_' + i).value),
                critDmg: parseFloat(document.getElementById('equipListSetCritDmg_' + i).value),
                polar: parseFloat(document.getElementById('equipListSetPolar_' + i).value),
                bossDmg: parseFloat(document.getElementById('equipListSetBossDmg_' + i).value),
                adapt: parseFloat(document.getElementById('equipListSetAdapt_' + i).value),
                bleed: parseFloat(document.getElementById('equipListSetBleed_' + i).value),
                cooldown: parseFloat(document.getElementById('equipListSetCooldown_' + i).value),
            }
        )
    }

    return tempArray
}

function buildCombi(equipDetail) {
    const partNames = Object.keys(equipDetail);
    const partCounts = partNames.map((partName) => equipDetail[partName].length);
    const combinations = [];

    function generate(currentCombination, partIndex) {
        if (partIndex === partNames.length) {
            combinations.push({ ...currentCombination });
            return;
        }

        const partName = partNames[partIndex];
        const partData = equipDetail[partName];

        for (let i = 0; i < partData.length; i++) {
            currentCombination[partName] = i;
            generate(currentCombination, partIndex + 1);
        }
    }

    generate({}, 0);
    return combinations
}

function processCalc(characterWithEquipStatus, combiDetail, equipDetail, setDetail) {
    var processTarget = []
    if (document.getElementById('equipStatusRadioAmet').checked) {
        processTarget.push('amet')
    }
    if (document.getElementById('equipStatusRadioTene').checked) {
        processTarget.push('tene')
    }
    if (document.getElementById('equipStatusRadioMix').checked) {
        processTarget.push('amet')
        processTarget.push('tene')
        processTarget.push('mix')
    }

    const needCooldown = document.getElementById('countAreaNeedCooldown').checked
    var bestAnswer = []

    processTarget.forEach((equipType) => {
        for (let combiIndex = 0; combiIndex < combiDetail.length; combiIndex++) {
            var tempStatus = {...characterWithEquipStatus[equipType]}
            var includeSetDict = {}
            if (document.getElementById('weaponStatusType').value === 'SOA') {
                includeSetDict.SOA = 1
            }

            const partNames = Object.keys(combiDetail[combiIndex]);
            partNames.forEach((partName) => {
                const equipInfo = equipDetail[partName][combiDetail[combiIndex][partName]]

                // Equip Effect
                addEquipEffect(tempStatus, equipInfo)

                // includeSetDict
                if (equipInfo.set !== '') {
                    if (equipInfo.set in includeSetDict) {
                        includeSetDict[equipInfo.set] += 1
                    } else {
                        includeSetDict[equipInfo.set] = 1
                    }
                }
            })

            setDetail.forEach((setInfo) => {
                if (setInfo.setKey in includeSetDict && includeSetDict[setInfo.setKey] >= setInfo.count) {
                    addEquipEffect(tempStatus, setInfo)
                }
            })

            if (needCooldown && tempStatus.cooldown < 5) {
                continue
            }

            // if (tempStatus.adapt < 45) {
            //     continue
            // }

            const combiAnswer = calcValue(tempStatus, combiDetail[combiIndex], equipType, equipDetail)

            var needKeep = false
            bestAnswer.forEach((answer) => {
                if (answer.value < combiAnswer) {
                    needKeep = true
                }
            })

            if (needKeep || bestAnswer.length === 0) {
                var tempAnswerArray = { value: combiAnswer, data: {} }

                const attrNames = Object.keys(tempStatus);
                attrNames.forEach((attrName) => {
                    tempAnswerArray.data[attrName] = tempStatus[attrName]
                })

                tempAnswerArray.data.equipType = equipType
                partNames.forEach((partName) => {
                    tempAnswerArray.data[partName] = equipDetail[partName][combiDetail[combiIndex][partName]].name
                })

                bestAnswer.push(tempAnswerArray)
                bestAnswer = bestAnswer.sort((a, b) => b.value - a.value)
                if (bestAnswer.length > 5) {
                    bestAnswer = bestAnswer.slice(0, 5)
                }
            }
        }
    })

    console.log('Best Answer:')
    bestAnswer.forEach((ans) => {
        console.log(ans)
    })
    displayResult(bestAnswer)
}

function addEquipEffect(characterStatus, equipStatus) {
    characterStatus.allSkillDmg += equipStatus.allSkillDmg
    characterStatus.atk += equipStatus.atk
    characterStatus.critDmg += equipStatus.critDmg
    characterStatus.polar += equipStatus.polar
    characterStatus.bossDmg += equipStatus.bossDmg
    characterStatus.adapt += equipStatus.adapt
    characterStatus.bleed += equipStatus.bleed
    characterStatus.cooldown += equipStatus.cooldown
}

function calcValue(status, useEquipList, equipType, equipDetail) {
    if (status.polar > 55) {
        status.polar = 55
    }
    if (status.adapt > 55) {
        status.adapt = 55
    }
    const atkPowerAfterBebuff = Math.min(100, 100 - status.debuff + status.adapt) / 100

    var value = 100.0
    if (equipDetail['臉上'][useEquipList['臉上']].name === '122花冠') {
        value *= 1.1
    } else if (equipDetail['臉上'][useEquipList['臉上']].name === '156皇冠') {
        value *= 1.05
    }

    value *= (100 + status.skillDmg) / 100
    value *= (100 + status.allSkillDmg) / 100
    value *= (100 + status.atk) / 100
    value *= (150 + status.critDmg) / 100
    value *= (100 + status.polar) / 100
    value *= (100 + status.bossDmg) / 100
    value *= (100 + status.bleed) / 100
    value *= atkPowerAfterBebuff

    if (equipType === 'tene') {
        if (document.getElementById('equipStatusTeneTopTypeGroupAtk').checked) {
            value *= 1.1
        }
        if (document.getElementById('equipStatusTeneOption3rd').checked) {
            value *= 1.064
        }
    }

    if (equipType === 'mix') {
        if (document.getElementById('equipStatusTeneTopTypeGroupAtk').checked) {
            value *= 1.1
        }
        if (document.getElementById('equipStatusTeneOption3rd').checked) {
            value *= 1.016
        }
    }

    return value
}

function displayResult(bestAnswer) {
    const dataLength = bestAnswer.length
    for (let i = 0; i < 5; i++) {
        let docKey = '_' + (i + 1).toString()
        if (i >= dataLength) {
            document.getElementById('bestAnswerValue' + docKey).innerHTML = ''
    
            document.getElementById('bestAnswerSkillDmg' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAllSkillDmg' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAtk' + docKey).innerHTML = ''
            document.getElementById('bestAnswerCritDmg' + docKey).innerHTML = ''
            document.getElementById('bestAnswerBossDmg' + docKey).innerHTML = ''
            document.getElementById('bestAnswerPolar' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAdapt' + docKey).innerHTML = ''
            document.getElementById('bestAnswerBleed' + docKey).innerHTML = ''
            document.getElementById('bestAnswerCooldown' + docKey).innerHTML = ''
            document.getElementById('bestAnswerDebuff' + docKey).innerHTML = ''
            
    
            document.getElementById('bestAnswerEquipType' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAvatar' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAvatarWeapon' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAccWeapon' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAccSupport' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAccFaceTop' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAccFaceMiddle' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAccTop' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAccBottom' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAccArm' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAccEarring' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAccNecklace' + docKey).innerHTML = ''
            document.getElementById('bestAnswerAccArtifactRing' + docKey).innerHTML = ''
        } else {
            document.getElementById('bestAnswerValue' + docKey).innerHTML = bestAnswer[i].value
    
            document.getElementById('bestAnswerSkillDmg' + docKey).innerHTML = bestAnswer[i].data.skillDmg
            document.getElementById('bestAnswerAllSkillDmg' + docKey).innerHTML = bestAnswer[i].data.allSkillDmg
            document.getElementById('bestAnswerAtk' + docKey).innerHTML = bestAnswer[i].data.atk
            document.getElementById('bestAnswerCritDmg' + docKey).innerHTML = bestAnswer[i].data.critDmg
            document.getElementById('bestAnswerBossDmg' + docKey).innerHTML = bestAnswer[i].data.bossDmg
            document.getElementById('bestAnswerPolar' + docKey).innerHTML = bestAnswer[i].data.polar
            document.getElementById('bestAnswerAdapt' + docKey).innerHTML = bestAnswer[i].data.adapt
            document.getElementById('bestAnswerBleed' + docKey).innerHTML = bestAnswer[i].data.bleed
            document.getElementById('bestAnswerCooldown' + docKey).innerHTML = bestAnswer[i].data.cooldown
            document.getElementById('bestAnswerDebuff' + docKey).innerHTML = bestAnswer[i].data.debuff
            
    
            document.getElementById('bestAnswerEquipType' + docKey).innerHTML = bestAnswer[i].data['equipType']
            document.getElementById('bestAnswerAvatar' + docKey).innerHTML = bestAnswer[i].data['左五']
            document.getElementById('bestAnswerAvatarWeapon' + docKey).innerHTML = bestAnswer[i].data['武器']
            document.getElementById('bestAnswerAccWeapon' + docKey).innerHTML = bestAnswer[i].data['武飾']
            document.getElementById('bestAnswerAccSupport' + docKey).innerHTML = bestAnswer[i].data['支援']
            document.getElementById('bestAnswerAccFaceTop' + docKey).innerHTML = bestAnswer[i].data['臉上']
            document.getElementById('bestAnswerAccFaceMiddle' + docKey).innerHTML = bestAnswer[i].data['臉中']
            document.getElementById('bestAnswerAccTop' + docKey).innerHTML = bestAnswer[i].data['上衣']
            document.getElementById('bestAnswerAccBottom' + docKey).innerHTML = bestAnswer[i].data['下衣']
            document.getElementById('bestAnswerAccArm' + docKey).innerHTML = bestAnswer[i].data['手臂']
            document.getElementById('bestAnswerAccEarring' + docKey).innerHTML = bestAnswer[i].data['耳環']
            document.getElementById('bestAnswerAccNecklace' + docKey).innerHTML = bestAnswer[i].data['項鍊']
            document.getElementById('bestAnswerAccArtifactRing' + docKey).innerHTML = bestAnswer[i].data['聖獸戒指']
        }
    }
}
