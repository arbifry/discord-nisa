// Declare
const commands = [
  {
    type: 1,
    name: 'rps',
    description: 'Play rock paper scissors with me!',
    execute: async (interaction, embeds, components) => {
      // Avoid replied error
      interaction.reply = interaction.replied ? interaction.followUp.bind(interaction) : interaction.reply.bind(interaction)
      // Reply with components for user to choose
      await interaction.reply({
        embeds: embeds.rps.choosing(),
        components: components.rps.choosing(false),
      })
      // Filter button click
      const filter = (i) => i.user.id === interaction.user.id
      // Wait for button click
      const collector = interaction.channel.createMessageComponentCollector({
        filter,
        // Timeout after 15 seconds
        time: 15000,
      })
      // Listen for button click
      collector.on('collect', async (i) => {
        // Set the availableChoices
        const availableChoices = [
          'rock',
          'paper',
          'scissors',
        ]
        // Set the random choice
        const randomChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)]
        // Declare choices
        const choices = {
          user: i.customId,
          bot: randomChoice,
          message: {
            user: 'You choosed ' + i.customId,
            bot: 'I choosed ' + randomChoice,
          }
        }
        // Declare result
        const result = choices.user === choices.bot ? 'It\'s a tie!' : (choices.user === 'rock' && choices.bot === 'scissors' || choices.user === 'paper' && choices.bot === 'rock' || choices.user === 'scissors' && choices.bot === 'paper' ? 'You won!' : 'I won!')
        // Edit reply with result
        await i.update({
          embeds: embeds.rps.choosed(choices, result),
          components: components.rps.choosed(false),
        })
        // Stop collector
        collector.stop()
        // Filter button click
        const filter2 = (i) => i.user.id === interaction.user.id
        // Wait for button click
        const collector2 = interaction.channel.createMessageComponentCollector({
          filter2,
          // Timeout after 15 seconds
          time: 15000,
        })
        // Listen for button click
        collector2.on('collect', async (i) => {
          // Disable buttons
          await i.update({
            components: components.rps.choosed(true),
          })
          if (i.customId === 'play_again') {
            // Execute command again
            await commands.find((cmd) => cmd.name === 'rps').execute(i, embeds, components)
          }
          // Stop collector
          collector2.stop()
        })
      })
    },
  },
]
// Export
export default commands