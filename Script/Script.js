var couleurJaune = document.getElementById("bouton1"); // Bouton pour mettre en jaune //

var couleurBleu = document.getElementById("bouton2"); // Bouton pour mettre en bleu //

var taille300Px = document.getElementById("bouton3"); // Bouton pour agrandire 300px //

var effacerCarre = document.getElementById("bouton4"); // Bouton pour effacer le carré //

var reset = document.getElementById("bouton5"); // Bouton pour rénitialiser //

var ajout50Px = document.getElementById("bouton6"); // Bouton pour agrandire de 50px //

var clique  =0;

var isActivated = false;

couleurJaune.addEventListener("click",
        function(){   
                rouge.style.backgroundColor= "yellow";    
            }               
);
couleurBleu.addEventListener("click",
        function(){
                rouge.style.backgroundColor= "Blue";
            }
);
taille300Px.addEventListener("click",
            function() {
                    rouge.style.width= "300px";
                    rouge.style.height= "300px";    
            }
);
effacerCarre.addEventListener("click",
            function(){           
                    rouge.style.display="none";              
            }
)
reset.addEventListener("click",
            function refresh(){
                window.location.reload(false);                   
            }
);
ajout50Px.addEventListener("click",
            function(){
                if (clique = 1) {
                   




                }

            }
)
