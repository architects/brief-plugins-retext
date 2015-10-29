brief = require('brief-node'),
blueprint = require('brief-plugins-blueprint'),
retext = require('../lib/index');

global.brief = brief.use(blueprint).use(retext)

global.briefcase = brief.load('./example')
