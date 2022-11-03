const validator = {
    isValid: (ccNumber) => {
        const arrNumber = ccNumber.split("").reverse()
        console.log(arrNumber)
        let count = 0;

        for (let i = 0; i < arrNumber.length; i++) {
            let currentDigit = parseInt(arrNumber[i]);
            if (i % 2 == 0) {
                if ((currentDigit *= 2) > 9) {


                } else {

                    (currentDigit >=10) // -> sume los digitos de los numeros mayores a 10 guardar numeros multiplicados por 2 < 9
                }

            } else {
                // 
            }

            count += currentDigit;
        }
    },

    maskify: (ccNumber) => {
        if (ccNumber.length < 4) {
            return ccNumber
        } else {
            let last4 = ""
            for (let i = ccNumber.length - 4; i < ccNumber.length; i++) {
                last4 += ccNumber[i]
            }

            let mask = ""
            for (let j = 0; j < ccNumber.length - 4; j++) {
                mask += "#"
            }
            return mask + last4
        }
    }

};









export default validator;


