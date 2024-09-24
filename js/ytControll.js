let player1, player2, player3;

function onYouTubeIframeAPIReady() {
    // 一般使用 影片的id寫在js裡
    player1 = new YT.Player('player1', {
        height: '390', // 高度預設值為390，css會調成responsive
        width: '640', // 寬度預設值為640，css會調成responsive
        videoId: '1crdWgd4lPU',
        playerVars: {
            playlist: '1crdWgd4lPU',
            loop: 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
    player2 = new YT.Player('player2', {
        height: '390', // 高度預設值為390，css會調成responsive
        width: '640', // 寬度預設值為640，css會調成responsive
        videoId: 'gy1POyRNCbs',
        playerVars: {
            playlist: 'gy1POyRNCbs',
            loop: 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
    player3 = new YT.Player('player3', {
        height: '390', // 高度預設值為390，css會調成responsive
        width: '640', // 寬度預設值為640，css會調成responsive
        videoId: 'VG4wfUj97JE',
        playerVars: {
            playlist: 'VG4wfUj97JE',
            loop: 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 第一部影片的觸發點
// let BG2 = document.querySelector('.bg2').offsetTop;


function onPlayerReady(e) {
    console.log(e.target.g.className)
    let Target = document.querySelector(`.${e.target.g.className}`);
    let TargetY = Target.getBoundingClientRect().top + window.scrollY
    console.log(TargetY)
    // 為確保瀏覽器上可以自動播放，要把影片調成靜音
    window.addEventListener('scroll', () => {
        // if (window.scrollY >= BG2 - 300) {
        //     e.target.mute().playVideo();
        // }
        if (window.scrollY >= TargetY - 300) {
            e.target.mute().playVideo();
        }
    })
}