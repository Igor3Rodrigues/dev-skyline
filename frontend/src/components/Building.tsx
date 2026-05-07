type BuildingProps = {
  position: [number, number, number]
  height: number
  color: string
}

function Building({ position, height, color }: BuildingProps) {
  return (
    <mesh position={position} castShadow rotation={[0, Math.PI / 8, 0]}>
      <boxGeometry args={[2, height, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default Building
