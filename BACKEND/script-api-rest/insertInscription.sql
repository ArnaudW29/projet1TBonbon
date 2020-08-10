CREATE PROCEDURE "dba"."insertInscription"(in Id char(4), in Nom varchar(30), in Prenom VARCHAR(30), in Adresse varchar(80), in Identifiant varchar(50), in Mdp varchar(20), in Mail varchar(70))
BEGIN
INSERT INTO tbClient(clientId, clientNom, clientPrenom, clientAdresse, clientIdentifiant,clientMdp,clientMail)
VALUES 
(Id,Nom,Prenom,Adresse,Identifiant,Mdp,Mail)
END;

----------------------------/* service pour inserer les inscriptions dans la table client */-----------------------------------
CREATE SERVICE "insertIncsription" TYPE 'RAW' AUTHORIZATION OFF USER "dba" METHODS 'GET' AS call dba.insertInscription(:id,:Nom,:Prenom,Adresse,Identifiant,Mdp,Mail);
