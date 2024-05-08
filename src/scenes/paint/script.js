
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
    insertPaintButton: () => {
        let img1 = document.getElementById("botao_paleta");
        let img2 = document.getElementById("pintar");

        img1.addEventListener("click", () => {location.href = "/src/scenes/videos/index.html"});
        img2.addEventListener("click", () => {location.href = "/src/scenes/videos/index.html"});

        img1.style.width = `11%`;
        img1.style.height = `18%`;

        img2.style.width = `30%`;
        img2.style.height = `15%`;

        img1.style.position = "absolute";
        img1.style.top = `7%`;
        img1.style.left = `30%`;
        document.body.appendChild(img1);

        img2.style.position = "absolute";
        img2.style.top = `10%`;
        img2.style.left = `43%`;
        document.body.appendChild(img2);
    },
    insertBoxWithPaintings: () => {

        const insertEmptyBox = () => {
            let box = document.createElement("div");
            box.style.position = "absolute";
            box.id = "painting_box";
            box.style.top = `30%`;
            box.style.left = `8%`;
            box.style.width = `85%`;
            box.style.height = `55%`;
            box.style.display = "flex";
            box.style.flexWrap = "wrap";
            box.style.gap = `0%`;
            box.style.justifyContent = "space-around";
            box.style.alignContent = "space-between";
            document.body.appendChild(box);
        };
        insertEmptyBox();

        const insertPainting = (id, width, height, backgroundColor, videoThumbnail, title, link) => {

            const insertContainer = () => {
                let videoContainer = document.createElement("div");
                videoContainer.id = id;
                videoContainer.style.width = `22%`;
                videoContainer.style.height = `44%`;
                videoContainer.style.backgroundColor = "black";
                videoContainer.style.display = "flex";
                videoContainer.style.flexDirection = "column";
                videoContainer.style.justifyContent = "center";
                videoContainer.style.backgroundColor = backgroundColor;

                let videosBox = document.getElementById("painting_box");
                videosBox.appendChild(videoContainer);
            }
            insertContainer();

            const insertThumbnailAndTitle = () => {

                let thumbnail = document.createElement("img");
                thumbnail.id = "thumbnail";
                thumbnail.src = videoThumbnail;
                thumbnail.style.width = "100%";
                thumbnail.style.height = "80%";
                thumbnail.style.objectFit = "cover";
                thumbnail.style.cursor = "pointer";
                thumbnail.addEventListener("click", () => {
                    location.href = link;
                });
                let paint_container = document.getElementById(id);
                paint_container.appendChild(thumbnail);

                let paintTitle = document.createElement("p");
                paintTitle.textContent = title;
                paintTitle.style.marginTop = "5px";
                paintTitle.style.color = "darkblue";
                paintTitle.style.fontWeight = "bold";
                paintTitle.style.fontFamily = "Comic Neue";
                paintTitle.style.fontSize = "10pt";
                paintTitle.style.textAlign = "center";

                paint_container.appendChild(paintTitle);
            };
            insertThumbnailAndTitle();

        };
        insertPainting("paint_container_1", `50%`, `22%`, "", "/content/01_layout/tela_03_pintar/01_previews/barata.png", "A Barata Diz Que Tem", "/src/scenes/paint/barata/index.html");
        insertPainting("paint_container_2", `50%`, "22%", "", "/content/01_layout/tela_03_pintar/01_previews/pirulito.png", "Pirulito Que Bate Bate", "/src/scenes/paint/pirulito/index.html");
        insertPainting("paint_container_3", `50%`, `22%`, "", "/content/01_layout/tela_03_pintar/01_previews/galinha.png", "A Galinha do Vizinho", "/src/scenes/paint/galinha/index.html");
        insertPainting("paint_container_4", `50%`, `22%`, "", "/content/01_layout/tela_03_pintar/01_previews/limao.png", "Meu Limão, Meu Limoeiro", "/src/scenes/paint/limao/index.html");
        insertPainting("paint_container_5", `50%`, `22%`, "", "/content/01_layout/tela_03_pintar/01_previews/borboletinha.png", "Borboletinha", "/src/scenes/paint/borboleta/index.html");
        insertPainting("paint_container_6", `50%`, `22%`, "", "/content/01_layout/tela_03_pintar/01_previews/canoa.png", "A Canoa Virou", "/src/scenes/paint/peixe/index.html");
        insertPainting("paint_container_7", `50%`, `22%`, "", "/content/01_layout/tela_03_pintar/01_previews/sapo.png", "O Sapo", "/src/scenes/paint/sapo/index.html");

        

    },
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
GameData.insertPaintButton();
GameData.insertBoxWithPaintings();
GameData.insertReturnButton();

window.addEventListener('resize', () => { location.reload() });