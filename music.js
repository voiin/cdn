const ap = new APlayer({
    container: document.getElementById('aplayer'),
    loop: 'all',
    autoplay: true,
    preload: 'auto',
    listFolded: false,
    //listMaxHeight: 100,
    //lrcType: 1,
    audio: [
      {
        name: 'Water',
        artist: 'LeeAlive',
        url: 'https://cdn.jsdelivr.net/gh/voiin/blog-cdn@latest/music/name.flac',
        cover: 'https://cdn.jsdelivr.net/gh/voiin/blog-cdn@latest/music/name.jpg',
        lrc: "[00:28.40]你我二人的呐喊\n[00:34.19]如若能就此贯穿至\n[00:40.25]世界尽头 就好了呢\n[00:45.55]如若成真的话 那我们会\n[00:48.64]一起喊出怎样的话语呢\n[00:51.60]那就二人一齐\n[00:54.50]定下一个永不磨灭的约定吧\n[00:59.84]美不胜收。\n[01:24.49]黄昏之时。\n[01:49.80]早上，醒来的时候，不知道为什么自己在哭。\n[01:58.16]明明做过的梦，却总是想不起来。\n[02:01.49]你我二人的呐喊\n[02:07.53]如若能就此贯穿至\n[02:13.27]世界尽头 就好了呢\n[02:18.51]如若成真的话 那我们会\n[02:21.66]一起喊出怎样的话语呢\n[02:24.62]那就二人一齐\n[02:27.65]定下一个永不磨灭的约定吧\n[02:32.82]美不胜收。\n[02:57.48]你的名字是？\n[00:28.40]あぁ このまま僕たちの声が\n[00:34.19]世界の端っこまで消えることなく\n[00:40.25]届いたりしたらいいのにな\n[00:45.55]そしたらねぇ 二人で\n[00:48.64]どんな言葉を放とう\n[00:51.60]消えることない約束を\n[00:54.50]二人で「せーの」で\n[00:58.51]\n[00:59.84]「美しい眺めだつた。」\n[01:01.70]\n[01:24.49]「かたわれ時だ。」\n[01:26.04]\n[01:49.80]「朝、目が覚めるとなぜか泣いている。そういうことが、時々ある。\n[01:58.16]見ていたはずの夢は、いつも思い出せない。」\n[02:00.87]\n[02:01.49]あぁ このまま僕たちの声が\n[02:07.53]世界の端っこまで消えることなく\n[02:13.27]届いたりしたらいいのにな\n[02:18.51]そしたらねぇ 二人で\n[02:21.66]どんな言葉を放とう\n[02:24.62]消えることない約束を\n[02:27.65]二人で「せーの」で\n[02:31.35]\n[02:32.82]「美しい眺めだつた。」\n[02:34.61]\n[02:57.48]「君の名は。」\n"
      }
    ]
});
