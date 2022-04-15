let current = document.querySelector(".current");
console.log(current.textContent);

window.onload = function () {
  var btn_num = document.querySelectorAll(".btn-num");
  btn_num.forEach((btn) => {
    btn.addEventListener("click", () => writeNum(btn.textContent));
  });
  var btn_del = document.getElementById("del");
  btn_del.addEventListener("click", () => del());
  var btn_ac = document.getElementById("ac");
  btn_ac.addEventListener("click", () => ac());
};

function writeNum(numInput) {
  current.textContent = current.textContent.concat(numInput);
  console.log(current.textContent);
}

function del() {}

function ac() {
  current.textContent = 0;
}
