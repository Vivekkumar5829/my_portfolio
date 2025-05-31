import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const DevWorkspaceModel = () => {
  const gltf = useGLTF("/models/tenhun_falling_spaceman_fanart.glb"); // Path from public folder
  return <primitive object={gltf.scene} scale={0.7} position={[0, -0.8, 0]} />;
};

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 3], fov: 45 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Suspense fallback={null}>
        <DevWorkspaceModel />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default HeroExperience;
