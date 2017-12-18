-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 18. 12 2017 kl. 08:36:28
-- Serverversion: 10.1.26-MariaDB
-- PHP-version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hi-fi`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `accesstokens`
--

CREATE TABLE `accesstokens` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `token` varchar(600) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `accesstokens`
--

INSERT INTO `accesstokens` (`id`, `userid`, `token`, `created`) VALUES
(6, 1, 'a9c82c931dc7d24a303806d3ee52cd4c28f060f06d753bafebf53d22cacac945e6c61393dc49363d6c9010f9dee0c16243be1c33ba4d5ddbee9a4c733cca6e5188574a066edd069b0761c800525e09748237a99b30555b6e2b8720ebf5ec657b1371a37a94c28badb1542106b71d0ee5b7b956334b429031747209c659b973c95aca26f7bb5dd629bad6f2a9c83962073f9d8fc27707746ad0440a25377c8bbac5ccc7491679daa9f0783e190bd2556c77b804adfd54e9c2bcc21a230d94a34fe2797824273d379fb51ebceff2141cde407d883ca677cb52e1c57f179c249d70b8fd912898a77c5010434386c4c571ec1692231c5e0dd2d6f21769562046df20', '2017-12-14 13:58:57'),
(7, 1, '57795a41e0f55af0c8de31f9e24556ad6c199116f93dedcbeba056d7876ec4f8c7a723ddd03841590fceb9b48317066274e825ad99db5921b2b2034f64bca346d0579a61baf752f13160ca1a0fc459cd0800dc3bdaa918f97bcacbcae641b17368314f7b448c513c850275d0bf47c7cbe3256846f1893bf1df0732710999302fed8a267fc9c202cca92fc60f80492c6bdb9e8be05467d65bee00ad9e1c951b4c61501d303f6d09ab5385e906e2d85845e9582a6f286256a84443ddcb3c8994c18fc5457c9fccdfeeac252d8a4b1309388f585199fb48fa80d15dff7882f3b060c82645612f1b621937fc68c0cc2914acd75c3f53067febc9d011a782cc59918a', '2017-12-14 14:32:02'),
(8, 1, 'bfcee82ccc7ac939296777acaecd38c9a25f0228e2249b85606136a68322da4ec415e3a54184076968947a68d24c6cfa4226af22cf5fe1210eb870cb5601843e89e36d737e41106817c8a306b154cc6dbc4f27b00f970fa82838f0fd8082b4eb6f454073715e85f7083bac47c72cca1fce4667aa5d58a9bb3a498415fdf91a283b0756e191c51cd265d8963d650bd393e598d00a3c50e776681d752d4c6be53737073696b41e0fa47545429bd62f06f72200d2229ef6221d8f61fc668a6233c79fd4ce2cc43dd3547ff93a108dbf9b1cef5bb612b2c60f9091012099ef2540a347c6806d17210a0fb1f6aa0e28c3d2f2b1323ef44e96a50df06ba85547318050', '2017-12-15 08:20:56'),
(9, 1, '7486a92b49a61fe4209a69baced5b1f7b3ccbe3166e320fc47ebc9cc0d79eb57435c8583a5d372f1e4f4901625c05d4e29166fb6d8fe6553a46b5b6bfae7c409a81a6b327a425419098ad58abe337b43103b80dd43cbaa48d30622ecb4a7a84497eda492259b98b84540d742c32b206bc9be8079d476358e6eb391f995689fc31c2a471a3af3519a1669d9efe25a9f2646c4f04a9c2e98b1bd1338bec6684402c36019437988b4d2aa445f02d2b98b932ea8d207875e1ba7336166e6252af1a9aadb0d0b3d19bb757eeb779943fb5fd8b8cb56ef44e22e9d6caf72d405af0666b7a620e86eecd299ba49005073015608d9d1f10212b273763640a731da0b8237', '2017-12-15 08:23:55'),
(10, 1, '8601202de7d2c6c471013fff28e8734b33e61a883612471655ed632e1bcf1a754bfbdb7f4d683e9ac377e9a383adcdbec477df8bf3f1055d9f529c010df8bc941180cbbf35fc90968b324d100f8a995caee26b9dc5acabbb8d2c5e16c7ef1ceceb5a40d9fee3beabc937cd4c4745f2903e1d62f5f62681c692cab2fc47dc9457604283c28e299a3b5903b5c3838ae1a3070d9aa7ac9f105267712e53ecb330577ac0ff950dbf95b1c8f81c388d48d93fb3355c4d4330bc53cd1db03ea44d18b32b81de2461c2afe633e73f69f436498e43a90f8f88ff824a5a184a03fef20b34a6153082514e3bae8cc163bd426bffd5d2e91d593e57d5bb35b4bf12fca4a8fa', '2017-12-17 20:38:54'),
(11, 1, '5b4434af4ebfc6224cc5a740cd1a7cfb27d8e237b4252d632a6b003e56e65835375323a590f29aba2ad33d791fa17c1fa9900c1da10fb402686ab3a2388f38783e0ece61e02aa545b18f9ef50446dd64186503d0b6206b8eb5d9372a0be55e9c090e4cf63c127bed3e49aba6f472e053cf0d61547f7edc7e97154ac3755fc59aa51cae469526f99a3c4ef30fc512e36e5c05bd3d2b6e50560ddee9a646cefba04ca010aa2bb3e42cfb7bdf50c6724ae7e5072cc63a9a3b78fbd647408ac1db389ec29d34133413e31f2cbf4a52998d9d8a4812cc35a12dadb135359f1baa69dc965aa68bfbb9e07665861dae60b85fecb109baf18ba439501a0821ec7748af88', '2017-12-18 08:12:44');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kategorier`
--

CREATE TABLE `kategorier` (
  `id` int(11) NOT NULL,
  `navn` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `kategorier`
--

INSERT INTO `kategorier` (`id`, `navn`) VALUES
(1, 'Afspillere'),
(2, 'Højtalere'),
(3, 'Forstærkere');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `kontakt`
--

CREATE TABLE `kontakt` (
  `id` int(11) NOT NULL,
  `Fornavn` varchar(30) NOT NULL,
  `Efternavn` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Besked` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `kontakt`
--

INSERT INTO `kontakt` (`id`, `Fornavn`, `Efternavn`, `Email`, `Besked`) VALUES
(1, 'Maiken', 'P. Rais', 'maikenpr@hotmail.com', 'Hej'),
(2, 'Maiken', 'Rais', 'mafdk@dfkb.dk', 'gfjsøflbaølf'),
(3, 'Maiken', 'Rais', 'mafdk@dfkb.dk', 'gfjsøflbaølf'),
(4, 'Julemanden', 'Julle', 'jule@manden.dk', 'Ho ho ho, Glædelig Jul!'),
(5, 'maiken', 'rais', 'maikenpr@hotmail.com', 'gigbe'),
(6, 'Maiken', 'Rais', 'maikenpr@hotmail.com', 'Hejsa'),
(7, 'Maiken', 'Rais', 'maikenpr@hotmail.com', 'test'),
(8, 'maiken', 'rais', 'maikenpr@hotmail.com', 'test2'),
(9, 'maiken', 'rais', 'maikenpr@hotmail.com', 'test2'),
(10, 'Maiken', 'P. Rais', 'maikenpr@hotmail.com', 'test3'),
(11, 'Maiken', 'P. Rais', 'maikenpr@hotmail.com', 'test3'),
(12, 'Maiken', 'P. Rais', 'maikenpr@hotmail.com', 'test4'),
(13, 'Maiken', 'P. Rais', 'maikenpr@hotmail.com', 'test5');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `producent`
--

CREATE TABLE `producent` (
  `id` int(11) NOT NULL,
  `navn` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `producent`
--

INSERT INTO `producent` (`id`, `navn`) VALUES
(1, 'Creek'),
(2, 'Exp'),
(3, 'Exposure'),
(4, 'Parasound'),
(5, 'Manley'),
(6, 'Project'),
(7, 'Boesendorfer'),
(8, 'Epos'),
(9, 'Harbeth'),
(10, 'Pro_ject'),
(11, 'Jolida');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `produkter`
--

CREATE TABLE `produkter` (
  `id` int(11) NOT NULL,
  `navn` varchar(30) NOT NULL,
  `varenr` int(15) NOT NULL,
  `beskrivelse` varchar(500) NOT NULL,
  `pris` decimal(10,2) NOT NULL,
  `img` varchar(50) DEFAULT NULL,
  `fk_kategori` int(11) NOT NULL,
  `fk_producent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `produkter`
--

INSERT INTO `produkter` (`id`, `navn`, `varenr`, `beskrivelse`, `pris`, `img`, `fk_kategori`, `fk_producent`) VALUES
(1, 'classic_cd', 1234, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '299.00', 'creek_classic_cd.jpg', 1, 1),
(2, 'destiny_cd', 5678, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '599.95', 'creek_Destiny_CD.jpg', 1, 1),
(3, 'evo_cd', 9001, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '200.00', 'creek_evo_cd.jpg', 1, 1),
(4, '2010S_cd', 1122, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '150.00', 'Exp_2010S_CD.gif', 1, 2),
(5, 'classic', 2233, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '255.00', 'creek_classic.jpg', 1, 1),
(6, 'exsposure_2010S', 3344, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '365.00', 'exposure_2010S.jpg', 1, 3),
(7, 'd200', 4455, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '100.00', 'parasound_d200.jpg', 1, 4),
(8, 'halod3', 5566, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '400.00', 'parasound_halod3.jpg', 1, 4),
(9, 'mahi', 6677, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '2299.95', 'manley_mahi.jpg', 3, 5),
(10, 'neoclassic300b', 7788, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '4500.00', 'manley_neoclassic300b.jpg', 3, 5),
(11, 'snapper', 8899, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '1150.00', 'manley_snapper.jpg', 3, 5),
(12, 'haloa23', 9911, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '3395.95', 'parasound_haloa23.jpg', 3, 4),
(13, 'OBH_22_passive_preamp', 1221, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '6300.00', 'Creek_OBH_22_Passive_Preamp.jpg', 3, 1),
(14, 'calssic7100', 3324, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '2579.00', 'parasound_classic7100.jpg', 3, 4),
(15, 'halop3', 3740, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '2150.00', 'parasound_halop3.jpg', 3, 4),
(16, 'prebox', 4453, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '3700.00', 'Project_prebox.jpg', 3, 6),
(17, 'vcs_wall', 6545, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '1595.95', 'boesendorfer_vcs_wall.gif', 2, 7),
(18, 'epos_m5', 2713, 'Her kan der komme en beskrivelse på et senere tidspunkt.', '600.00', 'epos_m5.gif', 2, 8),
(19, 'h17es2', 4488, 'Her kan komme en beskrivelse på et senere tidspunkt.', '488.50', 'harbeth_hl7es2.jpg', 2, 9),
(20, 'monitor30', 5555, 'Her kan komme en beskrivelse på et senere tidspunkt.', '999.95', 'harbeth_monitor30.jpg', 2, 9),
(21, 'p3es2', 2223, 'Her kan komme en beskrivelse på et senere tidspunkt.', '350.00', 'harbeth_p3es2.jpg', 2, 9),
(22, 'a50I', 5543, 'Her kan komme en beskrivelse på et senere tidspunkt.', '5599.50', 'creek_a50I.jpg', 3, 1),
(23, 'classic5350SE', 6665, 'Her kan komme en beskrivelse på et senere tidspunkt.', '4700.00', 'creek_classic5350SE.jpg', 3, 1),
(24, 'destinyamp', 7411, 'Her kan komme en beskrivelse på et senere tidspunkt.', '3235.00', 'creek_destinyamp.jpg', 3, 1),
(25, 'snapperX', 9925, 'Her kan komme en beskrivelse på et senere tidspunkt.', '4930.00', 'manley_snapperX.jpg', 3, 5),
(26, 'stingray', 3333, 'Her kan komme en beskrivelse på et senere tidspunkt.', '5550.00', 'Manley_Stingray.jpg', 3, 5),
(35, 'debut_3_bl', 1012, 'Her kan komme en beskrivelse på et senere tidspunkt.', '400.00', 'Pro_ject_Debut_3_bl.jpg', 1, 10),
(36, 'debut_III_red_1', 5534, 'Her kan komme en beskrivelse på et senere tidspunkt.', '400.00', 'Pro_ject_Debut_III_red_1.jpg', 1, 10),
(37, 'debut_III_yellow_1', 6453, 'Her kan komme en beskrivelse på et senere tidspunkt.', '400.00', 'Pro_ject_Debut_III_yellow_1.jpg', 1, 10),
(38, 'rpm_5', 9983, 'Her kan komme en beskrivelse på et senere tidspunkt.', '597.00', 'Pro_ject_rpm_5.jpg', 1, 10),
(39, 'rpm10', 2433, 'Her kan komme en beskrivelse på et senere tidspunkt.', '329.95', 'Pro_ject_rpm10.jpg', 1, 10),
(40, 'JD102b', 9932, 'Her kan komme en beskrivelse på et senere tidspunkt.', '4050.00', 'jolida_JD102b.jpg', 3, 11),
(41, 'JD202a', 5532, 'Her kan komme en beskrivelse på et senere tidspunkt.', '995.00', 'jolida_JD202a.jpg', 3, 11),
(42, 'JD300b', 1123, 'Her kan komme en beskrivelse på et senere tidspunkt.', '2549.00', 'jolida_JD300b.jpg', 3, 11),
(43, 'JD302b', 6300, 'Her kan komme en beskrivelse på et senere tidspunkt.', '4111.00', 'jolida_JD302b.jpg', 3, 11),
(44, 'JD502b', 7347, 'Her kan komme en beskrivelse på et senere tidspunkt.', '3000.00', 'jolida_JD502b.jpg ', 3, 11),
(46, 'Sassy_dvd', 6654, 'Dette er et testprodukt1', '243.00', NULL, 1, 7),
(50, 'test1', 3342, 'dette er en test', '334.00', NULL, 1, 2);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'sha1$db4788b0$1$fdb72d43f670f34e23fd2d6f559ed543ad1248c9');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `accesstokens`
--
ALTER TABLE `accesstokens`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kategorier`
--
ALTER TABLE `kategorier`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `kontakt`
--
ALTER TABLE `kontakt`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `producent`
--
ALTER TABLE `producent`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `produkter`
--
ALTER TABLE `produkter`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Varenr` (`varenr`),
  ADD KEY `fk_kategori` (`fk_kategori`),
  ADD KEY `fk_producent` (`fk_producent`);

--
-- Indeks for tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `accesstokens`
--
ALTER TABLE `accesstokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Tilføj AUTO_INCREMENT i tabel `kategorier`
--
ALTER TABLE `kategorier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Tilføj AUTO_INCREMENT i tabel `kontakt`
--
ALTER TABLE `kontakt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Tilføj AUTO_INCREMENT i tabel `producent`
--
ALTER TABLE `producent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Tilføj AUTO_INCREMENT i tabel `produkter`
--
ALTER TABLE `produkter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- Tilføj AUTO_INCREMENT i tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `produkter`
--
ALTER TABLE `produkter`
  ADD CONSTRAINT `produkter_ibfk_1` FOREIGN KEY (`fk_producent`) REFERENCES `producent` (`id`),
  ADD CONSTRAINT `produkter_ibfk_2` FOREIGN KEY (`fk_kategori`) REFERENCES `kategorier` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
