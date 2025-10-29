
# 🐉 Dragon Phoenix Acupuncture
**Bringing Traditional Chinese Medicine to the Modern Web**

## 🌿 Overview

**Dragon Phoenix Acupuncture** is a modern, multilingual website designed for a long-established Traditional Chinese Medicine clinic based in **Kissimmee, Florida**, operating locally for over 20 years.

The project reimagines the clinic’s digital presence through an elegant, responsive, and culturally inclusive web experience. It blends Eastern medical tradition with contemporary web technology, making acupuncture and holistic health more approachable for patients across linguistic and cultural backgrounds.

## ✨ Key Features

* **Responsive UI** – fully optimized for desktop, tablet, and mobile devices.
* **Multilingual system** – dynamic content switching between **English, Chinese, and Spanish** via i18next.
* **Cultural accessibility** – multilingual storytelling and localized content for diverse communities.
* **Modular design system** – reusable, scalable UI components built with React + TypeScript.
* **Art Gallery Management System** – interactive gallery supporting 50 + artworks with CRUD functionality and categorization.
* **SEO & GSC optimization** – sitemap.xml, robots.txt, and llms.txt configured for discoverability by AI crawlers and search engines.
* **Performance and accessibility** – designed with Core Web Vitals, Lighthouse, and accessibility best practices in mind.

## 🧩 Tech Stack

| Layer                    | Technology                                           |
| :----------------------- | :--------------------------------------------------- |
| **Frontend**             | React + TypeScript                                   |
| **Styling**              | Tailwind CSS / SCSS                                  |
| **Internationalization** | i18next + react-i18next                              |
| **Build Tool**           | Vite / Create React App                              |
| **Hosting**              | GitHub Pages / Vercel                                |
| **Version Control**      | Git + GitHub                                         |
| **Optimization Tools**   | Google Search Console (GSC), robots.txt, sitemap.xml |

## 🏗️ Project Structure

```
/
├── index.html
├── home_page.css
├── style.css
├── js/
├── images/
├── gallery/
├── physicians/
├── brochures/
├── faq/
├── contact/
└── ...
```

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ZiyaoZzz/Dragon_Phoenix_Acupuncture.git
   cd Dragon_Phoenix_Acupuncture
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Deploy**
   Upload the `dist` (or `build`) folder to your hosting provider (GitHub Pages, Vercel, etc.).

## 🌐 Multilingual Support

The site uses a lightweight i18n system for dynamic translation loading.

```
/locales
  ├── en.json
  ├── zh.json
  └── es.json
```

Each language pack defines key-value pairs for UI text, content sections, and navigation menus. Language switching is implemented via a persistent user setting in the navbar.

## 🚀 SEO & Search Integration

* `sitemap.xml` generated for URL indexing.
* `robots.txt` explicitly allows major search and AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, etc.).
* `llms.txt` provides metadata and attribution guidelines for model training.
* Integrated with **Google Search Console** for performance analytics, crawling insights, and keyword tracking.

## 🔄 Modernization: From Static HTML to React + TypeScript

Originally built as a traditional static website using plain HTML, CSS, and JavaScript, the project was fully refactored into a modern React + TypeScript architecture to enable modularity, maintainability, and scalability.
This transformation introduced a component-driven structure with reusable UI logic, type-safe data handling, and a responsive design system built with Tailwind CSS.
The migration allowed dynamic routing, multilingual integration, and simplified future expansion (e.g., online booking, educational content, and patient dashboards).

Key improvements include:

⚙️ Componentization – refactored static sections into reusable React components.
🧠 Type safety – introduced TypeScript for stronger type inference and error prevention.
🌍 Dynamic rendering – replaced hard-coded multilingual text with an i18next translation layer.
⚡ Performance boost – optimized loading with Vite’s ESBuild and modern bundling pipeline.
🧩 Scalability – ready for additional modules such as API-driven appointment booking and CMS integration.

This upgrade reflects a shift from a purely presentational site to a modern, maintainable single-page application, aligning with professional web-engineering standards and long-term scalability goals.

## 👩‍💻 Author

**Ziyao (Zoey) Zhou**
Software Engineer | Cognitive Science + Machine Learning
University of California, San Diego

* 🌍 [Portfolio](https://github.com/ZiyaoZzz)
* ✉️ [z1093935026@gmail.com](mailto:z1093935026@gmail.com)

---
