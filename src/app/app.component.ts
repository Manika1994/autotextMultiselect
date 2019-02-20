import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
    public listItems: Array<{ text: string, value: number }> = [
        { text: "Small", value: 1 },
        { text: "Medium", value: 2 },
        { text: "Large", value: 3 }
    ];
    public value: any = [{ text: "Medium", value: 2 }];
}
