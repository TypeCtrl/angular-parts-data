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
    name: '@clr/ui',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'ng-semantic',
    categories: [CT.UI_FRAMEWORKS, CT.WRAPPER],
  },
  {
    name: 'ng-lightning',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: '@ng-toolkit/init',
    categories: [CT.SCHEMATICS, CT.SSR],
  },
  {
    name: '@ng-toolkit/serverless',
    categories: [CT.SSR],
  },
  {
    name: 'ng-http-sw-proxy',
    categories: [CT.HTTP],
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
    name: 'angular-draggable-droppable',
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
    categories: [CT.CHARTS],
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
    name: 'ng2-progress',
    categories: [],
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
    categories: [CT.SPINNER],
  },
  {
    name: 'ngx-store',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'angular-upcrop',
    categories: [CT.IMAGES],
  },
  {
    name: '@storybook/core',
    categories: [CT.TESTING],
  },
  {
    name: 'protractor',
    categories: [CT.TESTING],
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
    categories: [CT.WRAPPER, CT.FORMS],
  },
  {
    name: 'ng2-codemirror',
    categories: [CT.WRAPPER, CT.FORMS],
  },
  {
    name: '@ngx-prism/core',
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
    categories: [CT.IMAGES],
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
    name: 'devextreme-angular',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'ng-zorro-antd',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: '@ionic/angular',
    categories: [CT.MOBILE],
  },
  {
    name: 'ngx-onsenui',
    categories: [CT.MOBILE, CT.WRAPPER],
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
    name: 'ng-packagr',
    categories: [CT.PRACTICES],
  },
  {
    name: 'ngx-page-scroll',
    categories: [CT.SCROLL],
  },
  {
    name: '@ctrl/ngx-csv',
    categories: [CT.DATA_TABLE],
  },
  {
    name: '@ctrl/ngx-github-buttons',
    categories: [CT.DOCS],
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
    name: 'ngx-mask',
    categories: [CT.FORMS],
  },
  {
    name: 'ng2-currency-mask',
    categories: [CT.FORMS],
  },
  {
    name: 'ngx-currency',
    categories: [CT.FORMS],
  },
  {
    name: 'truly-ui',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: '@fagnerlima/ng-mask',
    categories: [CT.FORMS, CT.WRAPPER],
  },
  {
    name: '@ngx-formly/core',
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
  },
  {
    name: 'ng-animate',
    categories: [CT.ANIMATIONS],
  },
  {
    name: 'angular2-template-loader',
    categories: [],
  },
  {
    name: 'angular2-logger',
    categories: [CT.CORE],
  },
  {
    name: 'ng2-meta',
    categories: [],
  },
  {
    name: '@ngx-meta/core',
    categories: [],
  },
  {
    name: 'angular2-disqus',
    categories: [CT.WRAPPER],
  },
  {
    name: 'angularfire2',
    categories: [CT.WRAPPER, CT.HTTP],
  },
  {
    name: 'ngx-disqus',
    categories: [CT.WRAPPER],
  },
  {
    name: 'angular2-recaptcha',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ng-recaptcha',
    categories: [CT.WRAPPER],
  },
  {
    name: 'angular2-cloudtasks',
    categories: [CT.WRAPPER],
  },
  {
    name: 'pubnub-angular2',
    categories: [CT.WRAPPER],
  },
  {
    name: 'augury-extension',
    categories: [CT.DOCS, CT.PRACTICES],
  },
  {
    name: 'angular2-prettyjson',
    categories: [CT.WRAPPER],
  },
  {
    name: 'angular-playground',
    categories: [],
  },
  {
    name: '@compodoc/ngd-cli',
    categories: [CT.SCHEMATICS],
  },
  {
    name: 'angular-librarian',
    categories: [CT.SCHEMATICS],
  },
  {
    name: '@ctrl/ngx-emoji-mart',
    categories: [CT.FORMS],
  },
  {
    name: 'ngx-emoji',
    categories: [CT.FORMS],
  },
  {
    name: 'ng-emoji-picker',
    categories: [CT.FORMS],
  },
  {
    name: 'angular2-emoji-picker',
    categories: [CT.FORMS],
  },
  {
    name: 'ng2-emojify',
    categories: [CT.FORMS],
  },
  {
    name: '@auth0/angular-jwt',
    categories: [CT.HTTP, CT.AUTH],
  },
  {
    name: 'angular-oauth2-oidc',
    categories: [CT.HTTP, CT.AUTH],
  },
  {
    name: '@ngx-auth/auth0',
    categories: [CT.AUTH],
  },
  {
    name: '@elderbyte/ngx-jwt-auth',
    categories: [CT.AUTH],
  },
  {
    name: '@ngx-auth/core',
    categories: [CT.AUTH],
  },
  {
    name: 'ng2-jwt',
    categories: [CT.AUTH],
  },
  {
    name: 'frontal',
    categories: [CT.SELECT],
  },
  {
    name: 'ng2-select',
    categories: [CT.SELECT],
  },
  {
    name: 'ng-select',
    categories: [CT.SELECT],
  },
  {
    name: '@ng-select/ng-select',
    categories: [CT.SELECT],
  },
  {
    name: 'ng-selectize',
    categories: [CT.SELECT, CT.WRAPPER],
  },
  {
    name: 'ngx-select-ex',
    categories: [CT.SELECT],
  },
  {
    name: 'angular-cropperjs',
    categories: [CT.WRAPPER, CT.IMAGES],
  },
  {
    name: 'angular-selector',
    categories: [CT.SELECT],
  },
  {
    name: 'ngx-mat-select-search',
    categories: [CT.SELECT],
  },
  {
    name: 'ngx-select-dropdown',
    categories: [CT.SELECT],
  },
  {
    name: '@halaz.lazlo/ngx-select',
    categories: [CT.SELECT],
  },
  {
    name: 'ngx-translate-parser-plural-select',
    categories: [CT.SELECT, CT.I18N],
  },
  {
    name: 'ngx-select-box',
    categories: [CT.SELECT],
  },
  {
    name: 'ng2-iq-select2',
    categories: [CT.SELECT],
  },
  {
    name: 'ngx-papaparse',
    categories: [CT.DATA_TABLE],
  },
  {
    name: 'angular-bootstrap-datetimepicker',
    categories: [CT.DATE],
  },
  {
    name: 'ng2-timezone-selector',
    categories: [CT.DATE, CT.WRAPPER],
  },
  {
    name: 'ng2-adsense',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-trend',
    categories: [CT.CHARTS],
  },
  {
    name: '@fortawesome/angular-fontawesome',
    categories: [CT.ICONS],
  },
  {
    name: 'angular-feather',
    categories: [CT.ICONS],
  },
  {
    name: 'ng2-weather-icons',
    categories: [CT.ICONS],
  },
  {
    name: 'ngx-feather-icon',
    categories: [CT.ICONS],
  },
  {
    name: '@ng-idle/core',
    categories: [CT.SPINNER],
  },
  {
    name: '@clr/icons',
    categories: [CT.ICONS],
  },
  {
    name: '@covalent/markdown',
    categories: [CT.MARKDOWN],
  },
  {
    name: '@covalent/dynamic-forms',
    categories: [CT.FORMS],
  },
  {
    name: '@covalent/highlight',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-timeago',
    categories: [CT.DATE],
  },
  {
    name: 'tslint-angular',
    categories: [CT.PRACTICES],
  },
  {
    name: 'tslint-rules-valorsoft',
    categories: [CT.PRACTICES],
  },
  {
    name: 'ngast',
    categories: [CT.PRACTICES],
  },
  {
    name: 'ngx-card',
    categories: [CT.WRAPPER, CT.FORMS],
  },
  {
    name: 'ngx-in-view',
    categories: [CT.WRAPPER],
  },
  {
    name: 'angular-star-rating',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-rating',
    categories: [CT.FORMS],
  },
  {
    name: 'ng-lazyload-image',
    categories: [CT.IMAGES],
  },
  {
    name: 'ngx-lazy-load-images',
    categories: [CT.IMAGES],
  },
  {
    name: 'ngx-contextmenu',
    categories: [CT.OVERLAY],
  },
  {
    name: '@ctrl/ngx-rightclick',
    categories: [CT.OVERLAY],
  },
  {
    name: 'ngx-captcha',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-recaptcha',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-paypal',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-embed-video',
    categories: [CT.WRAPPER, CT.AV],
  },
  {
    name: 'ngx-youtube-player',
    categories: [CT.WRAPPER, CT.AV],
  },
  {
    name: 'ngx-y2-player',
    categories: [CT.WRAPPER, CT.AV],
  },
  {
    name: 'ngx-youtube',
    categories: [CT.WRAPPER, CT.AV],
  },
  {
    name: 'angular-emojione',
    categories: [CT.WRAPPER, CT.AV],
  },
  {
    name: 'ng-emoji-picker-material',
    categories: [CT.WRAPPER, CT.AV],
  },
  {
    name: 'ngx-google-places-autocomplete',
    categories: [CT.WRAPPER, CT.AUTOCOMPLETE],
  },
  {
    name: 'angular-instantsearch',
    categories: [CT.WRAPPER, CT.AUTOCOMPLETE],
  },
  {
    name: 'ngx-livesearch',
    categories: [CT.AUTOCOMPLETE],
  },
  {
    name: 'ng-dynamic-forms',
    categories: [CT.FORMS],
  },
  {
    name: 'ngentest',
    categories: [CT.TESTING],
  },
  {
    name: 'ng2-input-hints',
    categories: [CT.FORMS],
  },
  {
    name: 'angular-rollup',
    categories: [CT.PRACTICES],
  },
  {
    name: 'ngx-smooth-dnd',
    categories: [CT.DRAG],
  },
  {
    name: 'angular-idle-preload',
    categories: [CT.CORE],
  },
  {
    name: 'ngx-quill-editor',
    categories: [CT.WRAPPER, CT.FORMS],
  },
  {
    name: '@cloudinary/angular',
    categories: [CT.AV],
  },
  {
    name: 'angular2-promise-buttons',
    categories: [CT.SPINNER],
  },
  {
    name: 'ngx-popper',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-konami',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ng-data-picker',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-siema',
    categories: [CT.WRAPPER, CT.IMAGES],
  },
  {
    name: 'angular-esc',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'angular-clickable-click',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'ng-katex',
    categories: [],
  },
  {
    name: '@nebular/theme',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: '@nebular/auth',
    categories: [CT.ROUTING],
  },
  {
    name: 'angular-archwizard',
    categories: [],
  },
  {
    name: 'angular2-busy',
    categories: [],
  },
  {
    name: 'ng2-pdf-viewer',
    categories: [],
  },
  {
    name: 'ng2-card',
    categories: [],
  },
  {
    name: 'angular2-simple-countdown',
    categories: [],
  },
  {
    name: 'ngx-img-fallback',
    categories: [],
  },
  {
    name: 'file-droppa',
    categories: [],
  },
  {
    name: 'ng2-ace',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-restangular',
    categories: [CT.HTTP],
  },
  {
    name: 'ngx-order-pipe',
    categories: [],
  },
  {
    name: 'ngx-loading',
    categories: [CT.SPINNER],
  },
  {
    name: 'ng4-loading-spinner',
    categories: [CT.SPINNER],
  },
  {
    name: 'angular-spinners',
    categories: [CT.SPINNER],
  },
  {
    name: 'angular2-ladda',
    categories: [],
  },
  {
    name: 'ngx-markdown',
    categories: [CT.MARKDOWN],
  },
  {
    name: 'ng2-markdown-to-html',
    categories: [CT.MARKDOWN],
  },
  {
    name: '@compodoc/compodoc',
    categories: [CT.PRACTICES],
  },
  {
    name: 'angular-speed-dial',
    categories: [],
  },
  {
    name: 'ack-angular',
    categories: [],
  },
  {
    name: '@ctrl/ngx-droppable',
    categories: [CT.FORMS],
  },
  {
    name: 'angularfire-lite',
    categories: [CT.WRAPPER, CT.HTTP],
  },
  {
    name: 'chartjs-ng2',
    categories: [CT.CHARTS, CT.WRAPPER],
  },
  {
    name: 'angular2-chartjs',
    categories: [CT.CHARTS, CT.WRAPPER],
  },
  {
    name: '@ctrl/ngx-chartjs',
    categories: [CT.CHARTS, CT.WRAPPER],
  },
  {
    name: '@nrwl/bazel',
    categories: [CT.SCHEMATICS],
  },
  {
    name: 'ngx-pagination',
    categories: [],
  },
  {
    name: 'angular-gantt',
    categories: [CT.CHARTS],
  },
  {
    name: '@cloudtasks/ngx-image',
    categories: [CT.IMAGES],
  },
  {
    name: 'ngx-img-cropper',
    categories: [CT.IMAGES],
  },
  {
    name: '@ngu/carousel',
    categories: [CT.IMAGES],
  },
  {
    name: 'ng-time-picker',
    categories: [CT.FORMS],
  },
  {
    name: 'ng2-analogical-countdown',
    categories: [CT.FORMS],
  },
  {
    name: 'angular-tree-component',
    categories: [CT.FORMS],
  },
  {
    name: 'angular-font-awesome',
    categories: [CT.ICONS],
  },
  {
    name: 'ngx-cookie-service',
    categories: [CT.ICONS],
  },
  {
    name: 'babel-plugin-angular2-annotations',
    categories: [CT.SCHEMATICS],
  },
  {
    name: 'angular-resizable-element',
    categories: [CT.DRAG],
  },
  {
    name: 'angular-confirmation-popover',
    categories: [CT.OVERLAY],
  },
  {
    name: 'angular-gauge',
    categories: [CT.CHARTS],
  },
  {
    name: 'angularx-flatpickr',
    categories: [CT.DATE, CT.WRAPPER],
  },
  {
    name: 'angular-text-input-highlight',
    categories: [CT.FORMS],
  },
  {
    name: 'angular-text-input-autocomplete',
    categories: [CT.FORMS],
  },
  {
    name: 'ngx-log-monitor',
    categories: [CT.NOTIFICATION],
  },
  {
    name: 'rxdb',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'ngx-i18nsupport',
    categories: [CT.I18N],
  },
  {
    name: 'ngx-bearbones',
    categories: [CT.UI_FRAMEWORKS],
  },
  {
    name: 'ngx-speculoos',
    categories: [CT.TESTING],
  },
  {
    name: 'ngx-build-plus',
    categories: [CT.SCHEMATICS],
  },
  {
    name: 'generator-ngx-rocket',
    categories: [CT.SCHEMATICS],
  },
  {
    name: 'generator-ng-fullstack',
    categories: [CT.SCHEMATICS],
  },
  {
    name: '@ctrl/ngx-numbered-codeblock',
    categories: [CT.WRAPPER],
  },
  {
    name: 'ngx-avatar',
    categories: [CT.IMAGES],
  },
  {
    name: 'ng2-avatar',
    categories: [CT.IMAGES],
  },
  {
    name: 'ionic-text-avatar',
    categories: [CT.IMAGES, CT.MOBILE],
  },
  {
    name: '@nicky-lenaers/ngx-scroll-to',
    categories: [CT.SCROLL],
  },
  {
    name: 'ngx-echarts',
    categories: [CT.CHARTS, CT.WRAPPER],
  },
  {
    name: 'ng2-right-click-menu',
    categories: [CT.OVERLAY],
  },
  {
    name: '@datorama/akita',
    categories: [CT.DATA_FLOW],
  },
  {
    name: 'ngx-valdemort',
    categories: [CT.FORMS],
  },
  {
    name: 'ng-github-button',
    categories: [],
  },
  {
    name: 'ng-fullcalendar',
    categories: [CT.WRAPPER, CT.DATE],
  },
  {
    name: 'ngx-auth-firebaseui',
    categories: [CT.AUTH]
  },
  {
    name: 'ngx-linkifyjs',
    categories: [CT.WRAPPER]
  },
  {
    name: '@feeloor/ng-extension-schematics',
    categories: [CT.SCHEMATICS]
  },
  {
    name: '@asymmetrik/ngx-leaflet',
    categories: [CT.WRAPPER],
  },
  {
    name: '@angular-material-extensions/password-strength',
    categories: [CT.FORMS],
  },
  {
    name: '@angular-material-extensions/contacts',
    categories: [],
  },
  {
    name: '@angular-material-extensions/pages',
    categories: [],
  },
  {
    name: '@angular-material-extensions/link-preview',
    categories: [],
  },
  {
    name: '@angular-material-extensions/layout',
    categories: [],
  },
  {
    name: '@angular-material-extensions/faq',
    categories: [],
  },
  {
    name: 'ngx-combination-generator',
    categories: [],
  },
  {
    name: 'ngx-mapbox-gl',
    categories: [],
  },
  {
    name: 'angular2-in-memory-web-api',
    categories: [CT.HTTP],
  },
  {
    name: 'ng2-fancy-image-uploader',
    categories: [CT.IMAGES],
  },
  {
    name: 'angular2-image-upload',
    categories: [CT.IMAGES],
  },
  {
    name: 'ng-image-input-with-preview',
    categories: [CT.IMAGES],
  },
  {
    name: 'ngx-quill',
    categories: [CT.WRAPPER, CT.FORMS],
  },
];
