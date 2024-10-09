<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
    
            $recipient = 'info@sven-plankenbichler.de';  
            $subject = "Contact From <$email>";
            $message = "Name: " . $name . "<br>" . $message ;
    
            $datum = date(DateTime::RFC2822);    
            $headers   = array();
            $headers[] = "Date: {$datum}";
            $headers[] = "From: info@sven-plankenbichler.de";
            $headers[] = "Sender: info@sven-plankenbichler.de";
            $headers[] = "To: {$recipient}";
            $headers[] = "MIME-Version: 1.0";
            $headers[] = "Content-type: text/plain; charset=utf-8";
            $headers[] = "X-Mailer: PHP/".phpversion();

            mail($recipient, $subject, $message, implode("\r\n", $headers));
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    }