import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrl: './property-page.component.scss',

})
export class PropertyPageComponent {

  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  })

  public fullName = computed<string>(() => `${this.user().first_name} ${this.user().last_name}`)

  onFieldUpdate(field: keyof User, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // })

    this.user.update(current =>  ({
      ...current,
      [field]: value
    }))

    // this.user.update(current => {

    //   switch (field) {
    //     case 'avatar':
    //       current.avatar = value
    //       break;
    //     case 'first_name':
    //       current.first_name = value;
    //       break;
    //     case 'last_name':
    //       current.last_name = value;
    //       break;
    //     case 'email':
    //       current.email = value;
    //       break;
    //     case 'id':
    //       current.id = Number(value);
    //       break;
    //   }


    //   return current;
    // })
  }

  public userChangeEffect = effect( () => {
    console.log(`effect triggered`)
    console.log(`_${this.user().email}`)
  })
}
