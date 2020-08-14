CREATE PROCEDURE "DBA"."proc_getCommandesId"(in comId INTEGER)
RESULT(commandesId INTEGER)
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    Select commandesId from tbCommandes
END;


------------------------/* service pour recevoir l'id de la commande  */-----------------------------------
CREATE SERVICE "proc_getCommandesId" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS CALL dba.proc_getCommandesId(:comId);
