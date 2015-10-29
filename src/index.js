import ModelExtension from './extensions/model_extension'

const manifest = require("../package.json")

export default function plugin(brief, options){
  let {mixin} = brief
  
  brief.mixin(ModelExtension, 'model') 

  function modifier(briefcase, options){
    Object.defineProperty(briefcase, 'keywords', {
      get: function(){
        return brief.util.flatten(briefcase.getAllModels().map(model => model.keywords()))
      }
    })
  }

  Object.defineProperty(modifier, 'groupNames', {
    get: function(){ return [] }
  })

  Object.defineProperty(modifier, 'modelNames', {
    get: function(){ return [] }
  })

  return modifier
}

plugin.model_files = []
plugin.groupNames = function(){ return [] }
plugin.modelNames = function(){ return [] }

plugin.plugin_name = manifest.name.replace(/brief-plugins-/,'')
plugin.version = manifest.version
plugin.description = manifest.description
