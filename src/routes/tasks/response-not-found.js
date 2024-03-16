export function responseNotFound(response) {
    return response.writeHead(404).end(JSON.stringify({
        message: 'There are no tasks with this ID'
    }))      
}