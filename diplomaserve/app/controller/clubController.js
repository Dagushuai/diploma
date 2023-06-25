
const Controller = require("egg").Controller;

class ClubController extends Controller {
    //获取请求参数
    getParam(key) {
        //得到请求方式: "GET","POST"
        let method = this.ctx.request.method;//"GET", "POST"
        if (method == 'GET') {
            let v = this.ctx.request.query[key];
            return v;
        } else if (method == "POST") {
            let v = this.ctx.request.body[key];
            return v;
        }
    }

    // 得到所有的社团信息
    async getmsg() {
        try {
            let list = await this.ctx.service.clubService.getmsg();
            this.ctx.response.body = list;

        } catch (error) {
            console.log(error)
        }
    }

    // 根据id得到社团的信息
    async getmsgbyid() {
        try {
            let id = this.getParam('id');
            let list = await this.ctx.service.clubService.getmsgbyid(id);
            this.ctx.response.body = list;

        } catch (error) {
            console.log(error)
        }
    }
    // 根据不同clubbosstype分类得到部长副部长和成员s
    async getpeople() {
        try {
            // 需要社团参数 和bosstype参数
            let clubtype = this.getParam('clubtype');
            let bosstype = this.getParam('bosstype')
            let list = await this.ctx.service.clubService.getpeople(clubtype, bosstype);
            this.ctx.response.body = list;

        } catch (error) {
            console.log(error)
        }
    }

    // 图片上传
    async updateFile() {
        const files = this.ctx.request.files;
        let url = await this.ctx.service.clubService.updateFile(files);
        console.log(url);
        this.ctx.response.body = url;
    }
    // 根据cookie获得那个人的id
    async getidbycookie() {
        let cookie = this.getParam('cookie');
        let userid = await this.ctx.service.clubService.getidbycookie(cookie);
        this.ctx.response.body = userid;
    }
    // 通过clubtype得到社团的所有信息
    async getmsgbyclubtype(){
        let clubtype = this.getParam('clubtype');
        let clubmsg = await this.ctx.service.clubService.getmsgbyclubtype(clubtype);
        this.ctx.response.body = clubmsg;
    }
    // publish里面的立即上传 
    async publish() {
        let userid = this.getParam('userid');
        let content = this.getParam('content');
        let url = this.getParam('url');          
        let time = this.getParam('time');  
        let workstype = this.getParam('workstype');
        let list= await this.ctx.service.clubService.publish(userid,content,url,time,workstype);
        this.ctx.response.body = list;
    }

    // 获取num排行前三的社团
    async getclubmsgthree(){
        let list = await this.ctx.service.clubService.getclubmsgthree();
        this.ctx.response.body = list;
    }


}
module.exports = ClubController;