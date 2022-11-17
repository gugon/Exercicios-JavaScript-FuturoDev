//----------------------
// função 1
//----------------------
function factorial(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
console.log(" -------------------- ")
console.log("Função 1: ")  
console.log(factorial(5))


//----------------------
//   função 2
//----------------------
function invertedor(str) {
    var aux = '';
    for (var i = str.length - 1; i >= 0; i--) {
        aux += str[i];
    }
    return aux;
}
console.log("\n -------------------- ")
console.log("Função 2: ")  
console.log(invertedor("banana"));


//----------------------
//   função 3
// ---------------------
function retornaMaior(array) {
    var maior = ''
    for (var i = 0; i < array.length; i++) {    
        if ( array[i].length > maior.length ) {        
            maior = array[i];
        }
    }
    console.log(maior)
}

function retornaMenor(array) {
    var menor = ''
    for (var i = 0; i < array.length; i++) {   
        menor = array[0] 
        if ( array[i].length < menor.length ) {        
            menor = array[i];
        }
    }
    console.log(menor)
}
const array = ['java', 'javascript', 'python', 'html', 'css'];

console.log("\n -------------------- ")
console.log("Função 3: ")  
retornaMaior(array)
retornaMenor(array)

//----------------------
//   função 4
// ---------------------
function primo(){
    var inicio = 1
    var fim = 100 
    var texto =''
    var maiorNumeroPrimo = ''
    var divisores;
  
    for(var count=inicio ; count<=fim ; count++){
        divisores=0;
        for(var aux=1 ; aux<=count ; aux++)
            if(count % aux == 0)
                divisores++;
  
        if(divisores==2){
            texto += count + ' '
            if (count > maiorNumeroPrimo){
                if (count < 100){
                    maiorNumeroPrimo = count
                }    
            }                    
        }            
    }
    // console.log(texto)  
    return maiorNumeroPrimo;
  }

console.log("\n -------------------- ")
console.log("Função 4: ")  
console.log(primo())