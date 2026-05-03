let selectElem = document.querySelector('select');
        let logo = document.querySelector('img');

        selectElem.addEventListener('change', changeTheme);

        function changeTheme() {
            let current = selectElem.value;
            if (current == 'glow') {
                document.getElementById('logo').src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png"
                document.body.style.color = 'white'
                document.body.style.backgroundColor = 'black'
                document.body.style.textShadow = '0px 0px 3px white'
                document.querySelector('h2').style.textShadow = '0px 0px 5px #5555FF'
            }  else if (current == 'dark') {
                document.getElementById('logo').src = "https://wddbyui.github.io/wdd131/images/byui-logo-white.png"
                document.body.style.color = 'white'
                document.body.style.backgroundColor = '#222'
                document.body.style.textShadow = ''
                document.querySelector('h2').style.textShadow = ''
            } else {
                document.getElementById('logo').src = "images\\byui-logo-blue.webp"
                document.body.style.color = 'black'
                document.body.style.backgroundColor = 'white'
                document.body.style.textShadow = ''
                document.querySelector('h2').style.textShadow = ''
            }
        } 