const getImgPath = (author) => {
  const authorName = author.split(" ").reverse().join("").toString();
  const imgPath = `../../../images/${authorName}.jpg`;
  return imgPath;
};

export default getImgPath;
