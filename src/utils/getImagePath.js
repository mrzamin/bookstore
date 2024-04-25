const getImgPath = (author) => {
  const authorName = author.split(" ").reverse().join("").toString();

  const imgPath = `../public/images/${authorName}.jpg`;

  console.log(imgPath);
  return imgPath;
};

export default getImgPath;
