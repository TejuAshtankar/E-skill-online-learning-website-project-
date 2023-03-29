import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutFeaturesComponent } from './out-features.component';

describe('OutFeaturesComponent', () => {
  let component: OutFeaturesComponent;
  let fixture: ComponentFixture<OutFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
