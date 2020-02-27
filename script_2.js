let num = prompt("De quel nombre veux-tu calculer la factorielle ?");
let result = num;

if (num == 0) {
  result = 1
}
else {
  while(num > 1) {
    num--;
    result=result*num
  }
}

console.log(`Le résultat est : ${result}`);