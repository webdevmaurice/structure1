<?php

class bdd {
    /**
     *
     */
    public static function selection($requete, $type = 'object') {
        global $dbConnexion;

        $resultats = $dbConnexion->query($requete);

        switch ($type) {
            case 'object':
                $resultats->setFetchMode(PDO::FETCH_OBJ);
                break;
            case 'row':
            case 'array':
                $resultats->setFetchMode(PDO::FETCH_ASSOC);
                break;
            default:
                throw new Exception('Unrecognized type "' . $type . '" found!');
        }

        if ($type != 'row') {
            $liste = array();
            while ($ligne = $resultats->fetch()) {
                $liste[] = $ligne;
            }
            $resultats->closeCursor();
            return $liste;
        }
        else {
            $result = $resultats->fetch();
            return $result;
        }
    }
	/**
	*Save
	*/
	public function sauve() {
        global $dbConnexion;
        //on identifie d'abords la classe de l'objet qui correspond au nom de la table
        $nomTable = strtolower(get_class($this));

        //on commence à ecrire la requete
        if (!empty($this->id) && is_numeric($this->id) && ($this->id) > 0) {
            //c'est un update'
            $req = $this->requeteUpdate($nomTable);
        }
        else {
            $req = $this->requeteInsert($nomTable);
        }
        $reqSauve = $dbConnexion->prepare($req['requete']);

        return $reqSauve->execute($req['listeValeurs']);
    }
	
	/**
	 * Update
	 */
	 public static function sqlUpdate($nomtable, $condition) {
		global $dbConnexion;
		  $reqListe = "UPDATE $nomtable SET $condition";
	   // var_dump($reqListe);die();
		 return $dbConnexion->exec($reqListe);
	 }
	
	/**
     *Delete
     */
    protected static function effaceParIdTable($nomTable, $id) {
        global $dbConnexion;

        if (is_numeric($id) && ($id > 0)) {
            $requete = "delete from $nomTable where id = $id";
            return $dbConnexion->exec($requete);
        }
        return -1;
    }
	
	/**
     *Delete with condition
     */
    protected static function effaceParCondition($nomTable, $condition = '') {
        global $dbConnexion;

        if ($condition != '') {
            $requete = "delete from $nomTable where " . $condition;
            return $dbConnexion->exec($requete);
        }
        else {
            return false;
        }
        return -1;
    }
	
	/**
     *Get by ID
     */
    public static function getParId($table, $id) {
        global $dbConnexion;
        $sql = "SELECT * FROM {$table} WHERE id = ?";

        try {
            $stmt = $dbConnexion->prepare($sql);
            $stmt->execute(array($id));
            return $stmt->fetchObject($table);
        }
        catch (PDOException $e) {
            debug($e->getMessage(), 'debug');
        }
    }
	
	/**
     * Obtenir une instance de l'objet representée par la classe et ayant l'id fournie
     * @param $id
     * @return static
     */
    public static function get($id) {
        global $dbConnexion;
        $table = get_called_class();
        $sql = "SELECT * FROM {$table} WHERE id = ?";

        try {
            $stmt = $dbConnexion->prepare($sql);
            $stmt->execute(array($id));
            $stmt->setFetchMode(PDO::FETCH_CLASS, $table);

            return $stmt->fetch();
        }
        catch (PDOException $e) {
            debug($e->getMessage(), 'debug');
        }
    }
	
	/**
     * Fonction generique pour recuperer les données d'une table avec des conditions si besoin
     */
    static public function fnListe($table, $contrainte = "") {
        global $dbConnexion;
        $sql = "SELECT * FROM $table " . $contrainte;
        $query = $dbConnexion->query($sql);
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
	
	/**
     * Fonction generique pour recuperer le nombre de ligne d'une table avec des conditions si besoin
     */
    static public function fnGetCount($table, $contrainte = "") {
      global $dbConnexion;
      $sql = "SELECT COUNT(*) as count FROM $table " . $contrainte;
      $query = $dbConnexion->query($sql);
      $result = $query->fetch();
      return $result;
    }
}