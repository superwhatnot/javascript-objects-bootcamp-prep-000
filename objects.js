var playlist = {
  artist: 'title'
}

function updatePlaylist(playlist, artist, title){
  playlist[artist] = title
  return playlist
}

/*Create a function removeFromPlaylist that accepts
two arguments (the playlist object and the artist name).
The body of the function should delete the key-value pair
from the playlist and return the updated playlist.*/

function removeFromPlaylist(playlist,artist) {
  delete playlist[artist]
  return playlist
}
