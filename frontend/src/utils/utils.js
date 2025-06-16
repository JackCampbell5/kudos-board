export async function fetchBoards(after){
    await fetch('http://localhost:4000/boards')
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
        after(data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}

export async function fetchCards(id,after){
    await fetch(`http://localhost:4000/boards/${id}/cards`)
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON data from the response
    })
    .then(data => {
        // Handle successful response
        console.log('Cards:', data);
        // Update UI or perform other actions with the data
        after(data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}


export async function deleteBoardAPI(id,after) {
    console.log("Deleting board with id: " + id);
    await fetch(`http://localhost:4000/boards/delete/${id}`,{method: 'DELETE'})
    .then(response => {
        if (!response.ok) {
        throw new Error(`Error deleting error! status: ${response.status}`);
        }else{
            after();
        }});

}

export async function createBoardAPI(info,after) {
    await fetch('http://localhost:4000/boards/add',{method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(info)})
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
        after(data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}


export async function createCardAPI(id,info,after) {
    await fetch(`http://localhost:4000/boards/${id}/cards/add`,{method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(info)})
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
        after(data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}

export async function deleteCardAPI(id,after) {
    console.log("Deleting card with id: " + id);
    await fetch(`http://localhost:4000/boards/${id}/cards/delete`,{method: 'DELETE'})
    .then(response => {
        if (!response.ok) {
        throw new Error(`Error deleting error! status: ${response.status}`);
        }else{
            after();
        }});

}


export async function fetchBoard(id, after){

}


export function catTranslate(category){
    switch (category) {
        case "all":
            return "Home"
        case "recent":
            return "Recent"
        case "celebration":
            return "Celebration"
        case "thanks":
            return "Thank You"
        case "inspo":
            return "Inspiration"
    }

}


export function convertToTitleCase(str) {
    if (!str) {
      return "";
    }
    return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
  }
