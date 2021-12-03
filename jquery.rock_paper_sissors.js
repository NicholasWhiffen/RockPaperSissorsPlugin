"use strict";
(function($) {
    $.fn.rockPaperSissors = function(options){

        var settings = $.extend({
            $gameDiv: {
                width:  "400px",
                border: "5px solid black",
                padding: "100px"
            },
            imageBorder: "5px solid black",
            borderRadius: "5px",
            imageWidth: "100px",
            imageCaption: {
                exist: true,
                color: "#ffffff",
                fontSize: "20px"
            }
        }, options)

        const $gameDiv = $("#rps_game");
        let html;
        let gameAmount = 0;
        let wins = 0;
        let loses = 0;
        let audio = new Audio(settings.winSound.src);

        
        $("#rps_game").on("click", "#gameAmount button", function(event){
            event.preventDefault();
            if (parseInt($(this).val()) == 1){
                gameAmount = 1;
            }else if(parseInt($(this).val()) == 3){
                gameAmount = 3;
            }else if(parseInt($(this).val()) == 5){
                gameAmount = 5;
            }
            setGameProperties();
            
        });
        
        

        $("#rps_game").on("click", "#choices button", function(){
            if(parseInt($(this).val()) == 4){
                setGameStart();
            };
            let opponentChoice = Math.floor(Math.random() * 3) + 1;
            let results = compareChoice(parseInt($(this).val()), opponentChoice);
            if(results == 1){
                wins += 1;
                checkWin();
            }
            else if(results == 0){
                loses += 1;
                checkWin();
            };
                  
        });
        

        function setGameProperties(){
            $gameDiv.empty();
            wins = 0;
            loses = 0;
            html = (`<div id="content">\
            <h3 id="score">0 - 0</h3>\
            <div id="player1">\
            <img src="assets\\question.png" id="img1" alt="Item 1">\
            <br>\
            <span>?</span>\
            </div>\
            <div id="player2">\
            <img src="assets\\question.png" id="img2" alt="Item 2">\
            <br>\
            <span>?</span>\
            </div>\
            
            
            <div id="choices">\
                <button type="button" id="1" value="1">${settings.image1.name}</button>\
                <button type="button" id="2" value="2">${settings.image2.name}</button>\
                <button type="button" id="3" value="3">${settings.image3.name}</button>\
            </div>\
            </div>`);
            $gameDiv.append(html);
            
            $("img").css({
                "border": settings.imageBorder,
                "border-radius": settings.borderRadius
            });
            $("span").css({
                "color": settings.imageCaption.color
            })
            $("#score").css({
                "color": settings.score.color
            });
            $(":button").css({
                "background-color": settings.buttons.backgroundcolor,
                "color": settings.buttons.color,
                "border": settings.buttons.border
            });

        };
        
        function checkWin(){
            $("#score").text(`${wins} - ${loses}`);
            if(wins > (gameAmount/2)){
                $("#score").text(`YOU WIN!`);
                $("#choices").empty();
                $("#choices").append('<button type="button" id="playAgain" value="4">Play Again</button>');
                audio.play();
                settings.win.call(this);

            }else if(loses > (gameAmount/2)){
                $("#score").text(`YOU LOSE:(`);
                $("#choices").empty();
                $("#choices").append('<button type="button" id="playAgain" value="4">Play Again</button>');
    
            }
            $(":button").css({
                "background-color": settings.buttons.backgroundcolor,
                "color": settings.buttons.color,
                "border": settings.buttons.border
            });
        };

        function setGameStart(){
            $gameDiv.empty();
            html = ('<div id="gameAmount">\
            <button type="button" id="1game" value="1">Best of 1</button>\
            <button type="button" id="3game" value="3">Best of 3</button>\
            <button type="button" id="5game" value="5">Best of 5</button>\
            </div>');
            $gameDiv.append(html);
            $gameDiv.css({
                "width": settings.$gameDiv.width,
                "height": settings.$gameDiv.width,
                "border": settings.$gameDiv.border,
                "borderRadius": settings.$gameDiv.borderRadius,
                "background-color": settings.$gameDiv.backgroundcolor
            });
            $(":button").css({
                "background-color": settings.buttons.backgroundcolor,
                "color": settings.buttons.color,
                "border": settings.buttons.border
            });
        };

        function compareChoice(pChoice, oChoice){
            // Results meaning: 0-Lose 1-Win 2-Tie
            if(pChoice == 1){
                $("#img1").attr("src", settings.image1.src);
                $("#img1").next().next().text(`${settings.image1.name}`);
                if(oChoice == 1){
                    $("#img2").attr("src", settings.image1.src);
                    $("#img2").next().next().text(`${settings.image1.name}`);
                    return 2;
                }else if(oChoice == 2){
                    $("#img2").attr("src", settings.image2.src);
                    $("#img2").next().next().text(`${settings.image2.name}`);
                    return 0;
                } else{
                    $("#img2").attr("src", settings.image3.src);
                    $("#img2").next().next().text(`${settings.image3.name}`);
                    return 1;
                }
            }else if(pChoice == 2){
                $("#img1").attr("src", settings.image2.src);
                $("#img1").next().next().text(`${settings.image2.name}`);
                if(oChoice == 2){
                    $("#img2").attr("src", settings.image2.src);
                    $("#img2").next().next().text(`${settings.image2.name}`);
                    return 2;
                }else if(oChoice == 3){
                    $("#img2").attr("src", settings.image3.src);
                    $("#img2").next().next().text(`${settings.image3.name}`);
                    return 0;
                } else{
                    $("#img2").attr("src", settings.image1.src);
                    $("#img2").next().next().text(`${settings.image1.name}`);
                    return 1;
                }
            }else if(pChoice == 3){
                $("#img1").attr("src", settings.image3.src);
                $("#img1").next().next().text(`${settings.image3.name}`);
                if(oChoice == 3){
                    $("#img2").attr("src", settings.image3.src);
                    $("#img2").next().next().text(`${settings.image3.name}`);
                    return 2;
                }else if(oChoice == 1){
                    $("#img2").attr("src", settings.image1.src);
                    $("#img2").next().next().text(`${settings.image1.name}`);
                    return 0;
                } else{
                    $("#img2").attr("src", settings.image2.src);
                    $("#img2").next().next().text(`${settings.image2.name}`);
                    return 1;
                }
            }
        };

        return this.each(function(){
            
            setGameStart();
            
        })
    }
}(jQuery))