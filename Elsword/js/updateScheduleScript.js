// 預設時間差
defaultTimeDiffrent = 202

// 概要, 韓版日期, 公告網址, 技能調整網址
updateDetail = [

    ['GE、LA、RE 與 CA 新增轉換技能', '2023-04-27', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293773', ''],
    ['流血 BUG 修正與所有襲擊血量下修', '2023-05-04', 'https://elsword.nexon.com/News/Notice/View?n4ArticleSN=140919', ''],
    ['PR、SU、DE 與 TP 新增轉換技能 & 技能調整', '2023-05-11', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293787', 'https://kelsword.web.fc2.com/balance/230511sb.htm'],
    ['DiA、AD、OM、BG 與 MO 新增轉換技能', '2023-05-24', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293797', ''],
    ['挑戰模式改善與靈魂伴侶系統', '2023-06-08', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293812', ''],
    ['挑戰模式再改善與 PvP 技能調整', '2023-06-22', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293832', 'https://kelsword.web.fc2.com/krnotice/141318.htm'],
    ['噗老師 3 期、泰納套效與成長緩和', '2023-07-06', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293842', ''],
    ['襲擊改善與第五季票', '2023-07-20', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293854', ''],
    ['新副本、泰納改造系統與技能調整', '2023-08-03', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293874&tnum=1', 'https://kelsword.web.fc2.com/krnotice/141759.htm'],
    ['新巨大 Boss', '2023-08-17', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293880', ''],
    ['18R 故事模式', '2023-08-31', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293897', ''],
    ['公會 UI 改編', '2023-10-26', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293964', ''],
    ['隱藏副本、副本 ED 產出與部分職業調整', '2023-11-09', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293972', 'https://kelsword.web.fc2.com/krnotice/142616.htm'],
    ['安安成長季票、副本與部分職業二次調整', '2023-11-23', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293984', ''],
    ['新角色 Lithia 第 1 分支', '2023-12-07', '', ''],
    ['挑戰模式改善', '2023-12-21', '', ''],
    ['部分角色調整', '2024-01-04', '', ''],
    ['新角色 Lithia 第 2 分支', '2024-02-01', '', ''],
    ['部分角色調整', '2024-02-29', '', ''],
    ['新角色 Lithia 第 3 分支', '2024-03-28', '', ''],
    ['部分角色調整', '2024-04-25', '', ''],
    ['新角色 Lithia 第 4 分支', '2024-05-23', '', ''],

]

// Initial
function initialData() {
    document.getElementById("dateDiffrent").value = defaultTimeDiffrent.toString()

    updateDetail.forEach(function(item) {
        var idNumber = (document.getElementById("updateSchedule").rows.length).toString()

        // tr
        var tempChild = document.createElement("tr")
        tempChild.setAttribute("id", "updateObjectTr_" + idNumber)
        tempChild.setAttribute("class", "text-center")
        document.getElementById("updateSchedule").appendChild(tempChild)

        // 更新概要
        tempChild = document.createElement("td")
        tempChild.setAttribute("id", "updateTdDescribe_" + idNumber)
        tempChild.innerHTML = item[0]
        document.getElementById("updateObjectTr_" + idNumber).appendChild(tempChild)

        // 韓版實裝日期
        tempChild = document.createElement("td")
        tempChild.setAttribute("id", "updateTdDateKR_" + idNumber)
        tempChild.innerHTML = item[1]
        document.getElementById("updateObjectTr_" + idNumber).appendChild(tempChild)

        // 歐服推估日期
        tempChild = document.createElement("td")
        tempChild.setAttribute("id", "updateTdDateEU_" + idNumber)
        var tempDate = new Date(item[1])
        tempDate.setDate(tempDate.getDate() + defaultTimeDiffrent)
        tempChild.innerHTML = tempDate.toISOString().substring(0, 10)
        document.getElementById("updateObjectTr_" + idNumber).appendChild(tempChild)

        // 與今日天數差
        tempChild = document.createElement("td")
        tempChild.setAttribute("id", "updateTdDateDiff_" + idNumber)
        var tempToday = new Date()
        var tempDiff = Math.ceil((tempDate - tempToday) / (1000 * 60 * 60 * 24))
        tempChild.innerHTML = tempDiff.toString()
        document.getElementById("updateObjectTr_" + idNumber).appendChild(tempChild)

        // 更新公告
        tempChild = document.createElement("td")
        tempChild.setAttribute("id", "updateTdBtn1_" + idNumber)
        document.getElementById("updateObjectTr_" + idNumber).appendChild(tempChild)

        if (item[2] != "") {
            tempChild = document.createElement("button")
            tempChild.setAttribute("id", "updateBtn1_" + idNumber)
            tempChild.setAttribute("type", "button")
            tempChild.setAttribute("class", "btn btn-outline-primary")
            tempChild.setAttribute("onclick", "window.open(\'" + item[2] + "\', \'_blank\')")
            tempChild.textContent = "點此前往"
            document.getElementById("updateTdBtn1_" + idNumber).appendChild(tempChild)
        }

        // 技能調整
        tempChild = document.createElement("td")
        tempChild.setAttribute("id", "updateTdBtn2_" + idNumber)
        document.getElementById("updateObjectTr_" + idNumber).appendChild(tempChild)

        if (item[3] != "") {
            tempChild = document.createElement("button")
            tempChild.setAttribute("id", "updateBtn2_" + idNumber)
            tempChild.setAttribute("type", "button")
            tempChild.setAttribute("class", "btn btn-outline-primary")
            tempChild.setAttribute("onclick", "window.open(\'" + item[3] + "\', \'_blank\')")
            tempChild.textContent = "點此前往"
            document.getElementById("updateTdBtn2_" + idNumber).appendChild(tempChild)
        }

    });
}

function input_check() {
    if (isNaN(document.getElementById("dateDiffrent").value)) {
        document.getElementById("dateDiffrent").value = defaultTimeDiffrent
    }
}

function editDateDiffrent() {
    input_check()

    var newDateDiff = parseInt(document.getElementById("dateDiffrent").value)

    var tempToday = new Date()

    for (var i = 0 ; i < document.getElementById("updateSchedule").rows.length ; i++) {
        var tempDate = new Date(document.getElementById("updateTdDateKR_" + i).innerHTML)
        tempDate.setDate(tempDate.getDate() + newDateDiff)

        var tempDiff = Math.ceil((tempDate - tempToday) / (1000 * 60 * 60 * 24))
        document.getElementById("updateTdDateDiff_" + i).innerHTML = tempDiff.toString()

        document.getElementById("updateTdDateEU_" + i).innerHTML = tempDate.toISOString().substring(0, 10)
    }

}
