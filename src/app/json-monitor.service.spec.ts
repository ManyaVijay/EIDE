import { TestBed } from '@angular/core/testing';

import { JsonMonitorService } from './json-monitor.service';

describe('JsonMonitorService', () => {
  let service: JsonMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
