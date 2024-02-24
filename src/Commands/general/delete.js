module.exports = {
    name: 'delete',
    aliases: ['del'],
    category: 'general',
    exp: 5,
    react: "✅",
    description: 'Deletes the quoted message',
    async execute(client, arg, M) {
        if (!M.quoted) return M.reply('Jis message ko delete krna hn usko quote kro!')
        await client.sendMessage(M.from, {
            delete: M.quoted.key
        })
    }
}
