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
![image du shema relatioinnel](https://i.imgur.com/lrhi5MN.png)
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
