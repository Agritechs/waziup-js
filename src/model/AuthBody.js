(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WaziupApi) {
      root.WaziupApi = {};
    }
    root.WaziupApi.AuthBody = factory(root.WaziupApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AuthBody model module.
   * @module model/AuthBody
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AuthBody</code>.
   * @alias module:model/AuthBody
   * @class
   * @param username {String} username
   * @param password {String} password
   */
  var exports = function(username, password) {
    var _this = this;

    _this['username'] = username;
    _this['password'] = password;
  };

  /**
   * Constructs a <code>AuthBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthBody} obj Optional instance to populate.
   * @return {module:model/AuthBody} The populated <code>AuthBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * username
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * password
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


