var whiteEyeCount = 0

window.onload = function() {

    document.getElementById('testImage').addEventListener('click', function (e) {
        whiteEyeCount += 1
        if (whiteEyeCount == 5) {
            alert("ㄋ豪瑟ㄛ")
            window.location.href = "https://saketora95.github.io/ElsDataSheet/combi_calc.html"
        }
    });

};