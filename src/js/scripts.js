import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'dat.gui';

const fileUrl = new URL('../assets/donuts.glb', import.meta.url);

const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    1,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

renderer.setClearColor('#ff9bee');

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enabled = false;// desabilita a interação do mouse com o objeto

camera.position.set(5, 5, 0);
orbit.update();

// addGrid()

const ambientLight = new THREE.AmbientLight(0xededed, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
scene.add(directionalLight);
directionalLight.position.set(10, 11, 7);



const assetLoader = new GLTFLoader();

assetLoader.load(fileUrl.href, function(gltf) {
    const model = gltf.scene;
    model.translateY(-0.02)
    const modelClone = model.clone();
    const modelClone2 = model.clone();
    model.position.set(0,0,-0.00);
    modelClone.position.set(0,0,-0.10);
    modelClone2.position.set(0,0,0.10);
    scene.add(model);
    scene.add(modelClone);
    scene.add(modelClone2);

     // Configurar o mixer de animação
    //  const mixer = new THREE.AnimationMixer(model);

     // Adicionar animações ao mixer
    //  gltf.animations.forEach((clip) => {
    //      mixer.clipAction(clip).play();
    //  });

     // Função de animação
    //  function animate() {
    //      requestAnimationFrame(animate);

    //      // Atualizar o mixer de animação
    //      mixer.update(0.01);

    //      // Renderizar a cena
    //      renderer.render(scene, camera);
    //  }

    //  animate();

    function animate() {
        model.rotation.z += .01;
        modelClone.rotation.y += .01;
        modelClone2.rotation.x -= .01;
        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
    
    // addMenu(model);
}, undefined, function(error) {
    console.error(error);
});




window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function addGrid() {
    const grid = new THREE.GridHelper(30, 30);
    scene.add(grid);
}

function addMenu (model){
    const gui = new dat.GUI();

const options = {
    'Main': 0x2F3130,
    'Main light': 0x7C7C7C,
    'Main dark': 0x0A0A0A,
    'Hooves': 0x0F0B0D,
    'Hair': 0x0A0A0A,
    'Muzzle': 0x0B0804,
    'Eye dark': 0x020202,
    'Eye white': 0xBEBEBE
}

// gui.addColor(options, 'Main').onChange(function(e) {
//     model.getObjectByName('Cube').material.color.setHex(e);
// });
// gui.addColor(options, 'Main light').onChange(function(e) {
//     model.getObjectByName('Cube_1').material.color.setHex(e);
// });
// gui.addColor(options, 'Main dark').onChange(function(e) {
//     model.getObjectByName('Cube_2').material.color.setHex(e);
// });
// gui.addColor(options, 'Hooves').onChange(function(e) {
//     model.getObjectByName('Cube_3').material.color.setHex(e);
// });
// gui.addColor(options, 'Hair').onChange(function(e) {
//     model.getObjectByName('Cube_4').material.color.setHex(e);
// });
// gui.addColor(options, 'Muzzle').onChange(function(e) {
//     model.getObjectByName('Cube_5').material.color.setHex(e);
// });
// gui.addColor(options, 'Eye dark').onChange(function(e) {
//     model.getObjectByName('Cube_6').material.color.setHex(e);
// });
// gui.addColor(options, 'Eye white').onChange(function(e) {
//     model.getObjectByName('Cube_7').material.color.setHex(e);
// });
}