# 1T-projet-bonbon
Voici le repository pour mon projet de confiserie en ligne.

2019 - 2020 Aspects Structures et Données

 ![Image de l'ephec](https://i.imgur.com/k1pB47i.png?1)
## Présentation :  
Je suis un eleve en 1TI de l'[Ephec](https://www.ephec.be/)
* [WAETERMANS Arnaud](https://github.com/ArnaudW29) 1TM2
## Description :
Site de commande de bonbon en ligne.
## Configuration de la DB : 
* id utilisateur : **dba**
* mdp utisateur  : **sql**
* nom du serveur : **projetbonbon**
* nom de la db   : **bonbon**  

-serviceweb :
* -n projetbonbon "C:\Users\lll\Desktop\projet\FRONTEND\bonbon.db"
* -x tcpip
* -xs http(port=82)
## Shema relationnel :
![image du shema relatioinnel](https://i.imgur.com/YX45rDH.png)
## Détail DB : 
### -tbBonbon :
Il s'agit de la table avec les informations du bonbon.  
pk = bonbonId  
fk = marqueId > tbMarque.marqueId    
Cette table comporte **6** colonnes :
* **bonbonId** qui est un char (3).
* **bonbonNom** qui est un varchar (45) regroupant les noms des bonbons.
* **bonbonType** qui est un varchar (15) regroupant les différents types des bonbons.
* **bonbonQte** qui est un integer regroupant la quantité des différents bonbons.
* **bonbonPrix** qui est un decimal(4,2) regroupant le prix des différents bonbons.
* **marqueId** qui est un integer regroupant l'id des marques de bonbon.
### -tbMarque : 
Il s'agit de la table avec les id et noms des marques  
pk = marqueId  
Cette table comporte **2** colonnes :
* **marqueId** qui est un char (3).
* **marqueNom** qui est un varchar (30) regroupant les nom des marques.
### -tbClient :
 Il s'agit de la table avec les infromations des clients.  
 pk = clientId  
 clé d'unicite = clientIdentifiant (evite doublons d'indentifiant meme si pas la même id)  
 clé d'unicite = clientMail (evite doublons de mail meme si pas la même id)  
 Cette table comporte **7** colonnes :
 * **clientId** qui est un integer AUTOINCREMENT. 
 * **clientNom** qui est un varchar (30) qui regroupe les noms des clients.
 * **clientPrenom** qui est un varchar (30) qui regroupe les prenoms des clients.
 * **clientAdresse** qui est un varchar (80) qui regroupe les adresses des clients.
 * **clientIdentifiant** qui est un varchar (50) qui regroupe les identifiants des clients.
 * **clientMdp** qui est un varchar (20) qui regroupe les mots de passes des clients.
 * **clientMail** qui est un varchar (70) qui regroupe les emails des clients.
 ### -tbCommandes : 
 Il s'agit de la table avec les historique de commande de chaque client  
 pk = commandesId  
 fk = clientId > tbclient.clientId  
 Cette table comporte **5** colonnes :
 * **commandesId** qui est un integer.
 * **clientId** qui est un integer.
 * **commandesQte** qui est un integer avec le nombre de paquet de bonbon commande.
 * **commandesDate** qui est un datetime avec la valeur getDate() cela permet d'avoir la date de quand le client a commande.
 * **commandesPrix** qui est un decimal(6,2) qui regroupe le prix total de la commande
 ### -tbPanier : 
 Il s'agit de la table avec le panier de chaque client  
 fk = bonbonId > tbBonbon.bonbonId  
 fk = clientId > tbClient.ClientId  
 Cette table comporte **3** colonnes :
 * **clientId** qui est un integer.
 * **bonbonId** qui est un char (3) avec l'id des bonbons.
 * **panierQte** qui est un integer avec le nombre de chaque bonbon dans le panier
## Détail API-REST :
* **proc_insertCommandes(:commId,:clId,:commPrixTOT,:commQteTOT)**  
*Procedure qui permet d'inserer les commandes dans la base de donnée.*
* **insertInscription(:Nom,:Prenom,:Adresse,:Identifiant,:Mdp,:Mail)**  
*Procedure qui permet d'inserer les données de l'inscription du client dans la base de donnée.*
* **proc_insertPanier(:id,:bId,:Qte)**  
*Procedure qui permet d'insert les données du panier dans la base de donnée.
* **proc_suppressionPanier(:bId,:clId)**  
*Procedure qui permet de supprimer une ligne dans la table Panier.*
* **proc_suppressionPanierComplet(:clId)**  
*Procedure qui permet de supprimer tout le panier d'un client (en fonction de son id).*
* **proc_getCommandes(:commid)**  
*Procedure qui permet de recuperer les données de la tables commandes de la base de donée.*
* **getConnexion(:id,:mdp)**  
*Procedure qui permet de recuperer les données de la table client pour la connexion.*
* **proc_verifIdentifiant(:id)**  
*Procedure qui recupere l'id et regarde si il existe deja dans la base de donnée.*
* **proc_verifMail(:Mail)**  
*Procedure qui recupere le mail et regarde si il existe deja dans la base de donnée.*
* **proc_getCommandesId(:comId)**  
*Procedure qui recupere l'id des commandes de la base de donnée.*
* **proc_getPanier(:Id)**  
*Procedure qui recupere les colonnes de la table panier en fonction de l'id du client.*
* **initBonbon()**  
*Procedure qui recupere les colonnes de la table bonbon.*
## TO DO LIST :
* **backend** : 
     * [x] Creer les tables SQL.
     * [x] Creer les services web pour initialiser la page et gérer les requetes/interactions.
     * [x] Creer les procédures pour charger les fichiers html/css/js ainsi que pour traiter les réponses et requetes.
* **frontend** : 
     * [x] Creer la page html et le css.
     * [x] Creer un fichier js
### FONCTIONNALITES PRINCIPALES : 
* Mettre a disposition une liste de bonbon avec toutes les informations concernant le fabricant et produits.
* Un formulaire pour ce connecter au site et acceder a son panier.
### FONCTIONNALITES SECONDAIRES : 
* Le prix d'achat.
* Restez connecté au site page en page 
## Aspects implémentés :
* **backend** : Une base de données avec les informations de chaque bonbon et le prix de chaque bonbon.
* **backend** : Un serveur web capable de fournir les pages html, js, css, ainsi que de proposer des webservices
* **backend** : Des webservices (avec les procédures associées) :
	* Un webservice permettant la connexion de l'utilisateur.
	* Un webservice permettant de verifier si le mail et nom d'utilisateur existe deja
	* Un webservice permettant d'afficher le nom de chaque bonbons.
	* Un webservice permettant de stocker les commandes.
* **frontend** : Une page web (html, js, css) permettant d'appeler les webservices et de traiter les réponses, les utilisants pour modifier la page: 	
	* afficher le panier du client.
	* afficher le prix du panier.
