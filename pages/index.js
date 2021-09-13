import React from 'react';
import {
  loadStripe
} from '@stripe/stripe-js';

/*
function clickthebutton() {
  document.getElementById("clickthebutton").click();
}

setTimeout(() => {
  clickthebutton();
},1); 
*/






// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_live_51JT9flATAE41wgL81MjcCflLR2NqghtIbtsPhvJGEQmXACK0wf6KczeqBSf4V5bfCdLVCo8OKYWgqlVcdXM9H3Vd00g5Qag3on"
);

export default function PreviewPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);


  return (
    
    <>
  <title>Puff2You</title>
  <meta property="og:image" content="./index.jpg" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  
  <meta charSet="UTF-8" />
  <meta name="description" content="YOU ARE ON THE WAITING LIST!" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="icon/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
  <link rel="icon" href="https://www.puff2you.com/icons/1.png" sizes="32x32" />
  <link
    rel="icon"
    href="https://www.puff2you.com/icons/2.png"
    sizes="192x192"
  />
  <link rel="apple-touch-icon" href="https://www.puff2you.com/icons/2.png" />
  <link
    href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700;800&display=swap"
    rel="stylesheet"
  />
  <nav id="nav">
    <a style={{ color: "black" }}>.</a>
    <a
      href="../"
      style={{ position: "center", textAlign: "center" }}
      
      
    >
      
    </a>
  </nav>

  <div id="meter" style={{ transform: "scaleX(0)" }} />
  <div id="preload" />

  <form action="/api/checkout_sessions" method="POST">
    <section>

   

      <button type="submit" role="link" id="clickthebutton" class="button">

      </button>
    </section>
    
  </form>


  <style dangerouslySetInnerHTML={{__html: "\n          .button{\n            background-color: white; /* Green */\n              border: none;\n  color: white;\n\n          }\n      " }} />

  <div>
        <style dangerouslySetInnerHTML={{__html: "\n            @media screen and (max-width: 540px) {\n                .div {\n                    position: absolute;\n                    align-items: center;\n                    top: 50%;\n                    left: 8%;\n                    top: 40%;\n                }\n            }\n\n            @media screen and (min-width: 400px) {\n                .div {\n                    position: absolute;\n                    align-items: center;\n                    top: 50%;\n                    left: 20%;\n                    top: 40%;\n                }\n            }\n\n            @media screen and (min-width: 500px) {\n                .div {\n                    position: absolute;\n                    align-items: center;\n                    top: 50%;\n                    left: 25%;\n                    top: 40%;\n                }\n            }\n\n            @media screen and (min-width: 650px) {\n                .div {\n                    position: absolute;\n                    align-items: center;\n                    top: 50%;\n                    left: 30%;\n                    top: 40%;\n                }\n            }\n\n            @media screen and (min-width: 800px) {\n                .div {\n                    position: absolute;\n                    align-items: center;\n                    top: 50%;\n                    left: 35%;\n                    top: 40%;\n                }\n            }\n\n            @media screen and (min-width: 950px) {\n                .div {\n                    position: absolute;\n                    align-items: center;\n                    top: 50%;\n                    left: 40%;\n                    top: 40%;\n                }\n            }\n\n\n\n            .redirect {\n                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n                font-weight: 5000;\n                font-size: 4em;\n                text-align: center;\n\n            }\n        " }} />
        <div className="div">
          <p className="redirect">REDIRECT...</p>
        </div>
      </div>


</>




  
 
  );
}


function clickthebutton() {
  document.getElementById("clickthebutton").click();
}

setTimeout(() => {
  clickthebutton();

},100); 


