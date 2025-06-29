# 🚀 DevHub - Modern Angular Application

A cutting-edge Angular application showcasing modern web development practices, creative design, and interactive user experiences. Built with Angular 20 and featuring stunning animations, responsive design, and comprehensive functionality.

![DevHub Preview](https://img.shields.io/badge/Angular-20.0.5-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Styling-pink?style=for-the-badge&logo=sass)

## ✨ Features

### 🎨 **Creative Design & Animations**
- **3D Cube Animations**: Rotating cube with emoji faces in hero section
- **Floating Elements**: Animated shapes and icons throughout the app
- **Smooth Transitions**: CSS animations and micro-interactions
- **Gradient Backgrounds**: Beautiful color transitions and overlays
- **Glass Morphism**: Modern backdrop blur effects
- **Hover Effects**: Interactive elements with scale and glow animations

### 📱 **Responsive Design**
- **Mobile-First Approach**: Optimized for all screen sizes
- **Adaptive Layouts**: Flexible grid systems and breakpoints
- **Touch-Friendly**: Optimized for mobile interactions
- **Cross-Browser Compatible**: Works on all modern browsers

### ⚡ **Performance Optimized**
- **Lazy Loading**: Route-based code splitting
- **Intersection Observer**: Efficient scroll-triggered animations
- **TrackBy Functions**: Optimized ngFor performance
- **CSS Animations**: Hardware-accelerated transforms
- **Bundle Optimization**: Minimal bundle sizes

### 🎯 **Interactive Elements**
- **Animated Counters**: Stats section with counting animations
- **Category Filtering**: Dynamic service filtering
- **Hover States**: Rich interactive feedback
- **Smooth Navigation**: Seamless page transitions

## 🏗️ **Pages & Components**

### 🏠 **Home Page**
- **Hero Section**: 3D cube animations and floating elements
- **Features Grid**: Interactive feature cards with hover effects
- **Animated Stats**: Counter animations with intersection observer
- **Services Preview**: Modern service cards with flip animations
- **Testimonials**: Client feedback with smooth transitions
- **Call-to-Action**: Engaging CTA section with gradient backgrounds

### 🎨 **Services Page**
- **Service Categories**: 6 comprehensive service offerings
- **Interactive Filtering**: Dynamic category-based filtering
- **Detailed Service Cards**: Features, pricing, and action buttons
- **Process Workflow**: 4-step process visualization
- **Popular Service Badges**: Highlighted featured services
- **Responsive Grid**: Adaptive layouts for all devices

### 👥 **About Page**
- **Company Story**: Engaging narrative with visual elements
- **Team Section**: Team member cards with hover effects
- **Values Showcase**: Core values with animated icons
- **Statistics Display**: Company metrics with animations

### 📞 **Contact Page**
- **Interactive Form**: Modern form design with validation
- **Contact Information**: Multiple contact methods
- **FAQ Section**: Expandable FAQ items
- **Map Integration**: Location display (placeholder)

### 🧭 **Navigation**
- **Modern Navbar**: Glass morphism design with blur effects
- **Active States**: Visual feedback for current page
- **Mobile Menu**: Responsive hamburger menu
- **Smooth Transitions**: Animated menu interactions

## 🛠️ **Technology Stack**

- **Framework**: Angular 20.0.5
- **Language**: TypeScript 5.8.3
- **Styling**: SCSS with modern CSS features
- **Build Tool**: Angular CLI 20.0.4
- **Package Manager**: pnpm 10.12.4
- **Node.js**: 22.16.0

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd angular-test-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm start
   # or
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📦 **Available Scripts**

```bash
# Development
npm start          # Start development server
npm run build      # Build for production
npm run test       # Run unit tests
npm run e2e        # Run end-to-end tests

# Additional
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

## 🏗️ **Project Structure**

```
src/
├── app/
│   ├── components/
│   │   └── navbar/           # Navigation component
│   │   ├── pages/
│   │   │   ├── home/            # Home page with animations
│   │   │   ├── about/           # About page
│   │   │   ├── services/        # Services page (NEW!)
│   │   │   ├── contact/         # Contact page
│   │   │   └── not-found/       # 404 page
│   │   ├── app.routes.ts        # Route configuration
│   │   └── app.config.ts        # App configuration
│   ├── assets/                  # Static assets
│   └── styles/                  # Global styles
```

## 🎨 **Design System**

### **Color Palette**
- **Primary**: `#667eea` to `#764ba2` (Gradient)
- **Accent**: `#ffd700` to `#ffed4e` (Gold Gradient)
- **Background**: `#f8f9fa` (Light Gray)
- **Text**: `#333` (Dark Gray)

### **Typography**
- **Headings**: Bold, large-scale typography
- **Body**: Clean, readable fonts
- **Accent**: Gradient text effects

### **Animations**
- **Duration**: 0.3s - 2.5s (context-dependent)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Triggers**: Hover, scroll, intersection

## 🔧 **Key Features Implementation**

### **Animated Counters**
```typescript
// Intersection Observer for scroll-triggered animations
private initCounterAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.animateCounter(statIndex);
      }
    });
  });
}
```

### **Service Filtering**
```typescript
// Dynamic service filtering by category
filterServices(category: string) {
  this.selectedCategory = category;
  this.filteredServices = category === 'all' 
    ? this.services 
    : this.services.filter(service => service.category === category);
}
```

### **Responsive Design**
```scss
// Mobile-first responsive design
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
```

## 🌟 **Recent Updates**

### **v2.0.0 - Services Page & Enhanced Animations**
- ✨ Added comprehensive Services page
- 🎨 Implemented category filtering system
- 🚀 Enhanced counter animations with easing
- 📱 Improved responsive design
- 🎯 Added interactive hover effects
- 🔧 Optimized performance with trackBy functions

### **v1.0.0 - Initial Release**
- 🏠 Home page with 3D animations
- 👥 About page with team showcase
- 📞 Contact page with form validation
- 🧭 Modern navigation system
- 📱 Responsive design implementation

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Angular Team**: For the amazing framework
- **Design Inspiration**: Modern web design trends
- **Community**: Angular and web development community

---

**Built with ❤️ using Angular 20**

*For questions or support, please open an issue in the repository.*
