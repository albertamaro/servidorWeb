# servidorWeb

Instal·lació

Cal instal·lar els següents paquets:

- 'nodejs', que farà de servidor
sudo apt install npm
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo n latest

- 'mariadb', que farà de base de dades
sudo apt install mariadb-server

- 'git', per descarregar el servidor bàsic
sudo apt install git

Cal donar d'alta una base de dades:
sudo mysql
CREATE DATABASE serverDB DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
GRANT ALL ON serverDB.* TO 'user'@'localhost' IDENTIFIED BY '8ase2pwd';
FLUSH PRIVILEGES;
exit;

Cal descarregar el codi de 'github'
git clone https://github.com/optimisme/servidorWeb.git

Per descarregar els mòduls del servidor web:
cd servidorWeb
npm install

Per configurar la base de dades al servidor, modificar l'arxiu:
./servidorWeb/servidor/db.js
(Bé configurat amb els paràmetres d'exemple d'aquesta pàgina)

Per fer anar el servidor web (des del mateix directori 'servidorWeb'):
npm run app

El servidor es reinicia si fas algun canvi al codi o als arxius del servidor.
