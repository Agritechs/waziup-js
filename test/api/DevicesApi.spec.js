/**
 * WAZIUP API
 * Applications API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WaziupApi);
  }
}(this, function(expect, WaziupApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WaziupApi.DevicesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DevicesApi', function() {
    describe('getDevices', function() {
      it('should call getDevices successfully', function(done) {
        //uncomment below and update the code to test getDevices
        //instance.getDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDevice', function() {
      it('should call createDevice successfully', function(done) {
        //uncomment below and update the code to test createDevice
        //instance.createDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDevice', function() {
      it('should call deleteDevice successfully', function(done) {
        //uncomment below and update the code to test deleteDevice
        //instance.deleteDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDevice', function() {
      it('should call getDevice successfully', function(done) {
        //uncomment below and update the code to test getDevice
        //instance.getDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putDeviceLocation', function() {
      it('should call putDeviceLocation successfully', function(done) {
        //uncomment below and update the code to test putDeviceLocation
        //instance.putDeviceLocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceSensors', function() {
      it('should call getDeviceSensors successfully', function(done) {
        //uncomment below and update the code to test getDeviceSensors
        //instance.getDeviceSensors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSensor', function() {
      it('should call deleteSensor successfully', function(done) {
        //uncomment below and update the code to test deleteSensor
        //instance.deleteSensor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putSensorQK', function() {
      it('should call putSensorQK successfully', function(done) {
        //uncomment below and update the code to test putSensorDimension
        //instance.putSensorDimension(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSensor', function() {
      it('should call getSensor successfully', function(done) {
        //uncomment below and update the code to test getSensor
        //instance.getSensor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putSensorName', function() {
      it('should call putSensorName successfully', function(done) {
        //uncomment below and update the code to test putSensorName
        //instance.putSensorName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putSensorSD', function() {
      it('should call putSensorSD successfully', function(done) {
        //uncomment below and update the code to test putSensorDeviceKind
        //instance.putSensorDeviceKind(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putSensorUnit', function() {
      it('should call putSensorUnit successfully', function(done) {
        //uncomment below and update the code to test putSensorUnit
        //instance.putSensorUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSensorValues', function() {
      it('should call getSensorValues successfully', function(done) {
        //uncomment below and update the code to test getSensorValues
        //instance.getSensorValues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addSensor', function() {
      it('should call addSensor successfully', function(done) {
        //uncomment below and update the code to test addSensor
        //instance.addSensor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addSensor', function() {
      it('should call addSensor successfully', function(done) {
        //uncomment below and update the code to test addSensor
        //instance.addSensor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putDeviceName', function() {
      it('should call putDeviceName successfully', function(done) {
        //uncomment below and update the code to test putDeviceName
        //instance.putDeviceName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putDeviceOwner', function() {
      it('should call putDeviceOwner successfully', function(done) {
        //uncomment below and update the code to test putDeviceOwner
        //instance.putDeviceOwner(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
