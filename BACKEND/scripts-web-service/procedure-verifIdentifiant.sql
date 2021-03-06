
CREATE PROCEDURE "DBA"."proc_verifIdentifiant" (IN id VARCHAR(50))
RESULT(identifiant VARCHAR(50))
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    select clientIdentifiant from tbClient
    where id = clientIdentifiant 
END;

-----------------------------------------/*service de verif si l'identifiant existe deja ou pas  */----------------------------------------------------

CREATE SERVICE "proc_verifIdentifiant" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_verifIdentifiant(:id);
