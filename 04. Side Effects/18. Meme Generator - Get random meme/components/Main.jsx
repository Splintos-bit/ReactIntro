import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    
    
    // Generate a random number between 1 and 100
    
    

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data =>setAllMemes(data.data.memes))
            .catch(error => console.error('Error fetching memes:', error));  // Added error handling
    }, []);
    
    


    /**
     * Challenge: Get a random image from the array of
     * allMemes when the user clicks the button. Once
     * you've gotten a random image from the array, make
     * sure to write the code that will display that
     * random meme image to the page.
     */
    
    function handleChange() {
       
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const newUrl=allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
             imageUrl:newUrl
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={()=>handleChange}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}