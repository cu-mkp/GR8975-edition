// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  title: "Gilding wood",
  author: null,
  layout: "narrative",
  content: " \n##  Gilding wood\n\nFirst of all it is necessary to apply a coat of very clear glue; and when it is dry, you will apply a coat of yellow gold; and when this is done you will take fig tree wood and soak it for a while, and wash the place you want to gild,dhdjhjdhdjh and cut your gold with a knife near where you will put it; and said gold must be applied with cotton, and if you can find some fig tree, take an egg white and stir it frequently.\n\nIf your gold does not have a nice enough color, you will take a partridge feather burn it in a chafing—dish, and turn the smoke toward what you have gilded.\n jkfjoehwfoihwoq ehcfo3 h 2oth o\n",
  id: 0
});
index.addDoc({
  title: "Turtles",
  author: null,
  layout: "narrative",
  content: "105r \n## Turtles\n\nMales have shells that turn down at the end near their tails, and their underbelly shells have lined marks along the bottom from their tails to their head. And the females have neither the turned down shell near the tail nor the marks.\n\n",
  id: 1
});
index.addDoc({
  title: "Casting with lead and tin",
  author: null,
  layout: "narrative",
  content: " \n## Casting with lead and tin\n\nThe way I have done it  for lizards and serpents is with two ℥ of pure tin for one lb. of unrefined lead that is impure. The mold is made out of the aforementioned sand, common for all metals, when it is reheated, leave it to cool until you can put your finger in it without causing a breach in the gate of the cast. As for the lead, it is melted in a crucible with a bellows’ fire until both the crucible and the lead are red. When it gets to that state, cleanse it anew with charcoal or with a specially made scraper or with the pufts of the little bellows. This done, leave it to rest in it red state and you can even reheat it, then if you want, throw in a bit of resin to burn away the filth. However, some think it best not to put any in because it leaves filth. But when they are ready to cast, they cannot forget to also thrown in a bean—size quantity of bismuth for each pound of lead. And it must be as red as the melted metal when it enters the mold. If the mold is large, it is much better to put in in a press so that they join well and so that the lead does not come out of the mold. However, should this happen, and that for the first, second or third time your mold does not fill up, cast heartily because for as long as your metal is red it will mix and join with the other one and will come out very neatly like the main one. The same thing can be said for pure tin used for thin things. And that way for doing pure tin is one ℥ of new lead for one lb. of the former. Large molds must be put in a press held tightly between two layers of copper, and then bury the whole thing in sand, which is better than ashes, because being heavy, it will seal better. Otherwise large molds are prone to open because the metal is heavy. Some make square molds \n   \nare made of earth or blades of copper, or iron, or wood covered with white iron, in order to bury more easily these aforementioned molds between the thin sheets of copper, estric or one of iron.\n\nposition:: left-top\n\nWhen the metal is thick, you do not need to cast as hot as when it is thin.\n\nposition:: top\n\nWhen you melt this often, it becomes sour and fragile because it has to be cast very hot and it makes it half—calicanated. Use new stuff.\n\nposition:: left-top\n\n+\n\nposition:: left-top\n\nNote that If you want to cast with cuttlefish bone, they cannot be too warm because that would burn the cuttefish. For this effect, try paper. It it becomes brown, it is enough, and it is good for casting, but if it blackens the paper, then it is too hot.\n\nposition:: left-bottom\n\nIf you want to cast paper with writing on it, make a mixture with half lead and half tin. As soon as it is melted, throw it between two pieces of cardboard on a flat place that is level. And with a point or gold or hard wood, engrave on the left the writing that you want. And having poured the lead onto the cardboard, press onto it the other piece of cardboard.\n\n",
  id: 2
});
index.addDoc({
  title: "Casting wax to mold an animal that one has not got",
  author: null,
  layout: "narrative",
  content: " \n##  Casting wax to mold an animal that one has not got\n\nTake some white wax which is much more appropriate for this kind of work than anything else, because it is much firmer and does not leave as much filth, as much as you need to cast the animal that you propose, and no more. And [take] a half quantity of ground coal and neatly sieved through a cloth or coal sleeve, using it to give some color to your wax, that would otherwise be transparent and you will not be able to see your lines as clearly. Put your wax on the coal fire to melt. And when it is well—melted and well—liquified, have, for a full eared—porringer of melted wax, as much sulphur as a large walnut. Pulverize it. Melt it over a slow fire and when it is melted, do not leave it on the fire because it will become too hard. But take it off and keep stirring it with a little stick and when it has finished bubbling and is as liquified as water, cast it into the wax that you will have previously removed from the fire. And mix and stir both of the them so that they join together. After stir in little by little while continuously mixing, the charcoal that has been repeatedly ground, and in this way it will be very well incorporated. This is how you will know that your wax has gone beyond its ideal heating point, it will release no more smoke, it will start to have lines appearing on the side and not in the middle, and those lines will be close to each other. If you cast too hot, you will not be able to separate your wax from your mold and it would stick to the cast. When it is at the right state, stir it with a little stick so that the pulverized charcoal is well mixed in and has not fallen to the bottom of the mixture. And in this way, throw it in your mold bit by bit and not in one go, because wax is not runny\n\nposition:: left-top\n\nThis black sulphured wax is for fashioning round figures that do not come out of the mold. And they need to be burned in the moule au noyau rather than be opened like the ones that have something jutting out or an intertwining of legs and arms. And this wax, thanks to the sulphur, will melt with little heat and leave without leaving any filth. If by some misfortune the crushed charcoal remains in ashes, when you open the mold and blow on it, it will come clean.\n\nposition:: left-bottom\n\nTo make wax serpents or other things to affix to candles, it is necessary to cast them with esbaucher wax of all colors. \n \n not like other things. And for this one, you can cast two or three times until your mold is full. Now, concerning this mold of pulverized white plaster &amp; reheated in the manner of the sand from the preceding recipes, you should have made it long ago because it is used many times. But, before using it, soak it for a good hour in cold water, &amp; at a minimum, at least as long in hot water that at first is so hot that you can’t hold your finger in it. And note that it absorbs no more, but that it appears very wet overall without water seeping into it. In removing it closed from the hot water, cast your wax in such a state of heat as has been described. And neither the first nor the second casting will readily come out well, hardly, until the mold is soaked. Let it cool down before opening it so that the cast thing not break. You will know that the casting is good when the wax coming back out of the mold is thin and even. Remember to make several castings along the whole length of the mold so that in this way the wax runs better. Make the firstcasting twice as large as other molds. And if, in the first casting, your work fills with bubbles and in so doing does not come out neatly, it’s all the same, because you have to face the fact that the three or four first do not readily come out well. Firstly, you will know whether there are a few barbs that keep it from stripping well. And you will remove them if, on their own, they do not remove themselves in the two or three first castings. And the more that you cast, the more you will do it neatly. And your mold will serve you more than one hundred times if it Is well governed. But it is good to soak it one night or one day before casting so that it be well soaked. The same must be done for fruits made from sugar. This wax is very soft &amp; friendly &amp; pliant, like copper. And if it is hard [this is] because of sulfur, which makes it melt more easily than than other [wax], so much that you can see evidence on a hot slate. And the sulfur that you put inside will be found the second time that you melt it, [as] cracks on the bottom. Having in this way passed through wax, it will not catch fire at all when put to a candle. And in this case, I believe that it will cast quite the medal [illegible]. One uses the same wax in place of varnish to [illegible].\n\nposition:: left-middle\n\nWhen your animal is cast, cut away the froth &amp; superfluous things with a hot pen knife. And if you want, plait and wrap it around some stick or candle, put it in some hot water to soften and hold it in turning it around.\n\nposition:: left-middle\n\nLower the protrusions of the castings so that they be even &amp; that the wax has more silver so that it can run all in one go without turning through the windings of the snake. \n  \n to engrave on silver &amp; copper with aqua fortis. With this [wax] too, one fills the cavity of a relief, &amp; then casts in this cavity, with moistened sand, which immediately takes the relief very neatly. And then you can cast its cavity on it in copper, gold, and silver, and make really singular seals.\n\nposition:: left-top\n\nSeals\n\n",
  id: 3
});
index.addDoc({
  title: "To cast in sulfur",
  author: null,
  layout: "narrative",
  content: " \n## To cast in sulfur\n\nTo cast neatly in sulfur, arrange the pith of bread under the brazier, as you know. Mold whatever you want into it &amp; let it dry &amp; you will have very neat work.\n\nposition:: left-top\n\nTry sulfur passed through melted wax, because it will no longer ignite &amp; and make eyelets.\n\n",
  id: 4
});
index.addDoc({
  title: "Molding and shrinking a large shape",
  author: null,
  layout: "narrative",
  content: " \n## Molding and shrinking a large shape\n\nMold it with the pith of bread just out of the oven, or like that aforementioned, &amp; in drying out it will shrink &amp; consequently so will the medal that you will cast. By these means — lengthening out or enlarging the imprinted bread — you can vary the shape &amp; from one face make several different ones. The bread straight from the oven is best. And the one which has been heated twice contracts more. You can cast sulfur without letting the imprint on the bread dry, if you want to cast it as large as it is. But, if you want to let it shrink, let it dry to a greater or lesser extent.\n\n",
  id: 5
});
index.addDoc({
  title: "Casting of lead and tin in plaster",
  author: null,
  layout: "narrative",
  content: " \n## Casting of lead and tin in plaster\n\nIf you want to cast any flat medal or any animal that is not very heavy, and that must not be burnt inside the mold, you can indeed cast in mixed plaster &amp; brique, as above; and not in plaster alone, because it contracts too much feeling an ardent fire if it is not so mixed. But, with the brick, it holds well. However, take heed to dry out your mold at length &amp; on a slow fire &amp; with patience, because there is no need to reheat it. But when your work is of flowers or other things that want their mold to be reheated &amp; set ablaze, mix the plaster with stone alum &amp; even with crocum. I have molded in very neat plaster &amp; brick &amp; it has sustained several castings.\n\nposition:: left-middle\n\nI tried both plaster &amp; brick alone and molded en noyau with like the others. My mold was very clean, having lightly oiled &amp; rubbed my medal with spirits. I made my casting wide at the entrance, narrowing it as it goes along until it reaches the medal which is very thin. I notched the casting which embraced the medal well. I dried the mold out well on a slow fire &amp; finally, I heated it well without turning it red. I let it cool in such a way that I could hold my finger to it without burning myself. I made a line of 4 ℥ of tin, &amp; ix deniers of lead. I cast it red, and it was quite good and beautiful. Afterwards I put xii deniers of lead on top of 4 ℥ of tin. It is very good &amp; beautiful.\n\nposition:: left-bottom\n\nWhen there is nothing to burn in the mold, it is not necessary to reheat it for lead and tin. But for flowers and other things that must be burned, it is.\n\n",
  id: 6
});
index.addDoc({
  title: "Casting a crayfish",
  author: null,
  layout: "narrative",
  content: " \n##  Casting a crayfish\n\nThe crayfish is one of the most fantastical to cast, but also provides an example for casting other difficult things. You can distinguish males and female by the eggs that the females carry, and by the four little white back legs that males have in their tails after behind main eight legs. It is good to dry them out a bit so that the bumps come out more hard and beautiful, because none of what is made of shell shrinks. It is true that should you dry the little inside legs for too long, they become diminished and have no body. If they are too dry, the flesh separates from the scales. Be sure then to maintain the mean. They have certain hairs between the legs and at the end of the tail. And because all hair is difficult to cast, because it gets mixed up in the sand and does not release, you can burn it by putting a hot iron on the crayfish so that it the hair cannot be seen. As for animals that have hair or feathers, you must grease the hair with wheat oil, which is very dry and which will make the hair lay flat and straight. In this way, you will have form of your animal and you will have the hair. Should it the hair be wavy, it can be repaired. If your crayfish has eggs, which are delicate, and which will be difficult to take out of the mold without breaking, you would do better to make the first cast with the crayfish on its belly and eggs. In this way, you will open the mold with it the crayfish on its back, which will be hard and easy to manipulate. And the belly and the eggs will remain in the mold. And rather than opening your mold for the second time, you will have to burn it with them in it. This way, it will open easily, and what has been burned will come away cleanly. In this way, the second casting, which is done on the first one that has successfully taken hold, separates easily from the first, after having been refired. This is a singular secret for similar moldings.\n\nposition:: left-top\n\nThe casting is made by the very thin tail.\n\nposition:: top\n\nIf some little thing is missing, you can reattach it or else fill it with goldsmith’s cement.\n\nposition:: left-top\n\nDo not forget to rub with spirits before you mold.\n\nposition:: left-top\n\nStag beetles, crayfish and crabs are molded in the same way.\n\nposition:: left-middle\n\nIf your crayfish has no eggs, mold the back on top and the belly on the bottom. You can give it some.\n\nposition:: left-middle\n\nIt the crayfish can be molded hollow for the body, but not for the legs. And for a good result, take note that the crayfish is rather fantastical to mold hollow, this ought to be reserved for turtles.\n\nposition:: left-bottom\n\nWhen you open your mold, you will find the crayfish has white bones, but they will not be powder. And without opening it, the mercury will not have affected the process.\n\nposition:: bottom\n\nApply very light oil colors.\n\nposition:: bottom\n\nTo paint it, boil it with wine and a bit of salt so that they become very red and use this as a model. Paint the back with vermillion mixed with laquer, and the sides and the underside of the belly and the legs with vermillion and yellow ochre and white. \n  \n Let your crayfish dry a little in the sun, by itself. If it has spawns, they will shrink while drying, and be all the more beautiful for it. Make your paste out of yellow potter’s earth, just like for the other representations. Lay your crayfish on it, the back side down, and the other parts which are more tricky to mold —— legs, belly, eggs — side up. Drive in the back side in the clay paste up to the legs, which is about the half part of the crayfish’s body. Fix the body with a pointy iron thread in the middle and, if you feel you need it, you can also drive another one at the edge of the tail. And in order that the big legs be lower than the head, which is lower because it is linked from below, add a little clay under the head. Then add a bit of clay under the jacket in order to raise it. Hide the feelers under the clay and under the crusher claws, then arrange it as you like. Stretch out the walking legs to the joints, and for the first cast, bend the second part of the walking legs. Fix the joints of the legs with wax and a warm wire so they will not move. If you want to mould something fancier, fix the end of one walking legs on the body or on a crusher claw , using the same wax. If the female has spawns, bent half the tail over the spawns, and keep the shape by fixing the tail with a wire. Be sure that you will be able to clean this part. Finally rub your crayfish with spirits, and cast your sand. Once the sand is hardened, uncover the back side, the head, the eyes, and the small legs close to the crusher claws, and the walking legs all along. One must uncover these parts as much as possible. Then bend and cover the spawns again. The other animals\n\nposition:: left-top\n\nFix what may raise the two padded edges on each side of the mouth with melted wax under them.\n\nposition:: left-middle\n\nposition:: left-middle\n\nUncover as many parts as possible, but be sure the channels you make are well stripped.\n\nposition:: left-middle\n\nIncline your mould to the thickest side of the animal.\n\nposition:: left-bottom\n\nTo paint the crayfish, one paints the middle of the back with vermilion, mixed with a bit of lacquer. The sides, the belly, and below the legs with a mixture made of vermilion, ceruse, and a bit of yellow ochre. As with all things, always keep the real one in front of you in order to copy it as realistically as possible.\n\nposition:: left-bottom\n\nLay the feelers on the crusher claws, or solder this part with a wire made of bleached brass.\n\nposition:: bottom\n\nWhen you arrange the legs, be sure that they do not get over the belly, and that they are well set against the belly otherwise [illegible] \n  \n are not so uncovered. But since crayfish are troublesome to burn &amp; clean, you have to uncover them as much as you can, even the little legs just until the tips, because they are troublesome &amp; if, in order to not alter them, you have to take them out, you could break something of the mold. Having uncovered it with the point of a knife, like an engraving stick or another fitting thing, clean off the sand at the joints &amp; elsewhere with your little brush really very scrupulously. And if something is loosed from the crayfish, attach it with wax, as is discussed. And also attach the horns this way. And also do the casting the length of the extremes of the little legs with wax. And refill the holes that have been made with the needles of iron wire with it. And everything being quite clean &amp; having uncovered more than half of it, oil your mold after having soaked the back side in water, &amp; do not forget to oil all the fine parts that are between the legs and the little beaks; then rub the crayfish with spirits. And do your second casting after having made the first mold even, so that the cramp—irons join better. Your mold must be larger on the side with the impression than on the back. Do not open your mold after the second casting, so that it not become clayed &amp; reheated &amp; that which is inside not be burned. Do not forget to mix crocum throughout your sand when you mold the crayfish, because you must really reheat it &amp; the crocum withstands this marvelously. To mold a crab &amp; to mold a crayfish are exactly the same. When you have uncovered your crayfish on one side do not delay at all before doing the second casting, because crayfish dry out. It is not enough to uncover the crayfish such that you see the whole half the half you uncover, but take heed that your mold, even when you are uncovering, be good and stripped, because if the crayfish gets well burnt, you will not be able to open your mold without breaking it.\n\nposition:: top\n\nRestore it with a pen knife, little chisels, or engraving sticks.\n\nposition:: left-top\n\nAs you see here, but a wax casting all around &amp; at the end of the tail, where you will do the principal casting, two or three more.\n\nposition:: left-middle\n\nMake the casting with candle wax shaped in a thread like a large packthread, the whole length from the end of the claws to the extremity of the tail. If there is also some claw end or other part that is extended past the rank of the others or is raised up higher or turned up all alone, make a wax casting for it from its end just barely not joined to the body or to one of the large claws or to some other place where lots of metal will be wedged in.\n\nposition:: left-bottom\n\nHaving uncovered it, attach &amp; secure the two little bearded horns of the crayfish, and anything else that is not secured, with wax.\n\n",
  id: 7
});
index.addDoc({
  title: "Molding grasshoppers and things too thin",
  author: null,
  layout: "narrative",
  content: " \n## Molding grasshoppers and things too thin\n\nIf you have to mold a piece of written-on paper that is too thin, after you have done the first cast and it has set, give a little thickness to the reverse of your paper with melted butter, which is the most appropriate means there is, &amp; for strengthening the wings of either a butterfly or a grasshopper, or any delicate part of an animal to which you need to give thickness. But take heed to apply this melted butter under the wing or in whichever place it will not be seen. For giving thickness to a pansy or other flowers, butter is not good, but rather wheat oil, which is soon dry &amp; holds firm. Wax would not be appropriate here for it is too hot once melted, and it makes the thing to which it is applied contract. But butter is amiable and handleable.\n\nposition:: left-top\n\nIf you write on paper or on common carton and your letters are made with gum, the moisture of the clay plate (?) or the wet (?) sand for a noyau will moisten your letters and undo them. Write therefore with cinnabar mixed with oil, on oiled &amp; stamped (?) paper.\n\nposition:: left-middle\n\n+ Reheat your molds with charcoal firstly lit in the forge, so that the fire is not too hot and does not break the molds. And do not fire as strongly where the mold is thin as where it is thick.\n\n",
  id: 8
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: " \n## Molds\n\nMake some notches in them the molds that enter more into the inside of the mold than the outside because in this way, they have more strength. Take care to keep from reheating them suddenly in a burning hot fire, because this will make them break.\n\nposition:: right-middle\n\nDo not keep them molds in a humid place, nor an enclosed place if they are not well dry, because they will mold. The same with dried animals.\n\nposition:: left-middle\n\nIt is not at all necessary to reheat the molds two times when the animal can pull away without burning, as do toads, which can very well be molded hollow like all thick animals. However, it is always good to redden the mold once.\n\n",
  id: 9
});
index.addDoc({
  title: "Lute for luting your molds",
  author: null,
  layout: "narrative",
  content: " \n##  Lute for luting your molds\n\nI have not found a lute that is made more quickly than this one, nor a better one. Take some of the lean earth that artillery founders and bell founders use to make their trusseaulx and molds, which is lean and sandy. Soak it moderately like a very thick mortar. Mix into it about one half of horse manure and then beat it well. Afterwards mix in one third of cloth waste or cloth shavings and beat it again quite strongly. You can reheat your mold as soon as the lute is ready.\n\n",
  id: 10
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": "Gilding wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_2/",
}
,{
  "title": "Turtles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_1/",
}
,{
  "title": "Casting with lead and tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p139r_1/",
}
,{
  "title": "Casting wax to mold an animal that one has not got",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p139v_1/",
}
,{
  "title": "To cast in sulfur",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p140v_1/",
}
,{
  "title": "Molding and shrinking a large shape",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p140v_2/",
}
,{
  "title": "Casting of lead and tin in plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p140v_3/",
}
,{
  "title": "Casting a crayfish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p141r_1/",
}
,{
  "title": "Molding grasshoppers and things too thin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_1/",
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_2/",
}
,{
  "title": "Lute for luting your molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_3/",
}
]

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
  var result = index.search(query);
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
    var searchitem = '<div class="result"><p><a href="/GR8975-edition'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
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
