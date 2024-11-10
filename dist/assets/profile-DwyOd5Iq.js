import{N as n,F as l,a as i,g as c}from"./footer-9LuT4zIi.js";import{b as d}from"./read-CbWCaibj.js";import{c as m,h as a,b as f}from"./headers-CvLIB_Db.js";async function u(r){try{const e=await fetch(`${m}/${r}`,{method:"GET",headers:a()});if(!e.ok)throw new Error(e.message);let t=(await e.json()).data;return`

    <img class="banner" src="${t.banner?t.banner.url:""}" alt="${t.name?t.name:""}" />
    <div class="p-4">
      <div class="flex flex-col">
        <h1 class="font-bold text-xl">${t.name}</h1>
        <p class="">${t.email?t.email:""}</p>
      </div>
      <p>${t.bio?t.bio:"This user has no bio"}</p>
      <form name="updateProfile">
        <button class="cta-custom">Update Profile</button>
      </form>
    </div>
    `}catch(e){console.error(`Response status: ${e.message}`)}}async function p(r){try{const e=await fetch(`${f}/${r}`,{method:"DELETE",headers:a()});if(!e.ok)throw new Error(e.status);return e.status===204}catch(e){console.error(`Response status: ${e.message}`)}}customElements.define("nav-bar",n);customElements.define("footer-section",l);i();const o=c();let h=document.getElementById("profileInfo"),E=document.getElementById("profilePosts");h.innerHTML=await u(o);E.innerHTML=await d(o);let b=document.querySelectorAll("#deletePost"),P=document.querySelectorAll("#editPost");b.forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const s=e.target.dataset.id;p(s),e.target.nextSibling.parentElement.remove()})});P.forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const s=e.target.dataset.id;window.location.href=`/post/edit/?id=${s}`})});
