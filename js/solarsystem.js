//import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';

// THREE.js init 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    1.75,
    0.1,
    1000
);
const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha:true});
renderer.setSize(1575,950);
function handleResize(){
    camera.aspect = 1.75;
    renderer.setSize(1575,950);
    camera.updateProjectionMatrix();
}
function createPlanet( mesh, scale, group, posX, text){
    mesh.position.set(posX, 0, 0);
    mesh.scale.setScalar(scale);
    group.add(mesh);
    scene.add(group);
    mesh.add(text);
    text.position.y += scale+1;

}
function createOrbit(radius){
    var ringGeo = new THREE.TorusGeometry( radius, 0.005, 10, 600 );
    const ring = new THREE.Mesh( ringGeo, ringMaterial );
    ring.rotation.x = Math.PI/2;
    scene.add(ring)
}
//-----------------------Variables---------------------
const textGeometry = new THREE.PlaneGeometry( 0.7, 0.3, 32 );
const planetGeometry = new THREE.SphereGeometry(1, 32, 16);
const ringMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0.5 } ); 
const pauseButton = document.getElementById("canvasButton");
var isActive = true;
pauseButton.addEventListener("click", function() {isActive = !isActive});

//----------------------MATERIALS----------------------------
const sunMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, map:  new THREE.TextureLoader().load( '/imgs/planets/sun/sun.webp')});
const sunTextTexture = new THREE.TextureLoader().load("/imgs/planets/sun/sunText.webp")
const mercuryMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFFF, map: new THREE.TextureLoader().load( '/imgs/planets/mercury/mercurymap.webp'),  bumpMap: new THREE.TextureLoader().load( '/imgs/planets/mercury/mercurybump.webp'), bumpScale: 0.3});
const mercuryTextMaterial = new THREE.MeshBasicMaterial( {map:  new THREE.TextureLoader().load("/imgs/planets/mercury/mercuryText.webp"), side: THREE.DoubleSide, transparent:true} );
const venusMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, map: new THREE.TextureLoader().load( '/imgs/planets/venus/venusmap.webp')});
const venusTextMaterial = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("/imgs/planets/venus/venusText.webp"), side: THREE.DoubleSide, transparent:true} ); 
const moonMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, map:  new THREE.TextureLoader().load( '/imgs/planets/earth/moonmap1k.webp'), bumpMap:new THREE.TextureLoader().load( '/imgs/planets/earth/moonbump1k.webp') });
const earthMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, map: new THREE.TextureLoader().load( 'imgs/planets/earth/earthtexture.webp'), bumpMap:new THREE.TextureLoader().load( '/imgs/planets/earth/earthbump1k.webp'), bumpScale: 0.3});
const earthTextMaterial = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("/imgs/planets/earth/earthText.webp"), side: THREE.DoubleSide, transparent:true} );
const marsMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFFF, map: new THREE.TextureLoader().load( '/imgs/planets/mars/mars_1k_color.webp'), bumpMap:new THREE.TextureLoader().load( '/imgs/planets/mars/marsbump1k.webp'), bumpScale: 0.3});
const marsTextMaterial = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("/imgs/planets/mars/marsText.webp"), side: THREE.DoubleSide, transparent:true} );  
const jupiterMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, map: new THREE.TextureLoader().load( '/imgs/planets/jupiter/jupiter.webp')});
const jupiterTextMaterial = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("/imgs/planets/jupiter/jupiterText.webp")
, side: THREE.DoubleSide, transparent:true} );
const saturnMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFFF, map: new THREE.TextureLoader().load( '/imgs/planets/saturn/saturn.webp')});
const saturnTextMaterial = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("/imgs/planets/saturn/saturnText.webp"), side: THREE.DoubleSide, transparent:true} );
const uranusMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFFF, map: new THREE.TextureLoader().load( '/imgs/planets/uranus/uranus.webp')});
const uranusTextMaterial = new THREE.MeshBasicMaterial( {map:  new THREE.TextureLoader().load("/imgs/planets/uranus/uranusText.webp")
, side: THREE.DoubleSide, transparent:true} );
const neptuneMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFFF, map: new THREE.TextureLoader().load( '/imgs/planets/neptune/neptunemap.webp')});
const neptuneTextMaterial = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load("/imgs/planets/neptune/neptuneText.webp")
, side: THREE.DoubleSide, transparent:true} );
//---------------------PLANETS-----------------------------
const sun = new THREE.Mesh(planetGeometry, sunMaterial);
sun.scale.setScalar(1.4);
const suntextMaterial = new THREE.MeshBasicMaterial( {map: sunTextTexture, side: THREE.DoubleSide, transparent:true} );
const sunText  = new THREE.Mesh( textGeometry, suntextMaterial );
sunText.position.y += 1.8;
sun.add(sunText);
scene.add(sun);

const mercuryGroup = new THREE.Object3D();
const mercuryText  = new THREE.Mesh( textGeometry, mercuryTextMaterial );
const mercury = new THREE.Mesh(planetGeometry, mercuryMaterial);
createPlanet(mercury, 0.1, mercuryGroup, -3.8, mercuryText);
createOrbit(-3.8);

const venusGroup = new THREE.Object3D();
const venusText  = new THREE.Mesh( textGeometry, venusTextMaterial );
const venus = new THREE.Mesh(planetGeometry, venusMaterial);
createPlanet(venus, 0.2, venusGroup, -4.3, venusText);
createOrbit(-4.3);

const earthGroup = new THREE.Object3D();
const moon = new THREE.Mesh(planetGeometry,moonMaterial);
moon.scale.setScalar(0.05);
moon.position.x += 0.35;
moon.position.y += 0.1;
const moonPivot = new THREE.Object3D();
moonPivot.position.x = -5.25;
const earthText  = new THREE.Mesh( textGeometry, earthTextMaterial );
const earth = new THREE.Mesh(planetGeometry, earthMaterial);
createPlanet(earth, 0.3, earthGroup, -5.25, earthText);
createOrbit(-5.25);

const marsGroup = new THREE.Object3D();
const marsText  = new THREE.Mesh( textGeometry, marsTextMaterial );
const mars = new THREE.Mesh(planetGeometry, marsMaterial);
createPlanet(mars, 0.25, marsGroup, -6.2, marsText);
createOrbit(-6.2);

const jupiterGroup = new THREE.Object3D();
const jupiterText  = new THREE.Mesh( textGeometry, jupiterTextMaterial );
const jupiter = new THREE.Mesh(planetGeometry, jupiterMaterial);
createPlanet(jupiter, 0.55, jupiterGroup, -7.5, jupiterText);
createOrbit(-7.5);

const saturnGroup = new THREE.Object3D();
const saturnText  = new THREE.Mesh( textGeometry, saturnTextMaterial );
const saturn = new THREE.Mesh(planetGeometry, saturnMaterial);
const saturnRingGeometry = new THREE.RingGeometry( 1, 2, 50 );
const saturnRingmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide ,map: new THREE.TextureLoader().load("/imgs/planets/saturn/saturnringcolor.webp"), alphaMap: new THREE.TextureLoader().load("/imgs/planets/saturn/saturnringpattern.webp"), transparent: true, opacity: 0.6} );
const saturnRing = new THREE.Mesh( saturnRingGeometry, saturnRingmaterial );
saturnRing.rotation.x -= Math.PI / 2;
createPlanet(saturn, 0.51, saturnGroup, -9.4, saturnText);
saturn.add(saturnRing);
var pos = saturnRingGeometry.attributes.position;
var v3 = new THREE.Vector3();
for (let i = 0; i < pos.count; i++){
    v3.fromBufferAttribute(pos, i);
    saturnRingGeometry.attributes.uv.setXY(i, v3.length() < 1.5 ? 0 : 1, 1);
}
createOrbit(-9.4);

const uranusGroup = new THREE.Object3D();
const uranusText  = new THREE.Mesh( textGeometry, uranusTextMaterial );
const uranus = new THREE.Mesh(planetGeometry, uranusMaterial);
createPlanet(uranus, 0.37, uranusGroup, -11.3, uranusText);
createOrbit(-11.3);

const neptuneGroup = new THREE.Object3D();
const neptuneText  = new THREE.Mesh( textGeometry, neptuneTextMaterial );
const neptune = new THREE.Mesh(planetGeometry, neptuneMaterial);
createPlanet(neptune, 0.365, neptuneGroup, -13, neptuneText);
createOrbit(-13);

const light = new THREE.PointLight({ color: 0xffffff, intensity: 1, distance: 1, decay: 2});
light.position.set(0,0,0);

camera.position.set(-5.25, 1.5, 20);



const universeGeometry = new THREE.SphereGeometry(51,32, 32);
const universeMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  map: new THREE.TextureLoader().load("/imgs/planets/universe.jpg"),
  side: THREE.BackSide
})
const universe = new THREE.Mesh(universeGeometry, universeMaterial);

scene.add(light, moonPivot, universe);
earthGroup.add(moonPivot);

moonPivot.add(moon);
console.log(earth.position.x);
createSpotlights(scene);
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 5;
controls.maxDistance = 50;
controls.maxPolarAngle = Math.PI / 2;
//controls.enabled = false;


function rotation (){
  sun.rotation.y  += 0.0008;

  mercury.rotation.y  += 0.001;
  mercuryGroup.rotation.y += 0.02;
  
  venus.rotation.y  += 0.0009;
  venusGroup.rotation.y += 0.015;
  
  earth.rotation.y  += 0.005;
  earthGroup.rotation.y += 0.0125  
  moonPivot.rotation.y  += 0.06;
  
  mars.rotation.y  += 0.0045;
  marsGroup.rotation.y += 0.0100;
  
  jupiter.rotation.y  += 0.009;
  jupiterGroup.rotation.y += 0.0075;
  
  saturn.rotation.y += 0.008;
  saturnGroup.rotation.y += 0.006; 
  
  uranus.rotation.y  += 0.008;
  uranusGroup.rotation.y += 0.0050;
  
  neptune.rotation.y  += 0.01;
  neptuneGroup.rotation.y += 0.0025;
}
function cameraLookUp(){
  uranusText.lookAt(camera.position);
  saturnText.lookAt(camera.position);
  jupiterText.lookAt(camera.position);
  marsText.lookAt(camera.position);
  earthText.lookAt(camera.position);
  venusText.lookAt(camera.position);
  mercuryText.lookAt(camera.position);
  neptuneText.lookAt(camera.position);
  sunText.lookAt(camera.position);
}
const animate = () => {
  
    requestAnimationFrame(animate);
    if(isActive == true){
     rotation();
    }
    cameraLookUp();
    if(controls.enabled == true)
    {
      controls.update();
    }
    renderer.render(scene, camera);
}
animate();
function createSpotlights(scene) {
    var color = 0xFFFFFF;
    var intensity = 5;
    var distance = 3.5;
    var angle = Math.PI/7;

    new Array(6).fill('').forEach((item, i) => {
      var spotlight = new THREE.SpotLight(color, intensity, distance, angle);
      var value = i % 2 === 0 ? 3.5 : -3.5;
  
      spotlight.position.set(
        i < 2 ? value : 0,
        i >= 2 && i < 4 ? value : 0,
        i >= 4 ? value : 0
      );
      scene.add( spotlight );
    });
  }
window.addEventListener('resize', handleResize);

/*const select = document.getElementById('planets');
select.addEventListener('change', function() {

  if(this.value == 'suncam'){
    isActive = true;
    controls.enabled = true;
    camera.position.set(-5.25, 1.5, 20);
    camera.rotation.y = 0;
    camera.rotation.z = 0;
   
  }
  else{
    isActive = false;
    controls.enabled = false;
    camera.position.set(-5.25, 1.5, 20);
    camera.rotation.y = 0;
    camera.rotation.x = 0;
    camera.rotation.z = 0;
    camera.lookAt(eval(this.value));
    camera.position.x = eval(this.value).position.x;
    camera.position.y = eval(this.value).position.y;
    camera.position.z = eval(this.value).position.z;
    camera.rotation.y = 1.6;
    console.log(eval(this.value).parameters);
    console.log(camera.rotation);
    console.log(eval(this.value).position);
  }
  if(this.value == 'sun'){
    camera.position.x = eval(this.value).position.x-3.5;
  }
});*/