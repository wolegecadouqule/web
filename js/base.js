new Vue({
	el: '#demo',
	data: {
		name: 'wscat',
		news:"",
		page:0
	},
	methods: {
		getNews: function() {
			var self = this;
			$.ajax({
				type:"get",
				url:"js/news.json",
				async:true,
				success:function(data){
					console.log(data)
					self.news = data.showapi_res_body.pagebean.contentlist
				}
			});
		},
		toggle:function(page){
			
			this.page = 4 * (page - 1);
			console.log(this.page)
		}
	},
	ready:function(){
		this.getNews()
	}
})