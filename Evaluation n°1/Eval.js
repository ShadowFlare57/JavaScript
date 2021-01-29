function calcul() 
{
    var marque = document.getElementById('marquev').value;
    var modele = document.getElementById('modelev').value;
    var carburant = document.getElementById('carburantv').value;
    var origine = document.getElementById('originev').value;
    var kilometre = document.getElementById('nbrkm').value;
    var valeur = document.getElementById('valeurv').value;
    var travaux = document.getElementById('travauxv').value;

    if (kilometre > 50000)
    {
        document.getElementById('button').style.display="none";
    }

    if (marque != '' && modele !='' && carburant !='' && origine !='' && kilometre !='' && valeur !='' && travaux !='')
    {
        document.getElementById('erreurm').style.display="none";
        document.getElementById('erreurmo').style.display="none";
        document.getElementById('erreurc').style.display="none";
        document.getElementById('erreuro').style.display="none";
        document.getElementById('erreurkm').style.display="none";
        document.getElementById('erreurva').style.display="none";
        document.getElementById('erreurtr').style.display="none";
        document.getElementById('button').style.display="block";
    }
    else {
        document.getElementById('erreurm').innerHTML="Veuillez compléter le champ";
        document.getElementById('erreurmo').innerHTML="Veuillez compléter le champ";
        document.getElementById('erreurc').innerHTML="Veuillez compléter le champ";
        document.getElementById('erreuro').innerHTML="Veuillez compléter le champ";
        document.getElementById('erreurkm').innerHTML="Veuillez compléter le champ";
        document.getElementById('erreurva').innerHTML="Veuillez compléter le champ";
        document.getElementById('erreurtr').innerHTML="Veuillez compléter le champ";
    }
}
function calcultotal() {
    var marque = document.getElementById('marquev').value;
    var modele = document.getElementById('modelev').value;
    var carburant = document.getElementById('carburantv').value;
    var origine = document.getElementById('originev').value;
    var kilometre = document.getElementById('nbrkm').value;
    var valeur = document.getElementById('valeurv').value;
    var travaux = document.getElementById('travauxv').value;

    var marqueE = document.getElementById('marqueE');
    var modeleE = document.getElementById('modeleE');
    var carburantE = document.getElementById('carburantE');
    var origineE = document.getElementById('origineE');
    var nbrkmE = document.getElementById('nbrkmE');
    var travauxvE = document.getElementById('travauxvE');
    var estimation = document.getElementById('estimationE');
    var result;

    if (marque != "" && modele != "" && carburant != "" && origine !="" && kilometre !="" && valeur !="" && travaux !=""){
        
       
        if (origine == "France" && carburant == "Essence" && travaux == "Oui"){
            result = valeur - (kilometre * 0.10);
        }
      
        else if (origine == "France" && carburant == "Essence" && travaux == "Non"){
            result = valeur - (kilometre * 0.09);
        }
        
        else if (origine == "France" && carburant == "Diesel" && travaux == "Oui"){
            result = valeur - (kilometre * 0.11);
        }
        
        else if (origine == "France" && carburant == "Diesel" && travaux == "Non"){
            result = valeur - (kilometre * 0.10);
        }
      
        else if (origine == "Allemagne" && carburant == "Essence" && travaux == "Oui"){
            result = valeur - (kilometre * 0.06);
        }
      
        else if (origine == "Allemagne" && carburant == "Essence" && travaux == "Non"){
            result = valeur - (kilometre * 0.08);
        }
   
        else if (origine == "Allemagne" && carburant == "Diesel" && travaux == "Oui"){
            result = valeur - (kilometre * 0.10);
        }

        else if (origine == "Allemagne" && carburant == "Diesel" && travaux == "Non"){
            result = valeur - (kilometre * 0.09);
        }

        else if (origine == "Italie" && carburant == "Essence" && travaux == "Oui"){
            result = valeur - (kilometre * 0.5);
        }
       
        else if (origine == "Italie" && carburant == "Essence" && travaux == "Non"){
            result = valeur - (kilometre * 0.07);
        }
    
        else if (origine == "Italie" && carburant == "Diesel" && travaux =="Oui"){
            result= valeur - (kilometre * 0.09);
        }
  
        else if (origine == "Italie" && carburant == "Diesel" && travaux == "Non"){
            result = valeur - (kilometre * 0.08);
        }
    }
    document.getElementById('result').style.display="block";
    document.getElementById('formu').style.display="none";
    marqueE.innerHTML= document.getElementById('marquev').value;
    modeleE.innerHTML= document.getElementById('modelev').value;
    carburantE.innerHTML= document.getElementById('carburantv').value;
    origineE.innerHTML= document.getElementById('originev').value;
    nbrkmE.innerHTML= document.getElementById('nbrkm').value;
    travauxvE.innerHTML= document.getElementById('travauxv').value;
    estimation.innerHTML= result+ ' €';

    }