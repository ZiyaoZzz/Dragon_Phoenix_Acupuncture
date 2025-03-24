class PageBuilder {
    constructor(pageTitle, basePath = '') {
        this.pageTitle = pageTitle;
        this.basePath = basePath; // For handling relative paths from subdirectories
    }

    async buildPage(mainContent) {
        const header = await this.createHeader();
        const footer = await this.createFooter();
        
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${this.pageTitle}</title>
            <link rel="stylesheet" href="${this.basePath}style.css">
            <script src="${this.basePath}js/main.js"></script>
        </head>
        <body>
            ${header}
            ${mainContent}
            ${footer}
        </body>
        </html>
        `;
    }

    async createHeader() {
        return `
        <header>
            <div class="logo-container">
                <img src="${this.basePath}images/clinic_logo.png" alt="Dragon Phoenix Acupuncture Logo">
            </div>
            
            <div class="contact-info">
                <div class="contact-item">
                    <img src="${this.basePath}images/phone.png" alt="Phone">
                    <div class="contact-text">
                        <span>(407) 932-4818</span>
                        <span class="subtitle">Free Consultation</span>
                    </div>
                </div>
                
                <div class="contact-item">
                    <img src="${this.basePath}images/location.png" alt="Location">
                    <div class="contact-text">
                        <span>2579 Oak Street Kissimmee,</span>
                        <span class="subtitle">Florida 34744, USA</span>
                    </div>
                </div>
                
                <div class="contact-item">
                    <img src="${this.basePath}images/clock.png" alt="Hours">
                    <div class="contact-text">
                        <span>Monday-Friday: 9AM - 5PM, Saturday By appointments only</span>
                        <span class="subtitle">Sunday: CLOSED</span>
                    </div>
                </div>
            </div>
        </header>

        <nav>
            <ul>
                <li><a href="${this.basePath}index.html">HOME</a></li>
                <li><a href="${this.basePath}physicians/index.html">PHYSICIANS</a></li>
                <li><a href="${this.basePath}faqs/index.html">COMMON FAQS</a></li>
                <li><a href="${this.basePath}brochures/index.html">ACUPUNCTURE BROCHURES</a></li>
                <li><a href="${this.basePath}conditions/index.html">CONDITIONS</a></li>
                <li><a href="${this.basePath}gallery/index.html">GALLERY</a></li>
                <li><a href="${this.basePath}contact/index.html">CONTACT US</a></li>
            </ul>
        </nav>
        `;
    }

    async createFooter() {
        return `
        <footer>
            <div class="footer-content">
                <div class="footer-section about-section">
                    <h3>About Dragon Phoenix</h3>
                    <p>Xiu Feng Searcy: Over 50+ years - experienced in Eastern Medicine, 25 years as MD in China, certified by National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM), member-Florida Acupuncture Association.</p>
                    <a href="${this.basePath}about/index.html">Learn more about us →</a>
                </div>

                <div class="footer-section">
                    <h3>Contact details</h3>
                    <ul class="contact-details">
                        <li>📍 2579 Oak Street, Kissimmee, Florida 34744</li>
                        <li>📞 (407) 932-4818</li>
                        <li>📠 (407) 932-2888</li>
                        <li>✉️ dragonphoenixMD@netscape.net</li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Our gallery</h3>
                    <div class="footer-gallery-grid">
                        <a href="${this.basePath}gallery/index.html"><img src="${this.basePath}images/dragon_phoenix_3.png" alt="Acupuncture treatment"></a>
                        <a href="${this.basePath}gallery/index.html"><img src="${this.basePath}images/dragon_phoenix_4.png" alt="Clinic interior"></a>
                        <a href="${this.basePath}gallery/index.html"><img src="${this.basePath}images/dragon_phoenix_5.png" alt="Treatment room"></a>
                        <a href="${this.basePath}gallery/index.html"><img src="${this.basePath}images/dragon_phoenix_6.png" alt="Herbal medicine"></a>
                        <a href="${this.basePath}gallery/index.html"><img src="${this.basePath}images/dragon_phoenix_7.png" alt="Clinic entrance"></a>
                        <a href="${this.basePath}gallery/index.html"><img src="${this.basePath}images/dragon_phoenix_8.png" alt="Treatment technique"></a>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Opening time</h3>
                    <ul class="opening-hours">
                        <li><span>Monday</span> <span>9AM - 5PM</span></li>
                        <li><span>Tuesday</span> <span>9AM - 5PM</span></li>
                        <li><span>Wednesday</span> <span>9AM - 5PM</span></li>
                        <li><span>Thursday</span> <span>9AM - 5PM</span></li>
                        <li><span>Friday</span> <span>9AM - 5PM</span></li>
                        <li><span>Saturday</span> <span class="appointment">By Appointment only</span></li>
                        <li><span>Sunday</span> <span class="closed">CLOSED</span></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; ${new Date().getFullYear()} Dragon Phoenix Acupuncture. All Rights Reserved.</p>
            </div>
        </footer>
        `;
    }
}

// Usage example for each page:
// const builder = new PageBuilder('Page Title', '../'); // Use '../' for subdirectory pages, '' for root
// const mainContent = document.querySelector('main').outerHTML;
// builder.buildPage(mainContent).then(page => document.documentElement.innerHTML = page);