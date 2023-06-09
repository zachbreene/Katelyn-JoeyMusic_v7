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
        case '/js/getsetcss.js':
            serveStaticFile(res,'/public/js/getsetcss.js','text/javascript');
            break;  
        case '/js/gigs-html.js':
            serveStaticFile(res,'/public/js/gigs-html.js','text/javascript');
            break;  
        case '/js/goalsscript.js':
            serveStaticFile(res,'/public/js/goalsscript.js','text/javascript');
            break; 
        case '/js/joey-json.js':
            serveStaticFile(res,'/public/js/joey-json.js','text/javascript');
            break; 
        case '/js/jquery-3.6.3.js':
            serveStaticFile(res,'/public/js/jquery-3.6.3.js','text/javascript');
            break; 
        case '/js/jqueryfeatures.js':
            serveStaticFile(res,'/public/js/jqueryfeatures.js','text/javascript');
            break; 
        case '/js/jquery-ui.js':
            serveStaticFile(res,'/public/js/jquery-ui.js','text/javascript');
            break; 
        case '/js/katelyn-xml.js':
            serveStaticFile(res,'/public/js/katelyn-xml.js','text/javascript');
            break; 
        case '/js/navhover.js':
            serveStaticFile(res,'/public/js/navhover.js','text/javascript');
            break; 
        case '/js/slideshow.js':
            serveStaticFile(res,'/public/js/slideshow.js','text/javascript');
            break; 
        case '/js/start-jq.js':
            serveStaticFile(res,'/public/js/start-jq.js','text/javascript');
            break; 
        case '/js/timedgreeting.js':
            serveStaticFile(res,'/public/js/timedgreeting.js','text/javascript');
            break; 
        case '/js/updateinstrument.js':
            serveStaticFile(res,'/public/js/updateinstrument.js','text/javascript');
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
        case '/images/aboutus.jpg':
            serveStaticFile(res,'/public/images/aboutus.jpg','image/jpg');
            break;
        case '/images/facebookiconblack.png':
            serveStaticFile(res,'/public/images/facebookiconblack.png','image/png');
            break;
        case '/images/facebookiconcolor.png':
            serveStaticFile(res,'/public/images/facebookiconcolor.png','image/png');
            break;
        case '/images/gigs.png':
            serveStaticFile(res,'/public/images/gigs.png','image/png');
            break;
        case '/images/instagramiconblack.png':
            serveStaticFile(res,'/public/images/instagramiconblack.png','image/png');
            break;
        case '/images/instagramiconcolor.png':
            serveStaticFile(res,'/public/images/instagramiconcolor.png','image/png');
            break;
        case '/images/joey-katelyn_header.png':
            serveStaticFile(res,'/public/images/joey-katelyn_header.png','image/png');
            break;        
        case '/images/joeykatelynbg.JPG':
            serveStaticFile(res,'/public/images/joeykatelynbg.jpg','image/jpg');
            break; 
        case '/images/joeykatelynfunny.jpg':
            serveStaticFile(res,'/public/images/joeykatelynfunny.jpg','image/jpg');
            break;               
        case '/images/joeykatelynpiano.jpg':
            serveStaticFile(res,'/public/images/joeykatelynpiano.jpg','image/jpg');
            break;  
        case '/images/joeykatelynportrait.jpg':
            serveStaticFile(res,'/public/images/joeykatelynportrait.jpg','image/jpg');
            break;  
        case '/images/joeypic.jpeg':
            serveStaticFile(res,'/public/images/joeypic.jpeg','image/jpeg');
            break;  
        case '/images/katelynpic.jpg':
            serveStaticFile(res,'/public/images/katelynpic.jpg','image/jpg');
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
        case '/images/youtubeiconblack.png':
            serveStaticFile(res,'/public/images/youtubeiconblack.png','image/png');
            break; 
        case '/images/youtubeiconcolor.png':
            serveStaticFile(res,'/public/images/youtubeiconcolor.png','image/png');
            break;         

        //Default HTML
        default:
    	    serveStaticFile(res,'/public/404.html','text/html',404);
    	    break;
   }
}).listen(PORT);

console.log("Listening...Go to http://localhost:" + PORT);