function gid(id){
    return document.getElementById(id);
}
/**
 * Envois une requete HTTP XML afin d'aller chercher la liste de tout les bonbons pour initialiser le catalogue de bonbon
 * @type {XMLHttpRequest}
 * @result : la variable unBonbon recoit toutes les donnees d'un bonbon en fonction de son id
 */

function initBonbon() { // Initialise la page avec le catalogue de bonbon
    let xhr = new XMLHttpRequest();
    xhr.open('get', "http://localhost:82/initBonbon", true);
    xhr.onload =
        function manageReponse() {
            let rep = JSON.parse(xhr.responseText);
            let unBonbon= "";
            let c= "";
            for(let i of rep){
                c++
                if(c > 4)
                {

                    c = 1;
                }
                unBonbon +=
                    "<div class='sectionUnBonbon" + c+"'>" +
                    "<div class='photoBonbon'>" +
                    "<img id='photo" + i.bonbonId +"' src='img/" + i.bonbonId + ".png' alt='"+ i.bonbonNom +"'>" +
                    "</div>" +
                    "<div class='info'>" + "" +
                    "<span class='nomBonbon'>" + i.bonbonNom + "</span>"+" " +
                    "<span class='marqueBonbon'>"+ i.marqueNom+"</span><br>" +
                    "<span class='typeBonbon'>"+ i.bonbonType+"</span><br>" +
                    "<span class='QteBonbon'>"+ i.bonbonQte +"</span><br>" +
                    "<span class='prixBonbon'>"+ i.bonbonPrix + "€</span></div>" +
                    "<div id='formAjout"+i.bonbonId+"'>" +
                    "<form action='#' onsubmit='ajoutBonbon("+'"'+i.bonbonNom+'","'+i.bonbonId+'","'+i.marqueNom+'","'+i.bonbonQte+'",this.qtt.value'+','+i.bonbonPrix+"); return false;'>" +
                    "<input id='input"+i.bonbonId+"'  class='cbBonbon' name='qtt' type='number' min='1' value='0' step='1'>" +
                    "<input type='submit' value='Ajouter' class='ajoutBonbon'></form></div></div>";
            }

            gid("bonbon").innerHTML = unBonbon;
        };
    xhr.send();
}
