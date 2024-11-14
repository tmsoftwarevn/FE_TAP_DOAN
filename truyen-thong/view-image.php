<?php
require_once "../setting-all-file.php";

$id = 1;
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    //  echo 'id image la:' . $id;
} else {
    echo "Khong nhan duoc ID";
}


$detail = '';


$apiUrl_project = "{$url_be}/api/gallery/getlistimage?api_key=8AF1apnMW2A39Ip7LUFtNstE5RjYleghk&id={$id}";

$ch = curl_init($apiUrl_project);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return response as a string
curl_setopt($ch, CURLOPT_TIMEOUT, 30); // Set timeout to 30 seconds

$response_project = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch);
    curl_close($ch);
    return null;
}

curl_close($ch);

$data = json_decode($response_project, true);

if ($data && $data['status'] === true && isset($data['data'])) {
    $detail = $data['data'];
    // Optionally print the data for debugging
    // print_r($data_project);
} else {
    echo "Error fetching data or no data available.";
}

?>

<div class="album-load"><button class="close-album close-format" aria-label="close"><svg>
            <use xlink:href="#ico-close-menu"></use>
        </svg> <span class="line-toggle toggle-1"></span> <span class="line-toggle toggle-2"></span></button>
    <div class="album-center">
        <div class="slidebox-track">
            <div class="slidebox-list">
                <!-- <div class="album-pic-center slidebox-item">
                    <div class="pic-name">
                        <h3> Chương trình “Kết nối yêu thương” tại Trường Khiếm Thính Hy Vọng – Bình Thạnh.</h3>
                    </div>
                    <div class="container-zoom pinch-zoom"><img src="https://sengroup.vn/pictures/mobile/catalog/news/images/ket-noi-yeu-thuong/274094608322112061145323329664450057903990n-2.jpg" data-src="https://sengroup.vn/pictures/catalog/news/images/ket-noi-yeu-thuong/274094608322112061145323329664450057903990n-2.jpg"
                            alt=" Chương trình “Kết nối yêu thương” tại Trường Khiếm Thính Hy Vọng – Bình Thạnh." class="lazy"></div>
                </div> -->
                <?php
                foreach ($detail as $key => $value) {
                ?>
                    <div class="album-pic-center slidebox-item">
                        <div class="pic-name">
                            <h3><?php echo $value['name'] ?></h3>
                        </div>
                        <div class="container-zoom pinch-zoom">
                            <img
                                src="<?php
                                        echo $url_be, $value['url'];
                                        ?>"
                                data-src="<?php
                                            echo $url_be, $value['url'];
                                            ?>"
                                alt="<?php echo $value['name'] ?>"
                                class="lazy">
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
    <div class="thumbs">
        <div class="slidebox-track">
            <div class="slidebox-list">
                <!-- <div class="thumb-item slidebox-item">
                    <img
                        src="https://sengroup.vn/pictures/mobile/catalog/news/images/ket-noi-yeu-thuong/274094608322112061145323329664450057903990n-2.jpg"
                        data-src="https://sengroup.vn/pictures/catalog/news/images/ket-noi-yeu-thuong/274094608322112061145323329664450057903990n-2.jpg"
                        alt=" Chương trình “Kết nối yêu thương” tại Trường Khiếm Thính Hy Vọng – Bình Thạnh."
                        class="lazy">
                </div> -->
                <?php
                foreach ($detail as $key => $value) {
                ?>
                    <div class="thumb-item slidebox-item">
                        <img
                            src="<?php
                                    echo $url_be, $value['url'];
                                    ?>"
                            data-src="<?php
                                        echo $url_be, $value['url'];
                                        ?>"
                            alt="<?php echo $value['name'] ?>"
                            class="lazy">
                    </div>
                <?php } ?>

            </div>
        </div>
    </div>
</div>