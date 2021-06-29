import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
