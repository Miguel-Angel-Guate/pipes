import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Louise Glück ';
  smallArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  percentage: number = 0.235;
  monthlyPayment: number = 1234.6;
  promiseExample = new Promise((resolve) => {
    setTimeout(() => {
      resolve('succesfully');
    }, 4500);
  });
  date = new Date();
  active: boolean = true;

  nobelPrize = {
    name: 'Peter Handke',
    key: 'literature',
    addres: {
      street: 'wellington',
      build: 20,
      floor: 2,
      door: 3,
    },
  };
}
