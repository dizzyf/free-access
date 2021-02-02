let Discord = require("discord.js");
let client = new Discord.Client();
client.on('ready', () => {
 client.user.setActivity('PLEASE GIVE ME ACCESS!!!', { type: 'WATCHING' })
})
client.on("guildMemberAdd", member => {
const myServer = "794624598808985644"; 
const welcomeChannel = "794624598808985647";

 if(member.guild.id === myServer) {
 client.channels.cache.get(welcomeChannel).send(`welcome to radioactive server ${member}!`)
 }
})

client.on("message", message => {
if (message.content === "access") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
if (message.content === "please") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
if (message.content === "give me") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
if (message.content === "please give me access") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
} 
if (message.content === "Access") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
if (message.content === "ACCESS") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
  if (message.content === "ACCESS!") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
  if (message.content === "Access!") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
  if (message.content === "access!") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
  if (message.content === "access?") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
  if (message.content === "Access?") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
  if (message.content === "ACCESS?") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
  if (message.content === "please give me access") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
  
if (message.content === "give me access please") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
  if (message.content === "Please give me access!") {
message.channel.send("die in a fire nn no access for you fucking retard dog")
}
if (message.content === ":flushed:") {
message.channel.send("me when i see your mom lmfao")
}
  

  if (message.content === "shit bot") {
message.channel.send("your mom is shit lmfao")
}
  if (message.content === "<@803542074112475157> shit bot") {
message.channel.send("your mom is shit")
}
  if (message.content === "<@803542074112475157>") {
message.channel.send("stop pinging me nn ")
}
    if (message.content === "@here") {
message.channel.send("stop pinging me nn ")
}
    if (message.content === "@everyone") {
message.channel.send("stop pinging me nn ")
}

if(message.content === "skid") {
 let embed = new Discord.MessageEmbed()
 .setTitle("kill yourself retard paster")
 .setDescription("imagine pasting in 2021 lmfao ")
 .setColor("BLUE")
 .setFooter("kami blue on bottom looooooooool")
 message.channel.send(embed)
  
}
if(message.content.startsWith("!ban")) {
 if(message.member.hasPermission("BAN_MEMBERS")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("ping the person who you wanna own ")
 else {
 member.ban().then(mem => {
 message.channel.send(`owned ${mem.user.username}`)
 })
 }
 } else {
 message.reply("you dont have perms for that braindead retard")
 }
} 
  if(message.content.startsWith("!kick")) {
 if(message.member.hasPermission("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("ping the person who you wanna own")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked.`)
 })
 }
 } else {
 message.reply("you dont have perms for that braindead retard")
 }
   
}

})
client.login("your bot token here")
