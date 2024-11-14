<?php
require_once "../setting-all-file.php";


$data_project = [];


// Call project
$apiUrl_project = $url_be . '/api/blog/getlistblog?api_key=8AF1apnMW2A39Ip7LUFtNstE5RjYleghk';

// Initialize cURL session
$ch = curl_init($apiUrl_project);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return response as a string
curl_setopt($ch, CURLOPT_TIMEOUT, 30); // Set timeout to 30 seconds

// Execute cURL request
$response_project = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch);
    curl_close($ch);
    return null;
}

// Close cURL session
curl_close($ch);

// Decode the JSON data
$data = json_decode($response_project, true);

if ($data && $data['status'] === true && isset($data['data'])) {
    $data_project = $data['data'];
    // Optionally print the data for debugging
    // print_r($data_project);
} else {
    echo "Error fetching data or no data available.";
}

?>


<script>
    // Check if the page was loaded due to a refresh
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        // Redirect to /truyen-thong.php on refresh
        window.location.href = "/tin-truyen-thong";
    }
</script>
<div class="title-main color-blue text-center title-underline bold-medium">
    <h2 class="text-ani-item"><?= __('Tin tức') ?></h2>
</div>
<div class="news-list">
    <?php

    foreach ($data_project as $key => $value) {
    ?>
        <div class="item-news ani-item">
            <div class="pic-news">
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
            <div class="txt-news">
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
                    href="<?php echo 'tin-tuc/' . $value['slug'] ?>-<?php echo $value['id'] ?>.html"
                    class="view-details dark link-load"
                    aria-label=" Lingo group ️">
                    <span class="small-logo-ico">
                        <?php include "../component/logoLoading.php" ?>
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

<!-- // load theo page, vậy cho limit nhiều -->


<div class="list-viewmore-news">
    <div class="wrap-more-project">

        <a href="#foo" data-href="/truyen-thong/fake_loading.php" class="more-project"
            aria-label="news">
        </a>

    </div>
    <div class="loading">
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>