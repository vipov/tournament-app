import rewards from './prizes'
import teams from './teams'

export default [
    {
      id: 1,
      name: "First tournament",
      teams: [...teams],
      rewards: [...rewards]
    },
    {
      id: 2,
      name: "Second tournament",
      teams: [...teams],
      rewards: [...rewards]
    }
  ];
  