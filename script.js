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
  current.textContent = "0";
  currentDefault = true;
};

function writeNum(numInput) {
  if (currentDefault == true) {
    current.textContent = "";
    current.textContent = numInput;
    console.log(current.textContent);
    currentDefault = false;
  } else {
    current.textContent = current.textContent.concat(numInput);
    console.log(current.textContent);
  }
}

function del() {
  if (currentDefault == true) {
    current.textContent = "0";
  } else {
    current.textContent = current.textContent.slice(0, -1);
    if (current.textContent.length == 0) {
      current.textContent = "0";
      currentDefault = true;
    }
  }
}

function ac() {
  current.textContent = "0";
  currentDefault = true;
}
