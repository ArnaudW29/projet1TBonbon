function connexion() {
    document.getElementById("connexion").innerHTML = "<div id=\"connexionH\">\n" +
        "    <form id=\"formulaire_connexion\" action=# onsubmit=\"connexionCommande(this); return false;\">\n" +
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
