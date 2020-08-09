/* donee des marque */

INSERT INTO tbMarque(marqueId,marqueNom)
VALUES
('m01','Haribo'),
('m02','Lutti'),
('m03','Chupa Chups'),
('m04','Geldhof'),
('m05','Astra'),
('m06','PEZ'),
('m07','Fini'),
('m08','Tic-Tac'),
('m09','Napoleon'),
('m10','Sweet Party');

/* donnée des bonbons */

INSERT INTO tbBonbon(bonbonId,bonbonNom,bonbonGout,bonbonType,bonbonPrix,bonbonQte,marqueId)
VALUES
('b01','Petits Shtroumpfs','','gelatine',1.09,100,'m01'), //haribo
('b02','Shtroumpfs Pik','','citrique',1.09,100,'m01'),  //haribo
('b03','Pêche','pêche','sucrés',1.09,100,'m01'),        //haribo
('b04','Fraise','fraise','gelatine',1.09,100 ,'m01'),    //haribo
('b05','cola ciric','cola','citrique',0.69,100,'m01'),  //haribo
('b06','Petits dragibus','multi-parfum','gelatine',1.09,100,'m01'), //haribo
('b07','Dents dracula','','gelatine',1.57,100,'m05'),   //Astra
('b08','Spaghetti citric','cola','citrique',9.55,1000,'m10'), //Sweet Party
('b09','Escargot citric','cola','citrique',1.09,100,'m04'), //Geldhof
('b10','Cerise double','cerise','gelatine',1.09,100,'m01'), //haribo
('b11','Orque bleu','','gelatine',1.55,100,'m05'); //astra


/* donnée des clients (test)*/

INSERT INTO tbCLient(clientId,clientNom,clientPrenom,clientAdresse,clientIdentifiant,clientMdp,clientMail)
VALUES
('cl01','dupont','denis','rue du panier 21 1460 BELGIQUE','denis974','denis479','denisDD@trashmail.xyz'),
('cl02','waetermans','arnaud','rue de virginal 21 7090 BELGIQUE','admin','admin29','awj29@outlook.com'),
('cl03','salamendro','luis','avenue saint huber 1 1480 BELGIQUE','luisendro','salam1480','luis.salamendro@yahoo.com');


/* donnée des commandes des clients (test)  */

INSERT INTO tbCommandes(commandesId,clientId,commandesPrixTOT,commandesQteTOT)
VALUES
('co01','cl01',5.45,5);          // 5*b01

/* donnée des ventes de chaque produits */

INSERT tbVentes(commandesId,bonbonId,ventesNum,ventesQte)
VALUES
('co01','b01',1,5);
