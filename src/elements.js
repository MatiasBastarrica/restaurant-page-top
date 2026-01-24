export function createElement(element) {
  return document.createElement(element);
}

export function appendElements(elements, parent) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    parent.appendChild(element);
  }
}

export function createFigure(src, alt, caption) {
  const figure = createElement("figure");
  const img = createElement("img");
  img.src = src;
  img.alt = alt;
  const figCaption = createElement("figcaption");
  figCaption.textContent = caption;
  figure.appendChild(img);
  figure.appendChild(figCaption);
  return figure;
}
