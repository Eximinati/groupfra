const axios = require('axios')

module.exports = {
    name: 'quote',
    aliases: ['qu'],
    category: 'fun',
    exp: 10,
    cool: 5,
    react: "✅",
    description: 'Sends random quotes',
    async execute(client, arg, M) {
        await axios
            .get(`https://animechan.vercel.app/api/random`)
            .then((response) => {
                const text = `[${response.data.character}]: ${response.data.quote}`
                M.reply(text)
            })
            .catch((err) => {
                M.reply(`🔍 Error: ${err}`)
            })
    }
}
