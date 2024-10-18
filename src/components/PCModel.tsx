import { Canvas } from "@react-three/fiber";
import "@/styles/components/About.sass";
import { ContactShadows, Environment, Float, Html, PresentationControls, useGLTF } from "@react-three/drei";

function Box(props: JSX.IntrinsicElements["mesh"]) {
    // This reference will give us direct access to the THREE.Mesh object
    const nodes = useGLTF("./laptop.gltf");

    return (
        <>
            <Environment preset='city' />


            <PresentationControls global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
            >
                <Float rotationIntensity={0.4}>
                    <rectAreaLight
                        width={5}
                        height={5}
                        intensity={65}
                        color={'#ff6900'}
                        rotation={[0.1, Math.PI, 0]}
                        position={[0, 0.55, -1.15]}
                    />
                    <primitive {...props} object={nodes.scene} scale={1} rotation-x={0.5} rotation-y={0.75} position-y={-1}>
                        <Html
                            transform
                            wrapperClass='htmlScreen'
                            distanceFactor={1.17}
                            position={[0, 1.56, -1.4]}
                            rotation-x={-0.256}
                            scale-x={3.4}
                            scale-y={4.3}
                        >
                            <iframe src='https://bruno-simon.com/' />
                        </Html>
                    </primitive>
                </Float>
            </PresentationControls>

            <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
        </>
    );
}

export default function PCModel() {
    <meshMatcapMaterial />;
    return (
        <div className="head-canvas">
            <Canvas>
                <Box position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
}
