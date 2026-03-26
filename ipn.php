<?php
// ipn.php
file_put_contents("payfast-ipn-log.txt", print_r($_POST, true), FILE_APPEND);
http_response_code(200); // Acknowledge receipt
?>
