<?php

class Hinhanh_Video_f extends Db
{
    //Lấy danh sách để count theo type
    public function getAll_hinhanh_video_byType($type)
    {
        if ($type != 'all') {
            $sql = self::$connection->prepare("SELECT * FROM hinhanh_video WHERE `type` = ?");
            $sql->bind_param("i", $type);
            $sql->execute();
            $items = array();
            $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
            return $items;
        } else {
            $sql = self::$connection->prepare("SELECT * FROM hinhanh_video ");

            $sql->execute();
            $items = array();
            $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
            return $items;
        }
    }
    public function getAll_hinhanh_video_andCreatePagination_byType($page, $resultsPerPage, $type)
    {
        if ($type != 'all') {
            $firstLink = ($page - 1) * $resultsPerPage;
            $sql = self::$connection->prepare("SELECT * FROM hinhanh_video WHERE `type` = ? order by created_at desc LIMIT $firstLink, $resultsPerPage;");
            $sql->bind_param("i", $type);
            $sql->execute();
            $items = array();
            $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
            return $items;
        } else {
            $firstLink = ($page - 1) * $resultsPerPage;
            $sql = self::$connection->prepare("SELECT * FROM hinhanh_video order by created_at desc LIMIT $firstLink, $resultsPerPage;");
            $sql->execute();
            $items = array();
            $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
            return $items;
        }
    }

    public function getVideoId($url)
    {
        parse_str(parse_url($url, PHP_URL_QUERY), $params);
        return $params['v'];
    }
}
