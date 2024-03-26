<?php
echo "Holaaa";

phpinfo(); //Para sacar toda la info sobre mi php

//Para conectarse a una base de datos
//Diego lazaro tutorial de php

$conn = new PDO(                    //Parametros
    "mysql:host=localhost;dbname=todoApp", //Dominio y nombre de DB
    "root" //Usuarios 
    "" //Contraseña
);