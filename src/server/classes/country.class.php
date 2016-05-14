<?php
/**
 * Created by PhpStorm.
 * User: MICHAEL
 * Date: 4/6/16
 * Time: 9:46 PM
 */


class country extends bdd{
    private $id;
    private $name;

    function __contruct(){
        $this->id = 0;
        $this->name = "Unknown country";
    }

    function getContryById($id){
        return parent::getParId('country',$id);
    }

}