import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public items: any = [];

  constructor() {
    this.items = [
      { title: 'First List', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet consequat diam, et sagittis dui vulputate at. Etiam ultrices odio lectus, vel congue metus fringilla ut. Nam fringilla quam quis tellus fringilla aliquam. Quisque tortor tortor, sagittis consequat justo vel, suscipit porttitor purus. Pellentesque ultrices tempor ornare. Fusce cursus nulla id massa accumsan, vitae mollis mauris tristique. Pellentesque ut congue leo. Quisque enim mi, tincidunt nec molestie vel, pellentesque mattis tellus. Donec eget accumsan sapien, eget rutrum nibh. Sed eu tincidunt velit. Maecenas id est ut risus fermentum vehicula. Phasellus sed lorem sed ante aliquam ornare pellentesque a lacus. Suspendisse faucibus varius ante vitae consequat.', expanded: false },

      { title: 'Second List', body: 'Aenean eu nisi nisl. Donec vehicula massa vitae fringilla feugiat. Nulla placerat, sem sed molestie iaculis, diam erat condimentum purus, a viverra mauris eros et ante. Suspendisse luctus lacinia mi euismod tincidunt. Donec convallis hendrerit posuere. Pellentesque lacinia eleifend velit eu facilisis. Proin sed maximus ipsum. Cras quam lectus, sollicitudin sit amet ligula ut, rutrum feugiat nisl. In sapien quam, vestibulum tempus ultricies id, venenatis nec velit. Proin mattis tellus vel dui maximus, vitae consectetur magna tristique. Aenean finibus dui eget commodo facilisis. Curabitur sed velit vitae lacus tincidunt blandit a vitae ex. Donec viverra at augue sed elementum.', expanded: false },

      { title: 'Third List', body: 'Ut ultricies nunc ac vehicula tristique. Aliquam nibh magna, egestas non convallis eu, maximus imperdiet eros. Duis eu varius nulla, vel ultrices nulla. Cras aliquet ligula sit amet tristique scelerisque. Suspendisse nulla purus, varius id dictum et, blandit at orci. Sed eget consectetur nunc. Mauris nunc augue, porta nec aliquet nec, luctus in sapien. Duis suscipit ante id metus tempor consequat. Integer eget orci eu augue ultricies convallis. Fusce mollis orci eu elit blandit tincidunt. Suspendisse potenti. Suspendisse convallis eu quam eget porttitor.', expanded: false },

      { title: 'Fourth List', body: 'Sed viverra tortor justo, a ultricies lectus lacinia ut. Donec iaculis elit sed dui suscipit fringilla sed vitae arcu. Praesent malesuada odio id erat interdum, et porttitor nisl finibus. Phasellus tincidunt ac lorem vitae ultricies. Sed id lacus pretium, dignissim arcu at, efficitur nulla. Cras et gravida diam. Mauris iaculis mollis urna aliquet commodo. Maecenas non ornare sapien. Vestibulum sed ultricies turpis. Sed lorem lacus, tincidunt id risus quis, faucibus tincidunt leo. Aliquam lacinia velit in malesuada iaculis.', expanded: false },

      { title: 'Fifth List', body: ' Sed hendrerit convallis placerat. Integer sollicitudin risus eu urna consectetur, faucibus malesuada metus ultricies. Fusce ut ex ullamcorper, rhoncus erat at, lobortis neque. Quisque semper egestas augue. Ut ante quam, consequat aliquam tincidunt eget, tincidunt sed metus. Nam sagittis at tortor et bibendum. Cras dignissim consectetur orci et imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut auctor rhoncus augue, sed posuere urna lacinia vitae. Praesent sed eros turpis. Praesent sollicitudin, enim vel condimentum fringilla, lacus ligula finibus nibh, in lobortis arcu urna eget eros. Aenean lobortis at nisi sed accumsan.', expanded: false },

      { title: 'Sixth List', body: 'Integer odio mi, convallis id placerat vitae, condimentum et dui. Quisque et metus eu nisl bibendum imperdiet. Ut eget leo mollis, volutpat justo vitae, efficitur tortor. Quisque sollicitudin dignissim leo, rutrum bibendum neque sagittis vitae. Donec ultricies, orci sed semper scelerisque, magna ante sodales urna, a tristique libero orci in tellus. Maecenas porttitor mauris in nunc pulvinar, ac lobortis leo congue. Aliquam luctus quis mi a scelerisque.', expanded: false },

      { title: 'Seventh List', body: 'Integer odio mi, convallis id placerat vitae, condimentum et dui. Quisque et metus eu nisl bibendum imperdiet. Ut eget leo mollis, volutpat justo vitae, efficitur tortor. Quisque sollicitudin dignissim leo, rutrum bibendum neque sagittis vitae. Donec ultricies, orci sed semper scelerisque, magna ante sodales urna, a tristique libero orci in tellus. Maecenas porttitor mauris in nunc pulvinar, ac lobortis leo congue. Aliquam luctus quis mi a scelerisque.', expanded: false },

      { title: 'Eighth List', body: 'Integer odio mi, convallis id placerat vitae, condimentum et dui. Quisque et metus eu nisl bibendum imperdiet. Ut eget leo mollis, volutpat justo vitae, efficitur tortor. Quisque sollicitudin dignissim leo, rutrum bibendum neque sagittis vitae. Donec ultricies, orci sed semper scelerisque, magna ante sodales urna, a tristique libero orci in tellus. Maecenas porttitor mauris in nunc pulvinar, ac lobortis leo congue. Aliquam luctus quis mi a scelerisque.', expanded: false },

      { title: 'Ninth List', body: 'Integer odio mi, convallis id placerat vitae, condimentum et dui. Quisque et metus eu nisl bibendum imperdiet. Ut eget leo mollis, volutpat justo vitae, efficitur tortor. Quisque sollicitudin dignissim leo, rutrum bibendum neque sagittis vitae. Donec ultricies, orci sed semper scelerisque, magna ante sodales urna, a tristique libero orci in tellus. Maecenas porttitor mauris in nunc pulvinar, ac lobortis leo congue. Aliquam luctus quis mi a scelerisque.', expanded: false },

    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}