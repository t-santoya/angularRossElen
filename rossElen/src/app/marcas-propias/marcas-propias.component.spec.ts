import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasPropiasComponent } from './marcas-propias.component';

describe('MarcasPropiasComponent', () => {
  let component: MarcasPropiasComponent;
  let fixture: ComponentFixture<MarcasPropiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcasPropiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcasPropiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
