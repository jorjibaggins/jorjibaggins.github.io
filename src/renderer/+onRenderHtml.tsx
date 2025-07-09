export { onRenderHtml }

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import type { PageContextServer } from './types'

async function onRenderHtml(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  
  // Render page to string
  const pageHtml = ReactDOMServer.renderToString(<Page {...pageProps} />)

  // Handle Head component if it exists
  let headHtml = ''
  if (pageContext.exports.Head) {
    const { Head } = pageContext.exports
    headHtml = ReactDOMServer.renderToString(<Head />)
  }

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YQHP81B6EX"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YQHP81B6EX');
        </script>
        
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="East Street Advisory" />
        <meta name="keywords" content="SME business broker Singapore, business acquisition Singapore, M&A advisory Singapore, sell business Singapore, business valuation, merger acquisition consultant" />
        
        <!-- Open Graph / Social Media Meta Tags -->
        <meta property="og:title" content="East Street Advisory | Singapore's Top SME Business Broker" />
        <meta property="og:description" content="Singapore's leading business broker firm for small and medium-sized enterprises. Strategic advisory to help sell your business." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/258b4ec3-7606-47e4-92b0-1f58126536cd.png" />
        <meta property="og:url" content="https://eaststreetadvisory.sg" />

        <!-- Twitter Meta Tags -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eaststreetadv" />
        <meta name="twitter:image" content="/lovable-uploads/258b4ec3-7606-47e4-92b0-1f58126536cd.png" />
        
        <!-- Favicon -->
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        
        <!-- Google Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Forum&display=swap">
        
        ${headHtml ? dangerouslySkipEscape(headHtml) : '<title>East Street Advisory | Singapore\'s Top SME Business Broker</title><meta name="description" content="East Street Advisory - Leading business broker in Singapore helping owners maximize value through strategic transactions and expert advisory services." />'}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
        <script type="module">
          // Navbar interactivity
          function initNavbar() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const hamburgerIcon = document.getElementById('hamburger-icon');
            const closeIcon = document.getElementById('close-icon');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
            
            if (mobileMenuButton && mobileMenu && hamburgerIcon && closeIcon) {
              let isOpen = false;
              
              function toggleMobileMenu() {
                isOpen = !isOpen;
                
                if (isOpen) {
                  mobileMenu.classList.remove('hidden');
                  hamburgerIcon.classList.add('hidden');
                  closeIcon.classList.remove('hidden');
                } else {
                  mobileMenu.classList.add('hidden');
                  hamburgerIcon.classList.remove('hidden');
                  closeIcon.classList.add('hidden');
                }
              }
              
              function closeMobileMenu() {
                if (isOpen) {
                  isOpen = false;
                  mobileMenu.classList.add('hidden');
                  hamburgerIcon.classList.remove('hidden');
                  closeIcon.classList.add('hidden');
                }
              }
              
              mobileMenuButton.addEventListener('click', toggleMobileMenu);
              
              mobileNavLinks.forEach(link => {
                link.addEventListener('click', closeMobileMenu);
              });
            }
            
            // Scroll effect
            const navbar = document.getElementById('navbar');
            if (navbar) {
              function handleScroll() {
                const offset = window.scrollY;
                
                if (offset > 50) {
                  navbar.classList.add('shadow-md', 'py-3');
                  navbar.classList.remove('py-5');
                } else {
                  navbar.classList.remove('shadow-md', 'py-3');
                  navbar.classList.add('py-5');
                }
              }
              
              window.addEventListener('scroll', handleScroll);
            }
          }
          
          // Initialize on load
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initNavbar);
          } else {
            initNavbar();
          }
        </script>
        
        <!-- Web3Forms Script -->
        <script>
          // Handle form submission
          function handleContactFormSubmit(e) {
            e.preventDefault();
            
            const form = e.target;
            const formData = new FormData(form);
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...';
            
            // Prepare form data for web3forms (matching original React logic)
            const data = {
              access_key: "74e8a036-1522-4498-944d-6893a47c2412",
              name: formData.get('name').trim(),
              email: formData.get('email').trim(),
              phone: formData.get('phone')?.trim() || "Not provided",
              company: formData.get('company')?.trim() || "Not provided",
              message: formData.get('message').trim(),
              subject: \`New inquiry from \${formData.get('name')} - East Street Advisory\`,
              from_name: "East Street Advisory Website",
              _template: "table"
            };
            
            console.log('Form submission started:', data);
            
            // Submit to web3forms
            fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(data),
            })
            .then(response => {
              console.log('Response status:', response.status);
              return response.json();
            })
            .then(result => {
              console.log('Response data:', result);
              
              if (result.success) {
                // Show success message (matching original React toast)
                alert('Message sent successfully! Thank you for contacting East Street Advisory. We\\'ll be in touch within 24 hours.');
                form.reset();
              } else {
                throw new Error(result.message || 'Form submission failed');
              }
            })
            .catch(error => {
              console.error('Form submission error:', error);
              alert('There was a problem sending your message. Please try again or contact us directly at contact@eaststreetadvisory.com');
            })
            .finally(() => {
              // Re-enable button and restore original text
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalBtnText;
            });
          }
          
          // Initialize contact form when DOM is ready
          function initContactForm() {
            const contactForm = document.querySelector('form[data-contact-form]');
            if (contactForm) {
              contactForm.addEventListener('submit', handleContactFormSubmit);
            }
          }
          
          // Initialize contact form on load
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initContactForm);
          } else {
            initContactForm();
          }
        </script>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which will be serialized and passed to the browser
    }
  }
}