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

info_id_list = [
    'upgrade-time', 'success-time', 'break-time', 'no-change-time', 'down-time', 'return-time',
    'protect-stone', 'protect-crystal', 'repair-scroll', 'el-hammer'
]

normal_upgrade_rate = [
    [0, 1000, 1000, 1000, 1000, 1000],
    [0, 1000, 1000, 1000, 1000, 1000],
    [0, 900, 900, 1000, 1000, 1000],
    [0, 800, 800, 1000, 1000, 1000],
    [0, 700, 700, 1000, 1000, 1000],

    [0, 600, 600, 1000, 1000, 1000],
    [0, 200, 200, 1000, 1000, 1000],
    [0, 50, 50, 200, 500, 1000],
    [0, 20, 220, 320, 600, 1000],
    [0, 10, 260, 330, 600, 1000],

    [0, 7, 360, 430, 700, 1000],
    [0, 10, 260, 330, 600, 1000],
    [0, 10, 300, 330, 600, 1000]
]

// 調整 textarea 長度
function adjustTextArea(target_object, max_length) {
    var inside_text = target_object.value
    if (inside_text.length > max_length) {
        target_object.value = inside_text.substring(0, max_length)
    }
}

// 更新資訊
function updateInfo(current_upgrade_level, input_data) {
    document.getElementById('current-upgrade-level').innerText = '目前強化：+' + current_upgrade_level

    info_id_list.forEach(function(key) {
        document.getElementById(key).innerText = input_data[key]
    });
}

// 普通強化
function normalUpgrade() {
    var current_time = getCurrentTime()
    var upgrade_note = document.getElementById('upgradeNote')

    // 取得目前數據
    var current_level = parseInt(document.getElementById('current-upgrade-level').innerText.substring(6))

    // +13 時因已達最大值，直接取消
    if (current_level >= 13) {
        upgrade_note.value = current_time + ' 已經達到系統上限，取消強化作業。\n' + upgrade_note.value
        return
    }

    // 取得其他目前數據
    var input_dict = {}
    info_id_list.forEach(function(key) {
        input_dict[key] = parseInt(document.getElementById(key).innerText)
    });

    // 強化次數固定 + 1
    input_dict['upgrade-time'] += 1

    // 取得亂數
    var random_num = getRandomInt(1000)

    // 判斷強化結果
    if (between(random_num, normal_upgrade_rate[current_level][0], normal_upgrade_rate[current_level][1])) {
        // 成功
        upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 強化成功！強化等級自 +' + current_level + ' 提升到 +' + (current_level + 1) + ' 了！\n' + upgrade_note.value
        current_level += 1
        input_dict['success-time'] += 1
    }
    else if (between(random_num, normal_upgrade_rate[current_level][1], normal_upgrade_rate[current_level][2])) {
        // 破壞
        upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 裝備破壞！損耗 1 張修復卷軸……\n' + upgrade_note.value
        input_dict['break-time'] += 1
        input_dict['repair-scroll'] += 1
    }
    else if (between(random_num, normal_upgrade_rate[current_level][2], normal_upgrade_rate[current_level][3])) {
        // 無變化
        upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 沒有任何變化……\n' + upgrade_note.value
        input_dict['no-change-time'] += 1
    }
    else if (between(random_num, normal_upgrade_rate[current_level][3], normal_upgrade_rate[current_level][4])) {
        // 下降
        upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 強化失敗！強化等級自 +' + current_level + ' 降低到 +' + (current_level - 1) + ' 了……\n' + upgrade_note.value
        input_dict['down-time'] += 1
        current_level -= 1
    }
    else if (between(random_num, normal_upgrade_rate[current_level][4], normal_upgrade_rate[current_level][5])) {
        // 歸零
        upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 裝備歸零！強化等級自 +' + current_level + ' 回歸到 +0 了……\n' + upgrade_note.value
        input_dict['return-time'] += 1
        current_level = 0
    }

    // 更新資訊
    adjustTextArea(upgrade_note, 1000)
    updateInfo(current_level, input_dict)
}

// 守護石強化
function protectUpgrade() {
    var current_time = getCurrentTime()
    var upgrade_note = document.getElementById('upgradeNote')

    // 取得目前數據
    var current_level = parseInt(document.getElementById('current-upgrade-level').innerText.substring(6))

    // +13 時因已達最大值，直接取消
    if (current_level >= 13) {
        upgrade_note.value = current_time + ' 已經達到系統上限，取消強化作業。\n' + upgrade_note.value
        return
    }

    // 取得其他目前數據
    var input_dict = {}
    info_id_list.forEach(function(key) {
        input_dict[key] = parseInt(document.getElementById(key).innerText)
    });

    // 強化次數固定 + 1
    input_dict['upgrade-time'] += 1

    // 取得亂數
    var random_num = getRandomInt(1000)

    // 判斷強化結果
    if (current_level <= 7) {

        // 未達 +8，使用一般強化
        if (between(random_num, normal_upgrade_rate[current_level][0], normal_upgrade_rate[current_level][1])) {
            // 成功
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 強化成功！強化等級自 +' + current_level + ' 提升到 +' + (current_level + 1) + ' 了！\n' + upgrade_note.value
            current_level += 1
            input_dict['success-time'] += 1
        }
        else if (between(random_num, normal_upgrade_rate[current_level][1], normal_upgrade_rate[current_level][2])) {
            // 破壞
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 裝備破壞！損耗 1 張修復卷軸……\n' + upgrade_note.value
            input_dict['break-time'] += 1
            input_dict['repair-scroll'] += 1
        }
        else if (between(random_num, normal_upgrade_rate[current_level][2], normal_upgrade_rate[current_level][3])) {
            // 無變化
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 沒有任何變化……\n' + upgrade_note.value
            input_dict['no-change-time'] += 1
        }
        else if (between(random_num, normal_upgrade_rate[current_level][3], normal_upgrade_rate[current_level][4])) {
            // 下降
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 強化失敗！強化等級自 +' + current_level + ' 降低到 +' + (current_level - 1) + ' 了……\n' + upgrade_note.value
            input_dict['down-time'] += 1
            current_level -= 1
        }
        else if (between(random_num, normal_upgrade_rate[current_level][4], normal_upgrade_rate[current_level][5])) {
            // 歸零
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 裝備歸零！強化等級自 +' + current_level + ' 回歸到 +0 了……\n' + upgrade_note.value
            input_dict['return-time'] += 1
            current_level = 0
        }

    } else if (between(current_level, 8, 11)) {

        // 已達 +8，使用守護石，下降與歸零轉為無變化
        input_dict['protect-stone'] += 1

        if (between(random_num, normal_upgrade_rate[current_level][0], normal_upgrade_rate[current_level][1])) {
            // 成功
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 強化成功！強化等級自 +' + current_level + ' 提升到 +' + (current_level + 1) + ' 了！\n' + upgrade_note.value
            current_level += 1
            input_dict['success-time'] += 1
        }
        else if (between(random_num, normal_upgrade_rate[current_level][1], normal_upgrade_rate[current_level][2])) {
            // 破壞
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 裝備破壞！損耗 1 張修復卷軸……\n' + upgrade_note.value
            input_dict['break-time'] += 1
            input_dict['repair-scroll'] += 1
        }
        else if (between(random_num, normal_upgrade_rate[current_level][2], normal_upgrade_rate[current_level][5])) {
            // 無變化
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 沒有任何變化……\n' + upgrade_note.value
            input_dict['no-change-time'] += 1
        }

    } else if (current_level >= 11) {

        // 已達 +11，使用守護水晶，歸零轉為無變化
        input_dict['protect-crystal'] += 1

        if (between(random_num, normal_upgrade_rate[current_level][0], normal_upgrade_rate[current_level][1])) {
            // 成功
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 強化成功！強化等級自 +' + current_level + ' 提升到 +' + (current_level + 1) + ' 了！\n' + upgrade_note.value
            current_level += 1
            input_dict['success-time'] += 1
        }
        else if (between(random_num, normal_upgrade_rate[current_level][1], normal_upgrade_rate[current_level][2])) {
            // 破壞
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 裝備破壞！損耗 1 張修復卷軸……\n' + upgrade_note.value
            input_dict['break-time'] += 1
            input_dict['repair-scroll'] += 1
        }
        else if (between(random_num, normal_upgrade_rate[current_level][2], normal_upgrade_rate[current_level][3])) {
            // 無變化
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 沒有任何變化……\n' + upgrade_note.value
            input_dict['no-change-time'] += 1
        }
        else if (between(random_num, normal_upgrade_rate[current_level][3], normal_upgrade_rate[current_level][4])) {
            // 下降
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 強化失敗！強化等級自 +' + current_level + ' 降低到 +' + (current_level - 1) + ' 了……\n' + upgrade_note.value
            input_dict['down-time'] += 1
            current_level -= 1
        }
        else if (between(random_num, normal_upgrade_rate[current_level][4], normal_upgrade_rate[current_level][5])) {
            // 無變化
            upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 沒有任何變化……\n' + upgrade_note.value
            input_dict['no-change-time'] += 1
        }

    }

    // 更新資訊
    adjustTextArea(upgrade_note, 1000)
    updateInfo(current_level, input_dict)
}

function upgradeUntil(target_level) {
    var current_time = getCurrentTime()
    var upgrade_note = document.getElementById('upgradeNote')

    // 取得目前數據
    var current_level = parseInt(document.getElementById('current-upgrade-level').innerText.substring(6))

    // +13 時因已達最大值，直接取消
    if (current_level >= 13) {
        upgrade_note.value = current_time + ' 已經達到系統上限，取消強化作業。\n' + upgrade_note.value
        return
    } else if (current_level >= target_level) {
        upgrade_note.value = current_time + ' 已經達到目標，取消強化作業。\n' + upgrade_note.value
        return
    }

    // 取得其他目前數據
    var input_dict = {}
    info_id_list.forEach(function(key) {
        input_dict[key] = parseInt(document.getElementById(key).innerText)
    });

    // 作為比對，保留一個原數據
    var start_level = parseInt(document.getElementById('current-upgrade-level').innerText.substring(6))
    var copy_dict = Object.assign({}, input_dict)

    var count_11 = 0
    var count_12 = 0

    // 迴圈
    // 僅在達到 +11 或以上時才記錄
    while (current_level < target_level) {

        // 強化次數固定 + 1
        input_dict['upgrade-time'] += 1

        // 取得亂數
        var random_num = getRandomInt(1000)

        // 判斷強化結果
        if (current_level <= 7) {

            // 未達 +8，使用一般強化
            if (between(random_num, normal_upgrade_rate[current_level][0], normal_upgrade_rate[current_level][1])) {
                // 成功
                current_level += 1
                input_dict['success-time'] += 1
            }
            else if (between(random_num, normal_upgrade_rate[current_level][1], normal_upgrade_rate[current_level][2])) {
                // 破壞
                input_dict['break-time'] += 1
                input_dict['repair-scroll'] += 1
            }
            else if (between(random_num, normal_upgrade_rate[current_level][2], normal_upgrade_rate[current_level][3])) {
                // 無變化
                input_dict['no-change-time'] += 1
            }
            else if (between(random_num, normal_upgrade_rate[current_level][3], normal_upgrade_rate[current_level][4])) {
                // 下降
                input_dict['down-time'] += 1
                current_level -= 1
            }
            else if (between(random_num, normal_upgrade_rate[current_level][4], normal_upgrade_rate[current_level][5])) {
                // 歸零
                input_dict['return-time'] += 1
                current_level = 0
            }

        } else if (between(current_level, 8, 11)) {

            // 已達 +8，使用守護石，下降與歸零轉為無變化
            input_dict['protect-stone'] += 1

            if (between(random_num, normal_upgrade_rate[current_level][0], normal_upgrade_rate[current_level][1])) {
                // 成功
                current_level += 1
                input_dict['success-time'] += 1

                if (target_level >= 12 && current_level == 11) {
                    count_11 += 1
                    upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 強化成功！強化等級自 +' + (current_level - 1) + ' 提升到 +' + current_level + ' 了！這是第 ' + count_11 + ' 次提升至 +' + current_level + '\n' + upgrade_note.value
                }
            }
            else if (between(random_num, normal_upgrade_rate[current_level][1], normal_upgrade_rate[current_level][2])) {
                // 破壞
                input_dict['break-time'] += 1
                input_dict['repair-scroll'] += 1
            }
            else if (between(random_num, normal_upgrade_rate[current_level][2], normal_upgrade_rate[current_level][5])) {
                // 無變化
                input_dict['no-change-time'] += 1
            }

        } else if (current_level >= 11) {

            // 已達 +11，使用守護水晶，歸零轉為無變化
            input_dict['protect-crystal'] += 1

            if (between(random_num, normal_upgrade_rate[current_level][0], normal_upgrade_rate[current_level][1])) {
                // 成功
                current_level += 1
                input_dict['success-time'] += 1

                if (target_level >= 13 && current_level == 12) {
                    count_12 += 1
                    upgrade_note.value = current_time + ' [' + random_num.toString().padStart(4, '0') + '] 強化成功！強化等級自 +' + (current_level - 1) + ' 提升到 +' + current_level + ' 了！這是第 ' + count_12 + ' 次提升至 +' + current_level + '\n' + upgrade_note.value
                }
            }
            else if (between(random_num, normal_upgrade_rate[current_level][1], normal_upgrade_rate[current_level][2])) {
                // 破壞
                input_dict['break-time'] += 1
                input_dict['repair-scroll'] += 1
            }
            else if (between(random_num, normal_upgrade_rate[current_level][2], normal_upgrade_rate[current_level][3])) {
                // 無變化
                input_dict['no-change-time'] += 1
            }
            else if (between(random_num, normal_upgrade_rate[current_level][3], normal_upgrade_rate[current_level][4])) {
                // 下降
                input_dict['down-time'] += 1
                current_level -= 1
            }
            else if (between(random_num, normal_upgrade_rate[current_level][4], normal_upgrade_rate[current_level][5])) {
                // 歸零
                input_dict['no-change-time'] += 1
            }

        }
    }

    // 結算
    info_id_list.forEach(function(key) {
        copy_dict[key] = input_dict[key] - copy_dict[key]
    });

    // 顯示結果
    var temp_text = current_time + ' 已經達成 [ 自 +' + start_level + ' 直上 +' + target_level + ' ] 的目標。\n'
    if (target_level >= 12) {
        temp_text += '→ 成功 +11 共 ' + count_11 + ' 次\n'
        if (target_level >= 13) {
            temp_text += '→ 成功 +12 共 ' + count_12 + ' 次\n'
        }
    }
    temp_text += '→ 經歷 '
        + numberWithCommas(copy_dict['upgrade-time']) + ' 次強化、'
        + numberWithCommas(copy_dict['success-time']) + ' 次成功、'
        + numberWithCommas(copy_dict['break-time']) + ' 次破壞、'
        + numberWithCommas(copy_dict['no-change-time']) + ' 次無變化、'
        + numberWithCommas(copy_dict['down-time']) + ' 次下降、'
        + numberWithCommas(copy_dict['return-time']) + ' 次歸零\n'
    temp_text += '→ 消耗 ' + numberWithCommas(copy_dict['protect-stone']) + ' 顆守護石\n'
    temp_text += '→ 消耗 ' + numberWithCommas(copy_dict['protect-crystal']) + ' 顆守護水晶\n'
    temp_text += '→ 消耗 ' + numberWithCommas(copy_dict['repair-scroll']) + ' 張修復卷軸\n'
    temp_text += '→ 消耗 ' + numberWithCommas(copy_dict['el-hammer']) + ' 把艾爾鐵鎚\n\n'

    upgrade_note.value = temp_text + upgrade_note.value

    // 更新資訊
    adjustTextArea(upgrade_note, 1000)
    updateInfo(current_level, input_dict)

}

function setUpgradeLevel() {
    // 取得必要物件
    var current_time = getCurrentTime()
    var upgrade_note = document.getElementById('upgradeNote')

    // 清空記錄
    resetUpgrade()

    // 設定強化等級
    var target_level = document.getElementById('set-upgrade-level').value
    document.getElementById('current-upgrade-level').innerText = '目前強化：+' + target_level

    // 記錄行為
    upgrade_note.value = current_time + ' 重新設定強化等級為 +' + target_level + '。\n' + upgrade_note.value
    adjustTextArea(upgrade_note, 1000)
}

// 清空記錄
function resetUpgrade() {
    // 取得必要物件
    var current_time = getCurrentTime()
    var upgrade_note = document.getElementById('upgradeNote')

    // 恢復到預設值
    document.getElementById('current-upgrade-level').innerText = '目前強化：+7'
    info_id_list.forEach(function(key) {
        document.getElementById(key).innerText = '0'
    });

    // 記錄行為
    upgrade_note.value = current_time + ' 清空記錄。\n' + upgrade_note.value
    adjustTextArea(upgrade_note, 1000)
}