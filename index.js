import validator from './validator.js';

const elCCNumber = document.getElementById('ccNumber');
const elCCValidation = document.getElementById('ccValidator');
const checkCC = (text) => {
  let message = "";

  console.log(text)
  if (validator.isValid(text))

    message = "Número de tarjeta válido";

  else
    message = "***Tu tarjeta es inválida, revisa los digitos ingresados o consulta con tu proveedor***";

  elCCValidation.textContent = message;

};


const btn = document.getElementById('btn-validar')
btn.addEventListener("click", function (event) {
  event.preventDefault()

  if (elCCNumber.value.trim().length === 0) { // trim quita los espacios

    if (elCCNumber.value)
      console.log("el campo no puede estar vacio")
    elCCValidation.textContent = "*** el campo no puede estar vacio, ingresa un número para validar ***";
    return
  }

  checkCC(elCCNumber.value);
  let maskify = validator.maskify(elCCNumber.value);
  document.getElementById("ccNumber").value = maskify;

});



//let number = document.getElementById('ccNumber');
//let regExNum = /^\d+$/;
 //if (regExNum.test(number) !== [0 - 9]) {
   //throw TypeError('debes ingresar un numero')

 //}
//let imput = document.getElementById('ccNumber').value
//let imput = document.querySelector('#ccNumber');

//const validImput = () => {

//}

//imput.forEach(imput) => {
  //imput.addEventListener('keyup');

//});

//imput.addEventListener('submit'), (e) => {
  //e.preventDefault();

//}






//5457623898234113

//4137894711755904

