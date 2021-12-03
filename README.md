# RockPaperSissorsPlugin
A JavaScript plugin for a rock, paper, scissors game


Instal Guide (Follow steps in order)

Step 1:
Link the css file named "style.css" into the head of html file.
Add Jquery script to body of html.
Add script named "jquery.rock_paper_sissors.js" to body of html.
Add script named "app.js" to body of html.
Place the assets folder into the same folder the html is located. If you do not you may run into issues or have to link to the folder manually.

Step 2:
Create a div element with the id: "rps_game" in desired location in html file.

Done!


PLugin Information:

This plugin will create a 450px by 450px game box to the html.
The user can select from the following game modes: best of 1, best of 3, best of 5.
The user is then prompted to choose one of 3 choices (by default they are rock, paper, and sissors)
The plugin will randomly choose its own choice an then compare the users choice to the choice made by the plugin.
While the names of the buttons can be changed, their values cannot and will always funtion as follows:
button 1 wins against button 3
button 2 wins against button 1
button 3 wins against button 2
If the user reaches the amount of wins required for the selected gamemode a win funtion is called. (by default it will print "win to the console)
The user is then given the choice to play again


Plugin Customization:

In the file "app.js" there are a series of changes that can be made to customize the plugin to your liking.
Each image's name and source can be changed. To change a name simply replace the default name with your own. To change the image you can either place a new image into the assets folder named
either "image1.jpeg", "image2.jpeg", or "image3.jpeg" or you can link to your own image by repolacing the images src with a new location.
The win sound can be changed similar to the images, either replace with a file named "winSound.mp4" in the assets folder or link a new src location.
The game background, button color, button text, image caption, and score colors can all be modified by changeing the assigned color to one of your chooseing.
You will also find the win function in this file. You can add whatever code you like to this funtion to utilize a user win however you see fit.
