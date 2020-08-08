//封装队列类		--数组实现(基于数组性能不高，删除第一个时后面元素会一个一个前移)，链表高
			function Queue(){
				//属性
				this.items = []
				
				//方法
				//1.向队列尾部添加一个或多个项
				Queue.prototype.enqueue = function(element){
					//添加多个
					// for(let i = 0; i <arguments.length; i++){
					// 	this.items.push(arguments[i])
					// }
					//添加一个
					this.items.push(element)
				}
				//2.移除队列中第一个元素
				Queue.prototype.dequeue = function(){
					return this.items.shift()
				}
				//3.查看第一个元素
				Queue.prototype.front = function(){
					return this.items[0];
				}
				//4.队列是否为空
				Queue.prototype.isEmpty = function(){
					return this.items.length === 0;
				}
				//5.队列元素个数
				Queue.prototype.size = function(){
					return this.items.length;
				}
				//6.toString
				Queue.prototype.toString = function(){
					return this.items.join(" ")
				}
			}