import React , { useRef, useState, useEffect } from "react"
import { Main } from '../soon/soon.module';
import { OrbitControls, RenderTexture, Text, PerspectiveCamera, ContactShadows, SpotLight} from "@react-three/drei"
import { useFrame, Canvas } from "@react-three/fiber";
import * as THREE from 'three';

import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { MeshStandardMaterial, TextureLoader } from 'three';
import { PointLight } from "three";

import Font from '../../../components/Utils/fonts/Bebas Neue_Regular.json';

function TextRender() {
      const textRef = useRef();
      

      const pointLight1 = new PointLight(0x065F45, 100, 100, 2); // Красный свет
      pointLight1.position.set(5, 5, 5);

      const pointLight2 = new PointLight(0x065F45, 1, 100, 2); // Желтый свет
      pointLight2.position.set(-5, 5, -5);

      const pointLight3 = new PointLight(0x065F45, 1, 100, 2); // Синий свет
      pointLight3.position.set(0, 0, 0);

      const chromeMaterial = new MeshStandardMaterial({
        color: "#000000", // Базовый цвет (можете оставить белый, так как текстура будет покрывать его)
        
        metalness: 150,     // Металличность на максимуме для эффекта хрома
        roughness: 0,     // Шероховатость на минимуме
        // wireframe: true,
        
      });

      useFrame((state) => {
        textRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
        textRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.5;
        
        

        // textRef.current.position.z = Math.cos(state.clock.elapsedTime) * 10;
        // textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 10;
        // textRef.current.position.y = Math.cos(state.clock.elapsedTime) * 10;
      });

      const fontLoader = new FontLoader();
      const font = fontLoader.parse(Font);

      const createTextGeometry = (font) => {
        const textGeometry = new TextGeometry('Soon...', {
          font: font,
          size: 9,
          height: 3,
          curveSegments: 100,
          bevelEnabled: true,
          bevelThickness: 0.1,
          bevelSize: 0.1,
          bevelOffset: 0.1,
          bevelSegments: 10
        });

        textGeometry.center();

        return textGeometry;
      };

      const textGeometry = createTextGeometry(font);
      
      return (
          <>
          
          <ambientLight color={0x808080} position={[0, 0, 1]} intensity={5} />
          {/* <SpotLight color={0xffffff} position={[0, 5, 0]} intensity={500} angle={10} focus castShadow/> */}
          <pointLight position={[0, 0, -10]} args={[0x808080, 5]} />
          <primitive object={pointLight1} intensity={500} raycast={12} />
          <primitive object={pointLight2} intensity={500} raycast={12}/>
          <primitive object={pointLight3} intensity={500} raycast={12}/>

          {/* Красный свет */}
          <directionalLight color={0x065F45} position={[0, 0, -20]} intensity={100}  castShadow  />

          {/* Желтый свет */}
          <directionalLight color={0x065F45} position={[0, -5, -12]} intensity={100} castShadow  />

          {/* Главный цвет (хром) */}
          <directionalLight color={0x808080} position={[0, -20, 30]} intensity={100} castShadow  />

          {/*Синий свет */}
          <directionalLight color={0x065F45} position={[0, 10, 0]} intensity={100} castShadow  />   

          {/*Зеленый свет */}
          <directionalLight color={0x065F45} position={[-4, -5, -18]} intensity={100} castShadow  /> 



          {/* <SpotLight color={0xffffff} position={[10, 5, 0]} intensity={10000} angle={45} decay={1} castShadow/> */}
          {/* <SpotLight color={0xffffff} position={[-10, 5, 0]} intensity={10000} angle={45} decay={1} castShadow/> */}

          
          <mesh ref={textRef} geometry={textGeometry} material={chromeMaterial}>
              {/* <meshStandardMaterial/> */}
          </mesh>
          </>
      );
    
}

const Soon = () => {


    


    return (
      <Main>
      <Canvas camera={{ position: [0, 0, 20], fov: 90}}  >
        <OrbitControls enableZoom={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
        <TextRender />
      </Canvas>
    </Main>

    )
}

export default Soon





// main green 0x065F45 