fetch('/index.html')
.then(response => {
  // When the page is loaded convert it to text
  return response.text()
})
.then(html => {
  // Initialize the DOM parser
  const parser = new DOMParser()

  // Parse the text
  const doc = parser.parseFromString(html, "text/html")

  // You can now even select part of that html as you would in the regular DOM
  // Example:
  document.querySelector('body').innerHTML= doc.querySelector('body').innerHTML

  alert(docHTML)
})
.catch(error => {
   console.error('Failed to fetch page: ', error)
})