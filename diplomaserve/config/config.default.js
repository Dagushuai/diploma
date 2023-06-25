//config.defrault.js
//该keys的值是任意的字符串，它是cookie加密的盐
exports.keys = "fgsgfdssdfggfdddgds";
exports.multipart = {
	mode: 'file',//文件上传
	fileSize: 999999,//设置上传文件大小的最大值，单位是字节
};
exports.security = {
	csrf: {
		enable: false,//使能post
		ignoreJSON: true//使能文件上传能成功

	},
	// 白名单
	domainWhiteList: ['*']
};
//跨域配置
exports.cors = {
	origin: '*',
	allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};
//修改默认端口号7001为80
exports.cluster = {
	listen: {
		port: 8000
	}
};
//数据库mysql配置
exports.mysql = {
	client: {
		host: 'localhost',
		port: '3306',
		user: 'root',
		password: '123456',//数据库密码,要根据情况修改
		database: 'diploma_project',//数据库名字，要根据情况修改
	},
};
/**
 跨域说明：
 一  ajax请求中,如果是跨域请求，并且服务器端控制的cookie或session要生效，下面三点则必须注意
  1. origin配置具体的域名，不能配置为*，如正确配置示例origin:'http://localhost:3000',
  2. axios发请求前，执行代码axios.defaults.withCredentials = true;  
 */



/*
配置文件的三种格式 
1.使用exports.键=值
 示例:
exports.keys = "ffsaa";
exports.security = {
	  csrf: {
			enable: false,
			ignoreJSON: true
	  } 
};

2.使用module.exports = {配置项} 
module.exports = {
	keys: "ffsaa",
	security: {
		csrf: {
			enable: false,
			ignoreJSON: true
		}
	},
};

3. module.exports = 函数
函数中返回{配置项} 
module.exports = (app) => {
	return {
		keys: "ffsaa",
		security: {
			csrf: {
				enable: false,
				ignoreJSON: true
			}
		},
	}
}	
*/
