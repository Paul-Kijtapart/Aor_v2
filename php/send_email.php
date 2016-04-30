<?php
    $post = json_decode(file_get_contents('php://input'),true);
    $email_to = "scc385@gmail.com";
    $email_subject = "Aor e-portfolio";
    $user_name = $post["name"];
    $user_email = $post["email"];
    $user_phone = $post["phone"];
    $user_message_input = $post["message"];
    
    //var_dump($email_to);
    // var_dump($post);
    // var_dump($user_name);
    // var_dump($user_email);
    // var_dump($user_phone);
    // var_dump($user_message_input);

// What I will receive:
$final_email = "
E-portfolio:
Name: $user_name;
Email: $user_email;
Phone: $user_phone;
Message: $user_message_input;
";


var_dump($final_email);

// Time to send EMAIL
$status = mail($email_to, $email_subject, $final_email);
var_dump($status);

if ($status) {
    exit("Your message has been sent. Thank you for the comment!");
} else {
    exit("Failed to send the message. Please try again.");
}

// Redirect visitors to Aor thank you page
?>