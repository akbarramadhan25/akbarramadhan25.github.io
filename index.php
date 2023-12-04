<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $massage = $_POST["massage"];
    $to = "akbarramadhan021105@gmail.com";
    $subject = "Hello";

    $email_body = "Nama : $name\n\nPesan : $massage";

    mail($to, $subject, $email_body);
}
?>