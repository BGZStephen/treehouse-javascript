const like = (thing) => 'I like ' + thing;
const love = (thing) => 'I love ' + thing;

const sentence = `<p>${like(`apples`)}, but ${love(`oranges`)}.</p>`;

document.querySelector('.interpolation').innerHTML = sentence;
