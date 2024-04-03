
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

        img1.style.width = `${window.innerWidth * 0.11}px`;
        img1.style.height = `${window.innerHeight * 0.15}px`;

        img2.style.width = `${window.innerWidth * 0.25}px`;
        img2.style.height = `${window.innerHeight * 0.15}px`;

        img1.style.position = "absolute";
        img1.style.top = `${window.innerHeight * 0.1}px`;
        img1.style.left = `${window.innerWidth * 0.3}px`;
        document.body.appendChild(img1);

        img2.style.position = "absolute";
        img2.style.top = `${window.innerHeight * 0.10}px`;
        img2.style.left = `${window.innerWidth * 0.43}px`;
        document.body.appendChild(img2);
    },
    insertBoxWithVideos: () => {

        const insertEmptyBox = () => {
            let box = document.createElement("div");
            box.style.position = "absolute";
            box.id = "videos_box";
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

        const insertVideo = (id, src, width, height, backgroundColor, videoThumbnail, title) => {

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
    
                let videosBox = document.getElementById("videos_box");
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
                let video_container = document.getElementById(id);
                video_container.appendChild(thumbnail);

                let videoTitle = document.createElement("p");
                videoTitle.textContent = title;
                videoTitle.style.marginTop = "5px";
                videoTitle.style.color = "darkblue";
                videoTitle.style.fontWeight = "bold";
                videoTitle.style.fontFamily = "Arial";
                videoTitle.style.fontSize = "0.8em";
                videoTitle.style.textAlign = "center";

                video_container.appendChild(videoTitle);
            };
            insertThumbnailAndTitle();

        };
        insertVideo("video_container_1", "/content/01_layout/tela_02_videos/01_layout/cenario.png", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_02_videos/02_previews/barata.png", "A Barata Diz Que Tem");
        insertVideo("video_container_2", "/content/01_layout/tela_02_videos/01_layout/cenario.png", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_02_videos/02_previews/pirulito.png", "Pirulito Que Bate Bate");
        insertVideo("video_container_3", "/content/01_layout/tela_02_videos/01_layout/cenario.png", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_02_videos/02_previews/galinha.png", "A Galinha do Vizinho");
        insertVideo("video_container_4", "/content/01_layout/tela_02_videos/01_layout/cenario.png", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_02_videos/02_previews/limao.png", "Meu Limão, Meu Limoeiro");
        insertVideo("video_container_5", "/content/01_layout/tela_02_videos/01_layout/cenario.png", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_02_videos/02_previews/borboletinha.png", "Borboletinha");
        insertVideo("video_container_6", "/content/01_layout/tela_02_videos/01_layout/cenario.png", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_02_videos/02_previews/canoa.png", "A Canoa Virou");
        insertVideo("video_container_7", "/content/01_layout/tela_02_videos/01_layout/cenario.png", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_02_videos/02_previews/sapo.png", "O Sapo");
        insertVideo("video_container_8", "/content/01_layout/tela_02_videos/01_layout/cenario.png", `${window.innerWidth * 0.2}px`, `${window.innerHeight * 0.25}px`, "", "/content/01_layout/tela_02_videos/02_previews/indio.png", "Indiozinhos");

        

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
GameData.insertVideoButton();
GameData.insertBoxWithVideos();
GameData.insertReturnButton();

window.addEventListener('resize', () => { location.reload() });
