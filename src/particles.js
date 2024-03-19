import * as THREE from "three";

export const particles = (data) =>{
    const {scene} = data;

    const textureLoader = new THREE.TextureLoader()
    const particleTexture = textureLoader.load('./particle.png')
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial();
    particlesMaterial.color = new THREE.Color(0xc564fa)
    particlesMaterial.size = 0.1;
    particlesMaterial.sizeAttenuation = true;
    particlesMaterial.transparent = true
    particlesMaterial.map = particleTexture;

    // Material2
    const particlesMaterial2 = new THREE.PointsMaterial();
    particlesMaterial2.color = new THREE.Color(0xc564fa)
    particlesMaterial2.size = 0.1;
    particlesMaterial2.sizeAttenuation = true;
    particlesMaterial2.transparent = true
    particlesMaterial2.map = particleTexture;
    
    // Geometry
    const particlesGeometry = new THREE.BufferGeometry()
    const count = 250;
    
    const positions = new Float32Array(count * 3);
    
    for(let i = 0; i < count * 3; i++)
    {
        positions[i] = (Math.random() - 0.5) * 15;
    }


    // Geometry
    const particlesGeometry2 = new THREE.BufferGeometry()
    
    const positions2 = new Float32Array(count * 3);
    
    for(let i = 0; i < count * 3; i++)
    {
        positions2[i] = (Math.random() - 0.5) * 15;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry2.setAttribute('position', new THREE.BufferAttribute(positions2, 3))
    
    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    const particles2 = new THREE.Points(particlesGeometry2, particlesMaterial2);
    scene.add(particles);
    scene.add(particles2);

    const clock = new THREE.Clock()

    const update = () => {
        requestAnimationFrame(update)

        if(particles){
            particles.rotation.y += 0.003; 
            particles.position.x = Math.sin(clock.getElapsedTime())
            particles.material.size = Math.abs(Math.sin(clock.getElapsedTime()))-0.5
        }
        if(particles2){
            particles2.rotation.y -= 0.001; 
            particles2.position.x = Math.sin(clock.getElapsedTime())
            particles2.material.size = Math.abs(Math.cos(clock.getElapsedTime()))-0.5
        }
    
    }
    update();
}