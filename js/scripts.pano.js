var panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12, viewer, container, infospot, font;
var panorama13_1, panorama13_2, panorama13_3, panorama13_4, panorama14_1, panorama14_2, panorama14_3, panorama15_1, panorama15_2, panorama16, panorama17_1, panorama17_2;

container = document.querySelector( '#container' );

function createTextShape ( message, size = 10, count ) {
        message = makeMultiLine( message, count );
        var shapes = font.generateShapes( message, size );
        var geometry = new THREE.ShapeGeometry( shapes );
        var matLite = new THREE.MeshBasicMaterial( {
          color: 0xffffff,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide
        } );
        geometry.computeBoundingBox();
        var xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        geometry.translate( xMid, 0, 0 );
        return new THREE.Mesh( geometry, matLite );
}
function makeMultiLine ( text = '', count = 40 ) {
        let lineCharacterLimit = 0;
        return text.split(' ').map( word => {
          lineCharacterLimit += word.length;
          if ( lineCharacterLimit > count ) {
            word += '\n';
            lineCharacterLimit = 0;
          }
          return word;
        }).join(' ').replace( /\n /g, '\n' );
}

panorama1 = new PANOLENS.ImagePanorama( './asset/PIC_1.jpg' );
panorama2 = new PANOLENS.ImagePanorama( './asset/PIC_2.jpg' );
panorama3 = new PANOLENS.ImagePanorama( './asset/PIC_3.jpg' );
panorama4 = new PANOLENS.ImagePanorama( './asset/PIC_4.jpg' );
panorama5 = new PANOLENS.ImagePanorama( './asset/PIC_5.jpg' );
panorama6 = new PANOLENS.ImagePanorama( './asset/PIC_6.jpg' );
panorama7 = new PANOLENS.ImagePanorama( './asset/PIC_7.jpg' );
panorama8 = new PANOLENS.ImagePanorama( './asset/PIC_8.jpg' );
panorama9 = new PANOLENS.ImagePanorama( './asset/PIC_9.jpg' );
panorama10 = new PANOLENS.ImagePanorama( './asset/PIC_10.jpg' );
panorama11 = new PANOLENS.ImagePanorama( './asset/PIC_11.jpg' );
panorama12 = new PANOLENS.ImagePanorama( './asset/PIC_12.jpg' );

panorama13_1 = new PANOLENS.ImagePanorama( './asset/PIC_13_1.jpg' );
panorama13_2 = new PANOLENS.ImagePanorama( './asset/PIC_13_2.jpg' );
panorama13_3 = new PANOLENS.ImagePanorama( './asset/PIC_13_3.jpg' );
panorama13_4 = new PANOLENS.ImagePanorama( './asset/PIC_13_4.jpg' );
panorama14_1 = new PANOLENS.ImagePanorama( './asset/PIC_14_1.jpg' );
panorama14_2 = new PANOLENS.ImagePanorama( './asset/PIC_14_2.jpg' );
panorama14_3 = new PANOLENS.ImagePanorama( './asset/PIC_14_3.jpg' );
panorama15_1 = new PANOLENS.ImagePanorama( './asset/PIC_15_1.jpg' );
panorama15_2 = new PANOLENS.ImagePanorama( './asset/PIC_15_2.jpg' );
panorama16 = new PANOLENS.ImagePanorama( './asset/PIC_16.jpg' );
panorama17_1 = new PANOLENS.ImagePanorama( './asset/PIC_17_1.jpg' );
panorama17_2 = new PANOLENS.ImagePanorama( './asset/PIC_17_2.jpg' );

viewer = new PANOLENS.Viewer( {output: 'console', container: container});
viewer.add( panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12);
viewer.add( panorama13_1, panorama13_2, panorama13_3, panorama13_4, panorama14_1, panorama14_2, panorama14_3, panorama15_1, panorama15_2, panorama16, panorama17_1, panorama17_2);

panorama1.link( panorama4, new THREE.Vector3( 1106.60, -1238.05, 4709.29 ) );
panorama1.link( panorama5, new THREE.Vector3( -1558.91, -1285.10, -4566.64 ) );
panorama1.link( panorama2, new THREE.Vector3( -3564.53, -212.19, -3485.07 ) );
panorama1.link( panorama12, new THREE.Vector3( 3556.77, 106.75, 3498.68 ) );

panorama1.link( panorama17_1, new THREE.Vector3( 3238.13, -32.52, 3801.15 ) );

panorama1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama17_1.link( panorama1, new THREE.Vector3( -1771.75, -997.58, 4556.59 ) );
panorama17_1.link( panorama17_2, new THREE.Vector3( 3848.19, -344.87, 3160.57 ) );

panorama17_1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama17_2.link( panorama17_1, new THREE.Vector3( -3497.40, -19.86, -3562.88 ) );
panorama17_2.link( panorama1, new THREE.Vector3( -4919.85, -114.23, -827.09 ) );

panorama17_2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama2.link( panorama1, new THREE.Vector3( 4723.24, -916.17, 1324.33 ) );
panorama2.link( panorama3, new THREE.Vector3( -4888.75, -646.45, -761.70 ) );

panorama2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama3.link( panorama2, new THREE.Vector3( -4704.65, -233.01, 1651.48 ) );
panorama3.link( panorama6, new THREE.Vector3( -4913.62, -602.90, 637.55 ) );
panorama3.link( panorama9, new THREE.Vector3( 3025.70, -673.03, 3912.32 ) );
panorama3.link( panorama10, new THREE.Vector3( 4925.38, -413.87, 706.15 ) );
panorama3.link( panorama8, new THREE.Vector3( -338.64, -532.68, -4950.22 ) );
panorama3.link( panorama7, new THREE.Vector3( 1469.95, -400.81, -4758.44 ) );

panorama3.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama4.link( panorama1, new THREE.Vector3( 2540.49, -1478.30, 4034.87 ) );

panorama4.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama5.link( panorama1, new THREE.Vector3( -1228.04, -982.28, -4735.44 ) );

panorama5.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama6.link( panorama3, new THREE.Vector3( 3735.34, -402.60, -3295.04 ) );

panorama6.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama7.link( panorama3, new THREE.Vector3( 1741.15, -239.36, 4669.96 ) );

panorama7.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama8.link( panorama3, new THREE.Vector3( 3865.65, -748.11, -3069.22 ) );

panorama8.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama9.link( panorama3, new THREE.Vector3( 490.26, -420.65, 4955.54 ) );

panorama9.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama10.link( panorama3, new THREE.Vector3( 4549.48, -729.50, 1927.05 ) );
panorama10.link( panorama11, new THREE.Vector3( -4259.25, -365.16, -2582.83 ) );

panorama10.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama11.link( panorama10, new THREE.Vector3( -3817.82, -603.33, -3155.49 ) );

panorama11.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama12.link( panorama1, new THREE.Vector3( -4063.31, -666.72, 2823.05 ) );
panorama12.link( panorama13_1, new THREE.Vector3( 3509.44, -241.21, -3538.55 ) );
panorama12.link( panorama14_1, new THREE.Vector3( 3751.75, 209.26, 3288.12 ) );
panorama12.link( panorama15_1, new THREE.Vector3( -3491.35, -476.48, -3534.18 ) );

panorama12.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama13_1.link( panorama12, new THREE.Vector3( -4460.78, -557.17, 2166.75 ) );
panorama13_1.link( panorama13_3, new THREE.Vector3( -4252.48, -382.20, -2592.04 ) );
panorama13_1.link( panorama13_4, new THREE.Vector3( 320.32, -238.30, -4973.85 ) );

panorama13_1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama13_3.link( panorama13_1, new THREE.Vector3( -2969.04, -274.15, 4006.86 ) );
panorama13_3.link( panorama13_2, new THREE.Vector3( 4475.79, -421.34, -2172.66 ) );
panorama13_3.link( panorama12, new THREE.Vector3( -4819.56, -460.92, 1214.40 ) );

panorama13_3.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama13_4.link( panorama13_1, new THREE.Vector3( -3457.30, -464.61, -3570.22 ) );
panorama13_4.link( panorama13_2, new THREE.Vector3( 4974.02, 102.36, -418.96 ) );

panorama13_4.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama13_2.link( panorama13_3, new THREE.Vector3( -2803.77, -222.10, 4122.47 ) );
panorama13_2.link( panorama13_4, new THREE.Vector3( 1988.51, -499.81, 4554.97 ) );

panorama13_2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama14_1.link( panorama12, new THREE.Vector3( 4804.69, -749.92, -1137.91 ) );
panorama14_1.link( panorama14_2, new THREE.Vector3( -2066.75, -140.67, 4544.69 ) );
panorama14_1.link( panorama14_3, new THREE.Vector3( 1888.23, -491.03, 4594.57 ) );

panorama14_1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama14_2.link( panorama12, new THREE.Vector3( -3585.78, -361.67, 3455.53 ) );
panorama14_2.link( panorama14_1, new THREE.Vector3( -1325.33, -650.99, 4766.57 ) );
panorama14_2.link( panorama14_3, new THREE.Vector3( -2876.65, -267.16, -4073.03 ) );

panorama14_2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama14_3.link( panorama12, new THREE.Vector3( -4433.25, -146.93, 2284.91 ) );
panorama14_3.link( panorama14_1, new THREE.Vector3( -2830.23, 59.05, 4112.91 ) );
panorama14_3.link( panorama14_2, new THREE.Vector3( 1225.75, -151.89, 4834.68 ) );

panorama14_3.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama15_1.link( panorama12, new THREE.Vector3( -4786.24, -482.82, -1328.73 ) );
panorama15_1.link( panorama15_2, new THREE.Vector3( 4937.28, -616.82, -395.56 ) );
panorama15_1.link( panorama16, new THREE.Vector3( 3406.73, -685.54, -3583.86 ) );

panorama15_1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama15_2.link( panorama15_1, new THREE.Vector3( -3370.24, -451.90, 3659.41 ) );
panorama15_2.link( panorama16, new THREE.Vector3( -4868.75, -122.70, 1103.03 ) );

panorama15_2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama16.link( panorama15_2, new THREE.Vector3( -4754.51, -585.61, 1400.22 ) );

panorama16.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

radius = 1500;
var loader = new THREE.FontLoader();
var info_p2_1;
loader.load( './fonts/tbi.json', onFontLoaded );
function onFontLoaded ( _font ) {
        font = _font;

p1_t1 = createLabel('Санпропускник', 3.94, 20);
panorama1.add( p1_t1 );
p1_t2 = createLabel('Автоклавная', 3.45, -250);
panorama1.add( p1_t2 );
p1_t3 = createLabel('Кабинет приготовления \n   питательных сред', 0.22, -100);
panorama1.add( p1_t3 );
p1_t4 = createLabel('3-й этаж', 0.8, 80);
panorama1.add( p1_t4 );
p1_t5 = createLabel('Кабинет для работы \n    с документами', 0.7, -175);
panorama1.add( p1_t5 );

p5_t1 = createLabel('Коридор 1-го этажа', 3.4, -175);
info_p5_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p5_1.position.set( -2519.86, -2234.82, 3687.60 );
info_p5_1.addHoverElement( document.getElementById( 'desc-p5_1' ), 200 );
panorama5.add( p5_t1 );
panorama5.add( info_p5_1 );
}

function createLabel(text='', angle=0, height=0)
{
    titleSprite = createTextShape( text, 15);
    titleSprite.position.set( radius * Math.sin( -angle ), height, radius * Math.cos( -angle ) );
    titleSprite.position.y += 45;
    titleSprite.rotation.y = Math.PI - angle;
    titleSprite.scale.multiplyScalar( 2 );
    return titleSprite;
}




