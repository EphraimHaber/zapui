import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapToast } from './toast.component';

describe('ZapToast', () => {
  let component: ZapToast;
  let fixture: ComponentFixture<ZapToast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZapToast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapToast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
