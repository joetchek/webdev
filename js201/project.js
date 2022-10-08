const btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
    const textOutput = document.querySelector(".text-output");
    textOutput.innerHTML = String(Math.ceil(Math.random() * 30));
});

