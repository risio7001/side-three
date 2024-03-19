import * as THREE from 'three';

// loader
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader"

// controls
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { model } from './model';
import { particles } from './particles';
import { scrollEvent } from './scrollEvent';
import { DoubleSide } from 'three';


const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xc564fa)
// scene.fog = new THREE.FogExp2( 0xc564fa, 0.2025 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 5)
pointLight.position.y = 5;
pointLight.position.z = 1;
pointLight.position.x = 1;
scene.add(pointLight);

const planeGeo = new THREE.PlaneGeometry(30, 30);
const planeMat = new THREE.MeshBasicMaterial({color:0x000000 });
const plane = new THREE.Mesh(planeGeo, planeMat);
plane.rotation.x = -Math.PI / 2
scene.add(plane);

// particles
particles({scene:scene});

// model
model({scene:scene});

camera.position.z = 2;
camera.position.y = 4.5;

scrollEvent({camera:camera});

const clock = new THREE.Clock()

const animate = function () {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
};

animate();