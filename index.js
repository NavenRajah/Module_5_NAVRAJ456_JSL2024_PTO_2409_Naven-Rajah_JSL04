// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "R&B",
  Rocket: "Rock",
  Groot: "Pop",
};

// Function to generate and display playlists
function generatePlaylist(guardians, songs) {
  const playlistsDiv = document.getElementById("playlists");
  playlistsDiv.innerHTML = ""; // Clear previous content

  Object.entries(guardians).map(([guardian, genre]) => {
    // Filter songs based on Guardian's preferred genre
    const playlist = songs.filter((song) => song.genre === genre);

    // Create a div for the Guardian's playlist
    const guardianDiv = document.createElement("div");
    guardianDiv.classList.add("playlist");

    // Add Guardian's name and playlist songs
    guardianDiv.innerHTML = `
            <h2>${guardian}'s Playlist</h2>
            <ul>
                ${playlist
                  .map(
                    (song) =>
                      `<li class="song"><span class="song-title">${song.title}</span> - ${song.artist}</li>`
                  )
                  .join("")}
            </ul>
        `;

    // Append playlist to the main div
    playlistsDiv.appendChild(guardianDiv);
  });
}

// Call generatePlaylist to display the playlists
generatePlaylist(guardians, songs);
