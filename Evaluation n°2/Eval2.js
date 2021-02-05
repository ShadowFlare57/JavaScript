        /* Formulaire */

        function form(gruik) {
            let flag = true;
            if (gruik.value == "") {
                gruik.style.border = "red 1px solid";
                flag = false;
                gruik.focus();
            } else {
                gruik.style.border = "black 1px solid";
            }
            return flag
        }
        
        function Nbr(gruik) {
            let flag = true;
            if (gruik.value != "" && gruik.value.match(/^\d{0,}$/)) {
                gruik.style.border = "black 1px solid";
            } else {
                gruik.style.border = "red 1px solid";
                flag = false;
            }
            return flag
        }
        // voir si sa existe
        const race = document.getElementById('race');
        const nom = document.getElementById('nom');
        const color = document.getElementById('color');
        const œuf = document.getElementById("œuf");
        const nbrJ = document.getElementById('nbrœuf');
        
        class Poule{
            constructor(race,nom,color,œuf,nbrJ){
                this.race = race,
                this.nom = nom,
                this.color = color,
                this.œuf = œuf,
                this.nbrJ = nbrJ;
            }
        }
        
        let poulailler = [];
        
        function existe() {
            if (poulailler.find(i => i.nom == nom.value)) {
                let p = document.createElement("p");
                p.textContent = "Ce nom est déjà pris !";
                p.id = "existe";
                nom.insertAdjacentElement("afterend",p);
                nom.style.border = "red 1px solid";
                nom.focus();
            } else {
                try{
                    let p = document.getElementById("existe");
                    p.remove();
                }catch{}
                poulailler.push(new Poule(race.value, nom.value, color.value, œuf.value, +nbrJ.value));
                let p = document.createElement("p");
                p.textContent = nom.value+" a été rajouté";
                p.id = "raj";
                nbrJ.insertAdjacentElement("afterend",p);
                race.value = "";
                nom.value = "";
                color.value = "";
                œuf.value = "";
                nbrJ.value = "";
                race.focus();
            }
        }
        
        // Fonction rajouter
        
        function rajouter() {
            let ok = 0;
            try{
                let p = document.getElementById("raj");
                p.remove();
            }catch{}
        
        
            if (Nbr(nbrJ)) {
                ok++ ;
            }
            for (i of [œuf,color,nom,race]) {
                if (form(i)){
                    ok++ ;
                }
            }
            if (5 == ok) {
                existe();
            }
            return false
        }
        
        /*  Tableau */
        const tabBody = document.getElementsByTagName("tbody")[0];
        const tabTotal = document.getElementById('tabTotal');
        
        function remplirTab() {
            let s;
            let m;
            let a;
            let tt = 0;
            let somme =0;
            let texte = "";
            for (i of poulailler) {
                s = Math.ceil(i.nbrJ*7);
                m = Math.ceil((s-(s*0.05))*4.33);
                a = Math.ceil( m*12);
                tt = 0;
                switch (i.œuf) {
                    case "beige":
                        tt = Math.ceil(a*1);
                        break;
                    case "bleu":
                        tt = Math.ceil(a*1.2);
                        break;
                    case "vert":
                        tt = Math.ceil(a*1.3);
                        break;
                    case "brun":
                        tt = Math.ceil(a*2);
                        break;
                    case "blanc":
                        tt = Math.ceil(a*1.6);
                        break;
                }
                somme += tt;
                texte += '<tr>'+
                '<td>'+i.race+'</td>'+
                '<td>'+i.nom+'</td>'+
                '<td>'+i.color+'</td>'+
                '<td>'+i.œuf+'</td>'+
                '<td>'+i.nbrJ+'</td>'+
                '<td>'+s+'</td>'+
                '<td>'+m+'</td>'+
                '<td>'+a+'</td>'+
                '<td>'+tt+' €</td>'+
                '</tr>';
            }
            tabBody.innerHTML = texte;
            tabTotal.innerText = somme+" €";
        }
        
        // Bouton "Voir"
        const formulaire = document.getElementsByTagName('form')[0];
        const formTab = document.getElementsByTagName('form')[1];
        
        function affichage(){
            formulaire.style.display = "none";
            formTab.style.display = "block";
            remplirTab();
        }
        function Voir() {
            formulaire.style.display = "flex";
            formTab.style.display = "none";
            return false
        }