  # StuntStorm's Easy to use **Discord Games NPM**

Play Games and Watch Youtube Along with your friends While you stream using this Npm Package!
![@stuntstormmath (1)](https://user-images.githubusercontent.com/56226566/123553535-5cb0f080-d799-11eb-8a58-5aa4bac4fb43.png)


## Installation ⚒️

Must 
### ``` npm i @stuntstorm/discord-games --save```

## Usage

### Require with any Variable
const package = require("@stuntstorm/discord-games")

### Games Together Commands 👾
```
package.betrayal(message, client);
package.fishington(message, client);
package.chess(message, client);
package.pokernight(message, client);
```
### Youtube Together Commands ✨
```
package.youtube(message, client);
```
## Setup 🛠️
```
const package = require("@stuntstorm/discord-games");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", message => {
  if(message.content == "!betrayal") {
    package.betrayal(message, client);
  }
});

client.login("token");
```
#### OR
```
const package = require("@stuntstorm/discord-games");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", message => {
  if(message.content == "!youtube") {
    package.youtube(message, client);
  }
});

client.login("token");
```
## Example Scenerio 💻

#### Index.js Code : 
![image](https://user-images.githubusercontent.com/56226566/123553704-80286b00-d79a-11eb-8fe5-1a9beba65a76.png)
#### Console Output : 
![image](https://user-images.githubusercontent.com/56226566/123553737-ac43ec00-d79a-11eb-9acf-687164344e8e.png)

## Support 🐱‍💻
Feel free to join the support server : https://discord.gg/u6XzUFkKTn
