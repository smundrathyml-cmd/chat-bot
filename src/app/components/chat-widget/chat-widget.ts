import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.html',
  styleUrl: './chat-widget.css'
})
export class ChatWidget implements OnInit {
  isChatOpen = false;
  isTooltipHidden = false;

  ngOnInit(): void {
    // Auto-hide tooltip after 8 seconds
    setTimeout(() => {
      this.isTooltipHidden = true;
    }, 8000);
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
    
    // Hide tooltip when chat is opened
    if (this.isChatOpen) {
      this.isTooltipHidden = true;
    }
  }

  closeTooltip(): void {
    this.isTooltipHidden = true;
  }
}