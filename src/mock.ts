//引入mockjs
import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random;
//使用mockjs模拟数据
Mock.mock('/api/users/', () => {//当post或get请求到/api/users/路由时Mock会拦截请求并返回上面的数据
    var list = [
        {"url":"http://127.0.0.1:5173/users/3.json","username":"aaaaaa","email":"","groups":[]},
        {"url":"http://127.0.0.1:5173/users/2.json","username":"somenzz","email":"","groups":[]},
        {"url":"http://127.0.0.1:5173/users/1.json","username":"admin","email":"admin@example.com","groups":[]}
    ]
    return list
})