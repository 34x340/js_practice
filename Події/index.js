// // Напишіть скрипт зміни кольору кнопки при натискані на неї.

// // const buttonElement = document.querySelector(".button__element")

// // buttonElement.addEventListener("click", () => {
// //     buttonElement.style.color = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
// // })

// // const inputElement = document.querySelector('input')

// // inputElement.addEventListener('focus' , () => {
// //     inputElement.style.boxShadow = "2px 3px 4px red"
// //     inputElement.addEventListener
// // })

// const inputElement = document.querySelector(".input__telephone")

// inputElement.addEventListener('input', (value) => {
//     const valueElement = inputElement.value
//     const pElement = document.querySelector(".text__element")
//     pElement.textContent = valueElement
// })

// const eventChange = document.querySelector(".input__mail")

// eventChange.addEventListener('change', (value) => {
//     const valueElement = eventChange.value
//     const pElement = document.querySelector(".second-text__element")
//     pElement.textContent = valueElement
// })

// const checkBoxElement = document.querySelector(".checkbox__element")

// checkBoxElement.addEventListener('change', () => {
//     const boxElement = document.querySelector(".box")
//     if (checkBoxElement.checked) {
//         boxElement.style.opacity = 1
//     }
//     else {
//         boxElement.style.opacity = 0
//     } 
// }) 

// document.addEventListener("keydown", (event) => {
//     console.log(event.code)
//     if (event.code === "KeyB") {
//         document.body.style.backgroundColor = "blue"
//     } else if (event.code === "KeyS") {
//         document.body.style.backgroundColor = "skyblue"
//     }
//     else if (event.code === "KeyP") {
//         document.body.style.backgroundColor = "pink"
//     }
//     else {
//         document.body.style.backgroundColor = "red"
//     }
// })

// const box = document.querySelector("#box")

// document.addEventListener("keydown", (event) => {
//     console.log(event.code  )
//     if (document.code === "ArrowLeft") {
//       document.box.style.transform = "translate(-50%, -100%)"
//     }
// })

// const boxElement = document.querySelector("div") 
// boxElement.style.width = "100"
// boxElement.style.height = "100"
// boxElement.style.backgroundColor = "pink"
// console.log(boxElement)

// boxElement.addEventListener("mouseover", (event) => {
//   boxElement.style.background = "violet"
//   })
  
//   boxElement.addEventListener("mouseout", (event) => {
//   boxElement.style.background = "pink"
//   })

// boxElement.addEventListener("mousemove", (event) => {
//   console.log(event)
// })


// const buttonClear = document.querySelector(".js-clear")
// const textScreen = document.querySelector(".js-output")

// document.addEventListener("keydown", (event) => {
//   textScreen.textContent +=  event.key
// })
// document.addEventListener("click", (event) => {
  
// })

// const block = document.querySelector('.block');

// document.addEventListener('mousemove', e => {
// block.style.marginLeft = `${e.clientX-25}px`;
// block.style.marginTop = `${e.clientY-25}px`;
// });

const infoEl = document.querySelector('#key');
const keys = []
document.addEventListener('keydown', e => keys.push(e.code));
console.log(keys)