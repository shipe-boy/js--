//封装字典结构
function Dictionay(){
	//字典属性
	this.items = {}
	
	//字典方法
	//添加键值对
	Dictionay.prototype.set = function (key, value){
		this.items[key] = value;
	}
	
	//判断某一个key是否存在
	Dictionay.prototype.has = function (key) {
		return this.items.hasOwnProperty(key)
	}
	
	//删除字典中某一元素
	Dictionay.prototype.remove = function(key){
		//1、判断字典中是否有这个元素
		if(!this.has(key)) return false
		
		delete this.items[Key]
		return true
	}
	
	//根据key获取value
	Dictionay.prototype.get = function (key) {
		return this.has(key) ? this.items[key] : undefined
	}
	
	//获取所有的keys
	Dictionay.prototype.keys = function (){
		return Object.keys(this.items)
	}
	//获取所有的value
	Dictionay.prototype.values = function (){
		return Object.values(this.items)
	}
	//size
	Dictionay.prototype.size = function(){
		return this.keys().length
	}
	
	//clear
	Dictionay.prototype.clear = function(){
		this.items = {}
	}
	
	
	
}