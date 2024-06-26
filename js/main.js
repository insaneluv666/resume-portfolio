// Обработчик кнопки Дизайн
document.getElementById('buttonDesign').onclick = function() {

    document.getElementById('buttonDesign').style.cssText = 'background-color: #21A049;'
    document.getElementById('buttonDesignValue').style.cssText = 'color: #202020'

    document.getElementById('buttonDev').style.cssText = 'background-color: transparent;'
    document.getElementById('buttonDevValue').style.cssText = 'color: #21A049'

    document.getElementById('portfolioDesign').hidden = false;
    document.getElementById('portfolioDev').hidden = true;
}

//Обработчик кнопки Разработка
document.getElementById('buttonDev').onclick = function() {

    document.getElementById('buttonDesign').style.cssText = 'background-color: transparent;'
    document.getElementById('buttonDesignValue').style.cssText = 'color: #21A049'

    document.getElementById('buttonDev').style.cssText = 'background-color: #21A049;'
    document.getElementById('buttonDevValue').style.cssText = 'color: #202020'

    document.getElementById('portfolioDesign').hidden = true;
    document.getElementById('portfolioDev').hidden = false;
}
