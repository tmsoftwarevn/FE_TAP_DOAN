<?php
require_once "../setting-all-file.php";

$data_project = [];


// Call project
$apiUrl_project = $url_be . '/api/gallery/getlistgallery?api_key=8AF1apnMW2A39Ip7LUFtNstE5RjYleghk';

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
    <h2 class="text-ani-item">Albums</h2>
</div>

<div class="news-list">
    <div class="slide-report slide-three slide-library-report arrow-outside ani-item dot-dark">
        <div class="slidebox-track">
            <div class="slidebox-list">
                <!-- <div class="bg-item-album slidebox-item">
                    <div class="item-album">
                        <div class="pic-library">
                            <div class="pic-img"><img src="../banner/du-an-the-privia-khang-dien-binh-tan.jpg"
                                    alt=" Chương trình “Kết nối yêu thương” tại Trường Khiếm Thính Hy Vọng – Bình Thạnh.">
                            </div><a class="view-album" href="#foo" data-href="view-image.php" aria-label="album"></a>
                        </div>
                        <div class="title-pic">
                            <h3> Chương trình “Kết nối yêu thương” tại Trường Khiếm Thính Hy Vọng – Bình Thạnh.</h3>
                        </div>
                    </div>
                </div> -->
                <?php
                foreach ($data_project as $key => $value) {
                ?>
                    <div class="bg-item-album slidebox-item">
                        <div class="item-album">
                            <div class="pic-library">
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
                                <a class="view-album" href="#foo" data-href="view-image.php?id=<?php echo $value['id'] ?>" aria-label="album"></a>
                            </div>
                            <div class="title-pic">
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
                        </div>
                    </div>
                <?php } ?>

            </div>
        </div>
    </div>
</div>


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