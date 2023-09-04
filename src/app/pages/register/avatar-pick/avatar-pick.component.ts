import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-avatar-pick',
  templateUrl: './avatar-pick.component.html',
  styleUrls: ['./avatar-pick.component.scss']
})
export class AvatarPickComponent implements OnInit {
  @Output()
  nextStep = new EventEmitter<void>();
  protected readonly avatars = [
    './assets/avatars/avatar1.jpg',
    './assets/avatars/avatar2.jpg',
    './assets/avatars/avatar3.jpg',
    './assets/avatars/avatar4.jpg',
    './assets/avatars/avatar5.jpg',
    './assets/avatars/avatar6.jpg',
    './assets/avatars/avatar7.jpg',
    './assets/avatars/avatar8.jpg',
    './assets/avatars/avatar9.jpg',
    './assets/avatars/avatar10.jpg',
    './assets/avatars/avatar11.jpg',
    './assets/avatars/avatar12.jpg',
    './assets/avatars/avatar13.jpg',
    './assets/avatars/avatar14.jpg',
    './assets/avatars/avatar15.jpg',
    './assets/avatars/avatar12.jpg',
  ];
  selectedImage = '';


  selectImage(avatar: string) {
    this.selectedImage = avatar;
  }

  submit() {
    this.nextStep.emit();
  }

  ngOnInit() {
    this.selectedImage = this.avatars[0];
  }
}
