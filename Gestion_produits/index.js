const produits = [
{ nom: "Lait", prix: 10, expireLe: "2025-12-01" },
{ nom: "Yaourt", prix: 5, expireLe: "2024-02-01" },
{ nom: "Jus", prix: 8, expireLe: "2026-02-15" },
{ nom: "Yaourt", prix: 5, expireLe: "2025-11-02" },
];

const Aujourdhuit = new Date();

const produitValide = produits.filter( (p) => Aujourdhuit < new Date(p.expireLe));
console.log(produitValide)
console.log (Aujourdhuit)
const somme = produits.reduce((a,c)=>a+c.prix,0)
console.log(`La somme des prix des produits est de : ${somme}dh `);