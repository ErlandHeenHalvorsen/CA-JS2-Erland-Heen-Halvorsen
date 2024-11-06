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

let htmlProfileCards = "";
html += `
    <div>
        <a href="/post/single-post/?id=${post.id}" class="">
            <div>
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
                    <p>${getUsername()}</p>
                </div>
                <div>
                    <span>${post.tags ? post.tags : ""}</span>
                </div>
            </div>
        </a>
        <button class="deletePost" data-id="${post.id}">Delete</button>
        <button class="editPost" data-id="${post.id}">Edit</button>
    </div>






`;
