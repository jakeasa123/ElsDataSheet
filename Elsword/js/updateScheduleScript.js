// 預設時間差
defaultTimeDiffrent = 209

// 概要, 韓版日期, 公告網址, 技能調整網址
updateDetail = [

    ['拳擊活動', '2022-05-05', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293263', ''],
    ['布告欄交易系統與便利性改善', '2022-06-23', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293343&tnum=4', ''],
    ['蕾娜第四分支', '2022-07-07', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293372', ''],
    ['第二季票與諸多改善', '2022-07-21', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293400', 'https://kelsword.web.fc2.com/krnotice/138104.htm'],
    ['18R 深淵襲擊戰', '2022-08-04', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293430', ''],
    ['菈比第四分支', '2022-08-18', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293461', ''],
    ['18R 深淵襲擊戰 改善與技能調整', '2022-09-01', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293480', 'https://kelsword.web.fc2.com/krnotice/138564.htm'],
    ['臨時背包改善', '2022-09-15', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293501', ''],
    ['史詩任務消耗道具獎勵改善', '2022-09-29', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293520', ''],
    ['技能調整', '2022-10-13', '', 'https://kelsword.web.fc2.com/krnotice/138952.htm'],
    ['64 位元版本 (NA)', '2022-10-13', '', ''],
    ['ADD 第四分支', '2022-10-27', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293554', ''],
    ['64 位元版本 (TW)', '2022-11-10', '', ''],
    ['公會系統改編與 OM 技能調整', '2022-11-10', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293574', ''],
    ['第三季票、染髮系統與技能調整', '2022-11-24', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293588', 'https://kelsword.web.fc2.com/krnotice/139336.htm'],
    ['愛利西斯第四分支', '2022-12-08', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293601', ''],
    ['襲擊挑戰模式與泰納抽取改善', '2022-12-22', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293614', ''],
    ['澄第四分支與技能調整', '2023-01-05', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293631', 'https://kelsword.web.fc2.com/krnotice/139723.htm'],
    ['亞殷第四分支', '2023-02-02', '', ''],
    ['諾亞第四分支', '2023-03-02', '', ''],

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
            tempChild.setAttribute("onclick", "window.location.href='" + item[2] + "';")
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
            tempChild.setAttribute("onclick", "window.location.href='" + item[3] + "';")
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