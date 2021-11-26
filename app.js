$("#rps_game").rockPaperSissors({
    overlay: 'rgba(0, 100, 0, 0.5)',
    closeButton: {
        src: "images/close.png",
        width: "100px",
        height: "100px"
    },
    imageBorder: "15px solid #ffffff",
    borderRadius: "10px",
    imageWidth: "100px",
    imageHeight: "100px",
    imageCaption: {
        exist: true,
        color: "#ffffff",
        fontSize: "40px"
    },
    open: function(){
        console.log("opened");
    },
    close: function(){
        console.log("closed");
    }
});