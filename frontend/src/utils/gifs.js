import { func } from "prop-types";

const GiphyAPIKey = import.meta.env.VITE_GIPHY_API_KEY;

export async function fetchGifts(after){
        await fetch('http://api.giphy.com/v1/gifs/trending?api_key=' + GiphyAPIKey + '&limit=10&rating=g&lang=en')
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse JSON data from the response
        })
        .then(data => {
            // Handle successful response
            console.log('Boards:', data);
            // Update UI or perform other actions with the data
            let result = extractGifUrl(data.data);
            after(result);
        })
        .catch(error => {
            // Handle error
            console.error('Error fetching boards:', error);
            // Display an error message or retry the request
        });
}


export async function searchGifts(searchKey, after){
    await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${GiphyAPIKey}&q=${searchKey}&limit=10&rating=g&lang=en`)
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON data from the response
    })
    .then(data => {
        // Handle successful response
        console.log('Boards:', data);
        // Update UI or perform other actions with the data
        let result = extractGifUrl(data.data);
        after(result);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}


function extractGifUrl(gifList) {
    let retGifList = [];
    for(let a of gifList) {
        retGifList.push(`https://media.giphy.com/media/${a.id}/giphy.gif`);
        console.log(`https://media.giphy.com/media/${a.id}/giphy.gif`);
    }
    return retGifList;

}
