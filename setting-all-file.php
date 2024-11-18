<?php

require 'setting-language.php';

$url_be = 'https://belingo.tmsoftware.vn';

$info_web = [];
// Call project
$apiUrl = $url_be . '/api/company/getconfig?api_key=8AF1apnMW2A39Ip7LUFtNstE5RjYleghk';

// Initialize cURL session
$ch = curl_init($apiUrl);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return response as a string
curl_setopt($ch, CURLOPT_TIMEOUT, 30); // Set timeout to 30 seconds

// Execute cURL request
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch);
    curl_close($ch);
    return null;
}

// Close cURL session
curl_close($ch);

// Decode the JSON data
$data = json_decode($response, true);

if ($data && $data['status'] === true && isset($data['data'])) {
    $info_web = $data['data'];
    
    // print_r($info_web);

} else {
    echo "Error fetching data or no data available.";
}

// call all banner

$info_banner = [];
$apiUrl = $url_be . '/api/blog/getlistcategory?api_key=8AF1apnMW2A39Ip7LUFtNstE5RjYleghk';

$ch = curl_init($apiUrl);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return response as a string
curl_setopt($ch, CURLOPT_TIMEOUT, 30); // Set timeout to 30 seconds

$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch);
    curl_close($ch);
    return null;
}
curl_close($ch);
$data = json_decode($response, true);

if ($data && $data['status'] === true && isset($data['data'])) {
    $info_banner = $data['data'];
    //print_r($info_banner);
} else {
    echo "Error fetching data or no data available.";
}