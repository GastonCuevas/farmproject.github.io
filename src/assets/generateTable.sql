use bd_ej;

CREATE TABLE niveles (idNiveles INT NOT NULL AUTO_INCREMENT, nombre varchar(50) NOT null, cantidad_enemigos int , primary key (idNiveles));

CREATE TABLE jugadores (idJugadores INT NOT NULL AUTO_INCREMENT, nombre varchar(50) NOT null, energia int , id_niveles INT NOT NULL,
primary key (idJugadores),
 foreign key(id_niveles) references niveles(idNiveles));
 
INSERT INTO niveles(nombre,cantidad_enemigos) VALUES ('mareas',10);
INSERT INTO niveles(nombre,cantidad_enemigos) VALUES ('arenas del desierto',15);
INSERT INTO niveles(nombre,cantidad_enemigos) VALUES ('cavernas oscuras',20);
INSERT INTO niveles(nombre,cantidad_enemigos) VALUES ('ciudad perdida',23);
INSERT INTO niveles(nombre,cantidad_enemigos) VALUES ('lagunas del pantano',25);
INSERT INTO niveles(nombre,cantidad_enemigos) VALUES ('el limbo',27);
INSERT INTO niveles(nombre,cantidad_enemigos) VALUES ('el multiverso',30);
INSERT INTO niveles(nombre,cantidad_enemigos) VALUES ('montañas rocallosas',33);
INSERT INTO niveles(nombre,cantidad_enemigos) VALUES ('selva',35);
INSERT INTO niveles(nombre,cantidad_enemigos) VALUES ('nose ',40);
INSERT INTO jugadores(nombre,id_niveles, energia) VALUES ('santiago',1,100);
INSERT INTO jugadores(nombre,id_niveles, energia) VALUES ('lucas',1,100);
INSERT INTO jugadores(nombre,id_niveles, energia) VALUES ('santiago',1,100);
INSERT INTO jugadores(nombre,id_niveles, energia) VALUES ('lucas',1,100);
INSERT INTO jugadores(nombre,id_niveles, energia) VALUES ('luis',1,100);
INSERT INTO jugadores(nombre,id_niveles, energia) VALUES ('carlos',1,100);
INSERT INTO jugadores(nombre,id_niveles, energia) VALUES ('ivan',1,100);
INSERT INTO jugadores(nombre,id_niveles, energia) VALUES ('sebastian',1,100);