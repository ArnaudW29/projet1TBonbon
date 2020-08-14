
CREATE PROCEDURE "DBA"."proc_verifMail" (IN Mail VARCHAR(70))
RESULT(Mail VARCHAR(70))
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    select clientMail from tbClient
    where Mail = clientMail
  END;

-----------------------------------------/*service de verif si l'identifiant existe deja ou pas  */----------------------------------------------------

CREATE SERVICE "proc_verifMail" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_verifMail(:Mail);
