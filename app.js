function qdocument(data) {
    return document.querySelector(data)
}

qdocument('.s')


setInterval(() => {
    let date = new Date();

    let secend = date.getSeconds() * 6;
    let munit = date.getMinutes() * 6;
    let hours = (date.getHours() * 30) + (munit / 12);

    qdocument('.s').style.transform = `rotate(${secend}deg)`
    qdocument('.m').style.transform = `rotate(${munit}deg)`
    qdocument('.h').style.transform = `rotate(${hours}deg)`
})