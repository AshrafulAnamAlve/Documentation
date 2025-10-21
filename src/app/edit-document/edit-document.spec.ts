import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocument } from './edit-document';

describe('EditDocument', () => {
  let component: EditDocument;
  let fixture: ComponentFixture<EditDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDocument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
