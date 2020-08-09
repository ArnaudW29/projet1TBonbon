
CREATE PROCEDURE "dba"."proc_deleteConnexions(in Id char(4))
BEGIN 
    delete from tbConnexions
    where clientId=Id;
END;


-------------------------------------------/* service de suppression*/---------------------------

CREATE SERVICE "proc_deleteConnexions" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.proc_deleteConnexions(:Id);

