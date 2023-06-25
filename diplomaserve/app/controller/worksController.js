
const Controller = require("egg").Controller;

class WorksController extends Controller {
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

	// 获得所有的works发表信息按照时间顺序
	async getallmsg() {
		let userid = this.getParam('userid')
		let list = await this.ctx.service.worksService.getallmsg(userid);
		this.ctx.response.body = list;
	}

	// 热榜
	async hottop() {
		let userid = this.getParam('userid')
		let list = await this.ctx.service.worksService.hottop(userid);
		this.ctx.response.body = list;
	}
	// 通过类型选择works的信息
	async getworkstypemsg() {
		let type = this.getParam('type');
		let list = await this.ctx.service.worksService.getworkstypemsg(type)
		this.ctx.response.body = list;

	}
	//通过搜索选择works信息
	async getsearchmsg(){
		let searchmsg = this.getParam('searchmsg');
		let list = await this.ctx.service.worksService.getsearchmsg(searchmsg);
		console.log('这个是搜索结果',list)
		this.ctx.response.body = list;
	}

	//根据workid获取作品的所有信息
	async getmsgbyworkid() {
		let workid = this.getParam('workid');
		let list = await this.ctx.service.worksService.getmsgbyworkid(workid);
		this.ctx.response.body = list;
	}
	// 页面一开始自动判断这个登录用户是否已经给作品点过赞

	// 点赞
	async good() {
		let userid = this.getParam('userid');
		let workid = this.getParam('workid');
		let list = await this.ctx.service.worksService.good(userid, workid);
		console.log('这个是数组长度', list.length);
		if (list.length == 1) {
			// 他已经给这个作品点过赞了 这次操作是取消点赞
			console.log('这个是good删除操作', userid, workid);
			this.cancelgood(userid, workid);
		} else {
			// 他这次操作是给这个作品点赞
			console.log('这个是good点赞操作', userid, workid);
			this.getgood(userid, workid);
		}
		this.ctx.response.body = list;

	}
	// 点赞操作
	async getgood(userid0, workid0) {
		let userid = userid0;
		let workid = workid0
		// console.log('这个是点赞操作',userid,workid)
		let list = await this.ctx.service.worksService.getgood(userid, workid);
		// this.ctx.response.body = list
	}
	// 取消这次点赞操作
	async cancelgood(userid0, workid0) {
		let userid = userid0;
		let workid = workid0;
		// console.log('这个是取消点赞操作',userid,workid)
		let list = await this.ctx.service.worksService.cancelgood(userid, workid);
		// this.ctx.response.body = list
	}
	// 收藏
	async collection() {
		let userid = this.getParam('userid');
		let workid = this.getParam('workid');
		let list = await this.ctx.service.worksService.collection(userid, workid);
		console.log('这个是数组长度', list.length);
		if (list.length == 1) {
			// 他已经给这个作品点过赞了 这次操作是取消点赞
			console.log('这个是collection删除操作', userid, workid);
			this.cancelcollection(userid, workid);
		} else {
			// 他这次操作是给这个作品点赞
			console.log('这个是collection点赞操作', userid, workid);
			this.getcollection(userid, workid);
		}
		this.ctx.response.body = list;

	}
	// 收藏操作
	async getcollection(userid0, workid0) {
		let userid = userid0;
		let workid = workid0
		let list = await this.ctx.service.worksService.getcollection(userid, workid);

	}
	// 取消这次收藏操作
	async cancelcollection(userid0, workid0) {
		let userid = userid0;
		let workid = workid0;
		// console.log('这个是取消点赞操作',userid,workid)
		let list = await this.ctx.service.worksService.cancelcollection(userid, workid);
		// this.ctx.response.body = list
	}

}
module.exports = WorksController;