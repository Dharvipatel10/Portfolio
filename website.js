function adjustLayout() {
    var viewportWidth = window.innerWidth;
    var navlist = document.querySelector('.navlist');
    var leftContainer = document.querySelector('.left-container');
    var rightContainer = document.querySelector('.right-container');
    var content = document.querySelector('.content');
    var circles = document.querySelectorAll('.circle');
    var design = document.querySelector('.design');
    var container1 = document.querySelector('.container1');
    var mainTextH2 = document.querySelector('.main-text h2');
    var portfolioContent = document.querySelector('.portfolio-content');
    var rows = document.querySelectorAll('.row');

    if (viewportWidth <= 992) {
        navlist.style.flexDirection = 'column';
        navlist.style.height = 'auto';
        navlist.style.position = 'static';
        navlist.style.background = 'none';

        leftContainer.style.width = '100%';
        leftContainer.style.height = 'auto';
        rightContainer.style.width = '100%';
        rightContainer.style.height = 'auto';

        content.style.marginLeft = '0';

        circles.forEach(function(circle, index) {
            if (index === 0) {
                circle.style.display = 'none';
            }
        });

        if (design) {
            design.style.display = 'none';
        }

        if (container1) {
            container1.style.marginLeft = '0';
        }

        if (mainTextH2) {
            mainTextH2.style.marginLeft = '0';
            mainTextH2.style.textAlign = 'center';
        }

        if (portfolioContent) {
            portfolioContent.style.paddingLeft = '0';
        }

        rows.forEach(function(row) {
            row.style.width = '80%';
            row.style.margin = '0 auto';
            row.style.marginBottom = '30px';
        });
    }
}

// Call adjustLayout function when the window is resized
window.addEventListener('resize', adjustLayout);

// Call adjustLayout function on page load
window.addEventListener('load', adjustLayout);
