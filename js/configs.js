export default {
  appname: "overpass-turbo (CH)",
  defaultServer: "http://overpass.osm.ch/api/",
  suggestedServers: [
    "http://overpass.osm.ch/api/",
    "//overpass-api.de/api/",
    "https://overpass.kumi.systems/api/",
    "http://overpass.openstreetmap.ru/cgi/",
    "//overpass.openstreetmap.fr/api/"
  ],
  defaultTiles: "http://tile.osm.ch/switzerland/{z}/{x}/{y}.png",
  tileServerAttribution: "&copy; OpenStreetMap.org contributors&ensp;<small>Data:ODbL, Map:cc-by-sa</small>",
  suggestedTiles: [
    "http://tile.osm.ch/switzerland/{z}/{x}/{y}.png",
    "http://tile.osm.ch/osm-swiss-style/{z}/{x}/{y}.png",
  ],
  defaultMapView: {
    lat: 47.0018,
    lon: 8.5007,
    zoom: 9
  },
  maxMapZoom: 20,
  short_url_service: "http://osm.li/get?",
  html2canvas_use_proxy: false,
  // api key for osmnames geocoder, go to http://osmnames.org/api/ to get one if you run your own overpass instance
  osmnamesApiKey: "gtXyh2mBSaN5zWqqqQRh",
  // osmAuth configuration object (used for syncing saved queries). expects an osm-auth config object (min. the oauth_consumer_key and oauth_secret must be given), see https://github.com/osmlab/osm-auth#getting-keys
  osmAuth: null
};
