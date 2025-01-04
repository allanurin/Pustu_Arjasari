/*!
    * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */

    // Scripts

    window.addEventListener('DOMContentLoaded', event => {
        // Navbar shrink function
        var navbarShrink = function () {
            const navbarCollapsible = document.body.querySelector('#mainNav');
            if (!navbarCollapsible) {
                return;
            }
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink');
            } else {
                navbarCollapsible.classList.add('navbar-shrink');
            }
        };
    
        // Shrink the navbar 
        navbarShrink();
    
        // Shrink the navbar when page is scrolled
        document.addEventListener('scroll', navbarShrink);
    
        // Activate Bootstrap scrollspy on the main nav element
        const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                rootMargin: '0px 0px -40%',
            });
        };
    
        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
    
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', (event) => {
                // Check if the clicked item is a dropdown toggle
                if (responsiveNavItem.classList.contains('dropdown-toggle')) {
                    event.stopPropagation(); // Prevent toggler from being clicked
                    return; // Exit the function
                }
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const toggleButtons = document.querySelectorAll('.toggle-button');

        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const cardContent = this.parentElement.previousElementSibling;
                const cardText = cardContent.querySelector('.card-text');
            
                if (cardText.classList.contains('collapsed')) {
                    cardText.classList.remove('collapsed');
                    cardText.classList.add('expanded');
                    this.textContent = 'Tutup';
                } else {
                    cardText.classList.remove('expanded');
                    cardText.classList.add('collapsed');
                    this.textContent = 'Lihat Selengkapnya';
                }
            });
        });
    });

    function showContent() {
        document.getElementById('hiddenContent').style.display = 'block';
        document.querySelector('#services .button3').style.display = 'none';
    }

    function hideContent() {
        document.getElementById('hiddenContent').style.display = 'none';
        document.querySelector('#services .button3').style.display = 'block';
    }

    document.addEventListener('DOMContentLoaded', function() {
        var profileDropdownItems = document.querySelectorAll('.dropdown-item');
        
        profileDropdownItems.forEach(function(item) {
            item.addEventListener('click', function(event) {
                var targetId = this.getAttribute('href').substring(1);
                var targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    event.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });