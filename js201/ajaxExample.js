// Ajax syntax
// fetch('http://website.com')
//     .then(...)
//     .then(...)

//fetch the data from the api 
fetch('https://pokeapi.co/api/v2/pokemon/sunflora')
    //convert it to json
    .then(response => response.json())
    //console log that data
    .then(data => {
        console.log(data);
    })