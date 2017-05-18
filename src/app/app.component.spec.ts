import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MaterialModule } from "@angular/material";
import { AppComponent } from './app.component';
import {TaxService} from './tax.service';

describe('AppComponent', () => {
  let component : AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [
        AppComponent
      ],
      providers: [TaxService]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(component.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  it('should display allowance of £11,500', async(() => {
    expect(component.result.allowance).toEqual(11500);
  }));
});
