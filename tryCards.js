let html = "";
html += `

<container class="container">
    <a href="/post/single-post/?id=${post.id}" class="">
        <div>
            ${
              post.media && post.media.url
                ? `<img class="" src="${post.media.url}" alt="${
                    post.media.alt ? post.media.alt : ""
                  }" />`
                : ""
            }
        </div>
        <div>
            h2>${post.title}</h2>  
        </div>
        <div>
            <p>${post.author.name}</p>
            <span>${post.tags ? post.tags : ""}</span>
        </div>
    </a>
</container>

`;
