var prompt=require('prompt-sync')();
let candidats=[];
function ajouteruncandidat(){
let cin=prompt("cin du candidat: ");
for(let i=0;i<candidats.length;i++){
    if(candidats[i].cin==cin){
    console.log("ce cin déja existe!");
return;    
}
}
let nom=prompt("nom: ");
let prenom=prompt("prenom: ");
let parti=prompt("parti plitique: ");
let age=Number(prompt("age: "));
candidats.push({
    cin:cin,
    nom:nom,
    prenom:prenom,
    partipolitique:parti,
    age:age,
    electeurs:[]
});
console.log("candidat ajoute!");
}
ajouteruncandidat();
console.log(candidats);