import json

eFile = open('Elsword/js/combi/unreleaseEquipInfoTable.js', 'r', encoding='utf-8').readlines()

keyList = [
    'name', 'setKey', 'count', 'allSkillDmg', 'atk', 
    'critDmg', 'polar', 'bossDmg', 'adapt', 'bleed', 
    'cooldown'
]

resultList = []
for i in range(0, len(eFile)):
    if i <= 2 or len(eFile[i]) < 5:
        continue
    
    tempList = eFile[i].replace('\n', '')
    tempList = tempList.replace(' ', '')
    tempList = tempList.replace('[', '')
    tempList = tempList.replace(']', '')
    tempList = tempList.replace('\'', '')
    tempList = tempList.split(',')

    resultDict = {}
    for j in range(0, len(keyList)):
        if j == 10: 
            resultDict[keyList[j]] = 0
        elif j > 2:
            try:
                resultDict[keyList[j]] = int(tempList[j])
            except ValueError:
                resultDict[keyList[j]] = float(tempList[j])
        else:
            resultDict[keyList[j]] = tempList[j]
    
    resultList.append(resultDict)

# Serializing json
json_object = json.dumps(resultList, indent=4, ensure_ascii=False)
 
# Writing to sample.json
with open("Elsword/js/combi/unreleaseEquipInfo.json", "w", encoding='utf-8') as outfile:
    outfile.write(json_object)