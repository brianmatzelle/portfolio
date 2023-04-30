import React, { useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame, useThree, extend } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"; // Use this if you exported as OBJ
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PerspectiveCamera } from "@react-three/drei";
const BlenderScene = () => {
//   const obj = useLoader(OBJLoader, "/office.obj");
  const gltf = useLoader(GLTFLoader, "/gtr/scene.gltf"); // Update this path to the exported glTF file
  const groupRef = useRef();

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [groupRef]);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = 4;
    }
  }, []);
  // Scale and position adjustments
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.set(0, 0, 0); // Adjust these values for position
      groupRef.current.scale.set(1, 1, 1); // Adjust these values for scale
    }
  }, [groupRef]);

  // Optional: Rotate the model for better visibility
  let counter = 0;
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      counter++;
        if (counter % 100 === 0) {
            groupRef.current.rotation.z += 0.0001;
        }
    }

  });

  return (
    <group ref={groupRef}>
      {/* <primitive object={obj} /> */}
      <primitive object={gltf.scene} />
    </group>
  );
};

// Make OrbitControls available for react-three-fiber
extend({ OrbitControls });

const Controls = () => {
    const { camera, gl } = useThree();
    const controlsRef = useRef();
  
    useEffect(() => {
      if (controlsRef.current) {
        controlsRef.current.minDistance = 2; // Set the minimum distance for zooming in
        controlsRef.current.maxDistance = 5; // Set the maximum distance for zooming out
      }
    }, [controlsRef]);
  
    return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};
  

const BlenderComponent = () => {
  return (
    <Canvas style={{ width: "100vw", height: "50vh" }}>
      <PerspectiveCamera
        position={[0, 0, 10]} // Adjust these values for camera position
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <BlenderScene />
      <Controls />
    </Canvas>
  );
};

export default BlenderComponent;
