// Generated by CoffeeScript 1.6.1
(function() {
  var q, theResults, words;

  q = new Yardbase.Query().with_tag("music_event");

  words = {};

  theResults = [];

  $('#wordcloud').click('span', function(clickEvent) {
    var el, html, result, _i, _len;
    el = $('#bands');
    html = "<ul>";
    for (_i = 0, _len = theResults.length; _i < _len; _i++) {
      result = theResults[_i];
      if (result.music_event.genre === clickEvent.target.innerHTML) {
        html += "<li>" + result.name + "</li>";
      }
    }
    html += "</ul>";
    return el.html(html);
  });

  q.execute(function(results) {
    var genre, result, word, word_array, _i, _len;
    theResults = results;
    for (_i = 0, _len = results.length; _i < _len; _i++) {
      result = results[_i];
      genre = result.music_event.genre;
      words[genre] || (words[genre] = 0);
      words[genre] += 1;
    }
    word_array = [];
    for (word in words) {
      word_array.push({
        text: word,
        weight: words[word]
      });
    }
    return $('#wordcloud').jQCloud(word_array);
  });

}).call(this);
