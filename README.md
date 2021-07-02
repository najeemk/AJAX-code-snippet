# Demonstration for Interview
There are two versions of this file: Flask Server Version and a Generic HTTP Server version. The former is meant to work with Flask, while the latter can work with any generic HTTP server. 
## Flask Version
* This can be used with Flask
* Technically this does generate the template from Jinja, but that is just because that is the only way (at least from what my research has told me) to serve HTML over Flask (besides using a string literal for the html files). However this only generates a basic template, and Jinja sends no information over from the json to the webpage.
* To Run:
    * Mac/Linux:
    ```bash
    export FLASK_APP=app.py
    python3 -m flask run
    ```
    * Windows PowerShell: 
    ```powershell
    $env:FLASK_APP = "app.py"
    python3 -m flask run
    ```
## Generic HTTP Version
* This version does not use any Flask or Jinja, but instead works with pretty much any generic HTTP server
* This needs to be used with some sort of server (I used the Live Server VS Code extension, but `python3 -m http.server 8080` also works)
* CORS errors will result if `index.html` is just opened directly in browser without hosting index.html from a server. This is a result of browser security standards.
