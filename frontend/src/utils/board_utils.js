
const boardLink = import.meta.env.VITE_BACKEND_API+"/boards/";
export async function fetchBoards(after){
    await fetch(`${boardLink}`)
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

export async function deleteBoardAPI(id,after) {
    await fetch(`${boardLink}delete/${id}`,{method: 'DELETE'})
    .then(response => {
        if (!response.ok) {
        throw new Error(`Error deleting error! status: ${response.status}`);
        }else{
            after();
        }});

}

export async function createBoardAPI(info,after) {
    await fetch(`${boardLink}add`,{method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(info)})
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
