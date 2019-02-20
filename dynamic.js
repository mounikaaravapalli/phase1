function getdata(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){

	if(xhr.readyState === 4 && xhr.status==200){
		callback(xhr.responseText);


	}

};
xhr.send(null);
}
getdata("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	personalinfo(data.profile);


})
// leftdiv
var left=document.querySelector(".leftdiv")
function personalinfo(pi){


var image=document.createElement("img");
    image.src="download.jpg";
    left.appendChild(image);
    email.textcontent=pi.email;
    //img=src="download.jpg";
    image.src=pi.image;
    left.appendChild(image);
    var hr=document.createElement("h2")
    name.textContent=pi.name;
    left.appendchild(name);
    var place=document.createElement("p");
    name.textContent=pi.name;
    var p=document.createElement("pi");
    place.textContent=pi.place;
    left.appendChild(place);
    email.textcontent=pi.email;
    left.appendChild(email);
}



}

}	    