<?php
/**
 * Created by PhpStorm.
 * User: formation4
 * Date: 4/1/2016
 * Time: 2:03 PM
 */
/*include_once '../inc/init.php';*/
include_once '../classes/hub.class.php';
//echo json_encode(getContryById(1));
echo json_encode(hub::getData('params'));
//test 2 hashim