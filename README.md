# Gaurav's Portfolio 🚀

[![Angular](https://img.shields.io/badge/Angular-19.1.4-DD0031?logo=angular)](https://angular.io/)
[![Docker](https://img.shields.io/badge/Docker-✓-2496ED?logo=docker)](https://www.docker.com/)
[![Responsive](https://img.shields.io/badge/Responsive-✓-44CC11)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

> Modern portfolio for Engineering roles featuring smooth animations and technical depth

![Portfolio Preview](docs/preview.gif)

## 🦾 Project Overview
A single-page reactive portfolio showcasing robotics projects and AI expertise, built with:
- Angular 19 with Material Design components
- Angular animations for smooth scroll animations
- Docker containerization for deployment
- Optimized for performance

## ✨ Key Features
- **Robotics-First Design**: Clean layout optimized for technical content
- **Reactive Animations**: Scroll-triggered timelines and 3D transforms
- **Impact Metrics**: STAR-method project presentation
- **Docker Ready**: Production-ready container configuration
- **Accessibility**: WCAG 2.1 compliant components

## 🛠 Tech Stack
- **Technologies**: Angular 19 • TypeScript • SCSS • Angular Material • Angular Animations • Docker • Nginx • ESLint

## 🚀 Installation
```bash
# Clone repository
git clone https://github.com/khgaurav/angular19-portfolio.git
cd angular19-portfolio

# Install dependencies (use --force if needed)
npm install --force

# Start development server
ng serve
```
Visit `http://localhost:4200`
```yaml
services:
  angular19-portfolio:
    build: .
    ports:
      - 5699:80
    restart: always
```
Access at `https://gauravkh.co.in`

## 🔧 Customization Guide
### 1. Content Updates
| Section       | Location                          |
|---------------|-----------------------------------|
| Hero          | `src/app/components/hero`         |
| Projects      | `src/app/components/projects`     |
| Experience    | `src/app/components/experience`   |
| Skills        | `src/app/components/skills`       |
| Contact Form  | `src/app/components/contact`      |

### 2. Styling
```scss
// Custom theme (src/styles.scss)
$primary: #0a192f; // Navy
$accent: #64ffda;  // Green
```

## 🤖 Roadmap
- [ ] WebGL robot model viewer
- [ ] Dark mode toggle
- [ ] SEO optimizations
