import { Component, OnInit, AfterContentInit, QueryList, Input, ContentChildren, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from "rxjs/Rx";

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
  private index: number = -1;

  @Input()
  public interval: number = 5000;

  @ContentChildren(CyclerItemComponent)
  private children: QueryList<CyclerItemComponent>;

  @HostListener("click")
  public onClick(): void {
    clearInterval(this.timer);
    this.next();
    this.timer = setInterval(() => this.next(), this.interval);
  }

  public ngOnInit() {
      
  }

  public ngAfterContentInit(): void {
    this.children.changes.subscribe(() => this.onItemsUpdate());
    this.onItemsUpdate();
  }

  private onItemsUpdate(): void {
    clearInterval(this.timer);
    this.index = -1;

    if (this.children.length == 0)
      return;

    if (this.children.length == 1) {
      this.children.first.visible = true;
      return;
    }

    this.timer = setInterval(() => this.next(), this.interval);
    this.next();
  }

  private next(): void {
      let nextIndex = this.index + 1;

      if (nextIndex >= this.children.length)
        nextIndex = 0;
      
      this.children.forEach((item, index, arr) => {
        item.visible = index == nextIndex;
      });

      this.index = nextIndex;
  }

  public ngOnDestroy(): void {
    if (this.childrenSub)
      this.childrenSub.unsubscribe();
  }
}
