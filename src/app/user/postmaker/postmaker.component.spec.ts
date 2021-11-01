import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePicker } from '@ionic-native/image-picker';

import { PostmakerComponent } from './postmaker.component';

describe('PostmakerComponent', () => {
  let component: PostmakerComponent;
  let fixture: ComponentFixture<PostmakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostmakerComponent,ImagePicker ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
