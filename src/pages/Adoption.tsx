import axios from 'axios'
import {useEffect, useState} from 'preact'
export const Adoption=()=>{
    const [image, setImage] = useState("")

    useEffect(() => {
    axios.get("https://api.waifu.pics/sfw/neko")
        .then((response)=>{setImage(JSON.parse(response))})
    }, [])
    // TODO
    const handleChange=()=>{

    }

    const handleSave=()=>{
        window.localStorage.setItem(myCat,JSON.stringify({
            "name": "",
            "img":image.url,
            "stats":{
                "hunger":100,
                "love":100,
                "sleep":100
            }
        }))
        document.querySelector("#name")
    }
    return(<>
        <h3> Select a name for your new cat! </h3>
            <input type="text" id="name"></input>
            <Button>Save!</Button>
            <a href="/">Go Home!</a>
</>
    )
}