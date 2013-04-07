q = new Yardbase.Query().with_tag("music_event") #.where('date', '04/07/13' )
words = {}
theResults = []
genres = ["Punk", "Classical", "Rock", "Hip-Hop", "Bluegrass"]
$('#wordcloud').click 'span', (clickEvent) -> 
  el = $('#bands')
  html = "<ul>"
  for result in theResults
    if result.music_event.genre == clickEvent.target.innerHTML
      html += "<li>#{result.name}</li>"
  html += "</ul>"
  el.html(html)

q.execute (results) -> 
  theResults = results
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
