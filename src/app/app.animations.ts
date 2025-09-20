import {
  trigger,
  transition,
  style,
  query,
  animate,
  stagger,
  animateChild
} from '@angular/animations';

// Optimized animation with better performance timing
export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(10px)' }),
    animate('300ms cubic-bezier(0.4, 0, 0.2, 1)',
      style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

// Consistent fadeInUp animation for larger movements
export const fadeInUpAnimation = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', style({
      opacity: 1,
      transform: 'translateY(0)'
    }))
  ])
]);

// Route transition animation
export const routeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('300ms ease-out', style({ opacity: 1 }))
  ])
]);

export const listAnimation = trigger('list', [
  transition(':enter', [
    query('@fadeIn', stagger(100, animateChild()))
  ])
]);
