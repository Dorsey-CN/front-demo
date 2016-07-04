-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-05-29 12:17:47
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newsdb`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `imgsrc` varchar(500) NOT NULL,
  `addtime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `type`, `title`, `imgsrc`, `addtime`) VALUES
(1, '推荐', 'G7峰会鸡尾酒会 日第一夫人着和服迎宾客', 'http://timg01.baidu-img.cn/timg?tc&size=b950_593&sec=0&quality=75&cut_x=0&cut_y=18&cut_h=593&cut_w=0&di=26ea12df138f814570c855459157491c&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3Dhttp%3A%2F%2Fl.sinaimg.cn%2Fwww%2Fdy%2Fslidenews%2F1_img%2F2016_21%2F2841_696224_162453.jpg%2Foriginal.jpg%26fm%3D94', '2016-05-28'),
(3, '推荐', '男子手绘作案地图 偷遍长三角多家超市', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/322179922/1000&fm=94', '2016-05-28'),
(9, '图片', '女子将2岁女儿抛入长江后跳桥', 'http://timg01.baidu-img.cn/timg?tc&size=b449_253&sec=0&quality=100&cut_x=28&cut_y=0&cut_h=0&cut_w=449&di=82c74724f33222619e63d59aaed680c1&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fnews%2Fcrop%253D30%252C157%252C506%252C253%2Fsign%3D3e639c96d7160924c86af85be93405d6%2Fd439b6003af33a8761cefbdac15c10385243b54b.jpg', '2016-05-29'),
(10, '娱乐', '真正最萌身高差！陈乔恩姚明合影显娇小', 'http://upload.ct.youth.cn/2016/0529/1464478543315.jpg', '2016-05-29'),
(12, '百家', '《愤怒的小鸟》成功上位，萌物生态入侵的胜利', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C173%2C529%2C317%3Bw%3D638/sign=f9754f368a1001e95a734e4f853e57dd/f2deb48f8c5494eeaaa609c62af5e0fe98257e6c.jpg', '2016-05-28'),
(13, '推荐', '贵南高铁被指公众支持率造假', 'http://t11.baidu.com/it/u=http://img1.cache.netease.com/catchpic/9/9C/9C77C2368136EDB8513539343D1C7353.jpg&fm=36', '2016-05-28'),
(14, '推荐', '广岛核爆中国遇难者家属:最该道歉的是日本政府', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/05/27/146436438147484007_620_1000.JPEG&fm=36', '2016-05-28'),
(16, '推荐', '天王嫂昆凌俘获周董的秘密', 'http://t11.baidu.com/it/u=http://img1.cache.netease.com/catchpic/3/3B/3B02C0214AEC475AAEB88533AD8ADA18.jpg&fm=36|http://t10.baidu.com/it/u=http://img1.cache.netease.com/catchpic/3/33/33C42D4BD64811C2D2CE4D8ED105F6C8.jpg&fm=36|http://t10.baidu.com/it/u=http://img1.cache.netease.com/catchpic/E/EE/EE91336F7DE29C6C24C6EA7EE84EA60C.jpg&fm=36', '2016-05-28'),
(17, '推荐', '5月新增信贷有望温和反弹 定向政策工具或将更频繁使用', 'http://t11.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0405/35/2/22572366/auto.jpg&fm=36', '2016-05-28'),
(18, '推荐', '"盲井"少年被骗失联13年回家', 'http://t12.baidu.com/it/u=http://img1.cache.netease.com/catchpic/F/FF/FF3C63FFA08EE3489A344BB8BA095DAF.jpg&fm=36', '2016-05-28'),
(19, '推荐', '网传“千余交警跨省查酒驾”，真相其实是…', 'http://t10.baidu.com/it/u=http://r3.sinaimg.cn/10230/2016/0528/b6/a/53611292/483x432.jpg&fm=36', '2016-05-28'),
(20, '推荐', '航拍河南麦田 丰收在即色彩斑斓', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/322132136/1000&fm=94', '2016-05-28'),
(21, '推荐', '国际油价今年来首超50美元 国内油价或迎四连涨', 'http://t12.baidu.com/it/u=http://upload.10yan.com/2016/0511/1462969717497.png&fm=36', '2016-05-28'),
(22, '推荐', '4月工业企业利润增速放缓 产成品存货近年来首次下降', 'http://t11.baidu.com/it/u=http://posts.cdn.wallstcn.com/f8/6e/4c/w020160527342646741505-r75.png!article.foil&fm=36', '2016-05-28'),
(23, '推荐', 'OLED板块表现出色涨2.20% 锦富新材涨停', 'http://t12.baidu.com/it/u=http://img4.cache.netease.com/stock/2016/5/27/2016052711343499e6a.png&fm=36', '2016-05-28'),
(24, '推荐', '华中车展 车模京剧头饰混搭比基尼秀性感', 'http://t10.baidu.com/it/u=http://l.sinaimg.cn/www/dy/slidenews/1_img/2016_21/2841_696414_592848.jpg/original.jpg&fm=94', '2016-05-28'),
(25, '推荐', '留美女生讲中文遭白人女攻击 被骂"滚回中国去"', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/common/2016/05/28/146440096792589625_620_1000.JPEG&fm=36', '2016-05-28'),
(26, '百家', '中国新富的投资逻辑：炒股票就是理财，但更愿意买房', 'http://a.hiphotos.baidu.com/news/crop%3D0%2C0%2C1098%2C659%3Bw%3D638/sign=cbdc6890cd8065386fa5fe53aaed8d74/3c6d55fbb2fb431635ed97a427a4462308f7d37a.jpg', '2016-05-28'),
(27, '百家', '途牛烧钱难维系 失利纳斯达克', 'http://b.hiphotos.baidu.com/news/crop%3D19%2C1%2C502%2C301%3Bw%3D638/sign=1036e114858ba61ecba1926f7c05ae26/2fdda3cc7cd98d10a0eaebef263fb80e7bec9036.jpg', '2016-05-28'),
(28, '百家', '《守望先锋》之前，射击游戏还有很多另类“变种” ', 'http://a.hiphotos.baidu.com/news/crop%3D152%2C0%2C1288%2C773%3Bw%3D638/sign=e7efe7d61830e924dbebc67171395b34/fc1f4134970a304ec5f85a24d6c8a786c8175c12.jpg', '2016-05-28'),
(29, '百家', '光线以“6%股权＋23.83亿现金”控股猫眼占比57.4%', 'http://g.hiphotos.baidu.com/news/crop%3D0%2C37%2C743%2C446%3Bw%3D638/sign=faf1cd30a4cc7cd9ee626e9904310d0c/91529822720e0cf3819498260d46f21fbf09aa88.jpg', '2016-05-28'),
(30, '百家', 'Pony效应引发的思考：如何延展网红生命周期？', 'http://h.hiphotos.baidu.com/news/crop%3D0%2C79%2C1268%2C761%3Bw%3D638/sign=66bd1df6b751f819e56a590ae78466da/8ad4b31c8701a18bd8798992992f07082938fe59.jpg', '2016-05-28'),
(31, '百家', '光线控股猫眼堪称，王长田做了10年来最正确的决定！', 'http://f.hiphotos.baidu.com/news/w%3D638/sign=ea74f8478526cffc692abcb181004a7d/b999a9014c086e0640a4b19505087bf40bd1cbe4.jpg', '2016-05-28'),
(32, '百家', '人民币贬值，国内居民该如何来应对？', 'http://a.hiphotos.baidu.com/news/crop%3D0%2C1%2C325%2C195%3Bw%3D638/sign=266998c0be389b502cb0ba12b805c9ec/c2fdfc039245d688c487307aa3c27d1ed31b2462.jpg', '2016-05-28'),
(33, '百家', '篮球训练营遍地开花，能够为中国培养出篮球人才吗？', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C1%2C431%2C259%3Bw%3D638/sign=29f3f3febe12c8fca0bcac8dc133be74/8601a18b87d6277fc557b3e62f381f30e824fca3.jpg', '2016-05-28'),
(34, '百家', '谷歌汽车OS发布，小米电动车将扑面而来？', 'http://h.hiphotos.baidu.com/news/crop%3D40%2C2%2C923%2C554%3Bw%3D638/sign=1157735a4ded2e73e8a6dc6cba3591a7/0ff41bd5ad6eddc476f728253edbb6fd536633df.jpg', '2016-05-28'),
(35, '百家', '移动互联和YouTube如何改变国际新闻报道', 'http://f.hiphotos.baidu.com/news/crop%3D0%2C1%2C500%2C300%3Bw%3D638/sign=df6179e7b4de9c82b22aa3cf51b1ac3b/78310a55b319ebc4fa7ceb478526cffc1f1716e3.jpg', '2016-05-28'),
(36, '百家', '皮之不存，毛将焉付——联想集团业绩会拖累联想控股', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C2%2C927%2C556%3Bw%3D638/sign=d528b8d61830e924dbebc67171384234/b17eca8065380cd743030733a644ad34588281cb.jpg', '2016-05-28'),
(37, '百家', '宋清辉：假如华为挥手告别 深圳也不必过分挽留', 'http://d.hiphotos.baidu.com/news/crop%3D0%2C124%2C1279%2C767%3Bw%3D638/sign=b93530e76c63f62408126343ba74c7c9/d1160924ab18972b9f2dbb14e1cd7b899f510adc.jpg', '2016-05-28'),
(38, '百家', '深度：穆帅惊人言论挑战世界，蓝军与皇马最恨谁？', 'http://e.hiphotos.baidu.com/news/w%3D638/sign=efcadf5bceea15ce41eee30a8e023a25/77094b36acaf2edd4f3df8378a1001e938019324.jpg', '2016-05-28'),
(39, '百家', '李易峰被骂惨！兰博基尼哭诉人言可畏！', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C1%2C639%2C384%3Bw%3D638/sign=7cbb8f3ab41c8701c2f9e8a61a4fb21e/d439b6003af33a87bb9831c4c15c10385243b572.jpg', '2016-05-28'),
(40, '娱乐', '李嫣生日王菲李亚鹏窦靖童合体 李老师', 'http://t1.baidu.com/it/u=http%3A%2F%2Fcnews.chinadaily.com.cn%2Fimg%2Fattachement%2Fpng%2Fsite1%2F20160528%2F64006a47a30318b38afd58.png&fm=30', '2016-05-29'),
(41, '娱乐', '张歆艺出发赴德国办婚礼 忘带手机、头', 'http://t1.baidu.com/it/u=http%3A%2F%2Fwww.chinanews.com%2F2016%2F0527%2F20165271475.bmp&fm=30', '2016-05-29'),
(42, '娱乐', '霍建华加盟《如懿传》 与周迅上演传奇', 'http://t3.baidu.com/it/u=http%3A%2F%2Fwww.aihami.com%2Fuploads%2Fallimg%2F160528%2F173-16052QA925435.jpg&fm=30', '2016-05-29'),
(43, '娱乐', '胡歌之后再无仙剑？（组图）', 'http://t1.baidu.com/it/u=http%3A%2F%2Fcharacter.workercn.cn%2Fhtml%2Ffiles%2F2016-05%2F25%2F20160525140254647533753.jpg&fm=30', '2016-05-29'),
(44, '娱乐', '百鸟朝凤——匠心传承，时代风骨', 'http://t3.baidu.com/it/u=http%3A%2F%2Fwww.mzb.com.cn%2Fres%2FHome%2F1605%2F160534048.jpg&fm=30', '2016-05-29'),
(45, '娱乐', 'IMAX《爱丽丝2》“疯帽子”触发观众回', 'http://t3.baidu.com/it/u=http%3A%2F%2Fcnews.chinadaily.com.cn%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20160526%2Fd8cb8a14fbeb18b0c39409.jpg&fm=30', '2016-05-29'),
(46, '娱乐', '总局电视剧司司长：三八线为战争题材确', 'http://t2.baidu.com/it/u=http%3A%2F%2Fwww.chinanews.com%2Fcr%2F2016%2F0527%2F604172970.jpg&fm=30', '2016-05-29'),
(47, '娱乐', '《翻译官》热播 杨幂说法语惊动了专业', 'http://t3.baidu.com/it/u=http%3A%2F%2Fnews.xinhuanet.com%2Foverseas%2F2016-05%2F26%2F129016588_14642184613181n.jpg&fm=30', '2016-05-29'),
(48, '娱乐', '刘若英唱进小巨蛋 尊龙娱乐温馨安排台', 'http://t3.baidu.com/it/u=http%3A%2F%2Fgames.thethirdmedia.com%2FArticle%2Fupload%2F201605%2F16052715251009.jpg&fm=30', '2016-05-29'),
(49, '娱乐', '欧弟女儿抱玩偶熟睡 肉嘟嘟的可爱极了', 'http://t2.baidu.com/it/u=http%3A%2F%2Fwww.aihami.com%2Fuploads%2Fallimg%2F160528%2F173-16052Q45PR62.jpg&fm=30', '2016-05-29'),
(50, '娱乐', '《娜就这么说》收官欢乐与眼泪齐飞 谢', 'http://t3.baidu.com/it/u=http%3A%2F%2Fent.chinadaily.com.cn%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20160527%2F448a5bd66c7d18b2323640.jpg&fm=30', '2016-05-29'),
(51, '娱乐', '陈赫带张子萱和友人聚餐 赞女方是个好', 'http://t2.baidu.com/it/u=http%3A%2F%2Fwww.chinanews.com%2F2016%2F0525%2F2016525112157.jpg&fm=30', '2016-05-27'),
(52, '娱乐', '霍建华林心如恋爱旺财3.6亿 禁欲系男神', 'http://t2.baidu.com/it/u=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Ftwxw%2Fimages%2F20160529%2F755738.png&fm=30', '2016-05-27'),
(53, '娱乐', '宋仲基“归队”跑男', 'http://t3.baidu.com/it/u=http%3A%2F%2Fcharacter.workercn.cn%2Fhtml%2Ffiles%2F2016-05%2F27%2F20160527133909834845253.jpg&fm=30', '2016-05-27'),
(54, '社会', '陕西3个初中生轮番殴打13岁留守儿童', 'http://upload.cankaoxiaoxi.com/2016/0529/1464485431287.jpg', '2016-05-29'),
(55, '社会', '重案队刑警亮相', 'http://t1.baidu.com/it/u=http%3A%2F%2Fepaper.jinghua.cn%2Fimages%2F2016-05%2F29%2F001%2Fp21_b.jpg&fm=30', '2016-05-28'),
(56, '社会', '随州炎帝故里景区全面提档升级 盛装迎', 'http://t1.baidu.com/it/u=http%3A%2F%2Fnews.cnhubei.com%2Fxw%2Fhb%2Fsz%2F201605%2FW020160527650434450824.jpg&fm=30', '2016-05-28'),
(57, '社会', '撞交警！未带驾照被查 庆阳一男子驾车', 'http://t2.baidu.com/it/u=http%3A%2F%2Fwww.gs.xinhuanet.com%2Fnews%2F2016-05%2F27%2F1118940507_14643068153951n.jpg&fm=30', '2016-05-28'),
(58, '社会', '呈贡百名警爸警妈 带孩子进警营体验 ', 'http://t3.baidu.com/it/u=http%3A%2F%2Fsociety.yunnan.cn%2Fimages%2Fattachement%2Fjpg%2Fsite2%2F20160529%2Fd8cb8a0c657518b475e915.jpg&fm=30', '2016-05-28'),
(59, '社会', '母亲大桥下抛下2岁幼女跳河自杀 因老公', 'http://t2.baidu.com/it/u=http%3A%2F%2Fwww.aihami.com%2Fuploads%2Fallimg%2F160529%2F173-16052910121D28.jpg&fm=30', '2016-05-28'),
(60, '社会', '黑龙江安达一男子掐死3岁女儿 自己自杀', 'http://t2.baidu.com/it/u=http%3A%2F%2Fwww.aihami.com%2Fuploads%2Fallimg%2F160528%2F167-16052Q6204B52.jpg&fm=30', '2016-05-28'),
(61, '社会', '236斤男子表演后空翻 向妻证明自己魅力', 'http://t3.baidu.com/it/u=http%3A%2F%2Fnews.xinhuanet.com%2Fworld%2F2016-05%2F29%2F129024130_14644890003531n.jpg&fm=30', '2016-05-28'),
(62, '社会', '女业主连丢6条内裤 阳台摄像头记录嫌疑', 'http://t3.baidu.com/it/u=http%3A%2F%2Fwww.aihami.com%2Fuploads%2Fallimg%2F160523%2F172-160523155134222.jpg&fm=30', '2016-05-28'),
(63, '社会', '网传“手机脏过厕所”不可信', 'http://t2.baidu.com/it/u=694415605,3694870606&fm=20', '2016-05-27'),
(64, '社会', '张北“草原天路”收费22天后 取消收费', 'http://t2.baidu.com/it/u=4279646984,3302973668&fm=20', '2016-05-27'),
(65, '社会', '“黑诊所”打无资质玻尿酸 女子瞬间失', 'http://t1.baidu.com/it/u=3350701024,2540727450&fm=20', '2016-05-27'),
(66, '社会', '身边的感动·手术室门外的“最美坐姿”', 'http://t3.baidu.com/it/u=2119744976,1907554947&fm=20', '2016-05-27'),
(67, '社会', '陕西一法院执法中扇人耳光 回应涉事人员有不妥被..', 'http://t3.baidu.com/it/u=http%3A%2F%2Fwww.aihami.com%2Fuploads%2Fallimg%2F160528%2F167-16052Q52919B7.jpg&fm=30', '2016-05-26'),
(68, '社会', '女子为弥补过错竟诬告情人强奸 检察院用电子证据..', 'http://t3.baidu.com/it/u=http%3A%2F%2Fwww.chinanews.com%2Fcr%2F2016%2F0527%2F1161490797.jpg&fm=30', '2016-05-26'),
(69, '图片', '环卫工扫垃圾桶 爬出四条娃娃鱼', 'http://timg01.baidu-img.cn/timg?tc&size=b357_201&sec=0&quality=100&cut_x=22&cut_y=0&cut_h=0&cut_w=357&di=c48fb0eb9c90561d1d97edc56378849c&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fnews%2Fcrop%253D3%252C107%252C402%252C201%2Fsign%3D153f79b544a98226ac8e7167b7b19530%2F8694a4c27d1ed21bf00fd525aa6eddc450da3f28.jpg', '2016-05-29'),
(70, '图片', '长沙多名大叔大妈穿校服补过儿童节', 'http://timg01.baidu-img.cn/timg?tc&size=b641_361&sec=0&quality=100&cut_x=40&cut_y=0&cut_h=0&cut_w=641&di=6a28570dc833539519506b57bcfc3cfe&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fnews%2Fcrop%253D28%252C270%252C722%252C361%2Fsign%3D4622453ad6c8a786aa65104e5a3bf111%2F42166d224f4a20a4251ed90797529822730ed0ea.jpg', '2016-05-29'),
(71, '图片', '玉女杨钰莹逆生长似少女', 'http://timg01.baidu-img.cn/timg?tc&size=b515_290&sec=0&quality=100&cut_x=32&cut_y=0&cut_h=0&cut_w=515&di=1ee8844a2580e272ad33a55f0fd085ec&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fnews%2Fcrop%253D2%252C55%252C581%252C290%2Fsign%3D1677f08e33a85edfeec3a46374662516%2Fd439b6003af33a87431699c4c15c10385243b5f1.jpg', '2016-05-28'),
(72, '图片', '结婚周年怎么办？黄晓明Baby撸个串', 'http://timg01.baidu-img.cn/timg?tc&size=b640_360&sec=0&quality=100&cut_x=0&cut_y=60&cut_h=360&cut_w=0&di=66694d9e7cd5ccfe44c09ab0f2831d5a&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3Dhttp%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F321855853%2F1000%26fm%3D94', '2016-05-28'),
(73, '图片', '海南千吨建筑垃圾"入侵"万泉河', 'http://timg01.baidu-img.cn/timg?tc&size=b1022_575&sec=0&quality=100&cut_x=0&cut_y=0&cut_h=0&cut_w=1022&di=f69930be2b5de0b2290cddb7bb249004&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3Dhttp%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0001%2F2016-05-28%2FBO50FD4P00AP0001.jpg%26fm%3D94', '2016-05-28'),
(74, '图片', 'G7峰会鸡尾酒会 日第一夫人着和服迎宾客', 'http://timg01.baidu-img.cn/timg?tc&size=b950_534&sec=0&quality=100&cut_x=0&cut_y=48&cut_h=534&cut_w=0&di=26ea12df138f814570c855459157491c&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3Dhttp%3A%2F%2Fl.sinaimg.cn%2Fwww%2Fdy%2Fslidenews%2F1_img%2F2016_21%2F2841_696224_162453.jpg%2Foriginal.jpg%26fm%3D94', '2016-05-28'),
(75, '图片', '马德里双雄太太团比拼:全是美女', 'http://timg01.baidu-img.cn/timg?tc&size=b1024_576&sec=0&quality=100&cut_x=0&cut_y=19&cut_h=576&cut_w=0&di=ba70c0ce3da81b3844fc84a1e91432fc&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3Dhttp%3A%2F%2Fimg3.cache.netease.com%2Fphoto%2F0005%2F2016-05-28%2FBO4SM8HB00DE0005.jpg%26fm%3D94', '2016-05-27'),
(76, '图片', '黑老大出狱抖威风：百人列队放炮迎接', 'http://timg01.baidu-img.cn/timg?tc&size=b452_254&sec=0&quality=100&cut_x=0&cut_y=14&cut_h=254&cut_w=0&di=1abc3eb5b804ecf971b6b66d6d1ae3e9&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3Dhttp%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F321809766%2F1000%26fm%3D94', '2016-05-27'),
(77, '图片', '13岁留守儿童惨遭同学轮番殴打', 'http://timg01.baidu-img.cn/timg?tc&size=b476_268&sec=0&quality=100&cut_x=29&cut_y=0&cut_h=0&cut_w=476&di=17923123500dc0195d0782d15d59b378&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C11%252C536%252C268%2Fsign%3Dfb1b5b1ef71f3a294e878f8ea4159000%2F8644ebf81a4c510faeb618da6759252dd52aa584.jpg', '2016-05-27'),
(84, '娱乐', '那年青春我们正好', 'http://news.baidu.com/z/resource/r/image/2016-05-29/20e3b7a14cf420ad2c24d98fa8dbda13.jpg ', '2016-05-27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
