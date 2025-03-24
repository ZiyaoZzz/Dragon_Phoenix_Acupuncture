class PageBuilder {
    constructor(title, prefix = '') {
        this.title = title;
        this.prefix = prefix;
    }

    async loadComponent(path) {
        const response = await fetch(path);
        let text = await response.text();
        text = text.replace(/\${title}/g, this.title);
        text = text.replace(/\${prefix}/g, this.prefix);
        return text;
    }

    async buildPage(mainContent) {
        const header = await this.loadComponent('/components/header.html');
        const footer = await this.loadComponent('/components/footer.html');
        return header + mainContent + footer;
    }
}

// Usage example for each page:
// const builder = new PageBuilder('Page Title', '../'); // Use '../' for subdirectory pages, '' for root
// const mainContent = document.querySelector('main').outerHTML;
// builder.buildPage(mainContent).then(page => document.documentElement.innerHTML = page);