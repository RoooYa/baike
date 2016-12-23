;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jushoucang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M908.8 214.4c-9.6-12.8-19.2-22.4-28.8-32-112-115.2-230.4-105.6-342.4-16-9.6 6.4-19.2 16-28.8 25.6-9.6-9.6-19.2-16-28.8-25.6-112-86.4-230.4-99.2-342.4 16-9.6 9.6-19.2 19.2-25.6 32-134.4 195.2-60.8 387.2 137.6 560 44.8 38.4 89.6 73.6 137.6 102.4 16 9.6 32 19.2 44.8 28.8 9.6 6.4 12.8 9.6 19.2 9.6 3.2 3.2 6.4 3.2 12.8 6.4 3.2 3.2 9.6 3.2 16 6.4 25.6 6.4 64 3.2 89.6-12.8 3.2 0 9.6-3.2 16-9.6 12.8-6.4 28.8-16 44.8-28.8 48-28.8 92.8-64 137.6-102.4C969.6 598.4 1043.2 406.4 908.8 214.4zM736 732.8c-41.6 35.2-86.4 70.4-131.2 99.2-16 9.6-28.8 19.2-44.8 25.6-6.4 3.2-12.8 6.4-16 9.6-6.4 3.2-16 6.4-25.6 9.6-3.2 0-6.4 0-9.6 0-6.4 0-12.8 0-16 0-3.2 0-3.2 0-3.2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-3.2 0-3.2-3.2-3.2 0-6.4-3.2-9.6-3.2-3.2-3.2-9.6-6.4-16-9.6-12.8-6.4-28.8-16-44.8-25.6-44.8-28.8-89.6-60.8-131.2-99.2-179.2-160-243.2-323.2-131.2-489.6 6.4-9.6 16-16 22.4-25.6 89.6-96 182.4-86.4 275.2-12.8 9.6 6.4 16 12.8 22.4 19.2 0 0 0 0 0 0l28.8 32c3.2 3.2 3.2 3.2 6.4 6.4 0 0 0 0 0 0l0 0c3.2-3.2 9.6-9.6 16-16 12.8-12.8 25.6-25.6 41.6-38.4 92.8-73.6 185.6-83.2 275.2 12.8 6.4 9.6 16 16 22.4 25.6C982.4 406.4 918.4 572.8 736 732.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lajixiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M944 192l-188.8 0 0-44.8c0-54.4-44.8-99.2-99.2-99.2l-294.4 0c-54.4 0-99.2 44.8-99.2 99.2l0 44.8-179.2 0c-12.8 0-25.6 9.6-25.6 25.6 0 12.8 9.6 25.6 25.6 25.6l60.8 0 0 0 0 633.6c0 54.4 44.8 99.2 99.2 99.2l550.4 0c54.4 0 99.2-44.8 99.2-99.2l0-630.4 0-3.2 51.2 0c12.8 0 25.6-9.6 25.6-25.6C966.4 204.8 960 192 944 192zM316.8 147.2c0-25.6 22.4-48 48-48l294.4 0c25.6 0 48 22.4 48 48l0 44.8-390.4 0L316.8 147.2zM841.6 867.2c0 28.8-16 57.6-41.6 57.6l-550.4 0c-25.6 0-54.4-19.2-54.4-44.8l3.2-636.8 643.2 0 0 0L841.6 867.2z"  ></path>' +
    '' +
    '<path d="M368 380.8c-16 0-25.6 9.6-25.6 25.6l0 342.4c0 16 12.8 25.6 25.6 25.6 12.8 0 25.6-9.6 25.6-25.6l0-342.4C390.4 393.6 384 380.8 368 380.8z"  ></path>' +
    '' +
    '<path d="M528 380.8c-16 0-25.6 9.6-25.6 25.6l0 342.4c0 16 12.8 25.6 25.6 25.6 12.8 0 25.6-9.6 25.6-25.6l0-342.4C550.4 393.6 544 380.8 528 380.8z"  ></path>' +
    '' +
    '<path d="M688 380.8c-16 0-25.6 9.6-25.6 25.6l0 342.4c0 16 12.8 25.6 25.6 25.6 12.8 0 25.6-9.6 25.6-25.6l0-342.4C710.4 393.6 704 380.8 688 380.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-naozhong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M931.2 518.4c0-233.6-188.8-419.2-419.2-419.2-233.6 0-419.2 188.8-419.2 419.2 0 137.6 67.2 259.2 169.6 336l-57.6 51.2c-9.6 9.6-12.8 25.6-3.2 35.2 9.6 9.6 25.6 12.8 35.2 3.2l70.4-57.6c60.8 35.2 131.2 54.4 208 54.4 80 0 153.6-22.4 214.4-60.8 0 0 0 0 3.2 3.2l73.6 60.8c9.6 9.6 25.6 6.4 35.2-3.2 9.6-9.6 6.4-25.6-3.2-35.2l-64-54.4C867.2 774.4 931.2 652.8 931.2 518.4zM512 889.6c-204.8 0-371.2-166.4-371.2-371.2s166.4-371.2 371.2-371.2 371.2 166.4 371.2 371.2S716.8 889.6 512 889.6z"  ></path>' +
    '' +
    '<path d="M208 96c-9.6-9.6-25.6-9.6-35.2 0l-118.4 118.4c-9.6 9.6-9.6 25.6 0 35.2 9.6 9.6 25.6 9.6 35.2 0l118.4-118.4C217.6 121.6 217.6 105.6 208 96z"  ></path>' +
    '' +
    '<path d="M969.6 211.2l-118.4-115.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l118.4 115.2c9.6 9.6 25.6 9.6 35.2 0C979.2 236.8 979.2 220.8 969.6 211.2z"  ></path>' +
    '' +
    '<path d="M707.2 300.8l-144 128c0 0 0 3.2-3.2 3.2-12.8-3.2-22.4-6.4-35.2-6.4-12.8 0-22.4 3.2-32 6.4 0-3.2-3.2-3.2-3.2-6.4l-92.8-83.2c-9.6-9.6-25.6-9.6-35.2 3.2-9.6 9.6-9.6 25.6 3.2 35.2l89.6 80c-16 19.2-28.8 41.6-28.8 70.4 0 54.4 44.8 102.4 102.4 102.4 54.4 0 102.4-44.8 102.4-102.4 0-25.6-9.6-48-25.6-67.2l140.8-124.8c9.6-9.6 9.6-25.6 3.2-35.2C732.8 294.4 716.8 294.4 707.2 300.8zM524.8 582.4c-28.8 0-51.2-22.4-51.2-51.2 0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2C576 556.8 553.6 582.4 524.8 582.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangfan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M873.6 419.2l-355.2-361.6c-9.6-9.6-22.4-9.6-32 0l-355.2 368c-9.6 9.6-9.6 22.4 0 32 9.6 9.6 22.4 9.6 32 0l316.8-329.6 0 828.8c0 12.8 9.6 22.4 22.4 22.4s22.4-9.6 22.4-22.4l0-822.4 310.4 316.8c9.6 9.6 22.4 9.6 32 0C883.2 441.6 883.2 425.6 873.6 419.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 697.6c102.4 0 182.4-83.2 182.4-185.6 0-102.4-83.2-185.6-182.4-185.6-102.4 0-182.4 83.2-182.4 185.6C329.6 614.4 412.8 697.6 512 697.6L512 697.6zM512 646.4c-73.6 0-134.4-60.8-134.4-134.4 0-73.6 60.8-134.4 134.4-134.4 73.6 0 134.4 60.8 134.4 134.4C646.4 585.6 585.6 646.4 512 646.4L512 646.4z"  ></path>' +
    '' +
    '<path d="M249.015232 843.178592c35.2 28.8 73.6 51.2 112 67.2 41.6-38.4 96-60.8 150.4-60.8 57.6 0 108.8 22.4 150.4 60.8 41.6-16 80-38.4 112-67.2-12.8-54.4-3.2-112 22.4-163.2 28.8-48 73.6-86.4 128-102.4 3.2-22.4 6.4-44.8 6.4-67.2 0-22.4-3.2-44.8-6.4-67.2-54.4-16-99.2-54.4-128-102.4-28.8-48-35.2-108.8-22.4-163.2-35.2-28.8-73.6-51.2-112-67.2-41.6 38.4-92.8 60.8-150.4 60.8-54.4 0-108.8-22.4-150.4-60.8-41.6 16-80 38.4-112 67.2 12.8 54.4 3.2 112-22.4 163.2-28.8 48-73.6 86.4-128 102.4-3.2 22.4-6.4 44.8-6.4 67.2 0 22.4 3.2 44.8 6.4 67.2 54.4 16 99.2 54.4 128 102.4C252.215232 731.178592 261.815232 788.778592 249.015232 843.178592M361.015232 958.378592c-54.4-19.2-105.6-48-150.4-89.6-6.4-6.4-9.6-16-6.4-22.4 16-48 9.6-99.2-16-140.8-25.6-44.8-64-73.6-112-83.2-9.6-3.2-16-9.6-16-19.2-6.4-28.8-9.6-60.8-9.6-89.6 0-28.8 3.2-57.6 9.6-89.6 3.2-9.6 9.6-16 16-19.2 48-12.8 89.6-41.6 112-83.2 25.6-44.8 28.8-92.8 16-140.8-3.2-9.6 0-19.2 6.4-22.4 44.8-38.4 96-67.2 150.4-89.6 9.6-3.2 16 0 22.4 6.4 35.2 35.2 80 57.6 128 57.6 48 0 96-19.2 128-57.6 6.4-6.4 16-9.6 22.4-6.4 54.4 19.2 105.6 48 150.4 89.6 6.4 6.4 9.6 16 6.4 22.4-16 48-9.6 99.2 16 140.8 25.6 44.8 64 73.6 112 83.2 9.6 3.2 16 9.6 16 19.2 6.4 28.8 9.6 60.8 9.6 89.6 0 28.8-3.2 57.6-9.6 89.6-3.2 9.6-9.6 16-16 19.2-48 12.8-89.6 41.6-112 83.2-25.6 44.8-28.8 92.8-16 140.8 3.2 9.6 0 19.2-6.4 22.4-44.8 38.4-96 67.2-150.4 89.6-9.6 3.2-16 0-22.4-6.4-35.2-35.2-80-57.6-128-57.6-48 0-96 19.2-128 57.6-3.2 3.2-9.6 6.4-16 6.4C364.215232 958.378592 361.015232 958.378592 361.015232 958.378592z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shijian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 64c-256 0-460.8 208-460.8 460.8s208 460.8 460.8 460.8 460.8-208 460.8-460.8S768 64 512 64zM512 940.8c-227.2 0-412.8-185.6-412.8-412.8s185.6-412.8 412.8-412.8 412.8 185.6 412.8 412.8S742.4 940.8 512 940.8z"  ></path>' +
    '' +
    '<path d="M809.6 544l-278.4 0 0-281.6c0-12.8-9.6-22.4-22.4-22.4-12.8 0-22.4 9.6-22.4 22.4l0 307.2c0 12.8 9.6 22.4 22.4 22.4 0 0 3.2 0 3.2 0l297.6 0c12.8 0 22.4-9.6 22.4-22.4C832 553.6 822.4 544 809.6 544z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shuaxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M960 630.4c-12.8-3.2-25.6 3.2-32 12.8-76.8 204.8-320 307.2-544 227.2-224-80-342.4-307.2-265.6-512 76.8-204.8 320-307.2 544-227.2 92.8 32 172.8 92.8 224 172.8l-92.8 0c-12.8 0-25.6 9.6-25.6 22.4 0 12.8 9.6 22.4 25.6 22.4l153.6 0c12.8 0 25.6-9.6 25.6-22.4l0-140.8c0-12.8-9.6-22.4-25.6-22.4-12.8 0-25.6 9.6-25.6 22.4l0 89.6c-57.6-86.4-140.8-150.4-246.4-188.8-249.6-86.4-518.4 28.8-608 256-86.4 230.4 44.8 486.4 294.4 572.8 249.6 86.4 518.4-28.8 608-256C979.2 649.6 972.8 636.8 960 630.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangshangjiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M966.4 668.8l-435.2-432c-9.6-9.6-25.6-9.6-35.2 0l-441.6 432c-9.6 9.6-9.6 25.6 0 35.2 9.6 9.6 25.6 9.6 35.2 0l425.6-416 416 416c9.6 9.6 25.6 9.6 35.2 0S976 678.4 966.4 668.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangxiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangyoujiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangzuojiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yanjing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M515.2 224c-307.2 0-492.8 313.6-492.8 313.6s214.4 304 492.8 304 492.8-304 492.8-304S822.4 224 515.2 224zM832 652.8c-102.4 86.4-211.2 140.8-320 140.8s-217.6-51.2-320-140.8c-35.2-32-70.4-64-99.2-99.2-6.4-6.4-9.6-12.8-16-19.2 3.2-6.4 9.6-12.8 12.8-19.2 25.6-35.2 57.6-70.4 92.8-102.4 99.2-89.6 208-144 329.6-144s230.4 54.4 329.6 144c35.2 32 64 67.2 92.8 102.4 3.2 6.4 9.6 12.8 12.8 19.2-3.2 6.4-9.6 12.8-16 19.2C902.4 585.6 870.4 620.8 832 652.8z"  ></path>' +
    '' +
    '<path d="M512 345.6c-96 0-169.6 76.8-169.6 169.6 0 96 76.8 169.6 169.6 169.6 96 0 169.6-76.8 169.6-169.6C681.6 422.4 604.8 345.6 512 345.6zM512 640c-67.2 0-121.6-54.4-121.6-121.6 0-67.2 54.4-121.6 121.6-121.6 67.2 0 121.6 54.4 121.6 121.6C633.6 582.4 579.2 640 512 640z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxizhongxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M585.6 905.6 585.6 905.6c25.6-32 38.4-44.8 41.6-44.8 208-38.4 345.6-198.4 345.6-396.8 3.2-227.2-204.8-406.4-460.8-406.4s-464 179.2-464 406.4c0 198.4 140.8 358.4 345.6 396.8 3.2 0 16 12.8 41.6 44.8l0 0c32 41.6 51.2 64 73.6 64S550.4 947.2 585.6 905.6M620.8 803.2c-19.2 3.2-32 19.2-67.2 64l0 0c-22.4 25.6-41.6 44.8-41.6 44.8l-9.6-9.6c-6.4-6.4-16-19.2-25.6-32-38.4-48-51.2-64-70.4-67.2-185.6-32-307.2-172.8-307.2-345.6 0-192 185.6-352 416-352s416 160 416 352C928 633.6 806.4 771.2 620.8 803.2z"  ></path>' +
    '' +
    '<path d="M281.6 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z"  ></path>' +
    '' +
    '<path d="M467.2 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z"  ></path>' +
    '' +
    '<path d="M652.8 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-huo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M336 972.8c-60.8-128-28.8-201.6 19.2-268.8 51.2-76.8 64-150.4 64-150.4s41.6 51.2 25.6 134.4c70.4-80 83.2-208 73.6-256 160 112 230.4 358.4 137.6 537.6 492.8-281.6 121.6-700.8 57.6-745.6 22.4 48 25.6 128-19.2 166.4-73.6-281.6-256-336-256-336 22.4 144-76.8 300.8-172.8 419.2-3.2-57.6-6.4-96-38.4-153.6-6.4 105.6-86.4 188.8-108.8 294.4C89.6 758.4 140.8 860.8 336 972.8L336 972.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jushoucanggift" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M892.543016 224.150106c-9.284457-11.914354-17.804505-21.814842-26.454512-30.930453C759.437485 80.827887 642.682341 92.003414 536.033369 176.799682c-9.493212 7.547907-18.453281 15.383362-26.88737 23.346731-8.43409-7.963369-17.395182-15.798824-26.888394-23.346731C375.608633 92.003414 258.853489 80.827887 152.202471 193.21863c-8.650007 9.115612-17.170055 19.016099-25.559119 29.714765C-2.680039 410.134984 68.411089 595.897805 259.728416 764.030084c42.320874 37.192064 87.560218 70.64906 132.799562 99.905384 15.841803 10.245342 30.570249 19.244296 43.816948 26.932396 8.024767 4.657067 13.827937 7.872295 17.044188 9.578146 4.869914 2.916423 9.728572 5.142114 14.530948 6.771217 3.470031 1.619894 7.516184 3.091408 12.218276 4.387937 25.377994 6.998391 62.97938 1.908466 85.839017-11.764951 2.14178-1.101077 7.944949-4.315282 15.969717-8.972349 13.246699-7.688099 27.974122-16.687054 43.816948-26.932396 45.239344-29.256324 90.478687-62.71332 132.799562-99.905384C949.879885 595.897805 1020.971014 410.134984 892.543016 224.150106z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)