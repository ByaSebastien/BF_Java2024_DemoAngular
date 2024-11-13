import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
})
export class DeleteDialogComponent {

  @Input({required: true})
  fruit!: string;

  @Output()
  private onResponse: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitOnResponseEvent(wantToDelete: boolean){
    this.onResponse.emit(wantToDelete);
  }
}
