const {Discord, MessageEmbed, Client} = require('discord.js')
let LeagueAPI = require("leagueapiwrapper")
const { Command } = require('discord.js-commando')
const bot = new Client()
const Youtube = require('youtube-api')
const ytdl = require('youtube-dl')
const express = require('express')
const cors = require('cors')
const app = express()
var videoTitle
const youtube = new Youtube('AIzaSyCI4sylFb9PaZ1v_MsfUFHs50L-ey82qVk')


'use strict';
bot.login("Njk3NDM5MTY1OTY4NTQ3OTAz.Xpdozw.UdYrye0nO34dmvFLAdEzLgfH5XY")

LeagueAPI = new LeagueAPI("RGAPI-3838f210-1567-43c6-8c12-e880dded3331", Region.EUNE)

bot.on('ready', () => {
    console.log("I am ready")
})

app.listen(4000, () => {

    console.log('Server is on');
});

app.get('/download', (req, res) => {
    var URL = req.query.URL
    res.json({url:URL})
    ytdl(URL, {format: 'mp3'}).pipe(res)
 
 })


//Simple Commands
bot.on('message', (message) => {
    
    if(message.content == "που"){
        message.channel.send("τσα")
    }

    if(message.content == "react"){
        message.react('❌')
        message.react('☑️')
    
        bot.on('messageReactionAdd', async (reaction, user) => {
        reactionCount = reaction.count
        message.channel.send(reactionCount)

    })
    
    }

    if(message.content == "ping"){
        message.channel.send("pong")
    }   
    if(message.content == "!myAvatar"){
        message.reply(message.author.displayAvatarURL())
    }
    
    if(message.content.includes("Check lol stats: ")){
                var array = message.content.split(": ")
                console.log(array[1])
                LeagueAPI.getSummonerByName(array[1])
                .then(function(accountInfo) {
                var accountStats = JSON.stringify(accountInfo)
                message.channel.send(accountStats).catch(console.log);
                
             
        })
    }

    if(message.content == "|ΓηΣελήνη|"){
      message.channel.send("Τρεις")
      message.channel.send("Γαμημένες")
      message.channel.send("Μερες")

    }
    
    if(message.content.includes("!music: ")){
        
        var msgArray = message.content.split(": ")
        if(msgArray[1] == "stop"){
         message.member.voice.channel.leave()
        } else {
        console.log(msgArray[1])
        var song = ytdl(msgArray[1])
        var songTitle;
        song.on('info', info =>{
            const embed = new MessageEmbed().setTitle('DJ ΣΙΤΑ')
            .setColor(0xff0000)
            .setDescription('Playing ' + info.title)
            message.channel.send(embed)
            songTitle = info.title
            })
        
        const fs = require('fs');
        song.pipe(fs.createWriteStream('music.mp3'))
        
        song.on('end', () =>{
            message.member.voice.channel.join().then(connection =>{
                try {
                    const dispatcher = connection.play('music.mp3') 
                dispatcher.on('start', () => {
                    console.log('audio is now playing!');
                });
            } catch {
                const embedError = new MessageEmbed().setTitle('Error')
                .setColor(0xff0000)
                .setDescription('403 Forbidden')
            }
        })
        

        })
        
    }

  
}},

   bot.on('message', message => {
    if (message.content === '!embed') {
      
      const embed = new MessageEmbed()
        .setTitle('A slick little embed')
        .setColor(0xff0000)
        .setDescription('Hello, this is a slick embed!')
      message.channel.send(embed)
    }
  }) )

 