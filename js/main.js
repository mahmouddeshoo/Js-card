let ourTitle = "Empower your learning journey online";
let detailsPart = "Babylon - Svelte Education Template is a modern eLearning platform template built with SvelteKit and Tailwind CSS";


let cardComponent =`  <section class="container">
        <div id="title">
        <h2>${ourTitle}</h2>
        <p>${detailsPart}</p>
        </div>
        <div id="card">
            <img src="img/sound.jpg" alt="sound">
        </div>
    </section>`;
document.write(cardComponent);