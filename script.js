console.log('CryptoVerse script loaded');

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    
    // Initialize language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons:', langButtons.length);
    
    // Set English as active by default
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === 'en') {
            btn.classList.add('active');
        }
    });
    
    // Add click handlers to language buttons
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            console.log('Language button clicked:', lang);
            
            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Switch language
            currentLang = lang;
            applyLanguage(lang);
        });
    });
    
    // Apply default language
    applyLanguage('en');
    
    // Initialize other features
    initMobileMenu();
    initWalletButtons();
    initFilters();
});

function applyLanguage(lang) {
    console.log('Applying language:', lang);
    
    // Find all elements with language data
    const allElements = document.querySelectorAll('[data-en][data-gr]');
    console.log('Found translatable elements:', allElements.length);
    
    allElements.forEach(element => {
        const text = element.getAttribute('data-' + lang);
        
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = text;
        } else if (element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else if (element.tagName === 'SELECT') {
            // For select options
            if (element.options) {
                Array.from(element.options).forEach(option => {
                    const optionText = option.getAttribute('data-' + lang);
                    if (optionText) {
                        option.textContent = optionText;
                    }
                });
            }
        } else if (element.tagName === 'BUTTON') {
            // For buttons, update text content
            element.textContent = text;
        } else {
            element.textContent = text;
        }
    });
    
    console.log('Language applied successfully');
}

// Mobile menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Wallet connect buttons
function initWalletButtons() {
    const walletButtons = document.querySelectorAll('.btn-wallet, .btn-wallet-connect');
    
    walletButtons.forEach(button => {
        button.addEventListener('click', function() {
            let message;
            if (currentLang === 'en') {
                message = 'Wallet connection feature coming soon!\n\nIn a live version, this would connect to MetaMask, WalletConnect, or other Web3 wallets.\n\nThis is a demo website for portfolio purposes.';
            } else {
                message = 'Η λειτουργία σύνδεσης πορτοφολιού θα είναι σύντομα διαθέσιμη!\n\nΣε μια ζωντανή έκδοση, θα συνδεόταν με MetaMask, WalletConnect ή άλλα Web3 πορτοφόλια.\n\nΑυτός είναι ένας ιστότοπος επίδειξης για σκοπούς χαρτοφυλακίου.';
            }
            alert(message);
        });
    });
}

// Marketplace filters
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to clicked button
            this.classList.add('active');
            
            // In a real app, this would filter the NFT grid
            console.log('Filter changed:', this.textContent);
        });
    });
    
    const filterSelect = document.querySelector('.filter-select');
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            console.log('Sort changed:', this.value);
            // In a real app, this would sort the NFT grid
        });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 11, 30, 0.98)';
            navbar.style.boxShadow = '0 5px 30px rgba(0, 217, 255, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 11, 30, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Load more button
const loadMoreBtn = document.querySelector('.load-more .btn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        let message;
        if (currentLang === 'en') {
            message = 'In a live marketplace, this would load more NFTs from the blockchain.\n\nThis is a demo website showcasing design and functionality.';
        } else {
            message = 'Σε μια ζωντανή αγορά, αυτό θα φόρτωνε περισσότερα NFTs από το blockchain.\n\nΑυτός είναι ένας ιστότοπος επίδειξης που παρουσιάζει σχεδιασμό και λειτουργικότητα.';
        }
        alert(message);
    });
}