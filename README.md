# Prototype of Social Media, using Noroff API

## Netlify

[netlify](https://glittery-daffodil-926843.netlify.app)

## Report

I was tasked with creating a prototype for a social media app. The app was supposed to use Noroff's API, with the main focus on making POST, GET, PUT, and DELETE requests. We were also required to organize our project through GitHub Projects and document it using JSDoc.

### Starting the Project

The most challenging part of this task was understanding the file system that was provided. The scale of the project and the lack of documentation for the pre-built components made it quite difficult to get started. Nevertheless, once I familiarized myself with the file structure, the work progressed more smoothly. Having a project board also helped me visualize exactly what needed to be done.

### Working with the API

Working with the Noroff API was not entirely new to me, as we had used it in previous tasks. Although the API has its quirks, the actual work was not too difficult. However, some debugging was required since the API is very specific about what it accepts in requests. One unresolved bug is that when I leave the image URL field empty while making a post, the API interprets the title as the image URL.

At one point, I had to structure the body element in an unfamiliar way, as my usual method wasn't accepted (`src/js/ui/post/create`).

### Working with JSDoc

In this project, I used JSDoc for the first time. I admit it was challenging, but I did my best to implement it correctly. I recognize the value JSDoc provides, and I plan to continue using it to better understand how it works and to improve my code documentation in future projects.

#### Disclaimer

There are some unused files in this project that stem from the original author. Since this is a prototype I plan to continue working on, I have left those files in the project in case they become useful later.

### Conclusion

This has been a valuable learning experience, allowing me to test my knowledge and abilities in working with APIs and Vite. I believe the project went well, and I now feel more confident when working with larger-scale file structures.

---
