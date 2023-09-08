const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, GatewayIntentBits, Client, Events } = require('discord.js');

var clc = require("cli-color");
const crypto = require('crypto');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('genesis')
		.setDescription('Create and display a new genesis block that can be used with a new Blockchain.'),
	async execute(interaction) {
//

const SHA256 = require("crypto-js/sha256");
function getCurrentDateTimeString() {
    const date = new Date();
    return date.getFullYear() + '-' +
        (date.getMonth() + 1).toString().padStart(2, '0') + '-' +
        date.getDate().toString().padStart(2, '0') + ':' +
        date.getHours().toString().padStart(2, '0') + ':' +
        date.getMinutes().toString().padStart(2, '0') + ':' +
        date.getSeconds().toString().padStart(2, '0');
}


class CryptoBlock {
  constructor(index, timestamp, data, preceedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.preceedingHash = preceedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return SHA256(
      this.index +
        this.preceedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  proofOfWork(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

class CryptoBlockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty = 4;
  }
  startGenesisBlock() {
    return new CryptoBlock(0, getCurrentDateTimeString(), "Initial Block in the Chain", "0");
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock) {
    newBlock.preceedingHash = this.obtainLatestBlock().hash;
    //newBlock.hash = newBlock.computeHash();
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
  }

  checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const preceedingBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      if (currentBlock.preceedingHash !== preceedingBlock.hash) return false;
    }
    return true;
  }
}

let HashCreation = new CryptoBlockchain();

console.log(clc.white(" [") + clc.yellow("Discord") + clc.white("]: [") + clc.cyan("Avalyn Genesis Block") + clc.white("] ") + clc.green("Status... Started."));
console.log(JSON.stringify(HashCreation, null, 4));
console.log(clc.white(" [") + clc.yellow("Discord") + clc.white("]: [") + clc.cyan("Avalyn Genesis Block") + clc.white("] ") + clc.green("Status... Completed."));
//
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild

		await interaction.reply({ content: `Genesis Block Information\n` + JSON.stringify(HashCreation, null, 4) + `\n\nThank you for using the Avalyn Genesis Block Generator.\n\nIndex 0 is the Blockchain Genesis Block information.\nSave the Hash data somewhere secure.\nIn the event that you forget to save this hash data, you can simply generate a fresh new Genesis Block whenever!`, ephemeral: true });

	},
};
