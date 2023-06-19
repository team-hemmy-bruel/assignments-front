import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  percentage = 0; //initial value of percentage
  barWidth = 0;  //initial value of bar width

  ngOnInit(): void {
    const interval$ = interval(20); //interval between updates

    interval$.subscribe(() => {
      this.percentage += 1;
      this.barWidth = this.percentage; //update the bar width as percentage increases

      if (this.percentage === 100) {
        // interval$.unsubscribe();  //unsubscribe when completed
      }
    });
  }
}
