let add = document.querySelector("#plus");
let subract = document.querySelector("#minus");

add.addEventListener("click", function () {
  let output = document.querySelector("#count-num");
  let result = Number(output.innerText) + 1;

  

  output.innerText = result;
});

subract.addEventListener("click", function () {
  let output = document.querySelector("#count-num");
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
})

