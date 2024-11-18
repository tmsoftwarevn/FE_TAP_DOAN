<?php
// Define the API endpoint
$api_url = $url_be . "/api/contact/storecontact?api_key=8AF1apnMW2A39Ip7LUFtNstE5RjYleghk";

// Collect form data securely
$name = htmlspecialchars($_POST['name'] ?? '');
$phone = htmlspecialchars($_POST['phone'] ?? '');
$email = htmlspecialchars($_POST['email'] ?? '');
$content = htmlspecialchars($_POST['comments'] ?? '');


echo 'rrrrrrr' . $name . $phone . $email;

return
// Prepare data for the API request
$data = [
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'content' => $content
];

// Initialize a cURL session to send the data
$ch = curl_init($api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));

// Execute the request and capture the response
$response = curl_exec($ch);
$http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Check if the submission was successful
if ($http_status == 200) {
    echo json_encode(["success" => true, "message" => "Thank you! Your form has been submitted successfully."]);
} else {
    echo json_encode(["success" => false, "message" => "There was an error submitting your request."]);
}
