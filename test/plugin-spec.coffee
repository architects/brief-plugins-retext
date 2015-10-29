describe "The Retext Plugin", ->
  it "should load the plugin", ->
    names = brief.plugins.map (p)-> p.plugin_name
    names.should.containEql('retext')

  it "should load the plugin on the briefcase", ->
    briefcase.pluginNames.should.containEql('retext')

  it "should return all keywords at a briefcase level", ->
    briefcase.keywords.length.should.not.equal(undefined)

  it "should return keywords at a model level", ->
    briefcase.at('epics/model-definition-dsl').keywords().should.containEql('Fuck')

