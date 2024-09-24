// 彈跳視窗
function popUp(e) {
    let Content = document.querySelector(`#${e}`);
    let Close = Content.querySelector(".closeBox");
    let html = document.documentElement;

    Content.classList.add("popUp--active");
    html.style.overflowY = 'hidden';
    Close.addEventListener("click", () => {
        Content.classList.remove("popUp--active");
        html.style.overflowY = 'auto';
    });
}

// 開闔
function toggleContent(e) {
    var Content = document.querySelector(`#${e}`);

    if (Content.style.maxHeight) {
        Content.style.maxHeight = null;
    } else {
        Content.style.maxHeight = Content.scrollHeight + "px";
    }
}