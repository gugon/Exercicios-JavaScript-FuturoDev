//----------------------
// função 1
//----------------------
const palindrome = (str) => {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === [...s].reverse().join('');
}

console.log(" -------------------- ")
console.log("Função 1: ")  
console.log(palindrome('taco cat'))


//----------------------
//   função 2
//----------------------

const retornaIndiceMaiorInt = (array) => {
  var maiorValor = 0
  var posicao = 0
  array.forEach(element => {
    element>maiorValor ? (maiorValor = element) && (posicao++): 0
  // console.log("Maior valor: " + maiorValor)
  });
  return posicao-1
}
console.log(" -------------------- ")
console.log("Função 2: ")  
array = [2, 3, 6, 7, 10, 1]
console.log("O indice do maior valor da array é: " + retornaIndiceMaiorInt(array))



//----------------------
//   função 3
//----------------------
arrayNum = [2, 3, 6, 7, 10, 0, -1]
var posicao = 0
const retornaIndiceMenorInt = arrayNum.reduce(function(prev, current) { 
  // console.log("Posicão: " + posicao)  
  posicao++
	return prev < current ? prev : current 
})
console.log(" -------------------- ")
console.log("Função 3: ")  
console.log("O menor valor da array é: " + retornaIndiceMenorInt + "\n" +
            "E seu indice é: " + posicao)


//----------------------
//   função 4
//----------------------
const maiorCaracteres = (nomes) => {
  var maiorNome = ''
  function verificaNome(item,indice){
    nomes[indice].length > maiorNome.length ? maiorNome = nomes[indice] : 0
  }
  nomes.forEach(verificaNome)
  return maiorNome
}
console.log(" -------------------- ")
console.log("Função 4: ") 
arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
console.log(maiorCaracteres(arrayNomes))



//----------------------
//   função 5
//----------------------
function numeroMaisRepete (array) { 
  const guardaMap = array.reduce ((acc, val) => { 
    acc [val] = (acc [val] || 0) + 1 
    return acc 
}, {}) 
  console.log(guardaMap)
  return Object.keys (guardaMap ) .reduce ((a, b) => guardaMap [a]> guardaMap [b]? a: b) 
}
// console.log(" -------------------- ")
console.log("Função 5: ") 
arrayNumeros = [2, 3, 2, 5, 8, 2, 3]
console.log(numeroMaisRepete(arrayNumeros))



//----------------------
//   função 6
//----------------------
const somaTudo = (N) => {
  var soma = 0
  while (N>0) {
    soma += N
    N--    
  }
  return soma
}
console.log(" -------------------- ")
console.log("Função 6: ") 
console.log(somaTudo(5))


//----------------------
//   função 7
//----------------------
const verificaFimPalavra = (word,ending) => {
  return word.length > ending.length ? true : false 
}
console.log(" -------------------- ")
console.log("Função 7: ") 
console.log(verificaFimPalavra('roberto', 'rto'))
console.log(verificaFimPalavra('joaofernando', 'fernan'))
