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