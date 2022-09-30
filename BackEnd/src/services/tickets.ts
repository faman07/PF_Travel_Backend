import axios from "axios"


const url: string = 'your-url.example';

async function getTickets(){
    try {
        const response= await axios.get(url);
        return response
    } catch (exception) {
        process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
    }
}
