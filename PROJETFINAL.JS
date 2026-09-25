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

function ajouterplusieurs(){
let n=Number(prompt("combien de candidats?"));
for(let i=0;i<n;i++){
    console.log("candidat" + (i+1) + " ");
ajouteruncandidat();
}    
}

function afficher(){
    if(candidats.length==0){
        console.log("aucun candidat");
        return;
    }
let choix=prompt("1.voir tout/2.trier par votes/3.filtrer par parti: ");
if(choix=="2"){
    for (let i=0;i<candidats.length;i++){
    for (let j=0;j<candidats.length-1;j++){
        if(candidats[j].electeurs.length<candidats[j+1].electeurs.length){
let box=candidats[j];
    candidats[j]=candidats[j+1];
    candidats[j+1]=box;        
        }
    }    
    }
}
let filtre=" ";
if(choix=="3")filtre=prompt("donner le parti");
for (let i=0;i<candidats.length;i++){
    if(choix=="3"&&candidats[i].partipolitique!=filtre){
   continue;
    }
console.log(candidats[i].nom + "parti: " + candidats[i].partipolitique+"votes: "+ candidats[i].electeurs.length);     
}
}


