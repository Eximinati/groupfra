const YT = require('../../lib/YT')
const yts = require('yt-search')

module.exports = {
    name: 'ytaudio',
    aliases: ['yta'],
    category: 'media',
    exp: 5,
    description: 'Downloads given YT Video and sends it as Audio',
    async execute(client, arg, M) {
       try{
        const link = async (term) => {
          const { videos } = await yts(term.trim())
          if (!videos || !videos.length) return null
          return videos[0].url
      }
      if (!arg) return M.reply('❌ Please provide a valid YouTube link to get the lyrics.')
      const validPathDomains = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/
      const term = validPathDomains.test(arg) ? arg.trim() : await link(arg)
      if (!term) return M.reply('❌ Please use this command with a valid youtube contant link')
      if (!YT.validateURL(term.trim())) return M.reply('❌ Please provide a valid YouTube link to get the lyrics.')
      const { videoDetails } = await YT.getInfo(term)
      M.reply('🔍 Searching for lyrics...')
      let text = `🎵 *_Title:_* ${videoDetails.title} | 🎧 *_Type:_* Audio | 🎤 *_From:_* ${videoDetails.ownerChannelName}`
      client.sendMessage(
          M.from,
          {
              image: {
                  url: `https://i.ytimg.com/vi/${videoDetails.videoId}/maxresdefault.jpg`
              },
              caption: text
          },
          {
              quoted: M
          }
      )
      if (Number(videoDetails.lengthSeconds) > 1800) return M.reply('❌ Cannot download audio longer than 30 minutes')
      const audio = YT.getBuffer(term, 'audio')
          .then(async (res) => {
              await client.sendMessage(
                  M.from,
                  {
                    audio: res,
                    mimetype: 'audio/mp4',
                    fileName: videoDetails.title
                  },
                  {
                      quoted: M
                  }
              )
          })
          .catch((err) => {
              return M.reply(err.toString())
              client.log(err, 'red')
          })
       }
            //Our beloved error chan. No one can stop her!
    catch(err){
      await client.sendMessage(M.from , {image: {url: `${client.utils.errorChan()}`} , caption: `${client.utils.greetings()} Error-Chan Dis\n\nError:\n${err}`})
    }
    }
}
//M.quoted.mtype === 'imageMessage',