<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email settings
    $to = 'recipient@example.com';
    $subject = 'New Contact Form Submission';
    $message_body = "Name: $name\nEmail: $email\n\n$message";

    // Send email
    if (mail($to, $subject, $message_body)) {
        echo 'Email sent successfully.';
    } else {
        echo 'Error: Unable to send email.';
    }
}
?>