import validator from './validator.js';

const elCCNumber = document.getElementById('ccNumber');
const elCCValidation = document.getElementById('ccValidator');
const checkCC = (text) => {
  let message = "";
  console.log(text)
  if (validator.isValid(text))
    message = "Número de tarjeta válido";
  
    //message1.style.color = "green"
  else
    message = "Tu tarjeta es inválida, revisa los digitos ingresados o consulta con tu proveedor";



  elCCValidation.textContent = message;

};

const btn = document.getElementById('btn-validar')
btn.addEventListener("click", function () {
  checkCC(elCCNumber.value);

  validator.maskify(elCCNumber.value);
});




//5457623898234113



