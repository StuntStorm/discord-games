//This project is edited in such a way to avoid plagiarism.. (aka those who are planning to "ctrl+c" and "ctrl+v" this repos wont work unless you find the removed commands)
const discord = require("discord.js")
const fetch = require("node-fetch")


module.exports = {
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "880218394199220334",
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
        (message, client) => {

    let channel = message.member.voice.channel;
    if (!channel) return message.channel.send("You have to be in VC!")

    fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: "880218394199220334",
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
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "880218394199220334",
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
    //checkers
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "832013003968348200",
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
                .setTitle("**StuntStorm : Checkers Game**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://i.imgur.com/yA5nPkK.png')
                .setDescription(`[**CLICK ME TO PLAY CHECKERS 🎮**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(e)
        })



    },
    //sketchyartist
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "879864070101172255",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to Sketchyartist")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm : Sketchy Artist Game**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO PLAY SKETCHY ARTIST 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    },
    //sketchheads
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "902271654783242291",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to Sketchheads")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm : Sketchheads**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO PLAY SKETCHHEADS 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    },
    //puttparty
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "763133495793942528",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to Puttparty")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm's Puttparty**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO PLAY PUTTPARTY 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    },
    //ocho
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "832025144389533716",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to ocho")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm's Ocho**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO PLAY OCHO 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    },
    //spell cast
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "852509694341283871",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to Spell Cast")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm's Spell Cast**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO PLAY SPELL CAST 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    },
    //lettertile
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "879863686565621790",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to LetterTile")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm's Letter Tile**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO PLAY LETTERTILE 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    },
    //awkword
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "879863881349087252",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to Awkword")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm's Awkword**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO PLAY AWKWORD 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    },
    //doodle crew
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "878067389634314250",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to doodle crew")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm's Doodle Crew**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO PLAT DOODLE CREW 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    },
    //word snack
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "879863976006127627",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to word snack")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm's Word Snack**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO PLAY WORD SNACK 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    },
    //youtube
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "880218394199220334",
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



    },
    //chess
    (message, client) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("You have to be in VC!")

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "832012774040141894",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't connect to Chess")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**StuntStorm : CHESS**")
                .setURL('https://www.youtube.com/stuntstormproduction')
                .setAuthor('-Rizwan Nizarudin', 'https://styles.redditmedia.com/t5_2qc190/styles/profileIcon_ozdvchjamrp61.jpg?width=256&height=256&crop=256:256,smart&s=17b3289a13a18dcceb75f5898fc98585eb962e4e', 'http://youtube.com/stuntstormproduction')

                .setThumbnail('https://images-ext-2.discordapp.net/external/q1lQh3ZRNwiJ_de2i1hNXaRC8-P007cwYmbreShJtFU/https/i.imgur.com/egnFTgK.png')
                .setDescription(`[**CLICK ME TO PLAY CHESS 💻**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by StuntStorm#7231")
            message.channel.send(r)
        })



    }
}


