import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Loader";

const ProjectModel = ({ color }) => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

const ProjectModelCanvas = ({ color }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ProjectModel color={color} />
      </Suspense>
    </Canvas>
  );
};

export default ProjectModelCanvas;