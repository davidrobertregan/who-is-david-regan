        const up = document.getElementById('up');  
          
        function addBanjo() {
            const banjo = document.createElement('img');
            banjo.src = "Banjo.JPG";
            banjo.style.width = "400px";
            document.getElementById('buttons').appendChild(banjo);
        } 

        function addUltra() {
            const rocky = document.createElement('img');
            rocky.src = "Rocky-50.JPG";
            rocky.style.width = "400px";
            document.getElementById('buttons').appendChild(rocky);
        }

        function addMountains() {
            const middle = document.createElement('img');
            middle.src ="middle.jpeg";
           // How can i add a link to image?...  middle.setAttribute("href", "https://www.strava.com/activities/5676545097");
            middle.style.width="400px";

            document.getElementById('buttons').appendChild(middle);
        }