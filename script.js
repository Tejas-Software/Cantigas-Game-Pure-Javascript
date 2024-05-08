
const GameData = {
    createBackground: (src) => {
        let img = document.createElement("img");
        img.src = src;
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        document.body.appendChild(img);
    },
    insertVideoButton: () => {
        let img1 = document.getElementById("botao_claquete");
        let img2 = document.getElementById("videos");

        img1.addEventListener("click", () => {location.href = "/src/scenes/videos/index.html"});
        img2.addEventListener("click", () => {location.href = "/src/scenes/videos/index.html"});

        img1.style.width = `13%`;
        img1.style.height = `18%`;

        img2.style.width = `30%`;
        img2.style.height = `19%`;

        img1.style.position = "absolute";
        img1.style.top = `12%`;
        img1.style.left = `10%`;
        document.body.appendChild(img1);

        img2.style.position = "absolute";
        img2.style.top = `11%`;
        img2.style.left = `26%`;
        document.body.appendChild(img2);
    },
    insertPaintButton: () => {
        let img1 = document.getElementById("botao_paleta");
        let img2 = document.getElementById("vamos_pintar");

        img1.addEventListener("click", () => {location.href = "/src/scenes/paint/index.html"});
        img2.addEventListener("click", () => {location.href = "/src/scenes/paint/index.html"});

        img1.style.width = `13%`;
        img1.style.height = `20%`;

        img2.style.width = `30%`;
        img2.style.height = `16%`;

        img1.style.position = "absolute";
        img1.style.bottom = `42%`;
        img1.style.left = `10%`;
        document.body.appendChild(img1);

        img2.style.position = "absolute";
        img2.style.top = `40%`;
        img2.style.left = `26%`;
        document.body.appendChild(img2);
    },
    insertDrawButton: () => {
        let img1 = document.getElementById("botao_sol");
        let img2 = document.getElementById("vamos_desenhar");

        img1.addEventListener("click", () => {location.href = "/src/scenes/draw/index.html"});
        img2.addEventListener("click", () => {location.href = "/src/scenes/draw/index.html"});

        img1.style.width = `10%`;
        img1.style.height = `18%`;

        img2.style.width = `45%`;
        img2.style.height = `15%`;

        img1.style.position = "absolute";
        img1.style.bottom = `14%`;
        img1.style.left = `11.5%`;
        document.body.appendChild(img1);

        img2.style.position = "absolute";
        img2.style.bottom = `16%`;
        img2.style.left = `26.5%`;
        document.body.appendChild(img2);
    }
};

GameData.createBackground("/content/01_layout/tela_01_home/01_layout/tela_fundo.png");
GameData.insertVideoButton();
GameData.insertPaintButton();
GameData.insertDrawButton();

window.addEventListener('resize', () => { location.reload() });
