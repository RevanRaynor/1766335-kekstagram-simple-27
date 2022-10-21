const PHOTO_INFO_COUNT = 25;
const GENER_OBJ_MIN = 1;
const GENER_OBJ_MAX = 25;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 200;


const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const checkLengthString = (string, maxLength) => string.length <= maxLength;

checkLengthString(2, 5);

const createPhotoInfo = () => ({
  id: getRandomPositiveInteger(GENER_OBJ_MIN, GENER_OBJ_MAX),
  url: `photos/${getRandomPositiveInteger(GENER_OBJ_MIN, GENER_OBJ_MAX)}.jpg`,
  description: 'Лучшее фото в мире',
  likes: getRandomPositiveInteger(LIKE_MIN, LIKE_MAX),
  comments: getRandomPositiveInteger(COMMENTS_MIN, COMMENTS_MAX),
});

const array = Array.from({ length: PHOTO_INFO_COUNT }, createPhotoInfo);

console.log(array);
