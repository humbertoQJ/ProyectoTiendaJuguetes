import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaJuguetesComponent } from './lista-juguetes.component';

describe('ListaJuguetesComponent', () => {
  let component: ListaJuguetesComponent;
  let fixture: ComponentFixture<ListaJuguetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaJuguetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaJuguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
