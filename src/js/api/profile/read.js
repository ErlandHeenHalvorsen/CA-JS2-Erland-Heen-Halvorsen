import { headers } from "../headers";
import { API_SOCIAL_PROFILES } from "../constants";

export async function readProfile(username) {
  try {
    const response = await fetch(`${API_SOCIAL_PROFILES}/${username}`, {
      method: "GET",
      headers: headers(),
    });

    if (!response.ok) {
      throw new Error(response.message);
    }

    let res = await response.json();

    let profile = res.data;
    let html = `

    <img class="banner" src="${
      profile.banner ? profile.banner.url : ""
    }" alt="${profile.name ? profile.name : ""}" />
    <div class="p-4">
      <div class="flex flex-col">
        <h1 class="font-bold text-xl">${profile.name}</h1>
        <p class="">${profile.email ? profile.email : ""}</p>
      </div>
      <p>${profile.bio ? profile.bio : "This user has no bio"}</p>
      <form name="updateProfile">
        <button class="cta-custom">Update Profile</button>
      </form>
    </div>
    `;

    return html;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}

export async function readProfiles(limit, page) {}
