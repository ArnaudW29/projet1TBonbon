CREATE PROCEDURE "dba"."proc_suppressionPanierComplet"(IN clId INTEGER)
BEGIN 
    DELETE FROM tbPanier
    WHERE clId= clientId
END;
------------------------------/* service de suppression de toutes la table panier en fonctione du clientId */-----------------

CREATE SERVICE "proc_suppressionPanierComplet" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.proc_suppressionPanierComplet(:clId);
