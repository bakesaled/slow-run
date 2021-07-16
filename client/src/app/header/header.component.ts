import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() title: string | undefined;
  @Output() menuButtonClick: EventEmitter<void> = new EventEmitter();
  @Output() logoutButtonClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onLogoutClick() {
    this.logoutButtonClick.emit();
  }

  onMenuButtonClick() {
    this.menuButtonClick.emit();
  }
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [HeaderComponent],
})
export class HeaderComponentModule {}
