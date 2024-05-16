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
    createVideoOverlayLayout: () => {
        let overlay = document.createElement("img");
        overlay.src = "../../../../content/01_layout/tela_02_videos/03_videos/00_layout_video/video_layout_azul.png";
        overlay.style.position = "absolute";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.zIndex = 1000;
        document.body.appendChild(overlay);
        
    },
    insertCloseButton: () => {
        let returnButton = document.createElement("img");
        returnButton.classList.add("return_button");
        returnButton.src = "../../../../content/01_layout/tela_02_videos/03_videos/00_layout_video/botao_fechar.png";
        returnButton.style.position = "absolute";
        returnButton.addEventListener("click", () => { location.href = "../index.html" });
        returnButton.style.top = `${window.innerHeight * 0.82 / window.innerHeight * 3}%`;
        returnButton.style.left = `${window.innerWidth * 0.93 / window.innerWidth * 100}%`;
        returnButton.style.width = `${window.innerWidth * 0.07 / window.innerWidth * 70}%`;
        returnButton.style.zIndex = 1001;
        document.body.appendChild(returnButton);
    },
    insertPlayButton: () => {
    let video = document.querySelector("video");
    let playButton = document.createElement("img");
    playButton.classList.add("play_button");
    playButton.src = "../../../../content/01_layout/tela_02_videos/03_videos/00_layout_video/botao_play.png";
    playButton.style.position = "absolute";
    playButton.style.bottom = `${window.innerHeight * 0.82 / window.innerHeight * 3}%`;
    playButton.style.right = `${window.innerWidth * 0.93 / window.innerWidth * 100}%`;
    playButton.style.width = `${window.innerWidth * 0.05 / window.innerWidth * 70}%`;
    playButton.style.zIndex = 1001;
    document.body.appendChild(playButton);

    video.addEventListener("play", () => {
        playButton.src = "../../../../content/01_layout/tela_02_videos/03_videos/00_layout_video/botao_pausa.png";
    });

    video.addEventListener("pause", () => {
        playButton.src = "../../../../content/01_layout/tela_02_videos/03_videos/00_layout_video/botao_play.png";
    });

    playButton.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
    );

















    },
    insertVolumeButton: () => {

        let volumeButton = document.createElement("img");
        volumeButton.classList.add("volume_button");
        volumeButton.src = "../../../../content/01_layout/tela_02_videos/03_videos/00_layout_video/botao_audio_on.png";
        volumeButton.style.position = "absolute";
        volumeButton.style.bottom = `${window.innerHeight * 0.2 / window.innerHeight * 3}%`;
        volumeButton.style.right = `${window.innerWidth * 0.88 / window.innerWidth * 100}%`;
        volumeButton.style.width = `${window.innerWidth * 0.04 / window.innerWidth * 70}%`;
        volumeButton.style.zIndex = 1001;
        document.body.appendChild(volumeButton);

        volumeButton.addEventListener("click", () => {
            let video = document.querySelector("video");
            if (video.muted) {
                video.muted = false;
                volumeButton.src = "../../../../content/01_layout/tela_02_videos/03_videos/00_layout_video/botao_audio_on.png";
                let volumeJuice = document.querySelector(".volume_juice");
                volumeJuice.style.width = `${video.volume * 100}%`;
            } else {
                video.muted = true;
                volumeButton.src = "../../../../content/01_layout/tela_02_videos/03_videos/00_layout_video/botao_audio_off.png";
                let volumeJuice = document.querySelector(".volume_juice");
                volumeJuice.style.width = "0%";
            }
        });
    },
    insertProgressBar: () => {

        let progressBar = document.createElement("div");
        progressBar.classList.add("progress_bar");
        progressBar.style.position = "absolute";
        progressBar.style.bottom = `${window.innerHeight * 3 / window.innerHeight * 2.7}%`;
        progressBar.style.left = `${window.innerWidth * 0.1 / window.innerWidth * 100}%`;
        progressBar.style.width = `${window.innerWidth * 0.8 / window.innerWidth * 100}%`;
        progressBar.style.height = `${window.innerHeight * 0.05 / window.innerHeight * 40}%`;
        progressBar.style.backgroundColor = "gray";
        progressBar.style.zIndex = 1001;

        let progressJuice = document.createElement("div");
        progressJuice.classList.add("progress_juice");
        progressJuice.style.backgroundColor = "#019BFD";
        progressJuice.style.width = "0%";
        progressJuice.style.height = "100%";



        progressBar.appendChild(progressJuice);
        document.body.appendChild(progressBar);
    },
    insertVolumeBar: () => {
        let volumeBar = document.createElement("div");
        volumeBar.classList.add("volume_bar");
        volumeBar.style.position = "absolute";
        volumeBar.style.bottom = `${window.innerHeight * 0.75 / window.innerHeight * 3}%`;
        volumeBar.style.left = `${window.innerWidth * 0.13 / window.innerWidth * 100}%`;
        volumeBar.style.width = `${window.innerWidth * 0.15 / window.innerWidth * 70}%`;
        volumeBar.style.height = `${window.innerHeight * 0.05 / window.innerHeight * 40}%`;
        volumeBar.style.backgroundColor = "gray";
        volumeBar.style.zIndex = 1001;

        let volumeJuice = document.createElement("div");
        volumeJuice.classList.add("volume_juice");
        volumeJuice.style.backgroundColor = "#019BFD";
        volumeJuice.style.width = "80%";
        volumeJuice.style.height = "100%";

        volumeBar.appendChild(volumeJuice);
        document.body.appendChild(volumeBar);
    },
    configureRunningProgressBar: () => {
        let video = document.querySelector("video");
        let progressBar = document.querySelector(".progress_bar");
        let progressJuice = document.querySelector(".progress_juice");
    
        video.addEventListener("timeupdate", () => {
            let progress = (video.currentTime / video.duration) * 100;
            progressJuice.style.width = `${progress}%`;
        });
    
        progressBar.addEventListener("click", (e) => {
            let clickPosition = e.offsetX;
            let progressBarWidth = progressBar.offsetWidth;
            let clickPositionRatio = clickPosition / progressBarWidth;
            let newTime = clickPositionRatio * video.duration;
            video.currentTime = newTime;
        });
    },
    configureVolumeRunningProgressBar: () => {
        let video = document.querySelector("video");
        let volumeBar = document.querySelector(".volume_bar");
        let volumeJuice = document.querySelector(".volume_juice");
    
        video.volume = 0.5;
    
        volumeBar.addEventListener("click", (e) => {
            let clickPosition = e.offsetX;
            let volumeBarWidth = volumeBar.offsetWidth;
            let clickPositionRatio = clickPosition / volumeBarWidth;
            video.volume = clickPositionRatio;
            volumeJuice.style.width = `${clickPositionRatio * 100}%`;

            if(video.muted){
                video.muted = false;
                let volumeButton = document.querySelector(".volume_button");
                volumeButton.src = "../../../../content/01_layout/tela_02_videos/03_videos/00_layout_video/botao_audio_on.png";
            }
        });
    },


    


};

const StartGame = () => {
    window.addEventListener('resize', () => { location.reload() });


    GameData.insertCloseButton();
    GameData.insertPlayButton();
    GameData.insertVolumeButton();
    GameData.insertProgressBar();
    GameData.insertVolumeBar();
    GameData.configureRunningProgressBar();
    GameData.configureVolumeRunningProgressBar();
    GameData.createVideoOverlayLayout();
}
StartGame();


