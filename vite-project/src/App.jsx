import 'aframe'
import { useState } from 'react'

function ARScene({ color }) {
  return (
    <a-scene
      xr-mode="ar"
      renderer="colorManagement: true"
      embedded
      style={{ width: '100%', height: '80vh' }}
    >
      {/* Rotating Box */}
      <a-box
        id="box"
        position="0 0 -0.8"
        color={color}
        scale="0.3 0.3 0.3"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 3000; easing: linear"
      ></a-box>

      {/* Camera */}
      <a-entity camera look-controls></a-entity>
    </a-scene>
  )
}

export default function App() {
  const [clr, setClr] = useState('#4CC3D9')

  const toggle = () => {
    setClr(c => (c === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'))
  }

  return (
    <>
      <button onClick={toggle} style={{ marginBottom: '10px' }}>
        Toggle Color
      </button>

      <ARScene color={clr} />
    </>
  )
}