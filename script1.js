let phrases = [
  { text: 'Эту валентинку я посвящаю тебе', image: 'https://sun9-82.userapi.com/impg/nNq9qL_-3uBWWezRtk4qGUkUtn7ZC6O8EaaaTw/2_iJdLERJfA.jpg?size=1080x1080&quality=96&sign=725dfa7bd4bd53bb27f95ce77c62d66c&c_uniq_tag=DRlcTcTE1tr9_TvAFhD0GB_aa_yPEot8TA22l00HmDs&type=album' },
  { text: 'Я конечно не 2GIS, но...', image: 'https://sun9-19.userapi.com/impg/22ehu9hefUro4-Ya-J9SG5n6RrYu0yOOdNBw-A/HIBhiZ_8Ig8.jpg?size=604x517&quality=96&sign=56167ae89bef26330d499e2326f8a200&type=album'},
  { text: 'Каждый раз видя тебя, в моей голове лишь одна мысль...', image: 'https://sun9-11.userapi.com/impf/CDSwhy_j5TDEyIFc2bo_EcfHA0Hc4Nj7VnfMvg/xz-sS72Oem8.jpg?size=506x604&quality=96&sign=9e3d9518aea3206c7ff691666b343740&type=album'},
  { text: 'Иногда я хочу сказать тебе, что...', image: 'https://pbs.twimg.com/media/E7mqsw6XMAA480z.jpg'},
  { text: 'Скромненький подарок', image: 'https://sun9-68.userapi.com/impg/CgwDvVKhCjsiMlEDwkZ-6NmqwSDYfDnPmD5BRg/KtFwgz1Rue8.jpg?size=604x589&quality=96&sign=ab0491249d2e041e7e016fb05ee7459a&type=album'},
  { text: 'Я редко такое говорю. Но ты знай, что...', image: 'https://pbs.twimg.com/media/FF_F_yDXwAQyagq.jpg'},
  { text: 'Небольшое напоминание', image: 'https://sun9-37.userapi.com/impg/c854532/v854532279/201b89/X_71nLRebRU.jpg?size=604x478&quality=96&sign=ee021b50450e311bc5c4d074790d3bda&type=album'},
  { text: 'При виде тебя...', image: 'https://sun9-87.userapi.com/impg/n1CQfXv4xdQwnGo1w2RfbxX2Z0SjxpyaDH65rw/bU1w0i97Hcg.jpg?size=130x128&quality=95&sign=102010d018a83cc487c72a235a0c709b&type=album'},
  { text: 'Хочу, чтобы ты знала...', image: 'https://i.pinimg.com/originals/e4/ac/91/e4ac911055f24c81d6fbde09d2fc9fb9.jpg'},
  { text: 'Я уверен в этом', image: 'https://pbs.twimg.com/media/FIu4sMSXEAQVfN-.jpg'},
  { text: 'На логотипе тоже жабка)', image: 'https://i.pinimg.com/474x/9b/0e/35/9b0e35eedc1d10664bbb68d88539b4a6.jpg'},
  { text: 'Google дело говорит', image: 'https://sun9-7.userapi.com/impg/nmdrBq-YBPeQWpgkAVmZ0sGUmxUROT1J8EQOTA/hvFvNLL8urg.jpg?size=564x600&quality=96&sign=03f5f5082b8b8733e7598ac4aa38d4d9&type=album'},
  { text: 'Просто знай...', image: 'https://sun6-22.userapi.com/s/v1/ig2/t8TWLZSSbYBvSuYyvKVpYLzJmTL7PHvRQQN0vZ9TK7qv604T_EhdC0mMqpjS7mEUK7SAdGz0xjuBj-K3Q_-irua-.jpg?size=400x400&quality=95&crop=6,0,806,806&ava=1'},
  { text: 'Это правда...', image: 'https://avatars.mds.yandex.net/i?id=447daa647374e1532ff149b58c31e180-5593596-images-thumbs&n=13'},
  { text: 'Всё верно сказно', image: 'https://i.pinimg.com/originals/48/a2/07/48a20779a6e749174c318a7f923199d2.jpg'},
  { text: 'Теряю дар речи, когда ты делаешь так', image: 'https://sun9-11.userapi.com/sun9-26/impf/I1zWOZkU0V3SuKGg8xkg_hdO-7ScHakeejSG4Q/jHnsH3A6z2s.jpg?size=604x604&quality=96&sign=e13563daa11d8470ff921129f844a1f7&type=album'},
  { text: 'Каждое уведомление...', image: 'https://im0-tub-ru.yandex.net/i?id=51d13fdfc6f725dce89bcbe9538a7848-l&n=13'},
  { text: 'Обожаю твой голос', image: 'https://sun9-42.userapi.com/impg/E4kEVw6kIjI-8yU3eSkoZ3WnMgSj9Y5naZcaLQ/tiRaZrpwkuY.jpg?size=604x565&quality=96&sign=353f1ed97c4611bf3a0c69fe5ac97a9c&type=album'},
  { text: 'Это факт', image: 'https://pbs.twimg.com/media/FIlKI23WUAEMqXy.jpg'},
  { text: 'Хочу оглохнуть от этого шедевра', image: 'https://pbs.twimg.com/media/ExI67ZKWQAAvaWl.jpg'},
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

/*for(let i = 0; i <=2; i = i + 1){
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}*/

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});