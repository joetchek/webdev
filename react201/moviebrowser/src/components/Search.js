import Hero from "./Hero";

//TMDB Api key = ae2ea625f4bced7c8c75e4e98289742f
//https://api.themoviedb.org/3/search/movie?api_key=ae2ea625f4bced7c8c75e4e98289742f&language=en-US&query=Star%20Wars&page=1&include_adult=false

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`
  return (
    <>
      <Hero text={title} />
      
    </>
  );
};

export default Search;
