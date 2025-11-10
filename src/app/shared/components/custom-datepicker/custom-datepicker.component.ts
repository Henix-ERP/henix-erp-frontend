import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss']
})
export class CustomDatepickerComponent {

  @Input() minDate: Date | null = null;
  @Output() dateSelected = new EventEmitter<Date>();

  showCalendar = false;
  selectedDate?: Date;
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // types: allow nulls in the array
  get calendarDates(): (Date | null)[] {
    const dates: (Date | null)[] = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    // fill empty slots before month starts with null (not Date(0))
    for (let i = 0; i < firstDay; i++) {
      dates.push(null);
    }

    // fill actual days
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(new Date(this.currentYear, this.currentMonth, i));
    }

    return dates;
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }


  selectDate(date: Date | null) {
    if (!date) return; // ignore empty cell
    this.selectedDate = date;
    this.dateSelected.emit(date);
    this.showCalendar = false;
  }

  isToday(date: Date | null): boolean {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  isDisabled(date: Date | null): boolean {
    if (!date) return true;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (this.minDate) {
      const min = new Date(this.minDate);
      min.setHours(0, 0, 0, 0);
      return date < min;
    }

    return date < today;
  }

  isSelected(date: Date | null): boolean {
    if (!date || !this.selectedDate) return false;
    return (
      date.getDate() === this.selectedDate.getDate() &&
      date.getMonth() === this.selectedDate.getMonth() &&
      date.getFullYear() === this.selectedDate.getFullYear()
    );
  }

  isPastDate(date: Date | null): boolean {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // normalize to midnight
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    return compareDate < today;
  }

}

