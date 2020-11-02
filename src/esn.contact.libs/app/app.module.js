'use strict';

angular.module('esn.contact.libs', [
  'ngTagsInput',
  'esn.core',
  'esn.mailto-handler',
  'esn.router',
  'esn.session',
  'esn.notification',
  'esn.avatar',
  'esn.async-action',
  'esn.registry',
  'esn.configuration',
  'esn.application-menu',
  'esn.constants',
  'esn.infinite-list',
  'esn.websocket',
  'esn.http',
  'esn.file',
  'restangular',
  'esn.alphalist',
  'mgcrea.ngStrap.datepicker',
  'mgcrea.ngStrap.alert',
  'uuid4',
  'mgcrea.ngStrap.helpers.dateParser',
  'mgcrea.ngStrap.helpers.dateFormatter',
  'esn.search',
  'esn.scroll',
  'esn.multi-input',
  'esn.attendee',
  'esn.header',
  'esn.form.helper',
  'esn.sidebar',
  'op.dynamicDirective',
  'esn.url',
  'esn.aggregator',
  'esn.cache',
  'esn.highlight',
  'esn.provider',
  'esn.module-registry',
  'esn.datetime',
  'esn.i18n',
  'esn.user',
  'esn.user-configuration',
  'esn.settings-overlay',
  'esn.previous-page',
  'linagora.esn.davproxy'
]);

require('esn-frontend-common-libs/src/frontend/js/modules/core.js');
require('esn-frontend-common-libs/src/frontend/js/modules/esn.router.js');
require('esn-frontend-common-libs/src/frontend/js/modules/session.js');
require('esn-frontend-common-libs/src/frontend/js/modules/notification.js');
require('esn-frontend-common-libs/src/frontend/js/modules/avatar.js');
require('esn-frontend-common-libs/src/frontend/js/modules/alphalist.js');
require('esn-frontend-common-libs/src/frontend/js/modules/async-action.js');
require('esn-frontend-common-libs/src/frontend/js/modules/registry.js');
require('esn-frontend-common-libs/src/frontend/js/modules/config/config.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/application-menu.js');
require('esn-frontend-common-libs/src/frontend/js/constants.js');
require('esn-frontend-common-libs/src/frontend/js/modules/infinite-list/infinite-list.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/websocket.js');
require('esn-frontend-common-libs/src/frontend/js/modules/http.js');
require('esn-frontend-common-libs/src/frontend/js/modules/file.js');
require('esn-frontend-common-libs/src/modules/linagora.esn.graceperiod/frontend/js/app.js');
require('esn-frontend-common-libs/src/frontend/js/modules/search/search.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/scroll.js');
require('esn-frontend-common-libs/src/frontend/js/modules/multi-input.js');
require('esn-frontend-common-libs/src/frontend/js/modules/attendee/attendee.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/header/header.js');
require('esn-frontend-common-libs/src/frontend/js/modules/form-helper/form-helper.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/sidebar.js');
require('esn-frontend-common-libs/src/frontend/js/modules/url.js');
require('esn-frontend-common-libs/src/frontend/js/modules/aggregator.js');
require('esn-frontend-common-libs/src/frontend/js/modules/cache.js');
require('esn-frontend-common-libs/src/frontend/js/modules/highlight.js');
require('esn-frontend-common-libs/src/frontend/js/modules/provider.js');
require('esn-frontend-common-libs/src/frontend/js/modules/module-registry/module-registry.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/datetime/datetime.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/i18n/i18n.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user/user.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/user-configuration/user-configuration.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/settings-overlay.js');
require('esn-frontend-common-libs/src/frontend/js/modules/previous-page.js');
require('../../linagora.esn.davproxy/js/app.js');

require('./shell/contact-shell-helper.service.js');
require('./shell/shell.service.js');
require('./shell/addressbook-shell.service.js');
require('./vcard/helper.service.js');
require('./vcard/vcard-builder.service');
require('./virtual/virtual-addressbook-configuration.service.js');
require('./virtual/virtual-addressbook-registry.service.js');
require('./addressBook/contact-update-data.service.js');
require('./addressBook/virtual-addressbook.service.js');
require('./addressBook/addressbook.service.js');
require('./addressBook/addressbook-display.service.js');
require('./addressBook/addressbook-parser.service.js');
require('./addressBook/addressbook.constants.js');
require('./addressBook/avatar.service');
require('./addressBook/constants.js');
require('./addressBook/contact-api-client.service');
require('./addressBook/contact-shell-builder.service');
require('./addressBook/contact-update-data.service');
require('./contact/contact.constants.js');
require('./contact/helper.service.js');
require('./display-shell/addressbook-display-shell.service.js');
require('./display-shell/addressbook-display-shell-registry.service.js');
require('./group-addressbook/contact-group-addressbook-display-shell.service.js');