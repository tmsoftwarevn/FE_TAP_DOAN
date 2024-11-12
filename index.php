
<?php
require_once "setting-all-file.php";

$list_blog = [];
$data_banner = [];
$data_project = [];
$data_blog = [];

$url_be = 'https://belingo.tmsoftware.vn';
$api_key = '8AF1apnMW2A39Ip7LUFtNstE5RjYleghk';

// Function to make API requests using cURL
function fetch_api_data($url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 1); // Set timeout in seconds
    $response = curl_exec($ch);

    // Check for cURL errors
    if (curl_errno($ch)) {
        echo 'Error: ' . curl_error($ch);
        curl_close($ch);
        return null;
    }

    curl_close($ch);
    return json_decode($response, true);
}

// Call banner API
$apiUrl_banner = $url_be . '/api/project/getlistcategory?api_key=' . $api_key;
$data = fetch_api_data($apiUrl_banner);

if ($data && $data['status'] === true && isset($data['data'])) {
    $data_banner = $data['data'];
} else {
    echo "Error fetching banner data or no data available.";
}

// Call project API
$apiUrl_project = $url_be . '/api/project/getlistproject?api_key=' . $api_key;
$data = fetch_api_data($apiUrl_project);

if ($data && $data['status'] === true && isset($data['data'])) {
    $data_project = $data['data'];
} else {
    echo "Error fetching project data or no data available.";
}

// Call blog API
$apiUrl_blog = $url_be . '/api/blog/getlistblog?api_key=' . $api_key;
$data = fetch_api_data($apiUrl_blog);

if ($data && $data['status'] === true && isset($data['data'])) {
    $data_blog = $data['data'];
} else {
    echo "Error fetching blog data or no data available.";
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

    <title id="hdtitle">Trang chủ</title>
    <meta name="description" content="LINGO GROUP">
    <meta name="keywords" content="LINGO GROUP">
    <meta property="og:title" content="Trang chủ">
    <meta property="og:description" content="LINGO GROUP">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="LINGO GROUP">
    <meta property="og:image" content="/images/logo.png">
    <meta property="og:locale" content="vi">

    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="LINGO GROUP">

    <link rel="icon" href="/images/logo.png" type="image/x-icon" />
    <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />

    <!-- <link rel="apple-touch-icon" sizes="180x180" href="/catalog/view/images/apple-touch-icon.png"> -->
    <!-- <link rel="manifest" href="/manifest.json"> -->
    <!-- <link rel="alternate" href="/" hreflang="vi-vn"> -->
    <!-- <link rel="alternate" href="/en/" hreflang="en-vn"> -->
    <!-- <link href="/" rel="canonical"> -->
    <!-- <meta property="og:url" content="/"> -->

    <!-- //tailwind css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css" />

    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="/css/main.css">

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

    <div class="loadicon" style="display:none"><span></span>

        <img src="/images/logo.png" class="w-full h-auto rounded-full object-contain" />


    </div>

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
            <div class="container" id="home-page">
                <script>
                    if (document.querySelector('#home-page')) {
                        Array.from(document.querySelectorAll('.mask, .loadicon'), function(element) {
                            if (element) element.style.display = "block";
                        });
                        document.querySelector('.header').style.visibility = "visible";
                    }
                </script>
                <div class="title-page">
                    <h1>LINGO GROUP</h1>
                </div>
                <section class="home-banner">
                    <div class="background">
                        <div class="slide-background" data-time="10000">
                            <div class="slidebox-track"><span class="color-overlay"></span>
                                <div class="slidebox-list">
                                    <!-- <div class="bg slidebox-item">
                                        <div class="bg-cover">
                                            <img src="banner/du-an-the-privia-khang-dien-binh-tan.jpg"
                                                data-src="banner/du-an-the-privia-khang-dien-binh-tan.jpg"
                                                alt="THE PRIVIA" class="lazy" />
                                        </div>
                                        <div class="text-banner">
                                            <div class="title-banner">
                                                <h2>THE PRIVIA</h2>
                                            </div>
                                            <p>The Privia là dự án căn hộ chung cư cao cấp được đầu tư bởi nhà phát
                                                triển LINGO GROUP hàng đầu Việt Nam – Khang Điền Home. The Privia được
                                                tọa lạc ngay tại trái tim của  khu Tây Sài Gòn. Với việc sở hữu được
                                                vị trí vô cùng đắc địa mặt tiền đường An Dươn</p>
                                            <div class="wrap-view-details">
                                                <a href="/du-an/detail-du-an.php"
                                                    class="view-details link-load" aria-label="link">
                                                    <span
                                                        class="small-logo-ico">
                                                        <?php include "component/logoLoading.php" ?>
                                                        <span class="rotate-logo">
                                                            <svg>
                                                                <use xlink:href="#ico-view-details-rotate"></use>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    Xem dự án
                                                    <svg
                                                        class="viewdetails-svg">
                                                        <use xlink:href="#arrow"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div> -->
                                    <?php
                                    foreach ($data_banner as $key => $value) {
                                    ?>
                                        <div class="bg slidebox-item">
                                            <div class="bg-cover">
                                                <!-- <img src="
                                                <?php
                                                echo $url_be, $value['image'];
                                                ?>
                                                " data-src="
                                                <?php
                                                echo $url_be, $value['image'];
                                                ?>
                                                " alt="
                                                    <?php
                                                    echo $value['name'];
                                                    ?>
                                                " class="lazy" /> -->
                                                <img src="banner/bg.jpg"
                                                data-src="banner/bg.jpg"
                                                alt="THE PRIVIA" class="lazy" />
                                            </div>
                                            <div class="text-banner">
                                                <div class="title-banner">
                                                    <h2>
                                                        <?php
                                                        echo $value['name'];
                                                        ?>
                                                    </h2>
                                                </div>
                                                <?php
                                                echo $value['description'];
                                                ?>
                                                <div class="wrap-view-details">
                                                    <a href="/du-an/detail-du-an.php" class="view-details link-load"
                                                        aria-label="link">
                                                        <span class="small-logo-ico">
                                                            <?php include "component/logoLoading.php" ?>
                                                            <span class="rotate-logo">
                                                                <svg>
                                                                    <use xlink:href="#ico-view-details-rotate"></use>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        Xem dự án
                                                        <svg class="viewdetails-svg">
                                                            <use xlink:href="#arrow"></use>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    <?php } ?>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="home-intro">
                    <div class="pic-home-intro">
                        <div class="bg-cover bg-lazy"></div>
                    </div>
                    <div class="scroll-text font-accent trans-x" data-speed="4"><span>LINGO GROUP LINGO GROUP LINGO
                            GROUP LINGO GROUP</span> <span>LINGO GROUP LINGO GROUP LINGO GROUP LINGO GROUP</span></div>
                    <div class="wrap-content">
                        <div class="text-home-intro">
                            <div class="title-main color-yellow text-left">
                                <h2 class="text-ani-item"><strong>Triết Lý</strong></h2>
                                <div class="home-intro-draw draw-vi">
                                    <svg class="nums-drawing" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 800 220"
                                        xml:space="preserve">
                                        <image xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xlink:href="/catalog/view/images/home/lotus-vi.svg" width="100%"
                                            height="100%" mask="url(#clipmask01)"></image>
                                        <!-- <mask id="clipmask01" maskUnits="objectBoundingBox">
                                            <path data-start="0" data-duration="15" d="M83.9,105.2c0,0-15.3-4.2-18.7-8c-3-3.2-2.9-12.3-2.4-16.6c0.6-4.4,4.7-12.6,7.6-16
c3-3.6,10.8-9,14.8-11.5c8.2-5.3,26.1-13.8,35.4-16.9c8.1-2.8,25.2-5.4,33.7-6.5c16.4-2.1,65.8-4.3,65.8-4.3s-12.7,8.9-16.3,12.6
c-11.1,11.7-36.9,53-36.9,53s-25.7,42.5-35.8,55.6c-6.8,8.7-21.4,25.5-30,32.4c-5.2,4.2-16.7,11.3-22.8,14.1
c-4.3,2-13.1,5.7-17.8,6.3c-5.6,0.7-17.3,1.2-22.4-1.1c-3.3-1.5-9.2-6.5-10.6-9.8c-3.2-7.3-5.2-24.1-2.8-31.7
c3.6-11.8,18.2-30.2,26.9-39c6-6,19.8-17.5,27.3-22.1c4.9-2.9,15.1-7.9,20.5-9.8c4-1.4,12.3-3.9,16.5-4.1c2.9-0.2,9.2-0.2,11.7,1.3
c2.1,1.3,5.6,5.4,6.1,7.8c0.4,1.9-0.9,7.8-0.9,7.8" />
                                            <line data-start="16" data-duration="25" style="stroke-width:20px"
                                                x1="118.6" y1="94" x2="260.2" y2="88.3" />
                                            <polyline data-start="32" data-duration="15" style="stroke-width:15px"
                                                points="302.8,28.5 294.3,20.8 278.3,23.6 266.3,33.6 247,60.3 221.8,107 198.4,148.7 199.2,157.8 208.1,158.9 228.3,148.7 243.5,136.2" />
                                            <path data-start="47" data-duration="15" style="stroke-width:15px"
                                                d="M280.2,95.7c0,0-15.8,11.4-20,16.2c-2.8,3.1-7.1,10.4-9,14.1c-1.8,3.6-5,11.1-5.3,15.1c-0.2,2.9,0.5,9.1,2.2,11.5c1.6,2.2,6.9,4.9,9.6,5.4c3.2,0.6,9.7-1,12.8-1.9c4.5-1.3,13.2-5.1,16.9-7.8c3.3-2.4,8.6-8.9,11.1-12.2c2.8-3.7,8.5-11.4,9.8-15.9c1.3-4.6,2.2-15,0-19.3c-1.1-2.2-6-4.3-8.3-5.2c-3.4-1.3-14.2-2.7-14.2-2.7" />
                                            <path data-start="63" data-duration="30"
                                                d="M372.5,101.4c0,0-0.7-8.4-2.8-9.9c-2.4-1.8-9.2-0.9-12.1,0c-4.3,1.3-11.7,6.8-14.8,9.9
c-5.5,5.6-13.9,19.1-17.1,26.2c-2.4,5.4-6.2,16.9-5.9,22.8c0.1,2,1.1,6.4,2.8,7.6c1.6,1.1,5.8,0.5,7.7,0
c3.8-0.9,28.9-17.4,31.4-20.4c3.6-4.3,5.3-11.1,7.5-13.9c7.3-9.5,10.7-23.6,10.7-23.6l5.5,1c0,0-30.3,37.6-29.2,52.6
c0.1,1.4,2,3.9,3.3,4.3c2.2,0.8,6.9-1,9.1-1.9c4.5-2,12.3-8.1,16-11.4c3.7-3.3,10.2-10.9,13.2-14.8c2.3-3,8.2-12.5,8.2-12.5" />
                                            <path data-start="87" data-duration="30" d="M599.3,85.1c0,0,27.2-13.6,35.4-19.5c4.7-3.4,14-11,16.9-16.1c1.1-1.9,2.6-6.4,2-8.5
c-0.6-2.1-4.3-5.2-6.3-6.1c-4.8-2.1-15.6-1.7-20.9-1.3c-14.3,1.2-42.3,8.2-55.8,12.8c-15,5.2-44.3,18.2-57.6,26.9
c-11.9,7.8-36.4,24.8-42.6,37.6c-2.6,5.3-4.7,19-1.1,23.7c2,2.6,9.4,2.7,12.6,2.8c9.5,0.4,28.4-3.5,37.8-5.2
c13.6-2.5,40.1-13,53.9-12.2c6,0.4,18.4,4,22.8,8.2c2.5,2.4,5.9,9.3,5.2,12.7c-1.7,8-17,18-23.5,23c-7.7,6-24.4,16-33.2,20.2
c-7.8,3.7-19.3,10.4-27.8,11.8c-4,0.7-17.7,1.8-21.1-0.4c-2.5-1.6-5.5-8-4.8-11c0.9-4,9.3-8.1,12.6-10.6c3.2-2.5,9.7-7.4,13.2-9.3
c8.8-4.8,27.5-12.2,37.1-15c18.8-5.3,77-13.3,77-13.3" />
                                            <path data-start="117" data-duration="25" d="M648.5,130.4c0,0,4.1-3.2,8.8-6.7c3.9-3,10.5-10.5,13-14.8c1.3-2.1,4-6.9,3.5-9.3
c-0.5-2.5-4.3-6.9-6.7-7.4c-4.1-0.8-11.8,4.5-15,7.2c-4.5,3.8-11.3,13.7-13.5,19.1c-2.1,5.2-4.1,16.7-3.7,22.4
c0.3,3.9,2.1,12.1,4.8,15c1.7,1.8,6.8,3.4,9.3,3.7c3.1,0.4,9.4-0.6,12.4-1.5c4.6-1.4,12.9-6.3,16.9-8.9
c4.4-2.9,10.9-11.7,10.9-11.7" />
                                            <path data-start="142" data-duration="40"
                                                d="M690.1,157.4l32.4-61.7c0,0-0.9,15.3,1.5,13c4.8-4.5,10.8-10.4,14.3-12.5
c3.4-2,8.8-6.1,12.6-6.9c1.7-0.4,6.3,1.6,7.4,2.9c2.3,2.9-1.7,11.1-3,14.6c-2.2,5.8-9.9,15.8-12.6,21.4c-2.4,5-7.1,15.1-8.3,20.5
c-0.4,2.1-1.7,7.1-0.2,8.7c1,1,4.5,0.4,5.9,0c3.2-0.9,12.7-3.9,15.5-5.8c4.6-3.1,11.4-12.1,15.2-16.1c4-4.3,11.2-18.1,11.2-18.1" />
                                        </mask> -->
                                    </svg>

                                </div>
                                <div class="home-intro-draw draw-en"><svg class="nums-drawing"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" viewBox="0 0 500 200" xml:space="preserve">
                                        <image xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xlink:href="/catalog/view/images/home/lotus-en.svg" width="100%"
                                            height="100%" mask="url(#clipmask02)"></image>
                                        <mask id="clipmask02" maskUnits="objectBoundingBox">
                                            <path data-start="0" data-duration="15"
                                                d="M174.7,46.9l11.8-25l-11.8,1.6c0,0-16.9,2.6-22.1,4.9c-5.5,2.5-15.4,9.7-19.5,14c-4.6,4.8-16,21.5-16,21.5l-16.3,27c0,0-17.8,37.7-27,47.9c-5.2,5.8-18.1,15.2-25.4,17.9c-6,2.3-25.4,4.6-25.4,4.6l68,11.4c0,0,29.4,2.5,39.1,1.6c10-0.9,30.2-4.2,39.1-8.8c5.1-2.6,17.7-14.6,17.7-14.6" />
                                            <path data-start="16" data-duration="25" style="stroke-width:20px" d="M226.4,106.6c0,0-14.1,16.7-17.3,23.1c-3,6-9.5,19.3-7.6,25.7c1,3.4,6.8,9,10.2,9.8c5.4,1.2,16.9-0.8,21.8-3.3
c5.6-2.8,15.7-10.7,19.5-15.6c3.8-5,10.9-16.2,11.4-22.5c0.4-4.9-1.2-15.9-4.9-19.2c-3.4-3.1-17.9-4.7-17.9-4.7" />
                                            <path data-start="32" data-duration="15" style="stroke-width:18px"
                                                d="M317,84.6c0,0-26.7,43.6-32.8,59.4c-1.7,4.3-6.2,13.9-4.2,18.1c1,2.2,6.1,4.5,8.5,4.7c2.5,0.2,7.7-0.6,10-1.6c3.6-1.6,12.9-9,12.9-9l9.7-7.7" />
                                            <path data-start="47" data-duration="15" style="stroke-width:15px"
                                                d="M282.6,106.6 300.3,106.6 330.8,106.6z" />
                                            <path data-start="68" data-duration="40"
                                                d="M361,98.1c0,0-23.2,37.3-28.5,50.8c-1.3,3.2-4.8,10.2-3.3,13.2c0.9,1.7,5,3.3,6.8,3.1c3.1-0.4,8.6-4.2,11.2-6c7.6-5,23.3-15.8,29.5-22.4c7.2-7.7,20.9-34.2,20.9-34.2s-36.4,46.2-28.7,61.2c0.8,1.6,5.2,1.8,6.8,1.3c5.1-1.5,14.5-6.9,18.4-10.4c7.2-6.5,24.9-29.9,24.9-29.9" />
                                            <path data-start="80" data-duration="50"
                                                d="M484.2,132.7c0,0-53.9,6-71.3,10.7c-2.8,0.8-9.3,3.6-9.8,6.5c-0.5,3.2,5.9,7.8,8.5,9.7c3.8,2.8,13.4,5.8,18.2,5.6c5.9-0.2,18-7.1,20.1-12.7c3.1-8.4-10.7-34.2-10.7-34.2s-4.4-14.3-2.2-18.4c1.6-3,9.5-4.6,12.9-4.5c2.9,0.1,10.9,4.5,10.9,4.5l-7.5,10.7" />
                                        </mask>
                                    </svg></div>
                            </div>
                            <div class="box-txt-home-intro ani-item">
                                <p>Một loài hoa mang sức sống mãnh liệt, khao khát lan tỏa giá trị cao đẹp, vươn lên từ
                                    bùn lầy, vượt qua thử thách để hướng đến ánh mặt trời, toả ngát hương thơm và làm
                                    đẹp cho đời.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="home-business">
                    <div class="pic-home-business trans-y" data-speed="-4">
                        <div class="bg-cover bg-lazy"></div>
                    </div>
                    <div class="wrap-content">
                        <div class="left-content">
                            <div class="title-main text-left color-white">
                                <h2 class="text-ani-item"><?= __('Lĩnh Vực') ?>
                                     <br /><strong><?= __('Hoạt Động') ?></strong></h2>
                            </div>
                        </div>
                        <div class="right-content">
                            <div class="business-home-list ani-item">
                                <div class="business-home trigger-tab" data-name="business-02">
                                    <div class="box-img">
                                        <svg xmlns="https://www.w3.org/2000/svg" class="svgMask" x="0px" y="0px"
                                            width="100" height="100" viewBox="0 0 100 100">
                                            <defs>
                                                <clipPath id="maskID0">
                                                    <path
                                                        d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z">
                                                    </path>
                                                </clipPath>
                                            </defs>
                                            <image clip-path="url(#maskID0)" width="100" height="100"
                                                xlink:href="/pictures/catalog/home/home-business/Dao-Tao-Ngon-ngu.jpg">
                                            </image>
                                        </svg>
                                        <svg class="svg-stroke" xmlns="https://www.w3.org/2000/svg"
                                            viewBox="0 0 100 100">
                                            <path
                                                d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z">
                                        </svg>
                                    </div>
                                    <!-- <a href="/cong-ty-thanh-vien/sen-healthcare.html" class="link-load"
                                        aria-label="ĐÀO TẠO NGÔN NGỮ">
                                    </a> -->
                                    <span class="logo-bus-home">
                                    <!-- class="w-[70px] h-auto rounded-full object-contain" -->

                                        <img src="/images/ngon ngu.png"
                                            class="w-[50px] lg:w-[90px] h-auto object-cover mb-10"
                                             />

                                    </span>
                                </div>
                                <div class="business-home trigger-tab" data-name="business-05">
                                    <div class="box-img"><svg xmlns="https://www.w3.org/2000/svg" class="svgMask"
                                            x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                                            <defs>
                                                <clipPath id="maskID1">
                                                    <path
                                                        d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z">
                                                    </path>
                                                </clipPath>
                                            </defs>
                                            <image clip-path="url(#maskID1)" width="100" height="100"
                                                xlink:href="/pictures/catalog/home/home-business/du-hoc.jpg">
                                            </image>
                                        </svg> <svg class="svg-stroke" xmlns="https://www.w3.org/2000/svg"
                                            viewBox="0 0 100 100">
                                            <path
                                                d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z">
                                        </svg></div>
                                    <!-- <a href="/cong-ty-thanh-vien/sen-mining.html" class="link-load" aria-label="DU HỌC">
                                    </a> -->
                                    <span class="logo-bus-home">

                                    <img src="/images/du hoc.png"
                                            class="w-[50px] lg:w-[90px] h-auto object-cover mr-10"
                                             />

                                    </span>
                                </div>
                                <div class="business-home trigger-tab" data-name="business-03">
                                    <div class="box-img"><svg xmlns="https://www.w3.org/2000/svg" class="svgMask"
                                            x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                                            <defs>
                                                <clipPath id="maskID2">
                                                    <path
                                                        d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z">
                                                    </path>
                                                </clipPath>
                                            </defs>
                                            <image clip-path="url(#maskID2)" width="100" height="100"
                                                xlink:href="/pictures/catalog/home/home-business/xuat-khau-lao-dong.jpg">
                                            </image>
                                        </svg> <svg class="svg-stroke" xmlns="https://www.w3.org/2000/svg"
                                            viewBox="0 0 100 100">
                                            <path
                                                d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z">
                                        </svg></div>
                                    <!-- <a href="/cong-ty-thanh-vien/sen-construction.html" class="link-load"
                                        aria-label="XUẤT KHẨU LAO ĐỘNG">
                                    </a> -->
                                    <span class="logo-bus-home">

                                    <img src="/images/xuat khau.png"
                                            class="w-[50px] lg:w-[90px] h-auto object-cover ml-10"
                                             />

                                    </span>
                                </div>
                                <div class="business-home trigger-tab" data-name="business-04">
                                    <div class="box-img"><svg xmlns="https://www.w3.org/2000/svg" class="svgMask"
                                            x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                                            <defs>
                                                <clipPath id="maskID3">
                                                    <path
                                                        d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z">
                                                    </path>
                                                </clipPath>
                                            </defs>
                                            <image clip-path="url(#maskID3)" width="100" height="100"
                                                xlink:href="/pictures/catalog/home/home-business/ky-nang-song.jpg">
                                            </image>
                                        </svg> <svg class="svg-stroke" xmlns="https://www.w3.org/2000/svg"
                                            viewBox="0 0 100 100">
                                            <path
                                                d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z">
                                        </svg></div>
                                    <!-- <a href="/cong-ty-thanh-vien/sen-resort.html" class="link-load"
                                        aria-label="KỸ NĂNG SỐNG">
                                    </a> -->
                                    <span class="logo-bus-home">

                                    <img src="/images/ky nang.png"
                                            class="w-[50px] lg:w-[90px] h-auto object-cover mt-10"
                                             />

                                    </span>
                                </div>
                                <div class="business-home trigger-tab" data-name="business-01">
                                    <div class="box-img"><svg xmlns="https://www.w3.org/2000/svg" class="svgMask"
                                            x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                                            <defs>
                                                <clipPath id="maskID4">
                                                    <path
                                                        d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z">
                                                    </path>
                                                </clipPath>
                                            </defs>
                                            <image clip-path="url(#maskID4)" width="100" height="100"
                                                xlink:href="/pictures/catalog/home/home-business/lingo-connecto.jpg">
                                            </image>
                                        </svg> <svg class="svg-stroke" xmlns="https://www.w3.org/2000/svg"
                                            viewBox="0 0 100 100">
                                            <path
                                                d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z">
                                        </svg></div>
                                    <!-- <a href="/cong-ty-thanh-vien/sen-real.html" class="link-load"
                                        aria-label="LINGO GROUP">
                                    </a> -->
                                    <span class="logo-bus-home">

                                    <img src="/images/lingo.png"
                                            class="w-[50px] lg:w-[90px] h-auto object-cover hover:bg-orange-500 rounded-full"
                                             />

                                    </span>
                                </div>
                            </div>
                            <div class="all-tab-content all-tab-bus">
                                <div class="tab-content" data-tab="business-02">
                                    <div class="content-bus-tab-home">
                                        <h3 class="!text-blue-500"><?= __('ĐÀO TẠO NGÔN NGỮ') ?></h3>
                                        <div class="content color-white content-collapse">
                                            <p>Sứ mệnh &quot;Vì một Việt Nam khỏe đẹp&quot; SEN HEALTHCARE mong muốn góp
                                                một phần vào chăm sóc sức khỏe cộng đồng và trở thành một hệ sinh thái
                                                toàn diện của Tập đoàn LINGO GROUP.</p>
                                        </div>
                                        <div class="nav-drop"></div>
                                    </div>
                                </div>
                                <div class="tab-content" data-tab="business-05">
                                    <div class="content-bus-tab-home">
                                        <h3 class="!text-blue-500"><?= __('DU HỌC') ?></h3>
                                        <div class="content color-white content-collapse">
                                            <p>SEN MINING là lĩnh vực mũi nhọn nằm trong kế hoạch phát triển tương lai
                                                gần của LINGO GROUP.</p>
                                        </div>
                                        <div class="nav-drop"></div>
                                    </div>
                                </div>
                                <div class="tab-content" data-tab="business-03">
                                    <div class="content-bus-tab-home">
                                        <h3 class="!text-blue-500"><?= __('XUẤT KHẨU LAO ĐỘNG') ?></h3>
                                        <div class="content color-white content-collapse">
                                            <p>SEN CONSTRUCTION tập trung lĩnh vực đầu tư, thiết kế và XUẤT KHẨU LAO
                                                ĐỘNG công
                                                trình là một mắt xích quan trọng trong hệ sinh thái của Tập đoàn SEN
                                                GROUP.</p>
                                        </div>
                                        <div class="nav-drop"></div>
                                    </div>
                                </div>
                                <div class="tab-content" data-tab="business-04">
                                    <div class="content-bus-tab-home">
                                        <h3 class="!text-blue-500"><?= __('KỸ NĂNG SỐNG') ?></h3>
                                        <div class="content color-white content-collapse">
                                            <p>SEN RESORT kết hợp cùng tập đoàn chuyên nghiệp nước ngoài để vận hành và
                                                quản lý các chuỗi KỸ NĂNG SỐNG, chăm sóc sức khỏe.</p>
                                        </div>
                                        <div class="nav-drop"></div>
                                    </div>
                                </div>
                                <div class="tab-content" data-tab="business-01">
                                    <div class="content-bus-tab-home">
                                        <h3 class="!text-blue-500">LINGO GROUP</h3>
                                        <div class="content color-white content-collapse">
                                            <p>SEN REAL đã phát triển nhiều dự án BĐS nghỉ dưỡng cao cấp, gây tiếng vang
                                                lớn.</p>
                                        </div>
                                        <div class="nav-drop"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="home-project">
                    <div class="wrap-content"><span class="color-stripe"></span>
                        <div class="title-main color-blue text-left">
                            <h2 class="text-ani-item"><?= __('Dự án') ?> <strong><?= __('tiêu biểu') ?></strong></h2>
                        </div>
                        <div class="slide-project dark-pagi">
                            <div class="slidebox-track">
                                <div class="slidebox-list">
                                    <!-- <div class="item-project-home slidebox-item">
                                        <span class="logo-pro-home">

                                            <img src="/images/logo2.png" class="w-[55px] h-auto rounded-full object-contain" />

                                        </span>
                                        <div class="wrap-text-pro-home">
                                            <div class="text-project-home">
                                                <div class="title-post">
                                                    <h3>THE PRIVIA</h3>
                                                    <p>The Privia là dự án căn hộ chung cư cao cấp được đầu tư bởi nhà
                                                        phát triển LINGO GROUP hàng đầu Việt Nam – Khang Điền Home. The
                                                        Privia được tọa lạc ngay tại trái tim của  khu Tây Sài Gòn. Với
                                                        việc sở
                                                        hữu được vị trí vô cùng đắc địa mặt tiền đường An Dương Vương,
                                                        An Lạc, Bình Tân, Thành phố Hồ Chí Minh. The Privia Khang Điền
                                                        hiện đang được đánh giá là dự án LINGO GROUP cao cấp nhất tại
                                                        khu vực
                                                        phía Tây Sài Gòn.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pic-project-home custom-cursor">
                                            <div class="pic-img"><img
                                                    src="/banner/du-an-the-privia-khang-dien-binh-tan.jpg"
                                                    data-src="/banner/du-an-the-privia-khang-dien-binh-tan.jpg"
                                                    alt="THE PRIVIA" class="lazy"></div><a class="link-load"
                                                href="/du-an/detail-du-an.php"></a>
                                        </div>
                                    </div> -->

                                    <?php
                                    foreach ($data_project as $key => $value) {
                                    ?>
                                        <div class="item-project-home slidebox-item">
                                            <span class="logo-pro-home">

                                                <img src="/images/logo2.png"
                                                    class="w-[55px] h-auto rounded-full object-contain" />

                                            </span>
                                            <div class="wrap-text-pro-home">
                                                <div class="text-project-home">
                                                    <div class="title-post">
                                                        <h3>
                                                            <?php echo $value['headline'] ?>
                                                        </h3>
                                                        <?php echo $value['description'] ?>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pic-project-home custom-cursor">
                                                <div class="pic-img">
                                                    <img src="
                                                <?php
                                                echo $url_be, $value['avatar'];
                                                ?>
                                                " data-src="
                                                <?php
                                                echo $url_be, $value['avatar'];
                                                ?>
                                                " alt="
                                                    <?php
                                                    echo $value['headline'];
                                                    ?>
                                                " class="lazy" />
                                                </div>

                                                <a class="link-load"
                                                    href="<?php echo 'du-an/' . $value['slug'] ?>-<?php echo $value['id'] ?>.html">
                                                </a>

                                            </div>
                                        </div>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="home-news">
                    <div class="pic-home-news ani-item">
                        <div class="bg-cover trans-y bg-lazy" data-speed="-2"></div>
                    </div>
                    <div class="wrap-content">
                        <div class="left-content">
                            <div class="title-main color-blue text-left">
                                <h2 class="text-ani-item"><?= __('Tin tức') ?> &amp; <strong><?= __('sự kiện') ?></strong></h2>
                            </div>
                        </div>
                        <div class="right-content">
                            <div class="news-list-home ani-item">
                                <!-- <div class="item-news-home">
                                    <div class="pic-news-home">
                                        <div class="pic-img"><img src="/banner/1920x960.png"
                                                data-src="/banner/1920x960.png"
                                                alt="“CHÀO HÈ RỰC RỠ - BỨT PHÁ THÀNH CÔNG” – HÀNH TRÌNH KHÔNG THỂ NÀO QUÊN CỦA SENGROUP TẠI PHAN THIẾT"
                                                class="lazy"></div>
                                    </div>
                                    <div class="txt-news-home">
                                        <h3>“CHÀO HÈ RỰC RỠ - BỨT PHÁ THÀNH CÔNG” – HÀNH TRÌNH KHÔNG THỂ NÀO QUÊN CỦA
                                            SENGROUP TẠI PHAN THIẾT</h3>
                                        <div class="wrap-view-details">
                                            <a href="/tin-tuc/detail-tintuc.php"
                                                class="view-details dark link-load" aria-label="link">
                                                <span
                                                    class="small-logo-ico">
                                                    <?php include "component/logoLoading.php" ?>
                                                    <span class="rotate-logo">
                                                        <svg>
                                                            <use xlink:href="#ico-view-details-rotate"></use>
                                                        </svg>
                                                    </span>
                                                </span>
                                                XEM TIN
                                                <svg class="viewdetails-svg">
                                                    <use xlink:href="#arrow"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div> -->
                                <?php
                                $firstBlogs = array_slice($data_blog, 0,4);
                                foreach ($firstBlogs as $key => $value) {
                                ?>
                                    <div class="item-news-home">
                                        <div class="pic-news-home">
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
                                        <div class="txt-news-home">
                                            <h3>
                                                <?php echo $value['headline'] ?>
                                            </h3>
                                            <div class="wrap-view-details">
                                                <a
                                                    href="<?php echo 'tin-tuc/' . $value['slug'] ?>-<?php echo $value['id'] ?>.html"
                                                    class="view-details dark link-load"
                                                    aria-label="link">
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
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                        <div class="wrap-view-details big-view">
                            <a href="/tin-truyen-thong" class="view-details dark link-load" aria-label="link">
                                <span class="small-logo-ico">
                                    <?php include "component/logoLoading.php" ?>
                                    <span class="rotate-logo">
                                        <svg>
                                            <use xlink:href="#ico-view-details-rotate"></use>
                                        </svg>
                                    </span>
                                </span>
                                <?= __('XEM TIN KHÁC') ?>
                               
                                <svg class="viewdetails-svg">
                                    <use xlink:href="#arrow"></use>
                                </svg>
                            </a>
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
        <div class="cursor-bg">

            <?php include "component/logoLoading.php" ?>

            <span class="circle-rotate-cursor">
                <svg>
                    <use xlink:href="#ico-view-details-rotate"></use>
                </svg>
            </span>

        </div>
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
    <script src="/catalog/view/js/app.js" type="text/javascript"></script>

    <!-- // reload mỗi khi reload -->

    <script>
        window.addEventListener("pageshow", function(event) {
            if (event.persisted) {
                window.location.reload();
            }
        });
    </script>