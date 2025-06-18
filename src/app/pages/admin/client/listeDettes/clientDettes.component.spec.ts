import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientDettesComponent } from './clientDettes.component';


describe('EtudiantComponent', () => {
  let component: ClientDettesComponent;
  let fixture: ComponentFixture<ClientDettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDettesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

