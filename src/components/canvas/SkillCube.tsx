import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Text, OrbitControls } from "@react-three/drei";
import { Group } from "three";

interface CubeFaceProps {
  position: [number, number, number];
  rotation: [number, number, number];
  text: string;
  color: string;
}

const CubeFace = ({ position, rotation, text, color }: CubeFaceProps) => {
  return (
    <group position={position} rotation={rotation}>
      <Box args={[2, 2, 0.1]}>
        <meshStandardMaterial color={color} />
      </Box>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const RotatingCube = () => {
  const cubeRef = useRef<Group>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  useFrame((state, delta) => {
    if (cubeRef.current && autoRotate) {
      cubeRef.current.rotation.x += delta * 0.2;
      cubeRef.current.rotation.y += delta * 0.3;
    }
  });

  const handleClick = () => {
    setAutoRotate(!autoRotate);
  };

  const skills = [
    { text: "React", color: "#61DAFB", position: [0, 0, 1], rotation: [0, 0, 0] },
    { text: "Node.js", color: "#68A063", position: [0, 0, -1], rotation: [0, Math.PI, 0] },
    { text: "TypeScript", color: "#3178C6", position: [1, 0, 0], rotation: [0, Math.PI / 2, 0] },
    { text: "Docker", color: "#2496ED", position: [-1, 0, 0], rotation: [0, -Math.PI / 2, 0] },
    { text: "Tailwind", color: "#38B2AC", position: [0, 1, 0], rotation: [Math.PI / 2, 0, 0] },
    { text: "Git", color: "#F05032", position: [0, -1, 0], rotation: [-Math.PI / 2, 0, 0] },
  ];

  return (
    <group ref={cubeRef} onClick={handleClick}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {skills.map((skill, index) => (
        <CubeFace
          key={index}
          position={skill.position as [number, number, number]}
          rotation={skill.rotation as [number, number, number]}
          text={skill.text}
          color={skill.color}
        />
      ))}
    </group>
  );
};

const SkillCubeCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <OrbitControls enableZoom={false} />
      <RotatingCube />
    </Canvas>
  );
};

export default SkillCubeCanvas;