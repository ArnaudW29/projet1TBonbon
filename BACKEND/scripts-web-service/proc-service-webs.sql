CREATE FUNCTION "dba"."getPath"()
returns long varchar
deterministic
BEGIN
declare dbPath long varchar; // chemin de la db
declare dbName long varchar; // nom de la db

set dbPath = (SELECT db_property ('file'));
set dbName = (SELECT db_property('name')) + '.db';
set dbPath = left(dbPath, length(dbPath)-length(dbName));

return dbPath; // renvoyer path
END;

---

CREATE PROCEDURE "dba"."http_getPage"(in url char(255))
RESULT(html long varchar)
BEGIN
    call sa_set_http_header( 'Content-Type', 'text/html' );
    select xp_read_file(dba.getPath() ||url);
END;

---

CREATE PROCEDURE "dba"."http_getCSS"(in url char(255))
RESULT(css long varchar)
BEGIN
call sa_set_http_header( 'Content-Type', 'text/css');
select xp_read_file(dba.getPath() || 'css\' || url);
END;

---

CREATE PROCEDURE "dba"."http_getJS"(in url char(255))
RESULT(js long varchar)
BEGIN
call sa_set_http_header( 'Content-Type', 'application/javascript');
select xp_read_file(dba.getPath() || 'js\' || url); // renvoyer js
END;

---

CREATE PROCEDURE "DBA"."http_getIMG"(in url char(255))   /* renvoie le contenu de l imagedont le nom (+ extension) est le paramètre url */
BEGIN
  call sa_set_http_header('Content-Type', 'image/png'); 
  select xp_read_file(dba.getPath() || 'IMG\' || url);  // renvoyer image
END;
--------------------------------------------------------------------------------------------------------------------------------------
CREATE SERVICE "root" TYPE 'RAW' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.http_getPage(:url);
CREATE SERVICE "css" TYPE 'RAW' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.http_getCSS(:url);
CREATE SERVICE "js" TYPE 'RAW' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.http_getJS(:url);
CREATE SERVICE "img" TYPE 'RAW' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.http_getIMG(:url);
CREATE SERVICE "html" TYPE 'RAW' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.http_getPage(:url);
