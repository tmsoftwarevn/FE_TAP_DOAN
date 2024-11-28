<?php
require_once "setting-all-file.php";

?>

<header class="header">
    <div class="logo">
        <img
            src="<?php echo $url_be . $info_web['image'] ?>"
            class="w-full h-auto object-cover" />

        <!-- <img 
        src="<?php echo $url_be . $info_web['image'] ?>" 
        class="w-[70px] sm:w-[80px] h-auto object-cover" /> -->

    </div>
    <div class="nav-click">
        <svg width="174px" height="174px" viewBox="-12.24 -12.24 48.48 48.48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f0b924">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="#f4da7c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </svg>

    </div>

    <div class="navigation"><span></span>
        <nav class="main-menu">
            <ul>
                <?php
                // Get the current URL path
                $currentPath = $_SERVER['REQUEST_URI'];

                $currentPath = parse_url($currentPath, PHP_URL_PATH);

                

                ?>
                <li class="nav-item <?php if ($currentPath == '/') echo 'current'; ?>">
                    <a class="link-home link-load nav-item-a" href="/" data-name="home-page" aria-label="nav"><?= __('Trang chủ') ?></a>
                    <div class="class-hidden link-change-url" data-hrefen="/trang-chu"
                        data-hrefvi="/trang-chu" data-title="Trang chủ" data-description="LINGO GROUP"
                        data-keyword="LINGO GROUP" aria-label="link-change-url"></div>
                </li>
                <li class="nav-item <?php if ($currentPath == '/gioi-thieu') echo 'current'; ?>">
                    <a class=" nav-item-a" href="/gioi-thieu" data-name="about-page" aria-label="nav" target="<?php if ($currentPath == '/') echo '_blank'; ?>"><?= __('Giới thiệu') ?></a>
                    <div class="class-hidden link-change-url" data-hrefen="/gioi-thieu"
                        data-hrefvi="/gioi-thieu" data-title="Giới thiệu" data-description="LINGO GROUP"
                        data-keyword="LINGO GROUP" aria-label="link-change-url"></div>
                </li>
                <li class="nav-item <?php if ($currentPath == '/linh-vuc-hoat-dong') echo 'current'; ?>">
                    <a class=" nav-item-a" href="/linh-vuc-hoat-dong" data-name="business-page" aria-label="nav" target="<?php if ($currentPath == '/') echo '_blank'; ?>"><?= __('Lĩnh vực hoạt động') ?></a>
                    <div class="class-hidden link-change-url" data-hrefen="/linh-vuc-hoat-dong"
                        data-hrefvi="/linh-vuc-hoat-dong" data-title="Lĩnh vực hoạt động" data-description="LINGO GROUP"
                        data-keyword="LINGO GROUP" aria-label="link-change-url"></div>
                </li>

                <li class="nav-item <?php if ($currentPath == '/cac-du-an-tieu-bieu' || strpos($currentPath, '/du-an-tieu-bieu') === 0) echo 'current'; ?>">
                    <a class=" nav-item-a" href="/cac-du-an-tieu-bieu"
                        data-name="activities-page" aria-label="nav" target="<?php if ($currentPath == '/') echo '_blank'; ?>"><?= __('Dự án tiêu biểu') ?></a>
                    <div class="class-hidden link-change-url" data-hrefen="/cac-du-an-tieu-bieu"
                        data-hrefvi="/cac-du-an-tieu-bieu" data-title="Hoạt động tiêu biểu"
                        data-description="LINGO GROUP" data-keyword="LINGO GROUP" aria-label="link-change-url"></div>
                </li>
                <li class="nav-item <?php if ($currentPath == '/phat-trien-nguon-nhan-luc') echo 'current'; ?>">
                    <a class=" nav-item-a" href="/phat-trien-nguon-nhan-luc"
                        data-name="recruitment-page" aria-label="nav" target="<?php if ($currentPath == '/') echo '_blank'; ?>"><?= __('Phát triển nguồn nhân lực') ?></a>
                    <div class="class-hidden link-change-url" data-hrefen="/phat-trien-nguon-nhan-luc"
                        data-hrefvi="/phat-trien-nguon-nhan-luc" data-title="Phát triển nguồn nhân lực"
                        data-description="LINGO GROUP" data-keyword="LINGO GROUP" aria-label="link-change-url"></div>
                </li>
                <!-- <li class="nav-item <?php if ($currentPath == '/tin-tuc-su-kien' || strpos($currentPath, '/tin-tuc') === 0) echo 'current'; ?>">
                    <a class=" nav-item-a" href="/tin-tuc-su-kien" data-name="news-page"
                        aria-label="nav" target="<?php if ($currentPath == '/') echo '_blank'; ?>"><?= __('Tin tức & sự kiện') ?></a>
                    <div class="class-hidden link-change-url" data-hrefen="/tin-tuc-su-kien" data-hrefvi="/tin-tuc-su-kien"
                        data-title="Tin tức - sự kiện" data-description="LINGO GROUP" data-keyword="LINGO GROUP"
                        aria-label="link-change-url"></div>
                </li> -->
                <li class="nav-item <?php if ($currentPath == '/lien-he') echo 'current'; ?>">
                    <a class=" nav-item-a" href="/lien-he" data-name="contact-page"
                        aria-label="nav" target="<?php if ($currentPath == '/') echo '_blank'; ?>"><?= __('Liên hệ') ?></a>
                    <div class="class-hidden link-change-url" data-hrefen="/lien-he" data-hrefvi="/lien-he"
                        data-title="Liên hệ" data-description="LINGO GROUP" data-keyword="LINGO GROUP"
                        aria-label="link-change-url"></div>
                </li>
            </ul>
        </nav>
        <div class="overlay-menu"></div>
        <div class="close-menu"><svg>
                <use xlink:href="#ico-close-menu"></use>
            </svg> <span class="line-toggle toggle-1"></span> <span class="line-toggle toggle-2"></span></div>
    </div>
    <div class="right-header">
        <div class="search-top">
            <button class="search-but !text-blue-600" aria-label="search">
                <svg>
                    <use xlink:href="#ico-search"></use>
                </svg>
                <!-- Tìm kiếm  -->
                <?= __('Tìm kiếm') ?>
            </button>
        </div>

        <div class="language">
            <!-- <ul>
                <li>

                    <a href="?lang=en">
                        <span style="font-size: 20px; margin-right: 5px;" class="fi fi-gb"></span>
                    </a>
                </li>
                <li>

                    <a href="?lang=vn">
                        <span style="font-size: 20px;" class="fi fi-vn"></span>
                    </a>
                </li>
            </ul> -->
            <ul>
                <?php if ($_SESSION['lang'] == 'vn'): ?>

                    <li>
                        <a href="/?lang=en">
                            <!-- <span style="font-size: 20px;" class="fi fi-vn"></span> -->
                            <button>English</button>

                        </a>
                    </li>
                <?php else: ?>

                    <li>
                        <a href="/?lang=vn">
                            <!-- <span style="font-size: 20px; margin-right: 5px;" class="fi fi-gb"></span> -->
                            <button>Tiếng Việt</button>

                        </a>
                    </li>
                <?php endif; ?>
            </ul>

        </div>
    </div>
    <div class="social">
        <ul>

            <li><a class="facebook !text-blue-600" href="<?php echo $info_web['page_facebook'] ?>" target="_blank" rel="noopener"
                    aria-label="Facebook">Facebook</a></li>
            <li><a class="youtube !text-blue-600" href="https://www.youtube.com/@Lingogroup" target="_blank"
                    rel="noopener" aria-label="Youtube">Youtube</a></li>
        </ul>
    </div>
</header>
<div class="header-widget">
    <a class="news-regis news-hotline" href="tel:<?php echo $info_web['phone'] ?>" aria-label="news-register">
        <span
            class="icon-news-regis">
            <svg>
                <use xlink:href="#ico-phone"></use>
            </svg>
        </span>
        <span class="text-news-regis"><?php echo $info_web['phone'] ?></span>
    </a>
    <a class="news-regis news-hotline" href="<?php echo $info_web['page_zalo'] ?>" target="_blank" aria-label="news-register">
        <span
            class="icon-news-regis">
            <svg>
                <use xlink:href="#ico-zalo"></use>
            </svg>
        </span>
        <span class="text-news-regis"><?= __('Liên hệ') ?></span>
    </a>
    <a class="news-regis news-hotline" href="<?php echo $info_web['page_facebook'] ?>" target="_blank" aria-label="news-register">
        <span
            class="icon-news-regis">
            <svg>
                <use xlink:href="#ico-fb"></use>
            </svg>
        </span>
        <span class="text-news-regis"><?= __('Liên hệ') ?></span>
    </a>
    <!-- <button
        class="news-regis load-subscribe" aria-label="news-register">
        <span class="icon-news-regis">
            <svg>
                <use xlink:href="#ico-register"></use>
            </svg>
        </span>
        <span class="text-news-regis">Liên hệ</span>
    </button> -->
</div>