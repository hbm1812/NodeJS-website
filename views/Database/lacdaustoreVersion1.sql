-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 21, 2023 lúc 10:37 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `lacdaustore`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `authority`
--

CREATE TABLE `authority` (
  `authority_id` int(11) NOT NULL,
  `authority_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `authority`
--

INSERT INTO `authority` (`authority_id`, `authority_name`) VALUES
(1, 'admin'),
(2, 'customer');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `ma_san_pham` varchar(255) NOT NULL,
  `cart_add_date` date NOT NULL,
  `anh` varchar(500) NOT NULL,
  `ten` varchar(500) NOT NULL,
  `gia_tien` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `email`, `ma_san_pham`, `cart_add_date`, `anh`, `ten`, `gia_tien`) VALUES
(4, 'minh@gmail.com', 'PAD0476', '0000-00-00', './assets/media/product/250-795-c2c546d63059e8b752992bb9a31cd7b2.jpg', 'PAD 22 SLEEP BEAR', '35'),
(5, 'minh@gmail.com', 'PAD0604', '0000-00-00', './assets/media/product/250-737-76154cad90346afbd3fb320dffb10d4f.jpg', 'PAD 33 GOKU X VEGETA SWAG', '60'),
(6, 'minh@gmail.com', 'PAD0220', '0000-00-00', './assets/media/product/250-795-c2c546d63059e8b752992bb9a31cd7b2.jpg', 'PAD 44 SLEEP BEAR', '90'),
(7, 'minh@gmail.com', 'PAD0476', '0000-00-00', './assets/media/product/250-795-c2c546d63059e8b752992bb9a31cd7b2.jpg', 'PAD 22 SLEEP BEAR', '35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chu_de`
--

CREATE TABLE `chu_de` (
  `chu_de_id` int(11) NOT NULL,
  `chu_de_key` varchar(255) NOT NULL,
  `ten_chu_de` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chu_de`
--

INSERT INTO `chu_de` (`chu_de_id`, `chu_de_key`, `ten_chu_de`) VALUES
(1, 'dragon_ball', 'DRAGON BALL'),
(2, 'de_thuong', 'DỄ THƯƠNG');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `information`
--

CREATE TABLE `information` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `information`
--

INSERT INTO `information` (`id`, `email`, `address`, `province`, `phone`) VALUES
(1, 'minh@gmail.com', 'Số nhà 26 tổ 6', 'Hà Nội', '0961655258'),
(2, 'quang@gmail.com', '212 Cầu Giấy', 'Hà Nội', '0233486798'),
(3, 'quynh@gmail.com', '37 Thanh Xuân', 'Hà Nội', '0975234189'),
(7, 'bao@gmail.com', 'Số nhà 27, tổ 6, phường Nam Viêm', 'Hải Phòng', '0123456'),
(8, 'phat@gmail.com', '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lot_chuot`
--

CREATE TABLE `lot_chuot` (
  `id` int(11) NOT NULL,
  `tu_khoa` varchar(255) NOT NULL,
  `do_day` varchar(255) NOT NULL,
  `chu_de_key` varchar(255) NOT NULL,
  `kich_thuoc` varchar(255) NOT NULL,
  `ten` varchar(500) NOT NULL,
  `ma_san_pham` varchar(255) NOT NULL,
  `anh` varchar(500) NOT NULL,
  `thong_so` text NOT NULL,
  `dac_diem` varchar(500) NOT NULL,
  `gia_tien` varchar(255) NOT NULL,
  `hang_san_xuat` varchar(255) NOT NULL,
  `so_luong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lot_chuot`
--

INSERT INTO `lot_chuot` (`id`, `tu_khoa`, `do_day`, `chu_de_key`, `kich_thuoc`, `ten`, `ma_san_pham`, `anh`, `thong_so`, `dac_diem`, `gia_tien`, `hang_san_xuat`, `so_luong`) VALUES
(1, 'pad_sleep_bear', '3mm', 'de_thuong', '26x21cm', 'PAD 22 SLEEP BEAR', 'PAD0476', './assets/media/product/250-795-c2c546d63059e8b752992bb9a31cd7b2.jpg', '- PAD CHUỘT CỠ LỚN GIÚP DI CHUỘT HIỆU QUẢ\r\n- CHỐNG TRƠN TRƯỢT\r\n- LÀM ĐẸP CHO MẶT BÀN\r\n- Lót Chuột Kích Thước : 260x210x3mm\r\n- Chất Liệu : Mặt Di Vải – Đế Cao Su\r\n- Mặt di : Trơn – Speed', 'Đang cập nhật ... !', '35', 'lắc đầu', 20),
(2, 'pad_sleep_bear', '3mm', 'de_thuong', '35x30cm', 'PAD 33 SLEEP BEAR', 'PAD0408', './assets/media/product/250-795-c2c546d63059e8b752992bb9a31cd7b2.jpg', '- Lót Chuột Kích Thước : 350x300x3mm\r\n- Chất Liệu : Mặt Di Vải – Đế Cao Su\r\n- Mặt di : Trơn – Speed\r\n- Sản phẩm do Lắc Đầu tự sản xuất cực tâm huyết\r\n- Hình ảnh cực kì đẹp, ngầu, sắc nét\r\n- Trang trí góc Gaming, bàn làm việc\r\n- Khổ di rộng, hiệu quả', 'Đang cập nhật ... !', '60', 'lắc đầu', 15),
(3, 'pad_sleep_bear', '3mm', 'de_thuong', '45x40cm', 'PAD 44 SLEEP BEAR', 'PAD0220', './assets/media/product/250-795-c2c546d63059e8b752992bb9a31cd7b2.jpg', '- Lót Chuột Kích Thước : 450x400x3mm\r\n- Chất Liệu : Mặt Di Vải – Đế Cao Su\r\n- Mặt di : Trơn – Speed\r\n- Sản phẩm do Lắc Đầu tự sản xuất cực tâm huyết\r\n- Hình ảnh cực kì đẹp, ngầu, sắc nét\r\n- Trang trí góc Gaming, bàn làm việc\r\n- Khổ di rộng, hiệu quả', 'Đang cập nhật ... !', '90', 'lắc đầu', 15),
(4, 'pad_goku_x_vegeta_swag', '3mm', 'dragon_ball', '35x30cm', 'PAD 33 GOKU X VEGETA SWAG', 'PAD0604', './assets/media/product/250-737-76154cad90346afbd3fb320dffb10d4f.jpg', '- Lót Chuột Kích Thước : 350x300x3mm\r\n- Chất Liệu : Mặt Di Vải – Đế Cao Su\r\n- Mặt di : Trơn – Speed\r\n- Sản phẩm do Lắc Đầu tự sản xuất cực tâm huyết\r\n- Hình ảnh cực kì đẹp, ngầu, sắc nét\r\n- Trang trí góc Gaming, bàn làm việc\r\n- Khổ di rộng, hiệu quả', 'Đang cập nhật ... !', '60', 'lắc đầu', 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `new`
--

CREATE TABLE `new` (
  `id` int(11) NOT NULL,
  `new_type` varchar(255) NOT NULL,
  `new_title` varchar(255) NOT NULL,
  `new_thumbnail` varchar(255) NOT NULL,
  `new_content` varchar(1000) NOT NULL,
  `new_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `authority_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `authority_id`) VALUES
(1, 'admin@gmail.com', 'admin', '123', 1),
(2, 'minh@gmail.com', 'Minh dep trai', 'minh123', 2),
(4, 'quang@gmail.com', 'Đình Quang', 'quang123', 2),
(5, 'quynh@gmail.com', 'Phương Quỳnh ne', '123', 2),
(9, 'bao@gmail.com', 'bao dep trai', 'bao123', 2),
(10, 'phat@gmail.com', 'phat', 'phat123', 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `authority`
--
ALTER TABLE `authority`
  ADD PRIMARY KEY (`authority_id`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chu_de`
--
ALTER TABLE `chu_de`
  ADD PRIMARY KEY (`chu_de_id`);

--
-- Chỉ mục cho bảng `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `lot_chuot`
--
ALTER TABLE `lot_chuot`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `new`
--
ALTER TABLE `new`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `authority`
--
ALTER TABLE `authority`
  MODIFY `authority_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `chu_de`
--
ALTER TABLE `chu_de`
  MODIFY `chu_de_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `information`
--
ALTER TABLE `information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `lot_chuot`
--
ALTER TABLE `lot_chuot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `new`
--
ALTER TABLE `new`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
