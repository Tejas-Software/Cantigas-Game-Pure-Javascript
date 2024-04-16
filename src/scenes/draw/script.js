
const GameData = {

    /*CURRENT TOOL*/
    currentTool: "brush",

    /**BACKGROUND STUFF */
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

    /**BRUSH PALLETE STUFF */
    brushSize: 0,
    createBrushPallete: () => {
        let brushPallete = document.createElement("div");
        brushPallete.classList.add("brush_pallete");
        brushPallete.style.position = "absolute";
        brushPallete.style.top = "8%";
        brushPallete.style.left = "4.5%";
        brushPallete.style.width = "6%";
        brushPallete.style.height = "70%";
        brushPallete.style.borderRadius = "10px";
        brushPallete.style.backgroundColor = "white";
        brushPallete.style.display = "flex";
        brushPallete.style.flexDirection = "column";
        brushPallete.style.justifyContent = "space-around";
        brushPallete.style.alignItems = "center";
        document.body.appendChild(brushPallete);

        for(let i = 6; i > 0; i--) {
            let currentBrush = document.createElement("div");
            currentBrush.style.backgroundColor = "black";
            currentBrush.style.height = `${i}0px`;
            currentBrush.style.width = `${i}0px`;
            currentBrush.classList.add("brush");
            currentBrush.style.borderRadius = "50%";
            currentBrush.style.cursor = "pointer";
            currentBrush.addEventListener("click", () => {
                GameData.brushSize = i;
                console.log(GameData.brushSize)
            });
            brushPallete.appendChild(currentBrush);
        }
    },

    /**CANVAS STUFF */
    ctx: null,
    canDraw: false,
    drawInCanvas: (x, y) => {
        ctx.beginPath();
        ctx.arc(x, y, GameData.brushSize * 5, 0, 2 * Math.PI);
        ctx.fillStyle = GameData.currentColor;
        ctx.fill();
    },
    createDrawingCanvas: () => {
        let drawingCanvas = document.createElement("canvas");
        drawingCanvas.classList.add("drawing_canvas");
        ctx = drawingCanvas.getContext("2d");
        drawingCanvas.style.position = "absolute";
        drawingCanvas.style.top = "8%";
        drawingCanvas.style.left = "12%";
        drawingCanvas.style.width = "83%";
        drawingCanvas.style.borderRadius = "10px";
        drawingCanvas.style.height = "70%";
        drawingCanvas.style.backgroundColor = "white";
        document.body.appendChild(drawingCanvas);
    },


    /**COLOR PALLETE STUFF */
    currentColor: "black",
    createColorPallete: () => {
        let colorPallete = document.createElement("div");
        colorPallete.classList.add("color_pallete");
        colorPallete.style.position = "absolute";
        colorPallete.style.bottom = "8%";
        colorPallete.style.left = "12%";
        colorPallete.style.width = "83%";
        colorPallete.style.height = "11%";
        colorPallete.style.borderRadius = "10px";
        colorPallete.style.backgroundColor = "white";
        colorPallete.style.display = "flex";
        colorPallete.style.justifyContent = "space-around";
        colorPallete.style.alignItems = "center";
        document.body.appendChild(colorPallete);

        for(let i = 0; i <= 9; i++) {

            if (i === 0) {
                let eraser = document.createElement("img");
                eraser.src = "../../../content/01_layout/tela_04_desenhar/botoes/borracha.png";
                eraser.style.height = "80%";
                eraser.style.width = "8%";
                eraser.style.borderRadius = "10px";
                eraser.style.margin = "1%";
                eraser.style.cursor = "pointer";
                eraser.classList.add("eraser");
                eraser.addEventListener("click", () => {
                    GameData.currentColor = "white";
                });
                colorPallete.appendChild(eraser);
            } else {
                let currentColor = document.createElement("div");

                switch(i) {
                    case 1:
                        currentColor.style.backgroundColor = "red";
                        break;
                    case 2:
                        currentColor.style.backgroundColor = "orange";
                        break;
                    case 3:
                        currentColor.style.backgroundColor = "yellow";
                        break;
                    case 4:
                        currentColor.style.backgroundColor = "green";
                        break;
                    case 5:
                        currentColor.style.backgroundColor = "rgba(135, 206, 235, 1)";
                        break;
                    case 6:
                        currentColor.style.backgroundColor = "purple";
                        break;
                    case 7:
                        currentColor.style.backgroundColor = "white";
                        break;
                    case 8:
                        currentColor.style.backgroundColor = "brown";
                        break;
                    case 9:
                        currentColor.style.backgroundColor = "black";
                        break;
                }
                currentColor.style.height = "80%";
                currentColor.style.width = "8%";
                currentColor.style.borderRadius = "10px";
                currentColor.classList.add("color");
                currentColor.style.border = "1px solid lightgray";
                currentColor.style.margin = "1%";
                currentColor.style.cursor = "pointer";
                currentColor.addEventListener("click", () => {
                    GameData.currentColor = currentColor.style.backgroundColor;
                });
                colorPallete.appendChild(currentColor);
            }

        }
    },

    /**RETURN BUTTON STUFF */
    insertReturnButton: () => {
        let returnButton = document.createElement("img");
        returnButton.classList.add("return_button");
        returnButton.src = "../../../content/01_layout/tela_02_videos/01_layout/botao_voltar.png";
        returnButton.style.position = "absolute";
        returnButton.addEventListener("click", () => { location.href = "/../../../index.html" });
        returnButton.style.top = `${window.innerHeight * 0.82 / window.innerHeight * 100}%`;
        returnButton.style.left = `${window.innerWidth * 0.04 / window.innerWidth * 100}%`;
        returnButton.style.width = `${window.innerWidth * 0.07 / window.innerWidth * 100}%`;
        returnButton.style.zIndex = 999;
        document.body.appendChild(returnButton);
    }
};

GameData.createBackground("/content/01_layout/tela_02_videos/01_layout/cenario.png");

GameData.insertReturnButton();
GameData.createBrushPallete();
GameData.createDrawingCanvas();
GameData.createColorPallete();

window.addEventListener('resize', () => { location.reload() });
window.addEventListener('load', () => {
    let canvas = document.querySelector(".drawing_canvas");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});
window.addEventListener("mousemove", (e) => {
    if(GameData.currentTool === "brush" && GameData.canDraw) {
        GameData.drawInCanvas(e.offsetX, e.offsetY);
    }
}, false);
window.addEventListener("mousedown", () => {
    GameData.canDraw = true;
}, false);
window.addEventListener("mouseup", () => {
    GameData.canDraw = false;
}, false);

window.addEventListener("touchmove", (e) => {
    if(GameData.currentTool === "brush" && GameData.canDraw) {

        GameData.drawInCanvas(e.touches[0].clientX - 100, e.touches[0].clientY);
    }
}, false);
window.addEventListener("touchstart", () => {
    GameData.canDraw = true;
}, false);
window.addEventListener("touchend", () => {
    GameData.canDraw = false;
}, false);