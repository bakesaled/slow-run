import {
  Directive,
  Input,
  NgModule,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { SessionQuery } from '../../auth/state/session.query';
import { takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: '[showIfLoggedIn]',
})
export class ShowIfLoggedInDirective implements OnInit, OnDestroy {
  private destroySubject = new Subject();
  @Input() showIfLoggedIn: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private sessionQuery: SessionQuery
  ) {}

  ngOnInit() {
    this.sessionQuery.isLoggedIn$
      .pipe(
        tap((isLoggedIn) => {
          this.viewContainer.clear();
          if (isLoggedIn) {
            if (this.showIfLoggedIn) {
              this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
              this.viewContainer.clear();
            }
          } else {
            if (this.showIfLoggedIn) {
              this.viewContainer.clear();
            } else {
              this.viewContainer.createEmbeddedView(this.templateRef);
            }
          }
        }),
        takeUntil(this.destroySubject)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
  }
}

@NgModule({
  declarations: [ShowIfLoggedInDirective],
  imports: [CommonModule],
  exports: [ShowIfLoggedInDirective],
})
export class ShowIfLoggedInDirectiveModule {}
