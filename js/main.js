document.getElementById('buttonDesign').onclick = function() {
    document.getElementById('portfolioDesign').hidden = false;
    document.getElementById('portfolioDev').hidden = true;
    document.getElementById('test').className = link;
}

document.getElementById('buttonDev').onclick = function() {
    document.getElementById('portfolioDesign').hidden = true;
    document.getElementById('portfolioDev').hidden = false;
}
