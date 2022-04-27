/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Martin Trafas (https://sketchfab.com/Bexxie)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/free-datsun-280z-0789ab2ece9442de94b3c41595e0ecbd
title: [FREE] Datsun 280Z
*/

import { useSnapshot } from "valtio";
import { useGLTF } from "@react-three/drei";
import React, { useRef, useState, useEffect } from "react";

import { shoeState } from "../states/shoe-global-state";

export default function Shoe({ ...props }) {
  const group = useRef();

  const [hovered, setHovered] = useState(null);

  const snap = useSnapshot(shoeState);

  console.log({ snap });

  const { nodes, materials } = useGLTF("/shoe-draco.glb");

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
      return () =>
        (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          auto
        )}'), auto`);
    }
  }, [hovered]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        e.intersections.length === 0 && setHovered(null);
      }}
      onPointerMissed={() => (shoeState.current = null)}
      onClick={(e) => {
        e.stopPropagation();
        shoeState.current = e.object.material.name;
      }}
    >
      <mesh
        material-color={snap.items.laces}
        geometry={nodes.shoe.geometry}
        material={materials.laces}
      />
      <mesh
        material-color={snap.items.mesh}
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
      />
      <mesh
        material-color={snap.items.caps}
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
      />
      <mesh
        material-color={snap.items.inner}
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
      />
      <mesh
        material-color={snap.items.sole}
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
      />
      <mesh
        material-color={snap.items.stripes}
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
      />
      <mesh
        material-color={snap.items.band}
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
      />
      <mesh
        material-color={snap.items.patch}
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
      />
    </group>
  );
}