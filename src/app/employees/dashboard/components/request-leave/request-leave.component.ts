import { Component, Inject, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.scss']
})
export class RequestLeaveComponent {

  @ViewChild('picker') picker!: MatDatepicker<Date>;
  dummyMinDate = new Date(2025, 11, 15); // 15 Nov 2025

  constructor(
    private dialogRef: MatDialogRef<RequestLeaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close(); // closes without data
  }

  openPicker() {
    this.picker.open();
  }

  onDateClosed() {

  }

  onDateChange(date: Date) {
    console.log('Selected Date:', date);
  }

}
