import * as THREE from 'three';

//create scene
const scene = new THREE.Scene();

//create renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#ff9bee');

// Create cube render target
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );

// Create cube camera
const cubeCamera = new THREE.CubeCamera( 1, 100000, cubeRenderTarget );
scene.add( cubeCamera );

// Create car
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const car = new THREE.Mesh( geometry, material );
scene.add( car );

// Update the render target cube
car.visible = false;
cubeCamera.position.copy( car.position );
cubeCamera.update( renderer, scene );

// Render the scene
car.visible = true;
renderer.render( scene, cubeCamera );