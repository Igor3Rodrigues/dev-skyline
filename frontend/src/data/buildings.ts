import { generateRandomGridPositions, getBuildingPosition } from '../utils/grid'

type BuildingData = {
  id: number
  position: [number, number, number]
  height: number
  color: string
}

const colors = ['#06b6d4', '#8b5cf6', '#f59e0b', '#22c55e']

const gridPositions = generateRandomGridPositions(20)

export const buildings: BuildingData[] = gridPositions.map((gridPos, index) => {
  const height = Math.floor(Math.random() * 10) + 3

  const position = getBuildingPosition(gridPos)

  position[1] = height / 2

  return {
    id: index + 1,
    position,
    height,
    color: colors[index % colors.length],
  }
})
