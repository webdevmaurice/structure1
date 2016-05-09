<?php
/** etablir la connexion  la bdd**/
$_DB_HOST = "gator4204.hostgator.com";
$_DB_DATABASE = "balgoarv_theme2050";
$_DB_USER = "balgoarv_arvind";
$_DB_PASS = "theme2050";

/*try {
    $dbConnexion = new PDO('mysql:host=' . $_DB_HOST . ';dbname=' . $_DB_DATABASE, $_DB_USER, $_DB_PASS,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_PERSISTENT => false));
    echo "Connected successfully 888";
}
catch (PDOException $ex) {
    echo $ex->getMessage();
}*/

// Create connection
$dbConnexion = new mysqli($_DB_HOST, $_DB_USER, $_DB_PASS);

// Check connection
if ($dbConnexion->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

function autoload($nomdelaclasse) {
    $fichier = '../classes/' . strtolower($nomdelaclasse) . '.class.php';


    if ($fichier) {
        require_once($fichier);
    }
}

spl_autoload_register('autoload');