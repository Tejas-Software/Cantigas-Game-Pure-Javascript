
const GameData = {
    createBackground: (src) => {
        document.body.style.backgroundImage = `url('${src}')`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundSize = 'cover';
        document.body.style.height = window.innerHeight;
        document.body.style.width = window.innerWidth;
    },
    insertVideoButton: () => {
        let img1 = document.getElementById("botao_claquete");
        let img2 = document.getElementById("videos");

        img1.addEventListener("click", () => {location.href = "/src/scenes/videos/index.html"});
        img2.addEventListener("click", () => {location.href = "/src/scenes/videos/index.html"});

        img1.style.width = `${window.innerWidth * 0.12}px`;
        img1.style.height = `${window.innerHeight * 0.20}px`;

        img2.style.width = `${window.innerWidth * 0.25}px`;
        img2.style.height = `${window.innerHeight * 0.15}px`;

        img1.style.position = "absolute";
        img1.style.top = `${window.innerHeight * 0.1}px`;
        img1.style.left = `${window.innerWidth * 0.1}px`;
        document.body.appendChild(img1);

        img2.style.position = "absolute";
        img2.style.top = `${window.innerHeight * 0.12}px`;
        img2.style.left = `${window.innerWidth * 0.28}px`;
        document.body.appendChild(img2);
    },
    insertPaintButton: () => {
        let img1 = document.getElementById("botao_paleta");
        let img2 = document.getElementById("vamos_pintar");

        img1.addEventListener("click", () => {location.href = "/src/scenes/paint/index.html"});
        img2.addEventListener("click", () => {location.href = "/src/scenes/paint/index.html"});

        img1.style.width = `${window.innerWidth * 0.12}px`;
        img1.style.height = `${window.innerHeight * 0.25}px`;

        img2.style.width = `${window.innerWidth * 0.45}px`;
        img2.style.height = `${window.innerHeight * 0.16}px`;

        img1.style.position = "absolute";
        img1.style.top = `${window.innerHeight * 0.35}px`;
        img1.style.left = `${window.innerWidth * 0.1}px`;
        document.body.appendChild(img1);

        img2.style.position = "absolute";
        img2.style.top = `${window.innerHeight * 0.4}px`;
        img2.style.left = `${window.innerWidth * 0.28}px`;
        document.body.appendChild(img2);
    },
    insertDrawButton: () => {
        let img1 = document.getElementById("botao_sol");
        let img2 = document.getElementById("vamos_desenhar");

        img1.style.width = `${window.innerWidth * 0.12}px`;
        img1.style.height = `${window.innerHeight * 0.25}px`;

        img2.style.width = `${window.innerWidth * 0.55}px`;
        img2.style.height = `${window.innerHeight * 0.15}px`;

        img1.style.position = "absolute";
        img1.style.top = `${window.innerHeight * 0.65}px`;
        img1.style.left = `${window.innerWidth * 0.1}px`;
        document.body.appendChild(img1);

        img2.style.position = "absolute";
        img2.style.top = `${window.innerHeight * 0.7}px`;
        img2.style.left = `${window.innerWidth * 0.28}px`;
        document.body.appendChild(img2);
    }
};

GameData.createBackground("/content/01_layout/tela_01_home/01_layout/tela_fundo.png");
GameData.insertVideoButton();
GameData.insertPaintButton();
GameData.insertDrawButton();

window.addEventListener('resize', () => { location.reload() });
