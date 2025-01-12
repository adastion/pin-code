import { POINTS } from "./constants.js"

export function getPinCodeOptions(pinCode) {
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