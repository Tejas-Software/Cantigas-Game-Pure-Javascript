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
        returnButton.addEventListener("click", () => { location.href = "../index.html" });
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
    },
    printDivWithWatermark: () => {
        // Crie uma nova janela
        let printWindow = window.open('', '_blank');
    
        // Obtenha o conteúdo da div
        let divContent = document.getElementById('myCanvas').innerHTML;
    
        // Adicione a marca d'água
        divContent += '<img src="../../../../content/click_ideia_logo.jpg" style="position: absolute; bottom: 0%; left: 0%; opacity: 0.5; transform:scale(0.9);">';
    
        // Escreva o conteúdo na nova janela
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('<style>@page { size: A4; } body { width: 210mm; height: 297mm; margin: 0; } .paintingDrawning { width: 210mm; } svg { width: 100%; height: 100%; }</style>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(divContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close(); // Feche o fluxo de escrita do documento
    
        // Certifique-se de que o conteúdo foi carregado antes de imprimir
        printWindow.onload = function() {
            printWindow.print();
            printWindow.close();

        };
    }
    


};

const StartGame = () => {
    window.addEventListener('resize', () => { location.reload() });
    const configureElements = () => {
        GameData.element1 = document.getElementById("1");
        GameData.element2 = document.getElementById("2");
        GameData.element3 = document.getElementById("3");
        GameData.element4 = document.getElementById("4");
        GameData.element5 = document.getElementById("5");
        GameData.element6 = document.getElementById("6");
        GameData.element7 = document.getElementById("7");
        GameData.element8 = document.getElementById("8");
        GameData.element9 = document.getElementById("9");
        GameData.element10 = document.getElementById("10");
        GameData.element11 = document.getElementById("11");
        GameData.element12 = document.getElementById("12");
        GameData.element13 = document.getElementById("13");
        GameData.element14 = document.getElementById("14");
        GameData.element15 = document.getElementById("15");
        GameData.element16 = document.getElementById("16");
        GameData.element17 = document.getElementById("17");
        GameData.element18 = document.getElementById("18");
        GameData.element19 = document.getElementById("19");
        GameData.element20 = document.getElementById("20");
        GameData.element21 = document.getElementById("21");
        GameData.element22 = document.getElementById("22");
        GameData.element23 = document.getElementById("23");
        GameData.element24 = document.getElementById("24");
        GameData.element25 = document.getElementById("25");
        GameData.element26 = document.getElementById("26");
        GameData.element27 = document.getElementById("27");
        GameData.element28 = document.getElementById("28");
        GameData.element29 = document.getElementById("29");
        GameData.element30 = document.getElementById("30");
        GameData.element31 = document.getElementById("31");
        GameData.element32 = document.getElementById("32");
        GameData.element33 = document.getElementById("33");
        GameData.element34 = document.getElementById("34");
        GameData.element35 = document.getElementById("35");
        GameData.element36 = document.getElementById("36");
        GameData.element37 = document.getElementById("37");
        GameData.element38 = document.getElementById("38");
        GameData.element39 = document.getElementById("39");
        GameData.element40 = document.getElementById("40");




        GameData.elements = [GameData.element1, GameData.element2, GameData.element3, GameData.element4, GameData.element5, GameData.element6, GameData.element7, GameData.element8, GameData.element9, GameData.element10, GameData.element11, GameData.element12, GameData.element13, GameData.element14, GameData.element15, GameData.element16, GameData.element17, GameData.element18, GameData.element19, GameData.element20, GameData.element21, GameData.element22, GameData.element23, GameData.element24, GameData.element25, GameData.element26, GameData.element27, GameData.element28, GameData.element29, GameData.element30, GameData.element31, GameData.element32, GameData.element33, GameData.element34, GameData.element35, GameData.element36, GameData.element37, GameData.element38, GameData.element39, GameData.element40];
    }
    configureElements();
    const configureClicks = () => {
        const buttonPrint = document.getElementById("printArea");
        buttonPrint.addEventListener("click", () => {
            GameData.printDivWithWatermark();
        });
    }
    configureClicks();
    GameData.createBackground("/content/01_layout/tela_02_videos/01_layout/cenario.png");
    GameData.insertReturnButton();
    GameData.configureElementsToPaint();

}
StartGame();


