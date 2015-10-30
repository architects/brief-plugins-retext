describe "The Retext Plugin", ->
  it "should load the plugin", ->
    names = brief.plugins.map (p)-> p.plugin_name
    names.should.containEql('retext')

  it "should load the plugin on the briefcase", ->
    briefcase.pluginNames.should.containEql('retext')

  it "should return keywords at a model level", ->
    epic = briefcase.epics.first()
    epic.analyzeKeywords().then (keywords)->
      keywords.should.containEql('Model')

