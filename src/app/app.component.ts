import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Task';

  constructor(
    private router: Router
  ) {}


  openProfile() {
    this.router.navigate(['/profile'], {
      queryParams: { 
        userId: 'Cma-Rawal'
      }
    });
  }
}
