(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){switch(I){case"todos":l.textContent="To-Do's";break;case"projects":l.textContent="Projects";break;case"calendar":l.textContent="Calendar"}}function n(){let e=Object.keys(localStorage),t=[];return e.forEach((e=>{e.includes("To-Do ")&&t.push(JSON.parse(localStorage.getItem(e)))})),t}function o(){let e=Object.keys(localStorage),t=[];return e.forEach((e=>{e.includes("Project ")&&t.push(JSON.parse(localStorage.getItem(e)))})),t}e.d({},{kQ:()=>r,mP:()=>I,Fs:()=>l});const d=[];function c(e,t){const c=document.createElement("div"),a=document.createElement("p"),l=document.createElement("p"),s=document.createElement("p");if("todo"===e){d.push(document.createElement("button")),d[t].setAttribute("id","delete-button-"+t),d[t].innerHTML="Delete",d[t].style.margin="auto",c.classList.add("card");let e=n()[t].name;a.innerHTML=`<strong>Name: </strong>${e}`,l.innerHTML=`<strong>Description: </strong>${n()[t].description}`,s.innerHTML=`<strong>Due: </strong>${n()[t].date}`,c.appendChild(a),c.appendChild(l),c.appendChild(s),c.appendChild(d[t]),r.appendChild(c),d[t].addEventListener("click",(e=>{localStorage.removeItem(`To-Do ${e.target.parentNode.querySelector("p").innerHTML.substring(23)}`),e.target.parentNode.parentNode.removeChild(e.target.parentNode)}))}else"project"===e&&(d.push(document.createElement("button")),d[t].setAttribute("id","delete-project-"+t),d[t].innerHTML="Delete",d[t].style.margin="auto",c.classList.add("card"),a.innerHTML=`<strong>Name: </strong>${o()[t].name}`,l.innerHTML=`<strong>Description: </strong>${o()[t].description}`,s.innerHTML=`<strong>Due: </strong>${o()[t].date}`,c.appendChild(a),c.appendChild(l),c.appendChild(s),c.appendChild(d[t]),r.appendChild(c),d[t].addEventListener("click",(e=>{localStorage.removeItem(`Project ${e.target.parentNode.querySelector("p").innerHTML.substring(23)}`),e.target.parentNode.parentNode.removeChild(e.target.parentNode)})))}function a(){switch(r.innerHTML="",I){case"todos":if("undefined"!==n())for(let e=0;e<n().length;e++)c("todo",e);break;case"projects":if("undefined"!==o())for(let e=0;e<o().length;e++)c("project",e)}}const l=document.getElementById("title"),r=document.getElementById("content"),s=[...document.querySelectorAll("li")],m=[];m.push(document.getElementById("newtodo")),m.push(document.getElementById("newproject"));const i=document.getElementById("todo-form"),u=document.getElementById("project-form"),p=document.getElementById("confirm-todo"),g=document.getElementById("confirm-project"),y=document.getElementById("cancel-todo"),E=document.getElementById("cancel-project");let I="todos";t(),a(),s.forEach((e=>{e.addEventListener("click",(e=>{I=e.target.id,t(),a()}))})),m.forEach((e=>{e.addEventListener("click",(e=>{"newtodo"===e.target.id?(i.classList.remove("empty"),p.addEventListener("click",(()=>{document.getElementById("todo-name").value&&document.getElementById("todo-description").value&&document.getElementById("todo-date").value?(document.getElementById("todo-name").classList.remove("false"),document.getElementById("todo-description").classList.remove("false"),document.getElementById("todo-date").classList.remove("false"),function(e,t,n){let o={name:e,description:document.getElementById("todo-description").value,date:document.getElementById("todo-date").value,id:localStorage.length};localStorage.setItem("To-Do "+e,JSON.stringify(o))}(document.getElementById("todo-name").value),i.classList.add("empty"),document.getElementById("todo-name").value="",document.getElementById("todo-description").value="",document.getElementById("todo-date").value=""):(document.getElementById("todo-name").classList.add("false"),document.getElementById("todo-description").classList.add("false"),document.getElementById("todo-date").classList.add("false")),a()})),y.addEventListener("click",(()=>{document.getElementById("todo-name").value="",document.getElementById("todo-description").value="",document.getElementById("todo-date").value="",i.classList.add("empty")}))):(u.classList.remove("empty"),g.addEventListener("click",(()=>{document.getElementById("project-name").value&&document.getElementById("project-description").value&&document.getElementById("project-date").value?(document.getElementById("project-name").classList.remove("false"),document.getElementById("project-description").classList.remove("false"),document.getElementById("project-date").classList.remove("false"),function(e,t,n){let o={name:e,description:document.getElementById("project-description").value,date:document.getElementById("project-date").value,id:localStorage.length};localStorage.setItem("Project "+e,JSON.stringify(o))}(document.getElementById("project-name").value),u.classList.add("empty"),document.getElementById("project-name").value="",document.getElementById("project-description").value="",document.getElementById("project-date").value=""):(document.getElementById("project-name").classList.add("false"),document.getElementById("project-description").classList.add("false"),document.getElementById("project-date").classList.add("false")),a()})),E.addEventListener("click",(()=>{document.getElementById("project-name").value="",document.getElementById("project-description").value="",document.getElementById("project-date").value="",u.classList.add("empty")})))}))}))})();