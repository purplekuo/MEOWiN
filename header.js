function init(){
    ham = document.getElementById('ham')
    navbar = document.getElementById('navbar')
    navbar.style.display = 'none';
    
    ham.addEventListener('click',function(){
        if (navbar.style.display === 'none') {
                    navbar.style.display = 'flex';
                } else {
                    navbar.style.display = 'none';
                }
    })
    window.addEventListener('resize', function(){
        // 如果視窗寬度大於768px，則隱藏navbar
        if (window.matchMedia('(min-width: 769px)').matches) {
            navbar.style.display = 'none';
        }
    })
}
window.addEventListener('load', init);