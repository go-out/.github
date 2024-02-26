<?php
mb_language("ja");
mb_internal_encoding("UTF-8");

$month = date("m");
$source_file = 'profile/' . $month . '.csv';
$data = json_decode(file_get_contents("php://input"), true);
$output = array(
    '"' . $data["timestamp"] . '"',
    $data["longitude"],
    $data["latitude"],
    '"' . $data["address"] . '"',
    '"' . $data["comment"] . '"',
    $_SERVER["REMOTE_ADDR"]
);
$result = implode(',', $output);

define("LOGFILE", $source_file);
file_put_contents(LOGFILE, $result . "\n", FILE_APPEND | LOCK_EX);
echo json_encode($output);
