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
    root.WaziupApi.Location = factory(root.WaziupApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Constructs a new <code>Location</code>.
   * location is a pair [latitude, longitude] with the coordinates on earth in decimal notation (e.g. [40.418889, 35.89389]).
   * @alias module:model/Location
   * @class
   */
  var exports = function(latitude, longitude) {
    var _this = this;

    _this['latitude']  = latitude;
    _this['longitude'] = longitude;


  };

  /**
   * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Location} obj Optional instance to populate.
   * @return {module:model/Location} The populated <code>Location</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;



  return exports;
}));


