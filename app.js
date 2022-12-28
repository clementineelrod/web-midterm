
/*performing our main function after pressing the button*/
document.getElementById('our-button').addEventListener('click',showProfile)

function showProfile(){
console.log('calling')



let username=document.getElementById('user').value

// we need this later for fetching, or you can directly use the main syntax

let url='https://api.github.com/users/'+username

//our local, we'll use this in order to save some stuff in local storage
let newObject = window.localStorage.getItem(username)

//this is for the situation where the user has been saved
if (newObject !=null){
//just to make sure it works
console.log("this user is in the local")
//setting final vals
 document.getElementById('pic').innerHTML=`
<img src="${JSON.parse(newObject).avatar_url}" style="width:90px;border-radius:45px;display:inline-block;">
`
if(JSON.parse(newObject).name){
document.getElementById('esm').innerHTML=`<p class="name2" style="display:inline-block;font-size:14px;">${JSON.parse(newObject).name}</p>`
}
else{
document.getElementById('esm').innerHTML=`<p class="name2" style="display:inline-block;font-size:14px;">Name: has not been set</p>`
}
if(JSON.parse(newObject).location){

document.getElementById('locationpass').innerHTML=`<p class="loc" style="font-size:12px;">${JSON.parse(newObject).location}</p>`

}
else{
document.getElementById('locationpass').innerHTML=`<p class="loc" style="font-size:12px;">Location: has not been set</p>`
}

if(JSON.parse(newObject).blog){
document.getElementById('blogid').innerHTML=`<p class="blog" style="font-size:12px;">Blog: ${JSON.parse(newObject).blog}</p>`
}
else{
document.getElementById('blogid').innerHTML=`<p class="blog" style="font-size:12px;">Blog: has not been set</p>`
}

if(JSON.parse(newObject).bio){
document.getElementById('bioid').innerHTML=`<p class="bio" style="font-size:12px;">Bio: ${JSON.parse(newObject).bio}</p>`
}
else{
document.getElementById('bioid').innerHTML=`<p class="bio" style="font-size:12px;">Bio: has not been set</p>`
}

}




//user has not been saved so we fetch
else{

fetch(url).then(res=>res.json()).then(data=>{

 if(data.message){
     document.getElementById('pic').innerHTML=`<h3>profile not found</h3>`
     document.getElementById('esm').innerHTML=`<h3></h3>`
     document.getElementById('locationpass').innerHTML=`<h3></h3>`
     document.getElementById('blogid').innerHTML=`<h3></h3>`
     document.getElementById('bioid').innerHTML=`<h3></h3>`

     
}
 else{
   
    document.getElementById('pic').innerHTML=`
<img src="${data.avatar_url}" style="width:90px;border-radius:45px;display:inline-block;">
`
if(data.name){
document.getElementById('esm').innerHTML=`<p class="name2" style="display:inline-block;font-size:14px;">${data.name}</p>`
}
else{
document.getElementById('esm').innerHTML=`<p class="name2" style="display:inline-block;font-size:14px;">Name: has not been set</p>`
}
if(data.location){

document.getElementById('locationpass').innerHTML=`<p class="loc" style="font-size:12px;">${data.location}</p>`

}
else{
document.getElementById('locationpass').innerHTML=`<p class="loc" style="font-size:12px;">Location: has not been set</p>`
}

if(data.blog){
document.getElementById('blogid').innerHTML=`<p class="blog" style="font-size:12px;">Blog: ${data.blog}</p>`
}
else{
document.getElementById('blogid').innerHTML=`<p class="blog" style="font-size:12px;">Blog: has not been set</p>`
}

if(data.bio){
document.getElementById('bioid').innerHTML=`<p class="bio" style="font-size:12px;">Bio: ${data.bio}</p>`
}
else{
document.getElementById('bioid').innerHTML=`<p class="bio" style="font-size:12px;">Bio: has not been set</p>`
}


}
//adding to the local storage
window.localStorage.setItem(username,JSON.stringify(data));
console.log("new person added")
})
 
}

}