function showBless() {
  const list = [
    "愿你被世界温柔以待 🎄",
    "愿你平安喜乐，所愿皆成 ✨",
    "愿你事事顺遂，天天开心 ❤️"
  ];
  const text = list[Math.floor(Math.random() * list.length)];
  document.getElementById("bless").innerText = text;
}
setInterval(() => {
  const snow = document.createElement("div");
  snow.innerText = "❄";
  snow.style.position = "fixed";
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.top = "-20px";
  snow.style.fontSize = "20px";
  snow.style.opacity = Math.random();
  document.body.appendChild(snow);

  let fall = 0;
  const timer = setInterval(() => {
    fall += 2;
    snow.style.top = fall + "px";
    if (fall > window.innerHeight) {
      clearInterval(timer);
      snow.remove();
    }
  }, 30);
}, 300);

function playMusic() {
  const bgm = document.getElementById("bgm");
  bgm.play().then(() => {
    console.log("音乐播放成功");
  }).catch(err => {
    alert("微信限制了自动播放，请再点一次 🎧");
  });
}

let isPlaying = false;

function toggleMusic() {
  const bgm = document.getElementById("bgm");
  const icon = document.getElementById("musicIcon");

  if (!isPlaying) {
    bgm.play().then(() => {
      icon.classList.add("rotate");
      bgm.volume = 0.3; // 微信里很重要
      isPlaying = true;
    }).catch(() => {
      alert("请再点一次开启音乐 🎧");
    });
  } else {
    bgm.pause();
    icon.classList.remove("rotate");
    isPlaying = false;
  }
}
toggleMusic();

