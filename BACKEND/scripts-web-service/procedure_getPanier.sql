ALTER PROCEDURE "dba"."proc_getPanier"(in Id INTEGER)
RESULT (bonbonId char(3), bonbonNom char(45), bonbonQte VARCHAR(15),bonbonPrix DECIMAL(4,2), QttBonbon INTEGER, prixTot DECIMAL(6,2),bonbonType VARCHAR(15),marqueNom VARCHAR(30))
BEGIN 
    CALL sa_set_http_header('Access-Control-Allow-Origin','*');
    CALL sa_set_http_header('Content-Type','application/json');
    SELECT panier.bonbonId, bonbon.bonbonNom, bonbon.bonbonQte, bonbon.bonbonPrix, sum(panier.panierQte) as Quantite, Quantite * bonbon.bonbonPrix as Total, bonbon.bonbonType,marqueNom
        FROM 
        dba.tbBonbon as bonbon 
        JOIN 
        dba.tbPanier as panier
           ON bonbon.bonbonId = panier.bonbonId
       JOIN 
        tbMarque as marque
        on bonbon.marqueId = marque.marqueId
    WHERE 
    Id = panier.clientId
    GROUP BY 
    panier.bonbonId, bonbon.bonbonNom, bonbon.bonbonQte,bonbon.bonbonPrix, bonbon.bonbonType, marque.marqueNom
    ORDER BY 
    bonbon.BonbonNom;
END
