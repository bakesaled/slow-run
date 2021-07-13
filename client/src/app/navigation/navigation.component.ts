import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavItem } from '../views/landing-view/state/nav-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  @Input()
  navItems: NavItem[] | undefined | null = [];
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  exports: [NavigationComponent],
})
export class NavigationComponentModule {}
