<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

try {
    // Versuch, eine neue Instanz der Klasse PHPMailer zu erstellen, wobei Ausnahmen aktiviert sind
    $mail = new PHPMailer(true);
    // (…)
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    // Persönliche Angaben
    $mail->Host = "smtp.domain.de";
    $mail->Port = 587;
    $mail->Username = "info@sven-plankenbichler.de";
    $mail->Password = "HeavyMetal88!";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    // Absender
    $mail->setFrom('info@sven-plankenbichler.de', 'Sven');
    // Empfänger, optional kann der Name mit angegeben werden
    $mail->addAddress('info@sven-plankenbichler.de', 'Sven');
    // Kopie
    $mail->addCC('info@sven-plankenbichler.de');
    // Blindkopie
    $mail->addBCC('info@sven-plankenbichler.de', 'Sven');

    $mail->isHTML(true);
    // Betreff
    $mail->Subject = 'Der Betreff Ihrer Mail';
    // HTML-Inhalt
    $mail->Body = 'Der Text Ihrer Mail als HTML-Inhalt. Auch <b>fettgedruckte</b> Elemente sind beispielsweise erlaubt.';
    $mail->AltBody = 'Der Text als simples Textelement';
    // Anhang hinzufügen
    $mail->addAttachment("/home/user/Desktop/beispielbild.png", "beispielbild.png");

    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    $mail->send();
} catch (Exception $e) {
    echo "Mailer Error: " . $e->getMessage();
}
