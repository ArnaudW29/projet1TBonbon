CREATE PROCEDURE "dba"."proc_insertConnexion"(in clientId char(4), in clientMdp varchar(20), in clientIdentifiant VARCHAR(50))
BEGIN 
    INSERT INTO tbConnexion(clientId, clientMdp, clientIdentifiant)
VALUES
(clientId,ClientMdp,ClientIdentifiant)
END;


--------------------------/* service d'insertion dans la table connexion */-----------------------------

CREATE SERVICE "proc_insertConnexion" TYPE 'RAW' AUTHORIZATION OFF USER "dba" METHODS 'GET' AS call dba.proc_insertConnexion(:clientId,:clientMdp,clientIdentifiant);
