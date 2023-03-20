function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function isInputFormatCorrect() {
    ans = true

    if (isNaN(document.getElementById("noti_0").value)) {
        document.getElementById("noti_0").value = 15
        ans = false
    }
    if (isNaN(document.getElementById("noti_1").value)) {
        document.getElementById("noti_2").value = 55
        ans = false
    }
    if (isNaN(document.getElementById("noti_2").value)) {
        document.getElementById("noti_2").value = 95
        ans = false
    }
    if (isNaN(document.getElementById("noti_3").value)) {
        document.getElementById("noti_3").value = 135
        ans = false
    }

    return ans
}

function delay(time) {
    return new Promise(resolve => {

        setTimeout(resolve, time)
    });
}

async function playNotification(realeaseBtn) {
    for (var i = 0 ; i < 3 ; i++) {
        new Audio('sound/dun174_noti_sound.mp3').play()
        await delay(1000);
    }

    if (realeaseBtn == true) {
        document.getElementById('btn-set-up').disabled = false

        // document.getElementById('btn-start').disabled = false
        // document.getElementById('btn-action').disabled = false
    }
}

function executeTimer() {

    if (isInputFormatCorrect()) {

        document.getElementById('btn-set-up').disabled = true
        var noti_time = [
            parseInt(document.getElementById("noti_0").value),
            parseInt(document.getElementById("noti_1").value),
            parseInt(document.getElementById("noti_2").value),
            parseInt(document.getElementById("noti_3").value),
        ]

        var notification_1 = setTimeout(playNotification, noti_time[0] * 1000, false)
        var notification_2 = setTimeout(playNotification, noti_time[1] * 1000, false)
        var notification_3 = setTimeout(playNotification, noti_time[2] * 1000, false)
        var notification_4 = setTimeout(playNotification, noti_time[3] * 1000, true)

        saveCookie(noti_time)

    } else {
        alert('欄位輸入錯誤，請確保輸入的欄位都是整數。')
    }

}

function saveCookie(save_data) {
    // Expire Date
    var expireDate = new Date()
    expireDate.setTime(expireDate.getTime() + 31536000000)
    expireDate = expireDate.toUTCString()

    // Save Cookie
    for ( var i = 0 ; i < save_data.length ; i++ ) {
        document.cookie = "dunTimer_" + i.toString() + "=" + save_data[i] + "; expires=" + expireDate + "; path=/"
    }
}

function loadCookie() {
    if (document.cookie) {
        var cookieData = decodeURIComponent(document.cookie).split("; ")

        cookieData.forEach(cData => {
            tempData = cData.split("=")
            if (tempData[0].substr(0, 9) == "dunTimer_") {
                var input_num = tempData[0].substr(9)
                document.getElementById("noti_" + input_num).value = tempData[1]
            }
        });
    }
}

// Old Version
// function executeTimer_Start() {
//     document.getElementById('btn-start').disabled = true
//     document.getElementById('btn-action').disabled = true

//     var notification_1 = setTimeout(playNotification, 17500, false)
//     var notification_2 = setTimeout(playNotification, 58500, false)
//     var notification_3 = setTimeout(playNotification, 98500, false)
//     var notification_4 = setTimeout(playNotification, 138500, true)

// }

// Old Version
// function executeTimer_Action() {
//     document.getElementById('btn-start').disabled = true
//     document.getElementById('btn-action').disabled = true

//     var notification_1 = setTimeout(playNotification, 15000, false)
//     var notification_2 = setTimeout(playNotification, 55000, false)
//     var notification_3 = setTimeout(playNotification, 95000, false)
//     var notification_4 = setTimeout(playNotification, 135000, true)

// }
