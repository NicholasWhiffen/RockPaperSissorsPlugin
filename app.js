$("#rps_game").rockPaperSissors({
    image1: {
        name: "Rock",
        src: "assets/image1.jpeg"
    },
    image2: {
        name: "Paper",
        src: "assets/image2.jpeg"
    },
    image3: {
        name: "Sissors",
        src: "assets/image3.jpeg"
    },
    winSound: {
        src: "assets\\winSound.mp3"
    },
    $gameDiv: {
        backgroundcolor: "rgb(136, 99, 255)"
    },
    buttons: {
        backgroundcolor: "rgb(88, 62, 176)",
        color: "white",
    },
    imageCaption: {
        color: "white"
    },
    score: {
        color: "white"
    },
    win: function(){
        console.log("win");
    }
});