const GameData = {
    currentColor: "black",
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
    },
    configureElementsToPaint: () => {   
        
        GameData.elements.forEach(element => {
            element.addEventListener("click", () => {
                element.style.fill = GameData.currentColor;
            });
        });

        let colors = document.querySelectorAll(".color");
        colors.forEach(color => {
            color.addEventListener("click", () => {
                GameData.currentColor = color.id;
            });
        });
    }
};

const StartGame = () => {
    window.addEventListener('resize', () => { location.reload() });
    const configureElements = () => {
        GameData.element1 = document.querySelector(".peca_barata_01_path");
        GameData.element2 = document.querySelector(".peca_barata_02_path");
        GameData.element3 = document.querySelector(".peca_barata_03_path");
        GameData.element4_1 = document.querySelector(".peca_barata_04_path_1");
        GameData.element4_2 = document.querySelector(".peca_barata_04_path_2");
        GameData.element4_3 = document.querySelector(".peca_barata_04_path_3");
        GameData.element4_4 = document.querySelector(".peca_barata_04_path_4");
        GameData.element4_5 = document.querySelector(".peca_barata_04_path_5");
        GameData.element4_6 = document.querySelector(".peca_barata_04_path_6");
        GameData.element4_7 = document.querySelector(".peca_barata_04_path_7");
        GameData.element5 = document.querySelector(".peca_barata_05_path");
        GameData.element6 = document.querySelector(".peca_barata_06_path");
        GameData.element7 = document.querySelector(".peca_barata_07_path");

        GameData.elements = [GameData.element1, GameData.element2, GameData.element3, GameData.element4_1, GameData.element4_2, GameData.element4_3, GameData.element4_4, GameData.element4_5, GameData.element4_6, GameData.element4_7, GameData.element5, GameData.element6, GameData.element7];
    }
    configureElements();
    GameData.createBackground("/content/01_layout/tela_02_videos/01_layout/cenario.png");
    GameData.insertReturnButton();
    GameData.configureElementsToPaint();
}
StartGame();


