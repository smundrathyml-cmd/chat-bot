import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header implements OnInit {
    ngOnInit(): void {
    }

    @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar-custom');
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }
  }
}