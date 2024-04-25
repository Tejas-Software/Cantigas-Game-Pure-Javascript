
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
    insertReturnButton: () => {
        let returnButton = document.createElement("img");
        returnButton.classList.add("return_button");
        returnButton.src = "../../../../content/01_layout/tela_02_videos/01_layout/botao_voltar.png";
        returnButton.style.position = "absolute";
        returnButton.addEventListener("click", () => { location.href = "/../../../index.html" });
        returnButton.style.top = `${window.innerHeight * 0.82 / window.innerHeight * 103}%`;
        returnButton.style.left = `${window.innerWidth * 0.04 / window.innerWidth * 100}%`;
        returnButton.style.width = `${window.innerWidth * 0.07 / window.innerWidth * 70}%`;
        returnButton.style.zIndex = 999;
        document.body.appendChild(returnButton);
    },
    createDrawnIntoCanvas: () => {
        let canvas = document.getElementById("myCanvas");
        

        let ctx = canvas.getContext("2d");
        let img = new Image();
        img.src = src;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
    }
};

GameData.createBackground("/content/01_layout/tela_02_videos/01_layout/cenario.png");


GameData.insertReturnButton();

window.addEventListener('resize', () => { location.reload() });