import { IOperator } from "~/types/Operator"

export const buck: IOperator = {
  name: "Buck",
  role: "Attacker",
  unit: "JTF-2",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "ca",
    season: "Y1S1",
    height: 178,
    weight: 84,
  },
  bio: {
    real_name: "Sébastien Côté",
    birthplace: "Montreal, Canada",
  },
}