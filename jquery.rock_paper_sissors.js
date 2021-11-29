"use strict";
(function($) {
    $.fn.rockPaperSissors = function(options){

        var settings = $.extend({
            $gameDiv: {
                width:  "400px",
                height : "400px",
                border: "5px solid black",
                padding: "100px"
            },
            imageBorder: "5px solid #ffffff",
            borderRadius: "5px",
            imageWidth: "100px",
            imageHeight: "100px",
            imageCaption: {
                exist: true,
                color: "#ffffff",
                fontSize: "20px"
            }
        }, options)

        const $gameDiv = $("#rps_game");
        let $image1, $image2, $imageCaption, html;
        let gameAmount = 0;
        let gamesPlayed = 0;
        let wins = 0;
        let loses = 0;
        
        $("#rps_game").on("click", "#gameAmount button", function(event){
            event.preventDefault();
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

        $("#rps_game").on("click", "#choices button", function(){
            if(parseInt($(this).val()) == 4){
                setGameStart();
            };
            let opponentChoice = Math.floor(Math.random() * 3) + 1;
            console.log($(this).val());
            console.log(opponentChoice);
            let results = compareChoice(parseInt($(this).val()), opponentChoice);
            console.log(results);
            if(results == 1){
                wins += 1;
                gamesPlayed += 1;
            }
            else if(results == 0){
                gamesPlayed +=1;
                loses += 1;
            };
            checkWin();
                    
        });
        

        function setGameProperties(){
            $gameDiv.empty();
            gamesPlayed = 0;
            wins = 0;
            loses = 0;
            html = (`<div id="player1">\
            <img src="images\\question.png" id="img1" alt="Item 1">\
            <br>\
            <span></span>\
            </div>\
            <div id="player2">\
            <img src="images\\question.png" id="img2" alt="Item 2">\
            <br>\
            <span></span>\
            </div>\
            <br>\
            <h3 id="score">0 - 0</h3>\
            <br>\
            <div id="choices">\
                <button type="button" id="1" value="1">${settings.image1.name}</button>\
                <button type="button" id="2" value="2">${settings.image2.name}</button>\
                <button type="button" id="3" value="3">${settings.image3.name}</button>\
            </div>`);
            $gameDiv.append(html);
            $("#player1").css({
                "float": "left",
                "width": "50%"
                
            })
            $("#player2").css({
                "float": "left",
                "width": "50%"
                
            })
            $("img").css({
                "width": settings.imageWidth,
                "height": settings.imageHeight,
                "border": settings.imageBorder,
                "border-radius": settings.borderRadius
            });

        };
        
        function checkWin(){
            $("#score").text(`${wins} - ${loses}`);
            if(wins > (gameAmount/2)){
                $("#score").text(`YOU WIN!`);
                $("#choices").empty();
                $("#choices").append('<button type="button" id="playAgain" value="4">Play Again</button>');

            }else if(loses > (gameAmount/2)){
                $("#score").text(`YOU LOSE:(`);
                $("#choices").empty();
                $("#choices").append('<button type="button" id="playAgain" value="4">Play Again</button>');
    
            }
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
                "height": settings.$gameDiv.height,
                "border": settings.$gameDiv.border,
                "padding": settings.$gameDiv.padding,
                "margin": "auto"
            });
            $gameDiv.css({
                "text-align": "center",
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