
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
    brushSize: 1,
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
                GameData.alterCanvasCursorSize(i);
                console.log(GameData.brushSize)
            });
            brushPallete.appendChild(currentBrush);
        }
    },

    /**CANVAS STUFF */
    ctx: null,
    canDraw: false,
    drawingCanvas: document.createElement("canvas"),
    drawInCanvas: (x, y) => {

        ctx.beginPath();

        if(window.innerHeight > 450 && GameData.brushSize === 1 ) {
        ctx.arc(x + 5, y + 5, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        if(window.innerHeight > 450 && GameData.brushSize === 2 ) {
            ctx.arc(x + 10, y + 10, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        if(window.innerHeight > 450 && GameData.brushSize === 3 ) {
            ctx.arc(x + 15, y + 15, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        if(window.innerHeight > 450 && GameData.brushSize === 4 ) {
            ctx.arc(x + 20, y + 20, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        if(window.innerHeight > 450 && GameData.brushSize === 5 ) {
            ctx.arc(x + 25, y + 25, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        if(window.innerHeight > 450 && GameData.brushSize === 6 ) {
            ctx.arc(x + 20, y + 20, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        /****************************MOBILE**********/

        if(window.innerHeight <= 450 && GameData.brushSize === 1) {
            ctx.arc(x + 5, y - 30, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        if(window.innerHeight <= 450 && GameData.brushSize === 2) {
            ctx.arc(x + 5, y - 30, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        if(window.innerHeight <= 450 && GameData.brushSize === 3) {
            ctx.arc(x + 5, y - 30, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        if(window.innerHeight <= 450 && GameData.brushSize === 4) {
            ctx.arc(x + 5, y - 30, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        if(window.innerHeight <= 450 && GameData.brushSize === 5) {
            ctx.arc(x + 5, y - 30, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 

        if(window.innerHeight <= 450 && GameData.brushSize === 6) {
            ctx.arc(x + 5, y - 30, GameData.brushSize * 5, 0, 2 * Math.PI);
        } 



        ctx.fillStyle = GameData.currentColor;
        ctx.fill();
    },
    createCanvasCursor: () => {
        let cursor = document.createElement("div");
        cursor.classList.add("cursor");
        cursor.style.position = "absolute";
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        cursor.style.userSelect= "none";
        cursor.style.borderRadius = "50%";
        cursor.style.backgroundColor = "black";
        cursor.style.zIndex = 999;
        cursor.style.pointerEvents = "none"; // Add this line
        document.body.appendChild(cursor);
        document.body.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
    },
    showCanvasCursor: () => {
        let cursor = document.querySelector(".cursor");
        cursor.style.display = "block";
    },
    hideCanvasCursor: () => {
        let cursor = document.querySelector(".cursor");
        cursor.style.display = "none";
    },
    alterCanvasCursorSize: (size) => {
        let cursor = document.querySelector(".cursor");
        cursor.style.height = `${size}0px`;
        cursor.style.width = `${size}0px`;
        cursor.style.borderRadius = "50%";
    },
    alterCanvasCursorColor: (color) => {
        let cursor = document.querySelector(".cursor");
        cursor.style.backgroundColor = color;
        if(color === "white") {
            cursor.style.border = "1px solid black";
        } else {
            cursor.style.border = "none";
        }
    },
    createDrawingCanvas: () => {
        GameData.drawingCanvas.classList.add("drawing_canvas");
        ctx = GameData.drawingCanvas.getContext("2d");
        GameData.drawingCanvas.style.position = "absolute";
        GameData.drawingCanvas.style.top = "8%";
        GameData.drawingCanvas.style.left = "12%";
        GameData.drawingCanvas.style.width = "83%";
        GameData.drawingCanvas.style.cursor = "none";
        GameData.drawingCanvas.style.borderRadius = "10px";
        GameData.drawingCanvas.style.height = "70%";
        GameData.drawingCanvas.style.backgroundColor = "white";
        document.body.appendChild(GameData.drawingCanvas);

        GameData.drawingCanvas.addEventListener("mousemove", (e) => {
            if(GameData.currentTool === "brush" && GameData.canDraw) {
                GameData.drawInCanvas(e.offsetX, e.offsetY);
            }
        }, false);

        GameData.drawingCanvas.addEventListener("mouseenter", (e) => {
            if(GameData.currentTool === "brush" && GameData.canDraw) {
                GameData.drawInCanvas(e.offsetX, e.offsetY);
                GameData.hideCanvasCursor();
            } else {
                GameData.showCanvasCursor();
            }
            
        }, false);
        GameData.drawingCanvas.addEventListener("mousedown", () => {
            GameData.canDraw = true;
            GameData.hideCanvasCursor();

                let printButton = document.querySelector(".print_button");
                printButton.style.pointerEvents = "none";
        }, false);
        GameData.drawingCanvas.addEventListener("mouseup", () => {
            GameData.canDraw = false;
            GameData.showCanvasCursor();

            let printButton = document.querySelector(".print_button");
            printButton.style.pointerEvents = "all";
        }, false);
        

        GameData.drawingCanvas.addEventListener("touchmove", (e) => {
            if(GameData.currentTool === "brush" && GameData.canDraw) {
        
                GameData.drawInCanvas(e.touches[0].clientX - 100, e.touches[0].clientY);
            }
        }, false);
        GameData.drawingCanvas.addEventListener("touchstart", () => {
            GameData.canDraw = true;
            if(GameData.currentTool === "brush" && GameData.canDraw) {
        
                if(e){
                    GameData.drawInCanvas(e.touches[0].clientX - 100, e.touches[0].clientY);
                }
            }
        }, false);
    },
    printCanvasWithWatermark: () => {

        let printWindow = window.open('', '_blank');
        let canvas = document.querySelector(".drawing_canvas");
        let dataURL = canvas.toDataURL();
        let img = new Image();
        img.src = dataURL;
    
        let watermark = new Image();
        watermark.src = "https://media.licdn.com/dms/image/C510BAQHiDc9diNIDGg/company-logo_200_200/0/1631379679960?e=2147483647&v=beta&t=ongRAZYSUMib7IP8VTPSnXyTUoV46UuQ7FHFrEzSn04";
    
        let imagesLoaded = 0;
    
        let printWhenImagesLoaded = () => {
            imagesLoaded++;
            if (imagesLoaded === 2) {
                printWindow.print();
                printWindow.close();
            }
        };
    
        img.onload = printWhenImagesLoaded;
        watermark.onload = printWhenImagesLoaded;
    
        printWindow.document.write('<img src="' + img.src + '"/>');
        printWindow.document.write('<img src="https://media.licdn.com/dms/image/C510BAQHiDc9diNIDGg/company-logo_200_200/0/1631379679960?e=2147483647&v=beta&t=ongRAZYSUMib7IP8VTPSnXyTUoV46UuQ7FHFrEzSn04" style="position: absolute; bottom: 0%; left: 0%; opacity: 0.5;">');

        
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
                    GameData.alterCanvasCursorColor("white");
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
                        currentColor.style.backgroundColor = "rgba(66, 38, 0, 1)";
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
                    GameData.alterCanvasCursorColor(GameData.currentColor);
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
        returnButton.style.width = `${window.innerWidth * 0.07 / window.innerWidth * 70}%`;
        returnButton.style.zIndex = 999;
        document.body.appendChild(returnButton);
    },
    insertPrintButton: () => {
        let printButton = document.createElement("img");
        printButton.classList.add("print_button");
        printButton.src = "../../../content/01_layout/tela_04_desenhar/botoes/botao_imprimir.png";
        printButton.style.position = "absolute";
        printButton.addEventListener("click", () => { GameData.printCanvasWithWatermark(); });
        printButton.style.top = `${window.innerHeight * 0.82 / window.innerHeight * 10}%`;
        printButton.style.left = `${window.innerWidth * 0.89 / window.innerWidth * 100}%`;
        printButton.style.width = `${window.innerWidth * 0.07 / window.innerWidth * 70}%`;
        printButton.style.zIndex = 999;
        document.body.appendChild(printButton);
    }
};

GameData.createBackground("/content/01_layout/tela_02_videos/01_layout/cenario.png");

GameData.insertReturnButton();
GameData.createBrushPallete();
GameData.createDrawingCanvas();
GameData.createColorPallete();
GameData.insertPrintButton();
if(window.innerHeight > 450) {
    GameData.createCanvasCursor();
}


window.addEventListener('resize', () => { location.reload() });
window.addEventListener('load', () => {
    let canvas = document.querySelector(".drawing_canvas");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

window.addEventListener("touchend", () => {
    GameData.canDraw = false;
}, false);

window.addEventListener("mouseup", () => {
    GameData.canDraw = false;
}, false);