// Declare
const components = {
  // Error components
  error: () => {
    return [
      {
        type: 1,
        components: [
          {
            type: 2,
            style: 5,
            label: 'Report this error',
            url: 'https://github.com/arbifry/discord-nisa/issues/new',
          },
        ],
      },
    ]
  },
  // RPS components
  rps: {
    choosing: (disabled) => {
      return [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 2,
              label: 'Rock',
              custom_id: 'rock',
              disabled,
            },
            {
              type: 2,
              style: 2,
              label: 'Paper',
              custom_id: 'paper',
              disabled,
            },
            {
              type: 2,
              style: 2,
              label: 'Scissors',
              custom_id: 'scissors',
              disabled,
            },
          ],
        },
      ]
    },
    choosed: (disabled) => {
      return [
        {
          type: 1,
          components: [
            {
              type: 2,
              style: 2,
              label: 'Play again',
              custom_id: 'play_again',
              disabled,
            },
          ],
        },
      ]
    },
  },
}
// Export
export default components