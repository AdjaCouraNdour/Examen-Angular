import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDetteComponent } from './AddDette.component';


describe('AddDetteComponent', () => {
  let component: AddDetteComponent;
  let fixture: ComponentFixture<AddDetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

