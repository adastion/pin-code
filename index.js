const POINTS = {
  1: [1, 2, 4],
  2: [1, 2, 3, 5],
  3: [2, 3, 6],
  4: [1, 4, 5, 7],
  5: [2, 4, 5, 6, 8],
  6: [3, 5, 6, 9],
  7: [4, 7, 8],
  8: [5, 7, 8, 9],
  9: [6, 8, 9],
  0: [0, 8],
}

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

function getPinCodeOptions(pinCode) {
  let arrayOfCharacters
  const result = []

  if (typeof pinCode !== "string") {
    arrayOfCharacters = String(pinCode).split("")
  } else {
    arrayOfCharacters = pinCode.split("")
  }

  if (typeof pinCode !== "string" && typeof pinCode !== "number" && isNaN(pinCode)) {
    return console.log("Ошибка: Не допустимое значение")
  }

  if (arrayOfCharacters.length > 8) {
    return console.log("Ошибка: Пин-код не может превышать болле 8 символов")
  }


  arrayOfCharacters.forEach((num) => {
    if (typeof num !== "number") {
      Number(num)
    }
    result.push(...POINTS[num])
  })

  return result.join(", ")
}