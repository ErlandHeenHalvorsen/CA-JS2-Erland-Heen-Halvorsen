import{a as o}from"./read-C_5gpF-W.js";import{N as l,F as i,a as d}from"./footer-9LuT4zIi.js";import"./headers-CvLIB_Db.js";customElements.define("nav-bar",l);customElements.define("footer-section",i);d();const e=new URLSearchParams(window.location.search),r=e.get("id");e.get("author");async function n(){const t=document.querySelector("#singlePost"),a=await o(r);let s=`
           <div class="flex flex-col p-1 m-6 rounded-md md:m-4 w-full max-w-md h-fit bg-gray-800 border border-gray-400 shadow-lg">
                <a href="/post/single-post/?id=${a.id}" class="">
                    <div>
                        <div>
                        ${a.media&&a.media.url?`<img class="object-cover w-full aspect-[4/3] rounded-t-lg h-84 md:h-96" src="${a.media.url}" alt="${a.media.alt?a.media.alt:""}" />`:'<img class="object-contain w-full aspect-[4/3] rounded-t-lg h-96" src="/public/images/noroff-logo.png" alt="Random image" />'}
                        </div>
                        <div class="text-2xl my-2 first-letter:capitalize">
                            <h2 class="font-bold truncate">${a.title}</h2>  
                        </div>
                        <div class="flex flex-col">
                            <p>${a.author.name?a.author.name:""}</p>
                            <span class="bg-gray-600 px-1 rounded-sm  w-fit truncate">${a.tags?a.tags:""}</span>
                        </div>
                        <div class="flex flex-wrap">
                            <p>${a.body?a.body:""}</p>
                    </div>
                </a>
            </div>
          `;t.innerHTML=s}n();
