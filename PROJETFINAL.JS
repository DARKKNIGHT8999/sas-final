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
	electeurs: ["lm51476","8r223344"]
},
{
	cin : "EF112233",
	nom : "JAMAL",
	prenom : "YOUSSEF",
	partipolitique : "Indépendant",
	age: 35,
	electeurs: []
},
{
	cin : "GH885566",
	nom : "JAMILA",
	prenom : "FATIMA",
	partipolitique : "Indépendant",
	age: 60,
	electeurs: []
},
{
	cin : "ij778899",
	nom : "FASSA",
	prenom : "HOUSSAM",
	partipolitique : "wisdom",
	age: 20,
	electeurs: ["AB123456","EF112233","GH885566","7q559911","9u005599"]
},
{
	cin : "3l542864",
	nom : "alamp",
	prenom : "yassine",
	partipolitique : "pdj",
	age: 28,
	electeurs: ["4m112233","5n556677","6p556688"]
},
{
	cin : "4m112233",
	nom : "benani",
	prenom : "sara",
	partipolitique : "Indépendant",
	age: 26,
	electeurs: []
},
{
	cin : "5n556677",
	nom : "idrissi",
	prenom : "mehdi",
	partipolitique : "Indépendant",
	age: 33,
	electeurs: []
},
{
	cin : "6p556688",
	nom : "elamrani",
	prenom : "fatim",
	partipolitique : "Indépendant",
	age: 47,
	electeurs: []
},
{
	cin : "7q559911",
	nom : "tahr",
	prenom : "omar",
	partipolitique : "Indépendant",
	age: 61,
	electeurs: []
},
{
	cin : "9u005599",
	nom : "khalfi",
	prenom : "nada",
	partipolitique : "Indépendant",
	age: 29,
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
        for(let i=0;i<candidats.length;i++){
            for(let j=0;j<candidats.length-1;j++){
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

    function colonne(texte,largeur){
        let t=String(texte);
        while(t.length<largeur){
            t=t+" ";
        }
        return t;
    }

    let ligne="+------+------------+----------------+----------------+----------------+-------+--------+";
    console.log("");
    console.log(ligne);
    console.log("\x1b[36m| "+colonne("N°",4)+" | "+colonne("CIN",10)+" | "+colonne("Nom",14)+" | "+colonne("Prenom",14)+" | "+colonne("Parti",14)+" | "+colonne("Age",5)+" | "+colonne("Votes",6)+" |\x1b[0m");
    console.log(ligne);

    let n=0;
    for(let i=0;i<candidats.length;i++){
        if(choix=="3"&&candidats[i].partipolitique!=filtre){
            continue;
        }
        n++;
        console.log("| "+colonne(n,4)+" | "+colonne(candidats[i].cin,10)+" | "+colonne(candidats[i].nom,14)+" | "+colonne(candidats[i].prenom,14)+" | "+colonne(candidats[i].partipolitique,14)+" | "+colonne(candidats[i].age,5)+" | "+colonne(candidats[i].electeurs.length,6)+" |");
    }
    if(n==0){
        console.log("| aucun candidat trouve                                                            |");
    }
    console.log(ligne);
    console.log(n+" candidat(s) affiche(s)");
}
function voter(){
let cinelecteur=prompt("voter cin(electeur): ");
for(let i = 0;i<candidats.length;i++){
    for(let j=0;j<candidats[i].electeurs.length;j++){
    if(candidats[i].electeurs[j]==cinelecteur){
        console.log("vous avez deja vote et vous n'avez pas le droitn de modifier votre vote ni de voter a nouveau");
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
    let trouve=false;
    for(let i=0;i<candidats.length;i++){
        if(candidats[i].nom.toLowerCase()==nom.toLowerCase()){
            trouve=true;
            console.log("");
            console.log("CIN     : "+candidats[i].cin);
            console.log("Nom     : "+candidats[i].nom);
            console.log("Prenom  : "+candidats[i].prenom);
            console.log("Parti   : "+candidats[i].partipolitique);
            console.log("Age     : "+candidats[i].age);
            console.log("Votes   : "+candidats[i].electeurs.length);
            console.log("--------------------");
        }
    }
    if(trouve==false){
        console.log("aucun candidat trouve");
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