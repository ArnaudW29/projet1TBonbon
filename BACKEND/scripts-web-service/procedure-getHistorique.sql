
CREATE PROCEDURE "DBA"."proc_getHistorique"(IN commId INTEGER)
RESULT(commandesId INTEGER,clientId INTEGER, commandesPrixTOT decimal(6,2), commandesQteTOT integer, commandesDate datetime)
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    Select commandesId, clientId, commandesPrixTOT, commandesQteTOT, commandesDate from tbHistoriques
    where commandesId = commId
end;

 ------------------------------------/* Service pour recevoir l'historique en fonction de l'id de la commande*/---------------------------------------------------

CREATE SERVICE "proc_getHistorique" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_getHistorique(:commid);
