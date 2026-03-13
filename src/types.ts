export type Player = {
  name: string
  speed: number
  maneuverability: number
  power: number
  totalPoints: number
  diceRoll: number | null
  lastResult: number | null
}

export type Block = "RETA" | "CURVA" | "ELIMINAÇÃO"

export type Attribute = "speed" | "maneuverability" | "power"
