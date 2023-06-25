import instance from "./01.http";

// 登录
export const login = (no: any, pwd: any) => {
    return instance.post('/login', {
        no,
        pwd
    })
}

// 注册
export const register = (name: any, no: any, pwd: any, sex: any) => {
    return instance.post('/register', {
        name,
        no,
        pwd,
        sex
    })
}

// 修改密码
export const updatepwd = (no: any, pwd: any, newpwd: any) => {
    return instance.post('/updatepwd', {
        no,
        pwd,
        newpwd
    })
}

// 获得所有社团的信息
export const getmsg = () => {
    return instance.get('/getmsg', {})
}


// 根据id获得所有社团的信息
export const getmsgbyid = (id: any) => {
    return instance.get('/getmsgbyid', {
        params: {
            id
        }
    })
}

// 根据id和bosstype获取社团的成员
export const getpeople = (clubtype: any, bosstype: any) => {
    return instance.get('/getpeople', {
        params: {
            clubtype,
            bosstype
        }
    })
}
// 图片上传
export const updateFile = (files: any) => {
    return instance.post('/updateFile', {
        files
    })
}

// 根据cookie获得那个人的id
export const getidbycookie = (cookie: any) => {
    return instance.get('/getidbycookie', {
        params: {
            cookie
        }
    })
}

// 根据clubtype获得社团的信息
export const getmsgbyclubtype = (clubtype: any) => {
    return instance.get('/getmsgbyclubtype', {
        params: {
            clubtype
        }
    })
}
// 根据userid获取user的信息
export const getmsgbyuserid = (userid: any) => {
    return instance.get('/getmsgbyuserid', {
        params: {
            userid
        }
    })
}

//根据userid获取它的所有works信息
export const getworkmsgbyuserid = (userid: any) => {
    return instance.get('/getworkmsgbyuserid', {
        params: {
            userid
        }
    })
}
//根据userid判断他给哪些作品点了赞并获得哪些作品的信息
export const getworksbyuserid = (userid: any) => {
    return instance.get('/getworksbyuserid', {
        params: {
            userid
        }
    })
}
//根据userid判断他给哪些作品收藏并获得哪些作品的信息
export const getcollecttionworksbyuserid = (userid: any) => {
    return instance.get('/getcollecttionworksbyuserid', {
        params: {
            userid
        }
    })
}

//根据userid判断他是哪个社团的人并且获得社团的基本信息
export const getclubmsgbyuserid = (userid: any) => {
    return instance.get('/getclubmsgbyuserid', {
        params: {
            userid
        }
    })
}


// publish里面的立即上传 
export const publish = (userid: any, content: any, url: any, time: any, workstype: any) => {
    return instance.post('/publish', {
        userid,
        content,
        url,
        time,
        workstype
    })
}

// 获取所有的works信息
export const getallmsg = (userid:any) => {
    return instance.get('/getallmsg', {
        params:{
            userid
        }
    })
}

// 热榜
export const hottop = (userid:any) => {
    return instance.get('/hottop', {
        params:{
            userid
        }
    });
}

// 点赞 三合一
export const good = (userid: any, workid: any) => {
    return instance.post('/good', {
        userid,
        workid
    })
}

// 收藏 三合一
export const collection = (userid: any, workid: any) => {
    return instance.post('/collection', {
        userid,
        workid
    })
}

export const getuserid = (userid: any) => {
    return instance.get('/getuserid', {
        params: {
            userid
        }
    })
}

//根据type获得works的信息
export const getworkstypemsg = (type: any) => {
    return instance.get('/getworkstypemsg', {
        params: {
            type
        }
    })
}

//搜索查询
export const getsearchmsg = (searchmsg: any) => {
    return instance.get('/getsearchmsg', {
        params: {
            searchmsg
        }
    })
}

// 获取num排行前三的社团
export const getclubmsgthree = () => {
    return instance.get('/getclubmsgthree', {})
}

//user1向user2发起一个请求 即添加数据
export const user1request = (userid1: any, userid2: any, club: any, name: any, clubtype: any) => {
    return instance.post('/user1request', {
        userid1,
        userid2,
        club,
        name,
        clubtype
    })
}
//同意以后修改type状态
export const updateagreetype = (id: any) => {
    return instance.post('/updateagreetype', {
        id
    })
}

// 查找所有发送给自己的信息
export const getmsgtome = (userid: any) => {
    return instance.get('/getmsgtome', {
        params: {
            userid
        }
    })
}
//查找所有自己发起请求的信息
export const requestmsg = (userid: any) => {
    return instance.get('/requestmsg', {
        params: {
            userid
        }
    })
}
// 同意或拒绝user1的请求 即修改信息 这里就是同意
export const answermsg = (clubtype: any, userid1: any) => {
    return instance.post('/answermsg', {
        clubtype,
        userid1
    })
}

// 删除请求记录
export const delmsg = (userid1: any, userid2: any) => {
    return instance.post('/delmsg', {
        userid1,
        userid2
    })
}

//根据社团获取社长的信息
export const getpmsgbyclubtype = (clubtype: any) => {
    return instance.get('/getpmsgbyclubtype', {
        params: {
            clubtype
        }
    })
}