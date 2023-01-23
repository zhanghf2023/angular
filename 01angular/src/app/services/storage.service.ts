import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key: any) {
    const aa = localStorage.getItem(key);
    if (aa) {
      return JSON.parse(aa);
    } else {
      return '';
    }
  }

  set(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: any) {
    localStorage.removeItem(key);
  }
}
