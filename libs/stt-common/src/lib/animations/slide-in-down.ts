import { trigger, animate, transition, style, state } from '@angular/animations';

// todo: improve animation here.

export const slideInDownAnimation = trigger('routeAnimation', [
  state(
    '*',
    style({
      opacity: 1,
      position: 'fixed',
      width: '100%',
      transform: 'translateY(0)'
    })
  ),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(100%)'
    }),
    animate('.3s ease-in')
  ]),
  transition(':leave', [
    animate(
      '.3s ease-out',
      style({
        opacity: 0,
        transform: 'translateY(-100%)'
      })
    )
  ])
]);
