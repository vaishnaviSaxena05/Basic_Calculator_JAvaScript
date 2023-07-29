// let allbuttons = document.getElementsByClassName('button');
// let buttonsArray = Array.from(allbuttons);

// buttonsArray.forEach(attachEventListenertobutton);
// function  attachEventListenertobutton(buttonObject , index){
//     buttonObject.addEventListener('click',handleEvent);
//     console.log("Attach event ->"+buttonObject.innerText );
// }

// function handleEvent(e){
//    let allDivButtonTarget = e.target;
//     console.log("event fired during click "
//     +allDivButtonTarget.innerText);

// // }
// let display = document.getElementById("ioPannel");
// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if (e.target.innerHTML == 'CLEAR') {
//             string = "";
//             document.querySelector('input').value = string;
//         }else if(e.target.innerHTML =='BACKSPACE'){
//             document.querySelector('input').value = display.innerText.substring(
//                 0,display.innerText.length - 1
//                 );
           
//             // document.querySelector('input').value = string;
//         }
//         else {
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })

let display = document.getElementById("display");
console.log(display);
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "CLEAR":
        display.innerText = "";
        break;
      case "=":
        if (display.innerText == "") {
          alert("no value entered!!");
        } else {
          try {
            display.innerText = eval(display.innerText);
          } catch {
            display.innerText = "Error";
          }
        }
        break;
      case "BACKSPACE":
        if (display.innerText) {
          display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1
          );
        }
        break;
      default: {
        display.innerText += e.target.innerText;
      }
    }
  });
});

