// Generated by CoffeeScript 1.6.1
(function() {
  var genres, q, words;

  q = new Yardbase.Query().with_tag("music_event");

  words = {};

  genres = ["Punk", "Classical", "Rock", "Hip-Hop", "Bluegrass"];

  q.execute(function(results) {
    var result, word, word_array, _i, _len, _name;
    for (_i = 0, _len = results.length; _i < _len; _i++) {
      result = results[_i];
      result.genre || (result.genre = genres[Math.floor(Math.random() * 5)]);
      words[_name = result.genre] || (words[_name] = 0);
      words[result.genre] += 1;
    }
    word_array = [];
    for (word in words) {
      word_array.push({
        word: words[word]
      });
    }
    return $('#wordcloud').jQCloud(word_array);
  });

}).call(this);
