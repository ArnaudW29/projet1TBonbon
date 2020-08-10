CREATE PROCEDURE "dba"."proc_insertConnexion"(in Id INTEGER, in Mdp varchar(20), in Identifiant VARCHAR(50))
BEGIN 
    INSERT INTO tbConnexions(clientId,clientMdp,clientIdentifiant)
VALUES
(Id,Mdp,Identifiant)
END;

--------------------------/* service d'insertion dans la table connexion */-----------------------------

CREATE SERVICE "proc_insertConnexion" TYPE 'RAW' AUTHORIZATION OFF USER "dba" METHODS 'GET' AS call dba.proc_insertConnexion(:Id,:Mdp,:Identifiant);
