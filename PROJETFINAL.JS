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
}