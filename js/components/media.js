import {createTagsListHTML} from "../components/photographer.js"

/**
 * HTML Builder for media list and inject it in the section
 * @param {list} mediaList - list of tags
 * @return {string} - the html block
 */
 export function createMediaListHTML(mediaList) {
  let mediaListHTML = ''
  mediaList.forEach(media => {
    let mediaHTML
    if (media.type === 'image') {
      mediaHTML = `<img
        src="media/${media.url}"
        alt="Photo ${media.title}"
        loading="lazy"
        ></img>`
    } else {
      mediaHTML = `
      <video controls>
      <source src="/media/${media.url}"
      type="video/mp4"></video>`
    }
    mediaListHTML = mediaListHTML + `
    <figure class="gallery__media" id=${media.id}>
      ${mediaHTML}
      <figcaption class="gallery__caption">
        <div>${media.title}</div>\n
        <div>${media.likes}</div>\n
      </figcaption>
    </figure>\n
    `});
  return mediaListHTML
}

export function createPhotographerCard(photographerObject) {
  const tagsList = createTagsListHTML(photographerObject.tags)
  let cardHTML = `
    <div class=user__info">
      <h1 class="user__name">${photographerObject.name}</h1>\n
      <div class="user__city">${photographerObject.country}, ${photographerObject.city}</div>\n
      <div class="user__tagline">${photographerObject.tagline}</div>\n
      ${tagsList}
      <button class="user__contact button">Contactez-moi</button>
    </div>
    <div class="user__image">
      <img
        src="img/${photographerObject.portrait}"
        alt="Photo of ${photographerObject.name}"
      >
    </div>
    `;
  return cardHTML

}