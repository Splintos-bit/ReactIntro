/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
  import { createRoot } from "react-dom/client"
  const root = createRoot(document.getElementById("root"))
  
  root.render(
      <main>
          <img src="/react-logo.png" alt="react logo" width="40px"  />
          <h1>fun facts about React</h1>
          <ul>
            <li>was first release in 2013</li>
            <li>was originally created by Jordan Walk</li>
            <li>Has well over 200k stars on Github</li>
            <li>Powers thousands of entreprise apps,including mobile apps</li>
            

          </ul>
      </main>
     
  )