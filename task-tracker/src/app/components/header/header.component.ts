import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() color: string
  @Input() text: string
  @Output() clicked = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick () {
    this.clicked.emit()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
