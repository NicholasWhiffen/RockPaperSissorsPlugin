(function($) {
    $.fn.rockPaperSissors = function(options){

        var settings = $.extend({
            overlay: 'rgba(0, 0, 0, 0.5)',
            closeButton: {
                src: null,
                width: "30px",
                height: "30px"
            },
            imageBorder: "5px solid #ffffff",
            borderRadius: "5px",
            imageWidth: "50px",
            imageHeight: "50px",
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
            var $overlay, $closeButton, $image1, $image2, $imageCaption;
            setGameProperties();
            $(this).find("#play").on("click", function(event){
                event.preventDefault();

                
            })

            function setGameProperties(){
                $overlay = $("#rps_game");
                $image1 = $('<img src="images\\question.png" id="player1" alt="Item 1">');
                $image2 = $('<img src="images\\question.png" id="player2" alt="Item 2">');
                $overlay.append($image1);
                $overlay.append($image2);
                $overlay.append('<button type="button" id="rock">Rock</button>');
                $overlay.append('<button type="button" id="paper">Paper</button>');
                $overlay.append('<button type="button" id="sissors">Sissors</button>');
                $image1.css({
                    "width": settings.imageWidth,
                    "height": settings.imageHeight,
                    "border": settings.imageBorder,
                    "border-radius": settings.borderRadius
                });
                $image2.css({
                    "width": settings.imageWidth,
                    "height": settings.imageHeight,
                    "border": settings.imageBorder,
                    "border-radius": settings.borderRadius
                });

                $overlay.css({
                    "text-align": "center",
                });
                $("rps_game").append($overlay);
            }
        })
    }
}(jQuery))