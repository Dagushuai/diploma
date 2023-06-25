
const Controller = require("egg").Controller;
var gxpuserid = 1;
class TestController extends Controller {
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
	//用户登录
	async login() {
		try {
			//获客户请求参数no, pwd
			let no = this.getParam("no");
			let pwd = this.getParam("pwd");
			let list = await this.ctx.service.userService.login(no, pwd);
			this.ctx.response.body = list;//[],或[{....}]
		} catch (e) {
			this.ctx.response.body = [];
		}
	}
	// 用户注册
	async register() {
		try {
			let name = this.getParam("name");
			let no = this.getParam("no");
			let pwd = this.getParam("pwd");
			let sex = this.getParam("sex");
			let r = await this.ctx.service.userService.selectno(no);
			console.log(r);
			if (r.length == 1) {
				// 已经有人注册过这个账号了 
				// this.ctx.response.body = "注册失败！";
				this.ctx.response.body = -1;
			}
			else {
				// 成功注册账号
				let result = await this.ctx.service.userService.register(name, no, pwd, sex);
				// this.ctx.response.body = "注册成功！";
				this.ctx.response.body = 1;
			}

		} catch (error) {
			this.ctx.response.body = error;
		}


	}
	// 修改密码
	async updatepwd() {
		try {
			let no = this.getParam("no");
			let pwd = this.getParam("pwd");
			let newpwd = this.getParam("newpwd");
			// 先确定你原来的密码是正确的的
			let list0 = await this.ctx.service.userService.login(no, pwd);
			if (list0.length == 1) {
				// 确实旧密码是正确的可以进行修改密码的操作
				let list = await this.ctx.service.userService.updatepwd(no, newpwd)
				console.log(list);
				this.ctx.response.body = { state: 1, list };
			} else {
				// 旧密码输入错误改不了
				this.ctx.response.body = { state: -1 };
			}
		} catch (error) {
			this.ctx.response.body = error;
		}

	}
	// 根据id获得那个人的所有信息
	async getmsgbyuserid() {
		let userid = this.getParam('userid');
		let list = await this.ctx.service.userService.getmsgbyuserid(userid);
		this.ctx.response.body = list;
	}
	//根据userid获取那个人的所有作品信息
	async getworkmsgbyuserid() {
		let userid = this.getParam('userid');
		let list = await this.ctx.service.userService.getworkmsgbyuserid(userid);
		this.ctx.response.body = list;
	}
	//根据userid获得他给哪些作品点了赞并获得那些作品的信息
	async getworksbyuserid() {
		let userid = this.getParam('userid');
		let list = await this.ctx.service.userService.getworksbyuserid(userid);
		this.ctx.response.body = list;
	}
	//根据userid获得他给哪些作品收藏了并获得那些作品的信息
	async getcollecttionworksbyuserid() {
		let userid = this.getParam('userid');
		let list = await this.ctx.service.userService.getcollecttionworksbyuserid(userid);
		this.ctx.response.body = list;
	}
	//根据userid获得他是哪个社团的人并且获得社团信息
	async getclubmsgbyuserid() {
		let userid = this.getParam('userid');
		let list = await this.ctx.service.userService.getclubmsgbyuserid(userid);
		this.ctx.response.body = list;
	}
	// 头像上传
	async updateHeadimg() {
		const files = this.ctx.request.files;
		console.log(files);
		let url = await this.ctx.service.userService.updateHeadimg(files);
		console.log('url', url);
		let userid = gxpuserid;
		console.log('userid', userid)
		this.insertheadimg(url, userid);
		this.ctx.response.body = url;
	}
	//把头像插入到后台里面去
	async insertheadimg(url, userid) {
		let list = await this.ctx.service.userService.insertheadimg(url, userid);

	}
	getuserid() {
		gxpuserid = this.getParam('userid')
		// console.log('gxpuserid', gxpuserid)
		this.ctx.response.body = gxpuserid;

	}
	//user1向user2发起一个请求 即添加数据
	async user1request() {
		let user1 = this.getParam('userid1');
		let user2 = this.getParam('userid2');
		let club = this.getParam('club');
		let name = this.getParam('name');
		let clubtype = this.getParam('clubtype');

		let list = await this.ctx.service.userService.user1request(user1, user2, club, name, clubtype);
		this.ctx.response.body = list;

	}

	// 查找所有发送给自己的信息
	async getmsgtome() {
		let userid = this.getParam('userid');
		let list = await this.ctx.service.userService.getmsgtome(userid);
		this.ctx.response.body = list;
	}
	// 发起请求的记录
	async requestmsg() {
		let userid = this.getParam('userid');
		let list = await this.ctx.service.userService.requestmsg(userid);
		this.ctx.response.body = list;
	}
	// 同意或拒绝user1的请求 即修改信息 这里就是同意
	async answermsg() {
		let clubtype = this.getParam('clubtype');
		let userid1 = this.getParam('userid1');
		let list = await this.ctx.service.userService.answermsg(clubtype, userid1);
		this.ctx.response.body = list;
	}
	// 同意或者拒绝以后修改状态type
	async updateagreetype() {
		let id = this.getParam('id');
		let list = await this.ctx.service.userService.updateagreetype(id);
		this.ctx.response.body = list;
	}
	


	// 删除请求记录
	async delmsg() {
		let userid1 = this.getParam('userid1');
		let userid2 = this.getParam('userid2');
		let list = await this.ctx.service.userService.delmsg(userid1, userid2);
		this.ctx.response.body = list;
	}

	//根据社团获取社长的信息
	async getpmsgbyclubtype() {
		let clubtype = this.getParam('clubtype');
		let list = await this.ctx.service.userService.getpmsgbyclubtype(clubtype);
		this.ctx.response.body = list;
	}
}
module.exports = TestController;