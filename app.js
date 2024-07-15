// Import Discord and src folder
import commands from './src/commands.js'
import components from './src/components.js'
import Discord from 'discord.js' 
import embeds from './src/embeds.js'
// Setup client
const client = new Discord.Client({
  intents: [
    1,
    2,
    512,
    4096,
    32768,
  ],
  presence: {
    status: 'dnd',
    activities: [
      {
        name: 'football Copa America!!! 🏆',
        type: 0,
      },
    ],
  },
})
// Setup token
const token = process.env['DISCORD_TOKEN'] // For security reasons, we use environment variables
// Listen for ready event
client.on('ready', async () => {
  // Set bot commands
  client.guilds.cache.map(async (guild) => {
    await guild.commands.set(commands)
  })
  // Log to console
  console.log('Logged in as ' + client.user.tag + '!')
})
// Listen for interactionCreate event
client.on('interactionCreate', async (interaction) => {
  // Return if interaction is not a command
  if (!interaction.isCommand()) return
  // Filter command
  const command = commands.find((cmd) => cmd.name === interaction.commandName)
  // Return if command is not found
  if (!command) return
  // Execute command and catch error
  try {
    await command.execute(interaction, embeds, components)
  } catch (error) {
    // Send error message
    await interaction.reply({
      embeds: embeds.error(error),
      components: components.error(),
      ephemeral: true,
    })
    // Log error
    console.error(error)
  }
})
// Login to Discord
client.login(token)