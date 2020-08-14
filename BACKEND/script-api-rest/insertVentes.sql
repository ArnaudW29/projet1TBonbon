CREATE PROCEDURE "DBA"."proc_insertVentes"(in commId CHAR(5), in bnId CHAR(3), in ventesN INTEGER, in ventesQtt INTEGER)
BEGIN
    INSERT INTO tbVentes(commandesId,bonbonId,ventesNum,ventesQte)
    VALUES
    (commId,bnId,ventesN,ventesQtt);
END;
---------------------------------/* service pour inserer dans la tbVentes */--------------------------------------------------------------
CREATE SERVICE "proc_insertVentes" TYPE 'RAW' AUTHORIZATION OFF USER "dba" METHODS 'GET' AS call dba.proc_insertVentes(:commId,:bnId,:ventesN,:ventesQtt);
