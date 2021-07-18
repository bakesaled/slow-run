import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SidenavUiQuery } from './state/sidenav-ui.query';
import { SidenavUiService } from './state/sidenav-ui.service';
import { Router } from '@angular/router';
import { SessionService } from '../../auth/state/session.service';
import { SessionQuery } from '../../auth/state/session.query';

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
    public sessionQuery: SessionQuery,
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
