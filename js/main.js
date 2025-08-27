// Global Variables
let currentProjectFilter = 'All';
let currentResourceFilter = 'All';
let activeSection = 'home';

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const themeToggle = document.getElementById('themeToggle');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const contactForm = document.getElementById('contactForm');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeParticles();
    initializeProjects();
    // Removed initializeTeam() since it's now static HTML
    initializeResources();
    initializeCertifications();
    initializeContactForm();
    initializeScrollEffects();
    initializeIntersectionObserver();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark', savedTheme === 'dark');
    } else {
        document.body.classList.remove('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Navigation
function initializeNavigation() {
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    window.addEventListener('scroll', updateActiveSection);
}

function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
}

function handleNavClick(e) {
    e.preventDefault();
    const targetSection = e.target.getAttribute('data-section');
    scrollToSection(targetSection);
    
    mobileMenuBtn.classList.remove('active');
    mobileNav.classList.remove('active');
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function updateActiveSection() {
    const sections = ['home', 'projects', 'team', 'resources', 'certifications', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                if (activeSection !== sectionId) {
                    activeSection = sectionId;
                    updateNavLinks(sectionId);
                }
                break;
            }
        }
    }
}

function updateNavLinks(activeSectionId) {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        link.classList.toggle('active', section === activeSectionId);
    });
}

// Particles Animation
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 4 + 2;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 15;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    container.appendChild(particle);
}

// Projects Section
function initializeProjects() {
    renderProjects(projectsData);
    setupProjectFilters();
    setupProjectSearch();
}

function renderProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!projectsGrid) return;
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    if (noResults) noResults.style.display = 'none';
    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card" style="animation-delay: ${index * 0.1}s">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay"></div>
                <div class="project-category">${project.category}</div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link github">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Code
                    </a>
                    ${project.liveUrl ? `
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link demo">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15,3 21,3 21,9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            currentProjectFilter = category;
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterProjects();
        });
    });
}

function setupProjectSearch() {
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }
}

function filterProjects() {
    const searchTerm = document.getElementById('projectSearch').value.toLowerCase();
    const filteredProjects = projectsData.filter(project => {
        const matchesCategory = currentProjectFilter === 'All' || project.category === currentProjectFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm) ||
                                 project.description.toLowerCase().includes(searchTerm) ||
                                 project.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return matchesCategory && matchesSearch;
    });
    renderProjects(filteredProjects);
}

// Resources Section
function initializeResources() {
    renderResources(resourcesData);
    setupResourceFilters();
    setupResourceSearch();
}

function renderResources(resources) {
    const resourcesGrid = document.getElementById('resourcesGrid');
    if (!resourcesGrid) return;

    resourcesGrid.innerHTML = resources.map((resource, index) => `
        <div class="resource-card" style="animation-delay: ${index * 0.1}s">
            <div class="resource-header">
                <div class="resource-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14,2 14,8 20,8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10,9 9,9 8,9"></polyline>
                    </svg>
                </div>
                <div class="resource-info">
                    <h3 class="resource-title">${resource.title}</h3>
                    <div class="resource-meta">
                        <span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            ${resource.category}
                        </span>
                        <span>${resource.fileType}</span>
                        <span>${resource.size}</span>
                    </div>
                </div>
            </div>
            <p class="resource-description">${resource.description}</p>
            <div class="resource-updated">Updated: ${new Date(resource.lastUpdated).toLocaleDateString()}</div>
            <div class="resource-actions">
                <a href="${resource.previewUrl}" target="_blank" class="resource-btn preview">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Preview
                </a>
                <a href="${resource.downloadUrl}" download="${resource.title}.pdf" class="resource-btn download">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7,10 12,15 17,10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download
                </a>
            </div>
        </div>
    `).join('');
}

function setupResourceFilters() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const resourceSearch = document.getElementById('resourceSearch');
    if (!tabButtons || !resourceSearch) return;

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            currentResourceFilter = category;
            tabButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterResources();
        });
    });
}

function setupResourceSearch() {
    const searchInput = document.getElementById('resourceSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterResources);
    }
}

function filterResources() {
    const searchTerm = document.getElementById('resourceSearch').value.toLowerCase();
    
    const filteredResources = resourcesData.filter(resource => {
        const matchesCategory = currentResourceFilter === 'All' || resource.category === currentResourceFilter;
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm) ||
                                 resource.description.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    
    renderResources(filteredResources);
}

// Certifications Section
function initializeCertifications() {
    renderCertifications();
}

function renderCertifications() {
    const certificationsGrid = document.getElementById('certificationsGrid');
    if (!certificationsGrid) return;
    
    certificationsGrid.innerHTML = certificationsData.map((cert, index) => `
        <div class="cert-card" style="animation-delay: ${index * 0.1}s">
            <div class="cert-image">
                <img src="${cert.image}" alt="${cert.title}" loading="lazy">
                <div class="cert-level ${cert.level.toLowerCase()}">${cert.level}</div>
                <div class="cert-category-badge ${cert.category.toLowerCase().replace('/', '-').replace(' ', '-')}">${cert.category}</div>
            </div>
            <div class="cert-content">
                <div class="cert-header">
                    <div class="cert-award-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
                        </svg>
                    </div>
                    <div>
                        <h3 class="cert-title">${cert.title}</h3>
                        <p class="cert-provider">${cert.provider}</p>
                    </div>
                </div>
                <p class="cert-description">${cert.description}</p>
                <div class="cert-meta">
                    <div class="cert-duration">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        <span>${cert.duration}</span>
                    </div>
                    <div class="cert-rating">
                        ${renderStars(cert.rating)}
                        <span>${cert.rating}</span>
                    </div>
                </div>
                <div class="cert-skills">
                    ${cert.skills.slice(0, 3).map(skill => `<span class="cert-skill">${skill}</span>`).join('')}
                    ${cert.skills.length > 3 ? `<span class="cert-skill">+${cert.skills.length - 3}</span>` : ''}
                </div>
                <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="cert-link">
                    Start Learning
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        </div>
    `).join('');
}

function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const filled = i <= Math.floor(rating);
        stars.push(`
            <svg class="star ${filled ? 'filled' : 'empty'}" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
            </svg>
        `);
    }
    return stars.join('');
}

// Contact Form
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    const btnText = submitBtn.querySelector('.btn-text');
    const loadingSpinner = submitBtn.querySelector('.loading-spinner');
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    submitBtn.disabled = true;
    btnText.textContent = 'Sending';
    if (loadingSpinner) loadingSpinner.style.display = 'block';
    if (formStatus) formStatus.style.display = 'none';
    
    try {
        const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
        
        await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });
        
        if (formStatus) {
            formStatus.className = 'form-status success';
            formStatus.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22,4 12,14.01 9,11.01"></polyline>
                </svg>
                Message sent successfully! We'll get back to you soon.
            `;
            formStatus.style.display = 'flex';
        }
        
        contactForm.reset();
        
    } catch (error) {
        console.error('Form submission error:', error);
        if (formStatus) {
            formStatus.className = 'form-status error';
            formStatus.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                There was an error sending your message. Please try again.
            `;
            formStatus.style.display = 'flex';
        }
    } finally {
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        if (loadingSpinner) loadingSpinner.style.display = 'none';
        
        setTimeout(() => {
            if (formStatus) formStatus.style.display = 'none';
        }, 5000);
    }
}

// Scroll Effects
function initializeScrollEffects() {
    window.addEventListener('scroll', handleScroll);
}

function handleScroll() {
    const scrollY = window.scrollY;
    
    if (scrollTopBtn) {
        if (scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    
    if (navbar) {
        if (scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.body.classList.contains('dark')) {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            if (document.body.classList.contains('dark')) {
                navbar.style.background = 'rgba(0, 0, 0, 0.1)';
            }
        }
    }
}

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Intersection Observer for animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.project-card, .team-card, .resource-card, .cert-card, .stat-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-on-scroll');
        observer.observe(el);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}