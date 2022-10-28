import { useState } from "react";
import FilmItemRow from "./FilmItemRow";

//component for general star wars thing
function StarWars() {

    //defining the default object as state
    const [data, setData] = useState({
        name: null,
        height: null,
        homeworld: null,
        films: []
    });

    //defining a loaded bool to control if data is loaded
    const [isLoaded, setIsLoaded] = useState(false);

    //function to pull new character data
    const getNewCharacter = () => {
        
        //generate random character from api
        const rand = Math.ceil(Math.random() * 82);
        const url = `https://swapi.dev/api/people/${rand}`

        fetch(url)
            .then(response => response.json())
            .then(apiData => {
                setData({
                    name: apiData.name,
                    height: apiData.height,
                    homeworld: apiData.homeworld,
                    films: apiData.films
                })
                setIsLoaded(true);
            });
    }

    //movies is a map of film components
    const movies = data.films.map(url => {
        return <FilmItemRow url={url}/>
    })

    //return function
    return (
      <div>
        {
            isLoaded && 
                <div>
                    <h1>{data.name}</h1>
                    <p>{data.height} cm</p>
                    <p>
                        <a href={data.homeworld}>Homeworld</a>
                    </p>
                    <ul>
                        {movies}
                    </ul>
                </div>
        }
        
        <button 
            type="button" 
            onClick={getNewCharacter} 
            className="btn">
                Randomize Character
        </button>
      </div>
    );

}

export default StarWars;