var head;

window.onload = function() {
	var model;
	var ctrl = document.getElementById('control')
	var cameraposx = document.getElementById('input_x')
	var cameraposy = document.getElementById('input_y')
	var cameraposz = document.getElementById('input_z')
	const position = new THREE.Vector3();
	const clock = new THREE.Clock()
	var loader = new THREE.GLTFLoader();
	var width = window.innerWidth;
	var height = window.innerHeight;
	var canvas = document.getElementById('canvas');
	canvas.setAttribute('width',width);
	canvas.setAttribute('height',height);
	
	var renderer = new THREE.WebGLRenderer({canvas: canvas,antialias: true,alpha: true});
	
	var scene = new THREE.Scene();
	
	var camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 5000 );
	camera.position.set(0,0,4.5,0.6);
	
	var light = new THREE.AmbientLight(0xffffff);
	scene.add(light)
	loader.load( 'school.glb', function ( gltf ) {
		model = gltf.scene;
		scene.add(gltf.scene);
		renderer.render(scene,camera);
	});
	document.onmousemove = function(event)
	{
		model.rotation.x = (event.clientY-height/2)/height;
		model.rotation.y = (event.clientX-width/2)/width;
		model.rotation.z = cameraposz.value;
		renderer.render(scene,camera);
	}
}