import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent {

  isOpen = false;

  constructor(private eRef: ElementRef) {}

  // ✅ Close when user clicks anywhere outside
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
  
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
