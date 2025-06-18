import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaiementDetteComponent } from './paiementDette.component';


describe('PaiementDetteComponent', () => {
  let component: PaiementDetteComponent;
  let fixture: ComponentFixture<PaiementDetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaiementDetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementDetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
