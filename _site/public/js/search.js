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
  title: ["List of artisans with their locations"],
  author: null,
  layout: "narrative",
  content: "- - - - - 001r - - - - - \n## [List of artisans with their locations]\n\n\n  \n    Nicolas Coste, in the Rue de la Heaumerie, at the sign of St Claude/Mirrors\n  \n  \n    Master Jehan Cousin, who resides in the Faubourg St Germain, knows about the master\n  \n  \n    Master Jehan Garnier, in the Rue des Escrivains by St Jacques de la Boucherie, currier. Try woad flowers\n  \n\n\n",
  id: 0
});
index.addDoc({
  title: ["Diverse thoughts"],
  author: null,
  layout: "narrative",
  content: "- - - - - 001r - - - - - \n## [Diverse thoughts]\n\nThe harvester that leaves some ears is not blamed.\n\nSacra Eleusinae deae propalare nefas.\n\nTrumpets, see the book of funerals\n\n",
  id: 1
});
index.addDoc({
  title: ["List of authors"],
  author: null,
  layout: "narrative",
  content: "- - - - - 001r - - - - - \n## [List of authors]\n\n\n  \n    Wolfangus Lazius\n  \n  \n    Petrus Appianus mathematicus Ingolstadiensis, Comment. urb. rom.\n  \n  \n    Hieronimo Ruscelli\n  \n  \n    Hermolaus Barbarus\n  \n  \n    Angelius Bargaeus, De aucupio et venatione\n  \n  \n    Nicolaus Damascenus\n  \n  \n    Caes{ariensis}, De rebus Persarum\n  \n  \n    Isidorus\n  \n  \n    Orosius\n  \n  \n    Eupolemus, historicus gentilis qui de rebus Davidis &amp; Salomonis scripsit\n  \n  \n    Cathalogue des villes\n  \n  \n    Calendrier des bergiers\n  \n  \n    Grammaire italiene\n  \n  \n    Arithmetique de Savonne\n  \n  \n    Instruction pour le faict des finances\n  \n  \n    Questions aenigmatiques\n  \n  \n    Des praeceptes d’agriculture\n  \n  \n    + Le secret des finances à Lyon\n  \n  \n    Synesius\n  \n  \n    Olaus Magnus\n  \n  \n    + Master Bernard Palissy, inventor of rustic figurines to the king and the queen mother\n  \n  \n    Aquatilium animalium historiae, Hypolito Salviano Typhernate authore, Romae 1554\n  \n  \n    Les Annales de Normandie\n  \n  \n    Alexander Aphrodisaeus\n  \n  \n    Polydorus Vergilius\n  \n  \n    Appianus\n  \n  \n    Athenaeus\n  \n  \n    Pausanias\n  \n  \n    Statius Thebaidos\n  \n  \n    Servius, In Aeneidem\n  \n  \n    Macrobius\n  \n  \n    Aulus Gellius\n  \n  \n    Alexander ab Alexandria\n  \n  \n    Festus\n  \n  \n    Nonius\n  \n  \n    Magius, Miscellanea\n  \n  \n    Pollux, Onomasticon\n  \n  \n    Hyginus\n  \n  \n    Berosus\n  \n  \n    Suetonius\n  \n  \n    Valerius Maximus\n  \n  \n    Cornelius Tacitus\n  \n  \n    Xenophon\n  \n  \n    Seneca\n  \n  \n    Dionisius Halicarnassensis\n  \n  \n    Sabellicus\n  \n  \n    cum permultisaliis Julius Capitollinus\n  \n  \n    Budaeus\n  \n  \n    Spartianus\n  \n  \n    Blondus\n  \n  \n    Volaterranus\n  \n  \n    Herodotus\n  \n  \n    Paulus Manutius\n  \n  \n    Strabo\n  \n  \n    Julius Firmicus\n  \n  \n    Quintus Curtius\n  \n  \n    Dio\n  \n  \n    Cornelius Nepos\n  \n  \n    Flavius Vopiscus\n  \n\n\n",
  id: 2
});
index.addDoc({
  title: ["Pen trial"],
  author: null,
  layout: "narrative",
  content: "- - - - - 001r - - - - - \n## [Pen trial]\n\nMonsieur\n",
  id: 3
});
index.addDoc({
  title: "For easing the belly",
  author: null,
  layout: "narrative",
  content: "- - - - - 001v - - - - - \n## For easing the belly\n\n\n Prunes of Saint Antonin, and if you like you can put leaves of malva and viola, adding some sugar and, if you like, some cinnamon for the stomach.\n\nOr in a chicken broth, add some marshmallow root. When fresh it is more mollifying.\n\nStirring together cirop de guindoles doulces with water and taking some of this in the morning eases the belly.\n\n",
  id: 4
});
index.addDoc({
  title: "Books to recover",
  author: null,
  layout: "narrative",
  content: "- - - - - 002r - - - - - \n## Books to recover\n\n\n  \n    The chronicles of Sigebert\n  \n  \n    Rufinus\n  \n  \n    Irenaeus, In [Haereses]\n  \n  \n    Paulus Aemilius\n  \n  \n    Paulus Jovius\n  \n  \n    Polydorus\n  \n  \n    Bergomensis\n  \n  \n    Philippe de Commines\n  \n\n\n",
  id: 5
});
index.addDoc({
  title: "Against pain",
  author: null,
  layout: "narrative",
  content: "- - - - - p002r - - - - - \n## Against pain\n\n\n Turpentine oil, oil of Jacob and salt from cabbage ashes.\n\n",
  id: 6
});
index.addDoc({
  title: ["Book title"],
  author: null,
  layout: "narrative",
  content: "- - - - - 002v - - - - - \n## [Book title]\n\nPractica, cioè nova inventione di contegiare, stampata in Brescia per Vincenzo Sabio\n\n",
  id: 7
});
index.addDoc({
  title: "Emeralds of Brissac",
  author: null,
  layout: "narrative",
  content: "- - - - - 002v - - - - - \nAnnotations:\nImitation Gemstones, Ruby Emerald, fol. 100r-v (Kremnitzer, Shah)\n \n## Emeralds of Brissac\n\n\nI took minium, 26 ℥, crystal […] and ground on marble 12 ℥, verdigris 3 |ʒ|. Incorporated all together. Put in a crucible covered by another well luted crucible with a hole on top. Melting: 7 hours without blowing. The mass came out a fine green.\n\nI took minium, 12 ℥, crystal, 6 ℥, verdigris, 2 grains. Melting: moderate, vi hours, baked 24 hours. The mass came out green, yellow and red.\n\n",
  id: 8
});
index.addDoc({
  title: "Sapphire",
  author: null,
  layout: "narrative",
  content: "- - - - - 002v - - - - - \nAnnotations:\nImitation Gemstones, Ruby Emerald, fol. 100r-v (Kremnitzer, Shah)\n \n##  Sapphire\n\n  Pebbles or crystal, 8 ℥; minium, 16 ℥; smith’s salt, 4 ℥; sparkling coryal, 4 grains. Melting: 6 hours.\n\n",
  id: 9
});
index.addDoc({
  title: "Imitation coral",
  author: null,
  layout: "narrative",
  content: "- - - - - 003r - - - - - \nAnnotations:\nImitation Coral, fol. 3r (Chessa)\n \n## Imitation coral\n\n  + One must first make the branches from wood or take a fantastical thorn branch, then melt a pound of the best possible clear pine resin and add one ounce of finely ground vermilion together with walnut oil, and if you add a little Venice lake the color will be all the more vivid, and stir all together into the resin, molten over a charcoal fire, not over an open flame, lest it catch fire. Then dip in your branches with a swirling motion. And should there remain any filaments, turn the branch over the heat of the charcoal.\n\n\n  at left top  margin of folio 003r\n\n  Colophony is nothing other than resin that has been cooked again. To do it well, you take a leaded pot and melt the resin, boiling it over the brazier for a good hour until it appears not thick but clear and liquid like water and it easily runs as a thread off the end of a stick, which you use to crush and test it. Then pour it through a coarse canvas or tammy cloth so that it falls into the strongest vinegar you can find, because the vinegar makes it strong and makes it less brittle. Repeat this two or three times and it will be fine and well purified. To imitate your coral, you can mix a fourth part of mastic with your purified resin to make it more solid and finer, and if you should use just one drop of mastic, it would be all the better, but it would take too long.\n\n\n\n  at top middle  margin of folio 003r\n\n  Coral made of red enamel withstands filing and polishing.\n\n\n\n  at right top  margin of folio 003r\n\n  It is made like cement, which is stronger when mixed with crushed glass rather than with brick. In the same way, together with the vermilion, one mixes in opaque red enamel, finely ground. It is the same way with all enamel colors.\n\n\n\n  at left middle  margin of folio 003r\n\n  Sulfur and vermilion have the same effect.\n\n\n",
  id: 10
});
index.addDoc({
  title: "Varnish for paintings",
  author: null,
  layout: "narrative",
  content: "- - - - - 003r - - - - - \n## Varnish for paintings\n\n\n Take a pound of Venice turpentine and heat it in a pot until it simmers, put in half a pound of the whitest turpentine oil you can find and stir all together well on a charcoal fire and take it off immediately after, and it is done. But if you find it too thick, add more oil, whereas if it is too clear, you can thicken it by putting a little turpentine. And so you will give it whatever consistency you want. It could be made without fire, but it is more desiccative when heated. It is appropriate for panel paintings and other painted things, without distorting the colors or yellowing, and dries both in the shade and under the sun, overnight, and during the summer as well as in the winter. It is usually sold 15 sols a pound.\n\n\n  at left bottom  margin of folio 003r\n\n  You need a little more turpentine than turpentine oil to thicken the varnish, which you need to apply with your finger in order to spread it thinner and less thick because when it is thick, it turns yellow and gathers [together]. Varnish is not used to make paintings shine, because it just takes the light out of them.\n\n\n\n  at middle bottom  margin of folio 003r\n\n  But it is used to enhance colors which have soaked in and to keep them from dust. Mastic varnishes does not resist rain, whereas oil [varnish] and rosin varnish do.\n\n\n",
  id: 11
});
index.addDoc({
  title: "Thick varnish for floorboards",
  author: null,
  layout: "narrative",
  content: "- - - - - 003r - - - - - \n## Thick varnish for floorboards\n\n\nThere is a type of varnish that takes a long time to dry and is still damp up to two months after it has been applied to the floorboards. But the following varnish does not remain damp like previous ones, which were made of linseed oil from Aux boiled with garlic to extinguish them and rid them of fat, and also with wheat. And this old one yellowed over time and made the blue color of paintings greenish. This one is made like former varnishes except that one puts in common thick turpentine.\n\n",
  id: 12
});
index.addDoc({
  title: "To varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 003v - - - - - \n## To varnish\n\n  Turpentine varnish does not need any glue since it is fat and viscous and does not penetrate the wood as spike lavender varnish and sandarac varnish would. Spike lavender varnish does not require any glue on iron and similar materials which cannot be permeated, but on wood and on colors which do not contain gum or colle de détrempe, it is necessary to lay one coat of the said glue colle de retailles and allow to dry, then varnish.\n\n",
  id: 13
});
index.addDoc({
  title: "Lavender spike oil varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 004r - - - - - \n##  Lavender spike oil varnish\n\n  One must heat lavender spike oil and, as it begins to simmer, put in powdered sandarac gum so that it soon melts. And stir continuously over a charcoal fire until the sandarac is well melted, which you will know by taking a little of the said varnish on a plate and, if it is fat enough when you handle it with a finger, it is ready. And for one pound of lavender spike oil, you should put five ounces of ground sandarac.  Some only put in four ounces but this is not as good, nor as fat. The former dries promptly. To avoid the trouble of polishing their ebony, framemakers varnish it with this. So do guitarmakers. This varnish is not as fitting for paintings as fine turpentine varnish, though it is good for the paintings’ moldings. When linseed varnish was in use, one would not commonly varnish the landscape of a painting because it would turn the landscape yellow. But with turpentine varnish one varnishes everywhere. Instead of sandarac, you can add to it pulverized mastic drop by drop or otherwise, and it will dry more quickly.  If you want to varnish plaster or a wall, first put on your colle de retaille, very hot, because if cold it would not penetrate the wall at all. And when you would have put your varnish on, it would come off.\n\n\n  at left top  margin of folio 004r\n\n  Aspic oil varnish is not as apt for colors as that of turpentine, because aspic oil eats the colors, since it is too penetrating.\n\n\n",
  id: 14
});
index.addDoc({
  title: "To remove varnish from an old panel painting that has yellowed and varnish it again",
  author: null,
  layout: "narrative",
  content: "- - - - - 004r - - - - - \n## To remove varnish from an old panel painting that has yellowed and varnish it again\n\n  Take some white soap and ashes strained through a sieve, and soak all together in water. And with a sponge, take some of the said ashes and soap and rub the painting with it. And when you see that the old varnish has been taken off, throw a bucket of water at the painting to clean it, then leave it for a quarter of an hour in the sun to dry and revive the colors. Once your painting is dried, you can apply your turpentine varnish.\n\n\n  at left bottom  margin of folio 004r\n\n  Make sure the colors do not come off.\n\n\n",
  id: 15
});
index.addDoc({
  title: "Black varnish for sword guards, metal bands for chests, etc.",
  author: null,
  layout: "narrative",
  content: "- - - - - 004v - - - - - \nAnnotations:\nPain, Ostie, Rostie: Bread in Early Modern Europe, fols. 4v, 37r, 79v (Le Pouésard)\n \n## Black varnish for sword guards, metal bands for chests, etc.\n\n  Take linseed oil or, for a cheaper option, walnut oil, and rid it of fat with garlic cloves and hog’s fennel (some also add bread crusts), which you will boil in it for a good quarter of an hour. Then add to one pound of the oil boiled in this way a piece of black pitch the size of a walnut and a double handful of wheat, without removing the garlic and onions, and allow to boil together for a good quarter of an hour. Once the pitch is well melted and the oil takes on body, you can remove it from the fire. Then, to varnish, place your iron over a warm charcoal fire and apply with a feather or a brush. When you see that it no longer smokes, it is done and your varnish is dry.\n\n\n  at left top  margin of folio 004v\n\n  For an excellent black varnish, add two or three paternoster beads to the rest.\n\n\n\n  at left top  margin of folio 004v\n\n  Some consider walnut oil to be better.\n\n\n\n  at left top  margin of folio 004v\n\n  If there is a quantity of varnish, it needs to boil for at least half a day, because the more it boils, the better it is. Should the varnish boil over, it is dangerous for it to catch fire and it is difficult to extinguish. So do this in a courtyard or other open space.\n\n\n\n  at left middle  margin of folio 004v\n\n  In five or six lbs. of oil, one must put one lb. of galipot, which costs 4 sols, and some peeled garlic cloves. This varnish is not black in and of itself, but turns black when exposed to fire.\n\n\n\n  at left middle  margin of folio 004v\n\n  See below, around the 3rd part of this book, after sands, in the chapter on furbishers.\n\n\n",
  id: 16
});
index.addDoc({
  title: "Black varnish without fire, without disassembling harnesses or removing metal bands from chests.",
  author: null,
  layout: "narrative",
  content: "- - - - - 004v - - - - - \n## Black varnish without fire, without disassembling harnesses or removing metal bands from chests.\n\n  Take spike lavender oil varnish and mix it with charcoal black or lampblack and, without fire, it will mix in by itself. Apply the varnish with a brush and it will soon be dry. Turpentine varnish would work quite well but it does not dry as quickly.\n\n",
  id: 17
});
index.addDoc({
  title: "Iron engravers' varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 004v - - - - - \n## Iron engravers’ varnish\n\n  Take linseed oil or walnut oil and instead of black pitch you will add some pine resin and you must cook it like black varnish on fire. And to apply it, heat your iron and apply just one layer of varnish, and when it no longer smokes, it is dry. Then engrave with a steel point whatever you want. Then take some salt and verdigris and soak it with as much of one as of the other in very strong vinegar, and leave it for XX4 hours before using it, and the whole will be soaked. Then spread this liqueur or sauce on the engraved object with a sponge\n- - - - - 005r - - - - - \nor linen cloth and leave it thus for xx4 hours and it will be engraved. But if you should want to engrave it quickly, varnish all your work and boil it in the aforementioned liquor, and this will engrave it quickly.\n\n",
  id: 18
});
index.addDoc({
  title: "Steel mirrors",
  author: null,
  layout: "narrative",
  content: "- - - - - 005r - - - - - \n## Steel mirrors\n\n  + They are called steel mirrors because in the past they were usually made of steel polished with emery paste. But more easily, various kinds are made of cuivre franc, which is rosette and tin, because these can be cast in a mold and made round, hollow, convex or in whatever various shapes you want to represent.\n\nSo take half rosette copper and half soft tin, i.e. fine and yet unused. Place them in a crucible, and first melt the copper. Once it has been well melted, add the tin and mix them together and cast that in a white stone mold with no hole, and grease the mold, which should be moderately warm, with oil. Then, once your mirror has been molded, you can polish it in this manner.\n\nSet one mirror in plaster to hold it firmly, then put the other one over it with fine sand between them, and rub one against the other, whether they are hollowed or flat, and thus you will polish both at once. If you want to polish them on both sides, you only have to switch them, which means putting the one that was polishing in the plaster and [using] the one which was in the plaster to polish. Once they have been polished with you can soften them with tripoli of Venice that should not be sandy, and then with paste. You use water with arene to polish, but polishing with tripoli and paste is done dry. Once the mirror has been polished, you can set it.\n\n",
  id: 19
});
index.addDoc({
  title: "Concave mirrors",
  author: null,
  layout: "narrative",
  content: "- - - - - 005r - - - - - \n## Concave mirrors\n\n A concave mirror shaped in the aforesaid form produces an endless number of illusions which seem like magic. If one wants to see oneself from behind, you have to place the concave mirror on the ground on its foot, at a slant, and then look at it one step further. But if you look at it from a closer position, it shows you the right way up but with the face quite large and the hairs of your beard as thick as\n- - - - - 005v - - - - - \n a string and will reflect a nipple as large as a plate, and women can see the secret places they do not want to show to surgeons. It projects the reflection outwards, and if you touch with your finger the eye of the reflection, another finger will come against yours. You will be able to provide light at night for someone quite far away, if you set the concave mirror behind a candle placed on a window sill. You will be able to read and write quite far from the candle if you set it behind the candle and turn the concave face towards you. If you put the mirror at the far end of a table with a candle on it, it will reflect two lights on the table for you. To see what is happening in a street, shut the window, or the more you can shut the better, make a hole in the bottom pane, the size of your little finger, perfectly round all the way through. Then apply a sheet of paper onto the window and let the middle of the sheet be over the hole. Pierce the sheet in the same place as the hole and of the same size. Then turn the concave face of the mirror towards the hole, and anyone passing by in the street will be reflected on the sheet of paper. Do the same with the pierced door of a closed room. You can make wavy mirrors and triangular ones, such as are described by Ptolemy and Archimedes. The concave sort can also set fire to straw or light a candle from afar, using the sun. By reverberating fire too, it can provide warmth.\n\n",
  id: 20
});
index.addDoc({
  title: "For bronzing in yellow and white",
  author: null,
  layout: "narrative",
  content: "- - - - - 005v - - - - - \n## For bronzing in yellow and white\n\n Take mirror tin and melt it. On half a pound of this, put half an ounce of quicksilver, and remove it immediately from the fire and grind it until it is like ashes. Wash it thoroughly in clean water, then grind it on a marble slab and soak it with water of colle de retailles. Then apply that on your wooden candlesticks and any other works you like, and burnish with a tooth. You can grind pin filings and apply them with the said colle de retailles.\n\n",
  id: 21
});
index.addDoc({
  title: "To lay down and set burnished gold and give it a red or green or blue hue",
  author: null,
  layout: "narrative",
  content: "- - - - - 006r - - - - - \nAnnotations:\nRouge Clair, fol. 40v (Chang, Shi)\n \nAnnotations:\nEsmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi)\n \n## To lay down and set burnished gold and give it a red or green or blue hue\n\n  Ceruse and lead white is not appropriate for polished white nor for burnishing because it is fat, but it is quite good for matte gold, which is made with oil by mixing it with yellow ochre and mine and tempering the whole with oil, and this matte gold so applied lasts in the rain, like gilded leadwork and similar things. Therefore, for burnished gold take good chalk, quite white, well ground and soaked with distemper glue and do four coats of it, one after the other, on the wood. And when the last one is dry, rub it with prêle, which is a kind of grass otherwise named horsetail, to render it well polished. Afterwards, take fine Armenian bole and sanguine, as much of one as of the other, a bit of lamb tallow the size of a bean or a pea depending on the quantity of bole, and a little willow charcoal, or as much as the tallow, and half a walnut shell filled with half—burned saffron; some put in a little candi sugar. Grind everything together with water and apply it without gum or glue, and let it dry. And rub the place that you would like to gild with a piece of white cloth to better unify it, and when the rubbed place is a little shiny it is a sign that the gold will behave well. After rubbing, wash the place that you want to gild with a clean brush soaked with clear water and apply the gold at once, which you will burnish when dry. And if you want to set rouge clair and glaze with it, grind Venice lake on the marble with walnut oil or linseed oil. After grinding, mix in turpentine varnish or spike lavender varnish and apply on gold with the brush. Brazilwood and laque ronde fade. For green, temper verdigris with walnut oil or linseed oil and grind it, then mix in some turpentine varnish; not aspic varnish, which is not suitable for verdigris. If you want to glaze with azure it must be set on burnished silver. Take azure enamel, and without grinding temper it with turpentine varnish and apply it.\n\n",
  id: 22
});
index.addDoc({
  title: "For cages",
  author: null,
  layout: "narrative",
  content: "- - - - - 006v - - - - - \nAnnotations:\n\"For Cages\" and Glassmaking in Ms. Fr. 640: fol.6v\n \n##  For cages\n\n  You can embellish them with thin enamel canes of various colors by covering the yellow latten or iron wire with said canes. These you will break neatly into the length that you want if you make a small notch with a cutting file at the point where you want to break them, and they will not break anywhere else. You can bend them with a wooden model over a brazier or by the heat of a lamp. A cane can be stretched out as long as you want in a small furnace made like a reverberatory oven but with openings on both sides. And once the large cane is red, they seize the hot end of it with small pincers that have long beaks, with one end of the beak inside the end of the cane, so that it may be stretched without becoming blocked. The other end of the cane is held with the hand, as it is not hot. Once the cane is stretched enough, the one who is working seated with his stove, the size of a carnation pot, placed in front of him, breaks it off and carries on. This is for making cane for capes, which may be cut, as already mentioned, with a file. Glass—button makers also use the said stove. \n  \n&gt; at left middle  margin of folio 006v\n&gt; \n&gt;  Under the door is a grill that supports the burning charcoal. The ash is emptied by turning the stove upside down.\n\n",
  id: 23
});
index.addDoc({
  title: "For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances",
  author: null,
  layout: "narrative",
  content: "- - - - - 006v - - - - - \n##  For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances\n\n   Etch with aqua fortis on iron or copper whatever you have pounced and drawn there, next make it neat with a burin or chisel. Then pour soft tin, yet unused, onto polished marble and flatten it, making it quite thin, with a wooden board. Or else pour it on a table as is done with lead, or put it through a roll—press. Next lay your tin plate over the engraving, and over the tin plate put a piece of felt and strike it with a hammer. Then gild it in the following manner.\n\n",
  id: 24
});
index.addDoc({
  title: "To gild with gold color and tinsel",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n##  To gild with gold color and tinsel\n\n Once you have colored or made your stamped ornament in tin (as previously described), or in iron or copper, you must not put glue as on wood, but just have some fatty oil, which is made in seven or eight days in the sun from walnut oil and white lead, stirring often, or cooked on fire if one should be in hurry. Then, with  the oil thus made fatty, grind a little white lead, massicot and black graphite, at discretion, as much of one as of the other. Minium will color the gold. Then apply an even layer of that onto your stamp, taking care you do not fill the hollows. And once it is almost dry, apply the gold leaf on it using cotton. Such gold will withstand rain on houses or elsewhere. And if you have made your gilt with tinsel, color it with smoke from a partridge or from yellow or red cloth, and it will look as fine as pure gold. You can cover trunks, mirrors, bed valances and posts in colored velvet or satin and then apply the gilded stamped ornament on them with strong glue.\n\n",
  id: 25
});
index.addDoc({
  title: "To color stamped ornaments for trunks",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n##  To color stamped ornaments for trunks\n\n  The stamped ornament made from sheets of copper or latten are made with wood from a service tree engraved and cut, should you want to spend less. Next, the stamped piece is colored with the aforesaid lacquer colours of lacquer, verdet, blue enamel, and soaked in turpentine varnish. But wherever you want to make it azure, apply some fer blanc, which is more appropriate for an azure background.\n\n",
  id: 26
});
index.addDoc({
  title: "Doublets",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n##  Doublets\n\nGood dragon’s blood soaked in spirits produces its own mastic or glue. So do vert de vessie and saffron.\n\n",
  id: 27
});
index.addDoc({
  title: "Fish glue or usblac and mouth glue",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n##  Fish glue or usblac and mouth glue\n\nIt is made from codfish skin that has been boiled rather than salted. Joiners use it on their masterpieces and guitar makers use it for their more delicate works. It needs to be strongly whipped, then soaked gently in barely boiling water.\n\nMouth glue is made of parchment scraps and used to glue paper or similar things without fire, by wetting it with one’s mouth.\n\n\n  at left bottom  margin of folio 007r\n\n  It is whipped and left to soak in white wine for one night, then melted over a low heat. Others soak it in spirits.\n\n\n",
  id: 28
});
index.addDoc({
  title: "To give the color of all kind of metals and woods and other things",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n## To give the color of all kind of metals and woods and other things\n\n   Take touchstone and pumice stone as much of one as of the other and grind them together, mix that with a colle de retailles stronger than that used for painting, and apply a layer of it on whatever you like. Once dry, rub this layer on any metal whatsoever, then burnish it.\n\n",
  id: 29
});
index.addDoc({
  title: "Against windy colic",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n## Against windy colic\n\n Take a dozen dried common walnuts and throw them one after another onto a good brazier where they may catch fire, and take them out with tongs, and let them burn and flame well in the air, and extinguish them in a glass of good wine. Then let the wine cool and filter it, then pour half of it, since six extinguished nuts make one dose. An excellent cure against suffocation of the matrix.\n\n",
  id: 30
});
index.addDoc({
  title: "To relieve the pain of g{out}",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n## To relieve the pain of g{out}\n\n  Take half a pound of finely powdered golden and yellow marcasite, half an ounce of storax, 4 lb. of urine, incorporate well together, little by little, in a mortar, then boil all together quite strongly. But the pot needs to be well covered so the smoke does not escape. Then distill the imbibed urine, separated by inclination, in an alembic, well luted and covered with a copper head. And soak a cloth with the said water and apply it lukewarm on the pain.\n\n",
  id: 31
});
index.addDoc({
  title: "Against gonorrhea",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n## Against gonorrhea\n\n  Cook .i. lb. of old smiths’ water, .i. ℥ of Armenian bole reduced in the finest powder, and .iii. ʒ of common honey, until the honey stops foaming. Once cooled, strain with great pressure and use the results of filtration by injection.\n\n",
  id: 32
});
index.addDoc({
  title: "Gold lettering on paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n## Gold lettering on paper\n\n  Write with fig tree milk then let it dry a little, afterwards apply the gold in leaf and, once quite dry, rub with linen and only the lettering will hold.\n\n",
  id: 33
});
index.addDoc({
  title: "To explode grenades and give force to fireworks",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n## To explode grenades and give force to fireworks\n\n  Put into the powder one sixth as much of quicksilver\n\n",
  id: 34
});
index.addDoc({
  title: "Tempering bullets to pierce bullet-proof armor",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n## Tempering bullets to pierce bullet—proof armor\n\n Heat the lead bullet as much as you can without melting it, and once it is hot dip it into the strongest vinegar that you can. And do this four or five times. Afterwards, mince some lard very finely and some linen also very delicately, mix all this together and use it as wadding, making it go into the arquebus or pistol with a little strength and very tightly. And before shooting, if possible, the bullet should be hot.\n\n",
  id: 35
});
index.addDoc({
  title: "To make a breach in a wall by night",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n## To make a breach in a wall by night\n\n Having made a hole in a wall as you know, put one mortar inside, charged with powder, almost flat, and another upright, then fill in the hole and fire.\n\n",
  id: 36
});
index.addDoc({
  title: "To polish a ruby balay",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n## To polish a ruby balay\n\n Unlike others, you don’t polish it with tripoli, but with marcasite powder and oil.\n\n",
  id: 37
});
index.addDoc({
  title: "Ground gold and ground silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n## Ground gold and ground silver\n\nYou have to calcine your pure gold with ☿ and then let your amalgam dry well and the said mercury fly off. Then crush it on marble with gummed water. As for silver you have to use it in its raw form and corrode it with aqua fortis, then take it out with a copper blade and rinse it well and then grind it with gum water.\n\n",
  id: 38
});
index.addDoc({
  title: "Polishing stones",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n## Polishing stones\n\n There are three wheels for this purpose, one of tin, one of lead, and one of pure copper. On the copper wheel, only diamonds, rubies, sapphires and oriental jacinths are usually polished. The tin wheel is for softer stones such as emeralds, amethysts and others.\n\n",
  id: 39
});
index.addDoc({
  title: "Pewterers' mixture",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n## Pewterers’ mixture\n\n Because they often mix in with the pure tin half the quantity of lead, which renders the tin deaf. To correct this, they mix in some latten filings to make it resonant.\n\n",
  id: 40
});
index.addDoc({
  title: "Perfect amalgam",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n## Perfect amalgam\n\n Take the finest sandstone you can find and make a cavity in the middle. And put in it an eighth part of ☿ and rub it and wear it down while adding some water with ☾ or ☼ until the material becomes paste—like and even harder. Then, if you want, corrode it with good aqua fortis, if it is ☾ or ♀. Then melt it again, having taken it out as you know. The ☾ will have some color, and after being melted it will leave some flecks of ☼, and the ♀ will be very fine and will have almost no covering.\n\n",
  id: 41
});
index.addDoc({
  title: "Plowman",
  author: null,
  layout: "narrative",
  content: "- - - - - 009r - - - - - \n##  Plowman\n\n Since millet is naturally very dry, harvesters thresh it most often in the cool of night and in moonlight. Which could not be done with another, wetter, grain, because you must let the sunbeams pass over it, and one rarely threshes it before midday. Immediately after the millet is harvested, the earth needs to be plowed because its roots eat and make lean the soil as much as if the millet was still standing. The ground where millet will have been sown becomes quite diminished in fertility, which you can tell next time it is sown. But more than any other the grain called pomole in Gasconyor or baillard in northern France, makes the earth shake, according to the common saying, seven years later. Broad beans improve and enrich the soil, provided that one lets the roots and stems rot in it.\n\n",
  id: 42
});
index.addDoc({
  title: "Painters",
  author: null,
  layout: "narrative",
  content: "- - - - - 009r - - - - - \n##  Painters\n\n After laying down their colors, some smooth it with the back of a feather but the large brush is best.\n\n",
  id: 43
});
index.addDoc({
  title: "Merchants",
  author: null,
  layout: "narrative",
  content: "- - - - - 009r - - - - - \n##  Merchants\n\n  They commonly have four books. The tiro, which is a formulary for apprentices, by which they can know how much every item of merchandise costs and for how much it should be sold. The second is the waste book, where they put down in rough what they sell daily. The third is the sales book, where they put down the clean copy and detailed account of what is contained in the waste book. The fourth is the ledger, which mentions the sale, the balanced account, the bill and the term of payment, and this book is accepted as evidence in court.\n\n",
  id: 44
});
index.addDoc({
  title: "Painters",
  author: null,
  layout: "narrative",
  content: "- - - - - 009v - - - - - \n##  Painters\n\n  They melt orpiment entirely in a glass bottle on very hot ashes, but it would be more appropriate to sublimate orpiment in a long—neck matrass as for making garnets. The orpiment thus turns red like red enamel and it has to be ground first in distemper, because once entirely melted it is very brittle and difficult to grind. Then, once dry, you can thin it with oil and it will make a deep and saturated yellow. But to prevent orpiment from fading in contact with other colours and make it compatible with these and to make it dry quickly, a most rare secret is to calcine common salt and to grind it together with the orpiment. Green verditer is not used with oil.\n\n",
  id: 45
});
index.addDoc({
  title: "Merchant",
  author: null,
  layout: "narrative",
  content: "- - - - - 009v - - - - - \n##  Merchant\n\n  The order that merchants are accustomed to keep in their books, which are the waste book, the sales book, and the ledger, also called the account book.\n\n",
  id: 46
});
index.addDoc({
  title: "Waste book",
  author: null,
  layout: "narrative",
  content: "- - - - - 009v - - - - - \n## Waste book\n\nFirst, François du Cros owes from 2 September 1581, for 1 canne de batiste at 8 livres per canne, total —— 8 livres tournois.\n\n\n  at left middle  margin of folio 009v\n\n  Moved to the sales book at r. 25/ François du Cros owes from 2 September 1581, for 1 canne de batiste at 8 livres per canne, as shown by the waste book at r. 25\n\n\n\n  at left middle  margin of folio 009v\n\n  Moved to the account book at r. 55/ François du Cros owes from 2 September 1581, for the merchandise taken by himself, as specified in detail in the sales book, No. 7, at r. 55, the sum of 8 livres, of which the aforesaid du Cros has made a bill on the aforesaid day, to be payed on Saint Andrew’s day next, total —— 8 […] r.\n\n\n",
  id: 47
});
index.addDoc({
  title: "Imitation jasper",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \nAnnotations:\nImitating Raw Nature, fol. 10r (Lores-Chavez and Kang)\n\nJasper Imitation on Horn\n \n## Imitation jasper\n\n  Take horn as is used to make lanterns, quite thin, and underneath imitate your jasper, cornaline, and other stones. That will look more appropriate than doing it on glass, which is too shiny. And the horn gives a lustre and a fatty polish similar to jasper.\n\n   You know how you can imitate roses with scrapings of the said horn. The colors for this jasper need to have as a base clear turpentine or spike lavender varnish. And matte, opaque colors are not appropriate, no matter how fine they are. You have to oil the unpainted underside with spike lavender oil.\n\n\n  at middle top  margin of folio 010r\n\n  Thin glass looks very fine for this effect\n\n\n\n  at left top  margin of folio 010r\n\n   You can inlay beds with it, and on the joints you can throw talc or metal filings on the fresh cement of the said joints. You have to bond them with gum amoniacum soaked in vinegar. To better imitate marbled jasper, apply coarse wool hair dyed various colors and intermingled. After you have laid down all the colors, scrape oblique lines into them then lay down gold leaves and silver leaves. If you lay down colors made of turpentine on the horn, give it a backing of silver leafor of tin leaf. You can also file horn and mix it with strong glue and lay it down onto the joints of the horn piece and finish with a joiner’s plane.\n\n\n",
  id: 48
});
index.addDoc({
  title: "Scudegrun",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \nAnnotations:\nColor for Green\n \n##  Scudegrun\n\n  It is made in Lyon from the juice of weld mixed with chalk or better yet with ceruse, which is appropriate for tempera and oil.\n\n",
  id: 49
});
index.addDoc({
  title: "Roses",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \n##  Roses\n\n  These are imitated either with the scrapings of horn used for lanterns, or with very light, fine and dyed parchment scrapings, used as you know.\n\n",
  id: 50
});
index.addDoc({
  title: "Purple color",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \n##  Purple color\n\n  Painters make it beautifully by first applying an undercoat of ordinary azur, or better yet azure enamel, and then they glaze it with lacquer, which will be more appropriate for this if you mix in alum, which will give it a violet tint depending on the quantity that you mix in.\n\n",
  id: 51
});
index.addDoc({
  title: "Powder for hourglasses",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \nAnnotations:\nPowder for Hourglasses\n \n## Powder for hourglasses\n\nIt must be made very fine and not subject to rust and with enough weight to flow. Taking i lb. of lead, melt it and skim and purify it from its filth, then pour into it four ℥ of finely ground common salt, and take care that there are no stones or earth. And immediately after pouring it, stir continuously very well with an iron tool until the lead and salt are quite incorporated, and take it immediately off the fire, stirring continuously. And if it seems too coarse, grind it on a marble slab and pass it through a fine sieve, then wash it as many as times as necessary until the water runs clear, throwing out the fine powder that will float on it, renewing the water as many times as necessary until it is completely cleared.\n\n",
  id: 52
});
index.addDoc({
  title: "For painting in oil on taffeta without the oil running",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \nAnnotations:\nOil on Taffeta\n \n## For painting in oil on taffeta without the oil running\n\n One needs to make a layer of batture, which is made of colle forte soaked for 24 hours in water then gently boiled so it is not too strong. Then stir in a little honey to soften it, and bring it all to a boil. And on top of this layer, which will soon be dry, you will be able to paint in oil, which will soften the layer even more, and which will also serve to make an underlayer for gold. Alum water also keeps oil from running.\n\n",
  id: 53
});
index.addDoc({
  title: "Underlayer for gold leaf on parchment or paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \nAnnotations:\nGilding on Paper and Parchment, fol. 10v, 29v (Goldenberg)\n \n## Underlayer for gold leaf on parchment or paper\n\n   Make very clear starch glue, showing little body. And apply six or five layers, and when the last is almost dry, apply your gold to it.\n\n",
  id: 54
});
index.addDoc({
  title: "For cleaning gold leaf applied to iron",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \n## For cleaning gold leaf applied to iron\n\n  Rub your weapons or other gilt objects with dry horse dung.\n\n",
  id: 55
});
index.addDoc({
  title: "For whitening ceruse",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \n## For whitening ceruse\n\nHard—boil some eggs, cut them in half and take the yolks out, and between the two halves of the white put a bit of ceruse, and tie the two halves together with thread. Then boil in clear water, and it will become black, and thus the ceruse will be purified. Some reheat it over fire and it becomes very white.\n\n",
  id: 56
});
index.addDoc({
  title: "Painting enamel azure in oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 011r - - - - - \nAnnotations:\nAzure Enamels, fol. 11r, 59r, 61v, 93v (Chang, Clemens)\n \n## Painting enamel azure in oil\n\n  This is a secret that is hardly known to common painters. Some take the most delicate they can &amp; crush it with ceruse, which binds it, and next prick with an awl in several places the area they want to paint with azur d’esmail, such that the oil enters &amp; leaks in, &amp; does not cause the azure, which in itself is heavy, to run. Others lay the panel flat &amp; apply the azure on it, which is also done à destrempe. The main thing is to crush it well on marble, and before that, to have washed it thoroughly. Some grind it with thoroughly with an egg yolk &amp; then wash it in five or six lots of water and lay it on not with a painceau, which would be too soft, but with a broisse highly softened &amp; bent, &amp; laying it on thickly as if one were applying it with a trowel; settling down it evens out and flattens. I have experienced that crushing azur d’esmail with egg yolk &amp; then washing it in several lots of water is good, although it loses a little of its vividness in the crushing of it. I have also washed it in several lots of water &amp;, when it had settled a little, I removed the water, still q blue, with a sponge and squeezed it into another vessel thus where it settled, &amp; from the residue I had the ash, flower and subtlest part of the azure without crushing it, which is the best, for in the crushing of it, it loses some of its color. Those who make it in Germany compose it like enamel, in large pieces which they pestle, &amp; pass through several sieves &amp; wash.\n\nTo make azures beautiful, they wash or soak them in a rock water, as they call it; it is a water distilled from mines where azure or vert d’azur is found, which distills naturally through the mountain’s veins or is distilled with an alembic par from &gt;mineral stones of azure or copper.\n\nAzure ashes are only good for landscapes because they die in oil. Only true azure lasts. Azur d’esmail cannot be worked if it is too coarse. Try it, therefore, on the fingernail or the oil palette. If it happens to be sandy, do not crush it except with the egg yolk or, better yet, wash it in clear water &amp; with a sponge remove the colored water after it starts to go to the bottom, and in this manner you will extract the quite delicate flower, which will be easy to work with.\n\n",
  id: 57
});
index.addDoc({
  title: "Applying the color of Damascene steel on knives",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n## Applying the color of Damascene steel on knives\n\n  Rub the steel with common aquis fortis mixed with earth. After, rub everything with ashes or sand. Do with the gold and silver as you would do on a touchstone.\n\n",
  id: 58
});
index.addDoc({
  title: "Getting rid of red eyes or black eyes",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n## Getting rid of red eyes or black eyes\n\n  Make two small licks of raw mutton flesh, and with a blindfold, apply it at night on your eyes.\n\n",
  id: 59
});
index.addDoc({
  title: "Applying unpolished gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n## Applying unpolished gold\n\n  There is nothing better than the black varnish of sword—makers to use as a base layer because it dries quickly and makes the gold appear very beautiful.\n\n",
  id: 60
});
index.addDoc({
  title: "Making diamond points for engraving",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n## Making diamond points for engraving\n\n  These are for sketching what you want to draw on stones and for engraving. When these points are too dull and cannot engrave, it is necessary to rub diamond against diamond; one can rub them with pumice stone powder. It is necessary to strip what you want to engrave on a lead wheel or with a stone or with glass, because the polishing is like varnish or glass and stops the diamond or sapphire from engraving well. This is why it does not engrave easily on horn, which is polished and fat. But when the polish has been taken off, it is easy to engrave.\n\n",
  id: 61
});
index.addDoc({
  title: "Polishing a copper wheel",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n## Polishing a copper wheel\n\n  Instead of polishing your stone, it is necessary to remove the grease by rubbing the flesh side of a piece of leather on the wheel, all while spinning the wheel if you have not worked on it in a long time.\n\n",
  id: 62
});
index.addDoc({
  title: "For molding from sulfur",
  author: null,
  layout: "narrative",
  content: "- - - - - 012r - - - - - \nAnnotations:\nSulfur and Additives\n \n## For molding from sulfur\n\n  Sulfur is made beautiful by mixing in soot black or powdered sanguine, which makes it harder and stronger. After letting it melt entirely until it becomes liquid and similar to oil, then mixing it with verdigris, you can use it for casting a lizard or something else in plaster, very cleanly.\n\n\n  at left top  margin of folio 012r\n\n   You must not cast it until it has cooled down and lost all its bubbles and eyes, and its surface has fallen and become flat as water. Soot black gives it a fine luster and makes it neater. Use yellow sulfur of the best kind, as the greyish natural sulfur is no good. Don’t cast it in the wind and cold for it would fill with bubbles.\n\n\n",
  id: 63
});
index.addDoc({
  title: "Paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 012r - - - - - \n##  Paper\n\n   The whitest and thinnest is the best. And when the hollow mold is quite clean, as when it is made of sulfur or baked cimolee, the paper comes out very clean. You can apply a layer or two of white, with a border of gold, to imitate alabaster. And after applying the white you may burnish it with a tooth.  Yet in order for it to take burnish you should soak the lead white with egg white and peelings from the fig tree. Or better still, varnish your work with white varnish. Also while you are molding with paper, as it starts drying, burnish the back of it with the tooth.\n\n",
  id: 64
});
index.addDoc({
  title: "Plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 012r - - - - - \n##  Plaster\n\n   Mountain plaster is greyer, and that from the region of Albi is whiter. It has to be heated over a closed fire, such as a reverberatory furnace or fours de barbiers. The more freshly heated, the better it is to work with. It should be finely crushed on marble. After preparing your hollow mold of sulfur or another [material] and oiling it and surrounding it with a circle, soak your plaster in water, not too thick, and rub it well with your finger, and if it makes bubbles, throw on more powder of the said plaster and crush it with your finger until +\n\n\n  at left bottom  margin of folio 012r\n\n   + it makes no more bubbles. Then once more throw and sprinkle plaster powder on top and leave to set well, then scrape the powder off.\n\n\n",
  id: 65
});
index.addDoc({
  title: "Moulding stucco promptly",
  author: null,
  layout: "narrative",
  content: "- - - - - 012v - - - - - \n## Moulding stucco promptly\n\n   Crush and pulverize finely brick or Armenian bole or sanguine and incorporate it with melted wax, and thus melted, cast like the others on a relief medal, and so you will have a hollow mold where you will be able to cast ground paper or cimolee.\n\n\n  at left top  margin of folio 012v\n\n  Finely sieved brick is better, since bole is too fat\n\n\n",
  id: 66
});
index.addDoc({
  title: "Cleaning yellow pearls",
  author: null,
  layout: "narrative",
  content: "- - - - - 012v - - - - - \n## Cleaning yellow pearls\n\nGently boil them in a goldsmith’s bouteure then, with tripoli and a small piece of leather, sprinkled on the flesh side with the powder of the said tripoli, rub and polish the pearl.\n\n",
  id: 67
});
index.addDoc({
  title: "To whiten enilanroc",
  author: null,
  layout: "narrative",
  content: "- - - - - 012v - - - - - \n  \n## To whiten enilanroc\n\nSome believe the ceruse—color crust that is on top to be natural. Others say that it is a lost secret of ancient lapidaries. Others say that it is enamel that has been reheated. And, from this crust, one can form multiple ciphers, letters, circles and other bizarre motifs. As to the means, I proceeded thus: I once wanted to add a layer of arsenic ground on marble. However, I did the experiment without it, and I put the above mentioned thing, enilanroc, in a small iron casket on the fire of my goldsmith’s forge with three or four small half—burnt coals and blew on it only with my mouth. However, the thing caught fire and became all white, not only on its surface but also inside. And then I let it cool on its own near the fire, since otherwise, exposing it suddenly to cold air, it would have cracked. While it was all white, I passed it through my lead wheel and I found it to be as hard as it was before. And after scraping off a little of the white, I found it to be of a clear fleshy tone. Finally, I polished it and observed that it took quite a beautiful polish luster and that it could compare with a quite beautiful agate for the purpose of engraving it with some beautiful face and applying it to a table of\n- - - - - 013r - - - - - \nagate of various colors. But because this overall whiteness did not correspond with the white crust on the surface that I was seeking, leaving the rest of the thing its natural color, I made a hole in a brick, precisely the same size as the object, and put it inside. Then I heated two glassmaker’s soldering irons until they became red hot and, when they were red hot, I applied them one after the other onto the surface of the object until I got the white crust I was looking for, on which I made the drawing that I wanted, revealing the red background, with a diamond point, and I polished it with hog bristles and tripoli. I don’t know if it would be better to reheat it under hot ashes, and if it would be good to encase it in alabaster, which is quite cold, as I did in the brick.\n\n",
  id: 68
});
index.addDoc({
  title: "Flesh color with arsenic",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n \n## Flesh color with arsenic\n\nSublimated arsenic, that is to say, the white kind sold as stone, when powdered on marble, mixed with vermilion or lake or mine, produces a beautiful flesh color that always shines. Yellow arsenic has a very beautiful color, the white one works well in oil and goes well with lake.\n\n",
  id: 69
});
index.addDoc({
  title: "To dye",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n \n## To dye\n\nMix sal ammoniac and vitriol and boil them together. Then mix in lake or verdigris and azure or similar colors, and dye. This will not come off unless the animal sheds. @Non bona.\n\n",
  id: 70
});
index.addDoc({
  title: "Polishing of stones",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n \n## Polishing of stones\n\nEngraved stones are not polished on a copper wheel, but with brushes and tripoli. Yet faceted and flat stones are polished on the said wheel.\n\n",
  id: 71
});
index.addDoc({
  title: "Fine sieves of raw silk",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n## Fine sieves of raw silk\n\n  Tammy of raw silk is made on a weaver, to make very fine and delicate sieves. And for that effect, you must not choose raw silk whitened by sulfur smoke: this covers the silk in a sticky vapor that would hold the flour and in the end would prevent it from\n- - - - - 013v - - - - - \npassing through so well. But for this effect, choose yellow and natural raw silk because it is stronger and rejects flour as horsehair does.\n\n",
  id: 72
});
index.addDoc({
  title: "Candles",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n \n## Candles\n\nCandlemakers never make good candles when the autan wind blows because they always melt, however good is the tallow they use in them.\n\n",
  id: 73
});
index.addDoc({
  title: "Whitening pearls",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n \n## Whitening pearls\n\nWhen they have been applied in embroidery on some garment, they are greasy and may be cleaned in soapy water.\n\n",
  id: 74
});
index.addDoc({
  title: "Toadstone",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n##  Toadstone\n\nThat which comes from the head of the toad and has the shape of the toad, painted naturally as you have seen, is the most excellent. It is said that if powder made from it is put on a brazier in someone’s room at night, they will be unable to move, speak, or stop thieves.\n\n",
  id: 75
});
index.addDoc({
  title: "Snakes",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n \n##  Snakes\n\nIt is said that if one calls a snake in Greek, saying ΟΦΗ ΟΦΗ, it will flee. Similarly, that if one calls a swine in Greek, ïon, it will come.\n\n",
  id: 76
});
index.addDoc({
  title: "For earth walls and rustic construction",
  author: null,
  layout: "narrative",
  content: "- - - - - 014r - - - - - \n \n## For earth walls and rustic construction\n\nSwallows have taught us this craft by building their nests out of mud mingled with wisps and bits of hay or straw to make it bond. Therefore, in places where stones and bricks are lacking, one can use earth to make walls thin and thick. The best for this is light earth, which does not form clumps when plowed, or better, that which in some way mingled with arene, because it can be most easily beaten and tamped down. It is true that it needs to be dampened and cut into clumps with a ditch—spade, and put and placed in this form. This one lasts more and does not require that much effort, and dryness doesn’t make it split or crack. However, since such kinds of earth are not found everywhere, those who live on good and fertile land, after drawing the width and length of their foundations with a rope, drive in long poles and rafters along the edges on each side to support boards between which they throw the earth, making each layer about one foot thick, interspersed with S.S.S—shaped branches of heather or similar things, then they tamp it down and beat it with beaters of three different forms. One is called the mall, which has a triangular form like A, and this is used firstly to tamp down the earth. Then one uses another made of pointed woodblocks fitted onto a thick stick, and this one is used to properly press the earth at the wall’s ends and edges where they adhere to the boards, and is called [blank]. The other one is called the bat and is used to flatten and beat the earth for the last time, as shown in C. Then one makes another layer of earth and heather and beats as has been said, and continues thus until completing the wall, which is covered with heather and then with earth. Some intersperse the said wall with rows of bricks. They also make walls with a sloped foot, adding width to the foundations according to how high they want to build the wall. When it is old it whitens, showing that it has saltpeter in it. Which is why, when they fall down, gunpowder makers profit from them.\n \n",
  id: 77
});
index.addDoc({
  title: "Damask Cloth",
  author: null,
  layout: "narrative",
  content: "- - - - - 015r - - - - - \nAnnotations:\nDamasked Cloth\n \n \n## Damask Cloth\n\nYou can make damask cloth of two different colours and imitate embroidery without adding anything else to it, as follows. Once it is is dyed yellow, pounce onto it such a pattern as will please you. Then you will sew some string or a bigger cord loosely onto the pattern and throw it into a dye of woad or pastel and it will become green, except that which is beneath the string, which will remain yellow because the green dye will not have penetrated there. And you can do the same with other colours and, instead of string or cord, add some pieces of poor quality cloth cut in Moorish shapes on top of the first colour. In that manner, you will have cheap embroidery.\n\n",
  id: 78
});
index.addDoc({
  title: "Casting metals",
  author: null,
  layout: "narrative",
  content: "- - - - - 015r - - - - - \n \n## Casting metals\n\nCandlesticks and small works are cast in a frame with sand. Having stamped the work, sprinkle it with flour in order to make the copper or latten run better. When the sand has been in use for one month, it is necessary to take some new sand because that which has been used, being reheated +, dries &amp; loses its binding power. Yet it is used mixed with the new sand, because it makes the work less porous. Large works such as artillery, bells and similar things are cast in earth, and copper cast in earth makes less crust and is whiter than when cast in sand. The earth is sandy clay mixed with horse dung and cloth waste. The earth that has been used for casting, which is black, baked and as if burnt, is mixed with artificial sand, and is very good. For softening and making the copper run, once it is melted, one throws in some lead, which does not form an alloy but is found on the surface of the cast.\n\n\n  at left middle  margin of folio 015r\n\n  + by the heat of molten metal\n\n\n",
  id: 79
});
index.addDoc({
  title: "Casting gold and silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 015r - - - - - \n \n## Casting gold and silver\n\nThe sand must be made from something very dry and arid and reheated well because, if it were humid, like founder’s sand, the gold and silver would leap out of the mold and sustain damage. It is also necessary for the earth to absorb the metal because cast gold or cast silver becomes very porous. That is why it must be beaten out again, otherwise it is brittle, as seen in spoon handles.\n\n",
  id: 80
});
index.addDoc({
  title: "Ears",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n \n## Ears\n\nWhen a defluxion occurs in the ear, be very careful not to put anything in it, and following the proverb, ears and eyes should only be touched with your elbow. However, to an affected ear, it is good to apply musky cotton, that is to say, cotton kept in musk, which comforts quite well.\n\n",
  id: 81
});
index.addDoc({
  title: "Making letters easier to read",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n \n## Making letters easier to read\n\nOne cuts the largest pieces of beryl or crystal round on one side and flat on the other, then one fits it with a little handle and puts the flat side on the letter\n\n",
  id: 82
});
index.addDoc({
  title: "Stamping",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n \n## Stamping\n\nIf you have a bronze medal and you want to make it very light, make a lead cavity, then spread upon it a thin plate of gold, or sheets of lead or reheated silver, place your bronze medal on top and hammer it with a wood mallet.\n\n",
  id: 83
});
index.addDoc({
  title: "Softening horn",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n \n## Softening horn\n\nThose who mount acou Agnus Deis and make circles from horn for certain little boxes soften the said circles by soaking them in hot water and then shape them on a round or oval—shaped triblet.\n\n",
  id: 84
});
index.addDoc({
  title: "Toothache",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n \n## Toothache\n\nSome put a clove of garlic in the ear on the side of the aching tooth, and after two or three hours they feel better. Others put in their nostril, on the same side as the tooth that hurts, some green skin scraped from the stem of bisaube, namely that which is under the grey one that looks like a vine.\n\n",
  id: 85
});
index.addDoc({
  title: "Black color for dyeing",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \nAnnotations:\nBlack color for dyeing\n \n## Black color for dyeing\n\nTake lye made from quicklime and white lead, mix and leave to soak and you will have a dark brown dye, and reiterating the same you will make black. Try other colours with the lye made of lime.\n\n",
  id: 86
});
index.addDoc({
  title: "Against nose bleeding and for dyeing",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \nAnnotations:\nDragon’s Blood, fol. 29v, 38v (Reich)\n \n## Against nose bleeding and for dyeing\n\nPound some of the kind of vinete or lapathum acutum that is red—veined, which is called dragon’s blood, and apply it on the bleeding person’s forehead. This herb is a strong dye &amp; makes beautiful violet.\n\n",
  id: 87
});
index.addDoc({
  title: "Beautiful artichokes",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n## Beautiful artichokes\n\nYou need to trim them every year so that only one stem is left, and water them a lot. Also plant some more every year, because the second year they will bear very beautiful fruits.\n\n",
  id: 88
});
index.addDoc({
  title: "Planting trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n## Planting trees\n\nIt is said that rarely a tree planted on Saint Paul’s day will fail to take. To cover the young shoots, oxen manure is very appropriate, for it doesn’t come apart in the rain like earth.\n\n",
  id: 89
});
index.addDoc({
  title: "Merchants",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n## Merchants\n\nThose who retail velvet and other materials do not keep double—entry books because they sell in small quantities and recording these details would be too much effort. They only have their sales book and account books. But those who sell in bulk and those who traffic in woad have a double—entry book.\n\n",
  id: 90
});
index.addDoc({
  title: "Goldsmith",
  author: null,
  layout: "narrative",
  content: "- - - - - 039r - - - - - \n## Goldsmith\n\nThey bind silver filings with saltpeter which refines it &amp; does not make it brittle. But gold filings are bound with borax or, to save the borax, with lead, which refines the gold &amp; softens it, for the saltpeter would make it brittle, which it does not do to silver. This is why, in order to save, goldsmiths use it to bind it in order to save borax, which costs viii sols per ounce &amp; saltpeter costs x sols per lb. When goldsmiths have thus bound their silver filings with salpeter, a red enamel vitrifies at the bottom of the crucible. I do not know if the copper mixed in with the silver is the cause for this. Try for enamel.\n\n",
  id: 91
});
index.addDoc({
  title: "Dyers’ woad",
  author: null,
  layout: "narrative",
  content: "- - - - - 039r - - - - - \n## Dyers’ woad\n\nIt is grown in Lauragais where the deep soil is so fertile that every year wheat was grown there, it would lie flat for being too vigorous. This is why dyers’ woad and wheat are grown there alternately. For cultivating dyers’ woad, the soil is ploughed with iron shovels, as gardeners do. Next, it is harrowed with rakes, &amp; broken up finely as for sowing some kitchen herbs. It is commonly sown on Saint Anthony’s day in January. Eight harvests are made. The first ones are better. The best dyers’ woad of Lauragais is the one from Carmail &amp; the one from Auragne. And sometimes the dyers’ woad is good in one field &amp; in the one close by it will hardly have worth. The goodness of the dyers’ woad can be recognized when put in the mouth it gives the taste of vinegar, or when crumbling &amp; breaking it, it has some mold—like veins which are as it were golden or silver. It is assayed in the dyers’ vat, and to fill a vat with it, six bales of it are needed. There several flocks of wool are dyed, and if it dyes fifteen times, it is said to be worth 15 florins, if it gives xx dyings, xx florins. The good kind dyes up to 30 times &amp; commonly up to xxv or 26.\n\n",
  id: 92
});
index.addDoc({
  title: "Enamel",
  author: null,
  layout: "narrative",
  content: "- - - - - 039v - - - - - \nAnnotations:\nEsmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi)\n \n## Enamel\n\nEnamel takes more readily on copper than on silver. It is true that the cut needs to be well hollowed out &amp; rough. Azure in body &amp; the red called gules, white enamel &amp; thick green take very well. Having enamelled, one gilds the feuillages of the cutting[illegible]. Copper has a similar hardness when cut as pure silver or pistolet gold.\n\n",
  id: 93
});
index.addDoc({
  title: "Colors for illumination on glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 039v - - - - - \n## Colors for illumination on glass\n\nIn order that your turpentine colors shall not run, &amp; become unified, mix in a little larme de mastic together with the turpentine.\n\n",
  id: 94
});
index.addDoc({
  title: "Tracing a history on glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 039v - - - - - \n&lt;div class=\"annotation\" align=\"left\"&gt;Annotations: &lt;a href=\"https://docs.google.com/document/d/1hadGQunGoh9R6eJUndm-5MxRcoIi_r95EOG-ZqizP4Y/edit\" target=\"_blank\"&gt;Tracing a history on glass&lt;/a&gt;\n\n\n&lt;/div&gt; \n## Tracing a history on glass\n\nIf you want to trace a history in intaglio on glass, you can do so in different ways. Place your glass pane on, as thin as possible, over the printed history, &amp; having cleaned the glass well with lye &amp; ashes so that it is not at all greasy, trace over the lines visible to you with oily black or scales black with a pinceau, if you want to paint with colors in the manner of glaziers, who spread a wash of scales black all over their glass pane &amp; then scratch &amp; uncover what they want to coat with color, leaving that which is necessary for shading. But if you want to make gilt histories on glass with a background of colors, which imitates the basse—taille of goldsmiths, gild the whole glass pane with gum water or garlic juice or fig—tree milk. Then moisten your printed history with two wet linen cloths &amp; lay it down on the gilt glass. Then with a pin mounted on a small stick, follow the lines of your history as if you wished to pounce it, &amp; thus you shall vividly trace it on the gilding of the glass. &amp; next you shall uncover the background &amp; what needs to be empty with a quite pointy steel awl, &amp; and neatly follow once more the lines &amp; accomplish your work &amp; fashion your faces &amp; flesh tones in pounded silver; then fill the background with azur d’esmail or verdigris or fine laque platte, tempered with clear turpentine, mixed with a little larme de mastic if you want the colors to be more unified &amp; not to run. Next, apply on the back of the glass &amp; over the colors a white tin sheet. And once this is dry, you can cover the tin sheet of with color to hide your secret. The tin sheet gives light to the colors. Thus you will be able to paint without being\n- - - - - 040r - - - - - \nbeing at all expert in painting. If your glass pane is bulging as if taken from the belly of a jar, it will show better. When you apply your turpentine colors to your glass panes, first place them on a hot tile &amp;, once they are hot, spread your colors &amp; leave it a while on the tile, then lay down your tin sheet.\n\n",
  id: 95
});
index.addDoc({
  title: "Aqua fortis",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n## Aqua fortis\n\nSome put on for four pounds of aqua fortis matter four that is in the retort, four ounces of common water in the container, which is better than putting it into the retort. The alum is de—phlegmed &amp; calcined such that the water does not have as many dregs. Many make it without de—phlegming the alum.\n\n",
  id: 96
});
index.addDoc({
  title: "Vinegar",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n## Vinegar\n\nOne takes for granted that jec heat red—hot the mineral salt that looks like marble &amp; that is called in Catalonia &amp; at the border of Spain Cardana saltC, &amp; throwing it in the red hot or quite hot in wine, it turns it into very good vinegar. Some make it with water poured on pomace soured after being pressed by grape pickers, but it will not keep &amp; spoils in heat &amp; thunder storms.\n\n",
  id: 97
});
index.addDoc({
  title: "Silver gilt buttons",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n## Silver gilt buttons\n\nBecause silver gilt does not fear fire, it is cut into lozenges flat[illegible] on one side, then they are joined together in a star shape with a paste of crushed enamel, which is then melted &amp; the enamel is gilt with gold leaf and then reheated.\n\n",
  id: 98
});
index.addDoc({
  title: "Grottos",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n## Grottos\n\nTo fill some empty place that cannot be laden with hanging rocks, one puts a piece of thick parchment close to the fire, which shrinks &amp; crumples. Then one paints it with distemper, then in oil. Next one affixes it.\n\n",
  id: 99
});
index.addDoc({
  title: "Latten and calamine",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \n## Latten and calamine\n\nFounders do not melt latten in a bellow furnace but in crucibles, for in a bellow furnace and amid the charcoals, the calamine would disappear.\n\n",
  id: 100
});
index.addDoc({
  title: "Metal",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \n## Metal\n\nTin needs to be pure because if there is any lead, it will go up in smoke whilst melting. Alloyed tin withstands fire for a long time but in ashes it will come apart.\n\n",
  id: 101
});
index.addDoc({
  title: "Aqua fortis",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \n## Aqua fortis\n\nIf your retort is well luted you should not surround it with ashes, which would only prevent the vapors from escaping properly. But when, towards the end, you fire it intensely, surround it with charcoals lit elsewhere beforehand, such as those in the furnace should be, so they do not crackle or smoke. Place said lit charcoals around the body of the retort, not close to the neck, which does not need to be heated as much. The top grate, on which you place your retort, should be sufficiently far, one dour or half a foot, from the bottom grate where the charcoal is placed, since thus you will not waste as much aqua fortis.\n\n",
  id: 102
});
index.addDoc({
  title: "Cross of the commanders of Malta",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \nAnnotations:\nRouge Clair, fol. 40v (Chang, Shi)\n \n## Cross of the commanders of Malta\n\nThe fine rouge clair which is the background of the white enamel cross is of fine dragon’s blood drops soaked with eau de vie or Indian laque plate, which I believe is made in Flanders, distempered with clear turpentine and mastic drops and applied on a silver leaf, not the one used by painters but a thicker one, which is burnished by the makers of foil backings for gemstones or by goldsmiths, and that gives it its fine brilliance.\n\n",
  id: 103
});
index.addDoc({
  title: "Garden lily",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n## Garden lily\n\nIf it is broken during its first blossom, it will not grow or bloom until the following year, and I believe it is the same for bulbous flowers [in general].\n\n",
  id: 104
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n## Sand\n\nThe sand to be used for casting should be chosen such that it is not too dry for it won’t hold together, nor should it be too fat. And although you find some in nature, however, it is not everywhere. And if you are in a place where it is not found, you can put it together yourself but not from fat earth, because the sand should contain none at all, since it makes it porous. But you can make it bind by mixing it with brick well ground on marble, or plaster or calcinated alabaster or something similar, or the burned marrow of ox horn or burned asphalt. If you grind it quite finely on porphyry, it binds better &amp; then you can burn it with asphalt or mix it with a quarter of tripoli. Make sure no bread falls into your sand because this makes it porous.\n\n\n  at left middle  margin of folio 041r\n\n  Try mixing in soot black.\n\n\n",
  id: 105
});
index.addDoc({
  title: "Ducks",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n## Ducks\n\nYoung domestic ones do not grow for a month after hatching but remain in this state. But after, they soon grow up, even if they go into the water. They are fed boiled millet grains, to which are added crumbled bread and finely chopped lettuce.\n\n",
  id: 106
});
index.addDoc({
  title: "Casting earth for founders",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n## Casting earth for founders\n\nIt becomes fat by being beaten and also mixed with horse manure. Potter’s earth would be too soft and would break and wouldn’t resist the fire. But [your soil] has to be mixed with one half of sand and a quarter or a fifth of horse manure. And leave it to dry, then reduce it to powder, then put it through a sieve to make it fine and free from gravel, which would prevent it from casting cleanly. The manure makes the earth more amenable [to casting] &amp; easier to work with, but it should be free of straw and other things. And when the earth is very fat, you have to add more sand and more manure. But one does find fat varieties of earth [that are] naturally mixed with sand. If they are not, make them so artificially. One should always cook the soils again before casting.\n\n",
  id: 107
});
index.addDoc({
  title: "Glassmaker's black",
  author: null,
  layout: "narrative",
  content: "- - - - - 041v - - - - - \n## Glassmaker’s black\n\nFilings of iron taken from bars that have been in the fire for a long time, which are thick, are much better than the common soft ones that fall under the anvil in the forge, because they imitate niello. To said black, described elsewhere, some people add a little minium.\n\n",
  id: 108
});
index.addDoc({
  title: "Sheared ewes",
  author: null,
  layout: "narrative",
  content: "- - - - - 041v - - - - - \n## Sheared ewes\n\nIf the shearer wounds them at some point, he applies the very excrement of the ewe on it. When they are fat, they are easier to shear and do not get hurt as easily.\n\n\n  at left middle  margin of folio 041v\n\n  If the shearer wants to ‘viscorter’ them, that is to castrate them as [they] are one or two years old, he must not have been with his wife, because this would cause the sheep to die.\n\n\n",
  id: 109
});
index.addDoc({
  title: "Colors and gilt on glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 041v - - - - - \nAnnotations:\nColors and gilt on glass\n \n## Colors and gilt on glass\n\nYou should not put as strong gummed water on glass for the silver layer as for the gold layer because a silver leaf is twice as strong as gold leaf. Also, silver is harder and therefore does not scratch as easily. And if gum was not a little [too] strong for silver, it would not crack so clearly. When you work, the exhalation of your breath humidifies the leaf lying on the glass, and therefore it would be good, when working, to heat it up a few times. You have to very thoroughly wash what you want to be empty and used as a surface painted with colors, because if it is not really clean of the gum’s grease and viscosity, and of other things, the colors will not be so clear on it. To advance your work you can smooth with a pumice stone, or [you can do this] to better lay down gum and leaf on a cut paper. This way, you will have to do very little repairs. If you want a gold color there without gold, mix soaked dried saffron with a little bit of massicot.\n\n",
  id: 110
});
index.addDoc({
  title: "Founder",
  author: null,
  layout: "narrative",
  content: "- - - - - 042r - - - - - \n## Founder\n\nThe clay mould should be baked until sometimes it becomes red hot, since otherwise the metal would be unstable and be no good at all. Similarly, the inner core must be baked very hard, and mixed with charcoal powder.\n\n",
  id: 111
});
index.addDoc({
  title: "Wax for seals and impressions",
  author: null,
  layout: "narrative",
  content: "- - - - - 042r - - - - - \n## Wax for seals and impressions\n\nFor large wax seals, you should always have tepid water handy, and keep your wax in it. Yet previously you should have kneaded it with your hands, so as to make it very smooth and even, for otherwise the water would penetrate the wax and prevent it from holding together. Afterwards, you can imprint whatever you want. Cover the wax in three or four sheets of paper, and, with a round and smooth stick similar to a pestle, roll it out as if to polish it. It will then stick to the paper, helping you to take it off from the seal. In this way you will imprint better than if you were dripping molten wax. You can carve figures and color them in gold, in silver, or paint them with couleurs à vernis, and transfer them onto a glass pane painted with couleurs à tourmentine &amp; mastic. And if you want to apply these designs by inlaying, use gum ammoniacum mixed with vinegar, and it will stick well.\n\n",
  id: 112
});
index.addDoc({
  title: "Casting in plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 042r - - - - - \n## Casting in plaster\n\nMelt some wax, and with a big brush coat it over the relief of which you want to have the cave, as if you wanted to paint it. And a light crust will be formed upon which you will cast plaster, to give it shape and consistency. Afterwards, in the cave of the wax, cast your plaster as well to get the relief, and it will come out very easily, because of the wax. This is done more often for large pieces in haut relief than for others.\n\n",
  id: 113
});
index.addDoc({
  title: "Pounce for scratching satin",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## Pounce for scratching satin\n\nAfter pouncing with crushed flour or chalk, in order that the dots of the pounce not be erased, go over the trace with egg white beaten with the milk or bark of a fig tree, which will immediately make the egg white clear up like water, without becoming opaque, it will maintain the trace that you will go over again and scratch with a piece of glass or penknife.\n\n",
  id: 114
});
index.addDoc({
  title: "Canvas for oil painting without breaking",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## Canvas for oil painting without breaking\n\nIn order that your oil painting be not broken or ruined as you bend it, make your (preparatory) layer with honeyhoney, a bit of oil, water, and flour.\n\n",
  id: 115
});
index.addDoc({
  title: "Oil painting on taffeta",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \nAnnotations:\nOil Painting on Taffeta\n \n- - - - - 042v - - - - - \n## Oil painting on taffeta\n\nIn order that the oil not run, make your first layer with honey, water of alum, and essence of amidin.\n\n",
  id: 116
});
index.addDoc({
  title: "Casting sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## Casting sand\n\nThe key is to grind it well upon marble, and that it be extremely fine; mix in a bit of calcined alabaster.\n\n",
  id: 117
});
index.addDoc({
  title: "For decorating a painting",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## For decorating a painting\n\nGo over the lines with lacquer ground together with olive oil, which will not dry out.\n\n",
  id: 118
});
index.addDoc({
  title: "White varnish on plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n## White varnish on plaster\n\nPut down two or three layers of white glue for painting. Afterwards, varnish with varnish of sandarac, aspic oil, and a bit of mastic. Put it into a vessel at night, everything ground well together without fire, which would make it turn yellow. Then, with a paintbrush, it becomes dry immediately. Filter the oil that will have absorbed the substance.\n\n",
  id: 119
});
index.addDoc({
  title: "Mericoton and pavis",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n## Mericoton and pavis\n\nOne should graft them before Christmas so that they will not freeze too much.\n\n",
  id: 120
});
index.addDoc({
  title: "White bronzing on plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n## White bronzing on plaster\n\nOne must apply four layers of painters’ distemper glue onto the plaster portrait, leaving one layer to dry at a time. Then apply gently some burnt English point ground on a marble slab, or some lead burnt, ground and distempered with a bit of gum or glue. When dry, rub gently with a little cotton and the plaster portrait will look like lead. Others grind minium with quicksilver.\n\n",
  id: 121
});
index.addDoc({
  title: "Purpurine",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n## Purpurine\n\nTake half an ounce of soft tin, melt it in a spoon. Once it is melted, throw in an ℥ of ☿, mix together. Once they are cold, grind on a porphyry slab. Then take an ℥ of sal ammoniac and an ℥ of the yellowest sulfur that may be found, grind both. And then mix very well all the aforementioned materials. Then put all together into a glass sublimatorium. Hold this over a small fire for an hour, and for an hour over a stronger fire, and for an hour over a very strong fire, and it will be ready. Then, to use it, apply resin black with the glue used by painters to paint, two or three times, until it is quite black. Then apply a bit of varnish. Once it is dry, apply the purpurine dry with a finger where you want. The more you apply, the finer it will look. Then, if you like, you can apply varnish on top.\n\n",
  id: 122
});
index.addDoc({
  title: "White bronzing",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n## White bronzing\n\nApply some blackblack with glue on the medal, as described above, and then varnish it. Once dry, rub it with English point using a brush or your finger. The said rubbed point embellishes lead medals.\n\n",
  id: 123
});
index.addDoc({
  title: "Varied and transmuted wine",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \nAnnotations:\nSleight-of-hand tricks\n \n## Varied and transmuted wine\n\nGrate Brazilwood very fine, let it soak for one or two hours in clear water. Then take this tinted water and add some clear water and you will make wine as clear as you like. If you please, put a drop of juice of lemon or of orange in it and it will immediately become white. You can drink it without danger.\n\n",
  id: 124
});
index.addDoc({
  title: "Pearls",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \n## Pearls\n\nIt is said that pulverised talc blown into a lamp makes them so.\n\n",
  id: 125
});
index.addDoc({
  title: "Arquebusier",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \n## Arquebusier\n\nTo shoot your arquebus precisely the end of the breech must come precisely on the edge of the light, because like this the powder catches [fire] and burns all at once without blowing and has more strength and does not recoil. On the contrary, if the breech is made hollow, as they commonly are, the powder catches more quickly in this place, makes it recoil, and blows. This is clearly shown [by] a arquebus with a chamber which recoils more than another. And since the cannon is bigger at the breech than at the muzzle the sights are also uneven, because that at the breech is higher than that at the muzzle. Additionally, the thickness of the cannon is greater than the caliber by about one line, and the sight by another. It would therefore be necessary to either make the cannon all of one size or to raise the barrel from the end and towards the muzzle, and push it in and lower towards the breech. The weight of the powder must be one third of the [weight of the] bullet.\n\n",
  id: 126
});
index.addDoc({
  title: "Hail shot for the arquebus",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \n## Hail shot for the arquebus\n\nIf you want that it stays together put a piece of felt or leather or paper on it, depending on the distance, and let the piece be made with a form precisely cut depending on the caliber of the arquebus.\n\n",
  id: 127
});
index.addDoc({
  title: "The reach of an arquebuse",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n## The reach of an arquebuse\n\nThe proportion of a fowling piece is: 4 king’s feet long and the bullet weights xviii pennyweights, the expulsion vi pennyweight of powder, its range iiii—by—xx pans and 3 and a half feet and two thumbs and around a line, which is the Paris aulne. The medium arquebus, which is the usual one and the easiest, admits xv pennyweight of bullet, v pennyweight of powder &amp; reaches lx paces.\n\n",
  id: 128
});
index.addDoc({
  title: "Pewtermaker",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n## Pewtermaker\n\nThey mix viii or ten pounds of lead for each hundredweight of tin in the cities that have regulated guilds. But elsewhere, they add as much as they can. One also uses ii. lb. of estaim de glace to bind it and three lb. of broken  brass, that is, copper scrap that kettlemakers make. This makes the vessel more reverberant and it is not as breakable.\n\nThis pewter is called ordinary pewter.\n\n",
  id: 129
});
index.addDoc({
  title: "Arquebuse",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n## Arquebuse\n\nTo keep it from backfiring, clean your arquebus every eight days, and rub it with oil, and when you draw out, wet some linen in oil &amp; put it in instead of paper.\n\n",
  id: 130
});
index.addDoc({
  title: "Lacquer",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n## Lacquer\n\nTo test it, soak it and apply it to paper, and if one or two hours later it has not died at all, it’s fine and well—done.\n\n",
  id: 131
});
index.addDoc({
  title: "Dyes from flowers",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n## Dyes from flowers\n\nRed poppies that grow amongst wheat make a very beautiful columbine on white leather. The boufain makes a very beautiful blue. An herb which grows in hedges, which has a stem similar to flax, long and broad leaves like little bugloss, which has a violet flower verging on blue and looks like the fleur de lys, makes a quite beautiful turquin, better than azure. Another columbine flower of the shape and size of the bugloss flower, which has a leaf like that of the pansy, also makes a very beautiful turquin. It grows in wheat in light earth.\n\n",
  id: 132
});
index.addDoc({
  title: "Horsehair sieves",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \nAnnotations:\nFine raw silk sieves and horse hair sieves\n \n## Horsehair sieves\n\nThey are made often in Normandy with horsetail hairy that they clean with some washing water because they pick them out with their mouth and separate short and broken ones. They do not make the thread longer than the sieve and it is round. They attach the black or white hair at the two edges of the thread, according to the piece they want to make. And the thread is woven above and below like any other fabric. And passing a small flat stick of ii or three fingers wide between two, they pass between after two bits of hair at each step strike and weave with three steps. The entire sieve is made of xvii bits of hair. They sell them by dozens and each xxx sols. They bring them to Toulouse to send them then to Spain and there, they exchange it with silk.\n\n",
  id: 133
});
index.addDoc({
  title: "Excellent water against the pest by the Master of Montorsin",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \n## Excellent water against the pest by the Master of Montorsin\n\nTake some theriac rue, dittany and good vinegar, put the whole in a glass bottle and leave it half—open and well attached. And put it in a bath for three or 4 days. Then take some of your brew from its container when you need it and pour some, when necessary, on a red hot tile and receive the vapor and also perfume your clothes. This is a very precious and proved secret.\n\n",
  id: 134
});
index.addDoc({
  title: "White soporific oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \n## White soporific oil\n\nHave x or 12 Mandragore apples, put them in quarters together with some olive oil in a glass bottle which you will cook in a bain marie for two days and your oil will turn white with which you rub the sole of your feet and you will quickly feel sleepy.\n\n",
  id: 135
});
index.addDoc({
  title: "Stucco",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \n## Stucco\n\nTo stick stones, some do not use gem and pitch black rosin because it is too greasy, but they use as much rosin and sulphur and the same quantity of wax and then add finely ground brick. Others some white chalk and crushed and powdered and sieved white stone.\n\n",
  id: 136
});
index.addDoc({
  title: "Loading a pellet arquebus",
  author: null,
  layout: "narrative",
  content: "- - - - - 045r - - - - - \n## Loading a pellet arquebus\n\n \nIt is necessary to make a wooden pipe 4 or 5 fingers wide that is perfectly hollow, according to the open end of your barrel, of the form represented in A. Then, having cut some paper, which has to be as strong as that of large printed books, in the form indicated in D and as wide as you want your cartridge to be long, wrap the paper around the baton B and at the top, where the pointed tip F will be around the aforementioned paper, and the cartridge will be formed. But, in order to make the bottom more uniform, put it into pipe A, then introduce baton B and, in the other end of the pipe, which is marked G, insert baton C and pack so as to compact and press the folded tip of your cartridge, then take it out, and the charge in this, put three or four drageons or larmes. Then, with a punch, marked E, of the same caliber of your arquebus or pistol, punch round pieces on cardboard or felt or waxed cloth, and put this round piece into your cartridge, and push it until the drageons with the baton B, the more drageons, 3 or 4, then a round piece. And continue like that until the cartridge is full, the put it into the arquebus. If you want your pellet to scatter earlier, make round pieces out of paper. If you want it to reach further without scattering, make the piece out of cardboard. If you want it to reach even further, make the round piece out of waxed cloth, or either of leather or felt, and a piece of waxed cloth on the top. And if you make the cartridge in part with waxed cloth or waxed paper, it will reach one hundred paces and will make a big hole, and the pellet, barely scattering, will produce a big opening. But if you make your cartridge with waxed cloth or a material stronger than paper, it cannot be so long, with the cardboard tip being like in D, because it is enough if it wrapped around twice. In such a way, the pellet barely scatters and makes a big hole in porte—corps armor or others.\n\n",
  id: 137
});
index.addDoc({
  title: "Loading an arquebus",
  author: null,
  layout: "narrative",
  content: "- - - - - 045v - - - - - \n## Loading an arquebus\n\nYou must have different charges depending to the range that you want your arquebus to have, all of which have a screw on the end that fits in the nut of the the said arquebus’ ramrod. So when you put the powderpowder in the charge, which is in the nut, hold the ramrod upright. And raising your arquebus up, insert the said ramrod until the charge is in the bottom of the arquebus, then straighten the arquebus, the mouth of the barrel up, and remove the ramrod. That way, your powder will now be entirely in the breech without any grain or dust that lines the sides of the arquebus, which always has some grime in the chamber. That way it will not recoil, and you will shoot more true.\n \n",
  id: 138
});
index.addDoc({
  title: "How to adjust a bent gun barrel",
  author: null,
  layout: "narrative",
  content: "- - - - - 045v - - - - - \n## How to adjust a bent gun barrel\n\nTake off the breech and put it [the barrel] on a well—leveled table set perpendicular to the floor, and insert a very smooth string without knots, on each end of which there is a plumb hanging from each side. Then look in the barrel along the string, and if it does not touch equally all over, note the place where it does not touch and hit it with a hammer on the exterior of this this side in the same place, and this will make it straight. Do this all around it.\n\n",
  id: 139
});
index.addDoc({
  title: "Birds",
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n## Birds\n\n\n  at right top  margin of folio 049v\n\n  Calandra larks and all birds taken from the nest and which have not known freedom are better, because those taken with a net never sing as well. However, wild birds give much pleasure with their chanting, but they must be taken before Michaelmas, otherwise they do not live long. All get a small impostume on the fork of their tail, sometimes, which some call “gaillardise”, which makes them sick and sometimes kills them, especially calandra larks. One can tell when they are sad and do not sing. It must be pierced, not with a pin, but very delicately by turning with the tip of a quite sharp feather. The calandra lark should not be without river sand, and grey sand, a little rough, is the best. It rubs itself against it and purges itself [with it].\n\n\n",
  id: 140
});
index.addDoc({
  title: "Grain of lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n## Grain of lead\n\n\n  at middle  margin of folio 049v\n\n  Take a playing card, pierced with a pin or needle, folded over on all four sides. Hold it with the end of a small split stick and, holding said stick by the other end, put your card three or 4 fingers away from the water that you will have put in a platter or a similar vessel. Then pour your lead, which should not be too hot, into the card and continually tap on the stick that holds it. And thus your lead will turn into round grains. And pass it through a large sieve to separate the larger grain from the smaller. The larger one will carry 25 to 30 paces.\n\n\n",
  id: 141
});
index.addDoc({
  title: "Birds",
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n## Birds\n\n\n  at bottom  margin of folio 049v\n\n  Those that are caught at Michaelmas are good to keep, but those that are caught in March die, because they are starting to fall in love. Ortolans are fed oats all summer so that they eat without getting fat, to be more suitable for hunting and helping to catch others. Then, when one wants to fatten them to sell, one gives them millet. They sing at night. They must be caught after mid—July and before Michaelmas, because after the period when they have their young in this country, they leave as turtledoves do. Siskins should also be caught after All Saints’ Day and before Christmas, because afterwards they leave for the mountains to brood.\n\n\n",
  id: 142
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n\n  at left bottom  margin of folio 049v\n\n  Ortolans are ventriloquists, so that, singing without opening their beaks, they seem to be…\n\n\n",
  id: 143
});
index.addDoc({
  title: "Preserving fruit for the entire year",
  author: null,
  layout: "narrative",
  content: "- - - - - 050r - - - - - \n## Preserving fruit for the entire year\n\n\n  at top  margin of folio 050r\n\n  Take a rounded glass phial, with a large enough opening to receive cherries and plums and whatever fruit you want. Put in some hot water and leave it for two hours, and once your water is cold, throw it out and turn the phial upside down onto its opening on a perfectly even table and in a room where there is not a bit of draft or wind. Then prepare a stopper of fresh wax, wrapped in oilcloth, and adapt it precisely to the glass phial so that it will be ready to stop it once you have put in the fruit. And once you have hand—picked the fruit, only the non—rotten fruit, and on a warm and dry day, withdraw to the room, well closed so that no wind or draft can get in, and put it gently and deftly in the bottle. Then stop the bottle well with the stopper and lute it, making your lute, if you want, with some quicklime and oil, so that no water gets in. Then put your bottles into a tub full of water, in a cellar, during the summer, and in the winter put your bottles into a basket filled with some weights and lower it to the bottom of a deep well. Because in the winter the water in the tub would be too cold if your cellar is not warm enough, because the water needs to be like river water.\n\n\n",
  id: 144
});
index.addDoc({
  title: "Molding",
  author: null,
  layout: "narrative",
  content: "- - - - - 050r - - - - - \n## Molding\n\n\n  at top  margin of folio 050r\n\n  If you want to quickly mold in demi—relief anything you come upon, fold some paper five or six times over, and place it on the medal and make sure the paper is folded around the edges of the medal so it is very secure. Next take a stick, broad at one end and with a well—dulled point at the other, and rub firmly on the paper, and retrace the lines with the point of the stick until you reckon that your impression is well done. Then, at your convenience, rub oil onto the paper lightly with a brush, and cast some tallow or wax or sulphur into it. And the paper, without burning, will give you a neat design that you can then mold in plaster or tripoli and then in lead and other metals.\n\n\n",
  id: 145
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 050r - - - - - \n\n  at left bottom  margin of folio 050r\n\n  Polished cardboard of little thickness and slightly humid is appropriate. Then if you want, strengthen it with some paper glued on the reverse side.\n\n\n",
  id: 146
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 050v - - - - - \n\n  at left bottom  margin of folio 050v\n\n  Steel is applied to tools not on both sides, but underneath the part where one sharpens and whets them, and this part must be made of very soft iron.\n\n\n\n  at left bottom  margin of folio 050v\n\n  Levantines refine our own steel because their country provides them with none, and they reheat it in a pot with bitumen etc.\n\n\n",
  id: 147
});
index.addDoc({
  title: "Skin colors",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n \n## Skin colors\n\nIt is necessary that you make it of two kinds, one more red to make the main layer, the other more pale for the highlights, as around the eyes. And then on this last skin color, you will touch lightly the main lights with a little white lead. But avoid applying too much of it because this will look like a face of death. The beautiful Florence lacquer makes a beautiful vivid skin color that resembles the complexion of alexandrine pink and incarnadine\n. \n&gt; at left top  margin of folio 061r\n&gt; \n&gt;  Certain colors need to be ground like minium or massicot. The ashes don’t need to be ground at all.\n\n",
  id: 148
});
index.addDoc({
  title: "Making things round",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n \n## Making things round\n\nIf you want to model well, soften round things by rounding them off with the brush point and the rest with a flat part if it is flat, and thus for the others according to their nature, and lightly with the dry and flattened brush point and with patience.\n.\n",
  id: 149
});
index.addDoc({
  title: "White lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n \n## White lead\n\nWithout this, you can’t work on a small scale for which it is necessary to soften with great care. But you can’t do it with ceruse because it does not have enough body.\n.\n",
  id: 150
});
index.addDoc({
  title: "Lights",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n \n## Lights\n\nYour brush shows it to you by making some shadow which must always follow the back of your hand, not in a straight line like this,  because the light would be too crude and too harsh, but obliquely and as an incline like this.  It is necessary that the painting is not facing the light, but be half turned back against it, and above all look for a soft light, for it makes a soft shadow and soft work, like a harsh light makes a harsh work.\n\n\n  at bottom  margin of folio 061r\n\n\n\n",
  id: 151
});
index.addDoc({
  title: "Water to make light for painters",
  author: null,
  layout: "narrative",
  content: "- - - - - 061v - - - - - \n \n## Water to make light for painters\n\nDistill some vine water and put it into a big bottle. Put your candle behind that, and it won’t disturb your vision.\n.\n",
  id: 152
});
index.addDoc({
  title: "Chassis used by Germans",
  author: null,
  layout: "narrative",
  content: "- - - - - 061v - - - - - \n \n## Chassis used by Germans\n\nGermans who work in small scale make ‘chassis” not of glass but of canvas oiled with clear turpentine varnish, that is half of turpentine oil and almost half of turpentine, because such light, being less bright than glass, makes the lines appear thicker. And when they want to make something more delicate, such as veins and similar things, they use brushes made of two or three rat hairs. \n.\n",
  id: 153
});
index.addDoc({
  title: "Perspectives",
  author: null,
  layout: "narrative",
  content: "- - - - - 062r - - - - - \n \n## Perspectives\n\nPainting perspectives in oil takes a long time because of the many lines that need to be drawn with a ruler, and for that reason one generally paints them in distemper. One chooses the vanishing points at will. The main thing is to know where the point is. One commonly sets two or three, sometimes up to five. \n.\n",
  id: 154
});
index.addDoc({
  title: "Ocher",
  author: null,
  layout: "narrative",
  content: "- - - - - 062r - - - - - \n## Ocher\n\nThis is used for faces, hair, skulls and rocks. \n.\n",
  id: 155
});
index.addDoc({
  title: "Distant people and animals",
  author: null,
  layout: "narrative",
  content: "- - - - - 062r - - - - - \n## Distant people and animals\n\nFirst one roughs them out in gray or in purple, which is made of azure ash and lake. Once dry, one highlights and finishes with flesh tones and other colors and white. And it will look better and is quicker to do than in black and white. Armies are painted the same way. \n.\n",
  id: 156
});
index.addDoc({
  title: "Drawing",
  author: null,
  layout: "narrative",
  content: "- - - - - 062r - - - - - \n## Drawing\n\nAfter you have primed your panel and scraped it with a knife to make it quite even, you will start drawing with the longest possible piece of charcoal, because with a short one you would not see your line so well and you would make it rougher. Let the tip of the charcoal be sharp, and to prevent if from quickly becoming dulled and blunt, drag the tip flat, thus you will constantly sharpen it. Hold your charcoal as far as possible, and accustom yourself to drawing with a light touch. Because if you become accustomed to drawing delicately with charcoal, you shall do the same with colors. And whoever is rough with charcoal is never exquisite with colors. And by a line of charcoal, masters assess their apprentices. First make the contour of your drawing, that is the outline, lightly and without too diligent work, rather with boldness. By so doing, you will learn to be an artist, and if you need to erase anything, you will not waste as much time as if you had elaborated it. Afterwards work on all the details, not standing too close to your panel, but sometimes stepping back in order to better assess the proportions. Once you are satisfied with the first drawing, retrace all the lines with your paintbrush in pink or another gummed or distempered color. Thus you will work more surely with colors, and with less trouble.\n\n",
  id: 157
});
index.addDoc({
  title: "Portraits",
  author: null,
  layout: "narrative",
  content: "- - - - - 062v - - - - - \n## Portraits\n\nTo become an artist, it is necessary to draw by eye, without compass or ruler. Masters do not allow apprentices to use them.\n\nWhen the priming has been done a long while ago, it becomes greasy. It must be scrubbed with ashes and water.\n\n",
  id: 158
});
index.addDoc({
  title: "Perspective",
  author: null,
  layout: "narrative",
  content: "- - - - - 062v - - - - - \n## Perspective\n\nIn order to tell where the vanishing point is one must lay a ruler over the lines, and the point will be where the lines meet. Some make a hole at the end of their rulers in order to fix the point by that hole while moving the ruler about. Others lay a ruler across the panel,, then on this ruler they place the tip of another ruler which, being attached to the former by a screw, will move about and reach as far as necessary without losing the point. The ruler and compass without discernment of the eye will cause errors. Perspective is very difficult. \n  \n&gt; at left middle  margin of folio 062v\n&gt; \n&gt; To paint a perspective in oil, you should not use a ruler, for you would smudge everything. Instead, in applying your colors you must keep and follow the lines of your first drawing.\n\n",
  id: 159
});
index.addDoc({
  title: "To bronze in white",
  author: null,
  layout: "narrative",
  content: "- - - - - 074r - - - - - \n## To bronze in white\n\nTake looking—glass tin and put it to soak in gum water, and pound it in a pestle. And afterwards, you will put it on the marble.\n\n",
  id: 160
});
index.addDoc({
  title: "To make vermillion",
  author: null,
  layout: "narrative",
  content: "- - - - - 074r - - - - - \n## To make vermillion\n\nTake two pounds of sulphur, and melt it, and add two pounds of mercury to it. And if this material ignites, cover it quite neatly, so that the air does not pass into the pot, then put everything for some time after into a leaded pot, into the fire. In the space of twenty—four hours, you will have good vermillion.\n\n",
  id: 161
});
index.addDoc({
  title: "To make varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 074r - - - - - \n## To make varnish\n\nTake one pound of linseed oil, and then put it in a pot of earth mixed with a breadcrust and three onions, and put it on a charcoal fire, and you will cook it on a low fire, and let it boil for the space of five hours. You will take half an ounce of flour glue, and will make it boil just as before, and stir continuously with a spoon. And then afterwards, you will add two ounces of well—pounded sandarac to it, and will do so as above. And then afterwards, you will take mastic and gum arabic, two ounces of each, both well pounded, and will put everything together, and will have it boil, always stirring, for the space of five hours. And then you will add rock alum, two ounces, and then you will make it boil. And if you add two ounces of gum arabic to it, if you see that they are not cooked enough, have it cook more on a low\n- - - - - 074v - - - - - \nfire until it is cooked enough. And strain it through a cloth that is compact enough. And when you have strained it, leave it to cool a little. And if you see that it is so thick that you cannot strain it, you will add a little of that oil and will make it better.\n\n",
  id: 162
});
index.addDoc({
  title: "To make red varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n## To make red varnish\n\nTake vermillion, and let it soak in quite light gum water, like the other, and make two or three ground layers as is said above.\n\n",
  id: 163
});
index.addDoc({
  title: "To make yellow varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n## To make yellow varnish\n\nTake some gum arabic and let it soak in water, then take some well beaten saffran and soak said gum. And make it quite light, then make your ground layer on that which you want to varnish, and leave it to dry, and when it will be dry give another ground layer of the same varnish, and leave it to dry as before, until it will be dry enough. Then take varnish from an apothecary, crushed by strokes far enough from one another. Then wash your hands quite well and spread your varnish with their palms.\n\n",
  id: 164
});
index.addDoc({
  title: "Recipe for white gum",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n## Recipe for white gum\n\nTake white wax and ceruse and a little fine pitch, very well pounded together, and put it in a small new pot and make it melt. And when it will be melted you will make a palette of wood and burnish what you want.\n\n",
  id: 165
});
index.addDoc({
  title: "Green gum",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n## Green gum\n\nTake green wax with a little verdigris and make it melt as said above.\n\n",
  id: 166
});
index.addDoc({
  title: "Gilding wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 075v - - - - - \n##  Gilding wood\n\nFirst of all it is necessary to apply a coat of very clear glue; and when it is dry, you will apply a coat of yellow gold; and when this is done you will take fig tree wood and soak it for a while, and wash the place you want to gild,dhdjhjdhdjh and cut your gold with a knife near where you will put it; and said gold must be applied with cotton, and if you can find some fig tree, take an egg white and stir it frequently.\n\nIf your gold does not have a nice enough color, you will take a partridge feather burn it in a chafing—dish, and turn the smoke toward what you have gilded.\n jkfjoehwfoihwoq ehcfo3 h 2oth o\n",
  id: 167
});
index.addDoc({
  title: "Recipe for coloring all wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 075v - - - - - \n## Recipe for coloring all wood\n\nTo make it black, the wood needs to be soaked in olive oil and tough meat in a similar case for four or five days, then boil it in where the wood has soaked for one hour, then take it the wood out of the oil. Take some natural sulphur if possible otherwise take another\n- - - - - 076r - - - - - \nsulphur. Cover the aforementioned wood with this powder, until it cools, and bring it back to a boil. Upon boiling one will see whether or not it is black enough. If it is not, take the aforementioned powder and apply some over the wood and boil it.\n\n",
  id: 168
});
index.addDoc({
  title: "Medicine of orientals against all maladies",
  author: null,
  layout: "narrative",
  content: "- - - - - 077r - - - - - \nAnnotations:\nSmoke as Medicine, fol. 77r (DeVinney)\n \n## Medicine of orientals against all maladies\n\n \n Dry some rosemary in the month of May, then fill this bowl with powder made of it, and place a lit charcoal on top. And, receive the smoke by a quite tightened mouth having closed your mouth well, and a part will come out by your nose. But if you want to purge the head also pinch the nose. Against colds, rheums, and other maladies.\n\n",
  id: 169
});
index.addDoc({
  title: "Tin for casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 079v - - - - - \n## Tin for casting\n\nThey use common tin, which is the one that pewterers use for plates, which is composed of 9 or ten pounds of pure lead on one quintall of tin.\n\n\n  at left bottom  margin of folio 079v\n\n  Some find that there is nothing better than pure tin.\n\n\n",
  id: 170
});
index.addDoc({
  title: "Fountains",
  author: null,
  layout: "narrative",
  content: "- - - - - 080r - - - - - \n## Fountains\n\n \nIf you wish to raise water higher than its source, make a pipe descend as in A. to B. to give it push , then from B. to C. make the pipe ascend, but not quite to the height of the source, here represented by the dotted line, and then make it descend again in a pipe from C. to D., and then let it rise higher than the line demarcating the height of the source, and do this successively until you reach the desired height. Remark nonetheless that the length of the descending pipe is always twice as long as the ascending pipe. This cone also fills itself and demonstrates a perpetual fountain which you can adapt into a rock, attracting the water with which it is filled by the tip here marked, by sucking and breathing in. You can also make a watering can pipe in this way, so long as the bent pipe is just as long as the straight pipe, but does not extend as far down.\n\n\n  at left middle  margin of folio 080r\n\n  \n\n\n\n  at left middle  margin of folio 080r\n\n  \n\n\n",
  id: 171
});
index.addDoc({
  title: "Founders of small tin work",
  author: null,
  layout: "narrative",
  content: "- - - - - 080v - - - - - \nAnnotations:\nFounders of Small Tin Work\n \n## Founders of small tin work\n\nThey usually cast from soft solder the things that should not become hollow, because hollow works require fine and soft tin. However, these things would not otherwise lose their coat or become hollow if they are mixed or include glass tin in them, just like they mix a little glass tin in the soft tin. They carve their work on stones of which the sharpening stones or barber’s files are made. These are found in great flakes near the mountains, and resemble slate. They are found in three colors: one reddish, that is not as perfect as the others because it does not sustain heat ; another one is the color of dark slate, and the other is whitish. When they work a relief, first they print it on carton, which is one finger thick, to serve as a pattern. After planing their stones and rubbing them together , they use a compass or little iron tools to carve their figures. They make their molds with three or four stones, to make a circle or a square with the stones which join perfectly because the stones are of equal size. Before casting, they rub the mould over with tallow, and it the mould absorbs it quickly because it is hot. Then, having put fine powder of quicklime into a cloth, they rub the mould using pounce in beating the linen on top, then blow it a little on top; this prevents bubbles from forming. The main thing is to make some vents. If the work is big, they do as it is shown on the picture. They make a hole in the medal, somewhere where it is least visible, and with a bit they pierce the mold on the side of the medal. \n  \nAnd if they want their work to last, they pierce it somewhere and fit in a piece of cork. Lead or tin will not damage it.\n\n",
  id: 172
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 080v - - - - - \nAnnotations:\nFounders of Small Tin Work\n \nMake sure the pegs of your frame fit in easily so it will open with ease without moving anything else. Your box molds should fit well, and the table should be very flat.\n\n",
  id: 173
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 080v - - - - - \nAnnotations:\nFounders of Small Tin Work\n \nTry to carve with distilled vinegar.\n\n",
  id: 174
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 080v - - - - - \nAnnotations:\nFounders of Small Tin Work\n \nTry calcined oyster shells; they are said to be excellent for molding.\n\n",
  id: 175
});
index.addDoc({
  title: "Vine",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Vine\n\nAs with a bramble, it can be planted on both sides. And those who plant the larger side facing a slope say that it makes a larger stock. But it only has a higher point, because it grows higher.\n\n",
  id: 176
});
index.addDoc({
  title: "Mortars",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Mortars\n\nThe fine copper mortars do not throw any flames, as long as the iron pestle is not tempered. If the mortar is indeed made from metal, when this is sour, in this case one makes the bottom of large mortars from fine copper.\n\n",
  id: 177
});
index.addDoc({
  title: "Varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Varnish\n\nTurpentine oil: turpentine &amp; good eau de vie, to dry it out; heat it without mixing on the stove, so that it mixes of its own accord in melting. After, test it on a very clean blade, &amp; you will know from this whether it has enough body and whether it does not flow too much.\n\n",
  id: 178
});
index.addDoc({
  title: "Grafting",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Grafting\n\nOne knows from experience that the young shoot that is enters into the incision on the sunny side takes hardly often at all when it is also bowed.\n\n",
  id: 179
});
index.addDoc({
  title: "Baker",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Baker\n\nDust guards wheat against being worm—eaten. And to clean it well when it is stained &amp; like rust, pass some ashes through a sieve and mix them with the wheat, then sift the whole thing with a bolting cloth made from rough cloth or canvas. The ashes will pass through &amp; your wheat will stay nicely yellow &amp; very fine.\n\n",
  id: 180
});
index.addDoc({
  title: "Looking-glass tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n## Looking—glass tin\n\nIt makes material whiter.\n\n",
  id: 181
});
index.addDoc({
  title: "Sand from pulverised rock salt and sand from a minium finely ground on marble",
  author: null,
  layout: "narrative",
  content: "- - - - - 088v - - - - - \n## Sand from pulverised rock salt and sand from a minium finely ground on marble\n\nAfter they have been dryly ground and beaten in the mortar, they are ground finely on the marble. I mixed the same quantity of each material, and in order to mix them better, I ground them on the porphyry again, and then filtered this through a double sieve or the sleeve of a shirt. Then, I put them on sheets of paper and stored it on marble in a cellar. In one night, they were both moist enough [that there there was no need] to dampen them further because rock salt, like all other salts, dissolves in dampness. I molded with this very neatly because both should be quite fine. They need to be moist enough so it can be removed easily.\n\n",
  id: 182
});
index.addDoc({
  title: "Mineral sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 088v - - - - - \n## Mineral sand\n\nIt does not matter if the sand color is white or yellow. Above all it the sand must be lumped together much like a precious stone or a stone, and the deeper in the earth one gets it from, the better. The signs of its quality is that it is thus gathered together, that, if the stone is removed as it should be i.e. in the correct way, it forms pieces and lumps together, which demonstrates its capacity for binding, and that it the sand is not too dry. However, it should crumble in your hands. And the grain must be quite small, fine, and homogeneous. If this sand is not fine enough, you can filter it and grind it up finely either with water, or through a sieve, when it or on the porphyry. That way it loses its dryness and becomes greasy and well bound. You can mold it in a box mold or in a noyau without wadding, and try it with lead because, if it does not swell and casts neatly, it will bear out well too. Some say that fatty sands do not work for casting metal that is too hot. Artisans who undertake a big job and who want to save money do not need to crush sand and seek the curious properties of artificial sand; they have more to profit from finding natural sand that has the finest grain possible. And for a small job, they take advantage of finding the finest natural sand they can. For a smaller job, they only filter the sand through the sieve. But those who work on a very small scale crush the sand and grind it finely until it becomes impalpable, because they do not need as much sand.\n\n\n  at left middle  margin of folio 088v\n\n  Ground wheat makes a tawny—colored powder that is quite fine and quite soft. Once this powder has been mixed, it can mix mold very neatly. Try wheat flour burned in an enclosed fire.\n\n\n",
  id: 183
});
index.addDoc({
  title: "Powder of ox bone and rock salt",
  author: null,
  layout: "narrative",
  content: "- - - - - 089r - - - - - \nAnnotations:\nOx Bone and Rock Salt\n \n## Powder of ox bone and rock salt\n\nI pulverised them separately and ground them finely on the porphyry as much as I could. Then I mixed all of one with the other and re—ground it on the porphyry. Afterwards I moistened it in paper folded in a moist napkin which is made wet more quickly from the moisture of the night, or the moisture of the cellar. I have never found one which can be removed more cleanly from the mold than this, though it needs to be quite moist. And if you want to cast small works, make it very hot. It came out very cleanly from the doulx tin, like the main one, and has sustained several castings. For tin, I believe that it is not necessary to look further to find a material that takes to powder better, and even for use with fine lead which has almost better results than tinTou. The bone of an ox hoof is always dry, that is why you must mix it with fatty sand, so it will bind like tripoli, salts, felt, ashes and similar materials. If you do not mix ox—hoof bone, it will not turn out from the mold and will not mold cleanly because it crumbles.\n\n",
  id: 184
});
index.addDoc({
  title: "Reheating or wiping a box mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 089r - - - - - \n## Reheating or wiping a box mold\n\nAlways arrange the most delicate parts, like faces or handles, so that nothing will fall which would then disturb your fusion.\n\n",
  id: 185
});
index.addDoc({
  title: "Natural sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 089r - - - - - \n## Natural sand\n\nThis should not be reheated for lead and tin, it is better all new and fresh.\n\n",
  id: 186
});
index.addDoc({
  title: "Ammonia salt and alabaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 089v - - - - - \n## Ammonia salt and alabaster\n\nDry ammonia salt, ground on a marble slab, molds very cleanly and is easily removed from the mold. When mixed with pulverized alabaster, use two ounces per pound of alabaster; it also is easily removed from the mold. It should be humidified in a cellar or in the cool humid evening air, or to have it quickly, in a sheet of paper in a moist towel. Take care not to leave it too long because it will soften, which would not be good if you wanted to use it as a box mold. However you can use it well as a core provided that you dry it gently and away from the fire. Otherwise the heat would make it swell, and push the salt onto the surface, causing lumps. If you want to mold a core, rub your medal with aspic oil. It is better to use 4 ounces of ammonia salt per pound. Humidify it in a damp place for two or three days, so that the material can be handled without sticking. You will mold very cleanly. Let the mold dry out and reheat it, that way it will get body, and become as hard as stone and when it is like that it is far easier to remove from the mold. If you do not reheat it, it could crumble when removed from the mold because of its thinness. It is the same with a large relief medal. Once you have molded, pulverize the material like before, and moisten it in a damp atmosphere. left—middleAll sands which can be removed easily from the mold have body, well—made fat ammonia, and is sand that removes easily from a mold. There is nothing better for binding than the salt of the metal itself. When ground into powder, they pick up moisture, dry and reheat together.\n\n",
  id: 187
});
index.addDoc({
  title: "White glassmaker's sand mixed with ammonia salt",
  author: null,
  layout: "narrative",
  content: "- - - - - 089v - - - - - \n## White glassmaker’s sand mixed with ammonia salt\n\nYou can find this sand in Cominge, near the town Aurignac. This sand is dry and as white as salt. Glassmakers and potters use this sand ground on the porphyry until it becomes as fine as possible. Easy to grind, this sand looks like calcined alabaster, and provides a very clean mold. I have not found another as suitable for delicate bas reliefs. It is also excellent to mold as a core, without any box mold. You must grind it very finely on a porphyry with gummed water or pure water, then apply a thick coat (as thick as mustard or a little bit thicker) over the medal, which has already been lightly rubbed with oil, walnut oil or, even better, aspic oil. For best results, let it dry by itself, away from fire, for one or two days. If you are in a hurry, you can heat it; it should not break if the coat is quite thick. If it is suddenly exposed to fire, some holes will appear; that does not happen if it has been gently dried. Once dry, reheat it, and it should allow for several castings.\n\n",
  id: 188
});
index.addDoc({
  title: "Sal ammoniac and iron dross",
  author: null,
  layout: "narrative",
  content: "- - - - - 090r - - - - - \n## Sal ammoniac and iron dross\n\nI pulverized sal ammoniac, previously well dried in a hot bronze mortar over heat. Then I filtered the salt through a double sieve; it became very fine. But to make it finer, I dry ground it on the porphyry, then I mixed it with iron dross which was pulverized and ground the same way. Both ingredients take a very clean cast of bas—reliefs, without being moistened with serain, or into the hollow mould, or anywhere else with the serviette, and the cast can be cleanly removed.\n\n",
  id: 189
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 090r - - - - - \n## Sand\n\nMolders from Foix who cast their medals sideways use crocum ferri and calcinated slate. It is used for very flat things.\n\n",
  id: 190
});
index.addDoc({
  title: "Every kind of sand can be made useful",
  author: null,
  layout: "narrative",
  content: "- - - - - 090r - - - - - \n## Every kind of sand can be made useful\n\nArtisans who do big works, and who need to search for things made by nature to pursue their work, because nature does not want to sell its wares to its children, and in order to save the time they would spend grinding, pulverizing and artificially preparing their sand, look for sand from sandpits, which is not too fat from the soil, nor too arid and, consequently, without any binder effect. From deep in the sandpit, one can find some lumps and gravel that show the sand’s natural compaction; it is quite hard to break, with very small and fine grains, quite smooth between the fingers. And since it is found solely close to mountainous regions or arid lands, you cannot find any near every good town, where artisans live. Thus, if they can’t find any close to their home, they prefer to order some of this sand from afar, like Lyon, Venice or Paris, near the Sainte Chapelle, and similar areas, instead of preparing it themselves. Nonetheless, you can be assured that in all locations, you can make sand from the sandpit and will be good and will mold cleanly. Because the sand is coarse and dry, filter it through a sieve. If it is not fine enough, wash it. And when the water has settled a little, pour the soiled water into another pot. The coarse [grains] will quickly fall to the bottom of the first pot. But the sand from the troubled water pot, having settled, will be much finer. If this sand does not bind enough, dry crush it on the porphyry, thus making it impalpable, and it will bind as chalk does. If you wish you can reheat it, and straight after crush it and blend it with salts, or burned cloth, or felt, or paper ashes, or similar material.\n\n",
  id: 191
});
index.addDoc({
  title: "Potters' clay",
  author: null,
  layout: "narrative",
  content: "- - - - - 090v - - - - - \n## Potters’ clay\n\nGrind it in a mortar mustard mill with water, and it will become as impalpable as possible. Dry it, then moisten it with salt water, which give force to all sands in order to allow several castings.\n\n",
  id: 192
});
index.addDoc({
  title: "Orange trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 090v - - - - - \n## Orange trees\n\nIn Italy, particularly in the coldest areas like Lombardia, people plant the orange trees inside squared wood planters. The planters are larger at the bottom than at the top. People make handles on each side, where they attach straps in order to carry the planter, like one carries the gout sufferers, because if one used wheels to roll them one would damage the garden’s paths. Every two year they remember to open the sides of the planters and meticulously cut and trim the ends of the orange tree’s roots, which are dry. Otherwise, the roots find the wood [of the planter] and tighten on it, they double over themselves, the ends dry and the tree dies. Once trimmed, the roots gain new space to expand, without encountering resistance from the wood of the planter. That is why it is better to join the sides of the planter with screws rather than nails, to avoid shaking the soil when one opens them.\n\n",
  id: 193
});
index.addDoc({
  title: "Grafting",
  author: null,
  layout: "narrative",
  content: "- - - - - 091r - - - - - \n## Grafting\n\nAny tree that has a large pith will be hard to be graft from, because the cutting is difficult to remove. If the pith is damaged, the graft will take in an unstraight manner, like with vines of all peach and apricot trees. Apricot trees have a very thin bark, and so it is necessary to graft them onto young trees whose own bark is not thick yet, such as the young shoots of prune trees or apricot trees. The graft will not take if the cutting gets wet. It is necessary therefore to graft in serein and mild weather, not too cold and not too windy. One must use old wood to graft, if one wants to graft on a tree that is already mature and quite big; because if this is the case, it will compress the cutting, and if the cutting is of young wood, it will not grow properly. But old wood resists the compression of old wood better than the young, because it is harder than young wood. But if the graft is done with only old wood, it will never grow beautifully, but will be frail and short and will take a long time to grow.\n\n",
  id: 194
});
index.addDoc({
  title: "Molding with cuttlefish bone",
  author: null,
  layout: "narrative",
  content: "- - - - - 091r - - - - - \n## Molding with cuttlefish bone\n\nPay attention to keep the bones in a dry place, because they are very prone to dampness. If you have a small medal, divide the bone into two pieces, then smooth the two parts with a knife. And on a dry, smooth rooftile [that has been] pulverized with willow charcoal, rub and polish the two half bones. In this way, the bones soak up the willow charcoal so that the bones will come off cleanly from the cast, and will not stick to it. Then on a fake bone, that is to say a bit of smooth brick of the same width as your bone, place your medal. And then on the medal, put your bone and press it firmly with another stone of the same size. And for a second time, mold it, and instead smooth over the top with willow charcoal and blow slowly, then press as before, and it will cast neatly. If it is for a spoon handle, two whole bones are needed. Any work that is cast is brittle and prone to breaking, because the metal swells when cast, and contracts and condenses when hammered. That is why it is necessary to retrace with a chisel the cast object and in this way the metal will contract again and let it escrouir. If the piece you have to cast is in high relief, first trace the mold and the hollow with a penknife, to make a clear path for the medal and then cast it. And if the medal has two sides\n\n\n  at left bottom  margin of folio 091r\n\n  Rather than casting, heat the bones only to make them lose the coldness and wetness.\n\n\n\n  at left bottom  margin of folio 091r\n\n  When the lead gets too hot, it calcinates.\n\n- - - - - 091v - - - - - \nBecause the two bones are joined, cut around them with precision, and make notches in different places which cross through where the two bones are joined, so as to recognize the place where they were first joined. Or with little shards of wood, you can also pierce the bones, or coat the joints with clay, and leave it to dry. Compress between them it with your two hands in between your knees; and do not use a normal press, otherwise the bones will break. Mold at your leisure two or three times, until you can see that it has the design come up and is well imprinted. And on each occasion rather than putting the piece straight back in the mold, smooth with willow charcoal because it helps it to come out easily. Once you have cast, rub your medal with oil and willow charcoal with a brush, to make it dull. Take care that your medal is not greasy or oily when you cast it in cuttlefish bone. Once you have cast, leave it to cool rather than taking the medal out straight away, because when one takes it out hot, some bone will come away with the medal. Cast at medium heat, which you will recognize because the bone should stay almost white. But when it is too hot, the bone becomes brown. The proportion of lead and tin is equal, one to the other. If the piece is difficult to cast, and composed of various pieces, cast it with a forked pattern, of three or four grooves, and make and make these grooves where the metal is the thickest. Also make these grooves around the medal and directly on the head because this attracts the metal and will fill the figure best. Lift your boxmold a little, once you cast, and in this way you will be able to make several clean casts. Tin that is too hot burns the bone which becomes damaged. Moreover, having come out of the mold hot , it risks breaking. \n\n",
  id: 195
});
index.addDoc({
  title: "Sand mixture easy to melt",
  author: null,
  layout: "narrative",
  content: "- - - - - 092r - - - - - \n## Sand mixture easy to melt\n\nOne â„¥ of part soft tin, one part fine lead, one part looking—glass tin and one part argent vif arrestÃ© makes an alloy and a solder, so easy to melt that it could easily be melted in a dish of fine tin.\n\n",
  id: 196
});
index.addDoc({
  title: "Molding hollow on one side and in relief on the other",
  author: null,
  layout: "narrative",
  content: "- - - - - 092r - - - - - \nAnnotations:\nOne-Sided Hollow Cast Medals\n \n## Molding hollow on one side and in relief on the other\n\nAnd for this effect, one casts a medal of fine tin, which is harder to melt. And since it is neat, one molds with it. And one leaves it in one half of the box mold, &amp; presses it a little so that it holds better. And next, you shall cast in your box mold the solder described above, or another more meltable than fine tin. And thus, the second medal will melt and mold itself on the first one without ruining it. But to be safer, temper lamp black with water, &amp; with a pinceau, give a light coat of this to the medal, which remains in the box mold, &amp; leave to dry. Thus it will not melt. But if you have a medal of copper or silver, you can leave it in the casting, if you want to cast with lead or tin; but it is necessary that it be a little hot, for the cold would make the tin contract. Tin needs to be cast quite hot to come out neat. Tin doulx, which is the best for the cast, is the one that once cast en grille, is burnished &amp; shiny &amp; polished like a mirror, &amp; appears to have been burnished, &amp; does not have holes like the one that is brittle, &amp; that is not shiny, as if burnished.\n\n",
  id: 197
});
index.addDoc({
  title: "Potin",
  author: null,
  layout: "narrative",
  content: "- - - - - 092r - - - - - \n## Potin\n\nPotin, once cast very hot, runs and drips like tin. But the medal becomes whitish and immediately casts off the green, which good substances do not do.\n\n",
  id: 198
});
index.addDoc({
  title: "Molding statues",
  author: null,
  layout: "narrative",
  content: "- - - - - 092r - - - - - \n## Molding statues\n\nHalf founderâ€™s earth, which founders use, and half clay earth renders very neatly.\n\n",
  id: 199
});
index.addDoc({
  title: "Sand of river tellins and mussels",
  author: null,
  layout: "narrative",
  content: "- - - - - 092v - - - - - \n## Sand of river tellins and mussels\n\nThe long shells that can be found in rivers of fresh water, being calcinated, make a white and very fine [impalpable] sand which moulds very clean.\n\n",
  id: 200
});
index.addDoc({
  title: "Freezing mercury",
  author: null,
  layout: "narrative",
  content: "- - - - - 092v - - - - - \n## Freezing mercury\n\nIt can be frozen, as I tested, letting it boil one or two hours in a rather large iron pan putting, for each â„¥ of â˜¿, ii â„¥ of vert—de—gris and vitriol of saltpetre, each in the same quantity, with enough of the blacksmith’s old water. Or melt 4 â„¥ of tin, and when it has cooled, purify it by removing the filth on the top, then make a hole and inside there add i â„¥ of â˜¿ and if you remelt it, it will be like tin but it will be fragile. If you want to know if it is tin or â˜¿, redden a shovel and put a small piece of your ingot on the top. If it is tin, the piece will melt but remain, but if it is â˜¿, it will melt immediately then, crackling quite hard, it will evaporate. It must be frozen in a ladle or in a hollow crucible, and make the hole medium sized. It can also be frozen, as I tried, that is to say with aqua fortis which before corroded a bit of silver. This, mixed, will make tin and lead fluid.\n\n",
  id: 201
});
index.addDoc({
  title: "Mixture",
  author: null,
  layout: "narrative",
  content: "- - - - - 092v - - - - - \n## Mixture\n\nPure tin, frozen mercury, smells like tin. Iced tin, pure lead, as much of one as of the other, makes a substance that melts very quickly but that is fragile and white. I think that it would be good for soldering. [Takes a] long time to cool.\n\n",
  id: 202
});
index.addDoc({
  title: "Olives",
  author: null,
  layout: "narrative",
  content: "- - - - - 093r - - - - - \n## Olives\n\nThe olives go bad if you do not refresh their salt water once a month, do not touch it with your hands, otherwise they will go bad.\n\n",
  id: 203
});
index.addDoc({
  title: "Country folk's observation",
  author: null,
  layout: "narrative",
  content: "- - - - - 093r - - - - - \n## Country folk’s observation\n\nWhen it freezes on Palm Sunday, it will freeze every month of the year When the first flowers fall because of the frost, the other flowers also start perish.\n\n",
  id: 204
});
index.addDoc({
  title: "Grafts",
  author: null,
  layout: "narrative",
  content: "- - - - - 093r - - - - - \n## Grafts\n\nDo not use a graft from old wood, because it never makes a beautiful tree. Leave only two shoots on the graft and no more, otherwise it will become weaker. The wind torments it and leaves it strengthless to propagate by cuttings. Trees which have big pith, such as peach trees, and all other trees of their kind, and the plum trees, can’t be grafted when freezing because the cold damages their pith, which also has to be protected avoiding to cut the bottom of the graft. All grafts must not be done earlier than the sap flows up, otherwise they dry.\n\n",
  id: 205
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 093r - - - - - \n## Sand\n\nThe white ash of all kinds of wood, which still sticks to the wood while burning, and which has not fallen into the hearth, molds very clean\n\n",
  id: 206
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 093r - - - - - \n## Sand\n\nVery fine pulverized soot molds and removes easily from the mold. The best soot, which is greasy and shiny, is the one from the big kitchens Very fine pulverized quicklime works, but mixed flint, crumbled into the hollow, does better.\n\n",
  id: 207
});
index.addDoc({
  title: "Faces painted with distemper",
  author: null,
  layout: "narrative",
  content: "- - - - - 093v - - - - - \nAnnotations:\nPainting Skin and Shadows a destrempe, fol. 65r, 66r, 93v (Nisse)\n \n## Faces painted with distemper\n\nBecause colors painted with distemper dry quickly and one would not have enough time to complete the shadows and touches on the face, one wets the reverse of the face, on canvas, with a wet sponge. Then, with a small pinceau, one makes the shadows, which won’t come off. Next, one lays the flesh tones, which do not prevent the already painted shadows from appearing. And then, one retouches the more prominent areas with lively flesh tones. And with another pinceau one retouches the shadows in hatching. The shadow strokes do not come off because they are made of bister, which stains the canvas like rust. The said bister is good for making shadows with distemper, for in oil it has no body and would dry with great difficulty. One mixes ru ochre in the said bister for shadows with a little sap green. The best bister is the rich, shiny one from the fireplaces of large kitchens. It is difficult to grind and screeches on the marble slab.\n\n",
  id: 208
});
index.addDoc({
  title: "Azure",
  author: null,
  layout: "narrative",
  content: "- - - - - 093v - - - - - \nAnnotations:\nAzure Enamels, fol. 11r, 59r, 61v, 93v (Chang, Clemens)\n \n## Azure\n\nAzur desmail always wants to be cleaned because the filth that can be seen in the used water would makes it die. It always needs to be coated twice, &amp; first very thickly, driving the pinceau by laying it lengthwise then across. It is better used on canvas, which imbibes it immediately, than on wood. Varnish restores its vigor, because while imbibing, it becomes dark. To try it, painters bring their palettes to the grocers and distemper and mix @ it with a bit of white crushed in oil, for in this way the beautiful shows its turquine vivacity, while the mediocre is lavender grey. The thinner one is best to work with. It is made thinner by being washed.\n\n",
  id: 209
});
index.addDoc({
  title: "Purple and lake",
  author: null,
  layout: "narrative",
  content: "- - - - - 093v - - - - - \n## Purple and lake\n\nIt is made of azure and lake which is also tested on the palette with white. The one which gives a clear red rose color, tending slightly towards purple, on a polished knife or on glass, is esteemed beautiful. The dark red one is not as pleasant.\n\n",
  id: 210
});
index.addDoc({
  title: "Burnisher",
  author: null,
  layout: "narrative",
  content: "- - - - - 094r - - - - - \n## Burnisher\n\nThe different parts of a sword are the handle, [and] the sheath of the sword. What comes next is the heel. The rest is the blade. The sides are the edge and the point. Certain blades, acute in point, have only one side filed in the middle &amp; along the whole length, and are easy to break. Other blades are called of three molds or three grips, which have one good rise in the middle, but this elevation is flat as if it were acute in point but flattened. These ones are most certain. Others are called fluted, which are notched from the middle, &amp; when it is along the whole length, they are just as easy to break as those acute in point and are more troublesome to burnish because the burnishing stick can’t get in. But they make one specially that is narrow. Making up the hilt of the sword are the pommel, the branches of the hilt and the cross—guard, which is this iron strip that closes off the guard [and] that is at the end of the heel to stop thrusts from sliding down the hilt. The rings are these two branches in half round that start from the eye of the guard and go all the way to the branch of the cross—guard. The branch that crosses the hilt is called the body and this escutcheon, by which the sword enters the sheath and to which all the branches return, and which holds them, is called the eye of the guard. Following is the wood of the grip which one glues or more fittingly [uses] some mingled wax which is made of wax and pitch, for rosin would be too hard. He heats it lightly, then rubs the wood of the grip so that the tang takes hold, or the threads, otherwise, when a thread frays off, the whole thing will break all at once. With iron thread or dog skin, one also uses glue. The trimming set on the wood, which is made of silk or thread, is called the cord, which is made from two or three threads twined on the spinning wheel, or 4 if the silk is thin. A cord a little bigger holds better. The rivements, which are also made of silk at both ends of the grip, are called the buttons. Some grips are made of silk, seal skin, iron thread reheated with gold and fine and false silver thread &amp; velvet [thread]. Iron thread is of less price and is most durable. Next is that of silk, if one does not have the convenience of being close to the sea in order to recover some dog skin, which is quite convenient. The good skin costs fifty or lx s{ous} and makes 4 or five dozen grips. This one gives a good grip and a sure hand. To put it to work, if it is too hard, soak it for one or two hours in slightly lukewarm aqua fortis. Because if it were too hot, it would boil and spoil the skin. It is sewn with black thread.\n\n\n  at left middle  margin of folio 094r\n\n  \n\n- - - - - 094v - - - - - \nThe gold handles are made with some yellow thin cloth set below or other kind of chalk—yellowed fabric. And this cloth is set on with glue or aforesaid gum. This is in order to make the thread hold better on it. These latter are made of cordons like the silk ones and between two cordons are put one or two threads to enhance it. The silver one is identically made. And there is as much difficulty as for the silk one, not because silk is difficult to twisted, but it needs to be twisted twice. A fine gold handle is worth 28 or 20 cents. The best sword point is of sage foliage. This long stick on which the sword is laid down and attached in order to furbish is called the chameau. It is commonly made from rowan which is hard and even. The stick underneath which is folded bow—like is called the arch. The stick above is called stick of the fustÃ©e. And this square piece, used on the sword to burnish it, is called the fustÃ©e. There are two horns, one is called the oil hornet and the other the emery hornet. There is an iron tool with the shape of a halberd point, square and made of very even and well limed steel called the grateau which helps to soften lime strokes on swords hilts and to sharpen blades once they are softened which is better than with stone or other tools which leave some scratches. To make the swords cut better, the edge from the point is also sharpened. Those who create sword hilts are different craftsmen than furbishers. The fustÃ©e is a three—finger—thick, square wood tool, made of boxwood which fit in the middle of the fustÃ©e stick to furbish. The fresil stick is made of willow wood which is to [â€¦] weapon with some clinker which is the iron scale falling from the blacksmiths’ forge.\n\n\n  at left top  margin of folio 094v\n\n   le banc des fourreaux\n\n\n\n  at left middle  margin of folio 094v\n\n  \n\n\n\n  at left middle  margin of folio 094v\n\n  a b D le baston a felinder c le flin ou pierre de fouldre\n\n- - - - - 095r - - - - - \nThe furbisher buys his blades by the dozen which are not finished, [but ready] to be pulled from [their] sheaths since he does this himself in order to add them well at the pommels and guards. Spanish swords are esteemed to be better for they are of better steel and iron but they are not as well—forged as Vienna swords, in DauphinÃ©. The Spanish ones are not as well sharpened from the forge since they sharpen them with their feet and this is what makes them wavy. Vienna blades cost commonly Xviii or 19 lb. The first thing the furbisher does to his new blades is to draw them out from the sheath, which he does himself or has it done by locksmiths or blacksmiths to whom he gives some liart for their charcoal. Afterwards they pass it over a grindstone to cut it down. Then they lay it down on the chameau, and with some powdered emery, fine and soft as flour, and soaked with oil to make it take, they polish the sword with the stick used to take off the tracks left by the grindstone and then they clean the blade well with the emery. And they add a drop or two of oil spread with the finger to give it luster. Once the oil is applied, they polish it again on the chameau with the “felin” which is a thunderstone mounted on the middle of a stick like the “fustÃ©e.” And this stick is called the “felindel” stick. Once they used the “felin,” they polish it again with some chalk and the oil [already] on the sword. After they follow this and going over it again, they polish it with dry chalk. Finally when they are finished with mounting [of the pommel and guard], they give it a sharp edge with a file. They then dry it and sharpen it and furbish it again with some dry chalk. At the end when they are completed and mounted, they give it [the blade] a sharp edge with a grater. They are polished on a false mounting with the guards which are present in order to find out if they work well together. And employing a blade of the sort of which all the sizes should be made in the hand, one conjectures whether it will be as strong when mounted. One puts the blade in a vice between two pieces of wood, then with a file, they enlarge [it] if needed for attaching the guard. Then to clench it, one positions the place to be riveted and the pommel on a piece of wood. And with a hammer, one beats on the top to make it very level and to secure the pommel. Then with the hammer, one finishes the rivet when the hammer is well secured and does not shake. The wood is placed so as not to put gashes in the pommel. Afterwards one makes a place for the rivet with a file or chisel. And some make the rivet [or attachment] in a diamond—shape but this is not as good as a round [topped one] because one cuts oneself on the corner of the rivet.\n- - - - - 095v - - - - - \nThe end can be bought already made, a dozen of small ones costs six sols but the big ones 2 carolii.The end is fixed either with nails which are fixed on the sides of the cutting edge, but this only spoils the sword and rots the scabbard for the water goes into it via the juncture of the nail. The best way is to apply some resin or glue but the resin is better. And the best is when the end is tightly set and so hot when set that powdered resin on the end melts, in that way it doesn’t fall and can’t be undone unless it is put in fire. Hilts are of different types: Ornate Guttered which is with round mouldings Pearled Scarfed when the bands are crosswise Onioned which is with a flat head In the King’s manner, fully covered The furbishers buy them by dozens, the dozen of full ones costs 10 lb. the worked one, 30 sols or [more] depending on its nature. The first thing that the apprentice does is to furbish as said. And then to adorn the sword and make a scabbard which is the summum of the art. They buy scabbards’ wood pieces which are wholly made of beech wood, a hundred for 15 or 20 or 30 sols, depending on how far they are made. Theses wood pieces are thus called estelles, and have to be very clean and without any knots and are one finger thick. Then the furbisher puts them on a small bench, called a scabbard bench and with a small iron tool similar to the joiners’ bench, they maintain it firmly. Then with a plane, which is like a two—handled knife, they work the wood piece from the top, then use the joyner’s plane to flatten it more. Afterwards, the inside is scoured with a\n\n",
  id: 211
});
index.addDoc({
  title: "Provisions for the work of Colchos",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n## Provisions for the work of Colchos\n\n \n- {:.indent-3}7 limbecks of glasse\n\n\n  \n    2 lbs. of ☿\n  \n  \n    One measure of coarse salt\n  \n  \n    6 unleaded earthenware vessel\n  \n  \n    2 large unleaded pots for calcinating\n  \n  \n    2 alembics to distill vinegar\n  \n  \n    4 pots of good vinegar\n  \n  \n    3 or 4 lamps\n  \n  \n    2 lbs. of cotton\n  \n  \n    One pair of scissors\n  \n\n\n",
  id: 212
});
index.addDoc({
  title: "For the furnace",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n## For the furnace\n\n \n- {:.indent-3}A chest with a ten inch wide square stone, and of a one—foot thickness, pierced in the middle\n\n\n  \n    2 boxes or two earthenware pots with a lid\n  \n  \n    2 small pipes of white iron to evacuate the smoke of the furnace\n  \n  \n    Turnipseed oil for the lamps to heat the furnace\n  \n  \n    A fire—steel\n  \n\n\n",
  id: 213
});
index.addDoc({
  title: "Royal cement",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n## Royal cement\n\n \n- {:.indent-3}One pound and a half of vitriol\n\n\n  \n    As much saltpeter\n  \n  \n    As much rock alum\n  \n\n\n",
  id: 214
});
index.addDoc({
  title: "Glass vessel",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n## Glass vessel\n\nThe glass vessel must be either pear—shaped or round pyramid—shaped, of the same thickness as the small back of a knife, round on the bottom without folding over on itself, like flasks, its opening of such a size that a Dutch feathercan just about get in, with a lip at the end, in this way of the height of seven fingers’ width.\n \n",
  id: 215
});
index.addDoc({
  title: "Painting on crystal or glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 102v - - - - - \n## Painting on crystal or glass\n\nThey paint without any traces oil, except for faces where they outline the nose and the mouth in very fine black work. Then they make strokes and highlight them in white, and then they apply a coat of flesh—tinted color. As for the background, they do it in natural azur from Acre to make it more beautiful, or lacquer for a quickly—done red, or for a finer red, dragon’s blood. But it is necessary to apply it little by little so that it is smooth and of one color, and in the same way for other colors. Then they apply underneath it, a leaf of topaz, gold or silver.\n\n",
  id: 216
});
index.addDoc({
  title: "Infusion of anthos or rosemary",
  author: null,
  layout: "narrative",
  content: "- - - - - 102v - - - - - \n## Infusion of anthos or rosemary\n\nIt is better to cook the flower in August and more suited to oil—making. Take as much as you want. Then put it into a bottle very well corked, and leave them to wilt in the shade for a day. Then add the first substance of wine and leave to settle three or four days; and express it all in another vessel and into this very same substance of wine, add seven or eight infusions made out of new flowers. Then leave the latest infusion in the sun for a month. Then distill it through a still. Then mix two ounces of this water with two or three spoons of white wine; but this is for the elderly. Paul the Third used it.\n\n",
  id: 217
});
index.addDoc({
  title: "Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 102v - - - - - \n## Casting\n\nTin casts better when it is thin and delicate, than when it is thick, because when it is thick it contracts in high heat. So if you want to mold a thick piece in tin, mold it only one one side, and if it is possible, make it hollow on the other side. In this way your piece will be neater. And then you can solder two half pieces together. But if you have no choice but to mold it thick, make the shape of it and mold force abreuvouers around the figure in this way.\n \n",
  id: 218
});
index.addDoc({
  title: "Excellent burn relief",
  author: null,
  layout: "narrative",
  content: "- - - - - 103r - - - - - \n## Excellent burn relief\n\nHeat linseed oil on a light fire, without letting it boil and simmer. But when it is hot put a quarter part(of the quantity of the linseed oil) of the newest wax you can find. Once it has melted, let it cool and when it begins to curdle, stir it continuously with a new wooden spatula for the length of time it takes to say 9 pater nosters, and while you say them, wash this composition with holy water, always stirring. Having said the first of 9 pater nosters, pour the first water out and add more, then wash and stir the composition for the time it takes to say 8 pater nosters. In the interval it takes to say 3 of the 7 pater nosters, and continuing thusly, add more water, as above, until there is only one last new pater noster left. Then you will have a soft white ointment, with which you will apply to the burn for 9 days. But don’t apply any more, you must let the flesh grow over. Dress it twice a day and each time you wash your face with water, and mix it together a bit tepidly, without rubbing. But press it with wet linen, and wipe it similarly with fine linen, and apply the ointment. On which you can put binder’s string. This will regrow your hair and prevent a scar from forming. A powder maker who was completely burnt but had no sign of burns taught it to me.\n\n",
  id: 219
});
index.addDoc({
  title: "Against dog's gall.",
  author: null,
  layout: "narrative",
  content: "- - - - - 103r - - - - - \n## Against dog’s gall.\n\nThe English, who fawn over their dogs owing to the care they take of their livestock, have healers for them the dogs who hold this particular office, and who melt pitch in water and, leaving it wet, rub the dogs with this water or with water sublimate.\n\n",
  id: 220
});
index.addDoc({
  title: "Enema",
  author: null,
  layout: "narrative",
  content: "- - - - - 103v - - - - - \n## Enema\n\nIn order for the pipe to not hurt children at all, or those with swollen or protruding hemorrhoidal veins, one covers the pipe with a parcel of chicken entrail and fold it over the end, and in this way, one gives the enema.\n\n",
  id: 221
});
index.addDoc({
  title: "Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 103v - - - - - \n## Casting\n\nTin recoils if thick, therefore it is better to cast it thin and from one piece, to make two and then solder them together, if necessary. One makes use of a strong piece of taffeta to sieve the fine sand with which one first covers the medal, which is of the thickness of a teston.\n\n",
  id: 222
});
index.addDoc({
  title: "To make colors fluid",
  author: null,
  layout: "narrative",
  content: "- - - - - 103v - - - - - \n## To make colors fluid\n\nMix some vinegar with a bit of bile, put it into a glass bottle, and if you want to preserve it for a long time, add some salt and mix some of this with your colors which will make them flow.\n\n",
  id: 223
});
index.addDoc({
  title: "Earwax",
  author: null,
  layout: "narrative",
  content: "- - - - - 103v - - - - - \n## Earwax\n\nIf you take enough with the tip of an ear picker and you sieve it with foam of urine, which often forms in the urine of those who have a headache, all the foam will dissipate.\n\n",
  id: 224
});
index.addDoc({
  title: "Enamels",
  author: null,
  layout: "narrative",
  content: "- - - - - 103v - - - - - \nAnnotations:\nEsmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi)\n \n## Enamels\n\nTo well recognize their difference and their true color by candlelight, it is necessary to put the candle behind a crystal mirror, or a glass globe or jar full of water, because this light is like sunlight.\n\n",
  id: 225
});
index.addDoc({
  title: "Corroding and dissolving absolutely pure gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 104r - - - - - \n## Corroding and dissolving absolutely pure gold\n\nPut it regular salt with aqua fortis into a violl. Let it rest for two hours, without heating it. Put [in this mixture] tenuous gold, and draw it out as if it had been separated from silver.\n\n",
  id: 226
});
index.addDoc({
  title: "Engraving on iron",
  author: null,
  layout: "narrative",
  content: "- - - - - 104r - - - - - \n## Engraving on iron\n\nOne ℥ of verdigris and 2 ℥ of coarse salt and a bit of sublimate, or crush some ocher with linseed oil, and use it to cover the blade or the very neat and polished iron. And let it dry on the fire or in the sun. Then, to engrave and make it beautiful, take a small coin’s worth of verdigris twice that quantity of coarse salt and about four grains of ammoniac, and six grains of sublimate, and the water must not be hot.\n\n",
  id: 227
});
index.addDoc({
  title: "Good mixture to color gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 104r - - - - - \n## Good mixture to color gold\n\nSulphur and small gravel as much of one as of the other, and the third part of this quantity of salt, and as much turmeric as sulphur.\n\n",
  id: 228
});
index.addDoc({
  title: "How to silver plate copper and latten",
  author: null,
  layout: "narrative",
  content: "- - - - - 104r - - - - - \n## How to silver plate copper and latten\n\nMold the silver as the gold, and put it in the oven in order to get a good gilt pot. And do not let it heat, otherwise the silver would tarnish. Once it will be well spread, make it boil in walnut oil, and then heat it a bit, and put it [into the water the silversmiths use to bleach their works].\n\n",
  id: 229
});
index.addDoc({
  title: "Enameling a carnelian",
  author: null,
  layout: "narrative",
  content: "- - - - - 104r - - - - - \nAnnotations:\nEsmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi)\n \n## Enameling a carnelian\n\nSoak some wheat flour in white wine, and slop and cover the whole carnelian. Then cook the violet again, then soak it into white wine for one or two hours, then rub it and leave the part you want to keep on it, then lay on some more on top again.\n\n",
  id: 230
});
index.addDoc({
  title: "Against dogs' mange",
  author: null,
  layout: "narrative",
  content: "- - - - - 104v - - - - - \n## Against dogs’ mange\n\nFor normal—sized dogs, take half an ℥ of stavesacre, and one ℥ for big dogs, as fine powder beaten with two egg whites and one quarteron of oil. They must drink the beverage on an empty stomach, after keeping them locked without any food. Approved.\n\n",
  id: 231
});
index.addDoc({
  title: "For casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 104v - - - - - \n## For casting\n\nIf you’ve got a big piece which does not allow an easy stripping of casting, mold it with some wax, either on the hollow side or in relief, because it is soft and hollow and so can easily be separated from the piece without leaving anything. But be sure that the melted wax is neither too hot nor too cold. Some people use for molding some wax warmed in boiled water, but while pressing the mold it bends and becomes unusable. Once you have made your wax cavity, you can cast in some very soft and clear clay, and let it dry. Then, upon it you will make a lead or tin cavity, in which what you will make will easily be stripped.\n\n",
  id: 232
});
index.addDoc({
  title: "Goldsmith",
  author: null,
  layout: "narrative",
  content: "- - - - - 104v - - - - - \n## Goldsmith\n\nKnow what it is to work on spangled garments, it is small pieces of pure silver and of silver—gilt with which one makes the archers’ coats.\n\n",
  id: 233
});
index.addDoc({
  title: "Spinet playing by itself",
  author: null,
  layout: "narrative",
  content: "- - - - - 104v - - - - - \nAnnotations:\nSpinet playing by itself, fol. 104v (Hiebert)\n \n## Spinet playing by itself\n\nMake an axle surrounded with wheels pierced all around in their thickness and attach feathers as for a cittern or a spinet and arrange them according to the song you want it to play, leaving a suitable distance. And, turning the axle either by yourself or by a clock spring, your invention will effect itself.\n \n",
  id: 234
});
index.addDoc({
  title: "Turtles",
  author: null,
  layout: "narrative",
  content: "- - - - - 105r - - - - - \n## Turtles\n\nMales have shells that turn down at the end near their tails, and their underbelly shells have lined marks along the bottom from their tails to their head. And the females have neither the turned down shell near the tail nor the marks.\n\n",
  id: 235
});
index.addDoc({
  title: "Drying colors",
  author: null,
  layout: "narrative",
  content: "- - - - - 105r - - - - - \n## Drying colors\n\nSoot black and others will not dry in oil unless you add verdigris.\n\n",
  id: 236
});
index.addDoc({
  title: "Painting",
  author: null,
  layout: "narrative",
  content: "- - - - - 105r - - - - - \n## Painting\n\nColors that have been applied twice are more gritty by themselves, unless they have a binding agent. Otherwise, paint on wood; otherwise, on canvas; otherwise on walls.\n\n",
  id: 237
});
index.addDoc({
  title: "Gardening",
  author: null,
  layout: "narrative",
  content: "- - - - - 105r - - - - - \n## Gardening\n\nTo graft, it is necessary to take the new growth that was produced within the year by the tree you wish to graft. And cut off a branch in which you can see that beside the place where the leaves join the stem, there are little buttons we call buds, the initial stages of a sprout. With dexterity you must, with a very sharp pen—knife, cut in the shape of a graft a small bit of the skin of the tree, which contains a bud or a sprout with the leaf, as you can see in B. Then on the tender wood, which is full of sap, and on which you wish to graft, cut quickly two lines as you can see , then add in the middle a slit thusly. Then with the point of your pen—knife separate the bark from the tree, and open it from the slit in the middle, and having neatly lodged your graft so that nothing is sticking out, only the sprout, binding everything well and wrap the whole thing with a bit of linen or soft string. In this way, there will be nothing uncovered but the leaf, which in three or 4 days will indicate whether the graft has taken hold, by being green. Keep your graft in this way for seven or eight days. Then unwrap it, and join it to the bark, keeping the sprout itself straight, and then rewrap the whole thing gently, but not as strongly as before. And if there is any growth, leave it some room to grow and then three or four times\n  &lt;div class=\"folio\" align=\"center\"&gt;- - - - - 105v - - - - - &lt;/div&gt; \nThen, when the graft has taken hold, cut the top of the tree, which is above your tree, three or four fingers above the graft for the first time. Then, closer so that it serves. But be advised that when you do your initial grafting there should be no small hole at the back of your sprout, because this means that root is broken and your graft will never take. Therefore make sure the back is in tact. This type of grafting can be done from mid—May onwards, because the trees have budded and made new growth, until the beginning of August when the trees are full of sap. Almond trees which are naturally drier lose their sap earlier. Those who want to graft onto them the almond trees mericotons, apricots and nut—tree grafts, which are the best, should do so usually in January. Nut trees, such as perches mericotons should be grafted en fente. It is said that trees graft by the shield—graft method take longer to bear fruit.\n\n",
  id: 238
});
index.addDoc({
  title: "Gardening",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n## Gardening\n\nIt’s not very strange to cultivate in your garden some arnols, because when your soup or broth goes cold, you get worms.\n\n",
  id: 239
});
index.addDoc({
  title: "Fountain",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n## Fountain\n\nRecooked plaster runs when mixed with water, which you will see in the next recipe about wet molds. When put on the joints of the fountain conduits, it resists as much as any stucco.\n\n",
  id: 240
});
index.addDoc({
  title: "Catching nightingales",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n## Catching nightingales\n\nSee the 15th folio after this.\n\n In order to catch them, you must observe them in real life, the food that they favor and their mating season. The nightingale, as long as he is singing, marks his own territory. Therefore approach him by pretending to look for something on the ground. Take some worms from old flour or from beneath what you are kneading or from mills, which nightingales love, and put some on your hat, fastened with a pin or in any other way, so that it can wiggle. And five or six steps away from the hedge where it is singing, dig a hole, and place some worms in it, as well as your device made out of little criss—crossed sticks. As soon as you leave it will be anxious to go and see what you have done. And seeing worms it will enter.\n\n\n  at left bottom  margin of folio 105v\n\n  Some people sell nightingales on trees.\n\n\n\n  at left bottom  margin of folio 105v\n\n  It is easier to catch nightingales in the cool of the morning or evening, near fountains or shaded areas.\n\n\n",
  id: 241
});
index.addDoc({
  title: "Nightingale",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n## Nightingale\n\nThe iron wire used for its cage must be the thickest possible, so that should it try to leave, it will not hurt itself. At the beginning of its captivity cover its cage in fabric. The first day you will have to forcibly feed it, moving it from its cage in your hand and opening its beak and with a small wooden needle, place its food in its throat and make it swallow. And continue to do so until it is no longer willful. You must do this to keep it alive, because should it become thin or lose weight it will die.\n\n",
  id: 242
});
index.addDoc({
  title: "Nightingale",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n## Nightingale\n\nIt will need a cage made in the shape of a barn, like the ones for larks, lined with green fabric, because it feels the cold. And to get it to eat when it is first put in the cage, you must give it ants mixed with earth in the bottom of the cage to get it used to pecking, and you can give it minced sheep’s heart, and sometimes eggs, and sometimes mealworm.\n\n",
  id: 243
});
index.addDoc({
  title: "To cast",
  author: null,
  layout: "narrative",
  content: "- - - - - 106r - - - - - \n## To cast\n\nAsphalt from Germany is the most excellent sand you can find for molding in a box frame, because it is fitting for silver &amp; for gold. And the more you use it and the older it is, the better it is. With it, one molds very slender &amp; subtle things.\n\n",
  id: 244
});
index.addDoc({
  title: "Making gold run for casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 106r - - - - - \n## Making gold run for casting\n\nBecause gold cools down very quickly, you have to give it a mixture when it is well melted that will keep the heat. Sublimate softens it nicely. But, since it vanishes into smoke, it won’t aid you for very long. Therefore mix this mixture into it when you want to cast it: of sal ammoniac, the best verdigris that you can find, a bit of borax and some saltpeter. And this, held over the heat, will become neat. The saltpeter makes it clear and heats it. But the key thing in this mixture is the verdigris, which has to be good. This mixture softens your gold so much that it becomes as tractable as lead, even if it is good gold.\n\nFor sand for molding flowers and leaves &amp; other delicate things, mix in raw plaster, crushed brick and stone alum.\n\nTo moisten sand, spirits are excellent because it makes sand fine and leaves in a vapor when you reheat your box frame.\n\nDilute sal ammoniac is very good, is excellent for moistening sand, but for lots of water you only need a little bit of sal ammoniac.\n\nA raw lump of metal, if you don’t have crocum ferri, is good for gold.\n\nThe snakes and the lizards you wish to mold should not be kept for a long time, because if they are alive, they will waste away, and if they are dead, they will decay.\n\nPlaster of Paris is as hard as stone and very good. When you want to choose some for your sand, take the rawest and the hardest that is possible for you &amp; that does not make any powder. Transparent [plaster] and that which makes powder in giving way is that which is not good for this work. A sign of that which is near perfect is that it is hard &amp; makes shining grains that look almost like sugar. Finally, to mix it into the sand to cast gold, it has to be put in the fire twice, &amp; reheated twice.\n\n\n  at left top  margin of folio 106r\n\n   When gold is really pure, it is so dry that it can just barely endure a hammer. But this mixture softens it like lead.\n\n\n",
  id: 245
});
index.addDoc({
  title: "Spalt",
  author: null,
  layout: "narrative",
  content: "- - - - - 108r - - - - - \n## Spalt\n\n Spalt is white like cooked plaster and one can find it in mounds and stones made in long stairs and long veins. It is very soft such that with a fingernail and it makes a powder like that of our chalk from Champagne. And because everything which is provided from the earth is mixed with some other substance, to purify it [the spalt], one boils it with somewhat large gemstones then tempers it with essence of sal ammoniac. One puts [a lump of it] the size of a walnut in a large bottle of water and &lt;div class=\"folio\" align=\"center\"&gt;- - - - - 108v - - - - - &lt;/div&gt;that way one tempers it &amp; reducing it into small balls, [one] purges it of impurities [by] then putting it on to cook cleanly in a vessel of earth[enware] in a furnace like those in which pots [are made] and one leaves it there to the point at which pots would be fired. After one tempers it more with essence of sal ammoniac &amp; boiling it very strongly and emptying the murky water &amp; putting it in a separate vessel straight after put back the same water over it &amp; one boils &amp; one puts back the murky water again with the other. And one does this therefore until that which is there has passed away. In this way one purges and purifies and makes it a very fine and malleable [matter]. After one has taken away the water by tilting [it] or with a sponge, one takes the residue and dries it. Then moistening it with the aforementioned water the way one did with the other sand, one uses it in a frame or if it shrinks [this] is a sign that it is not fired enough &amp; needs to be fired more. This one is proper for molding all metal and especially gold and silver and the more it is used the better it is. One should put alum which you have cast of lead or tin separately because it makes gold. sour if you cast it there.\n\n",
  id: 246
});
index.addDoc({
  title: ["Stone alum"],
  author: null,
  layout: "narrative",
  content: "- - - - - 108v - - - - - \n## [Stone alum]\n\nStone alum must be reheated in a pot covered with a tile over a good charcoal fire so that the impurities which might be in it [are] burned with that which does not burn. This is done either in the goldsmith forge surrounded by bricks or in a little oven vented to the fusion fire such that the pot stays red for a quarter of an hour. This is more to purify it than for anything else. It becomes reddish on top and the inside remains white and dries best this way.#\n\n\n  at left middle  margin of folio 108v\n\n   # Once your stone alum is cooled down, crush it in a mortar, then grind it more finely on marble. And this makes it into very fine wooly dust that gives binding to sand without burning like all other things. [This is] a beautiful invention. Crush it on the mortar to being careful to keep the grindings together because the dust flying can get down your collar or on your face which can have very grave consequences. Put a little each time in the mortar to avoid the dust flying. It is best to grind therefore with the pestle trained on the mortar rather than on the marble where it spreads and on the mortar it gathers [the dust] from all sides and renders it very fine and sweet to the touch.\n\n\n",
  id: 247
});
index.addDoc({
  title: ["Clay"],
  author: null,
  layout: "narrative",
  content: "- - - - - 108v - - - - - \n## [Clay]\n\nClay used to surround molds, should be very fat and malleable, and should not be used for anything else except to make the contour of the molds. Therefore one should only choose that which is very fat and beat it very well and soak it moderately with water and have it in a pit or earthenware pot and make good holes with a stick with which one replenishes it with water to keep it always fresh and soft and ready to use when needed.\n\n",
  id: 248
});
index.addDoc({
  title: "Working in rough with wax",
  author: null,
  layout: "narrative",
  content: "- - - - - 109r - - - - - \n \n## Working in rough with wax\n\nWhen the wax is too hard, one mixes in some turpentine or a bit of butter, which renders the wax malleable, and cleaner than tallow, which the Italians mix in, because oftentimes, it is necessary to put the tools into the mouth, tools which are better when made from box wood or antler.\n\n",
  id: 249
});
index.addDoc({
  title: "Wax for molding",
  author: null,
  layout: "narrative",
  content: "- - - - - 109r - - - - - \n  \n## Wax for molding\n\nSince the wax is molten, they have some sulphur in a spoon or crucible and pour it in the molten wax. And with the sulphur going to the bottom or staying on top, it stays where it is and mixes only its substance in the wax, and renders it more meltable when warming it, in such a way that having molded it, the wax gently melts in the mold like butter, without leaving any blister or boil. Also be warned to not give it too much heat.\n\n\n  at left top  margin of folio 109r\n\n  If\n\n\n",
  id: 250
});
index.addDoc({
  title: "Molding wax",
  author: null,
  layout: "narrative",
  content: "- - - - - 109r - - - - - \n  \n## Molding wax\n\nSo that your mold takes hold without repelling any surface on a form or figure in wax, it is necessary to rub the wax with oil and soak your sand in lukewarm water, because cold water repels oil even more and will not make a good layer on the wax.\n\n\n  at left middle  margin of folio 109r\n\n  Rub the oil on very very lightly, use so little that it hardly appears at all. Then rub with some spirits. After soak your sand in lukewarm water so that it does not repel the oil.\n\n\n",
  id: 251
});
index.addDoc({
  title: "Forge bellows",
  author: null,
  layout: "narrative",
  content: "- - - - - 109r - - - - - \n## Forge bellows\n\nIt is better that at the end with the air chamber the bellows be set in some kind of bit of cloven board because they are more secure this way. Afterwards you can lightly secure them from the top. It is necessary that the nozzles be four fingers above the bottom of the forge.\n\n",
  id: 252
});
index.addDoc({
  title: "Molding snakes",
  author: null,
  layout: "narrative",
  content: "- - - - - 109r - - - - - \n  \n## Molding snakes\n\nWhen you get them for molding, if it is possible, do not remove their teeth if you [think you might] want to keep them, because having had their teeth removed, it hurts their gums and mouths, and they can no longer eat. You can keep [the snakes] in a barrel full of bran or even better of earth, in a cool place, or in a glass bottle. And give them some live frog or other live animal because they do not eat anything that is dead. Also I have noticed that&lt;div class=\"folio\" align=\"center\"&gt;- - - - - 109v - - - - - &lt;/div&gt; when they want to bite or to eat something, they [snakes] do not go at it head on, but sideways and by sinuous coiling, as do Satan and his henchmen. The snake has a small head, but a very large body; the entryway to sin seems small and inconsequential, but the consequences are great indeed. A snake can abstain from eating for seven or eight days, once he has swallowed a frog, and can swallow three or four frogs, one after the other, and what it has devoured does not rot and is not digested all at once in its stomach, but each part little by little, i.e. the bones and everything. The rest is just as fresh as when the snake ate it, such that when one bothers and torments it, it spits out what it swallowed up, which, in part, is totally digested, with the other part as fresh as if the frog were alive. It can hold a swallowed frog down for two or three hours and spit it out alive.\n\n",
  id: 253
});
index.addDoc({
  title: "Toad",
  author: null,
  layout: "narrative",
  content: "- - - - - 109v - - - - - \n&lt;span class=\"activity\"&gt;&lt;/span&gt; &lt;span class=\"activity\"&gt;&lt;/span&gt;  ## &lt;span class=\"animal\"&gt;Toad&lt;/span&gt;\n\n\n\nIf by chance you want to mold this ugly animal and if it should piss in your hand, it will sting your hand and cause it to itch, as if you had been holding nettles. But the very best remedy for this is to put your hand into fresh dirt, and to cover it as if you wanted to bury it. Frogs are not so beautiful when molded because they have shiny skin, and toads have lumpy skin.\n\n\n  at left bottom  margin of folio 109v\n\n  You can mold the toad hollow, and leaving a notch open on the underbelly, you will make it jump with the twisted cord of the saw. If it is a small, put it on a magnet cut small to the size of the toad, then put it in good vinegar.\n\n\n\n  at right middle  margin of folio 109v\n\n  If it is big, mold hollow, and if you want to mold it with its mouth open, put some cotton therein, and then put some melted wax on the cotton.\n\n\n",
  id: 254
});
index.addDoc({
  title: "Killing snakes for molding",
  author: null,
  layout: "narrative",
  content: "- - - - - 109v - - - - - \n \n## Killing snakes for molding\n\nSome put a drop of aqua fortis into their mouths, which stupefies them, so that the head and the body look dead. But the head is still alive, and when you stick it with a needle in order to fix it to your mold, it moves and spoils and undoes everything. Therefore, to kill your snake, put it into a bottle filled with good vinegar and some spirits. Do the same with lizards and other similar animals.\n\n\n  at left bottom  margin of folio 109v\n\n  If you want to keep them, you can put them in a pipe full of dirt in a garden outdoors, but it is necessary that the pipe be covered with latten wire, because otherwise, the snakes will crawl and climb up quite high.\n\n\n",
  id: 255
});
index.addDoc({
  title: "A cast of lead or tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 110v - - - - - \n## A cast of lead or tin\n\nBecause you want to cast tin very thinly, if your medal, plant or other thing you want to mold is thin and fine, make sure to include more tin, much more than lead, namely less than the fourth part of lead for three of tin. And moreover, one only puts lead in as an alloy. Contrarily, if you want to mold something strong and thick, put a lot more lead in than tin. And for the one and the other you can put in a little looking—glass tin, but only a very little, with a little resin, when you want to cast. Since then, when molding with pure new lead, I put in two ounces of pure tin for every pound of lead. And when molding with pure tin, I put in two ounces of pure lead for every pound of tin. I made some plants and snakes as if they were real.\n\n\n  at left bottom  margin of folio 110v\n\n  I cast tin when it was nearly red, and the same thing with lead, which however had not remained in the fire for too long, because it becomes brittle and burns up.\n\n\n",
  id: 256
});
index.addDoc({
  title: "Second Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 114r - - - - - \nAnnotations:\nBread as Mediating Material: Tactile Memory and Touch in Ms. Fr. 640, fols. 29r, 114v, 129v, 130r (Le Pouésard)\n \n## Second Casting\n\nWhen you have well molded the first part of the animal, that is to say the back, the spine, and the entire top part, and when the half—mold where the part is encased is hard enough  turn over the bottom and the sides of the belly, sometimes using a knife for the thicker parts, and then with a pen—knife for the places where the more fragile parts are encased, like legs, tail, and similar things. Because the head is higher, you will have to dig deeper to expose it and do a deeper notch that has to be well exposed, by enlarging it from the outside, in order for the second mold that you cast on top of it releases well. A process for which the animal himself can be useful because his nature so permits. However, make sure that you reveal the lizard’s throat more than you would do a snake, because the lizard has big jaws and big bones that do not cast as easily, and has deep ears in which the wet sand is not as easy to remove. But you will avoid all of this if you expose half of the head and those things that you know do not release easily. When everything is well exposed, blow over it and wipe each part again with a cloth made of swine hair, slightly dampened into salt water or clear water, do that gently, that way the lower part of your uncovered animal will be very neat. # 🝋 Once it is done, dip the covered side of your mold into water for a pater noster. It will suck water inside, that way when you’ll rub with oil the uncovered side, the oil will remain on the top, and to prevent the second cast which you will cast on top from sticking. Dip your mold into water, take a particularly fine brush and rub with oil the entire mold but the animal; it should not be touched with oil. Make sure to use you brush between the parts and on all the fragile parts. And if by mistake oil is soaked, dip the mold into water, as it is said above, and drop by drop the oil will come back to the top.\n\n\n  at left top  margin of folio 114r\n\n  Mold small animals as big ones, however, for small animals, use very fine tacks made of cords of cittern, short and long ones.\n  \nat left top  margin of folio 114r\n\n  remove all the little tacks with the help of very small flat pincers. # then + [illegible] # However, leave the tack which is pinned into the throat so that it will help you to turn the head over, because it is sunk deeper than any other part, because when you drew the plan, you put higher up. It is at the level of the head that you must make the biggest notch and you should start at that notch to expose and then keep following by looking at the traces left by the tacks.\n\n\n\n  at left bottom  margin of folio 114r\n\n  and if a small piece of nail, or piece of tail, or other fine things separate from the mold, put a little piece of wax between them, and join them with the tip of a hot iron wire, then smooth it in your mold with a knife, and make notches on the sides in order for the other half of the mold to adhere to it. 🝋\n   &lt;div class=\"folio\" align=\"center\"&gt;- - - - - 114v - - - - - &lt;/div&gt; \nThis thus prepared, put your first half—mold on the disc of clay, surround it with a clay circle and do a thickness mark similar to the first one. Then, with a rather thick brush, wet with spirits all your animal’s exposed half, without, if possible, missing any part, because therein lies the secret to casting neatly. Then, as fast as possible before the spirits evaporate, soak your sand, and cast it, shaking, blowing, and moving the mold, as you did for the first one, making sure that what you pour first on the animal is clearer than the rest, so that it is soaked everywhere and highlights the finer parts. So, leave it for fifteen minutes so it sets, then remove the clay circle and disc. And, with a knife, join you two molds together in a longish form, like a mandore, as we say, because of how you cast. Then soak a little in water the whole mold up to the level of the joints. Because this is another secret to separate them more easily. Otherwise, you would break everything. Separate them like this skillfully. After this, gently and patiently remove half of the animal still in the mold, pulling it sometimes on one side and sometimes on the other, in order to avoid breaking it, or ruining parts of the mold. The mold, being empty, rejoin both half so that no dust comes in, and put them aside until you want to heat them up, make the runners, the vents and put the clamps. As for the animal, to avoid it drying, and in order to be be able to use it to mold 4 or 5 of times, put it on water. I believe that it would be better preserved in spirits. However, it would be best to make the 4 or 5 molds the same day because these animals rot and will smell within the day. Having left your molds to dry out, for they will stay humid for at least a month, make the vents for one half.\n  \nat left top  margin of folio 114v\n\n  + Note that once you have made your second casting, if you left your mold without opening it for a day or a night, you would then need to put it into hot water or reheat it, rather than open it, like for the crab.\n\n\n\n  at left top  margin of folio 114v\n\n  If after both halfs of the noyau have set and hardened, it would not open if you did not dip it into water. But as you dip the back of your mold into water, oil comes back to the top and touches the joints which separates them.\n\n\n\n  at left middle  margin of folio 114v\n\n  However, be sure that your second mold is thick enough, and hard enough otherwise it could break while dipping it into water if you want to open it. To avoid this mistake dip the entire mold into water and rub it everywhere, if the mold has set enough it will harden. Then take both molds with a rough cloth, in order to grip it better. Then strongly separate the molds as if you wanted to tear bread apart. But in case it breaks, rejoin them, and fortifies the joints with clamps.\n   \nat right bottom  margin of folio 114v\n\n  Afterwards you can repair the mistakes with a small pair of scissors.\n\n\n",
  id: 257
});
index.addDoc({
  title: "Drying animals in an oven",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n##  Drying animals in an oven\n\n \nOne can skin small cats and remove their eyes and all their guts. Then place a small stick vertically between the teeth in order to open their mouths. Then with iron nails one should attach their feet to a small board, arrange the required position. Once they are tied by their feet with small iron rings, one has to hang them upside down into the sun. By doing so, they will get the right shape and dry, the belly will tighten and the the tail will remain high up thanks to the twist that you made. Once they are already a bit dry, one may twist the head as he wishes and secure the position with any tool. One may finish to dry the animal by placing it in an oven once the bread has been taken off. Then place some realistically painted lead balls or wax balls in the eye—sockets. One should paint them with gummed ink so that they look like jet. One can add a painted tongue, or horns, or wings or anything you may imagine, same goes for rats or any animal.\n\n which surround the fingers of the paws and which stick in the jacket of clay.\n\n",
  id: 258
});
index.addDoc({
  title: "Reddening lively crayfish which will look as if they were boiled",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n##  Reddening lively crayfish which will look as if they were boiled\n\n \n Rub your crayfish with good vinegar diluted with a little eau—de—vie and not much, then you can present them as if they were cooked and yet they will walk.\n\n",
  id: 259
});
index.addDoc({
  title: "Molding a single spider",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n##  Molding a single spider\n\n \n One has to display it on the jacket of clay as it is said for the vine leaf. Then do the first cast. And once it dry, peel the mold off to the middle of the legs and do the second cast.\n\nAlso. One cannot mold the hairy legs of big spiders or any other hairy animal if they had not been rubbed with wheat oil before they are laid flat. This will make the hair firmer and will dry very quickly. Hairy things entangle in the sand, and do not burn very well.\n\n",
  id: 260
});
index.addDoc({
  title: "Molding a single vine leaf",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n” \n##  Molding a single vine leaf\n\n \n Attach it with brass wire points on the jacket of clay and then cast the first mold. Once it is dry peel off the back side and make the second cast. Then peel away the back side, and make your second cast. Once it is dry, you may remove the leaf. You must heat your mold only once, because there is nothing to be burnt inside.\n\n",
  id: 261
});
index.addDoc({
  title: "Molding a crab",
  author: null,
  layout: "narrative",
  content: "- - - - - 130v - - - - - \n##  Molding a crab\n\n \n It is a secret and a masterpiece to mold [a crab] well because it is necessary to proceed differently [than you would] with other animals, because its shell is quite difficult to […] and that is why it is necessary to reheat the mold three or four times. And on top of all that, it leaves a hard crust [that is] gray like ash. It is not molded from one piece and one cast as [is done with] plants. Rather, [it is moulded] in two casts as [is done] with serpents which are easily stripped from it [the mold]. After it is opened, nimbly remove this crust with the very fine point of a pen—knife {and not with quicksilver which removes nothing from it} and likewise those small crusts of the second cast which get into the cavities that the sand or the molded animal made because it has curved legs. Here is the subtlety and the secret of stripping it. As you molded it [the crab] from the back side in the way [that you did for] the others [animals], remove the stomach and all the curved legs from it. Make your second cast in the way [that you did for] the other [animals], but as it will have set, take care that you not open the mold unless you have first reheated it well. Otherwise, because of its curved legs, you would break the whole thing. Herein lies the subtlety. If, after it has been well reheated and opened, you see that the crust is not burned enough, reheat [it] until it is burned [enough].\n\n\n  at left top  margin of folio 130v\n\n  It [a crab] can be painted like a crayfish.\n\n\n\n  at left top  margin of folio 130v\n\n  It does nothing.\n\n\n\n  at left bottom  margin of folio 130v\n\n  For opening the mold, it is not necessary to soak it because, once reheated, it will open itself by itself.\n\n\n",
  id: 262
});
index.addDoc({
  title: "Stag beetle",
  author: null,
  layout: "narrative",
  content: "- - - - - 130v - - - - - \n## Stag beetle\n\n \n Like a crab, it [a stag beetle] is also difficult to burn, therefore do [stag beetles] as you did crabs.\n\n",
  id: 263
});
index.addDoc({
  title: "For molding thinly",
  author: null,
  layout: "narrative",
  content: "- - - - - 130v - - - - - \n## For molding thinly\n\n \n After you have molded the first mold as the core, leave it to dry well before removing the figure from wax, so that the mold is not ruined. Afterwards, then make make a small lasagna of paste as thick as you like, and, once you have greased the cavity of your first hollowed mold with butter, apply the paste to it [the cavity of the first concave mold] and then the upper part of the second mold. If you grease [the mold] with oil, it will be soaked up [into the mold] and it will not be as clean as butter.\n\n",
  id: 264
});
index.addDoc({
  title: "Herbs difficult to burn in the mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 131r - - - - - \n##  Herbs difficult to burn in the mold\n\n \n Mold them in two or three castings; being annealed, your mold will open, and it will be easier to extract the charcoal from inside.\n\n\n  at left top  margin of folio 131r\n\n  Try [this]\n\n\n",
  id: 265
});
index.addDoc({
  title: "molded letter paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 131r - - - - - \nAnnotations:\nMolded Letter Paper\n \n## molded letter paper\n\n \n Write with some ink well thickened with gum or any other color dye which has body, and which is not erased if dampened with brandy. Then put your paper on the sheet of clay, and dampen it with brandy. Cast both sides [of paper].\n\n",
  id: 266
});
index.addDoc({
  title: "Adorning beds, mirrors and similar things",
  author: null,
  layout: "narrative",
  content: "- - - - - 131r - - - - - \n## Adorning beds, mirrors and similar things\n\n \n Model any drawing in half relief on a flat slate in order to set it on round or flat things. Cast with very fine tin, then you can gild it with gold leaf, and set it wherever you want. Fill the bottom of the relief with small rubies, orpiment, or any colored little grains.\n\n",
  id: 267
});
index.addDoc({
  title: "Training a dog",
  author: null,
  layout: "narrative",
  content: "- - - - - 131r - - - - - \n## Training a dog\n\nYou need to keep your dog attached; when it does what you command, to win its love, give it a piece of cheese which was held under the armpit. This cheese would be a bad drug if the master, or the apprentice, is red—haired.\n\n",
  id: 268
});
index.addDoc({
  title: "Molded wax",
  author: null,
  layout: "narrative",
  content: "- - - - - 131r - - - - - \n## Molded wax\n\nWax representations made from white lead and cerussite are not made to be burned and melted in a mold where you want to cast silver and gold; this would make it brittle. Moreover if you use such a mold, the wax would be stripped thanks to the violence of the fire which makes it boil, and the mixture made of cerrusite or any other metal would attack the mold. That’s why if you want to sketch things\n\n\n  at left bottom  margin of folio 131r\n\n  +White wax is more delicate than the other, and it doesn’t leave any filth when you want to mold it as a core, or to mold hollow.\n\n- - - - - 131v - - - - - \nto be cast with gold and silver. Do not add to your wax all the drugs you are preparing, but only melted sulphur, as the candle melts, and also candle smoke. Melted sulphur falls down to the bottom of your mold, but lets the wax keeps some of its quality, melting it but leaving it a little firm. You can thus melt your wax representation on fire. If your wax is composed of cerussite or something similar, you need to put your mold into boiling water.\n\n\n  at left top  margin of folio 131v\n\n  You don’t need all this to mold flat representations made of wax, because the wax can be removed completely from the mold, and won’t remain inside it.\n\n\n",
  id: 269
});
index.addDoc({
  title: "When lead or tin casts fill with bubbles",
  author: null,
  layout: "narrative",
  content: "- - - - - 131v - - - - - \n##  When lead or tin casts fill with bubbles\n\n \nIf your casted work became porous, it can be repaired with very firm wax, and you can gild or silver it afterwards. If you cast fine, the alloy of one ℥ of lead to one lb of tin is good. But if you cast with lead[ligue illegible], indeed you need one lb of lead to two ℥ of tin, because lead is fat and sticky, goes over the alloy. I have cast a very small lizard that way. If you cast something thick, which keep the heat for a long time, it will make bubble if there is not enough tin. Your mold should not be cold, but cool enough that you can hold it without burning your hand, or that you can hold your finger into the cast without burning yourself. Your tin or lead must be like red. Cast your lead first, then cast tin. When you are going to cast, add a piece of resin to your mixture, then a little looking—glass tin. If you add too much lead to your tin, the mixture wouldn’t be fluid enough. To know [the right proportion], If tin cries loudly, it means that there is not too much lead; if tin cries softly, it means that you added too much lead. Be wary\n\n\n  at left middle  margin of folio 131v\n\n  You can solder with the same matter, then rework it and [remove away all the unwanted thick parts] with a burin.\n\n\n\n  at left middle  margin of folio 131v\n\n  Tin is a metal that can[…], makes bubbles and burn, and more capricious to work with than gold and silver.\n\n\n\n  at left bottom  margin of folio 131v\n\n  Lead must not be only red, it must be quick, and as liquid as water, which is a sign of its perfect heat. Your mold must be so hot that you couldn’t bear to put your finger into it. Do not open your mold until is has cooled down. Just as for silver and gold, it is a sign of good casting when lead comes out through the vent holes.\n\n- - - - - 132r - - - - - \n” \n not to heat your mold too hot because it makes it brittle, it makes bubbles and shrinks tin, and would also break the molded thing. Do not dip you hot mold into water because tin and lead would shrink.\n\n",
  id: 270
});
index.addDoc({
  title: "Mold made from two casts",
  author: null,
  layout: "narrative",
  content: "- - - - - 132r - - - - - \n## Mold made from two casts\n\n \n It opens once anealed. To clean it after, fix the clamps again, lute the mold, particularly the joints. Then let the earth slowly dry. When it doesn’t smoke anymore, let the mold cool down until you can hold it without burning your skin. Then put your molds into the presses, or into a pot filled with sand, and cast with tin. If you cast gold or silver your mold needs to be cast twice, and cast when your mold becomes red—hot.\n\n\n  at left top  margin of folio 132r\n\n  If your heated mold […], shrinks because of the bad quality of the plaster, open it after the first heating, tighten it, then lute it and clamp it again.\n\n\n",
  id: 271
});
index.addDoc({
  title: "How to anneal the molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 132r - - - - - \n## How to anneal the molds\n\n \n Light your charcoals from the forge, then place them in a line in a corner of the forge according to the size of your mold, in order that it be surrounded with 3 or 4 fingers of charcoals, particularly at the bottom of the mole, where it is thicker. Then put your molds on these charcoals —— and not on a grate as some people do —— because they would get too strong a heat. Let your furnace heat up gradually for a while, always adding burning charcoal. As long as the mold is humid, your charcoal will be dampened at the bottom, but when it is dry, the charcoals start to blaze. When one side of the mold is dry, turn over; when both sides are dry and don’t smoke anymore, increase the heat and cover your mold with burning coals. When the mold starts being red, do not blow on it with small bellows, because the mold would burst. Similarly, when your mold becomes red—hot, keep it well covered with burning charcoals and do not uncover it because it would crack. Prevent the draft from a window from reaching it. Then let it cool down.\n\n\n  at left middle  margin of folio 132r\n\n  When you want to anneal your molds, luted or not, do mark the belly of your mold, in order to place that side at the bottom, against the burning charcoals, because if the intensity of the heat made the mold crack, it would be better that it do so on the bottom part instead of the top part.\n\n\n\n  at left bottom  margin of folio 132r\n\n  If your mold is small, do not heat it as long, otherwise it would crack and be damaged.\n\n- - - - - 132v - - - - - \ndry by itself. When your mold starts to redden, it will soon be become completely red—hot. But make sure that its bottom is red—hot too, without any black spot.\n\n",
  id: 272
});
index.addDoc({
  title: "Common quarry sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 132v - - - - - \n## Common quarry sand\n\n \n In a frame, If you cast it hot, sand will bubble; thus you have to just dry it.\n\n\n  at left top  margin of folio 132v\n\n  I have tried to prevent molds blended with sand from cracking when annealed, and thus not get any with flaws that crack.\n\n\n",
  id: 273
});
index.addDoc({
  title: "Crocum ferry",
  author: null,
  layout: "narrative",
  content: "- - - - - 132v - - - - - \n## Crocum ferry\n\n \n After I processed it with vinegar and reddened under heat, I had it ground very finely on the porphyry, until there could be no ruggedness felt under the nails. Then I soaked it in very good vinegar for 2 or 3 days, stirring the mixture several times a day. Then I boiled it and made it red—hot in a pot, and put the whole thing into an air furnace. I obtained a mass full of eyes, but that crumbled finely between the fingers. I mixed half as much as stone alum in the sand. I diluted the sand very thinly, and molded a very small lizard, which molded very cleanly and finely. Crocum ferry does not make the mold harder, but makes it firmer. When your mold is soft and fat under your nail, it means that the crocum is good, very fine and well prepared. You can add any quantity of crocum, your mold will not be damaged because it is a friend of gold. I think it would be the same with silver. And in order that molds made with it do not crack, make it with needle filings.\n\n\n  at left top  margin of folio 132v\n\n  Sand is better made with distilled vinegar.\n\n\n\n  at left middle  margin of folio 132v\n\n  You can add this sand to the molds you want to use to cast silver, because it make molds firmer, and when you scratch it, you will find it a bit rougher than the other molds not made from this sand. You mold very clean with this sand.\n\n\n\n  at left bottom  margin of folio 132v\n\n  You can use this one for all molds, because it prevents them from cracking and bursting when heated. This sand withstands several casts for molding flat medals. Sand from steel or needle filings is redder and better.\n\n\n",
  id: 274
});
index.addDoc({
  title: "Gilding animals casted with silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 132v - - - - - \n## Gilding animals casted with silver\n\n \n You can gild them with an amalgam, the lines won’t be damaged if they are made from silver.\n\n",
  id: 275
});
index.addDoc({
  title: "Hard wax to imprint seals",
  author: null,
  layout: "narrative",
  content: "- - - - - 133r - - - - - \n## Hard wax to imprint seals\n\n \nOne makes these [seals] out of white wax which is harder than the other and one mixes in it some cerussite or leaded white very finely ground such that it is as hard as you like and mix in a drop of turpentine to bind it. Afterwards mix it in the color that you want. It is in wax that serves goldsmiths for modeling.\n\n",
  id: 276
});
index.addDoc({
  title: "Casting the feet of small lizards in gold and silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 133r - - - - - \n## Casting the feet of small lizards in gold and silver\n\n  \nBecause the feet of these [lizards] that are very small are [also] very fine, once you have molded the top and you have uncover the vents and underneath the feet are covered lightly with wax, and then cast a second mold. And the wax that one removes, it leaves a little cast for these said feet, and again such that the underneath [part] comes out in one piece that you can repair well, And the scales on top of the toes come [out] well.\n\n\n  at left top  margin of folio 133r\n\n  Around the big lizard nails, put on each a small round of wax to make the cast like this. \n \n\n",
  id: 277
});
index.addDoc({
  title: "Marks [made by] the [pin] points of iron thread which one finds on the head of an animal",
  author: null,
  layout: "narrative",
  content: "- - - - - 133r - - - - - \n## Marks [made by] the [pin] points of iron thread which one finds on the head of an animal\n\n \n With the points [or pins] with which you have dressed [your animal] all over, do same with the head, but [out of] the head which is pierced, a certain moisture seeps out around the wound and this little exudation prevents the sand from covering the point well and there always remain little pinpricks. But to avoid this, you can plant in the plaster of the said blunt pin point and around the upper part of the point, and over this point, there put a little hard wax or a little mastic or cement. And by the medium of the hot thread of iron there you can hold the throat of the animal which one removes [the iron] when you come to uncover the vents and the throat for doing the second cast.\n\n",
  id: 278
});
index.addDoc({
  title: "Clamps and the broken mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 133r - - - - - \n## Clamps and the broken mold\n\n \n When you have done the first firing and taken off the clamps and you have opened your mold to clean it by taking off the bubbles with quicksilver which one cannot do with closed molds, reclose the mold and reattach the clamps but not in the same place as the first time. Reapply lute and dry it but if this is for casting silver or gold [use] lute with the rest of sand which has been used because this is the best netting. If your mold is broken in refiring you can augment it with clamps and lute.\n\n\n  at left bottom  margin of folio 133r\n\n  X\n\n\n",
  id: 279
});
index.addDoc({
  title: "Porosity and little holes which are in the mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 133v - - - - - \n## Porosity and little holes which are in the mold\n\n \n It oftens happens when you cast two or three molds one after the other using the same dish, because the last casting comes from the bottom of the dish and is thicker, and then often the last cast which comes from the bottom and which is the thickest of the dish, may easily become porous. Cast thinner and neater, as long as you blow very strongly on the soaked sand while casting in order to clear the little air bubbles.\n\n\n  at left top  margin of folio 133v\n\n  When the sand is casted thick, it often becomes porous\n\n\n",
  id: 280
});
index.addDoc({
  title: "Thing that cannot be released from the mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 133v - - - - - \n## Thing that cannot be released from the mold\n\n \n You must cut it inside the mold in order to burn it. Cut it with scissors at once, that way blood doesn’t flow on the mold, and doesn’t make dirty. Because this dirt would be removed with difficulty when reheated. Then place your mold into a furnace, or something similar, in order to quickly dry the mold which must be removed before the forming of crusts or molds.@\n\n\n  at left middle  margin of folio 133v\n\n  + When you mold small lizards, and when you want to peel away the first molded part, start to peel away the heads, you will know its place thanks to the needle. Don’t peel away the legs before peeling away the entire body, to avoid that the naked body, moving,doesn’t remove the legs from their place, which would not be easy to put back into place. When you remove the small needles fixing the legs, block the legs or press the legs with something, that way while removing the needles the legs won’t move; finally, you can fix the legs again with wax.\n\n\n",
  id: 281
});
index.addDoc({
  title: "Various animals entwined",
  author: null,
  layout: "narrative",
  content: "- - - - - 133v - - - - - \n## Various animals entwined\n\n \n You can entwine a snake with a lizard, each one biting the other, or a snake eating a frog, or a wall lizard or something similar. But since these interlacings cannot be stripped, cut what’s possible, and allow the rest to burn. To make the mouth of the snake, which must stand high, hold a wall lizard, which is small and would need to be held in the air, because the snake’s head is higher, put under the wall lizard a mound of earth suitable to support it. And if you place the mold in a furnace, the animal drying quickly, it will quickly shrink, then it will burn more easily. These interlacings are also made to mask wounds or defects on the animal which happen when we catch them. Do not forget to join with wax, applied carefully with a hot iron wire, all the parts of the animal which are one on top of the other, or those which are not well pressed on the slab of clay, so that the soaked sand does not remove them. Do that in order to\n- - - - - 134r - - - - - \navoid putting pins that should not be put, only on the top of the head, the thickest parts of the body, and on the delicate parts like the middle of the lizard’s feet, the nails of which you will drive into the clay, thus they won’t move. Once your first mold is casted, peel away the belly of the animal, but do not forget to put some tenuous little pieces of wax at the tip of the lizard’s feet. But if it is from a wall lizard, lightly cover all the sole of its feet with wax, which will be removed with the second cast. A cavity is left which will be fill these little fingers with metal. then rework it. Make sure that wax is fixed well on the parts of the animal which are one on top of the other, so that the soaked sand which comes in does not make them move. If that happened your jacket of clay would be spoiled and your mold wouldn’t get the right thickness, would have holes, and would be spoiled. To obviate that you can make a thicker mold. If this occurs you could rework it in this fashion.\n\n",
  id: 282
});
index.addDoc({
  title: "To repair a pierced mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 134r - - - - - \n## To repair a pierced mold\n\npairing   \n If the molded animal pulls of in certain places, moves from the place you had fixed it, or has not completely died, or if you didn’t fix it well with the iron pins or with the melted wax, or if the animal hasn’t the right thickness on the outside at the relief, or if it is pierced, instead of removing the animal from the mold, peel away the weak parts, or the pierced part, and make holes all around these parts, then dip the back side of the mold, quickly cast onto this place with the same soaked sand which will go into the holes, the cast will adhere to the first cast. But you will have to lute this spot afterwards.\n\n",
  id: 283
});
index.addDoc({
  title: "Sand made of crocum [ferri]",
  author: null,
  layout: "narrative",
  content: "- - - - - 134r - - - - - \n## Sand made of crocum [ferri]\n\n \n You can use the mixture made of crocum ferri to cast silver or gold, this mixture will make these casts firm, and prevent these from cracking and making burrs. And I believe that for flat things, it would withstand severa casts. Which however is not commonly done for gold and silver.\n\n\n  at left bottom  margin of folio 134r\n\n  Try crocum ferri for lead and tin.\n\n\n",
  id: 284
});
index.addDoc({
  title: "To make gold fluid",
  author: null,
  layout: "narrative",
  content: "- - - - - 134v - - - - - \n## To make gold fluid\n\nPut as much verdigris as sal ammoniac, as much borax as saltpetre. But don’t add a greater quantity of borax and saltpetre than half the quantity of verdegris and sal ammoniac, in fact add as much borax and saltpetre all together as verdigris. Grind into powder the ingredients on the marble slab, then grind again with very good vinegar until it is very fine, like a ground color, grind verdigris with oil, then leave to dry if you have time, if you haven’t so much time dry it with the fire of the forge, make so that it is very dry.\n\n\n  at left top  margin of folio 134v\n\n  Grind\n\n\n\n  at left top  margin of folio 134v\n\n  One of the principal things for casting is to cast very hot, especially large metals\n\n\n",
  id: 285
});
index.addDoc({
  title: "Casting big works with gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 134v - - - - - \n## Casting big works with gold\n\n \n Not only should one clamp the mold very well, but also strengthen it with good iron wire links or adequate straps.\n\n\n  at left middle  margin of folio 134v\n\n  Before casting with gold, clean thoroughly your forge with lead and tin.\n\n\n",
  id: 286
});
index.addDoc({
  title: "Secret for soldering small works made of gold and silver",
  author: null,
  layout: "narrative",
  content: "Secret for soldering small works made of gold and silver\n\n \n If some little pieces of legs cannot be easily removed from gold or silver casting, it is because you didn’t cast wax under these parts. Beat some soldering gold very finely, then cut it into very fine flakes, cut the quantity you need. Take some of this phlegm or white and thick saliva which is on the teeth, put some of this matter to the place you want to solder with the point of a burin, then place your flakes, then put to the opposite part a mixture made of a small quantity of soaked fat earth and saliva, thanks to the mixture the solder will better adhere. Then pulverize a bit of borax on it, and heat up Quince pulp seed water to a boil and others too.\n\n",
  id: 287
});
index.addDoc({
  title: "Colors for gold, or sauce",
  author: null,
  layout: "narrative",
  content: "- - - - - 135r - - - - - \n” \n## Colors for gold, or sauce\n\n \n Take as much verdigris as sal ammoniac, &amp; saltpetre the size of a bean. Because if you put in too much, it would make the whole thing boil so much that it would all pour out. Saltpetre is only put in to make it boil, so that you know when the material has boiled enough. This color put on sour melted gold makes it soft instantly.\n\n\n  at left top  margin of folio 135r\n\n  Softening gold\n\n\n",
  id: 288
});
index.addDoc({
  title: "Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 135r - - - - - \n” \n## Casting\n\n \n It must be lengthened out with respect to the thing you have molded. And at a minimum for large molds it must be four or five fingers in length. You can make it large enough for half the mold &amp; then divide it in three points of such a sort, and so the molded things will [each] be small. But your points must be small. And in the middle of the casting &amp; of its points, make some holes to impede the fury of the metal &amp; make it run more softly. It is also necessary to fix the bent parts of the animal with little notched lines, and similarly the end of the tail and other fine parts so that the metal goes throughout &amp; flows from one part to the other.\n\nDo not forget to make a wax cast of the paws of [illeg] &amp; things as subtle as this.\n\n\n  at left top  margin of folio 135r\n\n  When you have molded an animal in the first part of the mold, do not let this part dry out before you have removed the said animal, because when the mold dries out it will shrink and it will also make the animal shrink. Keep it therefore in a damp &amp; humid place until you have done it. \n \n\n",
  id: 289
});
index.addDoc({
  title: "Vine leaf and small frog",
  author: null,
  layout: "narrative",
  content: "- - - - - 135r - - - - - \n” \n## Vine leaf and small frog\n\n  \n To mold, take vine leaves as they are blooming, just as with all herbs &amp; flowers, or a young vine regrowing after it has been cut or when the leaves come off in autumn, because new leaves are knottier &amp; have more evident veins. By contrast, old leaves are smooth all the way through &amp; full of holes in many places. Place therefore your leaf, its back behind it against the clay plaster, and fasten it with little pins. Leave it nevertheless with its natural curling. And make a notch in the clay to hide the stem for the first cast. And when it’s done and dry, take out the stem of the leaf and clean it well with your jacket and press it with a little scoop of clay. Afterwards, make many castings around the leaf with wax, as you know well, &amp; make a slender casting &amp; with many lines &amp; knots.\n\n\n  at left middle  margin of folio 135r\n\n  Vine leaf is painted with a green made of scudegrun &amp; verd de terre.\n\n\n\n  at left bottom  margin of folio 135r\n\n  You can cast a spider or frog &amp; whatever you like on the leaf.\n\n\n",
  id: 290
});
index.addDoc({
  title: "Casting gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 135v - - - - - \n” \n## Casting gold\n\n \n Take a crusol that can contain a certain amount, as you wish to place roughly crushed borax into it. Place [the borax] at the bottom and then the gold on top of it. Arrange the coal in the forge in such a way that the wind of the bellow will blow above the crusol and no on its side as it would cool it down and would not heat it enough. Also, make sure it is three good fingers away from the wall of the forge so that it is quite surrounded by coal. Allow the crusol to anneal until it is quite red. Then, have your boy strongly blow the bellow with long pushes, as in this manner it heats it better. Meanwhile, once the gold will be melted, blow a small bellow above it. Because [otherwise] the gold would turn sour and would acquire some kind of coat. As long as there will be some swirling smoke as you blow this way, it means that it is not soft enough for the cast. Therefore, uncover the melting pot and without displacing it and without stopping the bellow, tilt it towards you so you may well see what is inside. Throw a ferue of borax in it and blow wind towards it with the small bellow in a jerky fashion. Should there be coal inside, blow a bit stronger to make them come out. And if the gold still smokes and swirls, add borax again and blow above it. Beware that it is still sour and not soft enough, it will show a coat when you blow it as if it had cooled down. By contrast, if it does not show this sign, it is soft enough. Then, blow strongly so that it [the gold] is quite heated and once you think it is hot enough, throw colour on top of it in the crusol and the colour should be composed as following: verdigris, saltpeter, sal ammoniac, and a bit of borax. And continue blowing with the small bellows, and the gold will turn shiny like\n\n\n  at left top  margin of folio 135v\n\n  If you cast in gold some piece of important [dimensions], lute your mold with the same sand or put crocum on it.\n\n\n\n  at left top  margin of folio 135v\n\n  If you wish to cast some large work, or of important [dimensions], create at the bottom or at an extremity of the forge a vented furnace where you may hold your mold in the sand so red.\n\n\n\n  at left middle  margin of folio 135v\n\n  One may cast two or three pounds of gold.\n\n- - - - - 136r - - - - - \na mirror. And once you will want to [start] casting, put a bit more colour in and let it rest a little, still blowing wind with both the small and the large bellows. Finally, place your mold quite red between the small molds or in a crusol full of sand quite hot and [start] casting. And once it will have stuck, you may, if you wish, throw it into water as gold does not get damaged like tin which breaks.\n\nTo melt gold bullion, there is no need to blow above [the crusol] with the small bellow.\n\nFor large works, the crusol made of sand has to be placed in a wind oven so that it is all red at the end of the furnace.\n\nGold, when exposed to wind or when forged becomes black. But a bit of aqua forte removes [the black] instantly.\n\nIf you have to forge a work made of gold on brass, as is done on small statues, put a lead sheet between the gold and the brass, and rather than anneal it and put it back in the fire, dip it in the aqua forte and it will be soft.\n\nIt is enough for the cast to be of the same thickness as the medal, that it from the middle of the cast, up to the medal. But if the medal is very thick, one should not thicken the cast as a result, because a thick cast never comes out well. It may be done large to embrace the medal as much as possible.\n\n",
  id: 291
});
index.addDoc({
  title: "latten casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 136v - - - - - \n## latten casting\n\n \n Take latten from skillet pans, used to make baby’s cereal, which is doulx and apt for the cast. Some people say that counter from Germany contain a lot of calamine. However, when they are tempered, calamine evaporates, calamine mixed with melted latten always evaporates, because latten becomes red again, thanks to the reiteration of melting. However, fresh calamine and only fresh calamine, which is blended with remelted latten, makes latten run, and allow a clean cast. Because calamine which is added to remelted latten is half—damaged compared with its natural state. This half—damaged calamine make latten porous and agitated because it has a tendency to evaporate. Thus add only very fresh calamine to melted latten. Make sure to cast your mold very hot, you mold must become red—hot, like molds to cast gold, silver, copper and metal. If you pour fresh calamine, avoid its smoke which is pernicious. To cast a medal, I took thirty counters from Germany and xii clous de rosette made of doulx latton, like for claires medals which are made of soft latten. This matter contains a lot of calamine like all kind of yellow latten, and make a lot of smoke which prevent latten from running, and make it porous, that is why it is necessary to make many vents and to cast very hot, latten must be as white as water, or as melted silver or as a polished mirror of steel. The second fusion will come out much better because evaporated calamine does not make as much smoke. If you use a molding frame that does not break and holds its own, the second [casting] will come more neatly out of the mold, because the frame is impregnated with the smoke of calamine. If you add sal ammoniac to your latten, this latten will be clear and shiny, but will be even more shiny with huile tingente. Do not use another sand than the above mentioned to mold a noyau, and the mold must become red—hot, like a mold to cast gold. Make a lot of vents. If you cast yellow latten with the prepared tutty you will not get any smoke.\n\n\n  at left top  margin of folio 136v\n\n  This metal is capricious to cast because of the smoke of the calamine. Do not leave it out of the fire, as some do with silver. Because when air or wind touch it, the mold gets cold at once. When you cast it, this metal always leaves burrs, like when casting glass. Foundry workers do not usually use this very yellow latten as much because of the calamine which is heated. They cast red copper and turn it yellow with fresh calamine, or with some prepared tutty. Before casting, clean it with charcoal with a quere made of copper or iron. Then cover it with a cloth soaked in lard blended with saltpetre, or sal ammoniac, in order to protect it from wind, which would cool it down.\n\n\n",
  id: 292
});
index.addDoc({
  title: "Casting red copper",
  author: null,
  layout: "narrative",
  content: "- - - - - 137r - - - - - \n## Casting red copper\n\n \n Pure cauldron red copper, or copper of any other small works, is good to cast. To make it runny, add some sal ammoniac to it, and when you are about to cast, add a little bit of fine tin. One must cast the copper very hot into the mold, so that it is burning and very red, like gold, silver, latten, and metal. You will know that it is hot enough when it is clear and shining like a newly polished steel mirror, or like melted silver. Protect it from wind so that it doesn’t cool down too soon. Cover your cast with tow in order to prevent it from cooling down. Red copper is cleaner than latten, which smokes a lot, which prevents the metal from running. I have moulded it as a noyau very neatly, and as thin as a piece of paper. It must be very hot, white and shining like melted silver, or a mirror. I have moulded it as a noyau with the same sand mentioned above.\n\n\n  at left top  margin of folio 137r\n\n  It takes more time to melt copper and latten than any other metals, even red copper. It will run and will comes out well if you cast it very hot, and as thin as water.\n\n\n\n  at left top  margin of folio 137r\n\n  Remove your mold from the fire, and set it into embers, which should fill a pot or vessel.\n\n\n",
  id: 293
});
index.addDoc({
  title: "Huile tingente to make metal runny",
  author: null,
  layout: "narrative",
  content: "- - - - - 137r - - - - - \n##  Huile tingente to make metal runny\n\nTake some mercury, some real sublimate of venice, and not sublimate of arsenic, aes ustum a poix, sal ammoniac, a poix. Ground everything separately, then blend them together in a glass bottle, and put it on warm ashes. You will see that everything melts like wax, and will have bright colors. Leave to set, add a small quantity of this mixture on every metal, it will run marvelously.\n\n\n  at left middle  margin of folio 137r\n\n  Foundry workers who make large casts to mold statues, clean the dirt from these molds with calamine, and a lot of sal ammoniac in order to make moulds clear and neat. When they want to cast they add a lot of tin. Dampness and cold could spoil their works, that is the reason why even a small source of water in the hole can damage the whole thing.\n\n\n",
  id: 294
});
index.addDoc({
  title: "Clamps",
  author: null,
  layout: "narrative",
  content: "- - - - - 137r - - - - - \n##  Clamps\n\n \n To make clamps use flat tongs made from wire, which is reheated and bent, and hammered on anvil. Since those clamps are thinner, they burn more easily, being used in reheated molds. So use new clamps. \n \n",
  id: 295
});
index.addDoc({
  title: "Wetting sand to mold flat medals",
  author: null,
  layout: "narrative",
  content: "- - - - - 137v - - - - - \n## Wetting sand to mold flat medals\n\n \n Flat medals, made of wax or metal, must be oiled very lightly and then touched with a brush of spirits. So that the already moistened mold takes well the oiled thing without rejecting it, one warms the water well in order to wet the sand, because with cold water it would be rejected. It is necessary to oil medals, because they do not expand and in this way would break the mold. Animals, which expand, do not need oiling. The hot water much be of such a heat that you cannot keep your figure in it without it becoming too warm. Wet the thickest sand for flat and solid medals rather than [for] lizards and finer things. Once your sand has set, clean and scrape your mold on one side and the other, and on the bottom edge of the thrown side of the medal, make a notch so that it is easier to take out. Lower the mold, scraping what surrounds the medal, so that on all sides you can take it out easily without it damaging the mold. Then make some gashes around the first mold used to throw so that the second time that you throw in it, it will be identical to the first one, and in the same way, make a notch at the bottom of the mold, where the held of the item cast lies. Also make some [gashes] in the sides of the cast. This done, wet the back of the first mold in oiled water, and after the second casting moisten it with warm water if you have molded your medal in a noyau mold. Having done the first cast, and this one having set, cut around the edge of the medal with the point of a knife so that it comes out of the throw and is not buried in it. Then having made the second cast, and having opened your mold, take away the medal in one go, with two knife points, one on the side of the cast object and one on the side of the head, which is at the opposite end.\n\n\n  at left middle  margin of folio 137v\n\n  Take care not to oil your medal too much because if the seeps out, it prevents the sand from serving its purpose and coming together and renders it wavy and lumpy. You must only touch the middle of the medal with the tip of your oil brush and then smear the oil everywhere.\n\n\n\n  at left bottom  margin of folio 137v\n\n  Make especially sure that the throw is as wide as you can on the medal and holds it together well. The gate of your cast must always be big and always narrowing as you go towards the medal. Also do not forget to notch the gate of your cast.\n\n- - - - - 138r - - - - - \nIf you want to cast gold, silver, copper or brass, it is necessary that they be perfectly red, and fired on the inside when you cast, and perfectly reheated twice, if there is something inside to be burnt and cleaned.\n\nThe molds of animals that you burn must be reheated in such a manner that the animal burns up. But if it has big bones, it is frustrating to take out and ☿ often breaks delicate things because of its heaviness. One does not put ☿in molds that can open. It is often molds for flowers that do not open because they are cast in one go.\n\nWhen you want to reheat your molds, fix cramp—irons on the joints, so that when they reheat they will not bend, contract or break. This is done once the cast is made.\n\nThe scrapings of the mold can also be used instead of bricks after being reheated, and also the leftover bits of the mold that have already been used. You can also pat it over important things, like works in gold or silver. You can also reheat it and blend it with water diluted with sal ammoniac, like spar from Germany, and is excellent sand for box molds for all metals.\n\nThe molds with things that need to be burnt out inside them, those ones will not open until the thing that is inside is burnt, like the molds for crayfish, crab, great—horned beetles. Do not open the molds in which you will burn something, not before the thing is burnt, it could be crayfishes, crabs, stag beetles, pictures, and pieces of wax and black sulphur, which do not come out of the mold [easily].\n\nYou must not mold on brick or wood because they absorb and attract water too early, and do not allow the sand to set. The best place for [the sand] is on a fresh layers of clay. And yet, I have experienced that grey earth dries out the mold too quickly. Yellow [earth] is better.\n\n\n  at left middle  margin of folio 138r\n\n  For medals, and flat things, the sand must be quite thick and moistened so that it sets quickly. And when the sand is thusly thick, you can shake and move the table where you mold lies, so that [the movement] makes the sand go everywhere. But when the sand is clear, as for flowers and herbs, you cannot shake it, nor can you do it when there is something attached to wax or other things which are prone to come off, such as the legs of crayfish or other similar things. And if by chance your sand is too thick, you must quickly add some water. And having put the sand in the water, examine it until it is thick on the bottom and clear on top. The clearest is thrown in immediately and then bubbles and the thickest is thrown in at the end so that it strengthens the mold.\n\n\n",
  id: 296
});
index.addDoc({
  title: "Talcum mixed with the molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 138v - - - - - \n##  Talcum mixed with the molds\n\nI used the one from which I had extracted the oil. I crushed it very finely even more into a steel mortar with a pestle [which was] rough like a file. I crushed it very finely into a cottony, downy powder. I mixed it with the sand and soaked both matters together, and I casted it en noyau. It molded very clean and there is no doubt that it will withstand fire.\n\n",
  id: 297
});
index.addDoc({
  title: "Gold casted very thinly",
  author: null,
  layout: "narrative",
  content: "- - - - - 138v - - - - - \n## Gold casted very thinly\n\n \n When goldsmiths have to solder something quickly but don’t have enough time to forge it, they melt gold and then they pour it on a cloth or on anything else that withstands fire. Then they flatten it swiftly with a hammer or another similar tool, and it [the gold] is very tenuous and it even retains the impression of the cloth.\n\nUnalloyed pure gold can be cast into a medal but not into herbs and lizards or other very delicate things if it is not alloyed.\n\nA pansy which is oiled with wheat oil can be cast with alloyed gold.\n\nAnd other fruit leaves, but with branch[es] that are not large and especially the leaves, once cast, can be soldered.\n\n",
  id: 298
});
index.addDoc({
  title: "Imitation diamonds set into the work",
  author: null,
  layout: "narrative",
  content: "- - - - - 138v - - - - - \n## Imitation diamonds set into the work\n\n \n Spread a fine layer of imprinting black wax on the inside of the frame then coat it inside with wheat oil, then dust it with lamp smoke because this color should not be lustrous for fake stones. Having done this, set your stone with a piece of wax then, with a steel point, or a small finishing hammer, join the edge of the frame with the stone, so that light cannot get in but be careful not to hit the stone, which would break.\n\n",
  id: 299
});
index.addDoc({
  title: "Casting with lead and tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 139r - - - - - \n## Casting with lead and tin\n\n \n  The way I have done it  for lizards and serpents is with two ℥ of pure tin for one lb. of unrefined lead that is impure.The mold is made out of the aforementioned sand, common for all metals, when it is reheated, leave it to cool until you can put your finger in it without causing a breach in the gate of the cast. As for the lead, it is melted in a crucible with a bellows’ fire until both the crucible and the lead are red. When it gets to that state, cleanse it anew with charcoal or with a specially made scraper or with the pufts of the little bellows. This done, leave it to rest in it red state and you can even reheat it, then if you want, throw in a bit of resin to burn away the filth. However, some think it best not to put any in because it leaves filth. But when they are ready to cast, they cannot forget to also thrown in a bean—size quantity of bismuth for each pound of lead. And it must be as red as the melted metal when it enters the mold. If the mold is large, it is much better to put in in a press so that they join well and so that the lead does not come out of the mold. However, should this happen, and that for the first, second or third time your mold does not fill up, cast heartily because for as long as your metal is red it will mix and join with the other one and will come out very neatly like the main one. The same thing can be said for pure tin used for thin things. And that way for doing pure tin is one ℥ of new lead for one lb. of the former. Large molds must be put in a press held tightly between two layers of copper, and then bury the whole thing in sand, which is better than ashes, because being heavy, it will seal better. Otherwise large molds are prone to open because the metal is heavy. Some make square molds\n- - - - - 139v - - - - - \nare made of earth or blades of copper, or iron, or wood covered with white iron, in order to bury more easily these aforementioned molds between the thin sheets of copper, estric or one of iron.\n\n\n  at left top  margin of folio 139v\n\n  When the metal is thick, you do not need to cast as hot as when it is thin.\n\n\n\n  at top  margin of folio 139v\n\n  When you melt this often, it becomes sour and fragile because it has to be cast very hot and it makes it half—calicanated. Use new stuff.\n\n\n\n  at left top  margin of folio 139v\n\n  +\n\n\n\n  at left top  margin of folio 139v\n\n  Note that If you want to cast with cuttlefish bone, they cannot be too warm because that would burn the cuttefish. For this effect, try paper. It it becomes brown, it is enough, and it is good for casting, but if it blackens the paper, then it is too hot.\n\n\n\n  at left bottom  margin of folio 139v\n\n  If you want to cast paper with writing on it, make a mixture with half lead and half tin. As soon as it is melted, throw it between two pieces of cardboard on a flat place that is level. And with a point or gold or hard wood, engrave on the left the writing that you want. And having poured the lead onto the cardboard, press onto it the other piece of cardboard.\n\n\n",
  id: 300
});
index.addDoc({
  title: "Casting wax to mold an animal that one has not got",
  author: null,
  layout: "narrative",
  content: "- - - - - 139v - - - - - \nAnnotations:\nBlack Sulfured Wax, fol. 139v (Kang and Lores-Chavez)\n \n##  Casting wax to mold an animal that one has not got\n\n  \n Take some white wax which is much more appropriate for this kind of work than anything else, because it is much firmer and does not leave as much filth, as much as you need to cast the animal that you propose, and no more. And [take] a half quantity of ground coal and neatly sieved through a cloth or coal sleeve, using it to give some color to your wax, that would otherwise be transparent and you will not be able to see your lines as clearly. Put your wax on the coal fire to melt. And when it is well—melted and well—liquified, have, for a full eared—porringer of melted wax, as much sulphur as a large walnut. Pulverize it. Melt it over a slow fire and when it is melted, do not leave it on the fire because it will become too hard. But take it off and keep stirring it with a little stick and when it has finished bubbling and is as liquified as water, cast it into the wax that you will have previously removed from the fire. And mix and stir both of the them so that they join together. After stir in little by little while continuously mixing, the charcoal that has been repeatedly ground, and in this way it will be very well incorporated. This is how you will know that your wax has gone beyond its ideal heating point, it will release no more smoke, it will start to have lines appearing on the side and not in the middle, and those lines will be close to each other. If you cast too hot, you will not be able to separate your wax from your mold and it would stick to the cast. When it is at the right state, stir it with a little stick so that the pulverized charcoal is well mixed in and has not fallen to the bottom of the mixture. And in this way, throw it in your mold bit by bit and not in one go, because wax is not runny\n\n\n  at left top  margin of folio 139v\n\n  This black sulphured wax is for fashioning round figures that do not come out of the mold. And they need to be burned in the moule au noyau rather than be opened like the ones that have something jutting out or an intertwining of legs and arms. And this wax, thanks to the sulphur, will melt with little heat and leave without leaving any filth. If by some misfortune the crushed charcoal remains in ashes, when you open the mold and blow on it, it will come clean.\n\n\n\n  at left bottom  margin of folio 139v\n\n  To make wax serpents or other things to affix to candles, it is necessary to cast them with esbaucher wax of all colors.\n\n- - - - - 140r - - - - - \nnot like other things. And for this one, you can cast two or three times until your mold is full. Now, concerning this mold of pulverized white plaster &amp; reheated in the manner of the sand from the preceding recipes, you should have made it long ago because it is used many times. But, before using it, soak it for a good hour in cold water, &amp; at a minimum, at least as long in hot water that at first is so hot that you can’t hold your finger in it. And note that it absorbs no more, but that it appears very wet overall without water seeping into it. In removing it closed from the hot water, cast your wax in such a state of heat as has been described. And neither the first nor the second casting will readily come out well, hardly, until the mold is soaked. Let it cool down before opening it so that the cast thing not break. You will know that the casting is good when the wax coming back out of the mold is thin and even. Remember to make several castings along the whole length of the mold so that in this way the wax runs better. Make the firstcasting twice as large as other molds. And if, in the first casting, your work fills with bubbles and in so doing does not come out neatly, it’s all the same, because you have to face the fact that the three or four first do not readily come out well. Firstly, you will know whether there are a few barbs that keep it from stripping well. And you will remove them if, on their own, they do not remove themselves in the two or three first castings. And the more that you cast, the more you will do it neatly. And your mold will serve you more than one hundred times if it Is well governed. But it is good to soak it one night or one day before casting so that it be well soaked. The same must be done for fruits made from sugar. This wax is very soft &amp; friendly &amp; pliant, like copper. And if it is hard [this is] because of sulfur, which makes it melt more easily than than other [wax], so much that you can see evidence on a hot slate. And the sulfur that you put inside will be found the second time that you melt it, [as] cracks on the bottom. Having in this way passed through wax, it will not catch fire at all when put to a candle. And in this case, I believe that it will cast quite the medal [illegible]. One uses the same wax in place of varnish to [illegible].\n\n\n  at left middle  margin of folio 140r\n\n  When your animal is cast, cut away the froth &amp; superfluous things with a hot pen knife. And if you want, plait and wrap it around some stick or candle, put it in some hot water to soften and hold it in turning it around.\n\n\n\n  at left middle  margin of folio 140r\n\n  Lower the protrusions of the castings so that they be even &amp; that the wax has more silver so that it can run all in one go without turning through the windings of the snake.\n\n- - - - - 140v - - - - - \nto engrave on silver &amp; copper with aqua fortis. With this [wax] too, one fills the cavity of a relief, &amp; then casts in this cavity, with moistened sand, which immediately takes the relief very neatly. And then you can cast its cavity on it in copper, gold, and silver, and make really singular seals.\n\n\n  at left top  margin of folio 140v\n\n  Seals\n\n\n",
  id: 301
});
index.addDoc({
  title: "To cast in sulfur",
  author: null,
  layout: "narrative",
  content: "- - - - - 140v - - - - - \nAnnotations:\nSulfur and Additives\n \n## To cast in sulfur\n\n  \n To cast neatly in sulfur, arrange the pith of bread under the brazier, as you know. Mold whatever you want into it &amp; let it dry &amp; you will have very neat work.\n\n\n  at left top  margin of folio 140v\n\n  Try sulfur passed through melted wax, because it will no longer ignite &amp; and make eyelets.\n\n\n",
  id: 302
});
index.addDoc({
  title: "Molding and shrinking a large shape",
  author: null,
  layout: "narrative",
  content: "- - - - - 140v - - - - - \n## Molding and shrinking a large shape\n\n \n Mold it with the pith of bread just out of the oven, or like that aforementioned, &amp; in drying out it will shrink &amp; consequently so will the medal that you will cast. By these means — lengthening out or enlarging the imprinted bread — you can vary the shape &amp; from one face make several different ones. The bread straight from the oven is best. And the one which has been heated twice contracts more. You can cast sulfur without letting the imprint on the bread dry, if you want to cast it as large as it is. But, if you want to let it shrink, let it dry to a greater or lesser extent.\n\n",
  id: 303
});
index.addDoc({
  title: "Casting a crayfish",
  author: null,
  layout: "narrative",
  content: "- - - - - 141r - - - - - \n## Casting a crayfish\n\n  \n The crayfish is one of the most fantastical to cast, but also provides an example for casting other difficult things. You can distinguish males and female by the eggs that the females carry, and by the four little white back legs that males have in their tails after behind main eight legs. It is good to dry them out a bit so that the bumps come out more hard and beautiful, because none of what is made of shell shrinks. It is true that should you dry the little inside legs for too long, they become diminished and have no body. If they are too dry, the flesh separates from the scales. Be sure then to maintain the mean. They have certain hairs between the legs and at the end of the tail. And because all hair is difficult to cast, because it gets mixed up in the sand and does not release, you can burn it by putting a hot iron on the crayfish so that it the hair cannot be seen. As for animals that have hair or feathers, you must grease the hair with wheat oil, which is very dry and which will make the hair lay flat and straight. In this way, you will have form of your animal and you will have the hair. Should it the hair be wavy, it can be repaired. If your crayfish has eggs, which are delicate, and which will be difficult to take out of the mold without breaking, you would do better to make the first cast with the crayfish on its belly and eggs. In this way, you will open the mold with it the crayfish on its back, which will be hard and easy to manipulate. And the belly and the eggs will remain in the mold. And rather than opening your mold for the second time, you will have to burn it with them in it. This way, it will open easily, and what has been burned will come away cleanly. In this way, the second casting, which is done on the first one that has successfully taken hold, separates easily from the first, after having been refired. This is a singular secret for similar moldings.\n\n\n  at left top  margin of folio 141r\n\n  The casting is made by the very thin tail.\n\n\n\n  at top  margin of folio 141r\n\n  If some little thing is missing, you can reattach it or else fill it with goldsmith’s cement.\n\n\n\n  at left top  margin of folio 141r\n\n  Do not forget to rub with spirits before you mold.\n\n\n\n  at left top  margin of folio 141r\n\n  Stag beetles, crayfish and crabs are molded in the same way.\n\n\n\n  at left middle  margin of folio 141r\n\n  If your crayfish has no eggs, mold the back on top and the belly on the bottom. You can give it some.\n\n\n\n  at left middle  margin of folio 141r\n\n  It the crayfish can be molded hollow for the body, but not for the legs. And for a good result, take note that the crayfish is rather fantastical to mold hollow, this ought to be reserved for turtles.\n\n\n\n  at left bottom  margin of folio 141r\n\n  When you open your mold, you will find the crayfish has white bones, but they will not be powder. And without opening it, the mercury will not have affected the process.\n\n\n\n  at bottom  margin of folio 141r\n\n  Apply very light oil colors.\n\n\n\n  at bottom  margin of folio 141r\n\n  To paint it, boil it with wine and a bit of salt so that they become very red and use this as a model. Paint the back with vermillion mixed with laquer, and the sides and the underside of the belly and the legs with vermillion and yellow ochre and white.\n\n- - - - - 141v - - - - - \nLet your crayfish dry a little in the sun, by itself. If it has spawns, they will shrink while drying, and be all the more beautiful for it. Make your paste out of yellow potter’s earth, just like for the other representations. Lay your crayfish on it, the back side down, and the other parts which are more tricky to mold —— legs, belly, eggs — side up. Drive in the back side in the clay paste up to the legs, which is about the half part of the crayfish’s body. Fix the body with a pointy iron thread in the middle and, if you feel you need it, you can also drive another one at the edge of the tail. And in order that the big legs be lower than the head, which is lower because it is linked from below, add a little clay under the head. Then add a bit of clay under the jacket in order to raise it. Hide the feelers under the clay and under the crusher claws, then arrange it as you like. Stretch out the walking legs to the joints, and for the first cast, bend the second part of the walking legs. Fix the joints of the legs with wax and a warm wire so they will not move. If you want to mould something fancier, fix the end of one walking legs on the body or on a crusher claw , using the same wax. If the female has spawns, bent half the tail over the spawns, and keep the shape by fixing the tail with a wire. Be sure that you will be able to clean this part. Finally rub your crayfish with spirits, and cast your sand. Once the sand is hardened, uncover the back side, the head, the eyes, and the small legs close to the crusher claws, and the walking legs all along. One must uncover these parts as much as possible. Then bend and cover the spawns again. The other animals\n\n\n  at left top  margin of folio 141v\n\n  Fix what may raise the two padded edges on each side of the mouth with melted wax under them. \n \nat left middle  margin of folio 141v\n\n  Uncover as many parts as possible, but be sure the channels you make are well stripped.\n\n\n\n  at left middle  margin of folio 141v\n\n  Incline your mould to the thickest side of the animal.\n\n\n\n  at left bottom  margin of folio 141v\n\n  To paint the crayfish, one paints the middle of the back with vermilion, mixed with a bit of lacquer. The sides, the belly, and below the legs with a mixture made of vermilion, ceruse, and a bit of yellow ochre. As with all things, always keep the real one in front of you in order to copy it as realistically as possible.\n\n\n\n  at left bottom  margin of folio 141v\n\n  Lay the feelers on the crusher claws, or solder this part with a wire made of bleached brass.\n\n\n\n  at bottom  margin of folio 141v\n\n  When you arrange the legs, be sure that they do not get over the belly, and that they are well set against the belly otherwise [illegible]\n\n- - - - - 142r - - - - - \nare not so uncovered. But since crayfish are troublesome to burn &amp; clean, you have to uncover them as much as you can, even the little legs just until the tips, because they are troublesome &amp; if, in order to not alter them, you have to take them out, you could break something of the mold. Having uncovered it with the point of a knife, like an engraving stick or another fitting thing, clean off the sand at the joints &amp; elsewhere with your little brush really very scrupulously. And if something is loosed from the crayfish, attach it with wax, as is discussed. And also attach the horns this way. And also do the casting the length of the extremes of the little legs with wax. And refill the holes that have been made with the needles of iron wire with it. And everything being quite clean &amp; having uncovered more than half of it, oil your mold after having soaked the back side in water, &amp; do not forget to oil all the fine parts that are between the legs and the little beaks; then rub the crayfish with spirits. And do your second casting after having made the first mold even, so that the cramp—irons join better. Your mold must be larger on the side with the impression than on the back. Do not open your mold after the second casting, so that it not become clayed &amp; reheated &amp; that which is inside not be burned. Do not forget to mix crocum throughout your sand when you mold the crayfish, because you must really reheat it &amp; the crocum withstands this marvelously. To mold a crab &amp; to mold a crayfish are exactly the same. When you have uncovered your crayfish on one side do not delay at all before doing the second casting, because crayfish dry out. It is not enough to uncover the crayfish such that you see the whole half the half you uncover, but take heed that your mold, even when you are uncovering, be good and stripped, because if the crayfish gets well burnt, you will not be able to open your mold without breaking it.\n\n\n  at top  margin of folio 142r\n\n  Restore it with a pen knife, little chisels, or engraving sticks.\n\n\n\n  at left top  margin of folio 142r\n\n  As you see here, but a wax casting all around &amp; at the end of the tail, where you will do the principal casting, two or three more. \n \nat left middle  margin of folio 142r\n\n  Make the casting with candle wax shaped in a thread like a large packthread, the whole length from the end of the claws to the extremity of the tail. If there is also some claw end or other part that is extended past the rank of the others or is raised up higher or turned up all alone, make a wax casting for it from its end just barely not joined to the body or to one of the large claws or to some other place where lots of metal will be wedged in.\n\n\n\n  at left bottom  margin of folio 142r\n\n  Having uncovered it, attach &amp; secure the two little bearded horns of the crayfish, and anything else that is not secured, with wax.\n\n\n",
  id: 304
});
index.addDoc({
  title: "Molding grasshoppers and things too thin",
  author: null,
  layout: "narrative",
  content: "- - - - - 142v - - - - - \nAnnotations:\nToo Thin Things\n \n## Molding grasshoppers and things too thin\n\n  \n If you have to mold a piece of written—on paper that is too thin, after you have done the first cast and it has set, give a little thickness to the reverse of your paper with melted butter, which is the most appropriate means there is, &amp; for strengthening the wings of either a butterfly or a grasshopper, or any delicate part of an animal to which you need to give thickness. But take heed to apply this melted butter under the wing or in whichever place it will not be seen. For giving thickness to a pansy or other flowers, butter is not good, but rather wheat oil, which is soon dry &amp; holds firm. Wax would not be appropriate here for it is too hot once melted, and it makes the thing to which it is applied contract. But butter is amiable and handleable.\n\n\n  at left top  margin of folio 142v\n\n  If you write on paper or on common carton and your letters are made with gum, the moisture of the clay plate (?) or the wet (?) sand for a noyau will moisten your letters and undo them. Write therefore with cinnabar mixed with oil, on oiled &amp; stamped (?) paper.\n\n\n\n  at left middle  margin of folio 142v\n\n  + Reheat your molds with charcoal firstly lit in the forge, so that the fire is not too hot and does not break the molds. And do not fire as strongly where the mold is thin as where it is thick.\n\n\n",
  id: 305
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 142v - - - - - \n## Molds\n\n \nMake some notches in them the molds that enter more into the inside of the mold than the outside because in this way, they have more strength. Take care to keep from reheating them suddenly in a burning hot fire, because this will make them break.\n\n\n  at right middle  margin of folio 142v\n\n  Do not keep them molds in a humid place, nor an enclosed place if they are not well dry, because they will mold. The same with dried animals.\n\n\n\n  at left middle  margin of folio 142v\n\n  It is not at all necessary to reheat the molds two times when the animal can pull away without burning, as do toads, which can very well be molded hollow like all thick animals. However, it is always good to redden the mold once.\n\n\n",
  id: 306
});
index.addDoc({
  title: "Lute for luting your molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 142v - - - - - \n##  Lute for luting your molds\n\n \nI have not found a lute that is made more quickly than this one, nor a better one. Take some of the lean earth that artillery founders and bell founders use to make their trusseaulx and molds, which is lean and sandy. Soak it moderately like a very thick mortar. Mix into it about one half of horse manure and then beat it well. Afterwards mix in one third of cloth waste or cloth shavings and beat it again quite strongly. You can reheat your mold as soon as the lute is ready.\n\n",
  id: 307
});
index.addDoc({
  title: "Moulding turtles and tortoises",
  author: null,
  layout: "narrative",
  content: "- - - - - 143r - - - - - \n## Moulding turtles and tortoises\n\n \n The turtle the one that lives in water is more beautiful to mold because it has prettier scales and straight legs. And the tortoises have crooked ones. They eat a lot. To get ready to kill them, open their mouth and pass a long penknife through all the intestines. And then make it swallow some vinegar mixed with spirits or urine, as one does for snakes. It is necessary to mould them in several pieces, and even the back sometimes because the sides of certain ones are narrower than others and in this instance do not release from the cast. To make them die, you must not boil them, because they come apart, even the shell, in the hot water. They the shells come out better when hollowed because their great thickness spoils the mold. Turtles are more lively. The tortoises are leaner, slower, and more sleepy. If you scratch turtles on their shells, no matter how sleepy they are, they move; tortoises do not.\n\n\n  at left top  margin of folio 143r\n\n  They turtles/tortoises die rather quickly in vinegar mixed with a little spirits or urine, as with all other animals.\n\n\n\n  at left top  margin of folio 143r\n\n  They turtles/tortoises keep their eyes closed in the winter, and appear as dead, having been numbed by the cold. They hide in the earth or under balls of grain or warm manure, and survive only on the dampness of the earth.\n\n\n\n  at left middle  margin of folio 143r\n\n  You must not mold them too soon after they die because they are still stiff. But on the day after, you will be able to manipulate them and bend their legs as you wish.\n\n\n",
  id: 308
});
index.addDoc({
  title: "Moulders from Foix",
  author: null,
  layout: "narrative",
  content: "- - - - - p143r - - - - - \n##  Moulders from Foix\n\n \n Those who mould from across the way make their sand from crocum ferri and calcinated slate, but slate always retains its bumpiness and swells because it is a fatty. In the noyau, it is not good; in sand, it can be put to use. They the moulders from Foix sieve their sand, grind it on porphyry, and soak it in water, and they keep the finest bits which are on the top, then they reheat it.\n\n",
  id: 309
});
index.addDoc({
  title: "Toad",
  author: null,
  layout: "narrative",
  content: "- - - - - 143r - - - - - \n## Toad\n\n \n Having been molded, you can take it out it without burning it, because it releases easilyfrom the mold. Choose the biggest and the lumpiest toads. Because they contain a lot of metal, it is best to mold them hollow, since they turn out better. You could make your cast in one great piece, but it would be troublesome to cut. It is best to do it in three or 4 parts, which will be thicker close to the animal, and include the most amount of edge that is close to the cast/mold. Make as well some casting conduits all the way from the end of the cast,\n  \n&gt; at left bottom  margin of folio 143r\n&gt; \n&gt;  Let the mold cool rather than opening it, even for thick things.\n- - - - - 143v - - - - - \nfrom one leg to another, so that the spread out limbs are in connection with one another due to the aforesaid casting conduits, which you will start in the waxless round parts that you have put at the edge of the legs to attract the metal. In this way, because you are casting in wax, there is no danger chipping any part of the molded animal. It’s quicker to make the wax casting conduits thus, because in this way you can cast the second mold after the first, rather than wait to do them the conduits after the mold has been recooked, because then, if possible, you will need to have everything ready. You need to heat well, and even redden the molds where there are wax conduits so that they melt and leave nothing inside.\n\n",
  id: 310
});
index.addDoc({
  title: "Openwork carcanets",
  author: null,
  layout: "narrative",
  content: "- - - - - 143v - - - - - \n## Openwork carcanets\n\n \n You can mold them “en noyau” like crayfish, first with one side being made higher with clay, which is hollow, and then you open it from the other side and make the second casting. You can just as well cast them “en chassis”, provided that they release well. If they do not, you can do a rough cast in wax, or you can fill up the cavities which do not release well with wax or clay.\n\n",
  id: 311
});
index.addDoc({
  title: "Iron filings",
  author: null,
  layout: "narrative",
  content: "- - - - - 143v - - - - - \n## Iron filings\n\n \n Because usually filings are mixed with impurities, it is good to heat them over fire to burn the filth and then wash them in clear water. In this way, the dirt will rise to the top of the water, which you will throw out, and the good filings will go at the bottom.\n\n",
  id: 312
});
index.addDoc({
  title: "Carnations",
  author: null,
  layout: "narrative",
  content: "- - - - - 143v - - - - - \n## Carnations\n\n \n Because those that you usually cast are generally quite big, they are heavy. And so for these, you make them with silver leaf or slivers.\n\n",
  id: 313
});
index.addDoc({
  title: "Ashes in the moulds",
  author: null,
  layout: "narrative",
  content: "- - - - - 157v - - - - - \n \n## Ashes in the moulds\n\nYou must let the mold cool down rather than blow into it to try to get the ashes out. Because when the mold is hot, the ashes stick to it, and when it cold, they separate from it more easily, and will exit by blowing with le vent a vapeur.\n\n",
  id: 314
});
index.addDoc({
  title: "Po{ur} f{air}e h{…} vin f{…}rs [?]",
  author: null,
  layout: "narrative",
  content: "- - - - - 157v - - - - - \n## Po{ur} f{air}e h{…} vin f{…}rs [?]\n\nPrenez un chausson du pied droid t qui ait este porte et le faictes tremper en eau et de leau q{u}i en sortira la f{air}e boyre au mesme ou autre et v{er}rez merveilles\n\n",
  id: 315
});
index.addDoc({
  title: "Mercury in molds, for cleaning",
  author: null,
  layout: "narrative",
  content: "- - - - - 158r - - - - - \n \n## Mercury in molds, for cleaning\n\nTake heed that your mold be quite cold when you blow in order to get the ashes out. And afterwards put in ☿ in order to finish the cleaning. Because if the mold is hot, the ☿ will go inside; seek out the conduits in escaping, will leave its own odor, which will aggravate the tin or other metal that you will cast, such that it will break in touching the mold at all. The heat of the mold also retains some little grains of ☿ that will make lumps; stick to the sides of the molded leaves and attach to them; make them frangible. The ☿ cleans ashes well. Likewise flat things where there are not delicate traces that it could break with its weight. And therefore, if you can cast neatly without putting it in, don’t use it at all. But if you have need of it, mix your crocum sand so that it withstands fire well. And after having put in the ☿, evacuate it, bouncing the end of the mold from below while moving it. Afterwards reheat your mold gently so that the ☿ is gone from everywhere. In this way I cast a branch of periwinkle leaves; flowers very neatly. Having put a branch of melted [illeg] in the flower, on the back of the flower [illeg].\n\n\n  at left bottom  margin of folio 158r\n\n  Reheat your mold until it is good and red before casting, so that the ☿ evaporates well.\n\n\n",
  id: 316
});
index.addDoc({
  title: "Colors for green leafs",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \nAnnotations:\nColor for Green\n \n \n## Colors for green leafs\n\nOne usually paints them with oil colors, because distemper colors do not stay on. For marigold flowers, lightly ground minium for some of them; for more yellowish ones, mix in a bit of massicot. For green, the vert—de—gris is dark and too somber. If it is a yellowish—green, you can mix with the vert—de—gris a bit of yellow ochre and scudegrum. If the green is dark, mix in some coals made from peach pits, which makes a greenish—black, in the same way than the bone of an ox foot bone makes a bluish—black. And in such a manner, by judgement and discretion, put the color on the natural flower or leaf to see whether it is similar to the original. But paint it on very lightly so as not to cover the features of the work.\n\n",
  id: 317
});
index.addDoc({
  title: "Large molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \n## Large molds\n\nBecause of the heaviness of the metal, it is necessary to put them in a press so that they do not open.\n\n",
  id: 318
});
index.addDoc({
  title: "Candle smoke",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \n## Candle smoke\n\nIt allows the piece to be taken out more easily, and even if it is slightly thick, it does not stick because it has no substance. I have perfumed my core molds this way for tin and lead, and I have casted in a cold mold, but drying it well beforehand, and the piece came out quite cleanly. It is true that lead mixed with half the quantity of tin, because the medal was very thick, was very hot.\n\n",
  id: 319
});
index.addDoc({
  title: "casts",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \n## casts\n\nIf the medal is very thick, do not pour a cast that is as thick; the cast just needs to be half as thick as the medal. But if it is thin, make a cast that is of the same thickness. Do not forget to make vents in the cast or the whole matter will fill with bubbles.\n\n\n  at left bottom  margin of folio 158v\n\n  Never forget to oil the cast with wax when you cast herbs or flowers, otherwise it will break and cannot be taken out.\n\n",
  id: 320
});
index.addDoc({
  title: "Portraits in Wax",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n## Portraits in Wax\n\nIf you do not mix your wax with any color dye, and if you paint some colors on the wax, these colors would fade if you cast it en noyau. But the representation is not damaged, rub it very lightly with spirits diluted with hot water. If your representations are varnished, repeat the molding process two or three times in order to remove this varnish which sticks to the mold. When the varnish is removed, your mold is very clean. If your representation is set on wood, it is necessary to pour very hot melted wax on the wood, otherwise the mold sticks to the wood. It is much better to mix your white wax with white lead than ceruse, because white lead is whiter and more firm.\n\n",
  id: 321
});
index.addDoc({
  title: "Chasing tool",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n## Chasing tool\n\nIf a chasing tool has passed through any part of the representation, it is necessary to rework the whole thing and follow it all again. Otherwise it would look like an additional piece.\n\n",
  id: 322
});
index.addDoc({
  title: "Fish glue",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n## Fish glue\n\nBeat it very finely and thinly on a well—cleaned anvil, then dilute your glue with spirits, put the mixture on hot ashes, and on a low fire, it will melt very soon. If the glue is not strong and thick enough, add spirits in greater quantity. Do not melt it in a fatty pot, but in a new pot if possible. It melts on fire and dries very quickly on fire. When your glue sets on the work, heat it away from fire, it will stick very strongly. One reworks flowers and delicate things made from silver, gold, tin and other metal with this glue which will not spoil your work.\n\n",
  id: 323
});
index.addDoc({
  title: "Tin and lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n## Tin and lead\n\nThey must be beaten out very finely and tin will not get brittle or break, lead is a bit fatter. But that is why it is necessary to reheat it under hot ashes, and to beat several leaves together.\n\n",
  id: 324
});
index.addDoc({
  title: "Cleaning files",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n## Cleaning files\n\nSometimes they get fat from the grease of lead, which is naturally fat, or also filings corrode them. And you will be able to clean them with hot charcoal or a wire brush made from brass.\n\n",
  id: 325
});
index.addDoc({
  title: "Carnation",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n## Carnation\n\nMold a carnation like a rose, marigold, and all other flowers as discussed, that is to say cast the flowers in one mold, and the leaves in two parts in order to solder them onto the flower, this is the better way. But you could mold the flower and the leaves together in one single closed mold. I tried one which came out well from the mold. But the sand must be very thin, and you must blow very strongly.\n \n",
  id: 326
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n## Molds\n\nTry to make one side as thick as the other, that way the two parts will be equally reheated. You can open this kind of mold in order to clean it, when you mold some animals, like crayfish, which burn. When your mold is reheated, do not wait too long before casting again, because it gets damp and loses its strength.\n\n",
  id: 327
});
index.addDoc({
  title: "Unmixed plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n \n## Unmixed plaster\n\nIf you reheat plaster as a stone it would crumble into water, but if you grind it before reheating it, it will not crumble into water, on the contrary it will harden in water, if it is good plaster like the one from Paris or from Spain which is as hard as a stone, and which is found through poor and dry earths, and which looks like white salt. German people use this plaster to make statues for their fountains, even if the statues are varnished they will not be damaged with water. On the contrary harden this plaster with water. When this sand is unmixed it sets much sooner. Oil very lightly your shapes of metal or of other materials otherwise you will not be able to strip plaster from the mold. And dip your mold into hot water in order to open it, if it does not open in hot water, it could open into boiling water.\n",
  id: 328
});
index.addDoc({
  title: "Presses for large moulds",
  author: null,
  layout: "narrative",
  content: "- - - - - 160r - - - - - \n \n## Presses for large moulds\n\nfigure identifier=”fig_p160r_1” url=”https://drive.google.com/open?id=0B9—oNrvWdlO5ZDNJT25PWjlUbGM”/&gt;  \nIt is made of two sheets of iron, fasten with four small iron pillars, in such a way that the upper sheet is able to move and run freely along the pillars, while the lower one is fixed. A St André cross, made of iron, stops at the end of the pillars; there is a screw in the middle of the cross, which squeezes the sheets against the molds placed between them.\nblock&gt; \nFor small molds, we make a frame; having put the mold between two metal sheets, we squeeze it in the frame with for small moulds, put the mould between two iron sheets, and squeeze it with wedges.\n\nBig wooden presses, with a screw, apart from being heavy to move to the furnace for casting, make it difficult to see when they squeeze too much, and they often break the molds.\n\nThe screw is fixed to these nuts which are nailed down the upper plate, this way it raises and presses the mould.\n\n",
  id: 329
});
index.addDoc({
  title: "Moulding a foot or a hand",
  author: null,
  layout: "narrative",
  content: "- - - - - 160v - - - - - \n \n## Moulding a foot or a hand\n\nMix resin to the wax. Once well blended, soften the mixture in hot water or urine. Then press [the foot or the hand] in the mixture in order to get an impress, then pour plaster; the cast will which will be clean and come off easily.\n\n",
  id: 330
});
index.addDoc({
  title: "Fine work made of gold or silver",
  author: null,
  layout: "narrative",
  content: "- - - - - p160v - - - - - \n \n## Fine work made of gold or silver\n\nYou can mold flies by hand, without casting; the wings and the feet can be soldered, which you could not do with fine works of lead or tin, because they would melt. You can enamel the work made of gold.\n\n",
  id: 331
});
index.addDoc({
  title: "Catching crayfishes",
  author: null,
  layout: "narrative",
  content: "- - - - - p160v - - - - - \n## Catching crayfishes\n\nOn the end of a stick, attach pieces of liver or lung, from beef or mutton. Then hang a basket to the stick with a little string. Put the basket into water where crayfishes eat; they will soon aggregate on the flesh. Pull very gently your stick out of the water; the crayfishes which will try to return to the water will fall into the basket.\n\n",
  id: 332
});
index.addDoc({
  title: "Catching passerines",
  author: null,
  layout: "narrative",
  content: "- - - - - p160v - - - - - \n## Catching passerines\n\nIf they sleep in the farmyard, like they commonly do, close to the house, let the closest window open, and put a lighted candle close to the window. The candle itself must be hidden, only its glimmer must be seen through the room and through the window; all the passerines will then lock themselves into the room. But the night must be very dark, without any moonlight.\n\n",
  id: 333
});
index.addDoc({
  title: "Catching birds",
  author: null,
  layout: "narrative",
  content: "- - - - - 160v - - - - - \n## Catching birds\n\nDuring winter, when birds have molted, skin them and fill them with cloth and stuffing, or dry them well in an oven. Then arrange your birds on trees, have some [look like they are] singing, [look like they have assembled] and are numerous.\n\nthe oven must not be too hot. This [method] is good in the summer, because flies would set into the eyes and make works before they [birds] could dry. You can work on the birds more easily in the winter, because they dry by themselves.\n\n",
  id: 334
});
index.addDoc({
  title: "Preparing sand for box molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 161r - - - - - \n## Preparing sand for box molds\n\n\n  at left top  margin of folio 161r\n\n  After your sand [which is made] of gip de lateribus and alumen jameni is moulded as a core, gather the left—over pieces of your mold, and break them up on a long table with a big metal block until they are very well crushed. And for an even better result, sieve them neatly. Place them in the oven pots of tile—makers, in a bread oven, [firing them] several times, when it is well heated so that they become very red. When cooled down, rebreak them if you need to and sieve them. After, put them in a vaisse, a semal or a vessel that is appropriate and clean. And then wet it with clear water. And crush it and mix it with a big stick until it is very well—moistened and rinsed, and the dirty parts rise to the surface of the water. Keep stirring in this way the dulled gip, that one prepares to gilt burnished gold over five or six days, until it is in no way lumpy. And each time your stir it, leave it to rest and cull the clear water that will be on the top by tipping the pot, or with a porringer, or with a sponge. And put in some new clean water and in this way wash and stir until it is refined and purged of all filth. Then leave to drain a little bit and to dry and make of it some balls, soaked in sal ammoniac. Having been thus dried, put them to be recooked in very high heat in a reverberatory furnace for a good amount of time, where they will become very red. Having been recooked in this way, crush them and try to mold something in a box mold, having moistened your crushed powder with water of sal ammoniac. And reheat and redden you box mold, and if your sand comes away, then you must crush it again and moisten it again with water of sal ammoniac. Remold it in two balls and recook it and redden it and continue this for as many times as necessary until it does not come away from the box mold when the box mold is reddened. The main thing is for it to be well recooked, because otherwise the sal ammoniac will not calcinate well and will make the sand coarse. And for this reason, you should not put in too much sal ammoniac.\n\n\n",
  id: 335
});
index.addDoc({
  title: "Crocum ferri",
  author: null,
  layout: "narrative",
  content: "- - - - - 161v - - - - - \n## Crocum ferri\n\nIt can be made quickly if you put very filings that are very neat and have been washed in an iron drum that is only two fingers high, and cover it, and redden in a reverberation furnace, having washed it in good vinegar for a whole day. And it will be very well burnt and clean, mixed and crushed on a marble slab. Having been well crushed and when well mixed, the vinegar will corrode it easily and will redden it quickly and bind it. Wet it with the strongest one you can find and burn it after. And after three or four wettings and burnings it will be ready. This one will be the color of columbine and is considered firmer for casting than the one that is redder and more beautiful in color, done with rusty filings and has more color in it. Some burn the filings many times on a shovel of red iron, watering each time with vinegar.\n\n",
  id: 336
});
index.addDoc({
  title: "Aes ustum",
  author: null,
  layout: "narrative",
  content: "- - - - - p162r - - - - - \n## Aes ustum\n\nWhen it [Aes ustum] is finely ground it moulds very cleanly. It has a certain fatness that makes it bind better than filings, I believe that it may not be ill suited for casting.\n\n",
  id: 337
});
index.addDoc({
  title: "Rotten wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 162r - - - - - \n## Rotten wood\n\nWood that is white, being light as a sponge, if burnt in a close fire, may be used for casting lead in a box and molds very cleanly, but these things [such material] do not withstand [open?] fire.\n\n",
  id: 338
});
index.addDoc({
  title: "Peach trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 162v - - - - - \n## Peach trees\n\nBecause they cast and blossom from the outset, and so are caught by the frost. We expose their roots during winter so that the cold slows them down, and they blossom later, which benefits their flowers.\n\n",
  id: 339
});
index.addDoc({
  title: "Olive trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 162v - - - - - \n## Olive trees\n\nIn Spain they expose their roots during winter and in spring they earth they up again.\n\n",
  id: 340
});
index.addDoc({
  title: "Foot of bittern",
  author: null,
  layout: "narrative",
  content: "- - - - - 162v - - - - - \n## Foot of bittern\n\nTo mold it it is better to extend its fingers and nails on something flat and let them dry this way for a few days, because in drying the scales will be rougher and the nerves and and tendons will be more apparent, and so the molded foot will be more artistic.\n\n",
  id: 341
});
index.addDoc({
  title: "Molds of things which have not been pelted",
  author: null,
  layout: "narrative",
  content: "- - - - - 162v_4 - - - - - \n## Molds of things which have not been pelted\n\nAnimals who have not been pelted can only be molded in a double mold, which can only be opened after they have been refired and after the enclosed animal is completely burnt. Animals with bones or scales which are not reducible to powder thus remain in calcined pieces which will never removed from the cast, however much bellowing or whatever amount of quicksilver is put in, or by using a feather pipe while molding to make a gate. This is why you mold in two halves: so that once the mold is opened after having been refired, the thing you’ve burnt can be cleaned out. But I advise letting it cool so that in taking off the clamps (being hot) nothing cracks while it is still fragile. While it is hot the crust and cinders which it leaves and which stick to the mold can be more easily removed when it is cold. Also note that on the side of the lower mold when you reheat the animal, which in boiling leaves a crust, in this case, always mark on the mold where the back of the animal is so that in reheating it is to the top and above and will by this method stay cleaner.\n\n",
  id: 342
});
index.addDoc({
  title: "Perfume-makers",
  author: null,
  layout: "narrative",
  content: "- - - - - 163r - - - - - \n## Perfume—makers\n\nThey readily make their perfumes with half amber and half musk, and a little civet, because the scent of amber is stronger than the scent of musk.\n\nTo save using amber, perfume—makers readily add add a small quantity of musk to the white layers, in order to get a stronger scent. But to remove or hide the blackness of musk, they add a bit of starch from England, which is perfectly white.\n\nTo give off a scent of white amber, in the same way that the Portuguese do, take a chunk of amber that you have broken up into pieces. Having put in a small silver porringer a spoon of flower oil, should you not have some, linseed oil. That is to say, use the type of silver spoon one might use at the table. Pour into this your ambergris, then place it on a low fire, it will melt quickly if your amber is of good quality, and there will be no lumps. Having melted it all, put in a small bit of civet, and melt it all and blend it well together. Then take your gloves which you have cleaned and dried properly, and lightly dip the edge of your finger around the edge of the oil, with patience slowly spread the oil along the glove, and rub the glove between your hands and trace along the fingers and its stitches, one after the other. Leave it to dry. Then repeat the previous procedure until you have used up all of the amber.\n\n",
  id: 343
});
index.addDoc({
  title: "Spirits",
  author: null,
  layout: "narrative",
  content: "- - - - - 163r - - - - - \n## Spirits\n\nSpirits are excellent for making molds clean, in such a way that where you do not apply some, common sand will attack the figure. But it needs to be passed three times. And because it does not take well on oiled things, I believe it may be best to put some into the water with which you have moistened your sand.\n\n",
  id: 344
});
index.addDoc({
  title: "Crayfish",
  author: null,
  layout: "narrative",
  content: "- - - - - 163v - - - - - \n## Crayfish\n\nThe hairy little horns that the crayfish has under its snout tend to come out lumpy and unclear because, after they are burnt, it is difficult to remove and clean away their ash, which, staying in the mold, prevents the metal from running well. And for this reason, one makes a small gate of wax thread at the tips of them, in order both to hold them up and to blow away the cumbersome ashes from inside.\n\n\n  at left top  margin of folio 163v\n\n  Do not spare any pins, placing them not only in the middle of the body, but also on the big legs, and two or three on the tail, according to the positioning that you want to give it.\n\n\n",
  id: 345
});
index.addDoc({
  title: "Crocum",
  author: null,
  layout: "narrative",
  content: "- - - - - 163v - - - - - \n## Crocum\n\nThat which has become rusty by itself, having been doused with water, salt, and either vinegar or urine, and then well—dried and reddened by heating, is deep red when crushed on porphyry and is of the color of bol de levant, almost like minium. But that which is doused with urine and dried acquires a deeper color and almost like crushed aes ustum or like vermillion. But the first one, finely crushed, acquires a bright red color like cinnabar when placed in spirits. And the one and the other, when prepared as said above, finely ground and made very hot, produce a red smoke like an acid vapor if, being thus hot and fine, one throws vinegar, urine or spirits on top. The urine makes a lot of color and the spirits as well.\n \n",
  id: 346
});
index.addDoc({
  title: "Repairing",
  author: null,
  layout: "narrative",
  content: "- - - - - 163v - - - - - \n## Repairing\n\nIt is much better to only lightly repair your work with a burin called an “onglet” or the one called “chaple” or with a small file. Above all, avoid touching your work, but touch only the burr or lumpy parts that will have occurred during the casting. While reworking, moisten and rub your work with a small bristle brush.\n\n",
  id: 347
});
index.addDoc({
  title: "Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - p164r - - - - - \n## Casting\n\nWhen you make a cast of delicate animals, like snakes, start by casting the belly side, or the under—tail, for this side has straighter lines which are easier to rework than the back side, which is more veined and is more marked.\n\n",
  id: 348
});
index.addDoc({
  title: "Repairing burrs",
  author: null,
  layout: "narrative",
  content: "- - - - - 164r - - - - - \n## Repairing burrs\n\nRemove burrs very carefully with the point of a chaple or a burin, then scrape the burrs with the side of a burin, or carefully with a small file, and rub with willow coals and small brushes. Continue, also, with the lines not interrupted by burrs.\n\n",
  id: 349
});
index.addDoc({
  title: "Leaded silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 164r - - - - - \n## Leaded silver\n\nA lot of silver is wasted because of the lead which is mixed with it, as occurs in cupellation, and makes it leap in small bits onto the edges of the crucible and onto the charcoal which covers it and is also gross. And by this means, it is good to melt silver coins, like reals and others, and make them into ingots prior to casting lizards or animals, for it comes out better. I cleanly molded a small, silver viper, like in the first recipe above. And at the end of the line of 4 reals (of 20 S of Spain), and one coin of 20 S from France.\n\n",
  id: 350
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 164v - - - - - \n## Molds\n\nFor molds wherein something must be burned (away), and do not open before being reheated: do not cast before refiring/reheating. For large molds that produce large and wide casts, it is necessary to score it with strong notches so that the pitch of the metal does not run as forcefully. These will not make many burrs if they are pressed. Prior to doing so, place between the moldand the press pieces of thick felt for mittens, which will fill the cavities and protect the mold from cracking. The clamps should be placed prior to heating or drying.\n\n\n  at top left  margin of folio 164v\n\n  When the ground from which you are making your earthen base to lay out your animal is too soft, the pins you place come out easily when you cast the sand and so the mold is spoilt and the design is defeated. Therefore when you know that your slab is too tender and soft, spread some hot cinders over it and blow with the bellows.\n\n\n",
  id: 351
});
index.addDoc({
  title: "Sable",
  author: null,
  layout: "narrative",
  content: "- - - - - 164v - - - - - \n## Sable\n\nIf you don’t add enough alum de plume or crocus your mold will easily crack when heated. But if your sand is mixed as it ought to be, the mold will sustain itself. You’ll know it’s of good quality when, while still hot after casting, it immoderately soaks up the water when dipped and breaks easily, because the alum and the crocus render it spongy. To the contrary, bad sand, which is composed of plaster and brick and is not well mixed with alum, breaks easily in fire and hardens in water. If possible, cast all at once.\n\n",
  id: 352
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 164v - - - - - \n## Molds\n\nWhen you cast lead, your molds must be very dry, even if the molds are large. The outside of the molds must be reddened, and it is necessary to keep them in continuous heat until they do not smoke anymore inside. Do not reheat your molds several times, but continue when you have begun and do not let them cool in the cold because they will crack. Let them cool near the fire. When your molds are still as warm as above, remark, you can put your finger into the casting gate without burning your skin. If your mold is large, it takes more time to cure and to dry, and you must also cast warmer.\n\n",
  id: 353
});
index.addDoc({
  title: "To repair",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n## To repair\n\nIf in your cast, there appear some little hole, fix it with black or gray filling gum wax.\n\n",
  id: 354
});
index.addDoc({
  title: "Lacquer",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n## Lacquer\n\nIf, having been ground, you let it dry without keeping it in water, it will dry out and it will be quite difficult to crush it as before.\n\n",
  id: 355
});
index.addDoc({
  title: "Stretching a canvas portrait",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n## Stretching a canvas portrait\n\nIf it is crumpled or folded from when it was rolled up, moisten the back side with a wet sponge. Then stretch it very evenly without damaging it.\n\n",
  id: 356
});
index.addDoc({
  title: "Plaster for molding",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n## Plaster for molding\n\n\n  at left middle  margin of folio 165r\n\n  When it is long to set and dry, it means that it is too fat and moist, which is what makes it shrink away from the fire and crack. [This is] where burrs come from. The one that comes from lean earth is better. You must not store your moulds made of fat plaster for a long time, because they resemble fat earth, which when drying, cracks. The best is to reheat them soon after they have been made and cast. Moulds made of good plaster can be stored a long time.\n\n\nIt is necessary to oil it well, because it is more difficult to separate the two halves of these moulds than when it is mixed.\n\n",
  id: 357
});
index.addDoc({
  title: "Dragon's blood",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n## Dragon’s blood\n\nYou can imitate dragon’s blood with lacquer, which surpasses it in beauty, if [when] diluted in oil, you use it to ice gold or silver. Diluted with varnish, it fades.\n\n",
  id: 358
});
index.addDoc({
  title: "Repairing snakes and lizards",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n## Repairing snakes and lizards\n\nYou could make some marks according to the form of their scales, making some bigger ones and some smaller ones, according to the shape of the neck, the body and the tail. If there is something broken, you can attach it with small iron or steel nails, and glue it with some mouth glue, then cover the whole thing with gray or black wax. But it is necessary to let the glue dry for one day without touching it.\n\n",
  id: 359
});
index.addDoc({
  title: "Positioning animals",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n## Positioning animals\n\nNot only with iron pins, but also with melted wax, are animals secured to the plate of earth. Wash them first in clear water, after they have died in the mixture of vinegar and urine. And with a sponge clean off their mouth, eyes and head of the froth coming out, because the sand would never set well there and would become lumpy.\n\n\n  at left top  margin of folio 165v\n\n  If you want to keep their mouths open, insert a little bit of harpsichord string, which will not take up much space.\n\n\n",
  id: 360
});
index.addDoc({
  title: "Keeping animals",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n## Keeping animals\n\nHaving molded them once, if you want to keep them for molding again, put them back into the mixture of urine, vinegar and spirits where you killed the others, and they will keep for a long time without decaying. If you have a cut on your hand, take care that this mixture does not touch it.\n\n",
  id: 361
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n## Molds\n\nAfter molding them do not keep them for long, but use them as soon as you can, because when kept for a long time, they are prone to spoiling.\n\nWhen your molds are reheated, the thing comes out better.\n\n",
  id: 362
});
index.addDoc({
  title: "Lute",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n## Lute\n\nWhen reheating, you might as well use common lute, But when you want to cast, strip it from the mold and, using a brush, quickly apply a layer of plaster lute that has been used for molds, because it will be dry as soon as it settles, and cast. This lute should be mainly placed on the joints.\n\n",
  id: 363
});
index.addDoc({
  title: "Silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n## Silver\n\nWhen it quivers after melting, that is a sign that it is very hot. And since it commonly contains much lead, it is good to throw in some lime mortar because that attracts and gathers in the lead.\n\n",
  id: 364
});
index.addDoc({
  title: "Fly wings",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n## Fly wings\n\nSo that they come out best, place wax sprues from the gate up to the tips of the wings. Also make sure there is enough wax under the belly, because that is what makes the cast succeed.\n \n",
  id: 365
});
index.addDoc({
  title: "Attaching a fly wing or something similar",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n## Attaching a fly wing or something similar\n\nThey can be attached with fish glue mixed with spirits over slow heat, heating also the work. Then that is covered with wax “à ébaucher”, that should be grey.\n\n",
  id: 366
});
index.addDoc({
  title: ["art and learning"],
  author: null,
  layout: "narrative",
  content: "- - - - - 166v - - - - - \n## [art and learning]\n\nIn addition to Greek examples, there is a psalm of David mentioned by Saint Athanasius in the Synopsis. It begins “Parvus eram” and in the second verse the royal prophet says, “Manus meae fecerunt organum et digiti mei aptarunt psalterium.”\n\n",
  id: 367
});
index.addDoc({
  title: "Keeping chestnuts",
  author: null,
  layout: "narrative",
  content: "- - - - - 166v - - - - - \n## Keeping chestnuts\n\nThey must be left in their burs until you want to eat them. And in their burs, store them in a humid place, or in the drain of some roof.\n\n",
  id: 368
});
index.addDoc({
  title: "Scented candle from Le Mans",
  author: null,
  layout: "narrative",
  content: "- - - - - 166v - - - - - \n## Scented candle from Le Mans\n\nThey melt in withwax and candles rosin that is called in France [rosin] from Burgundy, which is white and not as rough or dry as the other rosin. They also perfume the wick and the end of the wick.\n\n",
  id: 369
});
index.addDoc({
  title: "Softening gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 166v - - - - - \n## Softening gold\n\nDissolve some caput mortuum in distilled vinegar. Filter and congeal in salt and cement the ☉ with this, and it will soften wonderfully.\n\n",
  id: 370
});
index.addDoc({
  title: "Improving the color of gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 166v - - - - - \n## Improving the color of gold\n\nPut some aqua fortis made with vitriol on hot embers. Cover the bottle, that is, the vent, with a tile. Then uncover it and a thick smoke will come out in which you put the gold and it will take on an excellent color.\n\n",
  id: 371
});
index.addDoc({
  title: "Mortars",
  author: null,
  layout: "narrative",
  content: "- - - - - 167r - - - - - \n## Mortars\n\n \nMortars are made of the best alloy of “métal” and the finest possible rosette so that they do not burst, that is to say one part “métal” and two [parts] fine rosette or old caudron, which is even better. Some of them are of fifteen or seventeen lb. and are loaded with two and a half lb. of grain powder, and they are put on common windows and doors. Others are of a weight of 25 to 27 lb. and are loaded with eight lb. of powder. And in such a way, they are made according to the stress they have to resist. On the outside, they are all the same shape, but in the inside, they are made like a crucible\n figure identifier=”fig_p167r_2” url=”https://drive.google.com/open?id=0B9—oNrvWdlO5OUZCVWpfdmlzbWc”/&gt; \nnarrower on the inside of the bottom and getting wider towards the mouth. And this is to reinforce the bottom, given the quantity of powder they hold, and so that they do not burst. Those of 4 s. lb. are eight lines thick at the bottom, and get thinner in the inside towards the opening, which is of 4 lines. They have xiii “poulsses” long and seven in diameter at the mouth and opening.\n- - - - - 167v - - - - - \nThe ones weighing about 27 lb. are ix “pousses” long and the mouth is 6 [pousses] in diameter. At their bottom, they are 6 “lignes” thick, and 3for the mouth. The ones weighing 17 lb are 8 “poulsses” long and the mouth is five. They are all covered together, all the forks, rods, and tools which one uses, with a big canvas or big cloth so that they do not make any noise. It is good that they sit loaded for a while. After the powder has been put in, it is grinded very hard and then tightly pressed paper is put in, then a cake of well pressed wax and, on the wax, another slab of cork that fits in very snugly and that you have to force in. In this way, the powder remains well packed and gives much greater force, and if you wish, you can put on the cork slab one of wood pierced in the middle, if the mortar has a pierced bottom, which is believed to be the easiest and which makes a greater hole because it cannot recoil. And for these that have a pierced bottom, one must have a good gimlet to first make the hole so that the rod, which is made by the point of the gimlet, has before and without noise attached the mortar. And for these, one must cover the button, which is quite sharply filed, with waxed canvas, or add wax to it so that it completely plugs the hole in the bottom. But because the doors are sometimes iron and the iron rods cannot pierce it, an iron fork made like pincers and another iron stick made with three claws, like you see painted, are use. And in this way, the mortar stays in place well and is immediately steadied. The iron rods must come out of the mortar from every point made by the gimlet, namely by three or 4 finger lengths, which all enter in the door. When the mortars are placed, the touch—hole is filled with good powder and inserted in it is a feather shaft filled with tightly pressed powder and moistened with vinegar, or if needed, the powder is firmly pressed with the palms of the hands and, having wet it with some saliva, you shape it like a cocoon or\n- - - - - 168r - - - - - \n \nrod that we put into the touch—hole, and then, with a rope wrapped around the end of a baston, we ignite it and promptly retreat to take cover. The small mortars of 16 or 17 lb. are attached promptly with a short, hooked rod made like a wimble, and if it is of a good alloy, we can ignite it by hand. It is done in this way for mortars of 27 lb., but then we only put three lb. of powder. The door really needs to be strong so as not to be blown off for seventeenth lb. mortars. Some people use little bells worn by oxen or mules as an door for the mortars. Others load two canons of guns and, with a gimlet and a string, tie them with the opening against the door. If the mortars are good and do not explode, they only recoil and cannot harm if one is next to them.\n\n\n  \n    A is a small rod, hooked like the hinge of a door and made as a biron on one end in order to quickly attach a small mortar with handles of fifteen or xvii lb. for a common door or window.\n  \n  \n    B is a small mortar with handles.\n  \n  \n    C is a common mortar of 27 or 30 lb. pierced at the bottom, where a large iron rod passes, button—like on one end made like a biron on the tip so as to quickly hang the mortar against a door that will not be covered with iron plates.\n  \n  \n    D These are slabs of wax, cork and wood for loading the mortar and well packing the powder.\n  \n  \n    E iron fork made in the form of pincers as tall as a man, used to quickly set the mortar without a rod. It must be of soft iron so that the sides fold easily, if needed, and to accommodate the height or width of the door.\n  \n  \n    F is another iron fork of the same height that supports the fork made as pincers and also sustains the mortar, and with its low claw prevents the pincers from recoiling.\n  \n\n- - - - - 168v - - - - - \n\n  \n    G mortar with handles placed with its rod.\n  \n  \n    H knife—like saws to cut, if needed, a portcullis.\n  \n  \n    J the big iron rods that cross and tie the mortar.\n  \n  \n    K are like iron rods, all round and covered with cloths, like all the rest, so as to make the big iron rods, pierced close to the button, turn.\n  \n  \n    L axes that one must always carry to chop and to break, in the fortuitous case that the mortar has left anything entirely.\n  \n  \n    M a large wood mallet for knocking down what was begun and weakened by the axes and “birons”.\n  \n  \n    N are big wheelwright augers and birons for easily cutting a door or window by making large holes close to one another.\n  \n  \n    O crutches as tall as a man that must be carried to put under a portcullis immediately after the canon has been shot and to prevent the portcullis from falling.\n  \n  \n    P are small iron pincers for putting any low mortar against the bolt of a door.\n  \n\n\n",
  id: 372
});
index.addDoc({
  title: ["List of making procedures"],
  author: null,
  layout: "narrative",
  content: "- - - - - 169r - - - - - \n## [List of making procedures]\n\n\n  \n    Molding a tortoise\n  \n  \n    Furry animals\n  \n  \n    Birds\n  \n  \n    Leaf of vine — put\n  \n  \n    Of the strawberry\n  \n  \n    Piece molding\n  \n  \n    Molding a vase in a chassis\n  \n  \n    Molding capilli veneris\n  \n  \n    Molds that need to be supported by nets\n  \n  \n    Molding a bouquet\n  \n  \n    Rose carnations\n  \n  \n    Hollow molding\n  \n  \n    Hollow gilded silver\n  \n  \n    Molding wort plant put\n  \n  \n    + Crayfish put and seen\n  \n  \n    Grasshoppers\n  \n  \n    Barbots\n  \n  \n    Butterflies\n  \n  \n    Flies\n  \n  \n    Bats\n  \n  \n    Enameling thin gold\n  \n  \n    Molding in sugar\n  \n  \n    Molding fish\n  \n  \n    Molding in sulfur put\n  \n  \n    Cardboard\n  \n  \n    + Wax put\n  \n  \n    Roughing out\n  \n  \n    Stamped medals full of lead\n  \n  \n    Molding large carved wooden pieces\n  \n  \n    Molding and making casts of metal animals\n  \n  \n    + Wheat oil put and seen\n  \n  \n    Stag beetle\n  \n  \n    Foot of a bittern molded\n  \n  \n    Thickness of a medal\n  \n  \n    Very hard wax\n  \n  \n    Molding the engraving on a ring\n  \n  \n    Molding pieces of carcanets\n  \n  \n    Things that do not release from the mold …\n  \n  \n    Fountains\n  \n  \n    Grottoes\n  \n  \n    Sundry mosses applied\n  \n  \n    Molding in three chassis\n  \n  \n    Tempering iron in order to engrave it\n  \n  \n    Etching on silver and iron\n  \n  \n    Stamping\n  \n  \n    White enamel, softening it with black calcinated river pebbles\n  \n\n\n",
  id: 373
});
index.addDoc({
  title: "Reducing a round form into a hollow one",
  author: null,
  layout: "narrative",
  content: "- - - - - 169v - - - - - \n## Reducing a round form into a hollow one\n\nYou must firstly mold it with plaster as has been said before, and in the plaster throw in some wax from which will come a relief that you will repair very neatly, and will shape at your pleasure. Then you will mold this wax relief once more in plaster, or even better with your tempered sand, #, as if for a noyau. And in the latter throw in some lead and from this you will have a very neat relief, and if it is not, repair it on cement or a similar material, and beware that it should always release well. And this one will always serve you as a model for making as many hollow molds as you would like. In this way, place half of your lead figure which you have oiled, and moisten it with spirits as we have seen above, on your clay base, then mold this half with a white plaster. Having taken hold, and having smoothed and flattened the plaster, take your black wax mixed with sulphur as we have seen before, because it leaves nothing in the mold and melts quicker. Dip it in hot urine, and once it is softened enough, make an imprint with it on your half figure in lead. And you will have a very neat hollow mold. Then adapt your wax hollow mold into a square shape, as it pleases you, as long as you have sufficient thickness, and make sure it is well even on all sides, and then mold this hollow wax; and having it imprinted on one side, and having it flat and even on the other, in the same way that you would mold a flat medal in wax or metal in a noyau. And the noyau mold will give you, whether in silver or any other metal you wish, a figure similar to the wax one, which is to say, flat and even on one side, and hollow on the other. And having cleaned this hollow, and having put it in the bleach, if it is made of silver, you can put into it some sugar work\n\n\n  at left top  margin of folio 169v\n\n  Having made a hole in your clay base and having placed there your half figure in wax, oil it a bit so that it comes out more easily.\n\n\n\n  at left middle  margin of folio 169v\n\n  Transparent wax is not good as opposed to one that has body, for making good imprints.\n  \nat left bottom  margin of folio 169v\n\n  Because you have molded one of your halves with plaster and wax, you can do the same thing to the other half.\n\n- - - - - 170r - - - - - \nperfume and similar things. But be sure that the black wax with which you cast is hard, so it will come off rapidly when dry so you can see if it has been stamped correctly. It can be made harder by adding more melted sulphur in the melted wax, and a bit of resin.\n\n",
  id: 374
});
index.addDoc({
  title: "Common medals",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n## Common medals\n\nRelief awls are made of untempered steel, and then it is tempered. With it we beat on a matrice, not red hot on the fire as some people think, but on some steeled iron, reheated and adoulcy, that is then tempered.\n\n",
  id: 375
});
index.addDoc({
  title: "Iron clamps",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n## Iron clamps\n\nWhen you put them for the second time, make sure that the mold does not wobble.\n\n",
  id: 376
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n## Molds\n\nThose with noyau, when reheated, should be placed on half lit charcoal, without being in contact with the air; like the frame molds, they need to dry in the open, and uncovered.\n\n",
  id: 377
});
index.addDoc({
  title: "Thick tin pieces",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n## Thick tin pieces\n\nThey should not be casted with lead or red tin, like thin and fragile things. It is enough if they are well melted and hot. Fragile things need to be red hot and made of red tin.\n\n",
  id: 378
});
index.addDoc({
  title: "How to clean closed molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n## How to clean closed molds\n\nYou have to leave them cool down rather than blow inside to clean them, because they hold the ashes when they are hot. Once cooled, they are easier to clean. Have a find brass wire or steel wool to thoroughly clean the guene because it is through it that you cast. Blow into it and siphon, bringing it to you. Give it volume before casting the tail with wax, then cut it.\n   \nmake a tail by soldering a latten wire. The grains of a flower are quite little, so they can be removed with the chaple, but the leafs need to be peeled off correctly, then the paint will cover everything.\n\n",
  id: 379
});
index.addDoc({
  title: ["dues and payments of the heirs of late Sr. Ouvryer"],
  author: null,
  layout: "narrative",
  content: "- - - - - 170v - - - - - \n## [dues and payments of the heirs of late Sr. Ouvryer]\n\nIn the year fifteen hundred seventy—eight, the second of July, the heirs of the late Sr. Ouvryer received (two hundred and five ecus), the rent of Saint—Frajou, amounting to twelve hundred and thirty livres.\n\nThey have also received, as part of the revenue of the year fifteen hundred seventy nine, three hundred forty three and one third ecus.\n\n\n  \n    \n      And for the first year, they remain [to be paid] eighty livres and fifteen sous,\n      and for the second settlement, they have not yet received anything.\n    \n  \n\n\n",
  id: 380
});
index.addDoc({
  title: "Against plague",
  author: null,
  layout: "narrative",
  content: "- - - - - 170v - - - - - \n## Against plague\n\nAgainst pestilential fever or poison or plague, take an ecu’s weight of your opiate soaked in scabious or bugloss extract, or heavily diluted wine, if you are already ill. After taking it, you must make yourself sweat.\n\n",
  id: 381
});
index.addDoc({
  title: "To preserve oneself",
  author: null,
  layout: "narrative",
  content: "- - - - - 170v - - - - - \n## To preserve oneself\n\nAcetum paratum ex ruta baccis juniperi simul tusis Eoaceto extinguantur lateres igniti. Et vapor excipiatur ore naribus..Rue vinegar together with crushed juniper berries. Pour the vinegar over red hot bricks and inhale the vapor through the mouth and nostrils. This is to preserve oneself when going into noxious air: a garment can be perfumed with this vapor in order to remove infection from a room, house, etc. And if you find yourself in a place where you do not have this preparation, carry rue and berries crushed together, then, if need be, boil them in vinegar and use as described.\n\n \n- {:.indent-3}Ottonis episcopi | Frisigensis | Ab orbe condito\n\n\n  \n    \n      \n        \n          Abbatis\n          Urspergensis\n          Chronicon\n        \n      \n    \n  \n  \n    \n      \n        \n          Hieronymus\n          Mercurialis,\n          Variarum\n        \n      \n    \n  \n  \n    Rerum Scoticarum Historia, Georgio Bucanano authore\n  \n  \n    \n      \n        \n          Rembertus Dodonæus, Mechliniensis medicus,\n          De stirpium historia\n        \n      \n    \n  \n  \n    De L’Orme, De l’invention de bien bastir, and other works\n  \n  \n    Telesius, De coloribus, Vascosan\n  \n  Marbodius, De lapillis prætiosis\n &lt;/span&gt;\n\n\n",
  id: 382
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": ["List of artisans with their locations"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_a1/",
  "excerpt": "001r ## [List of artisans with their locations] Nicolas Coste, in the Rue de la Heaumerie, at the sign of..."
}
,{
  "title": ["Diverse thoughts"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_a2/",
  "excerpt": "001r ## [Diverse thoughts] The harvester that leaves some ears is not blamed. Sacra Eleusinae deae propalare nefas. Trumpets, see..."
}
,{
  "title": ["List of authors"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_a3/",
  "excerpt": "001r ## [List of authors] Wolfangus Lazius Petrus Appianus mathematicus Ingolstadiensis, Comment. urb. rom. Hieronimo Ruscelli Hermolaus Barbarus Angelius Bargaeus,..."
}
,{
  "title": ["Pen trial"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_a4/",
  "excerpt": "     001r      \n## [Pen trial]\n\nMonsieur\n"
}
,{
  "title": "For easing the belly",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001v_a1/",
  "excerpt": "001v ## For easing the belly Prunes of Saint Antonin, and if you like you can put leaves of malva..."
}
,{
  "title": "Books to recover",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p002r_a1/",
  "excerpt": "002r ## Books to recover The chronicles of Sigebert Rufinus Irenaeus, In [Haereses] Paulus Aemilius Paulus Jovius Polydorus Bergomensis Philippe..."
}
,{
  "title": "Against pain",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p002r_a2/",
  "excerpt": "     p002r      \n## Against pain\n\n\n Turpentine oil, oil of Jacob and salt from cabbage ashes.\n\n"
}
,{
  "title": ["Book title"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p002v_a1/",
  "excerpt": "     002v      \n## [Book title]\n\nPractica, cioè nova inventione di contegiare, stampata in Brescia per Vincenzo Sabio\n\n"
}
,{
  "title": "Emeralds of Brissac",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p002v_a2/",
  "excerpt": "002v Annotations: Imitation Gemstones, Ruby Emerald, fol. 100rv (Kremnitzer, Shah) ## Emeralds of Brissac I took minium, 26 ℥, crystal..."
}
,{
  "title": "Sapphire",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p002v_a3/",
  "excerpt": "002v Annotations: Imitation Gemstones, Ruby Emerald, fol. 100rv (Kremnitzer, Shah) ## Sapphire Pebbles or crystal, 8 ℥; minium, 16 ℥;..."
}
,{
  "title": "Imitation coral",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p003r_a1/",
  "excerpt": "003r Annotations: Imitation Coral, fol. 3r (Chessa) ## Imitation coral + One must first make the branches from wood or..."
}
,{
  "title": "Varnish for paintings",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p003r_a2/",
  "excerpt": "003r ## Varnish for paintings Take a pound of Venice turpentine and heat it in a pot until it simmers,..."
}
,{
  "title": "Thick varnish for floorboards",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p003r_a3/",
  "excerpt": "003r ## Thick varnish for floorboards There is a type of varnish that takes a long time to dry and..."
}
,{
  "title": "To varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p003v_a1/",
  "excerpt": "003v ## To varnish Turpentine varnish does not need any glue since it is fat and viscous and does not..."
}
,{
  "title": "Lavender spike oil varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004r_1/",
  "excerpt": "004r ## Lavender spike oil varnish One must heat lavender spike oil and, as it begins to simmer, put in..."
}
,{
  "title": "To remove varnish from an old panel painting that has yellowed and varnish it again",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004r_2/",
  "excerpt": "004r ## To remove varnish from an old panel painting that has yellowed and varnish it again Take some white..."
}
,{
  "title": "Black varnish for sword guards, metal bands for chests, etc.",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004v_a1/",
  "excerpt": "004v Annotations: Pain, Ostie, Rostie: Bread in Early Modern Europe, fols. 4v, 37r, 79v (Le Pouésard) ## Black varnish for..."
}
,{
  "title": "Black varnish without fire, without disassembling harnesses or removing metal bands from chests.",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004v_a2/",
  "excerpt": "004v ## Black varnish without fire, without disassembling harnesses or removing metal bands from chests. Take spike lavender oil varnish..."
}
,{
  "title": "Iron engravers' varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004v_a3/",
  "excerpt": "004v ## Iron engravers’ varnish Take linseed oil or walnut oil and instead of black pitch you will add some..."
}
,{
  "title": "Steel mirrors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p005r_a1/",
  "excerpt": "005r ## Steel mirrors + They are called steel mirrors because in the past they were usually made of steel..."
}
,{
  "title": "Concave mirrors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p005r_a2/",
  "excerpt": "005r ## Concave mirrors A concave mirror shaped in the aforesaid form produces an endless number of illusions which seem..."
}
,{
  "title": "For bronzing in yellow and white",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p005v_a1/",
  "excerpt": "005v ## For bronzing in yellow and white Take mirror tin and melt it. On half a pound of this,..."
}
,{
  "title": "To lay down and set burnished gold and give it a red or green or blue hue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006r_1/",
  "excerpt": "006r Annotations: Rouge Clair, fol. 40v (Chang, Shi) Annotations: Esmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi) ##..."
}
,{
  "title": "For cages",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006v_a1/",
  "excerpt": "006v Annotations: \"For Cages\" and Glassmaking in Ms. Fr. 640: fol.6v ## For cages You can embellish them with thin..."
}
,{
  "title": "For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006v_a2/",
  "excerpt": "006v ## For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of..."
}
,{
  "title": "To gild with gold color and tinsel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a1/",
  "excerpt": "007r ## To gild with gold color and tinsel Once you have colored or made your stamped ornament in tin..."
}
,{
  "title": "To color stamped ornaments for trunks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a2/",
  "excerpt": "007r ## To color stamped ornaments for trunks The stamped ornament made from sheets of copper or latten are made..."
}
,{
  "title": "Doublets",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a3/",
  "excerpt": "007r ## Doublets Good dragon’s blood soaked in spirits produces its own mastic or glue. So do vert de vessie..."
}
,{
  "title": "Fish glue or usblac and mouth glue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a4/",
  "excerpt": "007r ## Fish glue or usblac and mouth glue It is made from codfish skin that has been boiled rather..."
}
,{
  "title": "To give the color of all kind of metals and woods and other things",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_1/",
  "excerpt": "007v ## To give the color of all kind of metals and woods and other things Take touchstone and pumice..."
}
,{
  "title": "Against windy colic",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_2/",
  "excerpt": "007v ## Against windy colic Take a dozen dried common walnuts and throw them one after another onto a good..."
}
,{
  "title": "To relieve the pain of g{out}",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_3/",
  "excerpt": "007v ## To relieve the pain of g{out} Take half a pound of finely powdered golden and yellow marcasite, half..."
}
,{
  "title": "Against gonorrhea",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_4/",
  "excerpt": "007v ## Against gonorrhea Cook .i. lb. of old smiths’ water, .i. ℥ of Armenian bole reduced in the finest..."
}
,{
  "title": "Gold lettering on paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_1/",
  "excerpt": "008r ## Gold lettering on paper Write with fig tree milk then let it dry a little, afterwards apply the..."
}
,{
  "title": "To explode grenades and give force to fireworks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_2/",
  "excerpt": "008r ## To explode grenades and give force to fireworks Put into the powder one sixth as much of quicksilver..."
}
,{
  "title": "Tempering bullets to pierce bullet-proof armor",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_3/",
  "excerpt": "008r ## Tempering bullets to pierce bullet—proof armor Heat the lead bullet as much as you can without melting it,..."
}
,{
  "title": "To make a breach in a wall by night",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_4/",
  "excerpt": "008r ## To make a breach in a wall by night Having made a hole in a wall as you..."
}
,{
  "title": "To polish a ruby balay",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_1/",
  "excerpt": "008v ## To polish a ruby balay Unlike others, you don’t polish it with tripoli, but with marcasite powder and..."
}
,{
  "title": "Ground gold and ground silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_2/",
  "excerpt": "008v ## Ground gold and ground silver You have to calcine your pure gold with ☿ and then let your..."
}
,{
  "title": "Polishing stones",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_3/",
  "excerpt": "008v ## Polishing stones There are three wheels for this purpose, one of tin, one of lead, and one of..."
}
,{
  "title": "Pewterers' mixture",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_4/",
  "excerpt": "008v ## Pewterers’ mixture Because they often mix in with the pure tin half the quantity of lead, which renders..."
}
,{
  "title": "Perfect amalgam",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_5/",
  "excerpt": "008v ## Perfect amalgam Take the finest sandstone you can find and make a cavity in the middle. And put..."
}
,{
  "title": "Plowman",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009r_1/",
  "excerpt": "009r ## Plowman Since millet is naturally very dry, harvesters thresh it most often in the cool of night and..."
}
,{
  "title": "Painters",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009r_2/",
  "excerpt": "009r ## Painters After laying down their colors, some smooth it with the back of a feather but the large..."
}
,{
  "title": "Merchants",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009r_3/",
  "excerpt": "009r ## Merchants They commonly have four books. The tiro, which is a formulary for apprentices, by which they can..."
}
,{
  "title": "Painters",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009v_1/",
  "excerpt": "009v ## Painters They melt orpiment entirely in a glass bottle on very hot ashes, but it would be more..."
}
,{
  "title": "Merchant",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009v_2/",
  "excerpt": "009v ## Merchant The order that merchants are accustomed to keep in their books, which are the waste book, the..."
}
,{
  "title": "Waste book",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009v_3/",
  "excerpt": "009v ## Waste book First, François du Cros owes from 2 September 1581, for 1 canne de batiste at 8..."
}
,{
  "title": "Imitation jasper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_1/",
  "excerpt": "010r Annotations: Imitating Raw Nature, fol. 10r (LoresChavez and Kang) Jasper Imitation on Horn ## Imitation jasper Take horn as..."
}
,{
  "title": "Scudegrun",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_2/",
  "excerpt": "010r Annotations: Color for Green ## Scudegrun It is made in Lyon from the juice of weld mixed with chalk..."
}
,{
  "title": "Roses",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_3/",
  "excerpt": "010r ## Roses These are imitated either with the scrapings of horn used for lanterns, or with very light, fine..."
}
,{
  "title": "Purple color",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_4/",
  "excerpt": "010r ## Purple color Painters make it beautifully by first applying an undercoat of ordinary azur, or better yet azure..."
}
,{
  "title": "Powder for hourglasses",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_5/",
  "excerpt": "010r Annotations: Powder for Hourglasses ## Powder for hourglasses It must be made very fine and not subject to rust..."
}
,{
  "title": "For painting in oil on taffeta without the oil running",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_1/",
  "excerpt": "010v Annotations: Oil on Taffeta ## For painting in oil on taffeta without the oil running One needs to make..."
}
,{
  "title": "Underlayer for gold leaf on parchment or paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_2/",
  "excerpt": "010v Annotations: Gilding on Paper and Parchment, fol. 10v, 29v (Goldenberg) ## Underlayer for gold leaf on parchment or paper..."
}
,{
  "title": "For cleaning gold leaf applied to iron",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_3/",
  "excerpt": "010v ## For cleaning gold leaf applied to iron Rub your weapons or other gilt objects with dry horse dung...."
}
,{
  "title": "For whitening ceruse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_4/",
  "excerpt": "010v ## For whitening ceruse Hard—boil some eggs, cut them in half and take the yolks out, and between the..."
}
,{
  "title": "Painting enamel azure in oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011r_1/",
  "excerpt": "011r Annotations: Azure Enamels, fol. 11r, 59r, 61v, 93v (Chang, Clemens) ## Painting enamel azure in oil This is a..."
}
,{
  "title": "Applying the color of Damascene steel on knives",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_1/",
  "excerpt": "011v ## Applying the color of Damascene steel on knives Rub the steel with common aquis fortis mixed with earth...."
}
,{
  "title": "Getting rid of red eyes or black eyes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_2/",
  "excerpt": "011v ## Getting rid of red eyes or black eyes Make two small licks of raw mutton flesh, and with..."
}
,{
  "title": "Applying unpolished gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_3/",
  "excerpt": "011v ## Applying unpolished gold There is nothing better than the black varnish of sword—makers to use as a base..."
}
,{
  "title": "Making diamond points for engraving",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_4/",
  "excerpt": "011v ## Making diamond points for engraving These are for sketching what you want to draw on stones and for..."
}
,{
  "title": "Polishing a copper wheel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_5/",
  "excerpt": "011v ## Polishing a copper wheel Instead of polishing your stone, it is necessary to remove the grease by rubbing..."
}
,{
  "title": "For molding from sulfur",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012r_1/",
  "excerpt": "012r Annotations: Sulfur and Additives ## For molding from sulfur Sulfur is made beautiful by mixing in soot black or..."
}
,{
  "title": "Paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012r_2/",
  "excerpt": "012r ## Paper The whitest and thinnest is the best. And when the hollow mold is quite clean, as when..."
}
,{
  "title": "Plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012r_4/",
  "excerpt": "012r ## Plaster Mountain plaster is greyer, and that from the region of Albi is whiter. It has to be..."
}
,{
  "title": "Moulding stucco promptly",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012v_1/",
  "excerpt": "012v ## Moulding stucco promptly Crush and pulverize finely brick or Armenian bole or sanguine and incorporate it with melted..."
}
,{
  "title": "Cleaning yellow pearls",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012v_2/",
  "excerpt": "012v ## Cleaning yellow pearls Gently boil them in a goldsmith’s bouteure then, with tripoli and a small piece of..."
}
,{
  "title": "To whiten enilanroc",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012v_3/",
  "excerpt": "012v ## To whiten enilanroc Some believe the ceruse—color crust that is on top to be natural. Others say that..."
}
,{
  "title": "Flesh color with arsenic",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_1/",
  "excerpt": "013r ## Flesh color with arsenic Sublimated arsenic, that is to say, the white kind sold as stone, when powdered..."
}
,{
  "title": "To dye",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_2/",
  "excerpt": "013r ## To dye Mix sal ammoniac and vitriol and boil them together. Then mix in lake or verdigris and..."
}
,{
  "title": "Polishing of stones",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_3/",
  "excerpt": "013r ## Polishing of stones Engraved stones are not polished on a copper wheel, but with brushes and tripoli. Yet..."
}
,{
  "title": "Fine sieves of raw silk",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_4/",
  "excerpt": "013r ## Fine sieves of raw silk Tammy of raw silk is made on a weaver, to make very fine..."
}
,{
  "title": "Candles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_1/",
  "excerpt": "013v ## Candles Candlemakers never make good candles when the autan wind blows because they always melt, however good is..."
}
,{
  "title": "Whitening pearls",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_2/",
  "excerpt": "013v ## Whitening pearls When they have been applied in embroidery on some garment, they are greasy and may be..."
}
,{
  "title": "Toadstone",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_3/",
  "excerpt": "013v ## Toadstone That which comes from the head of the toad and has the shape of the toad, painted..."
}
,{
  "title": "Snakes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_4/",
  "excerpt": "013v ## Snakes It is said that if one calls a snake in Greek, saying ΟΦΗ ΟΦΗ, it will flee...."
}
,{
  "title": "For earth walls and rustic construction",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p014r_1/",
  "excerpt": "014r ## For earth walls and rustic construction Swallows have taught us this craft by building their nests out of..."
}
,{
  "title": "Damask Cloth",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015r_a1/",
  "excerpt": "015r Annotations: Damasked Cloth ## Damask Cloth You can make damask cloth of two different colours and imitate embroidery without..."
}
,{
  "title": "Casting metals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015r_a2/",
  "excerpt": "015r ## Casting metals Candlesticks and small works are cast in a frame with sand. Having stamped the work, sprinkle..."
}
,{
  "title": "Casting gold and silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015r_a3/",
  "excerpt": "015r ## Casting gold and silver The sand must be made from something very dry and arid and reheated well..."
}
,{
  "title": "Ears",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_1/",
  "excerpt": "015v ## Ears When a defluxion occurs in the ear, be very careful not to put anything in it, and..."
}
,{
  "title": "Making letters easier to read",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_2/",
  "excerpt": "015v ## Making letters easier to read One cuts the largest pieces of beryl or crystal round on one side..."
}
,{
  "title": "Stamping",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_3/",
  "excerpt": "015v ## Stamping If you have a bronze medal and you want to make it very light, make a lead..."
}
,{
  "title": "Softening horn",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_4/",
  "excerpt": "015v ## Softening horn Those who mount acou Agnus Deis and make circles from horn for certain little boxes soften..."
}
,{
  "title": "Toothache",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_6/",
  "excerpt": "015v ## Toothache Some put a clove of garlic in the ear on the side of the aching tooth, and..."
}
,{
  "title": "Black color for dyeing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_1/",
  "excerpt": "038v Annotations: Black color for dyeing ## Black color for dyeing Take lye made from quicklime and white lead, mix..."
}
,{
  "title": "Against nose bleeding and for dyeing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_2/",
  "excerpt": "038v Annotations: Dragon’s Blood, fol. 29v, 38v (Reich) ## Against nose bleeding and for dyeing Pound some of the kind..."
}
,{
  "title": "Beautiful artichokes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_3/",
  "excerpt": "038v ## Beautiful artichokes You need to trim them every year so that only one stem is left, and water..."
}
,{
  "title": "Planting trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_4/",
  "excerpt": "038v ## Planting trees It is said that rarely a tree planted on Saint Paul’s day will fail to take...."
}
,{
  "title": "Merchants",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_5/",
  "excerpt": "038v ## Merchants Those who retail velvet and other materials do not keep double—entry books because they sell in small..."
}
,{
  "title": "Goldsmith",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039r_1/",
  "excerpt": "039r ## Goldsmith They bind silver filings with saltpeter which refines it &amp; does not make it brittle. But gold..."
}
,{
  "title": "Dyers’ woad",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039r_2/",
  "excerpt": "039r ## Dyers’ woad It is grown in Lauragais where the deep soil is so fertile that every year wheat..."
}
,{
  "title": "Enamel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039v_a1/",
  "excerpt": "039v Annotations: Esmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi) ## Enamel Enamel takes more readily on copper..."
}
,{
  "title": "Colors for illumination on glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039v_a2/",
  "excerpt": "039v ## Colors for illumination on glass In order that your turpentine colors shall not run, &amp; become unified, mix..."
}
,{
  "title": "Tracing a history on glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039v_a3/",
  "excerpt": "039v &lt;div class=\"annotation\" align=\"left\"&gt;Annotations: &lt;a href=\"https://docs.google.com/document/d/1hadGQunGoh9R6eJUndm5MxRcoIi_r95EOGZqizP4Y/edit\" target=\"_blank\"&gt;Tracing a history on glass&lt;/a&gt; &lt;/div&gt; ## Tracing a history on glass If you..."
}
,{
  "title": "Aqua fortis",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_1/",
  "excerpt": "040r ## Aqua fortis Some put on for four pounds of aqua fortis matter four that is in the retort,..."
}
,{
  "title": "Vinegar",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_3/",
  "excerpt": "040r ## Vinegar One takes for granted that jec heat red—hot the mineral salt that looks like marble &amp; that..."
}
,{
  "title": "Silver gilt buttons",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_4/",
  "excerpt": "040r ## Silver gilt buttons Because silver gilt does not fear fire, it is cut into lozenges flat[illegible] on one..."
}
,{
  "title": "Grottos",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_5/",
  "excerpt": "040r ## Grottos To fill some empty place that cannot be laden with hanging rocks, one puts a piece of..."
}
,{
  "title": "Latten and calamine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_02/",
  "excerpt": "040v ## Latten and calamine Founders do not melt latten in a bellow furnace but in crucibles, for in a..."
}
,{
  "title": "Metal",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_03/",
  "excerpt": "040v ## Metal Tin needs to be pure because if there is any lead, it will go up in smoke..."
}
,{
  "title": "Aqua fortis",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_04/",
  "excerpt": "040v ## Aqua fortis If your retort is well luted you should not surround it with ashes, which would only..."
}
,{
  "title": "Cross of the commanders of Malta",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_1/",
  "excerpt": "040v Annotations: Rouge Clair, fol. 40v (Chang, Shi) ## Cross of the commanders of Malta The fine rouge clair which..."
}
,{
  "title": "Garden lily",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_02/",
  "excerpt": "041r ## Garden lily If it is broken during its first blossom, it will not grow or bloom until the..."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_03/",
  "excerpt": "041r ## Sand The sand to be used for casting should be chosen such that it is not too dry..."
}
,{
  "title": "Ducks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_04/",
  "excerpt": "041r ## Ducks Young domestic ones do not grow for a month after hatching but remain in this state. But..."
}
,{
  "title": "Casting earth for founders",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_1/",
  "excerpt": "041r ## Casting earth for founders It becomes fat by being beaten and also mixed with horse manure. Potter’s earth..."
}
,{
  "title": "Glassmaker's black",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041v_1/",
  "excerpt": "041v ## Glassmaker’s black Filings of iron taken from bars that have been in the fire for a long time,..."
}
,{
  "title": "Sheared ewes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041v_2/",
  "excerpt": "041v ## Sheared ewes If the shearer wounds them at some point, he applies the very excrement of the ewe..."
}
,{
  "title": "Colors and gilt on glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041v_3/",
  "excerpt": "041v Annotations: Colors and gilt on glass ## Colors and gilt on glass You should not put as strong gummed..."
}
,{
  "title": "Founder",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042r_1/",
  "excerpt": "042r ## Founder The clay mould should be baked until sometimes it becomes red hot, since otherwise the metal would..."
}
,{
  "title": "Wax for seals and impressions",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042r_2/",
  "excerpt": "042r ## Wax for seals and impressions For large wax seals, you should always have tepid water handy, and keep..."
}
,{
  "title": "Casting in plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042r_a3/",
  "excerpt": "042r ## Casting in plaster Melt some wax, and with a big brush coat it over the relief of which..."
}
,{
  "title": "Pounce for scratching satin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a1/",
  "excerpt": "042v ## Pounce for scratching satin After pouncing with crushed flour or chalk, in order that the dots of the..."
}
,{
  "title": "Canvas for oil painting without breaking",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a2/",
  "excerpt": "042v ## Canvas for oil painting without breaking In order that your oil painting be not broken or ruined as..."
}
,{
  "title": "Oil painting on taffeta",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a3/",
  "excerpt": "042v Annotations: Oil Painting on Taffeta 042v ## Oil painting on taffeta In order that the oil not run, make..."
}
,{
  "title": "Casting sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a4/",
  "excerpt": "042v ## Casting sand The key is to grind it well upon marble, and that it be extremely fine; mix..."
}
,{
  "title": "For decorating a painting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a5/",
  "excerpt": "042v ## For decorating a painting Go over the lines with lacquer ground together with olive oil, which will not..."
}
,{
  "title": "White varnish on plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a6/",
  "excerpt": "042v ## White varnish on plaster Put down two or three layers of white glue for painting. Afterwards, varnish with..."
}
,{
  "title": "Mericoton and pavis",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a1/",
  "excerpt": "     043r      \n## Mericoton and pavis\n\nOne should graft them before Christmas so that they will not freeze too much.\n\n"
}
,{
  "title": "White bronzing on plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a2/",
  "excerpt": "043r ## White bronzing on plaster One must apply four layers of painters’ distemper glue onto the plaster portrait, leaving..."
}
,{
  "title": "Purpurine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a3/",
  "excerpt": "043r ## Purpurine Take half an ounce of soft tin, melt it in a spoon. Once it is melted, throw..."
}
,{
  "title": "White bronzing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a4/",
  "excerpt": "043r ## White bronzing Apply some blackblack with glue on the medal, as described above, and then varnish it. Once..."
}
,{
  "title": "Varied and transmuted wine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_1/",
  "excerpt": "043v Annotations: Sleightofhand tricks ## Varied and transmuted wine Grate Brazilwood very fine, let it soak for one or two..."
}
,{
  "title": "Pearls",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_2/",
  "excerpt": "     043v      \n## Pearls\n\nIt is said that pulverised talc blown into a lamp makes them so.\n\n"
}
,{
  "title": "Arquebusier",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_3/",
  "excerpt": "043v ## Arquebusier To shoot your arquebus precisely the end of the breech must come precisely on the edge of..."
}
,{
  "title": "Hail shot for the arquebus",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_4/",
  "excerpt": "043v ## Hail shot for the arquebus If you want that it stays together put a piece of felt or..."
}
,{
  "title": "The reach of an arquebuse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a1/",
  "excerpt": "044r ## The reach of an arquebuse The proportion of a fowling piece is: 4 king’s feet long and the..."
}
,{
  "title": "Pewtermaker",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a2/",
  "excerpt": "044r ## Pewtermaker They mix viii or ten pounds of lead for each hundredweight of tin in the cities that..."
}
,{
  "title": "Arquebuse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a3/",
  "excerpt": "044r ## Arquebuse To keep it from backfiring, clean your arquebus every eight days, and rub it with oil, and..."
}
,{
  "title": "Lacquer",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a4/",
  "excerpt": "044r ## Lacquer To test it, soak it and apply it to paper, and if one or two hours later..."
}
,{
  "title": "Dyes from flowers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a5/",
  "excerpt": "044r ## Dyes from flowers Red poppies that grow amongst wheat make a very beautiful columbine on white leather. The..."
}
,{
  "title": "Horsehair sieves",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_1/",
  "excerpt": "044v Annotations: Fine raw silk sieves and horse hair sieves ## Horsehair sieves They are made often in Normandy with..."
}
,{
  "title": "Excellent water against the pest by the Master of Montorsin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_2/",
  "excerpt": "044v ## Excellent water against the pest by the Master of Montorsin Take some theriac rue, dittany and good vinegar,..."
}
,{
  "title": "White soporific oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_3/",
  "excerpt": "044v ## White soporific oil Have x or 12 Mandragore apples, put them in quarters together with some olive oil..."
}
,{
  "title": "Stucco",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_4/",
  "excerpt": "044v ## Stucco To stick stones, some do not use gem and pitch black rosin because it is too greasy,..."
}
,{
  "title": "Loading a pellet arquebus",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p045r_1/",
  "excerpt": "045r ## Loading a pellet arquebus It is necessary to make a wooden pipe 4 or 5 fingers wide that..."
}
,{
  "title": "Loading an arquebus",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p045v_1/",
  "excerpt": "045v ## Loading an arquebus You must have different charges depending to the range that you want your arquebus to..."
}
,{
  "title": "How to adjust a bent gun barrel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p045v_2/",
  "excerpt": "045v ## How to adjust a bent gun barrel Take off the breech and put it [the barrel] on a..."
}
,{
  "title": "Birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_1/",
  "excerpt": "049v ## Birds at right top  margin of folio 049v Calandra larks and all birds taken from the nest and which..."
}
,{
  "title": "Grain of lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_2/",
  "excerpt": "049v ## Grain of lead at middle  margin of folio 049v Take a playing card, pierced with a pin or needle,..."
}
,{
  "title": "Birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_3/",
  "excerpt": "049v ## Birds at bottom  margin of folio 049v Those that are caught at Michaelmas are good to keep, but those..."
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_mb1/",
  "excerpt": "049v at left bottom  margin of folio 049v Ortolans are ventriloquists, so that, singing without opening their beaks, they seem to..."
}
,{
  "title": "Preserving fruit for the entire year",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_1/",
  "excerpt": "050r ## Preserving fruit for the entire year at top  margin of folio 050r Take a rounded glass phial, with a..."
}
,{
  "title": "Molding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_2/",
  "excerpt": "050r ## Molding at top  margin of folio 050r If you want to quickly mold in demi—relief anything you come upon,..."
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_mb1/",
  "excerpt": "050r at left bottom  margin of folio 050r Polished cardboard of little thickness and slightly humid is appropriate. Then if you..."
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050v_mb1/",
  "excerpt": "050v at left bottom  margin of folio 050v Steel is applied to tools not on both sides, but underneath the part..."
}
,{
  "title": "Skin colors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_1/",
  "excerpt": "061r ## Skin colors It is necessary that you make it of two kinds, one more red to make the..."
}
,{
  "title": "Making things round",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_2/",
  "excerpt": "061r ## Making things round If you want to model well, soften round things by rounding them off with the..."
}
,{
  "title": "White lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_3/",
  "excerpt": "061r ## White lead Without this, you can’t work on a small scale for which it is necessary to soften..."
}
,{
  "title": "Lights",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_4/",
  "excerpt": "061r ## Lights Your brush shows it to you by making some shadow which must always follow the back of..."
}
,{
  "title": "Water to make light for painters",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061v_1/",
  "excerpt": "061v ## Water to make light for painters Distill some vine water and put it into a big bottle. Put..."
}
,{
  "title": "Chassis used by Germans",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061v_2/",
  "excerpt": "061v ## Chassis used by Germans Germans who work in small scale make ‘chassis” not of glass but of canvas..."
}
,{
  "title": "Perspectives",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062r_1/",
  "excerpt": "062r ## Perspectives Painting perspectives in oil takes a long time because of the many lines that need to be..."
}
,{
  "title": "Ocher",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062r_2/",
  "excerpt": "     062r      \n## Ocher\n\nThis is used for faces, hair, skulls and rocks. \n.\n"
}
,{
  "title": "Distant people and animals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062r_3/",
  "excerpt": "062r ## Distant people and animals First one roughs them out in gray or in purple, which is made of..."
}
,{
  "title": "Drawing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062r_4/",
  "excerpt": "062r ## Drawing After you have primed your panel and scraped it with a knife to make it quite even,..."
}
,{
  "title": "Portraits",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062v_1/",
  "excerpt": "062v ## Portraits To become an artist, it is necessary to draw by eye, without compass or ruler. Masters do..."
}
,{
  "title": "Perspective",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062v_2/",
  "excerpt": "062v ## Perspective In order to tell where the vanishing point is one must lay a ruler over the lines,..."
}
,{
  "title": "To bronze in white",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_1/",
  "excerpt": "074r ## To bronze in white Take looking—glass tin and put it to soak in gum water, and pound it..."
}
,{
  "title": "To make vermillion",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_2/",
  "excerpt": "074r ## To make vermillion Take two pounds of sulphur, and melt it, and add two pounds of mercury to..."
}
,{
  "title": "To make varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_3/",
  "excerpt": "074r ## To make varnish Take one pound of linseed oil, and then put it in a pot of earth..."
}
,{
  "title": "To make red varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_1/",
  "excerpt": "074v ## To make red varnish Take vermillion, and let it soak in quite light gum water, like the other,..."
}
,{
  "title": "To make yellow varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_2/",
  "excerpt": "074v ## To make yellow varnish Take some gum arabic and let it soak in water, then take some well..."
}
,{
  "title": "Recipe for white gum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_3/",
  "excerpt": "074v ## Recipe for white gum Take white wax and ceruse and a little fine pitch, very well pounded together,..."
}
,{
  "title": "Green gum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_4/",
  "excerpt": "     074v      \n## Green gum\n\nTake green wax with a little verdigris and make it melt as said above.\n\n"
}
,{
  "title": "Gilding wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_2/",
  "excerpt": "075v ## Gilding wood First of all it is necessary to apply a coat of very clear glue; and when..."
}
,{
  "title": "Recipe for coloring all wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_4/",
  "excerpt": "075v ## Recipe for coloring all wood To make it black, the wood needs to be soaked in olive oil..."
}
,{
  "title": "Medicine of orientals against all maladies",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p077r_a2/",
  "excerpt": "077r Annotations: Smoke as Medicine, fol. 77r (DeVinney) ## Medicine of orientals against all maladies Dry some rosemary in the..."
}
,{
  "title": "Tin for casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p079_3/",
  "excerpt": "079v ## Tin for casting They use common tin, which is the one that pewterers use for plates, which is..."
}
,{
  "title": "Fountains",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080r_3/",
  "excerpt": "080r ## Fountains If you wish to raise water higher than its source, make a pipe descend as in A...."
}
,{
  "title": "Founders of small tin work",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_a1/",
  "excerpt": "080v Annotations: Founders of Small Tin Work ## Founders of small tin work They usually cast from soft solder the..."
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_mb1/",
  "excerpt": "080v Annotations: Founders of Small Tin Work Make sure the pegs of your frame fit in easily so it will..."
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_mb2/",
  "excerpt": "     080v      \nAnnotations:\nFounders of Small Tin Work\n \nTry to carve with distilled vinegar.\n\n"
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_mb3/",
  "excerpt": "     080v      \nAnnotations:\nFounders of Small Tin Work\n \nTry calcined oyster shells; they are said to be excellent for molding.\n\n"
}
,{
  "title": "Vine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a1/",
  "excerpt": "088r ## Vine As with a bramble, it can be planted on both sides. And those who plant the larger..."
}
,{
  "title": "Mortars",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a2/",
  "excerpt": "088r ## Mortars The fine copper mortars do not throw any flames, as long as the iron pestle is not..."
}
,{
  "title": "Varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a3/",
  "excerpt": "088r ## Varnish Turpentine oil: turpentine &amp; good eau de vie, to dry it out; heat it without mixing on..."
}
,{
  "title": "Grafting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a4/",
  "excerpt": "088r ## Grafting One knows from experience that the young shoot that is enters into the incision on the sunny..."
}
,{
  "title": "Baker",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a5/",
  "excerpt": "088r ## Baker Dust guards wheat against being worm—eaten. And to clean it well when it is stained &amp; like..."
}
,{
  "title": "Looking-glass tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a6/",
  "excerpt": "     088r      \n## Looking—glass tin\n\nIt makes material whiter.\n\n"
}
,{
  "title": "Sand from pulverised rock salt and sand from a minium finely ground on marble",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088v_a1/",
  "excerpt": "088v ## Sand from pulverised rock salt and sand from a minium finely ground on marble After they have been..."
}
,{
  "title": "Mineral sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088v_a2/",
  "excerpt": "088v ## Mineral sand It does not matter if the sand color is white or yellow. Above all it the..."
}
,{
  "title": "Powder of ox bone and rock salt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089r_a1/",
  "excerpt": "089r Annotations: Ox Bone and Rock Salt ## Powder of ox bone and rock salt I pulverised them separately and..."
}
,{
  "title": "Reheating or wiping a box mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089r_a2/",
  "excerpt": "089r ## Reheating or wiping a box mold Always arrange the most delicate parts, like faces or handles, so that..."
}
,{
  "title": "Natural sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089r_a3/",
  "excerpt": "089r ## Natural sand This should not be reheated for lead and tin, it is better all new and fresh...."
}
,{
  "title": "Ammonia salt and alabaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089v_a1/",
  "excerpt": "089v ## Ammonia salt and alabaster Dry ammonia salt, ground on a marble slab, molds very cleanly and is easily..."
}
,{
  "title": "White glassmaker's sand mixed with ammonia salt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089v_a2/",
  "excerpt": "089v ## White glassmaker’s sand mixed with ammonia salt You can find this sand in Cominge, near the town Aurignac...."
}
,{
  "title": "Sal ammoniac and iron dross",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090r_a1/",
  "excerpt": "090r ## Sal ammoniac and iron dross I pulverized sal ammoniac, previously well dried in a hot bronze mortar over..."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090r_a2/",
  "excerpt": "090r ## Sand Molders from Foix who cast their medals sideways use crocum ferri and calcinated slate. It is used..."
}
,{
  "title": "Every kind of sand can be made useful",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090r_a3/",
  "excerpt": "090r ## Every kind of sand can be made useful Artisans who do big works, and who need to search..."
}
,{
  "title": "Potters' clay",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090v_a1/",
  "excerpt": "090v ## Potters’ clay Grind it in a mortar mustard mill with water, and it will become as impalpable as..."
}
,{
  "title": "Orange trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090v_a2/",
  "excerpt": "090v ## Orange trees In Italy, particularly in the coldest areas like Lombardia, people plant the orange trees inside squared..."
}
,{
  "title": "Grafting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p091r_1/",
  "excerpt": "091r ## Grafting Any tree that has a large pith will be hard to be graft from, because the cutting..."
}
,{
  "title": "Molding with cuttlefish bone",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p091r_2/",
  "excerpt": "091r ## Molding with cuttlefish bone Pay attention to keep the bones in a dry place, because they are very..."
}
,{
  "title": "Sand mixture easy to melt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092r_1/",
  "excerpt": "092r ## Sand mixture easy to melt One â„¥ of part soft tin, one part fine lead, one part looking—glass..."
}
,{
  "title": "Molding hollow on one side and in relief on the other",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092r_2/",
  "excerpt": "092r Annotations: OneSided Hollow Cast Medals ## Molding hollow on one side and in relief on the other And for..."
}
,{
  "title": "Potin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092r_3/",
  "excerpt": "092r ## Potin Potin, once cast very hot, runs and drips like tin. But the medal becomes whitish and immediately..."
}
,{
  "title": "Molding statues",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092r_4/",
  "excerpt": "     092r      \n## Molding statues\n\nHalf founderâ€™s earth, which founders use, and half clay earth renders very neatly.\n\n"
}
,{
  "title": "Sand of river tellins and mussels",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092v_a1/",
  "excerpt": "092v ## Sand of river tellins and mussels The long shells that can be found in rivers of fresh water,..."
}
,{
  "title": "Freezing mercury",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092v_a2/",
  "excerpt": "092v ## Freezing mercury It can be frozen, as I tested, letting it boil one or two hours in a..."
}
,{
  "title": "Mixture",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092v_a3/",
  "excerpt": "092v ## Mixture Pure tin, frozen mercury, smells like tin. Iced tin, pure lead, as much of one as of..."
}
,{
  "title": "Olives",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093r_a1/",
  "excerpt": "093r ## Olives The olives go bad if you do not refresh their salt water once a month, do not..."
}
,{
  "title": "Country folk's observation",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093r_a2/",
  "excerpt": "093r ## Country folk’s observation When it freezes on Palm Sunday, it will freeze every month of the year When..."
}
,{
  "title": "Grafts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093r_a3/",
  "excerpt": "093r ## Grafts Do not use a graft from old wood, because it never makes a beautiful tree. Leave only..."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093r_a4/",
  "excerpt": "093r ## Sand The white ash of all kinds of wood, which still sticks to the wood while burning, and..."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093r_a5/",
  "excerpt": "093r ## Sand Very fine pulverized soot molds and removes easily from the mold. The best soot, which is greasy..."
}
,{
  "title": "Faces painted with distemper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093v_1/",
  "excerpt": "093v Annotations: Painting Skin and Shadows a destrempe, fol. 65r, 66r, 93v (Nisse) ## Faces painted with distemper Because colors..."
}
,{
  "title": "Azure",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093v_2/",
  "excerpt": "093v Annotations: Azure Enamels, fol. 11r, 59r, 61v, 93v (Chang, Clemens) ## Azure Azur desmail always wants to be cleaned..."
}
,{
  "title": "Purple and lake",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093v_3/",
  "excerpt": "093v ## Purple and lake It is made of azure and lake which is also tested on the palette with..."
}
,{
  "title": "Burnisher",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p094r_1/",
  "excerpt": "094r ## Burnisher The different parts of a sword are the handle, [and] the sheath of the sword. What comes..."
}
,{
  "title": "Provisions for the work of Colchos",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_1/",
  "excerpt": "102r ## Provisions for the work of Colchos {:.indent3}7 limbecks of glasse 2 lbs. of ☿ One measure of coarse..."
}
,{
  "title": "For the furnace",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_2/",
  "excerpt": "102r ## For the furnace {:.indent3}A chest with a ten inch wide square stone, and of a one—foot thickness, pierced..."
}
,{
  "title": "Royal cement",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_3/",
  "excerpt": "     102r      \n## Royal cement\n\n \n {:.indent3}One pound and a half of vitriol\n\n\n  \n    As much saltpeter\n  \n  \n    As much rock alum\n  \n\n\n"
}
,{
  "title": "Glass vessel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_4/",
  "excerpt": "102r ## Glass vessel The glass vessel must be either pear—shaped or round pyramid—shaped, of the same thickness as the..."
}
,{
  "title": "Painting on crystal or glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102v_1/",
  "excerpt": "102v ## Painting on crystal or glass They paint without any traces oil, except for faces where they outline the..."
}
,{
  "title": "Infusion of anthos or rosemary",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102v_2/",
  "excerpt": "102v ## Infusion of anthos or rosemary It is better to cook the flower in August and more suited to..."
}
,{
  "title": "Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102v_3/",
  "excerpt": "102v ## Casting Tin casts better when it is thin and delicate, than when it is thick, because when it..."
}
,{
  "title": "Excellent burn relief",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103r_1/",
  "excerpt": "103r ## Excellent burn relief Heat linseed oil on a light fire, without letting it boil and simmer. But when..."
}
,{
  "title": "Against dog's gall.",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103r_2/",
  "excerpt": "103r ## Against dog’s gall. The English, who fawn over their dogs owing to the care they take of their..."
}
,{
  "title": "Enema",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103v_1/",
  "excerpt": "103v ## Enema In order for the pipe to not hurt children at all, or those with swollen or protruding..."
}
,{
  "title": "Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103v_2/",
  "excerpt": "103v ## Casting Tin recoils if thick, therefore it is better to cast it thin and from one piece, to..."
}
,{
  "title": "To make colors fluid",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103v_3/",
  "excerpt": "103v ## To make colors fluid Mix some vinegar with a bit of bile, put it into a glass bottle,..."
}
,{
  "title": "Earwax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103v_4/",
  "excerpt": "103v ## Earwax If you take enough with the tip of an ear picker and you sieve it with foam..."
}
,{
  "title": "Enamels",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103v_5/",
  "excerpt": "103v Annotations: Esmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi) ## Enamels To well recognize their difference and..."
}
,{
  "title": "Corroding and dissolving absolutely pure gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104r_a1/",
  "excerpt": "104r ## Corroding and dissolving absolutely pure gold Put it regular salt with aqua fortis into a violl. Let it..."
}
,{
  "title": "Engraving on iron",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104r_a2/",
  "excerpt": "104r ## Engraving on iron One ℥ of verdigris and 2 ℥ of coarse salt and a bit of sublimate,..."
}
,{
  "title": "Good mixture to color gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104r_a3/",
  "excerpt": "104r ## Good mixture to color gold Sulphur and small gravel as much of one as of the other, and..."
}
,{
  "title": "How to silver plate copper and latten",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104r_a4/",
  "excerpt": "104r ## How to silver plate copper and latten Mold the silver as the gold, and put it in the..."
}
,{
  "title": "Enameling a carnelian",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104r_a5/",
  "excerpt": "104r Annotations: Esmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi) ## Enameling a carnelian Soak some wheat flour..."
}
,{
  "title": "Against dogs' mange",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104v_a1/",
  "excerpt": "104v ## Against dogs’ mange For normal—sized dogs, take half an ℥ of stavesacre, and one ℥ for big dogs,..."
}
,{
  "title": "For casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104v_a2/",
  "excerpt": "104v ## For casting If you’ve got a big piece which does not allow an easy stripping of casting, mold..."
}
,{
  "title": "Goldsmith",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104v_a3/",
  "excerpt": "104v ## Goldsmith Know what it is to work on spangled garments, it is small pieces of pure silver and..."
}
,{
  "title": "Spinet playing by itself",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104v_a4/",
  "excerpt": "104v Annotations: Spinet playing by itself, fol. 104v (Hiebert) ## Spinet playing by itself Make an axle surrounded with wheels..."
}
,{
  "title": "Turtles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_1/",
  "excerpt": "105r ## Turtles Males have shells that turn down at the end near their tails, and their underbelly shells have..."
}
,{
  "title": "Drying colors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_2/",
  "excerpt": "     105r      \n## Drying colors\n\nSoot black and others will not dry in oil unless you add verdigris.\n\n"
}
,{
  "title": "Painting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_3/",
  "excerpt": "105r ## Painting Colors that have been applied twice are more gritty by themselves, unless they have a binding agent...."
}
,{
  "title": "Gardening",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_4/",
  "excerpt": "105r ## Gardening To graft, it is necessary to take the new growth that was produced within the year by..."
}
,{
  "title": "Gardening",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_1/",
  "excerpt": "105v ## Gardening It’s not very strange to cultivate in your garden some arnols, because when your soup or broth..."
}
,{
  "title": "Fountain",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_2/",
  "excerpt": "105v ## Fountain Recooked plaster runs when mixed with water, which you will see in the next recipe about wet..."
}
,{
  "title": "Catching nightingales",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_3/",
  "excerpt": "105v ## Catching nightingales See the 15th folio after this. In order to catch them, you must observe them in..."
}
,{
  "title": "Nightingale",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_4/",
  "excerpt": "105v ## Nightingale The iron wire used for its cage must be the thickest possible, so that should it try..."
}
,{
  "title": "Nightingale",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_5/",
  "excerpt": "105v ## Nightingale It will need a cage made in the shape of a barn, like the ones for larks,..."
}
,{
  "title": "To cast",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p106r_a1/",
  "excerpt": "106r ## To cast Asphalt from Germany is the most excellent sand you can find for molding in a box..."
}
,{
  "title": "Making gold run for casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p106r_a2/",
  "excerpt": "106r ## Making gold run for casting Because gold cools down very quickly, you have to give it a mixture..."
}
,{
  "title": "Spalt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p108r_a1/",
  "excerpt": "108r ## Spalt Spalt is white like cooked plaster and one can find it in mounds and stones made in..."
}
,{
  "title": ["Stone alum"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p108v_a1/",
  "excerpt": "108v ## [Stone alum] Stone alum must be reheated in a pot covered with a tile over a good charcoal..."
}
,{
  "title": ["Clay"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p108v_a2/",
  "excerpt": "108v ## [Clay] Clay used to surround molds, should be very fat and malleable, and should not be used for..."
}
,{
  "title": "Working in rough with wax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109r_1/",
  "excerpt": "109r ## Working in rough with wax When the wax is too hard, one mixes in some turpentine or a..."
}
,{
  "title": "Wax for molding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109r_2/",
  "excerpt": "109r ## Wax for molding Since the wax is molten, they have some sulphur in a spoon or crucible and..."
}
,{
  "title": "Molding wax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109r_3/",
  "excerpt": "109r ## Molding wax So that your mold takes hold without repelling any surface on a form or figure in..."
}
,{
  "title": "Forge bellows",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109r_4/",
  "excerpt": "109r ## Forge bellows It is better that at the end with the air chamber the bellows be set in..."
}
,{
  "title": "Molding snakes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109r_5/",
  "excerpt": "109r ## Molding snakes When you get them for molding, if it is possible, do not remove their teeth if..."
}
,{
  "title": "Toad",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109v_1/",
  "excerpt": "109v &lt;span class=\"activity\"&gt;&lt;/span&gt; &lt;span class=\"activity\"&gt;&lt;/span&gt; ## &lt;span class=\"animal\"&gt;Toad&lt;/span&gt; If by chance you want to mold this ugly animal and if..."
}
,{
  "title": "Killing snakes for molding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109v_2/",
  "excerpt": "109v ## Killing snakes for molding Some put a drop of aqua fortis into their mouths, which stupefies them, so..."
}
,{
  "title": "A cast of lead or tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p110v_3/",
  "excerpt": "110v ## A cast of lead or tin Because you want to cast tin very thinly, if your medal, plant..."
}
,{
  "title": "Second Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p114r_1/",
  "excerpt": "114r Annotations: Bread as Mediating Material: Tactile Memory and Touch in Ms. Fr. 640, fols. 29r, 114v, 129v, 130r (Le..."
}
,{
  "title": "Drying animals in an oven",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_1/",
  "excerpt": "130r ## Drying animals in an oven One can skin small cats and remove their eyes and all their guts...."
}
,{
  "title": "Reddening lively crayfish which will look as if they were boiled",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_2/",
  "excerpt": "130r ## Reddening lively crayfish which will look as if they were boiled Rub your crayfish with good vinegar diluted..."
}
,{
  "title": "Molding a single spider",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_3/",
  "excerpt": "130r ## Molding a single spider One has to display it on the jacket of clay as it is said..."
}
,{
  "title": "Molding a single vine leaf",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_4/",
  "excerpt": "130r ” ## Molding a single vine leaf Attach it with brass wire points on the jacket of clay and..."
}
,{
  "title": "Molding a crab",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130v_1/",
  "excerpt": "130v ## Molding a crab It is a secret and a masterpiece to mold [a crab] well because it is..."
}
,{
  "title": "Stag beetle",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130v_2/",
  "excerpt": "130v ## Stag beetle Like a crab, it [a stag beetle] is also difficult to burn, therefore do [stag beetles]..."
}
,{
  "title": "For molding thinly",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130v_3/",
  "excerpt": "130v ## For molding thinly After you have molded the first mold as the core, leave it to dry well..."
}
,{
  "title": "Herbs difficult to burn in the mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131r_1/",
  "excerpt": "131r ## Herbs difficult to burn in the mold Mold them in two or three castings; being annealed, your mold..."
}
,{
  "title": "molded letter paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131r_2/",
  "excerpt": "131r Annotations: Molded Letter Paper ## molded letter paper Write with some ink well thickened with gum or any other..."
}
,{
  "title": "Adorning beds, mirrors and similar things",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131r_3/",
  "excerpt": "131r ## Adorning beds, mirrors and similar things Model any drawing in half relief on a flat slate in order..."
}
,{
  "title": "Training a dog",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131r_4/",
  "excerpt": "131r ## Training a dog You need to keep your dog attached; when it does what you command, to win..."
}
,{
  "title": "Molded wax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131r_5/",
  "excerpt": "131r ## Molded wax Wax representations made from white lead and cerussite are not made to be burned and melted..."
}
,{
  "title": "When lead or tin casts fill with bubbles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131v_1/",
  "excerpt": "131v ## When lead or tin casts fill with bubbles If your casted work became porous, it can be repaired..."
}
,{
  "title": "Mold made from two casts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p132r_1/",
  "excerpt": "132r ## Mold made from two casts It opens once anealed. To clean it after, fix the clamps again, lute..."
}
,{
  "title": "How to anneal the molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p132r_2/",
  "excerpt": "132r ## How to anneal the molds Light your charcoals from the forge, then place them in a line in..."
}
,{
  "title": "Common quarry sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p132v_1/",
  "excerpt": "132v ## Common quarry sand In a frame, If you cast it hot, sand will bubble; thus you have to..."
}
,{
  "title": "Crocum ferry",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p132v_2/",
  "excerpt": "132v ## Crocum ferry After I processed it with vinegar and reddened under heat, I had it ground very finely..."
}
,{
  "title": "Gilding animals casted with silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p132v_3/",
  "excerpt": "132v ## Gilding animals casted with silver You can gild them with an amalgam, the lines won’t be damaged if..."
}
,{
  "title": "Hard wax to imprint seals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133r_1/",
  "excerpt": "133r ## Hard wax to imprint seals One makes these [seals] out of white wax which is harder than the..."
}
,{
  "title": "Casting the feet of small lizards in gold and silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133r_2/",
  "excerpt": "133r ## Casting the feet of small lizards in gold and silver Because the feet of these [lizards] that are..."
}
,{
  "title": "Marks [made by] the [pin] points of iron thread which one finds on the head of an animal",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133r_3/",
  "excerpt": "133r ## Marks [made by] the [pin] points of iron thread which one finds on the head of an animal..."
}
,{
  "title": "Clamps and the broken mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133r_4/",
  "excerpt": "133r ## Clamps and the broken mold When you have done the first firing and taken off the clamps and..."
}
,{
  "title": "Porosity and little holes which are in the mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133v_1/",
  "excerpt": "133v ## Porosity and little holes which are in the mold It oftens happens when you cast two or three..."
}
,{
  "title": "Thing that cannot be released from the mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133v_2/",
  "excerpt": "133v ## Thing that cannot be released from the mold You must cut it inside the mold in order to..."
}
,{
  "title": "Various animals entwined",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133v_3/",
  "excerpt": "133v ## Various animals entwined You can entwine a snake with a lizard, each one biting the other, or a..."
}
,{
  "title": "To repair a pierced mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p134r_1/",
  "excerpt": "134r ## To repair a pierced mold pairing If the molded animal pulls of in certain places, moves from the..."
}
,{
  "title": "Sand made of crocum [ferri]",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p134r_2/",
  "excerpt": "134r ## Sand made of crocum [ferri] You can use the mixture made of crocum ferri to cast silver or..."
}
,{
  "title": "To make gold fluid",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p134v_1/",
  "excerpt": "134v ## To make gold fluid Put as much verdigris as sal ammoniac, as much borax as saltpetre. But don’t..."
}
,{
  "title": "Casting big works with gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p134v_2/",
  "excerpt": "134v ## Casting big works with gold Not only should one clamp the mold very well, but also strengthen it..."
}
,{
  "title": "Secret for soldering small works made of gold and silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p134v_3/",
  "excerpt": "Secret for soldering small works made of gold and silver If some little pieces of legs cannot be easily removed..."
}
,{
  "title": "Colors for gold, or sauce",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p135r_1/",
  "excerpt": "135r ” ## Colors for gold, or sauce Take as much verdigris as sal ammoniac, &amp; saltpetre the size of..."
}
,{
  "title": "Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p135r_2/",
  "excerpt": "135r ” ## Casting It must be lengthened out with respect to the thing you have molded. And at a..."
}
,{
  "title": "Vine leaf and small frog",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p135r_3/",
  "excerpt": "135r ” ## Vine leaf and small frog To mold, take vine leaves as they are blooming, just as with..."
}
,{
  "title": "Casting gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p135v_a1/",
  "excerpt": "135v ” ## Casting gold Take a crusol that can contain a certain amount, as you wish to place roughly..."
}
,{
  "title": "latten casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p136v_1/",
  "excerpt": "136v ## latten casting Take latten from skillet pans, used to make baby’s cereal, which is doulx and apt for..."
}
,{
  "title": "Casting red copper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p137r_1/",
  "excerpt": "137r ## Casting red copper Pure cauldron red copper, or copper of any other small works, is good to cast...."
}
,{
  "title": "Huile tingente to make metal runny",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p137r_2/",
  "excerpt": "137r ## Huile tingente to make metal runny Take some mercury, some real sublimate of venice, and not sublimate of..."
}
,{
  "title": "Clamps",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p137r_3/",
  "excerpt": "137r ## Clamps To make clamps use flat tongs made from wire, which is reheated and bent, and hammered on..."
}
,{
  "title": "Wetting sand to mold flat medals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p137v_a1/",
  "excerpt": "137v ## Wetting sand to mold flat medals Flat medals, made of wax or metal, must be oiled very lightly..."
}
,{
  "title": "Talcum mixed with the molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p138v_1/",
  "excerpt": "138v ## Talcum mixed with the molds I used the one from which I had extracted the oil. I crushed..."
}
,{
  "title": "Gold casted very thinly",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p138v_2/",
  "excerpt": "138v ## Gold casted very thinly When goldsmiths have to solder something quickly but don’t have enough time to forge..."
}
,{
  "title": "Imitation diamonds set into the work",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p138v_3/",
  "excerpt": "138v ## Imitation diamonds set into the work Spread a fine layer of imprinting black wax on the inside of..."
}
,{
  "title": "Casting with lead and tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p139r_1/",
  "excerpt": "139r ## Casting with lead and tin The way I have done it for lizards and serpents is with two..."
}
,{
  "title": "Casting wax to mold an animal that one has not got",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p139v_1/",
  "excerpt": "139v Annotations: Black Sulfured Wax, fol. 139v (Kang and LoresChavez) ## Casting wax to mold an animal that one has..."
}
,{
  "title": "To cast in sulfur",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p140v_1/",
  "excerpt": "140v Annotations: Sulfur and Additives ## To cast in sulfur To cast neatly in sulfur, arrange the pith of bread..."
}
,{
  "title": "Molding and shrinking a large shape",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p140v_2/",
  "excerpt": "140v ## Molding and shrinking a large shape Mold it with the pith of bread just out of the oven,..."
}
,{
  "title": "Casting a crayfish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p141r_1/",
  "excerpt": "141r ## Casting a crayfish The crayfish is one of the most fantastical to cast, but also provides an example..."
}
,{
  "title": "Molding grasshoppers and things too thin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_1/",
  "excerpt": "142v Annotations: Too Thin Things ## Molding grasshoppers and things too thin If you have to mold a piece of..."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_2/",
  "excerpt": "142v ## Molds Make some notches in them the molds that enter more into the inside of the mold than..."
}
,{
  "title": "Lute for luting your molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_3/",
  "excerpt": "142v ## Lute for luting your molds I have not found a lute that is made more quickly than this..."
}
,{
  "title": "Moulding turtles and tortoises",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143r_1/",
  "excerpt": "143r ## Moulding turtles and tortoises The turtle the one that lives in water is more beautiful to mold because..."
}
,{
  "title": "Moulders from Foix",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143r_2/",
  "excerpt": "p143r ## Moulders from Foix Those who mould from across the way make their sand from crocum ferri and calcinated..."
}
,{
  "title": "Toad",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143r_3/",
  "excerpt": "143r ## Toad Having been molded, you can take it out it without burning it, because it releases easilyfrom the..."
}
,{
  "title": "Openwork carcanets",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143v_1/",
  "excerpt": "143v ## Openwork carcanets You can mold them “en noyau” like crayfish, first with one side being made higher with..."
}
,{
  "title": "Iron filings",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143v_2/",
  "excerpt": "143v ## Iron filings Because usually filings are mixed with impurities, it is good to heat them over fire to..."
}
,{
  "title": "Carnations",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143v_3/",
  "excerpt": "143v ## Carnations Because those that you usually cast are generally quite big, they are heavy. And so for these,..."
}
,{
  "title": "Ashes in the moulds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p157v_1/",
  "excerpt": "157v ## Ashes in the moulds You must let the mold cool down rather than blow into it to try..."
}
,{
  "title": "Po{ur} f{air}e h{…} vin f{…}rs [?]",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p157v_3/",
  "excerpt": "157v ## Po{ur} f{air}e h{…} vin f{…}rs [?] Prenez un chausson du pied droid t qui ait este porte et..."
}
,{
  "title": "Mercury in molds, for cleaning",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158r_a1/",
  "excerpt": "158r ## Mercury in molds, for cleaning Take heed that your mold be quite cold when you blow in order..."
}
,{
  "title": "Colors for green leafs",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_1/",
  "excerpt": "158v Annotations: Color for Green ## Colors for green leafs One usually paints them with oil colors, because distemper colors..."
}
,{
  "title": "Large molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_2/",
  "excerpt": "158v ## Large molds Because of the heaviness of the metal, it is necessary to put them in a press..."
}
,{
  "title": "Candle smoke",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_3/",
  "excerpt": "158v ## Candle smoke It allows the piece to be taken out more easily, and even if it is slightly..."
}
,{
  "title": "casts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_4/",
  "excerpt": "158v ## casts If the medal is very thick, do not pour a cast that is as thick; the cast..."
}
,{
  "title": "Portraits in Wax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a1/",
  "excerpt": "159r ## Portraits in Wax If you do not mix your wax with any color dye, and if you paint..."
}
,{
  "title": "Chasing tool",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a2/",
  "excerpt": "159r ## Chasing tool If a chasing tool has passed through any part of the representation, it is necessary to..."
}
,{
  "title": "Fish glue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a3/",
  "excerpt": "159r ## Fish glue Beat it very finely and thinly on a well—cleaned anvil, then dilute your glue with spirits,..."
}
,{
  "title": "Tin and lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a4/",
  "excerpt": "159r ## Tin and lead They must be beaten out very finely and tin will not get brittle or break,..."
}
,{
  "title": "Cleaning files",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a1/",
  "excerpt": "159v ## Cleaning files Sometimes they get fat from the grease of lead, which is naturally fat, or also filings..."
}
,{
  "title": "Carnation",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a2/",
  "excerpt": "159v ## Carnation Mold a carnation like a rose, marigold, and all other flowers as discussed, that is to say..."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a3/",
  "excerpt": "159v ## Molds Try to make one side as thick as the other, that way the two parts will be..."
}
,{
  "title": "Unmixed plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a4/",
  "excerpt": "159v ## Unmixed plaster If you reheat plaster as a stone it would crumble into water, but if you grind..."
}
,{
  "title": "Presses for large moulds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160r_1/",
  "excerpt": "160r ## Presses for large moulds figure identifier=”fig_p160r_1” url=”https://drive.google.com/open?id=0B9—oNrvWdlO5ZDNJT25PWjlUbGM”/&gt; It is made of two sheets of iron, fasten with four..."
}
,{
  "title": "Moulding a foot or a hand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160v_a1/",
  "excerpt": "160v ## Moulding a foot or a hand Mix resin to the wax. Once well blended, soften the mixture in..."
}
,{
  "title": "Fine work made of gold or silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160v_a2/",
  "excerpt": "p160v ## Fine work made of gold or silver You can mold flies by hand, without casting; the wings and..."
}
,{
  "title": "Catching crayfishes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160v_a3/",
  "excerpt": "p160v ## Catching crayfishes On the end of a stick, attach pieces of liver or lung, from beef or mutton...."
}
,{
  "title": "Catching passerines",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160v_a4/",
  "excerpt": "p160v ## Catching passerines If they sleep in the farmyard, like they commonly do, close to the house, let the..."
}
,{
  "title": "Catching birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160v_a5/",
  "excerpt": "160v ## Catching birds During winter, when birds have molted, skin them and fill them with cloth and stuffing, or..."
}
,{
  "title": "Preparing sand for box molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p161r_1/",
  "excerpt": "161r ## Preparing sand for box molds at left top  margin of folio 161r After your sand [which is made] of..."
}
,{
  "title": "Crocum ferri",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p161v_a1/",
  "excerpt": "161v ## Crocum ferri It can be made quickly if you put very filings that are very neat and have..."
}
,{
  "title": "Aes ustum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162r_a2/",
  "excerpt": "p162r ## Aes ustum When it [Aes ustum] is finely ground it moulds very cleanly. It has a certain fatness..."
}
,{
  "title": "Rotten wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162r_a3/",
  "excerpt": "162r ## Rotten wood Wood that is white, being light as a sponge, if burnt in a close fire, may..."
}
,{
  "title": "Peach trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162v_1/",
  "excerpt": "162v ## Peach trees Because they cast and blossom from the outset, and so are caught by the frost. We..."
}
,{
  "title": "Olive trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162v_2/",
  "excerpt": "162v ## Olive trees In Spain they expose their roots during winter and in spring they earth they up again...."
}
,{
  "title": "Foot of bittern",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162v_3/",
  "excerpt": "162v ## Foot of bittern To mold it it is better to extend its fingers and nails on something flat..."
}
,{
  "title": "Molds of things which have not been pelted",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162v_4/",
  "excerpt": "162v_4 ## Molds of things which have not been pelted Animals who have not been pelted can only be molded..."
}
,{
  "title": "Perfume-makers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p163r_1/",
  "excerpt": "163r ## Perfume—makers They readily make their perfumes with half amber and half musk, and a little civet, because the..."
}
,{
  "title": "Spirits",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p163r_2/",
  "excerpt": "163r ## Spirits Spirits are excellent for making molds clean, in such a way that where you do not apply..."
}
,{
  "title": "Crayfish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p163v_1/",
  "excerpt": "163v ## Crayfish The hairy little horns that the crayfish has under its snout tend to come out lumpy and..."
}
,{
  "title": "Crocum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p163v_2/",
  "excerpt": "163v ## Crocum That which has become rusty by itself, having been doused with water, salt, and either vinegar or..."
}
,{
  "title": "Repairing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p163v_3/",
  "excerpt": "163v ## Repairing It is much better to only lightly repair your work with a burin called an “onglet” or..."
}
,{
  "title": "Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164r_1/",
  "excerpt": "p164r ## Casting When you make a cast of delicate animals, like snakes, start by casting the belly side, or..."
}
,{
  "title": "Repairing burrs",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164r_2/",
  "excerpt": "164r ## Repairing burrs Remove burrs very carefully with the point of a chaple or a burin, then scrape the..."
}
,{
  "title": "Leaded silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164r_3/",
  "excerpt": "164r ## Leaded silver A lot of silver is wasted because of the lead which is mixed with it, as..."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164v_1/",
  "excerpt": "164v ## Molds For molds wherein something must be burned (away), and do not open before being reheated: do not..."
}
,{
  "title": "Sable",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164v_2/",
  "excerpt": "164v ## Sable If you don’t add enough alum de plume or crocus your mold will easily crack when heated...."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164v_3/",
  "excerpt": "164v ## Molds When you cast lead, your molds must be very dry, even if the molds are large. The..."
}
,{
  "title": "To repair",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_1/",
  "excerpt": "165r ## To repair If in your cast, there appear some little hole, fix it with black or gray filling..."
}
,{
  "title": "Lacquer",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_2/",
  "excerpt": "165r ## Lacquer If, having been ground, you let it dry without keeping it in water, it will dry out..."
}
,{
  "title": "Stretching a canvas portrait",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_3/",
  "excerpt": "165r ## Stretching a canvas portrait If it is crumpled or folded from when it was rolled up, moisten the..."
}
,{
  "title": "Plaster for molding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_4/",
  "excerpt": "165r ## Plaster for molding at left middle  margin of folio 165r When it is long to set and dry, it..."
}
,{
  "title": "Dragon's blood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_5/",
  "excerpt": "165r ## Dragon’s blood You can imitate dragon’s blood with lacquer, which surpasses it in beauty, if [when] diluted in..."
}
,{
  "title": "Repairing snakes and lizards",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_6/",
  "excerpt": "165r ## Repairing snakes and lizards You could make some marks according to the form of their scales, making some..."
}
,{
  "title": "Positioning animals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_1/",
  "excerpt": "165v ## Positioning animals Not only with iron pins, but also with melted wax, are animals secured to the plate..."
}
,{
  "title": "Keeping animals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_2/",
  "excerpt": "165v ## Keeping animals Having molded them once, if you want to keep them for molding again, put them back..."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_3/",
  "excerpt": "165v ## Molds After molding them do not keep them for long, but use them as soon as you can,..."
}
,{
  "title": "Lute",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_4/",
  "excerpt": "165v ## Lute When reheating, you might as well use common lute, But when you want to cast, strip it..."
}
,{
  "title": "Silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_a5/",
  "excerpt": "165v ## Silver When it quivers after melting, that is a sign that it is very hot. And since it..."
}
,{
  "title": "Fly wings",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_a6/",
  "excerpt": "165v ## Fly wings So that they come out best, place wax sprues from the gate up to the tips..."
}
,{
  "title": "Attaching a fly wing or something similar",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_a7/",
  "excerpt": "165v ## Attaching a fly wing or something similar They can be attached with fish glue mixed with spirits over..."
}
,{
  "title": ["art and learning"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166v_1/",
  "excerpt": "166v ## [art and learning] In addition to Greek examples, there is a psalm of David mentioned by Saint Athanasius..."
}
,{
  "title": "Keeping chestnuts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166v_2/",
  "excerpt": "166v ## Keeping chestnuts They must be left in their burs until you want to eat them. And in their..."
}
,{
  "title": "Scented candle from Le Mans",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166v_3/",
  "excerpt": "166v ## Scented candle from Le Mans They melt in withwax and candles rosin that is called in France [rosin]..."
}
,{
  "title": "Softening gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166v_4/",
  "excerpt": "166v ## Softening gold Dissolve some caput mortuum in distilled vinegar. Filter and congeal in salt and cement the ☉..."
}
,{
  "title": "Improving the color of gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166v_5/",
  "excerpt": "166v ## Improving the color of gold Put some aqua fortis made with vitriol on hot embers. Cover the bottle,..."
}
,{
  "title": "Mortars",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p167r_1/",
  "excerpt": "167r ## Mortars Mortars are made of the best alloy of “métal” and the finest possible rosette so that they..."
}
,{
  "title": ["List of making procedures"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p169r/",
  "excerpt": "169r ## [List of making procedures] Molding a tortoise Furry animals Birds Leaf of vine — put Of the strawberry..."
}
,{
  "title": "Reducing a round form into a hollow one",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p169v_2/",
  "excerpt": "169v ## Reducing a round form into a hollow one You must firstly mold it with plaster as has been..."
}
,{
  "title": "Common medals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_1/",
  "excerpt": "170r ## Common medals Relief awls are made of untempered steel, and then it is tempered. With it we beat..."
}
,{
  "title": "Iron clamps",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_3/",
  "excerpt": "170r ## Iron clamps When you put them for the second time, make sure that the mold does not wobble...."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_4/",
  "excerpt": "170r ## Molds Those with noyau, when reheated, should be placed on half lit charcoal, without being in contact with..."
}
,{
  "title": "Thick tin pieces",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_5/",
  "excerpt": "170r ## Thick tin pieces They should not be casted with lead or red tin, like thin and fragile things...."
}
,{
  "title": "How to clean closed molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_6/",
  "excerpt": "170r ## How to clean closed molds You have to leave them cool down rather than blow inside to clean..."
}
,{
  "title": ["dues and payments of the heirs of late Sr. Ouvryer"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170v_1/",
  "excerpt": "170v ## [dues and payments of the heirs of late Sr. Ouvryer] In the year fifteen hundred seventy—eight, the second..."
}
,{
  "title": "Against plague",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170v_2/",
  "excerpt": "170v ## Against plague Against pestilential fever or poison or plague, take an ecu’s weight of your opiate soaked in..."
}
,{
  "title": "To preserve oneself",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170v_3/",
  "excerpt": "170v ## To preserve oneself Acetum paratum ex ruta baccis juniperi simul tusis Eoaceto extinguantur lateres igniti. Et vapor excipiatur..."
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
    var searchitem = '<div class="result"><a href="/GR8975-edition'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a><p>'+store[ref].excerpt+'</p></div>';
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
