import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPickComponent } from './avatar-pick.component';

describe('AvatarPickComponent', () => {
  let component: AvatarPickComponent;
  let fixture: ComponentFixture<AvatarPickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarPickComponent]
    });
    fixture = TestBed.createComponent(AvatarPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
