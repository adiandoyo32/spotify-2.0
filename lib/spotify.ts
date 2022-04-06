import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'user-modify-playback-state',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-follow-modify',
  'user-follow-read',
  'user-read-recently-played',
  'user-read-playback-position',
  'user-top-read',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-read-email',
  'user-read-private',
  'user-library-modify',
  'user-library-read',
  'streaming',
].join(',')

const params = {
  scope: scopes,
}

const queryParams = new URLSearchParams(params)

const LOGIN_URL =
  'https://accounts.spotify.com/authorizes?' + queryParams.toString()

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi

export { LOGIN_URL }