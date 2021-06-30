import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SidenavUiQuery } from './state/sidenav-ui.query';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingViewComponent implements OnInit {
  constructor(public sidenavUiQuery: SidenavUiQuery) {}

  ngOnInit(): void {}
}
