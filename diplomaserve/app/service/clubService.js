const Service = require("egg").Service;
const path = require("path");
const fs = require("fs");

class ClubService extends Service {
    // 得到所有的社团信息
    async getmsg() {
        const sql = "select * from club ";
        let list = await this.ctx.app.mysql.query(sql);
        return list;
    }

    // 根据id得到社团的信息
    async getmsgbyid(id) {
        const sql = "select * from club where id = ? ";
        let list = await this.ctx.app.mysql.query(sql, id);
        return list;
    }
    // 根据不同clubbosstype分类得到部长副部长和成员
    async getpeople(clubtype, bosstype) {
        const sql = "select name from user where clubtype = ? and clubbosstype = ?";
        let list = await this.ctx.app.mysql.query(sql, [clubtype, bosstype]);
        return list;
    }

    // 图片上传 单文件
    async updateFile(files) {
        let file = files[0];//取出客户端上传的文件

        const toFileName = '/public/upload/' + Date.now() + file.filename;//获取文件名
        let to = path.dirname(__dirname) + toFileName;
        await fs.copyFileSync(file.filepath, to);
        await fs.unlinkSync(file.filepath);//文件上传结束

        const url = "http://localhost:8000" + toFileName;//localhost 就是public下面的文件
        return url;
    }

    // 根据cookie获得那个人的id
    async getidbycookie(cookie) {
        const sql = 'select id from user where no =?';
        let list = await this.ctx.app.mysql.query(sql, cookie);
        return list;
    }
    // 通过clubtype得到社团的所有信息
    async getmsgbyclubtype(clubtype){
        const sql = 'select * from club where type =?';
        let list = await this.ctx.app.mysql.query(sql, clubtype);
        return list;
    }
    // publish上传存储到works里面
    async publish(userid,content,url,time,workstype) {
        const sql = 'insert into works (userid,content,url,time,workstype) values(?,?,?,?,?)';
        let list = await this.ctx.app.mysql.query(sql, [userid,content,url,time,workstype]);
        return list.affectedRows;

    }
    // 获取num排行前三的社团
    async getclubmsgthree(){
        const sql = "select * from club order by num desc limit 3";
        let list = await this.ctx.app.mysql.query(sql);
        return list;
    }



}

module.exports = ClubService;