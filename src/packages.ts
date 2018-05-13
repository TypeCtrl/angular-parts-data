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
    name: '@angular/cdk',
    categories: [CT.UI_FRAMEWORKS, CT.CORE],
  },
  {
    name: 'onsenui',
    categories: [CT.UI_FRAMEWORKS, CT.MOBILE],
  },
  {
    name: 'ngx-bootstrap',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: '@ng-bootstrap/ng-bootstrap',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'primeng',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: '@clr/angular',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'ng-semantic',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'ng2-semantic-ui',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'ng-lightning',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: '@covalent/core',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: '@angular-mdl/core',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'devextreme-angular',
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
