<?php
require_once "setting-all-file.php";

$id = 1;
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    // echo 'id blog la:' . $id;
} else {
    //echo "Khong nhan duoc ID";
    header("Location: /");
    exit();
}


$api_key = '8AF1apnMW2A39Ip7LUFtNstE5RjYleghk';

function fetchApiData($url)
{
    $ch = curl_init($url);

    // Set cURL options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30); // Set timeout to 30 seconds

    $response = curl_exec($ch);

    // Check for cURL errors
    if (curl_errno($ch)) {
        echo 'cURL Error: ' . curl_error($ch);
        curl_close($ch);
        return null;
    }

    curl_close($ch);
    return json_decode($response, true);
}

$apiUrl = "{$url_be}/api/blog/getblogdetail?api_key={$api_key}&id={$id}";
$data = fetchApiData($apiUrl);
$detail = '';

if ($data && $data['status'] === true && isset($data['data'])) {
    $detail = $data['data'];
} else {
    echo "Error fetching blog details or no data available.";
}

// Fetch list of blogs
$apiUrl_project = "{$url_be}/api/blog/getlistblog?api_key={$api_key}";
$data_project = [];
$data = fetchApiData($apiUrl_project);

if ($data && $data['status'] === true && isset($data['data'])) {
    $data_project = $data['data'];
} else {
    echo "Error fetching blog list or no data available.";
}

?>

<!DOCTYPE HTML>
<html lang="vi">

<head>
    <meta charset="utf-8">

    <meta name="language" content="vi">
    <meta name="robots" content="index, follow">
    <meta name="author" content="LINGO GROUP">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">

    <title id="hdtitle"><?php echo $detail['headline'] ?></title>
    <meta name="description" content="<?php echo strip_tags($detail['description']); ?>">
    <meta name="keywords" content="<?php echo strip_tags($detail['keywords']); ?>">

    <meta property="og:title" content="<?php echo $detail['headline'] ?>">
    <meta property="og:description" content="<?php echo strip_tags($detail['description']); ?>">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="LINGO GROUP">
    <meta property="og:image" content="<?php echo $url_be . $detail['image'] ?>">
    <meta property="og:locale" content="vi">

    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="LINGO GROUP">

    <link rel="icon" href="<?php echo $url_be . $info_web['favicon'] ?>" type="image/x-icon" />
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo $url_be . $info_web['favicon'] ?>" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css" />
    <link rel="stylesheet" href="/css/main.css">
    <script src="https://cdn.tailwindcss.com"></script>

</head>

<body>
    <div id="render-styles"></div><noscript id="deferred-styles">
        <link rel="stylesheet" href="/catalog/view/css/app.css?ver=1.0.8">
    </noscript>
    <div class="mask" style="display:none" data-timeout-loading="7000"><span class="mask-color"></span>
        <div class="flower-mask">
            <div class="flower-right"><span></span> <span></span> <span></span></div>
            <div class="flower-left"><span></span> <span></span></div>
        </div>
        <div class="wrap-enter-site"><button class="enter-site" aria-label="click"><span>Enter site</span></button>
        </div>
    </div>
    <div class="loadicon" style="display:none"><span></span> <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 220 250">
            <path class="stroke-line" d="M181.5,40.8c0-0.2-0.1-0.3-0.3-0.4c-0.1,0-0.2,0-0.3,0c-7.1,0.7-21.1,2.4-35.7,6.5c-2,0.6-4,1.2-5.9,1.8
c-1.6-2.6-3.4-5.2-5.4-7.8c-8.9-12.1-18.8-22-23.9-26.8c-0.2-0.2-0.4-0.2-0.6,0c-5.1,4.8-15,14.7-23.9,26.8
c-1.9,2.6-3.7,5.2-5.4,7.8c-1.8-0.6-3.8-1.2-5.9-1.8c-14.6-4.1-28.6-5.8-35.6-6.5c-0.1,0-0.2,0-0.3,0c-0.2,0.1-0.3,0.2-0.3,0.4
c0,6.9,0.3,20.6,2.9,35.1c2.1,12.1,5.4,22.2,9.7,30.1c5.6,10.4,13,17,21.9,19.7c7.7,2.3,14.9,2.5,21.5,0.6c3.8-1.1,7.2-2.9,10.3-5.4
c1.7,0.1,3.5,0.2,5.4,0.2c1.8,0,3.7,0,5.4-0.2c3,2.5,6.5,4.3,10.3,5.4c3,0.9,6.1,1.3,9.3,1.3c3.9,0,8-0.6,12.2-1.9
c9-2.7,16.3-9.3,21.9-19.7c4.3-7.9,7.5-18,9.7-30.1C181.1,61.4,181.5,47.7,181.5,40.8 M72.2,54.5c1.2,0.3,2.5,0.8,3.8,1.2l0,0
c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1,0,0.1c-2.5,4.6-4.4,9.1-5.8,13.3c-3.7,11.4-3.4,21.5,0.8,30c3.7,7.3,8.6,12.8,14.6,16.3
c2.4,1.4,4.9,2.4,7.5,3.1c-5.3,1.8-11.5,1.7-18.1-0.3c-16.2-4.9-23.2-26.5-26.3-43.8c-1.4-7.8-2.3-16.3-2.6-25.3
C55.3,50.4,63.8,52.2,72.2,54.5 M170.9,74.5c-3.1,17.3-10.1,38.9-26.3,43.8c-6.6,2-12.8,2.1-18.1,0.2c2.6-0.7,5.1-1.7,7.5-3.1
c6-3.5,11-9,14.6-16.3c4.3-8.5,4.6-18.6,0.8-30c-1.4-4.3-3.4-8.8-6-13.5l0.1,0c1.3-0.4,2.5-0.8,3.8-1.1c8.4-2.3,16.9-4.1,26.1-5.3
C173.2,58.2,172.3,66.8,170.9,74.5 M102.3,113c-3.8-0.8-6.4-1.5-6.9-1.7c-0.1,0-0.1,0-0.2,0c-1-0.3-1.9-0.7-2.8-1.1
c-0.3-0.1-0.6-0.2-0.8-0.4c-0.1,0-0.2-0.1-0.3-0.1c-0.4-0.2-0.8-0.4-1.1-0.6c0,0-0.1,0-0.1-0.1l-0.1,0c-0.3-0.2-0.7-0.4-1-0.6
l-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.3-0.2-0.7-0.5-1.1-0.7c-0.1-0.1-0.1-0.1-0.2-0.2l-0.1,0c-0.4-0.3-0.7-0.5-1-0.8l-0.1-0.1
c-0.3-0.2-0.6-0.5-0.9-0.8l0,0c-0.1-0.1-0.1-0.1-0.2-0.2c-0.3-0.3-0.6-0.6-0.9-0.9c-0.1-0.1-0.1-0.1-0.2-0.2l-0.1-0.1
c-0.3-0.3-0.6-0.6-0.8-0.9l-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.3-0.3-0.6-0.7-0.9-1.1c-0.1-0.1-0.2-0.2-0.3-0.3
c-0.3-0.4-0.6-0.8-0.8-1.1c0-0.1-0.1-0.1-0.1-0.2l-0.1-0.1c-0.2-0.3-0.5-0.7-0.7-1L79.9,99c0-0.1-0.1-0.2-0.1-0.2
c-0.2-0.4-0.5-0.8-0.7-1.3c-0.1-0.1-0.1-0.2-0.2-0.4l0-0.1c-0.2-0.4-0.5-0.8-0.7-1.2c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1
c0,0,0-0.1,0-0.1c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.1-0.1-0.2-0.2-0.4c-0.1-0.2-0.2-0.5-0.3-0.7c0-0.1-0.1-0.2-0.1-0.3
c-0.1-0.3-0.2-0.5-0.3-0.8c0-0.1-0.1-0.2-0.1-0.4c-0.1-0.2-0.2-0.5-0.2-0.7l0-0.1c0-0.1,0-0.1,0-0.2c-0.1-0.3-0.1-0.6-0.2-0.9
c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.3-0.1-0.5-0.2-0.8l0-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.3l0,0c-0.1-0.6-0.1-1.1-0.2-1.7
c0,0,0-0.1,0-0.1C74.3,72.9,83.8,56.7,92,45.6c6.2-8.5,13.1-15.9,17.9-20.7c4.8,4.8,11.6,12.3,17.9,20.7
c8.1,11.1,17.6,27.2,16.4,41.2c0,0,0,0,0,0v0c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0.3-0.1,0.5-0.1,0.8c0,0.1,0,0.2,0,0.3
c0,0.4-0.1,0.7-0.1,1c0,0,0,0.1,0,0.1l0,0.1c0,0.3-0.1,0.5-0.2,0.8c0,0.1,0,0.2-0.1,0.3c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.1,0,0.1,0,0.2
l0,0.1c-0.1,0.2-0.1,0.5-0.2,0.7c0,0.1-0.1,0.2-0.1,0.4c-0.1,0.3-0.2,0.5-0.3,0.8c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.2-0.2,0.5-0.3,0.7
c-0.1,0.1-0.1,0.2-0.2,0.4c-0.1,0.2-0.2,0.5-0.3,0.7c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1
c-0.2,0.4-0.4,0.8-0.7,1.2l0,0.1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.3,0.4-0.5,0.9-0.7,1.3c0,0.1-0.1,0.2-0.1,0.2l-0.1,0.1
c-0.2,0.4-0.5,0.7-0.7,1l-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c-0.3,0.4-0.5,0.7-0.8,1.1c-0.1,0.1-0.2,0.2-0.3,0.3
c-0.3,0.4-0.6,0.8-0.9,1.1c0,0-0.1,0.1-0.1,0.1l-0.1,0.1c-0.3,0.3-0.5,0.6-0.8,0.9l-0.1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2
c-0.3,0.3-0.6,0.6-0.9,0.9c-0.1,0.1-0.1,0.1-0.2,0.2l-0.1,0c-0.3,0.3-0.7,0.6-0.9,0.8l-0.1,0.1c-0.3,0.2-0.6,0.5-1,0.8l-0.1,0
c-0.1,0.1-0.1,0.1-0.2,0.2c-0.4,0.3-0.7,0.5-1.1,0.7c0,0-0.1,0.1-0.1,0.1l-0.1,0.1c-0.3,0.2-0.7,0.4-1,0.6l-0.1,0c0,0-0.1,0-0.1,0.1
c-0.4,0.2-0.7,0.4-1.1,0.6c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0.1-0.6,0.2-0.8,0.4c-0.9,0.4-1.8,0.8-2.8,1.1c-0.1,0-0.1,0-0.2,0
c-0.5,0.3-3.2,0.9-6.9,1.7c-2.5,0.5-5,0.7-7.5,0.7C107.3,113.7,104.7,113.5,102.3,113" />
            <path class="stroke-line" d="M64.1,141.3l-6.9,11.1H36.6h-2.1c-1.5-0.1-2.7,0-3.7,0.2c-1,0.2-1.8,0.6-2.4,1.1c-0.6,0.5-1,1-1.3,1.7
c-0.2,0.7-0.4,1.4-0.5,2.1c0,0.8,0.3,1.8,0.9,2.9c0.6,1,1.5,1.5,2.7,1.7c1.2,0.2,2.9,0.3,5,0.3h9.1c4.3,0,7.6,0.6,10.1,1.8
c1.3,0.6,2.5,1.4,3.5,2.4c1.1,1,2,2.2,2.8,3.6c0.8,1.4,1.4,2.9,1.9,4.6c0.5,1.7,0.7,3.5,0.7,5.3c0,4.2-0.9,7.8-2.7,10.8
c-1.7,3-3.9,4.9-6.7,5.8c-2.8,0.8-6.4,1.2-10.9,1.2h-30v-11.2h25.6H40c1.6,0.1,3,0,4.2-0.2c1.2-0.3,2.2-0.6,2.9-1.2
c0.8-0.5,1.3-1.1,1.7-1.8c0.3-0.7,0.5-1.4,0.4-2.2c-0.1-1.4-0.6-2.6-1.7-3.7c-1.1-1-2.7-1.4-4.8-1.2h-2.1h-9.2c-3.8,0-7-0.6-9.5-1.7
c-1.3-0.6-2.6-1.5-3.7-2.6c-1.1-1.1-2.1-2.3-2.9-3.7c-0.8-1.4-1.4-3-1.9-4.7c-0.5-1.7-0.7-3.5-0.7-5.4c0-3.6,0.8-6.9,2.4-9.9
c0.8-1.4,1.8-2.6,3-3.5c1.2-0.9,2.6-1.7,4.1-2.2c1.5-0.5,3.2-0.9,4.9-1.1c1.8-0.2,3.6-0.3,5.5-0.3h2.2H64.1z" />
            <path class="stroke-line" d="M176.5,141.3 194.1,188.4 194.1,141.3 206.9,141.3 206.9,198 184.9,198 168.4,152.1 168.4,198 
155.5,198 155.5,141.3z" />
            <rect class="stroke-line" x="98.9" y="164.1" width="41.1" height="11.2" />
            <path class="stroke-line" d="M93.2,152.4 93.2,165.1 93.2,165.1 93.2,176.2 93.2,176.2 93.2,186.8 111.6,186.8 111.6,186.8 
140,186.8 140,198 120.9,198 120.9,198 79.7,198 79.7,141.3 140,141.3 140,152.4z" />
            <path class="stroke-line" d="M109.3,107c-4.1,0-8.2-1.1-12.2-3.3c-1.4-0.7-2.3-1-2.8-1c-0.9,0-1.4,0.6-1.5,1.9l-0.1,1.3h-1.8V90.4h1.7
c0.6,4.8,2.3,8.3,5.3,10.5c3,2.3,6.6,3.4,10.7,3.4c4.1,0,7.2-1.1,9.4-3.3c2.1-2.2,3.2-4.9,3.2-7.9c0-4.8-2.8-8.5-8.3-10.9l-11-4.9
c-3.3-1.5-5.8-3.5-7.5-6.1c-1.7-2.6-2.5-5.3-2.5-8.3c0-4.5,1.5-8.4,4.5-11.6c3-3.2,7.4-4.9,13.1-4.9c3.3,0,6.8,1.1,10.3,3.3
c1.2,0.7,2,1,2.4,1c0.8,0,1.2-0.6,1.3-1.9l0.1-1.9h1.8v16h-1.7c-0.5-4.8-2-8.3-4.6-10.5c-2.6-2.3-5.7-3.4-9.4-3.4
c-3.7,0-6.5,1-8.5,3c-2,2-3,4.3-3,6.9c0,2.6,0.7,4.9,2.1,6.9c1.4,2,3.4,3.6,6.2,4.8l11.1,4.9c3.7,1.7,6.5,3.8,8.4,6.5
c1.9,2.7,2.8,5.6,2.8,8.7c0,4.4-1.8,8.2-5.3,11.4C119.9,105.4,115.2,107,109.3,107" />
            <path class="stroke-line" d="M24.5,227.3h6.9v1h-0.7c-0.3,0-0.6,0.1-0.7,0.2c-0.1,0.1-0.2,0.3-0.2,0.7v0.8c0,1.9-0.7,3.3-2.2,4.5
c-1.5,1.1-3.4,1.7-5.7,1.7c-2.7,0-4.9-0.9-6.6-2.7c-1.7-1.8-2.5-4.1-2.5-6.9c0-2.9,0.9-5.2,2.6-7c1.7-1.8,4-2.7,6.9-2.7
c1,0,1.9,0.1,2.7,0.3c0.8,0.2,1.4,0.4,1.8,0.5c0.4,0.2,0.7,0.3,0.8,0.3c0.2,0,0.3-0.1,0.3-0.4v-0.4h1v4.9h-1c0-2.8-1.7-4.2-5.1-4.2
c-1.9,0-3.4,0.7-4.5,2.2c-1.1,1.5-1.6,3.6-1.6,6.4c0,2.8,0.5,4.9,1.4,6.4c0.9,1.5,2.3,2.2,4.1,2.2c1.4,0,2.4-0.4,3-1.1
c0.6-0.7,0.9-1.9,0.9-3.6v-1.3c0-0.3-0.1-0.6-0.2-0.7c-0.1-0.1-0.3-0.2-0.7-0.2h-0.7V227.3z" />
            <path class="stroke-line" d="M75.7,234.8h0.7v1h-2.9c-1.4,0-2.5-0.3-3.3-0.9c-0.7-0.6-1.3-1.6-1.6-3.1c-0.2-1-0.5-1.8-0.6-2.4
s-0.5-1-0.8-1.3c-0.3-0.3-0.7-0.5-1-0.5c-0.3-0.1-0.8-0.1-1.5-0.1h-1.8v6.5c0,0.3,0,0.6,0.1,0.7c0.1,0.1,0.3,0.2,0.7,0.2h0.7v1h-6.9
v-1h0.7c0.4,0,0.6-0.1,0.7-0.2c0.1-0.1,0.1-0.3,0.1-0.7v-15.1c0-0.3,0-0.6-0.1-0.7c-0.1-0.1-0.3-0.2-0.7-0.2h-0.7v-1H66
c2.5,0,4.2,0.5,5.3,1.5c1.1,1,1.6,2.2,1.6,3.7c0,1.1-0.3,2.1-1,3c-0.7,0.9-1.7,1.5-3,1.9c2,0.7,3.3,2.1,3.8,4.2
c0.3,1.4,0.7,2.4,1.1,2.9C74.1,234.6,74.8,234.8,75.7,234.8 M62.9,226.6h2.2h0.1h0c1.3,0,2.3-0.3,2.9-0.9c0.6-0.6,0.9-1.8,0.9-3.4
c0-1.6-0.3-2.7-0.9-3.3c-0.6-0.6-1.6-0.9-2.9-0.9h-2.3V226.6z" />
            <path class="stroke-line" d="M110.6,216.8c2.7,0,4.9,0.9,6.6,2.7c1.7,1.8,2.5,4.1,2.5,6.9c0,2.9-0.8,5.2-2.5,7c-1.7,1.8-3.9,2.7-6.6,2.7
c-2.8,0-5-0.9-6.6-2.7c-1.7-1.8-2.5-4.1-2.5-7c0-2.9,0.8-5.2,2.5-7C105.6,217.7,107.8,216.8,110.6,216.8 M114.5,220
c-0.8-1.4-2.1-2.1-3.9-2.1c-1.8,0-3.2,0.7-4,2.1c-0.8,1.4-1.2,3.6-1.2,6.5c0,2.9,0.4,5.1,1.2,6.5c0.8,1.4,2.1,2.1,4,2.1
c1.8,0,3.1-0.7,3.9-2.1c0.8-1.4,1.2-3.6,1.2-6.5C115.7,223.6,115.3,221.4,114.5,220" />
            <path class="stroke-line" d="M165.1,217.1v1h-1c-0.3,0-0.6,0.1-0.7,0.2c-0.1,0.1-0.2,0.3-0.2,0.7v10.2c0,2.3-0.7,4-2,5.2
c-1.3,1.2-3,1.8-5.2,1.8c-2.7,0-4.8-0.6-6.2-1.9c-1.5-1.2-2.2-3-2.2-5.4v-9.9c0-0.3,0-0.6-0.2-0.7c-0.1-0.1-0.3-0.2-0.7-0.2h-0.7v-1
h6.9v1h-0.7c-0.3,0-0.6,0.1-0.7,0.2c-0.1,0.1-0.2,0.3-0.2,0.7v10c0,2.2,0.4,3.7,1.3,4.7c0.8,0.9,2.2,1.4,4,1.4
c1.6,0,2.8-0.5,3.8-1.5c1-1,1.5-2.5,1.5-4.4v-10.2c0-0.3,0-0.6-0.1-0.7c-0.1-0.1-0.3-0.2-0.7-0.2h-1v-1H165.1z" />
            <path class="stroke-line"
                d="M200.3,217.1c2.4,0,4.2,0.5,5.3,1.6c1.1,1.1,1.6,2.4,1.6,3.9c0,0.7-0.1,1.4-0.3,2c-0.2,0.6-0.6,1.2-1.1,1.8
c-0.5,0.6-1.2,1-2.2,1.3c-0.9,0.3-2,0.5-3.3,0.5h-3v5.8c0,0.3,0,0.6,0.1,0.7c0.1,0.1,0.3,0.2,0.7,0.2h1.5v1h-7.7v-1h0.7
c0.4,0,0.6-0.1,0.7-0.2c0.1-0.1,0.1-0.3,0.1-0.7v-15.1c0-0.3,0-0.6-0.1-0.7c-0.1-0.1-0.3-0.2-0.7-0.2h-0.7v-1H200.3z M199.5,218.1
h-2.2v9.2h2.2c1.3,0,2.3-0.4,2.9-1.1c0.6-0.7,0.9-1.9,0.9-3.6c0-1.6-0.3-2.8-0.9-3.5C201.8,218.4,200.8,218.1,199.5,218.1" />
        </svg></div>
    <script>
        var loadDeferredStyles = function() {
            var addStylesNode = document.getElementById("deferred-styles");
            var replacement = document.getElementById("render-styles");
            replacement.innerHTML = addStylesNode.textContent;
            document.body.appendChild(replacement)
            addStylesNode.parentElement.removeChild(addStylesNode);
        };
        var raf = requestAnimationFrame || mozRequestAnimationFrame ||
            webkitRequestAnimationFrame || msRequestAnimationFrame;
        if (raf) raf(function() {
            window.setTimeout(loadDeferredStyles, 0);
        });
        else window.addEventListener('load', loadDeferredStyles);
    </script>

    <?php require "header.php" ?>

    <main class="main">
        <div class="smooth-scroll">
            <div class="container" id="news-details-page">
                <script>
                    if (document.querySelector('#home-page')) {
                        Array.from(document.querySelectorAll('.mask, .loadicon'), function(element) {
                            if (element) element.style.display = "block";
                        });
                        document.querySelector('.header').style.visibility = "visible";
                    }
                </script>
                <div class="tile-reveal"></div>
                <section class="banner-inner">
                    <div class="title-page">
                        <h1><?= __('Tin tức & sự kiện') ?></h1>
                    </div>
                    <div class="bg-inner"><img src="/images/bg.png"
                            data-src="/images/bg.png" alt="Tin tức" class="lazy"></div>
                    <div class="wrap-wheel">
                        <div class="wheel"><span>Scroll down</span></div>
                    </div>
                </section>
                <section class="project-details-intro">
                    <div class="wrap-content">
                        <div class="breadcrumb">
                            <ul>
                                <li><a class="link-load" href="/"> <?= __('Trang chủ') ?></a></li>
                                <li><a class="link-load" href="/tin-tuc-su-kien"><?= __('Tin tức & sự kiện') ?></a></li>

                            </ul>
                        </div>
                        <div class="left-content">
                            <div class="title-main title-underline color-blue title-underline text-left bold-medium">
                                <h1 class="text-ani-item">
                                    <?php
                                    if ($_SESSION['lang'] == 'vn') {
                                        echo $detail['headline'];
                                    } else {
                                        echo $detail['headline_en'];
                                    }
                                    ?>
                                </h1>
                            </div>
                            <div class="share"><span>Share</span>
                                <ul>
                                    <li><a class="facebook"
                                            href="<?php echo $info_web['page_facebook'] ?>"
                                            target="_blank" rel="noreferrer"><svg viewBox="0 0 60 60">
                                                <path fill="currentColor" d="M36.7,25.1h-4.5c-0.25-4.86,0.18-4.22,4.3-4.2V16c-8.4-0.67-10.99,1.62-10.4,9.2h-2.8v5h2.8c0,6.4,0,14.2,0,14.2H32
c0,0,0-7.8,0-14.2h3.9L36.7,25.1z"></path>
                                            </svg></a></li>
                                    <li>
                                        <a class="zalo "
                                            href="<?php echo $info_web['page_zalo'] ?>"
                                            target="_blank">
                                            <svg viewBox="0 0 100 60">
                                                <path fill="currentColor" d="M25.82,35.86h9.03c1.6,0,2.62,0.73,2.76,2.03c0.14,1.6-0.73,2.77-2.62,2.77h-13.1c-1.16,0-2.48-0.29-3.06-1.6
c-0.59-1.31-0.14-2.33,0.58-3.35c3.2-4.08,6.41-8.3,9.76-12.38c0.14-0.29,0.44-0.44,0.58-0.73c-0.14-0.29-0.44-0.14-0.73-0.14h-6.84
c-0.58,0-1.02,0-1.6-0.14c-1.16-0.29-1.89-1.46-1.6-2.62c0.14-0.73,0.87-1.46,1.6-1.6c0.44-0.14,1.02-0.14,1.6-0.14h11.2
c0.73,0,1.31,0,2.03,0.29c1.46,0.44,2.03,1.75,1.46,3.2c-0.44,1.16-1.31,2.19-2.03,3.2C34.85,24.65,26.25,35.42,25.82,35.86z
M62.79,28.43v9.76c0,1.46-1.16,2.76-2.62,2.76c-1.39,0-2.62-1.46-2.62-2.91V18.53c0-1.6,1.02-2.62,2.62-2.62
c1.6,0,2.62,1.02,2.62,2.76V28.43z"></path>
                                                <path fill="currentColor" d="M52.02,23.34c-0.87,0.14-1.31,0.73-1.89,1.46c-2.62-2.33-5.53-2.47-8.3-0.73c-3.49,2.03-4.66,5.24-4.22,9.17
c0.44,3.49,1.89,6.41,5.68,7.71c2.33,0.73,4.51,0.44,6.41-1.02c0.44-0.44,0.59-0.29,1.02,0.14c0.73,0.87,1.89,1.16,2.91,0.87
c1.02-0.29,1.75-1.31,1.75-2.33V26.1C55.23,24.07,53.77,23.05,52.02,23.34z M49.11,34.98c-1.16,1.46-3.35,1.89-4.81,0.73
c-0.29-0.14-0.44-0.44-0.73-0.73c-0.58-0.73-0.87-1.6-0.87-2.47c0-2.91,1.6-4.81,3.93-4.66c1.02,0,1.89,0.58,2.48,1.31
C50.28,30.76,50.28,33.38,49.11,34.98z M82.44,31.64c-0.14-5.24-4.08-8.88-9.46-8.59c-5.09,0.14-8.59,4.22-8.44,9.6
c-0.14,5.24,4.22,9.17,9.76,8.59C79.39,40.81,82.59,37.02,82.44,31.64z M76.19,35.13c-1.16,1.46-3.35,1.75-4.81,0.59
c-0.29-0.14-0.44-0.44-0.59-0.59c-0.58-0.87-0.87-1.89-0.87-2.91c0-2.62,1.6-4.36,3.79-4.22c1.02,0,1.89,0.58,2.47,1.31
C77.5,30.76,77.5,33.53,76.19,35.13z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="right-content">
                            <?php
                            if ($_SESSION['lang'] == 'vn') {
                                echo $detail['content'];
                            } else {
                                echo $detail['content_en'];
                            }
                            ?>
                        </div>
                    </div>
                </section>
                <section class="news-relative mb-10">
                    <div class="wrap-content md:!p-0">
                        <div class="title-post text-center color-blue title-underline">
                            <h2 class="text-ani-item"><?= __('Các tin khác') ?></h2>
                        </div>
                        <div class="slide-news-relative ani-item arrow-outside dot-dark">
                            <div class="slidebox-track">
                                <div class="slidebox-list">

                                    <!-- <div class="item-news slidebox-item ">
                                        <div class="pic-news">
                                            <div class="date">26<span>10-2024 </span></div>
                                            <div class="pic-img"><img
                                                    src="/pictures/mobile/catalog/the-emerald-golf-view/ky-ket-hop-tac/IMG1105-Edit-copy.jpg"
                                                    data-src="/pictures/catalog/the-emerald-golf-view/ky-ket-hop-tac/IMG1105-Edit-copy.jpg"
                                                    alt="LỄ KÝ KẾT HỢP TÁC PHÂN PHỐI ĐỘC QUYỀN DỰ ÁN THE EMERALD GOLF VIEW"
                                                    class="lazy"></div>
                                        </div>
                                        <div class="txt-news">
                                            <h3>LỄ KÝ KẾT HỢP TÁC PHÂN PHỐI ĐỘC QUYỀN DỰ ÁN THE EMERALD GOLF VIEW</h3>
                                        </div>
                                        <div class="wrap-view-details"><a
                                                href="/truyen-thong/tin-tuc/le-ky-ket-hop-tac-phan-phoi-doc-quyen-du-an-the-emerald-golf-view.html"
                                                class="view-details dark" data-details="news-398"
                                                aria-label="link"><span class="small-logo-ico"><svg>
                                                        <use xlink:href="#ico-view-details-logo"></use>
                                                    </svg> <span class="rotate-logo"><svg>
                                                            <use xlink:href="#ico-view-details-rotate"></use>
                                                        </svg> </span></span> XEM TIN <svg class="viewdetails-svg">
                                                    <use xlink:href="#arrow"></use>
                                                </svg></a>
                                            <div class="class-hidden link-change-url"
                                                data-title="LỄ KÝ KẾT HỢP TÁC PHÂN PHỐI ĐỘC QUYỀN DỰ ÁN THE EMERALD GOLF VIEW"
                                                data-description="" data-keyword="" aria-label="link-change-url"></div>
                                        </div>
                                    </div> -->
                                    
                                    <?php
                                    shuffle($data_project);
                                    $firstBlogs = array_slice($data_project, 0, 8);
                                    foreach ($firstBlogs as $key => $value) {
                                    ?>

                                        <div class="item-news slidebox-item ">
                                            <div class="pic-news" onclick="location.reload();">
                                                <?php
                                                $date = new DateTime($value['created_at']);
                                                $day = $date->format('d');
                                                $monthYear = $date->format('m-Y');
                                                ?>
                                                <div class="date">
                                                    <?php echo $day; ?>
                                                    <span><?php echo $monthYear; ?></span>
                                                </div>
                                                <div class="pic-img">
                                                    <img src="
                                                <?php
                                                echo $url_be, $value['image'];
                                                ?>
                                                " data-src="
                                                <?php
                                                echo $url_be, $value['image'];
                                                ?>
                                                " alt="
                                                    <?php
                                                    echo $value['headline'];
                                                    ?>
                                                " class="lazy" />
                                                </div>

                                            </div>

                                            <div class="txt-news" onclick="location.reload();">
                                                <h3>
                                                    <?php
                                                    if ($_SESSION['lang'] == 'vn') {
                                                        echo $value['headline'];
                                                    } else {
                                                        echo $value['headline_en'];
                                                    }
                                                    ?>
                                                </h3>
                                            </div>

                                            <div class="wrap-view-details">
                                                <a
                                                    href="<?php echo '/' . 'tin-tuc/' . $value['slug'] ?>-<?php echo $value['id'] ?>.html"
                                                    class="view-details dark link-load"
                                                    aria-label=" Lingo group">
                                                    <span class="small-logo-ico">
                                                        <?php include "component/logoLoading.php" ?>
                                                        <span class="rotate-logo">
                                                            <svg>
                                                                <use xlink:href="#ico-view-details-rotate"></use>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <?= __('XEM TIN') ?>
                                                    <svg class="viewdetails-svg">
                                                        <use xlink:href="#arrow"></use>
                                                    </svg>
                                                </a>

                                            </div>
                                        </div>
                                    <?php } ?>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <?php require "footer.php" ?>

            </div>
        </div>
    </main>
    <div class="register"><span></span> <button class="close-regis close-format" aria-label="close"><svg>
                <use xlink:href="#ico-close-menu"></use>
            </svg> <span class="line-toggle toggle-1"></span> <span class="line-toggle toggle-2"></span></button>
        <div class="register-form">
            <div class="wrap-register-form">
                <form id="register" name="register" method="post" onsubmit="return false;">
                    <div class="require-col color-blue">
                        <div class="title-small color-blue text-left">
                            <div class="title-sp">Đăng ký nhận tin</div>
                            <p>Để biết thêm chi tiết về các dự án, vui lòng để lại thông tin liên hệ, bộ phận kinh doanh
                                của chúng tôi sẽ chủ động liên hệ trực tiếp tới Quý khách. Trân trọng.</p>
                        </div>
                        <div class="input-text"><span class="holder">Họ tên<small class="red-star">*</small></span>
                            <input id="nameregister" name="nameregister" value="" type="text"
                                data-error="Vui lòng nhập tên!" data-default="Họ tên" aria-label="fullname">
                        </div>
                        <div class="input-text"><span class="holder">Email<small class="red-star">*</small></span>
                            <input id="emailregister" name="emailregister" value="" type="text"
                                data-error="Email không hợp lệ!" data-default="Email" aria-label="email">
                        </div>
                        <div class="input-text"><span class="holder">Điện thoại<small class="red-star">*</small></span>
                            <input id="phoneregister" name="phoneregister" value="" type="text"
                                data-error="Điện thoại không hợp lệ!" data-default="Điện thoại" aria-label="phone">
                        </div>
                        <div class="wrap-view-details big-view"><button class="view-details dark" aria-label="submit"
                                id="btn-register-submit" data-page="/thank-you-.html"><span class="small-logo-ico"><svg>
                                        <use xlink:href="#ico-view-details-logo"></use>
                                    </svg> <span class="rotate-logo"><svg>
                                            <use xlink:href="#ico-view-details-rotate-send"></use>
                                        </svg> </span></span> GỬI <svg class="viewdetails-svg">
                                    <use xlink:href="#arrow"></use>
                                </svg></button></div>
                    </div>
                </form>
            </div>
            <div class="regis-info color-white">
                <div class="title-small color-white text-left">
                    <div class="title-sp">Thông tin liên hệ</div>
                </div>
                <ul class="company-regis-info">
                    <li><span class="call"><svg>
                                <use xlink:href="#ico-phone"></use>
                            </svg></span>
                        <p><a href="tel:028-7305-6839">(028) 7305 6839</a> - <a href="tel:0932-92-94-96">0932 92 94
                                96</a></p>
                    </li>
                    <li><span class="email"><svg>
                                <use xlink:href="#ico-email"></use>
                            </svg></span>
                        <p><a href="mailto:info@sengroup.net">info@sengroup.net</a></p>
                    </li>
                    <li><span class="address"><svg>
                                <use xlink:href="#ico-company-address"></use>
                            </svg></span>
                        <p><a href="https://www.google.com/maps/place/11+%C4%90.+Nguy%E1%BB%85n+C%C3%B4ng+Tr%E1%BB%A9,+Ph%C6%B0%E1%BB%9Dng+Nguy%E1%BB%85n+Th%C3%A1i+B%C3%ACnh,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7700544,106.7018674,17z/data=!3m1!4b1!4m6!3m5!1s0x31752f4174c47f21:0x184d28bc63cf70ea!8m2!3d10.7700544!4d106.7044423!16s%2Fg%2F11bw3y54pl?entry=ttu"
                                target="_blank" rel="noopener">11 Nguyễn Công Trứ, Phường Nguyễn Thái Bình, Quận 1, TP.
                                HCM</a></p>
                    </li>
                </ul>
                <div class="social-regis">
                    <ul>
                        <li><a class="facebook" href="https://www.facebook.com/SenGroup.vn" target="_blank"
                                rel="noopener" aria-label="facebook"><svg>
                                    <use xlink:href="#ico-facebook"></use>
                                </svg></a></li>
                        <li><a class="youtube" href="https://www.youtube.com/channel/UCImEWP7omdaGVCeN_T5G57A"
                                target="_blank" rel="noopener" aria-label="youtube"><svg>
                                    <use xlink:href="#ico-youtube"></use>
                                </svg></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="all-pics"></div>
    <div class="all-album"></div>
    <div class="allvideo"></div>
    <div class="overlay-dark"></div>
    <div id="page-progress"></div>
    <div id="mouse-cursor"></div>
    <div id="cursor">
        <div class="cursor-bg"><svg>
                <use xlink:href="#ico-loading-logo"></use>
            </svg> <span class="circle-rotate-cursor"><svg>
                    <use xlink:href="#ico-view-details-rotate"></use>
                </svg></span></div>
    </div>
    <div class="search-overlay"><span></span>
        <div class="search-form">
            <div class="form-row-search">
                <form onsubmit="return false;" id="search" method="get">
                    <div class="search-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path fill="currentColor"
                                d="M33.3,31.9c-0.6,0.6-1.3,1-2,1.4l5.9,5.9c1,0.9,2.5,0.9,3.4,0c0.9-1,0.9-2.5,0-3.4l-5.9-5.9C34.4,30.6,33.9,31.3,33.3,31.9z" />
                            <path fill="currentColor" d="M14.9,30.8c4.8,4.8,12.7,4.8,17.5,0s4.8-12.6,0-17.4s-12.7-4.8-17.5,0S10.1,25.9,14.9,30.8z M17.1,15.5
c3.7-3.7,9.6-3.7,13.3,0s3.7,9.5,0,13.2s-9.6,3.7-13.3,0S13.4,19,17.1,15.5z" />
                        </svg></div>
                    <div class="input-text"><span class="holder">Tìm kiếm ...</span><input type="text" id="quicksearch"
                            name="quicksearch" data-default="Tìm kiếm ..." value="" aria-label="field-search">
                        <div class="search-error" id="errorsearch">
                            <div class="search-error-content">Từ khóa không được dưới 3 kí tự, vui lòng nhập lại từ khóa
                                tìm kiếm!</div>
                        </div><button class="display-none link-search-load-typing" data-href="/tim-kiem"
                            aria-label="search"></button>
                    </div>
                    <div class="close-search"></div><input type="hidden" id="defaultvalue" name="defaultvalue"
                        value="Tìm kiếm ..." aria-label="default value"> <input type="hidden" id="errorsearchcode"
                        name="errorsearch" value="Từ khóa không được dưới 3 kí tự, vui lòng nhập lại từ khóa tìm kiếm!"
                        aria-label="errorsearch"> <input type="hidden" id="href_search" name="href_search"
                        value="/tim-kiem" aria-label="href search">
                </form>
            </div>
        </div>
        <div class="search-loading">
            <div class="load-search-list"></div>
        </div>
    </div>
    <div class="bg-degree"></div>
    <div class="httpserver class-hidden">/</div>
    <div class="httptemplate class-hidden">/catalog/view/</div>
    <script type="text/javascript" src="/catalog/view/js/gsap.js"></script>

    <script src="/catalog/view/js/app.js?ver=1.0.8" type="text/javascript"></script>