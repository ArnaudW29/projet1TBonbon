CREATE PROCEDURE "dba"."proc_suppressionPanier"(IN bId CHAR(3), IN clId char(4))
BEGIN 
    DELETE FROM tbPanier
    WHERE clId= clientId and bId=bonbonId;
END;


---------------------------------/* service qui permet de supprimer un row de la table panier */-------------------------------

CREATE SERVICE "proc_suppressionPanier" TYPE 'RAW' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_suppressionPanier(:bId,:clId);
