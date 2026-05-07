export const LOT_SIZE = 2
export const SPACE = 1

export type GridPosition = {
  x: number
  z: number
}

export function getBuildingPosition(gridPos: GridPosition): [number, number, number] {
  const step = LOT_SIZE + SPACE

  const x = gridPos.x * step + LOT_SIZE / 2
  const z = gridPos.z * step + LOT_SIZE / 2

  return [x, 0, z]
}

export function generateRandomGridPositions(count: number): GridPosition[] {
  const positions: GridPosition[] = []
  const used = new Set<string>()

  const MAP_SIZE = 20

  while (positions.length < count) {
    const x = Math.floor(Math.random() * MAP_SIZE) - MAP_SIZE / 2
    const z = Math.floor(Math.random() * MAP_SIZE) - MAP_SIZE / 2

    const key = `${x}-${z}`

    if (!used.has(key)) {
      used.add(key)
      positions.push({ x, z })
    }
  }

  return positions
}
