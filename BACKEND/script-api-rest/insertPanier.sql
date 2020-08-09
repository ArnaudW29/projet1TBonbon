CREATE PROCEDURE dba.insertPanier( in id char(4),bId char(3), in Qte INTEGER)
BEGIN 
  INSERT INTO tbPanier(clientId,bonbonId,panierQte)
  VALUES 
  (id,bId,Qte)
  END;
  
  
  
  ------------------------------/* service insert panier */----------------------
CREATE SERVICE "proc_insertPanier" TYPE 'RAW' AUTHORIZATION OFF USER "dba" METHODS 'GET' AS call dba.proc_insertPanier(:id,:bId,:Qte);
