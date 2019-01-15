const commando = require('discord.js-commando');

module.exports = class GetCodeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'code',
            aliases: [ 'getcode' ],
            group: 'code',
            description: 'Retrieves the code for the user.',
            examples: [ 'code <user>' ],
        });
    }

    async run(msg, args) {
        msg.reply("h");
    }
};
