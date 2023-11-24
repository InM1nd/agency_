
import { MeshStandardMaterial, TextureLoader } from 'three';
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// import { logo } from "../../../img/other/3D_Logo.gltf"

export default function Model(props) {
  const { nodes, materials } = useGLTF("../../../../public/3D_Logo.gltf");

  const chromeMaterial = new MeshStandardMaterial({
    color: "#050505", // Базовый цвет (можете оставить белый, так как текстура будет покрывать его)
    
    metalness: 1.6,     // Металличность на максимуме для эффекта хрома
    roughness: 0.6,     // Шероховатость на минимуме
    wireframe: true,
    
  });
  
  return (
    <group {...props} dispose={null} scale={75}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={chromeMaterial}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_1.geometry}
        material={chromeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_2.geometry}
        material={chromeMaterial}
      />
    </group>
  );
}

useGLTF.preload("../../../../public/3D_Logo.gltf");