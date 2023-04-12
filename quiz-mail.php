<?php
    use PHPMailer\PHPMailer\PHPMailer;

    use PHPMailer\PHPMailer\Exception;

    use PHPMailer\PHPMailer\SMTP;



    require 'phpmailer/Exception.php';

    require 'phpmailer/PHPMailer.php';

    require 'phpmailer/SMTP.php';
    
    $name = $_POST['firstname'];
    $phone = $_POST['phone'];
    $file = $_FILES['file'];
    $email = $_POST['email'];
    $answer = $_POST['answer'];
    
    $title = "Aplikacja quizu";

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

    if (!empty($file['name'][0])) {
        for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
            $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
            $filename = $file['name'][$ct];
            if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
                $mail->addAttachment($uploadfile, $filename);
                $rfile[] = "Załącznik $filename";
            } else {
                $rfile[] = "Nie udało się dołączyć pliku $filename";
            }
        }   
    }

    $mail->msgHTML("

    <h2>Szczegóły aplikacji</h2>
    
    <b>Nazwa:</b> $name<br>
    
    <b>Telefon:</b> $phone<br>

    <b>Email:</b> $email<br>

    <b>Kwestionariusz:</b><br> $answer<br>

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