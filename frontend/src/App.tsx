import { Canvas } from '@react-three/fiber'
import CityScene from './scenes/CityScene'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas shadows camera={{ position: [12, 10, 12], fov: 60 }}>
        <directionalLight position={[5, 10, 5]} castShadow />
        <CityScene />
      </Canvas>
    </div>
  )
}

export default App
