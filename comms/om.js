module.exports.run = async (bot, message, args) => {
    message.channel.send(``, { files: ['./om.mp4'] });
};

module.exports.help = {
    name: "om"
}