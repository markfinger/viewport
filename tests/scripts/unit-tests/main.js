define([
  'QUnit',
  'unit-tests/setup',
  'unit-tests/test-bindings',
  'unit-tests/test-bindings-trigger',
  'unit-tests/test-check',
  'unit-tests/test-conditions',
  'unit-tests/test-height',
  'unit-tests/test-off',
  'unit-tests/test-offsetOf',
  'unit-tests/test-on',
  'unit-tests/test-once',
  'unit-tests/test-position',
  'unit-tests/test-scroll-y',
  'unit-tests/test-settings',
  'unit-tests/test-start',
  'unit-tests/test-stop',
  'unit-tests/test-update'
], function(QUnit, setup, bindings, bindingsTrigger, check, conditions, height, off, offsetOf, on, once, position, scrollY, settings, start, stop, update) {

  // Test the individual modules
  bindings.test();
  bindingsTrigger.test();
  check.test();
  conditions.test();
  height.test();
  off.test();
  offsetOf.test();
  on.test();
  once.test();
  position.test();
  scrollY.test();
  settings.test();
  start.test();
  stop.test();
  update.test();

  // Sanity checks on the test structure
  setup.test();

  // Start QUnit
  QUnit.load();
  QUnit.start();
});