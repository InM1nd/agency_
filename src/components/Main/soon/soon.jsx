import React , { useRef, useState, useEffect } from "react"
import { Main, Gif} from '../soon/soon.module';
import { OrbitControls, RenderTexture, Text, PerspectiveCamera, ContactShadows, SpotLight, Float, Sphere  } from "@react-three/drei"
import { useFrame, Canvas } from "@react-three/fiber";

import { PointLight } from "three";

import Smile from "../../../img/other/OilfacesGif.gif";



const Soon = () => {
    return (
      <Main>
        <Gif src = {Smile} />
      </Main>
    )
}

export default Soon
