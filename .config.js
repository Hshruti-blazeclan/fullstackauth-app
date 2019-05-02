module.exports = {
  apps : [{
    name        : "node-authapp",
    script      : "./node-authapp/server.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
     "NODE_ENV": "production"
    }
  },
  {
    name       : "react-authapp",
    script     : "./react-authapp/server.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
      "NODE_ENV": "production"
    }
  }]
}
