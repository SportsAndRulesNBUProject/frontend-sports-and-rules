import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';



@Injectable()
export class DialogService {

  constructor(
    private readonly dialog: MatDialog,
  ) {
  }

  open(component: ComponentType<any>, config: MatDialogConfig): MatDialogRef<any> {
    // const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.data = data;

    const dialogRef = this.dialog.open(component, config);

    return dialogRef;
  }
}
