//funzione che mi dice se i numeri si trovano dentro a un array
function isInArray(num, arrNum){
  for(var i = 0; i < arrNum.length; i++ ){
    if (num == arrNum[i]){
      return true;
    }
  }
  return false;
}
console.log(isInArray(5, [1,2,3,4]));
console.log(isInArray(5, [1,2,3,4,5]));
