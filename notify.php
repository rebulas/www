<?php
$email = $_REQUEST["notify-email"];
file_put_contents('/var/www/rebulas-notify/notify.txt', $email.PHP_EOL , FILE_APPEND | LOCK_EX);
?>
OK
