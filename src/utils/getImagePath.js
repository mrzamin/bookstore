const getImgPath = (author) => {
  const authorName = author.split(" ").reverse().join("").toString();
  const imgPath = `../../../public/images/${authorName}.jpg`;
  return imgPath;
};

export default getImgPath;
