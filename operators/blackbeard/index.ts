import { IOperator } from "~/types/Operator"

export const blackbeard: IOperator = {
  name: "Blackbeard",
  role: "Attacker",
  unit: "SEALS",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Y1S2",
    height: 180,
    weight: 84,
  },
  bio: {
    real_name: "Craig Jenson",
    birthplace: "Bellevue, U.S.A",
  },
}
