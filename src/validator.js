const validator = {
    isValid: (ccNumber) => {
        const arrNumber = ccNumber.split("").reverse() //voltear arr 
        console.log(arrNumber)
        let count = 0;

        for (let i = 0; i < arrNumber.length; i++) {
            let currentDigit = parseInt(arrNumber[i]);
            if (i % 2 !== 0) {  //sacar posiciones par partiendo de 1 
                if ((currentDigit *= 2) > 9) { // doblar 

                    let firstNumber = parseInt(currentDigit / 10); // 1er dig
                    let trailingNumber = currentDigit % 10; // segundo dig 

                    currentDigit = firstNumber + trailingNumber; // sumo ambos

                } else if (currentDigit <= 9) {  // guarda dis <9
                    let oldDigit = currentDigit
                    currentDigit = oldDigit


                }
            } else {
                let oldDigit = currentDigit
                currentDigit = oldDigit // guarda impares


            }

            count += currentDigit; // sumo todos los numeros de la tarjeta 
            console.log(currentDigit);
        }
        console.log(count);

        // condicional para resultado 
        if (count % 10 == 0 && count !== 0) {   // cuenta divisible por 10 distinto de 0 es true
            console.log(true)
            return true
        } else {
            console.log(false)
            return false
        }

    },

    maskify: (ccNumber) => {
        ccNumber = ccNumber.split("");
        for (let i = 0; i < ccNumber.length - 4; i++) {
            ccNumber[i] = "#";
        }
        ccNumber = ccNumber.join("");
        console.log(ccNumber)
        return ccNumber;
    }









}




export default validator;


