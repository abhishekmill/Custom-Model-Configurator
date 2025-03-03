import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera, Center, Text3D, useMatcapTexture, Float } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Car(props) {
  const { nodes, materials } = useGLTF("/Toyota-AE86.glb");
  return (
    <group {...props} dispose={null}>


<Hero/>



      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Car.geometry}
        material={materials.Body}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={100}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wheel1.geometry}
          material={materials.Body}
          position={[-0.012, -0.055, -0.021]}
          rotation={[Math.PI, 0, 0]}
          scale={1.315}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wheel4.geometry}
          material={materials.Body}
          position={[-0.011, 0.05, -0.021]}
          rotation={[Math.PI, 0, 0]}
          scale={0.06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wheel2.geometry}
          material={materials.Body}
          position={[-0.011, 0.05, 0.026]}
          scale={0.06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wheel3.geometry}
          material={materials.Body}
          position={[-0.012, -0.055, 0.025]}
          scale={0.06}
        />
      </mesh>
      <PerspectiveCamera
        makeDefault={false}
        far={10000}
        near={10}
        fov={36.109}
        position={[14.137, 6.789, 21.442]}
        rotation={[-0.247, 0.604, 0.143]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/Toyota-AE86.glb");



function Hero() {
  const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
  const ref = useRef();

  

  return (
    <>
      <Center scale={[0.9, 1, 1]} position={[0, 8, 0]}>
        <Text3D
          rotation={[-Math.PI / 6, 0, 0]}
          ref={ref}
          size={2}
          maxWidth={[5, 2, 3]}
          font={"/gt.json"}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.08}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          Hii Abhishek is Here
          <meshMatcapMaterial color="white" matcap={matcapTexture} />
        </Text3D>
      </Center>
    </>
  );
}