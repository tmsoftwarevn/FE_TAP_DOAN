<?php

$data_project = [];

$url_be = 'https://belingo.tmsoftware.vn';
// call project
$apiUrl_project = $url_be . '/api/blog/getlistblog?api_key=8AF1apnMW2A39Ip7LUFtNstE5RjYleghk';
$response_project = file_get_contents($apiUrl_project);
$data = json_decode($response_project, true); // Decode the JSON data

if ($data && $data['status'] === true && isset($data['data'])) {
    $data_project = $data['data'];
    // echo 'llllll';
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
    <h2 class="text-ani-item">TIN TỨC</h2>
</div>
<div class="news-list">
    <?php
    foreach ($data_project as $key => $value) {
    ?>
        <div class="item-news ani-item">
            <div class="pic-news">
                <div class="date">31<span>10-2024 </span></div>
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
                <h3> <?php
                        echo $value['headline'];
                        ?>
                </h3>
            </div>
            <div class="wrap-view-details">
                <a href="../tin-tuc/detail-tintuc.php" class="view-details dark link-load"
                    aria-label=" SỰ KIỆN ĐÀO TẠO NỘI BỘ PHONG CÁCH BÁN HÀNG CHUẨN SEN GROUP &amp; ĐÀO TẠO DỰ ÁN THE EMERALD GOLF VIEW ️">
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
        </div>
    <?php } ?>
    <div class="item-news ani-item">
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
    </div>
    <div class="item-news ani-item">
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
    </div>
    <div class="item-news ani-item">
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
    </div>

</div>

<!-- // load theo page, vậy cho limit nhiều -->


<div class="list-viewmore-news">
    <div class="wrap-more-project">
    <!-- /data-du-an-tieu-bieu/data.php?page=1 -->
        <a href="#foo" data-href="/truyen-thong/videos.php?page=1" class="more-project"
            aria-label="news">
        </a>
    </div>
    <div class="loading">
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>