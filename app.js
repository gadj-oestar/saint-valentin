const non = document.querySelector(".nunh");
const oui = document.querySelector(".yuh");
const nounours = document.querySelector(".nounours");
const h2 = document.querySelector(".en-tete")
const h1 = document.querySelector(".tete")

let compteur =0
let tab = [ "EHH MASAKA", " TES SUR  ", " TAS ENCORE UNE SECONDE CHANCE", " TU VEUX VRAIMENT PAS ?", " VA CLIQUER SUR AVEC JOIE ", "  TU ES TROP DURE ENVERS TOI MEME", "BECAUSE IM BLACK", " ALLEZ MON MADAME CLIQUE SUR LE BOUTTON VERT", "NIGGER"];
let compteur1=0
let compteur2=0


non.addEventListener("click", function(){

     compteur1=compteur1+1;
     compteur2=compteur2-10
       non.innerHTML = tab[compteur1];
    console.log("hello");
    compteur= compteur+20;
    oui.style.padding = compteur + "px";
    oui.style.fontSize = compteur + "px"
    oui.style.marginLeft = compteur + "px"
    non.style.padding = compteur2 + "px";   
    if ( tab===7){
        non.style.display="none";
    
       
    }
  
})


oui.addEventListener("click", function(){
    oui.style.display="none";
    non.style.display="none";
     nounours.innerHTML='<img src="./image/amours.gif" alt="nounours">'
     h1.style.display="none";
     h2.style.display="block";
});



  
