import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-activity-view',
  templateUrl: './activity-view.component.html',
  styleUrls: ['./activity-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
