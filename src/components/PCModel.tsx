/* eslint-disable */
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, RenderCallback, useFrame } from "@react-three/fiber";
import "@/styles/components/About.sass";
import { easing } from "maath";
import { useGLTF } from "@react-three/drei";

function Box(props: JSX.IntrinsicElements["mesh"]) {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null);
    const { nodes } = useGLTF("./suzanne.glb");
    const [dummy] = useState<THREE.Object3D>(() => new THREE.Object3D());

    useFrame((state: RenderCallback, delta: number) => {
        if (ref.current) {
            dummy.lookAt(state.pointer.x, state.pointer.y, 1);
            easing.dampQ(ref.current.quaternion, dummy.quaternion, 0.15, delta);
        }
    });

    return (
        <mesh {...props} ref={ref} geometry={nodes.Suzanne.geometry} scale={2}>
            <meshMatcapMaterial />
        </mesh>
    );
}

export default function PCModel() {
    <meshMatcapMaterial />;
    return (
        <div className="head-canvas">
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
}
