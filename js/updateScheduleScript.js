// 預設時間差
defaultTimeDiffrent = 195

// 概要, 韓版日期, 公告網址, 技能調整網址
updateDetail = [

    ['露希爾第四分支開放', '2022-04-28', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293248', 'https://kelsword.web.fc2.com/balance/220428sb.htm'],
    ['拳擊活動', '2022-05-05', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293263', ''],
    ['寵物對戰與 DE 技能調整', '2022-05-12', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293274', 'https://kelsword.web.fc2.com/balance/220512sb.htm'],
    ['寵物對戰與表情系統改善', '2022-05-26', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293294', ''],
    ['坐騎競速與技能調整', '2022-06-09', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293327', 'https://kelsword.web.fc2.com/balance/220609sb.htm'],
    ['布告欄交易系統與便利性改善', '2022-06-23', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293343&tnum=4', ''],
    ['蕾娜第四分支開放', '2022-07-07', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293372', ''],
    ['第二季票開始與諸多改善', '2022-07-21', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293400', 'https://kelsword.web.fc2.com/krnotice/138104.htm'],
    ['深淵襲擊戰 18R 開放', '2022-08-04', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293430', ''],
    ['菈比第四分支開放', '2022-08-18', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293461', ''],
    ['深淵襲擊戰 18R 改善與技能調整', '2022-09-01', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293480', 'https://kelsword.web.fc2.com/krnotice/138564.htm'],
    ['臨時背包改善', '2022-09-15', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293501', ''],
    ['史詩任務消耗道具獎勵改善', '2022-09-29', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293520', ''],
    ['技能調整', '2022-10-13', '', 'https://kelsword.web.fc2.com/krnotice/138952.htm'],
    ['ADD 第四分支開放', '2022-10-27', 'https://forum.gamer.com.tw/C.php?bsn=12259&snA=293554', ''],

]

// Initial
function initialData() {
    document.getElementById("dateDiffrent").value = defaultTimeDiffrent

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
        document.getElementById("dateDiffrent").value = 181
    }
}

function editDateDiffrent() {
    input_check()

    var newDateDiff = parseInt(document.getElementById("dateDiffrent").value)

    for (var i = 0 ; i < document.getElementById("updateSchedule").rows.length ; i++) {
        var tempDate = new Date(document.getElementById("updateTdDateKR_" + i).innerHTML)
        tempDate.setDate(tempDate.getDate() + newDateDiff)

        document.getElementById("updateTdDateEU_" + i).innerHTML = tempDate.toISOString().substring(0, 10)
    }

}