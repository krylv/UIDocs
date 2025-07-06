import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useMemo, useState } from 'react'
import type { Container } from '@tsparticles/engine'

export const ParticlesContainer = () => {
  const [init, setInit] = useState(false)
  initParticlesEngine(async (engine) => {
    await loadSlim(engine).then(() => setInit(true))
  })

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }
  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: '#ffffff', // Белые звёзды
        },
        shape: {
          type: 'star', // или "star" для острых звёзд
          options: {
            star: {
              sides: 5, // Количество лучей у звёзд
            },
          },
        },
        opacity: {
          value: 0.7,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: true,
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 0.1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.2,
          random: true,
          straight: false,
          outMode: 'out',
          attract: {
            enable: false,
          },
        },
      },

      background: {
        color: '#000000',
      },
    }),
    [],
  )

  if (init) {
    return (
      <div className="relative">
        <Particles
          className="relative -z-[1]"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <h1 className="z-1 fixed left-1/2 font-marker text-[100px] -translate-1/2 top-1/2 text-white ">
          UIDocs
        </h1>
      </div>
    )
  }
}
