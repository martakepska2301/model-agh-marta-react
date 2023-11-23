/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 pomnikDwa.gltf --output PomnikDwa.js 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/model-agh-marta-react/pomnikDwa.gltf')
  return (
    <group scale={2.3} {...props} dispose={null}>
      <mesh geometry={nodes.Powierzchnie_podzielone.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('/pomnikDwa.gltf')