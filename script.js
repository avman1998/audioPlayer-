const songNameEle = document.getElementById("songName");
const songImgEle = document.getElementById("songImg");
const singerNameEle = document.getElementById("singerName");
const audioEle = document.querySelector("#song");
const playbtn = document.querySelector("#play");
const pausebtn = document.querySelector("#pause");
const nextbtn = document.querySelector("#next");
const prevbtn = document.querySelector("#prev");
var volume = document.getElementById("volIcon");
let status2 = "pause";
const songs = [
  {
    name: "Tu Hi Haqeeqat",
    link: "./songs/Tu Hi Haqeeqat - Tum Mile 128 Kbps.mp3",

    img: "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1553082249.jpg",
  },
  {
    name: "Kesariya",
    link: "./songs/Kesariya(PagalWorld.com.se).mp3",

    img: "https://i.scdn.co/image/ab67616d0000b273c08202c50371e234d20caf62",
  },
  {
    name: "Dildaara",
    link: "./songs/Dildaara (Stand By Me) - Ra-One 320 Kbps.mp3",

    img: "https://c.saavncdn.com/026/Ra-One-Hindi-2011-500x500.jpg",
  },
  {
    name: "Tere Liye Duniya Chod Di Hai",
    link: "./songs/Tere Liye Duniya Chod Di Hai Mp3 Song Download-(NewDjRemixSong).mp3",

    img: "https://i.scdn.co/image/ab67616d0000b27300a1a948e2848d28c4538fe1",
  },
  {
    name: "Kaise Hua ",
    link: "./songs/Kaise Hua - Kabir Singh.mp3",

    img: "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_579412080.jpg",
  },
  //   "./Tu Hi Haqeeqat - Tum Mile 128 Kbps.mp3",
  //   "./Kesariya(PagalWorld.com.se).mp3",
  //   "./Dildaara (Stand By Me) - Ra-One 320 Kbps.mp3",
  //   "./Tere Liye Duniya Chod Di Hai Mp3 Song Download-(NewDjRemixSong).mp3",
  //   "./Kaise Hua - Kabir Singh.mp3",
];
let i = 1;
(j = 1), (randomNo = Math.trunc(Math.random() * songs.length));
audioEle.src = songs[randomNo].link;
songNameEle.innerHTML = `${songs[randomNo].name}`;
songImgEle.src = songs[randomNo].img;

playbtn.addEventListener("click", function () {
  if (status2 == "pause") {
    audioEle.play();
    playbtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    status2 = "play";
  } else if (status2 == "play") {
    audioEle.pause();
    playbtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    status2 = "pause";
  }

  //   audioEle.volume = 0.1;
});
// pausebtn.addEventListener("click", function () {});

// volume- 0.0 to 1.0
audioEle.addEventListener("ended", function () {
  if (status2 == "pause") {
    audioEle.play();
    playbtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    status2 = "play";
  }
  index = songs.indexOf(audioEle.src) + i;
  index = index + 1;
  if (index == songs.length) index = 0;

  if (i == songs.length) i = 0;

  audioEle.src = songs[index].link;
  console.log(index);
  console.log(audioEle.src);

  audioEle.play();

  if (i < songs.length) i++;
  console.log(i);
  songNameEle.innerHTML = songs[index].name;
  songImgEle.src = songs[index].img;
  singerNameEle.src = songs[index].singer;
});
volume.addEventListener("input", function () {
  audioEle.volume = volume.value / 10;
});
nextbtn.addEventListener("click", function () {
  if (status2 == "pause") {
    audioEle.play();
    playbtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    status2 = "play";
  }
  index = songs.indexOf(audioEle.src) + i;
  index = index + 1;
  if (index == songs.length) index = 0;

  if (i == songs.length) i = 0;

  audioEle.src = songs[index].link;
  console.log(index);
  console.log(audioEle.src);

  audioEle.play();

  if (i < songs.length) i++;
  console.log(i);
  songNameEle.innerHTML = songs[index].name;
  songImgEle.src = songs[index].img;
  singerNameEle.src = songs[index].singer;
});
prevbtn.addEventListener("click", function () {
  if (status2 == "pause") {
    audioEle.play();
    playbtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    status2 = "play";
  }
  let index = songs.indexOf(audioEle.src) + i;

  index = index - 1;

  if (index < 0) {
    index = songs.length - 1;
  }
  console.log(index);
  if (i <= 1) {
    i = songs.length + 1;
  }

  audioEle.src = songs[index].link;

  audioEle.play();
  if (i > 0) i--;
  console.log(i);
  songNameEle.innerHTML = songs[index].name;
  songImgEle.src = songs[index].img;
  singerNameEle.src = songs[index].singer;
});
