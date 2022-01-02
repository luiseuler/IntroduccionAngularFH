import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html',
    // styleUrls: ['../app.component.css']
})

export class ContadorComponent {
    title: string = 'ContadorApp';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number): void {
        this.numero += this.base;
    }
}