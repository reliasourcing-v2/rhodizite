module.exports = {
    apps : [{
      name:"rsi-app",
      port:"3020",
      script:"./.output/server/index.mjs",
      exec_mode:'cluster',
      instances: 1
    }]
  }