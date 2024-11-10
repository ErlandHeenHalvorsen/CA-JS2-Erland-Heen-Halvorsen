import{b as c,h as i,c as n}from"./headers-CvLIB_Db.js";import{g as m}from"./app-BaMvJEGb.js";async function h(l){try{const t=await fetch(`${c}/${l}?&_author=true`,{method:"GET",headers:i()});if(!t.ok)throw new Error(o.message);let o=await t.json();return o.data}catch(t){console.error(`Response status: ${t.message}`)}}async function f(l=12,t=1,o){try{const r=await fetch(`${c}?limit=${l}&page=${t}&_author=true&_reactions=true&_comments=true`,{method:"GET",headers:i()});if(!r.ok)throw new Error(s.message);let s=await r.json(),d="";return s.data.map(e=>{d+=`
      <a href="/post/single-post/?id=${e.id}" class="flex flex-col p-1 m-6 md:m-4 w-full max-w-md h-fit bg-gray-800 border border-gray-600 shadow-lg rounded-md hover:bg-gray-900 hover:border-white hover:scale-105 transition-all duration-200">  
          <container class="">
              <div>
                ${e.media&&e.media.url?`<img class="object-cover w-full aspect-[4/3] rounded-t-lg h-84 md:h-96" src="${e.media.url}" alt="${e.media.alt?e.media.alt:""}" />`:'<img class="object-contain w-full aspect-[4/3] rounded-t-lg h-96" src="/public/images/noroff-logo.png" alt="Random image" />'}
              </div>
            <div class="text-2xl my-2 first-letter:capitalize">
              <h2 class="font-bold truncate">${e.title}</h2>  
            </div>
            <div class="flex flex-col">
              <p>${e.author.name}</p>
              <span class="bg-gray-600 px-1 rounded-sm  w-fit truncate">${e.tags&&e.tags.length?e.tags:"No Tags"}</span>
            </div>
          
          </container>
      </a>
        `}),d}catch(r){console.error(`Response status: ${r.message}`)}}async function $(l,t=12,o=1,r){try{const s=await fetch(`${n}/${l}/posts?limit=${t}&page=${o}`,{method:"GET",headers:i()});if(!s.ok)throw new Error(d.message);let d=await s.json(),e="";return d.data.map(a=>{e+=`
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
                            <p>${m()}</p>
                            <span class="bg-gray-600 px-1 rounded-sm  w-fit truncate">${a.tags?a.tags:""}</span>
                        </div>
                    </div>
                </a>
                <div class="flex mt-4">
                  <button id="deletePost" class="cta-custom" data-id="${a.id}">Delete</button>
                  <button id="editPost" class="register-custom" data-id="${a.id}">Edit</button>
                </div>
            </div>
        `}),e}catch(s){console.error(`Response status: ${s.message}`)}}export{h as a,$ as b,f as r};
