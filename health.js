document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // 1. Navbar & Logo Animation
    gsap.from(".nav, .logo, h1", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
    });
    
    // 2. Hero Section Animations
    gsap.from(".heading1", {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out"
    });
    
    gsap.from(".heading2", {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out"
    });
    
    gsap.from(".img", {
        x: 130,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power2.out",
        rotation: 2 // subtle rotation
    });
    
    // Button animations
    gsap.from([".btn1", ".btn2"], {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.1
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.3,
                ease: "power3.out"
            });
            
            if (btn.classList.contains('btn1')) {
                gsap.to(btn, {
                    boxShadow: '0 0 15px rgba(167, 119, 227, 0.7)',
                    duration: 0.3
                });
            }
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            if (btn.classList.contains('btn1')) {
                gsap.to(btn, {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    duration: 0.3
                });
            }
        });
    });
    
    // 3. Features Section Animation
    gsap.from(".featuersHeading", {
        scrollTrigger: {
            trigger: ".featuersHeading",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
    
    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".features",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
    });
    
    // Card hover effects
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                ease: "power2.out"
            });
        });
    });
    
    // 4. Info Section Animation
    gsap.from(".downloads", {
        scrollTrigger: {
            trigger: ".info",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
    });
    
    // 5. Pricing Section Animation
    gsap.from(".pricingContainer h1", {
        scrollTrigger: {
            trigger: ".pricingContainer",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
    
    gsap.from(".crd", {
        scrollTrigger: {
            trigger: ".pricing-cards",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
    });
    
    // Pricing card hover effects
    document.querySelectorAll('.crd').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -15,
                duration: 0.3,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                ease: "power2.out"
            });
        });
    });
    
 
    
});