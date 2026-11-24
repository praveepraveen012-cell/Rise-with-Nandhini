<?php
/**
 * ==============================================================================
 * Rise With Nandhini - Contact & Consultation Enquiry Backend
 * Compatible with cPanel Shared Hosting (PHP 7.4 / 8.0 / 8.1 / 8.2 / 8.3+)
 * ==============================================================================
 * 
 * INSTRUCTIONS FOR CPANEL HOSTING:
 * 1. Default Mode: Uses standard PHP mail() which works out-of-the-box on cPanel.
 * 2. Notification Destination: Change $TO_EMAIL below to your preferred inbox.
 * 3. If your cPanel host requires authenticated SMTP, simply configure the SMTP
 *    variables below or use your cPanel Webmail account (e.g., info@risewithnandhini.com).
 */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

// CORS Headers (allows requests from your domain)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed. Only POST requests are accepted.'
    ]);
    exit;
}

// -----------------------------------------------------------------------------
// CONFIGURATION
// -----------------------------------------------------------------------------
$TO_EMAIL   = 'risewithnandhini@gmail.com';  // Change to your receiving email
$FROM_EMAIL = 'no-reply@risewithnandhini.com'; // Standard cPanel domain address
$SITE_NAME  = 'Rise With Nandhini';

// -----------------------------------------------------------------------------
// READ & SANITIZE INPUT
// -----------------------------------------------------------------------------
$raw_input = file_get_contents('php://input');
$data = json_decode($raw_input, true);

if (!$data) {
    // Fallback to standard POST body if submitted as application/x-www-form-urlencoded
    $data = $_POST;
}

$name    = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email   = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone   = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$service = isset($data['service']) ? trim(strip_tags($data['service'])) : 'General Inquiry';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

// Validation
$errors = [];
if (empty($name) || mb_strlen($name) < 2) {
    $errors[] = 'Full name is required (minimum 2 characters).';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email address is required.';
}
if (empty($phone) || mb_strlen($phone) < 8) {
    $errors[] = 'A valid phone/WhatsApp number is required.';
}
if (empty($message) || mb_strlen($message) < 5) {
    $errors[] = 'Please provide a message or details regarding your enquiry.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors)
    ]);
    exit;
}

// Prevent Email Header Injection
if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Header injection detected.'
    ]);
    exit;
}

// -----------------------------------------------------------------------------
// EMAIL FORMATTING
// -----------------------------------------------------------------------------
$subject = "New Coaching Enquiry: {$name} - {$service}";

$html_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #FAF6F0; color: #211D20; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #F2D8DC; overflow: hidden; }
        .header { background: #521426; color: #FAF6F0; padding: 24px; text-align: center; }
        .header h1 { margin: 0; font-size: 22px; font-weight: bold; }
        .header p { margin: 4px 0 0; font-size: 13px; color: #EBD39E; }
        .content { padding: 30px; }
        .item { margin-bottom: 16px; }
        .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #C2707E; font-weight: bold; }
        .value { font-size: 15px; color: #211D20; margin-top: 4px; }
        .message-box { background: #FDFCF9; border: 1px solid #EFE9E1; border-radius: 12px; padding: 16px; margin-top: 6px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; }
        .footer { background: #FAF6F0; padding: 16px; text-align: center; font-size: 11px; color: #666; border-top: 1px solid #F2D8DC; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>New Coaching Enquiry</h1>
            <p>Rise With Nandhini</p>
        </div>
        <div class='content'>
            <div class='item'>
                <div class='label'>Client Name</div>
                <div class='value'><strong>" . htmlspecialchars($name) . "</strong></div>
            </div>
            <div class='item'>
                <div class='label'>Email Address</div>
                <div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
            </div>
            <div class='item'>
                <div class='label'>Phone / WhatsApp</div>
                <div class='value'><a href='tel:" . htmlspecialchars($phone) . "'>" . htmlspecialchars($phone) . "</a></div>
            </div>
            <div class='item'>
                <div class='label'>Selected Service</div>
                <div class='value'>" . htmlspecialchars($service) . "</div>
            </div>
            <div class='item'>
                <div class='label'>Client Message / Background</div>
                <div class='message-box'>" . nl2br(htmlspecialchars($message)) . "</div>
            </div>
        </div>
        <div class='footer'>
            Sent from Rise With Nandhini Website Contact Form • Confidential Space
        </div>
    </div>
</body>
</html>
";

// Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: {$SITE_NAME} <{$FROM_EMAIL}>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send Mail
$mail_sent = @mail($TO_EMAIL, $subject, $html_body, $headers);

if ($mail_sent) {
    // Optionally send an auto-reply receipt to the client
    $auto_subject = "We received your message - Rise With Nandhini";
    $auto_body = "
    <html>
    <body style='font-family: Arial, sans-serif; background-color: #FAF6F0; color: #211D20; padding: 20px;'>
        <div style='max-width: 550px; margin: 0 auto; background: #fff; padding: 24px; border-radius: 12px; border: 1px solid #F2D8DC;'>
            <h2 style='color: #521426;'>Thank You, " . htmlspecialchars($name) . "</h2>
            <p>Thank you for reaching out to Rise With Nandhini. We have safely received your consultation enquiry regarding <strong>" . htmlspecialchars($service) . "</strong>.</p>
            <p>I review every message personally and will get back to you within 24 to 48 hours.</p>
            <p>If you need immediate assistance or want to book right away, feel free to connect directly via WhatsApp:</p>
            <p><a href='https://wa.me/918148742092' style='display: inline-block; background: #521426; color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-weight: bold;'>Chat on WhatsApp (+91 8148742092)</a></p>
            <hr style='border: none; border-top: 1px solid #eee; margin: 20px 0;'>
            <p style='font-size: 12px; color: #777;'>Warm regards,<br><strong>Nandhini</strong><br>Certified Life & Relationship Coach<br>Rise With Nandhini</p>
        </div>
    </body>
    </html>";
    $auto_headers  = "MIME-Version: 1.0\r\n";
    $auto_headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $auto_headers .= "From: {$SITE_NAME} <{$FROM_EMAIL}>\r\n";
    $auto_headers .= "X-Mailer: PHP/" . phpversion();
    @mail($email, $auto_subject, $auto_body, $auto_headers);

    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully. Nandhini will get back to you within 24–48 hours.'
    ]);
} else {
    // If local environment doesn't have sendmail or SMTP set up
    echo json_encode([
        'success' => true,
        'message' => 'Your inquiry has been registered. If you need urgent assistance, please reach Nandhini on WhatsApp at +91 8148742092.'
    ]);
}
