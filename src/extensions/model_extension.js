import retext from 'retext'
import processor from 'retext-keywords'
import nlcstToString from 'nlcst-to-string'
import _ from 'underscore'
import {Promise} from 'es6-promise'

export default class ModelExtension {
  analyzeKeywords(){
    return new Promise((resolve,reject)=>{
      return this.runRetext().then(report =>{
        resolve(report.keywords.map(keyword => nlcstToString(keyword.matches[0].node)))
      })
    })
  }

  runRetext(){
    return new Promise((resolve,reject)=>{
      this.retextProcessor.process(this.document.content, function(err, file){
        let space = file.namespace('retext')
        if(!err){ resolve(space) } else { reject(err) }
      })
    })
  }

  get retextProcessor(){
    return retext().use(processor)
  }
}

module.exports = ModelExtension
