import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  
  // FAQ state management
  openFaqIndex: number | null = null;
  
  // FAQ data
  faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, and technical consulting.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. Small projects typically take 2-4 weeks, while larger projects can take 2-6 months. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer various support packages including maintenance, updates, hosting, and 24/7 technical support to ensure your project continues to perform optimally.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing options including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope and requirements.'
    }
  ];
  
  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
    // Here you would typically send the form data to your backend
  }
  
  toggleFaq(index: number) {
    console.log('FAQ clicked:', index, 'Current open:', this.openFaqIndex);
    if (this.openFaqIndex === index) {
      this.openFaqIndex = null; // Close if already open
      console.log('Closing FAQ');
    } else {
      this.openFaqIndex = index; // Open the clicked FAQ
      console.log('Opening FAQ:', index);
    }
  }
  
  isFaqOpen(index: number): boolean {
    return this.openFaqIndex === index;
  }
}
