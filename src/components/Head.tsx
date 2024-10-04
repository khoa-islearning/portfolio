/* eslint-disable */
import * as THREE from "three";
import { useRef } from "react";
import { Canvas, RenderCallback, useFrame } from "@react-three/fiber";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(
    (state: RenderCallback, delta: number) =>
      (ref.current.rotation.y += delta * 0.5),
  );

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[3, 3, 3]} />
      <meshMatcapMaterial />
    </mesh>
  );
}

export default function Head() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}
