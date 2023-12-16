-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 16, 2023 lúc 07:15 PM
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
-- Cấu trúc bảng cho bảng `ban_phim`
--

CREATE TABLE `ban_phim` (
  `id` int(11) NOT NULL,
  `tu_khoa` varchar(255) NOT NULL,
  `the_loai` varchar(255) NOT NULL,
  `ten` varchar(255) NOT NULL,
  `ma_san_pham` varchar(255) NOT NULL,
  `anh` varchar(500) NOT NULL,
  `thong_so` text NOT NULL,
  `dac_diem` varchar(500) NOT NULL,
  `hang_san_xuat` varchar(255) NOT NULL,
  `so_luong` int(11) NOT NULL,
  `gia_tien` int(11) NOT NULL,
  `tuy_chon_san_pham` varchar(255) NOT NULL,
  `nhom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `ban_phim`
--

INSERT INTO `ban_phim` (`id`, `tu_khoa`, `the_loai`, `ten`, `ma_san_pham`, `anh`, `thong_so`, `dac_diem`, `hang_san_xuat`, `so_luong`, `gia_tien`, `tuy_chon_san_pham`, `nhom`) VALUES
(1, 'ban-phim-gaming', 'ban-phim-gia-co', 'BÀN PHÍM GIẢ CƠ MOFII SWEET ĐƠN SẮC ĐEN', 'BPMF0063', './assets/media/product/250-3736-23.jpg', 'BÀN PHÍM GIẢ CƠ MOFII SWEET ĐƠN SẮC là một sản phẩm bàn phím máy tính được sản xuất bởi thương hiệu Mofii đến từ Trung Quốc\r\nKết nối : USB\r\nKích thước bàn phím : 445x133x38.5mm', 'Đang cập nhật...!', 'AKKO', 15, 290, 'ĐEN', 'BÀN PHÍM GIẢ CƠ MOFII SWEET'),
(2, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ HJK919 87 NÚT ĐEN', 'BPHJK0019', 'https://lacdau.com/media/product/250-2706-vi---n-xanh.jpg', 'Loại Phím: Phím cơ TKL 87 phím.\r\nKích thước: 360X57X47mm.\r\nĐế bọc kim loại.\r\nChất liệu phím nhựa ABS\r\nLed: LED RAINBOW\r\n​Cáp dài : 1,8m có cục chống nhiễu.\r\nKết nối: Cổng USB mạ vàng.\r\nSwitch: Blue SWitch ( JWH ).\r\nĐộ bền : 50 triệu lần nhấn.\r\nBảo Hành : 12 Tháng', 'Đang cập nhật...!', 'HJK', 10, 430, '87 PHÍM ĐEN', 'BÀN PHÍM CƠ HJK919 87'),
(3, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ HJK919 87 NÚT XANH', 'BPHJK0007', '/assets/media/product/250-454-cf2a24f3451f437bb456ac8f6e4e0ad5.jpg', 'Loại Phím: Phím cơ TKL 87 phím.\r\nKích thước: 360X57X47mm.\r\nĐế bọc kim loại.\r\nChất liệu phím nhựa ABS\r\nLed: LED TRẮNG\r\n​Cáp dài : 1,8m có cục chống nhiễu.\r\nKết nối: Cổng USB mạ vàng.\r\nSwitch: Blue SWitch ( JWH ).\r\nĐộ bền : 50 triệu lần nhấn.\r\nBảo Hành : 12 Tháng', 'Đang cập nhật...!', 'HJK', 10, 430, '87 PHÍM XANH', 'BÀN PHÍM CƠ HJK919 87'),
(4, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ HJK919 87 NÚT HỒNG', 'BPHJK0008', '/assets/media/product/250-452-2705-1.jpg', 'Loại Phím: Phím cơ TKL 87 phím.\r\nKích thước: 360X57X47mm.\r\nĐế bọc kim loại.\r\nChất liệu phím nhựa ABS\r\nLed: LED TRẮNG\r\n​Cáp dài : 1,8m có cục chống nhiễu.\r\nKết nối: Cổng USB mạ vàng.\r\nSwitch: Blue SWitch ( JWH ).\r\nĐộ bền : 50 triệu lần nhấn.\r\nBảo Hành : 12 Tháng', 'Đang cập nhật...!', 'HJK', 10, 430, '87 PHÍM HỒNG', 'BÀN PHÍM CƠ HJK919 87'),
(5, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ HJK919 87 NÚT TRẮNG', 'BPHJK0009', '/assets/media/product/250-453-cbef7f75da3d20d92e356c2831532f93.jpg', 'Loại Phím: Phím cơ TKL 87 phím.\r\nKích thước: 360X57X47mm.\r\nĐế bọc kim loại.\r\nChất liệu phím nhựa ABS\r\nLed: LED TRẮNG\r\n​Cáp dài : 1,8m có cục chống nhiễu.\r\nKết nối: Cổng USB mạ vàng.\r\nSwitch: Blue SWitch ( JWH ).\r\nĐộ bền : 50 triệu lần nhấn.\r\nBảo Hành : 12 Tháng', 'Đang cập nhật...!', 'Lắc đầu', 10, 430, '87 PHÍM TRẮNG', 'BÀN PHÍM CƠ HJK919 87'),
(7, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ KANANIC DKD104 TRẮNG HỒNG', 'BPK0011', '/assets/media/product/250-450-1c3c922855fa11acd1989d4e7204c825.png', 'Loại Phím: Phím cơ Fullsize 104 phím.\r\nKích thước: 380X57X47mm.\r\nĐế bọc kim loại.\r\nChất liệu phím nhựa PBT Double-shot không tróc sơn theo thời gian.\r\nLed: Không LED.\r\n​Cáp dài : 1,6m có cục chống nhiễu.\r\nKết nối: Cổng USB mạ vàng.\r\nSwitch: Blue SWitch ( JWH ).\r\nĐộ bền : 50 triệu lần nhấn.\r\nBảo Hành : 12 Tháng', 'Đang cập nhật...!', 'KANANIC', 5, 460, 'DKD104 HỒNG', 'BÀN PHÍM CƠ KANANIC DKD104'),
(8, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ TOMATO S220', 'BPTOMA0002', '/assets/media/product/250-451-346bea048392583d3721b9ecda000e77.jpg', 'Thông số kỹ thuật Bàn phím cơ Tomato S220\r\nTên sản phẩm Bàn phím cơ Tomato S220\r\nHãng sản xuất Tomato\r\nMã sản phẩm S220\r\nKiểu phím Full size 104 phím\r\nMàu sắc Đen\r\nLoại bàn phím Phím cơ có dây\r\nBLUE SW 50tr lần nhấn\r\nLED RAINBOW nhiều chế độ\r\nTrọng lượng 800g\r\nBảo hành : 12 tháng chính hãng', 'Đang cập nhật...!', 'TOMATO', 8, 450, 'TOMATO S220', 'BÀN PHÍM CƠ TOMATO S220'),
(9, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ EDRA EK312 BETA BLUE SWITCH', 'BPEDR0119', '/assets/media/product/250-4401-vien.jpg', 'Kết nối: Wired\r\nSố lượng phím: 104 phím\r\nTOP/BOTTOM: Aluminum / ABS\r\nMàu sản phẩm: Black\r\nMàu keycap: Alpha (Dark Gray + Light Gray) - Beta (Light Gray + Dark Gray)\r\nĐèn nền: Rainbows\r\nSwitch: E-DRA\r\nKeycap: ABS double injection\r\nAntighosting: Full antishosting\r\nDây cáp: USB 2m\r\nKích thước: 437*128*39mm\r\nCân nặng: 781g\r\nTương thích với Win XP, Win7, Win8, Win10\r\nBảo hành : 24 tháng chính hãng', 'Đang cập nhật...!', 'EDRA', 5, 650, 'BLUE SWITCH', 'BÀN PHÍM CƠ EDRA EK312'),
(10, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ ESONNE K98 BLACK GOLD BLUE SWITCH', ' BPK0047', '/assets/media/product/250-4024-vien5.jpg', 'Hãng sản xuất : ESONNE\r\nMã sản phẩm : K98\r\nKiểu phím : 98 phím\r\nĐộ bền switch : 50 triệu lần nhấn\r\nLED RAINBOW nhiều chế độ\r\nTrọng lượng : 500g\r\nChiều dài dây : 1.5m\r\nKích thước bàn phím : 388*139*37 (mm)\r\nBảo hành : 12 tháng', 'Đang cập nhật...!', 'ESONNE', 20, 490, 'BLACK GOLD BLUE SWITCH', 'BÀN PHÍM CƠ ESONNE K98'),
(11, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ ESONNE K98 BLUE AND WHITE BLUE SWITCH', 'BPK0056', '/assets/media/product/250-4031-vien2.jpg', 'Hãng sản xuất : ESONNE\r\nMã sản phẩm : K98\r\nKiểu phím : 98 phím\r\nĐộ bền switch : 50 triệu lần nhấn\r\nLED RAINBOW nhiều chế độ\r\nTrọng lượng : 500g\r\nChiều dài dây : 1.5m\r\nKích thước bàn phím : 388*139*37 (mm)\r\nBảo hành : 12 tháng', 'Đang cập nhật...!', 'ESONNE', 20, 490, 'BLUE AND WHITE BLUE SWITCH', 'BÀN PHÍM CƠ ESONNE K98'),
(12, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ ESONNE K98 RED AND WHITE RED SWITCH', 'BPK0054', '/assets/media/product/250-4029-vien4.jpg', 'Hãng sản xuất : ESONNE\r\nMã sản phẩm : K98\r\nKiểu phím : 98 phím\r\nĐộ bền switch : 50 triệu lần nhấn\r\nLED RAINBOW nhiều chế độ\r\nTrọng lượng : 500g\r\nChiều dài dây : 1.5m\r\nKích thước bàn phím : 388*139*37 (mm)\r\nBảo hành : 12 tháng', 'Đang cập nhật...!', 'ESONNE', 20, 490, 'RED AND WHITE RED SWITCH', 'BÀN PHÍM CƠ ESONNE K98'),
(13, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ ESONNE K98 MATCHA WHITE RED SWITCH', 'BPK0052', '/assets/media/product/250-4027-vien1.jpg', 'Hãng sản xuất : ESONNE\r\nMã sản phẩm : K98\r\nKiểu phím : 98 phím\r\nĐộ bền switch : 50 triệu lần nhấn\r\nLED RAINBOW nhiều chế độ\r\nTrọng lượng : 500g\r\nChiều dài dây : 1.5m\r\nKích thước bàn phím : 388*139*37 (mm)\r\nBảo hành : 12 tháng', 'Đang cập nhật...!', 'ESONNE', 20, 490, 'MATCHA WHITE RED SWITCH', 'BÀN PHÍM CƠ ESONNE K98'),
(14, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ ESONNE K98 GRAY AND WHITE BLUE SWITCH', 'BPK0049', '/assets/media/product/250-4026-vein3.jpg', 'Hãng sản xuất : ESONNE\r\nMã sản phẩm : K98\r\nKiểu phím : 98 phím\r\nĐộ bền switch : 50 triệu lần nhấn\r\nLED RAINBOW nhiều chế độ\r\nTrọng lượng : 500g\r\nChiều dài dây : 1.5m\r\nKích thước bàn phím : 388*139*37 (mm)\r\nBảo hành : 12 tháng', 'Đang cập nhật...!', 'ESONNE', 20, 490, 'GRAY AND WHITE BLUE SWITCH', 'BÀN PHÍM CƠ ESONNE K98'),
(15, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ AKKO MOJIKE GK1 BLACK RED AKKO BLUE SWITCH', 'BPAK0066', '/assets/media/product/250-350-0a37c996fe9c0c4977fd10d8e77e2666.jpg', 'Mojike là thương hiệu con của AKKO với các sản phẩm đánh mạnh vào phân khúc bàn phím cơ giá rẻ, bình dân, dễ tiếp cận khách hàng.\r\nModel: 3104 (Fullsize, 104 keys)\r\nKết nối: USB, dây phím dính liền phím\r\nLED Trắng (SMT Bottom)\r\nKích thước: 458 x 186 x 30mm | Trọng lượng ~ 1 kg\r\nHỗ trợ NKRO / Multimedia / Macro / Khóa phím windows\r\nKeycap: PBT Double-Shot, OEM profile\r\nLoại switch: Akko switch v2 (Blue/Orange/Pink)\r\nPhụ kiện: 1 sách hướng dẫn sử dụng + 16 keycap tặng kèm + 1 keypuller\r\nTương thích: Windows / MacOS / Linux\r\nBảo Hành : 12 Tháng Chính Hãng', 'Đang cập nhật...!', 'AKKO', 10, 890, 'BLACK RED  BLUE SWITCH', 'BÀN PHÍM CƠ AKKO MOJIKE GK1'),
(16, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ CIDOO ABM084 TRI-MODE TRẮNG GATERON G PRO YELLOW SWITCH', 'BPCD0010', '/assets/media/product/250-3866-10.jpg', 'NHÀ SẢN XUẤT KHUYẾN CÁO KHÔNG ĐƯỢC SẠC SẢN PHẨM TRỰC TIẾP VÀO CỦ SẠC\r\nBàn phím cơ Cidoo ABM084 Tri-mode\r\nBàn phím layout TKL\r\nKết nối 2 chế độ USB/Bluetooth/2.4G\r\nKepcaps PBT Dyesub KDA profile\r\nMạch xuôi 5 pin hỗ trợ hotswap thay switch dễ dàng\r\nNúm xoay có thể thay thế bằng switch khác được hàn lên mạch\r\nLED RGB.\r\nTrang bị sẵn đệm tiêu âm\r\nPhụ kiện: 1 cáp USB A-C dài 1,8m\r\nPin 3000mAh\r\nStabilizer TTC được lube và căn chỉnh sẵn\r\nSwitch: Gateron G Pro Yellow, Cidoo Matt Grey\r\nMàu sắc: Trắng, Đen\r\nHỗ trợ hệ điều hành: Windows, MacOS\r\nBảo hành : 12 tháng chính hãng', 'Đang cập nhật...!', 'CIDOO', 10, 1890, 'TRẮNG YELLOW SWITCH', 'BÀN PHÍM CƠ CIDOO ABM084 TRI-MODE'),
(17, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ DAREU EK1280S ĐEN RED SWITCH', 'BPDR0020', '/assets/media/product/250-2501-.png', '', 'Đang cập nhật...!', 'DAREU', 10, 670, 'ĐEN RED SWITCH', 'BÀN PHÍM CƠ DAREU EK1280S'),
(18, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ DAREU EK1280S HỒNG TRẮNG BROWN SWITCH', 'BPDR0024', '/assets/media/product/250-2502-.png', 'Bàn phím cơ DAREU EK1280 104KEY (Blue/ Brown/ Red D switch)\r\nCỰC KÌ XINH LUÔN Ạ\r\nCHẤT PHÍM DÀY DẶN\r\nGIÁ QUÁ HỢP LÍ\r\nLED HỒNG\r\nBàn phím cơ Fullsize 104 phím\r\nSử dụng D-Switch độc quyền (Blue/Brown/Red)\r\nDây dài 1,8m\r\nBảo Hành : 24 tháng chính hãng', 'Đang cập nhật...!', 'DAREU', 10, 790, 'HỒNG TRẮNG BROWN SWITCH', 'BÀN PHÍM CƠ DAREU EK1280S'),
(19, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ DARMOSHARK K7 PRO SPHERICAL GREY GATERON SILVER PRO SWITCH', 'BPDAR007', '/assets/media/product/250-3691-83.jpg', 'NHÀ SẢN XUẤT KHUYẾN CÁO KHÔNG ĐƯỢC SẠC SẢN PHẨM TRỰC TIẾP VÀO CỦ SẠC\r\nBrand: Darmoshark\r\nModel: K7 Pro\r\nItem Type: USB Wired Keyboard/ 2.4G Wireless/Bluetooth 5.0\r\nDimension: 365.84mm(L)* 118.84mm(W)* 41.04mm(H)\r\nMaterial: PBT Dye-sub keycap\r\nColor: White and Ocean Blue\r\nAxis Body Type: Gateron siliver pro switch\r\nBacklight Type: RGB Light\r\nKeys: 99 keys\r\nProfile keycap : KAT*\r\nConnection: Wired/ 2.4G Wireless/ Bluetooth 5.0\r\nInterface: Type C\r\nType-C Cable Length (m): 1.80M±1%, φ3.6mm, five-core shielded wire with magnetic loop\r\nKeyboard Lifespan (times): more than 50 million\r\nHot swap : support (Full key supports 3-pin/5-pin mechanical shaft )\r\nPower Supply: USB Port\r\nSuitable for: PC/Laptop/Mac\r\nBattery capacity: Built-in 3000mAh lithium battery\r\nItem size: 32 * 11.1 * 4.05cm /12.6 * 4.37 * 1.59in\r\nItem weight: Approx. 555g /19.58oz\r\nPacking list:\r\n1 * Keyboard\r\n1 * Keycap puller\r\n1 * Switch puller\r\n1 * USB to Type-C adapter\r\n1 * User manual\r\nBảo hành : 12 tháng chính hãng', 'Đang cập nhật...!', 'DARMOSHARK', 10, 2900, 'GREY SILVER SWITCH', 'BÀN PHÍM CƠ DARMOSHARK K7 PRO SPHERICAL'),
(20, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ DARMOSHARK K7 PRO SPHERICAL ORANGE GATERON YELLOW PRO SWITCH', 'BPDAR003', '/assets/media/product/250-3687-4.jpg', 'NHÀ SẢN XUẤT KHUYẾN CÁO KHÔNG ĐƯỢC SẠC SẢN PHẨM TRỰC TIẾP VÀO CỦ SẠC\r\nBrand: Darmoshark\r\nModel: K7 Pro\r\nItem Type: USB Wired Keyboard/ 2.4G Wireless/Bluetooth 5.0\r\nDimension: 365.84mm(L)* 118.84mm(W)* 41.04mm(H)\r\nMaterial: PBT Dye-sub keycap\r\nColor: White and Ocean Blue\r\nAxis Body Type: Gateron siliver pro switch\r\nBacklight Type: RGB Light\r\nKeys: 99 keys\r\nProfile keycap : KAT*\r\nConnection: Wired/ 2.4G Wireless/ Bluetooth 5.0\r\nInterface: Type C\r\nType-C Cable Length (m): 1.80M±1%, φ3.6mm, five-core shielded wire with magnetic loop\r\nKeyboard Lifespan (times): more than 50 million\r\nHot swap : support (Full key supports 3-pin/5-pin mechanical shaft )\r\nPower Supply: USB Port\r\nSuitable for: PC/Laptop/Mac\r\nBattery capacity: Built-in 3000mAh lithium battery\r\nItem size: 32 * 11.1 * 4.05cm /12.6 * 4.37 * 1.59in\r\nItem weight: Approx. 555g /19.58oz\r\nPacking list:\r\n1 * Keyboard\r\n1 * Keycap puller\r\n1 * Switch puller\r\n1 * USB to Type-C adapter\r\n1 * User manual\r\nBảo hành : 12 tháng chính hãng', 'Đang cập nhật...!', 'DARMOSHARK', 10, 2900, 'ORANGE YELLOW SWITCH', 'BÀN PHÍM CƠ DARMOSHARK K7 PRO SPHERICAL'),
(21, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ FL ESPORTS F12 BLACK OLIVIA KAILH BOX WHITE SWITCH', 'BPFL0012', '/assets/media/product/250-245-7d933f8fb0169707229fb90deaf8e2dc.png', 'NHÀ SẢN XUẤT KHUYẾN CÁO KHÔNG ĐƯỢC SẠC SẢN PHẨM TRỰC TIẾP VÀO CỦ SẠC\r\nBàn phím cơ FL-Esports F12 RGB Black Olivia Kailh Box White switch\r\n3 chế độ kết nối: USB/2.4/Bluetooth\r\nKeycap OEM PBT Doubleshot\r\nTính năng Hotswap thay switch dễ dàng\r\nLED RGB\r\nPin 2000mAh\r\nCáp USB Type-C\r\nSwitch Kailh box: White, Red, Brown\r\nCó sẵn đệm tiêu âm\r\nTương thích với Windows.\r\nBảo hành : 12 Tháng chính hãng', 'Đang cập nhật...!', 'FL ESPORT', 5, 2090, 'BLACK OLIVIA KAILH BOX WHITE SWITCH', 'BÀN PHÍM CƠ FL ESPORTS F12'),
(22, 'ban-phim-gaming', 'Nhấp để mở lựa chọn', 'BÀN PHÍM CƠ FL ESPORTS F12 BLACK OLIVIA KAILH BOX RED SWITCH', 'BPFL0013', '/assets/media/product/250-2627.jpg', 'NHÀ SẢN XUẤT KHUYẾN CÁO KHÔNG ĐƯỢC SẠC SẢN PHẨM TRỰC TIẾP VÀO CỦ SẠC\r\nBàn phím cơ FL-Esports F12 RGB Black Olivia Kailh Box White switch\r\n3 chế độ kết nối: USB/2.4/Bluetooth\r\nKeycap OEM PBT Doubleshot\r\nTính năng Hotswap thay switch dễ dàng\r\nLED RGB\r\nPin 2000mAh\r\nCáp USB Type-C\r\nSwitch Kailh box: White, Red, Brown\r\nCó sẵn đệm tiêu âm\r\nTương thích với Windows.\r\nBảo hành : 12 Tháng chính hãng', 'Đang cập nhật...!', 'FL ESPORT', 5, 2090, 'BLACK OLIVIA KAILH BOX RED SWITCH', 'BÀN PHÍM CƠ FL ESPORTS F12'),
(23, 'ban-phim-gaming', 'ban-phim-co', 'BÀN PHÍM CƠ FL ESPORTS F12 WHITE AND BLACK KAILH BOX BROWN SWITCH', 'BPFL0020', '/assets/media/product/250-2622-.jpg', 'NHÀ SẢN XUẤT KHUYẾN CÁO KHÔNG ĐƯỢC SẠC SẢN PHẨM TRỰC TIẾP VÀO CỦ SẠC\r\nBàn phím cơ FL-Esports F12 RGB White And Black Kailh Box White switch\r\n3 chế độ kết nối: USB/2.4/Bluetooth\r\nKeycap OEM PBT Doubleshot\r\nTính năng Hotswap thay switch dễ dàng\r\nLED RGB\r\nPin 2000mAh\r\nCáp USB Type-C\r\nSwitch Kailh box: White, Red, Brown\r\nCó sẵn đệm tiêu âm\r\nTương thích với Windows.\r\nBảo hành : 12 Tháng chính hãng', 'Đang cập nhật...!', 'FL ESPORT', 5, 2090, 'WHITE AND BLACK KAILH BOX BROWN SWITCH', 'BÀN PHÍM CƠ FL ESPORTS F12'),
(24, 'ban-phim-gaming', 'ban-phim-co', 'BỘ KIT BÀN PHÍM CƠ AKKO DESIGNER STUDIO MOD007S VERY PERI', 'BPAK0328', '/assets/media/product/250-2808-0.jpg', 'Model: MOD007S (82 nút, có núm điều chỉnh volume và LED)\r\nMàu sắc: Very Peri (màu tím) – SL giới hạn\r\nKích thước 332x146x34mm – Trọng lượng ~ 1.9kg\r\nLED nền RGB / South-Facing Mạch Xuôi (Backlit, 4028 SMD LED dạng SMD) với nhiều chế độ\r\nVỏ nhôm được chế tác theo công nghệ CNC, được anode hóa tỉ mỉ, chi tiết\r\nPlate nhôm hoặc Plate PC đi kèm với miếng đệm Gasket làm bằng silicon (01) và poron (01)\r\nPCB dày 1.2mm (thay vì 1.6mm như trước đó) giúp nhún dễ hơn và tương thích với nhiều stab screw-in hơn\r\nKết nối: USB Type-C to USB (hỗ trợ Type-C to Type-C), có thể tháo rời\r\nHỗ trợ NKRO / Multimedia / Macro / Khóa phím windows\r\nHotswap 5 pin TTC Socket, stab có sẵn (dạng plate mount, hỗ trợ screw-in stab)\r\nPhụ kiện đi kèm: Poron Gasket – PC Plate – Screw – Metal Knob (xem video unbox bên dưới để biết thêm chi tiết)\r\nTương thích: Windows / MacOS / Linux (Có Driver riêng để chỉnh LED / Macro / Update firmware / Keymap)\r\nBàn phím AKKO khi kết nối với MacOS: (Ctrl -> Control | Windows -> Command | Alt -> Option, Mojave OS trở lên sẽ điều chỉnh được thứ tự của các phím này)\r\n*Lưu ý: Sản phẩm này không bao gồm keycap và switch, stab đã có sẵn (dạng plate mount)', 'Đang cập nhật...!', 'AKKO', 5, 4990, 'MOD007S VERY PERI', 'BỘ KIT BÀN PHÍM CƠ AKKO MOD007');

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
  `gia_tien` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chi_tiet_hoa_don`
--

CREATE TABLE `chi_tiet_hoa_don` (
  `id` int(11) NOT NULL,
  `ma_hoa_don` varchar(255) NOT NULL,
  `ma_san_pham` varchar(255) NOT NULL,
  `so_luong` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL,
  `anh` varchar(255) NOT NULL,
  `so_tien` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chi_tiet_hoa_don`
--

INSERT INTO `chi_tiet_hoa_don` (`id`, `ma_hoa_don`, `ma_san_pham`, `so_luong`, `ten`, `anh`, `so_tien`) VALUES
(9, '8ojhgYAPLK', 'BPHJK0008', 1, 'BÀN PHÍM CƠ HJK919 87 NÚT HỒNG', '/assets/media/product/250-452-2705-1.jpg', 430),
(10, '8ojhgYAPLK', 'PAD0604', 1, 'PAD 33 GOKU X VEGETA SWAG', './assets/media/product/250-737-76154cad90346afbd3fb320dffb10d4f.jpg', 60),
(11, '53UulrewZ', 'BPK0011', 1, 'BÀN PHÍM CƠ KANANIC DKD104 TRẮNG HỒNG', '/assets/media/product/250-450-1c3c922855fa11acd1989d4e7204c825.png', 460),
(12, '53UulrewZ', 'BPDAR003', 1, 'BÀN PHÍM CƠ DARMOSHARK K7 PRO SPHERICAL ORANGE GATERON YELLOW PRO SWITCH', '/assets/media/product/250-3687-4.jpg', 2900),
(16, '4LxX', 'BPHJK0009', 1, 'BÀN PHÍM CƠ HJK919 87 NÚT TRẮNG', '/assets/media/product/250-453-cbef7f75da3d20d92e356c2831532f93.jpg', 430),
(17, '4LxX', 'CGM002', 2, 'CHUỘT GAMING MZ BWS-01 RGB TRẮNG', 'https://lacdau.com/media/product/250-145-d999a5193c756964bfc2344f595b160a.jpg', 139),
(18, '4LxX', 'PAD1312', 1, 'PAD 83 DRAGON BALL CHIBI', '/assets/media/product/250-4112-34.jpg', 90);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuot`
--

CREATE TABLE `chuot` (
  `id` int(11) NOT NULL,
  `tu_khoa` varchar(255) NOT NULL,
  `the_loai` varchar(255) NOT NULL,
  `ten` varchar(255) NOT NULL,
  `ma_san_pham` varchar(255) NOT NULL,
  `anh` varchar(500) NOT NULL,
  `thong_so` text NOT NULL,
  `dac_diem` varchar(500) NOT NULL,
  `hang_san_xuat` varchar(255) NOT NULL,
  `so_luong` int(11) NOT NULL,
  `gia_tien` int(11) NOT NULL,
  `tuy_chon_san_pham` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chuot`
--

INSERT INTO `chuot` (`id`, `tu_khoa`, `the_loai`, `ten`, `ma_san_pham`, `anh`, `thong_so`, `dac_diem`, `hang_san_xuat`, `so_luong`, `gia_tien`, `tuy_chon_san_pham`) VALUES
(1, 'chuot-gaming', 'chuot-cam-day', 'CHUỘT GAMING MZ BWS-01 RGB TRẮNG', 'CGM002', 'https://lacdau.com/media/product/250-145-d999a5193c756964bfc2344f595b160a.jpg', 'Sản phẩm với mức giá cực thân thiện bởi đã được nhà sản xuất tối ưu nhu cầu phù hợp với phần lớn khách hàng tiêu dùng Việt Nam.\r\nĐảm bảo chất lượng cực kì tốt, bền bỉ và hợp lý với đại đa số người dùng phổ thông\r\nThiết kế công thái học chuẩn phom tay của người Việt Nam cả Nam và Nữ. Cơ bản nhưng cực kì sang trọng và đẹp, cầm nắm cũng rất thoải mái.\r\nNhựa ABS cực kì an toàn và bền bỉ. Mặt trên làm mịn hơn cho cảm giác êm ái, 2 bên cứng và nhám hơn cho cảm giác cầm chắc chắn', 'Đang cập nhật...!', 'MZ BWS', 10, 139, 'TRẮNG'),
(2, 'chuot-gaming', 'chuot-cam-day', 'CHUỘT GAMING MZ BWS-01 RGB ĐEN', 'CGM001', 'https://lacdau.com/media/product/250-146-2ec05a767f908ec6c490e9b0ce05cf54.jpg', 'Sản phẩm với mức giá cực thân thiện bởi đã được nhà sản xuất tối ưu nhu cầu phù hợp với phần lớn khách hàng tiêu dùng Việt Nam. Đảm bảo chất lượng cực kì tốt, bền bỉ và hợp lý với đại đa số người dùng phổ thông.\r\nThiết kế công thái học chuẩn phom tay của người Việt Nam cả Nam và Nữ. Cơ bản nhưng cực kì sang trọng và đẹp, cầm nắm cũng rất thoải mái.\r\nNhựa ABS cực kì an toàn và bền bỉ. Mặt trên làm mịn hơn cho cảm giác êm ái, 2 bên cứng và nhám hơn cho cảm giác cầm chắc chắn', 'Đang cập nhật...!', 'MZ BWS', 10, 139, 'ĐEN');

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
(2, 'de_thuong', 'DỄ THƯƠNG'),
(3, 'pokemon', 'POKEMON');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hang_sx_ban_phim`
--

CREATE TABLE `hang_sx_ban_phim` (
  `id` int(11) NOT NULL,
  `hang_san_xuat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hang_sx_ban_phim`
--

INSERT INTO `hang_sx_ban_phim` (`id`, `hang_san_xuat`) VALUES
(1, 'AKKO'),
(2, 'CIDOO'),
(3, 'DAREU'),
(4, 'EDRA'),
(5, 'ESONNE'),
(6, 'HJK'),
(7, 'MOFII'),
(8, 'Lắc đầu'),
(9, 'TOMATO'),
(10, 'DARMOSHARK'),
(11, 'FL ESPORT'),
(12, 'FREE WOLF'),
(13, 'G-NET'),
(14, 'IQUNIX'),
(15, 'KANANIC'),
(16, 'NEWMEN'),
(17, 'OCG'),
(18, 'ROYAL KLUDGE'),
(19, 'XINMENG');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoa_don`
--

CREATE TABLE `hoa_don` (
  `id` int(11) NOT NULL,
  `tong_tien` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `ghi_chu` text NOT NULL,
  `tinh` varchar(255) NOT NULL,
  `dia_chi` varchar(255) NOT NULL,
  `pay_method` varchar(255) NOT NULL,
  `time` date NOT NULL,
  `ma_hoa_don` varchar(255) NOT NULL,
  `trang_thai` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `hoa_don`
--

INSERT INTO `hoa_don` (`id`, `tong_tien`, `ten`, `email`, `phone`, `ghi_chu`, `tinh`, `dia_chi`, `pay_method`, `time`, `ma_hoa_don`, `trang_thai`) VALUES
(9, 490, 'Minh dep trai', 'minh@gmail.com', '0961655258', '', 'Hà Nội', 'Số nhà 26 tổ 6', 'Thanh toán khi nhận hàng', '2023-12-16', '8ojhgYAPLK', 'Chờ xác nhận'),
(10, 3360, 'Minh dep trai', 'minh@gmail.com', '0961655258', 'Xin vui lòng giao hàng vào: \r\n- Buổi trưa :12h-13h\r\n- Tối: 17-22h\r\n', 'Hà Nội', 'Số nhà 26 tổ 6', 'Thanh toán khi nhận hàng', '2023-12-16', '53UulrewZ', 'Đã thanh toán'),
(12, 798, 'phat', 'phat@gmail.com', '0935672389', '', 'Hà Nội', '182, Đường Láng', 'Thanh toán khi nhận hàng', '2023-12-16', '4LxX', 'Chờ xác nhận');

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
(8, 'phat@gmail.com', '182, Đường Láng', 'Hà Nội', '0935672389'),
(11, 'dao@gmail.com', '', '', '');

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
  `gia_tien` int(11) NOT NULL,
  `hang_san_xuat` varchar(255) NOT NULL,
  `so_luong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `lot_chuot`
--

INSERT INTO `lot_chuot` (`id`, `tu_khoa`, `do_day`, `chu_de_key`, `kich_thuoc`, `ten`, `ma_san_pham`, `anh`, `thong_so`, `dac_diem`, `gia_tien`, `hang_san_xuat`, `so_luong`) VALUES
(1, 'pad_sleep_bear', '3mm', 'de_thuong', '26x21cm', 'PAD 22 SLEEP BEAR', 'PAD0476', './assets/media/product/250-795-c2c546d63059e8b752992bb9a31cd7b2.jpg', '- PAD CHUỘT CỠ LỚN GIÚP DI CHUỘT HIỆU QUẢ\r\n- CHỐNG TRƠN TRƯỢT\r\n- LÀM ĐẸP CHO MẶT BÀN\r\n- Lót Chuột Kích Thước : 260x210x3mm\r\n- Chất Liệu : Mặt Di Vải – Đế Cao Su\r\n- Mặt di : Trơn – Speed', 'Đang cập nhật ... !', 35, 'lắc đầu', 20),
(2, 'pad_sleep_bear', '3mm', 'de_thuong', '35x30cm', 'PAD 33 SLEEP BEAR', 'PAD0408', './assets/media/product/250-795-c2c546d63059e8b752992bb9a31cd7b2.jpg', '- Lót Chuột Kích Thước : 350x300x3mm\r\n- Chất Liệu : Mặt Di Vải – Đế Cao Su\r\n- Mặt di : Trơn – Speed\r\n- Sản phẩm do Lắc Đầu tự sản xuất cực tâm huyết\r\n- Hình ảnh cực kì đẹp, ngầu, sắc nét\r\n- Trang trí góc Gaming, bàn làm việc\r\n- Khổ di rộng, hiệu quả', 'Đang cập nhật ... !', 60, 'lắc đầu', 15),
(3, 'PAD-44-SLEEP-BEAR', '3mm', 'de_thuong', '45x40cm', 'PAD 44 SLEEP BEAR', 'PAD0220', '/assets/media/product/250-655-c2c546d63059e8b752992bb9a31cd7b2.jpg', 'Lót Chuột Kích Thước : 450x400x3mm\r\nChất Liệu : Mặt Di Vải – Đế Cao Su\r\nMặt di : Trơn – Speed\r\nSản phẩm do Lắc Đầu tự sản xuất cực tâm huyết\r\nHình ảnh cực kì đẹp, ngầu, sắc nét\r\nTrang trí góc Gaming, bàn làm việc\r\nKhổ di rộng, hiệu quả', 'Đang cập nhật...!', 90, 'Lắc đầu', 10),
(4, 'pad_goku_x_vegeta_swag', '3mm', 'dragon_ball', '35x30cm', 'PAD 33 GOKU X VEGETA SWAG', 'PAD0604', './assets/media/product/250-737-76154cad90346afbd3fb320dffb10d4f.jpg', '- Lót Chuột Kích Thước : 350x300x3mm\r\n- Chất Liệu : Mặt Di Vải – Đế Cao Su\r\n- Mặt di : Trơn – Speed\r\n- Sản phẩm do Lắc Đầu tự sản xuất cực tâm huyết\r\n- Hình ảnh cực kì đẹp, ngầu, sắc nét\r\n- Trang trí góc Gaming, bàn làm việc\r\n- Khổ di rộng, hiệu quả', 'Đang cập nhật ... !', 60, 'lắc đầu', 10),
(5, 'PAD 22 PIKACHU VÀNG', '3mm', 'pokemon', '26x21cm', 'PAD 22 PIKACHU VÀNG', 'PAD0470', './assets/media/product/250-801-9b657887deb351fb8c7cb12a491fdd17.jpg', '- Lót Chuột Kích Thước : 350x300x3mm\r\n- Chất Liệu : Mặt Di Vải – Đế Cao Su\r\n- Mặt di : Trơn – Speed\r\n- Sản phẩm do Lắc Đầu tự sản xuất cực tâm huyết\r\n- Hình ảnh cực kì đẹp, ngầu, sắc nét\r\n- Trang trí góc Gaming, bàn làm việc\r\n- Khổ di rộng, hiệu quả', 'Đang cập nhật ... !', 35, 'lắc đầu', 10),
(6, 'pad-22-supreme-nau', '2mm', 'de_thuong', '26x21cm', 'PAD 22 SUPREME NÂU', 'PAD0471', './assets/media/product/250-800-83547e8b3d3b67944c488a448f868114.jpg', '', 'Đang cập nhật...!', 35, 'Lắc đầu', 8),
(11, 'PAD-83-DRAGON-BALL-CHIBI', '3mm', 'dragon_ball', '80x30cm', 'PAD 83 DRAGON BALL CHIBI', 'PAD1312', '/assets/media/product/250-4112-34.jpg', 'Lót Chuột Kích Thước : 800x300x3mm\r\nChất Liệu : Mặt Di Vải – Đế Cao Su\r\nMặt di : Trơn – Speed\r\nSản phẩm do Lắc Đầu tự sản xuất cực tâm huyết\r\nHình ảnh cực kì đẹp, ngầu, sắc nét\r\nTrang trí góc Gaming, bàn làm việc\r\nKhổ di rộng, hiệu quả', 'Đang cập nhật...!', 90, 'Lắc đầu', 10),
(12, 'PAD-22-MANY-CAT', '3mm', 'de_thuong', '26x21cm', 'PAD 22 MANY CAT', ' PAD0474', '/assets/media/product/250-797-89b825038c00c49dd2f7216a014448cb.jpg', 'PAD CHUỘT CỠ LỚN GIÚP DI CHUỘT HIỆU QUẢ\r\nCHỐNG TRƠN TRƯỢT\r\nLÀM ĐẸP CHO MẶT BÀN\r\nLót Chuột Kích Thước : 260x210x3mm\r\nChất Liệu : Mặt Di Vải – Đế Cao Su\r\nMặt di : Trơn – Speed', 'Đang cập nhật...!', 35, 'Lắc đầu', 12);

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
-- Cấu trúc bảng cho bảng `the_loai_ban_phim`
--

CREATE TABLE `the_loai_ban_phim` (
  `id` int(11) NOT NULL,
  `the_loai` varchar(255) NOT NULL,
  `ten_the_loai` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `the_loai_ban_phim`
--

INSERT INTO `the_loai_ban_phim` (`id`, `the_loai`, `ten_the_loai`) VALUES
(1, 'ban-phim-co', 'BÀN PHÍM CƠ'),
(2, 'ban-phim-gia-co', 'BÀN PHÍM GIẢ CƠ');

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
(10, 'phat@gmail.com', 'phat', 'phat123', 2),
(13, 'dao@gmail.com', 'dao', 'dao123', 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `authority`
--
ALTER TABLE `authority`
  ADD PRIMARY KEY (`authority_id`);

--
-- Chỉ mục cho bảng `ban_phim`
--
ALTER TABLE `ban_phim`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chi_tiet_hoa_don`
--
ALTER TABLE `chi_tiet_hoa_don`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chuot`
--
ALTER TABLE `chuot`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chu_de`
--
ALTER TABLE `chu_de`
  ADD PRIMARY KEY (`chu_de_id`);

--
-- Chỉ mục cho bảng `hang_sx_ban_phim`
--
ALTER TABLE `hang_sx_ban_phim`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hoa_don`
--
ALTER TABLE `hoa_don`
  ADD PRIMARY KEY (`id`);

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
-- Chỉ mục cho bảng `the_loai_ban_phim`
--
ALTER TABLE `the_loai_ban_phim`
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
-- AUTO_INCREMENT cho bảng `ban_phim`
--
ALTER TABLE `ban_phim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT cho bảng `chi_tiet_hoa_don`
--
ALTER TABLE `chi_tiet_hoa_don`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `chuot`
--
ALTER TABLE `chuot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `chu_de`
--
ALTER TABLE `chu_de`
  MODIFY `chu_de_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `hang_sx_ban_phim`
--
ALTER TABLE `hang_sx_ban_phim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `hoa_don`
--
ALTER TABLE `hoa_don`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `information`
--
ALTER TABLE `information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `lot_chuot`
--
ALTER TABLE `lot_chuot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `new`
--
ALTER TABLE `new`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `the_loai_ban_phim`
--
ALTER TABLE `the_loai_ban_phim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
