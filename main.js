function randomQuote() {
   
                    var quotes = [
                    "These aren't the droids you're looking for. (Obi-Wan Kenobi)", 
                    "Help me, Obi-Wan Kenobi; you're my only hope. (Princess Leia)",
                    " It’s not wise to upset a Wookiee. (Han Solo)", 
                    "Aren’t you a little short for a stormtrooper? (Princess Leia)",
                    "Use the force, Luke. (Obi-Wan Kenobi)", 
                    "In my experience, there’s no such thing as luck. (Obi-Wan Kenobi)",
                    "I find your lack of faith disturbing. (Darth Vader)", 
                    "R2D2, you know better than to trust a strange computer. (C-3PO)",
                    "Your destiny lies with me, Skywalker. Obi-Wan knew this to be true. (Darth Vader)", 
                    "Try not! Do or do not. There is no try. (Yoda)",
                    " I’d just as soon kiss a Wookiee. (Princess Leia)", 
                    "Never tell me the odds! (Han Solo)", 
                    "When 900 years old, you reach… Look as good, you will not. (Yoda)",
                    "Great, kid. Don’t get cocky (Han Solo)",
                    "Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son. (Darth Vader)",
                    "Judge me by my size, do you? (Yoda)", 
                    "Don't call me a mindless philosopher, you overweight glob of grease. (C-3PO)"
                    ];
                    
                    var n = Math.floor(Math.random() * quotes.length);

                    document.getElementById("quote").innerHTML = quotes[n];
                    tweetThis();
                }

                function tweetThis() {
                    var msg = document.getElementById("quote").innerHTML;
                    var tweetDiv = document.querySelector(".twitter-share-button");
                    var link = document.createElement("a");
                    
                    link.setAttribute("href", "https://twitter.com/share");
                    link.setAttribute("class", "twitter-share-button");
                    link.setAttribute('id', 'twitter');
                    link.setAttribute("data-text", "" + msg + "");
                    link.setAttribute("data-size", "large");
                    tweetDiv.parentNode.replaceChild(link, tweetDiv);
                    twttr.widgets.load();
                }

                !function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                            p = /^http:/.test(d.location) ? 'http' : 'https';
                    if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = p + '://platform.twitter.com/widgets.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    }
                }(document, 'script', 'twitter-wjs');
