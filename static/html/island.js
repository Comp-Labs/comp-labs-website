var scene = new THREE.Scene();
scene.background = new THREE.Color(0x092241);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(1,1,3.5);

var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);

var controls = new THREE.OrbitControls( camera );
controls.minDistance = 4;
controls.maxDistance = 9;

var light = new THREE.AmbientLight( 0x20202A, 5, 5 );
light.position.set( 10, -15, 15 );
scene.add( light );

var loader = new THREE.GLTFLoader();

loader.crossOrigin = true;

loader.load( 'https://assets.codepen.io/370061/scene-r.gltf', function ( data ) {
  var object = data.scene;
  object.position.set(0, 0, 0);
  scene.add( object );
});

function animate() {
  requestAnimationFrame(animate);
  scene.rotation.y -= 0.0010;
  renderer.clear();
  renderer.render( scene, camera )
};

window.onload = function() {
  animate();
}

window.addEventListener( 'resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}, false );

var geometry = new THREE.SphereGeometry(0.4, 10, 10)

var material = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  shading: THREE.FlatShading
});

for (var i = 0; i < 400; i++) {
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
  mesh.position.multiplyScalar(90 + (Math.random() * 700));
  mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
  scene.add(mesh);
}