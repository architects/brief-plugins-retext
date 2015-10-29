import retext from 'retext'
import processor from 'retext-keywords'
import nlcstToString from 'nlcst-to-string'
import _ from 'underscore'

function ModelExtension(){ }

ModelExtension.prototype.keywords = function(callback){
  let {content} = this.document

  return retext().use(processor).process(content, function(err,file){
    let space = file.namespace('retext')
    let keywords = space.keywords.map(keyword => nlcstToString(keyword.matches[0].node))
    console.log(_.uniq(keywords))
  })
}

module.exports = ModelExtension
