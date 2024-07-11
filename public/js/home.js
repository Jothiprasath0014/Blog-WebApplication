'use strict';

    /* Toggle Button Event */

    const navbar = document.querySelector('[data-navbar]');
    const navTogglers = document.querySelectorAll('[data-nav-toggler]');

    const addEventOnElements = function (elements, eventType, callback) {
        for (let i = 0, len = elements.length; i < len; i++) {
            elements[i].addEventListener(eventType, callback);
        }
    }
    
    addEventOnElements(navTogglers, "click", () => {
        navbar.classList.toggle("active");
        document.body.classList.toggle("nav-active");
    });

    const header = document.querySelector('[data-header]');
    const backTopBtn = document.querySelector('[data-back-top-btn]');
    
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            header.classList.add("active");
            backTopBtn.classList.add("active");
        } else {
            header.classList.remove("active");
            backTopBtn.classList.add("active");
        }
    });

    /* Slider Button Event */

    const slider = document.querySelector("[data-slider]");
    const sliderContainer = document.querySelector("[slide-container]");
    const previousBtn = document.querySelector("[data-slider-prev]");
    const nextBtn = document.querySelector("[data-slider-next]");

    let totalVisibleSlideItems = Number(getComputedStyle(slider).getPropertyValue ("--slider-items"));
    let totalSlideableItems = sliderContainer.childElementCount - totalVisibleSlideItems;

    let currentSlidePos = 0;

    const moveSlideItem = function () {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    }

    const slideNext = function () {
        const slideEnd = currentSlidePos >= totalSlideableItems;

        if(slideEnd) {
            currentSlidePos = 0;
        } else {
            currentSlidePos++;
        }
        moveSlideItem(); 
    }

    nextBtn.addEventListener("click", slideNext);

    const slidePrev = function () {

        if(currentSlidePos <= 0) {
            currentSlidePos = 0;
        } else {
            currentSlidePos--;
        }
        moveSlideItem(); 
    }

    previousBtn.addEventListener("click", slidePrev);

    window.addEventListener("resize", function () {
        totalVisibleSlideItems = Number(getComputedStyle(slider).getPropertyValue ("--slider-items"));
        totalSlideableItems = sliderContainer.childElementCount - totalVisibleSlideItems;
        moveSlideItem(); 
    });