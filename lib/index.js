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

  function modifier(briefcase, options) {
    Object.defineProperty(briefcase, 'keywords', {
      get: function get() {
        return brief.util.flatten(briefcase.getAllModels().map(function (model) {
          return model.keywords();
        }));
      }
    });
  }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztxQkFJd0IsTUFBTTs7Ozt5Q0FKSCw4QkFBOEI7Ozs7QUFFekQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7O0FBRTVCLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUM7TUFDdkMsS0FBSyxHQUFJLEtBQUssQ0FBZCxLQUFLOztBQUVWLE9BQUssQ0FBQyxLQUFLLHlDQUFpQixPQUFPLENBQUMsQ0FBQTs7QUFFcEMsV0FBUyxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBQztBQUNuQyxVQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDM0MsU0FBRyxFQUFFLGVBQVU7QUFDYixlQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO2lCQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7U0FBQSxDQUFDLENBQUMsQ0FBQTtPQUNuRjtLQUNGLENBQUMsQ0FBQTtHQUNIOztBQUVELFFBQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRTtBQUM1QyxPQUFHLEVBQUUsZUFBVTtBQUFFLGFBQU8sRUFBRSxDQUFBO0tBQUU7R0FDN0IsQ0FBQyxDQUFBOztBQUVGLFFBQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRTtBQUM1QyxPQUFHLEVBQUUsZUFBVTtBQUFFLGFBQU8sRUFBRSxDQUFBO0tBQUU7R0FDN0IsQ0FBQyxDQUFBOztBQUVGLFNBQU8sUUFBUSxDQUFBO0NBQ2hCOztBQUVELE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFBO0FBQ3ZCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBVTtBQUFFLFNBQU8sRUFBRSxDQUFBO0NBQUUsQ0FBQTtBQUMzQyxNQUFNLENBQUMsVUFBVSxHQUFHLFlBQVU7QUFBRSxTQUFPLEVBQUUsQ0FBQTtDQUFFLENBQUE7O0FBRTNDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUMsRUFBRSxDQUFDLENBQUE7QUFDL0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFBO0FBQ2pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RlbEV4dGVuc2lvbiBmcm9tICcuL2V4dGVuc2lvbnMvbW9kZWxfZXh0ZW5zaW9uJ1xuXG5jb25zdCBtYW5pZmVzdCA9IHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIilcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGx1Z2luKGJyaWVmLCBvcHRpb25zKXtcbiAgbGV0IHttaXhpbn0gPSBicmllZlxuICBcbiAgYnJpZWYubWl4aW4oTW9kZWxFeHRlbnNpb24sICdtb2RlbCcpIFxuXG4gIGZ1bmN0aW9uIG1vZGlmaWVyKGJyaWVmY2FzZSwgb3B0aW9ucyl7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGJyaWVmY2FzZSwgJ2tleXdvcmRzJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gYnJpZWYudXRpbC5mbGF0dGVuKGJyaWVmY2FzZS5nZXRBbGxNb2RlbHMoKS5tYXAobW9kZWwgPT4gbW9kZWwua2V5d29yZHMoKSkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2RpZmllciwgJ2dyb3VwTmFtZXMnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gW10gfVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2RpZmllciwgJ21vZGVsTmFtZXMnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gW10gfVxuICB9KVxuXG4gIHJldHVybiBtb2RpZmllclxufVxuXG5wbHVnaW4ubW9kZWxfZmlsZXMgPSBbXVxucGx1Z2luLmdyb3VwTmFtZXMgPSBmdW5jdGlvbigpeyByZXR1cm4gW10gfVxucGx1Z2luLm1vZGVsTmFtZXMgPSBmdW5jdGlvbigpeyByZXR1cm4gW10gfVxuXG5wbHVnaW4ucGx1Z2luX25hbWUgPSBtYW5pZmVzdC5uYW1lLnJlcGxhY2UoL2JyaWVmLXBsdWdpbnMtLywnJylcbnBsdWdpbi52ZXJzaW9uID0gbWFuaWZlc3QudmVyc2lvblxucGx1Z2luLmRlc2NyaXB0aW9uID0gbWFuaWZlc3QuZGVzY3JpcHRpb25cbiJdfQ==