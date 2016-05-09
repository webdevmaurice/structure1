<?php
/**
 * Created by PhpStorm.
 * User: MICHAEL
 * Date: 4/6/16
 * Time: 9:59 PM
 */

function __autoload($classname) {
    $filename = "./". $classname ."class.php";
    include_once($filename);
}
