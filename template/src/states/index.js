import Vue from 'vue';
import VueRouter from 'vue-router';

import states from './routes';
import redirections from './redirections';

let Router = new VueRouter();
Router.map(states);
Router.redirect(redirections);

export default Router;