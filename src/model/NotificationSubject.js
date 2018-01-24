(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NotificationCondition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NotificationCondition'));
  } else {
    // Browser globals (root is window)
    if (!root.WaziupApi) {
      root.WaziupApi = {};
    }
    root.WaziupApi.NotificationSubject = factory(root.WaziupApi.ApiClient, root.WaziupApi.NotificationCondition);
  }
}(this, function(ApiClient, NotificationCondition) {
  'use strict';


  /**
   * Constructs a new <code>NotificationSubject</code>.
   * @alias module:model/NotificationSubject
   * @class
   * @param condition {module:model/NotificationCondition} 
   */
  var exports = function(entityNames, condition) {
    var _this = this;

    _this['entityNames'] = entityNames;
    _this['condition'] = condition;
  };

  /**
   * Constructs a <code>NotificationSubject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationSubject} obj Optional instance to populate.
   * @return {module:model/NotificationSubject} The populated <code>NotificationSubject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entityNames')) {
        obj['entityNames'] = ApiClient.convertToType(data['entityNames'], ['String']);
      }
      if (data.hasOwnProperty('condition')) {
        obj['condition'] = NotificationCondition.constructFromObject(data['condition']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} entityNames
   */
  exports.prototype['entityNames'] = undefined;
  /**
   * @member {module:model/NotificationCondition} condition
   */
  exports.prototype['condition'] = undefined;

  return exports;
}));


