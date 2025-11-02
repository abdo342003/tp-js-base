const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);

//tableau
const nums=[1,2,3,4,5]; 
//Circule tous les nombres dans la liste et multiple chacune
console.log(nums.map(x => x*2));
console.log(nums.filter(x=>x%2===0));

console.log(nums.reduce((sum,n)=>sum+n,0));
console.log(nums.find(n => n > 3));//find cherche le premier élément du tableau qui satisfait la condition donnée.
console.log(nums.some(n => n < 0));//some vérifie si au moins un élément du tableau satisfait la condition.
console.log(nums.every(n => n > 0));//every vérifie si tous les éléments du tableau satisfont la condition.