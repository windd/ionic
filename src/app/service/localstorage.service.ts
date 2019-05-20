import { Injectable } from '@angular/core';

@Injectable()

export class LocalStorageService {

  getStore(name: string) {
    if (!name) {
      return;
    }
    // return window.localStorage.getItem(name);
    return window.sessionStorage.getItem(name);
  }

  setStore(name: string, content: any) {
    if (!name) {
      return;
    }
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    // window.localStorage.setItem(name, content);
    window.sessionStorage.setItem(name, content);
  }

  removeStore(name: string) {
    if (!name) {
      return;
    }
    // window.localStorage.removeItem(name);
    window.sessionStorage.removeItem(name);
  }
}
