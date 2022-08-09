
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function level_check(input_lv, default_num) {
    if (isNaN(input_lv)) {
        return default_num
    } else {
        input_lv = parseInt(input_lv)
        if (input_lv < 1) {
            input_lv = 1
        }
        if (input_lv > 999) {
            input_lv = 999
        }
        return input_lv
    }
}

function exp_check(input_exp, default_num) {
    if (isNaN(input_exp)) {
        return default_num
    } else {
        return parseInt(input_exp)
    }
}

function time_check(input_time, default_num) {
    if (isNaN(input_time)) {
        return default_num
    } else {
        return parseInt(input_time)
    }
}

function plan_time_check(input_time, default_num) {
    if (isNaN(input_time)) {
        return default_num
    } else {
        if (input_time < 1) {
            return 1
        }
        if (input_time > 24) {
            return 24
        }
        return parseInt(input_time)
    }
}

function input_check(c_lv, t_lv, exp_per_run, time_per_run, plan_time) {
    // Level
    c_lv = level_check(c_lv, 300)
    t_lv = level_check(t_lv, 400)
    if (c_lv > t_lv) {
        temp_lv = c_lv
        c_lv = t_lv
        t_lv = temp_lv
    }
    document.getElementById("currentLevel").value = c_lv
    document.getElementById("targetLevel").value = t_lv

    // EXP Per Run
    exp_per_run = exp_check(exp_per_run, 300)
    document.getElementById("expPerRun").value = exp_per_run

    // Time Per Run
    time_per_run = time_check(time_per_run, 120)
    document.getElementById("timePerRun").value = time_per_run

    // Plan Time
    plan_time = plan_time_check(plan_time, 2)
    document.getElementById("planTime").value = plan_time
    
}

function format_time_to_ms(input_time) {
    min = Math.trunc(input_time / 60)
    sec = input_time % 60
    return min + ":" + sec.toString().padStart(2, '0')
}

function executeCalc() {

    var int_formatter = new Intl.NumberFormat('en-US')

    input_check(
        document.getElementById("currentLevel").value,
        document.getElementById("targetLevel").value, 
        document.getElementById("expPerRun").value, 
        document.getElementById("timePerRun").value, 
        document.getElementById("planTime").value
    )

    var currentLevel = parseInt(document.getElementById("currentLevel").value)
    var targetLevel = parseInt(document.getElementById("targetLevel").value)
    var expPerRun = parseInt(document.getElementById("expPerRun").value)
    var timePerRun = parseInt(document.getElementById("timePerRun").value)
    var planTime = parseInt(document.getElementById("planTime").value)

    // 輸入
    document.getElementById("inputCurrentLevel").innerHTML = currentLevel
    document.getElementById("inputTargetLevel").innerHTML = targetLevel
    document.getElementById("inputExpPerRun").innerHTML = expPerRun + "m"
    document.getElementById("inputTimePerRun").innerHTML = format_time_to_ms(timePerRun)
    document.getElementById("inputPlanTime").innerHTML = planTime

    // 概要
    required_exp = expTable[targetLevel - 1] - expTable[currentLevel - 1]
    need_run = Math.ceil(required_exp / (expPerRun * 1000000))
    need_total_sec = need_run * timePerRun

    need_detail_hour = Math.trunc(need_total_sec / 3600)
    need_detail_min = Math.trunc(need_total_sec % 3600 / 60)
    need_detail_sec = need_total_sec % 60
    
    document.getElementById("resultNeedExp").innerHTML = int_formatter.format(required_exp)
    document.getElementById("resultNeedRun").innerHTML = int_formatter.format(need_run)
    document.getElementById("resultNeedHour").innerHTML = int_formatter.format(need_detail_hour)
    document.getElementById("resultNeedMinute").innerHTML = need_detail_min
    document.getElementById("resultNeedSecond").innerHTML = need_detail_sec

    run_per_hour = Math.trunc(3600 / timePerRun)
    exp_per_hour = run_per_hour * expPerRun

    document.getElementById("resultRunPerHour").innerHTML = run_per_hour
    document.getElementById("resultExpPerHour").innerHTML = int_formatter.format(exp_per_hour) + "m"

    // 規劃
    need_day = Math.ceil(need_total_sec / (planTime * 3600))

    document.getElementById("planPlanTime").innerHTML = planTime
    document.getElementById("planNeedDay").innerHTML = int_formatter.format(need_day)
    document.getElementById("planCurrentLevel").innerHTML = currentLevel
    document.getElementById("planTargetLevel").innerHTML = targetLevel
}