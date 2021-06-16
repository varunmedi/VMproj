import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDirectivesComponent } from './pre-directives.component';

describe('PreDirectivesComponent', () => {
  let component: PreDirectivesComponent;
  let fixture: ComponentFixture<PreDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
