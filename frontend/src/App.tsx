import { Canvas } from '@react-three/fiber'
import CityScene from './scenes/CityScene'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [8, 8, 8] }}>
        <CityScene />
      </Canvas>
    </div>
  )
}

export default App
