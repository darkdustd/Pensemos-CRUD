import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDeparmentComponent } from './delete-department.component';

describe('DeleteProductComponent', () => {
  let component: DeleteDeparmentComponent;
  let fixture: ComponentFixture<DeleteDeparmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDeparmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDeparmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
