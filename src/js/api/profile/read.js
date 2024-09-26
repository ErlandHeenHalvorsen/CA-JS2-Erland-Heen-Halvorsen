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

    <h2>${profile.name}</h2>
    <img class="banner" src="${
      profile.banner ? profile.banner.url : ""
    }" alt="${profile.name ? profile.name : ""}" />
    <p>${profile.email ? profile.email : ""}</p>
    <p>${profile.bio ? profile.bio : ""}</p>
    `;

    return html;
  } catch (error) {
    console.error(`Response status: ${error.message}`);
  }
}

export async function readProfiles(limit, page) {}
