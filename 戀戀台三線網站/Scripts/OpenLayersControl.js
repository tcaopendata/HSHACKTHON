function init() {
    //var UbikeSationJson = [{ "站點名稱": "新竹火車站(前站)", "經度": "120.971459", "緯度": "24.801815", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike01.jpg", "站點位置": "中華路二段445號(火車站前廣場)" }, { "站點名稱": "東門圓環", "經度": "120.970556", "緯度": "24.803866", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike02.jpg", "站點位置": "勝利路2號(對面圓環人行道)" }, { "站點名稱": "新竹市政府", "經度": "120.969260", "緯度": "24.806138", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike03.jpg", "站點位置": "中央路106號(對面人行道)" }, { "站點名稱": "明志書院立體停車場", "經度": "120.965760", "緯度": "24.801670", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike04.jpg", "站點位置": "西大路317號(停車場前人行道)" }, { "站點名稱": "辛志平校長故居", "經度": "120.973662", "緯度": "24.804317", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike05.jpg", "站點位置": "東門街32號(汽車停車場)" }, { "站點名稱": "中正北大路口", "經度": "120.967098", "緯度": "24.808979", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike06.jpg", "站點位置": "中正路146號(機車停車場)" }, { "站點名稱": "延平停車場", "經度": "120.956616", "緯度": "24.803791", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike07.jpg", "站點位置": "延平路一段159巷22號(對面機車停車格)" }, { "站點名稱": "建國公園", "經度": "120.966675", "緯度": "24.803382", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike08.jpg", "站點位置": "西門街1號(對面汽車停車格)" }, { "站點名稱": "新竹公園(公園路)", "經度": "120.978717", "緯度": "24.802579", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike09.jpg", "站點位置": "公園路300號(左側人行道)" }, { "站點名稱": "遠東巨城購物中心", "經度": "120.974258", "緯度": "24.809326", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike10.jpg", "站點位置": "民權路171號(對面人行道)" }, { "站點名稱": "三民公園", "經度": "120.979624", "緯度": "24.811226", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike11.jpg", "站點位置": "中央路364-1號(網球場前人行道)" }, { "站點名稱": "新竹轉運站", "經度": "120.973191", "緯度": "24.800896", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike12.jpg", "站點位置": "東南街1巷6號(轉運站對面人行廣場)" }, { "站點名稱": "新竹馬偕紀念醫院", "經度": "120.991278", "緯度": "24.800074", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike13.jpg", "站點位置": "光復路二段690號(水源街對面公園人行道)" }, { "站點名稱": "新源建功一路口", "經度": "120.993200", "緯度": "24.802771", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike14.jpg", "站點位置": "新源街138號(對面人行道)" }, { "站點名稱": "清華大學(北校門)", "經度": "120.996686", "緯度": "24.796842", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike15.jpg", "站點位置": "光復路二段101號(面校門右側人行道)" }, { "站點名稱": "綠光公園", "經度": "120.985033", "緯度": "24.812458", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike16.jpg", "站點位置": "鐵道路一段28巷79號(對面公園綠帶)" }, { "站點名稱": "新竹教育大學", "經度": "120.964533", "緯度": "24.794294", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike17.jpg", "站點位置": "南大路560號(對面人行道)" }, { "站點名稱": "竹蓮寺", "經度": "120.970420", "緯度": "24.798283", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike18.jpg", "站點位置": "竹蓮街72號(對面人行道)" }, { "站點名稱": "北區區公所", "經度": "120.970561", "緯度": "24.816444", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike19.jpg", "站點位置": "國華街69號(區公所前廣場)" }, { "站點名稱": "經國民生路口", "經度": "120.973992", "緯度": "24.813884", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike20.jpg", "站點位置": "民生路309號(旁公園綠帶)" }, { "站點名稱": "湳雅公園", "經度": "120.967956", "緯度": "24.820368", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike21.jpg", "站點位置": "武陵路157號(對面人行道)" }, { "站點名稱": "天公壇", "經度": "120.957256", "緯度": "24.799426", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike22.jpg", "站點位置": "中山路與中山路452巷口(西雅公園)" }, { "站點名稱": "光復關新路口", "經度": "121.018330", "緯度": "24.784875", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike23.jpg", "站點位置": "關新路21號(大樓前人行道)" }, { "站點名稱": "金山街(集福宮)", "經度": "121.021936", "緯度": "24.777737", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike24.jpg", "站點位置": "金山街63號(對面公園綠地)" }, { "站點名稱": "香山國小", "經度": "120.944523", "緯度": "24.796454", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike25.jpg", "站點位置": "牛埔東路260號(校門右側人行道)" }, { "站點名稱": "北新竹火車站(新竹高工)", "經度": "120.983512", "緯度": "24.809629", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike26.jpg", "站點位置": "中華路二段2-1號前人行道" }, { "站點名稱": "新莊火車站", "經度": "121.021833", "緯度": "24.788113", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike27.jpg", "站點位置": "關東路310號(車站出口右側人行道)" }, { "站點名稱": "千甲火車站", "經度": "121.002064", "緯度": "24.807119", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike28.jpg", "站點位置": "千甲路138-5號(民宅對面高架橋下)" }, { "站點名稱": "三姓橋火車站", "經度": "120.928560", "緯度": "24.786994", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike29.jpg", "站點位置": "元培街32巷30號(車站出口前廣場)" }, { "站點名稱": "香山火車站", "經度": "120.913819", "緯度": "24.763156", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike30.jpg", "站點位置": "中華路五段347巷2弄27號(火車站前廣場)" }, { "站點名稱": "交通大學(大學路)", "經度": "121.000260", "緯度": "24.789400", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike31.jpg", "站點位置": "大學路200號(對面人行道)" }, { "站點名稱": "元培醫事科技大學", "經度": "120.940465", "緯度": "24.778031", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike32.jpg", "站點位置": "元培街306號(校門對面機車停車場)" }, { "站點名稱": "樹林頭公園", "經度": "120.959777", "緯度": "24.821613", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike33.jpg", "站點位置": "東大路二段537號(對面汽車停車場)" }, { "站點名稱": "清華大學(小吃部)", "經度": "120.99347", "緯度": "24.79288", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike34.jpg", "站點位置": "光復路二段101號(小吃部左側廣場)" }, { "站點名稱": "交通大學(逐風廣場)", "經度": "120.99964", "緯度": "24.7849", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike35.jpg", "站點位置": "大學路1001號(女二宿前廣場)" }, { "站點名稱": "赤土崎公園", "經度": "120.9942", "緯度": "24.79974", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike36.jpg", "站點位置": "光復路二段153號(對面人行道)" }, { "站點名稱": "國賓大飯店(新光三越)", "經度": "120.978", "緯度": "24.80613", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike37.jpg", "站點位置": "中華路二段188號(前人行道)" }, { "站點名稱": "新莊公園", "經度": "121.01736", "緯度": "24.78743", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike38.jpg", "站點位置": "新莊街212號旁(公園人行道)" }, { "站點名稱": "東大武陵路口(國軍新竹醫院)", "經度": "120.96398", "緯度": "24.81713", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike39.jpg", "站點位置": "東大路二段261號(旁人行道)" }, { "站點名稱": "新竹和平公園", "經度": "120.95243", "緯度": "24.79912", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike40.jpg", "站點位置": "經國路三段78巷18號(對面公園人行道)" }, { "站點名稱": "青草湖(煙波大飯店)", "經度": "120.97008", "緯度": "24.77386", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike41.jpg", "站點位置": "明湖路773號對面公園人行道" }, { "站點名稱": "十八尖山(新竹高商)", "經度": "120.987619", "緯度": "24.797087", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike42.jpg", "站點位置": "博愛街5巷2號對面停車場" }, { "站點名稱": "虎林棒球場", "經度": "120.944251", "緯度": "24.805122", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike43.jpg", "站點位置": "延平路一段541號對面人行道" }, { "站點名稱": "新竹棒球場", "經度": "120.960621", "緯度": "24.807606", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike44.jpg", "站點位置": "民富街141號對面人行道" }, { "站點名稱": "竹科管理局", "經度": "121.00607", "緯度": "24.78142", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike48.jpg", "站點位置": "新安路2號前人行道" }, { "站點名稱": "科技生活館", "經度": "121.0054", "緯度": "24.78004", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike49.jpg", "站點位置": "工業東二路1號旁人行道" }, { "站點名稱": "靜心湖", "經度": "121.01078", "緯度": "24.77874", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike50.jpg", "站點位置": "竹村七路7號前人行道" }, { "站點名稱": "金山寺", "經度": "121.01466", "緯度": "24.77739", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike51.jpg", "站點位置": "湖濱二路201號旁(人行道)" }, { "站點名稱": "矽導研發中心停車場", "經度": "121.01881", "緯度": "24.77279", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike52.jpg", "站點位置": "力行二路2號前人行道" }, { "站點名稱": "篤行會館", "經度": "121.02517", "緯度": "24.77092", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike53.jpg", "站點位置": "篤行路6號前人行道" }, { "站點名稱": "園二園三廣場", "經度": "121.01019", "緯度": "24.77282", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike54.jpg", "站點位置": "園區三路1號(對面人行道)" }, { "站點名稱": "研發四路公園", "經度": "120.99843", "緯度": "24.77884", "圖片URL": "http://opendata-manage.hccg.gov.tw/img/24/youbike55.jpg", "站點位置": "園區二路15號(斜對面人行道)" }];
    
    //obj = JSON.parse(UbikeSationJson);




    //建立一個座標點
    var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.971459, 24.801815], 'EPSG:4326', 'EPSG:3857')),
        name: '新竹火車站(前站)',
        population: 4000,
        rainfall: 500
    });

    var iconFeature2 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.970556, 24.803866], 'EPSG:4326', 'EPSG:3857')),
        name: '東門圓環',
        population: 4000,
        rainfall: 500
    });

    var iconFeature3 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.969260, 24.806138], 'EPSG:4326', 'EPSG:3857')),
        name: '新竹市政府',
        population: 4000,
        rainfall: 500
    });

    var iconFeature4 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.965760, 24.801670], 'EPSG:4326', 'EPSG:3857')),
        name: '明志書院立體停車場',
        population: 4000,
        rainfall: 500
    });

    var iconFeature5 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.973662, 24.804317], 'EPSG:4326', 'EPSG:3857')),
        name: '辛志平校長故居',
        population: 4000,
        rainfall: 500

    });

    var iconFeature6 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.967098, 24.808979], 'EPSG:4326', 'EPSG:3857')),
        name: '中正北大路口',
        population: 4000,
        rainfall: 500
    });

    var iconFeature7 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.956616, 24.803791], 'EPSG:4326', 'EPSG:3857')),
        name: '延平停車場',
        population: 4000,
        rainfall: 500
    });

    var iconFeature8 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.9666750, 24.803382], 'EPSG:4326', 'EPSG:3857')),
        name: '建國公園',
        population: 4000,
        rainfall: 500
    });

    var iconFeature9 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.978717, 24.802579], 'EPSG:4326', 'EPSG:3857')),
        name: '新竹公園(公園路)',
        population: 4000,
        rainfall: 500
    });

    var iconFeature10 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.974258, 24.809326], 'EPSG:4326', 'EPSG:3857')),
        name: '遠東巨城購物中心',
        population: 4000,
        rainfall: 500
    });

    var iconFeature11 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.979624, 24.811226], 'EPSG:4326', 'EPSG:3857')),
        name: '三民公園',
        population: 4000,
        rainfall: 500
    });

    var iconFeature12 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.973191, 24.800896], 'EPSG:4326', 'EPSG:3857')),
        name: '新竹轉運站',
        population: 4000,
        rainfall: 500
    });

    var iconFeature13 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.991278, 24.800074], 'EPSG:4326', 'EPSG:3857')),
        name: '新竹馬偕紀念醫院',
        population: 4000,
        rainfall: 500
    });

    var iconFeature14 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.993200, 24.802771], 'EPSG:4326', 'EPSG:3857')),
        name: '新源建功一路口',
        population: 4000,
        rainfall: 500
    });

    var iconFeature15 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.996686, 24.796842], 'EPSG:4326', 'EPSG:3857')),
        name: '清華大學',
        population: 4000,
        rainfall: 500
    });

    var iconFeature16 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.985033, 24.812458], 'EPSG:4326', 'EPSG:3857')),
        name: '綠光公園',
        population: 4000,
        rainfall: 500
    });

    var iconFeature17 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.964533, 24.794294], 'EPSG:4326', 'EPSG:3857')),
        name: '新竹教育大學',
        population: 4000,
        rainfall: 500
    });

    var iconFeature18 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.970420, 24.798283], 'EPSG:4326', 'EPSG:3857')),
        name: '竹蓮寺',
        population: 4000,
        rainfall: 500
    });

    var iconFeature19 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.970561, 24.816444], 'EPSG:4326', 'EPSG:3857')),
        name: '北區區公所',
        population: 4000,
        rainfall: 500
    });

    var iconFeature20 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.973992, 24.813884], 'EPSG:4326', 'EPSG:3857')),
        name: '經國民生路口',
        population: 4000,
        rainfall: 500
    });

    var iconFeature21 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.967956, 24.820368], 'EPSG:4326', 'EPSG:3857')),
        name: '湳雅公園',
        population: 4000,
        rainfall: 500
    });

    var iconFeature22 = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([120.957256, 24.799426], 'EPSG:4326', 'EPSG:3857')),
        name: '天公壇',
        population: 4000,
        rainfall: 500
    });



    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: '../Image/icons8-bicycle-50.png'
        }))
    });
    iconFeature.setStyle(iconStyle);
    iconFeature2.setStyle(iconStyle);
    iconFeature3.setStyle(iconStyle);
    iconFeature4.setStyle(iconStyle);
    iconFeature5.setStyle(iconStyle);
    iconFeature6.setStyle(iconStyle);
    iconFeature7.setStyle(iconStyle);
    iconFeature8.setStyle(iconStyle);
    iconFeature9.setStyle(iconStyle);
    iconFeature10.setStyle(iconStyle);
    iconFeature11.setStyle(iconStyle);
    iconFeature12.setStyle(iconStyle);
    iconFeature13.setStyle(iconStyle);
    iconFeature14.setStyle(iconStyle);
    iconFeature15.setStyle(iconStyle);
    iconFeature16.setStyle(iconStyle);
    iconFeature17.setStyle(iconStyle);
    iconFeature18.setStyle(iconStyle);
    iconFeature19.setStyle(iconStyle);
    iconFeature20.setStyle(iconStyle);
    iconFeature21.setStyle(iconStyle);
    iconFeature22.setStyle(iconStyle);
    

    var vectorSource = new ol.source.Vector({
        features: [iconFeature]
    });

    var vectorSource2 = new ol.source.Vector({
        features: [iconFeature2]
    });

    var vectorSource3 = new ol.source.Vector({
        features: [iconFeature3]
    });

    var vectorSource4 = new ol.source.Vector({
        features: [iconFeature4]
    });
    var vectorSource5 = new ol.source.Vector({
        features: [iconFeature5]
    });

    var vectorSource6 = new ol.source.Vector({
        features: [iconFeature6]
    });

    var vectorSource7 = new ol.source.Vector({
        features: [iconFeature7]
    });

    var vectorSource8 = new ol.source.Vector({
        features: [iconFeature8]
    });

    var vectorSource9 = new ol.source.Vector({
        features: [iconFeature9]
    });

    var vectorSource10 = new ol.source.Vector({
        features: [iconFeature10]
    });

    var vectorSource11 = new ol.source.Vector({
        features: [iconFeature11]
    });

    var vectorSource12 = new ol.source.Vector({
        features: [iconFeature12]
    });

    var vectorSource13 = new ol.source.Vector({
        features: [iconFeature13]
    });

    var vectorSource14 = new ol.source.Vector({
        features: [iconFeature14]
    });

    var vectorSource15 = new ol.source.Vector({
        features: [iconFeature15]
    });

    var vectorSource16 = new ol.source.Vector({
        features: [iconFeature16]
    });

    var vectorSource17 = new ol.source.Vector({
        features: [iconFeature17]
    });

    var vectorSource18 = new ol.source.Vector({
        features: [iconFeature18]
    });

    var vectorSource19 = new ol.source.Vector({
        features: [iconFeature19]
    });

    var vectorSource20 = new ol.source.Vector({
        features: [iconFeature20]
    });

    var vectorSource21 = new ol.source.Vector({
        features: [iconFeature21]
    });

    var vectorSource22 = new ol.source.Vector({
        features: [iconFeature22]
    });



    var vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });
    var vectorLayer2 = new ol.layer.Vector({
        source: vectorSource2
    });
    var vectorLayer3 = new ol.layer.Vector({
        source: vectorSource3
    });
    var vectorLayer4 = new ol.layer.Vector({
        source: vectorSource4
    });
    var vectorLayer5 = new ol.layer.Vector({
        source: vectorSource5
    });
    var vectorLayer6 = new ol.layer.Vector({
        source: vectorSource6
    });
    var vectorLayer7 = new ol.layer.Vector({
        source: vectorSource7
    });
    var vectorLayer8 = new ol.layer.Vector({
        source: vectorSource8
    });
    var vectorLayer9 = new ol.layer.Vector({
        source: vectorSource9
    });
    var vectorLayer10 = new ol.layer.Vector({
        source: vectorSource10
    });
    var vectorLayer11 = new ol.layer.Vector({
        source: vectorSource11
    });
    var vectorLayer12 = new ol.layer.Vector({
        source: vectorSource12
    });
    var vectorLayer13 = new ol.layer.Vector({
        source: vectorSource13
    });
    var vectorLayer14 = new ol.layer.Vector({
        source: vectorSource14
    });
    var vectorLayer15 = new ol.layer.Vector({
        source: vectorSource15
    });
    var vectorLayer16 = new ol.layer.Vector({
        source: vectorSource16
    });
    var vectorLayer17 = new ol.layer.Vector({
        source: vectorSource17
    });
    var vectorLayer18 = new ol.layer.Vector({
        source: vectorSource18
    });
    var vectorLayer19 = new ol.layer.Vector({
        source: vectorSource19
    });
    var vectorLayer20 = new ol.layer.Vector({
        source: vectorSource20
    });
    var vectorLayer21 = new ol.layer.Vector({
        source: vectorSource21
    });
    var vectorLayer22 = new ol.layer.Vector({
        source: vectorSource22
    });


  //鼠標經緯度顯示
        var mousepositionControl =new ol.control.MousePosition({
          coordinateFormat:ol.coordinate.createStringXY(4),
          projection:'EPSG:4326',
          className:'cmp',
          target:document.getElementById('mouse_pos'),
          undefinedHTML:'&nbsp'
        });
  //比例尺
        var scaleLineControl =new ol.control.ScaleLine({
          units:'metric'
        });

        var overviewMapControl =new ol.control.OverviewMap({
          className:'ol-overviewmap ol-custom-overviewmap',
          layers:[
            new ol.layer.Tile({
              source:new ol.source.OSM({
                'url':'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
              })
            })
          ],
          collapseLabel:'\u00BB',
          label:'\o00AB',
          collapsed:false
        });


        var key ='Ah1JkVnlW59uA49GaORT-mq2Tf5uONVRfb38ue1sK9Qi3QlbJhPow2bj2e7NSaXF';
        var roads =new ol.layer.Tile({
          source:new ol.source.BingMaps({key:key ,imagerySet:'Road'})
        });
        var imagery =new ol.layer.Tile({
          source:new ol.source.BingMaps({key:key ,imagerySet:'Aerial'})
        });

        
        var map=new ol.Map({
          target:'map',
          layers:[
            new ol.layer.Tile({
              source:new ol.source.OSM()
            }),
            roads,
            imagery,
            vectorLayer,
            vectorLayer2,
            vectorLayer3,
            vectorLayer4,
            vectorLayer5,
            vectorLayer6,
            vectorLayer7,
            vectorLayer8,
            vectorLayer9,
            vectorLayer10,
            vectorLayer11,
            vectorLayer12,
            vectorLayer13,
            vectorLayer14,
            vectorLayer15,
            vectorLayer16,
            vectorLayer17,
            vectorLayer18,
            vectorLayer19,
            vectorLayer20,
            vectorLayer21,
            vectorLayer22

          ],
          view:new ol.View({
              center: ol.proj.transform([120.971167,24.801690], 'EPSG:4326', 'EPSG:3857'),
            zoom:13
          }),
          controls: ol.control.defaults().extend([mousepositionControl ,scaleLineControl,overviewMapControl])
        });


        var radius =90;
        //使用keyDown事件實現鍵盤上通過up&down案件改變圓的半徑
        $(document).keydown(function (evt){
          if(evt.which == 38){
              radius = Math.min(radius + 5, 250);
              map.render();
          }else if(evt.which==40){
            radius =Math.max(radius-5 ,25);
            map.render();
          }
        });

        var mousePosition =null;
        
        $(map.getViewport()).on('mousemove' ,function(evt){
          mousePosition =map.getEventPixel(evt.originalEvent);
          map.render();
        }).on('mouseout' ,function(){
          mousePosition =null;
          map.render();
        });

        imagery.on('precompose' ,function(event){
          var ctx =event.context;
          var pixelRatio =event.frameState.pixelRatio;
          ctx.save();
          ctx.beginPath();
          if (mousePosition){
            //只顯示滑鼠當前位置為圓心的範圍
            ctx.arc(mousePosition[0]*pixelRatio,
            mousePosition[1]*pixelRatio,
            radius*pixelRatio ,
            0,
            2*Math.PI);
            ctx.lineWidth =5* pixelRatio;
            ctx.strokeStyle ='rgba(0,0,0,0.5)';
            ctx.stroke();
          }
            ctx.clip();
        });

        imagery.on('postcompose',function(event){
          var ctx =event.context;
          ctx.restore();
        });

        var element = document.getElementById('popup');
        var popup = new ol.Overlay({
            element: element,
            positioning: 'bottom-center',
            stopEvent: false
        });
        map.addOverlay(popup);

    // display popup on click
        map.on('click', function (evt) {
            var feature = map.forEachFeatureAtPixel(evt.pixel,
                function (feature, layer) {
                    return feature;
                });
            if (feature) {
                var geometry = feature.getGeometry();
                var coord = geometry.getCoordinates();
                popup.setPosition(coord);
                $(element).popover({
                    'placement': 'top',
                    'html': true,
                    'content': feature.get('name')
                });
                $(element).popover('show');
            } else {
                $(element).popover('destroy');
            }
        });

    // change mouse cursor when over marker
        map.on('pointermove', function (e) {
            if (e.dragging) {
                $(element).popover('destroy');
                return;
            }
            var pixel = map.getEventPixel(e.originalEvent);
            var hit = map.hasFeatureAtPixel(pixel);
            map.getTarget().style.cursor = hit ? 'pointer' : '';
        });
};
        

