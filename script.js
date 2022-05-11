let current = document.querySelector(".current");
let prev = document.querySelector(".prev");
let pressedOP = "";
let opIsPressed = false;

window.onload = function () {
  //Nummer-Buttons werden ausgewählt und writeNum-Funktion angehangen
  var btn_num = document.querySelectorAll(".btn-num");
  btn_num.forEach((btn) => {
    btn.addEventListener("click", () => writeNum(btn.textContent));
  });
  //Zuweisung del-Funktion zu del-Button
  var btn_del = document.getElementById("del");
  btn_del.addEventListener("click", () => del());

  //Zuweisung ac-Funktion zu ac-Button
  var btn_ac = document.getElementById("ac");
  btn_ac.addEventListener("click", () => ac());

  //Setzt current auf 0 um nicht mit leerer Zeile zu starten
  current.textContent = "0";
  //currentDefault um zu unterscheiden ob 0 Standardwert oder Eingabe ist
  currentDefault = true;

  //Fügt Operation Buttons die operation-Funktion hinzu
  var btn_op = document.querySelectorAll(".btn-op");
  btn_op.forEach((btn) => {
    btn.addEventListener("click", () => operation(btn.textContent));
  });

  var btn_eq = document.querySelector(".btn-eq");
  btn_eq.addEventListener("click", () => eq());
};

function writeNum(numInput) {
  if (currentDefault == true) {
    current.textContent = "";
    current.textContent = numInput;
    currentDefault = false;
  } else {
    current.textContent = current.textContent.concat(numInput);
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
  prev.textContent = "";
  pressedOP = "";
  currentDefault = true;
  opIsPressed = false;
}

function operation(buttonOP) {
  if(opIsPressed == true)
  {
    eq();
  }
  opIsPressed = true;
  prev.textContent = current.textContent;
  current.textContent = "0";
  currentDefault = true;
  pressedOP = buttonOP;
}

function eq() {
  const numPrev = Number(prev.textContent);
  const numCurr = Number(current.textContent);
  let out;
  switch (pressedOP) {
    case "+":
      out = numPrev + numCurr;
      break;
    case "-":
      out = numPrev - numCurr;
      break;
    case "X":
      out = numPrev * numCurr;
      break;
    case "÷":
      if(numCurr == 0)
      {
        out = "You stupid?";
        break;
      }
      out = numPrev / numCurr;
      break;
  }
  //Operations-Speicher am Ende wieder leeren!
  ac();
  current.textContent = out;
}
