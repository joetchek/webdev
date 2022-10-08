//grab button element
const btn = document.querySelector(".btn");

//set up event listener with function
btn.addEventListener('click', function() {
    //set up container element
    const container = document.querySelector(".data-container");
    container.replaceChildren();

    //generate random url to pull from api
    const rand = Math.ceil(Math.random() * 905);
    const url = `https://pokeapi.co/api/v2/pokemon/${rand}`

    fetch(url)
        .then(response => response.json())
        .then(data => {

            //get the name and make it an element
            const nameElement = document.createElement("div");
            nameElement.innerHTML = data['name'].toUpperCase() + ":";
            nameElement.className = "name";
            container.append(nameElement);

            //get the type and make it an element
            data['types'].forEach(element => {
                const typeData = element['type']['name'];
                const typeElement = document.createElement("div");
                typeElement.innerHTML = typeData.toUpperCase();
                typeElement.className = "type";
                container.append(typeElement);
            });

            //get the image and make it an element
            const imgUrl = data['sprites']['front_default'];
            let imgElement = document.createElement("img");
            imgElement.className = "image";
            imgElement.src = imgUrl;
            container.append(imgElement);
        })
});

