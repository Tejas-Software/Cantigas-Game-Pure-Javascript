
const GameData = {
    createBackground: (src) => {
        document.body.style.backgroundImage = `url('${src}')`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundSize = 'cover';
        document.body.style.height = window.innerHeight;
        document.body.style.width = window.innerWidth;
    },
    insertPaintButton: () => {
        let img1 = document.getElementById("botao_paleta");
        let img2 = document.getElementById("pintar");

        img1.addEventListener("click", () => {location.href = "/src/scenes/videos/index.html"});
        img2.addEventListener("click", () => {location.href = "/src/scenes/videos/index.html"});

        img1.style.width = `${window.innerWidth * 0.09}px`;
        img1.style.height = `${window.innerHeight * 0.18}px`;

        img2.style.width = `${window.innerWidth * 0.5}px`;
        img2.style.height = `${window.innerHeight * 0.15}px`;

        img1.style.position = "absolute";
        img1.style.top = `${window.innerHeight * 0.07}px`;
        img1.style.left = `${window.innerWidth * 0.2}px`;
        document.body.appendChild(img1);

        img2.style.position = "absolute";
        img2.style.top = `${window.innerHeight * 0.10}px`;
        img2.style.left = `${window.innerWidth * 0.33}px`;
        document.body.appendChild(img2);
    },
    insertBoxWithPaintings: () => {

        const insertEmptyBox = () => {
            let box = document.createElement("div");
            box.style.position = "absolute";
            box.id = "painting_box";
            box.style.top = `${window.innerHeight * 0.3}px`;
            box.style.left = `${window.innerWidth * 0.08}px`;
            box.style.width = `${window.innerWidth * 0.85}px`;
            box.style.height = `${window.innerHeight * 0.55}px`;
            box.style.display = "flex";
            box.style.flexWrap = "wrap";
            box.style.gap = `${window.innerWidth * 0.0}px`;
            box.style.justifyContent = "space-around";
            box.style.alignContent = "space-between";
            document.body.appendChild(box);
        };
        insertEmptyBox();

        const insertPainting = (id, width, height, backgroundColor, videoThumbnail, title) => {

            const insertContainer = () => {
                let videoContainer = document.createElement("div");
                videoContainer.id = id;
                videoContainer.style.width = width;
                videoContainer.style.height = height;
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
                    // Handle thumbnail click event
                });
                let paint_container = document.getElementById(id);
                paint_container.appendChild(thumbnail);

                let paintTitle = document.createElement("p");
                paintTitle.textContent = title;
                paintTitle.style.marginTop = "5px";
                paintTitle.style.color = "darkblue";
                paintTitle.style.fontWeight = "bold";
                paintTitle.style.fontFamily = "Comic Neue";
                paintTitle.style.fontSize = "0.6em";
                paintTitle.style.textAlign = "center";

                paint_container.appendChild(paintTitle);
            };
            insertThumbnailAndTitle();

        };
        insertPainting("paint_container_1", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_03_pintar/01_previews/barata.png", "A Barata Diz Que Tem");
        insertPainting("paint_container_2", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_03_pintar/01_previews/pirulito.png", "Pirulito Que Bate Bate");
        insertPainting("paint_container_3", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_03_pintar/01_previews/galinha.png", "A Galinha do Vizinho");
        insertPainting("paint_container_4", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_03_pintar/01_previews/limao.png", "Meu Limão, Meu Limoeiro");
        insertPainting("paint_container_5", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_03_pintar/01_previews/borboletinha.png", "Borboletinha");
        insertPainting("paint_container_6", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_03_pintar/01_previews/canoa.png", "A Canoa Virou");
        insertPainting("paint_container_7", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_03_pintar/01_previews/sapo.png", "O Sapo");
        insertPainting("paint_container_8", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_03_pintar/01_previews/jacare.png", "Indiozinhos");

        

    },
    insertReturnButton: () => {
        let returnButton = document.createElement("img");
        returnButton.classList.add("return_button");
        returnButton.src = "../../../content/01_layout/tela_02_videos/01_layout/botao_voltar.png";
        returnButton.style.position = "absolute";
        returnButton.addEventListener("click", () => { location.href = "/../../../index.html" });
        returnButton.style.top = `${window.innerHeight * 0.82}px`;
        returnButton.style.left = `${window.innerWidth * 0.04}px`;
        returnButton.style.width = `${window.innerWidth * 0.07}px`;
        returnButton.style.zIndex = 999;
        document.body.appendChild(returnButton);
    }
};

GameData.createBackground("/content/01_layout/tela_02_videos/01_layout/cenario.png");
GameData.insertPaintButton();
GameData.insertBoxWithPaintings();
GameData.insertReturnButton();

window.addEventListener('resize', () => { location.reload() });
