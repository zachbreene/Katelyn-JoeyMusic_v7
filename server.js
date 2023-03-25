var http = require('http'), fs = require('fs');

const PORT = 1337;

function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) {
        responseCode = 200;
    }

    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});

            res.end('500 - Internal Error');
        }

        else {
            res.writeHead(responseCode,
                { 'Content-Type': contentType });

            res.end(data);
        }
    });
}

http.createServer(function(req,res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    
    switch(path) {
        //HTML
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/experience':
            serveStaticFile(res, '/public/experience.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');
            break;

        //Styles
        case '/styles/style.css':
            serveStaticFile(res,'/public/styles/style.css','text/css');
            break;
        case '/styles/jquery-ui.css':
            serveStaticFile(res,'/public/styles/jquery-ui.css','text/css');
            break;
        case '/styles/jquery-ui.structure.css':
            serveStaticFile(res,'/public/styles/jquery-ui.structure.css','text/css');
            break;
        case '/styles/jquery-ui.theme.css':
            serveStaticFile(res,'/public/styles/jquery-ui.theme.css','text/css');
            break;           

        //JS
        case '/js/getSetCSS.js':
            serveStaticFile(res,'/public/js/getSetCSS.js','text/javascript');
            break;  
        case '/js/gigs-html.js':
            serveStaticFile(res,'/public/js/gigs-html.js','text/javascript');
            break;  
        case '/js/goalsScript.js':
            serveStaticFile(res,'/public/js/goalsScript.js','text/javascript');
            break; 
        case '/js/joey-json.js':
            serveStaticFile(res,'/public/js/joey-json.js','text/javascript');
            break; 
        case '/js/jquery-3.6.3.js':
            serveStaticFile(res,'/public/js/jquery-3.6.3.js','text/javascript');
            break; 
        case '/js/jQueryFeatures.js':
            serveStaticFile(res,'/public/js/jQueryFeatures.js','text/javascript');
            break; 
        case '/js/jquery-ui.js':
            serveStaticFile(res,'/public/js/jquery-ui.js','text/javascript');
            break; 
        case '/js/katelyn-xml.js':
            serveStaticFile(res,'/public/js/katelyn-xml.js','text/javascript');
            break; 
        case '/js/navHover.js':
            serveStaticFile(res,'/public/js/navHover.js','text/javascript');
            break; 
        case '/js/slideshow.js':
            serveStaticFile(res,'/public/js/slideshow.js','text/javascript');
            break; 
        case '/js/start-jq.js':
            serveStaticFile(res,'/public/js/start-jq.js','text/javascript');
            break; 
        case '/js/timedGreeting.js':
            serveStaticFile(res,'/public/js/timedGreeting.js','text/javascript');
            break; 
        case '/js/updateInstrument.js':
            serveStaticFile(res,'/public/js/updateInstrument.js','text/javascript');
            break; 

        //Images
        case '/images/404bottom.gif':
            serveStaticFile(res,'/public/images/404bottom.gif','image/gif');
            break;
        case '/images/404mid.gif':
            serveStaticFile(res,'/public/images/404mid.gif','image/gif');
            break;
        case '/images/404top_w.jpg':
            serveStaticFile(res,'/public/images/404top_w.jpg','image/jpg');
            break;
        case '/images/aboutUs.jpg':
            serveStaticFile(res,'/public/images/aboutUs.jpg','image/jpg');
            break;
        case '/images/FacebookIconBlack.png':
            serveStaticFile(res,'/public/images/FacebookIconBlack.png','image/png');
            break;
        case '/images/FacebookIconColor.png':
            serveStaticFile(res,'/public/images/FacebookIconColor.png','image/png');
            break;
        case '/images/gigs.png':
            serveStaticFile(res,'/public/images/gigs.png','image/png');
            break;
        case '/images/InstagramIconBlack.png':
            serveStaticFile(res,'/public/images/InstagramIconBlack.png','image/png');
            break;
        case '/images/InstagramIconColor.png':
            serveStaticFile(res,'/public/images/InstagramIconColor.png','image/png');
            break;
        case '/images/Joey-Katelyn_Header.png':
            serveStaticFile(res,'/public/images/Joey-Katelyn_Header.png','image/png');
            break;        
        case '/images/JoeyKatelynBG.JPG':
            serveStaticFile(res,'/public/images/JoeyKatelynBG.JPG','image/JPG');
            break; 
        case '/images/JoeyKatelynFunny.jpg':
            serveStaticFile(res,'/public/images/JoeyKatelynFunny.jpg','image/jpg');
            break;               
        case '/images/JoeyKatelynPiano.jpg':
            serveStaticFile(res,'/public/images/JoeyKatelynPiano.jpg','image/jpg');
            break;  
        case '/images/JoeyKatelynPortrait.jpg':
            serveStaticFile(res,'/public/images/JoeyKatelynPortrait.jpg','image/jpg');
            break;  
        case '/images/JoeyPic.jpeg':
            serveStaticFile(res,'/public/images/JoeyPic.jpeg','image/jpeg');
            break;  
        case '/images/KatelynPic.jpg':
            serveStaticFile(res,'/public/images/KatelynPic.jpg','image/jpg');
            break;      
        case '/images/placement.jpg':
            serveStaticFile(res,'/public/images/placement.jpg','image/jpg');
            break;    
        case '/images/ui-icons_cc0000_256x240.png':
            serveStaticFile(res,'/public/images/ui-icons_cc0000_256x240.png','image/png');
            break;  
        case '/images/ui-icons_ecc359_256x240.png':
            serveStaticFile(res,'/public/images/ui-icons_ecc359_256x240.png','image/png');
            break;  
        case '/images/ui-icons_ffffff_256x240.png':
            serveStaticFile(res,'/public/images/ui-icons_ffffff_256x240.png','image/png');
            break;  
        case '/images/x.png':
            serveStaticFile(res,'/public/images/x.png','image/png');
            break; 
        case '/images/YoutubeIconBlack.png':
            serveStaticFile(res,'/public/images/YoutubeIconBlack.png','image/png');
            break; 
        case '/images/YoutubeIconColor.png':
            serveStaticFile(res,'/public/images/YoutubeIconColor.png','image/png');
            break;         

        //Default HTML
        default:
    	    serveStaticFile(res,'/public/404.html','text/html',404);
    	    break;
   }
}).listen(PORT);

console.log("Listening...Go to http://localhost:" + PORT);