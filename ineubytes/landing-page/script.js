$(document).ready(function(){
    //mobile navbar//
    const mobile = document.querySelector(".burger-btn");
    const mobileLink = document.querySelector(".navbar");

    mobile.addEventListener("click",function(){
        console.log("Mobile button clicked");

        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    });
    //close menu on mobile while clicking
    mobileLink.addEventListener("click",function(){
        const menuBars=document.querySelector(".is-active");
        if(window.innerWidth<=768 && menuBars){
            mobile.classList.toggle("is-active");
            mobileLink.classList.toggle("active");

        }

    })
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
    const feedbackOverlay = document.getElementById('feedbackOverlay');

    openPopupButton.addEventListener('click', () => {
    feedbackOverlay.style.display = 'flex';
    });

    closePopupButton.addEventListener('click', () => {
    feedbackOverlay.style.display = 'none';
    });
    
})