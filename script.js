window.onload = function() {
    var btn_num = document.querySelectorAll(".btn-num");
    btn_num.forEach(btn => {
        btn.addEventListener("click", () => writeNum(btn.textContent));
    });
}


function writeNum(numInput){
    const current = document.querySelector(".current");
    console.log(numInput);
}
