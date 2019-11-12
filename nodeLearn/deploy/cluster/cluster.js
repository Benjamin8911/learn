const cluster = require('cluster')
const os = require('os')
const numCPUs = os.cpus().length
const process = require('process')

console.log('numCPUs:' + numCPUs)
// 进程组
const workers = {}

if (cluster.isMaster) {
  // 主进程
  cluster.on('death', worker => {
    // 当进程结束时
    worker = cluster.fork()
    worker[worker.pid] = worker
    // 初始化开启和cpu数量一致的进程
    for(let i = 0; i < numCPUs; i++) {
      const worker = cluster.fork()
      workers[worker.pid] = worker
    }
  })
} else {
  // 其他进程, 工作分支
  const app = require('./app.js')
  app.use(async (ctx, next) => {
    console.log(`worker ${cluster.worker.id},PID${process.pid}`)
    next()
  })
  app.listen(3000)
}
// 主进程终止的时候发出SIGTERM
process.on('SIGTERM', () => {
  for(let pid in workers) {
    process.kill(pid)
  }
  process.exit(0)
})

require('./test')()
