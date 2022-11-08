const validator = {
    isValid: (ccNumber) => {
        const arrNumber = ccNumber.split("").reverse() //voltear arr 
        console.log(arrNumber)
        let count = 0;

        for (let i = 0; i < arrNumber.length; i++) {
            let currentDigit = parseInt(arrNumber[i]);
            if (i % 2 !== 0) {  //establesco posiciones pares
                if ((currentDigit *= 2) > 9) { // doblar 
                    
                    let firstNumber = parseInt(currentDigit / 10); // 1er dig
                    let trailingNumber = currentDigit % 10; // segundo dig 

                    currentDigit = firstNumber + trailingNumber; // sumo ambos
                    
                } else if (currentDigit <= 9 ) {  // guarda dis <9
                    
                    currentDigit = currentDigit
                    
                    
                }
            } else {
                
                currentDigit = currentDigit // guarda impares
                
                
            }
            
            count += currentDigit; // sumo todos los numeros de la tarjeta 
            console.log(currentDigit);
        }
        console.log(count);

        // condicional para resultado 
        if (count % 10 == 0) {
            console.log(true)
            return true
        } else {
            console.log(false)
            return false
        }

    },

    maskify: (ccNumber) => {
        ccNumber = ccNumber.split("");
        for(let i = 0 ; i < ccNumber.length - 4; i++){
            ccNumber[i] = "#";
        }
        ccNumber= ccNumber.join("");
        console.log(ccNumber)
        return ccNumber;
    }

    

        
        
    
    


}




export default validator;


