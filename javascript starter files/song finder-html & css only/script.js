// end put inside a var
const url = 'https://itunes.apple.com/search?term=metallica';

// with fetch we call the endpoint,then if there is a response we convert into a json, 
//and then we show the data in the console
//catch show an error if soething went bad
fetch(url)
.then( (response) =>  response.json() )
.then((data) => {
    //console.log(data.results);
    const artists = data.results;
    return artists.map(result => {
       const songContainer = document.getElementById('songs')

       const article = document.createElement('article'),
             artist = document.createElement('p'),
             song = document.createElement('p'),
             img = document.createElement('img'),
             audio = document.createElement('audio'),
             audioSource = document.createElement('source')
             

             artist.innerHTML = result.artisName
             song.innerHTML = result.trackName
             img.src = result.artworkUrl100
             audioSource.src = result.previewUrl
             audio.setAttribute('controls', '')

             article.appendChild(img)
             article.appendChild(artist)
             article.appendChild(song)
             article.appendChild(audio)
             audio.appendChild(audioSource)
             songContainer.appendChild(article)

    })
})
.catch(error => console.log('Request failed', error));