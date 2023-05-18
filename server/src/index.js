const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const DATA = require('./data');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

// GET /api/users
router.get('/api/users', async (ctx) => {
    ctx.body = {
        message: 'success',
        date: {
            total: 55,
            records: DATA.user_list
        }
    }
  // 获取用户列表的逻辑
});

// GET /api/users/:id
router.get('/api/users/:id', async (ctx) => {
  // 获取指定用户的逻辑
});
1
// POST /api/users
router.post('/api/users', async (ctx) => {
  // 创建用户的逻辑
});

// PUT /api/users/:id
router.put('/api/users/:id', async (ctx) => {
  // 更新指定用户的逻辑
});

// DELETE /api/users/:id
router.delete('/api/users/:id', async (ctx) => {
  // 删除指定用户的逻辑
});

app.use(router.routes());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
