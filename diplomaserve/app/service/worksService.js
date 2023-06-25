const Service = require("egg").Service;

class WorksService extends Service {
    // 获得所有的发表信息按照时间顺序
    async getallmsg(userid) {
        const sql = `SELECT *,good.workid as goodworkid,collection.workid as collectionworkid,works.id as worksid  from works 
        left  join good 
        on good.userid = ? and works.id = good.workid 
	    left join collection
	    on collection.userid = ? and works.id = collection.workid
     order by time desc`;
        let list = await this.ctx.app.mysql.query(sql,[userid,userid]);
        return list;

    }

    // 热榜
    async hottop(userid) {
        // const sql = `SELECT *,works.id from works 
        // left join good 
        // on good.userid = ? and works.id = good.workid 
        // order by goodnum desc,collectionnum desc limit 3`;
        const sql = `SELECT *,good.workid as goodworkid,collection.workid as collectionworkid,works.id as worksid  from works 
        left  join good 
        on good.userid = ? and works.id = good.workid 
	    left join collection
	    on collection.userid = ? and works.id = collection.workid
        order by goodnum desc,collectionnum desc limit 3`;
        let list = await this.ctx.app.mysql.query(sql, [userid,userid]);
        return list;
    }
    // 毕业/就业类型的
    async getworkstypemsg(type) {
        const sql = 'select * from works where workstype = ? order by time desc';
        let list = await this.ctx.app.mysql.query(sql, type);
        return list;
    }

    //通过搜索选择works信息
    async getsearchmsg(searchmsg) {
        const sql = 'select * from works where content like ?'
        let list = await this.ctx.app.mysql.query(sql, `%${searchmsg}%`);
        return list;
    }
    //根据workid获取作品的所有信息
    async getmsgbyworkid(workid) {
        const sql = "select * from works where id = ?";
        let list = await this.ctx.app.mysql.query(sql, workid);
        return list;
    }

    // 点赞
    async good(userid, workid) {
        const sql = 'select * from good where userid = ? and workid = ? ';
        let list = await this.ctx.app.mysql.query(sql, [userid, workid]);
        return list;
    }
    // 点赞操作
    async getgood(userid, workid) {
        const sql = 'insert into good (userid,workid) values(?,?)';
        let list = await this.ctx.app.mysql.query(sql, [userid, workid]);
        return list.affectedRows;
    }
    // 取消点赞操作
    async cancelgood(userid, workid) {
        const sql = 'delete from good where userid = ? and workid = ?';
        let list = await this.ctx.app.mysql.query(sql, [userid, workid]);
        return list.affectedRows;
    }

    // 收藏
    async collection(userid, workid) {
        const sql = 'select * from collection where userid = ? and workid = ? ';
        let list = await this.ctx.app.mysql.query(sql, [userid, workid]);
        return list;
    }
    // 收藏操作
    async getcollection(userid, workid) {
        const sql = 'insert into collection (userid,workid) values(?,?)';
        let list = await this.ctx.app.mysql.query(sql, [userid, workid]);
        return list.affectedRows;
    }
    // 取消收藏操作
    async cancelcollection(userid, workid) {
        const sql = 'delete from collection where userid = ? and workid = ?';
        let list = await this.ctx.app.mysql.query(sql, [userid, workid]);
        return list.affectedRows;
    }

}

module.exports = WorksService;