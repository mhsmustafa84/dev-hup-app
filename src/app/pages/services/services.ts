import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  popular?: boolean;
  category: 'web' | 'mobile' | 'design' | 'consulting';
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements OnInit, AfterViewInit {
  services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Modern, scalable web applications built with cutting-edge technologies.',
      icon: '💻',
      category: 'web',
      features: [
        'React & Angular Development',
        'Node.js Backend',
        'Database Design',
        'API Integration',
        'Performance Optimization',
        'SEO Optimization'
      ],
      price: 'From $5,000'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      category: 'mobile',
      features: [
        'React Native',
        'Flutter Development',
        'Native iOS/Android',
        'App Store Publishing',
        'Push Notifications',
        'Offline Capabilities'
      ],
      price: 'From $8,000'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging and intuitive experiences.',
      icon: '🎨',
      category: 'design',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'User Testing',
        'Design Systems',
        'Accessibility'
      ],
      price: 'From $3,000'
    },
    {
      id: 4,
      title: 'Digital Consulting',
      description: 'Strategic guidance to transform your business with digital solutions.',
      icon: '💡',
      category: 'consulting',
      features: [
        'Digital Strategy',
        'Technology Assessment',
        'Process Optimization',
        'Team Training',
        'Project Management',
        'Ongoing Support'
      ],
      price: 'From $2,000',
      popular: true
    },
    {
      id: 5,
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with modern features and integrations.',
      icon: '🛒',
      category: 'web',
      features: [
        'Custom E-commerce Platform',
        'Payment Integration',
        'Inventory Management',
        'Analytics & Reporting',
        'Mobile Commerce',
        'Multi-channel Selling'
      ],
      price: 'From $10,000'
    },
    {
      id: 6,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment solutions.',
      icon: '☁️',
      category: 'consulting',
      features: [
        'AWS/Azure/GCP Setup',
        'CI/CD Pipelines',
        'Container Orchestration',
        'Monitoring & Logging',
        'Security Implementation',
        'Cost Optimization'
      ],
      price: 'From $4,000'
    }
  ];

  selectedCategory: string = 'all';
  filteredServices: Service[] = this.services;
  activeService: number | null = null;

  categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'web', name: 'Web Development', icon: '💻' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
    { id: 'design', name: 'UI/UX Design', icon: '🎨' },
    { id: 'consulting', name: 'Consulting', icon: '💡' }
  ];

  ngOnInit() {
    // Initialize component
  }

  ngAfterViewInit() {
    this.initAnimations();
  }

  filterServices(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredServices = this.services;
    } else {
      this.filteredServices = this.services.filter(service => service.category === category);
    }
  }

  setActiveService(serviceId: number | null) {
    this.activeService = serviceId;
  }

  trackByServiceId(index: number, service: Service): number {
    return service.id;
  }

  private initAnimations() {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.service-card, .category-filter, .hero-content');
      animatedElements.forEach(el => observer.observe(el));
    }, 100);
  }
} 