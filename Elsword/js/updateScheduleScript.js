// 預設時間差
defaultTimeDiffrent = 181

// 概要, 韓版日期, 公告網址, 技能調整網址
updateDetail = [

    ['64 位元版本 (NA)', '2022-10-13', '', ''],
    ['ADD 第四分支 OM', '2022-10-27', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293554', ''],
    ['64 位元版本 (TW)', '2022-11-10', '', ''],
    ['公會系統改編與 OM 技能調整', '2022-11-10', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293574', ''],
    ['第三季票、染髮系統與技能調整', '2022-11-24', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293588', 'https://kelsword.web.fc2.com/krnotice/139336.htm'],
    ['愛利西斯第四分支 AD', '2022-12-08', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293601', ''],
    ['12R 挑戰模式與泰納抽取改善', '2022-12-22', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293614', ''],
    ['澄第四分支 DiA 與技能調整', '2023-01-05', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293631', 'https://kelsword.web.fc2.com/krnotice/139723.htm'],
    ['18R 改善與 DiA 技能調整', '2023-01-18', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293656', ''],
    ['亞殷第四分支 BG', '2023-02-02', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293672', ''],
    ['技能調整', '2023-02-16', '', 'https://kelsword.web.fc2.com/krnotice/140137.htm'],
    ['諾亞第四分支 MO', '2023-03-02', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293708', ''],
    ['15R 挑戰模式與第四季票', '2023-03-16', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293727', ''],
    ['技能調整 (共兩篇)', '2023-03-16', 'https://kelsword.web.fc2.com/balance/230316sb.htm', 'https://kelsword.web.fc2.com/balance/230216sb.htm'],
    ['技能調整', '2023-03-30', '', 'https://kelsword.web.fc2.com/balance/230330sb.htm'],

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