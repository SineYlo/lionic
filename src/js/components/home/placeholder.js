import superplaceholder from 'superplaceholder';

superplaceholder({
  el: document.querySelector('.form-join__field_name'),
  sentences: ['Example: Ivan', 'Rather, start typing :3'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});

superplaceholder({
  el: document.querySelector('.form-join__field_email'),
  sentences: ['Example: test@test.com', 'Rather, start typing :3'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});

superplaceholder({
  el: document.querySelector('.form-join__field_phone'),
  sentences: ['Example: +71234567890', 'Rather, start typing :3'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});

superplaceholder({
  el: document.querySelector('.form-join__field_message'),
  sentences: ['Describe your problem in detail', 'Rather, start typing :3'],
  options: {
    letterDelay: 40,
    sentenceDelay: 700,
  },
});
