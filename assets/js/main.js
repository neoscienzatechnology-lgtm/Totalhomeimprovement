/**
 * Total Home Improvements - Main JavaScript
 * Pure vanilla JavaScript for all interactive features
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // ========================================
  // Mobile Menu Toggle
  // ========================================
  
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = navMenu.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
  
  // ========================================
  // Active Navigation Link
  // ========================================
  
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const linkPage = link.getAttribute('href');
      
      if (linkPage === currentPage || 
          (currentPage === '' && linkPage === 'index.html') ||
          (currentPage === '/' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
  
  setActiveNavLink();
  
  // ========================================
  // Smooth Scrolling for Anchor Links
  // ========================================
  
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // ========================================
  // Form Validation and Submission
  // ========================================
  
  const contactForm = document.querySelector('#contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset previous errors
      const errorElements = document.querySelectorAll('.form-error');
      errorElements.forEach(el => el.style.display = 'none');
      
      const formGroups = document.querySelectorAll('.form-group');
      formGroups.forEach(group => group.classList.remove('error'));
      
      let isValid = true;
      
      // Get form fields
      const name = document.querySelector('#name');
      const email = document.querySelector('#email');
      const phone = document.querySelector('#phone');
      const service = document.querySelector('#service');
      const message = document.querySelector('#message');
      
      // Validate name
      if (name && name.value.trim() === '') {
        showError(name, 'Please enter your name');
        isValid = false;
      }
      
      // Validate email
      if (email) {
        const emailValue = email.value.trim();
        if (emailValue === '') {
          showError(email, 'Please enter your email');
          isValid = false;
        } else if (!isValidEmail(emailValue)) {
          showError(email, 'Please enter a valid email');
          isValid = false;
        }
      }
      
      // Validate phone (optional but if filled, must be valid)
      if (phone && phone.value.trim() !== '') {
        const phoneValue = phone.value.trim();
        if (!isValidPhone(phoneValue)) {
          showError(phone, 'Please enter a valid phone number');
          isValid = false;
        }
      }
      
      // Validate service selection
      if (service && service.value === '') {
        showError(service, 'Please select a service');
        isValid = false;
      }
      
      // Validate message
      if (message && message.value.trim() === '') {
        showError(message, 'Please enter a message');
        isValid = false;
      } else if (message && message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters');
        isValid = false;
      }
      
      // If form is valid, show success message
      if (isValid) {
        showSuccessMessage();
        contactForm.reset();
      }
    });
  }
  
  // Helper function to show error
  function showError(field, message) {
    const formGroup = field.closest('.form-group');
    if (formGroup) {
      formGroup.classList.add('error');
      const errorElement = formGroup.querySelector('.form-error');
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
      }
    }
  }
  
  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to validate phone
  function isValidPhone(phone) {
    // Remove all non-numeric characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Valid if it has 10 digits (US format)
    return cleanPhone.length === 10;
  }
  
  // Helper function to show success message
  function showSuccessMessage() {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
      position: fixed;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #10b981;
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 9999;
      animation: slideDown 0.3s ease-out;
    `;
    successDiv.textContent = 'Message sent successfully! We will contact you soon.';
    
    document.body.appendChild(successDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      successDiv.style.animation = 'slideUp 0.3s ease-out';
      setTimeout(() => {
        document.body.removeChild(successDiv);
      }, 300);
    }, 5000);
  }
  
  // ========================================
  // Scroll to Top Button
  // ========================================
  
  const scrollToTopBtn = document.querySelector('#scroll-to-top');
  
  if (scrollToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // ========================================
  // Intersection Observer for Animations
  // ========================================
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards and sections
  const animatedElements = document.querySelectorAll('.card, .service-card, .testimonial-card');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
  
  // ========================================
  // Phone Number Formatting
  // ========================================
  
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  
  phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length <= 10) {
        // Format: (XXX) XXX-XXXX (US format)
        if (value.length > 6) {
          value = value.replace(/^(\d{3})(\d{3})(\d{0,4}).*/, '($1) $2-$3');
        } else if (value.length > 3) {
          value = value.replace(/^(\d{3})(\d{0,3})/, '($1) $2');
        } else if (value.length > 0) {
          value = value.replace(/^(\d*)/, '($1');
        }
        
        e.target.value = value;
      }
    });
  });
  
  // ========================================
  // Image Lazy Loading Fallback
  // ========================================
  
  // Modern browsers support native lazy loading, but add fallback
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      if (img.dataset.src) {
        imageObserver.observe(img);
      }
    });
  } else {
    // Fallback for older browsers - load all images
    lazyImages.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  }
  
  // ========================================
  // Copyright Year Auto-Update
  // ========================================
  
  const copyrightYear = document.querySelector('#copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
  
});

// ========================================
// Add animation keyframes dynamically
// ========================================

const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    from {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    to {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
