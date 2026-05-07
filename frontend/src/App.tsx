import { Canvas } from '@react-three/fiber'
import CityScene from './scenes/CityScene'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        shadows
        camera={{
          position: [20, 20, 20],
          fov: 60,
        }}
      >
        <CityScene />
      </Canvas>
    </div>
  )
}

export default App
