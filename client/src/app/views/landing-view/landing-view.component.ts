import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SidenavUiQuery } from './state/sidenav-ui.query';
import { SidenavUiService } from './state/sidenav-ui.service';
import { SessionService } from '../login-view/state/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingViewComponent implements OnInit {
  constructor(
    public sidenavUiQuery: SidenavUiQuery,
    private sidenavUiService: SidenavUiService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onMenuButtonClick() {
    this.sidenavUiService.toggleIsOpen();
  }

  onLogoutButtonClick() {
    this.sessionService.logout();
    this.router.navigate(['/login']);
  }
}
