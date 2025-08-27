// --- Resource Data (imported from data.js) ---
// const resourcesData = [...];

// --- 1. Light/Dark Mode Toggle ---
const modeToggle = document.getElementById('mode-toggle');
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function checkMode() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}
checkMode();
if (modeToggle) {
    modeToggle.addEventListener('click', toggleDarkMode);
}

// --- 2. Projects Section Filter & Search (if applicable on the page) ---
document.addEventListener('DOMContentLoaded', () => {
    const projectFilter = document.getElementById('project-filter');
    const projectSearch = document.getElementById('project-search');
    const projectGrid = document.querySelector('.project-grid');

    if (projectGrid && projectFilter && projectSearch) {
        function filterAndSearchProjects() {
            const selectedCategory = projectFilter.value.toLowerCase();
            const searchTerm = projectSearch.value.toLowerCase();
            const projects = projectGrid.querySelectorAll('.project-card');

            projects.forEach(project => {
                const category = project.getAttribute('data-category').toLowerCase();
                const title = project.querySelector('h3').textContent.toLowerCase();
                const description = project.querySelector('p').textContent.toLowerCase();
                
                const categoryMatch = (selectedCategory === 'all' || category === selectedCategory);
                const searchMatch = (title.includes(searchTerm) || description.includes(searchTerm));
                
                if (categoryMatch && searchMatch) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        }
        projectFilter.addEventListener('change', filterAndSearchProjects);
        projectSearch.addEventListener('input', filterAndSearchProjects);
    }

    // --- 3. Resources Section Tab & Card Rendering ---
    const resourcesSection = document.getElementById('resources-page');
    if (resourcesSection) {
        renderResources();
    }

    function renderResources() {
        const tabsContainer = document.querySelector('.tabs');
        const contentContainer = document.getElementById('resources-content');

        const uniqueCategories = [...new Set(resourcesData.map(res => res.category))];
        tabsContainer.innerHTML = ''; // Clear tabs
        contentContainer.innerHTML = ''; // Clear content

        // Add 'All' button first
        const allTabButton = document.createElement('button');
        allTabButton.textContent = 'All';
        allTabButton.classList.add('tab-button', 'active');
        allTabButton.setAttribute('data-tab', 'All');
        tabsContainer.appendChild(allTabButton);

        // Create buttons for each category
        uniqueCategories.forEach(category => {
            const tabButton = document.createElement('button');
            tabButton.textContent = category;
            tabButton.classList.add('tab-button');
            tabButton.setAttribute('data-tab', category);
            tabsContainer.appendChild(tabButton);
        });

        // Render all resources by default
        renderFilteredResources('All');

        // Add event listeners for the new buttons
        tabsContainer.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                tabsContainer.querySelector('.tab-button.active').classList.remove('active');
                button.classList.add('active');
                renderFilteredResources(button.getAttribute('data-tab'));
            });
        });
    }

    function renderFilteredResources(category) {
        const contentContainer = document.getElementById('resources-content');
        contentContainer.innerHTML = '';

        const resourcesToRender = category === 'All' ? resourcesData : resourcesData.filter(res => res.category === category);

        if (resourcesToRender.length === 0) {
            contentContainer.innerHTML = '<p class="no-results-message">No resources found in this category.</p>';
        } else {
            resourcesToRender.forEach(res => {
                const cardHtml = `
                    <div class="resource-card glass">
                        <h3>${res.title}</h3>
                        <p>${res.description}</p>
                        <p class="resource-info">
                            <span>${res.fileType} - ${res.size}</span>
                            <span>Last updated: ${res.lastUpdated}</span>
                        </p>
                        <div class="resource-links">
                            <a href="${res.previewUrl}" target="_blank" class="preview-btn">Preview</a>
                            <a href="${res.downloadUrl}" download class="download-btn">Download</a>
                        </div>
                    </div>
                `;
                contentContainer.innerHTML += cardHtml;
            });
        }
    }
});

// --- 4. Contact Form Submission ---
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        formStatus.textContent = 'Sending...';
        formStatus.style.color = '#007bff';

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.style.color = 'green';
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            formStatus.textContent = 'Error sending message. Please try again later.';
            formStatus.style.color = 'red';
        });
    });
}