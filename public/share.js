async function shareCanvas() {
        const canvas = document.getElementById('cvs');
        const dataUrl = canvas.toDataURL();
        const blob = await (await fetch(dataUrl)).blob();
        const filesArray = [
    new File(
      [blob],
      'prev.png',
      {
        type: blob.type,
        lastModified: new Date().getTime()
      }
    )
  ];
    const shareData = {
        files: filesArray,
        title: "Profile Pic Generator",
        text: "Bingkai profil Anda dengan warna perlawanan. Biarkan foto profil Anda berbicara banyak tentang perdamaian dan keadilan.",
        url: "https://lonte.netlify.app/",
  };
        navigator.share(shareData);
    }
