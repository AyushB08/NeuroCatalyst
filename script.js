import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { BloomPass } from 'three/addons/postprocessing/BloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();

loader.load( 'static/out.glb', function ( gltf ) {

  const model=gltf.scene
	scene.add( model );

}, undefined, function ( error ) {

	console.error( error );

} );
camera.position.z = 1.5;
camera.position.x=-1.5;
camera.rotation.y=-0.1;

const composer = new EffectComposer( renderer );

const renderPass = new RenderPass( scene, camera );
composer.addPass( renderPass );

const bloomPass = new BloomPass(0.1);
composer.addPass( bloomPass );

const outputPass = new OutputPass();
composer.addPass( outputPass );

function animate() {
	requestAnimationFrame( animate );
	composer.render();
}
animate();
