// Retro MP3 Player Logic Mockup
document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("play-btn");
    const trackTitle = document.getElementById("track-title");
    let isPlaying = false;

    const playlist = [
        "TRACK 01: LEVEL_1.MP3",
        "TRACK 02: BOSS_FIGHT.MP3",
        "TRACK 03: GAME_OVER.MP3"
    ];
    let currentTrack = 0;

    playBtn.addEventListener("click", () => {
        isPlaying = !isPlaying;
        playBtn.textContent = isPlaying ? "⏸" : "▶";
        trackTitle.style.color = isPlaying ? "#00ff00" : "#ff0000";
    });

    document.getElementById("next-btn").addEventListener("click", () => {
        currentTrack = (currentTrack + 1) % playlist.length;
        trackTitle.textContent = playlist[currentTrack];
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        trackTitle.textContent = playlist[currentTrack];
    });
});
