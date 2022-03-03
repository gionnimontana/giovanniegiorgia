 window.onunload = function(){ window.scrollTo(0,0); }
 
 if ('scrollRestoration' in history) {
   history.scrollRestoration = 'manual';
 }

 window.onbeforeunload = function() { return "Sicuro di volere uscire?"; };