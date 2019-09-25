import { Component, OnInit, AfterContentInit, QueryList, Input, ContentChildren, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from "rxjs";

@Component({
  selector: "cycler-item",
  template: `<ng-content *ngIf="visible"></ng-content>`
})
export class CyclerItemComponent {
  public visible: boolean = true;
}

@Component({
  selector: 'cycler',
  templateUrl: './cycler.component.html',
  styleUrls: ['./cycler.component.scss']
})
export class CyclerComponent implements OnInit, AfterContentInit, OnDestroy {
  private childrenSub: Subscription;
  private timer: any;
  private _index: number = -1;
  
  public get index(): number {
    return this._index;
  }
  
  @Input()
  public interval: number = 5000;

  @Input()
  public auto: boolean = true;

  @ContentChildren(CyclerItemComponent)
  private children: QueryList<CyclerItemComponent>;

  @HostListener("click")
  public onClick(): void {
    this.next();
    this.startTimer();
  }

  public ngOnInit() {
      
  }

  public ngAfterContentInit(): void {
    this.children.changes.subscribe(() => this.onItemsUpdate());
    this.onItemsUpdate();
  }

  private onItemsUpdate(): void {
    this.stopTimer();
    this._index = -1;

    if (this.children.length == 0)
      return;

    if (this.children.length == 1) {
      this.children.first.visible = true;
      return;
    }

    this.startTimer();
    this.next();
  }

  public setIndex(index: number): void {
    if (index >= this.children.length)
      index = this.children.length - 1;

      this.children.forEach((item, i, arr) => {
        item.visible = i == index;
      });

      this._index = index;
  }

  private next(): void {
      let nextIndex = this._index + 1;

      if (nextIndex >= this.children.length)
        nextIndex = 0;
      
      this.setIndex(nextIndex);
  }

  private startTimer(): void {
    if (!this.auto)
      return;

    this.stopTimer();
    this.timer = setInterval(() => this.next(), this.interval);
  }

  private stopTimer(): void {
    clearInterval(this.timer);
  }

  public ngOnDestroy(): void {
    if (this.childrenSub)
      this.childrenSub.unsubscribe();
  }
}
