blog_list=[{"cat":"Medical device safety","date":"15 Aug 1943","heading":"The big heading","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"},{"cat":"Medical device regulations","date":"15 Aug 1943","heading":"Second blog","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"},{"cat":"Medical device regulations","date":"15 Aug 1943","heading":"Third blog","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"},{"cat":"Medical device regulations","date":"15 Aug 1943","heading":"forth blog","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"},{"cat":"Medical device regulations","date":"15 Aug 1943","heading":"Fifth blog","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"},{"cat":"Medical device regulations","date":"15 Aug 1943","heading":"Sixth blog","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"},{"cat":"Medical device regulations","date":"15 Aug 1943","heading":"Seven blog","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"},{"cat":"Medical device regulations","date":"15 Aug 1943","heading":"Eight blog","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"},{"cat":"Medical device regulations","date":"15 Aug 1943","heading":"Nine blog","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"},{"cat":"Medical device regulations","date":"15 Aug 1943","heading":"Ten blog","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"},{"cat":"Medical device regulations","date":"15 Aug 1943","heading":"Elleven blog","text":"This text may going to change your life because no one is going to read this. I really have no idea why i am writing this. This sentence is really getting bigger.","link":"http://google.com"}];

current_page=1,max_page=Math.ceil(blog_list.length/5);

$(document).ready(
	function(){var small_screen_menu_visible=false;var action_bar_offset=$('.action_bar').height();
	var intro_content_offset=$('.intro_content').offset().top+$('.intro_content').height()+70;$(document).scroll(function(){doc_scroll_top=$(document).scrollTop();
		if(doc_scroll_top>action_bar_offset){
			$(".action_bar_fixed").css("display","block");
		}else{
			$(".action_bar_fixed").css("display","none");
		}
		if(doc_scroll_top>intro_content_offset){
			$(".social_links_action_bar").css("display","inline-block");
		}else{
			$(".social_links_action_bar").css("display","none");}
		});

	populateBlogList(max_page,current_page);
	$(".small_screen_menu_toggle").click(function(){
		$(".small_screen_menu_display").toggle();
	});
	animateInteres();
});

function populateBlogList(max_page,current_page){
	populatePageNavigation(max_page,current_page);
	blogs='';
	for(i=(current_page-1)*5;i<current_page*5;i++){
		if(i<blog_list.length){
			blogs=blogs+'<div class="blog"><div class="cat">Catagory:'+blog_list[i].cat+'</div><div class="date">'+blog_list[i].date+'</div><div class="heading">'+blog_list[i].heading+'</div><div class="text">'+blog_list[i].text+'</div><div class="link"><a target="_blank" href="'+blog_list[i].link+'" style="display: inline-block;">Learn More</a></div></div><hr class="bottom_line">';
		}}

$(".blogs").html(blogs);}

function populatePageNavigation(max_page,current_page){
	nav_text='';
	if(current_page!=1){
		previous_page=current_page-1;nav_text=nav_text+'<td><a href="javascript:void(0)" onclick="navigatePage('+previous_page+')">&lt;&lt;</a></td>';
	}else{
		nav_text=nav_text+'<td><a href="javascript:void(0)">&lt;&lt;</a></td>';
	}

for(let i=1;i<=max_page;i++){
	if(i==current_page){
		nav_text=nav_text+'<td><b><a class="current_page" href="javascript:void(0);" onclick="navigatePage('+i+')">'+i+'</a></b></td>';
	}else{
		nav_text=nav_text+'<td><a href="javascript:void(0)" onclick="navigatePage('+i+')">'+i+'</a></td>';
	}
}

if(current_page!=max_page){
	next_page=current_page+1;nav_text=nav_text+'<td><a href="javascript:void(0)" onclick="navigatePage('+next_page+')">&gt;&gt;</a></td>';
}else{
	nav_text=nav_text+'<td><a href="javascript:void(0)">&gt;&gt;</a></td>';
}

$(".page_nav_box table tr").html(nav_text);}

function navigatePage(page){
	current_page=page;populatePageNavigation(max_page,current_page);
	populateBlogList(max_page,current_page);
}

function animateInteres(){
	anime({targets:'#interest_human',scale:50,duration:1000,delay:0,endDelay:3000,loop:true});
	anime({targets:'#interests_computer',scale:50,duration:1000,delay:1000,endDelay:2000,loop:true});
	anime({targets:'#bionic',scale:50,duration:1000,delay:2000,endDelay:1000,loop:true});
}