export function renderSlimeCard(slime) {
  return `
    <article class="menu-card${slime.featured ? " menu-card--featured" : ""}">
      <div class="menu-card__image-wrap">
        <img
          class="menu-card__image"
          src="${slime.imageSrc}"
          alt="${slime.name}"
          loading="lazy"
        />
      </div>
      <div class="menu-card__top">
        <h3>${slime.name}</h3>
        <span class="price">${slime.price}</span>
      </div>
      <p>${slime.description}</p>
      <ul>
        ${slime.details.map((detail) => `<li>${detail}</li>`).join("")}
      </ul>
    </article>
  `;
}

export function renderGalleryCard(label, isLarge = false) {
  return `
    <article class="gallery-card${isLarge ? " gallery-card--large" : ""}">
      <span>${label}</span>
    </article>
  `;
}
