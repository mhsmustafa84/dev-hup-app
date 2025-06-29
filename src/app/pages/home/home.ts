import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, AfterViewInit {
  stats = [
    { current: 0, target: 500, label: 'Projects Completed' },
    { current: 0, target: 50, label: 'Happy Clients' },
    { current: 0, target: 5, label: 'Years Experience' },
    { current: 0, target: 24, label: 'Hours Support' }
  ];

  private animatedStats = new Set<number>();

  ngOnInit() {
    // Initialize stats
  }

  ngAfterViewInit() {
    this.initCounterAnimation();
  }

  private initCounterAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statIndex = parseInt(entry.target.getAttribute('data-stat-index') || '0');
          if (!this.animatedStats.has(statIndex)) {
            this.animateCounter(statIndex);
            this.animatedStats.add(statIndex);
          }
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all stat items
    setTimeout(() => {
      const statItems = document.querySelectorAll('.stat-item');
      statItems.forEach((item, index) => {
        item.setAttribute('data-stat-index', index.toString());
        observer.observe(item);
      });
    }, 100);
  }

  private animateCounter(statIndex: number) {
    const stat = this.stats[statIndex];
    const duration = 2500; // 2.5 seconds
    const startTime = Date.now();
    const startValue = 0;
    const endValue = stat.target;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = easeOutQuart(progress);
      stat.current = startValue + (endValue - startValue) * easedProgress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        stat.current = endValue;
        // Add a small bounce effect when reaching the target
        this.addBounceEffect(statIndex);
      }
    };

    requestAnimationFrame(animate);
  }

  private addBounceEffect(statIndex: number) {
    const statElement = document.querySelector(`[data-stat-index="${statIndex}"] .stat-number`);
    if (statElement) {
      statElement.classList.add('bounce');
      setTimeout(() => {
        statElement.classList.remove('bounce');
      }, 600);
    }
  }

  getStatNumber(index: number): number {
    return Math.floor(this.stats[index].current);
  }
}
