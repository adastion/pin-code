import { getPinCodeOptions } from "./src/features/getOptions.js"

const resultElement = document.querySelector(".result-block")
const resetBtnElement = document.querySelector(".result-block__btn")
const keys = document.querySelectorAll(".keyboard__cell")

const result = document.createElement("p")

keys.forEach((btn) => {
  btn.id = btn.textContent

  btn.addEventListener("click", (event) => {
    result.style = "font-size: 2rem; font-weight: 600; margin: 0;"
    result.textContent = " " + getPinCodeOptions(event.target.id)
    resultElement.append(result)
  })
})

resetBtnElement.addEventListener("click", () => {
  result.innerHTML = ""
  resultElement.append(result)
})