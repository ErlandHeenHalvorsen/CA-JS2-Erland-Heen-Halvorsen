import{a as n,g as l}from"./app-BaMvJEGb.js";import{b as i}from"./read-BsPZQNZb.js";import{c,h as s,b as d}from"./headers-CvLIB_Db.js";async function m(r){try{const e=await fetch(`${c}/${r}`,{method:"GET",headers:s()});if(!e.ok)throw new Error(e.message);let t=(await e.json()).data;return`

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
    `}catch(e){console.error(`Response status: ${e.message}`)}}async function f(r){try{const e=await fetch(`${d}/${r}`,{method:"DELETE",headers:s()});if(!e.ok)throw new Error(e.status);return e.status===204}catch(e){console.error(`Response status: ${e.message}`)}}n();const o=l();let u=document.getElementById("profileInfo"),p=document.getElementById("profilePosts");u.innerHTML=await m(o);p.innerHTML=await i(o);let h=document.querySelectorAll("#deletePost"),E=document.querySelectorAll("#editPost");h.forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const a=e.target.dataset.id;f(a),e.target.nextSibling.parentElement.remove()})});E.forEach(r=>{r.addEventListener("click",e=>{e.preventDefault();const a=e.target.dataset.id;window.location.href=`/post/edit/?id=${a}`})});
