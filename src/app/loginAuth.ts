
// //<reference path="../../../node_modules/@angular/compiler/src/core.d.ts"/>
// import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
 
// // import {User} from '../login/login.component';
// import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs';
 
// @Injectable()
// export  class LoginAuth implements  CanActivate {
//   constructor(public  router: Router) {
 
//   }
 
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     const userStr = sessionStorage.getItem('user');
//     const user: User ;//= JSON.parse(userStr);
//     if (user && user.userName) {
//       alert(user.userName);
//       console.log('路由守卫验证通过!');
//       alert('路由守卫验证通过!');
//       return true;
//     } else {
//       console.log('路由守卫验证失败!');
//       alert('路由守卫验证失败!');
//       this.router.navigateByUrl('/login');
//       return false;
//     }
//  }