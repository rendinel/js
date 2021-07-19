let term = ''
const songContainer = document.getElementById('songs')

//we create a function that update the endpoint by creating an empty var that get updated by the search of the user
// we check if we are typyng something and if we are typing a string
// if this 2 thing are true we run the else where the first thing we do is deleting the precedent search result
// and then proceed with the code
const updateTerm = () => {
    term = document.getElementById('searchInput').value;

    if(!term || term === ''){
        alert('please enter a search term')
    } else{
        while(songContainer.firstChild){
            songContainer.removeChild(songContainer.firstChild);
        }
        // endpoint put inside a var
        const url = `https://itunes.apple.com/search?limit=10&media=music&term=${term}`

        // with fetch we call the endpoint,then if there is a response we convert into a json, 
        //and then we show the data in the console
        //catch show an error if soething went bad
        fetch(url)
        .then( (response) =>  response.json() )
        .then((data) => {
            //console.log(data.results);
            // we put the results(come from the actual results in the console of the json) 
            //from the data inside a variable and put inside a new array with the metod map
            //we create the structure we need so article,p img ecc
            //we pass the element we need to the html structure we created from the data
            // with the appendchild we actualy show the structure we create above ,it's parenttag.appendChild(tag we want to display)
            const artists = data.results;
            return artists.map(result => {

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
    }
}

//we select the button we want and we make it launch the function to change the music search
const searchBtn = document.querySelector('button')
searchBtn.addEventListener('click', updateTerm)

//we look for all the play status inside all the dom, we pass event to the function , we put all the audio tag inside
// the var audio, the we loop through all the tag audio  looking for the one who are satisfying the play eventlistener with the event.target
// we need to pass true because the default is set to false because the play event don't bubble,the true will execute the event handler in the capture phase
document.addEventListener('play', event => {
    const audio = document.getElementsByTagName('audio')
    for(let i = 0; i < audio.length; i++){
        if(audio[i] != event.target){
            audio[i].pause();
        }
    }
}, true)