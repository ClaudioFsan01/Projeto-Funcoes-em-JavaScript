function area(altura, largura){
    const area = altura*largura
   if(area>20){
     console.log('valor acima do permito: ${area}m2.')
   }else{
       return area
   }

}

console.log(area(2,2))
console.log(area(5))
console.log(area())
console.log(area(2,3,4,5))
console.log(area(5,5))