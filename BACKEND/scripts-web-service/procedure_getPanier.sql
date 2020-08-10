CREATE PROCEDURE "DBA"."proc_getPanier"(in Id INTEGER)
RESULT (bonbonId char(3), bonbonNom char(45), bonbonQte VARCHAR(15),bonbonPrix DECIMAL(4,2), QttBonbon INTEGER, prixTot DECIMAL(6,2))
BEGIN 
    CALL sa_set_http_header('Access-Control-Allow-Origin','*');
    CALL sa_set_http_header('Content-Type','application/json');
    SELECT panier.bonbonId, bonbon.bonbonNom, bonbon.bonbonQte, bonbon.bonbonPrix, sum(panier.panierQte) as Quantite, Quantite * bonbon.bonbonPrix as Total
        FROM 
        dba.tbBonbon as bonbon 
        JOIN 
        dba.tbPanier as panier
           ON bonbon.bonbonId = panier.bonbonId
    WHERE 
    Id = panier.clientId
    GROUP BY 
    panier.bonbonId, bonbon.bonbonNom, bonbon.bonbonQte,bonbon.bonbonPrix
    ORDER BY 
    bonbon.BonbonNom;
END;

------------------------/* service pour recevoir le panier */-----------------------------------
CREATE SERVICE "proc_getPanier" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS CALL dba.proc_getPanier(:Id);
