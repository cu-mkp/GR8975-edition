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
  title: "Casting wax to mold an animal that one has not got",
  author: null,
  layout: "narrative",
  content: "139v \n##  Casting wax to mold an animal that one has not got\n\nTake some white wax which is much more appropriate for this kind of work than anything else, because it is much firmer and does not leave as much filth, as much as you need to cast the animal that you propose, and no more. And [take] a half quantity of ground coal and neatly sieved through a cloth or coal sleeve, using it to give some color to your wax, that would otherwise be transparent and you will not be able to see your lines as clearly. Put your wax on the coal fire to melt. And when it is well—melted and well—liquified, have, for a full eared—porringer of melted wax, as much sulphur as a large walnut. Pulverize it. Melt it over a slow fire and when it is melted, do not leave it on the fire because it will become too hard. But take it off and keep stirring it with a little stick and when it has finished bubbling and is as liquified as water, cast it into the wax that you will have previously removed from the fire. And mix and stir both of the them so that they join together. After stir in little by little while continuously mixing, the charcoal that has been repeatedly ground, and in this way it will be very well incorporated. This is how you will know that your wax has gone beyond its ideal heating point, it will release no more smoke, it will start to have lines appearing on the side and not in the middle, and those lines will be close to each other. If you cast too hot, you will not be able to separate your wax from your mold and it would stick to the cast. When it is at the right state, stir it with a little stick so that the pulverized charcoal is well mixed in and has not fallen to the bottom of the mixture. And in this way, throw it in your mold bit by bit and not in one go, because wax is not runny\n\nposition:: left-top\n\nThis black sulphured wax is for fashioning round figures that do not come out of the mold. And they need to be burned in the moule au noyau rather than be opened like the ones that have something jutting out or an intertwining of legs and arms. And this wax, thanks to the sulphur, will melt with little heat and leave without leaving any filth. If by some misfortune the crushed charcoal remains in ashes, when you open the mold and blow on it, it will come clean.\n\nposition:: left-bottom\n\nTo make wax serpents or other things to affix to candles, it is necessary to cast them with esbaucher wax of all colors. \n 140r\n not like other things. And for this one, you can cast two or three times until your mold is full. Now, concerning this mold of pulverized white plaster &amp; reheated in the manner of the sand from the preceding recipes, you should have made it long ago because it is used many times. But, before using it, soak it for a good hour in cold water, &amp; at a minimum, at least as long in hot water that at first is so hot that you can’t hold your finger in it. And note that it absorbs no more, but that it appears very wet overall without water seeping into it. In removing it closed from the hot water, cast your wax in such a state of heat as has been described. And neither the first nor the second casting will readily come out well, hardly, until the mold is soaked. Let it cool down before opening it so that the cast thing not break. You will know that the casting is good when the wax coming back out of the mold is thin and even. Remember to make several castings along the whole length of the mold so that in this way the wax runs better. Make the firstcasting twice as large as other molds. And if, in the first casting, your work fills with bubbles and in so doing does not come out neatly, it’s all the same, because you have to face the fact that the three or four first do not readily come out well. Firstly, you will know whether there are a few barbs that keep it from stripping well. And you will remove them if, on their own, they do not remove themselves in the two or three first castings. And the more that you cast, the more you will do it neatly. And your mold will serve you more than one hundred times if it Is well governed. But it is good to soak it one night or one day before casting so that it be well soaked. The same must be done for fruits made from sugar. This wax is very soft &amp; friendly &amp; pliant, like copper. And if it is hard [this is] because of sulfur, which makes it melt more easily than than other [wax], so much that you can see evidence on a hot slate. And the sulfur that you put inside will be found the second time that you melt it, [as] cracks on the bottom. Having in this way passed through wax, it will not catch fire at all when put to a candle. And in this case, I believe that it will cast quite the medal [illegible]. One uses the same wax in place of varnish to [illegible].\n\nposition:: left-middle\n\nWhen your animal is cast, cut away the froth &amp; superfluous things with a hot pen knife. And if you want, plait and wrap it around some stick or candle, put it in some hot water to soften and hold it in turning it around.\n\nposition:: left-middle\n\nLower the protrusions of the castings so that they be even &amp; that the wax has more silver so that it can run all in one go without turning through the windings of the snake. \n 140v \n to engrave on silver &amp; copper with aqua fortis. With this [wax] too, one fills the cavity of a relief, &amp; then casts in this cavity, with moistened sand, which immediately takes the relief very neatly. And then you can cast its cavity on it in copper, gold, and silver, and make really singular seals.\n\nposition:: left-top\n\nSeals\n\n",
  id: 0
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "169r  Molding a tortoise Furry animals Birds Leaf of vine — put Of the strawberry Piece molding Molding a vase in a chassis Molding capilli veneris Molds that need to be supported by nets Molding a bouquet Rose carnations Hollow molding Hollow gilded silver Molding wort plant put + Crayfish put and seen Grasshoppers Barbots Butterflies Flies Bats Enameling thin gold Molding in sugar Molding fish Molding in sulfur put Cardboard + Wax put Roughing out Stamped medals full of lead Molding large carved wooden pieces Molding and making casts of metal animals + Wheat oil put and seen Stag beetle Foot of a bittern molded Thickness of a medal Very hard wax Molding the engraving on a ring Molding pieces of carcanets Things that do not release from the mold …  Fountains Grottoes Sundry mosses applied Molding in three chassis Tempering iron in order to engrave it Etching on silver and iron Stamping White enamel, softening it with black calcinated river pebbles\n",
  id: 1
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "001r  Nicolas Coste, in the Rue de la Heaumerie, at the sign of St Claude/Mirrors Master Jehan Cousin, who resides in the Faubourg St Germain, knows about the master Master Jehan Garnier, in the Rue des Escrivains by St Jacques de la Boucherie, currier. Try woad flowers\n",
  id: 2
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "001r \nThe harvester that leaves some ears is not blamed.\n\nSacra Eleusinae deae propalare nefas.\n\nTrumpets, see the book of funerals\n\n",
  id: 3
});
index.addDoc({
  title: "For cages",
  author: null,
  layout: "narrative",
  content: "006v \n##  For cages\n\nYou can embellish them with thin enamel canes of various colors by covering the yellow latten or iron wire with said canes. These you will break neatly into the length that you want if you make a small notch with a cutting file at the point where you want to break them, and they will not break anywhere else. You can bend them with a wooden model over a brazier or by the heat of a lamp. A cane can be stretched out as long as you want in a small furnace made like a reverberatory oven but with openings on both sides. And once the large cane is red, they seize the hot end of it with small pincers that have long beaks, with one end of the beak inside the end of the cane, so that it may be stretched without becoming blocked. The other end of the cane is held with the hand, as it is not hot. Once the cane is stretched enough, the one who is working seated with his stove, the size of a carnation pot, placed in front of him, breaks it off and carries on. This is for making cane for capes, which may be cut, as already mentioned, with a file. Glass—button makers also use the said stove.\n\nposition:: left-middle\n\nUnder the door is a grill that supports the burning charcoal. The ash is emptied by turning the stove upside down.\n\n",
  id: 4
});
index.addDoc({
  title: "For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances",
  author: null,
  layout: "narrative",
  content: "006v \n##  For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances\n\n Etch with aqua fortis on iron or copper whatever you have pounced and drawn there, next make it neat with a burin or chisel. Then pour soft tin, yet unused, onto polished marble and flatten it, making it quite thin, with a wooden board. Or else pour it on a table as is done with lead, or put it through a roll—press. Next lay your tin plate over the engraving, and over the tin plate put a piece of felt and strike it with a hammer. Then gild it in the following manner. \n\n\n\n",
  id: 5
});
index.addDoc({
  title: "To gild with gold color and tinsel",
  author: null,
  layout: "narrative",
  content: "007r \n##  To gild with gold color and tinsel\n\nOnce you have colored or made your stamped ornament in tin (as previously described), or in iron or copper, you must not put glue as on wood, but just have some fatty oil, which is made in seven or eight days in the sun from walnut oil and white lead, stirring often, or cooked on fire if one should be in hurry. Then, with  the oil thus made fatty, grind a little white lead, massicot and black graphite, at discretion, as much of one as of the other. Minium will color the gold. Then apply an even layer of that onto your stamp, taking care you do not fill the hollows. And once it is almost dry, apply the gold leaf on it using cotton. Such gold will withstand rain on houses or elsewhere. And if you have made your gilt with tinsel, color it with smoke from a partridge or from yellow or red cloth, and it will look as fine as pure gold. You can cover trunks, mirrors, bed valances and posts in colored velvet or satin and then apply the gilded stamped ornament on them with strong glue.\n\n",
  id: 6
});
index.addDoc({
  title: "To color stamped ornaments for trunks",
  author: null,
  layout: "narrative",
  content: "007r \n##  To color stamped ornaments for trunks\n\n The stamped ornament made from sheets of copper or latten are made with wood from a service tree engraved and cut, should you want to spend less. Next, the stamped piece is colored with the aforesaid lacquer colours of lacquer, verdet, blue enamel, and soaked in turpentine varnish. But wherever you want to make it azure, apply some fer blanc, which is more appropriate for an azure background. \n\n\n\n",
  id: 7
});
index.addDoc({
  title: "Doublets",
  author: null,
  layout: "narrative",
  content: "007r \n##  Doublets\n\nGood dragon’s blood soaked in spirits produces its own mastic or glue. So do vert de vessie and saffron.\n\n",
  id: 8
});
index.addDoc({
  title: "Fish glue or usblac and mouth glue",
  author: null,
  layout: "narrative",
  content: "007r \n##  Fish glue or usblac and mouth glue\n\nIt is made from codfish skin that has been boiled rather than salted. Joiners use it on their masterpieces and guitar makers use it for their more delicate works. It needs to be strongly whipped, then soaked gently in barely boiling water.\n\nMouth glue is made of parchment scraps and used to glue paper or similar things without fire, by wetting it with one’s mouth.\n\nposition:: left-bottom\n\nIt is whipped and left to soak in white wine for one night, then melted over a low heat. Others soak it in spirits.\n\n",
  id: 9
});
index.addDoc({
  title: "Birds",
  author: null,
  layout: "narrative",
  content: "049v \n## Birds\n\nposition:: right-top\n\nCalandra larks and all birds taken from the nest and which have not known freedom are better, because those taken with a net never sing as well. However, wild birds give much pleasure with their chanting, but they must be taken before Michaelmas, otherwise they do not live long. All get a small impostume on the fork of their tail, sometimes, which some call “gaillardise”, which makes them sick and sometimes kills them, especially calandra larks. One can tell when they are sad and do not sing. It must be pierced, not with a pin, but very delicately by turning with the tip of a quite sharp feather. The calandra lark should not be without river sand, and grey sand, a little rough, is the best. It rubs itself against it and purges itself [with it].\n\n",
  id: 10
});
index.addDoc({
  title: "Grain of lead",
  author: null,
  layout: "narrative",
  content: "049v \n## Grain of lead\n\nposition:: middle\n\nTake a playing card, pierced with a pin or needle, folded over on all four sides. Hold it with the end of a small split stick and, holding said stick by the other end, put your card three or 4 fingers away from the water that you will have put in a platter or a similar vessel. Then pour your lead, which should not be too hot, into the card and continually tap on the stick that holds it. And thus your lead will turn into round grains. And pass it through a large sieve to separate the larger grain from the smaller. The larger one will carry 25 to 30 paces.\n\n",
  id: 11
});
index.addDoc({
  title: "Birds",
  author: null,
  layout: "narrative",
  content: "049v \n## Birds\n\nposition:: bottom\n\nThose that are caught at Michaelmas are good to keep, but those that are caught in March die, because they are starting to fall in love. Ortolans are fed oats all summer so that they eat without getting fat, to be more suitable for hunting and helping to catch others. Then, when one wants to fatten them to sell, one gives them millet. They sing at night. They must be caught after mid—July and before Michaelmas, because after the period when they have their young in this country, they leave as turtledoves do. Siskins should also be caught after All Saints’ Day and before Christmas, because afterwards they leave for the mountains to brood.\n\n",
  id: 12
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "049v \nposition:: left-bottom\n\nOrtolans are ventriloquists, so that, singing without opening their beaks, they seem to be…\n\n",
  id: 13
});
index.addDoc({
  title: "Preserving fruit for the entire year",
  author: null,
  layout: "narrative",
  content: "050r \n## Preserving fruit for the entire year\n\nposition:: top\n\nTake a rounded glass phial, with a large enough opening to receive cherries and plums and whatever fruit you want. Put in some hot water and leave it for two hours, and once your water is cold, throw it out and turn the phial upside down onto its opening on a perfectly even table and in a room where there is not a bit of draft or wind. Then prepare a stopper of fresh wax, wrapped in oilcloth, and adapt it precisely to the glass phial so that it will be ready to stop it once you have put in the fruit. And once you have hand—picked the fruit, only the non—rotten fruit, and on a warm and dry day, withdraw to the room, well closed so that no wind or draft can get in, and put it gently and deftly in the bottle. Then stop the bottle well with the stopper and lute it, making your lute, if you want, with some quicklime and oil, so that no water gets in. Then put your bottles into a tub full of water, in a cellar, during the summer, and in the winter put your bottles into a basket filled with some weights and lower it to the bottom of a deep well. Because in the winter the water in the tub would be too cold if your cellar is not warm enough, because the water needs to be like river water.\n\n",
  id: 14
});
index.addDoc({
  title: "Molding",
  author: null,
  layout: "narrative",
  content: "050r \n## Molding\n\nposition:: top\n\nIf you want to quickly mold in demi—relief anything you come upon, fold some paper five or six times over, and place it on the medal and make sure the paper is folded around the edges of the medal so it is very secure. Next take a stick, broad at one end and with a well—dulled point at the other, and rub firmly on the paper, and retrace the lines with the point of the stick until you reckon that your impression is well done. Then, at your convenience, rub oil onto the paper lightly with a brush, and cast some tallow or wax or sulphur into it. And the paper, without burning, will give you a neat design that you can then mold in plaster or tripoli and then in lead and other metals.\n\n",
  id: 15
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "050r \nposition:: left-bottom\n\nPolished cardboard of little thickness and slightly humid is appropriate. Then if you want, strengthen it with some paper glued on the reverse side.\n\n",
  id: 16
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "050v \nposition:: left-bottom\n\nSteel is applied to tools not on both sides, but underneath the part where one sharpens and whets them, and this part must be made of very soft iron.\n\nposition:: left-bottom\n\nLevantines refine our own steel because their country provides them with none, and they reheat it in a pot with bitumen etc.\n\n",
  id: 17
});
index.addDoc({
  title: "Skin colors",
  author: null,
  layout: "narrative",
  content: "061r \n## Skin colors\n\nIt is necessary that you make it of two kinds, one more red to make the main layer, the other more pale for the highlights, as around the eyes. And then on this last skin color, you will touch lightly the main lights with a little white lead. But avoid applying too much of it because this will look like a face of death. The beautiful Florence lacquer makes a beautiful vivid skin color that resembles the complexion of alexandrine pink and incarnadine\n. \nposition:: left-top\n\nCertain colors need to be ground like minium or massicot. The ashes don’t need to be ground at all.\n\n",
  id: 18
});
index.addDoc({
  title: "Making things round",
  author: null,
  layout: "narrative",
  content: "061r \n## Making things round\n\nIf you want to model well, soften round things by rounding them off with the brush point and the rest with a flat part if it is flat, and thus for the others according to their nature, and lightly with the dry and flattened brush point and with patience.\n.\n",
  id: 19
});
index.addDoc({
  title: "White lead",
  author: null,
  layout: "narrative",
  content: "061r \n## White lead\n\nWithout this, you can’t work on a small scale for which it is necessary to soften with great care. But you can’t do it with ceruse because it does not have enough body.\n.\n",
  id: 20
});
index.addDoc({
  title: "Lights",
  author: null,
  layout: "narrative",
  content: "061r \n## Lights\n\nYour brush shows it to you by making some shadow which must always follow the back of your hand, not in a straight line like this,  because the light would be too crude and too harsh, but obliquely and as an incline like this.  It is necessary that the painting is not facing the light, but be half turned back against it, and above all look for a soft light, for it makes a soft shadow and soft work, like a harsh light makes a harsh work.\n\nposition:: bottom\n\n",
  id: 21
});
index.addDoc({
  title: "To bronze in white",
  author: null,
  layout: "narrative",
  content: "074r \n## To bronze in white\n\nTake looking—glass tin and put it to soak in gum water, and pound it in a pestle. And afterwards, you will put it on the marble.\n\n",
  id: 22
});
index.addDoc({
  title: "To make vermillion",
  author: null,
  layout: "narrative",
  content: "074r \n## To make vermillion\n\nTake two pounds of sulphur, and melt it, and add two pounds of mercury to it. And if this material ignites, cover it quite neatly, so that the air does not pass into the pot, then put everything for some time after into a leaded pot, into the fire. In the space of twenty—four hours, you will have good vermillion.\n\n",
  id: 23
});
index.addDoc({
  title: "To make varnish",
  author: null,
  layout: "narrative",
  content: "074r \n## To make varnish\n\nTake one pound of linseed oil, and then put it in a pot of earth mixed with a breadcrust and three onions, and put it on a charcoal fire, and you will cook it on a low fire, and let it boil for the space of five hours. You will take half an ounce of flour glue, and will make it boil just as before, and stir continuously with a spoon. And then afterwards, you will add two ounces of well—pounded sandarac to it, and will do so as above. And then afterwards, you will take mastic and gum arabic, two ounces of each, both well pounded, and will put everything together, and will have it boil, always stirring, for the space of five hours. And then you will add rock alum, two ounces, and then you will make it boil. And if you add two ounces of gum arabic to it, if you see that they are not cooked enough, have it cook more on a low\n 074v \nfire until it is cooked enough. And strain it through a cloth that is compact enough. And when you have strained it, leave it to cool a little. And if you see that it is so thick that you cannot strain it, you will add a little of that oil and will make it better.\n\n",
  id: 24
});
index.addDoc({
  title: "To make red varnish",
  author: null,
  layout: "narrative",
  content: "074v \n## To make red varnish\n\nTake vermillion, and let it soak in quite light gum water, like the other, and make two or three ground layers as is said above.\n\n",
  id: 25
});
index.addDoc({
  title: "To make yellow varnish",
  author: null,
  layout: "narrative",
  content: "074v \n## To make yellow varnish\n\nTake some gum arabic and let it soak in water, then take some well beaten saffran and soak said gum. And make it quite light, then make your ground layer on that which you want to varnish, and leave it to dry, and when it will be dry give another ground layer of the same varnish, and leave it to dry as before, until it will be dry enough. Then take varnish from an apothecary, crushed by strokes far enough from one another. Then wash your hands quite well and spread your varnish with their palms.\n\n",
  id: 26
});
index.addDoc({
  title: "Recipe for white gum",
  author: null,
  layout: "narrative",
  content: "074v \n## Recipe for white gum\n\nTake white wax and ceruse and a little fine pitch, very well pounded together, and put it in a small new pot and make it melt. And when it will be melted you will make a palette of wood and burnish what you want.\n\n",
  id: 27
});
index.addDoc({
  title: "Green gum",
  author: null,
  layout: "narrative",
  content: "074v \n## Green gum\n\nTake green wax with a little verdigris and make it melt as said above.\n\n",
  id: 28
});
index.addDoc({
  title: "Gilding wood",
  author: null,
  layout: "narrative",
  content: "075v \n##  Gilding wood\n\nFirst of all it is necessary to apply a coat of very clear glue; and when it is dry, you will apply a coat of yellow gold; and when this is done you will take fig tree wood and soak it for a while, and wash the place you want to gild,dhdjhjdhdjh and cut your gold with a knife near where you will put it; and said gold must be applied with cotton, and if you can find some fig tree, take an egg white and stir it frequently.\n\nIf your gold does not have a nice enough color, you will take a partridge feather burn it in a chafing—dish, and turn the smoke toward what you have gilded.\n jkfjoehwfoihwoq ehcfo3 h 2oth o\n",
  id: 29
});
index.addDoc({
  title: "Recipe for coloring all wood",
  author: null,
  layout: "narrative",
  content: "075v \n## Recipe for coloring all wood\n\nTo make it black, the wood needs to be soaked in olive oil and tough meat in a similar case for four or five days, then boil it in where the wood has soaked for one hour, then take it the wood out of the oil. Take some natural sulphur if possible otherwise take another\n 076r \nsulphur. Cover the aforementioned wood with this powder, until it cools, and bring it back to a boil. Upon boiling one will see whether or not it is black enough. If it is not, take the aforementioned powder and apply some over the wood and boil it.\n\n",
  id: 30
});
index.addDoc({
  title: "Medicine of orientals against all maladies",
  author: null,
  layout: "narrative",
  content: "077r \n## Medicine of orientals against all maladies\n\nDry some rosemary in the month of May, then fill this bowl with powder made of it, and place a lit charcoal on top. And, receive the smoke by a quite tightened mouth having closed your mouth well, and a part will come out by your nose. But if you want to purge the head also pinch the nose. Against colds, rheums, and other maladies.\n\n",
  id: 31
});
index.addDoc({
  title: "Tin for casting",
  author: null,
  layout: "narrative",
  content: "079v \n## Tin for casting\n\nThey use common tin, which is the one that pewterers use for plates, which is composed of 9 or ten pounds of pure lead on one quintall of tin.\n\nposition:: left-bottom\n\nSome find that there is nothing better than pure tin.\n\n",
  id: 32
});
index.addDoc({
  title: "Fountains",
  author: null,
  layout: "narrative",
  content: "080r \n## Fountains\n\nIf you wish to raise water higher than its source, make a pipe descend as in A. to B. to give it push , then from B. to C. make the pipe ascend, but not quite to the height of the source, here represented by the dotted line, and then make it descend again in a pipe from C. to D., and then let it rise higher than the line demarcating the height of the source, and do this successively until you reach the desired height. Remark nonetheless that the length of the descending pipe is always twice as long as the ascending pipe. This cone also fills itself and demonstrates a perpetual fountain which you can adapt into a rock, attracting the water with which it is filled by the tip here marked, by sucking and breathing in. You can also make a watering can pipe in this way, so long as the bent pipe is just as long as the straight pipe, but does not extend as far down.\n\nposition:: left-middle\n\nposition:: left-middle\n\n",
  id: 33
});
index.addDoc({
  title: "Founders of small tin work",
  author: null,
  layout: "narrative",
  content: "080v \n## Founders of small tin work\n\nThey usually cast from soft solder the things that should not become hollow, because hollow works require fine and soft tin. However, these things would not otherwise lose their coat or become hollow if they are mixed or include glass tin in them, just like they mix a little glass tin in the soft tin. They carve their work on stones of which the sharpening stones or barber’s files are made. These are found in great flakes near the mountains, and resemble slate. They are found in three colors: one reddish, that is not as perfect as the others because it does not sustain heat ; another one is the color of dark slate, and the other is whitish. When they work a relief, first they print it on carton, which is one finger thick, to serve as a pattern. After planing their stones and rubbing them together , they use a compass or little iron tools to carve their figures. They make their molds with three or four stones, to make a circle or a square with the stones which join perfectly because the stones are of equal size. Before casting, they rub the mould over with tallow, and it the mould absorbs it quickly because it is hot. Then, having put fine powder of quicklime into a cloth, they rub the mould using pounce in beating the linen on top, then blow it a little on top; this prevents bubbles from forming. The main thing is to make some vents. If the work is big, they do as it is shown on the picture. They make a hole in the medal, somewhere where it is least visible, and with a bit they pierce the mold on the side of the medal.\n\nAnd if they want their work to last, they pierce it somewhere and fit in a piece of cork. Lead or tin will not damage it.\n\n",
  id: 34
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "080v \n Make sure the pegs of your frame fit in easily so it will open with ease without moving anything else. Your box molds should fit well, and the table should be very flat.\n\n",
  id: 35
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "080v \n Try to carve with distilled vinegar.\n\n",
  id: 36
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "080v \n Try calcined oyster shells; they are said to be excellent for molding.\n\n",
  id: 37
});
index.addDoc({
  title: "Provisions for the work of Colchos",
  author: null,
  layout: "narrative",
  content: "102r \n## Provisions for the work of Colchos\n\n7 limbecks of glasse 2 lbs. of ☿ One measure of coarse salt 6 unleaded earthenware vessel 2 large unleaded pots for calcinating 2 alembics to distill vinegar 4 pots of good vinegar 3 or 4 lamps 2 lbs. of cotton One pair of scissors\n",
  id: 38
});
index.addDoc({
  title: "For the furnace",
  author: null,
  layout: "narrative",
  content: "102r \n## For the furnace\n\nA chest with a ten inch wide square stone, and of a one—foot thickness, pierced in the middle 2 boxes or two earthenware pots with a lid 2 small pipes of white iron to evacuate the smoke of the furnace Turnipseed oil for the lamps to heat the furnace A fire—steel\n",
  id: 39
});
index.addDoc({
  title: "Royal cement",
  author: null,
  layout: "narrative",
  content: "102r \n## Royal cement\n\nOne pound and a half of vitriol As much saltpeter As much rock alum\n",
  id: 40
});
index.addDoc({
  title: "Turtles",
  author: null,
  layout: "narrative",
  content: "105r \n## Turtles\n\nMales have shells that turn down at the end near their tails, and their underbelly shells have lined marks along the bottom from their tails to their head. And the females have neither the turned down shell near the tail nor the marks.\n\n",
  id: 41
});
index.addDoc({
  title: "Catching nightingales",
  author: null,
  layout: "narrative",
  content: "105v \n## Catching nightingales\n\nSee the 15th folio after this.\n\nIn order to catch them, you must observe them in real life, the food that they favor and their mating season. The nightingale, as long as he is singing, marks his own territory. Therefore approach him by pretending to look for something on the ground. Take some worms from old flour or from beneath what you are kneading or from mills, which nightingales love, and put some on your hat, fastened with a pin or in any other way, so that it can wiggle. And five or six steps away from the hedge where it is singing, dig a hole, and place some worms in it, as well as your device made out of little criss—crossed sticks. As soon as you leave it will be anxious to go and see what you have done. And seeing worms it will enter.\n\nposition:: left-bottom\n\nSome people sell nightingales on trees.\n\nposition:: left-bottom\n\nIt is easier to catch nightingales in the cool of the morning or evening, near fountains or shaded areas.\n\n",
  id: 42
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "105v \nposition:: left-bottom\n\nSome people sell nightingales on trees.\n\n",
  id: 43
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "105v \nposition:: left-bottom\n\nIt is easier to catch nightingales in the cool of the morning or evening, near fountains or shaded areas.\n\n",
  id: 44
});
index.addDoc({
  title: "Making gold run for casting",
  author: null,
  layout: "narrative",
  content: "106r \n## Making gold run for casting\n\nBecause gold cools down very quickly, you have to give it a mixture when it is well melted that will keep the heat. Sublimate softens it nicely. But, since it vanishes into smoke, it won’t aid you for very long. Therefore mix this mixture into it when you want to cast it: of sal ammoniac, the best verdigris that you can find, a bit of borax and some saltpeter. And this, held over the heat, will become neat. The saltpeter makes it clear and heats it. But the key thing in this mixture is the verdigris, which has to be good. This mixture softens your gold so much that it becomes as tractable as lead, even if it is good gold.\n\nFor sand for molding flowers and leaves &amp; other delicate things, mix in raw plaster, crushed brick and stone alum.\n\nTo moisten sand, spirits are excellent because it makes sand fine and leaves in a vapor when you reheat your box frame.\n\nDilute sal ammoniac is very good, is excellent for moistening sand, but for lots of water you only need a little bit of sal ammoniac.\n\nA raw lump of metal, if you don’t have crocum ferri, is good for gold.\n\nThe snakes and the lizards you wish to mold should not be kept for a long time, because if they are alive, they will waste away, and if they are dead, they will decay.\n\nPlaster of Paris is as hard as stone and very good. When you want to choose some for your sand, take the rawest and the hardest that is possible for you &amp; that does not make any powder. Transparent [plaster] and that which makes powder in giving way is that which is not good for this work. A sign of that which is near perfect is that it is hard &amp; makes shining grains that look almost like sugar. Finally, to mix it into the sand to cast gold, it has to be put in the fire twice, &amp; reheated twice.\n\nposition:: left-top\n\nWhen gold is really pure, it is so dry that it can just barely endure a hammer. But this mixture softens it like lead.\n\n",
  id: 45
});
index.addDoc({
  title: null,
  author: null,
  layout: "narrative",
  content: "106r \nposition:: left-top\n\nWhen gold is really pure, it is so dry that it can just barely endure a hammer. But this mixture softens it like lead.\n\n",
  id: 46
});
index.addDoc({
  title: "Spalt",
  author: null,
  layout: "narrative",
  content: " \n## Spalt\n\nSpalt is white like cooked plaster and one can find it in mounds and stones made in long stairs and long veins. It is very soft such that with a fingernail and it makes a powder like that of our chalk from Champagne. And because everything which is provided from the earth is mixed with some other substance, to purify it [the spalt], one boils it with somewhat large gemstones then tempers it with essence of sal ammoniac. One puts [a lump of it] the size of a walnut in a large bottle of water and that way one tempers it &amp; reducing it into small balls, [one] purges it of impurities [by] then putting it on to cook cleanly in a vessel of earth[enware] in a furnace like those in which pots [are made] and one leaves it there to the point at which pots would be fired. After one tempers it more with essence of sal ammoniac &amp; boiling it very strongly and emptying the murky water &amp; putting it in a separate vessel straight after put back the same water over it &amp; one boils &amp; one puts back the murky water again with the other. And one does this therefore until that which is there has passed away. In this way one purges and purifies and makes it a very fine and malleable [matter]. After one has taken away the water by tilting [it] or with a sponge, one takes the residue and dries it. Then moistening it with the aforementioned water the way one did with the other sand, one uses it in a frame or if it shrinks [this] is a sign that it is not fired enough &amp; needs to be fired more. This one is proper for molding all metal and especially gold and silver and the more it is used the better it is. One should put alum which you have cast of lead or tin separately because it makes gold. sour if you cast it there.\n\n",
  id: 47
});
index.addDoc({
  title: "A cast of lead or tin",
  author: null,
  layout: "narrative",
  content: "110v \n## A cast of lead or tin\n\nBecause you want to cast tin very thinly, if your medal, plant or other thing you want to mold is thin and fine, make sure to include more tin, much more than lead, namely less than the fourth part of lead for three of tin. And moreover, one only puts lead in as an alloy. Contrarily, if you want to mold something strong and thick, put a lot more lead in than tin. And for the one and the other you can put in a little looking—glass tin, but only a very little, with a little resin, when you want to cast. Since then, when molding with pure new lead, I put in two ounces of pure tin for every pound of lead. And when molding with pure tin, I put in two ounces of pure lead for every pound of tin. I made some plants and snakes as if they were real.\n\nposition:: left-bottom\n\nI cast tin when it was nearly red, and the same thing with lead, which however had not remained in the fire for too long, because it becomes brittle and burns up.\n\n",
  id: 48
});
index.addDoc({
  title: "Casting with lead and tin",
  author: null,
  layout: "narrative",
  content: "139r \n## Casting with lead and tin\n\nThe way I have done it  for lizards and serpents is with two ℥ of pure tin for one lb. of unrefined lead that is impure. The mold is made out of the aforementioned sand, common for all metals, when it is reheated, leave it to cool until you can put your finger in it without causing a breach in the gate of the cast. As for the lead, it is melted in a crucible with a bellows’ fire until both the crucible and the lead are red. When it gets to that state, cleanse it anew with charcoal or with a specially made scraper or with the pufts of the little bellows. This done, leave it to rest in it red state and you can even reheat it, then if you want, throw in a bit of resin to burn away the filth. However, some think it best not to put any in because it leaves filth. But when they are ready to cast, they cannot forget to also thrown in a bean—size quantity of bismuth for each pound of lead. And it must be as red as the melted metal when it enters the mold. If the mold is large, it is much better to put in in a press so that they join well and so that the lead does not come out of the mold. However, should this happen, and that for the first, second or third time your mold does not fill up, cast heartily because for as long as your metal is red it will mix and join with the other one and will come out very neatly like the main one. The same thing can be said for pure tin used for thin things. And that way for doing pure tin is one ℥ of new lead for one lb. of the former. Large molds must be put in a press held tightly between two layers of copper, and then bury the whole thing in sand, which is better than ashes, because being heavy, it will seal better. Otherwise large molds are prone to open because the metal is heavy. Some make square molds \n  139v \nare made of earth or blades of copper, or iron, or wood covered with white iron, in order to bury more easily these aforementioned molds between the thin sheets of copper, estric or one of iron.\n\nposition:: left-top\n\nWhen the metal is thick, you do not need to cast as hot as when it is thin.\n\nposition:: top\n\nWhen you melt this often, it becomes sour and fragile because it has to be cast very hot and it makes it half—calicanated. Use new stuff.\n\nposition:: left-top\n\n+\n\nposition:: left-top\n\nNote that If you want to cast with cuttlefish bone, they cannot be too warm because that would burn the cuttefish. For this effect, try paper. It it becomes brown, it is enough, and it is good for casting, but if it blackens the paper, then it is too hot.\n\nposition:: left-bottom\n\nIf you want to cast paper with writing on it, make a mixture with half lead and half tin. As soon as it is melted, throw it between two pieces of cardboard on a flat place that is level. And with a point or gold or hard wood, engrave on the left the writing that you want. And having poured the lead onto the cardboard, press onto it the other piece of cardboard.\n\n",
  id: 49
});
index.addDoc({
  title: "Casting wax to mold an animal that one has not got",
  author: null,
  layout: "narrative",
  content: " \n##  Casting wax to mold an animal that one has not got\n\nTake some white wax which is much more appropriate for this kind of work than anything else, because it is much firmer and does not leave as much filth, as much as you need to cast the animal that you propose, and no more. And [take] a half quantity of ground coal and neatly sieved through a cloth or coal sleeve, using it to give some color to your wax, that would otherwise be transparent and you will not be able to see your lines as clearly. Put your wax on the coal fire to melt. And when it is well—melted and well—liquified, have, for a full eared—porringer of melted wax, as much sulphur as a large walnut. Pulverize it. Melt it over a slow fire and when it is melted, do not leave it on the fire because it will become too hard. But take it off and keep stirring it with a little stick and when it has finished bubbling and is as liquified as water, cast it into the wax that you will have previously removed from the fire. And mix and stir both of the them so that they join together. After stir in little by little while continuously mixing, the charcoal that has been repeatedly ground, and in this way it will be very well incorporated. This is how you will know that your wax has gone beyond its ideal heating point, it will release no more smoke, it will start to have lines appearing on the side and not in the middle, and those lines will be close to each other. If you cast too hot, you will not be able to separate your wax from your mold and it would stick to the cast. When it is at the right state, stir it with a little stick so that the pulverized charcoal is well mixed in and has not fallen to the bottom of the mixture. And in this way, throw it in your mold bit by bit and not in one go, because wax is not runny\n\nposition:: left-top\n\nThis black sulphured wax is for fashioning round figures that do not come out of the mold. And they need to be burned in the moule au noyau rather than be opened like the ones that have something jutting out or an intertwining of legs and arms. And this wax, thanks to the sulphur, will melt with little heat and leave without leaving any filth. If by some misfortune the crushed charcoal remains in ashes, when you open the mold and blow on it, it will come clean.\n\nposition:: left-bottom\n\nTo make wax serpents or other things to affix to candles, it is necessary to cast them with esbaucher wax of all colors. \n \n not like other things. And for this one, you can cast two or three times until your mold is full. Now, concerning this mold of pulverized white plaster &amp; reheated in the manner of the sand from the preceding recipes, you should have made it long ago because it is used many times. But, before using it, soak it for a good hour in cold water, &amp; at a minimum, at least as long in hot water that at first is so hot that you can’t hold your finger in it. And note that it absorbs no more, but that it appears very wet overall without water seeping into it. In removing it closed from the hot water, cast your wax in such a state of heat as has been described. And neither the first nor the second casting will readily come out well, hardly, until the mold is soaked. Let it cool down before opening it so that the cast thing not break. You will know that the casting is good when the wax coming back out of the mold is thin and even. Remember to make several castings along the whole length of the mold so that in this way the wax runs better. Make the firstcasting twice as large as other molds. And if, in the first casting, your work fills with bubbles and in so doing does not come out neatly, it’s all the same, because you have to face the fact that the three or four first do not readily come out well. Firstly, you will know whether there are a few barbs that keep it from stripping well. And you will remove them if, on their own, they do not remove themselves in the two or three first castings. And the more that you cast, the more you will do it neatly. And your mold will serve you more than one hundred times if it Is well governed. But it is good to soak it one night or one day before casting so that it be well soaked. The same must be done for fruits made from sugar. This wax is very soft &amp; friendly &amp; pliant, like copper. And if it is hard [this is] because of sulfur, which makes it melt more easily than than other [wax], so much that you can see evidence on a hot slate. And the sulfur that you put inside will be found the second time that you melt it, [as] cracks on the bottom. Having in this way passed through wax, it will not catch fire at all when put to a candle. And in this case, I believe that it will cast quite the medal [illegible]. One uses the same wax in place of varnish to [illegible].\n\nposition:: left-middle\n\nWhen your animal is cast, cut away the froth &amp; superfluous things with a hot pen knife. And if you want, plait and wrap it around some stick or candle, put it in some hot water to soften and hold it in turning it around.\n\nposition:: left-middle\n\nLower the protrusions of the castings so that they be even &amp; that the wax has more silver so that it can run all in one go without turning through the windings of the snake. \n  \n to engrave on silver &amp; copper with aqua fortis. With this [wax] too, one fills the cavity of a relief, &amp; then casts in this cavity, with moistened sand, which immediately takes the relief very neatly. And then you can cast its cavity on it in copper, gold, and silver, and make really singular seals.\n\nposition:: left-top\n\nSeals\n\n",
  id: 50
});
index.addDoc({
  title: "To cast in sulfur",
  author: null,
  layout: "narrative",
  content: "140v \n## To cast in sulfur\n\nTo cast neatly in sulfur, arrange the pith of bread under the brazier, as you know. Mold whatever you want into it &amp; let it dry &amp; you will have very neat work.\n\nposition:: left-top\n\nTry sulfur passed through melted wax, because it will no longer ignite &amp; and make eyelets.\n\n",
  id: 51
});
index.addDoc({
  title: "Molding and shrinking a large shape",
  author: null,
  layout: "narrative",
  content: "140v \n## Molding and shrinking a large shape\n\nMold it with the pith of bread just out of the oven, or like that aforementioned, &amp; in drying out it will shrink &amp; consequently so will the medal that you will cast. By these means — lengthening out or enlarging the imprinted bread — you can vary the shape &amp; from one face make several different ones. The bread straight from the oven is best. And the one which has been heated twice contracts more. You can cast sulfur without letting the imprint on the bread dry, if you want to cast it as large as it is. But, if you want to let it shrink, let it dry to a greater or lesser extent.\n\n",
  id: 52
});
index.addDoc({
  title: "Casting of lead and tin in plaster",
  author: null,
  layout: "narrative",
  content: "140v \n## Casting of lead and tin in plaster\n\nIf you want to cast any flat medal or any animal that is not very heavy, and that must not be burnt inside the mold, you can indeed cast in mixed plaster &amp; brique, as above; and not in plaster alone, because it contracts too much feeling an ardent fire if it is not so mixed. But, with the brick, it holds well. However, take heed to dry out your mold at length &amp; on a slow fire &amp; with patience, because there is no need to reheat it. But when your work is of flowers or other things that want their mold to be reheated &amp; set ablaze, mix the plaster with stone alum &amp; even with crocum. I have molded in very neat plaster &amp; brick &amp; it has sustained several castings.\n\nposition:: left-middle\n\nI tried both plaster &amp; brick alone and molded en noyau with like the others. My mold was very clean, having lightly oiled &amp; rubbed my medal with spirits. I made my casting wide at the entrance, narrowing it as it goes along until it reaches the medal which is very thin. I notched the casting which embraced the medal well. I dried the mold out well on a slow fire &amp; finally, I heated it well without turning it red. I let it cool in such a way that I could hold my finger to it without burning myself. I made a line of 4 ℥ of tin, &amp; ix deniers of lead. I cast it red, and it was quite good and beautiful. Afterwards I put xii deniers of lead on top of 4 ℥ of tin. It is very good &amp; beautiful.\n\nposition:: left-bottom\n\nWhen there is nothing to burn in the mold, it is not necessary to reheat it for lead and tin. But for flowers and other things that must be burned, it is.\n\n",
  id: 53
});
index.addDoc({
  title: "Casting a crayfish",
  author: null,
  layout: "narrative",
  content: "141r \n##  Casting a crayfish\n\nThe crayfish is one of the most fantastical to cast, but also provides an example for casting other difficult things. You can distinguish males and female by the eggs that the females carry, and by the four little white back legs that males have in their tails after behind main eight legs. It is good to dry them out a bit so that the bumps come out more hard and beautiful, because none of what is made of shell shrinks. It is true that should you dry the little inside legs for too long, they become diminished and have no body. If they are too dry, the flesh separates from the scales. Be sure then to maintain the mean. They have certain hairs between the legs and at the end of the tail. And because all hair is difficult to cast, because it gets mixed up in the sand and does not release, you can burn it by putting a hot iron on the crayfish so that it the hair cannot be seen. As for animals that have hair or feathers, you must grease the hair with wheat oil, which is very dry and which will make the hair lay flat and straight. In this way, you will have form of your animal and you will have the hair. Should it the hair be wavy, it can be repaired. If your crayfish has eggs, which are delicate, and which will be difficult to take out of the mold without breaking, you would do better to make the first cast with the crayfish on its belly and eggs. In this way, you will open the mold with it the crayfish on its back, which will be hard and easy to manipulate. And the belly and the eggs will remain in the mold. And rather than opening your mold for the second time, you will have to burn it with them in it. This way, it will open easily, and what has been burned will come away cleanly. In this way, the second casting, which is done on the first one that has successfully taken hold, separates easily from the first, after having been refired. This is a singular secret for similar moldings.\n\nposition:: left-top\n\nThe casting is made by the very thin tail.\n\nposition:: top\n\nIf some little thing is missing, you can reattach it or else fill it with goldsmith’s cement.\n\nposition:: left-top\n\nDo not forget to rub with spirits before you mold.\n\nposition:: left-top\n\nStag beetles, crayfish and crabs are molded in the same way.\n\nposition:: left-middle\n\nIf your crayfish has no eggs, mold the back on top and the belly on the bottom. You can give it some.\n\nposition:: left-middle\n\nIt the crayfish can be molded hollow for the body, but not for the legs. And for a good result, take note that the crayfish is rather fantastical to mold hollow, this ought to be reserved for turtles.\n\nposition:: left-bottom\n\nWhen you open your mold, you will find the crayfish has white bones, but they will not be powder. And without opening it, the mercury will not have affected the process.\n\nposition:: bottom\n\nApply very light oil colors.\n\nposition:: bottom\n\nTo paint it, boil it with wine and a bit of salt so that they become very red and use this as a model. Paint the back with vermillion mixed with laquer, and the sides and the underside of the belly and the legs with vermillion and yellow ochre and white. \n 141v \n Let your crayfish dry a little in the sun, by itself. If it has spawns, they will shrink while drying, and be all the more beautiful for it. Make your paste out of yellow potter’s earth, just like for the other representations. Lay your crayfish on it, the back side down, and the other parts which are more tricky to mold —— legs, belly, eggs — side up. Drive in the back side in the clay paste up to the legs, which is about the half part of the crayfish’s body. Fix the body with a pointy iron thread in the middle and, if you feel you need it, you can also drive another one at the edge of the tail. And in order that the big legs be lower than the head, which is lower because it is linked from below, add a little clay under the head. Then add a bit of clay under the jacket in order to raise it. Hide the feelers under the clay and under the crusher claws, then arrange it as you like. Stretch out the walking legs to the joints, and for the first cast, bend the second part of the walking legs. Fix the joints of the legs with wax and a warm wire so they will not move. If you want to mould something fancier, fix the end of one walking legs on the body or on a crusher claw , using the same wax. If the female has spawns, bent half the tail over the spawns, and keep the shape by fixing the tail with a wire. Be sure that you will be able to clean this part. Finally rub your crayfish with spirits, and cast your sand. Once the sand is hardened, uncover the back side, the head, the eyes, and the small legs close to the crusher claws, and the walking legs all along. One must uncover these parts as much as possible. Then bend and cover the spawns again. The other animals\n\nposition:: left-top\n\nFix what may raise the two padded edges on each side of the mouth with melted wax under them.\n\nposition:: left-middle\n\nposition:: left-middle\n\nUncover as many parts as possible, but be sure the channels you make are well stripped.\n\nposition:: left-middle\n\nIncline your mould to the thickest side of the animal.\n\nposition:: left-bottom\n\nTo paint the crayfish, one paints the middle of the back with vermilion, mixed with a bit of lacquer. The sides, the belly, and below the legs with a mixture made of vermilion, ceruse, and a bit of yellow ochre. As with all things, always keep the real one in front of you in order to copy it as realistically as possible.\n\nposition:: left-bottom\n\nLay the feelers on the crusher claws, or solder this part with a wire made of bleached brass.\n\nposition:: bottom\n\nWhen you arrange the legs, be sure that they do not get over the belly, and that they are well set against the belly otherwise [illegible] \n 142r \n are not so uncovered. But since crayfish are troublesome to burn &amp; clean, you have to uncover them as much as you can, even the little legs just until the tips, because they are troublesome &amp; if, in order to not alter them, you have to take them out, you could break something of the mold. Having uncovered it with the point of a knife, like an engraving stick or another fitting thing, clean off the sand at the joints &amp; elsewhere with your little brush really very scrupulously. And if something is loosed from the crayfish, attach it with wax, as is discussed. And also attach the horns this way. And also do the casting the length of the extremes of the little legs with wax. And refill the holes that have been made with the needles of iron wire with it. And everything being quite clean &amp; having uncovered more than half of it, oil your mold after having soaked the back side in water, &amp; do not forget to oil all the fine parts that are between the legs and the little beaks; then rub the crayfish with spirits. And do your second casting after having made the first mold even, so that the cramp—irons join better. Your mold must be larger on the side with the impression than on the back. Do not open your mold after the second casting, so that it not become clayed &amp; reheated &amp; that which is inside not be burned. Do not forget to mix crocum throughout your sand when you mold the crayfish, because you must really reheat it &amp; the crocum withstands this marvelously. To mold a crab &amp; to mold a crayfish are exactly the same. When you have uncovered your crayfish on one side do not delay at all before doing the second casting, because crayfish dry out. It is not enough to uncover the crayfish such that you see the whole half the half you uncover, but take heed that your mold, even when you are uncovering, be good and stripped, because if the crayfish gets well burnt, you will not be able to open your mold without breaking it.\n\nposition:: top\n\nRestore it with a pen knife, little chisels, or engraving sticks.\n\nposition:: left-top\n\nAs you see here, but a wax casting all around &amp; at the end of the tail, where you will do the principal casting, two or three more.\n\nposition:: left-middle\n\nMake the casting with candle wax shaped in a thread like a large packthread, the whole length from the end of the claws to the extremity of the tail. If there is also some claw end or other part that is extended past the rank of the others or is raised up higher or turned up all alone, make a wax casting for it from its end just barely not joined to the body or to one of the large claws or to some other place where lots of metal will be wedged in.\n\nposition:: left-bottom\n\nHaving uncovered it, attach &amp; secure the two little bearded horns of the crayfish, and anything else that is not secured, with wax.\n\n",
  id: 54
});
index.addDoc({
  title: "Molding grasshoppers and things too thin",
  author: null,
  layout: "narrative",
  content: "142v \n## Molding grasshoppers and things too thin\n\nIf you have to mold a piece of written—on paper that is too thin, after you have done the first cast and it has set, give a little thickness to the reverse of your paper with melted butter, which is the most appropriate means there is, &amp; for strengthening the wings of either a butterfly or a grasshopper, or any delicate part of an animal to which you need to give thickness. But take heed to apply this melted butter under the wing or in whichever place it will not be seen. For giving thickness to a pansy or other flowers, butter is not good, but rather wheat oil, which is soon dry &amp; holds firm. Wax would not be appropriate here for it is too hot once melted, and it makes the thing to which it is applied contract. But butter is amiable and handleable.\n\nposition:: left-top\n\nIf you write on paper or on common carton and your letters are made with gum, the moisture of the clay plate (?) or the wet (?) sand for a noyau will moisten your letters and undo them. Write therefore with cinnabar mixed with oil, on oiled &amp; stamped (?) paper.\n\nposition:: left-middle\n\n+ Reheat your molds with charcoal firstly lit in the forge, so that the fire is not too hot and does not break the molds. And do not fire as strongly where the mold is thin as where it is thick.\n\n",
  id: 55
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "142v \n## Molds\n\nMake some notches in them the molds that enter more into the inside of the mold than the outside because in this way, they have more strength. Take care to keep from reheating them suddenly in a burning hot fire, because this will make them break.\n\nposition:: right-middle\n\nDo not keep them molds in a humid place, nor an enclosed place if they are not well dry, because they will mold. The same with dried animals.\n\nposition:: left-middle\n\nIt is not at all necessary to reheat the molds two times when the animal can pull away without burning, as do toads, which can very well be molded hollow like all thick animals. However, it is always good to redden the mold once.\n\n",
  id: 56
});
index.addDoc({
  title: "Lute for luting your molds",
  author: null,
  layout: "narrative",
  content: "142v \n##  Lute for luting your molds\n\nI have not found a lute that is made more quickly than this one, nor a better one. Take some of the lean earth that artillery founders and bell founders use to make their trusseaulx and molds, which is lean and sandy. Soak it moderately like a very thick mortar. Mix into it about one half of horse manure and then beat it well. Afterwards mix in one third of cloth waste or cloth shavings and beat it again quite strongly. You can reheat your mold as soon as the lute is ready.\n\n",
  id: 57
});
index.addDoc({
  title: "Mercury in molds, for cleaning",
  author: null,
  layout: "narrative",
  content: "158r \n## Mercury in molds, for cleaning\n\nTake heed that your mold be quite cold when you blow in order to get the ashes out. And afterwards put in ☿ in order to finish the cleaning. Because if the mold is hot, the ☿ will go inside; seek out the conduits in escaping, will leave its own odor, which will aggravate the tin or other metal that you will cast, such that it will break in touching the mold at all. The heat of the mold also retains some little grains of ☿ that will make lumps; stick to the sides of the molded leaves and attach to them; make them frangible. The ☿ cleans ashes well. Likewise flat things where there are not delicate traces that it could break with its weight. And therefore, if you can cast neatly without putting it in, don’t use it at all. But if you have need of it, mix your crocum sand so that it withstands fire well. And after having put in the ☿, evacuate it, bouncing the end of the mold from below while moving it. Afterwards reheat your mold gently so that the ☿ is gone from everywhere. In this way I cast a branch of periwinkle leaves; flowers very neatly. Having put a branch of melted [illeg] in the flower, on the back of the flower [illeg].\n\nposition:: left-bottom\n\nReheat your mold until it is good and red before casting, so that the ☿ evaporates well.\n\n",
  id: 58
});
index.addDoc({
  title: "Candle smoke",
  author: null,
  layout: "narrative",
  content: "158v \n## Candle smoke\n\nIt allows the piece to be taken out more easily, and even if it is slightly thick, it does not stick because it has no substance. I have perfumed my core molds this way for tin and lead, and I have casted in a cold mold, but drying it well beforehand, and the piece came out quite cleanly. It is true that lead mixed with half the quantity of tin, because the medal was very thick, was very hot.\n\n",
  id: 59
});
index.addDoc({
  title: "Tin and lead",
  author: null,
  layout: "narrative",
  content: "159r \n## Tin and lead\n\nThey must be beaten out very finely and tin will not get brittle or break, lead is a bit fatter. But that is why it is necessary to reheat it under hot ashes, and to beat several leaves together.\n\n",
  id: 60
});
index.addDoc({
  title: "Molds",
  author: null,
  layout: "narrative",
  content: "164v \n## Molds\n\nFor molds wherein something must be burned (away), and do not open before being reheated: do not cast before refiring/reheating. For large molds that produce large and wide casts, it is necessary to score it with strong notches so that the pitch of the metal does not run as forcefully. These will not make many burrs if they are pressed. Prior to doing so, place between the mold and the press pieces of thick felt for mittens, which will fill the cavities and protect the mold from cracking. The clamps should be placed prior to heating or drying.\n\nposition:: top-left\n\nWhen the ground from which you are making your earthen base to lay out your animal is too soft, the pins you place come out easily when you cast the sand and so the mold is spoilt and the design is defeated. Therefore when you know that your slab is too tender and soft, spread some hot cinders over it and blow with the bellows.\n\n",
  id: 61
});
index.addDoc({
  title: "Reducing a round form into a hollow one",
  author: null,
  layout: "narrative",
  content: "169v \n## Reducing a round form into a hollow one\n\nYou must firstly mold it with plaster as has been said before, and in the plaster throw in some wax from which will come a relief that you will repair very neatly, and will shape at your pleasure. Then you will mold this wax relief once more in plaster, or even better with your tempered sand, #, as if for a noyau. And in the latter throw in some lead and from this you will have a very neat relief, and if it is not, repair it on cement or a similar material, and beware that it should always release well. And this one will always serve you as a model for making as many hollow molds as you would like. In this way, place half of your lead figure which you have oiled, and moisten it with spirits as we have seen above, on your clay base, then mold this half with a white plaster. Having taken hold, and having smoothed and flattened the plaster, take your black wax mixed with sulphur as we have seen before, because it leaves nothing in the mold and melts quicker. Dip it in hot urine, and once it is softened enough, make an imprint with it on your half figure in lead. And you will have a very neat hollow mold. Then adapt your wax hollow mold into a square shape, as it pleases you, as long as you have sufficient thickness, and make sure it is well even on all sides, and then mold this hollow wax; and having it imprinted on one side, and having it flat and even on the other, in the same way that you would mold a flat medal in wax or metal in a noyau. And the noyau mold will give you, whether in silver or any other metal you wish, a figure similar to the wax one, which is to say, flat and even on one side, and hollow on the other. And having cleaned this hollow, and having put it in the bleach, if it is made of silver, you can put into it some sugar work\n\nposition:: left-top\n\nHaving made a hole in your clay base and having placed there your half figure in wax, oil it a bit so that it comes out more easily.\n\nposition:: left-middle\n\nTransparent wax is not good as opposed to one that has body, for making good imprints.\n\nposition:: left-bottom\n\nBecause you have molded one of your halves with plaster and wax, you can do the same thing to the other half.\n 170r \nperfume and similar things. But be sure that the black wax with which you cast is hard, so it will come off rapidly when dry so you can see if it has been stamped correctly. It can be made harder by adding more melted sulphur in the melted wax, and a bit of resin.\n\n",
  id: 62
});
index.addDoc({
  title: "Common medals",
  author: null,
  layout: "narrative",
  content: "170r \n## Common medals\n\nRelief awls are made of untempered steel, and then it is tempered. With it we beat on a matrice, not red hot on the fire as some people think, but on some steeled iron, reheated and adoulcy, that is then tempered.\n\n",
  id: 63
});
index.addDoc({
  title: "To preserve oneself",
  author: null,
  layout: "narrative",
  content: "170v \n## To preserve oneself\n\nAcetum paratum ex ruta baccis juniperi simul tusis Eoaceto extinguantur lateres igniti. Et vapor excipiatur ore naribus. Rue vinegar together with crushed juniper berries. Pour the vinegar over red hot bricks and inhale the vapor through the mouth and nostrils. This is to preserve oneself when going into noxious air: a garment can be perfumed with this vapor in order to remove infection from a room, house, etc. And if you find yourself in a place where you do not have this preparation, carry rue and berries crushed together, then, if need be, boil them in vinegar and use as described.\n   Ottonis episcopi | Frisigensis | Ab orbe condito Abbatis | Urspergensis | Chronicon Hieronymus | Mercurialis, | Variarum Rerum Scoticarum Historia, Georgio Bucanano authore Rembertus Dodonæus, Mechliniensis medicus, | De stirpium historia De L’Orme, De l’invention de bien bastir, and other works Telesius, De coloribus, Vascosan Marbodius, De lapillis prætiosis\n",
  id: 64
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": "Casting wax to mold an animal that one has not got",
  "author": null,
  "layout": "narrative",
  "link": "/texts/139v_1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/169r/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p001r_2/",
}
,{
  "title": "For cages",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006v_a1/",
}
,{
  "title": "For stamped ornaments used for embellishing and inserting into or covering the edges of mirrors, the tops of chests, or the friezes of bed valances",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p006v_a2/",
}
,{
  "title": "To gild with gold color and tinsel",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a1/",
}
,{
  "title": "To color stamped ornaments for trunks",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a2/",
}
,{
  "title": "Doublets",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a3/",
}
,{
  "title": "Fish glue or usblac and mouth glue",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p007r_a4/",
}
,{
  "title": "Birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_1/",
}
,{
  "title": "Grain of lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_2/",
}
,{
  "title": "Birds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_3/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p049v_mb1/",
}
,{
  "title": "Preserving fruit for the entire year",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_1/",
}
,{
  "title": "Molding",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_2/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050r_mb1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p050v_mb1/",
}
,{
  "title": "Skin colors",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_1/",
}
,{
  "title": "Making things round",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_2/",
}
,{
  "title": "White lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_3/",
}
,{
  "title": "Lights",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p061r_4/",
}
,{
  "title": "To bronze in white",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_1/",
}
,{
  "title": "To make vermillion",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_2/",
}
,{
  "title": "To make varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074r_3/",
}
,{
  "title": "To make red varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_1/",
}
,{
  "title": "To make yellow varnish",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_2/",
}
,{
  "title": "Recipe for white gum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_3/",
}
,{
  "title": "Green gum",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p074v_4/",
}
,{
  "title": "Gilding wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_2/",
}
,{
  "title": "Recipe for coloring all wood",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p075v_4/",
}
,{
  "title": "Medicine of orientals against all maladies",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p077r_a2/",
}
,{
  "title": "Tin for casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p079_3/",
}
,{
  "title": "Fountains",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080r_3/",
}
,{
  "title": "Founders of small tin work",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_a1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_mb1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_mb2/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p080v_mb3/",
}
,{
  "title": "Provisions for the work of Colchos",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_1/",
}
,{
  "title": "For the furnace",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_2/",
}
,{
  "title": "Royal cement",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p102r_3/",
}
,{
  "title": "Turtles",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105r_1/",
}
,{
  "title": "Catching nightingales",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_3/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_mb1/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p105v_mb2/",
}
,{
  "title": "Making gold run for casting",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p106r_a2/",
}
,{
  "title": null,
  "author": null,
  "layout": "narrative",
  "link": "/texts/p106r_mb1/",
}
,{
  "title": "Spalt",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p108r_a1/",
}
,{
  "title": "A cast of lead or tin",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p110v_3/",
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
,{
  "title": "Mercury in molds, for cleaning",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158r_a1/",
}
,{
  "title": "Candle smoke",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p158v_3/",
}
,{
  "title": "Tin and lead",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p159r_a4/",
}
,{
  "title": "Molds",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p164v_1/",
}
,{
  "title": "Reducing a round form into a hollow one",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p169v_2/",
}
,{
  "title": "Common medals",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170r_1/",
}
,{
  "title": "To preserve oneself",
  "author": null,
  "layout": "narrative",
  "link": "/texts/p170v_3/",
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
