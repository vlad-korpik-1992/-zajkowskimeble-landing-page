<?php
    use PHPMailer\PHPMailer\PHPMailer;

    use PHPMailer\PHPMailer\Exception;

    use PHPMailer\PHPMailer\SMTP;



    require 'phpmailer/Exception.php';

    require 'phpmailer/PHPMailer.php';

    require 'phpmailer/SMTP.php';
    
    $name = $_POST['firstname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    
    $title = "Application from the site (сzajkowskimeble.pl)";

    $mail = new PHPMailer();

    $mail->SMTPDebug = SMTP::DEBUG_SERVER; 

    $mail->isSMTP(); 

    $mail->Host = 'smtp.yandex.ru';

    $mail->SMTPAuth = true;

    //$mail->SMTPDebug = 2;

    $mail->Username = 'v.korpik2010@yandex.by';

    $mail->Password = 'begvodajlcsfsxqz';
    
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';

    $mail->Subject = $title;

    $mail->setFrom('v.korpik2010@yandex.by', 'сzajkowskimeble.pl');

    $mail->msgHTML("
    
    <h2>Szczegóły aplikacji</h2>
    
    <b>Nazwa:</b> $name<br>
    
    <b>Telefon:</b> $phone<br>

    <b>Email:</b> $email<br>

    ");

    $mail->addAddress('v.korpik2010@yandex.com');

    if(!$mail->send()) {

        echo 'Сообщение не может быть отправлено.';

        echo 'Ошибка: ' . $mail->ErrorInfo;

        exit;

    }

    else{

        echo 'Сообщение отправлено.';

    }
?>