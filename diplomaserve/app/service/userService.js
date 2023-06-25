const Service = require("egg").Service;
const path = require("path");
const fs = require("fs");
//登录
class UserService extends Service {
    // 用户登录
    async login(no, pwd) {
        const sql = "select id,no,pwd,sex,name from user where no=? and pwd=?";
        let list = await this.ctx.app.mysql.query(sql, [no, pwd]);
        return list;
    }
    // 用户注册
    async register(name, no, pwd, sex) {
        const sql = "insert into user(name,no,pwd,sex) values(?,?,?,?)";
        let list = await this.ctx.app.mysql.query(sql, [name, no, pwd, sex]);
        return list.affectedRows;
        // 成功则返回1

    }
    // 通过no查询用户
    async selectno(no) {
        const sql = "select id,no,pwd,sex from user where no = ?";
        let list = await this.ctx.app.mysql.query(sql, [no]);
        return list;
    }
    // 修改密码
    async updatepwd(no, newpwd) {
        const sql = 'update `user` set pwd = ? where no = ?';
        let list = await this.ctx.app.mysql.query(sql, [newpwd, no]);
        return list.affectedRows;
    }
    // 根据id获得那个人的所有信息
    async getmsgbyuserid(userid) {
        const sql = ' select * from user where id = ?';
        let list = await this.ctx.app.mysql.query(sql, userid);
        return list;
    }

    // 根据userid获取那个人的所有作品信息
    async getworkmsgbyuserid(userid) {
        const sql = 'select * from works where userid = ?';
        let list = await this.ctx.app.mysql.query(sql, userid);
        return list;
    }

    //根据userid获得他给哪些作品点了赞并获得作品的信息
    async getworksbyuserid(userid) {
        const sql = 'select * from works inner join good on works.userid = ? =good.userid and good.workid = works.id';
        let list = await this.ctx.app.mysql.query(sql, userid);
        return list;
    }
    //根据userid获得他给哪些作品收藏并获得作品的信息
    async getcollecttionworksbyuserid(userid) {
        const sql = 'select * from works inner join collection on works.userid = ? =collection.userid and collection.workid = works.id';
        let list = await this.ctx.app.mysql.query(sql, userid);
        return list;
    }
    // 根据userid获取他是哪个社团的人和社团的基本信息
    async getclubmsgbyuserid(userid) {
        const sql = 'select * from user inner join club on user.clubtype = club.type where user.id = ?';
        let list = await this.ctx.app.mysql.query(sql, userid);
        return list;
    }

    // 头像上传 单文件
    async updateHeadimg(files) {
        let file = files[0];//取出客户端上传的文件
        const toFileName = '/public/upload/' + Date.now() + file.filename;//获取文件名
        let to = path.dirname(__dirname) + toFileName;
        await fs.copyFileSync(file.filepath, to);
        await fs.unlinkSync(file.filepath);//文件上传结束

        const url = "http://localhost:8000" + toFileName;//localhost 就是public下面的文件
        return url;
    }
    //把头像插入到后台里面去
    async insertheadimg(url, userid) {
        const sql = 'update user set imageurl = ? where id = ?';
        let list = await this.ctx.app.mysql.query(sql, [url, userid]);
        return list;
    }

    //user1向user2发起一个请求 即添加数据
    async user1request(user1, user2, club, name,clubtype) {
        const sql = 'insert into request (userid1,userid2,club,name,clubtype) values(?,?,?,?,?)';
        let list = await this.ctx.app.mysql.query(sql, [user1, user2, club, name,clubtype]);
        return list;
    }

    // 查找所有发送给自己的信息
    async getmsgtome(userid) {
        const sql = 'select * from request where userid2 = ? and type = 0';
        let list = await this.ctx.app.mysql.query(sql, userid);
        return list;
    }

    // 发起请求的记录
    async requestmsg(userid) {
        const sql = 'select * from request where userid1 = ?';
        let list = await this.ctx.app.mysql.query(sql, userid);
        return list;
    }
    // 同意或拒绝user1的请求 即修改信息 这里就是同意
    async answermsg(clubtype, userid1) {
        const sql = 'update user set clubtype = ? where id = ?';
        let list = await this.ctx.app.mysql.query(sql, [clubtype, userid1]);
        return list;

    }
    // 同意或者拒绝以后修改状态type
	async updateagreetype(id) {
         const sql = 'update request set type = 1 where id = ?';
        let list = await this.ctx.app.mysql.query(sql, id);
        return list;
    }

    // 删除请求记录
    async delmsg(userid1, userid2) {
        const sql = 'delete from request where userid1 = ? and userid2 = ?';
        let list = await this.ctx.app.mysql.query(sql, [userid1, userid2]);
        return list;
    }

    //根据社团获取社长的信息
    async getpmsgbyclubtype(clubtype) {
        const sql = 'select * from user where clubtype = ? and clubbosstype = 2';
        let list = await this.ctx.app.mysql.query(sql, clubtype);
        return list;
    }
}

module.exports = UserService;