const validator = {
    isValid: (ccNumber) => {
        const arrNumber = ccNumber.split("").reverse()
        console.log(arrNumber)
        let count = 0;

        for (let i = 0; i < arrNumber.length; i++) {
            let currentDigit = parseInt(arrNumber[i]);
            if (i % 2 == 0) {
                if ((currentDigit *= 2) > 9) {

                    let firstNumber = parseInt(currentDigit / 10);
                    let trailingNumber = currentDigit % 10;

                    currentDigit = firstNumber + trailingNumber;
                }
            }
            count += currentDigit;
        }
        const resultado = (count % 10) === 0;
        console.log(resultado, count);
        return resultado;
    },


    maskify: (ccNumber) => {
        let myArray = []
        for (let i = 0; i < ccNumber.length; i++) {
            if (i < ccNumber.length - 4) {
                myArray[i] = "#";
            } else {
                myArray[i] = ccNumber[i];
            }
        }
        return myArray.join("");
    }

};




    export default validator;


