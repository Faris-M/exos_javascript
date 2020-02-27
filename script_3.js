let floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let space = " ";
let hashtag = "#";
console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log(floor + " étages");
for (let i = 1; i <= floor; i++) {
  console.log(space.repeat(floor-i) + hashtag.repeat(i));
}

