// Declare
const embeds = {
  // Error embeds
  error: (error) => {
    return [
      {
        color: 0xff0000,
        title: 'Error:',
        description: error.message,
      },
    ]
  },
  // RPS embeds
  rps: {
    // Choosing embeds message
    choosing: () => {
      return [
        {
          color: 0x49ffcb,
          title: 'Choose your weapon:',
          description: 'Click on the button below to choose your weapon. (You have 15 seconds to choose!)',
          thumbnail: {
            url: 'https://cdn.discordapp.com/attachments/1253652285523755101/1262436504911872010/rps_thumbnail.png?ex=6696971d&is=6695459d&hm=873ee5f30c3b289149da6d8e866119d08487c7bbc4359d28018d16f630cc3ccd&',
          },
        },
      ]
    },
    // Choosed embeds message, and the result
    choosed: (choices, result) => {
      return [
        {
          color: 0x49ffcb,
          title: 'Let\'s see the result!',
          description: choices.message.user + ', ' + choices.message.bot + ', ' + result + '.',
        },
      ]
    },
  },
}
// Export
export default embeds