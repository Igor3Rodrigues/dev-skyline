import Ground from '../components/Ground'
import Building from '../components/Building'
import { Grid, OrbitControls } from '@react-three/drei'
import { buildings } from '../data/buildings'

function CityScene() {
  return (
    <>
      <color attach="background" args={['#020617']} />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} />

      <OrbitControls />

      <Grid args={[100, 100]} cellColor="#1d4ed8" sectionColor="#3b82f6" />

      <Ground />

      {buildings.map(building => (
        <Building
          key={building.id}
          position={building.position}
          height={building.height}
          color={building.color}
        />
      ))}
    </>
  )
}

export default CityScene
