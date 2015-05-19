var util = require('mis-util');
var config = require('./config.ignore.json');

var mis = util({
   sysname: '/c1/FRSH',
   connect: { 
      host: 'gccmhc',
      user: 'tim',
      password: config.user
   },
   cron: {
      user: 'datamgr',
      pass: config.cron
   },
   view_path: {
      local: './view/'
   }
});

mis.deploy.usc()
.then(function(files) {
   mis.script.compile(files);
});
mis.deploy.view();
