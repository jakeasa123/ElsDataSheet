function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
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
        document.getElementById('btn-start').disabled = false
        document.getElementById('btn-action').disabled = false
    }
}

function executeTimer_Start() {
    document.getElementById('btn-start').disabled = true
    document.getElementById('btn-action').disabled = true

    var notification_1 = setTimeout(playNotification, 17500, false)
    var notification_2 = setTimeout(playNotification, 58500, false)
    var notification_3 = setTimeout(playNotification, 98500, false)
    var notification_4 = setTimeout(playNotification, 138500, true)

}

function executeTimer_Action() {
    document.getElementById('btn-start').disabled = true
    document.getElementById('btn-action').disabled = true

    var notification_1 = setTimeout(playNotification, 15000, false)
    var notification_2 = setTimeout(playNotification, 55000, false)
    var notification_3 = setTimeout(playNotification, 95000, false)
    var notification_4 = setTimeout(playNotification, 1350000, true)

}
