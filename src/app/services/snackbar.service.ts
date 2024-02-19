import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor(
        private snackBar: MatSnackBar
    ) { }

    showError(error: any) {
        this.snackBar.open(error.error.message, undefined, {
            duration: 3000
        });
    }
}