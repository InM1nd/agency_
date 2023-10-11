import React , { useRef, useState, useEffect } from "react"
import { Main } from '../soon/soon.module';
import { OrbitControls, RenderTexture, Text, PerspectiveCamera, ContactShadows, SpotLight, Float, Sphere  } from "@react-three/drei"
import { useFrame, Canvas } from "@react-three/fiber";
import * as THREE from 'three';

import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { MeshStandardMaterial, TextureLoader } from 'three';
import { PointLight } from "three";

import Model  from "./logo";

import Font from '../../../components/Utils/fonts/Bebas Neue_Regular.json';


          {/* 0x4995E2 - main blue */}
          {/* 0x85FFFF - additional blue */}



function TextRender() {
        
    const pointLight1 = new PointLight(0x4995E2, 0, 0, 0.99); // Буква О
    pointLight1.position.set(-3, 5, -2);

    const pointLight2 = new PointLight(0x4995E2, 0, 0, 0.99); // Кружок буквы I
    pointLight2.position.set(3, 11, -2);

    const pointLight3 = new PointLight(0x4995E2, 0, 0, 0.99); // Синий свет
    pointLight3.position.set(9, 4, -2);

    const pointLight4 = new PointLight(0x4995E2, 0, 0, 0.99); // Синий свет
    pointLight4.position.set(8, -8, -2);

    const pointLight5 = new PointLight(0x4995E2, 0, 0, 0.99) ; // Синий свет
    pointLight5.position.set(-8, -8, -2);
     

 
      
      return (
          <>

          
         
          <Float
            speed={1.1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            // rotation={[Math.PI / 3.5, 0, 0]}
            floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            // floatingRange={[-4, 4]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Model />
          </Float>
          
          
          {/* <ambientLight color={0x85FFFF} position={[0, 0, 10]} intensity={6} /> */}
  

          {/* <Sphere position={pointLight1.position} args={[0.1, 8, 8]}>
            <meshBasicMaterial attach="material" color="green" />
          </Sphere> */}
          <primitive object={pointLight1} intensity={400}  />


          {/* <Sphere position={pointLight2.position} args={[0.1, 8, 8]}>
            <meshBasicMaterial attach="material" color="red" />
          </Sphere> */}
          <primitive object={pointLight2} intensity={400} />


          {/* <Sphere position={pointLight3.position} args={[0.1, 8, 8]}>
            <meshBasicMaterial attach="material" color="yellow" />
          </Sphere> */}
          <primitive object={pointLight3} intensity={400} />

          {/* <Sphere position={pointLight4.position} args={[0.1, 8, 8]}>
            <meshBasicMaterial attach="material" color="blue" />
          </Sphere> */}
          <primitive object={pointLight4} intensity={600} />


          {/* <Sphere position={pointLight5.position} args={[0.1, 8, 8]}>
            <meshBasicMaterial attach="material" color="purple" />
          </Sphere> */}
          <primitive object={pointLight5} intensity={400} />

          

          {/* <directionalLight color={0x4995E2} position={[0, 0, 20]} intensity={100}  castShadow /> */}
          {/* <directionalLight color={0x4995E2} position={[0, 0, -1]} intensity={100} castShadow  /> */}
          
          <directionalLight color={0x4995E2} position={[0, 1, 1]} intensity={100} castShadow  />
         
          <directionalLight color={0x4995E6} position={[5, 5, 100]} intensity={1} castShadow  />   

          {/* <directionalLight color={0x4995E2} position={[-4, -5, -18]} intensity={100} castShadow  />  */}
        
          </>
      );
    
}

// function CameraController({ forward }) {
//   const cameraRef = useRef();

//   useFrame(({ camera }) => {
//     // Расстояние и скорость движения камеры
//     const distance = forward ? 5 : -5;
//     const speed = 0.01;

//     // Вычисляем новую позицию камеры
//     const newPosition = camera.position.clone().add(
//       new THREE.Vector3(0, 0, distance * speed)
//     );

//     // Устанавливаем новую позицию камеры
//     camera.position.copy(newPosition);

//     // Если камера вышла за пределы определенного диапазона, меняем направление
//     if (newPosition.z > 10 || newPosition.z < -10) {
//       forward(!forward);
//     }
//   });

//   return <PerspectiveCamera ref={cameraRef} position={[0, 0, 1]} fov={100} />;
// }




const Soon = () => {



    return (
      <Main>
      <Canvas camera={{ position: [0, 0, 15], fov: 100 }} >
        {/* <CameraController forward={forward} /> */}
        <OrbitControls enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
        <TextRender />
        
      </Canvas>
    </Main>

    )
}

export default Soon





// main green 0x065F45 