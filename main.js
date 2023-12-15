document.addEventListener('DOMContentLoaded', () => {
    const twitchEmbed = new Twitch.Embed('twitch-embed', {
        width: 800,
        height: 600,
        channel: 'https://www.twitch.tv/amar',
        layout: 'video',
        autoplay: false
    });

    twitchEmbed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        console.log('Twitch-Stream ist bereit');
    });
});
