## Version 1 Notes

* What does **border-box** do?
* To get the image to lay on top with a gradient, the linear-gradient comes first, then the URL. Don't forget to change the opacity
* To learn more about clip-path.... https://bennettfeely.com/clippy/
* In situations where you don't have to define both height and width, Jonas likes to control height.
* To centralise elements, here is the fundamental code. Do you understand it?
  * .[selected-element] {
    position: absolute;
    top: 40%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  
## Version 2 Notes

* Sass
  * QUESTION: Tu sais comment l'installer ?
  * Do you know how to write a script to compile sass to CSS?
  * Do you know how to run the live-server and the sass compile script simultaneously?
    * HINT: npm-run-all package
  * La méthode t'est bien fixée so we're good there


## Version 3 Notes

* That Learn More button was rather neat.
* outline and outline-offset
  * NOTE: outline goes on the element's changed state (in our case hover)
  * whereas outline-offset goes on the natural state of the element
* background-clip part was fresh
  * background-image: linear-gradient(colours rangi couleurs)
  * background-clip: text
  * color: transparent

## Version 4 Notes

* Avant commencer, I like the reshuffling of files to prepare for future deployment.
  * Did this in Version 3. Bien joué
* Should I ever make my own grid, don't mess around with it sizing wise etc.
* Instead, make a child container and mess around with that.
* Grid dimensions should never be tampered with
* Skewing 
  * Skewing parent -degrees
  * Skewing Child +degrees of the same value to make it appear "straight"
* Direct child selector: .[parentElement] > * { styles go here...}
