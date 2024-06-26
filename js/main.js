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

//Обработчик кнопки Дизайн-Логотипы
document.getElementById('buttonLogos').onclick = function() {

    document.getElementById('buttonLogos').style.cssText = 'background-color: #21A049;'
    document.getElementById('buttonLogosValue').style.cssText = 'color: #202020'

    document.getElementById('buttonBanners').style.cssText = 'background-color: transparent;'
    document.getElementById('buttonBannersValue').style.cssText = 'color: #21A049'

     document.getElementById('buttonTours').style.cssText = 'background-color: transparent;'
    document.getElementById('buttonToursValue').style.cssText = 'color: #21A049'

    document.getElementById('portfolioLogosID').hidden = false;
    document.getElementById('portfolioBannersID').hidden = true;
    document.getElementById('portfolioToursID').hidden = true;
}
//Обработчик кнопки Дизайн-Баннеры
document.getElementById('buttonBanners').onclick = function() {

    document.getElementById('buttonLogos').style.cssText = 'background-color: transparent;'
    document.getElementById('buttonLogosValue').style.cssText = 'color: #21A049'

    document.getElementById('buttonBanners').style.cssText = 'background-color: #21A049;'
    document.getElementById('buttonBannersValue').style.cssText = 'color: #202020'

     document.getElementById('buttonTours').style.cssText = 'background-color: transparent;'
    document.getElementById('buttonToursValue').style.cssText = 'color: #21A049'

    document.getElementById('portfolioLogosID').hidden = true;
    document.getElementById('portfolioBannersID').hidden = false;
    document.getElementById('portfolioToursID').hidden = true;
}
//Обработчик кнопки Дизайн-Баннеры
document.getElementById('buttonTours').onclick = function() {

    document.getElementById('buttonLogos').style.cssText = 'background-color: transparent;'
    document.getElementById('buttonLogosValue').style.cssText = 'color: #21A049'

    document.getElementById('buttonBanners').style.cssText = 'background-color: transparent;'
    document.getElementById('buttonBannersValue').style.cssText = 'color: #21A049'

     document.getElementById('buttonTours').style.cssText = 'background-color: #21A049;'
    document.getElementById('buttonToursValue').style.cssText = 'color: #202020'

    document.getElementById('portfolioLogosID').hidden = true;
    document.getElementById('portfolioBannersID').hidden = true;
    document.getElementById('portfolioToursID').hidden = false;
}