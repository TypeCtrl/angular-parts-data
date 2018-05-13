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
    name: 'ngx-dnd',
    categories: [CT.DRAG],
  },
  {
    name: '@swimlane/ngx-dnd',
    categories: [CT.DRAG],
  },
  {
    name: 'ng-drag-drop',
    categories: [CT.DRAG],
  },
  {
    name: '@swimlane/ngx-datatable',
    categories: [CT.DATA_TABLE],
  },
  {
    name: '@swimlane/ngx-charts',
    categories: [CT.DATA_TABLE],
  },
  {
    name: '@swimlane/ngx-ui',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: '@swimlane/ngx-graph',
    categories: [CT.CHARTS],
  },
  {
    name: '@swimlane/ngx-cron',
    categories: [CT.FORMS],
  },
  {
    name: 'ng2-table',
    categories: [CT.DATA_TABLE],
  },
  {
    name: 'angular2-datatable',
    categories: [CT.DATA_TABLE],
  },
  {
    name: 'ng2-easy-table',
    categories: [CT.DATA_TABLE],
  },
  {
    name: 'ng2-handsontable',
    categories: [CT.DATA_TABLE],
  },
  {
    name: 'ag-grid-angular',
    categories: [CT.DATA_TABLE],
  },
  {
    name: 'ng2-smart-table',
    categories: [CT.DATA_TABLE],
  },
  {
    name: 'ng2-tree',
    categories: [CT.DATA_TABLE],
  },
  {
    name: 'angular2-tree-component',
    categories: [CT.DATA_TABLE],
  },
  {
    name: '@ngx-loading-bar/router',
    categories: [CT.ROUTING],
  },
  {
    name: '@ngx-loading-bar/http-client',
    categories: [CT.HTTP],
  },
  {
    name: '@ngx-loading-bar/http',
    categories: [CT.HTTP],
  },
  {
    name: '@ngx-loading-bar/core',
    categories: [],
  },
  {
    name: '@nrwl/schematics',
    categories: [CT.SCHEMATICS],
  },
  {
    name: '@angular/cli',
    categories: [CT.CORE, CT.SCHEMATICS],
  },
  {
    name: '@nrwl/nx',
    categories: [],
  },
  {
    name: 'ngx-charts',
    categories: [CT.CHARTS, CT.WRAPPER],
  },
  {
    name: 'ng2-charts',
    categories: [CT.CHARTS, CT.WRAPPER],
  },
  {
    name: 'angular2-highcharts',
    categories: [CT.CHARTS, CT.WRAPPER],
  },
  {
    name: 'ng2-nvd3',
    categories: [CT.CHARTS, CT.WRAPPER],
  },
  {
    name: '@agm/core',
    categories: [CT.WRAPPER],
  },
  {
    name: '@ngui/map',
    categories: [CT.WRAPPER],
  },
  {
    name: 'angular-esri-components',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-infinite-scroll',
    categories: [CT.SCROLL],
  },
  {
    name: '@ngui/scrollable',
    categories: [CT.SCROLL],
  },
  {
    name: 'ngx-scrollspy',
    categories: [CT.SCROLL],
  },
  {
    name: 'ngx-cookie',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'ng2-datepicker',
    categories: [CT.DATE, CT.FORMS],
  },
  {
    name: 'mydatepicker',
    categories: [CT.DATE, CT.FORMS],
  },
  {
    name: 'ng2-date-picker',
    categories: [CT.DATE, CT.FORMS],
  },
  {
    name: 'ng2-datetime',
    categories: [CT.DATE, CT.FORMS],
  },
  {
    name: 'ngx-color-picker',
    categories: [CT.FORMS, CT.COLOR],
  },
  {
    name: 'ngx-color',
    categories: [CT.FORMS, CT.COLOR],
  },
  {
    name: 'angular2-color-picker',
    categories: [CT.FORMS, CT.COLOR],
  },
  {
    name: 'ng2-color-picker',
    categories: [CT.FORMS, CT.COLOR],
  },
  {
    name: 'ng2-completer',
    categories: [CT.AUTOCOMPLETE],
  },
  {
    name: 'ng2-auto-complete',
    categories: [CT.AUTOCOMPLETE],
  },
  {
    name: 'ng2-tag-input',
    categories: [CT.FORMS],
  },
  {
    name: 'angular-sortablejs',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'angular2-text-mask',
    categories: [CT.FORMS],
  },
  {
    name: 'soft-angular-mask',
    categories: [CT.FORMS],
  },
  {
    name: '@ctrl/ngx-codemirror',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ng2-codemirror',
    categories: [CT.WRAPPER],
  },
  {
    name: 'angular2-voog-wysihtml',
    categories: [CT.WRAPPER],
  },
  {
    name: 'angular2-froala-wysiwyg',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ng2-file-upload',
    categories: [CT.FORMS],
  },
  {
    name: 'ngx-uploader',
    categories: [CT.FORMS],
  },
  {
    name: 'angular2-dropzone-wrapper',
    categories: [CT.FORMS],
  },
  {
    name: 'angular2-autosize',
    categories: [CT.FORMS],
  },
  {
    name: 'angular2-calendar',
    categories: [CT.FORMS, CT.DATE],
  },
  {
    name: 'angular2-fullcalendar',
    categories: [CT.FORMS, CT.DATE],
  },
  {
    name: 'ng2-img-cropper',
    categories: [],
  },
  {
    name: 'angular2-grid',
    categories: [CT.LAYOUT],
  },
  {
    name: 'ngx-fullpage',
    categories: [CT.LAYOUT],
  },
  {
    name: 'angular-split',
    categories: [CT.LAYOUT],
  },
  {
    name: 'ngresizable',
    categories: [CT.LAYOUT],
  },
  {
    name: '@angular/flex-layout',
    categories: [CT.LAYOUT],
  },
  {
    name: 'angular2-materialize',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'ng2-semantic-ui',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'clarity-angular',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'igniteui-angular',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'igniteui-angular-wrappers',
    categories: [CT.WRAPPER, CT.UI_FRAMEWORKS],
  },
  {
    name: 'md2',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'devextreme',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'devextreme-angular',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'ng-zorro-antd',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'ionic2',
    categories: [CT.MOBILE],
  },
  {
    name: 'angular2-onsenui',
    categories: [CT.MOBILE],
  },
  {
    name: 'ngx-admin',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'angular-ssr',
    categories: [CT.SSR],
  },
  {
    name: '@angular-redux/store',
    categories: [CT.DATA_FLOW],
  },
  {
    name: '@ngrx/store',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'mobx-angular',
    categories: [CT.DATA_FLOW],
  },
  {
    name: '@ngx-config/core',
    categories: [CT.CORE],
  },
  {
    name: 'apollo-angular',
    categories: [CT.SSR],
  },
  {
    name: 'codelyzer',
    categories: [CT.PRACTICES],
  },
  {
    name: 'ngx-page-scroll',
    categories: [CT.SCROLL],
  },
  {
    name: '@ctrl/ngx-csv',
    categories: [],
  },
  {
    name: '@ctrl/ngx-github-buttons',
    categories: [],
  },
  {
    name: 'angular-router-loader',
    categories: [CT.ROUTING],
  },
  {
    name: 'ngx-permissions',
    categories: [CT.ROUTING],
  },
  {
    name: 'ng-router-loader',
    categories: [CT.ROUTING],
  },
  {
    name: '@ngx-i18n-router/core',
    categories: [CT.ROUTING, CT.I18N],
  },
  {
    name: '@ngx-translate/core',
    categories: [CT.I18N],
  },
  {
    name: '@ngx-translate/http-loader',
    categories: [CT.I18N],
  },
  {
    name: 'angular-l10n',
    categories: [CT.I18N],
  },
  {
    name: '@ngrx/schematics',
    categories: [CT.SCHEMATICS],
  },
  {
    name: '@ngrx/effects',
    categories: [CT.DATA_FLOW],
  },
  {
    name: '@ngrx/router-store',
    categories: [CT.ROUTING, CT.DATA_FLOW],
  },
  {
    name: '@uirouter/angular',
    categories: [CT.ROUTING, CT.CORE],
  },
  {
    name: '@ngxs/store',
    categories: [CT.DATA_FLOW],
  },
  {
    name: '@ngxs/logger-plugin',
    categories: [CT.DATA_FLOW],
  },
  {
    name: '@ngxs/devtools-plugin',
    categories: [CT.DATA_FLOW],
  },
  {
    name: '@ngxs/storage-plugin',
    categories: [CT.DATA_FLOW],
  },
  {
    name: '@ngxs/form-plugin',
    categories: [CT.DATA_FLOW, CT.FORMS],
  },
  {
    name: '@ngxs/websocket-plugin',
    categories: [CT.DATA_FLOW, CT.HTTP],
  },
  {
    name: '@ngxs/router-plugin',
    categories: [CT.DATA_FLOW, CT.ROUTING],
  },
  {
    name: '@ctrl/ngx-headroom',
    categories: [],
  },
  {
    name: 'angular-calendar',
    categories: [CT.DATE],
  },
  {
    name: 'ap-angular2-fullcalendar',
    categories: [CT.DATE],
  },
  {
    name: '@ngx-formly/core',
    categories: [CT.FORMS],
  },
  {
    name: '@ngx-formly/material',
    categories: [CT.FORMS],
  },
  {
    name: '@ngx-formly/bootstrap',
    categories: [CT.FORMS],
  },
  {
    name: '@ngx-formly/ionic',
    categories: [CT.FORMS],
  },
  {
    name: '@ngx-formly/primeng',
    categories: [CT.FORMS],
  },
  {
    name: '@ngx-formly/kendo',
    categories: [CT.FORMS],
  },
  {
    name: 'angular-pipes',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'ngx-pipes',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'ng-pipes',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'angular-linky',
    categories: [CT.WRAPPER],
  },{
    name: 'ng-animate',
    categories: [CT.ANIMATIONS],
  },{
    name: 'angular2-template-loader',
    categories: [],
  },{
    name: 'angular2-logger',
    categories: [],
  },{
    name: 'ng2-meta',
    categories: [],
  },{
    name: '@ngx-meta/core',
    categories: [],
  },{
    name: 'angular2-disqus',
    categories: [CT.WRAPPER],
  },{
    name: 'angularfire2',
    categories: [CT.WRAPPER],
  },{
    name: 'ngx-disqus',
    categories: [CT.WRAPPER],
  },{
    name: 'angular2-recaptcha',
    categories: [CT.WRAPPER],
  },{
    name: 'ng-recaptcha',
    categories: [CT.WRAPPER],
  },{
    name: 'angular2-cloudtasks',
    categories: [CT.WRAPPER],
  },{
    name: 'pubnub-angular2',
    categories: [CT.WRAPPER],
  },{
    name: 'augury-extension',
    categories: [],
  },{
    name: 'angular2-prettyjson',
    categories: [CT.WRAPPER],
  },{
    name: 'angular-playground',
    categories: [],
  },{
    name: '@compodoc/ngd-cli',
    categories: [CT.SCHEMATICS],
  },
];
