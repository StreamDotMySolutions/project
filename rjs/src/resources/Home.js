import axios from "axios"
import { useEffect, useState } from "react" 

const Home = () => {
    const [message, setMessage] = useState(null)
    const [answer, setAnswer] = useState(null)

    useEffect( () => {
        axios('http://localhost:8000/api/welcome')
        .then( response => {
            console.log(response)
            setMessage(response.data.message)
        })
        .catch( error => {
            console.warn(error)
        })
    },[])

    const handleSubmitClick = () => {
        console.log('send to laravel')

        const formData = new FormData()
        formData.append('answer' , answer)
        axios({
            url : 'http://localhost:8000/api/answer',
            method: 'post',
            data : formData
            })
        .then( response => {
            console.log(response)
            setMessage(response.data.message)
        })
        .catch( error => {
            console.warn(error)
        })
    }

    return(
        <>
            <h1>{message}</h1>
            <hr />
            {answer !== null && 
                <h1>{answer}</h1>
            }

            <input
                type="text"
                onChange={(event) => setAnswer(event.target.value)}
            />
            {' '}
            <button onClick={handleSubmitClick}>Submit</button>
        </>
    )
}

export default Home