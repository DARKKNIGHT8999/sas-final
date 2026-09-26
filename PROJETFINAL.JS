var prompt=require('prompt-sync')();
const candidats=[{
	cin : "AB123456",
	nom : "Boushaba",
	prenom : "Soufiane",
	partipolitique : "Indépendant",
	age: 40,
	electeurs: []
},
{
	cin : "CD7890",
	nom : "ALAMI",
	prenom : "SARA",
	partipolitique : "WOMEN",
	age: 32,
	electeurs: ["lm51476"]
},
{
	cin : "EF112233",
	nom : "EL AMRANI",
	prenom : "YOUSSEF",
	partipolitique : "Indépendant",
	age: 35,
	electeurs: []
},
{
	cin : "GH885566",
	nom : "BENALI",
	prenom : "FATIMA",
	partipolitique : "Indépendant",
	age: 60,
	electeurs: []
},
{
	cin : "ij778899",
	nom : "HOUSSAM",
	prenom : "FASSA",
	partipolitique : "wisdom",
	age: 20,
	electeurs: ["AB123456","EF112233","GH885566"]
},
{
	cin : "lm51476",
	nom : "saad",
	prenom : "oussama",
	partipolitique : "Indépendant",
	age: 25,
	electeurs: []
}];
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
let parti=prompt("parti politique: ");
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
let filtre="";
if(choix=="3")filtre=prompt("donner le parti: ");
for (let i=0;i<candidats.length;i++){
    if(choix=="3"&&candidats[i].partipolitique!=filtre){
   continue;
    }
console.log(candidats[i].nom + "|parti: " + candidats[i].partipolitique+"|votes: "+ candidats[i].electeurs.length);     
}
}
function voter(){
let cinelecteur=prompt("voter cin(electeur): ");
for(let i = 0;i<candidats.length;i++){
    for(let j=0;j<candidats[i].electeurs.length;j++){
    if(candidats[i].electeurs[j]==cinelecteur){
        console.log("vous avez deja vote et vous n'avez pasle droitde modifier votre vote ni de voter a nouveau");
        return;
    }    
    }
}  
let cincadidat=prompt("cin du candidat: ");
for(let i=0;i<candidats.length;i++){
    if(candidats[i].cin==cincadidat){
        candidats[i].electeurs.push(cinelecteur);
        console.log("vote enregistre!");
        return;
    }
}  
}
function modifier(){
    let cin=prompt("cin a modifier: ");
    for (let i=0;i<candidats.length;i++){
        if(candidats[i].cin==cin){
            candidats[i].partipolitique=prompt("nouveau parti: ");
            candidats[i].age=Number(prompt("nouveau age: "));
            console.log("modifie!");
            return;
        }
    }
}
function supprimer(){
let cin=prompt("cin supprimer: ");
for (let i=0; i<candidats.length;i++){
    if(candidats[i].cin==cin){
        candidats.splice(i,1);
        console.log("supprime!");
        return;
    }
}    
}
function rechercher(){
let nom=prompt("nom a chercher: ");
for(i=0;i<candidats.length;i++){
if(candidats[i].nom.toLowerCase()==nom.toLowerCase()){
    console.log(candidats[i]);
}
}
}
function statistique(){
    console.log("total candidat: " + candidats.length);
    let totalvotes=0;
    for (let i=0;i<candidats.length;i++){
        totalvotes=totalvotes+candidats[i].electeurs.length;
    }
    console.log("totalvotes: " + totalvotes);
}
while(true){
    console.log("1.ajouter 2.plusieurs 3.afficher 4.voter 5.modifier 6.supprimer 7.rechercher 8.stats 9.quitter");
    let choix=prompt("choix: ");
    switch(choix){
        case "1":
            ajouteruncandidat();
        break;
        case "2":
            ajouterplusieurs();
        break;
        case "3":
            afficher();
        break;
        case "4":
            voter();
        break;
        case "5":
            modifier();
        break;
        case "6":
            supprimer();
        break;
        case "7":
            rechercher();
        break;
        case "8":
            statistique();
        break;
        case "9":
        break;                    
    }
    if (choix=="9"){
        break;
    }
}