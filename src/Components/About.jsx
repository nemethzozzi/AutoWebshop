import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const MercedesModel = () => {
  const gltf = useLoader(GLTFLoader, '/mercedes.gltf');
  const mercedesRef = useRef();

  useFrame(() => {
    // Rotate the model
    if (mercedesRef.current) {
      mercedesRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      object={gltf.scene}
      scale={[0.4, 0.4, 0.4]}
      position={[0, -2, 0]}
      rotation={[0, Math.PI / 2, 0]}
      ref={mercedesRef}
    />
  );
};

const About = () => {
  return (
    <div id="About" className="container mx-auto mt-10 text-black">
      <h2 className="text-8xl font-bold mb-8 text-center h-">About Us</h2>

      <p className="text-lg mb-6 leading-relaxed">
        Welcome to AutoWebshop, your ultimate destination for all things automotive! We're not just passionate about cars; we're obsessed. Our mission is to redefine your online car shopping experience, whether you're a seasoned enthusiast or an everyday driver.
      </p>

      <div className="h-screen">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={0.5} />
          <Suspense fallback={null}>
            <MercedesModel />
          </Suspense>
        </Canvas>
      </div>


    </div>
  );
};

export default About;
