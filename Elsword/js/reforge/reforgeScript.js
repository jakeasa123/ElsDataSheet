
function numberToStringWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function roundNumber(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal );
}

function executeCalc() {
    // Get input
    const equipRadio = document.querySelector('input[name="radioEquipType"]:checked').value;
    const equipType = (equipRadio === 'radioAmet' ? 'Amethystine' : 'Tenebrous');
    var currentReforge = document.getElementById('currentReforge').value;
    var targetReforge = document.getElementById('targetReforge').value;

    // Stop when not number input.
    if (isNaN(currentReforge) || isNaN(targetReforge)) {
        const tipModal = new bootstrap.Modal(document.getElementById('tipModal'))
        tipModal.show();

        return;
    }

    // Parse input and update display string
    currentReforge = parseInt(currentReforge);
    targetReforge = parseInt(targetReforge);
    if (equipType === 'Amethystine') {
        // Amethystine
        document.getElementById('tEquipType').innerHTML = '虹霓防具 ' + currentReforge + ' → ' + targetReforge;
        document.getElementById('tReforgeMaterial_1').innerHTML = '虹霓珠';
        document.getElementById('tReforgeMaterial_2').innerHTML = '冰塊';
        document.getElementById('tRequireDaysLbl_1').innerHTML = '所需天數 (350 / 週)';
        document.getElementById('tRequireDaysFullLbl_1').innerHTML = '所需天數 (550 / 週)';
        document.getElementById('tRequireDaysLbl_2').innerHTML = '所需天數 (350 / 週)';
        document.getElementById('tRequireDaysFullLbl_2').innerHTML = '所需天數 (550 / 週)';
    } else {
        // Tenebrous
        document.getElementById('tEquipType').innerHTML = '泰納防具 ' + currentReforge + ' → ' + targetReforge;
        document.getElementById('tReforgeMaterial_1').innerHTML = '泰納布洛斯氣息';
        document.getElementById('tReforgeMaterial_2').innerHTML = '塔斯瑪氣息';
        document.getElementById('tRequireDaysLbl_1').innerHTML = '-';
        document.getElementById('tRequireDaysFullLbl_1').innerHTML = '所需天數 (2,100 / 週)';
        document.getElementById('tRequireDaysLbl_2').innerHTML = '-';
        document.getElementById('tRequireDaysFullLbl_2').innerHTML = '所需天數 (2,100 / 週)';
    }

    // Stop when input out of range.
    if ((currentReforge >= targetReforge) || (currentReforge > 21) || (targetReforge > 21)) {
        const tipModal = new bootstrap.Modal(document.getElementById('tipModal'));
        tipModal.show();

        return;
    }

    // Calculate guaranteed actually need
    const guaranteedActuallyList = [];
    guaranteedGaugeList[equipType].map(item =>
        guaranteedActuallyList.push(Math.ceil(1 / item))
    );

    // Calculate expect value
    const expectValueList = [];
    for (i = 0 ; i < 21 ; i++) {
        const basicNumber = 1 - successRateList[equipType][i];
        const powNumber = Math.pow(basicNumber, guaranteedActuallyList[i]);
        const processResult = Math.ceil(1 + (basicNumber - powNumber) / successRateList[equipType][i]);

        expectValueList.push(processResult);
    }

    // Define final result dict
    var reforgeResult = {
        'exceptValue': {
            'reforgeTime': 0,
            'questMaterialCost': 0,
            'dropMaterialCost': 0,
            'magicCrystalCost': 0,
            'edCost': 0
        },
        'guaranteed': {
            'reforgeTime': 0,
            'questMaterialCost': 0,
            'dropMaterialCost': 0,
            'magicCrystalCost': 0,
            'edCost': 0
        }
    };

    // Calculate final result
    for (i = currentReforge ; i < targetReforge ; i++) {
        reforgeResult['exceptValue']['reforgeTime'] += expectValueList[i];
        reforgeResult['exceptValue']['questMaterialCost'] += expectValueList[i] * questMaterialCostList[equipType][i];
        reforgeResult['exceptValue']['dropMaterialCost'] += expectValueList[i] * dropMaterialCostList[equipType][i];
        reforgeResult['exceptValue']['magicCrystalCost'] += expectValueList[i] * magicCrystalCostList[equipType][i];
        reforgeResult['exceptValue']['edCost'] += expectValueList[i] * edCostList[equipType][i];

        reforgeResult['guaranteed']['reforgeTime'] += guaranteedActuallyList[i];
        reforgeResult['guaranteed']['questMaterialCost'] += guaranteedActuallyList[i] * questMaterialCostList[equipType][i];
        reforgeResult['guaranteed']['dropMaterialCost'] += guaranteedActuallyList[i] * dropMaterialCostList[equipType][i];
        reforgeResult['guaranteed']['magicCrystalCost'] += guaranteedActuallyList[i] * magicCrystalCostList[equipType][i];
        reforgeResult['guaranteed']['edCost'] += guaranteedActuallyList[i] * edCostList[equipType][i];
    }

    // Update display
    document.getElementById('tExcTime').innerHTML = numberToStringWithCommas(reforgeResult['exceptValue']['reforgeTime']) + ' 次';
    document.getElementById('tExcQuestMat').innerHTML = numberToStringWithCommas(reforgeResult['exceptValue']['questMaterialCost']);
    document.getElementById('tExcDropMat').innerHTML = numberToStringWithCommas(reforgeResult['exceptValue']['dropMaterialCost']);
    document.getElementById('tExcMagicCrystal').innerHTML = numberToStringWithCommas(reforgeResult['exceptValue']['magicCrystalCost']);
    document.getElementById('tExcED').innerHTML = numberToStringWithCommas(reforgeResult['exceptValue']['edCost']);

    document.getElementById('tGuaTime').innerHTML = numberToStringWithCommas(reforgeResult['guaranteed']['reforgeTime']) + ' 次';
    document.getElementById('tGuaQuestMat').innerHTML = numberToStringWithCommas(reforgeResult['guaranteed']['questMaterialCost']);
    document.getElementById('tGuaDropMat').innerHTML = numberToStringWithCommas(reforgeResult['guaranteed']['dropMaterialCost']);
    document.getElementById('tGuaMagicCrystal').innerHTML = numberToStringWithCommas(reforgeResult['guaranteed']['magicCrystalCost']);
    document.getElementById('tGuaED').innerHTML = numberToStringWithCommas(reforgeResult['guaranteed']['edCost']);

    // Calculate spend time and update display
    if (equipType === 'Amethystine') {
        // Amethystine
        document.getElementById('tRequireDays_1').innerHTML = roundNumber(reforgeResult['exceptValue']['questMaterialCost'] / 350, 2) + ' 週';
        document.getElementById('tRequireDaysFull_1').innerHTML = roundNumber(reforgeResult['exceptValue']['questMaterialCost'] / 550, 2) + ' 週';
        document.getElementById('tRequireDays_2').innerHTML = roundNumber(reforgeResult['guaranteed']['questMaterialCost'] / 350, 2) + ' 週';
        document.getElementById('tRequireDaysFull_2').innerHTML = roundNumber(reforgeResult['guaranteed']['questMaterialCost'] / 550, 2) + ' 週';
    } else {
        // Tenebrous
        document.getElementById('tRequireDays_1').innerHTML = '- 週';
        document.getElementById('tRequireDaysFull_1').innerHTML = roundNumber(reforgeResult['exceptValue']['questMaterialCost'] / 2100, 2) + ' 週';
        document.getElementById('tRequireDays_2').innerHTML = '- 週';
        document.getElementById('tRequireDaysFull_2').innerHTML = roundNumber(reforgeResult['guaranteed']['questMaterialCost'] / 2100, 2) + ' 週';
    }
}