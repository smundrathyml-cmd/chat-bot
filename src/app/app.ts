import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Main } from './components/main/main';
import { ChatWidget } from './components/chat-widget/chat-widget'; // Add this import

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Main, ChatWidget], // Add ChatWidget here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class App {
  protected readonly title = signal('chat-bot');
}