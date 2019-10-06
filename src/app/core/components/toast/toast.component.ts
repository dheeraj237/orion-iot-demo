import { Component, OnInit, TemplateRef } from '@angular/core';

import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hide)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text" class="toast-container">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text class="toast-container">
      <span>{{ toast.textOrTpl }}</span>
      <span (click)="toastService.remove(toast)"><i class="link fa fa-close" aria-hidden="true"></i></span></ng-template> 
    </ngb-toast>
  `,
  styles: [
    '.link { cursor: pointer; font-size: 15px; padding-left:10px; }',
    '.toast-custom { top: 54px; }',
    '.toast-container { display: inline - block;}',
    'ngb-toasts {position: fixed;top: 54px !important;right: 0;margin: .5em;z-index: 1200;}'
  ],
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastComponent implements OnInit {

  constructor(public toastService: ToastService) { }

  show = true;

  close() {
    this.show = false;
    // setTimeout(() => this.show = true, 5000);
  }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

  ngOnInit() {
  }

}
