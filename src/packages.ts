import { Categories as CT } from './categories';

export interface AngularPackage {
  /** the npm package.json name */
  name: string;
  categories: CT[];
}

export const packages: AngularPackage[] = [
  {
    name: '@angular/material',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'ngx-toastr',
    categories: [CT.NOTIFICATION],
  },
  {
    name: 'ng2-toastr',
    categories: [CT.NOTIFICATION],
  },
  {
    name: 'angular2-toaster',
    categories: [CT.NOTIFICATION],
  },
  {
    name: 'angular5-toaster',
    categories: [CT.NOTIFICATION],
  },
  {
    name: 'ng-snotify',
    categories: [CT.NOTIFICATION],
  },
  {
    name: 'ng2-toasty',
    categories: [CT.NOTIFICATION],
  },
  {
    name: 'angulartics2',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ng2-dragula',
    categories: [CT.DRAG, CT.WRAPPER],
  },
  {
    name: 'ng2-dnd',
    categories: [CT.DRAG],
  },
  {
    name: 'ng-drag-drop',
    categories: [CT.DRAG],
  },
];
