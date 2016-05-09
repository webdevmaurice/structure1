<?php
/**
 * Created by PhpStorm.
 * User: formation3
 * Date: 4/1/2016
 * Time: 2:18 PM
 */
//include_once '../classes/bdd.class.php';
class hub /*extends bdd*/ {
    private $hid; //hub id PK
    private $cid; //country id FK
    /***
     * ......
     */

    static function getData($params) {
        $dataBDD = array(
            "labels" => array("Maurice", "Reunion", "Seychelles", "Madagascar", "Rodrigues", "Mayotte"),
            "data" => array(30.3, 19.1, 4.0, 3.8, 3.2, 39.6)
        );
        return $dataBDD;
    }
}