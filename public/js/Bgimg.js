const bgImages = ['../../../public/bgimg/bg-1.jpg', '../../../public/bgimg/bg-2.jpg', '../../../public/bgimg/bg-3.jpg', '../../../public/bgimg/bg-4.jpg','../../../public/bgimg/bg-1.jpg']; // 所有需要轮播的图片路径

setInterval(() => {
  const index = Math.floor(Date.now() / 10000) % bgImages.length; // 计算当前时间应该显示哪张图片
  const imageUrl = `url(${bgImages[index]})`; // 将图片路径转为 CSS 格式
  document.getElementById('bg-img').style.backgroundImage = imageUrl; // 将背景图设置为当前图片
}, 1000); // 每隔十秒钟执行一次
