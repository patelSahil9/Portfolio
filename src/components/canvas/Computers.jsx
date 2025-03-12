import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} position={[0, 0, 0]} />

      {/* Monitor Stand */}
      <mesh position={[0, -1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

      {/* Monitor Base */}
      <mesh position={[0, -0.95, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Monitor Stand Pole */}
      <mesh position={[0, -0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 1.2, 0.1]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

      {/* Monitor Frame */}
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* Monitor Screen */}
      <mesh position={[0, 0.2, 0.06]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 1.8, 0.01]} />
        <meshStandardMaterial 
          color="#915EFF"
          emissive="#915EFF"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.8, 1]} rotation={[-0.2, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.1, 0.8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Mouse */}
      <mesh position={[1.2, -0.8, 1]} rotation={[-0.2, 0, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.1, 0.2, 32]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Add ambient light for better overall lighting */}
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default ComputersCanvas;