﻿const discord = require("discord.js")
const fetch = require("node-fetch")


module.exports = {
    betrayal: (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}//invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: " ",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't start the Betrayal game")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm : Betrayal Game**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://i.imgur.com/MsoBBT2.png')
                .setDescription(`[**CLICK ME TO PLAY BETRAYAL 🎮**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(e)
        })



    },
    fishington: (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: " ",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't start the game")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm : Fishington Game**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://i.imgur.com/8wrrYE3.png')
                .setDescription(`[**CLICK ME TO PLAY FISHINGTON 🎮**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(e)
        })



    },
    pokernight: (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: " ",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't start the game")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm : Poker Night Game**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://i.imgur.com/PRYgJ9m.png')
                .setDescription(`[**CLICK ME TO PLAY POKER NIGHT 🎮**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(e)
        })



    },
    chess: (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: " ",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't start the game")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm : Chess Game**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://i.imgur.com/yA5nPkK.png')
                .setDescription(`[**CLICK ME TO PLAY CHESS 🎮**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(e)
        })



    },
    youtube: (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: " ",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to youtube")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm's Youtube Player**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO WATCH YOUTUBE 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    }

}

Application id: 
Chess : 832012586023256104
Pokernight : 755827207812677713
Betrayal : 773336526917861400
Fishington : 814288819477020702
Youtube : 755600276941176913

