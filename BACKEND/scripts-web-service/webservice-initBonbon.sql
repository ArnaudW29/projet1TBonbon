/* Select des info sur les bonbons */

CREATE PROCEDURE "dba"."proc_init_bonbon"()
RESULT (bonbonId CHAR(3), bonbonNom VARCHAR(45),bonbonGout VARCHAR(15), bonbonType VARCHAR(15), bonbonPrix DECIMAL(4,2),bonbonQte VARCHAR(15),marqueId CHAR(3))
BEGIN 
  call sa_set_http_header('Access-Control-Allow-Origin','*');
  call sa_set_http_header('Content-Type','application/json');
  select B.bonbonId,B.bonbonNom,B.bonbonGout,B.bonbonType,B.bonbonPrix,B.bonbonQte,M.marqueNom
  from 
    tbBonbon as B
    inner join tbMarque M
      on M.marqueId = B.marqueId
order by B.bonbonNom
END;

---------------------------------------------/* service */-----------------------------------------------
    
 CREATE SERVICE "initBonbon" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.init_bonbon();