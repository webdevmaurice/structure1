<?php
/**
 * Created by PhpStorm.
 * User: WebCup
 * Date: 15/05/2016
 * Time: 00:26
 */
$data = array(rand(0,50).' bars', rand(50,100), rand(0,50), rand(20,25).' %', rand(100, 150).' F', rand(92, 99).' rpm', rand(92, 99).' rpm', rand(92, 99).' rpm', rand(92, 99).' rpm', rand(92, 99).' rpm', rand(92, 99).' rpm', rand(92, 99).' rpm');
print json_encode($data);
