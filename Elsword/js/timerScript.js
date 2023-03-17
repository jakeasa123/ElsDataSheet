var notification_sound = new Audio('sound/dun174_noti_sound.mp3')

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function playNotification(realeaseBtn) {
    for (var i = 0 ; i < 3 ; i++) {
        notification_sound.play()
        await delay(1000);
    }

    if (realeaseBtn) {
        document.getElementById('btn-start').disabled = false
        document.getElementById('btn-action').disabled = false
    }
}

function executeTimer_Start() {
    document.getElementById('btn-start').disabled = true
    document.getElementById('btn-action').disabled = true

    var notification_1 = setTimeout(playNotification, 19000, false)
    var notification_2 = setTimeout(playNotification, 59000, false)
    var notification_3 = setTimeout(playNotification, 99000, false)
    var notification_4 = setTimeout(playNotification, 139000, true)

}

function executeTimer_Action() {
    document.getElementById('btn-start').disabled = true
    document.getElementById('btn-action').disabled = true

    var notification_1 = setTimeout(playNotification, 16000, false)
    var notification_2 = setTimeout(playNotification, 56000, false)
    var notification_3 = setTimeout(playNotification, 96000, false)
    var notification_4 = setTimeout(playNotification, 1360000, true)

}
