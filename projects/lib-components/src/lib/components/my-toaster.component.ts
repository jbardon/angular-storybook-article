import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import { TOASTER_DEFAULT_TITLE } from '../my-toaster.providers';
import {TOASTER_CONFIG_SERVICE} from "../services/my-toaster-config.service";

@Component({
  selector: 'my-toaster',
  standalone: true,
  imports: [NgIf],
  template: `
    <div *ngIf="isOpen" class="toaster">
      <header class="toaster__header">
        <span *ngIf="title.length > 0">{{ title }}</span>
        <button (click)="close()">X</button>
      </header>
      <article class="toaster__description">{{ description }}</article>
    </div>
  `,
  styleUrls: ['./my-toaster.component.scss'],
})
export class MyToasterComponent {
  @Input('title') inputTitle = '';
  @Input() description = '';

  @Output('close') closeOutput = new EventEmitter<void>();

  isOpen = true;

  defaultTitle = inject(TOASTER_DEFAULT_TITLE, { optional: true });
  service = inject(TOASTER_CONFIG_SERVICE, { optional: true });

  get title() {
    return this.inputTitle || this.service?.getTitle() || this.defaultTitle || '';
  }

  close() {
    this.isOpen = false;
    this.closeOutput.emit();
  }
}
