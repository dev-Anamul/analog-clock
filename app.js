function qdocument(data) {
  return document.querySelector(data);
}

qdocument('.s');

setInterval(() => {
  d = new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();

  hr_rotation = 30 * hr + min / 2;
  min_rotation = 6 * min + sec / 10;
  sec_rotation = 6 * sec;

  qdocument('.s').style.transform = `rotate(${sec_rotation}deg)`;
  qdocument('.m').style.transform = `rotate(${min_rotation}deg)`;
  qdocument('.h').style.transform = `rotate(${hr_rotation}deg)`;
});
