let name = "Hajar";
const hour = new Date().getHours();
console.log(`Bonjour ${name}, il est ${hour} heures.`);


const arr = [3,4];
const arr1=[1,2,...arr];
console.log(arr1);

function sum(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1,2,3,4,5));

//2️⃣ Optional chaining (?.)
const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); // x@y.com
console.log(user2.address?.city);  // undefined
//1️⃣ Nullish coalescing (??)
const settings = { theme: null };
console.log(settings.theme ?? "light"); // light
