window.onload = function () {
  var embedo = new Embedo({
    facebook: true,
    twitter: true,
    instagram: true
  });

  // Loads facebook post
  embedo.load(
    document.getElementById('fb-post'),
    'https://www.facebook.com/LaLiga/posts/1131604813542743'
  );

  // Loads tweet
  embedo.load(
    document.getElementById('twttr-tweet'),
    'https://twitter.com/Sh0bhit/status/797584590214926340'
  );

  // Loads instagram photo
  embedo.load(
    document.getElementById('instgrm-photo'),
    'https://www.instagram.com/p/BJA9BB-B46A'
  );

  // Loads youtube video
  embedo.load(
    document.getElementById('yt-video'),
    'https://www.youtube.com/embed/8pTEmbeENF4',
    {
      width: 640,
      height: 480
    }
  );
};
