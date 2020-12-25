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

## Version 5 Notes

* Perspective must always be on the parent element on the whose child has the transform
* background-blend is how backgrounds should blend
* A lot of styling. Used a lot of utility classes
* TODO: Look at card.scss code, button.scss code and utilities.scss code to review

## Version 6 Notes

* Background video. Really cool effect. I'll write some pseudocode first.
  * container for the video > video content.
    * To access our video, we use the video element tag and put the source element tag inside it.
    * The video element tag will have a src attribute, which will be the path to the video
    * And a type attribute which will be something like: type="video/[formatType]"
    * By formatType, je veux dire, mp4, webm.
    * Use a source tag for each formatType pour veiller que ça marche sur tous les navigateurs.
  * container for the video will have relative positioning whereas the video content will have absolute positioning, with the goal of masking the entire parent container. Je veux dire... top: 0, left: 0; height: 100%, width: 100%;
  * Also for the video content, on top of height and width, set the [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) to cover.
  * This is the equivalent of background-size to cover but for [replaced elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element) to fit the size of their container