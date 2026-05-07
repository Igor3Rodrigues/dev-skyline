import Ground from '../components/Ground'
import Building from '../components/Building'
import { Grid, OrbitControls } from '@react-three/drei'

function CityScene() {
  return (
    <>
      <color attach="background" args={['#020617']} />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} />

      <OrbitControls />

      <Grid args={[50, 50]} />

      <Ground />

      <Building position={[0, 2, 0]} height={4} color="cyan" />
    </>
  )
}

export default CityScene
