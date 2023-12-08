import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useInView } from 'react-intersection-observer';

const MercedesModel = ({ inView, manualRotationY, scale }) => {
  const gltf = useLoader(GLTFLoader, 'models/mercedes.gltf');
  const mercedesRef = useRef();

  useFrame(() => {
    // Rotate the model automatically if not manually rotating
    if (!manualRotationY && mercedesRef.current) {
      mercedesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <primitive
      object={gltf.scene}
      scale={[scale, scale, scale]} // Set scale based on the prop
      position={[0, -1.5, 0]}
      rotation={[0, Math.PI / 2, 0]}
      ref={mercedesRef}
      rotation-y={manualRotationY} // Apply manual rotation if provided
    />
  );
};

const Model = () => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px',
  });

  const [manualRotationY, setManualRotationY] = useState(0);
  const [scale, setScale] = useState(0.4); // Initial scale

  useEffect(() => {
    // Update the scale based on the window width
    const updateScale = () => {
      if (window.innerWidth < 768) {
        setScale(0.3); // Adjust the scale for phone view
      } else if (window.innerWidth < 1024) {
        setScale(0.3); // Adjust the scale for tablet view
      } else {
        setScale(0.4); // Default scale for larger screens
      }
    };

    // Initial scale update
    updateScale();

    // Update the scale when the window is resized
    window.addEventListener('resize', updateScale);

    // Update the manual rotation value continuously
    const interval = setInterval(() => {
      setManualRotationY((prevRotation) => {
        // Reset rotation to 0 when it reaches the maximum value
        return prevRotation >= 6.28 ? 0 : prevRotation + 0.002;
      });
    }, 16); // Adjust the interval as needed

    // Clear the interval and remove the resize event listener when the component is unmounted
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const handleSliderChange = (event) => {
    // Update the manual rotation value when the slider value changes
    setManualRotationY(parseFloat(event.target.value));
  };

  const handleSliderRelease = () => {
    // Do nothing on slider release
  };

  return (
    <div className="model-container" ref={ref}>
      <Canvas>
        <pointLight position={[0, 5, 5]} intensity={150} />
        <Suspense fallback={null}>
          <MercedesModel inView={inView} manualRotationY={manualRotationY} scale={scale} />
        </Suspense>
      </Canvas>
      <div className="slider-container">
        <input
          type="range"
          id="rotation-slider"
          min="0"
          max="6.28" // 6.28 corresponds to 2 * Math.PI, a full rotation
          step="0.01"
          value={manualRotationY}
          onChange={handleSliderChange}
          onMouseUp={handleSliderRelease}
        />
      </div>
    </div>
  );
};

export default Model;
