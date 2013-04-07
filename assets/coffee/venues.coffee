q = new Yardbase.Query().with_tag("music_event")
words = {}
genres = ["Punk", "Classical", "Rock", "Hip-Hop", "Bluegrass"]
q.execute (results) -> 
  for result in results
    result.genre ||= genres[Math.floor(Math.random()*5)]
    words[result.genre] ||= 0
    words[result.genre] += 1
  word_array = []
  for word of words
    word_array.push
      text: word
      weight: words[word]

  $('#wordcloud').jQCloud(word_array);
