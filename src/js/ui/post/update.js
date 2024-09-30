import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event, formObject, id) {
  event.preventDefault();

  const title = formObject.title.value;
  const body = formObject.body.value;
  const tags = formObject.tags.value;
  const mediaUrl = formObject.media.value;
  const mediaAlt = formObject.alt.value;
  const tagsArray = tags ? tags.split(",") : [];

  const updateBody = {
    title,
    ...(body && { body }),
    ...(tagsArray.length > 0 && { tags: tagsArray }),
    ...(mediaUrl && {
      media: { url: mediaUrl, ...(mediaAlt && { alt: mediaAlt }) },
    }),
  };
  try {
    const post = await updatePost(id, updateBody);
    if (post) {
      window.location.href = `/post/single-post/?id=${id}`;
    } else {
      alert("Post not updated");
    }
  } catch (error) {
    console.log(error);
  }
}
