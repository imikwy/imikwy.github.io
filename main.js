document.addEventListener('DOMContentLoaded', () => {
    const twitchEmbed = new Twitch.Embed('twitch-embed', {
        width: window.innerWidth,  // Die Breite des Fensters
        height: window.innerHeight, // Die Höhe des Fensters
        channel: 'xrohat',
        layout: 'video',
        autoplay: false
    });

    twitchEmbed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        console.log('Twitch-Stream ist bereit');
    });
});
