const user ={ id:1,name:"Ali",City:"Rabat"};
// Déstructuration
const {name,City} = user;
console.log(`${name} habite a ${City}`);
// Renommage
const {name:fullName, ...rest} = user;
console.log(fullName);
console.log(rest);

