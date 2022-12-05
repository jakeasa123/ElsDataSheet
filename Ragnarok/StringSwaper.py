import os, sys

TargetFileList = [
    'sn_equip_info.html'
]

SwapDict = {
    # Grade
    '- D:': '[各階級追加效果]<br />\n                            - [D 階級]',
    '- C:': '- [C 階級]',
    '- B:': '- [B 階級]',
    '- A:': '- [A 階級]',

    # Detail
    '一級防具': '防具等級: 1',
    '二級防具': '防具等級: 2',
    '四級武器': '武器等級: 4',
    '五級武器': '武器等級: 5',
    '嗨趴初學者': 'Hyper Novice',

    # Sㄠ
    'Shield Chain Rush': '[連續盾牌衝擊]',
    'Double Bowling Bash': '[雙重怪物互擊]',
    # 'Shield Chain Rush': '[連續盾牌衝擊]',
    # 'Shield Chain Rush': '[連續盾牌衝擊]',
    'Meteor Storm Buster': '[隕石轟炸]',
    'Meteor Stormbuster': '[隕石轟炸]',
    'Jack Frost Nova': '[凍僵新星]',
    # 'Shield Chain Rush': '[連續盾牌衝擊]',
    'Eufitel Thunderstorm': '[雷霆風暴]',
    # 'Shield Chain Rush': '[連續盾牌衝擊]',
    'Napalm Vulcan Strike': '[念力直擊]',
}

for target_file in TargetFileList:
    target_path = os.path.join(sys.path[0], target_file)
    file_data_temp = []

    for line in open(target_path, 'r', encoding='utf-8'):
        file_data_temp.append(line)

    rewrite_file = open(target_path, 'w', encoding='utf-8')
    for line in file_data_temp:

        temp_line = line
        for key_word in SwapDict:
            if key_word in temp_line:
                temp_line = temp_line.replace(key_word, SwapDict[key_word])

        rewrite_file.write(temp_line)
    rewrite_file.close()
