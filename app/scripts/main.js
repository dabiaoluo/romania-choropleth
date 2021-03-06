/*global require:false */
"use strict";
require.config({
  shim: {
    d3: {
      exports: 'd3'
    },
    queue: {
      exports: 'queue'
    },
    topojson: {
      exports: 'topojson'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },

  paths: {
    d3: '../components/d3/d3',
    queue: '../components/queue/queue',
    topojson: '../components/topojson/topojson',
    handlebars: '../components/handlebars/handlebars-1.0.0-rc.1',
    romania: 'romania',
    PopulationDemo: 'PopulationDemo',
    SimpleDemo: 'SimpleDemo',
    jquery: 'vendor/jquery.min'
  }
});

require(['jquery', 'Romania', 'PopulationDemo', 'SimpleDemo'], function ($, Romania, PopulationDemo, SimpleDemo) {
  var configs = {
    'PopulationDemo': PopulationDemo,
    'SimpleDemo': SimpleDemo
  };
  ['PopulationDemo', 'SimpleDemo'].forEach(function (demo) {
    if ($('#' + demo).length) {
      var map = new Romania(configs[demo]);
    }
  });
});