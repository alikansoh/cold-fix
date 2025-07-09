'use client';

import IceParticle from './IceParticle';

export default function IceAnimation() {
  const iceCubesCount = 15; 
  return (
    <>
      {Array.from({ length: iceCubesCount }).map((_, i) => (
        <IceParticle key={i} />
      ))}
    </>
  );
}
