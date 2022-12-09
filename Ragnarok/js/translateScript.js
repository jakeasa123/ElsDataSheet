
wordDict = {}
wordLengthList = []

function initialPage() {

    document.getElementById('inputArea').value = '선악의 관(엘레멘탈 마스터) [1]\n영웅과 재앙의 힘이 공명하는 투구.\n선악의 무기를 증폭시키는 효과를 가지고 있다.\n\n3제련 당 모든 종족의 적에게 주는 마법 데미지 5% 증가.\n4제련 당 화, 독, 수, 지속성 마법 데미지 7% 증가.\n7제련 시, RES + 50.\n9제련 시, 변동 캐스팅 10% 감소.\n11제련 시, MATK + 5%, 고정 캐스팅 0.3초 감소.\n\n둠 바이블과 함께 장착 시,\n무기 3제련 당 베놈 스웜프 데미지 4% 증가, 컨프래그레이션 데미지 5% 증가,\n무기의 등급이 B등급 이상인 경우, 베놈 스웜프 데미지 10% 추가 증가.\n악의 마력과 함께 장착한 경우, 베놈 스웜프 데미지 15% 추가 증가, 컨프래그레이션 데미지 20% 추가 증가.\n\n블레스드 바이블과 함께 장착 시,\n무기 3제련 당 다이아몬드 스톰 데미지 4% 증가, 테라 드라이브 데미지 5% 추가 증가,\n무기의 등급이 B등급 이상인 경우, 다이아몬드 스톰 데미지 10% 추가 증가.\n선의 마력과 함께 장착한 경우, 다이아몬드 스톰 데미지 15% 추가 증가, 테라 드라이브 데미지 20% 추가 증가.\n\n[등급별 추가 옵션]\n[D등급] MHP + 5%.\n[C등급] P.ATK + 3, S.MATK + 3.\n[B등급] P.ATK + 2, S.MATK + 2, POW + 2, SPL + 2.\n[A등급] RES + 50, MRES + 50, 12제련 시, 고정 캐스팅 0.2초 추가 감소.\n\n계열 : 투구 방어 : 10\n위치 : 상단 무게 : 10\n방어구 레벨 : 2\n요구 레벨 : 215\n장착 : 엘레멘탈 마스터'

    for (const [key, value] of Object.entries(keywordDict)) {
        key_len = key.length

        // If not exist
        if (!(key_len in wordDict)) {
            wordDict[key_len] = {}
            wordLengthList.push(key_len)
        }

        // Append
        wordDict[key_len][key] = value
    }

    // Sort wordLengthList
    wordLengthList.sort(function(a, b) {
        return a - b;
    });
    wordLengthList.reverse()
}

function executeTranslate() {
    input = document.getElementById('inputArea').value

    wordLengthList.forEach(function(char_count) {
        for (const [kr_char, tc_char] of Object.entries(wordDict[char_count])) {
            if (input.includes(kr_char)) {
                input = input.replaceAll(kr_char, tc_char)
                console.log(true)
            }
        }
    });

    // Output
    document.getElementById('outputArea').value = input
}