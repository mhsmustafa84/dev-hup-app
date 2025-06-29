import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1 class="error-title">Page Not Found</h1>
        <p class="error-message">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div class="actions">
          <button class="btn btn-primary" (click)="goHome()">
            Go to Home
          </button>
          <button class="btn btn-secondary" (click)="goBack()">
            Go Back
          </button>
        </div>
        <div class="helpful-links">
          <p>Or try one of these pages:</p>
          <div class="links">
            <a routerLink="/" class="link">Home</a>
            <a routerLink="/about" class="link">About</a>
            <a routerLink="/contact" class="link">Contact</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .not-found-content {
      text-align: center;
      background: white;
      padding: 60px 40px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      max-width: 500px;
      width: 100%;
    }

    .error-code {
      font-size: 120px;
      font-weight: bold;
      color: #667eea;
      margin-bottom: 20px;
      line-height: 1;
    }

    .error-title {
      font-size: 32px;
      color: #333;
      margin-bottom: 20px;
      font-weight: 600;
    }

    .error-message {
      font-size: 16px;
      color: #666;
      line-height: 1.6;
      margin-bottom: 40px;
    }

    .actions {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .btn-primary {
      background: #667eea;
      color: white;
    }

    .btn-primary:hover {
      background: #5a6fd8;
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: #f8f9fa;
      color: #333;
      border: 1px solid #dee2e6;
    }

    .btn-secondary:hover {
      background: #e9ecef;
      transform: translateY(-2px);
    }

    .helpful-links {
      border-top: 1px solid #eee;
      padding-top: 30px;
    }

    .helpful-links p {
      color: #666;
      margin-bottom: 15px;
      font-size: 14px;
    }

    .links {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .link {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .link:hover {
      color: #5a6fd8;
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      .not-found-content {
        padding: 40px 20px;
      }

      .error-code {
        font-size: 80px;
      }

      .error-title {
        font-size: 24px;
      }

      .actions {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 100%;
        max-width: 200px;
      }
    }
  `]
})
export class NotFound {
  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }

  goBack(): void {
    window.history.back();
  }
} 