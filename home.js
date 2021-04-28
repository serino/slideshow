let yearLabel = document.getElementById("yearLabel")

let image = document.getElementById("image")

let paragraph = document.getElementById("paragraph")

let slider = document.getElementById("slider")

slider.addEventListener("input", updatePhoto)

function updatePhoto() {

  if (slider.value == "1") {
    yearLabel.innerHTML = "1989"
    image.src = "berners-lee.jpeg"
    paragraph.innerHTML = "While working at CERN in Switzerland, the English physicist Tim Berners-Lee wrote a proposal for 'a large hypertext database with typed links'. Although the proposal attracted little interest, Berners-Lee was encouraged by his boss, Mike Sendall, to begin implementing his system on a newly acquired NeXT workstation. He considered several names, including Information Mesh, The Information Mine, and Mine of Information, but settled on World Wide Web."
    return
  }

  if (slider.value == "2") {
    yearLabel.innerHTML = "1990"
    image.src = "first-web-browser.png"
    paragraph.innerHTML = "Tim Berners-Lee built all the tools necessary for a working web: the HyperText Transfer Protocol (HTTP), the HyperText Markup Language (HTML), the first web browser (named WorldWideWeb), the first HTTP server software (later known as CERN httpd), the first web server, and the first web pages that described the project itself."
    return
  }

  if (slider.value == "3") {
    yearLabel.innerHTML = "1993"
    image.src = "mosaic.png"
    paragraph.innerHTML = "Marc Andreessen's team at the University of Illinois launched Mosaic, a graphical web browser that popularized the web. The browser gained popularity due to its strong support of integrated multimedia, and the authors' rapid response to user bug reports and recommendations for new features."
    return
  }

  if (slider.value == "4") {
    yearLabel.innerHTML = "1994"
    image.src = "w3c.jpeg"
    paragraph.innerHTML = "Tim Berners-Lee founded the World Wide Web Consortium (W3C) at the Massachusetts Institute of Technology. It comprised various companies that were willing to create standards and recommendations to improve the quality of the web. Berners-Lee made the web available freely, with no patent and no royalties due. The W3C decided that its standards must be based on royalty-free technology, so they can be easily adopted by anyone."
    return
  }

  if (slider.value == "5") {
    yearLabel.innerHTML = "1998"
    image.src = "google.jpeg"
    paragraph.innerHTML = "Two Ph.D. students at Stanford, Larry Page and Sergey Brin, founded Google."
    return
  }

  if (slider.value == "6") {
    yearLabel.innerHTML = "2004"
    image.src = "facebook.jpeg"
    paragraph.innerHTML = "Five undergraduate students at Harvard, Mark Zuckerberg, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, founded Facebook."
    return
  }

  if (slider.value == "7") {
    yearLabel.innerHTML = "2005"
    image.src = "youtube.jpeg"
    paragraph.innerHTML = "Three PayPal employees, Steve Chen, Chad Hurley, and Jawed Karim, founded YouTube."
    return
  }
}

