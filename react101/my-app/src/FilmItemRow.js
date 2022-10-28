//component that grabs the movie data from the props and makes it a url
function FilmItemRow(props) {
    return(
        <li>
            <a href={props.url}>{props.url}</a>
        </li>
    );

}

export default FilmItemRow;