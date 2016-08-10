//using http://jsonplaceholder.typicode.com/
//all the data be handled via ajax requests

//get the data from posts data

function loadPost(){
	console.log("loadPost was clicked");
	var post = new XMLHttpRequest();
	post.onreadystatechange = function(){
		if(post.readyState === 4){
			var posts = JSON.parse(post.responseText);
			var statusHTML = '<ul class ="bulleted">';
			for(var i = 0; i<posts.length; i+=1){
				statusHTML+='<li class="in">';
				statusHTML+= posts[i].title;
				statusHTML += '</li>';
			}
			statusHTML+='</ul>';
			// console.log(statusHTML);
			document.getElementById('container').innerHTML = statusHTML;
		}

	};

	post.open('GET','http://jsonplaceholder.typicode.com/posts');
	post.send();
}

function loadAlbums(){
	console.log("loadAlbums was clicked");
	var album = new XMLHttpRequest();
	album.onreadystatechange = function(){
		if(album.readyState === 4){
			var albums = JSON.parse(album.responseText);
			var statusHTML = '<ul class ="bulleted">';
			for(var i = 0; i<albums.length; i+=1){
				statusHTML+='<li class="in">';
				statusHTML+= albums[i].title;
				statusHTML += '</li>';
			}
			statusHTML+='</ul>';
			// console.log(statusHTML);
			document.getElementById('container').innerHTML = statusHTML;
		}

	};

	album.open('GET','http://jsonplaceholder.typicode.com/albums');
	album.send();

}

function loadAlbums(){
	console.log("loadAlbums was clicked");
	var album = new XMLHttpRequest();
	album.onreadystatechange = function(){
		if(album.readyState === 4){
			var albums = JSON.parse(album.responseText);
			var statusHTML = '<ul class ="bulleted">';
			for(var i = 0; i<albums.length; i+=1){
				statusHTML+='<li class="in">';
				statusHTML+= albums[i].title;
				statusHTML += '</li>';
			}
			statusHTML+='</ul>';
			// console.log(statusHTML);
			document.getElementById('container').innerHTML = statusHTML;
		}

	};

	album.open('GET','http://jsonplaceholder.typicode.com/albums');
	album.send();

}

function loadList(){
	console.log("loadAlbums was clicked");
	var todo = new XMLHttpRequest();
	todo.onreadystatechange = function(){
		if(todo.readyState === 4){
			var todos = JSON.parse(todo.responseText);
			var statusHTML = '<ul class ="bulleted">';
			for(var i = 0; i<todos.length; i+=1){
				if (todos[i].completed === false) {
					statusHTML+='<li class="notDone">'	
					// statusHTML+= 'notDone   '
					// console.log("this is "+statusHTML);

				}else{
					statusHTML+='<li class = "done">'
				}
				statusHTML+=i+1;
				statusHTML+="<br>";
				statusHTML+= todos[i].title;
				// console.log(statusHTML);
				statusHTML += '</li>';
			}
			statusHTML+='</ul>';
			// console.log(statusHTML);
			document.getElementById('container').innerHTML = statusHTML;
		}

	};

	todo.open('GET','http://jsonplaceholder.typicode.com/todos');
	todo.send();

}
