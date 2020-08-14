/* Table contenant les infromations des marques de bonbons */ 
CREATE TABLE tbMarque(
  marqueId CHAR(3) NOT NULL, /* m01,m02,m03,m04 */
  marqueNom VARCHAR(30) NOT NULL, /* lutti, haribo etc.. */
  CONSTRAINT pk_tbMarque PRIMARY KEY (marqueId)
  );
     /* Table contenant les informations du client */
   CREATE TABLE tbClient(
     clientId INTEGER NOT NULL DEFAULT AUTOINCREMENT, /* 1,2, 3 , 4 (init a 4pour les test) */
     clientNom VARCHAR(30) NOT NULL, /* DUPONT , DUBOIS */
     clientPrenom VARCHAR(30) NOT NULL, /* DENIS, LOIC */
     clientAdresse VARCHAR(80) NOT NULL, /* rue du panier 24 1460 belgique */
     clientIdentifiant VARCHAR(50) NOT NULL, /* admin */
     clientMdp VARCHAR(20) NOT NULL, /* admin1234 */
     clientMail VARCHAR(70) NOT NULL,  /* DUPONT.loic@hotmail.com */
     CONSTRAINT pk_Client PRIMARY KEY (clientId),
     CONSTRAINT "pk_tbClientIdentifiant" UNIQUE ( "clientIdentifiant" ASC),
     CONSTRAINT "pk_tbClientMail" UNIQUE ( "clientMail" ASC)
     );
     
     /* table des connexions */
     CREATE TABLE tbConnexions(
     clientId INTEGER NOT NULL, /* 1,2, 3 , 4 */
     clientMdp VARCHAR(20) NOT NULL, /* admin1234 */
     clientIdentifiant VARCHAR(50) NOT NULL,
     connexionsDate datetime NOT NULL DEFAULT getDate(),
     
     CONSTRAINT fk_tbConnexions_tbClient FOREIGN KEY (clientId) REFERENCES tbClient ( clientId));
     
     
      /* Table contenant les inforamations des bonbons*/
     CREATE TABLE tbBonbon(
       bonbonId CHAR(3) NOT NULL, /* b01,b02,b03,b04 */
       bonbonNom VARCHAR(45) NOT NULL, /* sucette a la pomme , sucette a la poire etc */
       bonbonGout VARCHAR(15) NULL,
       bonbonType VARCHAR(15) NOT NULL, /* sucrés ,acidulés */
       bonbonPrix DECIMAL(4,2) NOT NULL,
       bonbonQte INTEGER NOT NULL, 
       marqueId CHAR(3) NOT NULL,
       CONSTRAINT pk_tbBonbon PRIMARY KEY (bonbonId),
       CONSTRAINT fk_tbBonbon_tbMarque FOREIGN KEY (marqueId) REFERENCES tbMarque ( marqueId)
       on UPDATE CASCADE ON DELETE RESTRICT
       );
     /* Table contenant l'historique des commandes de l'utilisateur */
    CREATE TABLE tbCommandes(
       commandesId CHAR(4) NOT NULL , /* co01, co02, co03, co04 */
       clientId INTEGER NOT NULL, /* 1,2, 3 , 4 */
       commandesPrixTOT DECIMAL(6,2) NOT NULL,
       commandesQteTOT INTEGER NOT NULL,
       commandesDate datetime NOT NULL DEFAULT getDate(),
       CONSTRAINT pk_tbCommandes PRIMARY KEY (commandesId),
       CONSTRAINT fk_tbCommandes_tbClient FOREIGN KEY (clientId) REFERENCES tbClient (clientId)
       ON UPDATE CASCADE ON DELETE RESTRICT
       );
     /* Table contenant les informations du panier de l'utilisateur */
   CREATE TABLE tbPanier(
     clientId INTEGER NOT NULL, /* 1,2, 3 , 4 */
     bonbonId CHAR(3) NOT NULL,     /* b01,b02,b03,b04 */
     panierQte INTEGER NOT NULL,
     CONSTRAINT fk_tbPanier_tbBonbon FOREIGN KEY (bonbonId) REFERENCES tbBonbon (bonbonId),
     CONSTRAINT fk_tbPanier_tbClient FOREIGN KEY (clientId) REFERENCES tbClient (clientId)
     );
      /* Table contenant les informations de la commande de l'utilisateur */
    CREATE TABLE tbVentes(
      commandesId CHAR(4) NOT NULL, /* co01, co02, co03, co04 */
      bonbonId CHAR(3) NOT NULL, /* b01,b02,b03,b04 */
      ventesNum INTEGER NOT NULL,
      ventesQte INTEGER NOT NULL,
      CONSTRAINT fk_tbVentes_tbBonbon FOREIGN KEY (bonbonId) REFERENCES tbBonbon (bonbonId) 
      ON UPDATE CASCADE ON DELETE RESTRICT,
      CONSTRAINT fk_tbVentes_tbCommandes FOREIGN KEY (commandesId) REFERENCES tbCommandes (commandesId)
      ON UPDATE CASCADE ON DELETE RESTRICT
      );
 
