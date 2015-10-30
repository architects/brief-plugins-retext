'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _retext = require('retext');

var _retext2 = _interopRequireDefault(_retext);

var _retextKeywords = require('retext-keywords');

var _retextKeywords2 = _interopRequireDefault(_retextKeywords);

var _nlcstToString = require('nlcst-to-string');

var _nlcstToString2 = _interopRequireDefault(_nlcstToString);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _es6Promise = require('es6-promise');

var ModelExtension = (function () {
  function ModelExtension() {
    _classCallCheck(this, ModelExtension);
  }

  _createClass(ModelExtension, [{
    key: 'analyzeKeywords',
    value: function analyzeKeywords() {
      var _this = this;

      return new _es6Promise.Promise(function (resolve, reject) {
        return _this.runRetext().then(function (report) {
          resolve(report.keywords.map(function (keyword) {
            return (0, _nlcstToString2['default'])(keyword.matches[0].node);
          }));
        });
      });
    }
  }, {
    key: 'runRetext',
    value: function runRetext() {
      var _this2 = this;

      return new _es6Promise.Promise(function (resolve, reject) {
        _this2.retextProcessor.process(_this2.document.content, function (err, file) {
          var space = file.namespace('retext');
          if (!err) {
            resolve(space);
          } else {
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'retextProcessor',
    get: function get() {
      return (0, _retext2['default'])().use(_retextKeywords2['default']);
    }
  }]);

  return ModelExtension;
})();

exports['default'] = ModelExtension;

module.exports = ModelExtension;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHRlbnNpb25zL21vZGVsX2V4dGVuc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7c0JBQW1CLFFBQVE7Ozs7OEJBQ0wsaUJBQWlCOzs7OzZCQUNiLGlCQUFpQjs7OzswQkFDN0IsWUFBWTs7OzswQkFDSixhQUFhOztJQUVkLGNBQWM7V0FBZCxjQUFjOzBCQUFkLGNBQWM7OztlQUFkLGNBQWM7O1dBQ2xCLDJCQUFFOzs7QUFDZixhQUFPLHdCQUFZLFVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBRztBQUNuQyxlQUFPLE1BQUssU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxFQUFHO0FBQ3BDLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxPQUFPO21CQUFJLGdDQUFjLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1dBQUEsQ0FBQyxDQUFDLENBQUE7U0FDaEYsQ0FBQyxDQUFBO09BQ0gsQ0FBQyxDQUFBO0tBQ0g7OztXQUVRLHFCQUFFOzs7QUFDVCxhQUFPLHdCQUFZLFVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBRztBQUNuQyxlQUFLLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVMsR0FBRyxFQUFFLElBQUksRUFBQztBQUNyRSxjQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3BDLGNBQUcsQ0FBQyxHQUFHLEVBQUM7QUFBRSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1dBQUUsTUFBTTtBQUFFLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7V0FBRTtTQUNoRCxDQUFDLENBQUE7T0FDSCxDQUFDLENBQUE7S0FDSDs7O1NBRWtCLGVBQUU7QUFDbkIsYUFBTywwQkFBUSxDQUFDLEdBQUcsNkJBQVcsQ0FBQTtLQUMvQjs7O1NBcEJrQixjQUFjOzs7cUJBQWQsY0FBYzs7QUF1Qm5DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFBIiwiZmlsZSI6Im1vZGVsX2V4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXRleHQgZnJvbSAncmV0ZXh0J1xuaW1wb3J0IHByb2Nlc3NvciBmcm9tICdyZXRleHQta2V5d29yZHMnXG5pbXBvcnQgbmxjc3RUb1N0cmluZyBmcm9tICdubGNzdC10by1zdHJpbmcnXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xuaW1wb3J0IHtQcm9taXNlfSBmcm9tICdlczYtcHJvbWlzZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWxFeHRlbnNpb24ge1xuICBhbmFseXplS2V5d29yZHMoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgcmV0dXJuIHRoaXMucnVuUmV0ZXh0KCkudGhlbihyZXBvcnQgPT57XG4gICAgICAgIHJlc29sdmUocmVwb3J0LmtleXdvcmRzLm1hcChrZXl3b3JkID0+IG5sY3N0VG9TdHJpbmcoa2V5d29yZC5tYXRjaGVzWzBdLm5vZGUpKSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJ1blJldGV4dCgpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICB0aGlzLnJldGV4dFByb2Nlc3Nvci5wcm9jZXNzKHRoaXMuZG9jdW1lbnQuY29udGVudCwgZnVuY3Rpb24oZXJyLCBmaWxlKXtcbiAgICAgICAgbGV0IHNwYWNlID0gZmlsZS5uYW1lc3BhY2UoJ3JldGV4dCcpXG4gICAgICAgIGlmKCFlcnIpeyByZXNvbHZlKHNwYWNlKSB9IGVsc2UgeyByZWplY3QoZXJyKSB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBnZXQgcmV0ZXh0UHJvY2Vzc29yKCl7XG4gICAgcmV0dXJuIHJldGV4dCgpLnVzZShwcm9jZXNzb3IpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb2RlbEV4dGVuc2lvblxuIl19