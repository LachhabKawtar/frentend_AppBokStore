import axios from "axios"
const http1 = axios.create({
    baseURL:"http://localhost:3222",
    Headers:{"content-type": "application/json"}
})
export default http1;