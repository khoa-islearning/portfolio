/* eslint-disable */
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, RootState, useFrame } from "@react-three/fiber";
import "@/styles/components/Greeting.sass";
import { easing } from "maath";
import { Environment, useGLTF } from "@react-three/drei";

function Box(props: JSX.IntrinsicElements["mesh"]) {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null);
    const model = useGLTF("./camera.glb");
    const [dummy] = useState<THREE.Object3D>(() => new THREE.Object3D());
    useFrame((state: RootState, delta: number) => {
        if (ref.current) {
            //dummy.lookAt(state.pointer.x, state.pointer.y, 1);
            dummy.lookAt(state.pointer.x * 5, 0, 1);
            easing.dampQ(ref.current.quaternion, [dummy.quaternion.x, dummy.quaternion.y + 1, dummy.quaternion.z, dummy.quaternion.w], 0.15, delta);
            //ref.current.translateY(-1);
        }

    })
    return (
        // <primitive {...props} ref={ref} object={model.scene} scale={4} position-y={-1} >
        // <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
        // TODO: write about iframe security feature
        <>
            <Environment preset='park' />
            <primitive {...props} ref={ref} object={model.scene} scale={0.1} position-y={-1} position-z={-1} >
            </primitive>
            <rectAreaLight
                width={50}
                height={20}
                intensity={60}
                color={'#fcc42a'}
                rotation={[0.1, Math.PI, 0]}
                position={[10, 10, -10]}

            />


        </>
    );
}

export default function Head() {
    <meshMatcapMaterial />;
    return (
        <div className="head-canvas">
            <Canvas>
                <Box position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
}
