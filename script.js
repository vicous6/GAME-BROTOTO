// function offset(el) {
//     let rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }

// // example use
// let div = document.querySelector('div');
// let divOffset = offset(div);
// console.log(divOffset.left, divOffset.top);



    let personnage = null;
    
    let objetPlayer =  new Object();
    objetPlayer.positionX="";
    objetPlayer.positionY="";
    
    
    let ennemie1 = null;
    
    let objetEnnemi1= new Object();
    objetPlayer.positionX="10";
    objetPlayer.positionY="10";
   
    function init() {
        
         
        personnage = document.getElementById("personnage");
        
     
        
        personnage.style.position = "relative";
        
        personnage.style.backgroundColor="black"
         personnage.style.gridColumn ="50";
         personnage.style.gridRow="50";
         
         
         ennemie1 = document.getElementById("ennemie1")
         ennemie1.style.gridColumn ="10/11";
         ennemie1.style.gridRow="10/11";
         ennemie1.style.backgroundColor="red"
         updateObjectPosition(ennemie1,objetEnnemi1)
         
        objetPlayer.positionX = personnage.style.gridColumn
        objetPlayer.positionY = personnage.style.gridRow;
       
   
    }
    
    function getKeyAndMove(e) {
        // console.log("truc")
       
        let key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
            // change le css du player
                moveLeft(personnage, objetPlayer);
                // update la position du player dans l'objet
                
              updateObjectPosition(personnage, objetPlayer)
                break;
            case 38: //Up arrow key
                moveUp(personnage, objetPlayer);
              updateObjectPosition(personnage,objetPlayer)
                break;
            case 39: //right arrow key
                moveRight(personnage, objetPlayer);
              updateObjectPosition(personnage,objetPlayer)
                break;
            case 40: //down arrow key
                moveDown(personnage, objetPlayer);
              updateObjectPosition(personnage,objetPlayer)
                break;
        }
    }
    
    
    function moveLeft(elem , objet) {
         if(elem.style.gridColumn === "1 / auto"){
             elem.style.gridColumn = parseInt(elem.style.gridColumn) + 1;
             
         }else{
            elem.style.gridColumn = parseInt(elem.style.gridColumn) - 1; 
         }
      updateObjectPosition(elem,objet)
         
    }
    function moveUp(elem, objet) {
        // console.log(elem.style.gridRow)
        if( elem.style.gridRow ==="1 / auto"){
             elem.style.gridRow = parseInt(elem.style.gridRow) + 1 ;
        }else{
            elem.style.gridRow = parseInt(elem.style.gridRow) - 1 ;
       
        }
         
   updateObjectPosition(elem,objet)
    }
    function moveRight(elem,objet) {
       
        if(elem.style.gridColumn === "100 / auto"){
             elem.style.gridColumn = parseInt(elem.style.gridColumn) - 1;
        }else{
            elem.style.gridColumn = parseInt(elem.style.gridColumn) + 1; 
        }
       updateObjectPosition(elem,objet)
        
    }
    function moveDown(elem,objet) {
        if( elem.style.gridRow ==="100 / auto"){
             elem.style.gridRow = parseInt(elem.style.gridRow) - 1;
        }else{
             elem.style.gridRow = parseInt(elem.style.gridRow) + 1;
        }
       
    updateObjectPosition(elem,objet)  
    }
    
      function ennemieMoove (elem) {
    // console.log(`Je suis l'ennemi et j'ai bougé`);
//   console.log(objetPlayer.positionX,objetPlayer.positionY)
  
    // elem.style.gridColumn = parseInt(elem.style.gridColumn) + 1;
    // moveTo(objetEnnemi1,objetPlayer)
    // moveRight(ennemie1,objetEnnemi1)
    moveTo(elem,objetEnnemi1,objetPlayer)
};

// objet 1 se deplace vers objet 2
function moveTo (mob1,objetMob1, objetCible ){
    // console.log("objet")
    let mob1X="";
    let mob1Y= "";
    
    let objetCible2X ="";
    let objetCible2Y="";
    
    for(let i = 0; i< 2; i++){
        
        mob1X += mob1.style.gridColumn[i];
        mob1Y += mob1.style.gridRow[i];
        
        objetCible2X  += objetCible.positionX[i];
        objetCible2Y  += objetCible.positionY[i];
    }
    
    // console.log(typeof( mob1X,mob1Y))
    // console.log(typeof(objetCible2X,objetCible2Y))
    
    if(parseInt(objetCible2X) < parseInt(mob1X) ){
        
        moveLeft(ennemie1,objetEnnemi1)
        console.log("1")
        
    }else if(parseInt(objetCible2X) < parseInt(mob1X)){
        
         moveRight(ennemie1,objetEnnemi1)
         console.log("2")
    }else if(parseInt(objetCible2Y) >parseInt( mob1Y) ){
        
      moveDown(ennemie1,objetEnnemi1)
         console.log("3")
    }else if(parseInt(objetCible2Y) > parseInt(mob1Y)){
        
         moveUp(ennemie1,objetEnnemi1)
         console.log("4")
    }
    // updateObjectPosition()
}



function goTo (elem ,cibleX ,cibleY ){
    

}
// update la position  du mob vers son objet
function updateObjectPosition(elem, objet){
    
    objet.positionX = elem.style.gridColumn;
        objet.positionY = elem.style.gridRow;
 
            
            // console.log(elem.style.gridColumn[0],elem.style.gridColumn[1])
            // console.log(elem.style.gridRow[0],elem.style.gridRow[1])
            // console.log(objetEnnemi1.positionX,objetEnnemi1.positionY)
            console.log(objetEnnemi1)
            console.log(objetPlayer)
       
}


    window.addEventListener('DOMContentLoaded', (event) => {
    init();

  

    setInterval(ennemieMoove, 1000, ennemie1);
    
    
    
    
});
  
  
  
