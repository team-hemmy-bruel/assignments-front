import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {
  initial: string;
  @Input() username: string;


  constructor() {
  }

  ngOnInit(): void {
    this.initial = `https://ui-avatars.com/api/?name=${this.username}&background=${this.selectRandomColor()}&color=ffffff`;
  }

  selectRandomColor(): string {
    const colors = ['172b4d', '5e72e4', '11cdef', '2dce89', 'f5365c', 'fb6340' ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

}
