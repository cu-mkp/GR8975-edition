---

---
// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.addField('activities')
  this.addField('purposes')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content


{% assign count = 0 %}{% for text in site.texts %}
index.addDoc({
  title: {{text.title | jsonify}},
  author: {{text.author | jsonify}},
  layout: {{text.layout | jsonify}},
  content: {{text.content | jsonify | strip_html}},
  activities: {{text.activities |jsonify}},
  purposes: {{text.purposes |jsonify}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{% for text in site.texts %}{
  "title": {{text.title | jsonify}},
  "author": {{text.author | jsonify}},
  "layout": {{ text.layout | jsonify }},
  "link": {{text.url | jsonify}},
  "activities": {{text.activities |jsonify}},
  "purposes": {{text.purposes |jsonify}},
  "excerpt": {{text.content | strip_html |remove: "-"| truncatewords: 20 | jsonify}}
}
{% unless forloop.last %},{% endunless %}{% endfor %}]

//Query

var qd = {}; //Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query, {
    fields: {
        title: {boost: 2},
        content: {boost: 1}
    },
    bool: "OR"
});
                                             
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var act = "";
    var purp = "";
    var searchitem = '<div class="result"><a href="{{ site.baseurl }}'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a><p>';
    for (var i = 0, c = store[ref].activities.length; i < c; i++) {
	 act += '<a class="tag small" href="{{site-baseurl}}/GR8975-edition/list-activities/#'+store[ref].activities[i]+'"><span class="post-tag">'+store[ref].activities[i]+'</span></a>';
      }
    for (var i = 0, c = store[ref].purposes.length; i < c; i++) {
        purp += '<a class="tag small" href="{{site-baseurl}}/GR8975-edition/list-purposes/#'+store[ref].purposes[i]+'"><span class="post-tag-2">'+store[ref].purposes[i]+'</span></a>';
     }
    var end = '</p><p>'+store[ref].excerpt+'</p></div>';
    searchitem += act + purp + end;
    resultdiv.append(searchitem);
   }
  }


$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
