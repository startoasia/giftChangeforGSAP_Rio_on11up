function timeLeft() {
    // 倒數計時器外框
    let TimeBox = document.querySelector(".timebox");

    //倒數計時開始時間
    let Start = new Date("9/16/2024 00:00:00");
    // 當下時間
    let Current = new Date();

    // 倒數計時矩陣(可在這裡添加n個連續倒數的時間)
    let End = [new Date("9/22/2024 23:59:59"), new Date("9/30/2024 23:59:59")];
    // 文案矩陣(可在此添加n個對應的倒數文案)
    let TxtBox = [`99 SALE <span class="pc">|</span> Final Countdown<span class="pc">：</span><br class="mb">  `, `SALE Extended <span class="pc">|</span> Countdown<span class="pc">：</span><br class="mb">`];

    // 進入正式倒數之前
    if (Current < Start) {
        TimeBox.style.display = "none";
    }

    let count = 0;
    // 當前的end值與對應的文案
    let NowEnd, Txt;

    // 計時器出現且開始倒數
    if (Current >= Start) {
        TimeBox.style.display = "block";
        if (Current >= End[count]) {
            count++;
        }
        NowEnd = End[count];
        Txt = TxtBox[count];
        // 要帶入計時器的總毫秒數
        let total_ms = parseInt(NowEnd.getTime()) - parseInt(Current.getTime());
        countDown(total_ms, Txt);
    }

    // 計時器消失且結束倒數
    if (Current >= End[End.length - 1]) {
        TimeBox.style.display = "none";
    }
    // console.log(`正在進行第${count + 1}個計算`);
}
// timeLeft();
let count = window.setInterval(timeLeft, 1);

function countDown(total_ms, Txt) {
    // 秒數
    let secs = Math.floor(total_ms / 1000);

    // 毫秒
    let ms = total_ms
        .toString()
        .substring(total_ms.toString().length - 3, total_ms.toString().length - 2);

    // 天數
    let days = Math.floor(secs / 86400);
    secs %= 86400;

    // 小時
    let hours = Math.floor(secs / 3600);
    secs %= 3600;

    // 分鐘
    let mins = Math.floor(secs / 60);
    secs %= 60;

    let timer;
    if (total_ms <= 0) {
        timer = `00:00:00`;
        clearInterval(count);
    } else {
        timer =
            Txt +
            (days < 10 ? "0" : "") +
            days +
            "days" +
            (hours < 10 ? "0" : "") +
            hours +
            "hr" +
            (mins < 10 ? "0" : "") +
            mins +
            "mins" +
            (secs < 10 ? "0" : "") +
            secs +
            "." +
            ms;
    }

    document.getElementById("countdown").innerHTML = timer;
}
