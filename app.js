$("#rps_game").rockPaperSissors({
    image1: {
        name: "rock",
        src: "images/image1.jpeg"
    },
    image2: {
        name: "paper",
        src: "images/image2.jpeg"
    },
    image3: {
        name: "sissors",
        src: "images/image3.jpeg"
    },
    $gameDiv: {
        width:  "400px",
        height : "300px",
        border: "5px solid black",
        padding: "50px"
    },
    imageBorder: "15px solid #ffffff",
    borderRadius: "10px",
    imageWidth: "100px",
    imageHeight: "100px",
    imageCaption: {
        exist: true,
        color: "#ffffff",
        fontSize: "40px"
    }
});