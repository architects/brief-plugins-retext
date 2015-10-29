'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _retext = require('retext');

var _retext2 = _interopRequireDefault(_retext);

var _retextKeywords = require('retext-keywords');

var _retextKeywords2 = _interopRequireDefault(_retextKeywords);

var _nlcstToString = require('nlcst-to-string');

var _nlcstToString2 = _interopRequireDefault(_nlcstToString);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function ModelExtension() {}

ModelExtension.prototype.keywords = function (callback) {
  var content = this.document.content;

  return (0, _retext2['default'])().use(_retextKeywords2['default']).process(content, function (err, file) {
    var space = file.namespace('retext');
    var keywords = space.keywords.map(function (keyword) {
      return (0, _nlcstToString2['default'])(keyword.matches[0].node);
    });

    console.log(_underscore2['default'].uniq(keywords));
  });
};

module.exports = ModelExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHRlbnNpb25zL21vZGVsX2V4dGVuc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3NCQUFtQixRQUFROzs7OzhCQUNMLGlCQUFpQjs7Ozs2QkFDYixpQkFBaUI7Ozs7MEJBQzdCLFlBQVk7Ozs7QUFFMUIsU0FBUyxjQUFjLEdBQUUsRUFBRzs7QUFFNUIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBUyxRQUFRLEVBQUM7TUFDL0MsT0FBTyxHQUFJLElBQUksQ0FBQyxRQUFRLENBQXhCLE9BQU87O0FBRVosU0FBTywwQkFBUSxDQUFDLEdBQUcsNkJBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVMsR0FBRyxFQUFDLElBQUksRUFBQztBQUNoRSxRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3BDLFFBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTzthQUFJLGdDQUFjLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQUEsQ0FBQyxDQUFBOztBQUVwRixXQUFPLENBQUMsR0FBRyxDQUFDLHdCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0dBQzlCLENBQUMsQ0FBQTtDQUNILENBQUE7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUEiLCJmaWxlIjoibW9kZWxfZXh0ZW5zaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJldGV4dCBmcm9tICdyZXRleHQnXG5pbXBvcnQgcHJvY2Vzc29yIGZyb20gJ3JldGV4dC1rZXl3b3JkcydcbmltcG9ydCBubGNzdFRvU3RyaW5nIGZyb20gJ25sY3N0LXRvLXN0cmluZydcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnXG5cbmZ1bmN0aW9uIE1vZGVsRXh0ZW5zaW9uKCl7IH1cblxuTW9kZWxFeHRlbnNpb24ucHJvdG90eXBlLmtleXdvcmRzID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBsZXQge2NvbnRlbnR9ID0gdGhpcy5kb2N1bWVudFxuXG4gIHJldHVybiByZXRleHQoKS51c2UocHJvY2Vzc29yKS5wcm9jZXNzKGNvbnRlbnQsIGZ1bmN0aW9uKGVycixmaWxlKXtcbiAgICBsZXQgc3BhY2UgPSBmaWxlLm5hbWVzcGFjZSgncmV0ZXh0JylcbiAgICBsZXQga2V5d29yZHMgPSBzcGFjZS5rZXl3b3Jkcy5tYXAoa2V5d29yZCA9PiBubGNzdFRvU3RyaW5nKGtleXdvcmQubWF0Y2hlc1swXS5ub2RlKSlcblxuICAgIGNvbnNvbGUubG9nKF8udW5pcShrZXl3b3JkcykpXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kZWxFeHRlbnNpb25cbiJdfQ==