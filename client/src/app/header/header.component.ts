import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidenavUiService } from '../views/landing-view/state/sidenav-ui.service';
import { SessionService } from '../views/login-view/state/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(
    private sidenavUiService: SidenavUiService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onToggleSidenav() {
    this.sidenavUiService.toggleIsOpen();
  }

  onLogoutClick() {
    this.sessionService.logout();
    this.router.navigate(['/login']);
  }
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [HeaderComponent],
})
export class HeaderComponentModule {}
