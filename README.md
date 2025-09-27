# Dragon Phoenix Acupuncture Website

A modern React-based website for Dragon Phoenix Acupuncture clinic in Kissimmee, FL.

## Features

- 🌐 Multi-language support (English, Spanish, Chinese)
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast loading with Vite
- 🚀 Deployed on GitHub Pages

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Automatic Deployment

The website is automatically deployed to GitHub Pages when you push to the `main` or `master` branch. The deployment is handled by GitHub Actions.

### Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### GitHub Pages Configuration

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The site will be available at: `https://yourusername.github.io/Dragon_Phoenix_Acupuncture/`

## Project Structure

```
├── src/
│   ├── common/          # Reusable components
│   ├── pages/           # Page components
│   ├── i18n/           # Internationalization
│   └── main.tsx        # App entry point
├── public/             # Static assets
├── dist/              # Build output
└── backup-static-version/ # Backup of original static site
```

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- i18next (Internationalization)
- React i18next

## Backup

The original static HTML version has been backed up in the `backup-static-version/` directory.

## License

This project is private and proprietary to Dragon Phoenix Acupuncture.