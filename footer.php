<?php
require_once "setting-all-file.php";

?>

<footer class="footer">
    <!-- <div class="flower-footer ani-item"><span></span> <span></span> <span></span> <span></span>
        <span></span>
    </div> -->
    <div class="box-footer">
        <div class="go-top"><svg>
                <use xlink:href="#ico-go-top"></use>
            </svg></div>
        <div class="wrap-box-footer">
            <div class="company-text">
                <div class="title-main color-white text-left">
                    <h2 class="text-ani-item">
                        
                        <?php
                        if ($_SESSION['lang'] == 'vn') {
                            echo 'Tập đoàn giáo dục  <strong>LINGO GROUP</strong>';
                        } else {
                            echo '<strong>LINGO GROUP</strong> EDUCATION Corporation';
                        }
                        ?>
                       

                    </h2>


                </div>

                <div class="company-info ani-item">
                    <div class="title-small color-white">
                        <div class="title-sp"><?= __('Trụ sở chính') ?></div>
                    </div>
                    <ul>
                        <li class="company-address"><span class="address !text-blue-500"><svg>
                                    <use xlink:href="#ico-company-address"></use>
                                </svg></span>
                            <p>
                                <?php echo $info_web['address'] ?>
                            </p>
                        </li>
                        <li><span class="call !text-blue-500"><svg>
                                    <use xlink:href="#ico-phone"></use>
                                </svg></span>
                            <p>
                            <?php echo $info_web['hotline'] ?>
                            </p>
                        </li>
                        <li><span class="email !text-blue-500"><svg>
                                    <use xlink:href="#ico-email"></use>
                                </svg></span>
                            <p>
                            <?php echo $info_web['email'] ?>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subscribe subscribe-footer ani-item">
                <div class="title-small">
                    <div class="title-sp"><?= __('Đăng ký nhận tin') ?></div>
                </div>
                    <!-- form -->
                    <div class="input-text"><span class="holder">Email</span><input type="text"
                            data-default="Email" value="" id="emailsubscribe" name="emailsubscribe"
                            data-error="Email không hợp lệ!" aria-label="Email">
                        <button class="sub-but"
                            type="button" aria-label="send" id="btn-subscribe-submit"
                            data-page="/">
                            <?= __('Gửi') ?>
                        </button>
                    </div>
                
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="left-footer">
            <div
                class="copyright footer-copyright detect-copry name-of-copyright footer-strong footer-company-strong footer-company-copyright color-white a-w a-s x-y z-y abc-c h-eck d-fl q-u r-t s-e i-o">
                <!-- <p>2024 © <strong>LINGO GROUP</strong>. <span>All Rights Reserved.</span></p> -->
                <?php echo $info_web['content'] ?>
            </div>
        </div>
    </div>
</footer>