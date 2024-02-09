const non = document.querySelector(".nunh");
const oui = document.querySelector(".yuh");

let compteur =0
let tab = [ "EHH MASAKA", " TES SUR  ", " TAS ENCORE UNE SECONDE CHANCE", " TU VEUX VRAIMENT PAS ?", " VA CLIQUER SUR AVEC JOIE ", "  TU ES TROP DURE ENVERS TOI MEME", "BECAUSE IM BLACK", " ALLEZ MON MADAME CLIQUE SUR LE BOUTTON VERT", "NIGGER"];
let compteur1=0
let compteur2=0


non.addEventListener("click", function(){

     compteur1=compteur1+1;
     compteur2=compteur2-10
       non.innerHTML = tab[compteur1];

       for ( let i =0 ;i<tab.length; i++ ){
        if ( tab===7){
          break;
           
        }
      
       }
    

    console.log("hello");
    compteur= compteur+20;
    oui.style.padding = compteur + "px";
    oui.style.fontSize = compteur + "px"
    oui.style.marginLeft = compteur + "px"
    non.style.padding = compteur2 + "px";

    
})

