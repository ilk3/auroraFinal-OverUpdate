<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  exit;
}

$firstName = $_POST["firstName"] ?? "";
$lastName  = $_POST["lastName"] ?? "";
$phone     = $_POST["phone"] ?? "";
$email     = $_POST["email"] ?? "";
$message   = $_POST["message"] ?? "";

if (!$firstName || !$lastName || !$phone || !$email || !$message) {
  http_response_code(400);
  echo "All fields required";
  exit;
}

$to = "ilicfilip28@gmail.com";
$subject = "New Contact Form Message";
$body = "
Name: $firstName $lastName
Phone: $phone
Email: $email

Message:
$message
";

$headers = "From: Website <no-reply@yourdomain.com>\r\n";
$headers .= "Reply-To: $email\r\n";

mail($to, $subject, $body, $headers);

echo "OK";
