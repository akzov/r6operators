import { IOperator } from "~/types/Operator"

export const goyo: IOperator = {
  name: "Goyo",
  role: "Defender",
  unit: "FES",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "mx",
    season: "Y4S3",
    height: 171,
    weight: 83,
  },
  bio: {
    real_name: "César Ruiz Hernández",
    birthplace: "Culiacán Rosales, Mexico",
  },
}
