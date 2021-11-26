(function($) {
    $.fn.rockPaperSissors = function(options){

        var settings = $.extend({
        $gameDiv: 'rgba(0, 0, 0, 0.5)',
            closeButton: {
                src: null,
                width: "30px",
                height: "30px"
            },
            imageBorder: "5px solid #ffffff",
            borderRadius: "5px",
            imageWidth: "100px",
            imageHeight: "100px",
            imageCaption: {
                exist: true,
                color: "#ffffff",
                fontSize: "20px"
            },
            open: null,
            close: null
        }, options)

        /**
         * Iterating through image gallery
         */
        return this.each(function(){
            /**
             * Declaring new elements variables
             */
            var $gameDiv, $image1, $image2, $imageCaption, html;
            let gameAmount = 0;
            setGameStart()
            

            function playGame (){
                let gamesPlayed = 0;
                let wins = 0;
                while(gamesPlayed != gameAmount){
                    $("button").click(function() {
                        let opponentChoice = Math.floor(Math.random() * 3) + 1;
                        let results = compareChoice(parseInt($(this).val(), opponentChoice));
                        if(results == 1){
                            wins += 1;
                            gamesPlayed += 1;
                        }
                    });
                }
            }

            function compareChoice(pChoice, oChoice){
                // Results meaning: 0-Lose 1-Win 2-Tie
                if(pChoice == 1){
                    if(oChoice == 1){
                        return 2;
                    }else if(oChoice == 2){
                        return 0;
                    } else{
                        return 1;
                    }
                }else if(pChoice == 2){
                    if(oChoice == 2){
                        return 2;
                    }else if(oChoice == 3){
                        return 0;
                    } else{
                        return 1;
                    }
                }else if(pChoice == 3){
                    if(oChoice == 3){
                        return 2;
                    }else if(oChoice == 1){
                        return 0;
                    } else{
                        return 1;
                    }
                }
            };

            function setGameProperties(){
                $gameDiv = $("#rps_game");
                $gameDiv.empty();
                html = ('<img src="images\\question.png" id="player1" alt="Item 1">\
                <img src="images\\question.png" id="player2" alt="Item 2">\
                <br>\
                <div id="choices">\
                    <button type="button" id="1" value="1">Rock</button>\
                    <button type="button" id="2" value="2">Paper</button>\
                    <button type="button" id="3" value="3">Sissors</button>\
                </div>');
                $gameDiv.append(html);
                $("img").css({
                    "width": settings.imageWidth,
                    "height": settings.imageHeight,
                    "border": settings.imageBorder,
                    "border-radius": settings.borderRadius
                });

                $gameDiv.css({
                    "text-align": "center",
                });
            };

            function setGameStart(){
                $gameDiv = $("#rps_game");
                $gameDiv.empty();
                $gameDiv.append('<button type="button" id="1game" value="1">Best of 1</button>');
                $gameDiv.append('<button type="button" id="3game" value="3">Best of 3</button>');
                $gameDiv.append('<button type="button" id="5game" value="5">Best of 5</button>');
                $("button").click(function() {
                    if (parseInt($(this).val()) == 1){
                        gameAmount = 1;
                    }else if(parseInt($(this).val()) == 3){
                        gameAmount = 3;
                    }else if(parseInt($(this).val()) == 5){
                        gameAmount = 5;
                    }
                    console.log(gameAmount);
                    setGameProperties();
                });
                
            }
        })
    }
}(jQuery))