
function numberToStringWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function roundNumber(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal );
}

function initialData() {
    // Initial calculator area
    executeCalc();

    for ( const equipType of ['Amethystine', 'Tenebrous']) {
        const basicTable = document.getElementById(equipType.toLowerCase() + 'BasicTable');
        for ( let i = 0 ; i < 21 ; i++ ) {
            // tr
            let trChild = document.createElement('tr');

            // th 鍛造階級
            let reforgeLevelTh = document.createElement('th');
            reforgeLevelTh.classList.add('text-center')
            reforgeLevelTh.scope = 'row';
            reforgeLevelTh.innerHTML = `${i + 1} (${i} → ${i + 1})`;
            trChild.appendChild(reforgeLevelTh);

            // td
            let questMaterialCostTd = document.createElement('td');
            questMaterialCostTd.classList.add('text-center')
            questMaterialCostTd.innerHTML = numberToStringWithCommas(questMaterialCostList[equipType][i]);
            trChild.appendChild(questMaterialCostTd);

            let dropMaterialCostTd = document.createElement('td');
            dropMaterialCostTd.classList.add('text-center')
            dropMaterialCostTd.innerHTML = numberToStringWithCommas(dropMaterialCostList[equipType][i]);
            trChild.appendChild(dropMaterialCostTd);

            let magicCrystalCostTd = document.createElement('td');
            magicCrystalCostTd.classList.add('text-center')
            magicCrystalCostTd.innerHTML = numberToStringWithCommas(magicCrystalCostList[equipType][i]);
            trChild.appendChild(magicCrystalCostTd);

            let edCostTd = document.createElement('td');
            edCostTd.classList.add('text-center')
            edCostTd.innerHTML = numberToStringWithCommas(edCostList[equipType][i]);
            trChild.appendChild(edCostTd);

            let guaranteedGaugeTd = document.createElement('td');
            guaranteedGaugeTd.classList.add('text-center')
            guaranteedGaugeTd.innerHTML = `${roundNumber(guaranteedGaugeList[equipType][i] * 100, 3)}%`;
            trChild.appendChild(guaranteedGaugeTd);

            let successRateTd = document.createElement('td');
            successRateTd.classList.add('text-center')
            successRateTd.innerHTML = `${roundNumber(successRateList[equipType][i] * 100, 3)}%`;
            trChild.appendChild(successRateTd);

            let equipEffectTd = document.createElement('td');
            equipEffectTd.classList.add('text-center')
            equipEffectTd.innerHTML = equipEffectList[equipType][i];
            trChild.appendChild(equipEffectTd);

            basicTable.appendChild(trChild);
        }
    }

    for ( const equipType of ['Amethystine', 'Tenebrous']) {
        const guaranteedTable = document.getElementById(equipType.toLowerCase() + 'GuaranteedTable');
        const guaranteedTimeList = [];
        const guaranteedQuestMaterialCostList = [];
        const guaranteedDropMaterialCostList = [];
        const guaranteedMagicCrystalCostList = [];
        const guaranteedEdCostList = [];
        for ( let i = 0 ; i < 21 ; i++ ) {
            // tr
            let trChild = document.createElement('tr');

            // th 鍛造階級
            let reforgeLevelTh = document.createElement('th');
            reforgeLevelTh.classList.add('text-center')
            reforgeLevelTh.scope = 'row';
            reforgeLevelTh.innerHTML = `${i + 1} (${i} → ${i + 1})`;
            trChild.appendChild(reforgeLevelTh);

            // Calculate guaranteed
            guaranteedTimeList.push(Math.ceil(1 / guaranteedGaugeList[equipType][i]));
            guaranteedQuestMaterialCostList.push(guaranteedTimeList[i] * questMaterialCostList[equipType][i]);
            guaranteedDropMaterialCostList.push(guaranteedTimeList[i] * dropMaterialCostList[equipType][i]);
            guaranteedMagicCrystalCostList.push(guaranteedTimeList[i] * magicCrystalCostList[equipType][i]);
            guaranteedEdCostList.push(guaranteedTimeList[i] * edCostList[equipType][i]);

            // td
            let guaranteedGaugeTd = document.createElement('td');
            guaranteedGaugeTd.classList.add('text-center')
            guaranteedGaugeTd.innerHTML = `${roundNumber(guaranteedGaugeList[equipType][i] * 100, 3)}%`;
            trChild.appendChild(guaranteedGaugeTd);

            let guaranteedTimeTd = document.createElement('td');
            guaranteedTimeTd.classList.add('text-center')
            guaranteedTimeTd.innerHTML = numberToStringWithCommas(guaranteedTimeList[i]);
            trChild.appendChild(guaranteedTimeTd);

            let questMaterialCostTd = document.createElement('td');
            questMaterialCostTd.classList.add('text-center')
            questMaterialCostTd.innerHTML = numberToStringWithCommas(guaranteedQuestMaterialCostList[i]);
            trChild.appendChild(questMaterialCostTd);

            let dropMaterialCostTd = document.createElement('td');
            dropMaterialCostTd.classList.add('text-center')
            dropMaterialCostTd.innerHTML = numberToStringWithCommas(guaranteedDropMaterialCostList[i]);
            trChild.appendChild(dropMaterialCostTd);

            let magicCrystalCostTd = document.createElement('td');
            magicCrystalCostTd.classList.add('text-center')
            magicCrystalCostTd.innerHTML = numberToStringWithCommas(guaranteedMagicCrystalCostList[i]);
            trChild.appendChild(magicCrystalCostTd);

            let edCostTd = document.createElement('td');
            edCostTd.classList.add('text-center')
            edCostTd.innerHTML = numberToStringWithCommas(guaranteedEdCostList[i]);
            trChild.appendChild(edCostTd);

            guaranteedTable.appendChild(trChild);

            if ((i + 1) % 3 === 0) {
                let sumTrChild = document.createElement('tr');
                sumTrChild.classList.add('table-warning');
                
                const startLevel = i - 2;
                const endLevel = i + 1;
                let guaranteedTime = 0;
                let guaranteedQuestMaterialCost = 0;
                let guaranteedDropMaterialCost = 0;
                let guaranteedMagicCrystalCost = 0;
                let guaranteedEdCost = 0;
                for (let j = startLevel ; j < endLevel ; j++ ) {
                    guaranteedTime += guaranteedTimeList[j];
                    guaranteedQuestMaterialCost += guaranteedQuestMaterialCostList[j];
                    guaranteedDropMaterialCost += guaranteedDropMaterialCostList[j];
                    guaranteedMagicCrystalCost += guaranteedMagicCrystalCostList[j];
                    guaranteedEdCost += guaranteedEdCostList[j];
                }
                
                // Empty column
                let emptyColumn = document.createElement('td');
                emptyColumn.classList.add('text-center');
                emptyColumn.innerHTML = ' ';
                sumTrChild.appendChild(emptyColumn);

                // th 鍛造階級
                let reforgeLevelTh = document.createElement('th');
                reforgeLevelTh.classList.add('text-center')
                reforgeLevelTh.scope = 'row';
                reforgeLevelTh.innerHTML = `合計 ${startLevel} → ${endLevel}`;
                sumTrChild.appendChild(reforgeLevelTh);

                // td 
                let guaranteedTimeTd = document.createElement('td');
                guaranteedTimeTd.classList.add('text-center')
                guaranteedTimeTd.innerHTML = numberToStringWithCommas(guaranteedTime);
                sumTrChild.appendChild(guaranteedTimeTd);

                let questMaterialCostTd = document.createElement('td');
                questMaterialCostTd.classList.add('text-center')
                questMaterialCostTd.innerHTML = numberToStringWithCommas(guaranteedQuestMaterialCost);
                sumTrChild.appendChild(questMaterialCostTd);

                let dropMaterialCostTd = document.createElement('td');
                dropMaterialCostTd.classList.add('text-center')
                dropMaterialCostTd.innerHTML = numberToStringWithCommas(guaranteedDropMaterialCost);
                sumTrChild.appendChild(dropMaterialCostTd);

                let magicCrystalCostTd = document.createElement('td');
                magicCrystalCostTd.classList.add('text-center')
                magicCrystalCostTd.innerHTML = numberToStringWithCommas(guaranteedMagicCrystalCost);
                sumTrChild.appendChild(magicCrystalCostTd);

                let edCostTd = document.createElement('td');
                edCostTd.classList.add('text-center')
                edCostTd.innerHTML = numberToStringWithCommas(guaranteedEdCost);
                sumTrChild.appendChild(edCostTd);

                guaranteedTable.appendChild(sumTrChild);

                if ( i !== 3) {
                    let totalSumTrChild = document.createElement('tr');
                    totalSumTrChild.classList.add('table-danger');
                    
                    const startLevel = 0;
                    const endLevel = i + 1;
                    let guaranteedTime = 0;
                    let guaranteedQuestMaterialCost = 0;
                    let guaranteedDropMaterialCost = 0;
                    let guaranteedMagicCrystalCost = 0;
                    let guaranteedEdCost = 0;
                    for (let j = startLevel ; j < endLevel ; j++ ) {
                        guaranteedTime += guaranteedTimeList[j];
                        guaranteedQuestMaterialCost += guaranteedQuestMaterialCostList[j];
                        guaranteedDropMaterialCost += guaranteedDropMaterialCostList[j];
                        guaranteedMagicCrystalCost += guaranteedMagicCrystalCostList[j];
                        guaranteedEdCost += guaranteedEdCostList[j];
                    }
                    
                    // Empty column
                    let emptyColumn = document.createElement('td');
                    emptyColumn.classList.add('text-center');
                    emptyColumn.innerHTML = ' ';
                    totalSumTrChild.appendChild(emptyColumn);

                    // th 鍛造階級
                    let reforgeLevelTh = document.createElement('th');
                    reforgeLevelTh.classList.add('text-center')
                    reforgeLevelTh.scope = 'row';
                    reforgeLevelTh.innerHTML = `合計 ${startLevel} → ${endLevel}`;
                    totalSumTrChild.appendChild(reforgeLevelTh);

                    // td 
                    let guaranteedTimeTd = document.createElement('td');
                    guaranteedTimeTd.classList.add('text-center')
                    guaranteedTimeTd.innerHTML = numberToStringWithCommas(guaranteedTime);
                    totalSumTrChild.appendChild(guaranteedTimeTd);

                    let questMaterialCostTd = document.createElement('td');
                    questMaterialCostTd.classList.add('text-center')
                    questMaterialCostTd.innerHTML = numberToStringWithCommas(guaranteedQuestMaterialCost);
                    totalSumTrChild.appendChild(questMaterialCostTd);

                    let dropMaterialCostTd = document.createElement('td');
                    dropMaterialCostTd.classList.add('text-center')
                    dropMaterialCostTd.innerHTML = numberToStringWithCommas(guaranteedDropMaterialCost);
                    totalSumTrChild.appendChild(dropMaterialCostTd);

                    let magicCrystalCostTd = document.createElement('td');
                    magicCrystalCostTd.classList.add('text-center')
                    magicCrystalCostTd.innerHTML = numberToStringWithCommas(guaranteedMagicCrystalCost);
                    totalSumTrChild.appendChild(magicCrystalCostTd);

                    let edCostTd = document.createElement('td');
                    edCostTd.classList.add('text-center')
                    edCostTd.innerHTML = numberToStringWithCommas(guaranteedEdCost);
                    totalSumTrChild.appendChild(edCostTd);

                    guaranteedTable.appendChild(totalSumTrChild);
                }
            }
        }
    }
}
