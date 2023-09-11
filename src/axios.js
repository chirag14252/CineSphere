import axios from "axios";


const InstanceAxios = () =>{
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzVkNjYxZjBmNDliYTgxNGI4YzY2YmJkMWQ4MGI3YiIsInN1YiI6IjY0ZmRhYWI0ZWZlYTdhMDBjMzk1NTllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqT0ExmtdImVWekx7FVo8eBCHaL52aiAEQ-kUfFqPXM";
    return axios.create({
        headers:{
            'Content-Type': 'application/json',
            Authorization : "bearer "+ token
        }
    })
}

export default InstanceAxios;