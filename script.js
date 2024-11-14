
const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');

// Array of songs
const songs = [
    { title: "Song 1", artist: "Artist 1", src: "songs/s1.mp3" },
    { title: "Song 2", artist: "Artist 2", src: "songs/s2.mp3" },
    { title: "Song 3", artist: "Artist 3", src: "songs/s3.mp3" }
];

// Track the current song index
let currentSongIndex = 0;
let isPlaying = false;

// Load a song based on the current index
function loadSong(songIndex) {
    const song = songs[songIndex];
    audio.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
}

// Function to play or pause the song
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playBtn.textContent = 'Play';
    } else {
        audio.play();
        playBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

// Function to play the next song
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    isPlaying = true;
    playBtn.textContent = 'Pause';
}

// Function to play the previous song
function playPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    isPlaying = true;
    playBtn.textContent = 'Pause';
}

// Load the initial song
loadSong(currentSongIndex);

// Event listeners
playBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNextSong);
prevBtn.addEventListener('click', playPrevSong);

// When the current song ends, play the next song automatically
audio.addEventListener('ended', playNextSong);
