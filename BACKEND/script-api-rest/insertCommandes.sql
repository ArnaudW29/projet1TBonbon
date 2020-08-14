CREATE PROCEDURE "DBA"."proc_insertCommandes"(in commId INTEGER, in clId INTEGER, in commPrixTOT DECIMAL(6,2), in commQteTOT INTEGER)
BEGIN
    INSERT INTO tbCommandes(commandesId,clientId,commandesPrixTOT,commandesQteTOT)
        VALUES (commId,clId,commPrixTOT,commQteTOT)
END;


------------------------/* service pour inserer la commandes  */-----------------------------------
CREATE SERVICE "proc_insertCommandes" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS CALL dba.proc_insertCommandes(:commId,:clId,:commPrixTOT,:commQteTOT);
