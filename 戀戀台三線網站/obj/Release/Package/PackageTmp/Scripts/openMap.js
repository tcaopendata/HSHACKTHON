//預設地圖參數空間
var zoom, center, rotation, view;

function mapinit() {
    map = new ol.Map({
        target: 'map',
        view: new ol.View({
            center: ol.proj.transform([121.11, 23.82], 'EPSG:4326', 'EPSG:3857'),
            zoom: 7
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({ layer: 'sat' })
            }),
        ]
    });
    //取得目前地圖參數
    view = map.getView();
    zoom = view.getZoom();
    center = view.getCenter();
    rotation = view.getRotation();
}


function zoom_out() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom - 1);
}

function zoom_in() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom + 1);
}

//平移功能
function panto() {
    var view = map.getView();
    var zoom = view.getZoom();
    var center = view.getCenter();
    var addres = ol.proj.fromLonLat([121.458678, 25.050420]);
    view.setZoom(17);
    view.setCenter(addres);
}

function restore() {
    view.setCenter(center);
    view.setRotation(rotation); 
    view.setZoom(zoom);
}