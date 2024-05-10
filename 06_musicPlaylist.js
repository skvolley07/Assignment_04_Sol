function createPlaylist(playlistname){
    const playlist = {
        name: playlistname,
        songs: []
    }
    function addsong(songName, artistName){
        let song = {
            songName: songName,
            artistName: artistName
        }
        playlist.songs.push(song)
    }
    function listSongs(){
        console.log(`${playlistname} playlist:`)
        playlist.songs.forEach((ele)=>{
            console.log(`${ele.songName} by ${ele.artistName}`)
        })
    }
    return {addsong, listSongs}
}

function addSongsToPlaylist(playlistName,songName,artistName){
    playlistName.addsong(songName,artistName)
}
function listOfSongsInPlaylist(playlistName){
    playlistName.listSongs()
}

const myPlaylist = createPlaylist("My Favourites")
addSongsToPlaylist(myPlaylist,"Song1","Artist1")
addSongsToPlaylist(myPlaylist,"Song2","Artist2")
addSongsToPlaylist(myPlaylist,"Song3","Artist3")

listOfSongsInPlaylist(myPlaylist)