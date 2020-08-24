"use strict";
let clientClient={};
let mail = "";
let identifi ="";
let panierNbr="";
let QteBonbon = 0;
let panierHisto = {};
let montantTot2 = 0;
function connexion() {
    gid("connexion").innerHTML = "<div id=\"connexionH\">\n" +
        "    <form id=\"formulaire_connexion\" action=# onsubmit=\"connexionPanier();rem2();return false;\">\n" +
        "<!-- username du client -->\n" +
        "<label for=\"indentifiant\">Identifiant : </label>\n" +
        "<input id=\"identifiant\" name=\"identifiant\" type=\"text\" required placeholder=\"Admin\"><br>\n" +
        "    <!-- mot de passe du client-->\n" +
        "<label for=\"mdp\">Mot de passe : </label>\n" +
        "<input id=\"mdp\" name=\"mdp\" type=\"password\" required placeholder=\"password\"><br>\n" +
        "    <!-- Button de connexion -->\n" +
        "<input id=\"boutonConnexion\" class=\"boutonConnexion\" type=\"submit\" value=\"Connexion\">\n" +
        "    </form>\n" +
        "    </div>";
    gid('textco').innerHTML = "Si vous avez "+"<strong>"+"deja "+"</strong>"+"un compte veuillez vous identifier ci dessous, sinon inscrivez vous "+"<strong>"+"<a href='inscription.html' class='inscription'>"+"ici"+"</a>"+"</strong>"+".";
}
function connexionCatal() {
    gid("connexion").innerHTML = "<div id=\"connexionH\">\n" +
        "    <form id=\"formulaire_connexion\" action=# onsubmit=\"connexionCata();rem();return false;\">\n" +
        "<!-- username du client -->\n" +
        "<label for=\"indentifiant\">Identifiant : </label>\n" +
        "<input id=\"identifiant\" name=\"identifiant\" type=\"text\" required placeholder=\"Admin\"><br>\n" +
        "    <!-- mot de passe du client-->\n" +
        "<label for=\"mdp\">Mot de passe : </label>\n" +
        "<input id=\"mdp\" name=\"mdp\" type=\"password\" required placeholder=\"password\"><br>\n" +
        "    <!-- Button de connexion -->\n" +
        "<input id=\"boutonConnexion\" class=\"boutonConnexion\" type=\"submit\" value=\"Connexion\">\n" +
        "    </form>\n" +
        "    </div>";
}
function connexionHistorique(){
    gid("connexion").innerHTML = "<div id=\"connexionH\">\n" +
        "    <form id=\"formulaire_connexion\" action=# onsubmit=\"Historique();rem();return false;\">\n" +
        "<!-- username du client -->\n" +
        "<label for=\"indentifiant\">Identifiant : </label>\n" +
        "<input id=\"identifiant\" name=\"identifiant\" type=\"text\" required placeholder=\"Admin\"><br>\n" +
        "    <!-- mot de passe du client-->\n" +
        "<label for=\"mdp\">Mot de passe : </label>\n" +
        "<input id=\"mdp\" name=\"mdp\" type=\"password\" required placeholder=\"password\"><br>\n" +
        "    <!-- Button de connexion -->\n" +
        "<input id=\"boutonConnexion\" class=\"boutonConnexion\" type=\"submit\" value=\"Connexion\">\n" +
        "    </form>\n" +
        "    </div>";
}
function envoisInscription(form){
    let xhr = new XMLHttpRequest();
    xhr.open('get','insertInscription?Nom='+form.nomInscr.value+'&Prenom='+form.prenomInscr.value+'&Adresse='+form.adrInscr.value+'&Identifiant='+form.identifiantInscr.value+'&Mdp='+form.mdpInscr.value+'&Mail='+form.emailInscr.value);
    xhr.onload =
        function() {
        if(mail === 0 && identifi === 0){
            alert("Inscriptions reussite");
            gid('textco3').innerText = "";
        } else if (mail=== 1 && identifi === 1 ){
            gid('textco3').innerText = "Veuillez changer l'email et l'identifiant ! ";
        } else if(mail === 1) {
            gid('textco3').innerText = "Veuillez changer l'email !";
        } else if(identifi === 1){
            gid('textco3').innerText = "Veuillez changer l'identifiant !";
        }
        };
    xhr.onerror=function (){
        alert("xhr error");
    };
    xhr.send();
}


function rem(){
    gid('textco2').innerText ="";
}
function rem2(){
    gid('textco').innerText ="";
}
function storedCo(){
    if (sessionStorage.length === 4){
        clientClient = [{clientId: sessionStorage.getItem('clientId'),mdp: sessionStorage.getItem('mdp'),clientPrenom: sessionStorage.getItem('clientPrenom'),identifiant: sessionStorage.getItem('identifiant')}];
        gid("connexion").innerHTML="";
        gid('textco2').innerText ="";
        gid("deconnexion").innerHTML="Actuellement connecté(e): " +"<strong>"+(sessionStorage.getItem('clientPrenom')).toUpperCase()+"</strong>";
       gid("deconnexion").innerHTML+="<br><button id='boutonDeconnexion' class='boutonDeconnexion' onclick='decoCata();'>Deconnexion</button>";
    } else{
        connexionCatal()
    }
}
function storedCoHistorique(){
    if (sessionStorage.length === 4){
        clientClient = [{clientId: sessionStorage.getItem('clientId'),mdp: sessionStorage.getItem('mdp'),clientPrenom: sessionStorage.getItem('clientPrenom'),identifiant: sessionStorage.getItem('identifiant')}];
        gid("connexion").innerHTML="";
        gid('textco2').innerText ="";
        gid("deconnexion").innerHTML="Actuellement connecté(e): " +"<strong>"+(sessionStorage.getItem('clientPrenom')).toUpperCase()+"</strong>";
        gid("deconnexion").innerHTML+="<br><button id='boutonDeconnexion' class='boutonDeconnexion' onclick='decoHisto();'>Deconnexion</button>";
    } else{
        connexionHistorique()
    }
}

function connexionPanier(){
    let xhr =  new XMLHttpRequest();
    xhr.open('get','getconnexion?id='+gid('identifiant').value+'&mdp='+gid('mdp').value,true);
    xhr.onload = function (){
        clientClient = JSON.parse(xhr.responseText);
        if(clientClient.length === 0 ){
            gid("textco").innerHTML="<p class='error'> mauvais identifiant ou mauvais mot de passe</p>";
        }
        else{
            storeConnexion();
            loadpanier();
            gid("connexion").innerHTML="";
            gid("deconnexion").innerHTML="Actuellement connecté(e): " +"<strong>"+(clientClient[0].clientPrenom).toUpperCase()+"</strong>";
           gid("deconnexion").innerHTML+="<br><button id='boutonDeconnexion' class='boutonDeconnexion' onclick='deco();'>Deconnexion</button>";
        }
    };
    xhr.send();
}function connexionCata(){
    let xhr =  new XMLHttpRequest();
    xhr.open('get','getconnexion?id='+gid('identifiant').value+'&mdp='+gid('mdp').value,true);
    xhr.onload = function (){
        clientClient = JSON.parse(xhr.responseText);
        if(clientClient.length === 0 ){
           gid("textco2").innerHTML="<p class='error'> mauvais identifiant ou mauvais mot de passe</p>";
        }
        else{
            storeConnexion();
            gid("connexion").innerHTML="";
            gid('textco2').innerHTML = "";
            gid("deconnexion").innerHTML="Actuellement connecté(e): " +"<strong>"+(clientClient[0].clientPrenom).toUpperCase()+"</strong>";
           gid("deconnexion").innerHTML+="<br><button id='boutonDeconnexion' class='boutonDeconnexion' onclick='decoCata();'>Deconnexion</button>";
        }
    };
    xhr.send();
}

function storedCoPanier(){
    if (sessionStorage.length === 4){
        clientClient = [{clientId: sessionStorage.getItem('clientId'),mdp: sessionStorage.getItem('mdp'),clientPrenom: sessionStorage.getItem('clientPrenom'),identifiant: sessionStorage.getItem('identifiant')}];
        gid("connexion").innerHTML="";
        gid('textco').innerHTML ="";
        gid("deconnexion").innerHTML="Actuellement connecté(e): " +"<strong>"+clientClient[0].clientPrenom.toUpperCase()+"</strong>";
        gid("deconnexion").innerHTML+="<br><button id='boutonDeconnexion' class='boutonDeconnexion' onclick='deco();'>Deconnexion</button>";
    } else{
        connexion();
    }
}
function storeConnexion(){
    sessionStorage.setItem('clientId',clientClient[0].clientId);
    sessionStorage.setItem('clientPrenom',clientClient[0].clientPrenom);
    sessionStorage.setItem('mdp',clientClient[0].mdp);
    sessionStorage.setItem('identifiant',clientClient[0].identifiant);
}
/**
 * @type {XMLHttpRequest}
 * @result : introduit les param dans la table "tbPanier" dans la base de donnée
 * @param bonbonNom, nom du bonbon
 * @param bonbonId, id du bonbon
 * @param marqueNom, nom de la marque du bonbon
 * @param bonbonQte, poids pour chaque bonbon
 * @param qtt,  quantite selectionner/souhaiter par le client
 * fonction qui ajoute le bonbon et la quantité souhaité par le client dans la table "tbPanier" dans la base de donnée
 */
function ajoutBonbon(bonbonNom,bonbonId,marqueNom,bonbonQte,qtt){
    if(Object.keys(clientClient).length ===0){
        alert("Veuillez vous connecter");
        return false;
    }
    let xhr = new XMLHttpRequest();
    xhr.open('get','proc_insertPanier?id='+clientClient[0].clientId+'&bId='+bonbonId+'&Qte='+qtt);
    xhr.onload=function(){
    };
    xhr.send();
    alert("L'article a été ajouté a votre panier");
}
function checkFirstVisit() {
    if(document.cookie.indexOf('mycookie')===-1) {
        // cookie doesn't exist, create it now
        document.cookie = "test";
    }
    else {
        console.log('You refreshed!');
    }
}
function loadpanier(){
    let clientId = sessionStorage.getItem('clientId');
    if (sessionStorage.length === 4){
        panier(clientId);
    }else {
        connexion();
    }
}

function panier(){
    let montantTot=0;
    let xhr = new XMLHttpRequest();
    xhr.open('get','proc_getPanier?Id='+clientClient[0].clientId,false);
    xhr.onload = function() {
        panierHisto = Object.assign(panierHisto,JSON.parse(xhr.responseText));
        let parse = JSON.parse(xhr.responseText);
        let rep = parse.length;
        panierNbr = parse.length;
        if (rep === 0) {
            gid("panier").innerHTML="<table border=\"1\" cellpadding=\"10\" cellspacing=\"1\" id=\"tabPanier\"> </table>";
            gid('panierVide').innerHTML = "Votre panier est actuellement vide , pour le remplir c'est " + "<strong><a href='bonbon.html' id='panierVide2'>ICI </a></strong>" + "!";
            gid('prixtot').innerHTML ="";
            gid('commander&suppr').innerHTML ="";
        } else {
            let str = "";
            str += "<thead><th>Nom du bonbon</th><th>Marque</th><th>Poids en gramme pour une ration de bonbon</th><th>Prix pour une ration de bonbon</th><th>Quantite Totale</th><th>Prix total</th></thead><tbody>";
            for (let x of parse) {
                QteBonbon += x.QttBonbon;
                let id = x.bonbonId;
                let cId= clientClient[0].clientId;
                str += "<tr class='row' id=" + id + " ><td>" + x.bonbonNom + "</td><td>" + x.marqueNom  + "</td><td>" + x.bonbonQte + " g" + "</td><td>" + (x.bonbonPrix).toFixed(2)
                    + " €" + "</td><td id='qtt'>" + x.QttBonbon + "</td><td>" + (x.prixTot).toFixed(2) + " €" + "</td>";
                str += "<td><input type='submit' id='imageSuppression' value='' onclick='suppr(" + '"' + id + '"' +','+'"' + cId + '"'+ ");'></td></tbody>";
            }
            for (let y of parse) {
               montantTot += y.prixTot;
               montantTot2 += y.prixTot;
            }
            gid('prixtot').innerHTML =  "<b class='Somme'>Total : </b>"  + montantTot.toFixed(2) + " €" ;
            gid('tabPanier').innerHTML = str;
            gid('commander&suppr').innerHTML = "<input type='submit' id='suppr' class='boutonSuppr' value='Vider votre panier' onclick='videPanier(" + '"' + clientClient[0].clientId + '"' + ");'>" +"<input type='submit' id='commander' class='boutonCommander' value='Commander' onclick='commander("+'"'+clientClient[0].clientId+'"'+");'> ";
        }
    };
    montantTot2 = montantTot;
    xhr.send();
}
function commander(clientId){
let commandesId = "";
    montantTot2.toFixed(2);
 let xhr = new XMLHttpRequest();
    xhr.open('get','proc_getCommandesId', false);
    xhr.onload = function(){
        let parse = JSON.parse(xhr.responseText);
        commandesId = (parse.length)+1;
    };
    xhr.send();
    xhr = new XMLHttpRequest();
    xhr.open('get','proc_insertCommandes?commId='+commandesId+'&clId='+clientId+'&commPrixTOT='+montantTot2+'&commQteTOT='+QteBonbon, false);
    xhr.onload = function(){
    };
    xhr.send();
    videPanier(clientId);
   gid('panierVide').innerHTML = "Votre commande est passée, si vous voulez commander de nouveau, cliquez "+"<strong>"+"<a href='bonbon.html' id='panierVide2'>"+"ICI"+"</a>"+"</strong>";
}
function Historique(){
   let xhr =  new XMLHttpRequest();
    xhr.open('get','getconnexion?id='+gid('identifiant').value+'&mdp='+gid('mdp').value,true);
    xhr.onload = function (){
        clientClient = JSON.parse(xhr.responseText);
        if(clientClient.length === 0 ){
            gid("textco2").innerHTML="<p class='error'> mauvais identifiant ou mauvais mot de passe</p>";
        }
        else{
            storeConnexion();
            getHisto();
            gid("connexion").innerHTML="";
            gid('textco2').innerHTML = "";
            gid("deconnexion").innerHTML="Actuellement connecté(e): " +"<strong>"+(clientClient[0].clientPrenom).toUpperCase()+"</strong>";
            gid("deconnexion").innerHTML+="<br><button id='boutonDeconnexion' class='boutonDeconnexion' onclick='decoHisto();'>Deconnexion</button>";
        }
    };
    loadHisto();
    xhr.send();
}
function getHisto(){
let historique = {};
let strRetour = "";
    let commandesId = "";
    let xhr = new XMLHttpRequest();
    xhr.open('get','proc_getCommandesId', false);
    xhr.onload = function(){
        let parse = JSON.parse(xhr.responseText);
        commandesId = (parse.length)+1;
    };
    xhr.send();

    xhr = new XMLHttpRequest();
    xhr.open('get','proc_getCommandes?clId='+ clientClient[0].clientId,false);
    xhr.onload= function (){
       historique= Object.assign(historique,JSON.parse(xhr.responseText));
    };
    xhr.send();
    strRetour +="<table class='tableCommande'>"+"<thead><th>Commandes n° </th><th>Prix Total</th><th>Quantité de la commande</th><th>Date de la commande</th></thead>";
    let count = 1;
    for(let z in historique) {
        strRetour += "<tr id="+ historique[z].commandesId +"><td>"+ count +"</td>"
            + "<td>" + historique[z].commandesPrixTOT + " € </td>"
            + "<td>" + historique[z].commandesQteTOT+ " </td>"
            + "<td>" + historique[z].commandesDate.substr(0,16) + "</td>"+"</tr>";
        count++;
    }
    gid("recivComm").innerHTML = strRetour;
}
function loadHisto(){
    let clientId = sessionStorage.getItem('clientId');
    if (sessionStorage.length === 4){
        getHisto(clientId);
    }else {
        connexionHistorique();
    }
}
/**
 * Envoit une requete HTTP XML afin d'aller supprimer une ligne du client dans la table "tbPanier"
 * @type {XMLHttpRequest}
 * @result : supprime une ligne de la table "tbPanier" dans la base de donnée en fonction de l'id du bonbon et du client connecté et affiche le panier du client sans la ligne qu'on viens de supprimer
 * @param bonbonId, id du bonbon
 * @param cId, id du client connecté sur le site
 */
function suppr(bonbonId,cId) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'proc_suppressionPanier?bId=' + bonbonId +"&clId="+cId, false);
    xhr.onload = function() {
    };
    xhr.send();
    gid(bonbonId).remove();
    QteBonbon = 0;
    panier();

}
/**
 * Envoit une requete HTTP XML afin d'aller supprimer toutes les lignes du client dans la table "tbPanier"
 * @type {XMLHttpRequest}
 * @result : supprime toutes les lignes de la table "tbPanier" dans la base de donnée en fonction de son id et qui affiche le panier vide du client
 * @param clientId, id du client connecté sur le site
 */
function videPanier(clientId){
    let xhr = new XMLHttpRequest();
    xhr.open('get','proc_suppressionPanierComplet?clId='+clientId, false);
    xhr.onload = function (){
    };
    xhr.send();
    panier();
}
/**
 * fonction qui déconnecte l'utilisateur actuel et qui enleve l'affichage du panier du client et re affiche le formulaire de connexion
 * pour que un autre utilisateur puisse se connecter
 */
function deco(){
    gid("deconnexion").innerHTML="";
    gid('textco').innerHTML = "Si vous avez <strong>deja </strong> un compte veuillez vous identifier ci dessous, sinon inscrivez vous <strong><a href=\"\"inscription.html\" class=\"\inscription\">ici</a></strong>."
    gid("panier").innerHTML="<table border=\"1\" cellpadding=\"10\" cellspacing=\"1\" id=\"tabPanier\"> </table>";
    gid('prixtot').innerHTML ="";
    gid('panierVide').innerHTML = "";
    gid('commander&suppr').innerHTML ="";
    sessionStorage.clear();
    connexion();
}
/**
 * fonction qui déconnecte l'utilisateur actuel et re affiche le formulaire de connexion
 * pour que un autre utilisateur puisse se connecter
 */
function decoCata(){
    gid("deconnexion").innerHTML="";
    gid('textco2').innerHTML =  "Si vous avez <strong>deja </strong> un compte veuillez vous identifier ci dessous, sinon inscrivez vous <strong><a href=\"\"inscription.html\" class=\"\inscription\">ici</a></strong>."
    sessionStorage.clear();
    connexionCatal();
}
/**
 * fonction qui déconnecte l'utilisateur actuel et qui enleve l'affichage de l'historique du client  et re affiche le formulaire de connexion
 * pour que un autre utilisateur puisse se connecter
 */
function decoHisto(){
    gid("deconnexion").innerHTML="";
    gid('recivComm').innerHTML = "";
    gid('textco2').innerHTML =  "Si vous avez <strong>deja </strong> un compte veuillez vous identifier" + " ci dessous, sinon inscrivez vous <strong><a href=\"\"inscription.html\" class=\"\inscription\">ici</a></strong>.";
    sessionStorage.clear();
    connexionHistorique();
}
/**
 * Fait une requete HTTP XML pour envoyer l'identifiant introduit par le client
 * @type {XMLHttpRequest}
 * @result : recois un array d'objet remplis si l'identifiant est deja utilisé sinon un array d'objet vide
 * @param identifiant, identifiant rentre dans le form par l'utilisateur
 * fonction qui verifie si l'identifaint entrée par l'utilisateur est deja dans la "tbClient" dans la base de donnée
 */
function verifIdentifiant(identifiant){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'proc_verifIdentifiant?id='+identifiant,true);
    xhr.onload =function x(){
        let parse = JSON.parse(xhr.responseText);
        let rep = parse.length;
        identifi = parse.length;
        if(rep === 1){
        gid('verifGood').textContent="";
        gid('verifBad').textContent = "L'identifiant existe déjà !";
        }
        else {
        gid('verifBad').textContent ="";
        gid('verifGood').textContent ="L'identifiant est disponible !";
        }
}.
xhr.send();
}
/**
 * Fait une requete HTTP XML pour envoyer le mail introduit par le client
 * @type {XMLHttpRequest}
 * @result : recois un array d'objet remplis si le mail est deja utilisé sinon un array d'objet vide
 * @param Mail, mail rentre dans le form par l'utilisateur
 * fonction qui verifie si le mail entrée par l'utilisateur est deja dans la "tbClient" dans la base de donnée
 */
function verifMail(Mail){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'proc_verifMail?Mail='+Mail,true);
    xhr.onload =function x(){
        let parse = JSON.parse(xhr.responseText);
        let rep = parse.length;
        mail = parse.length;
        if(rep === 1){
            gid('verifMailGood').textContent ="";
            gid('verifMailBad').textContent = "L'email est deja utilisé!";
        }
        else {
            gid('verifMailBad').textContent ="";
            gid('verifMailGood').textContent ="L'email n'est pas encore utilisé !";
        }

    };
    xhr.send();
}