<?php
/**
 * Created by PhpStorm.
 * User: michael
 * Date: 4/11/2015
 * Time: 6:30 PM
 */
/**
 * 微信账号echo_server的实现
 */

define("TOKEN", "echo_server");
$signature = $_GET['signature'];
$nonce = $_GET['nonce'];
$timestamp = $_GET['timestamp'];
$echostr = $_GET['echostr'];

$tmpArr = array($nonce, $timestamp, TOKEN);
sort($tmpArr);

$tmpStr = implode($tmpArr);
$tmpStr = sha1($tmpStr);
if ($tmpStr == $signature) {
    echo $echostr;
}

