function connexion() {
    document.getElementById("connexion").innerHTML = "<div id=\"connexionH\">\n" +
        "    <form id=\"formulaire_connexion\" action=# onsubmit=\"connexionCommande(); return false;\">\n" +
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
function connexionCommande(){
    let clientClient={};
    let xhr =  new XMLHttpRequest();
    xhr.open('get','getconnexion?id='+gid('identifiant').value+'&mdp='+gid('mdp').value,false);
    xhr.onload = function (){
        clientClient = JSON.parse(xhr.responseText);
        if(Object.keys(clientClient).length === 0){
            document.getElementById("clientConnected").innerHTML="<p class='error'> Mauvais identifiant ou mauvais mot de passe</p>";
        }
        else{
            console.log(clientClient)
            document.getElementById("connexion").innerHTML="";
            document.getElementById("clientConnected").innerHTML="Actuellement connecté(e): " +"<strong>"+(clientClient[0].clientPrenom).toUpperCase()+"</strong>";
            document.getElementById("clientConnected").innerHTML+="<br><button id='boutonDeconnexion' class='boutonDeconnexion' onclick='deco();'>Deconnexion</button>";
        }
    };
    xhr.send();

}
function deco(){
    document.getElementById("clientConnected").innerHTML="";
    connexion();
}