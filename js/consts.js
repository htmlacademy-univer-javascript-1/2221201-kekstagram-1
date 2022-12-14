const NAMES = [
  'Андрей',
  'Мишель',
  'Мария',
  'Алиса',
  'Виктор',
];

const DESCRIPTIONS = [
  'На отдыхе',
  'Отличное место',
  'Люблю котов',
  'А в ответ тишина.'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const MAX_COUNT_PHOTOS = 25;
const MAX_COUNT_HASHTAGS = 5;
const MAX_LENGTH_HASHTAGS = 20;

const LikeCount = {
  MIN: 15,
  MAX: 200
};

const CommentCount = {
  MIN: 1,
  MAX: 6
};

const AvatarCount = {
  MIN: 1,
  MAX: 6
};

export { NAMES, DESCRIPTIONS, MESSAGES, MAX_COUNT_PHOTOS, CommentCount, LikeCount, AvatarCount,  MAX_COUNT_HASHTAGS, MAX_LENGTH_HASHTAGS };
