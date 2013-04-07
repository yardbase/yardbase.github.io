q = new Yardbase.Query().with_tag("music_event").where('date', '04/07/13' )
words = {}
genres = ["Punk", "Classical", "Rock", "Hip-Hop", "Bluegrass"]
q.execute (results) -> 
  for result in results
    genre = result.music_event.genre ||= genres[Math.floor(Math.random()*5)]
    words[genre] ||= 0
    words[genre] += 1
  word_array = []
  for word of words
    word_array.push
      text: word
      weight: words[word]

  $('#wordcloud').jQCloud(word_array);
