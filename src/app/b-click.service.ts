import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BClickService {
  clicked() {
    alert("I am clicked!");
  }
  
  constructor() {
  }
}
