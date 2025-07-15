'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export const SparklesCore = (props: any) => {
  const particlesInit = useCallback(async (engine) => {
    // THIS will work on v2.11.1 of tsparticles + react-tsparticles
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: props.background || 'transparent' } },
        particles: {
          color: { value: props.particleColor || '#ffffff' },
          number: {
            value: props.particleDensity || 80,
            density: { enable: true, area: 800 }
          },
          size: { value: { min: props.minSize || 1, max: props.maxSize || 3 } },
          move: { enable: true, speed: 1 },
        }
      }}
      className={props.className}
    />
  );
};
