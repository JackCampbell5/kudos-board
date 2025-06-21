const boardLink = import.meta.env.VITE_BACKEND_API+"/boards/";

export async function fetchCards(id,after){
    await fetch(`${boardLink}${id}/cards`)
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON data from the response
    })
    .then(data => {
        // Update UI or perform other actions with the data
        after(data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}

export async function createCardAPI(id,info,after) {
    await fetch(`${boardLink}${id}/cards/add`,{method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(info)})
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON data from the response
    })
    .then(data => {
        // Update UI or perform other actions with the data
        after(data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}

export async function deleteCardAPI(boardID, cardID,after) {
    await fetch(`${boardLink}${boardID}/cards/${cardID}/delete`,{method: 'DELETE'})
    .then(response => {
        if (!response.ok) {
        throw new Error(`Error deleting error! status: ${response.status}`);
        }else{
            after();
        }});

}

export async function addVoteCardAPI(boardID,cardID,after) {
    await fetch(`${boardLink}${boardID}/cards/${cardID}/voteUp`,{method: 'PUT', headers: {'Content-Type': 'application/json'}})
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON data from the response
    })
    .then(data => {
        // Update UI or perform other actions with the data
        after(cardID,data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}

export async function addPinCardAPI(boardID,cardID,setToafter,after) {
    await fetch(`${boardLink}${boardID}/cards/${cardID}/pin/${setToafter}`,{method: 'PUT', headers: {'Content-Type': 'application/json'}})
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON data from the response
    })
    .then(data => {
        // Update UI or perform other actions with the data
        after(cardID,data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}

export async function removePinCardAPI(boardID,cardID,after) {
    await fetch(`${boardLink}${boardID}/cards/${cardID}/unpin`,{method: 'PUT', headers: {'Content-Type': 'application/json'}})
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON data from the response
    })
    .then(data => {
        // Update UI or perform other actions with the data
        after(cardID,data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}
