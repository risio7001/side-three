import * as THREE from 'three';
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export const model = async (data) => {
    return new Promise((resolve) => {
        let { scene } = data;
        let action, mixer;
        const clock = new THREE.Clock()

        const loader = new FBXLoader();
        loader.load("./pp1.fbx", (fbx) => {
            fbx.scale.set(0.03, 0.03, 0.03);
            const animations = fbx.animations;
            mixer = new THREE.AnimationMixer(fbx);
            action = mixer.clipAction(animations[0]);
            action.play()
            scene.add(fbx);
            resolve(fbx);
        })
        const update = () => {
            requestAnimationFrame(update);
            if (mixer) {
                mixer.update(clock.getDelta())
            }
        }
        update();
    })
}