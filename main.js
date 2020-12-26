var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Sedoiz Test Bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();


    
 if(command === 'p') {
    if (args == "") {message.channel.send("INVALID NAME.");
  } else {
            // https://api.hypixel.net/player?key=c3125bb5-970b-46c0-ba27-81af053a4d36&name=SedoizAlt&=
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
xhr.open("GET", "https://api.hypixel.net/player?key=c3125bb5-970b-46c0-ba27-81af053a4d36&name="+ args);
            xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                var myArr = JSON.parse(this.responseText);
                console.log(myArr.player.knownAliases);
                message.channel.send(myArr.player.knownAliases);
                if (player = null){message.channel.send("INVALID NAME.")};
            } 
            });

            
            //xhr.setRequestHeader("Cookie", "__cfduid=de62e3c6add0c88df5eb9564134dd58c81602819700");

            xhr.send();
        }
    } 
    else if (command == 'twitch'){
        message.channel.send('https://www.twitch.tv/sedoizyt');
    }
}

);


client.login('NzY2NDI2MzI4ODE0NTgzODI5.X4jMJA.wUSYiqkVvoHyRwcsz6Ue8Wq6dGw');