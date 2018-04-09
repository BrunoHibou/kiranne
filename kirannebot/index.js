const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "MzMyOTY0MDY3MzEwMzA1Mjgw.DEFxTA.64P2LEpl-TS04FBKlJV0sPR65u8";
const PREFIX = "ki."





var bot = new Discord.Client();

var servers = {};


let responseObject = {
	"batata": "É um tuberculo :3",
	"sua mãe": "aquela prostibula >:3",
	"sua progenitora": "aquela prostiranha >:3",
	"eu odeio a kiranne": "eu também me odeio ;-;",
	"a kiranne é ruim": "ruim é a sua mãe",

};

bot.on("ready", function() {
    console.log("Ready");
});

bot.on('guildMemberAdd', member => {
  
  member.guild.defaultChannel.send(`Bem vindo ao canal :3, ${member}!`);
  
  const channel = member.guild.channels.find('name', 'member-log');
 
  if (!channel) return;
  
  channel.send(`Bem vindo ao canal :3, ${member}`);
});


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Kiranne oque vc acha do dog?") {
        message.channel.sendMessage("Ele é um cão zueiro que gosta muito da letra K :3");
    }
   
   if (!message.content.startsWith(PREFIX)) return;

   var args = message.content.substring(PREFIX.length).split(" ");

   switch (args[0]) {
        case "ping1":
            message.channel.sendMessage("pong");
          });
            break;
        case "bird":
            message.channel.sendMessage("O todo poderoso THE BOSS não irrite ele ou você vai acaba levando mute ou kick");
          });
            break; 
	case "kafe":
            message.channel.sendMessage("K A F E I N A");
          });
            break; 
	case "dino":
            message.channel.sendMessage("Híbrido que recruta");
          });
            break;
	case "valdani":
            message.channel.sendMessage("sei lá");
          });
            break;
	case "srnepo":
            message.channel.sendMessage("random sir");
          });
            break;
	case "dog":
            message.channel.sendMessage("cachorro vira-lata");
          });
            break;  
	case "breno":
            message.channel.sendMessage("The guy who is not coming back");
          });
            break; 
	case "yamo":
            message.channel.sendMessage("O furry retardado da TES");
          });
            break; 
	case "will":
            message.channel.sendMessage("hm, não sei");
          });
            break; 
        case "tes":
            message.channel.sendMessage("PRAISE THE SUN", {file: "https://i.ytimg.com/vi/rme_vKykuNI/maxresdefault.jpg"})
          });
	    break;
        case "breno":
            message.channel.sendMessage("Ele é o nosso sabio monge das montanhas :3");
          });
            break;
        case "avatar":
             message.reply(message.author.avatarURL);
          });
             break;    
        case "fuckyou":
            message.channel.sendMessage("(=^.^=)", {
            file: "http://pa1.narvii.com/6049/b24df06f432bc6461a0bd2b687bb0e9423e1ae4e_hq.gif"  
          });
             break;
        case "fag":
            message.channel.sendMessage(":3", {
            file: "https://s-media-cache-ak0.pinimg.com/originals/f1/2e/6c/f12e6cf30f63efdb757c8fd9fbf4655f.gif"  
          });
	     break;
        case "calm":
            message.channel.sendMessage("C:", {
            file: "http://i.imgur.com/xufbDXz.gif"
          });  
	     break; 
        case "marry":
            message.channel.sendMessage(":3", {
            file: "https://s-media-cache-ak0.pinimg.com/originals/2b/c7/6b/2bc76b852629d716cdfd08881589ae0c.gif"
          });
	     break;
        case "headroll":
            message.channel.sendMessage(":P", {
            file: "http://i.imgur.com/5Ltz1EH.gif"  
          });            
             break;
        default:
            message.channel.sendMessage("Comando invalido :c")       
   
});



bot.login(TOKEN);

