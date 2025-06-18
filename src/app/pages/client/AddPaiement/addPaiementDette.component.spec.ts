import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPaiementDetteComponent } from './addPaiementDette.component';

describe('AddPaiementDetteComponent', () => {
  let component: AddPaiementDetteComponent;
  let fixture: ComponentFixture<AddPaiementDetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPaiementDetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaiementDetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
