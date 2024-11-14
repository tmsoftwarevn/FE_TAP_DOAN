<?php
require_once "../setting-all-file.php";

$data_project = [];

$url_be = 'https://belingo.tmsoftware.vn';
// Call project
$apiUrl_project = $url_be . '/api/project/getlistproject?api_key=8AF1apnMW2A39Ip7LUFtNstE5RjYleghk';

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



<div class="title-main color-blue text-center title-underline bold-medium">
    <h2 class="text-ani-item"><?= __('Dự án tiêu biểu') ?></h2>
</div>
<div class="news-list">
    <!-- <div class="item-news ani-item">
        <div class="pic-news">
            <div class="date">31<span>10-2024 </span></div>
            <div class="pic-img"><img src="../banner/1920x960.png" data-src="../banner/1920x960.png" alt=" SỰ KIỆN ĐÀO TẠO NỘI BỘ PHONG CÁCH BÁN HÀNG CHUẨN SEN GROUP &amp; ĐÀO TẠO DỰ ÁN THE EMERALD GOLF VIEW ️"
                    class="lazy"></div>
        </div>
        <div class="txt-news">
            <h3> SỰ KIỆN ĐÀO TẠO NỘI BỘ PHONG CÁCH BÁN HÀNG CHUẨN SEN GROUP &amp; ĐÀO TẠO DỰ ÁN THE EMERALD GOLF VIEW ️</h3>
        </div>
        <div class="wrap-view-details">
            <a href="../tin-tuc/detail-tintuc.php" class="view-details dark link-load" aria-label=" SỰ KIỆN ĐÀO TẠO NỘI BỘ PHONG CÁCH BÁN HÀNG CHUẨN SEN GROUP &amp; ĐÀO TẠO DỰ ÁN THE EMERALD GOLF VIEW ️">
                <span class="small-logo-ico">
                    <?php include "../component/logoLoading.php" ?>
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
    </div> -->

    <?php
    foreach ($data_project as $key => $value) {
    ?>
        <div class="item-news ani-item">
            <div class="pic-news">
                <!-- <div class="date">31<span>10-2024 </span></div> -->
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
                <a href="<?php echo 'du-an/' . $value['slug'] ?>-<?php echo $value['id'] ?>.html"
                    class="view-details dark link-load"
                    aria-label="Lingo Group ️">
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

    <a href="#foo" data-href="/truyen-thong/fake_loading.php" class="more-project" aria-label="news">
    </a>

    <div class="loading">
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>