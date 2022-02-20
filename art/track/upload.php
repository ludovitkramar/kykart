<?php
$q = $_REQUEST["q"];

$data = json_decode($q);
$data->ip = $_SERVER['REMOTE_ADDR'];
$data->stime = date("Y/m/d H:i:s");
$data->forward = $_SERVER['HTTP_X_FORWARDED_FOR'];

echo "Server received this: <br />";
echo json_encode($data);
?>