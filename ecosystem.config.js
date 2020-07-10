module.exports = {
	apps : [{
	  name: 'scorecard',
	  instances : "max",
	  exec_mode : "cluster",
	  script: './src/index.js',
	  env: {
			  NODE_ENV:'production',
			  PORT:3000
		  }
	}]
  };