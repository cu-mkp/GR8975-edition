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



index.addDoc({
  title: ["List of artisans with their locations"],
  author: null,
  layout: "narrative",
  content: "- - - - - 001r - - - - - \n\n[List of artisans with their locations]\n\n\n  \n    Nicolas Coste, in the Rue de la Heaumerie, at the sign of St Claude/Mirrors\n  \n  \n    Master Jehan Cousin, who resides in the Faubourg St Germain, knows about the master\n  \n  \n    Master Jehan Garnier, in the Rue des Escrivains by St Jacques de la Boucherie, currier. Try woad flowers\n  \n\n\n",
  activities: [],
  purposes: [],
  id: 0
});
index.addDoc({
  title: ["Diverse thoughts"],
  author: null,
  layout: "narrative",
  content: "- - - - - 001r - - - - - \n\n[Diverse thoughts]\n\nThe harvester that leaves some ears is not blamed.\n\nSacra Eleusinae deae propalare nefas.\n\nTrumpets, see the book of funerals\n\n",
  activities: [],
  purposes: [],
  id: 1
});
index.addDoc({
  title: ["List of authors"],
  author: null,
  layout: "narrative",
  content: "- - - - - 001r - - - - - \n\n[List of authors]\n\n\n  \n    Wolfangus Lazius\n  \n  \n    Petrus Appianus mathematicus Ingolstadiensis, Comment. urb. rom.\n  \n  \n    Hieronimo Ruscelli\n  \n  \n    Hermolaus Barbarus\n  \n  \n    Angelius Bargaeus, De aucupio et venatione\n  \n  \n    Nicolaus Damascenus\n  \n  \n    Caes{ariensis}, De rebus Persarum\n  \n  \n    Isidorus\n  \n  \n    Orosius\n  \n  \n    Eupolemus, historicus gentilis qui de rebus Davidis &amp; Salomonis scripsit\n  \n  \n    Cathalogue des villes\n  \n  \n    Calendrier des bergiers\n  \n  \n    Grammaire italiene\n  \n  \n    Arithmetique de Savonne\n  \n  \n    Instruction pour le faict des finances\n  \n  \n    Questions aenigmatiques\n  \n  \n    Des praeceptes d’agriculture\n  \n  \n    + Le secret des finances à Lyon\n  \n  \n    Synesius\n  \n  \n    Olaus Magnus\n  \n  \n    + Master Bernard Palissy, inventor of rustic figurines to the king and the queen mother\n  \n  \n    Aquatilium animalium historiae, Hypolito Salviano Typhernate authore, Romae 1554\n  \n  \n    Les Annales de Normandie\n  \n  \n    Alexander Aphrodisaeus\n  \n  \n    Polydorus Vergilius\n  \n  \n    Appianus\n  \n  \n    Athenaeus\n  \n  \n    Pausanias\n  \n  \n    Statius Thebaidos\n  \n  \n    Servius, In Aeneidem\n  \n  \n    Macrobius\n  \n  \n    Aulus Gellius\n  \n  \n    Alexander ab Alexandria\n  \n  \n    Festus\n  \n  \n    Nonius\n  \n  \n    Magius, Miscellanea\n  \n  \n    Pollux, Onomasticon\n  \n  \n    Hyginus\n  \n  \n    Berosus\n  \n  \n    Suetonius\n  \n  \n    Valerius Maximus\n  \n  \n    Cornelius Tacitus\n  \n  \n    Xenophon\n  \n  \n    Seneca\n  \n  \n    Dionisius Halicarnassensis\n  \n  \n    Sabellicus\n  \n  \n    cum permultisaliis Julius Capitollinus\n  \n  \n    Budaeus\n  \n  \n    Spartianus\n  \n  \n    Blondus\n  \n  \n    Volaterranus\n  \n  \n    Herodotus\n  \n  \n    Paulus Manutius\n  \n  \n    Strabo\n  \n  \n    Julius Firmicus\n  \n  \n    Quintus Curtius\n  \n  \n    Dio\n  \n  \n    Cornelius Nepos\n  \n  \n    Flavius Vopiscus\n  \n\n\n",
  activities: [],
  purposes: [],
  id: 2
});
index.addDoc({
  title: ["Pen trial"],
  author: null,
  layout: "narrative",
  content: "- - - - - 001r - - - - - \n\n[Pen trial]\n\nMonsieur\n",
  activities: [],
  purposes: [],
  id: 3
});
index.addDoc({
  title: "For easing the belly",
  author: null,
  layout: "narrative",
  content: "- - - - - 001v - - - - - \n\nFor easing the belly\n\n\n Prunes of Saint Antonin, and if you like you can put leaves of malva and viola, adding some sugar and, if you like, some cinnamon for the stomach.\n\nOr in a chicken broth, add some marshmallow root. When fresh it is more mollifying.\n\nStirring together cirop de guindoles doulces with water and taking some of this in the morning eases the belly.\n\n",
  activities: ["making"],
  purposes: ["medicine"],
  id: 4
});
index.addDoc({
  title: "Books to recover",
  author: null,
  layout: "narrative",
  content: "- - - - - 002r - - - - - \n\nBooks to recover\n\n\n  \n    The chronicles of Sigebert\n  \n  \n    Rufinus\n  \n  \n    Irenaeus, In [Haereses]\n  \n  \n    Paulus Aemilius\n  \n  \n    Paulus Jovius\n  \n  \n    Polydorus\n  \n  \n    Bergomensis\n  \n  \n    Philippe de Commines\n  \n\n\n",
  activities: [],
  purposes: [],
  id: 5
});
index.addDoc({
  title: "Against pain",
  author: null,
  layout: "narrative",
  content: "- - - - - p002r - - - - - \n\nAgainst pain\n\n\n Turpentine oil, oil of Jacob and salt from cabbage ashes.\n\n",
  activities: ["making"],
  purposes: ["medicine"],
  id: 6
});
index.addDoc({
  title: ["Book title"],
  author: null,
  layout: "narrative",
  content: "- - - - - 002v - - - - - \n\n[Book title]\n\nPractica, cioè nova inventione di contegiare, stampata in Brescia per Vincenzo Sabio\n\n",
  activities: [],
  purposes: [],
  id: 7
});
index.addDoc({
  title: "Emeralds of Brissac",
  author: null,
  layout: "narrative",
  content: "- - - - - 002v - - - - - \nAnnotations:\nImitation Gemstones, Ruby Emerald, fol. 100r-v (Kremnitzer, Shah)\n \n\nEmeralds of Brissac\n\n\nI took minium, 26 ℥, crystal […] and ground on marble 12 ℥, verdigris 3 |ʒ|. Incorporated all together. Put in a crucible covered by another well luted crucible with a hole on top. Melting: 7 hours without blowing. The mass came out a fine green.\n\nI took minium, 12 ℥, crystal, 6 ℥, verdigris, 2 grains. Melting: moderate, vi hours, baked 24 hours. The mass came out green, yellow and red.\n\n",
  activities: ["imitation gem"],
  purposes: ["making"],
  id: 8
});
index.addDoc({
  title: "Sapphire",
  author: null,
  layout: "narrative",
  content: "- - - - - 002v - - - - - \nAnnotations:\nImitation Gemstones, Ruby Emerald, fol. 100r-v (Kremnitzer, Shah)\n \n\nSapphire\n\n  Pebbles or crystal, 8 ℥; minium, 16 ℥; smith’s salt, 4 ℥; sparkling coryal, 4 grains. Melting: 6 hours.\n\n",
  activities: ["imitation gem"],
  purposes: ["Making"],
  id: 9
});
index.addDoc({
  title: "Imitation coral",
  author: null,
  layout: "narrative",
  content: "- - - - - 003r - - - - - \nAnnotations:\nImitation Coral, fol. 3r (Chessa)\n \n\nImitation coral\n\n  + One must first make the branches from wood or take a fantastical thorn branch, then melt a pound of the best possible clear pine resin and add one ounce of finely ground vermilion together with walnut oil, and if you add a little Venice lake the color will be all the more vivid, and stir all together into the resin, molten over a charcoal fire, not over an open flame, lest it catch fire. Then dip in your branches with a swirling motion. And should there remain any filaments, turn the branch over the heat of the charcoal.\n\n\n  at left top margin of folio 003r\n\n  Colophony is nothing other than resin that has been cooked again. To do it well, you take a leaded pot and melt the resin, boiling it over the brazier for a good hour until it appears not thick but clear and liquid like water and it easily runs as a thread off the end of a stick, which you use to crush and test it. Then pour it through a coarse canvas or tammy cloth so that it falls into the strongest vinegar you can find, because the vinegar makes it strong and makes it less brittle. Repeat this two or three times and it will be fine and well purified. To imitate your coral, you can mix a fourth part of mastic with your purified resin to make it more solid and finer, and if you should use just one drop of mastic, it would be all the better, but it would take too long.\n\n\n\n  at top middle margin of folio 003r\n\n  Coral made of red enamel withstands filing and polishing.\n\n\n\n  at right top margin of folio 003r\n\n  It is made like cement, which is stronger when mixed with crushed glass rather than with brick. In the same way, together with the vermilion, one mixes in opaque red enamel, finely ground. It is the same way with all enamel colors.\n\n\n\n  at left middle margin of folio 003r\n\n  Sulfur and vermilion have the same effect.\n\n\n",
  activities: ["imitation coral"],
  purposes: ["making","observation"],
  id: 10
});
index.addDoc({
  title: "Varnish for paintings",
  author: null,
  layout: "narrative",
  content: "- - - - - 003r - - - - - \n\nVarnish for paintings\n\n\n Take a pound of Venice turpentine and heat it in a pot until it simmers, put in half a pound of the whitest turpentine oil you can find and stir all together well on a charcoal fire and take it off immediately after, and it is done. But if you find it too thick, add more oil, whereas if it is too clear, you can thicken it by putting a little turpentine. And so you will give it whatever consistency you want. It could be made without fire, but it is more desiccative when heated. It is appropriate for panel paintings and other painted things, without distorting the colors or yellowing, and dries both in the shade and under the sun, overnight, and during the summer as well as in the winter. It is usually sold 15 sols a pound.\n\n\n  at left bottom margin of folio 003r\n\n  You need a little more turpentine than turpentine oil to thicken the varnish, which you need to apply with your finger in order to spread it thinner and less thick because when it is thick, it turns yellow and gathers [together]. Varnish is not used to make paintings shine, because it just takes the light out of them.\n\n\n\n  at middle bottom margin of folio 003r\n\n  But it is used to enhance colors which have soaked in and to keep them from dust. Mastic varnishes does not resist rain, whereas oil [varnish] and rosin varnish do.\n\n\n",
  activities: ["varnish for paintings"],
  purposes: ["making"],
  id: 11
});
index.addDoc({
  title: "Thick varnish for floorboards",
  author: null,
  layout: "narrative",
  content: "- - - - - 003r - - - - - \n\nThick varnish for floorboards\n\n\nThere is a type of varnish that takes a long time to dry and is still damp up to two months after it has been applied to the floorboards. But the following varnish does not remain damp like previous ones, which were made of linseed oil from Aux boiled with garlic to extinguish them and rid them of fat, and also with wheat. And this old one yellowed over time and made the blue color of paintings greenish. This one is made like former varnishes except that one puts in common thick turpentine.\n\n",
  activities: ["varnish for floorboards"],
  purposes: ["making"],
  id: 12
});
index.addDoc({
  title: "To varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 003v - - - - - \n\nTo varnish\n\n  Turpentine varnish does not need any glue since it is fat and viscous and does not penetrate the wood as spike lavender varnish and sandarac varnish would. Spike lavender varnish does not require any glue on iron and similar materials which cannot be permeated, but on wood and on colors which do not contain gum or colle de détrempe, it is necessary to lay one coat of the said glue colle de retailles and allow to dry, then varnish.\n\n",
  activities: ["varnish"],
  purposes: ["observation"],
  id: 13
});
index.addDoc({
  title: "Lavender spike oil varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 004r - - - - - \n\nLavender spike oil varnish\n\n  One must heat lavender spike oil and, as it begins to simmer, put in powdered sandarac gum so that it soon melts. And stir continuously over a charcoal fire until the sandarac is well melted, which you will know by taking a little of the said varnish on a plate and, if it is fat enough when you handle it with a finger, it is ready. And for one pound of lavender spike oil, you should put five ounces of ground sandarac.  Some only put in four ounces but this is not as good, nor as fat. The former dries promptly. To avoid the trouble of polishing their ebony, framemakers varnish it with this. So do guitarmakers. This varnish is not as fitting for paintings as fine turpentine varnish, though it is good for the paintings’ moldings. When linseed varnish was in use, one would not commonly varnish the landscape of a painting because it would turn the landscape yellow. But with turpentine varnish one varnishes everywhere. Instead of sandarac, you can add to it pulverized mastic drop by drop or otherwise, and it will dry more quickly.  If you want to varnish plaster or a wall, first put on your colle de retaille, very hot, because if cold it would not penetrate the wall at all. And when you would have put your varnish on, it would come off.\n\n\n  at left top margin of folio 004r\n\n  Aspic oil varnish is not as apt for colors as that of turpentine, because aspic oil eats the colors, since it is too penetrating.\n\n\n",
  activities: ["varnish"],
  purposes: ["making","observation","advice"],
  id: 14
});
index.addDoc({
  title: "To remove varnish from an old panel painting that has yellowed and varnish it again",
  author: null,
  layout: "narrative",
  content: "- - - - - 004r - - - - - \n\nTo remove varnish from an old panel painting that has yellowed and varnish it again\n\n  Take some white soap and ashes strained through a sieve, and soak all together in water. And with a sponge, take some of the said ashes and soap and rub the painting with it. And when you see that the old varnish has been taken off, throw a bucket of water at the painting to clean it, then leave it for a quarter of an hour in the sun to dry and revive the colors. Once your painting is dried, you can apply your turpentine varnish.\n\n\n  at left bottom margin of folio 004r\n\n  Make sure the colors do not come off.\n\n\n",
  activities: ["varnish","cleaning"],
  purposes: ["application","advice"],
  id: 15
});
index.addDoc({
  title: "Black varnish for sword guards, metal bands for chests, etc.",
  author: null,
  layout: "narrative",
  content: "- - - - - 004v - - - - - \nAnnotations:\nPain, Ostie, Rostie: Bread in Early Modern Europe, fols. 4v, 37r, 79v (Le Pouésard)\n \n\nBlack varnish for sword guards, metal bands for chests, etc.\n\n  Take linseed oil or, for a cheaper option, walnut oil, and rid it of fat with garlic cloves and hog’s fennel (some also add bread crusts), which you will boil in it for a good quarter of an hour. Then add to one pound of the oil boiled in this way a piece of black pitch the size of a walnut and a double handful of wheat, without removing the garlic and onions, and allow to boil together for a good quarter of an hour. Once the pitch is well melted and the oil takes on body, you can remove it from the fire. Then, to varnish, place your iron over a warm charcoal fire and apply with a feather or a brush. When you see that it no longer smokes, it is done and your varnish is dry.\n\n\n  at left top margin of folio 004v\n\n  For an excellent black varnish, add two or three paternoster beads to the rest.\n\n\n\n  at left top margin of folio 004v\n\n  Some consider walnut oil to be better.\n\n\n\n  at left top margin of folio 004v\n\n  If there is a quantity of varnish, it needs to boil for at least half a day, because the more it boils, the better it is. Should the varnish boil over, it is dangerous for it to catch fire and it is difficult to extinguish. So do this in a courtyard or other open space.\n\n\n\n  at left middle margin of folio 004v\n\n  In five or six lbs. of oil, one must put one lb. of galipot, which costs 4 sols, and some peeled garlic cloves. This varnish is not black in and of itself, but turns black when exposed to fire.\n\n\n\n  at left middle margin of folio 004v\n\n  See below, around the 3rd part of this book, after sands, in the chapter on furbishers.\n\n\n",
  activities: ["varnish"],
  purposes: ["making","application","advice","observation"],
  id: 16
});
index.addDoc({
  title: "Black varnish without fire, without disassembling harnesses or removing metal bands from chests",
  author: null,
  layout: "narrative",
  content: "- - - - - 004v - - - - - \n\nBlack varnish without fire, without disassembling harnesses or removing metal bands from chests\n\n  Take spike lavender oil varnish and mix it with charcoal black or lampblack and, without fire, it will mix in by itself. Apply the varnish with a brush and it will soon be dry. Turpentine varnish would work quite well but it does not dry as quickly.\n\n",
  activities: ["varnish"],
  purposes: ["making","application","observation"],
  id: 17
});
index.addDoc({
  title: "Iron engravers' varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 004v - - - - - \n\nIron engravers’ varnish\n\n  Take linseed oil or walnut oil and instead of black pitch you will add some pine resin and you must cook it like black varnish on fire. And to apply it, heat your iron and apply just one layer of varnish, and when it no longer smokes, it is dry. Then engrave with a steel point whatever you want. Then take some salt and verdigris and soak it with as much of one as of the other in very strong vinegar, and leave it for XX4 hours before using it, and the whole will be soaked. Then spread this liqueur or sauce on the engraved object with a sponge\n- - - - - 005r - - - - - \nor linen cloth and leave it thus for xx4 hours and it will be engraved. But if you should want to engrave it quickly, varnish all your work and boil it in the aforementioned liquor, and this will engrave it quickly.\n\n",
  activities: ["varnish","engraving"],
  purposes: ["making","application","advice"],
  id: 18
});
index.addDoc({
  title: "Steel mirrors",
  author: null,
  layout: "narrative",
  content: "- - - - - 005r - - - - - \n\nSteel mirrors\n\n  + They are called steel mirrors because in the past they were usually made of steel polished with emery paste. But more easily, various kinds are made of cuivre franc, which is rosette and tin, because these can be cast in a mold and made round, hollow, convex or in whatever various shapes you want to represent.\n\nSo take half rosette copper and half soft tin, i.e. fine and yet unused. Place them in a crucible, and first melt the copper. Once it has been well melted, add the tin and mix them together and cast that in a white stone mold with no hole, and grease the mold, which should be moderately warm, with oil. Then, once your mirror has been molded, you can polish it in this manner.\n\nSet one mirror in plaster to hold it firmly, then put the other one over it with fine sand between them, and rub one against the other, whether they are hollowed or flat, and thus you will polish both at once. If you want to polish them on both sides, you only have to switch them, which means putting the one that was polishing in the plaster and [using] the one which was in the plaster to polish. Once they have been polished with you can soften them with tripoli of Venice that should not be sandy, and then with paste. You use water with arene to polish, but polishing with tripoli and paste is done dry. Once the mirror has been polished, you can set it.\n\n",
  activities: ["casting","polishing"],
  purposes: ["observation","making"],
  id: 19
});
index.addDoc({
  title: "Concave mirrors",
  author: null,
  layout: "narrative",
  content: "- - - - - 005r - - - - - \n\nConcave mirrors\n\n A concave mirror shaped in the aforesaid form produces an endless number of illusions which seem like magic. If one wants to see oneself from behind, you have to place the concave mirror on the ground on its foot, at a slant, and then look at it one step further. But if you look at it from a closer position, it shows you the right way up but with the face quite large and the hairs of your beard as thick as\n- - - - - 005v - - - - - \n a string and will reflect a nipple as large as a plate, and women can see the secret places they do not want to show to surgeons. It projects the reflection outwards, and if you touch with your finger the eye of the reflection, another finger will come against yours. You will be able to provide light at night for someone quite far away, if you set the concave mirror behind a candle placed on a window sill. You will be able to read and write quite far from the candle if you set it behind the candle and turn the concave face towards you. If you put the mirror at the far end of a table with a candle on it, it will reflect two lights on the table for you. To see what is happening in a street, shut the window, or the more you can shut the better, make a hole in the bottom pane, the size of your little finger, perfectly round all the way through. Then apply a sheet of paper onto the window and let the middle of the sheet be over the hole. Pierce the sheet in the same place as the hole and of the same size. Then turn the concave face of the mirror towards the hole, and anyone passing by in the street will be reflected on the sheet of paper. Do the same with the pierced door of a closed room. You can make wavy mirrors and triangular ones, such as are described by Ptolemy and Archimedes. The concave sort can also set fire to straw or light a candle from afar, using the sun. By reverberating fire too, it can provide warmth.\n\n",
  activities: ["practical optics"],
  purposes: ["observation"],
  id: 20
});
index.addDoc({
  title: "For bronzing in yellow and white",
  author: null,
  layout: "narrative",
  content: "- - - - - 005v - - - - - \n\nFor bronzing in yellow and white\n\n Take mirror tin and melt it. On half a pound of this, put half an ounce of quicksilver, and remove it immediately from the fire and grind it until it is like ashes. Wash it thoroughly in clean water, then grind it on a marble slab and soak it with water of colle de retailles. Then apply that on your wooden candlesticks and any other works you like, and burnish with a tooth. You can grind pin filings and apply them with the said colle de retailles.\n\n",
  activities: ["embellishing"],
  purposes: ["making","application"],
  id: 21
});
index.addDoc({
  title: "To lay down and set burnished gold and give it a red or green or blue hue",
  author: null,
  layout: "narrative",
  content: "- - - - - 006r - - - - - \nAnnotations:\nRouge Clair, fol. 40v (Chang, Shi)\n \n\nAnnotations:\nEsmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi)\n \n\nTo lay down and set burnished gold and give it a red or green or blue hue\n\n  Ceruse and lead white is not appropriate for polished white nor for burnishing because it is fat, but it is quite good for matte gold, which is made with oil by mixing it with yellow ochre and mine and tempering the whole with oil, and this matte gold so applied lasts in the rain, like gilded leadwork and similar things. Therefore, for burnished gold take good chalk, quite white, well ground and soaked with distemper glue and do four coats of it, one after the other, on the wood. And when the last one is dry, rub it with prêle, which is a kind of grass otherwise named horsetail, to render it well polished. Afterwards, take fine Armenian bole and sanguine, as much of one as of the other, a bit of lamb tallow the size of a bean or a pea depending on the quantity of bole, and a little willow charcoal, or as much as the tallow, and half a walnut shell filled with half—burned saffron; some put in a little candi sugar. Grind everything together with water and apply it without gum or glue, and let it dry. And rub the place that you would like to gild with a piece of white cloth to better unify it, and when the rubbed place is a little shiny it is a sign that the gold will behave well. After rubbing, wash the place that you want to gild with a clean brush soaked with clear water and apply the gold at once, which you will burnish when dry. And if you want to set rouge clair and glaze with it, grind Venice lake on the marble with walnut oil or linseed oil. After grinding, mix in turpentine varnish or spike lavender varnish and apply on gold with the brush. Brazilwood and laque ronde fade. For green, temper verdigris with walnut oil or linseed oil and grind it, then mix in some turpentine varnish; not aspic varnish, which is not suitable for verdigris. If you want to glaze with azure it must be set on burnished silver. Take azure enamel, and without grinding temper it with turpentine varnish and apply it.\n\n",
  activities: ["embellishing","gilding"],
  purposes: ["observation","application"],
  id: 22
});
index.addDoc({
  title: "For cages",
  author: null,
  layout: "narrative",
  content: "- - - - - 006v - - - - - \nAnnotations:\n\"For Cages\" and Glassmaking in Ms. Fr. 640: fol.6v\n \n\nFor cages\n\n  You can embellish them with thin enamel canes of various colors by covering the yellow latten or iron wire with said canes. These you will break neatly into the length that you want if you make a small notch with a cutting file at the point where you want to break them, and they will not break anywhere else. You can bend them with a wooden model over a brazier or by the heat of a lamp. A cane can be stretched out as long as you want in a small furnace made like a reverberatory oven but with openings on both sides. And once the large cane is red, they seize the hot end of it with small pincers that have long beaks, with one end of the beak inside the end of the cane, so that it may be stretched without becoming blocked. The other end of the cane is held with the hand, as it is not hot. Once the cane is stretched enough, the one who is working seated with his stove, the size of a carnation pot, placed in front of him, breaks it off and carries on. This is for making cane for capes, which may be cut, as already mentioned, with a file. Glass—button makers also use the said stove.\n\n\n  Figure\nat middle middle margin of folio 006v\n\n\n\n\n  at left middle margin of folio 006v\n\n  Under the door is a grill that supports the burning charcoal. The ash is emptied by turning the stove upside down.\n\n\n",
  activities: ["embellishing","glasswork"],
  purposes: ["application","advice","observation","description"],
  id: 23
});
index.addDoc({
  title: "For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances",
  author: null,
  layout: "narrative",
  content: "- - - - - 006v - - - - - \n\nFor stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances\n\n   Etch with aqua fortis on iron or copper whatever you have pounced and drawn there, next make it neat with a burin or chisel. Then pour soft tin, yet unused, onto polished marble and flatten it, making it quite thin, with a wooden board. Or else pour it on a table as is done with lead, or put it through a roll—press. Next lay your tin plate over the engraving, and over the tin plate put a piece of felt and strike it with a hammer. Then gild it in the following manner.\n\n",
  activities: ["etching","metalwork","stamping"],
  purposes: ["making"],
  id: 24
});
index.addDoc({
  title: "To gild with gold color and tinsel",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n\nTo gild with gold color and tinsel\n\n Once you have colored or made your stamped ornament in tin (as previously described), or in iron or copper, you must not put glue as on wood, but just have some fatty oil, which is made in seven or eight days in the sun from walnut oil and white lead, stirring often, or cooked on fire if one should be in hurry. Then, with  the oil thus made fatty, grind a little white lead, massicot and black graphite, at discretion, as much of one as of the other. Minium will color the gold. Then apply an even layer of that onto your stamp, taking care you do not fill the hollows. And once it is almost dry, apply the gold leaf on it using cotton. Such gold will withstand rain on houses or elsewhere. And if you have made your gilt with tinsel, color it with smoke from a partridge or from yellow or red cloth, and it will look as fine as pure gold. You can cover trunks, mirrors, bed valances and posts in colored velvet or satin and then apply the gilded stamped ornament on them with strong glue.\n\n",
  activities: ["embellishing"],
  purposes: ["making","observation","application"],
  id: 25
});
index.addDoc({
  title: "To color stamped ornaments for trunks",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n\nTo color stamped ornaments for trunks\n\n  The stamped ornament made from sheets of copper or latten are made with wood from a service tree engraved and cut, should you want to spend less. Next, the stamped piece is colored with the aforesaid lacquer colours of lacquer, verdet, blue enamel, and soaked in turpentine varnish. But wherever you want to make it azure, apply some fer blanc, which is more appropriate for an azure background.\n\n",
  activities: ["embellishment","stamping"],
  purposes: ["making","application"],
  id: 26
});
index.addDoc({
  title: "Doublets",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n\nDoublets\n\nGood dragon’s blood soaked in spirits produces its own mastic or glue. So do vert de vessie and saffron.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 27
});
index.addDoc({
  title: "Fish glue or usblac and mouth glue",
  author: null,
  layout: "narrative",
  content: "- - - - - 007r - - - - - \n\nFish glue or usblac and mouth glue\n\nIt is made from codfish skin that has been boiled rather than salted. Joiners use it on their masterpieces and guitar makers use it for their more delicate works. It needs to be strongly whipped, then soaked gently in barely boiling water.\n\nMouth glue is made of parchment scraps and used to glue paper or similar things without fire, by wetting it with one’s mouth.\n\n\n  at left bottom margin of folio 007r\n\n  It is whipped and left to soak in white wine for one night, then melted over a low heat. Others soak it in spirits.\n\n\n",
  activities: [],
  purposes: ["making","description","application"],
  id: 28
});
index.addDoc({
  title: "To give the color of all kind of metals and woods and other things",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n\nTo give the color of all kind of metals and woods and other things\n\n   Take touchstone and pumice stone as much of one as of the other and grind them together, mix that with a colle de retailles stronger than that used for painting, and apply a layer of it on whatever you like. Once dry, rub this layer on any metal whatsoever, then burnish it.\n\n",
  activities: ["imitation"],
  purposes: ["making","application"],
  id: 29
});
index.addDoc({
  title: "Against windy colic",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n\nAgainst windy colic\n\n Take a dozen dried common walnuts and throw them one after another onto a good brazier where they may catch fire, and take them out with tongs, and let them burn and flame well in the air, and extinguish them in a glass of good wine. Then let the wine cool and filter it, then pour half of it, since six extinguished nuts make one dose. An excellent cure against suffocation of the matrix.\n\n",
  activities: ["medicine"],
  purposes: ["making"],
  id: 30
});
index.addDoc({
  title: "To relieve the pain of g{out}",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n\nTo relieve the pain of g{out}\n\n  Take half a pound of finely powdered golden and yellow marcasite, half an ounce of storax, 4 lb. of urine, incorporate well together, little by little, in a mortar, then boil all together quite strongly. But the pot needs to be well covered so the smoke does not escape. Then distill the imbibed urine, separated by inclination, in an alembic, well luted and covered with a copper head. And soak a cloth with the said water and apply it lukewarm on the pain.\n\n",
  activities: ["medicine"],
  purposes: ["making","application"],
  id: 31
});
index.addDoc({
  title: "Against gonorrhea",
  author: null,
  layout: "narrative",
  content: "- - - - - 007v - - - - - \n\nAgainst gonorrhea\n\n  Cook .i. lb. of old smiths’ water, .i. ℥ of Armenian bole reduced in the finest powder, and .iii. ʒ of common honey, until the honey stops foaming. Once cooled, strain with great pressure and use the results of filtration by injection.\n\n",
  activities: ["medicine"],
  purposes: ["making","application"],
  id: 32
});
index.addDoc({
  title: "Gold lettering on paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n\nGold lettering on paper\n\n  Write with fig tree milk then let it dry a little, afterwards apply the gold in leaf and, once quite dry, rub with linen and only the lettering will hold.\n\n",
  activities: ["gilding"],
  purposes: ["making"],
  id: 33
});
index.addDoc({
  title: "To explode grenades and give force to fireworks",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n\nTo explode grenades and give force to fireworks\n\n  Put into the powder one sixth as much of quicksilver\n\n",
  activities: ["explosives","military"],
  purposes: ["making"],
  id: 34
});
index.addDoc({
  title: "Tempering bullets to pierce bullet-proof armor",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n\nTempering bullets to pierce bullet—proof armor\n\n Heat the lead bullet as much as you can without melting it, and once it is hot dip it into the strongest vinegar that you can. And do this four or five times. Afterwards, mince some lard very finely and some linen also very delicately, mix all this together and use it as wadding, making it go into the arquebus or pistol with a little strength and very tightly. And before shooting, if possible, the bullet should be hot.\n\n",
  activities: ["military"],
  purposes: ["making"],
  id: 35
});
index.addDoc({
  title: "To make a breach in a wall by night",
  author: null,
  layout: "narrative",
  content: "- - - - - 008r - - - - - \n\nTo make a breach in a wall by night\n\n Having made a hole in a wall as you know, put one mortar inside, charged with powder, almost flat, and another upright, then fill in the hole and fire.\n\n",
  activities: ["military"],
  purposes: ["advice"],
  id: 36
});
index.addDoc({
  title: "To polish a ruby balay",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n\nTo polish a ruby balay\n\n Unlike others, you don’t polish it with tripoli, but with marcasite powder and oil.\n\n",
  activities: ["polishing"],
  purposes: ["advice"],
  id: 37
});
index.addDoc({
  title: "Ground gold and ground silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n\nGround gold and ground silver\n\nYou have to calcine your pure gold with ☿ and then let your amalgam dry well and the said mercury fly off. Then crush it on marble with gummed water. As for silver you have to use it in its raw form and corrode it with aqua fortis, then take it out with a copper blade and rinse it well and then grind it with gum water.\n\n",
  activities: [],
  purposes: ["making"],
  id: 38
});
index.addDoc({
  title: "Polishing stones",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n\nPolishing stones\n\n There are three wheels for this purpose, one of tin, one of lead, and one of pure copper. On the copper wheel, only diamonds, rubies, sapphires and oriental jacinths are usually polished. The tin wheel is for softer stones such as emeralds, amethysts and others.\n\n",
  activities: ["polishing"],
  purposes: ["observation"],
  id: 39
});
index.addDoc({
  title: "Pewterers' mixture",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n\nPewterers’ mixture\n\n Because they often mix in with the pure tin half the quantity of lead, which renders the tin deaf. To correct this, they mix in some latten filings to make it resonant.\n\n",
  activities: ["metalwork"],
  purposes: ["observation"],
  id: 40
});
index.addDoc({
  title: "Perfect amalgam",
  author: null,
  layout: "narrative",
  content: "- - - - - 008v - - - - - \n\nPerfect amalgam\n\n Take the finest sandstone you can find and make a cavity in the middle. And put in it an eighth part of ☿ and rub it and wear it down while adding some water with ☾ or ☼ until the material becomes paste—like and even harder. Then, if you want, corrode it with good aqua fortis, if it is ☾ or ♀. Then melt it again, having taken it out as you know. The ☾ will have some color, and after being melted it will leave some flecks of ☼, and the ♀ will be very fine and will have almost no covering.\n\n",
  activities: ["metalwork"],
  purposes: ["making"],
  id: 41
});
index.addDoc({
  title: "Plowman",
  author: null,
  layout: "narrative",
  content: "- - - - - 009r - - - - - \n\nPlowman\n\n Since millet is naturally very dry, harvesters thresh it most often in the cool of night and in moonlight. Which could not be done with another, wetter, grain, because you must let the sunbeams pass over it, and one rarely threshes it before midday. Immediately after the millet is harvested, the earth needs to be plowed because its roots eat and make lean the soil as much as if the millet was still standing. The ground where millet will have been sown becomes quite diminished in fertility, which you can tell next time it is sown. But more than any other the grain called pomole in Gasconyor or baillard in northern France, makes the earth shake, according to the common saying, seven years later. Broad beans improve and enrich the soil, provided that one lets the roots and stems rot in it.\n\n",
  activities: ["agriculture"],
  purposes: ["observation"],
  id: 42
});
index.addDoc({
  title: "Painters",
  author: null,
  layout: "narrative",
  content: "- - - - - 009r - - - - - \n\nPainters\n\n After laying down their colors, some smooth it with the back of a feather but the large brush is best.\n\n",
  activities: ["painting"],
  purposes: ["observation"],
  id: 43
});
index.addDoc({
  title: "Merchants",
  author: null,
  layout: "narrative",
  content: "- - - - - 009r - - - - - \n\nMerchants\n\n  They commonly have four books. The tiro, which is a formulary for apprentices, by which they can know how much every item of merchandise costs and for how much it should be sold. The second is the waste book, where they put down in rough what they sell daily. The third is the sales book, where they put down the clean copy and detailed account of what is contained in the waste book. The fourth is the ledger, which mentions the sale, the balanced account, the bill and the term of payment, and this book is accepted as evidence in court.\n\n",
  activities: ["accounting"],
  purposes: ["observation"],
  id: 44
});
index.addDoc({
  title: "Painters",
  author: null,
  layout: "narrative",
  content: "- - - - - 009v - - - - - \n\nPainters\n\n  They melt orpiment entirely in a glass bottle on very hot ashes, but it would be more appropriate to sublimate orpiment in a long—neck matrass as for making garnets. The orpiment thus turns red like red enamel and it has to be ground first in distemper, because once entirely melted it is very brittle and difficult to grind. Then, once dry, you can thin it with oil and it will make a deep and saturated yellow. But to prevent orpiment from fading in contact with other colours and make it compatible with these and to make it dry quickly, a most rare secret is to calcine common salt and to grind it together with the orpiment. Green verditer is not used with oil.\n\n",
  activities: ["painting"],
  purposes: ["observation"],
  id: 45
});
index.addDoc({
  title: "Merchant",
  author: null,
  layout: "narrative",
  content: "- - - - - 009v - - - - - \n\nMerchant\n\n  The order that merchants are accustomed to keep in their books, which are the waste book, the sales book, and the ledger, also called the account book.\n\n",
  activities: ["accounting"],
  purposes: ["observation"],
  id: 46
});
index.addDoc({
  title: "Waste book",
  author: null,
  layout: "narrative",
  content: "- - - - - 009v - - - - - \n\nWaste book\n\nFirst, François du Cros owes from 2 September 1581, for 1 canne de batiste at 8 livres per canne, total —— 8 livres tournois.\n\n\n  at left middle margin of folio 009v\n\n  Moved to the sales book at r. 25/ François du Cros owes from 2 September 1581, for 1 canne de batiste at 8 livres per canne, as shown by the waste book at r. 25\n\n\n\n  at left middle margin of folio 009v\n\n  Moved to the account book at r. 55/ François du Cros owes from 2 September 1581, for the merchandise taken by himself, as specified in detail in the sales book, No. 7, at r. 55, the sum of 8 livres, of which the aforesaid du Cros has made a bill on the aforesaid day, to be payed on Saint Andrew’s day next, total —— 8 […] r.\n\n\n",
  activities: ["accounting"],
  purposes: [],
  id: 47
});
index.addDoc({
  title: "Imitation jasper",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \nAnnotations:\nImitating Raw Nature, fol. 10r (Lores-Chavez and Kang)\n \n\nAnnotations:\nJasper Imitation on Horn, fol. 10r (Estrades)\n \n\nImitation jasper\n\n  Take horn as is used to make lanterns, quite thin, and underneath imitate your jasper, cornaline, and other stones. That will look more appropriate than doing it on glass, which is too shiny. And the horn gives a lustre and a fatty polish similar to jasper.\n\n   You know how you can imitate roses with scrapings of the said horn. The colors for this jasper need to have as a base clear turpentine or spike lavender varnish. And matte, opaque colors are not appropriate, no matter how fine they are. You have to oil the unpainted underside with spike lavender oil.\n\n\n  at middle top margin of folio 010r\n\n  Thin glass looks very fine for this effect\n\n\n\n  at left top margin of folio 010r\n\n   You can inlay beds with it, and on the joints you can throw talc or metal filings on the fresh cement of the said joints. You have to bond them with gum amoniacum soaked in vinegar. To better imitate marbled jasper, apply coarse wool hair dyed various colors and intermingled. After you have laid down all the colors, scrape oblique lines into them then lay down gold leaves and silver leaves. If you lay down colors made of turpentine on the horn, give it a backing of silver leafor of tin leaf. You can also file horn and mix it with strong glue and lay it down onto the joints of the horn piece and finish with a joiner’s plane.\n\n\n",
  activities: ["imitating","embellishing"],
  purposes: ["advice","observation","application","making"],
  id: 48
});
index.addDoc({
  title: "Scudegrun",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \nAnnotations:\nColor for Green, fol. 158v (Kok)\n \n\nScudegrun\n\n  It is made in Lyon from the juice of weld mixed with chalk or better yet with ceruse, which is appropriate for tempera and oil.\n\n",
  activities: ["painting"],
  purposes: ["observation"],
  id: 49
});
index.addDoc({
  title: "Roses",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \nAnnotations:\nJasper Imitation on Horn, fol. 10r (Estrades)\n \n\nRoses\n\n  These are imitated either with the scrapings of horn used for lanterns, or with very light, fine and dyed parchment scrapings, used as you know.\n\n",
  activities: ["imitating"],
  purposes: ["observation"],
  id: 50
});
index.addDoc({
  title: "Purple color",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \n\nPurple color\n\n  Painters make it beautifully by first applying an undercoat of ordinary azur, or better yet azure enamel, and then they glaze it with lacquer, which will be more appropriate for this if you mix in alum, which will give it a violet tint depending on the quantity that you mix in.\n\n",
  activities: ["painting"],
  purposes: ["observation"],
  id: 51
});
index.addDoc({
  title: "Powder for hourglasses",
  author: null,
  layout: "narrative",
  content: "- - - - - 010r - - - - - \nAnnotations:\nPowder for Hourglasses, fol. 10r (Marris, Pope)\n \n\nPowder for hourglasses\n\nIt must be made very fine and not subject to rust and with enough weight to flow. Taking i lb. of lead, melt it and skim and purify it from its filth, then pour into it four ℥ of finely ground common salt, and take care that there are no stones or earth. And immediately after pouring it, stir continuously very well with an iron tool until the lead and salt are quite incorporated, and take it immediately off the fire, stirring continuously. And if it seems too coarse, grind it on a marble slab and pass it through a fine sieve, then wash it as many as times as necessary until the water runs clear, throwing out the fine powder that will float on it, renewing the water as many times as necessary until it is completely cleared.\n\n",
  activities: [],
  purposes: ["making"],
  id: 52
});
index.addDoc({
  title: "For painting in oil on taffeta without the oil running",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \nAnnotations:\nOil on Taffeta, fol. 10v (Bowen, Lou)\n \n\nFor painting in oil on taffeta without the oil running\n\n One needs to make a layer of batture, which is made of colle forte soaked for 24 hours in water then gently boiled so it is not too strong. Then stir in a little honey to soften it, and bring it all to a boil. And on top of this layer, which will soon be dry, you will be able to paint in oil, which will soften the layer even more, and which will also serve to make an underlayer for gold. Alum water also keeps oil from running.\n\n",
  activities: ["painting"],
  purposes: ["making","observation"],
  id: 53
});
index.addDoc({
  title: "Underlayer for gold leaf on parchment or paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \nAnnotations:\nGilding on Paper and Parchment, fol. 10v, 29v (Goldenberg)\n \n\nUnderlayer for gold leaf on parchment or paper\n\n   Make very clear starch glue, showing little body. And apply six or five layers, and when the last is almost dry, apply your gold to it.\n\n",
  activities: ["painting","gilding"],
  purposes: ["advice","application"],
  id: 54
});
index.addDoc({
  title: "For cleaning gold leaf applied to iron",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \n\nFor cleaning gold leaf applied to iron\n\n  Rub your weapons or other gilt objects with dry horse dung.\n\n",
  activities: ["gilding"],
  purposes: ["advice"],
  id: 55
});
index.addDoc({
  title: "For whitening ceruse",
  author: null,
  layout: "narrative",
  content: "- - - - - 010v - - - - - \n\nFor whitening ceruse\n\nHard—boil some eggs, cut them in half and take the yolks out, and between the two halves of the white put a bit of ceruse, and tie the two halves together with thread. Then boil in clear water, and it will become black, and thus the ceruse will be purified. Some reheat it over fire and it becomes very white.\n\n",
  activities: [],
  purposes: ["observation","making"],
  id: 56
});
index.addDoc({
  title: "Painting enamel azure in oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 011r - - - - - \nAnnotations:\nAzure Enamels, fol. 11r, 59r, 61v, 93v (Chang, Clemens)\n \n\nPainting enamel azure in oil\n\n  This is a secret that is hardly known to common painters. Some take the most delicate they can &amp; crush it with ceruse, which binds it, and next prick with an awl in several places the area they want to paint with azur d’esmail, such that the oil enters &amp; leaks in, &amp; does not cause the azure, which in itself is heavy, to run. Others lay the panel flat &amp; apply the azure on it, which is also done à destrempe. The main thing is to crush it well on marble, and before that, to have washed it thoroughly. Some grind it with thoroughly with an egg yolk &amp; then wash it in five or six lots of water and lay it on not with a painceau, which would be too soft, but with a broisse highly softened &amp; bent, &amp; laying it on thickly as if one were applying it with a trowel; settling down it evens out and flattens. I have experienced that crushing azur d’esmail with egg yolk &amp; then washing it in several lots of water is good, although it loses a little of its vividness in the crushing of it. I have also washed it in several lots of water &amp;, when it had settled a little, I removed the water, still q blue, with a sponge and squeezed it into another vessel thus where it settled, &amp; from the residue I had the ash, flower and subtlest part of the azure without crushing it, which is the best, for in the crushing of it, it loses some of its color. Those who make it in Germany compose it like enamel, in large pieces which they pestle, &amp; pass through several sieves &amp; wash.\n\nTo make azures beautiful, they wash or soak them in a rock water, as they call it; it is a water distilled from mines where azure or vert d’azur is found, which distills naturally through the mountain’s veins or is distilled with an alembic par from &gt;mineral stones of azure or copper.\n\nAzure ashes are only good for landscapes because they die in oil. Only true azure lasts. Azur d’esmail cannot be worked if it is too coarse. Try it, therefore, on the fingernail or the oil palette. If it happens to be sandy, do not crush it except with the egg yolk or, better yet, wash it in clear water &amp; with a sponge remove the colored water after it starts to go to the bottom, and in this manner you will extract the quite delicate flower, which will be easy to work with.\n\n",
  activities: ["painting"],
  purposes: ["making"],
  id: 57
});
index.addDoc({
  title: "Applying the color of Damascene steel on knives",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n\nApplying the color of Damascene steel on knives\n\n  Rub the steel with common aquis fortis mixed with earth. After, rub everything with ashes or sand. Do with the gold and silver as you would do on a touchstone.\n\n",
  activities: ["embellishing"],
  purposes: ["application"],
  id: 58
});
index.addDoc({
  title: "Getting rid of red eyes or black eyes",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n\nGetting rid of red eyes or black eyes\n\n  Make two small licks of raw mutton flesh, and with a blindfold, apply it at night on your eyes.\n\n",
  activities: ["cosmetic"],
  purposes: ["application"],
  id: 59
});
index.addDoc({
  title: "Applying unpolished gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n\nApplying unpolished gold\n\n  There is nothing better than the black varnish of sword—makers to use as a base layer because it dries quickly and makes the gold appear very beautiful.\n\n",
  activities: ["gilding"],
  purposes: ["application"],
  id: 60
});
index.addDoc({
  title: "Making diamond points for engraving",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n\nMaking diamond points for engraving\n\n  These are for sketching what you want to draw on stones and for engraving. When these points are too dull and cannot engrave, it is necessary to rub diamond against diamond; one can rub them with pumice stone powder. It is necessary to strip what you want to engrave on a lead wheel or with a stone or with glass, because the polishing is like varnish or glass and stops the diamond or sapphire from engraving well. This is why it does not engrave easily on horn, which is polished and fat. But when the polish has been taken off, it is easy to engrave.\n\n",
  activities: ["engraving"],
  purposes: ["making"],
  id: 61
});
index.addDoc({
  title: "Polishing a copper wheel",
  author: null,
  layout: "narrative",
  content: "- - - - - 011v - - - - - \n\nPolishing a copper wheel\n\n  Instead of polishing your stone, it is necessary to remove the grease by rubbing the flesh side of a piece of leather on the wheel, all while spinning the wheel if you have not worked on it in a long time.\n\n",
  activities: ["polishing"],
  purposes: ["advice"],
  id: 62
});
index.addDoc({
  title: "For molding from sulfur",
  author: null,
  layout: "narrative",
  content: "- - - - - 012r - - - - - \nAnnotations:\nSulfur and Additives, fol. 140v, 12r (Landsman, Rowen)\n \n\nFor molding from sulfur\n\n  Sulfur is made beautiful by mixing in soot black or powdered sanguine, which makes it harder and stronger. After letting it melt entirely until it becomes liquid and similar to oil, then mixing it with verdigris, you can use it for casting a lizard or something else in plaster, very cleanly.\n\n\n  at left top margin of folio 012r\n\n   You must not cast it until it has cooled down and lost all its bubbles and eyes, and its surface has fallen and become flat as water. Soot black gives it a fine luster and makes it neater. Use yellow sulfur of the best kind, as the greyish natural sulfur is no good. Don’t cast it in the wind and cold for it would fill with bubbles.\n\n\n",
  activities: ["casting"],
  purposes: ["observation","advice"],
  id: 63
});
index.addDoc({
  title: "Cimolee",
  author: null,
  layout: "narrative",
  content: "- - - - - 012r - - - - - \n\nCimolee\n\n   Cimolee or fullers’ clay (fullers meaning those who finish cloth) is an excellent material for molding hollow or in relief. If you want to reheat it, it should first be warm and you should reheat gently from a distance, and little by little, otherwise it will crack. To reheat the figure put it in a pot in an oven, or in a closed oven. It comes out very smooth, clean and fine. With cimolee you can make a hollow mold of an animal and cast it in lead.\n\n\n  at left middle margin of folio 012r\n\n   The work needs to have dried for 4 or 5 days before you bake it. When you are molding and making a hollow in cimolee, don’t press all at once, but gently, or else it would split.\n\n\n",
  activities: ["mold making","casting"],
  purposes: ["observation","advice"],
  id: 64
});
index.addDoc({
  title: "Plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 012r - - - - - \n\nPlaster\n\n   Mountain plaster is greyer, and that from the region of Albi is whiter. It has to be heated over a closed fire, such as a reverberatory furnace or fours de barbiers. The more freshly heated, the better it is to work with. It should be finely crushed on marble. After preparing your hollow mold of sulfur or another [material] and oiling it and surrounding it with a circle, soak your plaster in water, not too thick, and rub it well with your finger, and if it makes bubbles, throw on more powder of the said plaster and crush it with your finger until +\n\n\n  at left bottom margin of folio 012r\n\n   + it makes no more bubbles. Then once more throw and sprinkle plaster powder on top and leave to set well, then scrape the powder off.\n\n\n",
  activities: ["mold making","casting"],
  purposes: ["observation","advice"],
  id: 65
});
index.addDoc({
  title: "Moulding stucco promptly",
  author: null,
  layout: "narrative",
  content: "- - - - - 012v - - - - - \n\nMoulding stucco promptly\n\n   Crush and pulverize finely brick or Armenian bole or sanguine and incorporate it with melted wax, and thus melted, cast like the others on a relief medal, and so you will have a hollow mold where you will be able to cast ground paper or cimolee.\n\n\n  at left top margin of folio 012v\n\n  Finely sieved brick is better, since bole is too fat\n\n\n",
  activities: ["molding","casting"],
  purposes: ["making","observation"],
  id: 66
});
index.addDoc({
  title: "Cleaning yellow pearls",
  author: null,
  layout: "narrative",
  content: "- - - - - 012v - - - - - \n\nCleaning yellow pearls\n\nGently boil them in a goldsmith’s bouteure then, with tripoli and a small piece of leather, sprinkled on the flesh side with the powder of the said tripoli, rub and polish the pearl.\n\n",
  activities: ["polishing"],
  purposes: ["application"],
  id: 67
});
index.addDoc({
  title: "To whiten enilanroc",
  author: null,
  layout: "narrative",
  content: "- - - - - 012v - - - - - \n \n\nTo whiten enilanroc\n\nSome believe the ceruse—color crust that is on top to be natural. Others say that it is a lost secret of ancient lapidaries. Others say that it is enamel that has been reheated. And, from this crust, one can form multiple ciphers, letters, circles and other bizarre motifs. As to the means, I proceeded thus: I once wanted to add a layer of arsenic ground on marble. However, I did the experiment without it, and I put the above mentioned thing, enilanroc, in a small iron casket on the fire of my goldsmith’s forge with three or four small half—burnt coals and blew on it only with my mouth. However, the thing caught fire and became all white, not only on its surface but also inside. And then I let it cool on its own near the fire, since otherwise, exposing it suddenly to cold air, it would have cracked. While it was all white, I passed it through my lead wheel and I found it to be as hard as it was before. And after scraping off a little of the white, I found it to be of a clear fleshy tone. Finally, I polished it and observed that it took quite a beautiful polish luster and that it could compare with a quite beautiful agate for the purpose of engraving it with some beautiful face and applying it to a table of\n- - - - - 013r - - - - - \nagate of various colors. But because this overall whiteness did not correspond with the white crust on the surface that I was seeking, leaving the rest of the thing its natural color, I made a hole in a brick, precisely the same size as the object, and put it inside. Then I heated two glassmaker’s soldering irons until they became red hot and, when they were red hot, I applied them one after the other onto the surface of the object until I got the white crust I was looking for, on which I made the drawing that I wanted, revealing the red background, with a diamond point, and I polished it with hog bristles and tripoli. I don’t know if it would be better to reheat it under hot ashes, and if it would be good to encase it in alabaster, which is quite cold, as I did in the brick.\n\n",
  activities: ["polishing","engraving"],
  purposes: ["making","observation"],
  id: 68
});
index.addDoc({
  title: "Flesh color with arsenic",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n\n\nFlesh color with arsenic\n\nSublimated arsenic, that is to say, the white kind sold as stone, when powdered on marble, mixed with vermilion or lake or mine, produces a beautiful flesh color that always shines. Yellow arsenic has a very beautiful color, the white one works well in oil and goes well with lake.\n\n",
  activities: ["painting"],
  purposes: ["observation"],
  id: 69
});
index.addDoc({
  title: "To dye",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n\n\nTo dye\n\nMix sal ammoniac and vitriol and boil them together. Then mix in lake or verdigris and azure or similar colors, and dye. This will not come off unless the animal sheds. @Non bona.\n\n",
  activities: ["dyeing"],
  purposes: ["making","observation"],
  id: 70
});
index.addDoc({
  title: "Polishing of stones",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n\n\nPolishing of stones\n\nEngraved stones are not polished on a copper wheel, but with brushes and tripoli. Yet faceted and flat stones are polished on the said wheel.\n\n",
  activities: ["polishing"],
  purposes: ["observation"],
  id: 71
});
index.addDoc({
  title: "Fine sieves of raw silk",
  author: null,
  layout: "narrative",
  content: "- - - - - 013r - - - - - \n\nFine sieves of raw silk\n\n  Tammy of raw silk is made on a weaver, to make very fine and delicate sieves. And for that effect, you must not choose raw silk whitened by sulfur smoke: this covers the silk in a sticky vapor that would hold the flour and in the end would prevent it from\n- - - - - 013v - - - - - \npassing through so well. But for this effect, choose yellow and natural raw silk because it is stronger and rejects flour as horsehair does.\n\n",
  activities: ["weaving"],
  purposes: ["observation","advice"],
  id: 72
});
index.addDoc({
  title: "To recognize good azur dust for oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n\n\nTo recognize good azur dust for oil\n\nThe one that piles up in small clods and is lumpy is the best because it is finer. Also the one that is also very pale in color, because oil darkens it. Certain sophists mix them together, but you will find this out if you pour some onto a piece of paper and lay it flat and spread it with your finger since, if it is mixed, it will be found varied and so to say with light and darker stripes, but if it is whole it will be even and of one color.\n\n",
  activities: ["painting"],
  purposes: ["observation"],
  id: 73
});
index.addDoc({
  title: "Whitening pearls",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n\n\nWhitening pearls\n\nWhen they have been applied in embroidery on some garment, they are greasy and may be cleaned in soapy water.\n\n",
  activities: ["cleaning"],
  purposes: ["observation"],
  id: 74
});
index.addDoc({
  title: "Toadstone",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n\nToadstone\n\nThat which comes from the head of the toad and has the shape of the toad, painted naturally as you have seen, is the most excellent. It is said that if powder made from it is put on a brazier in someone’s room at night, they will be unable to move, speak, or stop thieves.\n\n",
  activities: ["painting","medicine"],
  purposes: ["observation"],
  id: 75
});
index.addDoc({
  title: "Snakes",
  author: null,
  layout: "narrative",
  content: "- - - - - 013v - - - - - \n\n\nSnakes\n\nIt is said that if one calls a snake in Greek, saying ΟΦΗ ΟΦΗ, it will flee. Similarly, that if one calls a swine in Greek, ïon, it will come.\n\n",
  activities: ["animals"],
  purposes: ["observation"],
  id: 76
});
index.addDoc({
  title: "For earth walls and rustic construction",
  author: null,
  layout: "narrative",
  content: "- - - - - 014r - - - - - \n\n\nFor earth walls and rustic construction\n\nSwallows have taught us this craft by building their nests out of mud mingled with wisps and bits of hay or straw to make it bond. Therefore, in places where stones and bricks are lacking, one can use earth to make walls thin and thick. The best for this is light earth, which does not form clumps when plowed, or better, that which in some way mingled with arene, because it can be most easily beaten and tamped down. It is true that it needs to be dampened and cut into clumps with a ditch—spade, and put and placed in this form. This one lasts more and does not require that much effort, and dryness doesn’t make it split or crack. However, since such kinds of earth are not found everywhere, those who live on good and fertile land, after drawing the width and length of their foundations with a rope, drive in long poles and rafters along the edges on each side to support boards between which they throw the earth, making each layer about one foot thick, interspersed with S.S.S—shaped branches of heather or similar things, then they tamp it down and beat it with beaters of three different forms. One is called the mall, which has a triangular form like A, and this is used firstly to tamp down the earth. Then one uses another made of pointed woodblocks fitted onto a thick stick, and this one is used to properly press the earth at the wall’s ends and edges where they adhere to the boards, and is called [blank]. The other one is called the bat and is used to flatten and beat the earth for the last time, as shown in C. Then one makes another layer of earth and heather and beats as has been said, and continues thus until completing the wall, which is covered with heather and then with earth. Some intersperse the said wall with rows of bricks. They also make walls with a sloped foot, adding width to the foundations according to how high they want to build the wall. When it is old it whitens, showing that it has saltpeter in it. Which is why, when they fall down, gunpowder makers profit from them.\n\n\n  Figure\nat left bottom margin of folio 014r\n\n\n\n",
  activities: ["construction"],
  purposes: ["observation"],
  id: 77
});
index.addDoc({
  title: "Damask Cloth",
  author: null,
  layout: "narrative",
  content: "- - - - - 015r - - - - - \nAnnotations:\nDamasked Cloth, fol. 15r (Yi)\n \n\n\nDamask Cloth\n\nYou can make damask cloth of two different colours and imitate embroidery without adding anything else to it, as follows. Once it is is dyed yellow, pounce onto it such a pattern as will please you. Then you will sew some string or a bigger cord loosely onto the pattern and throw it into a dye of woad or pastel and it will become green, except that which is beneath the string, which will remain yellow because the green dye will not have penetrated there. And you can do the same with other colours and, instead of string or cord, add some pieces of poor quality cloth cut in Moorish shapes on top of the first colour. In that manner, you will have cheap embroidery.\n\n",
  activities: ["dyeing"],
  purposes: ["making"],
  id: 78
});
index.addDoc({
  title: "Casting metals",
  author: null,
  layout: "narrative",
  content: "- - - - - 015r - - - - - \n\n\nCasting metals\n\nCandlesticks and small works are cast in a frame with sand. Having stamped the work, sprinkle it with flour in order to make the copper or latten run better. When the sand has been in use for one month, it is necessary to take some new sand because that which has been used, being reheated +, dries &amp; loses its binding power. Yet it is used mixed with the new sand, because it makes the work less porous. Large works such as artillery, bells and similar things are cast in earth, and copper cast in earth makes less crust and is whiter than when cast in sand. The earth is sandy clay mixed with horse dung and cloth waste. The earth that has been used for casting, which is black, baked and as if burnt, is mixed with artificial sand, and is very good. For softening and making the copper run, once it is melted, one throws in some lead, which does not form an alloy but is found on the surface of the cast.\n\n\n  at left middle margin of folio 015r\n\n  + by the heat of molten metal\n\n\n",
  activities: ["casting"],
  purposes: ["making","observation"],
  id: 79
});
index.addDoc({
  title: "Casting gold and silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 015r - - - - - \n\n\nCasting gold and silver\n\nThe sand must be made from something very dry and arid and reheated well because, if it were humid, like founder’s sand, the gold and silver would leap out of the mold and sustain damage. It is also necessary for the earth to absorb the metal because cast gold or cast silver becomes very porous. That is why it must be beaten out again, otherwise it is brittle, as seen in spoon handles.\n\n",
  activities: ["casting"],
  purposes: ["observation"],
  id: 80
});
index.addDoc({
  title: "Ears",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n\n\nEars\n\nWhen a defluxion occurs in the ear, be very careful not to put anything in it, and following the proverb, ears and eyes should only be touched with your elbow. However, to an affected ear, it is good to apply musky cotton, that is to say, cotton kept in musk, which comforts quite well.\n\n",
  activities: ["medicinal"],
  purposes: ["observation","application"],
  id: 81
});
index.addDoc({
  title: "Making letters easier to read",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n\n\nMaking letters easier to read\n\nOne cuts the largest pieces of beryl or crystal round on one side and flat on the other, then one fits it with a little handle and puts the flat side on the letter\n\n",
  activities: ["optics"],
  purposes: ["observation"],
  id: 82
});
index.addDoc({
  title: "Stamping",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n\n\nStamping\n\nIf you have a bronze medal and you want to make it very light, make a lead cavity, then spread upon it a thin plate of gold, or sheets of lead or reheated silver, place your bronze medal on top and hammer it with a wood mallet.\n\n",
  activities: ["stamping"],
  purposes: ["making"],
  id: 83
});
index.addDoc({
  title: "Softening horn",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n\n\nSoftening horn\n\nThose who mount acou Agnus Deis and make circles from horn for certain little boxes soften the said circles by soaking them in hot water and then shape them on a round or oval—shaped triblet.\n\n",
  activities: ["preparing materials"],
  purposes: ["observation"],
  id: 84
});
index.addDoc({
  title: "Toothache",
  author: null,
  layout: "narrative",
  content: "- - - - - 015v - - - - - \n\n\nToothache\n\nSome put a clove of garlic in the ear on the side of the aching tooth, and after two or three hours they feel better. Others put in their nostril, on the same side as the tooth that hurts, some green skin scraped from the stem of bisaube, namely that which is under the grey one that looks like a vine.\n\n",
  activities: ["medicinal"],
  purposes: ["observation"],
  id: 85
});
index.addDoc({
  title: "Black color for dyeing",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \nAnnotations:\nBlack color for dyeing\n \n\nBlack color for dyeing\n\nTake lye made from quicklime and white lead, mix and leave to soak and you will have a dark brown dye, and reiterating the same you will make black. Try other colours with the lye made of lime.\n\n",
  activities: [],
  purposes: ["making"],
  id: 86
});
index.addDoc({
  title: "Against nose bleeding and for dyeing",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \nAnnotations:\nDragon’s Blood, fol. 29v, 38v (Reich)\n \n\nAgainst nose bleeding and for dyeing\n\nPound some of the kind of vinete or lapathum acutum that is red—veined, which is called dragon’s blood, and apply it on the bleeding person’s forehead. This herb is a strong dye &amp; makes beautiful violet.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 87
});
index.addDoc({
  title: "Beautiful artichokes",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n\nBeautiful artichokes\n\nYou need to trim them every year so that only one stem is left, and water them a lot. Also plant some more every year, because the second year they will bear very beautiful fruits.\n\n",
  activities: [],
  purposes: ["advice","observation"],
  id: 88
});
index.addDoc({
  title: "Planting trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n\nPlanting trees\n\nIt is said that rarely a tree planted on Saint Paul’s day will fail to take. To cover the young shoots, oxen manure is very appropriate, for it doesn’t come apart in the rain like earth.\n\n",
  activities: [],
  purposes: ["advice","observation"],
  id: 89
});
index.addDoc({
  title: "Merchants",
  author: null,
  layout: "narrative",
  content: "- - - - - 038v - - - - - \n\nMerchants\n\nThose who retail velvet and other materials do not keep double—entry books because they sell in small quantities and recording these details would be too much effort. They only have their sales book and account books. But those who sell in bulk and those who traffic in woad have a double—entry book.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 90
});
index.addDoc({
  title: "Goldsmith",
  author: null,
  layout: "narrative",
  content: "- - - - - 039r - - - - - \n\nGoldsmith\n\nThey bind silver filings with saltpeter which refines it &amp; does not make it brittle. But gold filings are bound with borax or, to save the borax, with lead, which refines the gold &amp; softens it, for the saltpeter would make it brittle, which it does not do to silver. This is why, in order to save, goldsmiths use it to bind it in order to save borax, which costs viii sols per ounce &amp; saltpeter costs x sols per lb. When goldsmiths have thus bound their silver filings with salpeter, a red enamel vitrifies at the bottom of the crucible. I do not know if the copper mixed in with the silver is the cause for this. Try for enamel.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 91
});
index.addDoc({
  title: "Dyers’ woad",
  author: null,
  layout: "narrative",
  content: "- - - - - 039r - - - - - \n\nDyers’ woad\n\nIt is grown in Lauragais where the deep soil is so fertile that every year wheat was grown there, it would lie flat for being too vigorous. This is why dyers’ woad and wheat are grown there alternately. For cultivating dyers’ woad, the soil is ploughed with iron shovels, as gardeners do. Next, it is harrowed with rakes, &amp; broken up finely as for sowing some kitchen herbs. It is commonly sown on Saint Anthony’s day in January. Eight harvests are made. The first ones are better. The best dyers’ woad of Lauragais is the one from Carmail &amp; the one from Auragne. And sometimes the dyers’ woad is good in one field &amp; in the one close by it will hardly have worth. The goodness of the dyers’ woad can be recognized when put in the mouth it gives the taste of vinegar, or when crumbling &amp; breaking it, it has some mold—like veins which are as it were golden or silver. It is assayed in the dyers’ vat, and to fill a vat with it, six bales of it are needed. There several flocks of wool are dyed, and if it dyes fifteen times, it is said to be worth 15 florins, if it gives xx dyings, xx florins. The good kind dyes up to 30 times &amp; commonly up to xxv or 26.\n\n",
  activities: [],
  purposes: ["observation","making"],
  id: 92
});
index.addDoc({
  title: "Enamel",
  author: null,
  layout: "narrative",
  content: "- - - - - 039v - - - - - \nAnnotations:\nEsmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi)\n \n\nEnamel\n\nEnamel takes more readily on copper than on silver. It is true that the cut needs to be well hollowed out &amp; rough. Azure in body &amp; the red called gules, white enamel &amp; thick green take very well. Having enamelled, one gilds the feuillages of the cutting[illegible]. Copper has a similar hardness when cut as pure silver or pistolet gold.\n\n",
  activities: [],
  purposes: ["application","observation"],
  id: 93
});
index.addDoc({
  title: "Colors for illumination on glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 039v - - - - - \n\nColors for illumination on glass\n\nIn order that your turpentine colors shall not run, &amp; become unified, mix in a little larme de mastic together with the turpentine.\n\n",
  activities: [],
  purposes: ["application","observation"],
  id: 94
});
index.addDoc({
  title: "Tracing a history on glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 039v - - - - - \nAnnotations:\nTracing a history on glass, fol. 39v (Zhao)\n \n\nTracing a history on glass\n\nIf you want to trace a history in intaglio on glass, you can do so in different ways. Place your glass pane on, as thin as possible, over the printed history, &amp; having cleaned the glass well with lye &amp; ashes so that it is not at all greasy, trace over the lines visible to you with oily black or scales black with a pinceau, if you want to paint with colors in the manner of glaziers, who spread a wash of scales black all over their glass pane &amp; then scratch &amp; uncover what they want to coat with color, leaving that which is necessary for shading. But if you want to make gilt histories on glass with a background of colors, which imitates the basse—taille of goldsmiths, gild the whole glass pane with gum water or garlic juice or fig—tree milk. Then moisten your printed history with two wet linen cloths &amp; lay it down on the gilt glass. Then with a pin mounted on a small stick, follow the lines of your history as if you wished to pounce it, &amp; thus you shall vividly trace it on the gilding of the glass. &amp; next you shall uncover the background &amp; what needs to be empty with a quite pointy steel awl, &amp; and neatly follow once more the lines &amp; accomplish your work &amp; fashion your faces &amp; flesh tones in pounded silver; then fill the background with azur d’esmail or verdigris or fine laque platte, tempered with clear turpentine, mixed with a little larme de mastic if you want the colors to be more unified &amp; not to run. Next, apply on the back of the glass &amp; over the colors a white tin sheet. And once this is dry, you can cover the tin sheet of with color to hide your secret. The tin sheet gives light to the colors. Thus you will be able to paint without being\n- - - - - 040r - - - - - \nbeing at all expert in painting. If your glass pane is bulging as if taken from the belly of a jar, it will show better. When you apply your turpentine colors to your glass panes, first place them on a hot tile &amp;, once they are hot, spread your colors &amp; leave it a while on the tile, then lay down your tin sheet.\n\n",
  activities: [],
  purposes: ["making","application","observation"],
  id: 95
});
index.addDoc({
  title: "Dye",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n\nDye\n\nSome take the root of Lapathium acutum maius, which looks like monk’s—rhubarb or sorrel, &amp; using the root, which is yellow in summer, they dye threads &amp; similar things.\n\n",
  activities: [],
  purposes: ["making"],
  id: 96
});
index.addDoc({
  title: "Vinegar",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n\nVinegar\n\nOne takes for granted that jec heat red—hot the mineral salt that looks like marble &amp; that is called in Catalonia &amp; at the border of Spain Cardana saltC, &amp; throwing it in the red hot or quite hot in wine, it turns it into very good vinegar. Some make it with water poured on pomace soured after being pressed by grape pickers, but it will not keep &amp; spoils in heat &amp; thunder storms.\n\n",
  activities: [],
  purposes: ["making","observation"],
  id: 97
});
index.addDoc({
  title: "Silver gilt buttons",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n\nSilver gilt buttons\n\nBecause silver gilt does not fear fire, it is cut into lozenges flat[illegible] on one side, then they are joined together in a star shape with a paste of crushed enamel, which is then melted &amp; the enamel is gilt with gold leaf and then reheated.\n\n",
  activities: [],
  purposes: ["observation","application"],
  id: 98
});
index.addDoc({
  title: "Grottos",
  author: null,
  layout: "narrative",
  content: "- - - - - 040r - - - - - \n\nGrottos\n\nTo fill some empty place that cannot be laden with hanging rocks, one puts a piece of thick parchment close to the fire, which shrinks &amp; crumples. Then one paints it with distemper, then in oil. Next one affixes it.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 99
});
index.addDoc({
  title: "Latten and calamine",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \n\nLatten and calamine\n\nFounders do not melt latten in a bellow furnace but in crucibles, for in a bellow furnace and amid the charcoals, the calamine would disappear.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 100
});
index.addDoc({
  title: "Metal",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \n\nMetal\n\nTin needs to be pure because if there is any lead, it will go up in smoke whilst melting. Alloyed tin withstands fire for a long time but in ashes it will come apart.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 101
});
index.addDoc({
  title: "Aqua fortis",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \n\nAqua fortis\n\nIf your retort is well luted you should not surround it with ashes, which would only prevent the vapors from escaping properly. But when, towards the end, you fire it intensely, surround it with charcoals lit elsewhere beforehand, such as those in the furnace should be, so they do not crackle or smoke. Place said lit charcoals around the body of the retort, not close to the neck, which does not need to be heated as much. The top grate, on which you place your retort, should be sufficiently far, one dour or half a foot, from the bottom grate where the charcoal is placed, since thus you will not waste as much aqua fortis.\n\n",
  activities: [],
  purposes: ["advice","observation"],
  id: 102
});
index.addDoc({
  title: "Cross of the commanders of Malta",
  author: null,
  layout: "narrative",
  content: "- - - - - 040v - - - - - \nAnnotations:\nRouge Clair, fol. 40v (Chang, Shi)\n \n\nCross of the commanders of Malta\n\nThe fine rouge clair which is the background of the white enamel cross is of fine dragon’s blood drops soaked with eau de vie or Indian laque plate, which I believe is made in Flanders, distempered with clear turpentine and mastic drops and applied on a silver leaf, not the one used by painters but a thicker one, which is burnished by the makers of foil backings for gemstones or by goldsmiths, and that gives it its fine brilliance.\n\n",
  activities: [],
  purposes: ["observation","application"],
  id: 103
});
index.addDoc({
  title: "Garden lily",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n\nGarden lily\n\nIf it is broken during its first blossom, it will not grow or bloom until the following year, and I believe it is the same for bulbous flowers [in general].\n\n",
  activities: [],
  purposes: ["observation"],
  id: 104
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n\nSand\n\nThe sand to be used for casting should be chosen such that it is not too dry for it won’t hold together, nor should it be too fat. And although you find some in nature, however, it is not everywhere. And if you are in a place where it is not found, you can put it together yourself but not from fat earth, because the sand should contain none at all, since it makes it porous. But you can make it bind by mixing it with brick well ground on marble, or plaster or calcinated alabaster or something similar, or the burned marrow of ox horn or burned asphalt. If you grind it quite finely on porphyry, it binds better &amp; then you can burn it with asphalt or mix it with a quarter of tripoli. Make sure no bread falls into your sand because this makes it porous.\n\n\n  at left middle margin of folio 041r\n\n  Try mixing in soot black.\n\n\n",
  activities: [],
  purposes: ["making","observation","advice"],
  id: 105
});
index.addDoc({
  title: "Ducks",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n\nDucks\n\nYoung domestic ones do not grow for a month after hatching but remain in this state. But after, they soon grow up, even if they go into the water. They are fed boiled millet grains, to which are added crumbled bread and finely chopped lettuce.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 106
});
index.addDoc({
  title: "Casting earth for founders",
  author: null,
  layout: "narrative",
  content: "- - - - - 041r - - - - - \n\nCasting earth for founders\n\nIt becomes fat by being beaten and also mixed with horse manure. Potter’s earth would be too soft and would break and wouldn’t resist the fire. But [your soil] has to be mixed with one half of sand and a quarter or a fifth of horse manure. And leave it to dry, then reduce it to powder, then put it through a sieve to make it fine and free from gravel, which would prevent it from casting cleanly. The manure makes the earth more amenable [to casting] &amp; easier to work with, but it should be free of straw and other things. And when the earth is very fat, you have to add more sand and more manure. But one does find fat varieties of earth [that are] naturally mixed with sand. If they are not, make them so artificially. One should always cook the soils again before casting.\n\n",
  activities: [],
  purposes: ["making","observation","advice"],
  id: 107
});
index.addDoc({
  title: "Glassmaker's black",
  author: null,
  layout: "narrative",
  content: "- - - - - 041v - - - - - \n\nGlassmaker’s black\n\nFilings of iron taken from bars that have been in the fire for a long time, which are thick, are much better than the common soft ones that fall under the anvil in the forge, because they imitate niello. To said black, described elsewhere, some people add a little minium.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 108
});
index.addDoc({
  title: "Sheared ewes",
  author: null,
  layout: "narrative",
  content: "- - - - - 041v - - - - - \n\nSheared ewes\n\nIf the shearer wounds them at some point, he applies the very excrement of the ewe on it. When they are fat, they are easier to shear and do not get hurt as easily.\n\n\n  at left middle margin of folio 041v\n\n  If the shearer wants to ‘viscorter’ them, that is to castrate them as [they] are one or two years old, he must not have been with his wife, because this would cause the sheep to die.\n\n\n",
  activities: [],
  purposes: ["observation"],
  id: 109
});
index.addDoc({
  title: "Colors and gilt on glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 041v - - - - - \nAnnotations:\nColors and gilt on glass\n \n\nColors and gilt on glass\n\nYou should not put as strong gummed water on glass for the silver layer as for the gold layer because a silver leaf is twice as strong as gold leaf. Also, silver is harder and therefore does not scratch as easily. And if gum was not a little [too] strong for silver, it would not crack so clearly. When you work, the exhalation of your breath humidifies the leaf lying on the glass, and therefore it would be good, when working, to heat it up a few times. You have to very thoroughly wash what you want to be empty and used as a surface painted with colors, because if it is not really clean of the gum’s grease and viscosity, and of other things, the colors will not be so clear on it. To advance your work you can smooth with a pumice stone, or [you can do this] to better lay down gum and leaf on a cut paper. This way, you will have to do very little repairs. If you want a gold color there without gold, mix soaked dried saffron with a little bit of massicot.\n\n",
  activities: [],
  purposes: ["making","application"],
  id: 110
});
index.addDoc({
  title: "Founder",
  author: null,
  layout: "narrative",
  content: "- - - - - 042r - - - - - \n\nFounder\n\nThe clay mould should be baked until sometimes it becomes red hot, since otherwise the metal would be unstable and be no good at all. Similarly, the inner core must be baked very hard, and mixed with charcoal powder.\n\n",
  activities: [],
  purposes: ["making","advice","observation"],
  id: 111
});
index.addDoc({
  title: "Wax for seals and impressions",
  author: null,
  layout: "narrative",
  content: "- - - - - 042r - - - - - \n\nWax for seals and impressions\n\nFor large wax seals, you should always have tepid water handy, and keep your wax in it. Yet previously you should have kneaded it with your hands, so as to make it very smooth and even, for otherwise the water would penetrate the wax and prevent it from holding together. Afterwards, you can imprint whatever you want. Cover the wax in three or four sheets of paper, and, with a round and smooth stick similar to a pestle, roll it out as if to polish it. It will then stick to the paper, helping you to take it off from the seal. In this way you will imprint better than if you were dripping molten wax. You can carve figures and color them in gold, in silver, or paint them with couleurs à vernis, and transfer them onto a glass pane painted with couleurs à tourmentine &amp; mastic. And if you want to apply these designs by inlaying, use gum ammoniacum mixed with vinegar, and it will stick well.\n\n",
  activities: [],
  purposes: ["advice","making"],
  id: 112
});
index.addDoc({
  title: "Casting in plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 042r - - - - - \n\nCasting in plaster\n\nMelt some wax, and with a big brush coat it over the relief of which you want to have the cave, as if you wanted to paint it. And a light crust will be formed upon which you will cast plaster, to give it shape and consistency. Afterwards, in the cave of the wax, cast your plaster as well to get the relief, and it will come out very easily, because of the wax. This is done more often for large pieces in haut relief than for others.\n\n",
  activities: [],
  purposes: ["making"],
  id: 113
});
index.addDoc({
  title: "Pounce for scratching satin",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n\nPounce for scratching satin\n\nAfter pouncing with crushed flour or chalk, in order that the dots of the pounce not be erased, go over the trace with egg white beaten with the milk or bark of a fig tree, which will immediately make the egg white clear up like water, without becoming opaque, it will maintain the trace that you will go over again and scratch with a piece of glass or penknife.\n\n",
  activities: [],
  purposes: ["making","application"],
  id: 114
});
index.addDoc({
  title: "Canvas for oil painting without breaking",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n\nCanvas for oil painting without breaking\n\nIn order that your oil painting be not broken or ruined as you bend it, make your (preparatory) layer with honeyhoney, a bit of oil, water, and flour.\n\n",
  activities: [],
  purposes: ["advice","making"],
  id: 115
});
index.addDoc({
  title: "Oil painting on taffeta",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \nAnnotations:\nOil Painting on Taffeta\n \n- - - - - 042v - - - - - \n\nOil painting on taffeta\n\nIn order that the oil not run, make your first layer with honey, water of alum, and essence of amidin.\n\n",
  activities: [],
  purposes: ["advice","application"],
  id: 116
});
index.addDoc({
  title: "Casting sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n\nCasting sand\n\nThe key is to grind it well upon marble, and that it be extremely fine; mix in a bit of calcined alabaster.\n\n",
  activities: [],
  purposes: ["advice","observation"],
  id: 117
});
index.addDoc({
  title: "For decorating a painting",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n\nFor decorating a painting\n\nGo over the lines with lacquer ground together with olive oil, which will not dry out.\n\n",
  activities: [],
  purposes: ["application"],
  id: 118
});
index.addDoc({
  title: "White varnish on plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 042v - - - - - \n\nWhite varnish on plaster\n\nPut down two or three layers of white glue for painting. Afterwards, varnish with varnish of sandarac, aspic oil, and a bit of mastic. Put it into a vessel at night, everything ground well together without fire, which would make it turn yellow. Then, with a paintbrush, it becomes dry immediately. Filter the oil that will have absorbed the substance.\n\n",
  activities: [],
  purposes: ["making","application","advice"],
  id: 119
});
index.addDoc({
  title: "Mericoton and pavis",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n\nMericoton and pavis\n\nOne should graft them before Christmas so that they will not freeze too much.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 120
});
index.addDoc({
  title: "White bronzing on plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n\nWhite bronzing on plaster\n\nOne must apply four layers of painters’ distemper glue onto the plaster portrait, leaving one layer to dry at a time. Then apply gently some burnt English point ground on a marble slab, or some lead burnt, ground and distempered with a bit of gum or glue. When dry, rub gently with a little cotton and the plaster portrait will look like lead. Others grind minium with quicksilver.\n\n",
  activities: [],
  purposes: [],
  id: 121
});
index.addDoc({
  title: "Purpurine",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n\nPurpurine\n\nTake half an ounce of soft tin, melt it in a spoon. Once it is melted, throw in an ℥ of ☿, mix together. Once they are cold, grind on a porphyry slab. Then take an ℥ of sal ammoniac and an ℥ of the yellowest sulfur that may be found, grind both. And then mix very well all the aforementioned materials. Then put all together into a glass sublimatorium. Hold this over a small fire for an hour, and for an hour over a stronger fire, and for an hour over a very strong fire, and it will be ready. Then, to use it, apply resin black with the glue used by painters to paint, two or three times, until it is quite black. Then apply a bit of varnish. Once it is dry, apply the purpurine dry with a finger where you want. The more you apply, the finer it will look. Then, if you like, you can apply varnish on top.\n\n",
  activities: [],
  purposes: ["making"],
  id: 122
});
index.addDoc({
  title: "White bronzing",
  author: null,
  layout: "narrative",
  content: "- - - - - 043r - - - - - \n\nWhite bronzing\n\nApply some blackblack with glue on the medal, as described above, and then varnish it. Once dry, rub it with English point using a brush or your finger. The said rubbed point embellishes lead medals.\n\n",
  activities: [],
  purposes: ["application","observation"],
  id: 123
});
index.addDoc({
  title: "Varied and transmuted wine",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \nAnnotations:\nSleight-of-hand tricks\n \n\nVaried and transmuted wine\n\nGrate Brazilwood very fine, let it soak for one or two hours in clear water. Then take this tinted water and add some clear water and you will make wine as clear as you like. If you please, put a drop of juice of lemon or of orange in it and it will immediately become white. You can drink it without danger.\n\n",
  activities: [],
  purposes: ["advice","observation"],
  id: 124
});
index.addDoc({
  title: "Pearls",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \n\nPearls\n\nIt is said that pulverised talc blown into a lamp makes them so.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 125
});
index.addDoc({
  title: "Arquebusier",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \n\nArquebusier\n\nTo shoot your arquebus precisely the end of the breech must come precisely on the edge of the light, because like this the powder catches [fire] and burns all at once without blowing and has more strength and does not recoil. On the contrary, if the breech is made hollow, as they commonly are, the powder catches more quickly in this place, makes it recoil, and blows. This is clearly shown [by] a arquebus with a chamber which recoils more than another. And since the cannon is bigger at the breech than at the muzzle the sights are also uneven, because that at the breech is higher than that at the muzzle. Additionally, the thickness of the cannon is greater than the caliber by about one line, and the sight by another. It would therefore be necessary to either make the cannon all of one size or to raise the barrel from the end and towards the muzzle, and push it in and lower towards the breech. The weight of the powder must be one third of the [weight of the] bullet.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 126
});
index.addDoc({
  title: "Hail shot for the arquebus",
  author: null,
  layout: "narrative",
  content: "- - - - - 043v - - - - - \n\nHail shot for the arquebus\n\nIf you want that it stays together put a piece of felt or leather or paper on it, depending on the distance, and let the piece be made with a form precisely cut depending on the caliber of the arquebus.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 127
});
index.addDoc({
  title: "The reach of an arquebuse",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n\nThe reach of an arquebuse\n\nThe proportion of a fowling piece is: 4 king’s feet long and the bullet weights xviii pennyweights, the expulsion vi pennyweight of powder, its range iiii—by—xx pans and 3 and a half feet and two thumbs and around a line, which is the Paris aulne. The medium arquebus, which is the usual one and the easiest, admits xv pennyweight of bullet, v pennyweight of powder &amp; reaches lx paces.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 128
});
index.addDoc({
  title: "Pewtermaker",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n\nPewtermaker\n\nThey mix viii or ten pounds of lead for each hundredweight of tin in the cities that have regulated guilds. But elsewhere, they add as much as they can. One also uses ii. lb. of estaim de glace to bind it and three lb. of broken  brass, that is, copper scrap that kettlemakers make. This makes the vessel more reverberant and it is not as breakable.\n\nThis pewter is called ordinary pewter.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 129
});
index.addDoc({
  title: "Arquebuse",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n\nArquebuse\n\nTo keep it from backfiring, clean your arquebus every eight days, and rub it with oil, and when you draw out, wet some linen in oil &amp; put it in instead of paper.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 130
});
index.addDoc({
  title: "Lacquer",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n\nLacquer\n\nTo test it, soak it and apply it to paper, and if one or two hours later it has not died at all, it’s fine and well—done.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 131
});
index.addDoc({
  title: "Dyes from flowers",
  author: null,
  layout: "narrative",
  content: "- - - - - 044r - - - - - \n\nDyes from flowers\n\nRed poppies that grow amongst wheat make a very beautiful columbine on white leather. The boufain makes a very beautiful blue. An herb which grows in hedges, which has a stem similar to flax, long and broad leaves like little bugloss, which has a violet flower verging on blue and looks like the fleur de lys, makes a quite beautiful turquin, better than azure. Another columbine flower of the shape and size of the bugloss flower, which has a leaf like that of the pansy, also makes a very beautiful turquin. It grows in wheat in light earth.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 132
});
index.addDoc({
  title: "Horsehair sieves",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \nAnnotations:\nFine raw silk sieves and horse hair sieves\n \n\nHorsehair sieves\n\nThey are made often in Normandy with horsetail hairy that they clean with some washing water because they pick them out with their mouth and separate short and broken ones. They do not make the thread longer than the sieve and it is round. They attach the black or white hair at the two edges of the thread, according to the piece they want to make. And the thread is woven above and below like any other fabric. And passing a small flat stick of ii or three fingers wide between two, they pass between after two bits of hair at each step strike and weave with three steps. The entire sieve is made of xvii bits of hair. They sell them by dozens and each xxx sols. They bring them to Toulouse to send them then to Spain and there, they exchange it with silk.\n\n",
  activities: [],
  purposes: ["observation","making"],
  id: 133
});
index.addDoc({
  title: "Excellent water against the pest by the Master of Montorsin",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \n\nExcellent water against the pest by the Master of Montorsin\n\nTake some theriac rue, dittany and good vinegar, put the whole in a glass bottle and leave it half—open and well attached. And put it in a bath for three or 4 days. Then take some of your brew from its container when you need it and pour some, when necessary, on a red hot tile and receive the vapor and also perfume your clothes. This is a very precious and proved secret.\n\n",
  activities: [],
  purposes: ["making","advice"],
  id: 134
});
index.addDoc({
  title: "White soporific oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \n\nWhite soporific oil\n\nHave x or 12 Mandragore apples, put them in quarters together with some olive oil in a glass bottle which you will cook in a bain marie for two days and your oil will turn white with which you rub the sole of your feet and you will quickly feel sleepy.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 135
});
index.addDoc({
  title: "Stucco",
  author: null,
  layout: "narrative",
  content: "- - - - - 044v - - - - - \n\nStucco\n\nTo stick stones, some do not use gem and pitch black rosin because it is too greasy, but they use as much rosin and sulphur and the same quantity of wax and then add finely ground brick. Others some white chalk and crushed and powdered and sieved white stone.\n\n",
  activities: [],
  purposes: ["application","advice"],
  id: 136
});
index.addDoc({
  title: "Loading a pellet arquebus",
  author: null,
  layout: "narrative",
  content: "- - - - - 045r - - - - - \n\nLoading a pellet arquebus\n\n\n  Figure\nat top center margin of folio 045r\n\n\n\nIt is necessary to make a wooden pipe 4 or 5 fingers wide that is perfectly hollow, according to the open end of your barrel, of the form represented in A. Then, having cut some paper, which has to be as strong as that of large printed books, in the form indicated in D and as wide as you want your cartridge to be long, wrap the paper around the baton B and at the top, where the pointed tip F will be around the aforementioned paper, and the cartridge will be formed. But, in order to make the bottom more uniform, put it into pipe A, then introduce baton B and, in the other end of the pipe, which is marked G, insert baton C and pack so as to compact and press the folded tip of your cartridge, then take it out, and the charge in this, put three or four drageons or larmes. Then, with a punch, marked E, of the same caliber of your arquebus or pistol, punch round pieces on cardboard or felt or waxed cloth, and put this round piece into your cartridge, and push it until the drageons with the baton B, the more drageons, 3 or 4, then a round piece. And continue like that until the cartridge is full, the put it into the arquebus. If you want your pellet to scatter earlier, make round pieces out of paper. If you want it to reach further without scattering, make the piece out of cardboard. If you want it to reach even further, make the round piece out of waxed cloth, or either of leather or felt, and a piece of waxed cloth on the top. And if you make the cartridge in part with waxed cloth or waxed paper, it will reach one hundred paces and will make a big hole, and the pellet, barely scattering, will produce a big opening. But if you make your cartridge with waxed cloth or a material stronger than paper, it cannot be so long, with the cardboard tip being like in D, because it is enough if it wrapped around twice. In such a way, the pellet barely scatters and makes a big hole in porte—corps armor or others.\n\n",
  activities: [],
  purposes: ["advice","observation"],
  id: 137
});
index.addDoc({
  title: "Loading an arquebus",
  author: null,
  layout: "narrative",
  content: "- - - - - 045v - - - - - \n\nLoading an arquebus\n\nYou must have different charges depending to the range that you want your arquebus to have, all of which have a screw on the end that fits in the nut of the the said arquebus’ ramrod. So when you put the powderpowder in the charge, which is in the nut, hold the ramrod upright. And raising your arquebus up, insert the said ramrod until the charge is in the bottom of the arquebus, then straighten the arquebus, the mouth of the barrel up, and remove the ramrod. That way, your powder will now be entirely in the breech without any grain or dust that lines the sides of the arquebus, which always has some grime in the chamber. That way it will not recoil, and you will shoot more true.\n\n\n  Figure\nat left middle margin of folio 045v\n\n\n\n",
  activities: [],
  purposes: ["advice"],
  id: 138
});
index.addDoc({
  title: "How to adjust a bent gun barrel",
  author: null,
  layout: "narrative",
  content: "- - - - - 045v - - - - - \n\nHow to adjust a bent gun barrel\n\nTake off the breech and put it [the barrel] on a well—leveled table set perpendicular to the floor, and insert a very smooth string without knots, on each end of which there is a plumb hanging from each side. Then look in the barrel along the string, and if it does not touch equally all over, note the place where it does not touch and hit it with a hammer on the exterior of this this side in the same place, and this will make it straight. Do this all around it.\n\n",
  activities: [],
  purposes: [],
  id: 139
});
index.addDoc({
  title: "Oil of sulfur for the teeth",
  author: null,
  layout: "narrative",
  content: "- - - - - 046r - - - - - \n\n\nOil of sulfur for the teeth\n\nSome people whiten them with compositions of eau forte, however one says that this corrupts them afterwards and causes them to blacken. One says that oil of sulfur is excellent, but it needs to be applied in this way: take as much clove oil as can be held in a nutshell, as much rose honey, and seven or eight drops of oil of sulfur, and put it all together, and after having cleaned the teeth with a small burin, touch them lightly with a bit of cotton dipped in the aforementioned oils and leave it for a little while, then spit it out or rinse the mouth with tepid water, and repeat two or three times. Oil of sulfur penetrates and is corrosive, but the clove oil and the rose honey correct it. Therefore use it with discretion.\n\n",
  activities: ["whitening"],
  purposes: ["adivce","application"],
  id: 140
});
index.addDoc({
  title: "Wheat oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 046r - - - - - \n\nWheat oil\n\nApplying it to hair makes it fall out and keeps it from growing back.\n\n",
  activities: [],
  purposes: ["adivce","application"],
  id: 141
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 046r - - - - - \nAgainst the falling sickness \nHave fresh crow eggs, either four or five, and over the space of four or five mornings cook one, and having mixed in it a bit of powdered gentian and a drop of oil of sulfur, give it to the patient. It is believed that the pain will not return.\n\n",
  activities: [],
  purposes: ["adivce","application"],
  id: 142
});
index.addDoc({
  title: "Against cold gouts",
  author: null,
  layout: "narrative",
  content: "- - - - - 046r - - - - - \n\nAgainst cold gouts\n\nPut Guaiac oil together with oil of sulfur and apply.\n\n",
  activities: [],
  purposes: ["adivce"],
  id: 143
});
index.addDoc({
  title: "Tree flowers",
  author: null,
  layout: "narrative",
  content: "- - - - - 046r - - - - - \n\nTree flowers\n\nThose that are seen with every new ☾ are hardly profitable. Only two buds need to be left on the graft.\n\n",
  activities: [],
  purposes: ["adivce"],
  id: 144
});
index.addDoc({
  title: "Oil of sulfur for the writer",
  author: null,
  layout: "narrative",
  content: "- - - - - 046v - - - - - \n\n\nOil of sulfur for the writer\n\nIf the writer wants to quickly clean his quill of the thickness of the ink which dried on it, it only needs to be dipped in oil of sulfur, and immediately it will be white and clean. Urb.\n\n",
  activities: ["cleaning"],
  purposes: ["adivce","application"],
  id: 145
});
index.addDoc({
  title: "Shoemaker",
  author: null,
  layout: "narrative",
  content: "- - - - - 046v - - - - - \n\n\nShoemaker\n\nIf he wants to do some tanned work on black leather shoes, he can dip in oil of sulfur a writing quill and paint with it what he would like on shoes, boots, and colets. And he will obtain a reddish color which no effort will erase. Urb.\n\n",
  activities: ["tanning"],
  purposes: ["adivce","application"],
  id: 146
});
index.addDoc({
  title: "Erasing a letter",
  author: null,
  layout: "narrative",
  content: "- - - - - 046v - - - - - \n\n\nErasing a letter\n\nDip a writing quill in fresh and good oil of sulfur and, thus, retrace all the letters with the dipped quill and they will disappear from the parchment. Urb.\n\n",
  activities: ["erasing"],
  purposes: ["adivce","application"],
  id: 147
});
index.addDoc({
  title: "Writing without ink",
  author: null,
  layout: "narrative",
  content: "- - - - - 046v - - - - - \n\n\nWriting without ink\n\nWrite with oil of sulfur and heat [it], and the letter will become as black as this one. Urb.\n\n",
  activities: ["writing"],
  purposes: ["adivce","application"],
  id: 148
});
index.addDoc({
  title: "Making à jour letters in paper and other work",
  author: null,
  layout: "narrative",
  content: "- - - - - 046v - - - - - \n\nMaking à jour letters in paper and other work\n\nIf you write or trace something on the paper and heat it soon after, and immediately it will become black; then by rubbing with a sponge, the letter will be cut out because it will be burned. Urb. Or retrace the letter with a wiped quill.\n\n",
  activities: [],
  purposes: ["adivce"],
  id: 149
});
index.addDoc({
  title: "Making someone's boots burn",
  author: null,
  layout: "narrative",
  content: "- - - - - 046v - - - - - \n\nMaking someone’s boots burn\n\nRub the abovementioned oil, and as he warms himself they will burn without a flame.Urb.\n\n",
  activities: [],
  purposes: ["adivce"],
  id: 150
});
index.addDoc({
  title: "Black letters on stone",
  author: null,
  layout: "narrative",
  content: "- - - - - 046v - - - - - \n\nBlack letters on stone\n\nThe same oil on letters engraved in stone, once heated, becomes black and penetrates.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 151
});
index.addDoc({
  title: "For teeth",
  author: null,
  layout: "narrative",
  content: "- - - - - 047r - - - - - \n\nFor teeth\n\nSal ammoniac i \n&gt; Figure\n&gt; \n, rock salt 1 \n&gt; Figure\n&gt; \n, alum half \n&gt; Figure\n&gt; \n. Make water with the cornue, and no matter how little of it you touch the tooth with, the tartar and blackness will go away. It is true that it has a bad odor, but you can mix it with rose honey and a little clove oil or cinnamon oil.\n\n",
  activities: [],
  purposes: ["adivce"],
  id: 152
});
index.addDoc({
  title: "Antimony oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 047r - - - - - \n\nAntimony oil\n\nIt yellows quite strongly, even silver, if you put it on it once heated.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 153
});
index.addDoc({
  title: "Against falling sickness or dizziness",
  author: null,
  layout: "narrative",
  content: "- - - - - 047r - - - - - \n\nAgainst falling sickness or dizziness\n\nWear, hung to your collar, some root of paeonia which has been plucked when the moon is waning.\n\n",
  activities: [],
  purposes: ["application"],
  id: 154
});
index.addDoc({
  title: "Crucibles",
  author: null,
  layout: "narrative",
  content: "- - - - - 047r - - - - - \n\nCrucibles\n\nThose from Bayonne, which seem to be made of grès, are better because they last, without comparison, longer than others. And since they are not very thick, one wastes less charcoal to melt gold and silver because they are quickly heated. They do not absorb silver as much as others, and for this reason, there is not much laveure to be found in them. They are also not as likely to fall over as others that have a flat bottom.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 155
});
index.addDoc({
  title: "Against diarrhea and dysentery",
  author: null,
  layout: "narrative",
  content: "- - - - - 047r - - - - - \n\nAgainst diarrhea and dysentery\n\nAgainst diarrhea, it is good to use preserve of symphytum, also [known as] consolida maior. And if it is against dysentery, you can rub the temples, the hollow of the hands, and the sole of the feet with wax oil and take a drop of two of it with a spoonful of broth. The root of consolida maior, crushed and put between pieces cuts in a piece of beef, then boiled, rejoins them, as it is said.\n\n",
  activities: [],
  purposes: ["application"],
  id: 156
});
index.addDoc({
  title: "A beverage which tastes like wine",
  author: null,
  layout: "narrative",
  content: "- - - - - 047v - - - - - \n\nA beverage which tastes like wine\n\nTake tartar from large vessels, dilute it in water, and it will taste like wine.\n\n",
  activities: [],
  purposes: ["making"],
  id: 157
});
index.addDoc({
  title: "Melting",
  author: null,
  layout: "narrative",
  content: "- - - - - 047v - - - - - \n\n\nMelting\n\nSome to make it flow neatly, put half metal and half copper. Others take a part of potin and a part of copper latten. Others take a part of latten from candlesticks and a part of latten from a basin. And among basins, the latten from larger ones is harder than that from skillets because the material needs to be softer in order to give them such a small circumference. From the large ones, from which they take the more ample circumference, the harder material can be taken. The harder the latten, the better it flows and the neater it casts, but it must be cast very neat hot. As one wishes to cast, one puts lead on the material, which makes it flow and run and goes up in smoke and be careful that the mold does not get damaged. And if you want to cast pieces on fire, mix more rosette than latten, so that it is less brittle. The crucibles used to melt metal should be better than those used by glassmakers because glass is not as heavy as metal. And in this instance, the crucibles need to be luted with earth and crushed glass.\n\n",
  activities: ["melting"],
  purposes: ["making"],
  id: 158
});
index.addDoc({
  title: "Crucibles",
  author: null,
  layout: "narrative",
  content: "- - - - - 047v - - - - - \n\nCrucibles\n\nThose made during the winter and humid weather are not good. Those used by founders should be thick and should be coated.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 159
});
index.addDoc({
  title: "Cast",
  author: null,
  layout: "narrative",
  content: "- - - - - 047v - - - - - \n\n\nCast\n\nFinely—calcinated pumice stone casts 22 carat gold without needing repair, but it needs to be ablaze and red as the metal. And it will survive many casts.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 160
});
index.addDoc({
  title: "Founder",
  author: null,
  layout: "narrative",
  content: "- - - - - 048r - - - - - \n\nFounder\n\nThe hot [part] \n&gt; Figure\n&gt; \n A furnace to cast a large quantity of metal\n\n",
  activities: [],
  purposes: ["description"],
  id: 161
});
index.addDoc({
  title: "Curing dogs from mange",
  author: null,
  layout: "narrative",
  content: "- - - - - 048r - - - - - \n\n\nCuring dogs from mange\n\nGive them a pill of precipitate, that is to say 3, 4, or up to 5 grains, mixed with their food. Having given them one for one week, give them another seven or eight days later.\n\n",
  activities: ["curing dogs"],
  purposes: ["advice"],
  id: 162
});
index.addDoc({
  title: "Excellent mustard",
  author: null,
  layout: "narrative",
  content: "- - - - - 048r - - - - - \n\nAnnotations:\nExcellent Mustard\n \n\nExcellent mustard\n\nDry some bread in an oven, then stick cloves &amp; cinnamon into it and put it to soak in good wine. Then, being well crushed, pass everything through a cloth strainer and incorporate it with your mustard seeds.\n\n",
  activities: ["making mustard"],
  purposes: ["making"],
  id: 163
});
index.addDoc({
  title: "Keeping birds and animals",
  author: null,
  layout: "narrative",
  content: "- - - - - 048r - - - - - \n\n\nKeeping birds and animals\n\nTake a measurement from [the part of] their body that is fleshy and more susceptible to decay, with some canvas that you shall cut according to their size and width. Having filled this with cotton and stitched it, skin them. But leave the head, neck, wings and feet of birds, and head, legs, feet and tail of animals, because those dry easily. Then use that skin to dress the mold made of canvas. Small ones can be dried in an oven or covered in sel ammoniac and (?).\n\n",
  activities: ["keeping birds and animals"],
  purposes: ["advice"],
  id: 164
});
index.addDoc({
  title: "Regulus extracts",
  author: null,
  layout: "narrative",
  content: "- - - - - 048v - - - - - \n\n\nRegulus extracts\n\nTake one pound of antimony, half a pound of black soap, and half a pound of Montpellier tartar. Once it is all pulverized, you have to boil it in a varnished earthenware pot on a big fire as you stir it with a piece of wood or iron. The soap will burn off and be consumed by the fire and the rest will stay red. The quantity has to be reduced to a third. Then throw that on a tile and it will turn blackish. You will have to melt and pour that on a tile four or five times and then you will have regulin from antimony.\n\nOthers pulverise the antimony and mix it with equal quantities of saltpeter and powdered tartar and heat a pot or crucible until it is red hot, then add a little bit at a time, turning their back for fear of the smoke, and keep doing so until everything is added. They maintain the fire until everything is completely melted and melt that several times.\n\n",
  activities: ["extracting Regulus"],
  purposes: ["making"],
  id: 165
});
index.addDoc({
  title: "Lead tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 048v - - - - - \n\nLead tin\n\nThey crack if they are often melted again and thicken and burn, so that even if a salmon is made, the tin becomes thick at the bottom if it is not stirred often during casting. It is better for casting to melt some lead and some tin and to renew it each time. The antimony makes them breakable, the iced tin makes them whiter. Pewterers mix a pound of iced tin with a quintal of fine tin and two and a half or three pounds of red, mild cauldron copper, which is better than latten. There is fine and mild tin and sour tin. Pewterers cast the sour as grills to sell it better. They go better and more cleanly in stone moulds than in copper molds because copper is fat and draws the mild tin when heated. Or when casting a large work, three quarts of lead with one pound of mild tin produces a very liquid mixture which is appropriate for casting and is as shiny as a mirror. Laxunge glass lightens them. All things that lighten metals a lot and remove their thickness and natural density and make them as liquid as water make them appropriate for casting because their thickness stops them from flowing. The mild tin is more even than the sour tin, which is whiter and seems to have been polished like a mirror.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 166
});
index.addDoc({
  title: "Lead casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 049r - - - - - \n\n\nLead casting\n\nThose who cast these small items, sold in front of the churches, melt half a pound of lead on a pound of tin, and cast in a stone frame. And if they want their work [to be] whiter, they use half of tin and half of lead, but the first mixture is the best, and does not make bubbles.You have to cast it hot enough, otherwise it won’t flow. Some [people] smoke their molds with a rosin candle for neat casting. The antimony makes the matter harsh and breakable. The looking—glass tin makes the work whiter, but does not make it flow more than with tin that is correctly made with pure lead. Those who make very precise lead castings use puncheons. Tintiers cast with copper molds. It is said that one makes lead adhere to glass by using resin. Some people put a quarter of tin on lead. Glass tin makes the work stronger.\n\n",
  activities: ["lead casting"],
  purposes: ["making"],
  id: 167
});
index.addDoc({
  title: "Sand for lead casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 049r - - - - - \n\n\nSand for lead casting\n\nRye straw ashes well boiled, dried and then well sieved. alloy it with egg white. One can add copper, latten and others.\n\n",
  activities: ["making sand for lead casting"],
  purposes: ["making"],
  id: 168
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 049r - - - - - \nOther \nBurnt and calcinated pumice stone, burnt and calcined cuttlefish bones, in the same quantity; and ashes of walnut tree or vine, boiled, dried and finely sieved alloy with egg white.\n\n",
  activities: [],
  purposes: ["making"],
  id: 169
});
index.addDoc({
  title: "Pewterers",
  author: null,
  layout: "narrative",
  content: "- - - - - 049r - - - - - \n\nPewterers\n\nThey add one lb. of glass tin to one quintal of fine tin, which makes the tin ticker. There is two kinds of tin, one which flows better, like lead, while the other one is sour and can be made thicker. They are casted in thick and solid tin molds or, to cast more neatly, in chisel—engraved copper molds, or stone or earth [molds]. Latten scrapings mixed in make the tin more breakable and harder, and more difficult to work with. They cast in the very hot molds some very hot tin. They perfume their tin molds with resin candles.\n\nSour tin is often mingled with salmons, easy to cut but difficult to work with and melts if it is not mingled with the other soft one. And thus it would become leftover.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 170
});
index.addDoc({
  title: "Birds",
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n\nBirds\n\n\n  at right top margin of folio 049v\n\n  Calandra larks and all birds taken from the nest and which have not known freedom are better, because those taken with a net never sing as well. However, wild birds give much pleasure with their chanting, but they must be taken before Michaelmas, otherwise they do not live long. All get a small impostume on the fork of their tail, sometimes, which some call “gaillardise”, which makes them sick and sometimes kills them, especially calandra larks. One can tell when they are sad and do not sing. It must be pierced, not with a pin, but very delicately by turning with the tip of a quite sharp feather. The calandra lark should not be without river sand, and grey sand, a little rough, is the best. It rubs itself against it and purges itself [with it].\n\n\n",
  activities: [],
  purposes: ["observation"],
  id: 171
});
index.addDoc({
  title: "Grain of lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n\nGrain of lead\n\n\n  at middle margin of folio 049v\n\n  Take a playing card, pierced with a pin or needle, folded over on all four sides. Hold it with the end of a small split stick and, holding said stick by the other end, put your card three or 4 fingers away from the water that you will have put in a platter or a similar vessel. Then pour your lead, which should not be too hot, into the card and continually tap on the stick that holds it. And thus your lead will turn into round grains. And pass it through a large sieve to separate the larger grain from the smaller. The larger one will carry 25 to 30 paces.\n\n\n",
  activities: [],
  purposes: ["application"],
  id: 172
});
index.addDoc({
  title: "Birds",
  author: null,
  layout: "narrative",
  content: "- - - - - 049v - - - - - \n\nBirds\n\nThose that are caught at Michaelmas are good to keep, but those that are caught in March die, because they are starting to fall in love. Ortolans are fed oats all summer so that they eat without getting fat, to be more suitable for hunting and helping to catch others. Then, when one wants to fatten them to sell, one gives them millet. They sing at night. They must be caught after mid—July and before Michaelmas, because after the period when they have their young in this country, they leave as turtledoves do. Siskins should also be caught after All Saints’ Day and before Christmas, because afterwards they leave for the mountains to brood.\n\n\n  at left bottom margin of folio 049v\n\n  Ortolans are ventriloquists, so that, singing without opening their beaks, they seem to be…\n\n\n",
  activities: [],
  purposes: ["observation"],
  id: 173
});
index.addDoc({
  title: "Preserving fruit for the entire year",
  author: null,
  layout: "narrative",
  content: "- - - - - 050r - - - - - \n\nPreserving fruit for the entire year\n\n\n  at top margin of folio 050r\n\n  Take a rounded glass phial, with a large enough opening to receive cherries and plums and whatever fruit you want. Put in some hot water and leave it for two hours, and once your water is cold, throw it out and turn the phial upside down onto its opening on a perfectly even table and in a room where there is not a bit of draft or wind. Then prepare a stopper of fresh wax, wrapped in oilcloth, and adapt it precisely to the glass phial so that it will be ready to stop it once you have put in the fruit. And once you have hand—picked the fruit, only the non—rotten fruit, and on a warm and dry day, withdraw to the room, well closed so that no wind or draft can get in, and put it gently and deftly in the bottle. Then stop the bottle well with the stopper and lute it, making your lute, if you want, with some quicklime and oil, so that no water gets in. Then put your bottles into a tub full of water, in a cellar, during the summer, and in the winter put your bottles into a basket filled with some weights and lower it to the bottom of a deep well. Because in the winter the water in the tub would be too cold if your cellar is not warm enough, because the water needs to be like river water.\n\n\n\n  at left bottom margin of folio 050r\n\n  Polished cardboard of little thickness and slightly humid is appropriate. Then if you want, strengthen it with some paper glued on the reverse side.\n\n\n\n  at left bottom margin of folio 050r\n\n  Steel is applied to tools not on both sides, but underneath the part where one sharpens and whets them, and this part must be made of very soft iron.\n\n\n\n  at left bottom margin of folio 050r\n\n  Levantines refine our own steel because their country provides them with none, and they reheat it in a pot with bitumen etc.\n\n\n",
  activities: [],
  purposes: ["application"],
  id: 174
});
index.addDoc({
  title: "Molding",
  author: null,
  layout: "narrative",
  content: "- - - - - 050r - - - - - \n\nMolding\n\n\n  at top margin of folio 050r\n\n  If you want to quickly mold in demi—relief anything you come upon, fold some paper five or six times over, and place it on the medal and make sure the paper is folded around the edges of the medal so it is very secure. Next take a stick, broad at one end and with a well—dulled point at the other, and rub firmly on the paper, and retrace the lines with the point of the stick until you reckon that your impression is well done. Then, at your convenience, rub oil onto the paper lightly with a brush, and cast some tallow or wax or sulphur into it. And the paper, without burning, will give you a neat design that you can then mold in plaster or tripoli and then in lead and other metals.\n\n\n",
  activities: [],
  purposes: ["making"],
  id: 175
});
index.addDoc({
  title: "Little Birds",
  author: null,
  layout: "narrative",
  content: "- - - - - 050v - - - - - \n\nLittle Birds\n\nBuntings sing during the night if they are left in the cool open air, but they are better suited to fattening for fine tables than for singing. Chaffinches are prone to blindness, and their eyes swell at the beginning of August. Goldfinches love lettuce seeds, and you can catch them in gardens on seedy lettuce using two lime—twigs. But because such a daily fayre would be too expensive for them, they are usually fed with hemp—seed. The owsell is purged with a spider, which you must give it once a week, so that it doesn’t become too strong. The lark is purged with dry mortar, composed of lime and sand, to keep it from becoming too strong and fat. Small young birds are purged with the same dry mortar, by placing small lumps of it in their cages. The cuckoo lays its eggs in the nest of the bunting, otherwise know as verdaule. This bird is very simple—minded, I have previously let two go, which after a few days returned to their cage. To feed young goldfinches, it is necessary to crush almonds with very fine breadcrumbs, and lettuce seeds or hemp seeds. For linnets, some rapeseed.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 176
});
index.addDoc({
  title: "Hot-worked steel and files",
  author: null,
  layout: "narrative",
  content: "- - - - - 050v - - - - - \n\nHot—worked steel and files\n\nThe steel that blacksmiths and other iron workers commonly use is not refined like that from Germany or Biscay, which is hardened in a molten iron bath, but among the iron in bars which is transported by flatboat from the forges of Foix and elsewhere, some is harder, whiter and more refined than the rest, as it comes from the mine. And the workers choose it and use it like the other steel. And because it consists of common iron, they call it strong iron. But it is not of such good quality as purified steel like that from Germany and Biscaye, which is sold in small beads. Some hot—work their steel, giving it a heating and then dipping it into a large quantity of water, then forging it. And fine steel, which is brittle, does break and crumble, whereas iron can be pulled out. Thus they separate the finest steel, which with another heating they make into a mass. The Germans make their files from strong iron.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 177
});
index.addDoc({
  title: "Copying off patterns",
  author: null,
  layout: "narrative",
  content: "- - - - - 051r - - - - - \n\n\nCopying off patterns\n\nMake some soap water and with it, rub and moisten the engraved stone that you want to transfer the pattern from, then lay a white sheet of paper on it and rub strongly against it with a sharp piece or the bottom of a glass bottle and you will transfer your stamped piece. It is true that it will be on the left side, but if you apply aspic or turpentine oil on your paper, it will be stamped on the right on the other side. Then trace these lines with a paint brush or a quill, then heat the paper and the oil will evaporate and it will leave your paper white. And if you don’t want that to be known if, by chance, you borrowed the cut stone, soak the paper and the polishing that the polisher made on the back side, which distinguishes what has been made, will not be recognizable. The soap water will turn the piece yellow, but well gummed water, which has the same effect, does not do this. If you want to, for the same effect, make gummed water then, dissolve some soap in it and do as is said.\n\n",
  activities: ["copying off patterns"],
  purposes: ["making"],
  id: 178
});
index.addDoc({
  title: "Cutters of printing plates",
  author: null,
  layout: "narrative",
  content: "- - - - - 051r - - - - - \n\nCutters of printing plates\n\nTo clean the copper plates or to have used ones print better, boil them for four or five hours in a good detergent with quite used laundry water. Then make your ink with some linseed oil instead of walnut oil and press with the rollers. The copper plates are ready sooner than the wood ones, but they are not so clean to print promptly. The wood ones are tedious but would have sooner printed twenty sheets against two [sheets] of the other. To print with wood, the secret is firstly to poach, that is to say to lay the transferred pattern or drawn piece down on the wood plank and to make sure that the drawn side is stuck to the wood. Once dry, you will gently rub with a moist handkerchief the reverse side of the paper which, by being rubbed, will become so fine that what will remain will almost only be the drawn part, which, after, one should trace while cutting the pattern. You could do that to ornamented glass and glass layered with black cut pieces, to then scrape and layer your colors on the uncovered [side]. To make ink for copper plates\n- - - - - 051v - - - - - \nwhich is different from the printers’ one, you have to boil for a long time some walnut oil or, even better, some linseed oil, and after boiling for a long time, you will add garlic cloves and bread crusts to skim them and leave again to boil on big fire, then eventually you will add a measure of lampblack that you would have ground with some oil previously on the marble. And lastly you will mix everything and until you see that the plate prints well. And when you will have spread the ink, dry the plate with a white sheet of paper and do that until the paper looks clean and then print. If you dry the plates with a cloth, it would remove the ink off. Linseed oil gets thicker while boiling and becomes similar to a varnish and risks catching fire as soon as you boil it, so make sure that when you boil it, it is in an open space or where the flame cannot damage anything. Some burn some scale until it turns black and grind it with some non—boiled linseed oil or walnut oil that some consider to be better. This black is beautiful but the lamp smoke one is blacker. When you want to print, take with your finger’s end and reasonably spread some of the said black all over the plate previously cleaned with some detergent as said, then, rub it with a white sheet of paper until the paper is completely white and do not touch it with your bare hand but with a paper applied on it. And after cleaning the plate perfectly, rub again the sides and edges with a folded sheet of paper. Then, have [available] a small even table and on it a piece of felt, then a few sheets of paper and eventually the one you want to print on, moistened between two humid napkins. And on this sheet of paper, put your sheet then some more paper, and at least another piece of felt. Then put it through the rollers and you can print a dozen pieces consecutively while always charging the plate with ink and cleaning it as you did. But if you stop printing, the rest of the ink will dry out in the plate’s lines and so you will have to let it boil in detergent or urine, as said, to clean it. The rollers must not be too loose.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 179
});
index.addDoc({
  title: "The Work done in Algiers",
  author: null,
  layout: "narrative",
  content: "- - - - - 052r - - - - - \n\nThe Work done in Algiers\n\nHave a colt of three of four years and feed it on barley and straw cut in the same way as that which they use to feed horses in Spain. Let it drink water from a good fountain or river water. I do not know if it would be good sometimes to let him drink the water of sulfur springs, and to sometimes give him fenugreek or other hot foods, for the intention of the worker is to use the heat of his manure, and the climate here is cooler than that of Algiers. Keep it in a warm place and use it and make sure it loses none of its manure or urine, of which you will make a mass or two so that while one cools the other will keep its heat and be suitable to continue. Also have a large flask as thick as possible, one finger thick if it can be so made, and with a capacity of one pitcher or clay jug, and around the feast of St John place a dozen and a half chicken eggs, that is to say, the egg without the egg white and the germ. Others say sixty yolks. And with this dozen and a half of chicken egg yolks put one half ounce (others say sixty eggs and a half pound) of female silk worm eggs. And after carefully luting the flask (I do not know if air will be needed for the generation) and bury it in the heat of the manure up to the neck, and leave it there until several worms are engendered and then remove the flask and do not bury it in the manure anymore. But put it on the hot layer of the manure until all the worms are eaten and consume one another by shriveling and stirring, and only one remains. Once this has happened, you must lure it at regular intervals, day and night, with the assistance of two men, who will care for it in shifts, and you will lure it with an egg yolk covered in gold leaf or with a liquid yolk into which the gold leaf has been incorporated. And be careful that it does not miss such fodder (some say one egg yolk per hour, others say three, but the thing itself will demonstrate the practice). So nourished in this way it will grow in two month or seven weeks and will become like a serpent, one span and four fingers long, and one pound in weight, and as the wings will begin to develop, you must kill it, doing so with a charcoal fire in a ring around the bottle one span away from it, and at that time lute the bottle well so that it does not exhale.\n- - - - - 052v - - - - - \nor to be safer, go away until the fire is completely blown out and that everything is cold again. Because the exaltation may be dangerous. And for that moment, when you take it with some tongs, do cover your mouth with some good vinegar and have a protection and cover yourself with it. Once it has died out, put it into a cloth or a canvas made of silk and fold it and hold it to a board exposed to air and the sun will dry it. Once it is well dry, powder it in a mortar and keep this powder cautiously Because one ounce of this one thrown on 3 pounds of melted ♁ transforms it into a finer ☉ than the other one. But there is not so much pitch. You also have to choose the oldest ♁ possible which has often melted before and finely hammered into blades or other works, and at first purify it by melting and throwing it into some honey and vinegar. The completion time for such work is nine months from Saint John’s day until the 25th April.\n\n",
  activities: [],
  purposes: ["observation","advise"],
  id: 180
});
index.addDoc({
  title: "Linseed",
  author: null,
  layout: "narrative",
  content: "- - - - - 052v - - - - - \n\nLinseed\n\nIf one wants to have it strong and very fine, one has to gather it before the seed is completely ripe. Because if you wait for the seed to be completely ripe, the base is so dried by the sun that it is brittle and hard.It is true that like this, the seed reduces by a third.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 181
});
index.addDoc({
  title: "Colors",
  author: null,
  layout: "narrative",
  content: "- - - - - 052v - - - - - \n\nColors\n\nIf you want to keep them moist and prevent them from losing their initial color, pour some white wine, the whitest and the clearest you can in a bottle with some tragacanth gum, and once you have corked the bottle, mix and shake it very strongly, and leave it still until the tragacanth is dissolved. Add also some fine white earth to lighten that. Some mingle the white wine with some spring water, and with this composition they mix their colors without grinding them, and they show very beautifully on miniature works.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 182
});
index.addDoc({
  title: "Soldering a vise",
  author: null,
  layout: "narrative",
  content: "- - - - - 053r - - - - - \n\n\nSoldering a vise\n\nIt is good that the jaws of the vise should be high for use in making a long piece, and that they join well to clamp a thin object. In order to solder the nut, after you have made the bolt, you will make a long iron strip of the right thickness to fit into the notch of the bolt when red hot, and you will bend it all around [the bolt] by striking it with a hammer. Once it is well wrapped around, you will insert the bolt around which the nut is wrapped.\n\n",
  activities: ["soldering"],
  purposes: ["making"],
  id: 183
});
index.addDoc({
  title: "Copper",
  author: null,
  layout: "narrative",
  content: "- - - - - 053r - - - - - \n\nCopper\n\nIf, while in the fire and while being cast, it touches the iron, that iron will be so sour that it will be impossible to forge.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 184
});
index.addDoc({
  title: "Lead casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 053r - - - - - \n\n\nLead casting\n\nAccording to some it is mixed, half tin and half lead and, in order to heat it, a little arsenic is mixed in. It is cast well in small sizes in a cuttlefish bone, provided it is good.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 185
});
index.addDoc({
  title: "Molding from paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 053r - - - - - \n\n\nMolding from paper\n\nOver hot ashes, boil some cotton in aqua fortis mixed with sal ammoniac like aqua regia. And the cotton will become very fine, like powder. Then soak it with gummed water and you will cast quite delicately.\n\n",
  activities: ["molding"],
  purposes: ["making"],
  id: 186
});
index.addDoc({
  title: "Almond trees, apricot trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 053r - - - - - \n\nAlmond trees, apricot trees\n\nThey grow quite straight if they are grafted. And every kind of tree [whose fruit has] pits, such as nectarines, peaches, clingstone—peaches, apricots etc., comes best by shield budding on an almond tree by.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 187
});
index.addDoc({
  title: "Silkworms",
  author: null,
  layout: "narrative",
  content: "- - - - - 053r - - - - - \n\n\nSilkworms\n\nThey are produced from grain, that is eggs, which are sold by the ounce, which is commonly sold in Languedoc 3 lb. and 5 s. The one from Spain brought by merchants is considered to be the best, because the worms coming from it are not so subject to illnesses and produce more silk. In Spain, one ounce of grain gives worms that commonly make 15 lb. of silk. But from one once produced in France, they do not make but 10 or 12. Three ounces of grain are to produce such a quantity of worms, with which you will be able to furnish a room with three or 4 shelves of wide boards. They begin to shed their skin on their own around Easter. And to do this, one has to put them in a pine box, like the ones in which we put pellet, warmly among feather cushions. And in the beginning, they shed their skin as little black ants, and as soon as there are two or three without skin, they have to be given white mulberry leaves. And then arrange them on the boards. And three times per day, it is necessary to change the leaves for fresh ones. And if during the day there is any storm or rainy weather, cloudy and cool, one needs to keep in the room three or 4 embers and with glowing coal, and to light incense until the room is filled with its smoke. And when the weather is warm and serene, they produce more and better silk. Some worms make it whiter, others more yellowish. And even if it is white, it can be yellowed when it is extracted with hot water. From their birth until the moment they make their cocoons and prisons, worms sleep and rest 4 times, and each time they remain 4 or five days resting without eating, as if they were dying so as to be born again, because each one sheds their skin and begins by uncovering the head, then consequently, on different days, the rest of the body, and they go from white to grey, and from grey to white. And if one of them has some sickness and does not have the strength to shed, one needs to help it and to be careful not to squash it, because if it gives off a yellow liquor, it is no longer worth anything. And they do not even serve much if one handles them. Around Pentecost, they begin to want to climb on the dry heather branches that we prepare and attach.\n- - - - - 054r - - - - - \nto some of the upper boards, and one can tell when they want to climb up when, on the leaf, they stretch out and raise their heads and a part of their bodies when one takes them to heather branches where they stop and begin to spin their prison, which we call cocoon, generally the size of a pigeon egg, although there are some which are much bigger because it sometimes happens that two or three and up to 11 worms put themselves in a cocoon, which is hairy and cottony, around which ball is filoselle or floret, and of the cocoon, which is a white, solid, continuous and firm skin, silk is made. The cocoon is so hard that it is cut with difficulty with a fingernail. And yet to leave its prison, the worm eats away at it on one end, and after having stayed inside, living on its own juices for three weeks, it comes out, reduced in size by half. Because when it begins to spin, it is as long as a ring finger and has eight legs, and when it comes out it is less than half as long and only has four legs. On the other hand, it has become a butterfly and has wings; however, it does not fly. There are males and females. As soon as they come out of the cocoon, the male mates with the female, and they are put on a piece of white linen where they lay their eggs, which will not be good and viable if the male was not given to her. When the male has detached himself from a female, one must get rid of it because it would not be good to give it to another female. They finish spinning and laying eggs in three weeks and around Saint John’s Day. And then one keeps their eggs and grain until Holy Week, as mentioned. Some [worms] spin among the leaves and make their cocoons there without climbing high.\n\n",
  activities: ["producing silk"],
  purposes: ["observation"],
  id: 188
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "- - - - - 054v - - - - - \n \n&gt; Figure\n&gt; \n\nTo dry jams that are [not?] liquid, have an open tub pierced on each side with a small, square window, and pass sticks through these from one side to the other, and place on these a sieve made of strings in the form of a net. And on this, you will neatly put your jam containers. And having put at the bottom of the tub a hot coal or two, cover the tub with a cloth folded in two.\n\n",
  activities: ["drying"],
  purposes: ["advice"],
  id: 189
});
index.addDoc({
  title: "To lead a horse",
  author: null,
  layout: "narrative",
  content: "- - - - - 054v - - - - - \n\nTo lead a horse\n\nOne has to give it sweet bread and it will recognize the one who will give him this treat. And in order to keep it good for leading, make it use a good gait from the beginning of the path and continue it.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 190
});
index.addDoc({
  title: "Dogs",
  author: null,
  layout: "narrative",
  content: "- - - - - 054v - - - - - \n\nDogs\n\nTo keep them from biting, it is good to have pitch balls, formed like those of cobblers, to throw to them when they yap at you. They will bite on the balls so much that their teeth will get stuck together and they will not be able to harm you.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 191
});
index.addDoc({
  title: "Boots of hay",
  author: null,
  layout: "narrative",
  content: "- - - - - 054v - - - - - \n\nBoots of hay\n\nLacking boots, you can make a rope out of hay and wrap it around your legs, and rain will never pass through.\n\n",
  activities: [],
  purposes: ["advice","making"],
  id: 192
});
index.addDoc({
  title: "To disguise a horse",
  author: null,
  layout: "narrative",
  content: "- - - - - 054v - - - - - \n\nTo disguise a horse\n\nCut his ears and tail and, with burning hay, singe the hair on his head and elsewhere.\n\n",
  activities: [],
  purposes: ["application","advice"],
  id: 193
});
index.addDoc({
  title: "To shoot a gun without noise",
  author: null,
  layout: "narrative",
  content: "- - - - - 055r - - - - - \n\nTo shoot a gun without noise\n\nWarm up the barrel and close the lumiere d’embas, and take a piece of the freshest porksuint that you can find and as long as the phalanx of your little finger and the size of the diameter of the canon, and push it back and forth until it is completely melted. Then, load a cartridge which fits on the top of the barrel, as you know, and it will only make a little whistling.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 194
});
index.addDoc({
  title: "Dipping for a bullet that will reach far away and will compromise the healing",
  author: null,
  layout: "narrative",
  content: "- - - - - 055r - - - - - \n\nDipping for a bullet that will reach far away and will compromise the healing\n\nMix some suint and strong vinegar and dip the bullet in this mixture while it is still hot.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 195
});
index.addDoc({
  title: "Against wounds",
  author: null,
  layout: "narrative",
  content: "- - - - - 055r - - - - - \n\nAgainst wounds\n\nHurt a chicken or a dog to test and put some sap and ground herb which is called sempervina on the wound. It is the one with the leaves like small grains that some call vernicularis. It well—known that it will not die.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 196
});
index.addDoc({
  title: "To kill someone with a horrible poison spread on a board over which the person walks or on stirrups",
  author: null,
  layout: "narrative",
  content: "- - - - - 055r - - - - - \n\n\nTo kill someone with a horrible poison spread on a board over which the person walks or on stirrups\n\nGet in the month of June and July, many of the biggest snails you can find with their shell, put them in a glass bottle with a sufficient quantity of very hard and very boiled egg yolks with some good vinegar. Cork it and put it under some horsemuck for fifteen days. The snails will first survive thanks to the egg yolks, then with the heat they will come out of their shells and eat live on it. Finally, it will come a white salve. For your own safety you will not cut the bottle, keep it well closed and put it in strong sun and dawn for\n- - - - - 055v - - - - - \nfor fifteen days. Next you will break it [sc. the bottle] from a good distance &amp; with a long stick without looking at it &amp; your eyes covered, you will put it where you want, or rub a little in a running river or on a tree or on grass that is on the bank.\n\n",
  activities: ["poisoning"],
  purposes: ["making"],
  id: 197
});
index.addDoc({
  title: "Another for waters",
  author: null,
  layout: "narrative",
  content: "- - - - - 055v - - - - - \n\nAnother for waters\n\nToad in a pot, with quicklime, who will consume all this powder, next and.\n\n",
  activities: [],
  purposes: ["observation"],
  id: 198
});
index.addDoc({
  title: "Damascus steel",
  author: null,
  layout: "narrative",
  content: "- - - - - 055v - - - - - \n\nDamascus steel\n\nDistil some worms on one side &amp; some horseradish leaf on the other &amp; mix these two waters, as much one as the other, and do the tempering in that.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 199
});
index.addDoc({
  title: "To know one's course in open sea",
  author: null,
  layout: "narrative",
  content: "- - - - - 055v - - - - - \n\nTo know one’s course in open sea\n\nSoak a piece of cloth in oil, then attach it to the poop of the boat so that it is dipped in the water, and it will make a trail that will be visible for ten leagues since the water parts wherever the oil has passed.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 200
});
index.addDoc({
  title: "For casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 055v - - - - - \n\n\nFor casting\n\nChalk most recently drawn from the quarry is good for lead. But do not wet nor crush it, make it fine only by grinding or grating it and passing it through a sieve. The same applies to pumice, which one must not crush with water nor corrupt its nature. Lead must be mixed with little tin, just to give it some strength, and two parts of lead for one of tin or more.\n\n",
  activities: ["casting"],
  purposes: ["advice","making"],
  id: 201
});
index.addDoc({
  title: "Excellent temper for breastplates",
  author: null,
  layout: "narrative",
  content: "- - - - - 056r - - - - - \n\n\nExcellent temper for breastplates\n\nHave the clearest and the most running river water you can, and heat it up slightly more than warm. Then have a bunch of reseda, take its seeds and dip them into the said water and bring it to a rolling boil it while stirring it with a stick. Then pour it into a muid or any other vessel, then throw into it two pecks of salt. Then take a big cauldron full of the said river water and heat it up slightly more than warm. Take three or four times the quantity of red greasy earth you can hold in two cupped hands, dip it and throw it into the cauldron filled with the said water. Have as much pigeon manure as of the said earth, as much horse manure and as much iron scrapings. And mix each of these separately, throw into the caldron and leave for two or three days. Then throw it into the said muid and stir all strongly altogether. And the older this temper is, the better it will work.\n\n",
  activities: ["tempering"],
  purposes: ["making"],
  id: 202
});
index.addDoc({
  title: "Varnish for tempera",
  author: null,
  layout: "narrative",
  content: "- - - - - 056r - - - - - \n\n\nVarnish for tempera\n\nYou can make tempera marble with lacquer or rose of Ghent and chalk. Once dry, glaze it with lacquer mixed with wine, for glue will dull and blacken it. And the whole will firstly appear red, but the varnish you will apply, which will penetrate it, will make dark and light parts appear as they should. The varnish is made like this: mix with clear Venice turpentine some aspic oil until it becomes clear and liquid, and this is done without fire. This is for things done in tempera, and the turpentine varnish that you know is for panel paintings. Pure lavender spike varnish is not good for panel paintings because lavender spike oil is too penetrating and makes colours shine unless it has been made long beforehand.\n\n",
  activities: ["varnishing"],
  purposes: ["making"],
  id: 203
});
index.addDoc({
  title: "To paint",
  author: null,
  layout: "narrative",
  content: "- - - - - 056v - - - - - \n\n\nTo paint\n\nThe lacquer and rosette from Ghent and elsewhere lose their color and die in contact with the air.\n\nAny marble on which a knife can [illegible] is not worth to grind fine colors.\n\nThe chalk is not thick with oil, the ceruse is more appropriate but even better is the white lead. The ceruse is the whitest and is to grind firstly with some water, the white lead is grayish. But turns perfectly white with some oil.\n\nWhen you grind your colors, start by cleaning your workshop because if you raise some dust while walking that will damage your colors which will never be beautiful if they are not clean.\n\nThe Florey must not be mingled with some azur enamel or anything else for it turns it into green.\n\nIvory is excellent to make a painter’s’ palette Knots of the fir tree The pear—tree and if it is walnut tree make sure to cut with the grain of the wood.\n\nYou always have to stamp on wood to oil paint in order to fill holes and unevenness. And stamp with some [illegible] and ceruse mixed with oil, then soften with a feather which evens more than a brush. Or when the stamp is dry, rub it strongly off with a knife.\n\nTo use some azur enamel with some oil, you have to choose the finest one and to make it thinner, do not grind for it turns white but wash it and because the bigger goes at the bottom, choose the one at the top of the water or pour the cloudy water out and pile the azur.\n- - - - - 057r - - - - - \nAnnotations:\nGold Without Gold\n \n\nLake takes a long time to dry in oil and for that reason you have to crush glass with it, but you have to choose crystallin because it is neater. And since it would be too difficult to be crushed by itself, you have to heat it red hot, then, when it is entirely red, throw it into cold water and it will crumble and pulverize itself to then be crushed easily. After being crushed with a lot of water, it looks like crushed lead white, but for this reason it has no body. I think it could be good for casting.\n\nLead white is made with lead sheets beaten gently and put under some manure.\n\nWhite turpentine varnish or aspic oil and turpentine is colored with powdered turmeric boiled together with it. It gives a gold color on silver which is even more beautiful when burnished. It dries within a quarter of an hour. Aloes would made an even brighter color but it takes time to dry whereas the other one dries within a quarter of an hour in winter as well as in summer.\n\nGood lake moistened with saliva quickly darkens. That from Florence is mixed with too much gum.\n\nIf you apply one layer of printers’ ink on velvet and apply gold leaves and then stretch it, it looks grainy as if it was powdered with gold sprinkled on it.\n\nVermillion crushed by itself is wan and pale but is more beautiful when it is crushed with lake.\n\nIn order to remove the grease off marbles, one crushes ordinary ashes on it, which afterward are good to make the first primer coat of a painting to be done in oil in order to seal the cracks and veins of the wood. They are thicker than chalk and are quite greasy. They are mingled with the aforesaid chalk or with colors collected from the vessel that is used to clean brushes, and they are desiccative and spare the colors. Once this primer coat has been made on the wood, it is scrubbed with a knife until even. After, one makes a second coat with ceruse or with the poorest colors mixed together. On an oil canvas painting one only applies one coat and the mixed ashes can be used. Also, after crushing a color, one crushes the interior of a large loaf of bread in order to remove the grease off the marble.\n\n",
  activities: ["painting"],
  purposes: ["advice"],
  id: 204
});
index.addDoc({
  title: "Tanner",
  author: null,
  layout: "narrative",
  content: "- - - - - 057v - - - - - \n\n\nTanner\n\nTanners use small skins of lambs and young goats nearly as delicate as parchments and they keep them in some humid places and keep wetting them. When they want to print some stories on it they lay them in their molding hollows of their figure and then on top they spread some greasy fine earth used for trimming wool fabrics, well pressed and beaten and slightly humid and soft and then put on the earth a small one—piece board and put the whole under a press and leave that dry there. After the earth the leather only remains very neatly printed [missing word] of the size of a pea. And then apply on the leather two or three black copperas and iron scale layers one after the other like the tanners do. And since this tincture is astringent and shrinks the leather will be stronger more more easily printable. Once dried stick on the reverse some fabric with strong glue, and by doing so one can quickly imitate big statues and very fine medals and paint them and [illegible] and are light and can be carried and last for a long time. What can be printed on a relief can be made differently and can be reheated with a hot iron tool.\n\n",
  activities: ["tanning"],
  purposes: ["obeservation"],
  id: 205
});
index.addDoc({
  title: "Painter",
  author: null,
  layout: "narrative",
  content: "- - - - - 057v - - - - - \n\n\nPainter\n\nGood crayons are not made with glue but with women’s milk.\n\nImages made of card have to be dipped in some very fine and clarified melted rosin once they have dried. This strengthens them or they will turn flaccid in wet weather.\n\nVenice masks are made with a molding hollow and the face covered with copper.\n\nThe Flemish do not use other white colors for oil painted skin colors after some white lead for the ceruse turns them yellow.\n\nThe 4 or 5 years old and clear nut oil is the best anti—dust color. The one slowly squeezed from the press similar to almond oil is white even if the nuts’ skin is peeled off.\n- - - - - 058r - - - - - \nYou must make at least three layers of flesh color in order to paint faces in oil. And to begin, one places the black and shadow where it is appropriate. After, the highlighting with lead white must not be placed on the black. Flesh colors and [missing word] containing ceruse will yellow in five or six months, but lead white does not change.\n\nFlorence lake is better than lake from Flanders because in Florence they make the best dyes. To make a beautiful flesh color, the reddest and brightest lake is the best, because those that are purple and violet as a result of the addition of too much alum look like the flesh of someone that is very cold. That is why women who want to color their cheeks crush Florence lake very finely, then fill a little cotton with it, which they then wrap in a little fine cambric. And thus they rub the lake on their cheeks and then, with another clean cotton, they soften it.\n\nCrystallin having been crushed in water appears to have body, but in oil it does not have any. It is crushed with lake and with bitumen, which would not dry for a very long time otherwise.\n\nAspic oil is commonly put with lead white, not entirely pure but mixed with a little walnut oil. The said aspic oil will not be good for lake and colors that do not have body because it will make them crack, but with those that have body and are somewhat greasy, it is quite appropriate.\n\nVerdigris and orpiment must be first crushed with urine rather than thinned with oil. Thus they are beautiful and do not fade.\n\n",
  activities: ["coloring"],
  purposes: ["obeservation"],
  id: 206
});
index.addDoc({
  title: "Blacks",
  author: null,
  layout: "narrative",
  content: "- - - - - 058v - - - - - \n\nBlacks\n\nCoal black, ordinary black lead black, burnt ivory black, peaches stones black, black smoke, black light, burnt oxes’ feet bones black\n\n",
  activities: [],
  purposes: ["obeservation"],
  id: 207
});
index.addDoc({
  title: "Shadows",
  author: null,
  layout: "narrative",
  content: "- - - - - 058v - - - - - \n\n\nShadows\n\nWhen you are making a painting with several persons shadows as well as skins have to be different\n\n",
  activities: ["painting"],
  purposes: ["obeservation"],
  id: 208
});
index.addDoc({
  title: "Frescoes",
  author: null,
  layout: "narrative",
  content: "- - - - - 058v - - - - - \n\nFrescoes\n\nAzure is not good for that but [illegible] and you have to work with long brushes. Frescoes cannot be made on wood\n\n",
  activities: [],
  purposes: ["obeservation"],
  id: 209
});
index.addDoc({
  title: "Azure",
  author: null,
  layout: "narrative",
  content: "- - - - - 058v - - - - - \n\nAzure\n\nTurpentine oil makes it very beautiful, try some palma christi seed oil. Nut oil in Flanders costs at least a hundred sols a pint. The azur requires some greasy oil for it is not thick\n\n",
  activities: [],
  purposes: ["obeservation"],
  id: 210
});
index.addDoc({
  title: "Brushes",
  author: null,
  layout: "narrative",
  content: "- - - - - 058v - - - - - \n\nBrushes\n\nWhen the color has dried inside them and you want to clean them soak them in some spike lavender oil and they will turn immediately soft again as before, then you will finish to clean them in some nut oil. Nut oilis not as appropriate to soften them as the spike lavender one which is clear like water and penetrates and is not as thick as the nut oil. Brush handles are made by those who work with care from porcupine hairs, by some others from fine branches of Turkish wood with which they also make small sticks to rest their hand when they are painting\n- - - - - 059r - - - - - \nLake and white lead and ceruse are easy to work with some oil, but every kind of azure is difficult. And to make a beautiful azure, one has to lay it not with big strokes of the brush but with fine strokes of the end. Not only for azurite ash and azur from Acre but mainly for enamel azur which has to be very fine, otherwise you will not be able to work with it unless with hard work and you have to mingle it with some turpentine to thicken it and and to mingle it with some white lead. Any azure must not neither be ground nor washed for it loses its color and become pale. But put some of it powdered on your palette and you moisten it bit by bit with some nut oil or turpentine, dip a knife point in some oil and then mix it bit by bit on the said palette\n\n",
  activities: [],
  purposes: ["obeservation"],
  id: 211
});
index.addDoc({
  title: "Shadows",
  author: null,
  layout: "narrative",
  content: "- - - - - 059r - - - - - \n\nShadows\n\nFirst shadows which are closer to the daylight have to be light and very faint then the last ones very dark to enhance strongly the relief. The Italians usually make three shadows, the first one very faint, the second one darker and the third one very dark, then put these three shadows together by hatching them from the darkest to the lightest\n\n",
  activities: [],
  purposes: ["observation"],
  id: 212
});
index.addDoc({
  title: "Azure",
  author: null,
  layout: "narrative",
  content: "- - - - - 059r - - - - - \n\nAzure\n\nAzure is more beautiful when on the painting it has soaked up some nut oil with which it has been firstly thinned without any oil of spike lavender. If you want to know whether it is dry, breathe on it and it will not shine and will seem to be very soaked up, otherwise it will shine\n\nSoaked with oil, azure of email leaves it and comes back to its first natural state if you dip it in some water\n\nColors for small scale works have to be very strongly ground and to be worked with a brush point if you want your work to be very fine\n\n",
  activities: [],
  purposes: ["observation","advice"],
  id: 213
});
index.addDoc({
  title: "Painting weapons",
  author: null,
  layout: "narrative",
  content: "- - - - - 059v - - - - - \n\nPainting weapons\n\nBlack charcoal mixed with white lead is very appropriate for painting weapons, also mixing in a little azure if you wish. Charcoal by itself is somewhat bluish.\n\n",
  activities: [],
  purposes: ["advice","observation"],
  id: 214
});
index.addDoc({
  title: "Painting crepe",
  author: null,
  layout: "narrative",
  content: "- - - - - 059v - - - - - \n\n\nPainting crepe\n\nFirst you need to make a greyish background using charcoal black mixed with white lead and a little azure. Then, after drying, highlight with strokes and lines in white lead.\n\n",
  activities: ["painting"],
  purposes: ["advice"],
  id: 215
});
index.addDoc({
  title: "Folds in clothing",
  author: null,
  layout: "narrative",
  content: "- - - - - 059v - - - - - \n\n\nFolds in clothing\n\nYou must take care not to represent any folds falsely, but rather imitate natural effects. Thick cloth hardly makes any folds, taffetas and silk cloth make more, and crepe more still. Observe which folds go lengthwise and which across.\n\n",
  activities: ["observation"],
  purposes: ["advice"],
  id: 216
});
index.addDoc({
  title: "Siccatives",
  author: null,
  layout: "narrative",
  content: "- - - - - 059v - - - - - \n\n\nSiccatives\n\nWhite lead and massicot are most siccative, nevertheless they need a good two days. If you want to verify whether an oil is siccative, use it to distemper white lead, and if it soon produces a crust it means that it will dry.\n\n",
  activities: ["observation"],
  purposes: ["advice"],
  id: 217
});
index.addDoc({
  title: "Double layers",
  author: null,
  layout: "narrative",
  content: "- - - - - 059v - - - - - \n\nDouble layers\n\nAzures, flesh tones and reds are applied twice. Other colors are not.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 218
});
index.addDoc({
  title: "Mending cracks in a panel",
  author: null,
  layout: "narrative",
  content: "- - - - - 059v - - - - - \n\n\nMending cracks in a panel\n\nIf a painted panel breaks you can glue it well on the reverse, but to fill in the cracks properly in order to paint and repair it, you must not use any glue , which weakens in damp weather and would swell when touched with the oil of the painting. But have some white wax, which is harder than the other sort. The oil mixed into the wax prevents it from melting in the sun. The wax must not be hard, but soft as if recently cooled. Apply it on cracks and crevices with the tip of a knife, then scrape.\n\n",
  activities: ["mending"],
  purposes: ["advice"],
  id: 219
});
index.addDoc({
  title: "Skin colors",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \nAnnotations:\nPainting Skin and Shadows 'a destrempe,' fols 93v, fol. 65r and fol. 66r (Nisse)\n \n\n\nSkin colors\n\nIt is necessary that you make it of two kinds, one more red to make the main layer, the other more pale for the highlights, as around the eyes. And then on this last skin color, you will touch lightly the main lights with a little white lead. But avoid applying too much of it because this will look like a face of death. The beautiful Florence lacquer makes a beautiful vivid skin color that resembles the complexion of alexandrine pink and incarnadine\n. \n&gt; at left top margin of folio 061r\n&gt; \n&gt;  Certain colors need to be ground like minium or massicot. The ashes don’t need to be ground at all.\n\n",
  activities: ["color making"],
  purposes: ["making"],
  id: 220
});
index.addDoc({
  title: "Making things round",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n\n\nMaking things round\n\nIf you want to model well, soften round things by rounding them off with the brush point and the rest with a flat part if it is flat, and thus for the others according to their nature, and lightly with the dry and flattened brush point and with patience.\n.\n",
  activities: ["painting"],
  purposes: ["making"],
  id: 221
});
index.addDoc({
  title: "White lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n\n\nWhite lead\n\nWithout this, you can’t work on a small scale for which it is necessary to soften with great care. But you can’t do it with ceruse because it does not have enough body.\n.\n",
  activities: ["painting"],
  purposes: ["observation"],
  id: 222
});
index.addDoc({
  title: "Lights",
  author: null,
  layout: "narrative",
  content: "- - - - - 061r - - - - - \n\n\nLights\n\nYour brush shows it to you by making some shadow which must always follow the back of your hand, not in a straight line like this, \n&gt; Figure\n&gt; \n because the light would be too crude and too harsh, but obliquely and as an incline like this. \n&gt; Figure\n&gt; \n\n\n  Figure\n\n It is necessary that the painting is not facing the light, but be half turned back against it, and above all look for a soft light, for it makes a soft shadow and soft work, like a harsh light makes a harsh work.\n\n\n\n  at bottom margin of folio 061r\n\n\n\n",
  activities: ["painting"],
  purposes: ["making"],
  id: 223
});
index.addDoc({
  title: "Water to make light for painters",
  author: null,
  layout: "narrative",
  content: "- - - - - 061v - - - - - \n\n\nWater to make light for painters\n\nDistill some vine water and put it into a big bottle. Put your candle behind that, and it won’t disturb your vision.\n.\n",
  activities: ["painting"],
  purposes: ["making"],
  id: 224
});
index.addDoc({
  title: "Chassis used by Germans",
  author: null,
  layout: "narrative",
  content: "- - - - - 061v - - - - - \n\n\nChassis used by Germans\n\nGermans who work in small scale make ‘chassis” not of glass but of canvas oiled with clear turpentine varnish, that is half of turpentine oil and almost half of turpentine, because such light, being less bright than glass, makes the lines appear thicker. And when they want to make something more delicate, such as veins and similar things, they use brushes made of two or three rat hairs. \n.\n",
  activities: ["painting"],
  purposes: ["observation"],
  id: 225
});
index.addDoc({
  title: "Azure enamel with oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 061v - - - - - \n\nAzure enamel with oil\n\nOne must choose the finest possible, for if it is coarse one cannot work in oil. And if you cannot find any that is fine enough, you may as well grind it, not with water but with oil, and grind it thick. Then lay it on your palette and mix in some turpentine but not much, to make it bind, and make it as thick as butter or mortar, and then, with a large enough brush, work it while always moving the brush freely. Then, to soften it, make jagged hatching movements with the tip of the brush. The highlights will be made using the same diluted with ceruse, which makes it bind, making it easier to work. I have seen it used thus. It must be very thick, so that you almost need an effort to spread it with your brush. And it will be all the better if you lay down your painting. All these difficulties do not occur when it is very fine and fluid without being crushed, and it doesn’t run. \n. \nAzure needs to be applied neatly, which is why it always fades when it is applied over old, already tarnished, azure to mend an old painting. In such cases, it is better to scrape off the old layer and prime again and then apply the azure. It is the same for almost all other colors. Also azure mixed with oil always remains shiny, which is not good for azure because that makes it fade.\n\n\n  at left bottom margin of folio 061v\n\n  \n\n\n",
  activities: ["making color","applying color"],
  purposes: [],
  id: 226
});
index.addDoc({
  title: "Grinding colors",
  author: null,
  layout: "narrative",
  content: "- - - - - 061v - - - - - \n\nGrinding colors\n\nA slab of glass one inch thick is more appropriate than anything else for grinding colours neatly, especially for lacquer and for whites.. \n.\n",
  activities: [],
  purposes: ["advice"],
  id: 227
});
index.addDoc({
  title: "Perspectives",
  author: null,
  layout: "narrative",
  content: "- - - - - 062r - - - - - \n\n\nPerspectives\n\nPainting perspectives in oil takes a long time because of the many lines that need to be drawn with a ruler, and for that reason one generally paints them in distemper. One chooses the vanishing points at will. The main thing is to know where the point is. One commonly sets two or three, sometimes up to five. \n.\n",
  activities: ["painting perspective"],
  purposes: ["advice"],
  id: 228
});
index.addDoc({
  title: "Ocher",
  author: null,
  layout: "narrative",
  content: "- - - - - 062r - - - - - \n\nOcher\n\nThis is used for faces, hair, skulls and rocks. \n.\n",
  activities: [],
  purposes: [],
  id: 229
});
index.addDoc({
  title: "Distant people and animals",
  author: null,
  layout: "narrative",
  content: "- - - - - 062r - - - - - \n\nDistant people and animals\n\nFirst one roughs them out in gray or in purple, which is made of azure ash and lake. Once dry, one highlights and finishes with flesh tones and other colors and white. And it will look better and is quicker to do than in black and white. Armies are painted the same way. \n.\n",
  activities: [],
  purposes: [],
  id: 230
});
index.addDoc({
  title: "Drawing",
  author: null,
  layout: "narrative",
  content: "- - - - - 062r - - - - - \n\nDrawing\n\nAfter you have primed your panel and scraped it with a knife to make it quite even, you will start drawing with the longest possible piece of charcoal, because with a short one you would not see your line so well and you would make it rougher. Let the tip of the charcoal be sharp, and to prevent if from quickly becoming dulled and blunt, drag the tip flat, thus you will constantly sharpen it. Hold your charcoal as far as possible, and accustom yourself to drawing with a light touch. Because if you become accustomed to drawing delicately with charcoal, you shall do the same with colors. And whoever is rough with charcoal is never exquisite with colors. And by a line of charcoal, masters assess their apprentices. First make the contour of your drawing, that is the outline, lightly and without too diligent work, rather with boldness. By so doing, you will learn to be an artist, and if you need to erase anything, you will not waste as much time as if you had elaborated it. Afterwards work on all the details, not standing too close to your panel, but sometimes stepping back in order to better assess the proportions. Once you are satisfied with the first drawing, retrace all the lines with your paintbrush in pink or another gummed or distempered color. Thus you will work more surely with colors, and with less trouble.\n\n",
  activities: [],
  purposes: [],
  id: 231
});
index.addDoc({
  title: "Portraits",
  author: null,
  layout: "narrative",
  content: "- - - - - 062v - - - - - \n\nPortraits\n\nTo become an artist, it is necessary to draw by eye, without compass or ruler. Masters do not allow apprentices to use them.\n\nWhen the priming has been done a long while ago, it becomes greasy. It must be scrubbed with ashes and water.\n\n",
  activities: [],
  purposes: [],
  id: 232
});
index.addDoc({
  title: "Perspective",
  author: null,
  layout: "narrative",
  content: "- - - - - 062v - - - - - \n\nPerspective\n\nIn order to tell where the vanishing point is one must lay a ruler over the lines, and the point will be where the lines meet. Some make a hole at the end of their rulers in order to fix the point by that hole while moving the ruler about. Others lay a ruler across the panel,, then on this ruler they place the tip of another ruler which, being attached to the former by a screw, will move about and reach as far as necessary without losing the point. The ruler and compass without discernment of the eye will cause errors. Perspective is very difficult.\n\n\n  Figure\n\n\n\n\n  at left middle margin of folio 062v\n\n  To paint a perspective in oil, you should not use a ruler, for you would smudge everything. Instead, in applying your colors you must keep and follow the lines of your first drawing.\n\n\n",
  activities: [],
  purposes: [],
  id: 233
});
index.addDoc({
  title: "To bronze in white",
  author: null,
  layout: "narrative",
  content: "- - - - - 074r - - - - - \n\n\nTo bronze in white\n\nTake looking—glass tin and put it to soak in gum water, and pound it in a pestle. And afterwards, you will put it on the marble.\n\n",
  activities: ["varnish making"],
  purposes: ["making"],
  id: 234
});
index.addDoc({
  title: "To make vermillion",
  author: null,
  layout: "narrative",
  content: "- - - - - 074r - - - - - \n\n\nTo make vermillion\n\nTake two pounds of sulphur, and melt it, and add two pounds of mercury to it. And if this material ignites, cover it quite neatly, so that the air does not pass into the pot, then put everything for some time after into a leaded pot, into the fire. In the space of twenty—four hours, you will have good vermillion.\n\n",
  activities: ["pigment making"],
  purposes: ["making"],
  id: 235
});
index.addDoc({
  title: "To make varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 074r - - - - - \n\n\nTo make varnish\n\nTake one pound of linseed oil, and then put it in a pot of earth mixed with a breadcrust and three onions, and put it on a charcoal fire, and you will cook it on a low fire, and let it boil for the space of five hours. You will take half an ounce of flour glue, and will make it boil just as before, and stir continuously with a spoon. And then afterwards, you will add two ounces of well—pounded sandarac to it, and will do so as above. And then afterwards, you will take mastic and gum arabic, two ounces of each, both well pounded, and will put everything together, and will have it boil, always stirring, for the space of five hours. And then you will add rock alum, two ounces, and then you will make it boil. And if you add two ounces of gum arabic to it, if you see that they are not cooked enough, have it cook more on a low\n- - - - - 074v - - - - - \nfire until it is cooked enough. And strain it through a cloth that is compact enough. And when you have strained it, leave it to cool a little. And if you see that it is so thick that you cannot strain it, you will add a little of that oil and will make it better.\n\n",
  activities: ["varnish making"],
  purposes: ["making"],
  id: 236
});
index.addDoc({
  title: "To make red varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n\n\nTo make red varnish\n\nTake vermillion, and let it soak in quite light gum water, like the other, and make two or three ground layers as is said above.\n\n",
  activities: ["varnish making"],
  purposes: ["advice"],
  id: 237
});
index.addDoc({
  title: "To make yellow varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n\n\nTo make yellow varnish\n\nTake some gum arabic and let it soak in water, then take some well beaten saffran and soak said gum. And make it quite light, then make your ground layer on that which you want to varnish, and leave it to dry, and when it will be dry give another ground layer of the same varnish, and leave it to dry as before, until it will be dry enough. Then take varnish from an apothecary, crushed by strokes far enough from one another. Then wash your hands quite well and spread your varnish with their palms.\n\n",
  activities: ["varnish making"],
  purposes: ["making"],
  id: 238
});
index.addDoc({
  title: "Recipe for white gum",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n\n\nRecipe for white gum\n\nTake white wax and ceruse and a little fine pitch, very well pounded together, and put it in a small new pot and make it melt. And when it will be melted you will make a palette of wood and burnish what you want.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 239
});
index.addDoc({
  title: "Green gum",
  author: null,
  layout: "narrative",
  content: "- - - - - 074v - - - - - \n\n\nGreen gum\n\nTake green wax with a little verdigris and make it melt as said above.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 240
});
index.addDoc({
  title: "Red gum",
  author: null,
  layout: "narrative",
  content: "- - - - - 075r - - - - - \n\n\nRed gum\n\nTake red wax of vermillion and a little resin pitch, and make as described above.\n\n",
  activities: ["gum making"],
  purposes: ["making"],
  id: 241
});
index.addDoc({
  title: "Bronze of copper",
  author: null,
  layout: "narrative",
  content: "- - - - - 075r - - - - - \n\n\nBronze of copper\n\nTake some verdigris and clear glue and grind them together. Then apply a layer over your wood, and take some pin filings and grind it on a marble with water, then apply it over the wood and polish it with copper.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 242
});
index.addDoc({
  title: "Ground gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 075r - - - - - \n\n\nGround gold\n\nTake some fine gold and put it on a very clean marble slab. Add aqua fortis and start grinding. Then take some saltpetre and ammonia salt, pour it into a large, clean shell.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 243
});
index.addDoc({
  title: "Making grey wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 075v - - - - - \n\nMaking grey wood\n\nIt is necessary to take three demi—sestiers of iron filings per 18 deniers of rock alum, and for as much 18 deniers green copperas for six deniers of verdigris, pitch and a quart of currier water; and if you can’t find any, use rainwater [blank] of a slight degree.\n\n",
  activities: [],
  purposes: ["making"],
  id: 244
});
index.addDoc({
  title: "Gilding wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 075v - - - - - \n\n\nGilding wood\n\nFirst of all it is necessary to apply a coat of very clear glue; and when it is dry, you will apply a coat of yellow gold; and when this is done you will take fig tree wood and soak it for a while, and wash the place you want to gild, and cut your gold with a knife near where you will put it; and said gold must be applied with cotton, and if you can find some fig tree, take an egg white and stir it frequently.\n\nIf your gold does not have a nice enough color, you will take a partridge feather burn it in a chafing—dish, and turn the smoke toward what you have gilded.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 245
});
index.addDoc({
  title: "Gilding with ground gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 075v - - - - - \n\n\nGilding with ground gold\n\nTake a coquille of gold, soak it with gum water before you intend to work, and then apply it with a brush, and polish it with a wolf’s tooth once it is dry.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 246
});
index.addDoc({
  title: "Recipe for coloring all wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 075v - - - - - \n\n\nRecipe for coloring all wood\n\nTo make it black, the wood needs to be soaked in olive oil and tough meat in a similar case for four or five days, then boil it in where the wood has soaked for one hour, then take it the wood out of the oil. Take some natural sulphur if possible otherwise take another\n- - - - - 076r - - - - - \nsulphur. Cover the aforementioned wood with this powder, until it cools, and bring it back to a boil. Upon boiling one will see whether or not it is black enough. If it is not, take the aforementioned powder and apply some over the wood and boil it.\n\n",
  activities: ["embellishing"],
  purposes: ["application"],
  id: 247
});
index.addDoc({
  title: "Making Wood Green",
  author: null,
  layout: "narrative",
  content: "- - - - - 076r - - - - - \n\n\nMaking Wood Green\n\nTake one quart of white vinegar, one ounce of green, and one ounce of rock alum. Mix them together and pour all your ingredients into a leaded pot over fire without taking any air. Then put the pot in manure for 15 days, after which time you shall remove and boil your materials for three hours.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 248
});
index.addDoc({
  title: "Making Wood Blue",
  author: null,
  layout: "narrative",
  content: "- - - - - 076r - - - - - \n\n\nMaking Wood Blue\n\nTake one quart of urine, as above, one ounce of alum, and two drams of sal ammoniac, and half an ounce of woad, grind it all to powder. Then follow the previously described green technique.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 249
});
index.addDoc({
  title: "For Making Purple Wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 076r - - - - - \n\n\nFor Making Purple Wood\n\nTake one quart of urine and one ounce of alum and ten drams of sal ammoniac and one dram of lacquer, then do as previously described.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 250
});
index.addDoc({
  title: "For Making Yellow Wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 076r - - - - - \n\n\nFor Making Yellow Wood\n\nTake urine, as above, and two ounces of woad, one ounce of fustet and two ouncesdrams of sal ammoniac, then do as previously described.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 251
});
index.addDoc({
  title: "To make a very beautiful and inexpensive golden color",
  author: null,
  layout: "narrative",
  content: "- - - - - 076v - - - - - \n\n\nTo make a very beautiful and inexpensive golden color\n\nFirst of all take a very yellow orange peel and carefully remove the white parts, and pulverize it very well it in a very clean mortar. Take the same amount of sulphur, grind all the ingredients together, pour the mixture into a glass vial, and store it in a cellar or other damp place for eight or ten days. When you want to apply it, the mixture needs to be warmed and applied wherever you like, and you will see a very beautiful color.\n\n",
  activities: ["colormaking"],
  purposes: ["making"],
  id: 252
});
index.addDoc({
  title: "Making black gommiche",
  author: null,
  layout: "narrative",
  content: "- - - - - 076v - - - - - \n\n\nMaking black gommiche\n\nTake some glue and dilute it with vinegar and melt it until it is very clear. Take lampblack or another black, and dilute them together. Then apply the mixture over wood.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 253
});
index.addDoc({
  title: "For white gommiche",
  author: null,
  layout: "narrative",
  content: "- - - - - 076v - - - - - \n\n\nFor white gommiche\n\nTake white wax and ceruse, melt them together and apply the mixture to wood or to anything else.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 254
});
index.addDoc({
  title: "Gilding iron or tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 076v - - - - - \n\n\nGilding iron or tin\n\nFirst it is necessary to wash whatever one wants to gild in wine lees, and then wash it once again with white wine. Take three ounces of terra merita and one choppine of white wine. Boil the matter for half an hour, and apply your colors over your iron or tin, or whatever else. Then leave to dry on a sheet of paper and do not put your hand in your materials.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 255
});
index.addDoc({
  title: "Against redness of the face",
  author: null,
  layout: "narrative",
  content: "- - - - - 077r - - - - - \n\n\nAgainst redness of the face\n\nMake a small lead cap and wear it overnight. Excellent secret. Try a lead mask.\n\n",
  activities: ["therapeutics"],
  purposes: ["making"],
  id: 256
});
index.addDoc({
  title: "Fatty earth",
  author: null,
  layout: "narrative",
  content: "- - - - - 077r - - - - - \n\n\nFatty earth\n\nFounders use [this earth] to make the handles of their bells. Before it [the earth] is used, they beat it quite hard, [and] then they leave it to dry gradually in the shade for a long time. And they mold it quite neatly. But the earth must not be sandy; rather, the earth must be carefully selected and soft.\n\n",
  activities: ["molding"],
  purposes: ["making"],
  id: 257
});
index.addDoc({
  title: "Recipe for making bronze and many kind of varnishes",
  author: null,
  layout: "narrative",
  content: "- - - - - 077r - - - - - \n\n\nRecipe for making bronze and many kind of varnishes\n\nTo make an excellent varnish with clear water which you will use with a brush and which [the varnish] dries immediately for applying to paper, a little table, or any other thing\n\nFirst, you will take five ounces of spirits and one ounce of benzoin. Crush them between two pieces of paper or cards or in a mortar.\n- - - - - 077v - - - - - \nbut it should not be too small, then take a glass flask not too big , not too small and into it put a half of each, that means two and a half ounces. Then take the mentioned vetjoin, also roughly crushed, and add it immediately to the aforesaid water and let it rest for one and half day, and then take the aforementioned water and put it into another glass flask and let it soak very well. And on the rest of the aforementioned betjoin, which remains on the bottom of the first flask, add the rest of the water on this should it react well repeat the process you just did and mix the first water with the second, because you use this to make something more noble.\n\n",
  activities: ["varnish making"],
  purposes: ["making"],
  id: 258
});
index.addDoc({
  title: "Other approved varnishes",
  author: null,
  layout: "narrative",
  content: "- - - - - 077v - - - - - \n\n\nOther approved varnishes\n\nTake two ounces of linnen oil, and two ounces of petrol oil, and two ounces of mastic, the whitest you can find, and of roche alum and crush it and take a little bit of white copperoze and put all these drugs together into an earthen pot, which should be new. Put it for a while on hot ashes and you will have a beautiful varnish.\n\n",
  activities: ["varnish making"],
  purposes: ["making"],
  id: 259
});
index.addDoc({
  title: "Another varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 077v - - - - - \n\n\nAnother varnish\n\nTake petrol oil and spike lavender oil, in the same even quantity, and mix them together with copperoze and let them melt over hot ashes, depending on the quantity you need. To apply this varnish, put three coats on the work you want to varnish.\n\n",
  activities: ["varnish making"],
  purposes: ["making"],
  id: 260
});
index.addDoc({
  title: "Another varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 077v - - - - - \n\n\nAnother varnish\n\nTake one ounce of spike lavender oil and of sandarac and make\n- - - - - 078r - - - - - \nmelt the drugs in a new earthenware pot, and when they are melted, you shall pass them through a clean cloth and you will see a beautiful varnish.\n\n",
  activities: ["varnish making"],
  purposes: ["making"],
  id: 261
});
index.addDoc({
  title: "Another varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 078r - - - - - \n\n\nAnother varnish\n\nTake one ounce of spike lavender oil and heat it over coals; take a half ounce of sandarac and grind it coarsely, and then put it in the spike lavender oil and mix it with a stick until it has melted, and then put it in a glass vial, and when you want to use it needs to be heated little by little over the coals, and before applying, lay a coat of very clear glue, and then apply it with a paintbrush.\n\n",
  activities: ["varnish making"],
  purposes: ["making"],
  id: 262
});
index.addDoc({
  title: "To make red varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 078r - - - - - \n\n\nTo make red varnish\n\nTake vermillion and dilute it with gum water as well as with other water and make it like said varnish, and mix this other water the same way as other varnish and then apply it as above to make green wood.\n\n",
  activities: ["varnish making"],
  purposes: ["making"],
  id: 263
});
index.addDoc({
  title: "To make green wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 078r - - - - - \n\n\nTo make green wood\n\nTake very strong vinegar, salt, and rainwater, and mix it together with verdigris, and put it with your wood in a new earthenware vessel, and lay it in some very warm horse dung for eight or nine days.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 264
});
index.addDoc({
  title: "To make bronze the color of azur",
  author: null,
  layout: "narrative",
  content: "- - - - - 078v - - - - - \n\n\nTo make bronze the color of azur\n\nTake rock alum and antimony, with twice as much rock alum as antimony, and pound it together in an iron mortar and soak with gum water, then grind it on a marble, and then it needs to be used with a paintbrush, and after letting it dry, polished with wolf tooth or dog tooth.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 265
});
index.addDoc({
  title: "To make bronze the color of gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 078v - - - - - \n\n\nTo make bronze the color of gold\n\nTake copper filings, ochre, gum, and alum, grind it all together in a stone mortar, and when it is well ground, lay it as needed with a paintbrush, and then polish it with wolf tooth or dog tooth.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 266
});
index.addDoc({
  title: "To make bone or horn green",
  author: null,
  layout: "narrative",
  content: "- - - - - 078v - - - - - \n\n\nTo make bone or horn green\n\nTake verdigris and soak it in strong vinegar, and soak your bone or horn for an hour, and then apply as needed.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 267
});
index.addDoc({
  title: "To make it bronze",
  author: null,
  layout: "narrative",
  content: "- - - - - 078v - - - - - \n\n\nTo make it bronze\n\nTake pin and other brass filings, put them together, and grind it on marble, grind it well with water little by little, until it flows, and then put it in a new vessel and\n- - - - - 079r - - - - - \nwhen you want to use it, dilute it with very clear glue and coat what you like two or three times, then leave to dry. But before coating it with the bronze mixture (2 or 3 times), apply one coat of very clear glue and leave to dry. And after polish the bronze coat with a wolf’s tooth or dog’s tooth.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 268
});
index.addDoc({
  title: "Mixture for printers",
  author: null,
  layout: "narrative",
  content: "- - - - - 079v - - - - - \n\n\nMixture for printers\n\nApply a coat of antimony, and pulverize on a coat of latten, old metal scrapings, or thin plates of iron or the iron nail heads, and continue in this way until the crucible is full. Melt it inside a four à vent. And then mix in a little tin and fill the rest of the container with lead. Build up the fire and stir continuously to make sure that the substances are well—allied. The mixture for large letters is harder.\n\n",
  activities: ["therapeutics"],
  purposes: ["application"],
  id: 269
});
index.addDoc({
  title: "Mading gray wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 079r - - - - - \n\n\nMading gray wood\n\nTake some sandstone powder, __ __ ___, iron filings, scrap iron, alum, du noir de courroieur, copperas, and rock alum.\n\n",
  activities: ["embelleshing"],
  purposes: ["making"],
  id: 270
});
index.addDoc({
  title: "Making water against illness of the eyes",
  author: null,
  layout: "narrative",
  content: "- - - - - 079r - - - - - \n\n\nMaking water against illness of the eyes\n\nTake some white copperas, heat lightly over fire, then grind it to powder. Put the powder on a white cloth stretched over a glass, then take some fountain water and filter it through the cloth, while stirring the powder with the finger until all the water has filtered through. Then wash your eyes as often as you wish and, with the help of god, you will feel well.\n\n",
  activities: ["therapeutics"],
  purposes: ["making"],
  id: 271
});
index.addDoc({
  title: "Making gold colored bronze",
  author: null,
  layout: "narrative",
  content: "- - - - - 079r - - - - - \n\n\nMaking gold colored bronze\n\nTake six ounces of tin […], six ounces of natural sulphur, and sal ammoniac. Melt the tin in a spoon. When it is molten add quicksilver and cast in a line. Then crush all the drugs together in a mortar, and\n- - - - - 079v - - - - - \nand put in an earthenwarepot, and make it that very hot ashes are underneath. Little by little, make the fire underneath grow bigger and bigger, and the pot must not be moved. And when it is cooked, and if it takes up to six hours, mind that the smoke does not make you ill because it is bad.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 272
});
index.addDoc({
  title: "Making varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 079v - - - - - \n\n\nMaking varnish\n\nTake some mastic, @sandarac, gum arabic, and aspic oil, as much of one as the other, and melt them all together. Before coating it, lay a coat of quite clear glue and let it dry.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 273
});
index.addDoc({
  title: "Antidote against the smoke of metals",
  author: null,
  layout: "narrative",
  content: "- - - - - 079v - - - - - \n\nAnnotations:\nPain, Ostie, Rostie: Bread in Early Modern Europe\n \n\nAntidote against the smoke of metals\n\nIn the morning, take a piece of thin toast with butter, neither antimony nor any other vapors will harm you. Or put half a pig’s bladder in front of your face.\n\n",
  activities: ["therapeutics"],
  purposes: ["application"],
  id: 274
});
index.addDoc({
  title: "Tin for casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 079v - - - - - \n\n\nTin for casting\n\nThey use common tin, which is the one that pewterers use for plates, which is composed of 9 or ten pounds of pure lead on one quintall of tin.\n\n\n  at left bottom margin of folio 079v\n\n  Some find that there is nothing better than pure tin.\n\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 275
});
index.addDoc({
  title: "Very hard white stucco",
  author: null,
  layout: "narrative",
  content: "- - - - - 080r - - - - - \n\n\nVery hard white stucco\n\nWhite wax, turpentine of Venice, eggshell, and ceruse.\n\n",
  activities: ["embellishign"],
  purposes: ["making"],
  id: 276
});
index.addDoc({
  title: "Mortar",
  author: null,
  layout: "narrative",
  content: "- - - - - 080r - - - - - \n\n\nMortar\n\nThey make them of fine material and fine copper in the shape of reinforced barrel, and which can hold 50 pounds of powder, and having made a clean hole in the ground at the foot of a wall, they embed the said loaded mortar in this hole, with the mouth on top, which will make a large breach.\n\n",
  activities: [],
  purposes: [],
  id: 277
});
index.addDoc({
  title: "Founders of small tin work",
  author: null,
  layout: "narrative",
  content: "- - - - - 080v - - - - - \n\nAnnotations:\nFounders of Small Tin Work\n \n\nFounders of small tin work\n\nThey usually cast from soft solder the things that should not become hollow, because hollow works require fine and soft tin. However, these things would not otherwise lose their coat or become hollow if they are mixed or include glass tin in them, just like they mix a little glass tin in the soft tin. They carve their work on stones of which the sharpening stones or barber’s files are made. These are found in great flakes near the mountains, and resemble slate. They are found in three colors: one reddish, that is not as perfect as the others because it does not sustain heat ; another one is the color of dark slate, and the other is whitish. When they work a relief, first they print it on carton, which is one finger thick, to serve as a pattern. After planing their stones and rubbing them together , they use a compass or little iron tools to carve their figures. They make their molds with three or four stones, to make a circle or a square with the stones which join perfectly because the stones are of equal size. Before casting, they rub the mould over with tallow, and it the mould absorbs it quickly because it is hot. Then, having put fine powder of quicklime into a cloth, they rub the mould using pounce in beating the linen on top, then blow it a little on top; this prevents bubbles from forming. The main thing is to make some vents. If the work is big, they do as it is shown on the picture. They make a hole in the medal, somewhere where it is least visible, and with a bit they pierce the mold on the side of the medal.\n\n\n  Figure\n\n\n\nAnd if they want their work to last, they pierce it somewhere and fit in a piece of cork. Lead or tin will not damage it.\n\nMake sure the pegs of your frame fit in easily so it will open with ease without moving anything else. Your box molds should fit well, and the table should be very flat.\n\nTry to carve with distilled vinegar.\n\nTry calcined oyster shells; they are said to be excellent for molding.\n\n\n  at left top margin of folio 080v\n\n  Make sure the pegs of your frame fit in easily so it will open with ease without moving anything else. Your box molds should fit well, and the table should be very flat.\n\n\n\n  at left top margin of folio 080v\n\n  Try to carve with distilled vinegar.\n\n\n\n  at left middle margin of folio 080v\n\n  Try calcined oyster shells; they are said to be excellent for molding.\n\n\n",
  activities: ["metalwork"],
  purposes: ["advice"],
  id: 278
});
index.addDoc({
  title: "Earth for moulding",
  author: null,
  layout: "narrative",
  content: "- - - - - 081r - - - - - \n\n\nEarth for moulding\n\nSheath maker’s earth or the one potters use to blanche the pots to make the lead flow better on it and to prevent the lead from soaking into them is very good to cast the hollow parts of what you want in relief. It releases better than plaster or sulphur which become hard once they have grasped on to the mould because earth sticks. It needs to be beaten vigorously so that it does not break. If the piece you want to mould is very large you can mould different parts separately. If you reheat it, it must be over a closed fire. One finds this earth at Le Fousseret, and in another place called Ox.\n\n",
  activities: ["molding"],
  purposes: ["advice"],
  id: 279
});
index.addDoc({
  title: "Sand work",
  author: null,
  layout: "narrative",
  content: "- - - - - 081r - - - - - \n\n\nSand work\n\nSome excellent sand is found for use with lead, tin and copper close to the hill of Pech—David, close to Toulouse. It should not be reheated much because drying out suddenly, it will lose its binding properties and retract [?] at the first inflow of metal, which makes the work become rough and unclean. It is much better to reheat it from a distance, instead of with a straw flame, which generates grime. Instead of filling the frame, you can use finer sand which you will have in a very thin cloth, and polish the medal and then the wet sand that you will put over it, which has more body, will grip it.\n\n\n  at left top margin of folio 081r\n\n  Tallow makes things fill with bubbles\n\n\n\n  at left top margin of folio 081r\n\n  Mercury stops the burning when one wants to cast. Allow the metal lead to flow, but if it is pure, it needs to be cast quite hot so it flows and vents.\n\n\n",
  activities: ["molding"],
  purposes: ["advice"],
  id: 280
});
index.addDoc({
  title: "Plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 081r - - - - - \n\n\nPlaster\n\nIt needs to be well cooked, which you will recognize when cooking it in an iron or metal casket. Mix it with an iron rod and if it sticks to the iron, it is not cooked enough, and if it doesn’t then it is ready. The water with which you soak it has to be a little warm and the mould of the above mentioned earth or other, also should be a little hot. The plaster work does not last and the faces and delicate things break if one does not use glue.\n\n",
  activities: ["molding"],
  purposes: ["advice"],
  id: 281
});
index.addDoc({
  title: "Carton",
  author: null,
  layout: "narrative",
  content: "- - - - - 081r - - - - - \n\n\nCarton\n\nIt is necessary to take paper from Florence, which is the finest, and crush it and and soak it several times and change the water every day, that way it does not smell bad. And after having moulded it into the hollow, put a cloth over it, and from the back side, rub the back of your paper with a sharp piece, as if you wanted to polish it and it will mould very neat. Then glue some cloth from the back side with strong glue.\n\n",
  activities: ["molding"],
  purposes: ["making"],
  id: 282
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 018v - - - - - \n\n\nSand\n\nBrick alone, quite finely sifted, and rubbed together, is good for casting lead and copper, when diluted with urine. This whitish brick should be used.\n\n",
  activities: ["sandmold making"],
  purposes: ["advice"],
  id: 283
});
index.addDoc({
  title: "Make copper and latten flow",
  author: null,
  layout: "narrative",
  content: "- - - - - 081v - - - - - \n\n\nMake copper and latten flow\n\nAt the end of the casting, as it is very hot, add some salt ammicke and saltpetre, it is a way to remove grime. Mix some clay with the latten. The metal must not touch the iron or the latten of the frame, but covered with sand or luth, it makes a very homogeneous cast.\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 284
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 081v - - - - - \n\n\nSand\n\nCalcined black pebbles from the river are good to use for lead. But they are weakened if used with metal.\n\nThere is only ardille clay with which one can make tiles, recooked and reddened and passed through a long narrow bag carefully soaked with raw egg white.\n\nWillow charcoal is excellent with sand and lead.\n\nLatten flows better.\n\n",
  activities: ["sandmold making"],
  purposes: ["advice"],
  id: 285
});
index.addDoc({
  title: "Cast of the frame",
  author: null,
  layout: "narrative",
  content: "- - - - - 081v - - - - - \n\n\nCast of the frame\n\nIt is good to make it with bow wood. Turn it in order to make it homogeneous, as that is important for the casting. Cover the mouth of the frame with clay or sand, so that the molten metal, copper or lead, do not touch at all the iron or latten of the frame, because it would turn it sour, and make it filled with bubbles. Always cast higher than the mold. Pay attention that the cast is not too wide or too deep because the narrowest is the best one. Because when it is large, the weight of the matter which runs breaks and spreads the mold and fills the matter with bubbles. When you have casted, gently hit your frame, so that the matter spreads better. Black lead [de saulmon] of the first melting, works very neatly.\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 286
});
index.addDoc({
  title: "Copper heat",
  author: null,
  layout: "narrative",
  content: "- - - - - 082r - - - - - \n\n\nCopper heat\n\nIt is hot enough when you see it is clean and smooth on top of its impurity.\n\n",
  activities: ["metalwork"],
  purposes: ["observation"],
  id: 287
});
index.addDoc({
  title: "Box mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 082r - - - - - \n\n\nBox mold\n\nIron and copper swell if the metal touches it [the box mold], and the wood warps. Thus, make a mold from wood, and [then] make the box molds from bricks in this mold the wooden mold of the thickness that you will want.\n\n",
  activities: ["molding"],
  purposes: ["advise"],
  id: 288
});
index.addDoc({
  title: "egg white",
  author: null,
  layout: "narrative",
  content: "- - - - - 082r - - - - - \n\nAnnotations:\nSands and Binders\n \n\negg white\n\nEgg white gives strength to sand so that many casts can be made from it.\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 289
});
index.addDoc({
  title: "Watchmakers",
  author: null,
  layout: "narrative",
  content: "- - - - - 082r - - - - - \n\n\nWatchmakers\n\nTo distribute the teeth proportionately on their wheels, they do not use a compass because there is no compass so fine that it can draw distances as small as those of the small wheels. But they make a platform (as they call it) out of latten that has been divided into various circles, and each of those circles is divided into equal sections marked by a point. And each circle has a certain number of points, as for example one has 30, another 36, and others 40. Then, on the pierced center of the platform, they place the little wheel. And on the center of the wheel there is a flat line or an alidade which points to the number on the circle that you want to mark on your wheel. Then with a point, they draw a line on the wheel. Then they return the alidade to the following point, and they thus go on marking it the dial. And to mark the points on the circles of their platform, they divide the circle in three and then divide this third part into as many sections as is necessary with regard to the total division of the circle. And, in this manner, they make the teeth’s division and distribution as fine as they please.\n\n\n  Figure\n\n\n\n",
  activities: ["watchmaking"],
  purposes: ["observation"],
  id: 290
});
index.addDoc({
  title: "Casting lead in lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 082v - - - - - \n\n\nCasting lead in lead\n\nSome make their caves with lead, they make them thick, and then cast lead in it.\n\nLead that is not cast hot enough is white, and darker when cast very hot.\n\n\n  at left top margin of folio 082v\n\n  Lead never comes as neat as tin.\n\n\n",
  activities: ["casting"],
  purposes: ["advise"],
  id: 291
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 082v - - - - - \n\n\nSand\n\nIf sand is too fat it should be reheated and sifted again.\n\n",
  activities: ["sand making"],
  purposes: ["advise"],
  id: 292
});
index.addDoc({
  title: "Ways of bronze casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 082v - - - - - \n\n\nWays of bronze casting\n\nLaiton de potin, which is the most acid, moulds neater than latten of cassole according to many people. All fine latten molds cleaner than red copper. If you want to cast something fragile and tenuous, the secret is casting as hot as possible so that the matter boils. You will know that it is hot enough when it smokes a lot and stirring it makes sparks. For heating well you should place your crucible as low as possible, close to the forging mill, so that the bellows blow on the middle of the crucible, thus it heats better than on the grate on which we usually put the crucible, under which the bellows blow. It is true that the crucible can easily break but you can lute it as you know founders do. You need to keep feeding the fire with coals, which are between the bellows and the crucible. Make sure to cast all at once and not in increments or drop by drop, otherwise the conduit will be plugged by the matter. It is better to make an abreveoir to abreuver the medal. It is necessary that you stir the melted matter with a stick, so that the matter at the bottom heats well. Because Iron turns the matter acid. Turn\n\n\n  at left middle margin of folio 082v\n\n  Some people add wool stuffing to heat up and make it runny.\n\n\n\n  at left bottom margin of folio 082v\n\n  Place one large iron slab under your crucible, the plate will redden and this will maintain the heat under your crucible.\n\n\n\n  at left bottom margin of folio 082v\n\n  Copper matter is good to cast because when broken, its grain is long and not short, that shows that the matter is soft. The matter is composed half of fine latten and half of red copper. This long grain is called longue tige long rod.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 293
});
index.addDoc({
  title: "Sand for lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 083r - - - - - \n\n\nSand for lead\n\nRecipe: Take grey soot from the silversmiths’ furnace, quick lime, and flour. Moisten according to [the rules of] the art, in the finest possible way you can.\n\n\n  at left top margin of folio 083r\n\n  The locksmiths’ grey soot which is held in their forge is quite fine when ground. It molds and is removed very neatly.\n\n\n",
  activities: ["sand making"],
  purposes: ["making"],
  id: 294
});
index.addDoc({
  title: "Sand for copper medals",
  author: null,
  layout: "narrative",
  content: "- - - - - 083r - - - - - \n\n\nSand for copper medals\n\nRecipe: Take hat felt burnt on a covered fire, iron dross, and burnt bone, all of which you should grind very finely, crush and spray with water and salt. Make a paste of it, mold it, and wipe it with hay fire. These three pulverized sands, having been very well refined on the porphyry slab, mold very well and cast well. Know that separately each of them is quite good. Burnt felt molds well and is removed quite neatly.\n\n\n  at left top margin of folio 083r\n\n  Plaster molds quite neatly but it swells. Bone does not have much body while iron dross does. Felt allows for an easy removal of the cast.\n\n\n",
  activities: ["sand making"],
  purposes: ["making","advice"],
  id: 295
});
index.addDoc({
  title: "Other sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 083r - - - - - \n\n\nOther sand\n\nTake charcoal made from vine shoots and clay earth, both well searced, and mix them with well—beaten egg white. Next calcinate it the resulting paste in the oven and to use it, dillute it in vinegar.\n\n",
  activities: ["sandmold making"],
  purposes: ["making"],
  id: 296
});
index.addDoc({
  title: "Other sand for use with lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 083 - - - - - \n\n\nOther sand for use with lead\n\nRecipe: Take finely crushed slate and pumice stone mixed together. Calcinate them three times in a covered and sealed pot in strong fire, and each time dilute them with urine.\n\n",
  activities: ["sand making"],
  purposes: ["making"],
  id: 297
});
index.addDoc({
  title: "Other sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 083r - - - - - \n\n\nOther sand\n\nRecipe: Take a tile that has not been cooked too much, grind it and diluted it in white wine with burnt black trasse paper. If you add burnt horse manure to it, it will be all the better. Moisten with egg white.\n\n\n  at left bottom margin of folio 083r\n\n  Trasse paper burnt under a light fire becomes akin to soft black charcoal. It molds nealty and is removed easily when mixed with the others ingredients or sands?.\n\n\n",
  activities: ["sand making"],
  purposes: ["making"],
  id: 298
});
index.addDoc({
  title: "Excellent sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 083r - - - - - \n\nAnnotations:\nAlabaster Sand\n \n\nExcellent sand\n\nBurn alabaster in a crusol under charcoal fire until it turns into powder. Once it is cold, finely pulverise it through a sieve to make it impalpable. With a pound of alabaster, one should use an ounce of sal ammoniac. Mix well and incorporate everything together. Next, put it in a cave or a wet location. And with this paste, mold whatever you need and then dry the mold under a fire. While the sand is hot, you cast whatever metal you may like and your cast will be as neat as the principal. And the sand will always work if it is kept in a wet location and dried by the fire.\n\n",
  activities: ["sandmold making"],
  purposes: ["making"],
  id: 299
});
index.addDoc({
  title: "Excellent type of molding with water",
  author: null,
  layout: "narrative",
  content: "- - - - - 083v - - - - - \n\n\nExcellent type of molding with water\n\nDissolve some laxunge de verre in a moist place and then pour this water over what you wish to mold, having turned it in a circle. Then let it coagulate over hot ashes. Use the same process with vitriol and ferrous sulphate which are very calcinated and reduce in water.\n\n",
  activities: ["molding"],
  purposes: ["making"],
  id: 300
});
index.addDoc({
  title: "Molding one part in relief and one hollow side",
  author: null,
  layout: "narrative",
  content: "- - - - - 083v - - - - - \n\n\nMolding one part in relief and one hollow side\n\nIt is necessary to cast two parts of very clean copper, latten or a similar metal and then when you mold the hollow in sand, leave the metal figure, that you have molded in the box mold, without budging it from its place. Then cast and if there is not enough thickness press a bit and force the figure down into the box mold.\n\nIt is wise to always mold the faces not close to the cast but the head in bottom because the strength of the material concentrates at the entry of the medal and where the force of the impurity is. Thus if you molded the face close to the cast in this manner, you could find impurities there. It is better that impurities remain on the clothes which you can repair more easily\n\nVinegar is better for moistening than wine. It is necessary that the box mold be quite equal, otherwise as you press one side, it lifts up the opposite one.\n\nThis is why the press is better because it tightens more extremely than by hand, and makes\n\nthe sand become fat which loses its moisture. With soft and fine sand which is powdered, and dry, burnish the medal.\n\nWhen you mold, always leaves your medal in one of the box molds without stirring it because if your pipe is not clean, it will not mold well. You can repair it thanks to the bolts which prevent it from moving. But first, burnish your medal with charcoal made from willow. Then clean your medal because that degreases it and makes it easier to remove it from the mold afterwards.\n\nDo not knock as you are molding because that damage the box mold and the sand.\n\n",
  activities: ["molding"],
  purposes: ["advice"],
  id: 301
});
index.addDoc({
  title: "Bellow",
  author: null,
  layout: "narrative",
  content: "- - - - - 083v - - - - - \n\n\nBellow\n\n\n  at left middle margin of folio 083v\n\n  To cast with a bellows furnace, cast the hottest you can. Do not place your bellows at the bottom around the base of the furnace, lest some coal should enter them. Place the bellows under the grate. It is wise to place your furnace in a place where there is wind so that the heat will grow better. It is necessary to stop carefully the doors of the furnace, that way only the bellows have an opening. At the end of the cast, you will blow slowly, as you did at the beginning.\n\n\n",
  activities: ["casing"],
  purposes: ["advice"],
  id: 302
});
index.addDoc({
  title: "Impromptu mask",
  author: null,
  layout: "narrative",
  content: "- - - - - 084r - - - - - \n\n\nImpromptu mask\n\nMold some paper and put it on the face of somebody who is making an ugly grimace, let it dry, then take your pattern to paint   # and liftings. It is necessary that it not be too wet for the aforementioned reasons. Reheat little by little, and if you left it out to dry slowly in some dry place without any high heat after molding it, it would work better, since if you expose it all of a sudden to high heat, it warps. I think it would be very convenient to reheat it in the mouth of the oven after you take bread out of it. One should not complain about the difficulty of preparing it; it can take as many castings as you wish, because it becomes as hard as marble, you can polish it, and the mold cannot be ruined. Having used it, crush and sift it again, without making a special effort to crush it very finely, since, when sifted through a common sieve, it is stronger and strips better than when it is very fine.\n",
  activities: ["mask making"],
  purposes: ["making"],
  id: 303
});
index.addDoc({
  title: "Magistry",
  author: null,
  layout: "narrative",
  content: "- - - - - 084r - - - - - \n\nAnnotations:\nMagistry\n \n\nMagistry\n\nDissolve rock salt or sandever that you have pulverized finely and placed on a marble slab in a pot. It will dry out while you reheat the mold, and will provide it with a binding to enable several castings. Try moistening it with tartar oil.\n",
  activities: ["making a liquid binder for casting sand"],
  purposes: ["making"],
  id: 304
});
index.addDoc({
  title: "Flour",
  author: null,
  layout: "narrative",
  content: "- - - - - 084r - - - - - \n\n\nFlour\n\nGround during Advent lasts the whole year.\n",
  activities: ["flour grinding"],
  purposes: ["making"],
  id: 305
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 084r - - - - - \n\nAnnotations:\nOx Bone, Wine, and Elm Root Sandcasting\n \n\nSand\n\nI tried the hoof of an ox, quite burned, pulverized and very well crushed on porphyry, until it is fine enough to slip through your fingers without being felt. On its own, it makes a very clean mold. But because on its own it is very dry and lean, it demands to be well wet and humidified, with a thick broth with elm root.    Dross of Iron, very burned ox hoof, and felt, all burn well in a closed fire. All three ground very finely on porphyry mold very neatly in lead, without any need to reheat it much, and by casting in a box mold either hot or cold.    Felt on its own provides a very clean mold if wet, and comes off easily. And also makes the other two come off easily    These sands can only undergo one cast    A fat sand which sticks together neatly, makes bubbles.    A fat metal needs lean sand.\n",
  activities: ["sandmold making"],
  purposes: ["making","advice"],
  id: 306
});
index.addDoc({
  title: "Eau Magistra",
  author: null,
  layout: "narrative",
  content: "- - - - - 084v - - - - - \n\nAnnotations:\nCalcined Oysters\n \n\nAnnotations:\nSands and Binders\n \n\nEau Magistra\n\nSome people think that salt water is not good, because the salt releases gas when heated and as a result causes bubbles. [In this case], there is only wine boiled with elm root.\n\nSanding charcoal makes [things] come off well. But one finds that willow charcoal creates bubbles, but oak or beech charcoal does the job without making bubbles.\n\n\n  at left middle margin of folio 084v\n\n  Try burnt oysters.\n\n",
  activities: ["making a liquid binder for casting sand"],
  purposes: ["advice"],
  id: 307
});
index.addDoc({
  title: "Lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 084v - - - - - \n\n\nLead\n\nFor casting, there is only soft lead that can be cast at a high temperature. And soft tin.\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 308
});
index.addDoc({
  title: "Sand, for the most excellent lead of all, for large and small reliefs",
  author: null,
  layout: "narrative",
  content: "- - - - - 084v - - - - - \n\n\nSand, for the most excellent lead of all, for large and small reliefs\n\nI took white lead and crushed it dry on porphyry, to make it very fine. Then I moistened it a lot with very well beaten egg white, so that it became like a paste, by making it stick together perfectly with the flat of a knife. I let it rest for a while.   X    Mix it well with the knife  &lt;div class=\"folio\" align=\"center\"&gt;- - - - - 085r - - - - - &lt;/div&gt;   and place it on a flat well—clean table, and since it has a desiccative quality, I knew it would dry out. I left it to dry for a while to reduce it to a powder and mold it with sand, it having been ground into small pieces with my fingers and the sharp side of a knife. I oiled my medal because oil cleans it without damaging it. And after cleaning and drying the medal with a cloth and small bristle brush of pork skin, I lightly oiled it once more with clear walnut oil, and gently swiped it with a cloth so that [the medal] would not be too oiled; having already considered that in this way [the medal] should come out easily, because the white lead, wet with glair, which would not damage the oil. This worked very well. I molded a medal very cleanly in high relief, without it having any lumps, which a lot of good sands such as felt, burnt bone, and iron dross failed to do on the first attempt. I re—cooked it and my mold became hard like marble. And then I knew that sands used to mold big relief must be very moist with some kind of water, which gives body and firmness, like egg white, gummed water, [or] one [water] boiled with elm root. And lightly oil your medal. It can take as many firings as you want because it is as hard as glass. But soft lead and sour tin must be cast at a very hot temperature.    Since that moment, I have realized that even though this sand is excellent, can be cast often and molds very neatly, it is fat and it makes bubbles. In this way, the soft lead does not suit the mold well. But I have tried to mix it with lean sand, such as pumice, metal scrapings, and similar things, in order to give it body, and to help it come off easily, because lean sand [alone] does not come off easily; and yet it takes metal well.    Try to mix white lead or minium with other sands.   X    Oil and smear with aspic oil, which will disappear when reheated, because the oil causes bubbling.    It is necessary to mold with egg white, and then mix it well. And once it is in the box mold, beat it well on the top with a pestle, or something else clean. This helps to make molding better and come out more easily.    It is best to fill the box mold in one go, because the mixture made of several sands, and the one from mines, that you use to fill the box mold, damages it.\n",
  activities: ["sand making"],
  purposes: ["making","advice"],
  id: 309
});
index.addDoc({
  title: "Green varnish for copper medals",
  author: null,
  layout: "narrative",
  content: "- - - - - 085r - - - - - \n\n\nGreen varnish for copper medals\n\nAfter casting them neatly, cover them with glass salts, which we use for sand, and moisten it. Within three or four days they will be green. Oil them after, and place them under some manure.\n\n",
  activities: ["varnish making"],
  purposes: ["making"],
  id: 310
});
index.addDoc({
  title: "Glue",
  author: null,
  layout: "narrative",
  content: "- - - - - 085r - - - - - \n\n\nGlue\n\nThe Flemish mend their earthenware pots with or colés, that is to say massicot, minium and varnish.\n\n",
  activities: ["glue making"],
  purposes: ["advice"],
  id: 311
});
index.addDoc({
  title: "Casters",
  author: null,
  layout: "narrative",
  content: "- - - - - 085v - - - - - \n\n\nCasters\n\nThey mix beaten egg white with earth of which they make the first layer of the crown of a bell in pieces. They also make bells and all other said pieces which the said egg white. This makes it come clean and sets and stabilizes the material. For the core of a small piece, egg white is also good.\n\nRosette in order to make it come clean, wants the mold to be a little hot and lead which is mixed with the red copper is therefore chiefly for small pieces.\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 312
});
index.addDoc({
  title: "Mortars",
  author: null,
  layout: "narrative",
  content: "- - - - - 085v - - - - - \n\n\nMortars\n\nThey should be of the finest material possible. In the same way, it is better to use copper for a cauldron than red copper, because it better resists a blow.\n\nThe mortars, therefore, used for grinding are stronger and there is less danger of breaking them if they are of fine copper. And for a private home, they do not ring so much and do not make as much noise as those of metal. It is true that those that are of metal ring louder for apothecaries.\n\nGrenades must be made from fine metal\n\n",
  activities: ["tool making"],
  purposes: ["advice"],
  id: 313
});
index.addDoc({
  title: "Sand from a mine",
  author: null,
  layout: "narrative",
  content: "- - - - - 085v - - - - - \n\n\nSand from a mine\n\nIt wants to be well recooked for big metal objects. Some people burn it inside a furnace until it becomes quite black and they grind it on the porphyry. Other people burn it with asphalt, but when it is too burned, it does not mold so cleanly, because it lacks body, and is too thin. You can give body to the sand with tripoli or burned felt.\n\n",
  activities: ["sand making"],
  purposes: ["advice"],
  id: 314
});
index.addDoc({
  title: "Sand Experiments",
  author: null,
  layout: "narrative",
  content: "- - - - - 085v - - - - - \n\n\nSand Experiments\n\nX I have tested sand of Th{oulous}e, and after seeing it well recooked two times in a skillet, I passed it through a fine tammy cloth, like the double sieve which apothecaries use, without grinding it further on the porphyry, as I have done other times. I moistened it the sand in infusion with elm root, and in it, I molded a big piece of a portrait of Jesus. I found it unmolded very well without having to tire myself out by hitting it from behind and it molded cleanly on one side of the relief and on the other concave. And [it was] of the thickness of a coin of forty sols. I cast this very hot\n\n\n  at left bottom margin of folio 085v\n\n  X\n\n\n\n  at left bottom margin of folio 085v\n\n  Sand from a mine, well chosen and well reheated, is the most excellent of all without trying to find all other mixtures because it receives all metal. It does not like to be used hot because it bubbles the more finely. For large works, it is not the best because it does not have enough body to sustain it,\n\n- - - - - 086r - - - - - \nwith the material of a frying pan mixed with a knob of . And before that, I had so reheated my molded box frame, now on the flame of my stove, now putting glowing coals beneath it, that it became almost red. I let it cool and cast it. It came out with a quite neat relief on one side &amp; hollow on the other, as much the figure as the letters. It is true that the material was whitish, as though it were metallic, but this was because of the potin. I made another cast with frying pan material, alone in the same sand, but not as reheated. It did not come out well.\n\nThen I molded burned bull’s foot bone, pulverized &amp; strained through a double sieve, and wet with egg white or wine boiled with the root of an elm. I lightly knocked on top of it while molding. While opening the box frame, I found that the figures had come out not at all clean &amp; it left the molds as though they were floury &amp; crumbling. I wet the bone sand more so that it held together well between the figures, and in this way I molded neatly with good come—away. And even though it seemed like the ground bone was lumpy, when casting with frying pan material, it turned out that my figures were quite clean. It is true that I had really really heated up my box frame, it did not admit but one cast. I find that, when a sand is so fine that it gets as heavy as ceruse &amp; even, without finding it arid, thin, sandy &amp; rather spongy, that sic it molds quite neatly but it does not receive metal very well, as if it were porous and sucking up the material. But, being fatty &amp; even, it puffs up &amp; does not receive subtle impressions at all. I believe that the secret of casting well lies in finding a sand that conforms well to the metal, this one for lead, the other for another, because each has its own particular one, so that it be molded easily and keenly. Then let it firm up on its own for a few days if you have the leisure for it. And afterwards let it really heat up again, not instantly nor with a large fire, but little by little, otherwise it will crumble &amp; always have some defects. Finally you must cast copper or latten or other great metals very hot and if possible with a large quantity of material that has a lot more heat than a small quantity. It’s necessary that the box frame be cold &amp; that you cast all in one go. Always lute the opening of your box frame because metal touching fire or metal.\n\n\n  at left top margin of folio 086r\n\n  This bone has to be really crushed in a mortar, it must not be reheated very much, because then it would crumble.\n\n- - - - - 086v - - - - - \n[or metal] fills with bubbles. Most of all, make sure that the cast is always higher than the molded thing, since the sand swells very often when reheating if the, even in the middle, and therefore with the molded thing remaining higher than the cast, the metal cannot run easily or at all nor enter at all. Also make sure that the mold &amp; the cast are indeed reheated. Also cast in one go &amp; outside of the wind. And if your medal is really thin, when you want to mold it, put a card, or two or three thicknesses of paper, so that the mold will be lower than the cast. Also cast in the place where your medal will be least thick &amp; where the relief is lowest.\n\n",
  activities: ["casting"],
  purposes: ["making","advice"],
  id: 315
});
index.addDoc({
  title: "Excellent sand for lead, tin and copper",
  author: null,
  layout: "narrative",
  content: "- - - - - 086v - - - - - \n\n\nExcellent sand for lead, tin and copper\n\nD\n\nSince, I molded with burned bone, dross of iron &amp; burned felt, really crushed and ground on marble and mixed together. I got them very wet with beaten egg white. And, as in the other [casts], having covered the medal and filled the box frame with sable de mine, I gave it a little tap. I found it really stripped &amp; molded quite neatly. I let it sit for a night. The morning after next I reheated it little by little for over the course of seven or eight hours (because if possible there must not remain any humidity at all in the box frame). Two times, I cast copper alloyed with ☾ there, as old K. The material came out really lustrous &amp; resonant &amp; without a chappe. And my sand was not corrupted at all. Since, I have cast in there many casts of sweet lead and tin, which came out the best and neatest of any others I have yet found.\n\nWhen you mold make some grooves around your mold in the box frame, so that you draw in this manner the matter from all sides.\n\n\n  Figure\n\n\n\nPotin from sernique &amp; other works runs yet better than fine latten. But I believe that half copper and half latten is better, which has served &amp; been in very thin works, like frying pans &amp; similar ones. I’ve seen come out quite well this mixture of half\n- - - - - 087r - - - - - \nIn order to mold well, it is necessary to cast several medals together in a large box mold, because when there is a lot of material and the crucible is almost full, it becomes hotter. Then, if you do not succeed with one of the medals, another will be good.\n\nIt is better to melt with a bellows furnace than with a wind furnace, because it heats more vigorously. It is true that latten melts better in the wind furnace, because it is more brittle than copper.\n\nSome founders superstitiously believe that there are only three days in a week that are good for melting, that is, Tuesdays, Wednesdays Thursdays, and Saturdays. For them, the others are unlucky.\n\nWhen you mold, do not excessively pound on the medal that is in sand, because that prevents it from being cleanly stripped, and cracks the mold.\n\nSee to it that sand does not go over the edges of the box mold, because if the molded medal is higher than the cast, metal will not easily enter the form. Therefore, always take care that the surface of your cast surpasses the mold in a straight line. To accomplish this, if you wish, put a piece of cardboard of whatever thickness you please on top of the mold.\n\nTo prevent their large casting works from becoming too porous, founders are careful to heat their molds very well. And to know if the molds are heated enough, they tap them with their finger, and if they start ringing like a pot, they are heated enough.\n\nIn order to cast their canons cleanly, they mix with their founder’s earth some fine casting sand, if they can get any.\n\n",
  activities: ["sandmold making"],
  purposes: ["making","advice"],
  id: 316
});
index.addDoc({
  title: "Sand of Toulouse",
  author: null,
  layout: "narrative",
  content: "- - - - - 087r - - - - - \n\n\nSand of Toulouse\n\nThe sand generally considered good is the one found in a vineyard near Pech—David. But the best is the one is from the Touch, a river close to Saint—Michel and Blagnac, in a vineyard at a high altitude. This sand is thinner, and a bit greasier than the other, and better for small works. It should not be overheated.\n\n",
  activities: ["sand sourcing"],
  purposes: ["observation"],
  id: 317
});
index.addDoc({
  title: "Sand, salte, and burned earth",
  author: null,
  layout: "narrative",
  content: "- - - - - 087v - - - - - \n\n\nSand, salte, and burned earth\n\nSand, when overheated, does not hold as well. Slate is baked and will mold clean, yet it is true that often it becomes porous, just like burned earth also does, as well as any kind of greasy sand.\n\n\n  at left top margin of folio 087v\n\n  I find that one must not hammer at all on sand already very finely pulverised, because it would damage it, and then make the sand would not be able to release the cast cleanly. Still, it needs to be pressed hard, and moisten it sufficiently.\n\n\n",
  activities: ["sand molding"],
  purposes: ["advice"],
  id: 318
});
index.addDoc({
  title: "Magistry",
  author: null,
  layout: "narrative",
  content: "- - - - - 087v - - - - - \n\n\nMagistry\n\nFounders harvest the roots of a young elm when it is sappy, and boil it in wine, or better yet vinegar. They prepare a year’s worth of it and store it in a cask.\n\n",
  activities: [],
  purposes: [],
  id: 319
});
index.addDoc({
  title: "Vine",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n\nVine\n\nAs with a bramble, it can be planted on both sides. And those who plant the larger side facing a slope say that it makes a larger stock. But it only has a higher point, because it grows higher.\n\n",
  activities: [],
  purposes: [],
  id: 320
});
index.addDoc({
  title: "Mortars",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n\nMortars\n\nThe fine copper mortars do not throw any flames, as long as the iron pestle is not tempered. If the mortar is indeed made from metal, when this is sour, in this case one makes the bottom of large mortars from fine copper.\n\n",
  activities: [],
  purposes: [],
  id: 321
});
index.addDoc({
  title: "Varnish",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n\nVarnish\n\nTurpentine oil: turpentine &amp; good eau de vie, to dry it out; heat it without mixing on the stove, so that it mixes of its own accord in melting. After, test it on a very clean blade, &amp; you will know from this whether it has enough body and whether it does not flow too much.\n\n",
  activities: [],
  purposes: [],
  id: 322
});
index.addDoc({
  title: "Grafting",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n\nGrafting\n\nOne knows from experience that the young shoot that is enters into the incision on the sunny side takes hardly often at all when it is also bowed.\n\n",
  activities: [],
  purposes: [],
  id: 323
});
index.addDoc({
  title: "Baker",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n\nBaker\n\nDust guards wheat against being worm—eaten. And to clean it well when it is stained &amp; like rust, pass some ashes through a sieve and mix them with the wheat, then sift the whole thing with a bolting cloth made from rough cloth or canvas. The ashes will pass through &amp; your wheat will stay nicely yellow &amp; very fine.\n\n",
  activities: [],
  purposes: [],
  id: 324
});
index.addDoc({
  title: "Looking-glass tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 088r - - - - - \n\nLooking—glass tin\n\nIt makes material whiter.\n\n",
  activities: [],
  purposes: [],
  id: 325
});
index.addDoc({
  title: "Sand from pulverised rock salt and sand from a minium finely ground on marble",
  author: null,
  layout: "narrative",
  content: "- - - - - 088v - - - - - \n\nSand from pulverised rock salt and sand from a minium finely ground on marble\n\nAfter they have been dryly ground and beaten in the mortar, they are ground finely on the marble. I mixed the same quantity of each material, and in order to mix them better, I ground them on the porphyry again, and then filtered this through a double sieve or the sleeve of a shirt. Then, I put them on sheets of paper and stored it on marble in a cellar. In one night, they were both moist enough [that there there was no need] to dampen them further because rock salt, like all other salts, dissolves in dampness. I molded with this very neatly because both should be quite fine. They need to be moist enough so it can be removed easily.\n\n",
  activities: [],
  purposes: [],
  id: 326
});
index.addDoc({
  title: "Mineral sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 088v - - - - - \n\nMineral sand\n\nIt does not matter if the sand color is white or yellow. Above all it the sand must be lumped together much like a precious stone or a stone, and the deeper in the earth one gets it from, the better. The signs of its quality is that it is thus gathered together, that, if the stone is removed as it should be i.e. in the correct way, it forms pieces and lumps together, which demonstrates its capacity for binding, and that it the sand is not too dry. However, it should crumble in your hands. And the grain must be quite small, fine, and homogeneous. If this sand is not fine enough, you can filter it and grind it up finely either with water, or through a sieve, when it or on the porphyry. That way it loses its dryness and becomes greasy and well bound. You can mold it in a box mold or in a noyau without wadding, and try it with lead because, if it does not swell and casts neatly, it will bear out well too. Some say that fatty sands do not work for casting metal that is too hot. Artisans who undertake a big job and who want to save money do not need to crush sand and seek the curious properties of artificial sand; they have more to profit from finding natural sand that has the finest grain possible. And for a small job, they take advantage of finding the finest natural sand they can. For a smaller job, they only filter the sand through the sieve. But those who work on a very small scale crush the sand and grind it finely until it becomes impalpable, because they do not need as much sand.\n\n\n  at left middle margin of folio 088v\n\n  Ground wheat makes a tawny—colored powder that is quite fine and quite soft. Once this powder has been mixed, it can mix mold very neatly. Try wheat flour burned in an enclosed fire.\n\n\n",
  activities: [],
  purposes: [],
  id: 327
});
index.addDoc({
  title: "Powder of ox bone and rock salt",
  author: null,
  layout: "narrative",
  content: "- - - - - 089r - - - - - \nAnnotations:\nOx Bone and Rock Salt\n \n\nPowder of ox bone and rock salt\n\nI pulverised them separately and ground them finely on the porphyry as much as I could. Then I mixed all of one with the other and re—ground it on the porphyry. Afterwards I moistened it in paper folded in a moist napkin which is made wet more quickly from the moisture of the night, or the moisture of the cellar. I have never found one which can be removed more cleanly from the mold than this, though it needs to be quite moist. And if you want to cast small works, make it very hot. It came out very cleanly from the doulx tin, like the main one, and has sustained several castings. For tin, I believe that it is not necessary to look further to find a material that takes to powder better, and even for use with fine lead which has almost better results than tinTou. The bone of an ox hoof is always dry, that is why you must mix it with fatty sand, so it will bind like tripoli, salts, felt, ashes and similar materials. If you do not mix ox—hoof bone, it will not turn out from the mold and will not mold cleanly because it crumbles.\n\n",
  activities: [],
  purposes: [],
  id: 328
});
index.addDoc({
  title: "Reheating or wiping a box mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 089r - - - - - \n\nReheating or wiping a box mold\n\nAlways arrange the most delicate parts, like faces or handles, so that nothing will fall which would then disturb your fusion.\n\n",
  activities: [],
  purposes: [],
  id: 329
});
index.addDoc({
  title: "Natural sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 089r - - - - - \n\nNatural sand\n\nThis should not be reheated for lead and tin, it is better all new and fresh.\n\n",
  activities: [],
  purposes: [],
  id: 330
});
index.addDoc({
  title: "Ammonia salt and alabaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 089v - - - - - \n\nAmmonia salt and alabaster\n\nDry ammonia salt, ground on a marble slab, molds very cleanly and is easily removed from the mold. When mixed with pulverized alabaster, use two ounces per pound of alabaster; it also is easily removed from the mold. It should be humidified in a cellar or in the cool humid evening air, or to have it quickly, in a sheet of paper in a moist towel. Take care not to leave it too long because it will soften, which would not be good if you wanted to use it as a box mold. However you can use it well as a core provided that you dry it gently and away from the fire. Otherwise the heat would make it swell, and push the salt onto the surface, causing lumps. If you want to mold a core, rub your medal with aspic oil. It is better to use 4 ounces of ammonia salt per pound. Humidify it in a damp place for two or three days, so that the material can be handled without sticking. You will mold very cleanly. Let the mold dry out and reheat it, that way it will get body, and become as hard as stone and when it is like that it is far easier to remove from the mold. If you do not reheat it, it could crumble when removed from the mold because of its thinness. It is the same with a large relief medal. Once you have molded, pulverize the material like before, and moisten it in a damp atmosphere. left—middleAll sands which can be removed easily from the mold have body, well—made fat ammonia, and is sand that removes easily from a mold. There is nothing better for binding than the salt of the metal itself. When ground into powder, they pick up moisture, dry and reheat together.\n\n",
  activities: [],
  purposes: [],
  id: 331
});
index.addDoc({
  title: "White glassmaker's sand mixed with ammonia salt",
  author: null,
  layout: "narrative",
  content: "- - - - - 089v - - - - - \n\nWhite glassmaker’s sand mixed with ammonia salt\n\nYou can find this sand in Cominge, near the town Aurignac. This sand is dry and as white as salt. Glassmakers and potters use this sand ground on the porphyry until it becomes as fine as possible. Easy to grind, this sand looks like calcined alabaster, and provides a very clean mold. I have not found another as suitable for delicate bas reliefs. It is also excellent to mold as a core, without any box mold. You must grind it very finely on a porphyry with gummed water or pure water, then apply a thick coat (as thick as mustard or a little bit thicker) over the medal, which has already been lightly rubbed with oil, walnut oil or, even better, aspic oil. For best results, let it dry by itself, away from fire, for one or two days. If you are in a hurry, you can heat it; it should not break if the coat is quite thick. If it is suddenly exposed to fire, some holes will appear; that does not happen if it has been gently dried. Once dry, reheat it, and it should allow for several castings.\n\n",
  activities: [],
  purposes: [],
  id: 332
});
index.addDoc({
  title: "Sal ammoniac and iron dross",
  author: null,
  layout: "narrative",
  content: "- - - - - 090r - - - - - \n\nSal ammoniac and iron dross\n\nI pulverized sal ammoniac, previously well dried in a hot bronze mortar over heat. Then I filtered the salt through a double sieve; it became very fine. But to make it finer, I dry ground it on the porphyry, then I mixed it with iron dross which was pulverized and ground the same way. Both ingredients take a very clean cast of bas—reliefs, without being moistened with serain, or into the hollow mould, or anywhere else with the serviette, and the cast can be cleanly removed.\n\n",
  activities: [],
  purposes: [],
  id: 333
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 090r - - - - - \n\nSand\n\nMolders from Foix who cast their medals sideways use crocum ferri and calcinated slate. It is used for very flat things.\n\n",
  activities: [],
  purposes: [],
  id: 334
});
index.addDoc({
  title: "Every kind of sand can be made useful",
  author: null,
  layout: "narrative",
  content: "- - - - - 090r - - - - - \n\nEvery kind of sand can be made useful\n\nArtisans who do big works, and who need to search for things made by nature to pursue their work, because nature does not want to sell its wares to its children, and in order to save the time they would spend grinding, pulverizing and artificially preparing their sand, look for sand from sandpits, which is not too fat from the soil, nor too arid and, consequently, without any binder effect. From deep in the sandpit, one can find some lumps and gravel that show the sand’s natural compaction; it is quite hard to break, with very small and fine grains, quite smooth between the fingers. And since it is found solely close to mountainous regions or arid lands, you cannot find any near every good town, where artisans live. Thus, if they can’t find any close to their home, they prefer to order some of this sand from afar, like Lyon, Venice or Paris, near the Sainte Chapelle, and similar areas, instead of preparing it themselves. Nonetheless, you can be assured that in all locations, you can make sand from the sandpit and will be good and will mold cleanly. Because the sand is coarse and dry, filter it through a sieve. If it is not fine enough, wash it. And when the water has settled a little, pour the soiled water into another pot. The coarse [grains] will quickly fall to the bottom of the first pot. But the sand from the troubled water pot, having settled, will be much finer. If this sand does not bind enough, dry crush it on the porphyry, thus making it impalpable, and it will bind as chalk does. If you wish you can reheat it, and straight after crush it and blend it with salts, or burned cloth, or felt, or paper ashes, or similar material.\n\n",
  activities: [],
  purposes: [],
  id: 335
});
index.addDoc({
  title: "Potters' clay",
  author: null,
  layout: "narrative",
  content: "- - - - - 090v - - - - - \n\nPotters’ clay\n\nGrind it in a mortar mustard mill with water, and it will become as impalpable as possible. Dry it, then moisten it with salt water, which give force to all sands in order to allow several castings.\n\n",
  activities: [],
  purposes: [],
  id: 336
});
index.addDoc({
  title: "Orange trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 090v - - - - - \n\nOrange trees\n\nIn Italy, particularly in the coldest areas like Lombardia, people plant the orange trees inside squared wood planters. The planters are larger at the bottom than at the top. People make handles on each side, where they attach straps in order to carry the planter, like one carries the gout sufferers, because if one used wheels to roll them one would damage the garden’s paths. Every two year they remember to open the sides of the planters and meticulously cut and trim the ends of the orange tree’s roots, which are dry. Otherwise, the roots find the wood [of the planter] and tighten on it, they double over themselves, the ends dry and the tree dies. Once trimmed, the roots gain new space to expand, without encountering resistance from the wood of the planter. That is why it is better to join the sides of the planter with screws rather than nails, to avoid shaking the soil when one opens them.\n\n",
  activities: [],
  purposes: [],
  id: 337
});
index.addDoc({
  title: "Grafting",
  author: null,
  layout: "narrative",
  content: "- - - - - 091r - - - - - \n\nGrafting\n\nAny tree that has a large pith will be hard to be graft from, because the cutting is difficult to remove. If the pith is damaged, the graft will take in an unstraight manner, like with vines of all peach and apricot trees. Apricot trees have a very thin bark, and so it is necessary to graft them onto young trees whose own bark is not thick yet, such as the young shoots of prune trees or apricot trees. The graft will not take if the cutting gets wet. It is necessary therefore to graft in serein and mild weather, not too cold and not too windy. One must use old wood to graft, if one wants to graft on a tree that is already mature and quite big; because if this is the case, it will compress the cutting, and if the cutting is of young wood, it will not grow properly. But old wood resists the compression of old wood better than the young, because it is harder than young wood. But if the graft is done with only old wood, it will never grow beautifully, but will be frail and short and will take a long time to grow.\n\n",
  activities: [],
  purposes: [],
  id: 338
});
index.addDoc({
  title: "Molding with cuttlefish bone",
  author: null,
  layout: "narrative",
  content: "- - - - - 091r - - - - - \n\nMolding with cuttlefish bone\n\nPay attention to keep the bones in a dry place, because they are very prone to dampness. If you have a small medal, divide the bone into two pieces, then smooth the two parts with a knife. And on a dry, smooth rooftile [that has been] pulverized with willow charcoal, rub and polish the two half bones. In this way, the bones soak up the willow charcoal so that the bones will come off cleanly from the cast, and will not stick to it. Then on a fake bone, that is to say a bit of smooth brick of the same width as your bone, place your medal. And then on the medal, put your bone and press it firmly with another stone of the same size. And for a second time, mold it, and instead smooth over the top with willow charcoal and blow slowly, then press as before, and it will cast neatly. If it is for a spoon handle, two whole bones are needed. Any work that is cast is brittle and prone to breaking, because the metal swells when cast, and contracts and condenses when hammered. That is why it is necessary to retrace with a chisel the cast object and in this way the metal will contract again and let it escrouir. If the piece you have to cast is in high relief, first trace the mold and the hollow with a penknife, to make a clear path for the medal and then cast it. And if the medal has two sides\n\n\n  at left bottom margin of folio 091r\n\n  Rather than casting, heat the bones only to make them lose the coldness and wetness.\n\n\n\n  at left bottom margin of folio 091r\n\n  When the lead gets too hot, it calcinates.\n\n- - - - - 091v - - - - - \nBecause the two bones are joined, cut around them with precision, and make notches in different places which cross through where the two bones are joined, so as to recognize the place where they were first joined. Or with little shards of wood, you can also pierce the bones, or coat the joints with clay, and leave it to dry. Compress between them it with your two hands in between your knees; and do not use a normal press, otherwise the bones will break. Mold at your leisure two or three times, until you can see that it has the design come up and is well imprinted. And on each occasion rather than putting the piece straight back in the mold, smooth with willow charcoal because it helps it to come out easily. Once you have cast, rub your medal with oil and willow charcoal with a brush, to make it dull. Take care that your medal is not greasy or oily when you cast it in cuttlefish bone. Once you have cast, leave it to cool rather than taking the medal out straight away, because when one takes it out hot, some bone will come away with the medal. Cast at medium heat, which you will recognize because the bone should stay almost white. But when it is too hot, the bone becomes brown. The proportion of lead and tin is equal, one to the other. If the piece is difficult to cast, and composed of various pieces, cast it with a forked pattern, of three or four grooves, and make and make these grooves where the metal is the thickest. Also make these grooves around the medal and directly on the head because this attracts the metal and will fill the figure best. Lift your boxmold a little, once you cast, and in this way you will be able to make several clean casts. Tin that is too hot burns the bone which becomes damaged. Moreover, having come out of the mold hot , it risks breaking. \n&gt; Figure\n&gt; \n\n",
  activities: [],
  purposes: [],
  id: 339
});
index.addDoc({
  title: "Sand mixture easy to melt",
  author: null,
  layout: "narrative",
  content: "- - - - - 092r - - - - - \n\nSand mixture easy to melt\n\nOne â„¥ of part soft tin, one part fine lead, one part looking—glass tin and one part argent vif arrestÃ© makes an alloy and a solder, so easy to melt that it could easily be melted in a dish of fine tin.\n\n",
  activities: [],
  purposes: [],
  id: 340
});
index.addDoc({
  title: "Molding hollow on one side and in relief on the other",
  author: null,
  layout: "narrative",
  content: "- - - - - 092r - - - - - \nAnnotations:\nOne-Sided Hollow Cast Medals\n \n\nMolding hollow on one side and in relief on the other\n\nAnd for this effect, one casts a medal of fine tin, which is harder to melt. And since it is neat, one molds with it. And one leaves it in one half of the box mold, &amp; presses it a little so that it holds better. And next, you shall cast in your box mold the solder described above, or another more meltable than fine tin. And thus, the second medal will melt and mold itself on the first one without ruining it. But to be safer, temper lamp black with water, &amp; with a pinceau, give a light coat of this to the medal, which remains in the box mold, &amp; leave to dry. Thus it will not melt. But if you have a medal of copper or silver, you can leave it in the casting, if you want to cast with lead or tin; but it is necessary that it be a little hot, for the cold would make the tin contract. Tin needs to be cast quite hot to come out neat. Tin doulx, which is the best for the cast, is the one that once cast en grille, is burnished &amp; shiny &amp; polished like a mirror, &amp; appears to have been burnished, &amp; does not have holes like the one that is brittle, &amp; that is not shiny, as if burnished.\n\n",
  activities: [],
  purposes: [],
  id: 341
});
index.addDoc({
  title: "Potin",
  author: null,
  layout: "narrative",
  content: "- - - - - 092r - - - - - \n\nPotin\n\nPotin, once cast very hot, runs and drips like tin. But the medal becomes whitish and immediately casts off the green, which good substances do not do.\n\n",
  activities: [],
  purposes: [],
  id: 342
});
index.addDoc({
  title: "Molding statues",
  author: null,
  layout: "narrative",
  content: "- - - - - 092r - - - - - \n\nMolding statues\n\nHalf founderâ€™s earth, which founders use, and half clay earth renders very neatly.\n\n",
  activities: [],
  purposes: [],
  id: 343
});
index.addDoc({
  title: "Sand of river tellins and mussels",
  author: null,
  layout: "narrative",
  content: "- - - - - 092v - - - - - \n\nSand of river tellins and mussels\n\nThe long shells that can be found in rivers of fresh water, being calcinated, make a white and very fine [impalpable] sand which moulds very clean.\n\n",
  activities: [],
  purposes: [],
  id: 344
});
index.addDoc({
  title: "Freezing mercury",
  author: null,
  layout: "narrative",
  content: "- - - - - 092v - - - - - \n\nFreezing mercury\n\nIt can be frozen, as I tested, letting it boil one or two hours in a rather large iron pan putting, for each â„¥ of â˜¿, ii â„¥ of vert—de—gris and vitriol of saltpetre, each in the same quantity, with enough of the blacksmith’s old water. Or melt 4 â„¥ of tin, and when it has cooled, purify it by removing the filth on the top, then make a hole and inside there add i â„¥ of â˜¿ and if you remelt it, it will be like tin but it will be fragile. If you want to know if it is tin or â˜¿, redden a shovel and put a small piece of your ingot on the top. If it is tin, the piece will melt but remain, but if it is â˜¿, it will melt immediately then, crackling quite hard, it will evaporate. It must be frozen in a ladle or in a hollow crucible, and make the hole medium sized. It can also be frozen, as I tried, that is to say with aqua fortis which before corroded a bit of silver. This, mixed, will make tin and lead fluid.\n\n",
  activities: [],
  purposes: [],
  id: 345
});
index.addDoc({
  title: "Mixture",
  author: null,
  layout: "narrative",
  content: "- - - - - 092v - - - - - \n\nMixture\n\nPure tin, frozen mercury, smells like tin. Iced tin, pure lead, as much of one as of the other, makes a substance that melts very quickly but that is fragile and white. I think that it would be good for soldering. [Takes a] long time to cool.\n\n",
  activities: [],
  purposes: [],
  id: 346
});
index.addDoc({
  title: "Olives",
  author: null,
  layout: "narrative",
  content: "- - - - - 093r - - - - - \n\nOlives\n\nThe olives go bad if you do not refresh their salt water once a month, do not touch it with your hands, otherwise they will go bad.\n\n",
  activities: [],
  purposes: [],
  id: 347
});
index.addDoc({
  title: "Country folk's observation",
  author: null,
  layout: "narrative",
  content: "- - - - - 093r - - - - - \n\nCountry folk’s observation\n\nWhen it freezes on Palm Sunday, it will freeze every month of the year When the first flowers fall because of the frost, the other flowers also start perish.\n\n",
  activities: [],
  purposes: [],
  id: 348
});
index.addDoc({
  title: "Grafts",
  author: null,
  layout: "narrative",
  content: "- - - - - 093r - - - - - \n\nGrafts\n\nDo not use a graft from old wood, because it never makes a beautiful tree. Leave only two shoots on the graft and no more, otherwise it will become weaker. The wind torments it and leaves it strengthless to propagate by cuttings. Trees which have big pith, such as peach trees, and all other trees of their kind, and the plum trees, can’t be grafted when freezing because the cold damages their pith, which also has to be protected avoiding to cut the bottom of the graft. All grafts must not be done earlier than the sap flows up, otherwise they dry.\n\n",
  activities: [],
  purposes: [],
  id: 349
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 093r - - - - - \n\nSand\n\nThe white ash of all kinds of wood, which still sticks to the wood while burning, and which has not fallen into the hearth, molds very clean\n\n",
  activities: [],
  purposes: [],
  id: 350
});
index.addDoc({
  title: "Sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 093r - - - - - \n\nSand\n\nVery fine pulverized soot molds and removes easily from the mold. The best soot, which is greasy and shiny, is the one from the big kitchens Very fine pulverized quicklime works, but mixed flint, crumbled into the hollow, does better.\n\n",
  activities: [],
  purposes: [],
  id: 351
});
index.addDoc({
  title: "Faces painted with distemper",
  author: null,
  layout: "narrative",
  content: "- - - - - 093v - - - - - \nAnnotations:\nPainting Skin and Shadows a destrempe, fol. 65r, 66r, 93v (Nisse)\n \n\nFaces painted with distemper\n\nBecause colors painted with distemper dry quickly and one would not have enough time to complete the shadows and touches on the face, one wets the reverse of the face, on canvas, with a wet sponge. Then, with a small pinceau, one makes the shadows, which won’t come off. Next, one lays the flesh tones, which do not prevent the already painted shadows from appearing. And then, one retouches the more prominent areas with lively flesh tones. And with another pinceau one retouches the shadows in hatching. The shadow strokes do not come off because they are made of bister, which stains the canvas like rust. The said bister is good for making shadows with distemper, for in oil it has no body and would dry with great difficulty. One mixes ru ochre in the said bister for shadows with a little sap green. The best bister is the rich, shiny one from the fireplaces of large kitchens. It is difficult to grind and screeches on the marble slab.\n\n",
  activities: [],
  purposes: [],
  id: 352
});
index.addDoc({
  title: "Azure",
  author: null,
  layout: "narrative",
  content: "- - - - - 093v - - - - - \nAnnotations:\nAzure Enamels, fol. 11r, 59r, 61v, 93v (Chang, Clemens)\n \n\nAzure\n\nAzur desmail always wants to be cleaned because the filth that can be seen in the used water would makes it die. It always needs to be coated twice, &amp; first very thickly, driving the pinceau by laying it lengthwise then across. It is better used on canvas, which imbibes it immediately, than on wood. Varnish restores its vigor, because while imbibing, it becomes dark. To try it, painters bring their palettes to the grocers and distemper and mix @ it with a bit of white crushed in oil, for in this way the beautiful shows its turquine vivacity, while the mediocre is lavender grey. The thinner one is best to work with. It is made thinner by being washed.\n\n",
  activities: [],
  purposes: [],
  id: 353
});
index.addDoc({
  title: "Purple and lake",
  author: null,
  layout: "narrative",
  content: "- - - - - 093v - - - - - \n\nPurple and lake\n\nIt is made of azure and lake which is also tested on the palette with white. The one which gives a clear red rose color, tending slightly towards purple, on a polished knife or on glass, is esteemed beautiful. The dark red one is not as pleasant.\n\n",
  activities: [],
  purposes: [],
  id: 354
});
index.addDoc({
  title: "Burnisher",
  author: null,
  layout: "narrative",
  content: "- - - - - 094r - - - - - \n\nBurnisher\n\nThe different parts of a sword are the handle, [and] the sheath of the sword. What comes next is the heel. The rest is the blade. The sides are the edge and the point. Certain blades, acute in point, have only one side filed in the middle &amp; along the whole length, and are easy to break. Other blades are called of three molds or three grips, which have one good rise in the middle, but this elevation is flat as if it were acute in point but flattened. These ones are most certain. Others are called fluted, which are notched from the middle, &amp; when it is along the whole length, they are just as easy to break as those acute in point and are more troublesome to burnish because the burnishing stick can’t get in. But they make one specially that is narrow. Making up the hilt of the sword are the pommel, the branches of the hilt and the cross—guard, which is this iron strip that closes off the guard [and] that is at the end of the heel to stop thrusts from sliding down the hilt. The rings are these two branches in half round that start from the eye of the guard and go all the way to the branch of the cross—guard. The branch that crosses the hilt is called the body and this escutcheon, by which the sword enters the sheath and to which all the branches return, and which holds them, is called the eye of the guard. Following is the wood of the grip which one glues or more fittingly [uses] some mingled wax which is made of wax and pitch, for rosin would be too hard. He heats it lightly, then rubs the wood of the grip so that the tang takes hold, or the threads, otherwise, when a thread frays off, the whole thing will break all at once. With iron thread or dog skin, one also uses glue. The trimming set on the wood, which is made of silk or thread, is called the cord, which is made from two or three threads twined on the spinning wheel, or 4 if the silk is thin. A cord a little bigger holds better. The rivements, which are also made of silk at both ends of the grip, are called the buttons. Some grips are made of silk, seal skin, iron thread reheated with gold and fine and false silver thread &amp; velvet [thread]. Iron thread is of less price and is most durable. Next is that of silk, if one does not have the convenience of being close to the sea in order to recover some dog skin, which is quite convenient. The good skin costs fifty or lx s{ous} and makes 4 or five dozen grips. This one gives a good grip and a sure hand. To put it to work, if it is too hard, soak it for one or two hours in slightly lukewarm aqua fortis. Because if it were too hot, it would boil and spoil the skin. It is sewn with black thread.\n\n\n  at left middle margin of folio 094r\n\n  Figure\n\n\n\n- - - - - 094v - - - - - \nThe gold handles are made with some yellow thin cloth set below or other kind of chalk—yellowed fabric. And this cloth is set on with glue or aforesaid gum. This is in order to make the thread hold better on it. These latter are made of cordons like the silk ones and between two cordons are put one or two threads to enhance it. The silver one is identically made. And there is as much difficulty as for the silk one, not because silk is difficult to twisted, but it needs to be twisted twice. A fine gold handle is worth 28 or 20 cents. The best sword point is of sage foliage. This long stick on which the sword is laid down and attached in order to furbish is called the chameau. It is commonly made from rowan which is hard and even. The stick underneath which is folded bow—like is called the arch. The stick above is called stick of the fustÃ©e. And this square piece, used on the sword to burnish it, is called the fustÃ©e. There are two horns, one is called the oil hornet and the other the emery hornet. There is an iron tool with the shape of a halberd point, square and made of very even and well limed steel called the grateau which helps to soften lime strokes on swords hilts and to sharpen blades once they are softened which is better than with stone or other tools which leave some scratches. To make the swords cut better, the edge from the point is also sharpened. Those who create sword hilts are different craftsmen than furbishers. The fustÃ©e is a three—finger—thick, square wood tool, made of boxwood which fit in the middle of the fustÃ©e stick to furbish. The fresil stick is made of willow wood which is to [â€¦] weapon with some clinker which is the iron scale falling from the blacksmiths’ forge.\n\n\n  at left top margin of folio 094v\n\n  Figure\n\n le banc des fourreaux\n\n\n\n  at left middle margin of folio 094v\n\n  Figure\n\n\n\n\n  at left middle margin of folio 094v\n\n  a b D le baston a felinder c le flin ou pierre de fouldre\n\n- - - - - 095r - - - - - \nThe furbisher buys his blades by the dozen which are not finished, [but ready] to be pulled from [their] sheaths since he does this himself in order to add them well at the pommels and guards. Spanish swords are esteemed to be better for they are of better steel and iron but they are not as well—forged as Vienna swords, in DauphinÃ©. The Spanish ones are not as well sharpened from the forge since they sharpen them with their feet and this is what makes them wavy. Vienna blades cost commonly Xviii or 19 lb. The first thing the furbisher does to his new blades is to draw them out from the sheath, which he does himself or has it done by locksmiths or blacksmiths to whom he gives some liart for their charcoal. Afterwards they pass it over a grindstone to cut it down. Then they lay it down on the chameau, and with some powdered emery, fine and soft as flour, and soaked with oil to make it take, they polish the sword with the stick used to take off the tracks left by the grindstone and then they clean the blade well with the emery. And they add a drop or two of oil spread with the finger to give it luster. Once the oil is applied, they polish it again on the chameau with the “felin” which is a thunderstone mounted on the middle of a stick like the “fustÃ©e.” And this stick is called the “felindel” stick. Once they used the “felin,” they polish it again with some chalk and the oil [already] on the sword. After they follow this and going over it again, they polish it with dry chalk. Finally when they are finished with mounting [of the pommel and guard], they give it a sharp edge with a file. They then dry it and sharpen it and furbish it again with some dry chalk. At the end when they are completed and mounted, they give it [the blade] a sharp edge with a grater. They are polished on a false mounting with the guards which are present in order to find out if they work well together. And employing a blade of the sort of which all the sizes should be made in the hand, one conjectures whether it will be as strong when mounted. One puts the blade in a vice between two pieces of wood, then with a file, they enlarge [it] if needed for attaching the guard. Then to clench it, one positions the place to be riveted and the pommel on a piece of wood. And with a hammer, one beats on the top to make it very level and to secure the pommel. Then with the hammer, one finishes the rivet when the hammer is well secured and does not shake. The wood is placed so as not to put gashes in the pommel. Afterwards one makes a place for the rivet with a file or chisel. And some make the rivet [or attachment] in a diamond—shape but this is not as good as a round [topped one] because one cuts oneself on the corner of the rivet.\n- - - - - 095v - - - - - \nThe end can be bought already made, a dozen of small ones costs six sols but the big ones 2 carolii.The end is fixed either with nails which are fixed on the sides of the cutting edge, but this only spoils the sword and rots the scabbard for the water goes into it via the juncture of the nail. The best way is to apply some resin or glue but the resin is better. And the best is when the end is tightly set and so hot when set that powdered resin on the end melts, in that way it doesn’t fall and can’t be undone unless it is put in fire. Hilts are of different types: Ornate Guttered which is with round mouldings Pearled Scarfed when the bands are crosswise Onioned which is with a flat head In the King’s manner, fully covered The furbishers buy them by dozens, the dozen of full ones costs 10 lb. the worked one, 30 sols or [more] depending on its nature. The first thing that the apprentice does is to furbish as said. And then to adorn the sword and make a scabbard which is the summum of the art. They buy scabbards’ wood pieces which are wholly made of beech wood, a hundred for 15 or 20 or 30 sols, depending on how far they are made. Theses wood pieces are thus called estelles, and have to be very clean and without any knots and are one finger thick. Then the furbisher puts them on a small bench, called a scabbard bench and with a small iron tool similar to the joiners’ bench, they maintain it firmly. Then with a plane, which is like a two—handled knife, they work the wood piece from the top, then use the joyner’s plane to flatten it more. Afterwards, the inside is scoured with a\n\n",
  activities: [],
  purposes: [],
  id: 355
});
index.addDoc({
  title: "Provisions for the work of Colchos",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n\n\nProvisions for the work of Colchos\n\n\n  \n    7 limbecks of glasse\n  \n  \n    2 lbs. of ☿\n  \n  \n    One measure of coarse salt\n  \n  \n    6 unleaded earthenware vessel\n  \n  \n    2 large unleaded pots for calcinating\n  \n  \n    2 alembics to distill vinegar\n  \n  \n    4 pots of good vinegar\n  \n  \n    3 or 4 lamps\n  \n  \n    2 lbs. of cotton\n  \n  \n    One pair of scissors\n  \n\n\n",
  activities: ["colchos"],
  purposes: ["making"],
  id: 356
});
index.addDoc({
  title: "For the furnace",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n\n\nFor the furnace\n\n\n  \n    A chest with a ten inch wide square stone, and of a one—foot thickness, pierced in the middle\n  \n  \n    2 boxes or two earthenware pots with a lid\n  \n  \n    2 small pipes of white iron to evacuate the smoke of the furnace\n  \n  \n    Turnipseed oil for the lamps to heat the furnace\n  \n  \n    A fire—steel\n  \n\n\n",
  activities: ["colchos"],
  purposes: ["making"],
  id: 357
});
index.addDoc({
  title: "Royal cement",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n\n\nRoyal cement\n\n\n  \n    One pound and a half of vitriol\n  \n  \n    As much saltpeter\n  \n  \n    As much rock alum\n  \n\n\n",
  activities: ["colchos"],
  purposes: ["making"],
  id: 358
});
index.addDoc({
  title: "Glass vessel",
  author: null,
  layout: "narrative",
  content: "- - - - - 102r - - - - - \n\nGlass vessel\n\nThe glass vessel must be either pear—shaped or round pyramid—shaped, of the same thickness as the small back of a knife, round on the bottom without folding over on itself, like flasks, its opening of such a size that a Dutch feathercan just about get in, with a lip at the end, in this way of the height of seven fingers’ width.\n\n\n  Figure\nat middle bottom margin of folio 102r\n\n\n\n",
  activities: ["colchos"],
  purposes: ["making"],
  id: 359
});
index.addDoc({
  title: "Painting on crystal or glass",
  author: null,
  layout: "narrative",
  content: "- - - - - 102v - - - - - \nAnnotations:\nTracing a history on glass, fol. 39v (Zhao)\n \n\nPainting on crystal or glass\n\nThey paint without any traces oil, except for faces where they outline the nose and the mouth in very fine black work. Then they make strokes and highlight them in white, and then they apply a coat of flesh—tinted color. As for the background, they do it in natural azur from Acre to make it more beautiful, or lacquer for a quickly—done red, or for a finer red, dragon’s blood. But it is necessary to apply it little by little so that it is smooth and of one color, and in the same way for other colors. Then they apply underneath it, a leaf of topaz, gold or silver.\n\n",
  activities: ["painting"],
  purposes: ["making","observation"],
  id: 360
});
index.addDoc({
  title: "Infusion of anthos or rosemary",
  author: null,
  layout: "narrative",
  content: "- - - - - 102v - - - - - \n\nInfusion of anthos or rosemary\n\nIt is better to cook the flower in August and more suited to oil—making. Take as much as you want. Then put it into a bottle very well corked, and leave them to wilt in the shade for a day. Then add the first substance of wine and leave to settle three or four days; and express it all in another vessel and into this very same substance of wine, add seven or eight infusions made out of new flowers. Then leave the latest infusion in the sun for a month. Then distill it through a still. Then mix two ounces of this water with two or three spoons of white wine; but this is for the elderly. Paul the Third used it.\n\n",
  activities: ["infusing"],
  purposes: ["making"],
  id: 361
});
index.addDoc({
  title: "Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 102v - - - - - \n\nCasting\n\nTin casts better when it is thin and delicate, than when it is thick, because when it is thick it contracts in high heat. So if you want to mold a thick piece in tin, mold it only one one side, and if it is possible, make it hollow on the other side. In this way your piece will be neater. And then you can solder two half pieces together. But if you have no choice but to mold it thick, make the shape of it and mold force abreuvouers around the figure in this way.\n\n\n  Figure\nat middle bottom margin of folio 102v\n\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 362
});
index.addDoc({
  title: "Excellent burn relief",
  author: null,
  layout: "narrative",
  content: "- - - - - 103r - - - - - \n\nExcellent burn relief\n\nHeat linseed oil on a light fire, without letting it boil and simmer. But when it is hot put a quarter part(of the quantity of the linseed oil) of the newest wax you can find. Once it has melted, let it cool and when it begins to curdle, stir it continuously with a new wooden spatula for the length of time it takes to say 9 pater nosters, and while you say them, wash this composition with holy water, always stirring. Having said the first of 9 pater nosters, pour the first water out and add more, then wash and stir the composition for the time it takes to say 8 pater nosters. In the interval it takes to say 3 of the 7 pater nosters, and continuing thusly, add more water, as above, until there is only one last new pater noster left. Then you will have a soft white ointment, with which you will apply to the burn for 9 days. But don’t apply any more, you must let the flesh grow over. Dress it twice a day and each time you wash your face with water, and mix it together a bit tepidly, without rubbing. But press it with wet linen, and wipe it similarly with fine linen, and apply the ointment. On which you can put binder’s string. This will regrow your hair and prevent a scar from forming. A powder maker who was completely burnt but had no sign of burns taught it to me.\n\n",
  activities: ["medicine"],
  purposes: ["making","advice"],
  id: 363
});
index.addDoc({
  title: "Against dog's gall.",
  author: null,
  layout: "narrative",
  content: "- - - - - 103r - - - - - \n\nAgainst dog’s gall.\n\nThe English, who fawn over their dogs owing to the care they take of their livestock, have healers for them the dogs who hold this particular office, and who melt pitch in water and, leaving it wet, rub the dogs with this water or with water sublimate.\n\n",
  activities: [],
  purposes: ["observation","making"],
  id: 364
});
index.addDoc({
  title: "Enema",
  author: null,
  layout: "narrative",
  content: "- - - - - 103v - - - - - \n\nEnema\n\nIn order for the pipe to not hurt children at all, or those with swollen or protruding hemorrhoidal veins, one covers the pipe with a parcel of chicken entrail and fold it over the end, and in this way, one gives the enema.\n\n",
  activities: ["medicine"],
  purposes: ["making","advice"],
  id: 365
});
index.addDoc({
  title: "Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 103v - - - - - \n\nCasting\n\nTin recoils if thick, therefore it is better to cast it thin and from one piece, to make two and then solder them together, if necessary. One makes use of a strong piece of taffeta to sieve the fine sand with which one first covers the medal, which is of the thickness of a teston.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 366
});
index.addDoc({
  title: "To make colors fluid",
  author: null,
  layout: "narrative",
  content: "- - - - - 103v - - - - - \n\nTo make colors fluid\n\nMix some vinegar with a bit of bile, put it into a glass bottle, and if you want to preserve it for a long time, add some salt and mix some of this with your colors which will make them flow.\n\n",
  activities: ["colormaking"],
  purposes: ["making"],
  id: 367
});
index.addDoc({
  title: "Earwax",
  author: null,
  layout: "narrative",
  content: "- - - - - 103v - - - - - \n\nEarwax\n\nIf you take enough with the tip of an ear picker and you sieve it with foam of urine, which often forms in the urine of those who have a headache, all the foam will dissipate.\n\n",
  activities: ["experimentation"],
  purposes: ["making","observation"],
  id: 368
});
index.addDoc({
  title: "Enamels",
  author: null,
  layout: "narrative",
  content: "- - - - - 103v - - - - - \nAnnotations:\nEsmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi)\n \n\nEnamels\n\nTo well recognize their difference and their true color by candlelight, it is necessary to put the candle behind a crystal mirror, or a glass globe or jar full of water, because this light is like sunlight.\n\n",
  activities: ["enameling"],
  purposes: ["observation","advice"],
  id: 369
});
index.addDoc({
  title: "Corroding and dissolving absolutely pure gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 104r - - - - - \n\nCorroding and dissolving absolutely pure gold\n\nPut it regular salt with aqua fortis into a violl. Let it rest for two hours, without heating it. Put [in this mixture] tenuous gold, and draw it out as if it had been separated from silver.\n\n",
  activities: ["metalworking"],
  purposes: ["making"],
  id: 370
});
index.addDoc({
  title: "Engraving on iron",
  author: null,
  layout: "narrative",
  content: "- - - - - 104r - - - - - \n\nEngraving on iron\n\nOne ℥ of verdigris and 2 ℥ of coarse salt and a bit of sublimate, or crush some ocher with linseed oil, and use it to cover the blade or the very neat and polished iron. And let it dry on the fire or in the sun. Then, to engrave and make it beautiful, take a small coin’s worth of verdigris twice that quantity of coarse salt and about four grains of ammoniac, and six grains of sublimate, and the water must not be hot.\n\n",
  activities: ["metalworking"],
  purposes: ["making"],
  id: 371
});
index.addDoc({
  title: "Good mixture to color gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 104r - - - - - \n\nGood mixture to color gold\n\nSulphur and small gravel as much of one as of the other, and the third part of this quantity of salt, and as much turmeric as sulphur.\n\n",
  activities: ["colormaking"],
  purposes: ["making"],
  id: 372
});
index.addDoc({
  title: "How to silver plate copper and latten",
  author: null,
  layout: "narrative",
  content: "- - - - - 104r - - - - - \n\nHow to silver plate copper and latten\n\nMold the silver as the gold, and put it in the oven in order to get a good gilt pot. And do not let it heat, otherwise the silver would tarnish. Once it will be well spread, make it boil in walnut oil, and then heat it a bit, and put it [into the water the silversmiths use to bleach their works].\n\n",
  activities: ["metalworking"],
  purposes: ["making"],
  id: 373
});
index.addDoc({
  title: "Enameling a carnelian",
  author: null,
  layout: "narrative",
  content: "- - - - - 104r - - - - - \nAnnotations:\nEsmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi)\n \n\nEnameling a carnelian\n\nSoak some wheat flour in white wine, and slop and cover the whole carnelian. Then cook the violet again, then soak it into white wine for one or two hours, then rub it and leave the part you want to keep on it, then lay on some more on top again.\n\n",
  activities: ["enameling"],
  purposes: ["making"],
  id: 374
});
index.addDoc({
  title: "Against dogs' mange",
  author: null,
  layout: "narrative",
  content: "- - - - - 104v - - - - - \n\nAgainst dogs’ mange\n\nFor normal—sized dogs, take half an ℥ of stavesacre, and one ℥ for big dogs, as fine powder beaten with two egg whites and one quarteron of oil. They must drink the beverage on an empty stomach, after keeping them locked without any food. Approved.\n\n",
  activities: ["medicine"],
  purposes: ["making"],
  id: 375
});
index.addDoc({
  title: "For casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 104v - - - - - \n\nFor casting\n\nIf you’ve got a big piece which does not allow an easy stripping of casting, mold it with some wax, either on the hollow side or in relief, because it is soft and hollow and so can easily be separated from the piece without leaving anything. But be sure that the melted wax is neither too hot nor too cold. Some people use for molding some wax warmed in boiled water, but while pressing the mold it bends and becomes unusable. Once you have made your wax cavity, you can cast in some very soft and clear clay, and let it dry. Then, upon it you will make a lead or tin cavity, in which what you will make will easily be stripped.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 376
});
index.addDoc({
  title: "Goldsmith",
  author: null,
  layout: "narrative",
  content: "- - - - - 104v - - - - - \n\nGoldsmith\n\nKnow what it is to work on spangled garments, it is small pieces of pure silver and of silver—gilt with which one makes the archers’ coats.\n\n",
  activities: ["metalworking"],
  purposes: ["making","advice"],
  id: 377
});
index.addDoc({
  title: "Spinet playing by itself",
  author: null,
  layout: "narrative",
  content: "- - - - - 104v - - - - - \nAnnotations:\nSpinet playing by itself, fol. 104v (Hiebert)\n \n\nSpinet playing by itself\n\nMake an axle surrounded with wheels pierced all around in their thickness and attach feathers as for a cittern or a spinet and arrange them according to the song you want it to play, leaving a suitable distance. And, turning the axle either by yourself or by a clock spring, your invention will effect itself.\n\n\n  Figure\nat left bottom margin of folio 104v\n\n\n\n",
  activities: ["musical instrument-making"],
  purposes: ["making"],
  id: 378
});
index.addDoc({
  title: "Turtles",
  author: null,
  layout: "narrative",
  content: "- - - - - 105r - - - - - \n\nTurtles\n\nMales have shells that turn down at the end near their tails, and their underbelly shells have lined marks along the bottom from their tails to their head. And the females have neither the turned down shell near the tail nor the marks.\n\n",
  activities: ["animal observation"],
  purposes: ["observation"],
  id: 379
});
index.addDoc({
  title: "Drying colors",
  author: null,
  layout: "narrative",
  content: "- - - - - 105r - - - - - \n\nDrying colors\n\nSoot black and others will not dry in oil unless you add verdigris.\n\n",
  activities: ["colormaking"],
  purposes: ["making","advice"],
  id: 380
});
index.addDoc({
  title: "Painting",
  author: null,
  layout: "narrative",
  content: "- - - - - 105r - - - - - \n\nPainting\n\nColors that have been applied twice are more gritty by themselves, unless they have a binding agent. Otherwise, paint on wood; otherwise, on canvas; otherwise on walls.\n\n",
  activities: ["painting"],
  purposes: ["making","advice"],
  id: 381
});
index.addDoc({
  title: "Gardening",
  author: null,
  layout: "narrative",
  content: "- - - - - 105r - - - - - \n\nGardening\n\nTo graft, it is necessary to take the new growth that was produced within the year by the tree you wish to graft. And cut off a branch in which you can see that beside the place where the leaves join the stem, there are little buttons we call buds, the initial stages of a sprout. With dexterity you must, with a very sharp pen—knife, cut in the shape of a graft a small bit of the skin of the tree, which contains a bud or a sprout with the leaf, as you can see in B. Then on the tender wood, which is full of sap, and on which you wish to graft, cut quickly two lines as you can see , then add in the middle a slit thusly.\n&gt; Figure\n&gt; at right bottom margin of folio 105r\n&gt; \n Then with the point of your pen—knife separate the bark from the tree, and open it from the slit in the middle, and having neatly lodged your graft so that nothing is sticking out, only the sprout, binding everything well and wrap the whole thing with a bit of linen or soft string. In this way, there will be nothing uncovered but the leaf, which in three or 4 days will indicate whether the graft has taken hold, by being green. Keep your graft in this way for seven or eight days. Then unwrap it, and join it to the bark, keeping the sprout itself straight, and then rewrap the whole thing gently, but not as strongly as before. And if there is any growth, leave it some room to grow and then three or four times\n\n\n  Figure\nat left bottom margin of folio 105r\n\n\n- - - - - 105v - - - - - \nThen, when the graft has taken hold, cut the top of the tree, which is above your tree, three or four fingers above the graft for the first time. Then, closer so that it serves. But be advised that when you do your initial grafting there should be no small hole at the back of your sprout, because this means that root is broken and your graft will never take. Therefore make sure the back is in tact. This type of grafting can be done from mid—May onwards, because the trees have budded and made new growth, until the beginning of August when the trees are full of sap. Almond trees which are naturally drier lose their sap earlier. Those who want to graft onto them the almond trees mericotons, apricots and nut—tree grafts, which are the best, should do so usually in January. Nut trees, such as perches mericotons should be grafted en fente. It is said that trees graft by the shield—graft method take longer to bear fruit.\n\n",
  activities: ["gardening"],
  purposes: ["advice","making"],
  id: 382
});
index.addDoc({
  title: "Gardening",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n\nGardening\n\nIt’s not very strange to cultivate in your garden some arnols, because when your soup or broth goes cold, you get worms.\n\n",
  activities: ["gardening"],
  purposes: ["observation"],
  id: 383
});
index.addDoc({
  title: "Fountain",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n\nFountain\n\nRecooked plaster runs when mixed with water, which you will see in the next recipe about wet molds. When put on the joints of the fountain conduits, it resists as much as any stucco.\n\n",
  activities: ["fountain making"],
  purposes: ["observation","making"],
  id: 384
});
index.addDoc({
  title: "Catching nightingales",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n\nCatching nightingales\n\nSee the 15th folio after this.\n\n In order to catch them, you must observe them in real life, the food that they favor and their mating season. The nightingale, as long as he is singing, marks his own territory. Therefore approach him by pretending to look for something on the ground. Take some worms from old flour or from beneath what you are kneading or from mills, which nightingales love, and put some on your hat, fastened with a pin or in any other way, so that it can wiggle. And five or six steps away from the hedge where it is singing, dig a hole, and place some worms in it, as well as your device made out of little criss—crossed sticks. As soon as you leave it will be anxious to go and see what you have done. And seeing worms it will enter.\n\n\n  at left bottom margin of folio 105v\n\n  Some people sell nightingales on trees.\n\n\n\n  at left bottom margin of folio 105v\n\n  It is easier to catch nightingales in the cool of the morning or evening, near fountains or shaded areas.\n\n\n",
  activities: ["catching animals"],
  purposes: ["observation","advice","making"],
  id: 385
});
index.addDoc({
  title: "Nightingale",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n\nNightingale\n\nThe iron wire used for its cage must be the thickest possible, so that should it try to leave, it will not hurt itself. At the beginning of its captivity cover its cage in fabric. The first day you will have to forcibly feed it, moving it from its cage in your hand and opening its beak and with a small wooden needle, place its food in its throat and make it swallow. And continue to do so until it is no longer willful. You must do this to keep it alive, because should it become thin or lose weight it will die.\n\n",
  activities: ["keeping animals"],
  purposes: ["observation","making","advice"],
  id: 386
});
index.addDoc({
  title: "Nightingale",
  author: null,
  layout: "narrative",
  content: "- - - - - 105v - - - - - \n\nNightingale\n\nIt will need a cage made in the shape of a barn, like the ones for larks, lined with green fabric, because it feels the cold. And to get it to eat when it is first put in the cage, you must give it ants mixed with earth in the bottom of the cage to get it used to pecking, and you can give it minced sheep’s heart, and sometimes eggs, and sometimes mealworm.\n\n",
  activities: ["keeping animals"],
  purposes: ["observation","advice"],
  id: 387
});
index.addDoc({
  title: "To cast",
  author: null,
  layout: "narrative",
  content: "- - - - - 106r - - - - - \nAnnotations:\nWhat is 'Spat'? (University of Amsterdam)\n \n\nTo cast\n\nAsphalt from Germany is the most excellent sand you can find for molding in a box frame, because it is fitting for silver &amp; for gold. And the more you use it and the older it is, the better it is. With it, one molds very slender &amp; subtle things.\n\n",
  activities: ["casting"],
  purposes: ["making","observation"],
  id: 388
});
index.addDoc({
  title: "Making gold run for casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 106r - - - - - \n\nMaking gold run for casting\n\nBecause gold cools down very quickly, you have to give it a mixture when it is well melted that will keep the heat. Sublimate softens it nicely. But, since it vanishes into smoke, it won’t aid you for very long. Therefore mix this mixture into it when you want to cast it: of sal ammoniac, the best verdigris that you can find, a bit of borax and some saltpeter. And this, held over the heat, will become neat. The saltpeter makes it clear and heats it. But the key thing in this mixture is the verdigris, which has to be good. This mixture softens your gold so much that it becomes as tractable as lead, even if it is good gold.\n\nFor sand for molding flowers and leaves &amp; other delicate things, mix in raw plaster, crushed brick and stone alum.\n\nTo moisten sand, spirits are excellent because it makes sand fine and leaves in a vapor when you reheat your box frame.\n\nDilute sal ammoniac is very good, is excellent for moistening sand, but for lots of water you only need a little bit of sal ammoniac.\n\nA raw lump of metal, if you don’t have crocum ferri, is good for gold.\n\nThe snakes and the lizards you wish to mold should not be kept for a long time, because if they are alive, they will waste away, and if they are dead, they will decay.\n\nPlaster of Paris is as hard as stone and very good. When you want to choose some for your sand, take the rawest and the hardest that is possible for you &amp; that does not make any powder. Transparent [plaster] and that which makes powder in giving way is that which is not good for this work. A sign of that which is near perfect is that it is hard &amp; makes shining grains that look almost like sugar. Finally, to mix it into the sand to cast gold, it has to be put in the fire twice, &amp; reheated twice.\n\n\n  at left top margin of folio 106r\n\n   When gold is really pure, it is so dry that it can just barely endure a hammer. But this mixture softens it like lead.\n\n\n",
  activities: ["casting","metalworking"],
  purposes: ["making"],
  id: 389
});
index.addDoc({
  title: "Casting in gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 106v - - - - - \n\n\nCasting in gold\n\nTo cast in gold, crocum ferri is necessary, and more stone alum than in the following mixture. The stone alum mixture cannot spoil anything. The mold must be red &amp; close it immediately with iron presses.\n\nShells of crabs &amp;[shells of] crayfish are troublesome to burn &amp; have their own proper way of being molded.\n\nWhen molding rats and birds, the feet, being burned, are difficult to recover, because they are small and slender. The body is recovered more easily from the mold. The feet are cast in many pieces.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 390
});
index.addDoc({
  title: "Tiles",
  author: null,
  layout: "narrative",
  content: "- - - - - 106v - - - - - \n\n\nTiles\n\n\n  at right middle margin of folio 106v\n\n  those of houses that are outdoors, ones [that are] a bit sandy seem to hold better in fire\n\n\nTiles with which one covers houses, the hardest and surest and recleaned of stones &amp; large gravel, are taken to mix in with the sand for molding. But, rather, it is necessary to reheat them just until they have been quite red for one or two hours, and crush them and pass them finely through a sieve.\n\nLittle turtles just out of the egg are really delightful to mold.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 391
});
index.addDoc({
  title: ["Plaster"],
  author: null,
  layout: "narrative",
  content: "- - - - - 106v - - - - - \n\n\n[Plaster]\n\n\n  at middle margin of folio 106v\n\n  If the plaster is mixed with some dust or is not the hard kind, […] in the fire and make […]”\n\n\n\n  at left top margin of folio 106v\n\n  Plaster When you have it in stone form, choose the hardest pieces and those which do not easily break into small pieces with your nail, and clean it well of powder &amp; filth rather than crushing them with it.\n\n\n\n  at left middle margin of folio 106v\n\n  Plaster alone does not sustain […] but breaks up into lumps. Keep reheated plaster, as is said here, one or two months well compacted in a dry place, if it’s not the rainy season but rather fresh out it is more excellent for exquisite work.\n\n\n\n  at left middle margin of folio 106v\n\n  It must maintain its fire and turn red like lit charcoal.\n\n\n\n  at bottom margin of folio 106v\n\n  Stone alum is that which binds well to sand.\n\n\n\n  at bottom margin of folio 106v\n\n  Crocum ferri is fit for gold. It is this which, mixed into sand, breaks it up again &amp; keeps it hot.\n\n\nThe hardest plaster, as was said, is the best, being taken thusly totally raw from stones of this kind. Crush it as finely as possible and pass it through the most fine sieve or sleeve that you can. Having been made fine in this way, put a good amount in a cauldron or frying pan over an open flame. &amp; as it starts to heat up, stir it continuously. And heavy and lumpy though it is, it will become so light and so tractable that it will appear to you not to have any resistance to the said stirring, as though it were of water. Continue to keep stirring it continuously until it returns once again to being heavy and thick. And now this is the sign that it is cooked, but do not reheat it at all such that your stone alum brick be reheated &amp; that clay circles form. Because this must be the last reheating, and when everything else is ready, because the less that the plaster remains reheated &amp; the more suddenly it is put into the work, the better, because it takes rather better. It is not permitted to reheat it except when you want to mold. And to reheat it, put it, in fine, totally raw powder, in a cauldron on a clear flame &amp; do not give it too much [heat] in one go nor too fierce. Stir continuously with a long stick, turning around the cauldron to avoid the vapor. And in the middle, in the form of a figure 8 at the beginning, you will find it heavy [and] clayey because it is full of moisture, [and] when it heats up, it will start to throw off [the moisture] in some bubbles on the edges of the cauldron. And finally it will become liquid &amp; mealy and like bran and start boiling in the middle. Continue to stir continuously until you recognize that it has once again become heavy ʘʘ\n- - - - - 107r - - - - - \n\n  Figure\n\n\n\nas heavy as before, and it should be like a paste not very thick, it must not be as easy to stir as a liquid. This state shows you that it is cooked enough. It must boil in the middle, and all around you must have a thick mixture. If you reheat it too much your mixture would be short of body, because if it becomes red the mixture will lose its strength and it will spoil the sand. Let it cool before mixing it to any other sand. […]\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 392
});
index.addDoc({
  title: "Catching lizards and snakes",
  author: null,
  layout: "narrative",
  content: "- - - - - 107r - - - - - \n\n\nCatching lizards and snakes\n\nTake a stick, pin a net with a slipknot to the top. Whistle, and move the net nearer to the head of the lizard, and pull when it put it’s head inside the net. It is more difficult to take a lizard with your hands than a snake, because lizards bite without letting go, and bite as strong as pincers.\n\nYou can take snakes with your hand, but cover your handle with a woollen cloth, because the teeth of the snake could go through a common cloth. You can recognize dangerous snakes by their blue eyes. They do not bite into water, as it is known by crayfish catchers.\n\n",
  activities: ["catching animals"],
  purposes: ["advice"],
  id: 393
});
index.addDoc({
  title: ["Information on casting"],
  author: null,
  layout: "narrative",
  content: "- - - - - 107r - - - - - \n\n\n[Information on casting]\n\nThe sand mixture is made of two thirds of ground plaster, reheated as it is said before, and of one part of reddened tiles which are finely ground afterwards. Use also stone alum, half of the quantity of the tiles. Use two full pots of plaster, one pot of tile and half a pot of stone alum. Do not use too much stone alum because that binds the sand, and allow sand to withstand fire without cracking or breaking. Without it [stone alum] sand would not withstand fire, you can use it for all kind of metal, but for gold add a bigger quantity of stone alum, add also crocum ferri, because they [these filings] attract gold.\n\nAll the sands you will cast, must withstand fire very well, it must withstand high temperature without spoiling anything.\n\nIt is difficult to grind stone alum, and it cannot be sieved, you must grind it on a marble slab. The white [stone alum] powder the apothecaries sell is good, it is easy to crush it into a mortar, use the pestle slowly, that way you will make it [the stone alum] very fine.\n\nCrocum ferri must be heated into a glassworker’s furnace during four days.\n- - - - - 107v - - - - - \nMolds for fine things, like wormwood or something similar, can only be used once, dip the molds into water before breaking them. Things twice reheated are dissolve easily into water. If you don’t do that your work will be hard to be stripped of the mold without being spoiled.\n\nGood stone alum is white and as shiny as white silk, this stone alum is made of long pieces, as long as a finger, and is very fragile and woolly and fluffy. Stone alum made of stone is harder and not so good. The best quality can be found in France near Ronan. For our sand, stone alum must be crushed into a mortar, and must be ground on the marble again. Don’t even think about sieving it because this matter is fat and woolly, it wouldn’t pass through any sieve because of the very fine and soft filaments. These filaments give the sand a much greater binding effect than natural wool or even the filler the foundry owner uses for big works, because natural wool and filler burn and stone feather alum resists fire.\n\nWhen you cast surround the sand of your mold with very beaten greasy earth. Make a circle around your mold with this earth.\n\nArchanum omnibus fere reconditum est in re fusoria, v{idelicet} res exprimenda formis, sive herba sit sive animal ut lucerta, inmergatur primum in vini spiritum aprime rectificatum, deinde pulvere composito aspergatur sive illinatur (si pulvis in formam pultis redactus sit, ut assolet)\n\nWhen you want to mold something hollow, the core must be made of the same matter, if the snake or the animal is curved or folded you must do your core in several pieces.\n\nTry [to see] if distilled vinegar is good for eating away, it will dissolve the animal inside the hollow mold.\n\n\n  at left top margin of folio 107v\n\n  If you know that your plaster cannot endure fire without breaking, do not take the recipe of the mixture literally, sometimes you can add less stone alum than above. Because stone alum soften molds. Once reheated do not grind the stone alum again, leave it ground as the apothecaries did. It will not prevent the cast from being neat, and will give more binder to your cast. When the mold holds the color of the brick and is reddened then it will be harder.\n\n- - - - - 108r - - - - - \nTo hold the cores, some [people] use wire made of the same metal as that to be cast because it boils down and is made similarly, but when it is melted or pliant the core varies. Other [people] find it serves them better to use sharpened iron wire about the borders because it holds more firmly, and having fine points it does not rise up any more than the point of a needle and one can apply gold or silver on this rather than putting it in works [where] one makes a hole in the work with a small chisel.\n\nSpirits prevent the sand from bubbling and do not make little holes on the borders of the mold if the thing to be molded is very damp, the holes and farts and bubbling does not make it in the place of the mold which is thick but at the borders which are more delicate.\n\nOne casts ordinary silver of the sort goldsmiths coarsely work, which is made with mediocre alloys. And when one casts with solder, it runs even better.\n\nSpalt is a whitish stone which can be found in Germany, mainly in Augsburg from which can be made the most excellent sand that can be found for [casting] lead, tin, copper, silver and gold. And the more it is used, the better it is. It is clean for casting flat things in a frame. For rounded things, it is not as attractive [because it] does not hold in the fire as the aforementioned [things] composed of plaster.\n\nThe snippings of [a] large [piece of] greasy leather are good to cast in melted copper and brass because they clean it and take away from it all its filth.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 394
});
index.addDoc({
  title: "Spalt",
  author: null,
  layout: "narrative",
  content: "- - - - - 108r - - - - - \n\nSpalt\n\n Spalt is white like cooked plaster and one can find it in mounds and stones made in long stairs and long veins. It is very soft such that with a fingernail and it makes a powder like that of our chalk from Champagne. And because everything which is provided from the earth is mixed with some other substance, to purify it [the spalt], one boils it with somewhat large gemstones then tempers it with essence of sal ammoniac. One puts [a lump of it] the size of a walnut in a large bottle of water and &lt;div class=\"folio\" align=\"center\"&gt;- - - - - 108v - - - - - &lt;/div&gt;that way one tempers it &amp; reducing it into small balls, [one] purges it of impurities [by] then putting it on to cook cleanly in a vessel of earth[enware] in a furnace like those in which pots [are made] and one leaves it there to the point at which pots would be fired. After one tempers it more with essence of sal ammoniac &amp; boiling it very strongly and emptying the murky water &amp; putting it in a separate vessel straight after put back the same water over it &amp; one boils &amp; one puts back the murky water again with the other. And one does this therefore until that which is there has passed away. In this way one purges and purifies and makes it a very fine and malleable [matter]. After one has taken away the water by tilting [it] or with a sponge, one takes the residue and dries it. Then moistening it with the aforementioned water the way one did with the other sand, one uses it in a frame or if it shrinks [this] is a sign that it is not fired enough &amp; needs to be fired more. This one is proper for molding all metal and especially gold and silver and the more it is used the better it is. One should put alum which you have cast of lead or tin separately because it makes gold. sour if you cast it there.\n\n",
  activities: ["casting"],
  purposes: ["making","observation"],
  id: 395
});
index.addDoc({
  title: ["Stone alum"],
  author: null,
  layout: "narrative",
  content: "- - - - - 108v - - - - - \n\n[Stone alum]\n\nStone alum must be reheated in a pot covered with a tile over a good charcoal fire so that the impurities which might be in it [are] burned with that which does not burn. This is done either in the goldsmith forge surrounded by bricks or in a little oven vented to the fusion fire such that the pot stays red for a quarter of an hour. This is more to purify it than for anything else. It becomes reddish on top and the inside remains white and dries best this way.#\n\n\n  at left middle margin of folio 108v\n\n   # Once your stone alum is cooled down, crush it in a mortar, then grind it more finely on marble. And this makes it into very fine wooly dust that gives binding to sand without burning like all other things. [This is] a beautiful invention. Crush it on the mortar to being careful to keep the grindings together because the dust flying can get down your collar or on your face which can have very grave consequences. Put a little each time in the mortar to avoid the dust flying. It is best to grind therefore with the pestle trained on the mortar rather than on the marble where it spreads and on the mortar it gathers [the dust] from all sides and renders it very fine and sweet to the touch.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 396
});
index.addDoc({
  title: ["Clay"],
  author: null,
  layout: "narrative",
  content: "- - - - - 108v - - - - - \n\n[Clay]\n\nClay used to surround molds, should be very fat and malleable, and should not be used for anything else except to make the contour of the molds. Therefore one should only choose that which is very fat and beat it very well and soak it moderately with water and have it in a pit or earthenware pot and make good holes with a stick with which one replenishes it with water to keep it always fresh and soft and ready to use when needed.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 397
});
index.addDoc({
  title: "Working in rough with wax",
  author: null,
  layout: "narrative",
  content: "- - - - - 109r - - - - - \n\n\nWorking in rough with wax\n\nWhen the wax is too hard, one mixes in some turpentine or a bit of butter, which renders the wax malleable, and cleaner than tallow, which the Italians mix in, because oftentimes, it is necessary to put the tools into the mouth, tools which are better when made from box wood or antler.\n\n",
  activities: ["waxwork"],
  purposes: ["making"],
  id: 398
});
index.addDoc({
  title: "Wax for molding",
  author: null,
  layout: "narrative",
  content: "- - - - - 109r - - - - - \n \n\nWax for molding\n\nSince the wax is molten, they have some sulphur in a spoon or crucible and pour it in the molten wax. And with the sulphur going to the bottom or staying on top, it stays where it is and mixes only its substance in the wax, and renders it more meltable when warming it, in such a way that having molded it, the wax gently melts in the mold like butter, without leaving any blister or boil. Also be warned to not give it too much heat.\n\n\n  at left top margin of folio 109r\n\n  If\n\n\n",
  activities: ["molding","waxwork"],
  purposes: ["making"],
  id: 399
});
index.addDoc({
  title: "Molding wax",
  author: null,
  layout: "narrative",
  content: "- - - - - 109r - - - - - \n \n\nMolding wax\n\nSo that your mold takes hold without repelling any surface on a form or figure in wax, it is necessary to rub the wax with oil and soak your sand in lukewarm water, because cold water repels oil even more and will not make a good layer on the wax.\n\n\n  at left middle margin of folio 109r\n\n  Rub the oil on very very lightly, use so little that it hardly appears at all. Then rub with some spirits. After soak your sand in lukewarm water so that it does not repel the oil.\n\n\n",
  activities: ["molding","waxwork"],
  purposes: ["making"],
  id: 400
});
index.addDoc({
  title: "Forge bellows",
  author: null,
  layout: "narrative",
  content: "- - - - - 109r - - - - - \n\nForge bellows\n\nIt is better that at the end with the air chamber the bellows be set in some kind of bit of cloven board because they are more secure this way. Afterwards you can lightly secure them from the top. It is necessary that the nozzles be four fingers above the bottom of the forge.\n\n",
  activities: [],
  purposes: ["making","advice"],
  id: 401
});
index.addDoc({
  title: "Molding snakes",
  author: null,
  layout: "narrative",
  content: "- - - - - 109r - - - - - \n \n\nMolding snakes\n\nWhen you get them for molding, if it is possible, do not remove their teeth if you [think you might] want to keep them, because having had their teeth removed, it hurts their gums and mouths, and they can no longer eat. You can keep [the snakes] in a barrel full of bran or even better of earth, in a cool place, or in a glass bottle. And give them some live frog or other live animal because they do not eat anything that is dead. Also I have noticed that&lt;div class=\"folio\" align=\"center\"&gt;- - - - - 109v - - - - - &lt;/div&gt; when they want to bite or to eat something, they [snakes] do not go at it head on, but sideways and by sinuous coiling, as do Satan and his henchmen. The snake has a small head, but a very large body; the entryway to sin seems small and inconsequential, but the consequences are great indeed. A snake can abstain from eating for seven or eight days, once he has swallowed a frog, and can swallow three or four frogs, one after the other, and what it has devoured does not rot and is not digested all at once in its stomach, but each part little by little, i.e. the bones and everything. The rest is just as fresh as when the snake ate it, such that when one bothers and torments it, it spits out what it swallowed up, which, in part, is totally digested, with the other part as fresh as if the frog were alive. It can hold a swallowed frog down for two or three hours and spit it out alive.\n\n",
  activities: ["keeping animals","casting"],
  purposes: ["making","observation"],
  id: 402
});
index.addDoc({
  title: "Toad",
  author: null,
  layout: "narrative",
  content: "- - - - - 109v - - - - - \n&lt;span class=\"activity\"&gt;&lt;/span&gt; &lt;span class=\"activity\"&gt;&lt;/span&gt; \n\n\n\nToad\n\nIf by chance you want to mold this ugly animal and if it should piss in your hand, it will sting your hand and cause it to itch, as if you had been holding nettles. But the very best remedy for this is to put your hand into fresh dirt, and to cover it as if you wanted to bury it. Frogs are not so beautiful when molded because they have shiny skin, and toads have lumpy skin.\n\n\n  at left bottom margin of folio 109v\n\n  You can mold the toad hollow, and leaving a notch open on the underbelly, you will make it jump with the twisted cord of the saw. If it is a small, put it on a magnet cut small to the size of the toad, then put it in good vinegar.\n\n\n\n  at right middle margin of folio 109v\n\n  If it is big, mold hollow, and if you want to mold it with its mouth open, put some cotton therein, and then put some melted wax on the cotton.\n\n\n",
  activities: ["molding","medicine"],
  purposes: ["observation","advice","making"],
  id: 403
});
index.addDoc({
  title: "Killing snakes for molding",
  author: null,
  layout: "narrative",
  content: "- - - - - 109v - - - - - \n\n\nKilling snakes for molding\n\nSome put a drop of aqua fortis into their mouths, which stupefies them, so that the head and the body look dead. But the head is still alive, and when you stick it with a needle in order to fix it to your mold, it moves and spoils and undoes everything. Therefore, to kill your snake, put it into a bottle filled with good vinegar and some spirits. Do the same with lizards and other similar animals.\n\n\n  at left bottom margin of folio 109v\n\n  If you want to keep them, you can put them in a pipe full of dirt in a garden outdoors, but it is necessary that the pipe be covered with latten wire, because otherwise, the snakes will crawl and climb up quite high.\n\n\n",
  activities: ["keeping animals"],
  purposes: ["advice"],
  id: 404
});
index.addDoc({
  title: "Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 110r - - - - - \n\n\nCasting\n\nYou could cast from already casted things and animals, but it never works as well as from the natural [original] ones, with which you can make four or five molds.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 405
});
index.addDoc({
  title: "Rock and grotto",
  author: null,
  layout: "narrative",
  content: "- - - - - 110r - - - - - \n\n\nRock and grotto\n\nYou need to grind white and yellow marcasites &amp; various kinds of ores. Wash them thoroughly, so the soiled and chalky end will be clean, in order that only the lustrous grain of the ore will be left, from which you will powder your rock previously covered with strong glue, if your grotto is not used as a fountain and touches water. You will thus obtain a nice work.\n\n",
  activities: ["grotto"],
  purposes: ["making"],
  id: 406
});
index.addDoc({
  title: "Snakes",
  author: null,
  layout: "narrative",
  content: "- - - - - 110r - - - - - \n  \n\nSnakes\n\nWhen they feel trapped, they seldom bite, and cannot really hurt unless they are really big snakes. The most important thing is to avoid being bitten before capturing them. Having put your foot as close as possible from the neck, you holds it as close to the head as possible. That way, it will not bite if it cannot stretch its neck and do a sinuous turn, it will not be able to hurt from a frontal attack, nor will it be able to twist into an S. I have found out that the person who taught me how to mold them was little afraid of snakes. He would catch one and pull it quickly, grabbed it by the neck and, putting it under his shoe, flattened it so it would eject from the behind, which is five or six fingers from the tail, everything that is bad and venomous in the belly. After that, the snake has no strength to bite and, if by chance it still bites and ejects from its behind some garbage, he [the man] would dig in the soil with a knife and bury his hand in the fresh and humid soil which, applied to the infected part of the hand, would suck all the venom, without doing anything else. It was the same with toad venom, as I have seen experimented\n\n\n  at left middle margin of folio 110r\n\n  In three [days] it is as thin as if he had not eaten. Cast it right after catching it is the best, before it loses weight. You should kill it only a quarter of an hour before you want to cast it.\n\n- - - - - 110v - - - - - \nWhen a snake has eaten something; when twisting it, it will vomit the food. And if, after having eaten something, the snake is pressed underfoot, this troubles the snake a lot and makes it sick. If the snake is wounded, it will not eat voluntarily.\n\n",
  activities: ["keeping animals","casting","remedy"],
  purposes: ["making","advice"],
  id: 407
});
index.addDoc({
  title: "Mussels",
  author: null,
  layout: "narrative",
  content: "- - - - - 110v - - - - - \n\n\nMussels\n\nThere is nothing better for opening them up than to oil them with olive oil, and nothing else. And afterwards, when you want to separate them, soak them in cold water; that is the secret. And you will see that the oil, although it seems to be imbued, will separate itself from the water as does grease. Mussels become stronger in cold water, and warm water would dissolve them with difficulty, although having been reheated, the mussels are then more handleable and easy to dissolve in the water.\n\n",
  activities: ["animals"],
  purposes: ["making"],
  id: 408
});
index.addDoc({
  title: "Wheat oil",
  author: null,
  layout: "narrative",
  content: "- - - - - 110v - - - - - \n \n\nWheat oil\n\nIs made on a blade of iron reddened in the fire, and the oil turns into drops, which is appropriate to oil the hair of a butterfly or similar thing, because this oil is instantly dry and makes the rest dry out. It is necessary that the coat or down of any animal that you want to mold be flat, because if left standing up, it will make the sand raise up and form bubbles.\n\n\n  at left middle margin of folio 110v\n\n  # If you want to mold something delicate, like a pansy, some, to give it a little thickness, more than what is natural, some rub it with butter. But it is best to oil it with wheat oil because it has no opacity and does not block the smaller features as much, and makes the flower firmer.\n\n\n",
  activities: ["oil making","casting"],
  purposes: ["making"],
  id: 409
});
index.addDoc({
  title: "A cast of lead or tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 110v - - - - - \n\n\nA cast of lead or tin\n\nBecause you want to cast tin very thinly, if your medal, plant or other thing you want to mold is thin and fine, make sure to include more tin, much more than lead, namely less than the fourth part of lead for three of tin. And moreover, one only puts lead in as an alloy. Contrarily, if you want to mold something strong and thick, put a lot more lead in than tin. And for the one and the other you can put in a little looking—glass tin, but only a very little, with a little resin, when you want to cast. Since then, when molding with pure new lead, I put in two ounces of pure tin for every pound of lead. And when molding with pure tin, I put in two ounces of pure lead for every pound of tin. I made some plants and snakes as if they were real.\n\n\n  at left bottom margin of folio 110v\n\n  I cast tin when it was nearly red, and the same thing with lead, which however had not remained in the fire for too long, because it becomes brittle and burns up.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 410
});
index.addDoc({
  title: "Reheating molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 111r - - - - - \n\n\nReheating molds\n\nBox molds dry out readily, &amp; do not get reheated, because to reheat is properly to turn molds red and inflamed in the fire, and drying out is to let both molds dry, or make them evaporate their humidity, placing them before a fire of flames or one of charcoal. Molds de noyau reheat easily &amp; box molds dry out.\n\n",
  activities: ["mold making"],
  purposes: ["making"],
  id: 411
});
index.addDoc({
  title: "Latten smoke",
  author: null,
  layout: "narrative",
  content: "- - - - - 111r - - - - - \n\n\nLatten smoke\n\nIt is good to reheat molds for casting latten in it, because this yellow chalk, which appears nevertheless to refill the molds, casts very neatly, being of the same nature.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 412
});
index.addDoc({
  title: "For red copper",
  author: null,
  layout: "narrative",
  content: "- - - - - 111r - - - - - \n\n\nFor red copper\n\nWhen it’s melted, it is good to throw in a little fine tin, because this makes it run.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 413
});
index.addDoc({
  title: "Clay earth",
  author: null,
  layout: "narrative",
  content: "- - - - - 111r - - - - - \n\n\nClay earth\n\nThis, wet &amp; well beat &amp; kneaded as you know, is necessary for you to make the contour of your molds. But attend that it not be too soft. But likewise [attend that it be] sort of half dry such that it doesn’t attack the hands at all, because otherwise it would attack your work. Always keep it in a damp place, and make some holes in it, and fill them with water, to keep it fresh.\n\n\n  at left middle margin of folio 111r\n\n  The gray [earth] is best which does not cleave at all.\n\n\n\n  at left middle margin of folio 111r\n\n  It is neater than [illegible] of lead.\n\n\n\n  Figure\nat left middle margin of folio 111r\n\n\n\n",
  activities: ["mold making"],
  purposes: ["making"],
  id: 414
});
index.addDoc({
  title: "Iron wire",
  author: null,
  layout: "narrative",
  content: "- - - - - 111r - - - - - \n\n\nIron wire\n\nYou have to be provisioned with different thicknesses according to the molds that you want to make, some large like packthread from [illegible] &amp; some thin, like the fat cords of a spinet, for small works. With it reheated, make clamps to close the molds &amp; make points like needles of various lengths according to your need, to fasten the animal to the mold &amp; hold it subject. Needles would not be good for this since your points must be hollow &amp; of the same thickness throughout, except at the point. And then you have to make them as long as you have need. Iron wire is harder than that of latten.\n\n",
  activities: ["mold making"],
  purposes: ["making"],
  id: 415
});
index.addDoc({
  title: "sal ammoniac water",
  author: null,
  layout: "narrative",
  content: "- - - - - 111v - - - - - \n\n\nsal ammoniac water\n\nIt is enough to use two chestnuts’ worth of sal ammoniac pulverized in a pot of water, and that the water tastes lightly salted to your tongue, because too much is not good.\n\n",
  activities: ["making solution"],
  purposes: ["making"],
  id: 416
});
index.addDoc({
  title: "Sanguine",
  author: null,
  layout: "narrative",
  content: "- - - - - 111v - - - - - \n\n\nSanguine\n\nTo clean the various colors of lead and tin, sanguine is pulverized, and it is rubbed on the molded work with pieces of fabric.\n\n",
  activities: ["polishing"],
  purposes: ["making"],
  id: 417
});
index.addDoc({
  title: "Crab and crayfish",
  author: null,
  layout: "narrative",
  content: "- - - - - 111v - - - - - \n\n\nCrab and crayfish\n\nThey are among the most difficult to mold, and whoever molds them well will mold many other very subtle things.\n\n",
  activities: ["molding"],
  purposes: ["making"],
  id: 418
});
index.addDoc({
  title: "Lizards",
  author: null,
  layout: "narrative",
  content: "- - - - - 111v - - - - - \n \n\nLizards\n\nWhen one grabs them with two fingers from the sides of the head, at the level of the ears, one makes them open their mouth with the tip of the fingernail, then one grabs the edge of their lower jaw, and then [the edge] of the upper one. He squeezes the fingernail like a pair of pincers, but he cannot go through it, but he squeezes it quite hard; and if he bit the flesh, he would never let go of his hold, and there would be no better remedy than to cut off his head promptly. In the spring, as they have shed their skin, they are better—looking.\n\n\n  at left middle margin of folio 111v\n\n  The small lizards that one catches in the summer, the size of small female lizards, grey on the back and green on the belly, are very appropriate to cast in silver, gold, or other metal, because their scales are rougher than those of female lizards and show better.\n\n\n",
  activities: ["catching animals","casting"],
  purposes: ["making"],
  id: 419
});
index.addDoc({
  title: "Composition of sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 111v - - - - - \n\n\nComposition of sand\n\nEverything being baked thoroughly as said above, take four 4 molds full of plaster, two 2 of brick, and one of alum de plume. Do not pass through the sieve to mix, because the alum would not go through. Mix it with your hands until neither one nor the other, neither white nor red, may be distinguished from the other. If your plaster is not strong, do not mix in as much alum de plume because it softens molds. Make sure too that your sand is not hot (since it has been baked thoroughly recently) when you will want to mix it with water, because that makes molds too soft and breakable.\n\n\n  at left bottom margin of folio 111v\n\n  You may sometimes decrease the quantity of plaster if you do not find it strong enough to resist fire and if it splits, so that the proportion of crushed tiles sustains it, with the alum de plume, which you can also increase so that it creates a better bond.\n\n\n",
  activities: ["mold making"],
  purposes: ["making"],
  id: 420
});
index.addDoc({
  title: "To temper the sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 112r - - - - - \n\n\nTo temper the sand\n\nYou should have: a large basin full of water to dip the molds into in order to open them, a tankard full of common water, a dish to temper the sand, a small wooden spoon to pick up the mixed sand in the dish.\n\n\n  at left top margin of folio 112r\n\n  To make handles for your large oil brushes, if you do not have large enough feather pipes, take two of them, melt them and join them together.\n\n\n\n  Figure\nat left top margin of folio 112r\n\n\n\n",
  activities: ["tempering sand"],
  purposes: ["making"],
  id: 421
});
index.addDoc({
  title: "Decoction of sands",
  author: null,
  layout: "narrative",
  content: "- - - - - 112r - - - - - \n\n\nDecoction of sands\n\nAlready said\n\n",
  activities: ["decoction"],
  purposes: ["making"],
  id: 422
});
index.addDoc({
  title: "Molding en noyau. Mixing of sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 112r - - - - - \n\n\nMolding en noyau. Mixing of sand\n\nOnce you have reheated your sand, that is the plaster, the stone alum and the brick, and once you have finely filtered them through a cloth sieve, # mix them the following way: take four measures of plaster, two measures of bricks, and one measure of stone alum. Mix them all together with the hands, so that one may not discern one [ingredient] from the other. Once your sand is ready, you need to kill the animal that you wish to mold in this way.\n\n\n  at left center margin of folio 112r\n\n  except for the stone alum which should be ground in a mortar.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 423
});
index.addDoc({
  title: "Killing the animal to mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 112r - - - - - \n\n\nKilling the animal to mold\n\nYou must have been careful not to hurt it while capturing it. If you have a stock [of animals] and you wish to keep them for a long time, place it in a glass bottle with bran or in a large barrel half full of damp fresh earth. Give them frogs to eat, live rather than dead, because should you keep them without feeding them, they would wither and become emaciated, and their skin would become saggy and wrinkled. Therefore, the sooner after its capture you mold it, the better it will come out. And kill it in the following manner: place it in a clean bottle or vessel so that [the animal] does not carry any dust; fill [the bottle] with enough good vinegar and urine so as to cover [the animal]. Shake [the bottle] and torment [the animal] inside there until it is dead which should take an hour or half an hour. But if you are in a hurry\n\n\n  at left bottom margin of folio 112r\n\n  To know if [the animal] is quite dead, take it out of the vinegar and take it by the tail. If it moves its tail, do not mold it because it still has feelings, and when pricking [its members], it would remove itself and harm the mold.\n\n\n\n  at left bottom margin of folio 112r\n\n  Water snakes do not bite much.\n\n- - - - - 112v - - - - - \nto cast, force feed it your animal some good spirits or mix a bit of spirits with the vinegar. And soon it will be dead without any wounds that would deform it. As for large animals, for which it is necessary to have a lot of spirits, one uses vinegar and urine, but for small ones, spirits only are needed, and it will be done quicker.\n\nWhen your animal is dead, take it out and clean it very carefully, relieving it of its old skin if it sheds, of its parasites like lizards have, and then apply it.\n\n\n  at left top margin of folio 112v\n\n  in a glass, and submerge, continuously holding the head of the animal. Or if it is not very big, put the whole thing in.\n\n\n\n  at left top margin of folio 112v\n\n  Be advised that before it dies, you must open it eyes, by blocking its eyelids with a bit of wax or something else.\n\n\n",
  activities: ["keeping animals"],
  purposes: ["making"],
  id: 424
});
index.addDoc({
  title: "Affixing and arranging animals",
  author: null,
  layout: "narrative",
  content: "- - - - - 112v - - - - - \n \n\nAffixing and arranging animals\n\nHaving gotten in some fat earth called clay, that should be grey, because that is the best one, or another that will bind well and will be well prepared and beaten, so that it is malleable without being damaging your hands or the work, make a lazagne, or a pancake shape, of this clay equally flattened with a rolling pin, which pastry—makers use so that it is slightly thicker than a poulc. And on this pancake, affix your animal, making it as life—like as possible and the way in which it is naturally shaped. And firstly, with a good needle, pierce it from underneath, in the middle of the throat, up to the top bone of the head. Then take the needle out and in the hole, put the point of an iron wire, of such a length that it suffices to maintain the head of the animal as high as it must be, and if the skin gets in when you put in the wire, take it out with the edge of your small pincer, and arrange the skin as it was before. Pierce the other end of the wire in the sheet of clay. In this way the head will be held high, which will make it more graceful and proud. Arrange afterwards, the rest of the body, and the legs, and the curling as you think will look best. And so that it is secure and does not move when you put in the sand, secure the legs with little points of iron wire, having already made the first hole with a very sharp needle. Do the same on the body parts that you deem necessary, making sure that the points going through the animal are fixed in the clay sheet, and not so far in front that they jut out beyond the body of the animal by a\n\n\n  at left top margin of folio 112v\n\n  Take a needle of fine steel, and which will be the sharpest you can find, so that with it, when you make your first hole in order to place the wire threads, it will pass through without effort, and take care not to rudely insert the wire or take skin with it. Then put a thicker wire in the thick bits [of the animal] and the thinner wire in the thinner bits. But take this secret advice and do not plant your pointed wire in one go through the animal and onto the plaster, but having planted it, take it out of the clay earth but not out of the animal, which is afterwards fastened there. One does this because by fastening the point the first time, it pushes in the skin of the serpent and by taking the point out, it replaces the skin in its original state.\n\n\n\n  at left bottom margin of folio 112v\n\n  When you reuse the points you have already used, make sure to clean them well of rust, so that they do not take away some skin.\n\n\n\n  at bottom margin of folio 112v\n\n  The main arrangement of your casting is to keep its head very high and have it looking sideways. For this effect, pierce the head on a solid plank or table, making the wire pass through the bottom of the throat up to the top of the head\n\n\n\n  Figure\n\n\n- - - - - 113r - - - - - \na bit so that you can take it out if you need to. And be advised that these needle points must be of the thinnest kind of iron wire, with a length that is suitable to the animal; because the smaller your needle is, the smaller the leftover hole will be. However, you must have different sized ones because there are some needles that go on the body and in places that are thicker, like under the throat, and some needles must be longer and stronger than the ones used on legs and thin places, where the needles must be subtle and thin, almost like the biggest harpsichord strings. And it would be better if they were of iron wire, which is firmer than the one made of latten. And if piece of a tail, a piece of nail or a piece of leg to the body needs to be joined to the body, do not use the needle; it would damage these parts. But apply a bit of wax, as big as a grain of millet, between the body and the end of the tail. Then with a bit of iron wire, flattened and warm, touch the wax and join the two pieces by applying a bit of pressure. In this way, after your animal has been well—placed on the lute—shaped pancake of clay earth, \n&gt; Figure\n&gt; \n build around it a wall of the same clay \n&gt; Figure\n&gt; \n in this way. And join everything together. And then with a big knife, with which you have cut the clay, take away the extraneous clay surrounding the pancake. And place on a piece at the end of the mold to close it off, as you see in B. Then, with a small curved instrument, mark on the inside of your mold the thickness you wish, which for a common serpent must be two inches thick; so that when you put in your wet sand, you will see when it is thick enough. When all of this is neatly set out, moisten well the shaped body of the animal everywhere, with good spirits, with a brush. For this is the best—kept secret: because everything that is touched by spirits will come out very neatly and without any small eyes or holes that we call bubbles, which usually come not at the back or in the thick sides of the mold, but on the edges. And as soon as you have thusly moistened everything with spirits, put in your wet sand without letting the spirits evaporate, which they do quickly. And soak it thusly and make sure the needle is as long as you need according to how much you want to raise the head, and that both ends are sharp. Having been arranged thusly, affix your serpent on the clay earth, and place the head first and then the rest.\n\n\n  Figure\n\n\n\n\n  at left middle margin of folio 113r\n\n  If, once you have placed you animal on sheet of clay, you are distracted with other occupations, rub your animal with spirits and under the belly so that it does not stick or attach itself to the clay earth.\n\n\n\n  Figure\n\n\n\n\n  at left bottom margin of folio 113r\n\n  If, when you pierce the belly of your animal, it releases water on the plaster, clean it well with cotton because the sand that was wet will become lumpy. If it is on top of the animal, clean it very carefully and very neatly and touch it and strongly wet it with spirits.\n\n\n",
  activities: ["casting","positioning animals"],
  purposes: ["making"],
  id: 425
});
index.addDoc({
  title: "Wetting sand and molding the first cast",
  author: null,
  layout: "narrative",
  content: "- - - - - 113r - - - - - \n\n\nWetting sand and molding the first cast\n\nHave a porringer of leaded earth of such a size that it can hold the wet sand which will be needed to fill your mold in one go, which is better than in two gos, because if you do not throw the second load of sand in very quickly, there is a risk that while you are preparing it, the first one will take and become solid,\n- - - - - 113v - - - - - \nand this way, while heating it again, the two casts will dissolve. Therefore, have several dishes of various sizes with a pouring beak in order to cast better. In these, pour some regular fountain water and mix into it as much as an egg # can hold of sal ammoniac water, mixed as described. If you want to cast lead or tin — because one would need more for casting gold or silver — having the water in your dish, add the sand and not the other way around [by adding the water to the sand], and adjust it with such attentiveness that, while mixing it vigorously and wetting it quickly with a wooden spoon, it does not become thicker than mustard. And in such a way cast [i.e., pour] first the clearest part, as is always at the surface, by shaking it a little higher in your mold. And doing so, since your animal is nearly covered, Once your animal is covered, blow on it very strongly to eliminate the small bubbles from your soaked sand. Then pour immediately the rest which is at the bottom and which is thicker than the upper part, fill your mold to the thickness mark you have made.\n&gt; Figure\n&gt; at middle middle margin of folio 113v\n&gt; \n And while casting do not forget to shake your mold, that way your soaked sand runs and get in through every parts. Also tip your mold up on the side of the head, which is higher than the body. That way the contents of your mold will have the same thickness, and you’ll spare sand. This being done with care, your sand will harden within a quarter of an hour. Then peel the clay contour which can be used later. Let it dry a little bit, than separate your mold from the slab of earth, and you can mold properly straight after. Cut away the extra parts with a knife, and make it mandore shaped. You can reuse the clay frame. Scrape away what’s on the back of the mold, because this part is the weakest; do not forget to make notches around it, that way the second cast would bind much better\n&gt; Figure\n&gt; at middle bottom margin of folio 113v\n&gt; \n and would not move.\n\n\n  at left top margin of folio 113v\n\n  Your half mold, in one shot and one mix is the best.\n\n\n\n  at left top margin of folio 113v\n\n  or two eggs, because there is no danger if there is more. If you cast twice, just add sal ammoniac water into the first pouring.\n\n\n\n  at left top margin of folio 113v\n\n  Make your mixture as clear as a pureed broth, or starch water, the one women use make their starch. It is not a problem if the mixture is very thin because sand settles in the bottom and water stays on top of it, which we scape as too weak and soft. It will not take long to harden, because burned things dry rapidly.\n\n\n\n  at left bottom margin of folio 113v\n\n  Figure\n\nIf you don’t fill your mold with soaked sand at one go, do mix your second cast with the top part of the first cast, stir with a spoon, or the stick you had took to soak your sand.\n\n\n\n  at left bottom margin of folio 113v\n\n  You do not need to add sal ammoniac water if you cast small molds which do not need to be reheated too long. However it is better to add some.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 426
});
index.addDoc({
  title: "Second Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 114r - - - - - \nAnnotations:\nBread as Mediating Material: Tactile Memory and Touch in Ms. Fr. 640, fols. 29r, 114v, 129v, 130r (Le Pouésard)\n \n\nSecond Casting\n\nWhen you have well molded the first part of the animal, that is to say the back, the spine, and the entire top part, and when the half—mold where the part is encased is hard enough \n&gt; Figure\n&gt; at left top margin of folio 114r\n&gt; \n turn over the bottom and the sides of the belly, sometimes using a knife for the thicker parts, and then with a pen—knife for the places where the more fragile parts are encased, like legs, tail, and similar things. Because the head is higher, you will have to dig deeper to expose it and do a deeper notch that has to be well exposed, by enlarging it from the outside, in order for the second mold that you cast on top of it releases well. A process for which the animal himself can be useful because his nature so permits. However, make sure that you reveal the lizard’s throat more than you would do a snake, because the lizard has big jaws and big bones that do not cast as easily, and has deep ears in which the wet sand is not as easy to remove. But you will avoid all of this if you expose half of the head and those things that you know do not release easily. When everything is well exposed, blow over it and wipe each part again with a cloth made of swine hair, slightly dampened into salt water or clear water, do that gently, that way the lower part of your uncovered animal will be very neat. # 🝋 Once it is done, dip the covered side of your mold into water for a pater noster. It will suck water inside, that way when you’ll rub with oil the uncovered side, the oil will remain on the top, and to prevent the second cast which you will cast on top from sticking. Dip your mold into water, take a particularly fine brush and rub with oil the entire mold but the animal; it should not be touched with oil. Make sure to use you brush between the parts and on all the fragile parts. And if by mistake oil is soaked, dip the mold into water, as it is said above, and drop by drop the oil will come back to the top.\n\n\n  at left top margin of folio 114r\n\n  Mold small animals as big ones, however, for small animals, use very fine tacks made of cords of cittern, short and long ones.\n\n\n\n  Figure\nat left top margin of folio 114r\n\n\n\n\n  at left top margin of folio 114r\n\n  remove all the little tacks with the help of very small flat pincers. # then + [illegible] # However, leave the tack which is pinned into the throat so that it will help you to turn the head over, because it is sunk deeper than any other part, because when you drew the plan, you put higher up. It is at the level of the head that you must make the biggest notch and you should start at that notch to expose and then keep following by looking at the traces left by the tacks.\n\n\n\n  at left bottom margin of folio 114r\n\n  and if a small piece of nail, or piece of tail, or other fine things separate from the mold, put a little piece of wax between them, and join them with the tip of a hot iron wire, then smooth it in your mold with a knife, and make notches on the sides in order for the other half of the mold to adhere to it. 🝋\n\n\n\n  Figure\nat left bottom margin of folio 114r\n\n\n- - - - - 114v - - - - - \nThis thus prepared, put your first half—mold on the disc of clay, surround it with a clay circle and do a thickness mark similar to the first one. Then, with a rather thick brush, wet with spirits all your animal’s exposed half, without, if possible, missing any part, because therein lies the secret to casting neatly. Then, as fast as possible before the spirits evaporate, soak your sand, and cast it, shaking, blowing, and moving the mold, as you did for the first one, making sure that what you pour first on the animal is clearer than the rest, so that it is soaked everywhere and highlights the finer parts. So, leave it for fifteen minutes so it sets, then remove the clay circle and disc. And, with a knife, join you two molds together in a longish form, like a mandore, as we say, because of how you cast. Then soak a little in water the whole mold up to the level of the joints. Because this is another secret to separate them more easily. Otherwise, you would break everything. Separate them like this skillfully. After this, gently and patiently remove half of the animal still in the mold, pulling it sometimes on one side and sometimes on the other, in order to avoid breaking it, or ruining parts of the mold. The mold, being empty, rejoin both half so that no dust comes in, and put them aside until you want to heat them up, make the runners, the vents and put the clamps. As for the animal, to avoid it drying, and in order to be be able to use it to mold 4 or 5 of times, put it on water. I believe that it would be better preserved in spirits. However, it would be best to make the 4 or 5 molds the same day because these animals rot and will smell within the day. Having left your molds to dry out, for they will stay humid for at least a month, make the vents for one half.\n\n\n  Figure\nat left top margin of folio 114v\n\n\n\n\n  at left top margin of folio 114v\n\n  + Note that once you have made your second casting, if you left your mold without opening it for a day or a night, you would then need to put it into hot water or reheat it, rather than open it, like for the crab.\n\n\n\n  at left top margin of folio 114v\n\n  If after both halfs of the noyau have set and hardened, it would not open if you did not dip it into water. But as you dip the back of your mold into water, oil comes back to the top and touches the joints which separates them.\n\n\n\n  at left middle margin of folio 114v\n\n  However, be sure that your second mold is thick enough, and hard enough otherwise it could break while dipping it into water if you want to open it. To avoid this mistake dip the entire mold into water and rub it everywhere, if the mold has set enough it will harden. Then take both molds with a rough cloth, in order to grip it better. Then strongly separate the molds as if you wanted to tear bread apart. But in case it breaks, rejoin them, and fortifies the joints with clamps.\n\n\n\n  Figure\nat middle bottom margin of folio 114v\n\n\n\n\n  Figure\nat right bottom margin of folio 114v\n\n\n\n\n  at right bottom margin of folio 114v\n\n  Afterwards you can repair the mistakes with a small pair of scissors.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 427
});
index.addDoc({
  title: "Note about everything above said",
  author: null,
  layout: "narrative",
  content: "- - - - - 115r - - - - - \n  \n&gt; at left top margin of folio 115r\n&gt; \n&gt; First cast the tail or the back of your animal, make a cut from the head to the middle to the tail where you cast, and which is the end of the mandore. After casting do not forget to make holes, and to notch your casted metal. That way metal will run better than if do not notch it. Indeed metal get damaged into notches, do not run too much and does not swell as much as if you do not make any notch. Put small clamps made of wire to the joints separating both molds it will reinforce the joints of your mold. Clamps prevent molds from distorting and from getting damaged while heating.\n\nNote about everything above said\n\nIf your snake hasn’t eaten for a long time, when you want to kill it into urine and vinegar, it would fill with water and would swell, and then it would dry when you fix it on clay.\n\nOnce casted, and removed out of the mold, you could see a small empty line between the animal and the mold where sand will come in when you make the second cast. Try to avoid that if you can, but do not give up your second casting because not much sand comes in this empty space and it will be easy to clear it with the help of a small needle, also this sand does not stick to the first cast.\n\nCasts which must be reheated, like casts for gold or silver, or other matters which must be burnt inside the mold, need more stone alum than casts which are stripped of the mold easily, like lead and tin. However do not add too much stone alum.\n\n",
  activities: ["casting","keeping animals"],
  purposes: ["making"],
  id: 428
});
index.addDoc({
  title: "Stripping animal",
  author: null,
  layout: "narrative",
  content: "- - - - - 115r - - - - - \n\n\nStripping animal\n\nIf you’d made such a twist to your snake that you can not stripped its belly easily of the mold, and if the head and the mouth are thinner, and easier to be removed, do cut away the extra parts of the mold, and do reheat the mold again. The matter inside will burn, then add some quicksilver inside which will attract ashes and burnt bones, the pipe will get wider, and your animal will get easily out of the mold without being damaged. You can strongly pull your molded snake, because it is soft and malleable, and your mold firm enough to keep its print undamaged.\n\n",
  activities: ["casting animals"],
  purposes: ["making"],
  id: 429
});
index.addDoc({
  title: "Reheating molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 115r - - - - - \n\n\nReheating molds\n\nWhen your molds are reheated, and cleaned, cast as soon as possible, because if you keep your molds it will corrode and become damp. Reheat the thickest part, where the body of the animal is, on high position because if there is something to be burnt inside it will fall down. Mark the high part in order to recognize it.\n\nOnce well reheated, do not damp the outside of your mold too much because the inside must stay red when you cast.\n\n\n  at left bottom margin of folio 115r\n\n  It is the shape of the clamp\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 430
});
index.addDoc({
  title: "Tin casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 115v - - - - - \n\n\nTin casting\n\nIf the herbage or flower you want to cast is delicate and fine, tin must exceed lead in your mixture; on the contrary, if it the flower or herbage is thick, you must add into your mixture more lead than tin. For a fine thing, add one part of tin for four parts of lead. Your mold must not be too hot, so you can hold it with your hand when you cast. Your alloyed tin must be very hot and almost red for casting, and that way it will enter all the small parts of the mold. Otherwise, your tin will cool down before reaching the thin parts of your herbage. Do not forget to mix a little bismuth in your mixture; that way, your tin will run better and be firmer.\n\n\n  at left top margin of folio 115v\n\n  With your lead allied with tin, or tin allied with lead, you can add a very little quantity of bismuth and it will look silvery. But do not put too much, because if hardens the matter and makes it sour, and if your work on fine things —— like legs and similar things —— it will not cast properly.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 431
});
index.addDoc({
  title: "Giving ventilation to your mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 115v - - - - - \n\n\nGiving ventilation to your mold\n\nIf your herbage is very fine, in addition to vents, you can drive a thread through the clay contour of your herbage instead of casting with a needle, and thread it also in the herbage. The thread will burn, like the herbage, and the hole will remain, thus giving extra ventilation.\n\n\n  at left middle margin of folio 115v\n\n  Do not remove your annealed molds out of the fire before they have cooled down by themselves. Also make sure that your very hot molds do not come into contact with wind or coldness otherwise they would burst. Do not reheat your molds before they are drained and firm again, otherwise they would cast before the vent holes are made and the clamps are fixed.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 432
});
index.addDoc({
  title: "Annealing core molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 115v - - - - - \n\n\nAnnealing core molds\n\nAfter your molds have their cast vents and clamps, fix the clamps as above mentioned. Then make a round, made of bricks, at the edge of your forge, or in a clean place. Fill this round with big, half—lighted pieces of charcoal. Put your molds on the round, and leave it during half an hour, that way it will gently heat up and not all at once. Finally, when coals start being white, add big half—lighted big pieces of charcoal and blow with your small bellows until hot. Do as such, slowly, until the molds redden inside and out. If you want to cast a herbage or an animal which are difficult to strip, and you need to burn what is in the mold, look into the cast and see if it is molds are quite red and inflamed inside; this will be a sign that they are properly annealed. If it is not so, increase the heat and keep at it until it becomes thus. If there is nothing inside the mold to be burnt, this heat is good for tin casting. The molds for tin casting are much better annealed in a reverberatory furnace.\n\n\n  at left bottom margin of folio 115v\n\n  Figure\n\nDo not heat too much at first otherwise your molds could break\n\n\n\n  at left bottom margin of folio 115v\n\n  You know that your molds are annealed enough if the hole in the cast is red, on the contrary if the hole is black the molds are not annealed enough.\n\n\n\n  at left bottom margin of folio 115v\n\n  If you want to cast silver, do not anneal twice, and if something stays in the mold and that must be burnt because no good […]\n\n\n",
  activities: ["annealing"],
  purposes: ["making"],
  id: 433
});
index.addDoc({
  title: "Drying animals in an oven",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n\nDrying animals in an oven\n\n \nOne can skin small cats and remove their eyes and all their guts. Then place a small stick vertically between the teeth in order to open their mouths. Then with iron nails one should attach their feet to a small board, arrange the required position. Once they are tied by their feet with small iron rings, one has to hang them upside down into the sun. By doing so, they will get the right shape and dry, the belly will tighten and the the tail will remain high up thanks to the twist that you made. Once they are already a bit dry, one may twist the head as he wishes and secure the position with any tool. One may finish to dry the animal by placing it in an oven once the bread has been taken off. Then place some realistically painted lead balls or wax balls in the eye—sockets. One should paint them with gummed ink so that they look like jet. One can add a painted tongue, or horns, or wings or anything you may imagine, same goes for rats or any animal.\n\n\n  Figure\n\n which surround the fingers of the paws and which stick in the jacket of clay.\n\n\n",
  activities: ["drying animals"],
  purposes: ["making"],
  id: 434
});
index.addDoc({
  title: "Reddening lively crayfish which will look as if they were boiled",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n\nReddening lively crayfish which will look as if they were boiled\n\n \n Rub your crayfish with good vinegar diluted with a little eau—de—vie and not much, then you can present them as if they were cooked and yet they will walk.\n\n",
  activities: ["coloring animals"],
  purposes: ["making"],
  id: 435
});
index.addDoc({
  title: "Molding a single spider",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \nAnnotations:\nToo thin things, fol. 142v (Fu, Zhang)\n \n\nMolding a single spider\n\n \n One has to display it on the jacket of clay as it is said for the vine leaf. Then do the first cast. And once it dry, peel the mold off to the middle of the legs and do the second cast.\n\nAlso. One cannot mold the hairy legs of big spiders or any other hairy animal if they had not been rubbed with wheat oil before they are laid flat. This will make the hair firmer and will dry very quickly. Hairy things entangle in the sand, and do not burn very well.\n\n",
  activities: ["casting animals"],
  purposes: ["making"],
  id: 436
});
index.addDoc({
  title: "Molding a single vine leaf",
  author: null,
  layout: "narrative",
  content: "- - - - - 130r - - - - - \n”\n\nMolding a single vine leaf\n\n \n Attach it with brass wire points on the jacket of clay and then cast the first mold. Once it is dry peel off the back side and make the second cast. Then peel away the back side, and make your second cast. Once it is dry, you may remove the leaf. You must heat your mold only once, because there is nothing to be burnt inside.\n\n",
  activities: ["casting plants"],
  purposes: ["making"],
  id: 437
});
index.addDoc({
  title: "Molding a crab",
  author: null,
  layout: "narrative",
  content: "- - - - - 130v - - - - - \n\nMolding a crab\n\n \n It is a secret and a masterpiece to mold [a crab] well because it is necessary to proceed differently [than you would] with other animals, because its shell is quite difficult to […] and that is why it is necessary to reheat the mold three or four times. And on top of all that, it leaves a hard crust [that is] gray like ash. It is not molded from one piece and one cast as [is done with] plants. Rather, [it is moulded] in two casts as [is done] with serpents which are easily stripped from it [the mold]. After it is opened, nimbly remove this crust with the very fine point of a pen—knife {and not with quicksilver which removes nothing from it} and likewise those small crusts of the second cast which get into the cavities that the sand or the molded animal made because it has curved legs. Here is the subtlety and the secret of stripping it. As you molded it [the crab] from the back side in the way [that you did for] the others [animals], remove the stomach and all the curved legs from it. Make your second cast in the way [that you did for] the other [animals], but as it will have set, take care that you not open the mold unless you have first reheated it well. Otherwise, because of its curved legs, you would break the whole thing. Herein lies the subtlety. If, after it has been well reheated and opened, you see that the crust is not burned enough, reheat [it] until it is burned [enough].\n\n\n  at left top margin of folio 130v\n\n  It [a crab] can be painted like a crayfish.\n\n\n\n  at left top margin of folio 130v\n\n  It does nothing.\n\n\n\n  at left bottom margin of folio 130v\n\n  For opening the mold, it is not necessary to soak it because, once reheated, it will open itself by itself.\n\n\n",
  activities: ["casting animals"],
  purposes: ["making","advice"],
  id: 438
});
index.addDoc({
  title: "Stag beetle",
  author: null,
  layout: "narrative",
  content: "- - - - - 130v - - - - - \n\nStag beetle\n\n \n Like a crab, it [a stag beetle] is also difficult to burn, therefore do [stag beetles] as you did crabs.\n\n",
  activities: ["casting animals"],
  purposes: ["making"],
  id: 439
});
index.addDoc({
  title: "For molding thinly",
  author: null,
  layout: "narrative",
  content: "- - - - - 130v - - - - - \n\nFor molding thinly\n\n \n After you have molded the first mold as the core, leave it to dry well before removing the figure from wax, so that the mold is not ruined. Afterwards, then make make a small lasagna of paste as thick as you like, and, once you have greased the cavity of your first hollowed mold with butter, apply the paste to it [the cavity of the first concave mold] and then the upper part of the second mold. If you grease [the mold] with oil, it will be soaked up [into the mold] and it will not be as clean as butter.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 440
});
index.addDoc({
  title: "Herbs difficult to burn in the mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 131r - - - - - \n\nHerbs difficult to burn in the mold\n\n \n Mold them in two or three castings; being annealed, your mold will open, and it will be easier to extract the charcoal from inside.\n\n\n  at left top margin of folio 131r\n\n  Try [this]\n\n\n",
  activities: ["casting plants"],
  purposes: ["making"],
  id: 441
});
index.addDoc({
  title: "molded letter paper",
  author: null,
  layout: "narrative",
  content: "- - - - - 131r - - - - - \nAnnotations:\nMolded Letter Paper\n \n\nmolded letter paper\n\n \n Write with some ink well thickened with gum or any other color dye which has body, and which is not erased if dampened with brandy. Then put your paper on the sheet of clay, and dampen it with brandy. Cast both sides [of paper].\n\n",
  activities: ["casting things too thin"],
  purposes: ["making"],
  id: 442
});
index.addDoc({
  title: "Adorning beds, mirrors and similar things",
  author: null,
  layout: "narrative",
  content: "- - - - - 131r - - - - - \n\nAdorning beds, mirrors and similar things\n\n \n Model any drawing in half relief on a flat slate in order to set it on round or flat things. Cast with very fine tin, then you can gild it with gold leaf, and set it wherever you want. Fill the bottom of the relief with small rubies, orpiment, or any colored little grains.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 443
});
index.addDoc({
  title: "Training a dog",
  author: null,
  layout: "narrative",
  content: "- - - - - 131r - - - - - \n\nTraining a dog\n\nYou need to keep your dog attached; when it does what you command, to win its love, give it a piece of cheese which was held under the armpit. This cheese would be a bad drug if the master, or the apprentice, is red—haired.\n\n",
  activities: [],
  purposes: ["advice"],
  id: 444
});
index.addDoc({
  title: "Molded wax",
  author: null,
  layout: "narrative",
  content: "- - - - - 131r - - - - - \n\nMolded wax\n\nWax representations made from white lead and cerussite are not made to be burned and melted in a mold where you want to cast silver and gold; this would make it brittle. Moreover if you use such a mold, the wax would be stripped thanks to the violence of the fire which makes it boil, and the mixture made of cerrusite or any other metal would attack the mold. That’s why if you want to sketch things\n\n\n  at left bottom margin of folio 131r\n\n  +White wax is more delicate than the other, and it doesn’t leave any filth when you want to mold it as a core, or to mold hollow.\n\n- - - - - 131v - - - - - \nto be cast with gold and silver. Do not add to your wax all the drugs you are preparing, but only melted sulphur, as the candle melts, and also candle smoke. Melted sulphur falls down to the bottom of your mold, but lets the wax keeps some of its quality, melting it but leaving it a little firm. You can thus melt your wax representation on fire. If your wax is composed of cerussite or something similar, you need to put your mold into boiling water.\n\n\n  at left top margin of folio 131v\n\n  You don’t need all this to mold flat representations made of wax, because the wax can be removed completely from the mold, and won’t remain inside it.\n\n\n",
  activities: [],
  purposes: ["making"],
  id: 445
});
index.addDoc({
  title: "When lead or tin casts fill with bubbles",
  author: null,
  layout: "narrative",
  content: "- - - - - 131v - - - - - \n\nWhen lead or tin casts fill with bubbles\n\n \nIf your casted work became porous, it can be repaired with very firm wax, and you can gild or silver it afterwards. If you cast fine, the alloy of one ℥ of lead to one lb of tin is good. But if you cast with lead[ligue illegible], indeed you need one lb of lead to two ℥ of tin, because lead is fat and sticky, goes over the alloy. I have cast a very small lizard that way. If you cast something thick, which keep the heat for a long time, it will make bubble if there is not enough tin. Your mold should not be cold, but cool enough that you can hold it without burning your hand, or that you can hold your finger into the cast without burning yourself. Your tin or lead must be like red. Cast your lead first, then cast tin. When you are going to cast, add a piece of resin to your mixture, then a little looking—glass tin. If you add too much lead to your tin, the mixture wouldn’t be fluid enough. To know [the right proportion], If tin cries loudly, it means that there is not too much lead; if tin cries softly, it means that you added too much lead. Be wary\n\n\n  at left middle margin of folio 131v\n\n  You can solder with the same matter, then rework it and [remove away all the unwanted thick parts] with a burin.\n\n\n\n  at left middle margin of folio 131v\n\n  Tin is a metal that can[…], makes bubbles and burn, and more capricious to work with than gold and silver.\n\n\n\n  at left bottom margin of folio 131v\n\n  Lead must not be only red, it must be quick, and as liquid as water, which is a sign of its perfect heat. Your mold must be so hot that you couldn’t bear to put your finger into it. Do not open your mold until is has cooled down. Just as for silver and gold, it is a sign of good casting when lead comes out through the vent holes.\n\n- - - - - 132r - - - - - \n” \n not to heat your mold too hot because it makes it brittle, it makes bubbles and shrinks tin, and would also break the molded thing. Do not dip you hot mold into water because tin and lead would shrink.\n\n",
  activities: ["repairing"],
  purposes: ["making"],
  id: 446
});
index.addDoc({
  title: "Mold made from two casts",
  author: null,
  layout: "narrative",
  content: "- - - - - 132r - - - - - \n\nMold made from two casts\n\n \n It opens once anealed. To clean it after, fix the clamps again, lute the mold, particularly the joints. Then let the earth slowly dry. When it doesn’t smoke anymore, let the mold cool down until you can hold it without burning your skin. Then put your molds into the presses, or into a pot filled with sand, and cast with tin. If you cast gold or silver your mold needs to be cast twice, and cast when your mold becomes red—hot.\n\n\n  at left top margin of folio 132r\n\n  If your heated mold […], shrinks because of the bad quality of the plaster, open it after the first heating, tighten it, then lute it and clamp it again.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 447
});
index.addDoc({
  title: "How to anneal the molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 132r - - - - - \n\nHow to anneal the molds\n\n \n Light your charcoals from the forge, then place them in a line in a corner of the forge according to the size of your mold, in order that it be surrounded with 3 or 4 fingers of charcoals, particularly at the bottom of the mole, where it is thicker. Then put your molds on these charcoals —— and not on a grate as some people do —— because they would get too strong a heat. Let your furnace heat up gradually for a while, always adding burning charcoal. As long as the mold is humid, your charcoal will be dampened at the bottom, but when it is dry, the charcoals start to blaze. When one side of the mold is dry, turn over; when both sides are dry and don’t smoke anymore, increase the heat and cover your mold with burning coals. When the mold starts being red, do not blow on it with small bellows, because the mold would burst. Similarly, when your mold becomes red—hot, keep it well covered with burning charcoals and do not uncover it because it would crack. Prevent the draft from a window from reaching it. Then let it cool down.\n\n\n  at left middle margin of folio 132r\n\n  When you want to anneal your molds, luted or not, do mark the belly of your mold, in order to place that side at the bottom, against the burning charcoals, because if the intensity of the heat made the mold crack, it would be better that it do so on the bottom part instead of the top part.\n\n\n\n  at left bottom margin of folio 132r\n\n  If your mold is small, do not heat it as long, otherwise it would crack and be damaged.\n\n- - - - - 132v - - - - - \ndry by itself. When your mold starts to redden, it will soon be become completely red—hot. But make sure that its bottom is red—hot too, without any black spot.\n\n",
  activities: ["annealing"],
  purposes: ["making"],
  id: 448
});
index.addDoc({
  title: "Common quarry sand",
  author: null,
  layout: "narrative",
  content: "- - - - - 132v - - - - - \n\nCommon quarry sand\n\n \n In a frame, If you cast it hot, sand will bubble; thus you have to just dry it.\n\n\n  at left top margin of folio 132v\n\n  I have tried to prevent molds blended with sand from cracking when annealed, and thus not get any with flaws that crack.\n\n\n",
  activities: ["casting with sand"],
  purposes: ["making"],
  id: 449
});
index.addDoc({
  title: "Crocum ferry",
  author: null,
  layout: "narrative",
  content: "- - - - - 132v - - - - - \n\nCrocum ferry\n\n \n After I processed it with vinegar and reddened under heat, I had it ground very finely on the porphyry, until there could be no ruggedness felt under the nails. Then I soaked it in very good vinegar for 2 or 3 days, stirring the mixture several times a day. Then I boiled it and made it red—hot in a pot, and put the whole thing into an air furnace. I obtained a mass full of eyes, but that crumbled finely between the fingers. I mixed half as much as stone alum in the sand. I diluted the sand very thinly, and molded a very small lizard, which molded very cleanly and finely. Crocum ferry does not make the mold harder, but makes it firmer. When your mold is soft and fat under your nail, it means that the crocum is good, very fine and well prepared. You can add any quantity of crocum, your mold will not be damaged because it is a friend of gold. I think it would be the same with silver. And in order that molds made with it do not crack, make it with needle filings.\n\n\n  at left top margin of folio 132v\n\n  Sand is better made with distilled vinegar.\n\n\n\n  at left middle margin of folio 132v\n\n  You can add this sand to the molds you want to use to cast silver, because it make molds firmer, and when you scratch it, you will find it a bit rougher than the other molds not made from this sand. You mold very clean with this sand.\n\n\n\n  at left bottom margin of folio 132v\n\n  You can use this one for all molds, because it prevents them from cracking and bursting when heated. This sand withstands several casts for molding flat medals. Sand from steel or needle filings is redder and better.\n\n\n",
  activities: ["making sand"],
  purposes: ["making"],
  id: 450
});
index.addDoc({
  title: "Gilding animals cast with silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 132v - - - - - \n\nGilding animals cast with silver\n\n \n You can gild them with an amalgam, the lines won’t be damaged if they are made from silver.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 451
});
index.addDoc({
  title: "Hard wax to imprint seals",
  author: null,
  layout: "narrative",
  content: "- - - - - 133r - - - - - \n\nHard wax to imprint seals\n\n \nOne makes these [seals] out of white wax which is harder than the other and one mixes in it some cerussite or leaded white very finely ground such that it is as hard as you like and mix in a drop of turpentine to bind it. Afterwards mix it in the color that you want. It is in wax that serves goldsmiths for modeling.\n\n",
  activities: ["wax molding"],
  purposes: ["making"],
  id: 452
});
index.addDoc({
  title: "Casting the feet of small lizards in gold and silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 133r - - - - - \n\nCasting the feet of small lizards in gold and silver\n\n  \nBecause the feet of these [lizards] that are very small are [also] very fine, once you have molded the top and you have uncover the vents and underneath the feet are covered lightly with wax, and then cast a second mold. And the wax that one removes, it leaves a little cast for these said feet, and again such that the underneath [part] comes out in one piece that you can repair well, And the scales on top of the toes come [out] well.\n\n\n  at left top margin of folio 133r\n\n  Around the big lizard nails, put on each a small round of wax to make the cast like this.\n\n\n\n  Figure\nat left middle margin of folio 133r\n\n\n\n",
  activities: ["gold and silver casting","casting animals"],
  purposes: ["making"],
  id: 453
});
index.addDoc({
  title: "Marks [made by] the [pin] points of iron thread which one finds on the head of an animal",
  author: null,
  layout: "narrative",
  content: "- - - - - 133r - - - - - \n\nMarks [made by] the [pin] points of iron thread which one finds on the head of an animal\n\n \n With the points [or pins] with which you have dressed [your animal] all over, do same with the head, but [out of] the head which is pierced, a certain moisture seeps out around the wound and this little exudation prevents the sand from covering the point well and there always remain little pinpricks. But to avoid this, you can plant in the plaster of the said blunt pin point and around the upper part of the point, and over this point, there put a little hard wax or a little mastic or cement. And by the medium of the hot thread of iron there you can hold the throat of the animal which one removes [the iron] when you come to uncover the vents and the throat for doing the second cast.\n\n",
  activities: ["handling and maintenance"],
  purposes: ["making"],
  id: 454
});
index.addDoc({
  title: "Clamps and the broken mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 133r - - - - - \n\nClamps and the broken mold\n\n \n When you have done the first firing and taken off the clamps and you have opened your mold to clean it by taking off the bubbles with quicksilver which one cannot do with closed molds, reclose the mold and reattach the clamps but not in the same place as the first time. Reapply lute and dry it but if this is for casting silver or gold [use] lute with the rest of sand which has been used because this is the best netting. If your mold is broken in refiring you can augment it with clamps and lute.\n\n\n  at left bottom margin of folio 133r\n\n  X\n\n\n",
  activities: ["repairing"],
  purposes: ["making"],
  id: 455
});
index.addDoc({
  title: "Porosity and little holes which are in the mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 133v - - - - - \n\nPorosity and little holes which are in the mold\n\n \n It oftens happens when you cast two or three molds one after the other using the same dish, because the last casting comes from the bottom of the dish and is thicker, and then often the last cast which comes from the bottom and which is the thickest of the dish, may easily become porous. Cast thinner and neater, as long as you blow very strongly on the soaked sand while casting in order to clear the little air bubbles.\n\n\n  at left top margin of folio 133v\n\n  When the sand is casted thick, it often becomes porous\n\n\n",
  activities: ["repairing"],
  purposes: ["making"],
  id: 456
});
index.addDoc({
  title: "Thing that cannot be released from the mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 133v - - - - - \n\nThing that cannot be released from the mold\n\n \n You must cut it inside the mold in order to burn it. Cut it with scissors at once, that way blood doesn’t flow on the mold, and doesn’t make dirty. Because this dirt would be removed with difficulty when reheated. Then place your mold into a furnace, or something similar, in order to quickly dry the mold which must be removed before the forming of crusts or molds.@\n\n\n  at left middle margin of folio 133v\n\n  + When you mold small lizards, and when you want to peel away the first molded part, start to peel away the heads, you will know its place thanks to the needle. Don’t peel away the legs before peeling away the entire body, to avoid that the naked body, moving,doesn’t remove the legs from their place, which would not be easy to put back into place. When you remove the small needles fixing the legs, block the legs or press the legs with something, that way while removing the needles the legs won’t move; finally, you can fix the legs again with wax.\n\n\n",
  activities: ["handling and maintenance"],
  purposes: ["making"],
  id: 457
});
index.addDoc({
  title: "Various animals entwined",
  author: null,
  layout: "narrative",
  content: "- - - - - 133v - - - - - \n\nVarious animals entwined\n\n \n You can entwine a snake with a lizard, each one biting the other, or a snake eating a frog, or a wall lizard or something similar. But since these interlacings cannot be stripped, cut what’s possible, and allow the rest to burn. To make the mouth of the snake, which must stand high, hold a wall lizard, which is small and would need to be held in the air, because the snake’s head is higher, put under the wall lizard a mound of earth suitable to support it. And if you place the mold in a furnace, the animal drying quickly, it will quickly shrink, then it will burn more easily. These interlacings are also made to mask wounds or defects on the animal which happen when we catch them. Do not forget to join with wax, applied carefully with a hot iron wire, all the parts of the animal which are one on top of the other, or those which are not well pressed on the slab of clay, so that the soaked sand does not remove them. Do that in order to\n- - - - - 134r - - - - - \navoid putting pins that should not be put, only on the top of the head, the thickest parts of the body, and on the delicate parts like the middle of the lizard’s feet, the nails of which you will drive into the clay, thus they won’t move. Once your first mold is casted, peel away the belly of the animal, but do not forget to put some tenuous little pieces of wax at the tip of the lizard’s feet. But if it is from a wall lizard, lightly cover all the sole of its feet with wax, which will be removed with the second cast. A cavity is left which will be fill these little fingers with metal. then rework it. Make sure that wax is fixed well on the parts of the animal which are one on top of the other, so that the soaked sand which comes in does not make them move. If that happened your jacket of clay would be spoiled and your mold wouldn’t get the right thickness, would have holes, and would be spoiled. To obviate that you can make a thicker mold. If this occurs you could rework it in this fashion.\n\n",
  activities: ["lifecasting"],
  purposes: ["making"],
  id: 458
});
index.addDoc({
  title: "To repair a pierced mold",
  author: null,
  layout: "narrative",
  content: "- - - - - 134r - - - - - \n\nTo repair a pierced mold\n\npairing   \n If the molded animal pulls of in certain places, moves from the place you had fixed it, or has not completely died, or if you didn’t fix it well with the iron pins or with the melted wax, or if the animal hasn’t the right thickness on the outside at the relief, or if it is pierced, instead of removing the animal from the mold, peel away the weak parts, or the pierced part, and make holes all around these parts, then dip the back side of the mold, quickly cast onto this place with the same soaked sand which will go into the holes, the cast will adhere to the first cast. But you will have to lute this spot afterwards.\n\n",
  activities: ["repairing"],
  purposes: ["making"],
  id: 459
});
index.addDoc({
  title: "Sand made of crocum [ferri]",
  author: null,
  layout: "narrative",
  content: "- - - - - 134r - - - - - \n\nSand made of crocum [ferri]\n\n \n You can use the mixture made of crocum ferri to cast silver or gold, this mixture will make these casts firm, and prevent these from cracking and making burrs. And I believe that for flat things, it would withstand severa casts. Which however is not commonly done for gold and silver.\n\n\n  at left bottom margin of folio 134r\n\n  Try crocum ferri for lead and tin.\n\n\n",
  activities: ["making sand"],
  purposes: ["making"],
  id: 460
});
index.addDoc({
  title: "To make gold fluid",
  author: null,
  layout: "narrative",
  content: "- - - - - 134v - - - - - \n\nTo make gold fluid\n\nPut as much verdigris as sal ammoniac, as much borax as saltpetre. But don’t add a greater quantity of borax and saltpetre than half the quantity of verdegris and sal ammoniac, in fact add as much borax and saltpetre all together as verdigris. Grind into powder the ingredients on the marble slab, then grind again with very good vinegar until it is very fine, like a ground color, grind verdigris with oil, then leave to dry if you have time, if you haven’t so much time dry it with the fire of the forge, make so that it is very dry.\n\n\n  at left top margin of folio 134v\n\n  Grind\n\n\n\n  at left top margin of folio 134v\n\n  One of the principal things for casting is to cast very hot, especially large metals\n\n\n",
  activities: [],
  purposes: ["making"],
  id: 461
});
index.addDoc({
  title: "Casting big works with gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 134v - - - - - \n\nCasting big works with gold\n\n \n Not only should one clamp the mold very well, but also strengthen it with good iron wire links or adequate straps.\n\n\n  at left middle margin of folio 134v\n\n  Before casting with gold, clean thoroughly your forge with lead and tin.\n\n\n",
  activities: ["handling and maintenance"],
  purposes: ["making"],
  id: 462
});
index.addDoc({
  title: "Secret for soldering small works made of gold and silver",
  author: null,
  layout: "narrative",
  content: "Secret for soldering small works made of gold and silver\n\n \n If some little pieces of legs cannot be easily removed from gold or silver casting, it is because you didn’t cast wax under these parts. Beat some soldering gold very finely, then cut it into very fine flakes, cut the quantity you need. Take some of this phlegm or white and thick saliva which is on the teeth, put some of this matter to the place you want to solder with the point of a burin, then place your flakes, then put to the opposite part a mixture made of a small quantity of soaked fat earth and saliva, thanks to the mixture the solder will better adhere. Then pulverize a bit of borax on it, and heat up Quince pulp seed water to a boil and others too.\n\n",
  activities: ["soldering"],
  purposes: ["advice","making"],
  id: 463
});
index.addDoc({
  title: "Colors for gold, or sauce",
  author: null,
  layout: "narrative",
  content: "- - - - - 135r - - - - - \n”\n\nColors for gold, or sauce\n\n \n Take as much verdigris as sal ammoniac, &amp; saltpetre the size of a bean. Because if you put in too much, it would make the whole thing boil so much that it would all pour out. Saltpetre is only put in to make it boil, so that you know when the material has boiled enough. This color put on sour melted gold makes it soft instantly.\n\n\n  at left top margin of folio 135r\n\n  Softening gold\n\n\n",
  activities: ["coloring"],
  purposes: ["making"],
  id: 464
});
index.addDoc({
  title: "Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 135r - - - - - \n”\n\nCasting\n\n \n It must be lengthened out with respect to the thing you have molded. And at a minimum for large molds it must be four or five fingers in length. You can make it large enough for half the mold &amp; then divide it in three points of such a sort, and so the molded things will [each] be small. But your points must be small. And in the middle of the casting &amp; of its points, make some holes to impede the fury of the metal &amp; make it run more softly. It is also necessary to fix the bent parts of the animal with little notched lines, and similarly the end of the tail and other fine parts so that the metal goes throughout &amp; flows from one part to the other.\n\nDo not forget to make a wax cast of the paws of [illeg] &amp; things as subtle as this.\n\n\n  at left top margin of folio 135r\n\n  When you have molded an animal in the first part of the mold, do not let this part dry out before you have removed the said animal, because when the mold dries out it will shrink and it will also make the animal shrink. Keep it therefore in a damp &amp; humid place until you have done it.\n\n\n\n  Figure\nat left middle margin of folio 135r\n\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 465
});
index.addDoc({
  title: "Vine leaf and small frog",
  author: null,
  layout: "narrative",
  content: "- - - - - 135r - - - - - \n”\n\nVine leaf and small frog\n\n  \n To mold, take vine leaves as they are blooming, just as with all herbs &amp; flowers, or a young vine regrowing after it has been cut or when the leaves come off in autumn, because new leaves are knottier &amp; have more evident veins. By contrast, old leaves are smooth all the way through &amp; full of holes in many places. Place therefore your leaf, its back behind it against the clay plaster, and fasten it with little pins. Leave it nevertheless with its natural curling. And make a notch in the clay to hide the stem for the first cast. And when it’s done and dry, take out the stem of the leaf and clean it well with your jacket and press it with a little scoop of clay. Afterwards, make many castings around the leaf with wax, as you know well, &amp; make a slender casting &amp; with many lines &amp; knots.\n\n\n  at left middle margin of folio 135r\n\n  Vine leaf is painted with a green made of scudegrun &amp; verd de terre.\n\n\n\n  at left bottom margin of folio 135r\n\n  You can cast a spider or frog &amp; whatever you like on the leaf.\n\n\n",
  activities: ["casting plants","casting animals"],
  purposes: ["making"],
  id: 466
});
index.addDoc({
  title: "Casting gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 135v - - - - - \n”\n\nCasting gold\n\n \n Take a crusol that can contain a certain amount, as you wish to place roughly crushed borax into it. Place [the borax] at the bottom and then the gold on top of it. Arrange the coal in the forge in such a way that the wind of the bellow will blow above the crusol and no on its side as it would cool it down and would not heat it enough. Also, make sure it is three good fingers away from the wall of the forge so that it is quite surrounded by coal. Allow the crusol to anneal until it is quite red. Then, have your boy strongly blow the bellow with long pushes, as in this manner it heats it better. Meanwhile, once the gold will be melted, blow a small bellow above it. Because [otherwise] the gold would turn sour and would acquire some kind of coat. As long as there will be some swirling smoke as you blow this way, it means that it is not soft enough for the cast. Therefore, uncover the melting pot and without displacing it and without stopping the bellow, tilt it towards you so you may well see what is inside. Throw a ferue of borax in it and blow wind towards it with the small bellow in a jerky fashion. Should there be coal inside, blow a bit stronger to make them come out. And if the gold still smokes and swirls, add borax again and blow above it. Beware that it is still sour and not soft enough, it will show a coat when you blow it as if it had cooled down. By contrast, if it does not show this sign, it is soft enough. Then, blow strongly so that it [the gold] is quite heated and once you think it is hot enough, throw colour on top of it in the crusol and the colour should be composed as following: verdigris, saltpeter, sal ammoniac, and a bit of borax. And continue blowing with the small bellows, and the gold will turn shiny like\n\n\n  at left top margin of folio 135v\n\n  If you cast in gold some piece of important [dimensions], lute your mold with the same sand or put crocum on it.\n\n\n\n  at left top margin of folio 135v\n\n  If you wish to cast some large work, or of important [dimensions], create at the bottom or at an extremity of the forge a vented furnace where you may hold your mold in the sand so red.\n\n\n\n  at left middle margin of folio 135v\n\n  One may cast two or three pounds of gold.\n\n- - - - - 136r - - - - - \na mirror. And once you will want to [start] casting, put a bit more colour in and let it rest a little, still blowing wind with both the small and the large bellows. Finally, place your mold quite red between the small molds or in a crusol full of sand quite hot and [start] casting. And once it will have stuck, you may, if you wish, throw it into water as gold does not get damaged like tin which breaks.\n\nTo melt gold bullion, there is no need to blow above [the crusol] with the small bellow.\n\nFor large works, the crusol made of sand has to be placed in a wind oven so that it is all red at the end of the furnace.\n\nGold, when exposed to wind or when forged becomes black. But a bit of aqua forte removes [the black] instantly.\n\nIf you have to forge a work made of gold on brass, as is done on small statues, put a lead sheet between the gold and the brass, and rather than anneal it and put it back in the fire, dip it in the aqua forte and it will be soft.\n\nIt is enough for the cast to be of the same thickness as the medal, that it from the middle of the cast, up to the medal. But if the medal is very thick, one should not thicken the cast as a result, because a thick cast never comes out well. It may be done large to embrace the medal as much as possible.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 467
});
index.addDoc({
  title: "latten casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 136v - - - - - \n\nlatten casting\n\n \n Take latten from skillet pans, used to make baby’s cereal, which is doulx and apt for the cast. Some people say that counter from Germany contain a lot of calamine. However, when they are tempered, calamine evaporates, calamine mixed with melted latten always evaporates, because latten becomes red again, thanks to the reiteration of melting. However, fresh calamine and only fresh calamine, which is blended with remelted latten, makes latten run, and allow a clean cast. Because calamine which is added to remelted latten is half—damaged compared with its natural state. This half—damaged calamine make latten porous and agitated because it has a tendency to evaporate. Thus add only very fresh calamine to melted latten. Make sure to cast your mold very hot, you mold must become red—hot, like molds to cast gold, silver, copper and metal. If you pour fresh calamine, avoid its smoke which is pernicious. To cast a medal, I took thirty counters from Germany and xii clous de rosette made of doulx latton, like for claires medals which are made of soft latten. This matter contains a lot of calamine like all kind of yellow latten, and make a lot of smoke which prevent latten from running, and make it porous, that is why it is necessary to make many vents and to cast very hot, latten must be as white as water, or as melted silver or as a polished mirror of steel. The second fusion will come out much better because evaporated calamine does not make as much smoke. If you use a molding frame that does not break and holds its own, the second [casting] will come more neatly out of the mold, because the frame is impregnated with the smoke of calamine. If you add sal ammoniac to your latten, this latten will be clear and shiny, but will be even more shiny with huile tingente. Do not use another sand than the above mentioned to mold a noyau, and the mold must become red—hot, like a mold to cast gold. Make a lot of vents. If you cast yellow latten with the prepared tutty you will not get any smoke.\n\n\n  at left top margin of folio 136v\n\n  This metal is capricious to cast because of the smoke of the calamine. Do not leave it out of the fire, as some do with silver. Because when air or wind touch it, the mold gets cold at once. When you cast it, this metal always leaves burrs, like when casting glass. Foundry workers do not usually use this very yellow latten as much because of the calamine which is heated. They cast red copper and turn it yellow with fresh calamine, or with some prepared tutty. Before casting, clean it with charcoal with a quere made of copper or iron. Then cover it with a cloth soaked in lard blended with saltpetre, or sal ammoniac, in order to protect it from wind, which would cool it down.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 468
});
index.addDoc({
  title: "Casting red copper",
  author: null,
  layout: "narrative",
  content: "- - - - - 137r - - - - - \n\nCasting red copper\n\n \n Pure cauldron red copper, or copper of any other small works, is good to cast. To make it runny, add some sal ammoniac to it, and when you are about to cast, add a little bit of fine tin. One must cast the copper very hot into the mold, so that it is burning and very red, like gold, silver, latten, and metal. You will know that it is hot enough when it is clear and shining like a newly polished steel mirror, or like melted silver. Protect it from wind so that it doesn’t cool down too soon. Cover your cast with tow in order to prevent it from cooling down. Red copper is cleaner than latten, which smokes a lot, which prevents the metal from running. I have moulded it as a noyau very neatly, and as thin as a piece of paper. It must be very hot, white and shining like melted silver, or a mirror. I have moulded it as a noyau with the same sand mentioned above.\n\n\n  at left top margin of folio 137r\n\n  It takes more time to melt copper and latten than any other metals, even red copper. It will run and will comes out well if you cast it very hot, and as thin as water.\n\n\n\n  at left top margin of folio 137r\n\n  Remove your mold from the fire, and set it into embers, which should fill a pot or vessel.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 469
});
index.addDoc({
  title: "Huile tingente to make metal runny",
  author: null,
  layout: "narrative",
  content: "- - - - - 137r - - - - - \n\nHuile tingente to make metal runny\n\nTake some mercury, some real sublimate of venice, and not sublimate of arsenic, aes ustum a poix, sal ammoniac, a poix. Ground everything separately, then blend them together in a glass bottle, and put it on warm ashes. You will see that everything melts like wax, and will have bright colors. Leave to set, add a small quantity of this mixture on every metal, it will run marvelously.\n\n\n  at left middle margin of folio 137r\n\n  Foundry workers who make large casts to mold statues, clean the dirt from these molds with calamine, and a lot of sal ammoniac in order to make moulds clear and neat. When they want to cast they add a lot of tin. Dampness and cold could spoil their works, that is the reason why even a small source of water in the hole can damage the whole thing.\n\n\n",
  activities: [],
  purposes: ["making","advice"],
  id: 470
});
index.addDoc({
  title: "Clamps",
  author: null,
  layout: "narrative",
  content: "- - - - - 137r - - - - - \n\nClamps\n\n \n To make clamps use flat tongs made from wire, which is reheated and bent, and hammered on anvil. Since those clamps are thinner, they burn more easily, being used in reheated molds. So use new clamps.\n\n\n  Figure\nat left bottom margin of folio 137r\n\n\n\n",
  activities: ["tool making"],
  purposes: ["making"],
  id: 471
});
index.addDoc({
  title: "Wetting sand to mold flat medals",
  author: null,
  layout: "narrative",
  content: "- - - - - 137v - - - - - \n\nWetting sand to mold flat medals\n\n \n Flat medals, made of wax or metal, must be oiled very lightly and then touched with a brush of spirits. So that the already moistened mold takes well the oiled thing without rejecting it, one warms the water well in order to wet the sand, because with cold water it would be rejected. It is necessary to oil medals, because they do not expand and in this way would break the mold. Animals, which expand, do not need oiling. The hot water much be of such a heat that you cannot keep your figure in it without it becoming too warm. Wet the thickest sand for flat and solid medals rather than [for] lizards and finer things. Once your sand has set, clean and scrape your mold on one side and the other, and on the bottom edge of the thrown side of the medal, make a notch so that it is easier to take out. Lower the mold, scraping what surrounds the medal, so that on all sides you can take it out easily without it damaging the mold. Then make some gashes around the first mold used to throw so that the second time that you throw in it, it will be identical to the first one, and in the same way, make a notch at the bottom of the mold, where the held of the item cast lies. Also make some [gashes] in the sides of the cast. This done, wet the back of the first mold in oiled water, and after the second casting moisten it with warm water if you have molded your medal in a noyau mold. Having done the first cast, and this one having set, cut around the edge of the medal with the point of a knife so that it comes out of the throw and is not buried in it. Then having made the second cast, and having opened your mold, take away the medal in one go, with two knife points, one on the side of the cast object and one on the side of the head, which is at the opposite end.\n\n\n  at left middle margin of folio 137v\n\n  Take care not to oil your medal too much because if the seeps out, it prevents the sand from serving its purpose and coming together and renders it wavy and lumpy. You must only touch the middle of the medal with the tip of your oil brush and then smear the oil everywhere.\n\n\n\n  at left bottom margin of folio 137v\n\n  Make especially sure that the throw is as wide as you can on the medal and holds it together well. The gate of your cast must always be big and always narrowing as you go towards the medal. Also do not forget to notch the gate of your cast.\n\n- - - - - 138r - - - - - \nIf you want to cast gold, silver, copper or brass, it is necessary that they be perfectly red, and fired on the inside when you cast, and perfectly reheated twice, if there is something inside to be burnt and cleaned.\n\nThe molds of animals that you burn must be reheated in such a manner that the animal burns up. But if it has big bones, it is frustrating to take out and ☿ often breaks delicate things because of its heaviness. One does not put ☿in molds that can open. It is often molds for flowers that do not open because they are cast in one go.\n\nWhen you want to reheat your molds, fix cramp—irons on the joints, so that when they reheat they will not bend, contract or break. This is done once the cast is made.\n\nThe scrapings of the mold can also be used instead of bricks after being reheated, and also the leftover bits of the mold that have already been used. You can also pat it over important things, like works in gold or silver. You can also reheat it and blend it with water diluted with sal ammoniac, like spar from Germany, and is excellent sand for box molds for all metals.\n\nThe molds with things that need to be burnt out inside them, those ones will not open until the thing that is inside is burnt, like the molds for crayfish, crab, great—horned beetles. Do not open the molds in which you will burn something, not before the thing is burnt, it could be crayfishes, crabs, stag beetles, pictures, and pieces of wax and black sulphur, which do not come out of the mold [easily].\n\nYou must not mold on brick or wood because they absorb and attract water too early, and do not allow the sand to set. The best place for [the sand] is on a fresh layers of clay. And yet, I have experienced that grey earth dries out the mold too quickly. Yellow [earth] is better.\n\n\n  at left middle margin of folio 138r\n\n  For medals, and flat things, the sand must be quite thick and moistened so that it sets quickly. And when the sand is thusly thick, you can shake and move the table where you mold lies, so that [the movement] makes the sand go everywhere. But when the sand is clear, as for flowers and herbs, you cannot shake it, nor can you do it when there is something attached to wax or other things which are prone to come off, such as the legs of crayfish or other similar things. And if by chance your sand is too thick, you must quickly add some water. And having put the sand in the water, examine it until it is thick on the bottom and clear on top. The clearest is thrown in immediately and then bubbles and the thickest is thrown in at the end so that it strengthens the mold.\n\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 472
});
index.addDoc({
  title: "Talcum mixed with the molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 138v - - - - - \n\nTalcum mixed with the molds\n\nI used the one from which I had extracted the oil. I crushed it very finely even more into a steel mortar with a pestle [which was] rough like a file. I crushed it very finely into a cottony, downy powder. I mixed it with the sand and soaked both matters together, and I casted it en noyau. It molded very clean and there is no doubt that it will withstand fire.\n\n",
  activities: [],
  purposes: ["making"],
  id: 473
});
index.addDoc({
  title: "Gold casted very thinly",
  author: null,
  layout: "narrative",
  content: "- - - - - 138v - - - - - \n\nGold casted very thinly\n\n \n When goldsmiths have to solder something quickly but don’t have enough time to forge it, they melt gold and then they pour it on a cloth or on anything else that withstands fire. Then they flatten it swiftly with a hammer or another similar tool, and it [the gold] is very tenuous and it even retains the impression of the cloth.\n\nUnalloyed pure gold can be cast into a medal but not into herbs and lizards or other very delicate things if it is not alloyed.\n\nA pansy which is oiled with wheat oil can be cast with alloyed gold.\n\nAnd other fruit leaves, but with branch[es] that are not large and especially the leaves, once cast, can be soldered.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 474
});
index.addDoc({
  title: "Imitation diamonds set into the work",
  author: null,
  layout: "narrative",
  content: "- - - - - 138v - - - - - \n\nImitation diamonds set into the work\n\n \n Spread a fine layer of imprinting black wax on the inside of the frame then coat it inside with wheat oil, then dust it with lamp smoke because this color should not be lustrous for fake stones. Having done this, set your stone with a piece of wax then, with a steel point, or a small finishing hammer, join the edge of the frame with the stone, so that light cannot get in but be careful not to hit the stone, which would break.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 475
});
index.addDoc({
  title: "Casting with lead and tin",
  author: null,
  layout: "narrative",
  content: "- - - - - 139r - - - - - \n\nCasting with lead and tin\n\n \n  The way I have done it  for lizards and serpents is with two ℥ of pure tin for one lb. of unrefined lead that is impure.The mold is made out of the aforementioned sand, common for all metals, when it is reheated, leave it to cool until you can put your finger in it without causing a breach in the gate of the cast. As for the lead, it is melted in a crucible with a bellows’ fire until both the crucible and the lead are red. When it gets to that state, cleanse it anew with charcoal or with a specially made scraper or with the pufts of the little bellows. This done, leave it to rest in it red state and you can even reheat it, then if you want, throw in a bit of resin to burn away the filth. However, some think it best not to put any in because it leaves filth. But when they are ready to cast, they cannot forget to also thrown in a bean—size quantity of bismuth for each pound of lead. And it must be as red as the melted metal when it enters the mold. If the mold is large, it is much better to put in in a press so that they join well and so that the lead does not come out of the mold. However, should this happen, and that for the first, second or third time your mold does not fill up, cast heartily because for as long as your metal is red it will mix and join with the other one and will come out very neatly like the main one. The same thing can be said for pure tin used for thin things. And that way for doing pure tin is one ℥ of new lead for one lb. of the former. Large molds must be put in a press held tightly between two layers of copper, and then bury the whole thing in sand, which is better than ashes, because being heavy, it will seal better. Otherwise large molds are prone to open because the metal is heavy. Some make square molds\n- - - - - 139v - - - - - \nare made of earth or blades of copper, or iron, or wood covered with white iron, in order to bury more easily these aforementioned molds between the thin sheets of copper, estric or one of iron.\n\n\n  at left top margin of folio 139v\n\n  When the metal is thick, you do not need to cast as hot as when it is thin.\n\n\n\n  at top margin of folio 139v\n\n  When you melt this often, it becomes sour and fragile because it has to be cast very hot and it makes it half—calicanated. Use new stuff.\n\n\n\n  at left top margin of folio 139v\n\n  +\n\n\n\n  at left top margin of folio 139v\n\n  Note that If you want to cast with cuttlefish bone, they cannot be too warm because that would burn the cuttefish. For this effect, try paper. It it becomes brown, it is enough, and it is good for casting, but if it blackens the paper, then it is too hot.\n\n\n\n  at left bottom margin of folio 139v\n\n  If you want to cast paper with writing on it, make a mixture with half lead and half tin. As soon as it is melted, throw it between two pieces of cardboard on a flat place that is level. And with a point or gold or hard wood, engrave on the left the writing that you want. And having poured the lead onto the cardboard, press onto it the other piece of cardboard.\n\n\n",
  activities: ["casting","casting animals"],
  purposes: ["making"],
  id: 476
});
index.addDoc({
  title: "Casting wax to mold an animal that one has not got",
  author: null,
  layout: "narrative",
  content: "- - - - - 139v - - - - - \nAnnotations:\nBlack Sulfured Wax, fol. 139v (Kang and Lores-Chavez)\n \n\nCasting wax to mold an animal that one has not got\n\n  \n Take some white wax which is much more appropriate for this kind of work than anything else, because it is much firmer and does not leave as much filth, as much as you need to cast the animal that you propose, and no more. And [take] a half quantity of ground coal and neatly sieved through a cloth or coal sleeve, using it to give some color to your wax, that would otherwise be transparent and you will not be able to see your lines as clearly. Put your wax on the coal fire to melt. And when it is well—melted and well—liquified, have, for a full eared—porringer of melted wax, as much sulphur as a large walnut. Pulverize it. Melt it over a slow fire and when it is melted, do not leave it on the fire because it will become too hard. But take it off and keep stirring it with a little stick and when it has finished bubbling and is as liquified as water, cast it into the wax that you will have previously removed from the fire. And mix and stir both of the them so that they join together. After stir in little by little while continuously mixing, the charcoal that has been repeatedly ground, and in this way it will be very well incorporated. This is how you will know that your wax has gone beyond its ideal heating point, it will release no more smoke, it will start to have lines appearing on the side and not in the middle, and those lines will be close to each other. If you cast too hot, you will not be able to separate your wax from your mold and it would stick to the cast. When it is at the right state, stir it with a little stick so that the pulverized charcoal is well mixed in and has not fallen to the bottom of the mixture. And in this way, throw it in your mold bit by bit and not in one go, because wax is not runny\n\n\n  at left top margin of folio 139v\n\n  This black sulphured wax is for fashioning round figures that do not come out of the mold. And they need to be burned in the moule au noyau rather than be opened like the ones that have something jutting out or an intertwining of legs and arms. And this wax, thanks to the sulphur, will melt with little heat and leave without leaving any filth. If by some misfortune the crushed charcoal remains in ashes, when you open the mold and blow on it, it will come clean.\n\n\n\n  at left bottom margin of folio 139v\n\n  To make wax serpents or other things to affix to candles, it is necessary to cast them with esbaucher wax of all colors.\n\n- - - - - 140r - - - - - \nnot like other things. And for this one, you can cast two or three times until your mold is full. Now, concerning this mold of pulverized white plaster &amp; reheated in the manner of the sand from the preceding recipes, you should have made it long ago because it is used many times. But, before using it, soak it for a good hour in cold water, &amp; at a minimum, at least as long in hot water that at first is so hot that you can’t hold your finger in it. And note that it absorbs no more, but that it appears very wet overall without water seeping into it. In removing it closed from the hot water, cast your wax in such a state of heat as has been described. And neither the first nor the second casting will readily come out well, hardly, until the mold is soaked. Let it cool down before opening it so that the cast thing not break. You will know that the casting is good when the wax coming back out of the mold is thin and even. Remember to make several castings along the whole length of the mold so that in this way the wax runs better. Make the first\n&gt; Figure\n&gt; \ncasting twice as large as other molds. And if, in the first casting, your work fills with bubbles and in so doing does not come out neatly, it’s all the same, because you have to face the fact that the three or four first do not readily come out well. Firstly, you will know whether there are a few barbs that keep it from stripping well. And you will remove them if, on their own, they do not remove themselves in the two or three first castings. And the more that you cast, the more you will do it neatly. And your mold will serve you more than one hundred times if it Is well governed. But it is good to soak it one night or one day before casting so that it be well soaked. The same must be done for fruits made from sugar. This wax is very soft &amp; friendly &amp; pliant, like copper. And if it is hard [this is] because of sulfur, which makes it melt more easily than than other [wax], so much that you can see evidence on a hot slate. And the sulfur that you put inside will be found the second time that you melt it, [as] cracks on the bottom. Having in this way passed through wax, it will not catch fire at all when put to a candle. And in this case, I believe that it will cast quite the medal [illegible]. One uses the same wax in place of varnish to [illegible].\n\n\n  at left middle margin of folio 140r\n\n  When your animal is cast, cut away the froth &amp; superfluous things with a hot pen knife. And if you want, plait and wrap it around some stick or candle, put it in some hot water to soften and hold it in turning it around.\n\n\n\n  at left middle margin of folio 140r\n\n  Lower the protrusions of the castings so that they be even &amp; that the wax has more silver so that it can run all in one go without turning through the windings of the snake.\n\n- - - - - 140v - - - - - \nto engrave on silver &amp; copper with aqua fortis. With this [wax] too, one fills the cavity of a relief, &amp; then casts in this cavity, with moistened sand, which immediately takes the relief very neatly. And then you can cast its cavity on it in copper, gold, and silver, and make really singular seals.\n\n\n  at left top margin of folio 140v\n\n  Seals\n\n\n",
  activities: ["casting","wax casting"],
  purposes: ["making"],
  id: 477
});
index.addDoc({
  title: "To cast in sulfur",
  author: null,
  layout: "narrative",
  content: "- - - - - 140v - - - - - \nAnnotations:\nSulfur and Additives\n \n\nTo cast in sulfur\n\n  \n To cast neatly in sulfur, arrange the pith of bread under the brazier, as you know. Mold whatever you want into it &amp; let it dry &amp; you will have very neat work.\n\n\n  at left top margin of folio 140v\n\n  Try sulfur passed through melted wax, because it will no longer ignite &amp; and make eyelets.\n\n\n",
  activities: ["casting","casting with sulfur"],
  purposes: ["making"],
  id: 478
});
index.addDoc({
  title: "Molding and shrinking a large shape",
  author: null,
  layout: "narrative",
  content: "- - - - - 140v - - - - - \n\nMolding and shrinking a large shape\n\n \n Mold it with the pith of bread just out of the oven, or like that aforementioned, &amp; in drying out it will shrink &amp; consequently so will the medal that you will cast. By these means — lengthening out or enlarging the imprinted bread — you can vary the shape &amp; from one face make several different ones. The bread straight from the oven is best. And the one which has been heated twice contracts more. You can cast sulfur without letting the imprint on the bread dry, if you want to cast it as large as it is. But, if you want to let it shrink, let it dry to a greater or lesser extent.\n\n",
  activities: ["handling large shapes"],
  purposes: ["making"],
  id: 479
});
index.addDoc({
  title: "Casting a crayfish",
  author: null,
  layout: "narrative",
  content: "- - - - - 141r - - - - - \n\nCasting a crayfish\n\n  \n The crayfish is one of the most fantastical to cast, but also provides an example for casting other difficult things. You can distinguish males and female by the eggs that the females carry, and by the four little white back legs that males have in their tails after behind main eight legs. It is good to dry them out a bit so that the bumps come out more hard and beautiful, because none of what is made of shell shrinks. It is true that should you dry the little inside legs for too long, they become diminished and have no body. If they are too dry, the flesh separates from the scales. Be sure then to maintain the mean. They have certain hairs between the legs and at the end of the tail. And because all hair is difficult to cast, because it gets mixed up in the sand and does not release, you can burn it by putting a hot iron on the crayfish so that it the hair cannot be seen. As for animals that have hair or feathers, you must grease the hair with wheat oil, which is very dry and which will make the hair lay flat and straight. In this way, you will have form of your animal and you will have the hair. Should it the hair be wavy, it can be repaired. If your crayfish has eggs, which are delicate, and which will be difficult to take out of the mold without breaking, you would do better to make the first cast with the crayfish on its belly and eggs. In this way, you will open the mold with it the crayfish on its back, which will be hard and easy to manipulate. And the belly and the eggs will remain in the mold. And rather than opening your mold for the second time, you will have to burn it with them in it. This way, it will open easily, and what has been burned will come away cleanly. In this way, the second casting, which is done on the first one that has successfully taken hold, separates easily from the first, after having been refired. This is a singular secret for similar moldings.\n\n\n  at left top margin of folio 141r\n\n  The casting is made by the very thin tail.\n\n\n\n  at top margin of folio 141r\n\n  If some little thing is missing, you can reattach it or else fill it with goldsmith’s cement.\n\n\n\n  at left top margin of folio 141r\n\n  Do not forget to rub with spirits before you mold.\n\n\n\n  at left top margin of folio 141r\n\n  Stag beetles, crayfish and crabs are molded in the same way.\n\n\n\n  at left middle margin of folio 141r\n\n  If your crayfish has no eggs, mold the back on top and the belly on the bottom. You can give it some.\n\n\n\n  at left middle margin of folio 141r\n\n  It the crayfish can be molded hollow for the body, but not for the legs. And for a good result, take note that the crayfish is rather fantastical to mold hollow, this ought to be reserved for turtles.\n\n\n\n  at left bottom margin of folio 141r\n\n  When you open your mold, you will find the crayfish has white bones, but they will not be powder. And without opening it, the mercury will not have affected the process.\n\n\n\n  at bottom margin of folio 141r\n\n  Apply very light oil colors.\n\n\n\n  at bottom margin of folio 141r\n\n  To paint it, boil it with wine and a bit of salt so that they become very red and use this as a model. Paint the back with vermillion mixed with laquer, and the sides and the underside of the belly and the legs with vermillion and yellow ochre and white.\n\n- - - - - 141v - - - - - \nLet your crayfish dry a little in the sun, by itself. If it has spawns, they will shrink while drying, and be all the more beautiful for it. Make your paste out of yellow potter’s earth, just like for the other representations. Lay your crayfish on it, the back side down, and the other parts which are more tricky to mold —— legs, belly, eggs — side up. Drive in the back side in the clay paste up to the legs, which is about the half part of the crayfish’s body. Fix the body with a pointy iron thread in the middle and, if you feel you need it, you can also drive another one at the edge of the tail. And in order that the big legs be lower than the head, which is lower because it is linked from below, add a little clay under the head. Then add a bit of clay under the jacket in order to raise it. Hide the feelers under the clay and under the crusher claws, then arrange it as you like. Stretch out the walking legs to the joints, and for the first cast, bend the second part of the walking legs. Fix the joints of the legs with wax and a warm wire so they will not move. If you want to mould something fancier, fix the end of one walking legs on the body or on a crusher claw , using the same wax. If the female has spawns, bent half the tail over the spawns, and keep the shape by fixing the tail with a wire. Be sure that you will be able to clean this part. Finally rub your crayfish with spirits, and cast your sand. Once the sand is hardened, uncover the back side, the head, the eyes, and the small legs close to the crusher claws, and the walking legs all along. One must uncover these parts as much as possible. Then bend and cover the spawns again. The other animals\n\n\n  at left top margin of folio 141v\n\n  Fix what may raise the two padded edges on each side of the mouth with melted wax under them.\n\n\n\n  Figure\nat left middle margin of folio 141v\n\n\n\n\n  at left middle margin of folio 141v\n\n  Uncover as many parts as possible, but be sure the channels you make are well stripped.\n\n\n\n  at left middle margin of folio 141v\n\n  Incline your mould to the thickest side of the animal.\n\n\n\n  at left bottom margin of folio 141v\n\n  To paint the crayfish, one paints the middle of the back with vermilion, mixed with a bit of lacquer. The sides, the belly, and below the legs with a mixture made of vermilion, ceruse, and a bit of yellow ochre. As with all things, always keep the real one in front of you in order to copy it as realistically as possible.\n\n\n\n  at left bottom margin of folio 141v\n\n  Lay the feelers on the crusher claws, or solder this part with a wire made of bleached brass.\n\n\n\n  at bottom margin of folio 141v\n\n  When you arrange the legs, be sure that they do not get over the belly, and that they are well set against the belly otherwise [illegible]\n\n- - - - - 142r - - - - - \nare not so uncovered. But since crayfish are troublesome to burn &amp; clean, you have to uncover them as much as you can, even the little legs just until the tips, because they are troublesome &amp; if, in order to not alter them, you have to take them out, you could break something of the mold. Having uncovered it with the point of a knife, like an engraving stick or another fitting thing, clean off the sand at the joints &amp; elsewhere with your little brush really very scrupulously. And if something is loosed from the crayfish, attach it with wax, as is discussed. And also attach the horns this way. And also do the casting the length of the extremes of the little legs with wax. And refill the holes that have been made with the needles of iron wire with it. And everything being quite clean &amp; having uncovered more than half of it, oil your mold after having soaked the back side in water, &amp; do not forget to oil all the fine parts that are between the legs and the little beaks; then rub the crayfish with spirits. And do your second casting after having made the first mold even, so that the cramp—irons join better. Your mold must be larger on the side with the impression than on the back. Do not open your mold after the second casting, so that it not become clayed &amp; reheated &amp; that which is inside not be burned. Do not forget to mix crocum throughout your sand when you mold the crayfish, because you must really reheat it &amp; the crocum withstands this marvelously. To mold a crab &amp; to mold a crayfish are exactly the same. When you have uncovered your crayfish on one side do not delay at all before doing the second casting, because crayfish dry out. It is not enough to uncover the crayfish such that you see the whole half the half you uncover, but take heed that your mold, even when you are uncovering, be good and stripped, because if the crayfish gets well burnt, you will not be able to open your mold without breaking it.\n\n\n  at top margin of folio 142r\n\n  Restore it with a pen knife, little chisels, or engraving sticks.\n\n\n\n  at left top margin of folio 142r\n\n  As you see here, but a wax casting all around &amp; at the end of the tail, where you will do the principal casting, two or three more.\n\n\n\n  Figure\nat left top margin of folio 142r\n\n\n\n\n  at left middle margin of folio 142r\n\n  Make the casting with candle wax shaped in a thread like a large packthread, the whole length from the end of the claws to the extremity of the tail. If there is also some claw end or other part that is extended past the rank of the others or is raised up higher or turned up all alone, make a wax casting for it from its end just barely not joined to the body or to one of the large claws or to some other place where lots of metal will be wedged in.\n\n\n\n  at left bottom margin of folio 142r\n\n  Having uncovered it, attach &amp; secure the two little bearded horns of the crayfish, and anything else that is not secured, with wax.\n\n\n",
  activities: ["casting","casting animals"],
  purposes: ["making"],
  id: 480
});
index.addDoc({
  title: "Molding grasshoppers and things too thin",
  author: null,
  layout: "narrative",
  content: "- - - - - 142v - - - - - \nAnnotations:\nToo Thin Things\n \n\nMolding grasshoppers and things too thin\n\n  \n If you have to mold a piece of written—on paper that is too thin, after you have done the first cast and it has set, give a little thickness to the reverse of your paper with melted butter, which is the most appropriate means there is, &amp; for strengthening the wings of either a butterfly or a grasshopper, or any delicate part of an animal to which you need to give thickness. But take heed to apply this melted butter under the wing or in whichever place it will not be seen. For giving thickness to a pansy or other flowers, butter is not good, but rather wheat oil, which is soon dry &amp; holds firm. Wax would not be appropriate here for it is too hot once melted, and it makes the thing to which it is applied contract. But butter is amiable and handleable.\n\n\n  at left top margin of folio 142v\n\n  If you write on paper or on common carton and your letters are made with gum, the moisture of the clay plate (?) or the wet (?) sand for a noyau will moisten your letters and undo them. Write therefore with cinnabar mixed with oil, on oiled &amp; stamped (?) paper.\n\n\n\n  at left middle margin of folio 142v\n\n  + Reheat your molds with charcoal firstly lit in the forge, so that the fire is not too hot and does not break the molds. And do not fire as strongly where the mold is thin as where it is thick.\n\n\n",
  activities: ["casting","casting animals","casting things too thin"],
  purposes: ["making"],
  id: 481
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 142v - - - - - \n\nMolds\n\n \nMake some notches in them the molds that enter more into the inside of the mold than the outside because in this way, they have more strength. Take care to keep from reheating them suddenly in a burning hot fire, because this will make them break.\n\n\n  at right middle margin of folio 142v\n\n  Do not keep them molds in a humid place, nor an enclosed place if they are not well dry, because they will mold. The same with dried animals.\n\n\n\n  at left middle margin of folio 142v\n\n  It is not at all necessary to reheat the molds two times when the animal can pull away without burning, as do toads, which can very well be molded hollow like all thick animals. However, it is always good to redden the mold once.\n\n\n",
  activities: ["maintenance"],
  purposes: ["making"],
  id: 482
});
index.addDoc({
  title: "Lute for luting your molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 142v - - - - - \n\nLute for luting your molds\n\n \nI have not found a lute that is made more quickly than this one, nor a better one. Take some of the lean earth that artillery founders and bell founders use to make their trusseaulx and molds, which is lean and sandy. Soak it moderately like a very thick mortar. Mix into it about one half of horse manure and then beat it well. Afterwards mix in one third of cloth waste or cloth shavings and beat it again quite strongly. You can reheat your mold as soon as the lute is ready.\n\n",
  activities: ["luting"],
  purposes: ["making"],
  id: 483
});
index.addDoc({
  title: "Moulding turtles and tortoises",
  author: null,
  layout: "narrative",
  content: "- - - - - 143r - - - - - \n\nMoulding turtles and tortoises\n\n \n The turtle the one that lives in water is more beautiful to mold because it has prettier scales and straight legs. And the tortoises have crooked ones. They eat a lot. To get ready to kill them, open their mouth and pass a long penknife through all the intestines. And then make it swallow some vinegar mixed with spirits or urine, as one does for snakes. It is necessary to mould them in several pieces, and even the back sometimes because the sides of certain ones are narrower than others and in this instance do not release from the cast. To make them die, you must not boil them, because they come apart, even the shell, in the hot water. They the shells come out better when hollowed because their great thickness spoils the mold. Turtles are more lively. The tortoises are leaner, slower, and more sleepy. If you scratch turtles on their shells, no matter how sleepy they are, they move; tortoises do not.\n\n\n  at left top margin of folio 143r\n\n  They turtles/tortoises die rather quickly in vinegar mixed with a little spirits or urine, as with all other animals.\n\n\n\n  at left top margin of folio 143r\n\n  They turtles/tortoises keep their eyes closed in the winter, and appear as dead, having been numbed by the cold. They hide in the earth or under balls of grain or warm manure, and survive only on the dampness of the earth.\n\n\n\n  at left middle margin of folio 143r\n\n  You must not mold them too soon after they die because they are still stiff. But on the day after, you will be able to manipulate them and bend their legs as you wish.\n\n\n",
  activities: ["casting animals"],
  purposes: ["making"],
  id: 484
});
index.addDoc({
  title: "Moulders from Foix",
  author: null,
  layout: "narrative",
  content: "- - - - - p143r - - - - - \n\nMoulders from Foix\n\n \n Those who mould from across the way make their sand from crocum ferri and calcinated slate, but slate always retains its bumpiness and swells because it is a fatty. In the noyau, it is not good; in sand, it can be put to use. They the moulders from Foix sieve their sand, grind it on porphyry, and soak it in water, and they keep the finest bits which are on the top, then they reheat it.\n\n",
  activities: ["making sand"],
  purposes: ["observation"],
  id: 485
});
index.addDoc({
  title: "Toad",
  author: null,
  layout: "narrative",
  content: "- - - - - 143r - - - - - \n\nToad\n\n \n Having been molded, you can take it out it without burning it, because it releases easilyfrom the mold. Choose the biggest and the lumpiest toads. Because they contain a lot of metal, it is best to mold them hollow, since they turn out better. You could make your cast in one great piece, but it would be troublesome to cut. It is best to do it in three or 4 parts, which will be thicker close to the animal, and include the most amount of edge that is close to the cast/mold. Make as well some casting conduits all the way from the end of the cast,\n\n\n  Figure\nat left bottom margin of folio 143r\n\n\n\n\n  at left bottom margin of folio 143r\n\n  Let the mold cool rather than opening it, even for thick things.\n\n- - - - - 143v - - - - - \nfrom one leg to another, so that the spread out limbs are in connection with one another due to the aforesaid casting conduits, which you will start in the waxless round parts that you have put at the edge of the legs to attract the metal. In this way, because you are casting in wax, there is no danger chipping any part of the molded animal. It’s quicker to make the wax casting conduits thus, because in this way you can cast the second mold after the first, rather than wait to do them the conduits after the mold has been recooked, because then, if possible, you will need to have everything ready. You need to heat well, and even redden the molds where there are wax conduits so that they melt and leave nothing inside.\n\n",
  activities: ["casting animals"],
  purposes: ["making"],
  id: 486
});
index.addDoc({
  title: "Openwork carcanets",
  author: null,
  layout: "narrative",
  content: "- - - - - 143v - - - - - \n\nOpenwork carcanets\n\n \n You can mold them “en noyau” like crayfish, first with one side being made higher with clay, which is hollow, and then you open it from the other side and make the second casting. You can just as well cast them “en chassis”, provided that they release well. If they do not, you can do a rough cast in wax, or you can fill up the cavities which do not release well with wax or clay.\n\n",
  activities: ["embellishing"],
  purposes: ["making"],
  id: 487
});
index.addDoc({
  title: "Iron filings",
  author: null,
  layout: "narrative",
  content: "- - - - - 143v - - - - - \n\nIron filings\n\n \n Because usually filings are mixed with impurities, it is good to heat them over fire to burn the filth and then wash them in clear water. In this way, the dirt will rise to the top of the water, which you will throw out, and the good filings will go at the bottom.\n\n",
  activities: ["maintenance"],
  purposes: ["making"],
  id: 488
});
index.addDoc({
  title: "Carnations",
  author: null,
  layout: "narrative",
  content: "- - - - - 143v - - - - - \n\nCarnations\n\n \n Because those that you usually cast are generally quite big, they are heavy. And so for these, you make them with silver leaf or slivers.\n\n",
  activities: ["casting plants"],
  purposes: ["making"],
  id: 489
});
index.addDoc({
  title: "Ashes in the moulds",
  author: null,
  layout: "narrative",
  content: "- - - - - 157v - - - - - \n\n\nAshes in the moulds\n\nYou must let the mold cool down rather than blow into it to try to get the ashes out. Because when the mold is hot, the ashes stick to it, and when it cold, they separate from it more easily, and will exit by blowing with le vent a vapeur.\n\n",
  activities: ["cleaning mold"],
  purposes: ["advice"],
  id: 490
});
index.addDoc({
  title: "Po{ur} f{air}e h{…} vin f{…}rs [?]",
  author: null,
  layout: "narrative",
  content: "- - - - - 157v - - - - - \n\nPo{ur} f{air}e h{…} vin f{…}rs [?]\n\nPrenez un chausson du pied droid t qui ait este porte et le faictes tremper en eau et de leau q{u}i en sortira la f{air}e boyre au mesme ou autre et v{er}rez merveilles\n\n",
  activities: [],
  purposes: [],
  id: 491
});
index.addDoc({
  title: "Mercury in molds, for cleaning",
  author: null,
  layout: "narrative",
  content: "- - - - - 158r - - - - - \n\n\nMercury in molds, for cleaning\n\nTake heed that your mold be quite cold when you blow in order to get the ashes out. And afterwards put in ☿ in order to finish the cleaning. Because if the mold is hot, the ☿ will go inside; seek out the conduits in escaping, will leave its own odor, which will aggravate the tin or other metal that you will cast, such that it will break in touching the mold at all. The heat of the mold also retains some little grains of ☿ that will make lumps; stick to the sides of the molded leaves and attach to them; make them frangible. The ☿ cleans ashes well. Likewise flat things where there are not delicate traces that it could break with its weight. And therefore, if you can cast neatly without putting it in, don’t use it at all. But if you have need of it, mix your crocum sand so that it withstands fire well. And after having put in the ☿, evacuate it, bouncing the end of the mold from below while moving it. Afterwards reheat your mold gently so that the ☿ is gone from everywhere. In this way I cast a branch of periwinkle leaves; flowers very neatly. Having put a branch of melted [illeg] in the flower, on the back of the flower [illeg].\n\n\n  at left bottom margin of folio 158r\n\n  Reheat your mold until it is good and red before casting, so that the ☿ evaporates well.\n\n\n",
  activities: ["cleaning mold"],
  purposes: ["making","advice"],
  id: 492
});
index.addDoc({
  title: "Colors for green leafs",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \nAnnotations:\nColor for Green\n \n\n\nColors for green leafs\n\nOne usually paints them with oil colors, because distemper colors do not stay on. For marigold flowers, lightly ground minium for some of them; for more yellowish ones, mix in a bit of massicot. For green, the vert—de—gris is dark and too somber. If it is a yellowish—green, you can mix with the vert—de—gris a bit of yellow ochre and scudegrum. If the green is dark, mix in some coals made from peach pits, which makes a greenish—black, in the same way than the bone of an ox foot bone makes a bluish—black. And in such a manner, by judgement and discretion, put the color on the natural flower or leaf to see whether it is similar to the original. But paint it on very lightly so as not to cover the features of the work.\n\n",
  activities: ["making"],
  purposes: [],
  id: 493
});
index.addDoc({
  title: "Large molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \n\n\nLarge molds\n\nBecause of the heaviness of the metal, it is necessary to put them in a press so that they do not open.\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 494
});
index.addDoc({
  title: "Candle smoke",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \n\n\nCandle smoke\n\nIt allows the piece to be taken out more easily, and even if it is slightly thick, it does not stick because it has no substance. I have perfumed my core molds this way for tin and lead, and I have casted in a cold mold, but drying it well beforehand, and the piece came out quite cleanly. It is true that lead mixed with half the quantity of tin, because the medal was very thick, was very hot.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 495
});
index.addDoc({
  title: "casts",
  author: null,
  layout: "narrative",
  content: "- - - - - 158v - - - - - \n\n\ncasts\n\nIf the medal is very thick, do not pour a cast that is as thick; the cast just needs to be half as thick as the medal. But if it is thin, make a cast that is of the same thickness. Do not forget to make vents in the cast or the whole matter will fill with bubbles.\n\n\n  at left bottom margin of folio 158v\n\n  Never forget to oil the cast with wax when you cast herbs or flowers, otherwise it will break and cannot be taken out.\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 496
});
index.addDoc({
  title: "Portraits in Wax",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n\n\nPortraits in Wax\n\nIf you do not mix your wax with any color dye, and if you paint some colors on the wax, these colors would fade if you cast it en noyau. But the representation is not damaged, rub it very lightly with spirits diluted with hot water. If your representations are varnished, repeat the molding process two or three times in order to remove this varnish which sticks to the mold. When the varnish is removed, your mold is very clean. If your representation is set on wood, it is necessary to pour very hot melted wax on the wood, otherwise the mold sticks to the wood. It is much better to mix your white wax with white lead than ceruse, because white lead is whiter and more firm.\n\n",
  activities: ["using wax"],
  purposes: ["making"],
  id: 497
});
index.addDoc({
  title: "Chasing tool",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n\n\nChasing tool\n\nIf a chasing tool has passed through any part of the representation, it is necessary to rework the whole thing and follow it all again. Otherwise it would look like an additional piece.\n\n",
  activities: ["representation"],
  purposes: ["advice"],
  id: 498
});
index.addDoc({
  title: "Fish glue",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n\n\nFish glue\n\nBeat it very finely and thinly on a well—cleaned anvil, then dilute your glue with spirits, put the mixture on hot ashes, and on a low fire, it will melt very soon. If the glue is not strong and thick enough, add spirits in greater quantity. Do not melt it in a fatty pot, but in a new pot if possible. It melts on fire and dries very quickly on fire. When your glue sets on the work, heat it away from fire, it will stick very strongly. One reworks flowers and delicate things made from silver, gold, tin and other metal with this glue which will not spoil your work.\n\n",
  activities: ["fish glue"],
  purposes: ["making","advice"],
  id: 499
});
index.addDoc({
  title: "Tin and lead",
  author: null,
  layout: "narrative",
  content: "- - - - - 159r - - - - - \n\n\nTin and lead\n\nThey must be beaten out very finely and tin will not get brittle or break, lead is a bit fatter. But that is why it is necessary to reheat it under hot ashes, and to beat several leaves together.\n\n",
  activities: ["molding"],
  purposes: ["making"],
  id: 500
});
index.addDoc({
  title: "Cleaning files",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n\n\nCleaning files\n\nSometimes they get fat from the grease of lead, which is naturally fat, or also filings corrode them. And you will be able to clean them with hot charcoal or a wire brush made from brass.\n\n",
  activities: ["cleaning"],
  purposes: ["advice"],
  id: 501
});
index.addDoc({
  title: "Carnation",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n\n\nCarnation\n\nMold a carnation like a rose, marigold, and all other flowers as discussed, that is to say cast the flowers in one mold, and the leaves in two parts in order to solder them onto the flower, this is the better way. But you could mold the flower and the leaves together in one single closed mold. I tried one which came out well from the mold. But the sand must be very thin, and you must blow very strongly.\n\n\n  Figure\nat left middle margin of folio 159v\n\n\n\n",
  activities: ["molding"],
  purposes: ["making","advice"],
  id: 502
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n\n\nMolds\n\nTry to make one side as thick as the other, that way the two parts will be equally reheated. You can open this kind of mold in order to clean it, when you mold some animals, like crayfish, which burn. When your mold is reheated, do not wait too long before casting again, because it gets damp and loses its strength.\n\n",
  activities: ["molding"],
  purposes: ["making"],
  id: 503
});
index.addDoc({
  title: "Unmixed plaster",
  author: null,
  layout: "narrative",
  content: "- - - - - 159v - - - - - \n\n\nUnmixed plaster\n\nIf you reheat plaster as a stone it would crumble into water, but if you grind it before reheating it, it will not crumble into water, on the contrary it will harden in water, if it is good plaster like the one from Paris or from Spain which is as hard as a stone, and which is found through poor and dry earths, and which looks like white salt. German people use this plaster to make statues for their fountains, even if the statues are varnished they will not be damaged with water. On the contrary harden this plaster with water. When this sand is unmixed it sets much sooner. Oil very lightly your shapes of metal or of other materials otherwise you will not be able to strip plaster from the mold. And dip your mold into hot water in order to open it, if it does not open in hot water, it could open into boiling water.\n",
  activities: ["plaster making"],
  purposes: ["advice"],
  id: 504
});
index.addDoc({
  title: "Presses for large moulds",
  author: null,
  layout: "narrative",
  content: "- - - - - 160r - - - - - \n\n\nPresses for large moulds\n\nfigure identifier=”fig_p160r_1” url=”https://drive.google.com/open?id=0B9—oNrvWdlO5ZDNJT25PWjlUbGM”/&gt; \n&gt; Figure\n&gt; at right top margin of folio 160r\n&gt; \n\nIt is made of two sheets of iron, fasten with four small iron pillars, in such a way that the upper sheet is able to move and run freely along the pillars, while the lower one is fixed. A St André cross, made of iron, stops at the end of the pillars; there is a screw in the middle of the cross, which squeezes the sheets against the molds placed between them.\nblock&gt; \nFor small molds, we make a frame; having put the mold between two metal sheets, we squeeze it in the frame with for small moulds, put the mould between two iron sheets, and squeeze it with wedges.\n\nBig wooden presses, with a screw, apart from being heavy to move to the furnace for casting, make it difficult to see when they squeeze too much, and they often break the molds.\n\nThe screw is fixed to these nuts which are nailed down the upper plate, this way it raises and presses the mould.\n\n",
  activities: ["making large presses"],
  purposes: ["making","advice"],
  id: 505
});
index.addDoc({
  title: "Moulding a foot or a hand",
  author: null,
  layout: "narrative",
  content: "- - - - - 160v - - - - - \n\n\nMoulding a foot or a hand\n\nMix resin to the wax. Once well blended, soften the mixture in hot water or urine. Then press [the foot or the hand] in the mixture in order to get an impress, then pour plaster; the cast will which will be clean and come off easily.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 506
});
index.addDoc({
  title: "Fine work made of gold or silver",
  author: null,
  layout: "narrative",
  content: "- - - - - p160v - - - - - \n\n\nFine work made of gold or silver\n\nYou can mold flies by hand, without casting; the wings and the feet can be soldered, which you could not do with fine works of lead or tin, because they would melt. You can enamel the work made of gold.\n\n",
  activities: ["molding"],
  purposes: ["advice"],
  id: 507
});
index.addDoc({
  title: "Catching crayfishes",
  author: null,
  layout: "narrative",
  content: "- - - - - p160v - - - - - \n\n\nCatching crayfishes\n\nOn the end of a stick, attach pieces of liver or lung, from beef or mutton. Then hang a basket to the stick with a little string. Put the basket into water where crayfishes eat; they will soon aggregate on the flesh. Pull very gently your stick out of the water; the crayfishes which will try to return to the water will fall into the basket.\n\n",
  activities: ["catching"],
  purposes: ["making"],
  id: 508
});
index.addDoc({
  title: "Catching passerines",
  author: null,
  layout: "narrative",
  content: "- - - - - p160v - - - - - \n\n\nCatching passerines\n\nIf they sleep in the farmyard, like they commonly do, close to the house, let the closest window open, and put a lighted candle close to the window. The candle itself must be hidden, only its glimmer must be seen through the room and through the window; all the passerines will then lock themselves into the room. But the night must be very dark, without any moonlight.\n\n",
  activities: ["catching"],
  purposes: ["advice"],
  id: 509
});
index.addDoc({
  title: "Catching birds",
  author: null,
  layout: "narrative",
  content: "- - - - - 160v - - - - - \n\n\nCatching birds\n\nDuring winter, when birds have molted, skin them and fill them with cloth and stuffing, or dry them well in an oven. Then arrange your birds on trees, have some [look like they are] singing, [look like they have assembled] and are numerous.\n\nthe oven must not be too hot. This [method] is good in the summer, because flies would set into the eyes and make works before they [birds] could dry. You can work on the birds more easily in the winter, because they dry by themselves.\n\n",
  activities: ["catching birds"],
  purposes: ["making","advice"],
  id: 510
});
index.addDoc({
  title: "Preparing sand for box molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 161r - - - - - \n\n\nPreparing sand for box molds\n\n\n  at left top margin of folio 161r\n\n  After your sand [which is made] of gip de lateribus and alumen jameni is moulded as a core, gather the left—over pieces of your mold, and break them up on a long table with a big metal block until they are very well crushed. And for an even better result, sieve them neatly. Place them in the oven pots of tile—makers, in a bread oven, [firing them] several times, when it is well heated so that they become very red. When cooled down, rebreak them if you need to and sieve them. After, put them in a vaisse, a semal or a vessel that is appropriate and clean. And then wet it with clear water. And crush it and mix it with a big stick until it is very well—moistened and rinsed, and the dirty parts rise to the surface of the water. Keep stirring in this way the dulled gip, that one prepares to gilt burnished gold over five or six days, until it is in no way lumpy. And each time your stir it, leave it to rest and cull the clear water that will be on the top by tipping the pot, or with a porringer, or with a sponge. And put in some new clean water and in this way wash and stir until it is refined and purged of all filth. Then leave to drain a little bit and to dry and make of it some balls, soaked in sal ammoniac. Having been thus dried, put them to be recooked in very high heat in a reverberatory furnace for a good amount of time, where they will become very red. Having been recooked in this way, crush them and try to mold something in a box mold, having moistened your crushed powder with water of sal ammoniac. And reheat and redden you box mold, and if your sand comes away, then you must crush it again and moisten it again with water of sal ammoniac. Remold it in two balls and recook it and redden it and continue this for as many times as necessary until it does not come away from the box mold when the box mold is reddened. The main thing is for it to be well recooked, because otherwise the sal ammoniac will not calcinate well and will make the sand coarse. And for this reason, you should not put in too much sal ammoniac.\n\n\n",
  activities: ["molding"],
  purposes: ["advice"],
  id: 511
});
index.addDoc({
  title: "Crocum ferri",
  author: null,
  layout: "narrative",
  content: "- - - - - 161v - - - - - \n\n\nCrocum ferri\n\nIt can be made quickly if you put very filings that are very neat and have been washed in an iron drum that is only two fingers high, and cover it, and redden in a reverberation furnace, having washed it in good vinegar for a whole day. And it will be very well burnt and clean, mixed and crushed on a marble slab. Having been well crushed and when well mixed, the vinegar will corrode it easily and will redden it quickly and bind it. Wet it with the strongest one you can find and burn it after. And after three or four wettings and burnings it will be ready. This one will be the color of columbine and is considered firmer for casting than the one that is redder and more beautiful in color, done with rusty filings and has more color in it. Some burn the filings many times on a shovel of red iron, watering each time with vinegar.\n\n",
  activities: ["colormaking"],
  purposes: ["making","advice"],
  id: 512
});
index.addDoc({
  title: "Aes ustum",
  author: null,
  layout: "narrative",
  content: "- - - - - 162r - - - - - \n\n\nAes ustum\n\nWhen it [Aes ustum] is finely ground it moulds very cleanly. It has a certain fatness that makes it bind better than filings, I believe that it may not be ill suited for casting.\n\n",
  activities: ["molding"],
  purposes: ["observation"],
  id: 513
});
index.addDoc({
  title: "Rotten wood",
  author: null,
  layout: "narrative",
  content: "- - - - - 162r - - - - - \n\n\nRotten wood\n\nWood that is white, being light as a sponge, if burnt in a close fire, may be used for casting lead in a box and molds very cleanly, but these things [such material] do not withstand [open?] fire.\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 514
});
index.addDoc({
  title: "Peach trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 162v - - - - - \n\n\nPeach trees\n\nBecause they cast and blossom from the outset, and so are caught by the frost. We expose their roots during winter so that the cold slows them down, and they blossom later, which benefits their flowers.\n\n",
  activities: ["agriculture"],
  purposes: ["advice"],
  id: 515
});
index.addDoc({
  title: "Olive trees",
  author: null,
  layout: "narrative",
  content: "- - - - - 162v - - - - - \n\n\nOlive trees\n\nIn Spain they expose their roots during winter and in spring they earth they up again.\n\n",
  activities: ["agriculture"],
  purposes: ["observation"],
  id: 516
});
index.addDoc({
  title: "Foot of bittern",
  author: null,
  layout: "narrative",
  content: "- - - - - 162v - - - - - \n\n\nFoot of bittern\n\nTo mold it it is better to extend its fingers and nails on something flat and let them dry this way for a few days, because in drying the scales will be rougher and the nerves and and tendons will be more apparent, and so the molded foot will be more artistic.\n\n",
  activities: ["molding"],
  purposes: ["observation"],
  id: 517
});
index.addDoc({
  title: "Molds of things which have not been pelted",
  author: null,
  layout: "narrative",
  content: "- - - - - 162v - - - - - \n\n\nMolds of things which have not been pelted\n\nAnimals who have not been pelted can only be molded in a double mold, which can only be opened after they have been refired and after the enclosed animal is completely burnt. Animals with bones or scales which are not reducible to powder thus remain in calcined pieces which will never removed from the cast, however much bellowing or whatever amount of quicksilver is put in, or by using a feather pipe while molding to make a gate. This is why you mold in two halves: so that once the mold is opened after having been refired, the thing you’ve burnt can be cleaned out. But I advise letting it cool so that in taking off the clamps (being hot) nothing cracks while it is still fragile. While it is hot the crust and cinders which it leaves and which stick to the mold can be more easily removed when it is cold. Also note that on the side of the lower mold when you reheat the animal, which in boiling leaves a crust, in this case, always mark on the mold where the back of the animal is so that in reheating it is to the top and above and will by this method stay cleaner.\n\n",
  activities: ["molding"],
  purposes: ["making","advice"],
  id: 518
});
index.addDoc({
  title: "Perfume-makers",
  author: null,
  layout: "narrative",
  content: "- - - - - 163r - - - - - \n\n\nPerfume—makers\n\nThey readily make their perfumes with half amber and half musk, and a little civet, because the scent of amber is stronger than the scent of musk.\n\nTo save using amber, perfume—makers readily add add a small quantity of musk to the white layers, in order to get a stronger scent. But to remove or hide the blackness of musk, they add a bit of starch from England, which is perfectly white.\n\nTo give off a scent of white amber, in the same way that the Portuguese do, take a chunk of amber that you have broken up into pieces. Having put in a small silver porringer a spoon of flower oil, should you not have some, linseed oil. That is to say, use the type of silver spoon one might use at the table. Pour into this your ambergris, then place it on a low fire, it will melt quickly if your amber is of good quality, and there will be no lumps. Having melted it all, put in a small bit of civet, and melt it all and blend it well together. Then take your gloves which you have cleaned and dried properly, and lightly dip the edge of your finger around the edge of the oil, with patience slowly spread the oil along the glove, and rub the glove between your hands and trace along the fingers and its stitches, one after the other. Leave it to dry. Then repeat the previous procedure until you have used up all of the amber.\n\n",
  activities: ["perfume making"],
  purposes: ["description","observation"],
  id: 519
});
index.addDoc({
  title: "Spirits",
  author: null,
  layout: "narrative",
  content: "- - - - - 163r - - - - - \n\n\nSpirits\n\nSpirits are excellent for making molds clean, in such a way that where you do not apply some, common sand will attack the figure. But it needs to be passed three times. And because it does not take well on oiled things, I believe it may be best to put some into the water with which you have moistened your sand.\n\n",
  activities: ["using spirits"],
  purposes: ["observation"],
  id: 520
});
index.addDoc({
  title: "Crayfish",
  author: null,
  layout: "narrative",
  content: "- - - - - 163v - - - - - \n\n\nCrayfish\n\nThe hairy little horns that the crayfish has under its snout tend to come out lumpy and unclear because, after they are burnt, it is difficult to remove and clean away their ash, which, staying in the mold, prevents the metal from running well. And for this reason, one makes a small gate of wax thread at the tips of them, in order both to hold them up and to blow away the cumbersome ashes from inside.\n\n\n  at left top margin of folio 163v\n\n  Do not spare any pins, placing them not only in the middle of the body, but also on the big legs, and two or three on the tail, according to the positioning that you want to give it.\n\n\n",
  activities: ["casting"],
  purposes: ["making","advice"],
  id: 521
});
index.addDoc({
  title: "Crocum",
  author: null,
  layout: "narrative",
  content: "- - - - - 163v - - - - - \n\n\nCrocum\n\nThat which has become rusty by itself, having been doused with water, salt, and either vinegar or urine, and then well—dried and reddened by heating, is deep red when crushed on porphyry and is of the color of bol de levant, almost like minium. But that which is doused with urine and dried acquires a deeper color and almost like crushed aes ustum or like vermillion. But the first one, finely crushed, acquires a bright red color like cinnabar when placed in spirits. And the one and the other, when prepared as said above, finely ground and made very hot, produce a red smoke like an acid vapor if, being thus hot and fine, one throws vinegar, urine or spirits on top. The urine makes a lot of color and the spirits as well.\n\n\n  Figure\n\n\n\n",
  activities: ["colormaking"],
  purposes: ["observation"],
  id: 522
});
index.addDoc({
  title: "Repairing",
  author: null,
  layout: "narrative",
  content: "- - - - - 163v - - - - - \n\n\nRepairing\n\nIt is much better to only lightly repair your work with a burin called an “onglet” or the one called “chaple” or with a small file. Above all, avoid touching your work, but touch only the burr or lumpy parts that will have occurred during the casting. While reworking, moisten and rub your work with a small bristle brush.\n\n",
  activities: ["repairing"],
  purposes: ["advice"],
  id: 523
});
index.addDoc({
  title: "Casting",
  author: null,
  layout: "narrative",
  content: "- - - - - 164r - - - - - \n\n\nCasting\n\nWhen you make a cast of delicate animals, like snakes, start by casting the belly side, or the under—tail, for this side has straighter lines which are easier to rework than the back side, which is more veined and is more marked.\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 524
});
index.addDoc({
  title: "Repairing burrs",
  author: null,
  layout: "narrative",
  content: "- - - - - 164r - - - - - \n\n\nRepairing burrs\n\nRemove burrs very carefully with the point of a chaple or a burin, then scrape the burrs with the side of a burin, or carefully with a small file, and rub with willow coals and small brushes. Continue, also, with the lines not interrupted by burrs.\n\n",
  activities: ["repair"],
  purposes: ["advice"],
  id: 525
});
index.addDoc({
  title: "Leaded silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 164r - - - - - \n\n\nLeaded silver\n\nA lot of silver is wasted because of the lead which is mixed with it, as occurs in cupellation, and makes it leap in small bits onto the edges of the crucible and onto the charcoal which covers it and is also gross. And by this means, it is good to melt silver coins, like reals and others, and make them into ingots prior to casting lizards or animals, for it comes out better. I cleanly molded a small, silver viper, like in the first recipe above. And at the end of the line of 4 reals (of 20 S of Spain), and one coin of 20 S from France.\n\n",
  activities: ["molding"],
  purposes: ["observation"],
  id: 526
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 164v - - - - - \n\n\nMolds\n\nFor molds wherein something must be burned (away), and do not open before being reheated: do not cast before refiring/reheating. For large molds that produce large and wide casts, it is necessary to score it with strong notches so that the pitch of the metal does not run as forcefully. These will not make many burrs if they are pressed. Prior to doing so, place between the moldand the press pieces of thick felt for mittens, which will fill the cavities and protect the mold from cracking. The clamps should be placed prior to heating or drying.\n\n\n  at top left margin of folio 164v\n\n  When the ground from which you are making your earthen base to lay out your animal is too soft, the pins you place come out easily when you cast the sand and so the mold is spoilt and the design is defeated. Therefore when you know that your slab is too tender and soft, spread some hot cinders over it and blow with the bellows.\n\n\n",
  activities: ["molding"],
  purposes: ["making","advice"],
  id: 527
});
index.addDoc({
  title: "Sable",
  author: null,
  layout: "narrative",
  content: "- - - - - 164v - - - - - \n\n\nSable\n\nIf you don’t add enough alum de plume or crocus your mold will easily crack when heated. But if your sand is mixed as it ought to be, the mold will sustain itself. You’ll know it’s of good quality when, while still hot after casting, it immoderately soaks up the water when dipped and breaks easily, because the alum and the crocus render it spongy. To the contrary, bad sand, which is composed of plaster and brick and is not well mixed with alum, breaks easily in fire and hardens in water. If possible, cast all at once.\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 528
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 164v - - - - - \n\n\nMolds\n\nWhen you cast lead, your molds must be very dry, even if the molds are large. The outside of the molds must be reddened, and it is necessary to keep them in continuous heat until they do not smoke anymore inside. Do not reheat your molds several times, but continue when you have begun and do not let them cool in the cold because they will crack. Let them cool near the fire. When your molds are still as warm as above, remark, you can put your finger into the casting gate without burning your skin. If your mold is large, it takes more time to cure and to dry, and you must also cast warmer.\n\n",
  activities: ["molding"],
  purposes: ["making"],
  id: 529
});
index.addDoc({
  title: "To repair",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n\n\nTo repair\n\nIf in your cast, there appear some little hole, fix it with black or gray filling gum wax.\n\n",
  activities: ["repairing"],
  purposes: ["observation"],
  id: 530
});
index.addDoc({
  title: "Lacquer",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n\n\nLacquer\n\nIf, having been ground, you let it dry without keeping it in water, it will dry out and it will be quite difficult to crush it as before.\n\n",
  activities: ["making lacquer"],
  purposes: ["observation"],
  id: 531
});
index.addDoc({
  title: "Stretching a canvas portrait",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n\n\nStretching a canvas portrait\n\nIf it is crumpled or folded from when it was rolled up, moisten the back side with a wet sponge. Then stretch it very evenly without damaging it.\n\n",
  activities: ["stretching canvas"],
  purposes: ["application"],
  id: 532
});
index.addDoc({
  title: "Plaster for molding",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n\n\nPlaster for molding\n\n\n  at left middle margin of folio 165r\n\n  When it is long to set and dry, it means that it is too fat and moist, which is what makes it shrink away from the fire and crack. [This is] where burrs come from. The one that comes from lean earth is better. You must not store your moulds made of fat plaster for a long time, because they resemble fat earth, which when drying, cracks. The best is to reheat them soon after they have been made and cast. Moulds made of good plaster can be stored a long time.\n\n\nIt is necessary to oil it well, because it is more difficult to separate the two halves of these moulds than when it is mixed.\n\n",
  activities: ["molding"],
  purposes: ["application","advice"],
  id: 533
});
index.addDoc({
  title: "Dragon's blood",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \nAnnotations:\n\n \n\n\nDragon’s blood\n\nYou can imitate dragon’s blood with lacquer, which surpasses it in beauty, if [when] diluted in oil, you use it to ice gold or silver. Diluted with varnish, it fades.\n\n",
  activities: ["imitation"],
  purposes: ["making","observation"],
  id: 534
});
index.addDoc({
  title: "Repairing snakes and lizards",
  author: null,
  layout: "narrative",
  content: "- - - - - 165r - - - - - \n\n\nRepairing snakes and lizards\n\nYou could make some marks according to the form of their scales, making some bigger ones and some smaller ones, according to the shape of the neck, the body and the tail. If there is something broken, you can attach it with small iron or steel nails, and glue it with some mouth glue, then cover the whole thing with gray or black wax. But it is necessary to let the glue dry for one day without touching it.\n\n",
  activities: ["repairing"],
  purposes: ["application"],
  id: 535
});
index.addDoc({
  title: "Positioning animals",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n\n\nPositioning animals\n\nNot only with iron pins, but also with melted wax, are animals secured to the plate of earth. Wash them first in clear water, after they have died in the mixture of vinegar and urine. And with a sponge clean off their mouth, eyes and head of the froth coming out, because the sand would never set well there and would become lumpy.\n\n\n  at left top margin of folio 165v\n\n  If you want to keep their mouths open, insert a little bit of harpsichord string, which will not take up much space.\n\n\n",
  activities: ["casting animals"],
  purposes: [],
  id: 536
});
index.addDoc({
  title: "Keeping animals",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n\n\nKeeping animals\n\nHaving molded them once, if you want to keep them for molding again, put them back into the mixture of urine, vinegar and spirits where you killed the others, and they will keep for a long time without decaying. If you have a cut on your hand, take care that this mixture does not touch it.\n\n",
  activities: ["molding animals"],
  purposes: ["advice"],
  id: 537
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n\n\nMolds\n\nAfter molding them do not keep them for long, but use them as soon as you can, because when kept for a long time, they are prone to spoiling.\n\nWhen your molds are reheated, the thing comes out better.\n\n",
  activities: ["molding"],
  purposes: ["observation"],
  id: 538
});
index.addDoc({
  title: "Lute",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n\n\nLute\n\nWhen reheating, you might as well use common lute, But when you want to cast, strip it from the mold and, using a brush, quickly apply a layer of plaster lute that has been used for molds, because it will be dry as soon as it settles, and cast. This lute should be mainly placed on the joints.\n\n",
  activities: ["casting"],
  purposes: ["application"],
  id: 539
});
index.addDoc({
  title: "Silver",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n\n\nSilver\n\nWhen it quivers after melting, that is a sign that it is very hot. And since it commonly contains much lead, it is good to throw in some lime mortar because that attracts and gathers in the lead.\n\n",
  activities: ["melting silver"],
  purposes: ["observation"],
  id: 540
});
index.addDoc({
  title: "Fly wings",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \nAnnotations:\nToo thin things, fol. 142v (Fu, Zhang)\n \n\n\nFly wings\n\nSo that they come out best, place wax sprues from the gate up to the tips of the wings. Also make sure there is enough wax under the belly, because that is what makes the cast succeed.\n\n\n  Figure\nat left middle margin of folio 165v\n\n\n\n",
  activities: ["casting"],
  purposes: ["advice"],
  id: 541
});
index.addDoc({
  title: "Attaching a fly wing or something similar",
  author: null,
  layout: "narrative",
  content: "- - - - - 165v - - - - - \n\n\nAttaching a fly wing or something similar\n\nThey can be attached with fish glue mixed with spirits over slow heat, heating also the work. Then that is covered with wax “à ébaucher”, that should be grey.\n\n",
  activities: ["using glue for delicate objects"],
  purposes: ["application"],
  id: 542
});
index.addDoc({
  title: "For the Workshop",
  author: null,
  layout: "narrative",
  content: "- - - - - 166r - - - - - \n\n\nFor the Workshop\n\nIf anything has been omitted: the harvester is not blamed for leaving some corn ears.\n\nIf some craftsmen complain that their craft secrets are being discovered, as the goddesses of Eleusis complained to N… the Pythagorean that their mysteries were disclosed, excuse yourself in the words of the ancient Hebrews quoted by Josephus.\n\nAs a hen will carefully search the rubbish thrown out of a house for a crumb or a seed to distribute to her chicks, so will the orphans receive whatever has been discovered in those arts that are considered vile and despicable.\n\nTablet of Cebes: idle. But The Workshop represents all things active.\n\nIf the jealous will disapprove picking up these things and taking them from others, reply that since “Nullum est jam dictum quod non dictum aut factum sit prius” and it is commonly believed that all arts were invented within a thousand years, do not imagine you could invent anything new but rather rediscover the long—buried, unknown and forgotten books of Numa in order to reveal them to those who are ignorant of them; and that, just as the day before teaches the day after, you also needed to learn from those before you in order to teach those after you. The Latins learnt from the Greeks, as Cicero did from Plato and Virgil from Homer (Aulus Gellius). Valerius Maximus only reawakened various authors who had written previously, and Livy’s 23rd book [revived] the 2nd or 3rd book of Polybius. Among the Egyptians, Serapis was deemed the inventor of agriculture, but among the Sicilians, it was Ceres. Pythagoras and others from Tyana learnt during their travels those disciplines which, back in their countries, they claimed to have invented. Does one not call a weaver the maker of his precious cloth or fabric, even though he did not himself dye and twine [the yarn] nor wind and prepare the reels and balls of thread? Is a mason not the builder of the house, for picking up ready—made stones? “Apollo a Chirone medicari didicit &amp; tamen deus medicinae habitus.” “Homerus Orphei poema imitatus est, nam cum Orpheus sic prius exorsus esset, ‘Iram cane dea Cereris frugiferentis’, ita reddit Homerus, ‘Iram cane dea Pelidae Achillis’”. In Justino martire, Circa princip.\n\n",
  activities: ["history"],
  purposes: ["observation"],
  id: 543
});
index.addDoc({
  title: ["handwork and devotion"],
  author: null,
  layout: "narrative",
  content: "- - - - - 166v - - - - - \n\n\n[handwork and devotion]\n\nIn addition to Greek examples, there is a psalm of David mentioned by Saint Athanasius in the Synopsis. It begins “Parvus eram” and in the second verse the royal prophet says, “Manus meae fecerunt organum et digiti mei aptarunt psalterium.”\n\n",
  activities: ["literary description"],
  purposes: ["observation"],
  id: 544
});
index.addDoc({
  title: "Keeping chestnuts",
  author: null,
  layout: "narrative",
  content: "- - - - - 166v - - - - - \n\n\nKeeping chestnuts\n\nThey must be left in their burs until you want to eat them. And in their burs, store them in a humid place, or in the drain of some roof.\n\n",
  activities: ["storing chestnut"],
  purposes: ["advice"],
  id: 545
});
index.addDoc({
  title: "Scented candle from Le Mans",
  author: null,
  layout: "narrative",
  content: "- - - - - 166v - - - - - \n\n\nScented candle from Le Mans\n\nThey melt in withwax and candles rosin that is called in France [rosin] from Burgundy, which is white and not as rough or dry as the other rosin. They also perfume the wick and the end of the wick.\n\n",
  activities: ["candle making"],
  purposes: ["making"],
  id: 546
});
index.addDoc({
  title: "Softening gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 166v - - - - - \n\n\nSoftening gold\n\nDissolve some caput mortuum in distilled vinegar. Filter and congeal in salt and cement the ☉ with this, and it will soften wonderfully.\n\n",
  activities: ["softening"],
  purposes: ["application"],
  id: 547
});
index.addDoc({
  title: "Improving the color of gold",
  author: null,
  layout: "narrative",
  content: "- - - - - 166v - - - - - \n\n\nImproving the color of gold\n\nPut some aqua fortis made with vitriol on hot embers. Cover the bottle, that is, the vent, with a tile. Then uncover it and a thick smoke will come out in which you put the gold and it will take on an excellent color.\n\n",
  activities: ["colormaking"],
  purposes: ["making"],
  id: 548
});
index.addDoc({
  title: "Mortars",
  author: null,
  layout: "narrative",
  content: "- - - - - 167r - - - - - \n\n\nMortars\n\n\n  Figure\n\n\n\nMortars are made of the best alloy of “métal” and the finest possible rosette so that they do not burst, that is to say one part “métal” and two [parts] fine rosette or old caudron, which is even better. Some of them are of fifteen or seventeen lb. and are loaded with two and a half lb. of grain powder, and they are put on common windows and doors. Others are of a weight of 25 to 27 lb. and are loaded with eight lb. of powder. And in such a way, they are made according to the stress they have to resist. On the outside, they are all the same shape, but in the inside, they are made like a crucible\n\n\n  Figure\n\n\n\nnarrower on the inside of the bottom and getting wider towards the mouth. And this is to reinforce the bottom, given the quantity of powder they hold, and so that they do not burst. Those of 4 s. lb. are eight lines thick at the bottom, and get thinner in the inside towards the opening, which is of 4 lines. They have xiii “poulsses” long and seven in diameter at the mouth and opening.\n- - - - - 167v - - - - - \nThe ones weighing about 27 lb. are ix “pousses” long and the mouth is 6 [pousses] in diameter. At their bottom, they are 6 “lignes” thick, and 3for the mouth. The ones weighing 17 lb are 8 “poulsses” long and the mouth is five. They are all covered together, all the forks, rods, and tools which one uses, with a big canvas or big cloth so that they do not make any noise. It is good that they sit loaded for a while. After the powder has been put in, it is grinded very hard and then tightly pressed paper is put in, then a cake of well pressed wax and, on the wax, another slab of cork that fits in very snugly and that you have to force in. In this way, the powder remains well packed and gives much greater force, and if you wish, you can put on the cork slab one of wood pierced in the middle, if the mortar has a pierced bottom, which is believed to be the easiest and which makes a greater hole because it cannot recoil. And for these that have a pierced bottom, one must have a good gimlet to first make the hole so that the rod, which is made by the point of the gimlet, has before and without noise attached the mortar. And for these, one must cover the button, which is quite sharply filed, with waxed canvas, or add wax to it so that it completely plugs the hole in the bottom. But because the doors are sometimes iron and the iron rods cannot pierce it, an iron fork made like pincers and another iron stick made with three claws, like you see painted, are use. And in this way, the mortar stays in place well and is immediately steadied. The iron rods must come out of the mortar from every point made by the gimlet, namely by three or 4 finger lengths, which all enter in the door. When the mortars are placed, the touch—hole is filled with good powder and inserted in it is a feather shaft filled with tightly pressed powder and moistened with vinegar, or if needed, the powder is firmly pressed with the palms of the hands and, having wet it with some saliva, you shape it like a cocoon or\n- - - - - 168r - - - - - \n\n  Figure\nat left top margin of folio 168r\n\n\n\nrod that we put into the touch—hole, and then, with a rope wrapped around the end of a baston, we ignite it and promptly retreat to take cover. The small mortars of 16 or 17 lb. are attached promptly with a short, hooked rod made like a wimble, and if it is of a good alloy, we can ignite it by hand. It is done in this way for mortars of 27 lb., but then we only put three lb. of powder. The door really needs to be strong so as not to be blown off for seventeenth lb. mortars. Some people use little bells worn by oxen or mules as an door for the mortars. Others load two canons of guns and, with a gimlet and a string, tie them with the opening against the door. If the mortars are good and do not explode, they only recoil and cannot harm if one is next to them.\n\n\n  \n    A is a small rod, hooked like the hinge of a door and made as a biron on one end in order to quickly attach a small mortar with handles of fifteen or xvii lb. for a common door or window.\n  \n  \n    B is a small mortar with handles.\n  \n  \n    C is a common mortar of 27 or 30 lb. pierced at the bottom, where a large iron rod passes, button—like on one end made like a biron on the tip so as to quickly hang the mortar against a door that will not be covered with iron plates.\n  \n  \n    D These are slabs of wax, cork and wood for loading the mortar and well packing the powder.\n  \n  \n    E iron fork made in the form of pincers as tall as a man, used to quickly set the mortar without a rod. It must be of soft iron so that the sides fold easily, if needed, and to accommodate the height or width of the door.\n  \n  \n    F is another iron fork of the same height that supports the fork made as pincers and also sustains the mortar, and with its low claw prevents the pincers from recoiling.\n  \n\n- - - - - 168v - - - - - \n\n  \n    G mortar with handles placed with its rod.\n  \n  \n    H knife—like saws to cut, if needed, a portcullis.\n  \n  \n    J the big iron rods that cross and tie the mortar.\n  \n  \n    K are like iron rods, all round and covered with cloths, like all the rest, so as to make the big iron rods, pierced close to the button, turn.\n  \n  \n    L axes that one must always carry to chop and to break, in the fortuitous case that the mortar has left anything entirely.\n  \n  \n    M a large wood mallet for knocking down what was begun and weakened by the axes and “birons”.\n  \n  \n    N are big wheelwright augers and birons for easily cutting a door or window by making large holes close to one another.\n  \n  \n    O crutches as tall as a man that must be carried to put under a portcullis immediately after the canon has been shot and to prevent the portcullis from falling.\n  \n  \n    P are small iron pincers for putting any low mortar against the bolt of a door.\n  \n\n\n",
  activities: ["making mortars"],
  purposes: [],
  id: 549
});
index.addDoc({
  title: ["List of making procedures"],
  author: null,
  layout: "narrative",
  content: "- - - - - 169r - - - - - \n\n\n[List of making procedures]\n\n\n  \n    Molding a tortoise\n  \n  \n    Furry animals\n  \n  \n    Birds\n  \n  \n    Leaf of vine — put\n  \n  \n    Of the strawberry\n  \n  \n    Piece molding\n  \n  \n    Molding a vase in a chassis\n  \n  \n    Molding capilli veneris\n  \n  \n    Molds that need to be supported by nets\n  \n  \n    Molding a bouquet\n  \n  \n    Rose carnations\n  \n  \n    Hollow molding\n  \n  \n    Hollow gilded silver\n  \n  \n    Molding wort plant put\n  \n  \n    + Crayfish put and seen\n  \n  \n    Grasshoppers\n  \n  \n    Barbots\n  \n  \n    Butterflies\n  \n  \n    Flies\n  \n  \n    Bats\n  \n  \n    Enameling thin gold\n  \n  \n    Molding in sugar\n  \n  \n    Molding fish\n  \n  \n    Molding in sulfur put\n  \n  \n    Cardboard\n  \n  \n    + Wax put\n  \n  \n    Roughing out\n  \n  \n    Stamped medals full of lead\n  \n  \n    Molding large carved wooden pieces\n  \n  \n    Molding and making casts of metal animals\n  \n  \n    + Wheat oil put and seen\n  \n  \n    Stag beetle\n  \n  \n    Foot of a bittern molded\n  \n  \n    Thickness of a medal\n  \n  \n    Very hard wax\n  \n  \n    Molding the engraving on a ring\n  \n  \n    Molding pieces of carcanets\n  \n  \n    Things that do not release from the mold …\n  \n  \n    Fountains\n  \n  \n    Grottoes\n  \n  \n    Sundry mosses applied\n  \n  \n    Molding in three chassis\n  \n  \n    Tempering iron in order to engrave it\n  \n  \n    Etching on silver and iron\n  \n  \n    Stamping\n  \n  \n    White enamel, softening it with black calcinated river pebbles\n  \n\n\n",
  activities: ["list"],
  purposes: [],
  id: 550
});
index.addDoc({
  title: "Reducing a round form into a hollow one",
  author: null,
  layout: "narrative",
  content: "- - - - - 169v - - - - - \n\n\nReducing a round form into a hollow one\n\nYou must firstly mold it with plaster as has been said before, and in the plaster throw in some wax from which will come a relief that you will repair very neatly, and will shape at your pleasure. Then you will moldthis wax relief once more in plaster, or even better with your tempered sand, #, as if for a noyau. And in the latter throw in some lead and from this you will have a very neat relief, and if it is not, repair it on cement or a similar material, and beware that it should always release well. And this one will always serve you as a model for making as many hollow molds as you would like. In this way, place half of your lead figure which you have oiled, and moisten it with spirits as we have seen above, on your clay base, then mold this half with a white plaster. Having taken hold, and having smoothed and flattened the plaster, take your black wax mixed with sulphur as we have seen before, because it leaves nothing in the mold and melts quicker. Dip it in hot urine, and once it is softened enough, make an imprint with it on your half figure in lead. And you will have a very neat hollow mold. Then adapt your wax hollow mold into a square shape, as it pleases you, as long as you have sufficient thickness, and make sure it is well even on all sides, and then mold this hollow wax; and having it imprinted on one side, and having it flat and even on the other, in the same way that you would mold a flat medal in wax or metal in a noyau. And the noyau mold will give you, whether in silver or any other metal you wish, a figure similar to the wax one, which is to say, flat and even on one side, and hollow on the other. And having cleaned this hollow, and having put it in the bleach, if it is made of silver, you can put into it some sugar work\n\n\n  at left top margin of folio 169v\n\n  Having made a hole in your clay base and having placed there your half figure in wax, oil it a bit so that it comes out more easily.\n\n\n\n  at left middle margin of folio 169v\n\n  Transparent wax is not good as opposed to one that has body, for making good imprints.\n\n\n\n  Figure\nat left bottom margin of folio 169v\n\n\n\n\n  at left bottom margin of folio 169v\n\n  Because you have molded one of your halves with plaster and wax, you can do the same thing to the other half.\n\n- - - - - 170r - - - - - \nperfume and similar things. But be sure that the black wax with which you cast is hard, so it will come off rapidly when dry so you can see if it has been stamped correctly. It can be made harder by adding more melted sulphur in the melted wax, and a bit of resin.\n\n",
  activities: ["molding"],
  purposes: ["making","advice"],
  id: 551
});
index.addDoc({
  title: "Common medals",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n\n\nCommon medals\n\nRelief awls are made of untempered steel, and then it is tempered. With it we beat on a matrice, not red hot on the fire as some people think, but on some steeled iron, reheated and adoulcy, that is then tempered.\n\n",
  activities: ["making awl"],
  purposes: ["observation"],
  id: 552
});
index.addDoc({
  title: "Iron clamps",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n\n\nIron clamps\n\nWhen you put them for the second time, make sure that the mold does not wobble.\n\n",
  activities: ["using iron clamps"],
  purposes: ["advice"],
  id: 553
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n\n\nMolds\n\nThose with noyau, when reheated, should be placed on half lit charcoal, without being in contact with the air; like the frame molds, they need to dry in the open, and uncovered.\n\n",
  activities: ["molding"],
  purposes: ["observation"],
  id: 554
});
index.addDoc({
  title: "Thick tin pieces",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n\n\nThick tin pieces\n\nThey should not be casted with lead or red tin, like thin and fragile things. It is enough if they are well melted and hot. Fragile things need to be red hot and made of red tin.\n\n",
  activities: ["casting"],
  purposes: ["making"],
  id: 555
});
index.addDoc({
  title: "How to clean closed molds",
  author: null,
  layout: "narrative",
  content: "- - - - - 170r - - - - - \n\n\nHow to clean closed molds\n\nYou have to leave them cool down rather than blow inside to clean them, because they hold the ashes when they are hot. Once cooled, they are easier to clean. Have a find brass wire or steel wool to thoroughly clean the guene because it is through it that you cast. Blow into it and siphon, bringing it to you. Give it volume before casting the tail with wax, then cut it.\n\n\n  Figure\nat left top margin of folio 170r\n\n\n\n\n  Figure\n\n\n\nmake a tail by soldering a latten wire. The grains of a flower are quite little, so they can be removed with the chaple, but the leafs need to be peeled off correctly, then the paint will cover everything.\n\n",
  activities: ["cleaning"],
  purposes: ["making"],
  id: 556
});
index.addDoc({
  title: ["Receipts and dues for the heirs of late Sr. Ouvryer"],
  author: null,
  layout: "narrative",
  content: "- - - - - 170v - - - - - \n\n\n[Receipts and dues for the heirs of late Sr. Ouvryer]\n\nIn the year fifteen hundred seventy—eight, the second of July, the heirs of the late Sr. Ouvryer received (two hundred and five ecus), the rent of Saint—Frajou, amounting to twelve hundred and thirty livres.\n\nThey have also received, as part of the revenue of the year fifteen hundred seventy nine, three hundred forty three and one third ecus.\n\n\n  \n    \n      And for the first year, they remain [to be paid] eighty livres and fifteen sous,\n      and for the second settlement, they have not yet received anything.\n    \n  \n\n\n",
  activities: ["balance keeping"],
  purposes: ["description"],
  id: 557
});
index.addDoc({
  title: "Against plague",
  author: null,
  layout: "narrative",
  content: "- - - - - 170v - - - - - \n\n\nAgainst plague\n\nAgainst pestilential fever or poison or plague, take an ecu’s weight of your opiate soaked in scabious or bugloss extract, or heavily diluted wine, if you are already ill. After taking it, you must make yourself sweat.\n\n",
  activities: ["medicinal"],
  purposes: ["advice"],
  id: 558
});
index.addDoc({
  title: "To preserve oneself",
  author: null,
  layout: "narrative",
  content: "- - - - - 170v - - - - - \n\n\nTo preserve oneself\n\nAcetum paratum ex ruta baccis juniperi simul tusis Eoaceto extinguantur lateres igniti. Et vapor excipiatur ore naribus..Rue vinegar together with crushed juniper berries. Pour the vinegar over red hot bricks and inhale the vapor through the mouth and nostrils. This is to preserve oneself when going into noxious air: a garment can be perfumed with this vapor in order to remove infection from a room, house, etc. And if you find yourself in a place where you do not have this preparation, carry rue and berries crushed together, then, if need be, boil them in vinegar and use as described.\n\n \n- {:.indent-3}Ottonis episcopi | Frisigensis | Ab orbe condito\n\n\n  \n    \n      \n        \n          Abbatis\n          Urspergensis\n          Chronicon\n        \n      \n    \n  \n  \n    \n      \n        \n          Hieronymus\n          Mercurialis,\n          Variarum\n        \n      \n    \n  \n  \n    Rerum Scoticarum Historia, Georgio Bucanano authore\n  \n  \n    \n      \n        \n          Rembertus Dodonæus, Mechliniensis medicus,\n          De stirpium historia\n        \n      \n    \n  \n  \n    De L’Orme, De l’invention de bien bastir, and other works\n  \n  \n    Telesius, De coloribus, Vascosan\n  \n  Marbodius, De lapillis prætiosis\n &lt;/span&gt;\n\n\n",
  activities: ["medicinal"],
  purposes: ["advice"],
  id: 559
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": ["List of artisans with their locations"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "001r [List of artisans with their locations] Nicolas Coste, in the Rue de la Heaumerie, at the sign of St..."
}
,{
  "title": ["Diverse thoughts"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_a2/",
  "activities": [],
  "purposes": [],
  "excerpt": "001r [Diverse thoughts] The harvester that leaves some ears is not blamed. Sacra Eleusinae deae propalare nefas. Trumpets, see the..."
}
,{
  "title": ["List of authors"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_a3/",
  "activities": [],
  "purposes": [],
  "excerpt": "001r [List of authors] Wolfangus Lazius Petrus Appianus mathematicus Ingolstadiensis, Comment. urb. rom. Hieronimo Ruscelli Hermolaus Barbarus Angelius Bargaeus, De..."
}
,{
  "title": ["Pen trial"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_a4/",
  "activities": [],
  "purposes": [],
  "excerpt": "     001r      \n\n[Pen trial]\n\nMonsieur\n"
}
,{
  "title": "For easing the belly",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001v_a1/",
  "activities": ["making"],
  "purposes": ["medicine"],
  "excerpt": "001v For easing the belly Prunes of Saint Antonin, and if you like you can put leaves of malva and..."
}
,{
  "title": "Books to recover",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p002r_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "002r Books to recover The chronicles of Sigebert Rufinus Irenaeus, In [Haereses] Paulus Aemilius Paulus Jovius Polydorus Bergomensis Philippe de..."
}
,{
  "title": "Against pain",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p002r_a2/",
  "activities": ["making"],
  "purposes": ["medicine"],
  "excerpt": "     p002r      \n\nAgainst pain\n\n\n Turpentine oil, oil of Jacob and salt from cabbage ashes.\n\n"
}
,{
  "title": ["Book title"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p002v_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "     002v      \n\n[Book title]\n\nPractica, cioè nova inventione di contegiare, stampata in Brescia per Vincenzo Sabio\n\n"
}
,{
  "title": "Emeralds of Brissac",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p002v_a2/",
  "activities": ["imitation gem"],
  "purposes": ["making"],
  "excerpt": "002v Annotations: Imitation Gemstones, Ruby Emerald, fol. 100rv (Kremnitzer, Shah) Emeralds of Brissac I took minium, 26 ℥, crystal […]..."
}
,{
  "title": "Sapphire",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p002v_a3/",
  "activities": ["imitation gem"],
  "purposes": ["Making"],
  "excerpt": "002v Annotations: Imitation Gemstones, Ruby Emerald, fol. 100rv (Kremnitzer, Shah) Sapphire Pebbles or crystal, 8 ℥; minium, 16 ℥; smith’s..."
}
,{
  "title": "Imitation coral",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p003r_a1/",
  "activities": ["imitation coral"],
  "purposes": ["making","observation"],
  "excerpt": "003r Annotations: Imitation Coral, fol. 3r (Chessa) Imitation coral + One must first make the branches from wood or take..."
}
,{
  "title": "Varnish for paintings",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p003r_a2/",
  "activities": ["varnish for paintings"],
  "purposes": ["making"],
  "excerpt": "003r Varnish for paintings Take a pound of Venice turpentine and heat it in a pot until it simmers, put..."
}
,{
  "title": "Thick varnish for floorboards",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p003r_a3/",
  "activities": ["varnish for floorboards"],
  "purposes": ["making"],
  "excerpt": "003r Thick varnish for floorboards There is a type of varnish that takes a long time to dry and is..."
}
,{
  "title": "To varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p003v_a1/",
  "activities": ["varnish"],
  "purposes": ["observation"],
  "excerpt": "003v To varnish Turpentine varnish does not need any glue since it is fat and viscous and does not penetrate..."
}
,{
  "title": "Lavender spike oil varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004r_1/",
  "activities": ["varnish"],
  "purposes": ["making","observation","advice"],
  "excerpt": "004r Lavender spike oil varnish One must heat lavender spike oil and, as it begins to simmer, put in powdered..."
}
,{
  "title": "To remove varnish from an old panel painting that has yellowed and varnish it again",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004r_2/",
  "activities": ["varnish","cleaning"],
  "purposes": ["application","advice"],
  "excerpt": "004r To remove varnish from an old panel painting that has yellowed and varnish it again Take some white soap..."
}
,{
  "title": "Black varnish for sword guards, metal bands for chests, etc.",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004v_a1/",
  "activities": ["varnish"],
  "purposes": ["making","application","advice","observation"],
  "excerpt": "004v Annotations: Pain, Ostie, Rostie: Bread in Early Modern Europe, fols. 4v, 37r, 79v (Le Pouésard) Black varnish for sword..."
}
,{
  "title": "Black varnish without fire, without disassembling harnesses or removing metal bands from chests",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004v_a2/",
  "activities": ["varnish"],
  "purposes": ["making","application","observation"],
  "excerpt": "004v Black varnish without fire, without disassembling harnesses or removing metal bands from chests Take spike lavender oil varnish and..."
}
,{
  "title": "Iron engravers' varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p004v_a3/",
  "activities": ["varnish","engraving"],
  "purposes": ["making","application","advice"],
  "excerpt": "004v Iron engravers’ varnish Take linseed oil or walnut oil and instead of black pitch you will add some pine..."
}
,{
  "title": "Steel mirrors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p005r_a1/",
  "activities": ["casting","polishing"],
  "purposes": ["observation","making"],
  "excerpt": "005r Steel mirrors + They are called steel mirrors because in the past they were usually made of steel polished..."
}
,{
  "title": "Concave mirrors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p005r_a2/",
  "activities": ["practical optics"],
  "purposes": ["observation"],
  "excerpt": "005r Concave mirrors A concave mirror shaped in the aforesaid form produces an endless number of illusions which seem like..."
}
,{
  "title": "For bronzing in yellow and white",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p005v_a1/",
  "activities": ["embellishing"],
  "purposes": ["making","application"],
  "excerpt": "005v For bronzing in yellow and white Take mirror tin and melt it. On half a pound of this, put..."
}
,{
  "title": "To lay down and set burnished gold and give it a red or green or blue hue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006r_1/",
  "activities": ["embellishing","gilding"],
  "purposes": ["observation","application"],
  "excerpt": "006r Annotations: Rouge Clair, fol. 40v (Chang, Shi) Annotations: Esmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi) To..."
}
,{
  "title": "For cages",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006v_a1/",
  "activities": ["embellishing","glasswork"],
  "purposes": ["application","advice","observation","description"],
  "excerpt": "006v Annotations: \"For Cages\" and Glassmaking in Ms. Fr. 640: fol.6v For cages You can embellish them with thin enamel..."
}
,{
  "title": "For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006v_a2/",
  "activities": ["etching","metalwork","stamping"],
  "purposes": ["making"],
  "excerpt": "006v For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests,..."
}
,{
  "title": "To gild with gold color and tinsel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a1/",
  "activities": ["embellishing"],
  "purposes": ["making","observation","application"],
  "excerpt": "007r To gild with gold color and tinsel Once you have colored or made your stamped ornament in tin (as..."
}
,{
  "title": "To color stamped ornaments for trunks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a2/",
  "activities": ["embellishment","stamping"],
  "purposes": ["making","application"],
  "excerpt": "007r To color stamped ornaments for trunks The stamped ornament made from sheets of copper or latten are made with..."
}
,{
  "title": "Doublets",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a3/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "007r Doublets Good dragon’s blood soaked in spirits produces its own mastic or glue. So do vert de vessie and..."
}
,{
  "title": "Fish glue or usblac and mouth glue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a4/",
  "activities": [],
  "purposes": ["making","description","application"],
  "excerpt": "007r Fish glue or usblac and mouth glue It is made from codfish skin that has been boiled rather than..."
}
,{
  "title": "To give the color of all kind of metals and woods and other things",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_1/",
  "activities": ["imitation"],
  "purposes": ["making","application"],
  "excerpt": "007v To give the color of all kind of metals and woods and other things Take touchstone and pumice stone..."
}
,{
  "title": "Against windy colic",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_2/",
  "activities": ["medicine"],
  "purposes": ["making"],
  "excerpt": "007v Against windy colic Take a dozen dried common walnuts and throw them one after another onto a good brazier..."
}
,{
  "title": "To relieve the pain of g{out}",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_3/",
  "activities": ["medicine"],
  "purposes": ["making","application"],
  "excerpt": "007v To relieve the pain of g{out} Take half a pound of finely powdered golden and yellow marcasite, half an..."
}
,{
  "title": "Against gonorrhea",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007v_4/",
  "activities": ["medicine"],
  "purposes": ["making","application"],
  "excerpt": "007v Against gonorrhea Cook .i. lb. of old smiths’ water, .i. ℥ of Armenian bole reduced in the finest powder,..."
}
,{
  "title": "Gold lettering on paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_1/",
  "activities": ["gilding"],
  "purposes": ["making"],
  "excerpt": "008r Gold lettering on paper Write with fig tree milk then let it dry a little, afterwards apply the gold..."
}
,{
  "title": "To explode grenades and give force to fireworks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_2/",
  "activities": ["explosives","military"],
  "purposes": ["making"],
  "excerpt": "     008r      \n\nTo explode grenades and give force to fireworks\n\n  Put into the powder one sixth as much of quicksilver\n\n"
}
,{
  "title": "Tempering bullets to pierce bullet-proof armor",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_3/",
  "activities": ["military"],
  "purposes": ["making"],
  "excerpt": "008r Tempering bullets to pierce bullet—proof armor Heat the lead bullet as much as you can without melting it, and..."
}
,{
  "title": "To make a breach in a wall by night",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008r_4/",
  "activities": ["military"],
  "purposes": ["advice"],
  "excerpt": "008r To make a breach in a wall by night Having made a hole in a wall as you know,..."
}
,{
  "title": "To polish a ruby balay",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_1/",
  "activities": ["polishing"],
  "purposes": ["advice"],
  "excerpt": "008v To polish a ruby balay Unlike others, you don’t polish it with tripoli, but with marcasite powder and oil...."
}
,{
  "title": "Ground gold and ground silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_2/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "008v Ground gold and ground silver You have to calcine your pure gold with ☿ and then let your amalgam..."
}
,{
  "title": "Polishing stones",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_3/",
  "activities": ["polishing"],
  "purposes": ["observation"],
  "excerpt": "008v Polishing stones There are three wheels for this purpose, one of tin, one of lead, and one of pure..."
}
,{
  "title": "Pewterers' mixture",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_4/",
  "activities": ["metalwork"],
  "purposes": ["observation"],
  "excerpt": "008v Pewterers’ mixture Because they often mix in with the pure tin half the quantity of lead, which renders the..."
}
,{
  "title": "Perfect amalgam",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p008v_5/",
  "activities": ["metalwork"],
  "purposes": ["making"],
  "excerpt": "008v Perfect amalgam Take the finest sandstone you can find and make a cavity in the middle. And put in..."
}
,{
  "title": "Plowman",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009r_1/",
  "activities": ["agriculture"],
  "purposes": ["observation"],
  "excerpt": "009r Plowman Since millet is naturally very dry, harvesters thresh it most often in the cool of night and in..."
}
,{
  "title": "Painters",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009r_2/",
  "activities": ["painting"],
  "purposes": ["observation"],
  "excerpt": "009r Painters After laying down their colors, some smooth it with the back of a feather but the large brush..."
}
,{
  "title": "Merchants",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009r_3/",
  "activities": ["accounting"],
  "purposes": ["observation"],
  "excerpt": "009r Merchants They commonly have four books. The tiro, which is a formulary for apprentices, by which they can know..."
}
,{
  "title": "Painters",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009v_1/",
  "activities": ["painting"],
  "purposes": ["observation"],
  "excerpt": "009v Painters They melt orpiment entirely in a glass bottle on very hot ashes, but it would be more appropriate..."
}
,{
  "title": "Merchant",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009v_2/",
  "activities": ["accounting"],
  "purposes": ["observation"],
  "excerpt": "009v Merchant The order that merchants are accustomed to keep in their books, which are the waste book, the sales..."
}
,{
  "title": "Waste book",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p009v_3/",
  "activities": ["accounting"],
  "purposes": [],
  "excerpt": "009v Waste book First, François du Cros owes from 2 September 1581, for 1 canne de batiste at 8 livres..."
}
,{
  "title": "Imitation jasper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_1/",
  "activities": ["imitating","embellishing"],
  "purposes": ["advice","observation","application","making"],
  "excerpt": "010r Annotations: Imitating Raw Nature, fol. 10r (LoresChavez and Kang) Annotations: Jasper Imitation on Horn, fol. 10r (Estrades) Imitation jasper..."
}
,{
  "title": "Scudegrun",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_2/",
  "activities": ["painting"],
  "purposes": ["observation"],
  "excerpt": "010r Annotations: Color for Green, fol. 158v (Kok) Scudegrun It is made in Lyon from the juice of weld mixed..."
}
,{
  "title": "Roses",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_3/",
  "activities": ["imitating"],
  "purposes": ["observation"],
  "excerpt": "010r Annotations: Jasper Imitation on Horn, fol. 10r (Estrades) Roses These are imitated either with the scrapings of horn used..."
}
,{
  "title": "Purple color",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_4/",
  "activities": ["painting"],
  "purposes": ["observation"],
  "excerpt": "010r Purple color Painters make it beautifully by first applying an undercoat of ordinary azur, or better yet azure enamel,..."
}
,{
  "title": "Powder for hourglasses",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010r_5/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "010r Annotations: Powder for Hourglasses, fol. 10r (Marris, Pope) Powder for hourglasses It must be made very fine and not..."
}
,{
  "title": "For painting in oil on taffeta without the oil running",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_1/",
  "activities": ["painting"],
  "purposes": ["making","observation"],
  "excerpt": "010v Annotations: Oil on Taffeta, fol. 10v (Bowen, Lou) For painting in oil on taffeta without the oil running One..."
}
,{
  "title": "Underlayer for gold leaf on parchment or paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_2/",
  "activities": ["painting","gilding"],
  "purposes": ["advice","application"],
  "excerpt": "010v Annotations: Gilding on Paper and Parchment, fol. 10v, 29v (Goldenberg) Underlayer for gold leaf on parchment or paper Make..."
}
,{
  "title": "For cleaning gold leaf applied to iron",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_3/",
  "activities": ["gilding"],
  "purposes": ["advice"],
  "excerpt": "     010v      \n\nFor cleaning gold leaf applied to iron\n\n  Rub your weapons or other gilt objects with dry horse dung.\n\n"
}
,{
  "title": "For whitening ceruse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p010v_4/",
  "activities": [],
  "purposes": ["observation","making"],
  "excerpt": "010v For whitening ceruse Hard—boil some eggs, cut them in half and take the yolks out, and between the two..."
}
,{
  "title": "Painting enamel azure in oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011r_1/",
  "activities": ["painting"],
  "purposes": ["making"],
  "excerpt": "011r Annotations: Azure Enamels, fol. 11r, 59r, 61v, 93v (Chang, Clemens) Painting enamel azure in oil This is a secret..."
}
,{
  "title": "Applying the color of Damascene steel on knives",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_1/",
  "activities": ["embellishing"],
  "purposes": ["application"],
  "excerpt": "011v Applying the color of Damascene steel on knives Rub the steel with common aquis fortis mixed with earth. After,..."
}
,{
  "title": "Getting rid of red eyes or black eyes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_2/",
  "activities": ["cosmetic"],
  "purposes": ["application"],
  "excerpt": "011v Getting rid of red eyes or black eyes Make two small licks of raw mutton flesh, and with a..."
}
,{
  "title": "Applying unpolished gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_3/",
  "activities": ["gilding"],
  "purposes": ["application"],
  "excerpt": "011v Applying unpolished gold There is nothing better than the black varnish of sword—makers to use as a base layer..."
}
,{
  "title": "Making diamond points for engraving",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_4/",
  "activities": ["engraving"],
  "purposes": ["making"],
  "excerpt": "011v Making diamond points for engraving These are for sketching what you want to draw on stones and for engraving...."
}
,{
  "title": "Polishing a copper wheel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p011v_5/",
  "activities": ["polishing"],
  "purposes": ["advice"],
  "excerpt": "011v Polishing a copper wheel Instead of polishing your stone, it is necessary to remove the grease by rubbing the..."
}
,{
  "title": "For molding from sulfur",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012r_1/",
  "activities": ["casting"],
  "purposes": ["observation","advice"],
  "excerpt": "012r Annotations: Sulfur and Additives, fol. 140v, 12r (Landsman, Rowen) For molding from sulfur Sulfur is made beautiful by mixing..."
}
,{
  "title": "Cimolee",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012r_2/",
  "activities": ["mold making","casting"],
  "purposes": ["observation","advice"],
  "excerpt": "012r Cimolee Cimolee or fullers’ clay (fullers meaning those who finish cloth) is an excellent material for molding hollow or..."
}
,{
  "title": "Plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012r_4/",
  "activities": ["mold making","casting"],
  "purposes": ["observation","advice"],
  "excerpt": "012r Plaster Mountain plaster is greyer, and that from the region of Albi is whiter. It has to be heated..."
}
,{
  "title": "Moulding stucco promptly",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012v_1/",
  "activities": ["molding","casting"],
  "purposes": ["making","observation"],
  "excerpt": "012v Moulding stucco promptly Crush and pulverize finely brick or Armenian bole or sanguine and incorporate it with melted wax,..."
}
,{
  "title": "Cleaning yellow pearls",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012v_2/",
  "activities": ["polishing"],
  "purposes": ["application"],
  "excerpt": "012v Cleaning yellow pearls Gently boil them in a goldsmith’s bouteure then, with tripoli and a small piece of leather,..."
}
,{
  "title": "To whiten enilanroc",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p012v_3/",
  "activities": ["polishing","engraving"],
  "purposes": ["making","observation"],
  "excerpt": "012v To whiten enilanroc Some believe the ceruse—color crust that is on top to be natural. Others say that it..."
}
,{
  "title": "Flesh color with arsenic",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_1/",
  "activities": ["painting"],
  "purposes": ["observation"],
  "excerpt": "013r Flesh color with arsenic Sublimated arsenic, that is to say, the white kind sold as stone, when powdered on..."
}
,{
  "title": "To dye",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_2/",
  "activities": ["dyeing"],
  "purposes": ["making","observation"],
  "excerpt": "013r To dye Mix sal ammoniac and vitriol and boil them together. Then mix in lake or verdigris and azure..."
}
,{
  "title": "Polishing of stones",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_3/",
  "activities": ["polishing"],
  "purposes": ["observation"],
  "excerpt": "013r Polishing of stones Engraved stones are not polished on a copper wheel, but with brushes and tripoli. Yet faceted..."
}
,{
  "title": "Fine sieves of raw silk",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013r_4/",
  "activities": ["weaving"],
  "purposes": ["observation","advice"],
  "excerpt": "013r Fine sieves of raw silk Tammy of raw silk is made on a weaver, to make very fine and..."
}
,{
  "title": "To recognize good azur dust for oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_1/",
  "activities": ["painting"],
  "purposes": ["observation"],
  "excerpt": "013v To recognize good azur dust for oil The one that piles up in small clods and is lumpy is..."
}
,{
  "title": "Whitening pearls",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_2/",
  "activities": ["cleaning"],
  "purposes": ["observation"],
  "excerpt": "013v Whitening pearls When they have been applied in embroidery on some garment, they are greasy and may be cleaned..."
}
,{
  "title": "Toadstone",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_3/",
  "activities": ["painting","medicine"],
  "purposes": ["observation"],
  "excerpt": "013v Toadstone That which comes from the head of the toad and has the shape of the toad, painted naturally..."
}
,{
  "title": "Snakes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p013v_4/",
  "activities": ["animals"],
  "purposes": ["observation"],
  "excerpt": "013v Snakes It is said that if one calls a snake in Greek, saying ΟΦΗ ΟΦΗ, it will flee. Similarly,..."
}
,{
  "title": "For earth walls and rustic construction",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p014r_1/",
  "activities": ["construction"],
  "purposes": ["observation"],
  "excerpt": "014r For earth walls and rustic construction Swallows have taught us this craft by building their nests out of mud..."
}
,{
  "title": "Damask Cloth",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015r_a1/",
  "activities": ["dyeing"],
  "purposes": ["making"],
  "excerpt": "015r Annotations: Damasked Cloth, fol. 15r (Yi) Damask Cloth You can make damask cloth of two different colours and imitate..."
}
,{
  "title": "Casting metals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015r_a2/",
  "activities": ["casting"],
  "purposes": ["making","observation"],
  "excerpt": "015r Casting metals Candlesticks and small works are cast in a frame with sand. Having stamped the work, sprinkle it..."
}
,{
  "title": "Casting gold and silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015r_a3/",
  "activities": ["casting"],
  "purposes": ["observation"],
  "excerpt": "015r Casting gold and silver The sand must be made from something very dry and arid and reheated well because,..."
}
,{
  "title": "Ears",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_1/",
  "activities": ["medicinal"],
  "purposes": ["observation","application"],
  "excerpt": "015v Ears When a defluxion occurs in the ear, be very careful not to put anything in it, and following..."
}
,{
  "title": "Making letters easier to read",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_2/",
  "activities": ["optics"],
  "purposes": ["observation"],
  "excerpt": "015v Making letters easier to read One cuts the largest pieces of beryl or crystal round on one side and..."
}
,{
  "title": "Stamping",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_3/",
  "activities": ["stamping"],
  "purposes": ["making"],
  "excerpt": "015v Stamping If you have a bronze medal and you want to make it very light, make a lead cavity,..."
}
,{
  "title": "Softening horn",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_4/",
  "activities": ["preparing materials"],
  "purposes": ["observation"],
  "excerpt": "015v Softening horn Those who mount acou Agnus Deis and make circles from horn for certain little boxes soften the..."
}
,{
  "title": "Toothache",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p015v_6/",
  "activities": ["medicinal"],
  "purposes": ["observation"],
  "excerpt": "015v Toothache Some put a clove of garlic in the ear on the side of the aching tooth, and after..."
}
,{
  "title": "Black color for dyeing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_1/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "038v Annotations: Black color for dyeing Black color for dyeing Take lye made from quicklime and white lead, mix and..."
}
,{
  "title": "Against nose bleeding and for dyeing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_2/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "038v Annotations: Dragon’s Blood, fol. 29v, 38v (Reich) Against nose bleeding and for dyeing Pound some of the kind of..."
}
,{
  "title": "Beautiful artichokes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_3/",
  "activities": [],
  "purposes": ["advice","observation"],
  "excerpt": "038v Beautiful artichokes You need to trim them every year so that only one stem is left, and water them..."
}
,{
  "title": "Planting trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_4/",
  "activities": [],
  "purposes": ["advice","observation"],
  "excerpt": "038v Planting trees It is said that rarely a tree planted on Saint Paul’s day will fail to take. To..."
}
,{
  "title": "Merchants",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p038v_5/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "038v Merchants Those who retail velvet and other materials do not keep double—entry books because they sell in small quantities..."
}
,{
  "title": "Goldsmith",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039r_1/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "039r Goldsmith They bind silver filings with saltpeter which refines it &amp; does not make it brittle. But gold filings..."
}
,{
  "title": "Dyers’ woad",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039r_2/",
  "activities": [],
  "purposes": ["observation","making"],
  "excerpt": "039r Dyers’ woad It is grown in Lauragais where the deep soil is so fertile that every year wheat was..."
}
,{
  "title": "Enamel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039v_a1/",
  "activities": [],
  "purposes": ["application","observation"],
  "excerpt": "039v Annotations: Esmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi) Enamel Enamel takes more readily on copper than..."
}
,{
  "title": "Colors for illumination on glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039v_a2/",
  "activities": [],
  "purposes": ["application","observation"],
  "excerpt": "039v Colors for illumination on glass In order that your turpentine colors shall not run, &amp; become unified, mix in..."
}
,{
  "title": "Tracing a history on glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p039v_a3/",
  "activities": [],
  "purposes": ["making","application","observation"],
  "excerpt": "039v Annotations: Tracing a history on glass, fol. 39v (Zhao) Tracing a history on glass If you want to trace..."
}
,{
  "title": "Dye",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_1/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "040r Dye Some take the root of Lapathium acutum maius, which looks like monk’s—rhubarb or sorrel, &amp; using the root,..."
}
,{
  "title": "Vinegar",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_3/",
  "activities": [],
  "purposes": ["making","observation"],
  "excerpt": "040r Vinegar One takes for granted that jec heat red—hot the mineral salt that looks like marble &amp; that is..."
}
,{
  "title": "Silver gilt buttons",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_4/",
  "activities": [],
  "purposes": ["observation","application"],
  "excerpt": "040r Silver gilt buttons Because silver gilt does not fear fire, it is cut into lozenges flat[illegible] on one side,..."
}
,{
  "title": "Grottos",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040r_5/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "040r Grottos To fill some empty place that cannot be laden with hanging rocks, one puts a piece of thick..."
}
,{
  "title": "Latten and calamine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_02/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "040v Latten and calamine Founders do not melt latten in a bellow furnace but in crucibles, for in a bellow..."
}
,{
  "title": "Metal",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_03/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "040v Metal Tin needs to be pure because if there is any lead, it will go up in smoke whilst..."
}
,{
  "title": "Aqua fortis",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_04/",
  "activities": [],
  "purposes": ["advice","observation"],
  "excerpt": "040v Aqua fortis If your retort is well luted you should not surround it with ashes, which would only prevent..."
}
,{
  "title": "Cross of the commanders of Malta",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p040v_1/",
  "activities": [],
  "purposes": ["observation","application"],
  "excerpt": "040v Annotations: Rouge Clair, fol. 40v (Chang, Shi) Cross of the commanders of Malta The fine rouge clair which is..."
}
,{
  "title": "Garden lily",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_02/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "041r Garden lily If it is broken during its first blossom, it will not grow or bloom until the following..."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_03/",
  "activities": [],
  "purposes": ["making","observation","advice"],
  "excerpt": "041r Sand The sand to be used for casting should be chosen such that it is not too dry for..."
}
,{
  "title": "Ducks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_04/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "041r Ducks Young domestic ones do not grow for a month after hatching but remain in this state. But after,..."
}
,{
  "title": "Casting earth for founders",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041r_1/",
  "activities": [],
  "purposes": ["making","observation","advice"],
  "excerpt": "041r Casting earth for founders It becomes fat by being beaten and also mixed with horse manure. Potter’s earth would..."
}
,{
  "title": "Glassmaker's black",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041v_1/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "041v Glassmaker’s black Filings of iron taken from bars that have been in the fire for a long time, which..."
}
,{
  "title": "Sheared ewes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041v_2/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "041v Sheared ewes If the shearer wounds them at some point, he applies the very excrement of the ewe on..."
}
,{
  "title": "Colors and gilt on glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p041v_3/",
  "activities": [],
  "purposes": ["making","application"],
  "excerpt": "041v Annotations: Colors and gilt on glass Colors and gilt on glass You should not put as strong gummed water..."
}
,{
  "title": "Founder",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042r_1/",
  "activities": [],
  "purposes": ["making","advice","observation"],
  "excerpt": "042r Founder The clay mould should be baked until sometimes it becomes red hot, since otherwise the metal would be..."
}
,{
  "title": "Wax for seals and impressions",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042r_2/",
  "activities": [],
  "purposes": ["advice","making"],
  "excerpt": "042r Wax for seals and impressions For large wax seals, you should always have tepid water handy, and keep your..."
}
,{
  "title": "Casting in plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042r_a3/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "042r Casting in plaster Melt some wax, and with a big brush coat it over the relief of which you..."
}
,{
  "title": "Pounce for scratching satin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a1/",
  "activities": [],
  "purposes": ["making","application"],
  "excerpt": "042v Pounce for scratching satin After pouncing with crushed flour or chalk, in order that the dots of the pounce..."
}
,{
  "title": "Canvas for oil painting without breaking",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a2/",
  "activities": [],
  "purposes": ["advice","making"],
  "excerpt": "042v Canvas for oil painting without breaking In order that your oil painting be not broken or ruined as you..."
}
,{
  "title": "Oil painting on taffeta",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a3/",
  "activities": [],
  "purposes": ["advice","application"],
  "excerpt": "042v Annotations: Oil Painting on Taffeta 042v Oil painting on taffeta In order that the oil not run, make your..."
}
,{
  "title": "Casting sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a4/",
  "activities": [],
  "purposes": ["advice","observation"],
  "excerpt": "042v Casting sand The key is to grind it well upon marble, and that it be extremely fine; mix in..."
}
,{
  "title": "For decorating a painting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a5/",
  "activities": [],
  "purposes": ["application"],
  "excerpt": "042v For decorating a painting Go over the lines with lacquer ground together with olive oil, which will not dry..."
}
,{
  "title": "White varnish on plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p042v_a6/",
  "activities": [],
  "purposes": ["making","application","advice"],
  "excerpt": "042v White varnish on plaster Put down two or three layers of white glue for painting. Afterwards, varnish with varnish..."
}
,{
  "title": "Mericoton and pavis",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a1/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "     043r      \n\nMericoton and pavis\n\nOne should graft them before Christmas so that they will not freeze too much.\n\n"
}
,{
  "title": "White bronzing on plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a2/",
  "activities": [],
  "purposes": [],
  "excerpt": "043r White bronzing on plaster One must apply four layers of painters’ distemper glue onto the plaster portrait, leaving one..."
}
,{
  "title": "Purpurine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a3/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "043r Purpurine Take half an ounce of soft tin, melt it in a spoon. Once it is melted, throw in..."
}
,{
  "title": "White bronzing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043r_a4/",
  "activities": [],
  "purposes": ["application","observation"],
  "excerpt": "043r White bronzing Apply some blackblack with glue on the medal, as described above, and then varnish it. Once dry,..."
}
,{
  "title": "Varied and transmuted wine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_1/",
  "activities": [],
  "purposes": ["advice","observation"],
  "excerpt": "043v Annotations: Sleightofhand tricks Varied and transmuted wine Grate Brazilwood very fine, let it soak for one or two hours..."
}
,{
  "title": "Pearls",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_2/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "     043v      \n\nPearls\n\nIt is said that pulverised talc blown into a lamp makes them so.\n\n"
}
,{
  "title": "Arquebusier",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_3/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "043v Arquebusier To shoot your arquebus precisely the end of the breech must come precisely on the edge of the..."
}
,{
  "title": "Hail shot for the arquebus",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p043v_4/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "043v Hail shot for the arquebus If you want that it stays together put a piece of felt or leather..."
}
,{
  "title": "The reach of an arquebuse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a1/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "044r The reach of an arquebuse The proportion of a fowling piece is: 4 king’s feet long and the bullet..."
}
,{
  "title": "Pewtermaker",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a2/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "044r Pewtermaker They mix viii or ten pounds of lead for each hundredweight of tin in the cities that have..."
}
,{
  "title": "Arquebuse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a3/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "044r Arquebuse To keep it from backfiring, clean your arquebus every eight days, and rub it with oil, and when..."
}
,{
  "title": "Lacquer",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a4/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "044r Lacquer To test it, soak it and apply it to paper, and if one or two hours later it..."
}
,{
  "title": "Dyes from flowers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044r_a5/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "044r Dyes from flowers Red poppies that grow amongst wheat make a very beautiful columbine on white leather. The boufain..."
}
,{
  "title": "Horsehair sieves",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_1/",
  "activities": [],
  "purposes": ["observation","making"],
  "excerpt": "044v Annotations: Fine raw silk sieves and horse hair sieves Horsehair sieves They are made often in Normandy with horsetail..."
}
,{
  "title": "Excellent water against the pest by the Master of Montorsin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_2/",
  "activities": [],
  "purposes": ["making","advice"],
  "excerpt": "044v Excellent water against the pest by the Master of Montorsin Take some theriac rue, dittany and good vinegar, put..."
}
,{
  "title": "White soporific oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_3/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "044v White soporific oil Have x or 12 Mandragore apples, put them in quarters together with some olive oil in..."
}
,{
  "title": "Stucco",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p044v_4/",
  "activities": [],
  "purposes": ["application","advice"],
  "excerpt": "044v Stucco To stick stones, some do not use gem and pitch black rosin because it is too greasy, but..."
}
,{
  "title": "Loading a pellet arquebus",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p045r_1/",
  "activities": [],
  "purposes": ["advice","observation"],
  "excerpt": "045r Loading a pellet arquebus Figure at top center margin of folio 045r It is necessary to make a wooden pipe 4..."
}
,{
  "title": "Loading an arquebus",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p045v_1/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "045v Loading an arquebus You must have different charges depending to the range that you want your arquebus to have,..."
}
,{
  "title": "How to adjust a bent gun barrel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p045v_2/",
  "activities": [],
  "purposes": [],
  "excerpt": "045v How to adjust a bent gun barrel Take off the breech and put it [the barrel] on a well—leveled..."
}
,{
  "title": "Oil of sulfur for the teeth",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046r_1/",
  "activities": ["whitening"],
  "purposes": ["adivce","application"],
  "excerpt": "046r Oil of sulfur for the teeth Some people whiten them with compositions of eau forte, however one says that..."
}
,{
  "title": "Wheat oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046r_2/",
  "activities": [],
  "purposes": ["adivce","application"],
  "excerpt": "     046r      \n\nWheat oil\n\nApplying it to hair makes it fall out and keeps it from growing back.\n\n"
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046r_3/",
  "activities": [],
  "purposes": ["adivce","application"],
  "excerpt": "046r Against the falling sickness Have fresh crow eggs, either four or five, and over the space of four or..."
}
,{
  "title": "Against cold gouts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046r_4/",
  "activities": [],
  "purposes": ["adivce"],
  "excerpt": "     046r      \n\nAgainst cold gouts\n\nPut Guaiac oil together with oil of sulfur and apply.\n\n"
}
,{
  "title": "Tree flowers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046r_5/",
  "activities": [],
  "purposes": ["adivce"],
  "excerpt": "046r Tree flowers Those that are seen with every new ☾ are hardly profitable. Only two buds need to be..."
}
,{
  "title": "Oil of sulfur for the writer",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046v_1/",
  "activities": ["cleaning"],
  "purposes": ["adivce","application"],
  "excerpt": "046v Oil of sulfur for the writer If the writer wants to quickly clean his quill of the thickness of..."
}
,{
  "title": "Shoemaker",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046v_2/",
  "activities": ["tanning"],
  "purposes": ["adivce","application"],
  "excerpt": "046v Shoemaker If he wants to do some tanned work on black leather shoes, he can dip in oil of..."
}
,{
  "title": "Erasing a letter",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046v_3/",
  "activities": ["erasing"],
  "purposes": ["adivce","application"],
  "excerpt": "046v Erasing a letter Dip a writing quill in fresh and good oil of sulfur and, thus, retrace all the..."
}
,{
  "title": "Writing without ink",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046v_4/",
  "activities": ["writing"],
  "purposes": ["adivce","application"],
  "excerpt": "046v Writing without ink Write with oil of sulfur and heat [it], and the letter will become as black as..."
}
,{
  "title": "Making à jour letters in paper and other work",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046v_5/",
  "activities": [],
  "purposes": ["adivce"],
  "excerpt": "046v Making à jour letters in paper and other work If you write or trace something on the paper and..."
}
,{
  "title": "Making someone's boots burn",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046v_6/",
  "activities": [],
  "purposes": ["adivce"],
  "excerpt": "046v Making someone’s boots burn Rub the abovementioned oil, and as he warms himself they will burn without a flame.Urb...."
}
,{
  "title": "Black letters on stone",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p046v_7/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "     046v      \n\nBlack letters on stone\n\nThe same oil on letters engraved in stone, once heated, becomes black and penetrates.\n\n"
}
,{
  "title": "For teeth",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p047r_1/",
  "activities": [],
  "purposes": ["adivce"],
  "excerpt": "047r For teeth Sal ammoniac i &gt; Figure &gt; , rock salt 1 &gt; Figure &gt; , alum half &gt;..."
}
,{
  "title": "Antimony oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p047r_2/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "     047r      \n\nAntimony oil\n\nIt yellows quite strongly, even silver, if you put it on it once heated.\n\n"
}
,{
  "title": "Against falling sickness or dizziness",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p047r_3/",
  "activities": [],
  "purposes": ["application"],
  "excerpt": "047r Against falling sickness or dizziness Wear, hung to your collar, some root of paeonia which has been plucked when..."
}
,{
  "title": "Crucibles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p047r_4/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "047r Crucibles Those from Bayonne, which seem to be made of grès, are better because they last, without comparison, longer..."
}
,{
  "title": "Against diarrhea and dysentery",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p047r_5/",
  "activities": [],
  "purposes": ["application"],
  "excerpt": "047r Against diarrhea and dysentery Against diarrhea, it is good to use preserve of symphytum, also [known as] consolida maior...."
}
,{
  "title": "A beverage which tastes like wine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p047v_a1/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "047v A beverage which tastes like wine Take tartar from large vessels, dilute it in water, and it will taste..."
}
,{
  "title": "Melting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p047v_a2/",
  "activities": ["melting"],
  "purposes": ["making"],
  "excerpt": "047v Melting Some to make it flow neatly, put half metal and half copper. Others take a part of potin..."
}
,{
  "title": "Crucibles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p047v_a3/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "047v Crucibles Those made during the winter and humid weather are not good. Those used by founders should be thick..."
}
,{
  "title": "Cast",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p047v_a4/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "047v Cast Finely—calcinated pumice stone casts 22 carat gold without needing repair, but it needs to be ablaze and red..."
}
,{
  "title": "Founder",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p048r_1/",
  "activities": [],
  "purposes": ["description"],
  "excerpt": "     048r      \n\nFounder\n\nThe hot [part] \n&gt; Figure\n&gt; \n A furnace to cast a large quantity of metal\n\n"
}
,{
  "title": "Curing dogs from mange",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p048r_2/",
  "activities": ["curing dogs"],
  "purposes": ["advice"],
  "excerpt": "048r Curing dogs from mange Give them a pill of precipitate, that is to say 3, 4, or up to..."
}
,{
  "title": "Excellent mustard",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p048r_3/",
  "activities": ["making mustard"],
  "purposes": ["making"],
  "excerpt": "048r Annotations: Excellent Mustard Excellent mustard Dry some bread in an oven, then stick cloves &amp; cinnamon into it and..."
}
,{
  "title": "Keeping birds and animals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p048r_4/",
  "activities": ["keeping birds and animals"],
  "purposes": ["advice"],
  "excerpt": "048r Keeping birds and animals Take a measurement from [the part of] their body that is fleshy and more susceptible..."
}
,{
  "title": "Regulus extracts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p048v_a1/",
  "activities": ["extracting Regulus"],
  "purposes": ["making"],
  "excerpt": "048v Regulus extracts Take one pound of antimony, half a pound of black soap, and half a pound of Montpellier..."
}
,{
  "title": "Lead tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p048v_a2/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "048v Lead tin They crack if they are often melted again and thicken and burn, so that even if a..."
}
,{
  "title": "Lead casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049r_a1/",
  "activities": ["lead casting"],
  "purposes": ["making"],
  "excerpt": "049r Lead casting Those who cast these small items, sold in front of the churches, melt half a pound of..."
}
,{
  "title": "Sand for lead casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049r_a2/",
  "activities": ["making sand for lead casting"],
  "purposes": ["making"],
  "excerpt": "049r Sand for lead casting Rye straw ashes well boiled, dried and then well sieved. alloy it with egg white...."
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049r_a3/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "049r Other Burnt and calcinated pumice stone, burnt and calcined cuttlefish bones, in the same quantity; and ashes of walnut..."
}
,{
  "title": "Pewterers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049r_a4/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "049r Pewterers They add one lb. of glass tin to one quintal of fine tin, which makes the tin ticker...."
}
,{
  "title": "Birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_1/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "049v Birds at right top margin of folio 049v Calandra larks and all birds taken from the nest and which have not..."
}
,{
  "title": "Grain of lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_2/",
  "activities": [],
  "purposes": ["application"],
  "excerpt": "049v Grain of lead at middle margin of folio 049v Take a playing card, pierced with a pin or needle, folded over..."
}
,{
  "title": "Birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_3/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "049v Birds Those that are caught at Michaelmas are good to keep, but those that are caught in March die,..."
}
,{
  "title": "Preserving fruit for the entire year",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_1/",
  "activities": [],
  "purposes": ["application"],
  "excerpt": "050r Preserving fruit for the entire year at top margin of folio 050r Take a rounded glass phial, with a large enough..."
}
,{
  "title": "Molding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_2/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "050r Molding at top margin of folio 050r If you want to quickly mold in demi—relief anything you come upon, fold some..."
}
,{
  "title": "Little Birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050v_1/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "050v Little Birds Buntings sing during the night if they are left in the cool open air, but they are..."
}
,{
  "title": "Hot-worked steel and files",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050v_2/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "050v Hot—worked steel and files The steel that blacksmiths and other iron workers commonly use is not refined like that..."
}
,{
  "title": "Copying off patterns",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p051r_a1/",
  "activities": ["copying off patterns"],
  "purposes": ["making"],
  "excerpt": "051r Copying off patterns Make some soap water and with it, rub and moisten the engraved stone that you want..."
}
,{
  "title": "Cutters of printing plates",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p051r_a2/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "051r Cutters of printing plates To clean the copper plates or to have used ones print better, boil them for..."
}
,{
  "title": "The Work done in Algiers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p052r_1/",
  "activities": [],
  "purposes": ["observation","advise"],
  "excerpt": "052r The Work done in Algiers Have a colt of three of four years and feed it on barley and..."
}
,{
  "title": "Linseed",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p052v_1/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "052v Linseed If one wants to have it strong and very fine, one has to gather it before the seed..."
}
,{
  "title": "Colors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p052v_2/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "052v Colors If you want to keep them moist and prevent them from losing their initial color, pour some white..."
}
,{
  "title": "Soldering a vise",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p053r_a1/",
  "activities": ["soldering"],
  "purposes": ["making"],
  "excerpt": "053r Soldering a vise It is good that the jaws of the vise should be high for use in making..."
}
,{
  "title": "Copper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p053r_a2/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "053r Copper If, while in the fire and while being cast, it touches the iron, that iron will be so..."
}
,{
  "title": "Lead casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p053r_a3/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "053r Lead casting According to some it is mixed, half tin and half lead and, in order to heat it,..."
}
,{
  "title": "Molding from paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p053r_a4/",
  "activities": ["molding"],
  "purposes": ["making"],
  "excerpt": "053r Molding from paper Over hot ashes, boil some cotton in aqua fortis mixed with sal ammoniac like aqua regia...."
}
,{
  "title": "Almond trees, apricot trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p053r_a5/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "053r Almond trees, apricot trees They grow quite straight if they are grafted. And every kind of tree [whose fruit..."
}
,{
  "title": "Silkworms",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p053v_1/",
  "activities": ["producing silk"],
  "purposes": ["observation"],
  "excerpt": "053r Silkworms They are produced from grain, that is eggs, which are sold by the ounce, which is commonly sold..."
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p054v_1/",
  "activities": ["drying"],
  "purposes": ["advice"],
  "excerpt": "054v &gt; Figure &gt; To dry jams that are [not?] liquid, have an open tub pierced on each side with..."
}
,{
  "title": "To lead a horse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p054v_2/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "054v To lead a horse One has to give it sweet bread and it will recognize the one who will..."
}
,{
  "title": "Dogs",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p054v_3/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "054v Dogs To keep them from biting, it is good to have pitch balls, formed like those of cobblers, to..."
}
,{
  "title": "Boots of hay",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p054v_4/",
  "activities": [],
  "purposes": ["advice","making"],
  "excerpt": "054v Boots of hay Lacking boots, you can make a rope out of hay and wrap it around your legs,..."
}
,{
  "title": "To disguise a horse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p054v_5/",
  "activities": [],
  "purposes": ["application","advice"],
  "excerpt": "054v To disguise a horse Cut his ears and tail and, with burning hay, singe the hair on his head..."
}
,{
  "title": "To shoot a gun without noise",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p055r_1/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "055r To shoot a gun without noise Warm up the barrel and close the lumiere d’embas, and take a piece..."
}
,{
  "title": "Dipping for a bullet that will reach far away and will compromise the healing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p055r_2/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "055r Dipping for a bullet that will reach far away and will compromise the healing Mix some suint and strong..."
}
,{
  "title": "Against wounds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p055r_3/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "055r Against wounds Hurt a chicken or a dog to test and put some sap and ground herb which is..."
}
,{
  "title": "To kill someone with a horrible poison spread on a board over which the person walks or on stirrups",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p055r_4/",
  "activities": ["poisoning"],
  "purposes": ["making"],
  "excerpt": "055r To kill someone with a horrible poison spread on a board over which the person walks or on stirrups..."
}
,{
  "title": "Another for waters",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p055v_1/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "     055v      \n\nAnother for waters\n\nToad in a pot, with quicklime, who will consume all this powder, next and.\n\n"
}
,{
  "title": "Damascus steel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p055v_2/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "055v Damascus steel Distil some worms on one side &amp; some horseradish leaf on the other &amp; mix these two..."
}
,{
  "title": "To know one's course in open sea",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p055v_3/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "055v To know one’s course in open sea Soak a piece of cloth in oil, then attach it to the..."
}
,{
  "title": "For casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p055v_4/",
  "activities": ["casting"],
  "purposes": ["advice","making"],
  "excerpt": "055v For casting Chalk most recently drawn from the quarry is good for lead. But do not wet nor crush..."
}
,{
  "title": "Excellent temper for breastplates",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p056r_a1/",
  "activities": ["tempering"],
  "purposes": ["making"],
  "excerpt": "056r Excellent temper for breastplates Have the clearest and the most running river water you can, and heat it up..."
}
,{
  "title": "Varnish for tempera",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p056r_a2/",
  "activities": ["varnishing"],
  "purposes": ["making"],
  "excerpt": "056r Varnish for tempera You can make tempera marble with lacquer or rose of Ghent and chalk. Once dry, glaze..."
}
,{
  "title": "To paint",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p056v_1/",
  "activities": ["painting"],
  "purposes": ["advice"],
  "excerpt": "056v To paint The lacquer and rosette from Ghent and elsewhere lose their color and die in contact with the..."
}
,{
  "title": "Tanner",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p057v_1/",
  "activities": ["tanning"],
  "purposes": ["obeservation"],
  "excerpt": "057v Tanner Tanners use small skins of lambs and young goats nearly as delicate as parchments and they keep them..."
}
,{
  "title": "Painter",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p057v_2/",
  "activities": ["coloring"],
  "purposes": ["obeservation"],
  "excerpt": "057v Painter Good crayons are not made with glue but with women’s milk. Images made of card have to be..."
}
,{
  "title": "Blacks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p058v_1/",
  "activities": [],
  "purposes": ["obeservation"],
  "excerpt": "058v Blacks Coal black, ordinary black lead black, burnt ivory black, peaches stones black, black smoke, black light, burnt oxes’..."
}
,{
  "title": "Shadows",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p058v_2/",
  "activities": ["painting"],
  "purposes": ["obeservation"],
  "excerpt": "058v Shadows When you are making a painting with several persons shadows as well as skins have to be different..."
}
,{
  "title": "Frescoes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p058v_3/",
  "activities": [],
  "purposes": ["obeservation"],
  "excerpt": "058v Frescoes Azure is not good for that but [illegible] and you have to work with long brushes. Frescoes cannot..."
}
,{
  "title": "Azure",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p058v_4/",
  "activities": [],
  "purposes": ["obeservation"],
  "excerpt": "058v Azure Turpentine oil makes it very beautiful, try some palma christi seed oil. Nut oil in Flanders costs at..."
}
,{
  "title": "Brushes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p058v_5/",
  "activities": [],
  "purposes": ["obeservation"],
  "excerpt": "058v Brushes When the color has dried inside them and you want to clean them soak them in some spike..."
}
,{
  "title": "Shadows",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p059r_1/",
  "activities": [],
  "purposes": ["observation"],
  "excerpt": "059r Shadows First shadows which are closer to the daylight have to be light and very faint then the last..."
}
,{
  "title": "Azure",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p059r_2/",
  "activities": [],
  "purposes": ["observation","advice"],
  "excerpt": "059r Azure Azure is more beautiful when on the painting it has soaked up some nut oil with which it..."
}
,{
  "title": "Painting weapons",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p059v_1/",
  "activities": [],
  "purposes": ["advice","observation"],
  "excerpt": "059v Painting weapons Black charcoal mixed with white lead is very appropriate for painting weapons, also mixing in a little..."
}
,{
  "title": "Painting crepe",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p059v_2/",
  "activities": ["painting"],
  "purposes": ["advice"],
  "excerpt": "059v Painting crepe First you need to make a greyish background using charcoal black mixed with white lead and a..."
}
,{
  "title": "Folds in clothing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p059v_3/",
  "activities": ["observation"],
  "purposes": ["advice"],
  "excerpt": "059v Folds in clothing You must take care not to represent any folds falsely, but rather imitate natural effects. Thick..."
}
,{
  "title": "Siccatives",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p059v_4/",
  "activities": ["observation"],
  "purposes": ["advice"],
  "excerpt": "059v Siccatives White lead and massicot are most siccative, nevertheless they need a good two days. If you want to..."
}
,{
  "title": "Double layers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p059v_5/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "     059v      \n\nDouble layers\n\nAzures, flesh tones and reds are applied twice. Other colors are not.\n\n"
}
,{
  "title": "Mending cracks in a panel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p059v_6/",
  "activities": ["mending"],
  "purposes": ["advice"],
  "excerpt": "059v Mending cracks in a panel If a painted panel breaks you can glue it well on the reverse, but..."
}
,{
  "title": "Skin colors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_1/",
  "activities": ["color making"],
  "purposes": ["making"],
  "excerpt": "061r Annotations: Painting Skin and Shadows 'a destrempe,' fols 93v, fol. 65r and fol. 66r (Nisse) Skin colors It is..."
}
,{
  "title": "Making things round",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_2/",
  "activities": ["painting"],
  "purposes": ["making"],
  "excerpt": "061r Making things round If you want to model well, soften round things by rounding them off with the brush..."
}
,{
  "title": "White lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_3/",
  "activities": ["painting"],
  "purposes": ["observation"],
  "excerpt": "061r White lead Without this, you can’t work on a small scale for which it is necessary to soften with..."
}
,{
  "title": "Lights",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_4/",
  "activities": ["painting"],
  "purposes": ["making"],
  "excerpt": "061r Lights Your brush shows it to you by making some shadow which must always follow the back of your..."
}
,{
  "title": "Water to make light for painters",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061v_1/",
  "activities": ["painting"],
  "purposes": ["making"],
  "excerpt": "061v Water to make light for painters Distill some vine water and put it into a big bottle. Put your..."
}
,{
  "title": "Chassis used by Germans",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061v_2/",
  "activities": ["painting"],
  "purposes": ["observation"],
  "excerpt": "061v Chassis used by Germans Germans who work in small scale make ‘chassis” not of glass but of canvas oiled..."
}
,{
  "title": "Azure enamel with oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061v_3/",
  "activities": ["making color","applying color"],
  "purposes": [],
  "excerpt": "061v Azure enamel with oil One must choose the finest possible, for if it is coarse one cannot work in..."
}
,{
  "title": "Grinding colors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061v_4/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "061v Grinding colors A slab of glass one inch thick is more appropriate than anything else for grinding colours neatly,..."
}
,{
  "title": "Perspectives",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062r_1/",
  "activities": ["painting perspective"],
  "purposes": ["advice"],
  "excerpt": "062r Perspectives Painting perspectives in oil takes a long time because of the many lines that need to be drawn..."
}
,{
  "title": "Ocher",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062r_2/",
  "activities": [],
  "purposes": [],
  "excerpt": "     062r      \n\nOcher\n\nThis is used for faces, hair, skulls and rocks. \n.\n"
}
,{
  "title": "Distant people and animals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062r_3/",
  "activities": [],
  "purposes": [],
  "excerpt": "062r Distant people and animals First one roughs them out in gray or in purple, which is made of azure..."
}
,{
  "title": "Drawing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062r_4/",
  "activities": [],
  "purposes": [],
  "excerpt": "062r Drawing After you have primed your panel and scraped it with a knife to make it quite even, you..."
}
,{
  "title": "Portraits",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062v_1/",
  "activities": [],
  "purposes": [],
  "excerpt": "062v Portraits To become an artist, it is necessary to draw by eye, without compass or ruler. Masters do not..."
}
,{
  "title": "Perspective",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p062v_2/",
  "activities": [],
  "purposes": [],
  "excerpt": "062v Perspective In order to tell where the vanishing point is one must lay a ruler over the lines, and..."
}
,{
  "title": "To bronze in white",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_1/",
  "activities": ["varnish making"],
  "purposes": ["making"],
  "excerpt": "074r To bronze in white Take looking—glass tin and put it to soak in gum water, and pound it in..."
}
,{
  "title": "To make vermillion",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_2/",
  "activities": ["pigment making"],
  "purposes": ["making"],
  "excerpt": "074r To make vermillion Take two pounds of sulphur, and melt it, and add two pounds of mercury to it...."
}
,{
  "title": "To make varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_3/",
  "activities": ["varnish making"],
  "purposes": ["making"],
  "excerpt": "074r To make varnish Take one pound of linseed oil, and then put it in a pot of earth mixed..."
}
,{
  "title": "To make red varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_1/",
  "activities": ["varnish making"],
  "purposes": ["advice"],
  "excerpt": "074v To make red varnish Take vermillion, and let it soak in quite light gum water, like the other, and..."
}
,{
  "title": "To make yellow varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_2/",
  "activities": ["varnish making"],
  "purposes": ["making"],
  "excerpt": "074v To make yellow varnish Take some gum arabic and let it soak in water, then take some well beaten..."
}
,{
  "title": "Recipe for white gum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_3/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "074v Recipe for white gum Take white wax and ceruse and a little fine pitch, very well pounded together, and..."
}
,{
  "title": "Green gum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_4/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "     074v      \n\n\nGreen gum\n\nTake green wax with a little verdigris and make it melt as said above.\n\n"
}
,{
  "title": "Red gum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075r_1/",
  "activities": ["gum making"],
  "purposes": ["making"],
  "excerpt": "     075r      \n\n\nRed gum\n\nTake red wax of vermillion and a little resin pitch, and make as described above.\n\n"
}
,{
  "title": "Bronze of copper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075r_2/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "075r Bronze of copper Take some verdigris and clear glue and grind them together. Then apply a layer over your..."
}
,{
  "title": "Ground gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075r_3/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "075r Ground gold Take some fine gold and put it on a very clean marble slab. Add aqua fortis and..."
}
,{
  "title": "Making grey wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_1/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "075v Making grey wood It is necessary to take three demi—sestiers of iron filings per 18 deniers of rock alum,..."
}
,{
  "title": "Gilding wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_2/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "075v Gilding wood First of all it is necessary to apply a coat of very clear glue; and when it..."
}
,{
  "title": "Gilding with ground gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_3/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "075v Gilding with ground gold Take a coquille of gold, soak it with gum water before you intend to work,..."
}
,{
  "title": "Recipe for coloring all wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_4/",
  "activities": ["embellishing"],
  "purposes": ["application"],
  "excerpt": "075v Recipe for coloring all wood To make it black, the wood needs to be soaked in olive oil and..."
}
,{
  "title": "Making Wood Green",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p076r_1/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "076r Making Wood Green Take one quart of white vinegar, one ounce of green, and one ounce of rock alum...."
}
,{
  "title": "Making Wood Blue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p076r_2/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "076r Making Wood Blue Take one quart of urine, as above, one ounce of alum, and two drams of sal..."
}
,{
  "title": "For Making Purple Wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p076r_4/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "076r For Making Purple Wood Take one quart of urine and one ounce of alum and ten drams of sal..."
}
,{
  "title": "For Making Yellow Wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p076r_5/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "076r For Making Yellow Wood Take urine, as above, and two ounces of woad, one ounce of fustet and two..."
}
,{
  "title": "To make a very beautiful and inexpensive golden color",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p076v_1/",
  "activities": ["colormaking"],
  "purposes": ["making"],
  "excerpt": "076v To make a very beautiful and inexpensive golden color First of all take a very yellow orange peel and..."
}
,{
  "title": "Making black gommiche",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p076v_2/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "076v Making black gommiche Take some glue and dilute it with vinegar and melt it until it is very clear...."
}
,{
  "title": "For white gommiche",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p076v_3/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "076v For white gommiche Take white wax and ceruse, melt them together and apply the mixture to wood or to..."
}
,{
  "title": "Gilding iron or tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p076v_4/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "076v Gilding iron or tin First it is necessary to wash whatever one wants to gild in wine lees, and..."
}
,{
  "title": "Against redness of the face",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p077r_a2/",
  "activities": ["therapeutics"],
  "purposes": ["making"],
  "excerpt": "077r Against redness of the face Make a small lead cap and wear it overnight. Excellent secret. Try a lead..."
}
,{
  "title": "Fatty earth",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p077r_a3/",
  "activities": ["molding"],
  "purposes": ["making"],
  "excerpt": "077r Fatty earth Founders use [this earth] to make the handles of their bells. Before it [the earth] is used,..."
}
,{
  "title": "Recipe for making bronze and many kind of varnishes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p077r_a4/",
  "activities": ["varnish making"],
  "purposes": ["making"],
  "excerpt": "077r Recipe for making bronze and many kind of varnishes To make an excellent varnish with clear water which you..."
}
,{
  "title": "Other approved varnishes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p077v_1/",
  "activities": ["varnish making"],
  "purposes": ["making"],
  "excerpt": "077v Other approved varnishes Take two ounces of linnen oil, and two ounces of petrol oil, and two ounces of..."
}
,{
  "title": "Another varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p077v_2/",
  "activities": ["varnish making"],
  "purposes": ["making"],
  "excerpt": "077v Another varnish Take petrol oil and spike lavender oil, in the same even quantity, and mix them together with..."
}
,{
  "title": "Another varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p077v_3/",
  "activities": ["varnish making"],
  "purposes": ["making"],
  "excerpt": "077v Another varnish Take one ounce of spike lavender oil and of sandarac and make 078r melt the drugs in..."
}
,{
  "title": "Another varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p078r_1/",
  "activities": ["varnish making"],
  "purposes": ["making"],
  "excerpt": "078r Another varnish Take one ounce of spike lavender oil and heat it over coals; take a half ounce of..."
}
,{
  "title": "To make red varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p078r_2/",
  "activities": ["varnish making"],
  "purposes": ["making"],
  "excerpt": "078r To make red varnish Take vermillion and dilute it with gum water as well as with other water and..."
}
,{
  "title": "To make green wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p078r_3/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "078r To make green wood Take very strong vinegar, salt, and rainwater, and mix it together with verdigris, and put..."
}
,{
  "title": "To make bronze the color of azur",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p078v_1/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "078v To make bronze the color of azur Take rock alum and antimony, with twice as much rock alum as..."
}
,{
  "title": "To make bronze the color of gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p078v_2/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "078v To make bronze the color of gold Take copper filings, ochre, gum, and alum, grind it all together in..."
}
,{
  "title": "To make bone or horn green",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p078v_3/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "078v To make bone or horn green Take verdigris and soak it in strong vinegar, and soak your bone or..."
}
,{
  "title": "To make it bronze",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p078v_4/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "078v To make it bronze Take pin and other brass filings, put them together, and grind it on marble, grind..."
}
,{
  "title": "Mixture for printers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p079_4/",
  "activities": ["therapeutics"],
  "purposes": ["application"],
  "excerpt": "079v Mixture for printers Apply a coat of antimony, and pulverize on a coat of latten, old metal scrapings, or..."
}
,{
  "title": "Mading gray wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p079r_1/",
  "activities": ["embelleshing"],
  "purposes": ["making"],
  "excerpt": "079r Mading gray wood Take some sandstone powder, __ __ ___, iron filings, scrap iron, alum, du noir de courroieur,..."
}
,{
  "title": "Making water against illness of the eyes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p079r_2/",
  "activities": ["therapeutics"],
  "purposes": ["making"],
  "excerpt": "079r Making water against illness of the eyes Take some white copperas, heat lightly over fire, then grind it to..."
}
,{
  "title": "Making gold colored bronze",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p079r_3/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "079r Making gold colored bronze Take six ounces of tin […], six ounces of natural sulphur, and sal ammoniac. Melt..."
}
,{
  "title": "Making varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p079v_1/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "079v Making varnish Take some mastic, @sandarac, gum arabic, and aspic oil, as much of one as the other, and..."
}
,{
  "title": "Antidote against the smoke of metals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p079v_2/",
  "activities": ["therapeutics"],
  "purposes": ["application"],
  "excerpt": "079v Annotations: Pain, Ostie, Rostie: Bread in Early Modern Europe Antidote against the smoke of metals In the morning, take..."
}
,{
  "title": "Tin for casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p079v_3/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "079v Tin for casting They use common tin, which is the one that pewterers use for plates, which is composed..."
}
,{
  "title": "Very hard white stucco",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080r_2/",
  "activities": ["embellishign"],
  "purposes": ["making"],
  "excerpt": "     080r      \n\n\nVery hard white stucco\n\nWhite wax, turpentine of Venice, eggshell, and ceruse.\n\n"
}
,{
  "title": "Mortar",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080r_3/",
  "activities": [],
  "purposes": [],
  "excerpt": "080r Mortar They make them of fine material and fine copper in the shape of reinforced barrel, and which can..."
}
,{
  "title": "Founders of small tin work",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_a1/",
  "activities": ["metalwork"],
  "purposes": ["advice"],
  "excerpt": "080v Annotations: Founders of Small Tin Work Founders of small tin work They usually cast from soft solder the things..."
}
,{
  "title": "Earth for moulding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p081_a2/",
  "activities": ["molding"],
  "purposes": ["advice"],
  "excerpt": "081r Earth for moulding Sheath maker’s earth or the one potters use to blanche the pots to make the lead..."
}
,{
  "title": "Sand work",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p081r_a1/",
  "activities": ["molding"],
  "purposes": ["advice"],
  "excerpt": "081r Sand work Some excellent sand is found for use with lead, tin and copper close to the hill of..."
}
,{
  "title": "Plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p081r_a3/",
  "activities": ["molding"],
  "purposes": ["advice"],
  "excerpt": "081r Plaster It needs to be well cooked, which you will recognize when cooking it in an iron or metal..."
}
,{
  "title": "Carton",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p081r_a4/",
  "activities": ["molding"],
  "purposes": ["making"],
  "excerpt": "081r Carton It is necessary to take paper from Florence, which is the finest, and crush it and and soak..."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p081v_a1/",
  "activities": ["sandmold making"],
  "purposes": ["advice"],
  "excerpt": "018v Sand Brick alone, quite finely sifted, and rubbed together, is good for casting lead and copper, when diluted with..."
}
,{
  "title": "Make copper and latten flow",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p081v_a2/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "081v Make copper and latten flow At the end of the casting, as it is very hot, add some salt..."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p081v_a3/",
  "activities": ["sandmold making"],
  "purposes": ["advice"],
  "excerpt": "081v Sand Calcined black pebbles from the river are good to use for lead. But they are weakened if used..."
}
,{
  "title": "Cast of the frame",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p081v_a4/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "081v Cast of the frame It is good to make it with bow wood. Turn it in order to make..."
}
,{
  "title": "Copper heat",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p082r_a1/",
  "activities": ["metalwork"],
  "purposes": ["observation"],
  "excerpt": "082r Copper heat It is hot enough when you see it is clean and smooth on top of its impurity...."
}
,{
  "title": "Box mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p082r_a2/",
  "activities": ["molding"],
  "purposes": ["advise"],
  "excerpt": "082r Box mold Iron and copper swell if the metal touches it [the box mold], and the wood warps. Thus,..."
}
,{
  "title": "egg white",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p082r_a3/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "082r Annotations: Sands and Binders egg white Egg white gives strength to sand so that many casts can be made..."
}
,{
  "title": "Watchmakers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p082r_a4/",
  "activities": ["watchmaking"],
  "purposes": ["observation"],
  "excerpt": "082r Watchmakers To distribute the teeth proportionately on their wheels, they do not use a compass because there is no..."
}
,{
  "title": "Casting lead in lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p082v_1/",
  "activities": ["casting"],
  "purposes": ["advise"],
  "excerpt": "082v Casting lead in lead Some make their caves with lead, they make them thick, and then cast lead in..."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p082v_3/",
  "activities": ["sand making"],
  "purposes": ["advise"],
  "excerpt": "     082v      \n\n\nSand\n\nIf sand is too fat it should be reheated and sifted again.\n\n"
}
,{
  "title": "Ways of bronze casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p082v_4/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "082v Ways of bronze casting Laiton de potin, which is the most acid, moulds neater than latten of cassole according..."
}
,{
  "title": "Sand for lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p083r_a1/",
  "activities": ["sand making"],
  "purposes": ["making"],
  "excerpt": "083r Sand for lead Recipe: Take grey soot from the silversmiths’ furnace, quick lime, and flour. Moisten according to [the..."
}
,{
  "title": "Sand for copper medals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p083r_a2/",
  "activities": ["sand making"],
  "purposes": ["making","advice"],
  "excerpt": "083r Sand for copper medals Recipe: Take hat felt burnt on a covered fire, iron dross, and burnt bone, all..."
}
,{
  "title": "Other sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p083r_a3/",
  "activities": ["sandmold making"],
  "purposes": ["making"],
  "excerpt": "083r Other sand Take charcoal made from vine shoots and clay earth, both well searced, and mix them with well—beaten..."
}
,{
  "title": "Other sand for use with lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p083r_a4/",
  "activities": ["sand making"],
  "purposes": ["making"],
  "excerpt": "083 Other sand for use with lead Recipe: Take finely crushed slate and pumice stone mixed together. Calcinate them three..."
}
,{
  "title": "Other sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p083r_a5/",
  "activities": ["sand making"],
  "purposes": ["making"],
  "excerpt": "083r Other sand Recipe: Take a tile that has not been cooked too much, grind it and diluted it in..."
}
,{
  "title": "Excellent sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p083r_a6/",
  "activities": ["sandmold making"],
  "purposes": ["making"],
  "excerpt": "083r Annotations: Alabaster Sand Excellent sand Burn alabaster in a crusol under charcoal fire until it turns into powder. Once..."
}
,{
  "title": "Excellent type of molding with water",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p083v_a1/",
  "activities": ["molding"],
  "purposes": ["making"],
  "excerpt": "083v Excellent type of molding with water Dissolve some laxunge de verre in a moist place and then pour this..."
}
,{
  "title": "Molding one part in relief and one hollow side",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p083v_a2/",
  "activities": ["molding"],
  "purposes": ["advice"],
  "excerpt": "083v Molding one part in relief and one hollow side It is necessary to cast two parts of very clean..."
}
,{
  "title": "Bellow",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p083v_a3/",
  "activities": ["casing"],
  "purposes": ["advice"],
  "excerpt": "083v Bellow at left middle margin of folio 083v To cast with a bellows furnace, cast the hottest you can. Do not..."
}
,{
  "title": "Impromptu mask",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p084r_a1/",
  "activities": ["mask making"],
  "purposes": ["making"],
  "excerpt": "084r Impromptu mask Mold some paper and put it on the face of somebody who is making an ugly grimace,..."
}
,{
  "title": "Magistry",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p084r_a3/",
  "activities": ["making a liquid binder for casting sand"],
  "purposes": ["making"],
  "excerpt": "084r Annotations: Magistry Magistry Dissolve rock salt or sandever that you have pulverized finely and placed on a marble slab..."
}
,{
  "title": "Flour",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p084r_a4/",
  "activities": ["flour grinding"],
  "purposes": ["making"],
  "excerpt": "     084r      \n\n\nFlour\n\nGround during Advent lasts the whole year.\n"
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p084v_a1/",
  "activities": ["sandmold making"],
  "purposes": ["making","advice"],
  "excerpt": "084r Annotations: Ox Bone, Wine, and Elm Root Sandcasting Sand I tried the hoof of an ox, quite burned, pulverized..."
}
,{
  "title": "Eau Magistra",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p084v_a2/",
  "activities": ["making a liquid binder for casting sand"],
  "purposes": ["advice"],
  "excerpt": "084v Annotations: Calcined Oysters Annotations: Sands and Binders Eau Magistra Some people think that salt water is not good, because..."
}
,{
  "title": "Lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p084v_a3/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "084v Lead For casting, there is only soft lead that can be cast at a high temperature. And soft tin...."
}
,{
  "title": "Sand, for the most excellent lead of all, for large and small reliefs",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p084v_a4/",
  "activities": ["sand making"],
  "purposes": ["making","advice"],
  "excerpt": "084v Sand, for the most excellent lead of all, for large and small reliefs I took white lead and crushed..."
}
,{
  "title": "Green varnish for copper medals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p085r_a1/",
  "activities": ["varnish making"],
  "purposes": ["making"],
  "excerpt": "085r Green varnish for copper medals After casting them neatly, cover them with glass salts, which we use for sand,..."
}
,{
  "title": "Glue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p085r_a2/",
  "activities": ["glue making"],
  "purposes": ["advice"],
  "excerpt": "     085r      \n\n\nGlue\n\nThe Flemish mend their earthenware pots with or colés, that is to say massicot, minium and varnish.\n\n"
}
,{
  "title": "Casters",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p085v_a1/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "085v Casters They mix beaten egg white with earth of which they make the first layer of the crown of..."
}
,{
  "title": "Mortars",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p085v_a2/",
  "activities": ["tool making"],
  "purposes": ["advice"],
  "excerpt": "085v Mortars They should be of the finest material possible. In the same way, it is better to use copper..."
}
,{
  "title": "Sand from a mine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p085v_a3/",
  "activities": ["sand making"],
  "purposes": ["advice"],
  "excerpt": "085v Sand from a mine It wants to be well recooked for big metal objects. Some people burn it inside..."
}
,{
  "title": "Sand Experiments",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p085v_a4/",
  "activities": ["casting"],
  "purposes": ["making","advice"],
  "excerpt": "085v Sand Experiments X I have tested sand of Th{oulous}e, and after seeing it well recooked two times in a..."
}
,{
  "title": "Excellent sand for lead, tin and copper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p086v_a1/",
  "activities": ["sandmold making"],
  "purposes": ["making","advice"],
  "excerpt": "086v Excellent sand for lead, tin and copper D Since, I molded with burned bone, dross of iron &amp; burned..."
}
,{
  "title": "Sand of Toulouse",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p087r_a1/",
  "activities": ["sand sourcing"],
  "purposes": ["observation"],
  "excerpt": "087r Sand of Toulouse The sand generally considered good is the one found in a vineyard near Pech—David. But the..."
}
,{
  "title": "Sand, salte, and burned earth",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p087v_a1/",
  "activities": ["sand molding"],
  "purposes": ["advice"],
  "excerpt": "087v Sand, salte, and burned earth Sand, when overheated, does not hold as well. Slate is baked and will mold..."
}
,{
  "title": "Magistry",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p087v_a3/",
  "activities": [],
  "purposes": [],
  "excerpt": "087v Magistry Founders harvest the roots of a young elm when it is sappy, and boil it in wine, or..."
}
,{
  "title": "Vine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "088r Vine As with a bramble, it can be planted on both sides. And those who plant the larger side..."
}
,{
  "title": "Mortars",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a2/",
  "activities": [],
  "purposes": [],
  "excerpt": "088r Mortars The fine copper mortars do not throw any flames, as long as the iron pestle is not tempered...."
}
,{
  "title": "Varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a3/",
  "activities": [],
  "purposes": [],
  "excerpt": "088r Varnish Turpentine oil: turpentine &amp; good eau de vie, to dry it out; heat it without mixing on the..."
}
,{
  "title": "Grafting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a4/",
  "activities": [],
  "purposes": [],
  "excerpt": "088r Grafting One knows from experience that the young shoot that is enters into the incision on the sunny side..."
}
,{
  "title": "Baker",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a5/",
  "activities": [],
  "purposes": [],
  "excerpt": "088r Baker Dust guards wheat against being worm—eaten. And to clean it well when it is stained &amp; like rust,..."
}
,{
  "title": "Looking-glass tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088r_a6/",
  "activities": [],
  "purposes": [],
  "excerpt": "     088r      \n\nLooking—glass tin\n\nIt makes material whiter.\n\n"
}
,{
  "title": "Sand from pulverised rock salt and sand from a minium finely ground on marble",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088v_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "088v Sand from pulverised rock salt and sand from a minium finely ground on marble After they have been dryly..."
}
,{
  "title": "Mineral sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p088v_a2/",
  "activities": [],
  "purposes": [],
  "excerpt": "088v Mineral sand It does not matter if the sand color is white or yellow. Above all it the sand..."
}
,{
  "title": "Powder of ox bone and rock salt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089r_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "089r Annotations: Ox Bone and Rock Salt Powder of ox bone and rock salt I pulverised them separately and ground..."
}
,{
  "title": "Reheating or wiping a box mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089r_a2/",
  "activities": [],
  "purposes": [],
  "excerpt": "089r Reheating or wiping a box mold Always arrange the most delicate parts, like faces or handles, so that nothing..."
}
,{
  "title": "Natural sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089r_a3/",
  "activities": [],
  "purposes": [],
  "excerpt": "     089r      \n\nNatural sand\n\nThis should not be reheated for lead and tin, it is better all new and fresh.\n\n"
}
,{
  "title": "Ammonia salt and alabaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089v_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "089v Ammonia salt and alabaster Dry ammonia salt, ground on a marble slab, molds very cleanly and is easily removed..."
}
,{
  "title": "White glassmaker's sand mixed with ammonia salt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p089v_a2/",
  "activities": [],
  "purposes": [],
  "excerpt": "089v White glassmaker’s sand mixed with ammonia salt You can find this sand in Cominge, near the town Aurignac. This..."
}
,{
  "title": "Sal ammoniac and iron dross",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090r_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "090r Sal ammoniac and iron dross I pulverized sal ammoniac, previously well dried in a hot bronze mortar over heat...."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090r_a2/",
  "activities": [],
  "purposes": [],
  "excerpt": "090r Sand Molders from Foix who cast their medals sideways use crocum ferri and calcinated slate. It is used for..."
}
,{
  "title": "Every kind of sand can be made useful",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090r_a3/",
  "activities": [],
  "purposes": [],
  "excerpt": "090r Every kind of sand can be made useful Artisans who do big works, and who need to search for..."
}
,{
  "title": "Potters' clay",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090v_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "090v Potters’ clay Grind it in a mortar mustard mill with water, and it will become as impalpable as possible...."
}
,{
  "title": "Orange trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p090v_a2/",
  "activities": [],
  "purposes": [],
  "excerpt": "090v Orange trees In Italy, particularly in the coldest areas like Lombardia, people plant the orange trees inside squared wood..."
}
,{
  "title": "Grafting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p091r_1/",
  "activities": [],
  "purposes": [],
  "excerpt": "091r Grafting Any tree that has a large pith will be hard to be graft from, because the cutting is..."
}
,{
  "title": "Molding with cuttlefish bone",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p091r_2/",
  "activities": [],
  "purposes": [],
  "excerpt": "091r Molding with cuttlefish bone Pay attention to keep the bones in a dry place, because they are very prone..."
}
,{
  "title": "Sand mixture easy to melt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092r_1/",
  "activities": [],
  "purposes": [],
  "excerpt": "092r Sand mixture easy to melt One â„¥ of part soft tin, one part fine lead, one part looking—glass tin..."
}
,{
  "title": "Molding hollow on one side and in relief on the other",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092r_2/",
  "activities": [],
  "purposes": [],
  "excerpt": "092r Annotations: OneSided Hollow Cast Medals Molding hollow on one side and in relief on the other And for this..."
}
,{
  "title": "Potin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092r_3/",
  "activities": [],
  "purposes": [],
  "excerpt": "092r Potin Potin, once cast very hot, runs and drips like tin. But the medal becomes whitish and immediately casts..."
}
,{
  "title": "Molding statues",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092r_4/",
  "activities": [],
  "purposes": [],
  "excerpt": "     092r      \n\nMolding statues\n\nHalf founderâ€™s earth, which founders use, and half clay earth renders very neatly.\n\n"
}
,{
  "title": "Sand of river tellins and mussels",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092v_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "092v Sand of river tellins and mussels The long shells that can be found in rivers of fresh water, being..."
}
,{
  "title": "Freezing mercury",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092v_a2/",
  "activities": [],
  "purposes": [],
  "excerpt": "092v Freezing mercury It can be frozen, as I tested, letting it boil one or two hours in a rather..."
}
,{
  "title": "Mixture",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p092v_a3/",
  "activities": [],
  "purposes": [],
  "excerpt": "092v Mixture Pure tin, frozen mercury, smells like tin. Iced tin, pure lead, as much of one as of the..."
}
,{
  "title": "Olives",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093r_a1/",
  "activities": [],
  "purposes": [],
  "excerpt": "093r Olives The olives go bad if you do not refresh their salt water once a month, do not touch..."
}
,{
  "title": "Country folk's observation",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093r_a2/",
  "activities": [],
  "purposes": [],
  "excerpt": "093r Country folk’s observation When it freezes on Palm Sunday, it will freeze every month of the year When the..."
}
,{
  "title": "Grafts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093r_a3/",
  "activities": [],
  "purposes": [],
  "excerpt": "093r Grafts Do not use a graft from old wood, because it never makes a beautiful tree. Leave only two..."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093r_a4/",
  "activities": [],
  "purposes": [],
  "excerpt": "093r Sand The white ash of all kinds of wood, which still sticks to the wood while burning, and which..."
}
,{
  "title": "Sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093r_a5/",
  "activities": [],
  "purposes": [],
  "excerpt": "093r Sand Very fine pulverized soot molds and removes easily from the mold. The best soot, which is greasy and..."
}
,{
  "title": "Faces painted with distemper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093v_1/",
  "activities": [],
  "purposes": [],
  "excerpt": "093v Annotations: Painting Skin and Shadows a destrempe, fol. 65r, 66r, 93v (Nisse) Faces painted with distemper Because colors painted..."
}
,{
  "title": "Azure",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093v_2/",
  "activities": [],
  "purposes": [],
  "excerpt": "093v Annotations: Azure Enamels, fol. 11r, 59r, 61v, 93v (Chang, Clemens) Azure Azur desmail always wants to be cleaned because..."
}
,{
  "title": "Purple and lake",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p093v_3/",
  "activities": [],
  "purposes": [],
  "excerpt": "093v Purple and lake It is made of azure and lake which is also tested on the palette with white...."
}
,{
  "title": "Burnisher",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p094r_1/",
  "activities": [],
  "purposes": [],
  "excerpt": "094r Burnisher The different parts of a sword are the handle, [and] the sheath of the sword. What comes next..."
}
,{
  "title": "Provisions for the work of Colchos",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_1/",
  "activities": ["colchos"],
  "purposes": ["making"],
  "excerpt": "102r Provisions for the work of Colchos 7 limbecks of glasse 2 lbs. of ☿ One measure of coarse salt..."
}
,{
  "title": "For the furnace",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_2/",
  "activities": ["colchos"],
  "purposes": ["making"],
  "excerpt": "102r For the furnace A chest with a ten inch wide square stone, and of a one—foot thickness, pierced in..."
}
,{
  "title": "Royal cement",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_3/",
  "activities": ["colchos"],
  "purposes": ["making"],
  "excerpt": "     102r      \n\n\nRoyal cement\n\n\n  \n    One pound and a half of vitriol\n  \n  \n    As much saltpeter\n  \n  \n    As much rock alum\n  \n\n\n"
}
,{
  "title": "Glass vessel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_4/",
  "activities": ["colchos"],
  "purposes": ["making"],
  "excerpt": "102r Glass vessel The glass vessel must be either pear—shaped or round pyramid—shaped, of the same thickness as the small..."
}
,{
  "title": "Painting on crystal or glass",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102v_1/",
  "activities": ["painting"],
  "purposes": ["making","observation"],
  "excerpt": "102v Annotations: Tracing a history on glass, fol. 39v (Zhao) Painting on crystal or glass They paint without any traces..."
}
,{
  "title": "Infusion of anthos or rosemary",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102v_2/",
  "activities": ["infusing"],
  "purposes": ["making"],
  "excerpt": "102v Infusion of anthos or rosemary It is better to cook the flower in August and more suited to oil—making...."
}
,{
  "title": "Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102v_3/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "102v Casting Tin casts better when it is thin and delicate, than when it is thick, because when it is..."
}
,{
  "title": "Excellent burn relief",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103r_1/",
  "activities": ["medicine"],
  "purposes": ["making","advice"],
  "excerpt": "103r Excellent burn relief Heat linseed oil on a light fire, without letting it boil and simmer. But when it..."
}
,{
  "title": "Against dog's gall.",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103r_2/",
  "activities": [],
  "purposes": ["observation","making"],
  "excerpt": "103r Against dog’s gall. The English, who fawn over their dogs owing to the care they take of their livestock,..."
}
,{
  "title": "Enema",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103v_1/",
  "activities": ["medicine"],
  "purposes": ["making","advice"],
  "excerpt": "103v Enema In order for the pipe to not hurt children at all, or those with swollen or protruding hemorrhoidal..."
}
,{
  "title": "Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103v_2/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "103v Casting Tin recoils if thick, therefore it is better to cast it thin and from one piece, to make..."
}
,{
  "title": "To make colors fluid",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103v_3/",
  "activities": ["colormaking"],
  "purposes": ["making"],
  "excerpt": "103v To make colors fluid Mix some vinegar with a bit of bile, put it into a glass bottle, and..."
}
,{
  "title": "Earwax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103v_4/",
  "activities": ["experimentation"],
  "purposes": ["making","observation"],
  "excerpt": "103v Earwax If you take enough with the tip of an ear picker and you sieve it with foam of..."
}
,{
  "title": "Enamels",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p103v_5/",
  "activities": ["enameling"],
  "purposes": ["observation","advice"],
  "excerpt": "103v Annotations: Esmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi) Enamels To well recognize their difference and their..."
}
,{
  "title": "Corroding and dissolving absolutely pure gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104r_a1/",
  "activities": ["metalworking"],
  "purposes": ["making"],
  "excerpt": "104r Corroding and dissolving absolutely pure gold Put it regular salt with aqua fortis into a violl. Let it rest..."
}
,{
  "title": "Engraving on iron",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104r_a2/",
  "activities": ["metalworking"],
  "purposes": ["making"],
  "excerpt": "104r Engraving on iron One ℥ of verdigris and 2 ℥ of coarse salt and a bit of sublimate, or..."
}
,{
  "title": "Good mixture to color gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104r_a3/",
  "activities": ["colormaking"],
  "purposes": ["making"],
  "excerpt": "104r Good mixture to color gold Sulphur and small gravel as much of one as of the other, and the..."
}
,{
  "title": "How to silver plate copper and latten",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104r_a4/",
  "activities": ["metalworking"],
  "purposes": ["making"],
  "excerpt": "104r How to silver plate copper and latten Mold the silver as the gold, and put it in the oven..."
}
,{
  "title": "Enameling a carnelian",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104r_a5/",
  "activities": ["enameling"],
  "purposes": ["making"],
  "excerpt": "104r Annotations: Esmail, fol. 39v, 103v, 104r, 116r, 136r (Chang, Clemens, Shi) Enameling a carnelian Soak some wheat flour in..."
}
,{
  "title": "Against dogs' mange",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104v_a1/",
  "activities": ["medicine"],
  "purposes": ["making"],
  "excerpt": "104v Against dogs’ mange For normal—sized dogs, take half an ℥ of stavesacre, and one ℥ for big dogs, as..."
}
,{
  "title": "For casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104v_a2/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "104v For casting If you’ve got a big piece which does not allow an easy stripping of casting, mold it..."
}
,{
  "title": "Goldsmith",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104v_a3/",
  "activities": ["metalworking"],
  "purposes": ["making","advice"],
  "excerpt": "104v Goldsmith Know what it is to work on spangled garments, it is small pieces of pure silver and of..."
}
,{
  "title": "Spinet playing by itself",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p104v_a4/",
  "activities": ["musical instrument-making"],
  "purposes": ["making"],
  "excerpt": "104v Annotations: Spinet playing by itself, fol. 104v (Hiebert) Spinet playing by itself Make an axle surrounded with wheels pierced..."
}
,{
  "title": "Turtles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_1/",
  "activities": ["animal observation"],
  "purposes": ["observation"],
  "excerpt": "105r Turtles Males have shells that turn down at the end near their tails, and their underbelly shells have lined..."
}
,{
  "title": "Drying colors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_2/",
  "activities": ["colormaking"],
  "purposes": ["making","advice"],
  "excerpt": "     105r      \n\nDrying colors\n\nSoot black and others will not dry in oil unless you add verdigris.\n\n"
}
,{
  "title": "Painting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_3/",
  "activities": ["painting"],
  "purposes": ["making","advice"],
  "excerpt": "105r Painting Colors that have been applied twice are more gritty by themselves, unless they have a binding agent. Otherwise,..."
}
,{
  "title": "Gardening",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_4/",
  "activities": ["gardening"],
  "purposes": ["advice","making"],
  "excerpt": "105r Gardening To graft, it is necessary to take the new growth that was produced within the year by the..."
}
,{
  "title": "Gardening",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_1/",
  "activities": ["gardening"],
  "purposes": ["observation"],
  "excerpt": "105v Gardening It’s not very strange to cultivate in your garden some arnols, because when your soup or broth goes..."
}
,{
  "title": "Fountain",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_2/",
  "activities": ["fountain making"],
  "purposes": ["observation","making"],
  "excerpt": "105v Fountain Recooked plaster runs when mixed with water, which you will see in the next recipe about wet molds...."
}
,{
  "title": "Catching nightingales",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_3/",
  "activities": ["catching animals"],
  "purposes": ["observation","advice","making"],
  "excerpt": "105v Catching nightingales See the 15th folio after this. In order to catch them, you must observe them in real..."
}
,{
  "title": "Nightingale",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_4/",
  "activities": ["keeping animals"],
  "purposes": ["observation","making","advice"],
  "excerpt": "105v Nightingale The iron wire used for its cage must be the thickest possible, so that should it try to..."
}
,{
  "title": "Nightingale",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_5/",
  "activities": ["keeping animals"],
  "purposes": ["observation","advice"],
  "excerpt": "105v Nightingale It will need a cage made in the shape of a barn, like the ones for larks, lined..."
}
,{
  "title": "To cast",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p106r_a1/",
  "activities": ["casting"],
  "purposes": ["making","observation"],
  "excerpt": "106r Annotations: What is 'Spat'? (University of Amsterdam) To cast Asphalt from Germany is the most excellent sand you can..."
}
,{
  "title": "Making gold run for casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p106r_a2/",
  "activities": ["casting","metalworking"],
  "purposes": ["making"],
  "excerpt": "106r Making gold run for casting Because gold cools down very quickly, you have to give it a mixture when..."
}
,{
  "title": "Casting in gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p106v_a1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "106v Casting in gold To cast in gold, crocum ferri is necessary, and more stone alum than in the following..."
}
,{
  "title": "Tiles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p106v_a2/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "106v Tiles at right middle margin of folio 106v those of houses that are outdoors, ones [that are] a bit sandy seem..."
}
,{
  "title": ["Plaster"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p106v_a3/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "106v [Plaster] at middle margin of folio 106v If the plaster is mixed with some dust or is not the hard kind,..."
}
,{
  "title": "Catching lizards and snakes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p107r_a1/",
  "activities": ["catching animals"],
  "purposes": ["advice"],
  "excerpt": "107r Catching lizards and snakes Take a stick, pin a net with a slipknot to the top. Whistle, and move..."
}
,{
  "title": ["Information on casting"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p107r_a2/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "107r [Information on casting] The sand mixture is made of two thirds of ground plaster, reheated as it is said..."
}
,{
  "title": "Spalt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p108r_a1/",
  "activities": ["casting"],
  "purposes": ["making","observation"],
  "excerpt": "108r Spalt Spalt is white like cooked plaster and one can find it in mounds and stones made in long..."
}
,{
  "title": ["Stone alum"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p108v_a1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "108v [Stone alum] Stone alum must be reheated in a pot covered with a tile over a good charcoal fire..."
}
,{
  "title": ["Clay"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p108v_a2/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "108v [Clay] Clay used to surround molds, should be very fat and malleable, and should not be used for anything..."
}
,{
  "title": "Working in rough with wax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109r_1/",
  "activities": ["waxwork"],
  "purposes": ["making"],
  "excerpt": "109r Working in rough with wax When the wax is too hard, one mixes in some turpentine or a bit..."
}
,{
  "title": "Wax for molding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109r_2/",
  "activities": ["molding","waxwork"],
  "purposes": ["making"],
  "excerpt": "109r Wax for molding Since the wax is molten, they have some sulphur in a spoon or crucible and pour..."
}
,{
  "title": "Molding wax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109r_3/",
  "activities": ["molding","waxwork"],
  "purposes": ["making"],
  "excerpt": "109r Molding wax So that your mold takes hold without repelling any surface on a form or figure in wax,..."
}
,{
  "title": "Forge bellows",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109r_4/",
  "activities": [],
  "purposes": ["making","advice"],
  "excerpt": "109r Forge bellows It is better that at the end with the air chamber the bellows be set in some..."
}
,{
  "title": "Molding snakes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109r_5/",
  "activities": ["keeping animals","casting"],
  "purposes": ["making","observation"],
  "excerpt": "109r Molding snakes When you get them for molding, if it is possible, do not remove their teeth if you..."
}
,{
  "title": "Toad",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109v_1/",
  "activities": ["molding","medicine"],
  "purposes": ["observation","advice","making"],
  "excerpt": "109v &lt;span class=\"activity\"&gt;&lt;/span&gt; &lt;span class=\"activity\"&gt;&lt;/span&gt; Toad If by chance you want to mold this ugly animal and if it should..."
}
,{
  "title": "Killing snakes for molding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p109v_2/",
  "activities": ["keeping animals"],
  "purposes": ["advice"],
  "excerpt": "109v Killing snakes for molding Some put a drop of aqua fortis into their mouths, which stupefies them, so that..."
}
,{
  "title": "Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p110r_1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "110r Casting You could cast from already casted things and animals, but it never works as well as from the..."
}
,{
  "title": "Rock and grotto",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p110r_2/",
  "activities": ["grotto"],
  "purposes": ["making"],
  "excerpt": "110r Rock and grotto You need to grind white and yellow marcasites &amp; various kinds of ores. Wash them thoroughly,..."
}
,{
  "title": "Snakes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p110r_3/",
  "activities": ["keeping animals","casting","remedy"],
  "purposes": ["making","advice"],
  "excerpt": "110r Snakes When they feel trapped, they seldom bite, and cannot really hurt unless they are really big snakes. The..."
}
,{
  "title": "Mussels",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p110v_1/",
  "activities": ["animals"],
  "purposes": ["making"],
  "excerpt": "110v Mussels There is nothing better for opening them up than to oil them with olive oil, and nothing else...."
}
,{
  "title": "Wheat oil",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p110v_2/",
  "activities": ["oil making","casting"],
  "purposes": ["making"],
  "excerpt": "110v Wheat oil Is made on a blade of iron reddened in the fire, and the oil turns into drops,..."
}
,{
  "title": "A cast of lead or tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p110v_3/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "110v A cast of lead or tin Because you want to cast tin very thinly, if your medal, plant or..."
}
,{
  "title": "Reheating molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p111r_a1/",
  "activities": ["mold making"],
  "purposes": ["making"],
  "excerpt": "111r Reheating molds Box molds dry out readily, &amp; do not get reheated, because to reheat is properly to turn..."
}
,{
  "title": "Latten smoke",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p111r_a2/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "111r Latten smoke It is good to reheat molds for casting latten in it, because this yellow chalk, which appears..."
}
,{
  "title": "For red copper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p111r_a3/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "111r For red copper When it’s melted, it is good to throw in a little fine tin, because this makes..."
}
,{
  "title": "Clay earth",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p111r_a4/",
  "activities": ["mold making"],
  "purposes": ["making"],
  "excerpt": "111r Clay earth This, wet &amp; well beat &amp; kneaded as you know, is necessary for you to make the..."
}
,{
  "title": "Iron wire",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p111r_a5/",
  "activities": ["mold making"],
  "purposes": ["making"],
  "excerpt": "111r Iron wire You have to be provisioned with different thicknesses according to the molds that you want to make,..."
}
,{
  "title": "sal ammoniac water",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p111v_1/",
  "activities": ["making solution"],
  "purposes": ["making"],
  "excerpt": "111v sal ammoniac water It is enough to use two chestnuts’ worth of sal ammoniac pulverized in a pot of..."
}
,{
  "title": "Sanguine",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p111v_2/",
  "activities": ["polishing"],
  "purposes": ["making"],
  "excerpt": "111v Sanguine To clean the various colors of lead and tin, sanguine is pulverized, and it is rubbed on the..."
}
,{
  "title": "Crab and crayfish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p111v_3/",
  "activities": ["molding"],
  "purposes": ["making"],
  "excerpt": "111v Crab and crayfish They are among the most difficult to mold, and whoever molds them well will mold many..."
}
,{
  "title": "Lizards",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p111v_4/",
  "activities": ["catching animals","casting"],
  "purposes": ["making"],
  "excerpt": "111v Lizards When one grabs them with two fingers from the sides of the head, at the level of the..."
}
,{
  "title": "Composition of sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p111v_5/",
  "activities": ["mold making"],
  "purposes": ["making"],
  "excerpt": "111v Composition of sand Everything being baked thoroughly as said above, take four 4 molds full of plaster, two 2..."
}
,{
  "title": "To temper the sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p112r_1/",
  "activities": ["tempering sand"],
  "purposes": ["making"],
  "excerpt": "112r To temper the sand You should have: a large basin full of water to dip the molds into in..."
}
,{
  "title": "Decoction of sands",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p112r_2/",
  "activities": ["decoction"],
  "purposes": ["making"],
  "excerpt": "     112r      \n\n\nDecoction of sands\n\nAlready said\n\n"
}
,{
  "title": "Molding en noyau. Mixing of sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p112r_3/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "112r Molding en noyau. Mixing of sand Once you have reheated your sand, that is the plaster, the stone alum..."
}
,{
  "title": "Killing the animal to mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p112r_4/",
  "activities": ["keeping animals"],
  "purposes": ["making"],
  "excerpt": "112r Killing the animal to mold You must have been careful not to hurt it while capturing it. If you..."
}
,{
  "title": "Affixing and arranging animals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p112v_1/",
  "activities": ["casting","positioning animals"],
  "purposes": ["making"],
  "excerpt": "112v Affixing and arranging animals Having gotten in some fat earth called clay, that should be grey, because that is..."
}
,{
  "title": "Wetting sand and molding the first cast",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p113r_1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "113r Wetting sand and molding the first cast Have a porringer of leaded earth of such a size that it..."
}
,{
  "title": "Second Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p114r_1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "114r Annotations: Bread as Mediating Material: Tactile Memory and Touch in Ms. Fr. 640, fols. 29r, 114v, 129v, 130r (Le..."
}
,{
  "title": "Note about everything above said",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p115r_1/",
  "activities": ["casting","keeping animals"],
  "purposes": ["making"],
  "excerpt": "115r &gt; at left top margin of folio 115r &gt; &gt; First cast the tail or the back of your animal, make..."
}
,{
  "title": "Stripping animal",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p115r_a2/",
  "activities": ["casting animals"],
  "purposes": ["making"],
  "excerpt": "115r Stripping animal If you’d made such a twist to your snake that you can not stripped its belly easily..."
}
,{
  "title": "Reheating molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p115r_a3/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "115r Reheating molds When your molds are reheated, and cleaned, cast as soon as possible, because if you keep your..."
}
,{
  "title": "Tin casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p115v_1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "115v Tin casting If the herbage or flower you want to cast is delicate and fine, tin must exceed lead..."
}
,{
  "title": "Giving ventilation to your mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p115v_2/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "115v Giving ventilation to your mold If your herbage is very fine, in addition to vents, you can drive a..."
}
,{
  "title": "Annealing core molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p115v_3/",
  "activities": ["annealing"],
  "purposes": ["making"],
  "excerpt": "115v Annealing core molds After your molds have their cast vents and clamps, fix the clamps as above mentioned. Then..."
}
,{
  "title": "Drying animals in an oven",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_1/",
  "activities": ["drying animals"],
  "purposes": ["making"],
  "excerpt": "130r Drying animals in an oven One can skin small cats and remove their eyes and all their guts. Then..."
}
,{
  "title": "Reddening lively crayfish which will look as if they were boiled",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_2/",
  "activities": ["coloring animals"],
  "purposes": ["making"],
  "excerpt": "130r Reddening lively crayfish which will look as if they were boiled Rub your crayfish with good vinegar diluted with..."
}
,{
  "title": "Molding a single spider",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_3/",
  "activities": ["casting animals"],
  "purposes": ["making"],
  "excerpt": "130r Annotations: Too thin things, fol. 142v (Fu, Zhang) Molding a single spider One has to display it on the..."
}
,{
  "title": "Molding a single vine leaf",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130r_4/",
  "activities": ["casting plants"],
  "purposes": ["making"],
  "excerpt": "130r ” Molding a single vine leaf Attach it with brass wire points on the jacket of clay and then..."
}
,{
  "title": "Molding a crab",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130v_1/",
  "activities": ["casting animals"],
  "purposes": ["making","advice"],
  "excerpt": "130v Molding a crab It is a secret and a masterpiece to mold [a crab] well because it is necessary..."
}
,{
  "title": "Stag beetle",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130v_2/",
  "activities": ["casting animals"],
  "purposes": ["making"],
  "excerpt": "130v Stag beetle Like a crab, it [a stag beetle] is also difficult to burn, therefore do [stag beetles] as..."
}
,{
  "title": "For molding thinly",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p130v_3/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "130v For molding thinly After you have molded the first mold as the core, leave it to dry well before..."
}
,{
  "title": "Herbs difficult to burn in the mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131r_1/",
  "activities": ["casting plants"],
  "purposes": ["making"],
  "excerpt": "131r Herbs difficult to burn in the mold Mold them in two or three castings; being annealed, your mold will..."
}
,{
  "title": "molded letter paper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131r_2/",
  "activities": ["casting things too thin"],
  "purposes": ["making"],
  "excerpt": "131r Annotations: Molded Letter Paper molded letter paper Write with some ink well thickened with gum or any other color..."
}
,{
  "title": "Adorning beds, mirrors and similar things",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131r_3/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "131r Adorning beds, mirrors and similar things Model any drawing in half relief on a flat slate in order to..."
}
,{
  "title": "Training a dog",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131r_4/",
  "activities": [],
  "purposes": ["advice"],
  "excerpt": "131r Training a dog You need to keep your dog attached; when it does what you command, to win its..."
}
,{
  "title": "Molded wax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131r_5/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "131r Molded wax Wax representations made from white lead and cerussite are not made to be burned and melted in..."
}
,{
  "title": "When lead or tin casts fill with bubbles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p131v_1/",
  "activities": ["repairing"],
  "purposes": ["making"],
  "excerpt": "131v When lead or tin casts fill with bubbles If your casted work became porous, it can be repaired with..."
}
,{
  "title": "Mold made from two casts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p132r_1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "132r Mold made from two casts It opens once anealed. To clean it after, fix the clamps again, lute the..."
}
,{
  "title": "How to anneal the molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p132r_2/",
  "activities": ["annealing"],
  "purposes": ["making"],
  "excerpt": "132r How to anneal the molds Light your charcoals from the forge, then place them in a line in a..."
}
,{
  "title": "Common quarry sand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p132v_1/",
  "activities": ["casting with sand"],
  "purposes": ["making"],
  "excerpt": "132v Common quarry sand In a frame, If you cast it hot, sand will bubble; thus you have to just..."
}
,{
  "title": "Crocum ferry",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p132v_2/",
  "activities": ["making sand"],
  "purposes": ["making"],
  "excerpt": "132v Crocum ferry After I processed it with vinegar and reddened under heat, I had it ground very finely on..."
}
,{
  "title": "Gilding animals cast with silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p132v_3/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "132v Gilding animals cast with silver You can gild them with an amalgam, the lines won’t be damaged if they..."
}
,{
  "title": "Hard wax to imprint seals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133r_1/",
  "activities": ["wax molding"],
  "purposes": ["making"],
  "excerpt": "133r Hard wax to imprint seals One makes these [seals] out of white wax which is harder than the other..."
}
,{
  "title": "Casting the feet of small lizards in gold and silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133r_2/",
  "activities": ["gold and silver casting","casting animals"],
  "purposes": ["making"],
  "excerpt": "133r Casting the feet of small lizards in gold and silver Because the feet of these [lizards] that are very..."
}
,{
  "title": "Marks [made by] the [pin] points of iron thread which one finds on the head of an animal",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133r_3/",
  "activities": ["handling and maintenance"],
  "purposes": ["making"],
  "excerpt": "133r Marks [made by] the [pin] points of iron thread which one finds on the head of an animal With..."
}
,{
  "title": "Clamps and the broken mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133r_4/",
  "activities": ["repairing"],
  "purposes": ["making"],
  "excerpt": "133r Clamps and the broken mold When you have done the first firing and taken off the clamps and you..."
}
,{
  "title": "Porosity and little holes which are in the mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133v_1/",
  "activities": ["repairing"],
  "purposes": ["making"],
  "excerpt": "133v Porosity and little holes which are in the mold It oftens happens when you cast two or three molds..."
}
,{
  "title": "Thing that cannot be released from the mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133v_2/",
  "activities": ["handling and maintenance"],
  "purposes": ["making"],
  "excerpt": "133v Thing that cannot be released from the mold You must cut it inside the mold in order to burn..."
}
,{
  "title": "Various animals entwined",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p133v_3/",
  "activities": ["lifecasting"],
  "purposes": ["making"],
  "excerpt": "133v Various animals entwined You can entwine a snake with a lizard, each one biting the other, or a snake..."
}
,{
  "title": "To repair a pierced mold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p134r_1/",
  "activities": ["repairing"],
  "purposes": ["making"],
  "excerpt": "134r To repair a pierced mold pairing If the molded animal pulls of in certain places, moves from the place..."
}
,{
  "title": "Sand made of crocum [ferri]",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p134r_2/",
  "activities": ["making sand"],
  "purposes": ["making"],
  "excerpt": "134r Sand made of crocum [ferri] You can use the mixture made of crocum ferri to cast silver or gold,..."
}
,{
  "title": "To make gold fluid",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p134v_1/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "134v To make gold fluid Put as much verdigris as sal ammoniac, as much borax as saltpetre. But don’t add..."
}
,{
  "title": "Casting big works with gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p134v_2/",
  "activities": ["handling and maintenance"],
  "purposes": ["making"],
  "excerpt": "134v Casting big works with gold Not only should one clamp the mold very well, but also strengthen it with..."
}
,{
  "title": "Secret for soldering small works made of gold and silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p134v_3/",
  "activities": ["soldering"],
  "purposes": ["advice","making"],
  "excerpt": "Secret for soldering small works made of gold and silver If some little pieces of legs cannot be easily removed..."
}
,{
  "title": "Colors for gold, or sauce",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p135r_1/",
  "activities": ["coloring"],
  "purposes": ["making"],
  "excerpt": "135r ” Colors for gold, or sauce Take as much verdigris as sal ammoniac, &amp; saltpetre the size of a..."
}
,{
  "title": "Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p135r_2/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "135r ” Casting It must be lengthened out with respect to the thing you have molded. And at a minimum..."
}
,{
  "title": "Vine leaf and small frog",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p135r_3/",
  "activities": ["casting plants","casting animals"],
  "purposes": ["making"],
  "excerpt": "135r ” Vine leaf and small frog To mold, take vine leaves as they are blooming, just as with all..."
}
,{
  "title": "Casting gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p135v_a1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "135v ” Casting gold Take a crusol that can contain a certain amount, as you wish to place roughly crushed..."
}
,{
  "title": "latten casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p136v_1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "136v latten casting Take latten from skillet pans, used to make baby’s cereal, which is doulx and apt for the..."
}
,{
  "title": "Casting red copper",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p137r_1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "137r Casting red copper Pure cauldron red copper, or copper of any other small works, is good to cast. To..."
}
,{
  "title": "Huile tingente to make metal runny",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p137r_2/",
  "activities": [],
  "purposes": ["making","advice"],
  "excerpt": "137r Huile tingente to make metal runny Take some mercury, some real sublimate of venice, and not sublimate of arsenic,..."
}
,{
  "title": "Clamps",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p137r_3/",
  "activities": ["tool making"],
  "purposes": ["making"],
  "excerpt": "137r Clamps To make clamps use flat tongs made from wire, which is reheated and bent, and hammered on anvil...."
}
,{
  "title": "Wetting sand to mold flat medals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p137v_a1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "137v Wetting sand to mold flat medals Flat medals, made of wax or metal, must be oiled very lightly and..."
}
,{
  "title": "Talcum mixed with the molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p138v_1/",
  "activities": [],
  "purposes": ["making"],
  "excerpt": "138v Talcum mixed with the molds I used the one from which I had extracted the oil. I crushed it..."
}
,{
  "title": "Gold casted very thinly",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p138v_2/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "138v Gold casted very thinly When goldsmiths have to solder something quickly but don’t have enough time to forge it,..."
}
,{
  "title": "Imitation diamonds set into the work",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p138v_3/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "138v Imitation diamonds set into the work Spread a fine layer of imprinting black wax on the inside of the..."
}
,{
  "title": "Casting with lead and tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p139r_1/",
  "activities": ["casting","casting animals"],
  "purposes": ["making"],
  "excerpt": "139r Casting with lead and tin The way I have done it for lizards and serpents is with two ℥..."
}
,{
  "title": "Casting wax to mold an animal that one has not got",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p139v_1/",
  "activities": ["casting","wax casting"],
  "purposes": ["making"],
  "excerpt": "139v Annotations: Black Sulfured Wax, fol. 139v (Kang and LoresChavez) Casting wax to mold an animal that one has not..."
}
,{
  "title": "To cast in sulfur",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p140v_1/",
  "activities": ["casting","casting with sulfur"],
  "purposes": ["making"],
  "excerpt": "140v Annotations: Sulfur and Additives To cast in sulfur To cast neatly in sulfur, arrange the pith of bread under..."
}
,{
  "title": "Molding and shrinking a large shape",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p140v_2/",
  "activities": ["handling large shapes"],
  "purposes": ["making"],
  "excerpt": "140v Molding and shrinking a large shape Mold it with the pith of bread just out of the oven, or..."
}
,{
  "title": "Casting a crayfish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p141r_1/",
  "activities": ["casting","casting animals"],
  "purposes": ["making"],
  "excerpt": "141r Casting a crayfish The crayfish is one of the most fantastical to cast, but also provides an example for..."
}
,{
  "title": "Molding grasshoppers and things too thin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_1/",
  "activities": ["casting","casting animals","casting things too thin"],
  "purposes": ["making"],
  "excerpt": "142v Annotations: Too Thin Things Molding grasshoppers and things too thin If you have to mold a piece of written—on..."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_2/",
  "activities": ["maintenance"],
  "purposes": ["making"],
  "excerpt": "142v Molds Make some notches in them the molds that enter more into the inside of the mold than the..."
}
,{
  "title": "Lute for luting your molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p142v_3/",
  "activities": ["luting"],
  "purposes": ["making"],
  "excerpt": "142v Lute for luting your molds I have not found a lute that is made more quickly than this one,..."
}
,{
  "title": "Moulding turtles and tortoises",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143r_1/",
  "activities": ["casting animals"],
  "purposes": ["making"],
  "excerpt": "143r Moulding turtles and tortoises The turtle the one that lives in water is more beautiful to mold because it..."
}
,{
  "title": "Moulders from Foix",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143r_2/",
  "activities": ["making sand"],
  "purposes": ["observation"],
  "excerpt": "p143r Moulders from Foix Those who mould from across the way make their sand from crocum ferri and calcinated slate,..."
}
,{
  "title": "Toad",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143r_3/",
  "activities": ["casting animals"],
  "purposes": ["making"],
  "excerpt": "143r Toad Having been molded, you can take it out it without burning it, because it releases easilyfrom the mold...."
}
,{
  "title": "Openwork carcanets",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143v_1/",
  "activities": ["embellishing"],
  "purposes": ["making"],
  "excerpt": "143v Openwork carcanets You can mold them “en noyau” like crayfish, first with one side being made higher with clay,..."
}
,{
  "title": "Iron filings",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143v_2/",
  "activities": ["maintenance"],
  "purposes": ["making"],
  "excerpt": "143v Iron filings Because usually filings are mixed with impurities, it is good to heat them over fire to burn..."
}
,{
  "title": "Carnations",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p143v_3/",
  "activities": ["casting plants"],
  "purposes": ["making"],
  "excerpt": "143v Carnations Because those that you usually cast are generally quite big, they are heavy. And so for these, you..."
}
,{
  "title": "Ashes in the moulds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p157v_1/",
  "activities": ["cleaning mold"],
  "purposes": ["advice"],
  "excerpt": "157v Ashes in the moulds You must let the mold cool down rather than blow into it to try to..."
}
,{
  "title": "Po{ur} f{air}e h{…} vin f{…}rs [?]",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p157v_3/",
  "activities": [],
  "purposes": [],
  "excerpt": "157v Po{ur} f{air}e h{…} vin f{…}rs [?] Prenez un chausson du pied droid t qui ait este porte et le..."
}
,{
  "title": "Mercury in molds, for cleaning",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158r_a1/",
  "activities": ["cleaning mold"],
  "purposes": ["making","advice"],
  "excerpt": "158r Mercury in molds, for cleaning Take heed that your mold be quite cold when you blow in order to..."
}
,{
  "title": "Colors for green leafs",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_1/",
  "activities": ["making"],
  "purposes": [],
  "excerpt": "158v Annotations: Color for Green Colors for green leafs One usually paints them with oil colors, because distemper colors do..."
}
,{
  "title": "Large molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_2/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "158v Large molds Because of the heaviness of the metal, it is necessary to put them in a press so..."
}
,{
  "title": "Candle smoke",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_3/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "158v Candle smoke It allows the piece to be taken out more easily, and even if it is slightly thick,..."
}
,{
  "title": "casts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_4/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "158v casts If the medal is very thick, do not pour a cast that is as thick; the cast just..."
}
,{
  "title": "Portraits in Wax",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a1/",
  "activities": ["using wax"],
  "purposes": ["making"],
  "excerpt": "159r Portraits in Wax If you do not mix your wax with any color dye, and if you paint some..."
}
,{
  "title": "Chasing tool",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a2/",
  "activities": ["representation"],
  "purposes": ["advice"],
  "excerpt": "159r Chasing tool If a chasing tool has passed through any part of the representation, it is necessary to rework..."
}
,{
  "title": "Fish glue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a3/",
  "activities": ["fish glue"],
  "purposes": ["making","advice"],
  "excerpt": "159r Fish glue Beat it very finely and thinly on a well—cleaned anvil, then dilute your glue with spirits, put..."
}
,{
  "title": "Tin and lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a4/",
  "activities": ["molding"],
  "purposes": ["making"],
  "excerpt": "159r Tin and lead They must be beaten out very finely and tin will not get brittle or break, lead..."
}
,{
  "title": "Cleaning files",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a1/",
  "activities": ["cleaning"],
  "purposes": ["advice"],
  "excerpt": "159v Cleaning files Sometimes they get fat from the grease of lead, which is naturally fat, or also filings corrode..."
}
,{
  "title": "Carnation",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a2/",
  "activities": ["molding"],
  "purposes": ["making","advice"],
  "excerpt": "159v Carnation Mold a carnation like a rose, marigold, and all other flowers as discussed, that is to say cast..."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a3/",
  "activities": ["molding"],
  "purposes": ["making"],
  "excerpt": "159v Molds Try to make one side as thick as the other, that way the two parts will be equally..."
}
,{
  "title": "Unmixed plaster",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159v_a4/",
  "activities": ["plaster making"],
  "purposes": ["advice"],
  "excerpt": "159v Unmixed plaster If you reheat plaster as a stone it would crumble into water, but if you grind it..."
}
,{
  "title": "Presses for large moulds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160r_1/",
  "activities": ["making large presses"],
  "purposes": ["making","advice"],
  "excerpt": "160r Presses for large moulds figure identifier=”fig_p160r_1” url=”https://drive.google.com/open?id=0B9—oNrvWdlO5ZDNJT25PWjlUbGM”/&gt; &gt; Figure &gt; at right top margin of folio 160r &gt; It is made..."
}
,{
  "title": "Moulding a foot or a hand",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160v_a1/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "160v Moulding a foot or a hand Mix resin to the wax. Once well blended, soften the mixture in hot..."
}
,{
  "title": "Fine work made of gold or silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160v_a2/",
  "activities": ["molding"],
  "purposes": ["advice"],
  "excerpt": "p160v Fine work made of gold or silver You can mold flies by hand, without casting; the wings and the..."
}
,{
  "title": "Catching crayfishes",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160v_a3/",
  "activities": ["catching"],
  "purposes": ["making"],
  "excerpt": "p160v Catching crayfishes On the end of a stick, attach pieces of liver or lung, from beef or mutton. Then..."
}
,{
  "title": "Catching passerines",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160v_a4/",
  "activities": ["catching"],
  "purposes": ["advice"],
  "excerpt": "p160v Catching passerines If they sleep in the farmyard, like they commonly do, close to the house, let the closest..."
}
,{
  "title": "Catching birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p160v_a5/",
  "activities": ["catching birds"],
  "purposes": ["making","advice"],
  "excerpt": "160v Catching birds During winter, when birds have molted, skin them and fill them with cloth and stuffing, or dry..."
}
,{
  "title": "Preparing sand for box molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p161r_1/",
  "activities": ["molding"],
  "purposes": ["advice"],
  "excerpt": "161r Preparing sand for box molds at left top margin of folio 161r After your sand [which is made] of gip de..."
}
,{
  "title": "Crocum ferri",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p161v_a1/",
  "activities": ["colormaking"],
  "purposes": ["making","advice"],
  "excerpt": "161v Crocum ferri It can be made quickly if you put very filings that are very neat and have been..."
}
,{
  "title": "Aes ustum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162r_a2/",
  "activities": ["molding"],
  "purposes": ["observation"],
  "excerpt": "162r Aes ustum When it [Aes ustum] is finely ground it moulds very cleanly. It has a certain fatness that..."
}
,{
  "title": "Rotten wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162r_a3/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "162r Rotten wood Wood that is white, being light as a sponge, if burnt in a close fire, may be..."
}
,{
  "title": "Peach trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162v_1/",
  "activities": ["agriculture"],
  "purposes": ["advice"],
  "excerpt": "162v Peach trees Because they cast and blossom from the outset, and so are caught by the frost. We expose..."
}
,{
  "title": "Olive trees",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162v_2/",
  "activities": ["agriculture"],
  "purposes": ["observation"],
  "excerpt": "     162v      \n\n\nOlive trees\n\nIn Spain they expose their roots during winter and in spring they earth they up again.\n\n"
}
,{
  "title": "Foot of bittern",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162v_3/",
  "activities": ["molding"],
  "purposes": ["observation"],
  "excerpt": "162v Foot of bittern To mold it it is better to extend its fingers and nails on something flat and..."
}
,{
  "title": "Molds of things which have not been pelted",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p162v_4/",
  "activities": ["molding"],
  "purposes": ["making","advice"],
  "excerpt": "162v Molds of things which have not been pelted Animals who have not been pelted can only be molded in..."
}
,{
  "title": "Perfume-makers",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p163r_1/",
  "activities": ["perfume making"],
  "purposes": ["description","observation"],
  "excerpt": "163r Perfume—makers They readily make their perfumes with half amber and half musk, and a little civet, because the scent..."
}
,{
  "title": "Spirits",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p163r_2/",
  "activities": ["using spirits"],
  "purposes": ["observation"],
  "excerpt": "163r Spirits Spirits are excellent for making molds clean, in such a way that where you do not apply some,..."
}
,{
  "title": "Crayfish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p163v_1/",
  "activities": ["casting"],
  "purposes": ["making","advice"],
  "excerpt": "163v Crayfish The hairy little horns that the crayfish has under its snout tend to come out lumpy and unclear..."
}
,{
  "title": "Crocum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p163v_2/",
  "activities": ["colormaking"],
  "purposes": ["observation"],
  "excerpt": "163v Crocum That which has become rusty by itself, having been doused with water, salt, and either vinegar or urine,..."
}
,{
  "title": "Repairing",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p163v_3/",
  "activities": ["repairing"],
  "purposes": ["advice"],
  "excerpt": "163v Repairing It is much better to only lightly repair your work with a burin called an “onglet” or the..."
}
,{
  "title": "Casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164r_1/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "164r Casting When you make a cast of delicate animals, like snakes, start by casting the belly side, or the..."
}
,{
  "title": "Repairing burrs",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164r_2/",
  "activities": ["repair"],
  "purposes": ["advice"],
  "excerpt": "164r Repairing burrs Remove burrs very carefully with the point of a chaple or a burin, then scrape the burrs..."
}
,{
  "title": "Leaded silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164r_3/",
  "activities": ["molding"],
  "purposes": ["observation"],
  "excerpt": "164r Leaded silver A lot of silver is wasted because of the lead which is mixed with it, as occurs..."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164v_1/",
  "activities": ["molding"],
  "purposes": ["making","advice"],
  "excerpt": "164v Molds For molds wherein something must be burned (away), and do not open before being reheated: do not cast..."
}
,{
  "title": "Sable",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164v_2/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "164v Sable If you don’t add enough alum de plume or crocus your mold will easily crack when heated. But..."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164v_3/",
  "activities": ["molding"],
  "purposes": ["making"],
  "excerpt": "164v Molds When you cast lead, your molds must be very dry, even if the molds are large. The outside..."
}
,{
  "title": "To repair",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_1/",
  "activities": ["repairing"],
  "purposes": ["observation"],
  "excerpt": "165r To repair If in your cast, there appear some little hole, fix it with black or gray filling gum..."
}
,{
  "title": "Lacquer",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_2/",
  "activities": ["making lacquer"],
  "purposes": ["observation"],
  "excerpt": "165r Lacquer If, having been ground, you let it dry without keeping it in water, it will dry out and..."
}
,{
  "title": "Stretching a canvas portrait",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_3/",
  "activities": ["stretching canvas"],
  "purposes": ["application"],
  "excerpt": "165r Stretching a canvas portrait If it is crumpled or folded from when it was rolled up, moisten the back..."
}
,{
  "title": "Plaster for molding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_4/",
  "activities": ["molding"],
  "purposes": ["application","advice"],
  "excerpt": "165r Plaster for molding at left middle margin of folio 165r When it is long to set and dry, it means that..."
}
,{
  "title": "Dragon's blood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_5/",
  "activities": ["imitation"],
  "purposes": ["making","observation"],
  "excerpt": "165r Annotations: Dragon’s blood You can imitate dragon’s blood with lacquer, which surpasses it in beauty, if [when] diluted in..."
}
,{
  "title": "Repairing snakes and lizards",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165r_6/",
  "activities": ["repairing"],
  "purposes": ["application"],
  "excerpt": "165r Repairing snakes and lizards You could make some marks according to the form of their scales, making some bigger..."
}
,{
  "title": "Positioning animals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_1/",
  "activities": ["casting animals"],
  "purposes": [],
  "excerpt": "165v Positioning animals Not only with iron pins, but also with melted wax, are animals secured to the plate of..."
}
,{
  "title": "Keeping animals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_2/",
  "activities": ["molding animals"],
  "purposes": ["advice"],
  "excerpt": "165v Keeping animals Having molded them once, if you want to keep them for molding again, put them back into..."
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_3/",
  "activities": ["molding"],
  "purposes": ["observation"],
  "excerpt": "165v Molds After molding them do not keep them for long, but use them as soon as you can, because..."
}
,{
  "title": "Lute",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_4/",
  "activities": ["casting"],
  "purposes": ["application"],
  "excerpt": "165v Lute When reheating, you might as well use common lute, But when you want to cast, strip it from..."
}
,{
  "title": "Silver",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_a5/",
  "activities": ["melting silver"],
  "purposes": ["observation"],
  "excerpt": "165v Silver When it quivers after melting, that is a sign that it is very hot. And since it commonly..."
}
,{
  "title": "Fly wings",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_a6/",
  "activities": ["casting"],
  "purposes": ["advice"],
  "excerpt": "165v Annotations: Too thin things, fol. 142v (Fu, Zhang) Fly wings So that they come out best, place wax sprues..."
}
,{
  "title": "Attaching a fly wing or something similar",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p165v_a7/",
  "activities": ["using glue for delicate objects"],
  "purposes": ["application"],
  "excerpt": "165v Attaching a fly wing or something similar They can be attached with fish glue mixed with spirits over slow..."
}
,{
  "title": "For the Workshop",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166r_a1/",
  "activities": ["history"],
  "purposes": ["observation"],
  "excerpt": "166r For the Workshop If anything has been omitted: the harvester is not blamed for leaving some corn ears. If..."
}
,{
  "title": ["handwork and devotion"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166v_1/",
  "activities": ["literary description"],
  "purposes": ["observation"],
  "excerpt": "166v [handwork and devotion] In addition to Greek examples, there is a psalm of David mentioned by Saint Athanasius in..."
}
,{
  "title": "Keeping chestnuts",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166v_2/",
  "activities": ["storing chestnut"],
  "purposes": ["advice"],
  "excerpt": "166v Keeping chestnuts They must be left in their burs until you want to eat them. And in their burs,..."
}
,{
  "title": "Scented candle from Le Mans",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166v_3/",
  "activities": ["candle making"],
  "purposes": ["making"],
  "excerpt": "166v Scented candle from Le Mans They melt in withwax and candles rosin that is called in France [rosin] from..."
}
,{
  "title": "Softening gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166v_4/",
  "activities": ["softening"],
  "purposes": ["application"],
  "excerpt": "166v Softening gold Dissolve some caput mortuum in distilled vinegar. Filter and congeal in salt and cement the ☉ with..."
}
,{
  "title": "Improving the color of gold",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p166v_5/",
  "activities": ["colormaking"],
  "purposes": ["making"],
  "excerpt": "166v Improving the color of gold Put some aqua fortis made with vitriol on hot embers. Cover the bottle, that..."
}
,{
  "title": "Mortars",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p167r_1/",
  "activities": ["making mortars"],
  "purposes": [],
  "excerpt": "167r Mortars Figure Mortars are made of the best alloy of “métal” and the finest possible rosette so that they..."
}
,{
  "title": ["List of making procedures"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p169r/",
  "activities": ["list"],
  "purposes": [],
  "excerpt": "169r [List of making procedures] Molding a tortoise Furry animals Birds Leaf of vine — put Of the strawberry Piece..."
}
,{
  "title": "Reducing a round form into a hollow one",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p169v_2/",
  "activities": ["molding"],
  "purposes": ["making","advice"],
  "excerpt": "169v Reducing a round form into a hollow one You must firstly mold it with plaster as has been said..."
}
,{
  "title": "Common medals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_1/",
  "activities": ["making awl"],
  "purposes": ["observation"],
  "excerpt": "170r Common medals Relief awls are made of untempered steel, and then it is tempered. With it we beat on..."
}
,{
  "title": "Iron clamps",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_3/",
  "activities": ["using iron clamps"],
  "purposes": ["advice"],
  "excerpt": "     170r      \n\n\nIron clamps\n\nWhen you put them for the second time, make sure that the mold does not wobble.\n\n"
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_4/",
  "activities": ["molding"],
  "purposes": ["observation"],
  "excerpt": "170r Molds Those with noyau, when reheated, should be placed on half lit charcoal, without being in contact with the..."
}
,{
  "title": "Thick tin pieces",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_5/",
  "activities": ["casting"],
  "purposes": ["making"],
  "excerpt": "170r Thick tin pieces They should not be casted with lead or red tin, like thin and fragile things. It..."
}
,{
  "title": "How to clean closed molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_6/",
  "activities": ["cleaning"],
  "purposes": ["making"],
  "excerpt": "170r How to clean closed molds You have to leave them cool down rather than blow inside to clean them,..."
}
,{
  "title": ["Receipts and dues for the heirs of late Sr. Ouvryer"],
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170v_1/",
  "activities": ["balance keeping"],
  "purposes": ["description"],
  "excerpt": "170v [Receipts and dues for the heirs of late Sr. Ouvryer] In the year fifteen hundred seventy—eight, the second of..."
}
,{
  "title": "Against plague",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170v_2/",
  "activities": ["medicinal"],
  "purposes": ["advice"],
  "excerpt": "170v Against plague Against pestilential fever or poison or plague, take an ecu’s weight of your opiate soaked in scabious..."
}
,{
  "title": "To preserve oneself",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170v_3/",
  "activities": ["medicinal"],
  "purposes": ["advice"],
  "excerpt": "170v To preserve oneself Acetum paratum ex ruta baccis juniperi simul tusis Eoaceto extinguantur lateres igniti. Et vapor excipiatur ore..."
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
    var act = "";
    var purp = "";
    var searchitem = '<div class="result"><a href="/GR8975-edition'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a><p>';
    for (var i = 0, c = store[ref].activities.length; i < c; i++) {
	 act += '<a class="tag small" href="/GR8975-edition/list-activities/#'+store[ref].activities[i]+'"><span class="post-tag">'+store[ref].activities[i]+'</span></a>';
      }
    for (var i = 0, c = store[ref].purposes.length; i < c; i++) {
        purp += '<a class="tag small" href="/GR8975-edition/list-purposes/#'+store[ref].purposes[i]+'"><span class="post-tag-2">'+store[ref].purposes[i]+'</span></a>';
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
