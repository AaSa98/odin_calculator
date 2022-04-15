window.onload = function() {
    var btn_num = document.querySelectorAll(".btn-num");
    btn_num.forEach(btn => {
        btn.onclick = writeNum(btn.textContent);
    });
}


function writeNum(numInput){
    const num = numInput
    const current = document.querySelector(".current");
    console.log(numInput);
}