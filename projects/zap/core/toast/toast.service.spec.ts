import { TestBed } from '@angular/core/testing';

import { ZapToastService } from './toast.service';
import { ZapToastInterface } from './toast.interface';

describe('ZapToastService', () => {
  let service: ZapToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZapToastService]
    });
    service = TestBed.inject(ZapToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show and dismiss toast', () => {
    const config: ZapToastInterface = {
      title: 'Test Toast',
      text: 'Test Message',
      action: 'Close',
      shape: 'curve',
      type: 'default'
    };

    service.show(config);
    expect(service['activeToastRef']()).toBeTruthy();

    service.dismiss();
    setTimeout(() => {
      expect(service['activeToastRef']()).toBeNull();
    }, 300);
  });
});


