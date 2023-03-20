var int_formatter = new Intl.NumberFormat('en-US')

// Basic Function
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function between(compare_num, min_num, max_num) {
    if (min_num <= compare_num && compare_num < max_num) {
        return true
    }
    else {
        return false
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function add_zero(num) {
    return num < 10 ? '0' + num : num
}

function getCurrentTime() {
    var temp_date = new Date()
    return add_zero(temp_date.getHours()) + ":" + add_zero(temp_date.getMinutes()) + ":" + add_zero(temp_date.getSeconds())
}

rate_array = [
    ['稱號：聖戰士', 1, 0, 10],
    ['稱號：犧牲', 1, 10, 20],
    ['稱號：勝利榮耀', 1, 20, 30],
    ['冰機武器箱子', 1, 30, 3030],
    ['冰機上衣箱子', 1, 3030, 9030],
    ['冰機褲子箱子', 1, 9030, 15030],
    ['冰機手套箱子', 1, 15030, 26030],
    ['冰機鞋子箱子', 1, 26030, 37030],
    ['冰機髮型箱子', 1, 37030, 43030],
    ['冰機飾品箱子之一', 1, 43030, 46530],
    ['冰機飾品箱子之二', 1, 46530, 50030],
    ['武器 Lv.9 強化符咒', 1, 50030, 50329],
    ['武器 Lv.10 強化符咒', 1, 50329, 50330],
    ['防具 Lv.9 強化符咒', 1, 50330, 50629],
    ['防具 Lv.10 強化符咒', 1, 50629, 50630],
    ['裝備 Lv.8 強化符咒', 1, 50630, 70630],
    ['賢者魔法石 2 入箱子', 1, 70630, 75630],
    ['特級魔法石（額外傷害）', 1, 75630, 90630],
    ['特級魔法石（暴擊率）', 1, 90630, 103130],
    ['特級魔法石（動作速度）', 1, 103130, 115630],
    ['特級魔法石（減少傷害）', 1, 115630, 130630],
    ['特級魔法石（極大化）', 1, 130630, 143130],
    ['特級魔法石（HP）', 1, 143130, 158130],
    ['基礎武器飾品箱子', 1, 158130, 178130],
    ['艾利亞諾德 Boss 飾品箱子', 1, 178130, 194120],
    ['巴尼米爾 Boss 飾品箱子', 1, 194120, 195110],
    ['利古魔爾 Boss 飾品箱子', 1, 195110, 196100],
    ['職業時裝箱子（7 天）', 1, 196100, 216100],
    ['完全恢復藥水 50 入箱子', 1, 216100, 256100],
    ['完全恢復藥水 100 入箱子', 1, 256100, 356100],
    ['鬥志藥水', 1, 356100, 366100],
    ['適應力靈藥', 1, 366100, 384000],
    ['釣具：高級捲線器', 1, 384000, 404000],
    ['釣具：金色浮標', 1, 404000, 424000],
    ['艾爾結晶（不明）', 50, 424000, 464000],
    ['艾爾結晶（火）', 50, 464000, 504000],
    ['艾爾結晶（水）', 50, 504000, 544000],
    ['艾爾結晶（風）', 50, 544000, 584000],
    ['艾爾結晶（地）', 50, 584000, 624000],
    ['艾爾結晶（暗）', 50, 624000, 664000],
    ['艾爾結晶（光）', 50, 664000, 704000],
    ['魔奇 Boss 飾品箱子', 1, 704000, 721000],
    ['艾德 Boss 飾品箱子', 1, 721000, 738000],
    ['貝斯馬 Boss 飾品箱子', 1, 738000, 755000],
    ['厄泰拉 Boss 飾品箱子', 1, 755000, 772000],
    ['沛塔 Boss 飾品箱子', 1, 772000, 789000],
    ['班德 Boss 飾品箱子', 1, 789000, 806000],
    ['哈梅爾 Boss 飾品箱子', 1, 806000, 823000],
    ['沙德 Boss 飾品箱子', 1, 823000, 840000],
    ['拉諾斯 Boss 飾品箱子', 1, 840000, 860000],
    ['艾里希溫 Boss 飾品箱子', 1, 860000, 880000],
    ['火水晶球 250 入箱子', 1, 880000, 900000],
    ['水水晶球 250 入箱子', 1, 900000, 920000],
    ['風水晶球 250 入箱子', 1, 920000, 940000],
    ['地水晶球 250 入箱子', 1, 940000, 960000],
    ['暗水晶球 250 入箱子', 1, 960000, 980000],
    ['光水晶球 250 入箱子', 1, 980000, 1000000],
]
rate_array_len = rate_array.length

button_list = [
    'exeIB-1',
    'exeIB-10',
    'exeIB-20',
    'exeIB-100',
]


// 調整 textarea 長度
function adjustTextArea(target_object, max_length) {
    var inside_text = target_object.value
    if (inside_text.length > max_length) {
        target_object.value = inside_text.substring(0, max_length)
    }
}

function extendList() {
    var record_area_tag = document.getElementById('recordArea')

    for (var i = 0 ; i < rate_array_len ; i++) {
        var num_tag_id = 'item-tag-' + rate_array[i][0]

        // tr
        var trId = "tr-" + rate_array[i][0]
        var tempChild = document.createElement('tr')
        tempChild.setAttribute("id", trId)
        record_area_tag.appendChild(tempChild)

        // th
        tempChild = document.createElement('th')
        tempChild.setAttribute("scope", "row")
        tempChild.textContent = rate_array[i][0]
        document.getElementById(trId).appendChild(tempChild)

        // td
        tempChild = document.createElement('td')
        tempChild.setAttribute("id", num_tag_id)
        tempChild.textContent = '0'
        document.getElementById(trId).appendChild(tempChild)
    }
}

function executeBurner(execute_time) {

    // Disable Btn to prevent multi click
    button_list.forEach(function(btn_id) {
        document.getElementById(btn_id).disabled = true
    });

    var current_spend_tag = document.getElementById('current-spend')
    var current_spend = parseInt(current_spend_tag.innerText) + execute_time
    current_spend_tag.innerText = current_spend

    var current_time = getCurrentTime()
    var note_tag = document.getElementById('note')
    var record_area_tag = document.getElementById('recordArea')

    for (var i = 0 ; i < execute_time ; i++) {
        getItem(current_time, note_tag, record_area_tag)
    }

    adjustTextArea(note_tag, 1000)

    // Release Btn after process
    button_list.forEach(function(btn_id) {
        document.getElementById(btn_id).disabled = false
    });
}

function getItem(cur_time, note_tag, record_area_tag) {

    var random_num = getRandomInt(1000000)
    for (var i = 0 ; i < rate_array_len ; i++) {
        if (between(random_num, rate_array[i][2], rate_array[i][3])) {

            // Update Note
            note_tag.value = cur_time + ' [' + random_num.toString().padStart(7, '0') + '] 您取得了 ' + rate_array[i][1] + ' 個 ' + rate_array[i][0] + '！\n' + note_tag.value

            // Update Record Table
            var num_tag_id = 'item-tag-' + rate_array[i][0]
            var item_tag = document.getElementById('item-tag-' + rate_array[i][0])
            if (item_tag == null) {
                // Not exist, create new one

                // tr
                var trId = "tr-" + rate_array[i][0]
                var tempChild = document.createElement('tr')
                tempChild.setAttribute("id", trId)
                record_area_tag.appendChild(tempChild)

                // th
                tempChild = document.createElement('th')
                tempChild.setAttribute("scope", "row")
                tempChild.textContent = rate_array[i][0]
                document.getElementById(trId).appendChild(tempChild)

                // td
                tempChild = document.createElement('td')
                tempChild.setAttribute("id", num_tag_id)
                tempChild.textContent = rate_array[i][1]
                document.getElementById(trId).appendChild(tempChild)
            } else {
                // Already exist, edit
                item_tag.innerText = parseInt(item_tag.innerText) + rate_array[i][1]
            }

            // Leave Loop
            break
        }
    }
}
