'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = plugin;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _extensionsModel_extension = require('./extensions/model_extension');

var _extensionsModel_extension2 = _interopRequireDefault(_extensionsModel_extension);

var manifest = require("../package.json");

function plugin(brief, options) {
  var mixin = brief.mixin;

  brief.mixin(_extensionsModel_extension2['default'], 'model');

  function modifier(briefcase, options) {}

  Object.defineProperty(modifier, 'groupNames', {
    get: function get() {
      return [];
    }
  });

  Object.defineProperty(modifier, 'modelNames', {
    get: function get() {
      return [];
    }
  });

  return modifier;
}

plugin.model_files = [];
plugin.groupNames = function () {
  return [];
};
plugin.modelNames = function () {
  return [];
};

plugin.plugin_name = manifest.name.replace(/brief-plugins-/, '');
plugin.version = manifest.version;
plugin.description = manifest.description;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztxQkFJd0IsTUFBTTs7Ozt5Q0FKSCw4QkFBOEI7Ozs7QUFFekQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7O0FBRTVCLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUM7TUFDdkMsS0FBSyxHQUFJLEtBQUssQ0FBZCxLQUFLOztBQUVWLE9BQUssQ0FBQyxLQUFLLHlDQUFpQixPQUFPLENBQUMsQ0FBQTs7QUFFcEMsV0FBUyxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBQyxFQUVwQzs7QUFFRCxRQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUU7QUFDNUMsT0FBRyxFQUFFLGVBQVU7QUFBRSxhQUFPLEVBQUUsQ0FBQTtLQUFFO0dBQzdCLENBQUMsQ0FBQTs7QUFFRixRQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUU7QUFDNUMsT0FBRyxFQUFFLGVBQVU7QUFBRSxhQUFPLEVBQUUsQ0FBQTtLQUFFO0dBQzdCLENBQUMsQ0FBQTs7QUFFRixTQUFPLFFBQVEsQ0FBQTtDQUNoQjs7QUFFRCxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQTtBQUN2QixNQUFNLENBQUMsVUFBVSxHQUFHLFlBQVU7QUFBRSxTQUFPLEVBQUUsQ0FBQTtDQUFFLENBQUE7QUFDM0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFVO0FBQUUsU0FBTyxFQUFFLENBQUE7Q0FBRSxDQUFBOztBQUUzQyxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQy9ELE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQTtBQUNqQyxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kZWxFeHRlbnNpb24gZnJvbSAnLi9leHRlbnNpb25zL21vZGVsX2V4dGVuc2lvbidcblxuY29uc3QgbWFuaWZlc3QgPSByZXF1aXJlKFwiLi4vcGFja2FnZS5qc29uXCIpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsdWdpbihicmllZiwgb3B0aW9ucyl7XG4gIGxldCB7bWl4aW59ID0gYnJpZWZcbiAgXG4gIGJyaWVmLm1peGluKE1vZGVsRXh0ZW5zaW9uLCAnbW9kZWwnKSBcblxuICBmdW5jdGlvbiBtb2RpZmllcihicmllZmNhc2UsIG9wdGlvbnMpe1xuXG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kaWZpZXIsICdncm91cE5hbWVzJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIFtdIH1cbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kaWZpZXIsICdtb2RlbE5hbWVzJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIFtdIH1cbiAgfSlcblxuICByZXR1cm4gbW9kaWZpZXJcbn1cblxucGx1Z2luLm1vZGVsX2ZpbGVzID0gW11cbnBsdWdpbi5ncm91cE5hbWVzID0gZnVuY3Rpb24oKXsgcmV0dXJuIFtdIH1cbnBsdWdpbi5tb2RlbE5hbWVzID0gZnVuY3Rpb24oKXsgcmV0dXJuIFtdIH1cblxucGx1Z2luLnBsdWdpbl9uYW1lID0gbWFuaWZlc3QubmFtZS5yZXBsYWNlKC9icmllZi1wbHVnaW5zLS8sJycpXG5wbHVnaW4udmVyc2lvbiA9IG1hbmlmZXN0LnZlcnNpb25cbnBsdWdpbi5kZXNjcmlwdGlvbiA9IG1hbmlmZXN0LmRlc2NyaXB0aW9uXG4iXX0=