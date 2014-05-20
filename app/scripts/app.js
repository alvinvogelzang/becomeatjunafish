var BecomeTjunaFish = window.BecomeTjunaFish = Ember.Application.create();

BecomeTjunaFish.ApplicationAdapter = DS.FixtureAdapter.extend();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
