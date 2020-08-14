CREATE PROCEDURE "DBA"."proc_insertCommandes"(in commandesId INTEGER, in clientId INTEGER, in commandesPrixTOT DECIMAL(6,2), in commandesQteTOT INTEGER)
BEGIN
    INSERT INTO tbCommandes(commandesId,clientId,commandesPrixTOT,commandesQteTOT)
        VALUES (commandesId,clientId,commandesPrixTOT,commandesQteTOT)
END;


------------------------/* service pour inserer la commandes  */-----------------------------------
CREATE SERVICE "proc_insertCommandes" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS CALL dba.proc_insertCommandes(:commandesId,:clientId,:commandesPrixTOT,:commandesQteTOT);
