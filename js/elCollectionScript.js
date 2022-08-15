int_formatter = new Intl.NumberFormat('en-US')
characterList = [
    "艾索德", "愛莎", "蕾娜", "雷文", "伊芙",
    "澄", "艾拉", "愛利西斯", "ADD", "露/希爾",
    "蘿潔", "亞殷", "菈比", "諾亞"
]
pathList = [
    "1st", "2nd", "3rd", "4th"
]

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function initialTable() {
    // Exist Old Cookie
    if (document.cookie) {
        
    } 
    // No Cookie Exist
    else {
        characterList.forEach(charName => {
            for ( i = 0 ; i < pathList.length ; i++) {
                pathName = pathList[i]
                var tempId = charName + "_" + pathName

                // Cookie
                document.cookie = tempId + "=40,6; expires=Tue, 31 Dec 2030 00:00:00 GMT; path=/";
    
                // tr
                var trId = "tr_" + tempId
    
                var tempChild = document.createElement('tr')
                tempChild.setAttribute("id", trId)
                document.getElementById("jobTableBody").appendChild(tempChild)
    
                // th
                tempChild = document.createElement('th')
                tempChild.setAttribute("id", "th_" + tempId)
                tempChild.setAttribute("class", "text-center")
                tempChild.setAttribute("scope", "row")
                tempChild.textContent = charName
                document.getElementById(trId).appendChild(tempChild)
    
                // td - Line
                tempChild = document.createElement('td')
                tempChild.setAttribute("id", "td_" + tempId)
                tempChild.setAttribute("class", "text-center")
                tempChild.textContent = pathName
                document.getElementById(trId).appendChild(tempChild)
    
                // td - Magic Stone
                tempChild = document.createElement('td')
                tempChild.setAttribute("id", "td_" + tempId + "_MagicStone")
                tempChild.setAttribute("class", "text-center")
                document.getElementById(trId).appendChild(tempChild)
    
                tempChild = document.createElement('input')
                tempChild.setAttribute("id", "input_" + tempId + "_MagicStone")
                tempChild.setAttribute("class", "form-control")
                tempChild.setAttribute("value", "40")
                tempChild.setAttribute("onchange", "inputOnChange(\'" + tempId + "\')")
                document.getElementById("td_" + tempId + "_MagicStone").appendChild(tempChild)
    
                // td - Secret Reward
                tempChild = document.createElement('td')
                tempChild.setAttribute("id", "td_" + tempId + "_SecretReward")
                tempChild.setAttribute("class", "text-center")
                document.getElementById(trId).appendChild(tempChild)
    
                tempChild = document.createElement('button')
                tempChild.setAttribute("id", "button_" + tempId + "_SecretReward")
                tempChild.setAttribute("type", "form-button")
                tempChild.setAttribute("class", "btn btn-info")
                tempChild.textContent = "剩餘 6 次"
                tempChild.setAttribute("onclick", "inputOnClick(\'" + tempId + "\')")
                document.getElementById("td_" + tempId + "_SecretReward").appendChild(tempChild)
            }
        });
    }

    alert(decodeURIComponent(document.cookie))
}

function inputOnChange(target) {
    var inputElement = document.getElementById("input_" + target + "_MagicStone")
    
    if (isNaN(inputElement.value)) {
        alert("欄位「" + target + "」的「賢者魔法石」中，輸入了錯誤的字元，將自動修復成「40」以防錯誤，請再修正。")
        inputElement.value = "40"
    } 
    autoDelete(target)
}

function inputOnClick(target) {
    var clickElement = document.getElementById("button_" + target + "_SecretReward")
    var lastReward = parseInt(clickElement.innerHTML.substring(3, 4))

    if (lastReward >= 1) {
        lastReward -= 1
        clickElement.innerHTML = "剩餘 " + lastReward + " 次"

        if (lastReward == 1) {
            clickElement.setAttribute("class", "btn btn-warning")
        } else if (lastReward == 0) {
            clickElement.setAttribute("class", "btn btn-danger")
            autoDelete(target)
        }
    } else {
        alert("欄位「" + target + "」的「禁戒的獎章」中，已經無法再兌換成經驗家成吊牌。")
    }

    autoDelete(target)
}

function autoDelete(target) {
    var magicStone = document.getElementById("input_" + target + "_MagicStone")
    var secretReward = document.getElementById("button_" + target + "_SecretReward")

    if (parseInt(magicStone.value) <= 0 && parseInt(secretReward.innerHTML.substring(3, 4)) <= 0) {
        document.getElementById("tr_" + target).remove()
    }
}

function deleteCookie() {
    characterList.forEach(charName => {
        for ( i = 0 ; i < pathList.length ; i++) {
            document.cookie = charName + "_" + pathList[i] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        }
    });
    alert("delete")
}