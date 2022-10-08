import { PrismaClient, Prisma, activityType } from '@prisma/client'
const prisma = new PrismaClient()

const activityData: Prisma.activityCreateInput[] = [

{
    name: 'pizza tour (Available in English)',
    latitude: '-34.601041',
    longitude: '-58.383079',
    descripton: 'Buenos Aires the City of the domes, Bars and Historic buildings and a lot of culture. Pizza is part of the local daily life and its history and tradition are an outstanding brand to share with friends and family.\n' +
      'La Pizza de Buenos Aires, which arrived in our lands in the late nineteenth and early twentieth century with the wave of Italian immigrants, has its own style and Buenos Aires style. I invite you to know its history and to see why it is the best pizzas in the world.\n' +
      'The route will be through Corrientes Street and Talcahuano.\n' +
      'The tasting is paid locally, without commitment to purchase.<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [                 
   {url: "https://media.guruwalk.com/2ga39iq6ucgwuoqc9ecsuji1kokn"},
    {url: "https://media.guruwalk.com/fnw7npbgga386bdh23eqvvagltgc"},
    {url: "https://media.guruwalk.com/fbt2r89e12nus4a4cfqqapa5s862"},
    {url: "https://media.guruwalk.com/qve2k0e49f90orxzxokpweuuohzp"},
    {url: "https://media.guruwalk.com/jyaxcqo9nkey802es7bp1d5stc9x"},     
    ]} ,
    type: { connect: { id: 7 } }
  },
  {
    name: 'COGHLAN Free Tour: Urban Art, Suburban PEACE (Available in English, Spanish)',
    latitude: '-34.565584',
    longitude: '-58.471431',
    descripton: '<p>Minimum Reservation: 4 people. MANDATORY PROTOCOL: - Use a face mask and / or protective mask. - Bring alcohol gel and / or hydroalcoholic solution. - Respect the established physical distance. WHAT IS COGHLAN: URBAN ART, SUBURBAN PEACE? Coghlan is an oasis in the vertigo of Buenos Aires. An English-style neighborhood built for and by train, with a friendly and authentic rhythm, where a sense of town, or small island with a magical climate, and a unique imprint of street art and urban muralism is perceived. In Coghlan it makes you want to sit and watch people go by ... and let Coghlan pass through our eyes: walls intervened by artists from all over the world, full of messages and colors; low houses, other stately, triangular roofs that evoke story castles; factories converted into universities and ecological lofts ... and mythical stories of those who toured its streets. Coghlan is that old British-style farmhouse, which began to grow around the station, and today is synonymous with austere modernity, ancient customs and young ideas, with an urban mentality while retaining the suburban serenity of 1891, the year that John Coghlan It became a neighborhood. WHERE IS COGHLAN: URBAN ART, SUBURBAN PEACE? We walk its quiet streets converted into an open-air museum, and discover stencil, graffiti, collage ... an explosion of street art works by world-renowned artists, which make Coghlan one of the mecca of muralism in the city. But in Coghlan art is also in its gut: we are surprised in the tunnel named Luis Alberto Spinetta, icon of our rock, where 40 artists painted 40 murals with images of their records; and there is another tunnel: that of La Smorfia Coghlanense, an old dream interpretation system to play the lottery, translated into murals throughout the entire viaduct. We visited the Coghlan train station, the green and cultural station, the only one in the world with its own public library. We enjoy the English railway architecture from its iconic iron bridge manufactured in Glasgow, Scotland, and become a hallmark of the neighborhood from the naive painting of the artist Anikó Szabó. We also know the 35-meter Coghlan Obelisk, the Socrates, Valderrama and Plutarco passages, the cultural and artistic warehouse of organic products, the factories converted into universities and luxury homes, the mythical places of neighborhood characters, and even a modern complex of housing "bike friendly". This is Coghlan: the old paradise of the English and Basque speakers, and the new oasis of modern porteños who are looking for their place in the world. WHEN IS? Every day of the week at 3 p.m. We are at the corner of Av. Monroe and Av. Melián, at the door of the TV Bar. Estimated time: Approximately 3 hours 30 min. Minimun 4 persons. Not suitable for children or pets. Does not include tickets or drinks. It is suspended by rain at the time of onset.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [              
    {url: "https://media.guruwalk.com/kih8zggyzfu99wmxhfh5nbvq1zk7"},
    {url: "https://media.guruwalk.com/ok5k8bf5mkxccifz00w4xh8efg5w"},
    {url: "https://media.guruwalk.com/zvar70pvt2jodud0mohtgsd44rg8"},
    {url: "https://media.guruwalk.com/r59dr5vzj92bblepx402n3o6avxg"},
    {url: "https://media.guruwalk.com/hrco4r3gvguhvl9io2it0easgkpm"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Buenos Aires by Night (Available in English, Spanish)',
    latitude: '-34.601041',
    longitude: '-58.383079',
    descripton: '<p>When the sun disappears, the night sky begins to illuminate stars that will shine dazzled by the architectural beauty of the City. The frantic rhythm that happens every morning is no longer in the middle of the night and the silence that tells stories can be heard by those passionate about Buenos Aires life. The historic center is the prominent place on this tour.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [             
    {url: "https://media.guruwalk.com/4hrminuoqjiyazc8swe1rsw92nh9"},
    {url: "https://media.guruwalk.com/6rw4ymmzhwxm4oewhaiz1y7doghh"},
    {url: "https://media.guruwalk.com/6j3uxdpqs6ri15aakxavdes851y7"},
    {url: "https://media.guruwalk.com/af01ox1odt3b4ix0f3vm605hm66f"},
    {url: "https://media.guruwalk.com/fsio7idag4xi7cbzs0mixiey1ar3"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: '"Argentina: a story between mate and tango" (Available in Spanish)',
    latitude: '-34.608911',
    longitude: '-58.389101',
    descripton: 'We will take a tour of the most emblematic places of the city of Buenos Aires from the Plaza Congreso (seat of the legislative branch) to Plaza de Mayo (national historic center and seat of the judiciary). Along the walk we will go through the history of Argentina and the city of Buenos Aires. We will be accompanied by mate (excellent opportunity to drink mate for the first time) and tango (with its history and melodies). It is a unique proposal in the city for the cultural streak it offers and the breadth of the historical route that we are going to do. Unique Free Walking Tour with live music. I wait for you!<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [                
    {url: "https://media.guruwalk.com/jnml4p1qg1w8x70vdy4ft2trqda1"},
    {url: "https://media.guruwalk.com/wdn7jv8vbuvvk2al59veucjel92f"},
    {url: "https://media.guruwalk.com/z79c4vizrjcg0d9harvfiof3yqb7"},
    {url: "https://media.guruwalk.com/5yd4jooodjzr7ksy8nt8msf01ivd"},
    {url: "https://media.guruwalk.com/wks80gz54k0gz7dg286uigbemsns"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Suburban BA - The British Buenos Aires (Available in English, French)',
    latitude: '-34.601549',
    longitude: '-58.512726',
    descripton: `<p>Also known as "El jardín de la Ciudad" (The Garden of the City) -as it is the neighbourhood with the widest variety of plants and trees- Villa Devoto is one of the most charming must-visit places of Buenos Aires. Founded by the British, it has developed a unique architectural style which cannot be seen in any other part of the city. These days Villa Devoto has become a very trendy and stylish neighbourhood and it is home for many important personalities of the city and the country. Рlaces to visit during the tour: -Devoto station. -Antonio Devoto's house (founder). -Academia Cultural Inglesa Devoto. -Arenales square. -Invernadero de John O. Hall. -Biblioteca Antonio Devoto. -Basílica San Antonio de Padua. -Polo Gastronómico.</p><p>Free tour: Book for free and pay what you want at the end</p>`,
    stock: 0,
    minimunDuration: '1 hour 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [                 
    {url: "https://media.guruwalk.com/ks069sv1arj3rf65rh3srdvw7rw6"},
    {url: "https://media.guruwalk.com/hng23enhz48aocrt9pj04dzgcjns"},
    {url: "https://media.guruwalk.com/nzu88gf9uxxcys5tcntjson10wzt"},
    {url: "https://media.guruwalk.com/5n4bto4qf8uijcntsb8rcegltlxm"},
    {url: "https://media.guruwalk.com/g6f03ki3izra8emux3q7rwomt7yj}}"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Get to know and walk through the oldest areas and fairs ... (Available in English)',
    latitude: '-34.608852',
    longitude: '-58.380657',
    descripton: '<p>Walk along Avenida de Mayo to the historic Plaza de Mayo, the National Government House "Casa Rosada", and cross the historic center in front of the Metropolitan Cathedral. Towards the old and traditional calle de Defensa, where one of the most important, famous and traditional fairs in the city of Buenos Aires has been held every Sunday since 1970. Here you will find all kinds of coat racks, traditional handicrafts, leather, silver, various antiques, clothes, music, tango, the most picturesque places like "Tortoni" (in operation since 1880), bars, restaurants, "milongas" with dance classes. and street artists of all disciplines and varieties. You will see musicians, living statues, jugglers and all kinds of architectural relics from the area, as well as the oldest neighborhood and the historic quarter of the city of Buenos Aires and Argentina, dating back to the 16th century. We will arrive at the oldest and most famous Lezama Park, which knows its interior trails, sculptures, statues and traditional national monuments, takes an occasional snack and also knows the tradition of the national infusion "Mate".</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [            {url: "https://media.guruwalk.com/rmw6h3l9ge5z7mkvmhs0autyb46m"},
    {url: "https://media.guruwalk.com/wolagfxzdv82stlcqef95fag0m5g"},
    {url: "https://media.guruwalk.com/zzov4ge5rmdbwbkdq6biw9sih0ph"},
    {url: "https://media.guruwalk.com/2ihlbgdjax4wx5pbcn9b83vsh7ch"},
    {url: "https://media.guruwalk.com/9gpikpij3b9qaowdcbp72x40yg7e"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'An Island in Recoleta? and other jewels ..... (Available in English, Spanish, Portuguese)',
    latitude: '-34.583072',
    longitude: '-58.397266',
    descripton: '<p><strong>Do you want to know another Recoleta, beyond the Cemetery?<br> Do you like history and politics?<br> Are you interested in walking in relaxed areas?<br></strong> We are going to discover <strong>an "Island" in the heart of Recoleta,</strong> an <strong>exclusive area, with many stories that combine from Peronism, the Aristocracy and Medicine.</strong> We will analyze its various monuments, and the architectural styles of its most striking buildings. A "little Paris" hidden in the neighborhood, where silence and tranquility reign. A true Oasis.<br> It will be a walking tour, constant but fun, with moments to relax, <strong>appreciate the architecture, and its impact over time.</strong> We will enjoy the ancient flora of the place, varied and of different species. <strong><br><br>Meeting point / Meeting point: Look at the 3rd photo.</strong></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [         {url: "https://media.guruwalk.com/761rlj0h2f7fbbguudcbwk39qyi9"},
    {url: "https://media.guruwalk.com/69ccfh9pmythog28fhdvyriv6lc4"},
    {url: "https://media.guruwalk.com/dbhpif3my0960n7iu53ab04gtrw3"},
    {url: "https://media.guruwalk.com/in2bqyg2rrulbfnqne4uhh93q4cu"},
    {url: "https://media.guruwalk.com/fdh571ex0f6151xc1du6xmpgsi1i"} ] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'WSecrets of Belgrano neighree Walking Tour (Available in Spanish)',
    latitude: '-34.592201',
    longitude: '-58.373758',
    descripton: 'I would love to show you how wonderful Buenos Aires is, its European architecture that coexists with the contemporary one, and that can be seen on a walk through the Recoleta neighborhood with its museums and large green spaces.\n' +
      '\n' +
      'The tour begins in the Monumental Tower (the English tower for the Buenos Aires), and from there we will approach to the majestic Miter Railway station (fully restored) as it was originally. We will pass through squares, avenues, museums, parks, as well as the Recoleta Cultural Center with its historical center of more than 300 years, and the Recoleta Cemetery considered the national historical museum for its great architectural works (Gothic, neoclassical and art deco)\n' +
      '\n' +
      "Along the way we will see traditional buildings compared to architectures of great colonial style, as well as nineteenth and twentieth-century buildings such as Chateau la Terrasse d'Alvear and churches such as Mater Admirabilis and Basilica Our Lady of Socorro\n" +
      '\n' +
      'We will visit:\n' +
      '-Monumental Tower\n' +
      '-Miter Station\n' +
      '-Parque San Martin\n' +
      '-National Railway Museum\n' +
      '-Patio Bullrich\n' +
      '-Parque Carlos Thays\n' +
      '-Place Palace de Glace\n' +
      '- Recoleta Cemetery\n' +
      '-Av. Alvear<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours 30 minutes',
    rating: '4.5',
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [                 {url: "https://media.guruwalk.com/e7im7rq2pfi5894ry13q3huh7xpp"},
    {url: "https://media.guruwalk.com/p1r5pgxajibanbo524bs9tr4rlmb"},
    {url: "https://media.guruwalk.com/pei6uqlatjxyac4dtnvb9cz9yc35"},
    {url: "https://media.guruwalk.com/lfnb5t6mprtjemn3f7rmdh8e3kyn"},
    {url: "https://media.guruwalk.com/n3hmasqrys6ry9xlqi8m6itk0s4m"} ] },
    type: { connect: { id: 7 } }
  },

  {
    name: '⭐ Free Tour Palermo: El Rosedal, Bosques de Palermo, monuments and beautiful walk through the parks 😃 (Available in )',
    latitude: '-34.57702',
    longitude: '-58.408296',
    descripton: '<p>Located to the north of the city, <strong>the neighborhood of Palermo</strong> is the <strong>place chosen by porteños to relax, stroll and live.</strong> It is an important gastronomic, cultural and audiovisual center and has very nice places to visit.<br> On the tour <strong>we will walk about 3 kilometers</strong> and visit or see the well-known parks:<br><br></p><ul><li> <strong>Bosques de Palermo (walk through El Rosedal and park).</strong></li><li> <strong>Ecopark and Japanese Garden seen from the outside.</strong></li><li> <strong>Gastronomic pole of Paseo de la Infanta.</strong></li><li> <strong>Shoah Park<br></strong><br></li></ul><p><br> <strong>We will finish</strong> the tour <strong>with recommendations from Buenos Aires</strong> to live and enjoy the city as one more porteño.<br><br> I recommend staying for lunch at the Paseo de la Infanta or in the Japanese garden... And if you like to take photos, there are beautiful places along the promenade 😃<br><br> I wait for you!<br><br> * suspended due to rain.<br><br></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour 30 minutes',
    rating: '4.5',
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [             {url: "https://media.guruwalk.com/bp1c2sil89r3b9qhd1rwjjfmuk7u"},
    {url: "https://media.guruwalk.com/0givzeixa8m84us2attbh8aok9su"},
    {url: "https://media.guruwalk.com/xi58splfg5d86awjby38dgqnj28s"},
    {url: "https://media.guruwalk.com/nzh66813p277khq1p581uv7go75d"},
    {url: "https://media.guruwalk.com/cqn1xrswjh5w5n7x8tcyycd7moci"} ] },
    type: { connect: { id: 7 } }
  },

  {
    name: '💥 Free Tour Barrio de Palermo Soho, one of the funniest neighborhoods in Buenos Aires (Available in )',
    latitude: '-34.58693',
    longitude: '-58.425247',
    descripton: '<p><strong>The neighborhood of Palermo</strong> is the <strong>place chosen by porteños to relax, stroll and live.</strong> At every step you will find the best of art, fashion, bohemian and eclectic local cuisine.<br> It has very nice places to visit and take good photos. I invite you to enjoy my neighborhood as a porteño more :).<br><br> On the tour <strong>we will visit "Palermo Soho" or "Palermo Viejo"</strong> where we will see an urban garden, then we will walk through very nice streets, with <strong>little bars, beautiful passages</strong> with a lot of <strong>street art.</strong> We will visit an incredible gastronomic center and <strong>its two main squares, Serrano (Plaza Cortazar) and Armenia.<br></strong><br><br> <strong>We will finish</strong> the tour <strong>with recommendations from Buenos Aires</strong> to live and enjoy the city as one more porteño. I recommend that you stay after the tour to enjoy the bars and the neighborhood. The area is one of the favorite places to enjoy the late night: both for dinner, for a drink and for a walk.<br><br> I wait for you!<br><br> * suspended due to rain.<br><br><br></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour 45 minutes',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [                 {url: "https://media.guruwalk.com/8qj5pmrvi3fj4rpgaz41mkskrxts"},
    {url: "https://media.guruwalk.com/diy8p37hcanm09xc54zccufe8w5d"},
    {url: "https://media.guruwalk.com/90jah4fbdhf3maybml9sj29tr2kf"},
    {url: "https://media.guruwalk.com/43tlfokk6yc8kcct2q3y9z14gfqo"},
    {url: "https://media.guruwalk.com/z0yfk0uq82xrfyqtvgkgw5kauhxl"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: "Free Tour through Barrio de Villa Devoto, Maradona's neighborhood (Available in Spanish)",
    latitude: '-34.599365',
    longitude: '-58.51228',
    descripton: "<p><strong>You will fall in love with this neighborhood that offers much more than being the wine district.</strong></p><p> We will walk streets full of charm and stories told in the first person.</p><p> We will go <strong>from the house of Diego Maradona</strong> <strong>to Churches and Palaces of exquisite architecture.</strong></p><p> We will crown this tour at the <strong>gastronomic pole where you can enjoy its bars, wine bars and cavas</strong> , as well as <strong>excellent cuisine.</strong><br> <strong><br>What will we see?</strong></p><ul><li> <strong>Arenales Square</strong></li><li> <strong>Basilica San Antonio de Padua</strong></li><li> <strong>Exterior of the Ceci Palace</strong></li><li> <strong>Diego Maradona's House</strong></li><li> <strong>Gallery and shopping center</strong></li></ul><p> Then I will say goodbye so that you can taste the different gourmet options, pastry shops and wine bars.<br><br> I wait for you!</p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.6',
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [   {url: "https://media.guruwalk.com/5lcq8l415ijtfk9d4vahhjbroa3l"},
    {url: "https://media.guruwalk.com/o27roas9elrr76z71y25g21y5tmg"},
    {url: "https://media.guruwalk.com/74jyhsicepni27arax2ktoy000wi"},
    {url: "https://media.guruwalk.com/7m76hw2i8sl9a6g80iz4a3eoa63b"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Buenos Aires Belle Epoque (Available in English)',
    latitude: '-34.58682',
    longitude: '-58.391977',
    descripton: '<p>Hello! I have designed this free Belle Epoque tour to discover the best and most important of a golden age for my city, Buenos Aires :) What will you be able to visit on the tour? 1. Recoleta Cemetery 2. Carlos María Alvear Monument 3. Alvear Avenue, showing important buildings on it as. House of Culture, and the block of the three mansions. 4. Duhau Palace. 5. Hotel Hyat and the Apostolic Nunciature. Following the tour, the Alzaga Unzué Palace will be shown, on a hill, a few meters away, ending the tour in the Carlos Pellegrini Square, including the memorial and the buildings of the Jockey Club, Embassy of Brazil and France, as a gold brooch.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.7',
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [          {url: "https://media.guruwalk.com/xfn0wkpay2xcduzuhr5w4d7j8en8"},
    {url: "https://media.guruwalk.com/28qk9scb7io2h5dy03bllx8bygf9"},
    {url: "https://media.guruwalk.com/9qonlxen2yb1ix5tnn9hlgrvjgjs"},
    {url: "https://media.guruwalk.com/e8nfyhbm2wr5z8zmpksf4wsbz5wf"},
    {url: "https://media.guruwalk.com/h9uxltei167nctngua38hvxp90bj"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Discovering PALERMO´s Rose Garden and the Horse Racing Course !! !! (Available in English, Spanish)',
    latitude: '-34.581015',
    longitude: '-58.421006',
    descripton: '<p>At least 6 inscriptions are required for the tour. -------------------------------------------------- ----------------------------- We will meet at Plaza Italia (metro station D) in the heart of the Palermo district. This is where the tour begins, during which we will discover the living history of Argentina! - We will learn from the two foundations of Buenos Aires and know the history of each and how the first years of this city were. - We will visit the Palermo neighbourhood and discover its origins as an area of orchards and fruit trees 300 years ago. - We will wander through the lands of Juan Manuel de Rosas, who was governor of the province of Buenos Aires and who became the most important Argentine caudillo between 1835 and 1852. - We will discover the famous Rosedal and learn its history! - We will visit the Argentine Racecourse, which was founded in 1876 and was the most popular sport among Argentines at the beginning of the 20th century. - We will discover the history of tango, its philosophy, how to dance it and what rules to follow when attending a milonga. - We will learn what "mate" is, the national drink of the Argentines. I love the idea of showing the story in the place where it happened and that happens in this guided tour. Welcome to Buenos Aires!</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours',
    rating: '4.0',
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [  {url: "https://media.guruwalk.com/ocd0t7ul6p19sh66a1spg92xyn4e"},
    {url: "https://media.guruwalk.com/zf1ir909i0l81nb3ok4cogaahzu2"},
    {url: "https://media.guruwalk.com/6ys32pjp0i0qn1apcvpb6wuo0npj"},
    {url: "https://media.guruwalk.com/x4me186ky7w1pk7uhbywih4mz32n"},
    {url: "https://media.guruwalk.com/tkq6s6506y45zritfmbyqtcz9mv7"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Local Transport and Gastronomy! (Available in English, Spanish)',
    latitude: '-34.603861',
    longitude: '-58.385853',
    descripton: 'To start your trip through Buenos Aires, nothing better than a place that will teach you how to use and take the subway, bus and train. It will be a great experience as if you were a local!\n' +
      '\n' +
      'In addition I will show you iconic places of my city (train station, mosque, rose garden, colon theater, Avenida 9 de Julio, Obelisk, Palermo, and other places ...)\n' +
      '\n' +
      'We will also go to little tourist places, and try local food next to the famous Malbec wine. All the recommendations to live Argentina in the best way will also be taken from me!<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '5 hours',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [   {url: "https://media.guruwalk.com/dsc38114y5xs4enz14pgox4m8pm7"},
    {url: "https://media.guruwalk.com/cqgmi5ntqxajz4do62op5weju548"},
    {url: "https://media.guruwalk.com/uj6v4w5rzufskvez4yl46hdztrju"},
    {url: "https://media.guruwalk.com/yym253dgi2x1gnf3a6dwubfdpjm9"},
    {url: "https://media.guruwalk.com/fn1xlvvnm597awh3ewnjofsq6hpn"} ] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'Buenos Aires City Center Walking Tour: History and Stories (Available in English)',
    latitude: '-34.609708',
    longitude: '-58.390333',
    descripton: '<p>Have you ever walked the same usual path and discovered new things that you have never seen before? With WalkBA you will discover how wonderful our city is. Join us to discover the place known as the Paris of Latin America. We offer walking tours, with our incredible guides, that will make you have fun in our city. Included:<br><br> Congreso de la Nacion<br> Palacio Barolo<br> Av 9 de julio<br> Cafe Tortoni<br> Plaza de Mayo<br> Casa Rosada<br> Obelisk<br> And more<br><br> We are waiting for your reservation to walk the city together!</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour 45 minutes',
    rating: '4.3',
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [               
        {url: "https://media.guruwalk.com/7reogpfdosxufdemtfaczdjhfd1g"},
    {url: "https://media.guruwalk.com/qeo326p4lcrwu8m27bxotu54lq3j"},
    {url: "https://media.guruwalk.com/gywp9eq174t9xwz6wcio6oegav1y"},
    {url: "https://media.guruwalk.com/lb1ucfjmihyyod9zfxxgxj8k1jen"},
    {url: "https://media.guruwalk.com/sdf3bicu2rzsnpvlrvldfj05hwci"} ] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'Free tour Icons and history of Buenos Aires. (Available in English, Spanish)',
    latitude: '-34.60341',
    longitude: '-58.382353',
    descripton: '<p>In this free tour <strong>we will visit three iconic points of the beautiful city of Buenos Aires</strong> , the so-called Paris of South America. Through these three points <strong>I will tell you a little about the history of this great city.</strong><br><br> <strong>First</strong> we will see the imposing <strong>Obelisk</strong> , the great photographed by all who come to visit us.<br> Then we will walk <strong>along Corrientes Avenue</strong> , center of the theater in Buenos Aires, and then pass through the <strong>Florida</strong> pedestrian street, with all its businesses and with a stopover at the <strong>Güemes Gallery</strong> , where you can visit the apartment where Antoine de Saint Exupéry lived.<br> We will end our walk in the <strong>Plaza de Mayo</strong> , the nerve center of our city, with <strong>the Casa Rosada, the Cathedral of Buenos Aires, the Cabildo</strong> and all the history of this mythical square.<br><br> <strong>You can not miss this free tour where in 2 hours we will show you the most relevant of this beautiful city.</strong></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 15 minutes',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [          {url: "https://media.guruwalk.com/fqwefyuqzrdwf1jimc7u6blv8qzf"},
    {url: "https://media.guruwalk.com/q839jom0tqxtqzpyrx4q2u6nen34"},
    {url: "https://media.guruwalk.com/g1t0klfwn1qc1w4uckqn3gt0rnnm"},
    {url: "https://media.guruwalk.com/jsynwj0rmixmx6666z45jgkqet59"},
    {url: "https://media.guruwalk.com/q3vxom1vy2kvo5und28ya06i28wq"} ] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'City Center Free Tour (Historical heart of buenos aires) (Available in English)',
    latitude: '-34.6099',
    longitude: '-58.391895',
    descripton: '<p>We meet at 3.00pm, at the gate of The National Congress (Av. Entre Rios 51). During this free walking tour you will learn about the history and politics of Buenos Aires. We will begin the tour in the National Congress and we will cross the great boulevard of the Avenue of May. We will discover important sites and an interesting architectural mix. We will talk about Evita Perón and Pope Francis, finishing the tour in Plaza de Mayo, the heart of Buenos Aires. https://www.youtube.com/watch?v=zZiXu3nELcE</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [  {url: "https://media.guruwalk.com/89dhtjd0z9e763tailvde5xsqwp3"},
    {url: "https://media.guruwalk.com/zku75tui4g6kms60o6kta9lo799w"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: "Palermo's green Parks : Where history and  fresh air get together (Available in English, Spanish, Portuguese)",
    latitude: '-34.575805',
    longitude: '-58.41432',
    descripton: '<p>We are going to walk inside the biggest park in the city, learning about the history of the land and its deep connection with the history of the country itself. Politics and interesting historical facts will be encountered at the different monuments we will come across Not only will we visit interesting monuments, but also enjoy this vast green area and identify some Argentine trees. Ideal for those who like relaxing, walking around and getting to know a little of Argentine history and taking some good pictures.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [   {url: "https://media.guruwalk.com/cuhn721rnv9yew93fih877k921ug"},
    {url: "https://media.guruwalk.com/adx71c5grjxo2x1hzzsk7hwbjy62"},
    {url: "https://media.guruwalk.com/hc21cctfwz6ywz8pnoo6ddmvscdl"},
    {url: "https://media.guruwalk.com/tfru1anwcls0dkie5myyve6qdg3s"}] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'Buenos Aires Free City Walking Tour (Available in English, Spanish)',
    latitude: '-34.609676',
    longitude: '-58.391939',
    descripton: 'Join us on a 3 hours walking tour in Buenos Aires downtown and where our history as Argentina started!\r\n' +
      'We will have fun through the centre of Buenos Aires, with vertigo and acceleration that the porteños have Monday through Friday, or the quietness during a Saturday.   In this FREE CITY WALKING TOUR, we walk along the downtown area, witnessing some icons of the city and knowing about the secrets, our culture and history.  We’ll visit the major places of the downtown and through this wonderful city!    Join BUENOS AIRES FREE TOURS! A tour around Argentina culture, our customs and peculiarities.\r\n' +
      '\r\n' +
      '\r\n' +
      'What we visit in Buenos Aires:\r\n' +
      'The Congress building and stories\r\n' +
      'Buenos Aires: How to move around? \r\n' +
      'KM Zero monolyth \r\n' +
      'May Avenue and Barolo Palace\r\n' +
      'Tortoni cafe\r\n' +
      'Obelisk\r\n' +
      'Pink House\r\n' +
      "Porteño's best secrets \r\n" +
      'The Cabildo and May Revolution \r\n' +
      'Mothers of May Sq.\r\n' +
      'Florida Promanade\r\n' +
      'Francis Pope last residence in Buenos Aires\r\n' +
      'Metropolitan Cathedral \r\n' +
      'And a lot of tips to help you make your stay in Buenos Aires awesome\r\n' +
      '\r\n' +
      'Meeting point:\r\n' +
      'National congres av entre rios 51\r\n' +
      'Time:\r\n' +
      'everyday. \r\n' +
      '3 pm<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [ {url: "https://media.guruwalk.com/8gdib4r54s79h8nqb1xlcma0tfei"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Recoleta Free Aristocratic City Tour (Available in English, Spanish)',
    latitude: '-34.600426',
    longitude: '-58.383966',
    descripton: 'Recoleta Free City Tour\r\n' +
      'We will go together trough the contrasts that this city offers, from the most crowded streets to the most exclusive. For two hours we will see the history of the Aristocratic Buenos Aires and the strong European influence. This is a walk by the most elegant and expensive neighborhoods of Buenos Aires with their palaces, mansions and large French-style buildings making to this part of the city the "Paris of South America". Come and join us for some fun stories!\r\n' +
      '\r\n' +
      'Messages will be respond in 24 hs\r\n' +
      '\r\n' +
      '\r\n' +
      'What we visit in Recoleta:\r\n' +
      'San Martin and the Independence war\r\n' +
      'Islas Malvinas war memorial\r\n' +
      'Aristocratic families and palaces\r\n' +
      'Why do some locals look European?\r\n' +
      'Why do the city looks European?\r\n' +
      'How is the health and education system?\r\n' +
      'Evita´s life and secrets\r\n' +
      'Terrorists attacks \r\n' +
      'Most fancy places in town\r\n' +
      '\r\n' +
      'We assure you, that after these 2 hours, you will understand our culture much better! \r\n' +
      ' \r\n' +
      '\r\n' +
      'Meeting point:\r\n' +
      'libertad and viamonte, corner of teather colon\r\n' +
      'Time:\r\n' +
      'everyday\r\n' +
      '10:30am<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [   {url: "https://media.guruwalk.com/7q13bjy8lxvtv8gcr2yl0mbmjcfy"},
    {url: "https://media.guruwalk.com/jvhvn6f30sgdxgr92ad2i6wd9ism"},
    {url: "https://media.guruwalk.com/jveol1260onlwmbn0ifcm0e7hbph"} ] },
    type: { connect: { id: 7 } }
  },


  {
    name: 'Buenos Aires  by bus and metro. (Available in English, Spanish)',
    latitude: '-34.601041',
    longitude: '-58.383079',
    descripton: '<p>Do you want to know Buenos Aires for real? Do you want to feel like a local citizen? Do you want to learn to travel around the city? Do you want to discover new places, what do we eat, what do we drink, what do we read and what music do we listen to? There is no better way to discover it than accompanied by a local citizen to guide you. We will travel by public transport and immerse ourselves in the daily life of the porteños. We will visit neighborhoods such as&nbsp; Abasto and Chacarita. The tour does not include SUBE travel card (it is personal, can be purchased at public transport stations, and it is charged at the station with cash)</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Argentina',
    city: 'Buenos Aires',
    pictures: { create: [    {url: "https://media.guruwalk.com/uuz481211a9e9dxckcxwo5onxg5w"},
    {url: "https://media.guruwalk.com/c87kvbh3ik4zmbkvh2jimbk77adn"},
    {url: "https://media.guruwalk.com/znb906b906i7ay4z5j42pzh4bsr6"},
    {url: "https://media.guruwalk.com/mrmwtf2s69gjsx5nyvo62m145mxi"},
    {url: "https://media.guruwalk.com/go0458lp1rx7gg67mxar1aordzp3"}] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'Paloquemado, Flavors, Colors Diversity and Culture (Available in English, Spanish)',
    latitude: '4.615283',
    longitude: '-74.089492',
    descripton: '<p>Get to <strong>know the diversity</strong> of Colombia <strong>in the Paloquemado Market!</strong><br> We will have the <strong>opportunity to immerse ourselves in the diversity of local food and products</strong> , knowing a little more about the regions they come from, and the dimension of one of the main wholesalers of fresh products in the Colombian Capital.<br><br> Welcome to the Paloquemado market where you will discover flavors, colors and surprises of local gastronomy and culture.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [     {url: "https://media.guruwalk.com/395e9l1vo9e9pr0sxafoaewcjf5p"},
    {url: "https://media.guruwalk.com/d1m071wxf8ma3b9n1eo31egq4n4b"},
    {url: "https://media.guruwalk.com/42ewrbpiio6654rum7docbyf9fkw"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Cachaco Free Tour: Stories of Bogotá. (Available in Spanish)',
    latitude: '4.601219',
    longitude: '-74.069481',
    descripton: "<p>Welcome! In my tour I seek to <strong>present the most emblematic places</strong> of the city and to show <strong>the details</strong> from the <strong>period</strong> of <strong>independence to</strong> the most <strong>recent moments in the history of the capital.</strong><br> Among them the <strong>Avianca building fire</strong> , the shots of the courthouse and the Pan-American embassy, the <strong>famous bogotazo</strong> , the <strong>murder of Jorge Eliecer Gaitán</strong> , among many others.<br><br> I have had the <strong>opportunity to live many of those</strong> transcendental moments of the 20th century for Colombia, thanks to that <strong>I have the knowledge and attitude to provide an interesting and pleasant experience, accompanied by stories and anecdotes from the capital.<br><br> Some of the stops included in the tour are:</strong></p><ul><li> <strong>Journalists Park</strong></li><li> <strong>Santander Park</strong></li><li> <strong>Bolivar plaza</strong></li><li> <strong>Quevedo's fountain</strong></li><li> <strong>Gold Museum.</strong></li></ul><p><br> I am waiting for you in the journalists' park to accompany you on this fun and unique tour through the center of Bogotá.<br><br><br></p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.3',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [  {url: "https://media.guruwalk.com/qg9yyrwm09e7gwvrmfuip3xmdl1l"},
    {url: "https://media.guruwalk.com/rqbbpp5ev3zfy3kuohrkg2s16hoz"},
    {url: "https://media.guruwalk.com/pbxsmauzp9wkqzwuxwqydwhyj0o8"},
    {url: "https://media.guruwalk.com/g1kqtwhbobf14irawkdiw1fr3pj4"},
    {url: "https://media.guruwalk.com/grkxivmwkr70jzz506bkhqge8qpp"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Bike tour visiting the Flea Market in Bogotá (Available in Spanish)',
    latitude: '4.624415',
    longitude: '-74.066012',
    descripton: '<p><strong>* It is a live tour so it will start at 6pm (local Spanish time) and 11am (local time in Bogotá) *</strong><br><br> An experience at 2,600 meters above sea level! <strong>&nbsp;</strong><br> <strong>Sundays</strong> in Bogotá are special because <strong>several of the main avenues close for cars and become exclusive for bicycles</strong> , creating a <strong>sporty and friendly environment.</strong><br> Therefore, it <strong>will be on two wheels as we will explore</strong> some <strong>traditional streets</strong> as we approach <strong>the city center</strong> , <strong>listening to</strong> the <strong>stories</strong> that the historical buildings bring along.<br> <strong>At this point we leave the bicycle behind and go</strong> to visit the <strong>most traditional flea market in</strong> the city, where <strong>we will see</strong> some <strong>antiques</strong> , <strong>second-hand objects</strong> , plants, and the various <strong>creations of independent artists.<br> Make yourself comfortable to discover Bogotá with me!</strong></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [   {url: "https://media.guruwalk.com/nr8u14whtq1gn7iokn03smv9tqyf"},
    {url: "https://media.guruwalk.com/ijt4b9o2zmsp0ks62yw24zfzmutr"},
    {url: "https://media.guruwalk.com/ylue4x5kbytykxh4qlvfra7on2no"},
    {url: "https://media.guruwalk.com/utfc6menkunjqt0pzqpby0qb64gl"},
    {url: "https://media.guruwalk.com/2l0yi3difqbssx44cvin0r42z9de"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Walking Tour Bogotá (Available in English, Spanish)',
    latitude: '4.597113',
    longitude: '-74.069947',
    descripton: "<p>Join us on this <strong>incredible walking tour through the historic center of La Candelaria</strong> , located in the center of Bogotá, you will learn all about the city's history and culture, making friends along the way. <strong>La Candelaria is a creative hot spot in Bogotá,</strong> there is nothing like it in the entire city. <strong>Art-deco and colonial houses with baroque churches behind them</strong> ; <strong>the old and the new intermingle</strong> on this walking tour in Bogotá. Join one of our guides in the heart of Bogotá and discover what this neighborhood has hidden.<br> Inscribed in graffiti and mixed in drinks, you will <strong>discover Bogotá's colonial and indigenous past</strong> , and the roots of Colombian history. The perfect confluence of culture and conflict that can be felt everywhere, as you follow a graffiti trail through the streets of the old city.<br> Learn about the <strong>impact of the Colombian drug trade, the Emerald Mafia</strong> , and how it all aligns with <strong>their 50+ year armed conflict.</strong> State, drugs, war, guerrilla, trade: a volatile mix that <strong>has often blinded us to the best side of Colombia.<br>&nbsp;Have you ever wondered why Colombia has some of the best coffee in the world?</strong> End your adventure in the city center with a warm cup of coffee and learn its history. <strong>What does the visit include?</strong></p><ul><li><strong>La Candelaria neighborhood</strong></li><li><strong>La Concordia Market Square</strong></li><li><strong>Santander Park</strong></li><li><strong>Seventh Avenue</strong></li><li><strong>Simon Bolivar Square</strong></li><li><strong>Peace process and presidential palace</strong></li><li><strong>The Bogotazo</strong></li><li><strong>Siege of the Palace of Justice</strong></li><li><strong>Pre-Hispanic urban art Includes</strong></li><li><strong>Guide of Gran Colombia Tours</strong></li><li><strong>Chicha tasting, local drink</strong></li><li><strong>Fruit and juice tasting</strong></li><li><strong>Origin coffee tasting</strong></li></ul><p><strong>Additional Information:</strong><br> - Does not include - Pick up and drop off at the hotel (Common meeting point for all travelers)<br> - This tour has a suggestion of 10 dollars.</p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '3 hours',
    rating: '4.6',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [   {url: "https://media.guruwalk.com/kyhctne9pabfftlubq4qm3fossbj"},
    {url: "https://media.guruwalk.com/sfobzm2y9drnqym3bijw8lepwlcd"},
    {url: "https://media.guruwalk.com/oe2qwa6yevz4eo6gscn2dq0336fp"},
    {url: "https://media.guruwalk.com/w87a9nzc7ifsca6u96gon8hq980j"},
    {url: "https://media.guruwalk.com/eqhjs59hbv4rtvqj8c4xk7cnedql"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Jet tour (Available in Spanish)',
    latitude: '4.5972',
    longitude: '-74.069719',
    descripton: 'Quevedo jet tour: First I will start by giving the tour of the quevedo jet, telling its story, then we will go downtown, touring historic places, then we will go to monserrate! That is the flagship place of Bogota ending the tour there. Colombia.<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.6',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [  {url: "https://media.guruwalk.com/7s8jk9fpuft9bcdn4yz7o5ndbn8g"},
    {url: "https://media.guruwalk.com/5y06hz8ga3e0b789pasldpbykhf1"},
    {url: "https://media.guruwalk.com/82m92kh9b1kpia9dawo6mfx5rfhv"},
    {url: "https://media.guruwalk.com/2fee8mvl3xrcc8nbjpartdfuxpjn"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Discovering the historic center of Bogotá (Available in English, Spanish)',
    latitude: '4.599861',
    longitude: '-74.069981',
    descripton: '<p>We will walk through the Candelaria district, the oldest and most important neighborhood in Bogotá. We will talk about history, geography, current social and political situation in Colombia. We get involved with our culture by drinking chicha! The most traditional fermented drink in the city, part of our indigenous heritage. We will also try a local snack made with corn and, at the end of the tour, we will play the game of gunpowder, better known as Tejo, a fun drinking game played in pre-Hispanic times. This tour gives you a complete idea about the context of the capital of Colombia. You will never get bored because we talk about different topics, interact with the locals, visit the most important places in the city and get the maximum artistic and historical value from all the streets we walk through.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.5',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [  {url: "https://media.guruwalk.com/8g7v9nywj6doef1jgxaare7zb3pq"},
    {url: "https://media.guruwalk.com/b5d4bq2uatmsb48r1m1s4tnuujov"},
    {url: "https://media.guruwalk.com/0m5glkr67lobfbvhrv9rm8y14z2l"},
    {url: "https://media.guruwalk.com/pyamis6qpdgxebwiaoopum48tgti"},
    {url: "https://media.guruwalk.com/k8e8o8hxm2kui7av7apxqf6v2aia"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Graffiti Tour Bogotá (Available in English)',
    latitude: '4.5972',
    longitude: '-74.069719',
    descripton: 'Want to learn how graffiti fits into Bogotá’s history and allure?\r\n' +
      '\r\n' +
      'Join us on this tour not only of Colombia’s history as told by art!\r\n' +
      '\r\n' +
      'Bogotá has become a world reference in graffiti. It boasts impressive murals and street art that place it above cities like Miami, Amsterdam, Rio, and México City. Its rise as one of the key city-canvases in Latin America has made it an attractive destination for the curious tourist and the bold artist. Would you have guessed?\r\n' +
      '\r\n' +
      'As with graffiti everywhere else, Bogotá’s history with the art has often been tense. But great art can overcome negative labels. Right now, no one would call it vandalism. It has struggled but has earned its place and the city is better for it. The mixture of social and political commentary with a twist of local and foreign styles make Bogotá’s graffiti truly a sight to behold.\r\n' +
      '\r\n' +
      'Join us in this tour not only of Colombia’s history as told by art but a tour of Bogotá’s streets as a curated museum of amazing artists!\r\n' +
      '\r\n' +
      'This tour has a suggestion of USD 10.\r\n' +
      '\r\n' +
      'Visit\r\n' +
      '- La Candelaria district\r\n' +
      '- Funnel Street\r\n' +
      '- La Concordia Marketplace\r\n' +
      '- Journalist Park\r\n' +
      '- Art gallery\r\n' +
      '\r\n' +
      'Included\r\n' +
      '- Gran Colombia Tours Guide\r\n' +
      '- Visit the most iconic pieces of art in downtown Bogotá\r\n' +
      '- Socio-political context of graffiti production\r\n' +
      '- Coca leaf tea tasting\r\n' +
      '\r\n' +
      'Not included\r\n' +
      '- Pick-up and drop-off\r\n' +
      '\r\n' +
      'https://www.youtube.com/watch?v=EvK6rQv9i-c<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.6',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [     {url: "https://media.guruwalk.com/u5jpmzn3h5bgcx0efk1c6oxlwpie"},
    {url: "https://media.guruwalk.com/q42xhaw3qmn6jm5fq2bltlchv8uz"},
    {url: "https://media.guruwalk.com/exqsypptzc81v6rrk7a8beq9wl16"},
    {url: "https://media.guruwalk.com/koiokc44623okdmet98qv93dde62"},
    {url: "https://media.guruwalk.com/06w71r5f8dbnl7o0pepss0eiq0ei"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'A tour of the Candelaria, magical center of Colombia. (Available in English)',
    latitude: '4.598121',
    longitude: '-74.076043',
    descripton: 'In the tour you will be able to know the main museums of Bogotá in the town of La Candelaria, which is the historic center of Bogotá, such as the Gold Museum, Botero Museum, the Santa Clara Museum, the Plaza de Bolivar and its cathedral primada .\r\n' +
      '\r\n' +
      'Its streets will show us the architecture, art and culture of the Colombian capital, there we will be able to appreciate, among other edicifaciones, the house of Juklio 20, where the Independence Groupe of Colombia, the Mayor of Bogotá, the Palace of Justice began and its history, the Congress of the Republic.\r\n' +
      '\r\n' +
      'You can taste an excellent dish of food such as ajiaco, which is a gastronomic reference of our Colombian capital.\r\n' +
      '\r\n' +
      'You can also visit the Military Museum of Colombia, Casa Quinta Museum of Bolívar, Museum of Regional Costumes, National Museum, Archaeological Museum, depending on the duration of the tour that can go between two and four hours.<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [  {url: "https://media.guruwalk.com/r5gza78wro21lbvriwvkvpeid6n2"},
    {url: "https://media.guruwalk.com/ank9pnzy984qai6l4bqrrjjrtog7"},
    {url: "https://media.guruwalk.com/4ae64gm3lzjtpss2yq65dslkb7gp"},
    {url: "https://media.guruwalk.com/yk1h7y8oyxbuthqfj432p9zahges"},
    {url: "https://media.guruwalk.com/tsel3el39xw0vbemy1qmbj20u7ym"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Biking Tour Bogotá (Available in English)',
    latitude: '4.5972',
    longitude: '-74.069719',
    descripton: 'Join one of our expert guides in this amazing free bike tour around downtown Bogotá and learn about the history and culture of the city.\r\n' +
      '\r\n' +
      'Bogotá is packed full of history. From its foundation to modern times, the city has sprawled around its vibrant and ever-changing downtown. And just walking can’t ever do it justice. Our free bike tour was designed to show a bigger face of this massive city and its more than 500 years of history.  You will discover so much more on a bike that you would do on foot or bus!\r\n' +
      '\r\n' +
      'Visit the city’s founding three plazas to understand how the city has changed over time. From its indigenous beginnings to Spanish colonialism, independence and modern times, learn how each place has symbolically transformed over time.\r\n' +
      '\r\n' +
      'Then, join us at Seventh Avenue, the commercial lifeline that connects north and south. It was originally an important salt road in indigenous times, it now gathers Colombians of all walks of life in trade, culture, politics and, protests.\r\n' +
      '\r\n' +
      'We’ll then go to Independence Park: the oldest in the city. Around it, Bogotá’s cosmopolitanism can be better explored through the adjacent Planetarium, Santamaria Bullring, Modern Art Museum and surrounding neighborhoods. Science, art, history, and culture clash and mingle in this often-controversial space.\r\n' +
      '\r\n' +
      'Then, visit the National Park, half forest-reservoir, half-cultural and, science hub. A typical weekend gathering spot for Bogotá’s denizens, where we will discuss broader changes in Colombia as a whole.\r\n' +
      '\r\n' +
      'We will then make our way back through the Parkway, part of La Soledad Neighborhood. Bogotá’s first boulevard and another of its cultural and artistic hubs where. Here artists celebrate the White Night, a gathering of artists that fills the boulevard with sculptures, performances, paintings and more.\r\n' +
      '\r\n' +
      'This tour has a suggestion of USD 10.\r\n' +
      '\r\n' +
      'Visita\r\n' +
      '- La Macarena & Teusaquillo district\r\n' +
      '- Independence Park\r\n' +
      '- Santamaría Bullring\r\n' +
      '- Park Way Boulevard\r\n' +
      '- Seventh Avenue\r\n' +
      '- National Park\r\n' +
      '\r\n' +
      'Included\r\n' +
      '- Gran Colombia Tours Guide\r\n' +
      '- Bike technical assistance\r\n' +
      '- Bike and helmet\r\n' +
      '- Exotic juices\r\n' +
      '- Agua panela, a Colombian refreshing beverage\r\n' +
      '- Tree-planting experience\r\n' +
      '- El Dorado Legend\r\n' +
      '\r\n' +
      'Not included\r\n' +
      '- Pick-up and drop-off<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours 30 minutes',
    rating: '4.6',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [           {url: "https://media.guruwalk.com/d8e71bpqhnt0ea7nltppnd1gsjfb"},
    {url: "https://media.guruwalk.com/jtp58ssage2hdcxd7g245y6ccxu2"},
    {url: "https://media.guruwalk.com/97b8t4cxdvcjxsglfqy7dlf054qt"},
    {url: "https://media.guruwalk.com/y3mfdbpegjs3yu5jbx9xoyns7ek4"},
    {url: "https://media.guruwalk.com/v1728zjxwu8lch2mgu3hxpfnkn1l"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Historic, colonial and magical Bogotá tour (Available in Spanish)',
    latitude: '4.598075',
    longitude: '-74.075537',
    descripton: 'My tour will start at Plaza Bolivar, one of the most famous places in Colombia here, I will show you how the history of the city of Bogotá begins, colonial stories and the evolution of it, we will visit the national police museum where you will learn the real history of the drug trafficking of the 80s, its characters, protagonists and you will see real elements of those times, you will know the history of the presidential house and its luxuries, how it works, we will go to the historic neighborhood of Candelaria, you will know its gastronomy and colors, I will tell you particular aspects of Colombia, climates, fruits, sayings and finally the stream of Quevedo where you can taste Colombian flavors, listen to stories, learn colorful murals, in the same way you can know churches full of history. The tour will last two hours. Places PLAZA DE BOLIVAR NATIONAL POLICE MUSEUM PRESIDENTIAL HOUSE BARRIO CALENDARIA CHORRO DE QUEVEDO<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [           {url: "https://media.guruwalk.com/krwindw6osjlm9ddnlresm0pzigr"},
    {url: "https://media.guruwalk.com/wyxddupolzo45vrfenjurdt9mucg"},
    {url: "https://media.guruwalk.com/w2jjtsyzumojcrgnzcbz47ed15pj"},
    {url: "https://media.guruwalk.com/2gwp8zhtl8jplcluqjfsmqnc66xg"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Historic Downtown Tour of Bogota (La Candelaria) (Available in English, Spanish)',
    latitude: '4.601962',
    longitude: '-74.071923',
    descripton: '<p>We aim with this walking tour to let you discover and experience our city through the eyes of the locals, to bring to life our cultural expressions, historical and representative institutions, our gastronomy, our tragedies that have changed the city and of course to have fun. We will take you through time when Spaniards came and started the new civilization. Discover with us what Bogotá offers to you and feel the ambiance of the best preserved city center in Latin America. Live our stunning, magnificent, romantic, charming, fun and friendly city! Welcome to Bogotá! This activity includes: Botero Museum Golden One Myth Simon Bolivar Square Justice Palace Siege Shooting Square “Tuqui Tuqui Lulu” expression Bogotá´s Independece Heroes Jorge E. Gaitan Complot Cultural Avenue Scars of Bogota Railway Company Policarpa Salavarrieta Heroine Jose Cuervo Secret Antonio Nariño – French Revolution Watchmaker Myth Pablo Escobar in Bogotá The 7th Wonder of Colombia Foundation Square Illegal Market of Emeralds Gastronomic District The False Door https://youtu.be/IMJyl_mp4vY</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [          {url: "https://media.guruwalk.com/r12o6ofwefhkocf73fwigrbjv6v0"},
    {url: "https://media.guruwalk.com/7y3kprppej2b9xn1ag0oduz1jqzn"},
    {url: "https://media.guruwalk.com/ji0hh4urh28hgfgql7lzgynuji1k"},
    {url: "https://media.guruwalk.com/redziem3l36grmuh3gna0p5ed0ek"},
    {url: "https://media.guruwalk.com/lf0u31m1euom6e5rbs0lmtc2cals"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Local Bogota Food Tour! (Available in English)',
    latitude: '4.602067',
    longitude: '-74.072045',
    descripton: '<p>We will take you to different food stops so you explore more Bogotá and Colombia on a delicious way. Discover our cultural mix with our authentic creations like “empanada paisa”, “obleas”, “pandebono”, “arepa santandereana”, “origin coffee”.. among many others. While walking and eating, you will understand the background of our gastronomy when the colombian territory was dominated by our indigenous ancestors. Throughout this experience you will have the chance to get closer to our Colombian culture, walk around non-touristic spots and unveil the secrets of our food legacy. (Veg friendly)</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours',
    rating: '4.9',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [       {url: "https://media.guruwalk.com/i57234gppspwma3n2kg6loiz3lmt"},
    {url: "https://media.guruwalk.com/x92qz8wxsjxco667sol5oohhnj4y"},
    {url: "https://media.guruwalk.com/06yt716a1h59hp3qvnvk63xhlfrl"},
    {url: "https://media.guruwalk.com/vjmw7extqm2540n5kclwbctide3w"},
    {url: "https://media.guruwalk.com/wo9ibj9sj18acmii50ox0hw417ol"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Armed Conflict Tour in Colombia: War and Peace! (Available in English)',
    latitude: '4.602053',
    longitude: '-74.07205',
    descripton: `<p>Colombia, one of the happiest countries on earth, has been affected globally by its bad reputation for various negative situations such as being a huge drug producer, assassinations of political leaders, and violent conflicts between different armed groups. Today, this has changed quite a bit, and while on this tour, you will understand the causes, the development, and the present days Colombian conflict. Join us for a real and interactive experience through some remarkable places and scars of the past. Learn about the development of Colombia's conflict in Bogota that changed our history, its ties to drug cartels and "You know who" behind it and the violence he imposed on the country. At the end of this experience, you will have a more comprehensive understanding of our political history, the war, it's key players, Colombian and international drug trades, the peace agreement, and where the country is heading in the near future. Join us on a walk through old and new times! https://youtu.be/8zbXOoqw3bM</p><p>Free tour: Book for free and pay what you want at the end</p>`,
    stock: 0,
    minimunDuration: '3 hours',
    rating: '4.9',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [        {url: "https://media.guruwalk.com/3f06m14lwhlmc6mz5d7aohh5phvo"},
    {url: "https://media.guruwalk.com/o9joof6gamoj1ufo2is65d08dncr"},
    {url: "https://media.guruwalk.com/3kn9i9zyzxt3xhhgscr57dz9tg2u"},
    {url: "https://media.guruwalk.com/br4q3k9fpcudvygvqb7duiecxc8v"},
    {url: "https://media.guruwalk.com/4ajtcf6su98ffgly6x3f1az3ogvu"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour memory in Bogotá: Armed conflict, guerrillas, drug trafficking and peace process. (Available in English, Spanish)',
    latitude: '4.602159',
    longitude: '-74.072625',
    descripton: '<p><strong>Do you want to know about the armed conflict, guerrillas, drug trafficking and the peace process in Colombia?</strong><br> Perhaps you came to my beautiful country after watching series (such as Narcos) that portray Colombia as a convulsive and very violent country. But, have you ever wondered <strong>what is behind this Hollywood story</strong> ?<br><br> If you are interested in history and would like to know more about what has happened in the last 7 decades, this tour is for you!<br> <strong>We will visit:</strong></p><ol><li> <strong>Santander Park</strong></li><li> <strong>Church of San Francisco</strong></li><li> <strong>Gaitan Memorial</strong></li><li> <strong>Race 7th</strong></li><li> <strong>Bolivar plaza</strong></li><li> <strong>courthouse</strong></li><li> Exhibition " <strong>The Witness</strong> "</li><li> Counter monument " <strong>Fragments</strong> "</li></ol><p><br> Get to know the Center of Bogotá with a little-spoken history!</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [      {url: "https://media.guruwalk.com/4uoze7v70uvb4qnjanix27vk43ww"},
    {url: "https://media.guruwalk.com/oi20h512feakqejduny0802iabtz"},
    {url: "https://media.guruwalk.com/ctcwg74oxlf70ln6yq9gvik68hye"},
    {url: "https://media.guruwalk.com/bu2sxb85tv9o0doawcffbrpq1wh1"},
    {url: "https://media.guruwalk.com/2psyop2bkq4d922g1vwtgpyad6x8"}]},
    type: { connect: { id: 7 } }
  },
  {
    name: 'The history of Bogotá through its emblematic characters - Free Tour (Available in English, Spanish, Russian)',
    latitude: '4.597113',
    longitude: '-74.069947',
    descripton: "<p>My tour offers a <strong>journey through the streets where emblematic characters in the history of Colombia lived</strong> , such as <strong>Simón Bolívar, La Pola or Gabo.</strong> It is a perfect tour since we will visit historical and emblematic places at the same time that we discover the most outstanding characters of Colombia. <strong><br>We will visit:</strong></p><ul><li> <strong>Quevedo's Jet</strong></li><li> <strong>Bolivar Square</strong></li><li> <strong>The 7th Race</strong></li><li> <strong>The Rosario Square</strong></li><li> <strong>Journalists park</strong></li></ul><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.6',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [       {url: "https://media.guruwalk.com/ktq6z9cftq8n81tbo9uimrilovae"},
    {url: "https://media.guruwalk.com/bhs8nim3exqegahmdgxi3fk9rt2u"},
    {url: "https://media.guruwalk.com/fejt6omwqlb6vlw27zfookd9iq7e"},
    {url: "https://media.guruwalk.com/rfrruglp1l56cnexqf1jzcgbi2sf"},
    {url: "https://media.guruwalk.com/wrqs601rvjb4v0mm37flv90mdvjh"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Complete Free Tour in Bogotá (Available in English, Spanish)',
    latitude: '4.60212',
    longitude: '-74.071949',
    descripton: "<pre><em>We start every day </em><strong><em>in front of the Gold Museum at 3pm. Look for the BLUE umbrella.</em></strong><em> In this walking tour through Bogotá's downtown you will get to know this interesting city, its different contrasts and the historical facts that turned Bogotá into what it is today. At the beginning of the tour you will learn about the </em><strong><em>legend El dorado</em></strong><em>, the Spanish colonization and the founding of Bogotá.\r\n" +
      'We will go to the Plaza del Rosario, where you will learn about the illegal market of Emeralds in Colombia. We will walk through Carrera 7ma and you will learn about El Bogotazo, a revolt causing chaos in the city in 1948. Then, you will visit Plaza de Bolivar, which houses important government buildings. We will walk through the neighborhood of La Candelaria, a colonial neighborhood that houses old architecture, here you will meet an interesting drink present since pre-Columbian times called Chicha, you will learn about the urban art of Colombia and we will do a fruit tasting at the end of the tour.\r\n' +
      '\r\n' +
      'FIND US: In front of the gold museum at 3:00pm every day, our umbrella color changed to BLUE.\r\n' +
      '\r\n' +
      'TOUR COST: Based on donations. The average is 8 dollars or 30 thousand pesos per person. The tour can be bilingual (English/Spanish) depending on the people registered.</em></pre><p><br></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour 45 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [    {url: "https://media.guruwalk.com/p2nbos5nm23xc6rgxp2hfzq9da4d"},
    {url: "https://media.guruwalk.com/zif06ju3iqmvs9mz9l017quz23qh"},
    {url: "https://media.guruwalk.com/bq5bj7qfgstbirrlizf5zxhe0laj"},
    {url: "https://media.guruwalk.com/g9wd91fhbmzz2v3xjbpwr0vyzvzu"},
    {url: "https://media.guruwalk.com/87xry0yhz8w5yodu8lcu0o3mn835"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free tour Bogota through the historic center, La Candelaria (Available in Spanish)',
    latitude: '4.598166',
    longitude: '-74.075276',
    descripton: "<p>This is a tour designed to offer the traveller an extensive historical and cultural introduction to the city and the country. To do this, we will do a 3-hour walk through the emblematic places of La Candelaria such as the cultural squares, the historical monuments, the local shops and restaurants, the main museums and so on. Topics that the guide will talk about: The indigenous people who inhabited the capital and their best-known ritual (the gold legend ), the arrival of the Spanish and the colonization, the independence of Colombia, the Bogotazo, Palace of Justice siege by the M19, the violence in Colombia and the characters involved in it, the colon theatre, Gabriel García Márquez, the gold museum, emeralds, plaza la Concordia, la chicha, the gastronomy of Bogotá and Fernando Botero. IT IS NECESSARY TO RESERVE and present the reservation at the beginning of the tour. Groups of more than 5 people must request a private tour. Remember that our tour is NOT free. We use a methodology called conscious payment. How does it work? We offer you a tour, you enjoy it first and then you pay for it. Example: At the beginning of the tour our guide will let you know the estimated value that our tour has, in this case of the shared walking tour is 30 thousand pesos per person after you know the price, you take the experience and at the end of the tour you give your monetary contribution based on your satisfaction and the guide work. You can offer more than 30 thousand if you consider that the tour exceeds your expectations but if it wasn't the case, you can contribute less, it all depends on your experience. Children under 16 do not need a reservation, please do not reserve a place for them, they can attend without a problem, the only recommendation is children must come to the tour with an adult.</p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '3 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [         {url: "https://media.guruwalk.com/0wl6q5jhtw0k9aygsq3qt7v0xq9f"},
    {url: "https://media.guruwalk.com/t9afdhamg2v54wn6wmzpnibhvycl"},
    {url: "https://media.guruwalk.com/px08d8gncy2l574jihdpbavz6ng3"},
    {url: "https://media.guruwalk.com/48ofwua3rdgkxcoi5abgws2ftwvs"},
    {url: "https://media.guruwalk.com/9w16kgw5eq8z3rfymdklwe7hpo3i"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Discover the Cerro Monserrate - Free Tour (Available in Spanish)',
    latitude: '4.603952',
    longitude: '-74.055367',
    descripton: '<p><strong>Welcome to the Free Tour Monserrate Bogotá!<br></strong><br> This Tour consists of a <strong>visit to the Cerro de Monserrate, the best known of the Eastern hills of Bogotá.</strong> Along with Guadalupe, which is <strong>one of the guardian hills of the city</strong> and one of the most touristic places in the city, if you come to Bogotá and do not go to Monserrate you are missing a very important part of the city, turn around and come! with me to show you!<br> <strong>This place contains a unique cultural, religious, flora and fauna richness.</strong><br> The view of the city from this point is spectacular and you will be left with a nice memory for living this experience.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.7',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [        {url: "https://media.guruwalk.com/munojah583nuian8s9dzhjcdro0m"},
    {url: "https://media.guruwalk.com/otuweyg943w3x9zdahg8j7pvffyp"},
    {url: "https://media.guruwalk.com/ewvqhk2uk90e81mtbmpex58o4nx7"},
    {url: "https://media.guruwalk.com/vhwoz850ecc4uaymtox599rodlxq"},
    {url: "https://media.guruwalk.com/p6n8xo0lc8dpzxnup8ji4crl1410"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour Bogotá Ancestral Pluricultural (Available in English, Spanish)',
    latitude: '4.602256',
    longitude: '-74.066979',
    descripton: "<p><strong>Free Tour Naturally ancestral and multicultural</strong></p><p><strong><br></strong> The<strong> </strong>I invite you to explore the extraordinary <strong>Historic Center of Bogotá</strong> to travel back in time to the beautiful <strong><em>Bacatá</em></strong> between its urban and mystical contrast that continues to shelter this ancestral sacred territory.<strong><em><br><br></em></strong> We will travel from the legacy of the Muisca community, the colony, to enter the cultural and social news that our country is experiencing. <em><br>We will highlight the native flora<br></em> <strong><em><br>We will visit:</em></strong></p><ul><li> <strong>Candelaria</strong></li><li> <strong>Quevedo's fountain</strong></li><li> <strong>La Concordia market square</strong></li><li> <strong>Jorge Eliecer Gaitan Monument</strong></li><li> <strong>Bolivar plaza</strong></li><li> <strong>Representative murals of our Andean Muisca culture</strong></li><li> <strong>Gabriel García Márquez Journalists Park</strong></li></ul><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '3 hours',
    rating: '4.7',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [          {url: "https://media.guruwalk.com/pcoaj72zyr4kl8f6uca76tp5k2w4"},
    {url: "https://media.guruwalk.com/b702jjnxdlgfkf85h9jjt7fd0025"},
    {url: "https://media.guruwalk.com/brh3bf9euoksn1c0ado80ircyz8o"},
    {url: "https://media.guruwalk.com/678mo9mc8sw26vbg378hol7jmygf"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour Ancestral, Colonial and Diverse Bogota (Available in English, Spanish)',
    latitude: '4.601654',
    longitude: '-74.06755',
    descripton: "<p>Welcome to the <strong>wonderful Historical Center of Bogotá</strong> from where we will discover the ancestral legacies of <strong>our Muisca indigenous community</strong> , we will learn about the process of conquest of the Bakata territory in the 16th century and we will learn about the Colony, the period of Gran Colombia, the battles for the country's independence and eventful recent history<br><br> <strong>We will visit:</strong></p><ul><li> <strong>Candelaria</strong></li><li> <strong>Quevedo's fountain</strong></li><li> <strong>Bolivar plaza</strong></li><li> <strong>Santander Park</strong></li><li> <strong>Gabriel García Márquez Journalists Park</strong></li><li> <strong>Monument to Jorge Eliecer Gaitan</strong></li></ul><p><br> Come and enjoy this wonderful tour to discover the identity of Colombia.</p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '3 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [   {url: "https://media.guruwalk.com/6dk32dy784r97nu0s8dnverr6tn2"},
    {url: "https://media.guruwalk.com/oniva7p4x8q4mp35fiop9to55lyp"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour Museums of Bogota (Available in English, Spanish)',
    latitude: '4.601739',
    longitude: '-74.072013',
    descripton: '<p><strong>We will visit the main museums in the center of Bogotá</strong> , with a guided tour in each one, where you will be amazed by the hidden treasures that inhabit each of the places we will visit.<br> The following museums are included in the Free Tour:</p><ul><li> <strong>gold Museum</strong></li><li> <strong>Botero Museum</strong></li><li> <strong>Mint Museum</strong></li></ul><p><br> Come enjoy and learn about the culture, history and art that the historic center of Bogotá houses.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours',
    rating: '4.7',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [    {url: "https://media.guruwalk.com/4kadj50o7cc76d7z814rulehmbsu"},
    {url: "https://media.guruwalk.com/dlpt3d1fg703597q42v3xkru59kp"},
    {url: "https://media.guruwalk.com/rfkr8sythr8jaw2r6m3862jci19h"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour through the Las Cruces neighborhood of Bogotá (Available in English, Spanish, Italian)',
    latitude: '4.589328',
    longitude: '-74.081572',
    descripton: '<p>This Tour is to get to <strong>know one of the neighborhoods of Bogotá that has more history.</strong><br> We will enter the Las Cruces neighborhood so that you understand why <strong>this neighborhood played a very important role in the creation and development of the city of Bogotá.</strong><br><br> We will walk to the <strong>Pila de la Garza</strong> where we will tell you <strong>why it was so important</strong> at the time <strong>for the city.</strong> We will know where the first gasoline pump in the city was located.<br> We will visit the <strong>Alfonso passage where movies and videos have been filmed.</strong><br> Very close to the Church is the place where the trucks that represent one of the economic activities of the neighborhood are parked, we will tell you much more about this and we will go to other places that provide services for the people of the neighborhood<br> The <strong>house where the leader Jorge Eliecer Gaitán was born</strong> is also located in this neighborhood.<br> <strong>We will pass through the alley of death</strong> , one of the narrowest alleys where the first tram station was and we will tell you why the name of our route.<br> Then <strong>we will go to the market square</strong> and we will tell you why it was built and the processes and influence it has had on the neighborhood.<br> The tour also includes culture, since the members of the ethnic group recognized worldwide were born in this neighborhood (we will tell you more about them).<br> <strong>Jump a little from the conventional and dare to discover something different and interesting.<br><br></strong><br> - We will meet in the Central Park of Las Cruces neighborhood<br> Race 8 2-33</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [     {url: "https://media.guruwalk.com/fq0wczjfx9ozeo4kiytd3z4tcl4f"},
    {url: "https://media.guruwalk.com/t94th4g8whzj3zm6ggwlwr4dq8r2"},
    {url: "https://media.guruwalk.com/zcz8shs87tzwnuhhhnkvtav0aoqe"},
    {url: "https://media.guruwalk.com/ww15oz2u584ao3fq6w0miz6hc73g"},
    {url: "https://media.guruwalk.com/eeycdbaf6quazvuyu6f20vfdeayk"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Historical and gastronomic Free Tour in Bogotá (La Candelaria) (Available in English, Spanish)',
    latitude: '4.59865',
    longitude: '-74.070402',
    descripton: `<p><strong>What does a metropolis like Bogotá taste like? This is what you will discover in this historical and gastronomic tour (with more than 15 tastings), which combines 2 tours in one.</strong><br><br> <strong>Join me for a walk through</strong> the heart of the city in <strong>the colorful neighborhood of La Candelaria.</strong> Here are the main sites of historical interest and places where you can eat delicious and exquisite traditional Bogota and Colombian food.<br><br> This is a walking tour full of the typical flavors, stories and secrets of the city. It is a total immersion experience in the culture of Bogotá and Colombia.<br><br> You will walk through the local market, taste sweet flavors and discover why Colombia is the country of fruits.<br><strong><br></strong> You will <strong>live a "coffee experience", full of smells and flavors in a beautiful cafeteria in La Candelaria</strong> with expert baristas who will show you why the Colombian grain is so famous and appreciated.<br><br> <strong>You will learn how Colombian emeralds are carved</strong> (the so-called "green spell") and other pieces that distinguish Colombia in the world.<br><br> You will be in iconic places such as Plaza Bolívar and you will be able to take unforgettable photos with the pigeons that abound in this traditional meeting place for Bogotans.<br><br> After walking through the old stone streets, you will try the famous ajiaco, the most native dish in the city, in a place with more than 200 years of history.<br><br></p><p> <strong>What are you going to try and visit on this historical and gastronomic tour?</strong></p><ul><li> <strong>La Concordia Market</strong></li><li> <strong>Colombian fruits</strong></li><li> <strong>Funnel Street</strong></li><li> <strong>fritters</strong></li><li> <strong>funnel street</strong></li><li> <strong>santafereño chocolate</strong></li><li> <strong>indigenous girl</strong></li><li> <strong>Chorro de Quevedo Square</strong></li><li> <strong>colombian empanadas</strong></li><li> <strong>coffee experience</strong></li><li> <strong>coca tea</strong></li><li> <strong>Colombian Emeralds Experience</strong></li><li> <strong>Colombian plain dishes</strong></li><li> <strong>Boyacá arepa</strong></li><li> <strong>Patacon</strong></li><li> <strong>Bogota sweets</strong></li><li> <strong>San Carlos Palace</strong></li><li> <strong>Bolivar's balcony</strong></li><li> <strong>Bolivar plaza</strong></li><li> <strong>Ajiaco</strong></li><li> <strong>And many more historical and gastronomic secrets of Bogotá...</strong></li></ul><p><br><br> This is a very complete 5-hour tour through the heart of Bogotá so that you have a complete experience of the Colombian capital, full of flavor and history to delight your palate and increase your cultural heritage.<br> I wait for you!<br><br><br> <strong>IMPORTANT:</strong> All expenses in more than 15 food tastings add up to approximately 9 dollars. This tour is suitable for vegetarians and vegans. You can always choose what to eat and you can share.<br><br> https://youtu.be/h0ofSR5jZBk</p><p>Free tour: Book for free and pay what you want at the end</p>`,
    stock: 0,
    minimunDuration: '5 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [        {url: "https://media.guruwalk.com/nvp7z582sdgd11klzlgr0ceaxjqr"},
    {url: "https://media.guruwalk.com/8v8dko2m90i9q1bnak9drhptzbvl"},
    {url: "https://media.guruwalk.com/nbeymx7k1oa8kyh9i9l1nhgz8imp"},
    {url: "https://media.guruwalk.com/5ww16bifagrynk06rhggcc9gzcrq"},
    {url: "https://media.guruwalk.com/6uyenu3ydtki5r3q1kf9rfake1zt"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Tour of the Colombian emeralds (Available in English, Spanish)',
    latitude: '4.601681',
    longitude: '-74.071764',
    descripton: `<p><em>Colombia is known for its coffee, but what not everyone knows is that Colombia also has the best quality of a gemstone called emerald. The objective of our tour is to show you why this stone is important in Colombia. In this tour through the center of Bogotá, you will learn the </em><strong><em>difference between a good quality emerald and a low quality one</em></strong><em>, the extraction and carving process of this precious stone and how to </em><strong><em>differentiate between a real emerald and a false one</em></strong><em>. At the end of the tour, you will be an expert on the subject. If you want to learn about jewels during your visit to Colombia, this tour is perfect for you. You will learn a lot about the Colombian emerald, and other interesting things like "quartz" "pyrite" and "the gold of fools". We start everyday at 12PM In front of the gold museum, we have a BLUE umbrella (IT'S NECESSARY TO RESERVE) The first place we will visit will be the plaza del rosario and you will discover why there are people standing all day in the square, guess? They are engaged in the informal emerald trade there! Then we go to a workshop where we have representations about the Extraction and carving of this precious stone, and finally we go to the jewelry store to see in what state these precious jewels are finally being sold. If you decide to join our tour you will learn more about why this jewel is so important to Colombia, we are waiting for you!</em></p><p>Free tour: Book for free and pay what you want at the end</p>`,
    stock: 0,
    minimunDuration: '1 hour',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [       {url: "https://media.guruwalk.com/9zi1evzfa0bchdylm5nzc4nn6ncl"},
    {url: "https://media.guruwalk.com/kqf5pg0manca38p9sh6v7zv4z3fp"},
    {url: "https://media.guruwalk.com/6so6to0cc0xw2awtv3gs1yf2h9h9"},
    {url: "https://media.guruwalk.com/wfbtm72vitk20ltswz3fh7dqn85t"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'The Best Experience to See Bogota - Free Walking Tour! (Available in English, Spanish, French, Portuguese)',
    latitude: '4.601185',
    longitude: '-74.069325',
    descripton: 'See and live the beautiful historic center of Bogotá with this magnificent tour. The best way to experience the traditions and customs of the capital!\r\n' +
      '\r\n' +
      'The sites that we are going to visit are:\r\n' +
      '-Parks Park Gabriel García Márquez\r\n' +
      "-Quevedo's fountain\r\n" +
      '-Bolivar plaza\r\n' +
      '-Primate Cathedral\r\n' +
      '-Botero museum\r\n' +
      '-Colon Theater\r\n' +
      '-Torre Avianca\r\n' +
      '- Gold Museum\r\n' +
      '\r\n' +
      'It is a route that you can not miss, and the best of all, you decide how much it is worth it!<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [         {url: "https://media.guruwalk.com/zvb95epff5zm9wjljaq40t4xof7d"},
    {url: "https://media.guruwalk.com/ajmu3a3lg3pj8os6bgtcwocn3r0q"},
    {url: "https://media.guruwalk.com/xs442zit69o95wcxcdga7w816yaj"},
    {url: "https://media.guruwalk.com/57z4s8g17oen4mu4zcw25b041i1t"},
    {url: "https://media.guruwalk.com/dnuplu3xw3u7z68no5wdk294jonz"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free bike tour from the airport to the green Bogota (Available in Spanish)',
    latitude: '4.682452',
    longitude: '-74.121832',
    descripton: 'The best free tour for convenience in the city! This bike tour will bring you closer to the true Bogota and to know the quietest area of this great capital, as well as badge places of the Bogota citizens and that few tourists know. Our bicycle tour starts from the main transmilenio station where you will have a brief explanation of bicycle safety and use and how the tour will be. Then we will cycle through the most emblematic cycle route in the capital, passing through government entities, famous Colombian companies, residential neighborhoods and parks that for Bogota represent a pride. We will have a break in the botanical garden where you will know natural wonders of our country. We finish at the same meeting point where you can continue with your trip to the airport (5 minutes from there by bus) What does it include? Free tour What does it not include? Bicycle rental value 10 euros Entrance to botanic garden to Bogota (between 1-3 dollars / euros) Hydration and food<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours 15 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [   {url: "https://media.guruwalk.com/u2fj6j73m5ysx4v6n7lsl7gsz7em"},
    {url: "https://media.guruwalk.com/773xrhmigpuzf0g5v7shl5mfglar"},
    {url: "https://media.guruwalk.com/2cxak6hmat3lmw9htg3pfijolxck"},
    {url: "https://media.guruwalk.com/m0ia87n3ilo4x1dlvnsecx5uaagj"},
    {url: "https://media.guruwalk.com/utyfe416snrrtjxjmfpsni7cwdqw"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Monserrate Tour Bogotá (Available in English, Spanish)',
    latitude: '4.605216',
    longitude: '-74.055395',
    descripton: "<p>Be part of the fulfilling experience in Monserrate, the most touristic place in Bogotá, with its official walking tour. Discover all the places that make this hill a meeting point for both foreigners and the Colombian people by visiting its restaurants, coffee and snack shops, Via Basílica and Via Crucis. Understand the history of the Shrine and the importance of Catholicism to Colombian customs and traditions. Try typical Colombian snacks and dishes. Learn about the native fauna and flora and the two means of transportation to the hill. In an hour and a half, our guide will explain how Monserrate became a pilgrimage site with the construction of its first chapel in 1640 and how, over time, it also became a tourist spot thanks to its extraordinary views of Bogotá's magnanimity and a hiking destination or training zone for those who train. You will also make a wish in the wishing well and learn and discover all the interesting, funny and most often unknown superstitions, sayings and facts about a must-see place in the capital of Colombia. Our guide will take you around nine stops where you will have a very comprehensive view of the hill. Recommendations Monserrate is one of the most touristic places in Bogotá. Usually, he has a waiting line to buy tickets. We recommend that you come 30 to 40 minutes before your scheduled tour in order to get to the top of the hill on time. This tour has a tip of 8 USD. Included - Gran Colombia tour guide - History and tour inside the sanctuary - Walk around the 14 stations of the Cross - History of the first tourist cable car in Colombia - Fauna and flora lesson - Wish good tradition Not included - Pick-up and drop-off</p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '1 hour 30 minutes',
    rating: '4.4',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [   {url: "https://media.guruwalk.com/ramo4u7ap9qx7ac8h8qop50yl4ll"},
    {url: "https://media.guruwalk.com/kexwttgfwv1ovbd60djefs6el7gg"},
    {url: "https://media.guruwalk.com/1iwnc26rcrjxpjv4n737gbras28n"},
    {url: "https://media.guruwalk.com/de7bytykr8wo4jg02jvgqoqvl2q8"},
    {url: "https://media.guruwalk.com/qnaupphu9mea5u7rgn41sgpnv9gm"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Culture, beer, snacks and Bolirrana! (Available in English, Spanish)',
    latitude: '4.597014',
    longitude: '-74.072876',
    descripton: '<p>Culture, beer, snacks and Bolirrana!<br><br> <strong>Bolirana is a game that dates back to ancient indigenous communities of the Andes</strong> and where fun and talent are combined, on this tour you can also try the traditional empanada and share with other people, both locals and visitors.<br> The Historic Center of La Candelaria is where our Tour will take place. <strong><br>Places:</strong></p><ul><li> <strong>El Chorro Craft Gallery - Carrera 3 # 12d - 80</strong></li><li> <strong>Coffee shop</strong></li><li> <strong>Concordia Market Square</strong></li><li> <strong>Chorro de Quevedo Square</strong></li><li> <strong>Simon Bolivar Square</strong></li><li> <strong>Santander Park</strong></li><li> <strong>Birmingham Frog Pub</strong></li></ul><p><br> Welcome to enjoy the true local Bogota culture.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [       {url: "https://media.guruwalk.com/253s5wvgqvqcv66fdzal3eskc3sx"},
    {url: "https://media.guruwalk.com/oe0yoh2xd0issdlya2048d6j0sf5"},
    {url: "https://media.guruwalk.com/f1by9hk1q22hf039nprq042n9o7n"},
    {url: "https://media.guruwalk.com/48dzw00zmejhf1dt8xxqlsxdb8wp"},
    {url: "https://media.guruwalk.com/4jx6kjhavf3etbyvt0oj7wwcqxq2"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Unique free tour of Bogota (Available in Spanish)',
    latitude: '4.632251',
    longitude: '-74.067543',
    descripton: '<p>Hola a todos, les presentaré lugares para muchos desconocidos y rutinarios en Bogotá como el Parque Gernika, Park Way, Teusaquillo y el innovador Parque Central Bavaria. Así mismo observaremos más edificios de arquitectura victoriana, personajes históricos de Colombia y el verde puro predominante que encontraremos desde el inicio hasta el final de nuestro recorrido. En el camino iré dando pequeños entretenimientos y/o detalles. Es importante cuidar sus objetos personales, bloqueador solar, sombrilla y campera en caso de lluvia, ropa y zapatos cómodos y buena hidratación.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [    {url: "https://media.guruwalk.com/lxvd7okwtedupqxer95xrmyun49t"},
    {url: "https://media.guruwalk.com/ks77cz0u2yp0gqc2xa9yy14ub1ji"},
    {url: "https://media.guruwalk.com/mkff363ju5dydpr1oehc72ejpyvk"},
    {url: "https://media.guruwalk.com/rakssdzlduiwr482yctvobj6emsk"},
    {url: "https://media.guruwalk.com/f7ql5qn61gstban5bt1nn8xeuy94"}]},
    type: { connect: { id: 7 } }
  },
  {
    name: 'Bogotá Única Free Tour CHRISTMAS Version - END OF YEAR (Available in Spanish)',
    latitude: '4.63266',
    longitude: '-74.06766',
    descripton: '<p>Walkers friends,<br> Bogotá is magical for its nightlife and even more so if it is about dates as special as these in which our citizens and tourists from all over the world are glimpsed by the splendor of its multiple lights and events in various parts of its geography.<br><br> We are in the Christmas season and end of the year<br> and what better way to share this tour of<em><br></em> <strong><em>Bogotá Unique Free Tour CHRISTMAS Version.<br></em></strong><br> <strong>We will visit the usual places of always with the particularity that in some of them we will witness this beautiful Christmas lighting</strong> in:</p><ul><li> <strong>Park way</strong></li><li> <strong>Central Park Bavaria</strong></li><li> <strong>International Center</strong></li><li> <strong>Independence Park and Torre Colpatria.</strong></li></ul><p><br> <strong>We recommend you.</strong></p><ol><li> Bring Biosafety items (Mask and Antibacterial Gel)</li><li> Your COVID 19 Vaccine Card Updated</li><li> Good hydration</li><li> Warm clothes and comfortable shoes.</li></ol><p><br> <em>Remember that during this tour I will offer some entertainment and / or details.</em></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: '3.5',
    cost: 0,
    country: 'Colombia',
    city: 'Bogotá, Cundinamarca',
    pictures: { create: [      {url: "https://media.guruwalk.com/gh8b5cvln8knzzg3580sa04cq4cd"},
    {url: "https://media.guruwalk.com/q6nejmxa3nt1383pq97od35hqh36"}] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'Free Tour Getsemani, mural art and traditions (Available in English, Spanish, Italian)',
    latitude: '10.42312',
    longitude: '-75.548913',
    descripton: '<p><strong>Enjoy a guided walk</strong> by an experienced Trilingual guide with support in the form of audio guides recorded with my own voice <strong>through the Getsemaní neighborhood appreciating the murals or graffiti, their meaning, their history, customs and idiosyncrasies of its people,</strong> I will talk about their music , gastronomy, (places to eat well and cheap), Join me on this tour that will be fascinating, joyful and fun.<br> <strong><em>Route to follow:</em></strong></p><ul><li> <strong>Departure from the Plaza de La Paz</strong></li><li> <strong>Obelisk Centennial Park</strong></li><li> <strong>Magdalena Street</strong></li><li> <strong>San Andres Street</strong></li><li> <strong>Warrior Street</strong></li><li> <strong>Trinity Square</strong></li><li> <strong>Carter Street</strong></li><li> <strong>Visit to the San José bastion</strong></li><li> <strong>Lomba Street</strong></li><li> <strong>narrow alley</strong></li><li> <strong>San Juan Alley</strong></li><li> <strong>serpent street</strong></li><li> <strong>we finished Plaza de los Mártires.</strong></li></ul><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour 45 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [        {url: "https://media.guruwalk.com/22n7oda41m1pok2w5dzbcaejdqdk"},
    {url: "https://media.guruwalk.com/mz48ybaw0esoljo7r87z2t3mmiut"},
    {url: "https://media.guruwalk.com/7xrij3pbdtdj1reajgeoway06kwr"},
    {url: "https://media.guruwalk.com/p2v6t5my6om9210efquryyg4rgvc"},
    {url: "https://media.guruwalk.com/qum1vbu4wd5h03zun0uhwbjl4b13"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour A Jewel Under The Colony, Cartagena de Indias Fortified 407 years. (Available in Spanish)',
    latitude: '10.424392',
    longitude: '-75.551972',
    descripton: "<p><strong>Visiting friend, get ready to take a walking tour through the Walled Belt of Cartagena de Indias.<br> Unique in its kind in the Tours of Cartagena.<br> If you would like to know the history of the fortifications of Cartagena, this is your tour!<br> Through the Council of the Indies initially, Spain ordered in 1526 that the work required for the defense of the coastal cities against acts of piracy be carried out.<br> In 1594, Bautista Antonelli arrived in Cartagena with the Certificate of Instruction from Madrid dated March 11, 1593.<br><br> MEETING POINT PLAZA DE SANTO DOMINGO<br></strong><br></p><ul><li> <strong>Bastion Santo Domingo.</strong></li><li> <strong>Bastion of the Cross.</strong></li></ul><p> <strong>.</strong> <strong>Baluarte de las Ballestas.</strong></p><ul><li> <strong>Bastion of Mercy.</strong></li><li> <strong>Bastion of Santa Clara.</strong></li><li> <strong>The Vaults of Santa Clara.</strong></li><li> <strong>Bastion of Santa Catalina.</strong></li><li> <strong>Bastion of San Lucas.</strong></li><li> <strong>Half Bastion of San Pedro Mártir.</strong></li><li> <strong>End of the Tour on land with the Castle of San Felipe de Barajas.</strong></li></ul><p><br></p><p> <strong>NOTE:</strong> children over 10 years old must cancel 50% of the tour - minors go free.</p><p><br> <strong>TO CONSIDER:<br></strong><br> <strong>It is a paid tour,</strong> so the delivery of the <strong>value of their work to the Professional Tourism Guide</strong> is expected for their services offered. A recommended contribution <strong>of ($20,000) per PERSON.</strong><br> If you consider giving a little more that's fine. <strong><br><br>Thank you.-</strong><br> <strong>I look forward to showing you my city!</strong></p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours 45 minutes',
    rating: '4.6',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [    {url: "https://media.guruwalk.com/0ksj94otawuwwah54ke0bb54wjih"},
    {url: "https://media.guruwalk.com/v1dcphk2jbyxwzqloqb3igrhf0f1"},
    {url: "https://media.guruwalk.com/8la415uvneb6jrycawut04wophci"},
    {url: "https://media.guruwalk.com/cvrf2dezpgns77mozdd9o0fdg7i6"},
    {url: "https://media.guruwalk.com/msn8hkjm3pr630hqidq6p9px0heb"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour through the Old Town of Cartagena! Colombia (Available in English, Spanish)',
    latitude: '10.421579',
    longitude: '-75.552263',
    descripton: `<p>In this free tour of the "Eroica" we will visit the most important streets and squares of the old town. It will be a <strong>very complete tour for you to discover the magic and charm of the old city</strong> of Cartagena.<br><br> <strong>What will we visit?</strong></p><ul><li> <strong>Santa Teresa Square</strong></li><li> <strong>San Pedro Claver Square</strong></li><li> <strong>Aduana's Place</strong></li><li> <strong>Cars Square</strong></li><li> <strong>Proclamation Square</strong></li><li> <strong>Cathedral</strong></li><li> <strong>Simon Bolivar Square</strong></li><li> <strong>Santo Domingo Square</strong></li><li> <strong>Mercy Square</strong></li></ul><p><br> Any doubt or question is welcome, go ahead and book this Free Tour!</p><p>Free tour: Book for free and pay what you want at the end</p>`,
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [      {url: "https://media.guruwalk.com/4yg12c56pjybxg1v7pelrjzasdia"},
    {url: "https://media.guruwalk.com/u5yc7p2jlz776l4axl0iq9r74wji"},
    {url: "https://media.guruwalk.com/phn6f87rri9orow9ywsgg8o8acjt"},
    {url: "https://media.guruwalk.com/wpqvz1bzmq7vin2wdq1zdqzaxq6d"},
    {url: "https://media.guruwalk.com/cab7mbyj3fkeoq44f8bgv1w9f4ki"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free walking tour through the revolutionary, magical and colorful Gethsemane (Available in English, Spanish, French)',
    latitude: '10.422809',
    longitude: '-75.548718',
    descripton: "<p>We want to share with you <strong>the colorful and joyful magic of the Caribbean by</strong> exploring and discovering <strong>Gethsemane with us.</strong> Feel the colors of the beautiful streets and houses, the symbolic graffiti, the beautiful flowers and the unique decorations. Dance salsa and champeta. Try the slip.<br> <strong>Experience the traditions and folk crafts of Cartagena.</strong> You will know what it means to be Cartagena and Getsemanisence. You cannot miss this fantastic experience<br> <strong>What will we have to go through and experience?</strong></p><ul><li> <strong>Revolution for independence</strong></li><li> <strong>Graffiti</strong></li><li> <strong>Symbology</strong></li><li> <strong>Salsa and Champeta</strong></li><li> <strong>Drinks</strong></li><li> <strong>Trades</strong></li></ul><p> <strong>... and more!</strong><br><br> You can't miss it, we are waiting for you!</p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [     {url: "https://media.guruwalk.com/8arg3aevxlo12zrtth54u9r0tkvc"},
    {url: "https://media.guruwalk.com/euxlstfkz86u1xg8uxdv5dpuytfj"},
    {url: "https://media.guruwalk.com/kxlsrbztl6g4wvoyeq22neilm0rv"},
    {url: "https://media.guruwalk.com/lmh7izpxa3sm5gppbyqlcbpns0tj"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour Corralito de Piedra (Available in English, Spanish)',
    latitude: '10.422855',
    longitude: '-75.54847',
    descripton: "<p>This is a tour where you will learn about the history and culture of <strong>why Cartagena was declared a World Heritage Site</strong> .<br> Join us on this very exciting and fun tour with professional bilingual guides where you can have a deep historical review of the most interesting places in <strong>CORRALITO DE PIEDRA.<br></strong><br> We will show you in the most entertaining, fun and interesting way its architecture, its local culture, its squares, parks, churches, statues, sculptures, walls and streets.<br><br> Places to visit during the tour:<br><br></p><ul><li> Peace Square.</li><li> Cars Square.</li><li> Customs Square, Municipal Mayor's Office.</li><li> San Pedro Claver Square, San Pedro Claver Sanctuary.</li><li> Francisco Javier bastion.</li><li> Plaza Santa Teresa, Naval Museum and Hotel Santa Teresa.</li><li> Bolivar Park, Palace of the Inquisition, Gold Museum.</li><li> Plaza de la Proclamacion, Palace of the Proclamation and Cartagena Cathedral.</li><li> Santo Domingo Square, Santo Domingo Church.</li><li> Baluarte Santo Domingo ends.</li></ul><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.0',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [       {url: "https://media.guruwalk.com/zcyf67pilwv5xpim8viiwfhp5408"},
    {url: "https://media.guruwalk.com/g25wb2xcp08jfu2zykifjs6jlr79"},
    {url: "https://media.guruwalk.com/29y79fn2ej0989l8ceskbpd4gyi8"},
    {url: "https://media.guruwalk.com/gxvq885szzfv4621fz31seu8rkfw"},
    {url: "https://media.guruwalk.com/9bddybgszf07219sgycryz5y9xq2"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Get to know, live and enjoy the historic center of Cartagena de Indias (Available in German, English, Spanish)',
    latitude: '10.421968',
    longitude: '-75.549438',
    descripton: "<p><strong>Historical tour through the Santo Domingo neighborhood, in the historic center of Cartagena de Indias.</strong><br> In this pleasant walk we will visit Santo Domingo, I will show you the most outstanding places such as:</p><ul><li> <strong>The square of Cars</strong></li><li> <strong>Aduana's Place</strong></li><li> <strong>San Pedro Claver Square</strong></li><li> <strong>The walls</strong></li><li> <strong>Santa Teresa Square</strong></li><li> <strong>Simon Bolivar Square</strong></li><li> <strong>Santo Domingo Square</strong></li><li> <strong>Plaza de la Merced</strong></li><li> <strong>Bastion of Santo Mingo.</strong></li></ul><p><br> We will talk about <strong>slavery, inquisition, music, gastronomy</strong> and we will stop at the <strong>coffee house and the emerald house.</strong></p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.6',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [  {url: "https://media.guruwalk.com/sqc0ommy6r6s5ry5u2q6vgvuy7kv"},
    {url: "https://media.guruwalk.com/faft1tmmawctbae30ntrl2mb420n"},
    {url: "https://media.guruwalk.com/j16m1ew2cfyar3ec5ebws2dlhrlz"},
    {url: "https://media.guruwalk.com/xodts9kmdewf7cwv5bumurahokzd"},
    {url: "https://media.guruwalk.com/x7i932lbauchkpkfnf9dywggivhf"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour Get to know The Old City! (Available in English, Spanish)',
    latitude: '10.423071',
    longitude: '-75.549262',
    descripton: "<p><strong>The Old City is full of history, romance and joy</strong> . In this experience <strong>you will walk through the times and experiences</strong> that some of the streets and places tell.<br><br></p><p>&nbsp;If you want to enjoy a pleasant walk and also learn to move more easily through the old city <strong>listening beyond what the streets and walls tell you</strong> ; this tour is a must for you and a <strong>must if you are visiting the city for the first time.</strong><br><br></p><p>Our meeting point is the <strong>Clock Tower,</strong> this iconic place in the city has <strong>played a very important role in the past,</strong> from there we will go to a <strong>fantastic pier</strong> where you can see the bay and take excellent photos to set the scene.<br><br> Next, we will enter <strong>the old city</strong> and we will go through <strong>streets and squares</strong> such as <strong>the customs square, the Simón Bolívar park</strong> , we will enter <strong>the gold museum</strong>, then we will move to the emblematic <strong>Plaza de Santo Domingo</strong> where you can appreciate a <strong>unique Botero sculpture.</strong> We will then visit an emerald store where you will hear a talk about the gem, see an exhibition and taste a delicious Coffee.<br><br> Then we will go up to the <strong>fortress and</strong> walk on it to <strong>enjoy the view of the other side of the bay,</strong> moving to 2 other iconic points: <strong>the vaults and the monument</strong> to India Catalina where you can take some beautiful photos.<br><br> Itinerary:</p><ul><li><strong>Clock Tower</strong></li><li><strong>Pegaso's Dock</strong></li><li><strong>Old City</strong></li><li><strong>Aduana Square</strong></li><li><strong>Simon Bolivar Park</strong></li><li><strong>Gold Museum</strong></li><li><strong>Santo Domingo Square</strong></li><li><strong>Esmeralda Visit and Talk</strong></li><li><strong>Walk on the walls</strong></li><li><strong>The vaults</strong></li><li><strong>Serrezuela Square</strong></li><li><strong>Monument to India Catalina</strong></li></ul><p><br></p><p><strong>Useful information:</strong><br> <em>I recommend you to wear comfortable summer clothes, put on sunscreen, wear a hat or sunglasses and tennis shoes and of course a good device to take good photos.</em></p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.6',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [       {url: "https://media.guruwalk.com/lkum5v098073joltr1svl9frm1x9"},
    {url: "https://media.guruwalk.com/e4f05hyl4p7tsb8wdg3f1kityhtb"},
    {url: "https://media.guruwalk.com/1ppho0z8fk4klfygmntb31gga0qc"},
    {url: "https://media.guruwalk.com/kf3sc2voo5xhf1s4fynsagsn6nkd"},
    {url: "https://media.guruwalk.com/b5j0ftxiy7r3dss59xu1q8fp58fh"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free tour of Gabriel García Márquez, Myths and Legends (Available in Spanish)',
    latitude: '10.422799',
    longitude: '-75.54875',
    descripton: `<p>The best tour of the Magical and Literary Cartagena. Take a <strong>tour of scenarios</strong> that served as <strong>inspiration for books written by Gabo</strong> (Nobel Prize for Literature) such as "One Hundred Years of Solitude" and other Colombian works and writers.<br> <strong>Sayings, myths and legends</strong> that tell us about its walls, streets, convents and houses that transcend reality, <strong>with a touch of magic.</strong><br> <strong>Reflexes:</strong></p><ul><li> <strong>Gabo - Gabriel Garcia Marquez</strong></li><li> <strong>One Hundred Years of Solitude</strong></li><li> <strong>Love and Other Demons</strong></li><li> <strong>More Literature</strong></li><li> <strong>myths</strong></li><li> <strong>legends</strong></li><li> <strong>secrets</strong></li><li> <strong>traditions</strong></li><li> <strong>Cartagena symbols</strong></li><li> <strong>Architecture</strong></li><li> <strong>Let's drink and coffee</strong></li></ul><p> <strong>Discover with us the Cartagena that bewitches, we are waiting for you!</strong><br><br><br></p><p>Free tour: Book for free and pay what you want at the end</p>`,
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [    {url: "https://media.guruwalk.com/8mampb8a0lbox5sqnucwhj25i3eo"},
    {url: "https://media.guruwalk.com/8o5kys9wkuywilu5nwh57up5l95q"},
    {url: "https://media.guruwalk.com/uw31gl19qapkzvmcv33axey0gxl5"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Walled City Tour of Cartagena by Beyond Colombia (Available in English, Spanish)',
    latitude: '10.422262',
    longitude: '-75.548308',
    descripton: `<p>This is the best introduction to Cartagena: the Walled City, a Unesco World Heritage site and a fairy-tale city of romance, legends and beauty within old colonial stone wall. Join us for a fun-filled walk to understand and to learn about the origins of the so-called "crown jewel of the coast", the Caribbean storehouse for all the gold and other resources the conquerors stole from the continent. On our walking tour, you'll relive the battles and victories of the Europeans, the empowerment and influence of Afro cultures, explore the narrow colorful colonial streets, see the contrast of antique-modern areas, and so much more! From its history, to its food and nightlife, to its beaches, Cartagena’s got it all!</p><p>Free tour: Book for free and pay what you want at the end</p>`,
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.5',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [   {url: "https://media.guruwalk.com/bkrgrho8d9ttait3mn631n9ony3n"},
    {url: "https://media.guruwalk.com/hi71u5yeyfi29yi1gtlnodnoukv5"},
    {url: "https://media.guruwalk.com/4yzhbvbusgcv5x8dxqwa3p0srf3r"},
    {url: "https://media.guruwalk.com/frqnl5dy6urf2gu60i1x1mhe38k7"},
    {url: "https://media.guruwalk.com/ckl0luz98oqc9uvuc8iy742089od"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Food Tour, discover the taste of Cartagena (Available in English, Spanish)',
    latitude: '10.427261',
    longitude: '-75.545333',
    descripton: '<p><strong>Walk with us</strong> <strong>through</strong> the center of <strong>Cartagena while you eat and taste authentic local food.<br></strong> We meet right in front of the <strong>Éxito de San Diego</strong> look outside the main entrance of the shopping center) to live an incredible experience <strong>where you will taste</strong> more than 7 dishes of <strong>typical Colombian street food</strong> , you will <strong>discover</strong> not only the incredible <strong>history of each meal</strong> but also understand our <strong>cultural uses for all of them.<br></strong> You will be immersed in this sea of flavors and friendly people, <strong>our experience will take you beyond</strong> simply <strong>stopping at the places</strong> , you will <strong>interact with the</strong> traditional families that have <strong>owned these stands for</strong> years and who will be really happy to see you taste our delicious street food Colombian.<br> We wait for you!<br> <strong><br>Important information:</strong><br> <em>- The cost of the dishes is not included in the price.</em></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.1',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [  {url: "https://media.guruwalk.com/aceeih1wd350rcjppdcaqyl6uet8"},
    {url: "https://media.guruwalk.com/8r2v7858mntwdx2uhbixxadhwmoc"},
    {url: "https://media.guruwalk.com/2byb4rkux7kb0fo8sie8y8662ouh"},
    {url: "https://media.guruwalk.com/36dwr15979wz2p8rida3xm7t9ysf"},
    {url: "https://media.guruwalk.com/3olhjcin39keg47et6ok96r44tih"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Getting up early to the history of Getsemani and the ancient city (Available in Spanish)',
    latitude: '10.424481',
    longitude: '-75.554023',
    descripton: '<p>(He also has a beautiful album from Colombia) It is a beautiful journey that begins in one of the best known bastions of the city. A walk full of history, geography, myths and folklore. It will be the best 3 hours of your vacation if you are a lover of history. We go through two sectors of the walled city and we will pass through its squares, streets and churches. After touring part of the historic center, our route will take us to the suburb of Getsemaní where we will see part of the graffiti culture and its popular streets.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [   {url: "https://media.guruwalk.com/riuvde2hme5syfj4v6estkvzpp4k"},
    {url: "https://media.guruwalk.com/vnwt19t0jrs3t0xjzmcxfff2ygzl"},
    {url: "https://media.guruwalk.com/vd7fqkplms7ne1cgo7feh3zbkkfu"},
    {url: "https://media.guruwalk.com/tk3o7jz8gjqxhkjsho75bxokyl71"},
    {url: "https://media.guruwalk.com/a2mtt569o9ny06ciq2orw6qt71ba"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Discover the Magic of the Fantastic City of Colombia. (Available in English, Spanish)',
    latitude: '10.422934',
    longitude: '-75.549583',
    descripton: 'Every corner, every street has its magic and with us you will discover it, you will know about our history, culture, traditions, gastronomy, music and you will do it with the help of local guides that will make you feel like a local from Cartagena.\n' +
      '\n' +
      'Our tour begins in Plaza de los Coches, then we will continue to Plaza de la Paz, Plaza de La Aduana, Plaza San Pedro Claver, Baluarte San Ignacio, and Plaza Santa Teresa.\n' +
      '\n' +
      'We will continue our tour to the Inquisition Street, to reach Simón Bolívar Park, then we will continue to Plaza Santo Domingo and our tour will end in El Baluarte Santo Domingo, where Café del Mar is, the best place in Cartagena to watch the sunset .<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour 45 minutes',
    rating: '4.6',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [       {url: "https://media.guruwalk.com/c36rs38wgmx2jzv5kz07rg6ii4p7"},
    {url: "https://media.guruwalk.com/t65a16wgq37eagfnbwzft7do1qw8"},
    {url: "https://media.guruwalk.com/ek6k0qxik1bvtm225qkp4g9uyiv9"},
    {url: "https://media.guruwalk.com/h2kn4m19tj75cjevmjoozectrofb"},
    {url: "https://media.guruwalk.com/l1w37mugznlsuq0qqv56m6vo3f0u"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour touring the wonderful Cartagena (Available in English, Spanish)',
    latitude: '10.421766',
    longitude: '-75.550995',
    descripton: '<p>It is an entertaining Free Tour inside the walled city, it starts in the <strong>Plaza de San Pedro Claver</strong> , continues towards the <strong>Plaza de la Aduana</strong> , a place where the purchase and sale of black slaves brought from Africa were made, then towards the public clock tower To mark the two islands of the time, which were Getsemaní and Santa Catalina, later <strong>Plaza de la Proclamation</strong> , where the independence of Cartagena de Indias was shouted, around <strong>we visited the interior of the Santa Catalina de Alejandría church</strong> , the main basilica and the <strong>Plaza of Bolívar</strong> , who was the great liberator of five countries. From there we will go through some beautiful streets to differentiate, the <strong>majestic colonial and republican houses</strong> until we reach the <strong>Plaza de Santo Domingo</strong> , where we will visit the convent and church of the same name and we will make a photo stop at the <strong>monument to La Gorda de Botero</strong> , by the teacher, painter and sculptor, Fernando Botero, we continue the tour, towards the <strong>Plaza de la Merced</strong> where we will find the ashes of our Colombian nobel, Gabriel García Márquez, where we will end the Free Tour.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.7',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [       {url: "https://media.guruwalk.com/pbx8kagvl1ki7kkv4o71ojs048cd"},
    {url: "https://media.guruwalk.com/d0hulaio65r8tqfrib9p9u8nvzn6"},
    {url: "https://media.guruwalk.com/r1ktskxg4r4y0z4rwrqmjrwak2fe"},
    {url: "https://media.guruwalk.com/mxzroowp0la28lxh0uvmrupkbelp"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour be amazed by the graffiti and paintings of Getsemany (Available in English, Spanish)',
    latitude: '10.422979',
    longitude: '-75.549218',
    descripton: '<p>Free Tour through the <strong>historic Getsemaní neighborhood</strong> where graffiti and paintings will be the protagonists.<br><br> During 2h we will visit this beautiful area of the historic center where we will discover together <strong>the legends</strong> of this neighborhood, its <strong>streets, churches, its music and gastronomy.</strong><br> To enjoy the latter in person, we will make a stop to eat fried, typical Cartagena empanadas, Arepas and pinchos, passion fruit juice and lulo.<br><br> Finally we will discover the <strong>street of the umbrellas, the walls of Getsemaní</strong> , pirates and <strong>modern Cartagena.</strong><br><br> Gestsemaní awaits you!</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.7',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [     {url: "https://media.guruwalk.com/r7fi6i02u68u1lxarmezqi5a778c"},
    {url: "https://media.guruwalk.com/olr4s8xp12ooq8rresyoofhwaxny"},
    {url: "https://media.guruwalk.com/q31on6nyzvtv53yovzxuphq4ya0v"},
    {url: "https://media.guruwalk.com/3ovqz9hyhmubicc1n11jbxg9mman"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour Gethsemane, Mural Art & Graffiti (Available in English, Spanish)',
    latitude: '10.422651',
    longitude: '-75.547272',
    descripton: '<p>Get to know <strong>the true history of Graffiti and Mural Art</strong> located <strong>in one of the "coolest" neighborhoods in</strong> the world according to Forbes Magazine, <strong>Getsemaní.<br></strong> We will walk through its streets and learn about the history that its narrow alleys, houses and squares enclose. Our guides will take you to know their people and idiosyncrasy and you will know why they always say<br> " <strong><em>I love Gethsemane.<br></em></strong> <strong>We will visit the following streets, among others:</strong></p><ul><li> <strong>the serpent</strong></li><li> <strong>San Juan</strong></li><li> <strong>Wide Alley</strong></li><li> <strong>Narrow Alley (the umbrellas), among others.</strong></li><li> We will go up to <strong>the Walls</strong> and you will know why it is called El Arrabal de Getsemaní.</li></ul><p> We wait for you in the center of Parque Centenario (at the foot of the obelisk to the eagle) to start this wonderful tour. <strong><br>Make your reservations in time!</strong></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour 45 minutes',
    rating: '4.4',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [  {url: "https://media.guruwalk.com/su6wnlq8gg1wit88lyweu48qkseb"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'FREETOUR MURALS, GRAFFITY & URBAN ART. (Available in English, Spanish)',
    latitude: '10.422773',
    longitude: '-75.548511',
    descripton: '<p><strong>Getsemaní the "cool" neighborhood of Cartagena de Indias,</strong> located in the heart of the historic center of Cartagena de Indias.<br><br> <strong>Starting in 2013, Getsemaní dresses in colors</strong> and its murals are like a canvas on which to capture dreams. <strong>This tour of murals and graffiti is the expression of urban art.</strong><br><br> It shares the spotlight with the Historic Center and its beautiful structures, offering the curious an <strong>extensive list of murals and urban works that captivate anyone who has the opportunity to tour</strong> and take photos with the urban art of Getsemaní.<br><br> From the color of Getsemaní, a new story begins where <strong>Getsemaní is filled with colors to highlight its history, culture and urban art.</strong><br><br> These murals, graffiti and urban art have given <strong>historical enhancement, culture to many</strong> Afro-descendants, indigenous people, flora and fauna, tropical settings, famous and anonymous faces, <strong>here the spirit of the neighborhood remains almost intact.</strong><br> What makes Getsemaní so special and attractive is the charm of its streets and people who can see through those paintings on a daily basis.<br> After the festival, you arrived as a tourist, but you end up being a native after the transformation of Getsemaní.<br><br> This process is called Gentrification in which these works seek to help rescue the values, customs, history of the neighborhood, its legacy, its anecdotes and concerns of Raizal and indigenous Afro-descendant communities.<br><br> This tour talks about culture and all the situations experienced by what is considered the "coolest" neighborhood in Cartagena de Indias.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.2',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [     {url: "https://media.guruwalk.com/i9nd2f9db4wmydcwwx6rm04r9rvq"},
    {url: "https://media.guruwalk.com/8o6cyow79ig82np1hz1c4ykr5k42"},
    {url: "https://media.guruwalk.com/cf5dk2ib8u97lluggevtklph5vj3"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour Slavery and Gethsemane Heritage (Available in Spanish)',
    latitude: '10.422262',
    longitude: '-75.548308',
    descripton: '<p>Hello! We will walk streets with stories of slavery, market and port.<br> The Getsemaní neighborhood is synonymous with tradition and culture. Three races that mix in the suburb to give rise to the true Cartagena. Come to the funniest tour in Cartagena!<br> <strong>We will pass through the following places:</strong><br> <strong>1. Centennial Park.</strong> 15 minutes, Admission is free</p><p> <strong>2. Sierpe Street.</strong></p><p> <strong>3. Trinity Square.</strong> 15 minutes, Admission is free</p><p> <strong>4. Clock Tower.</strong> Emblematic and historical point of the city</p><p> <strong>5. Car Square.</strong> Slave trade site in colonial times. 10 minutes, Admission is free</p><p> <strong>6. Customs Square.</strong> Entry of boats and merchandise to the old historic center of Cartagena. 10 minutes, Admission is free</p><p> <strong>7. Sanctuary of San Pedro Claver.</strong> Patron of the city humility and service in favor of African slaves. First Human Rights Defender 15 minutes, Affordable Admission<br><br></p><p> Book with me and I guarantee you a fun tour :)</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour 30 minutes',
    rating: '4.5',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [      {url: "https://media.guruwalk.com/mkqnpmb24982mchsvue5us0nex60"},
    {url: "https://media.guruwalk.com/v7vhh0lhb6djj33sart52k5k1fy8"},
    {url: "https://media.guruwalk.com/ptjioml6j5r60rzvlfxu7y7sh1mu"},
    {url: "https://media.guruwalk.com/8xjpz91l59jacuzpidfftuba4zbk"},
    {url: "https://media.guruwalk.com/rvwr1af17gvqlhl9d2tzi9x888tl"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Cartagena Free Walking Tour (Available in Portuguese)',
    latitude: '10.423334',
    longitude: '-75.549528',
    descripton: '<p>Cartagena de Indias, is one of the most beautiful, enigmatic and mysterious cities in all of America, do not miss the opportunity to meet it from within, and understand why in Colombia, we are proud of this fascinating city. On this tour we will visit: -Torre del Reloj -Plaza de los Coches -Plaza de la Aduana -Plaza de San Pedro Claver -Baluarte San Ignacio -Plaza Bolivar -Catedral de Santa Catalina de Alejandría -Plaza Santo Domingo</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [   {url: "https://media.guruwalk.com/fxytcbd35p1i8abzbe16vc4nzvc8"},
    {url: "https://media.guruwalk.com/1kep0rpb0643ys30fczhwpuzg4qp"},
    {url: "https://media.guruwalk.com/smvfc4syk0od985vvs19s8d57ufq"},
    {url: "https://media.guruwalk.com/bipq2n9y1cbld6i6dh6kwdc4042q"},
    {url: "https://media.guruwalk.com/yy7o940535uy7ogvmqcjmof7ihks"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour through the old city of Cartagena de Indias (Available in English, Spanish, Italian)',
    latitude: '10.423047',
    longitude: '-75.549311',
    descripton: '<p>Discover our history, supported by audio guides recorded with my own voice, brief historical recounts of the bastions, customs, brief explanation of our music, local gastronomy, etc.<br> Each street and each square has different stories, during this tour the participants will be able to appreciate the local architecture, and During the tour we will try to make two breaks or breaks for five minutes each to take the photos or have a drink of fresh coconut water or water. .<br> At the end of the walk we will go to a charming site on one of the bastions to appreciate the sunset.<br> <strong><br>Places to visit:<br> 1.- Peace Square (meeting point)<br> 2.- Car square<br> 3.- Customs Square<br> 4.- San Pedro Claver Square<br> 5.- Bastion of San Ignacio de Loyola<br> 6.- Round street.<br> 7.- Catalina Indian statue (office film festival).<br> 8.- Ricaurte Street, Santa Teresa Street, Inquisition Street,<br> 9.- Bolivar Square.<br> 10.- Square of the Proclamation.<br> 11.- Santos de Piedra Street, Santo Domingo Street<br> 12.- Plaza de Santo Domingo rest here for 3 minutes.<br> 13.- Alley of the stirrups.<br> 14.- Street of the artillery.<br> 15.- Bastion of Santo Domingo (end of the walk here).</strong></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.6',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [    {url: "https://media.guruwalk.com/cmwicjdc5bsb5guwycis40t0xwjn"},
    {url: "https://media.guruwalk.com/htjf78q6qsjf750qy8b37d47kmsd"},
    {url: "https://media.guruwalk.com/q7ttasy2zvobjquj92te337ruhww"},
    {url: "https://media.guruwalk.com/0f65wr65ejs6dyc0cxj4231ef4on"},
    {url: "https://media.guruwalk.com/ou9ykqj31gzw2w18qfx4c6hds7lb"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Kalamari (Historic Center) - Free Tour Cartagena de Indias (Available in English, Spanish)',
    latitude: '10.423186',
    longitude: '-75.549061',
    descripton: '<p><strong>Within its walls</strong> , Cartagena still <strong>preserves its essence</strong> represented in the constructions that date back to its first years as a city, as witnesses of a past that remains an unforgettable memory. This is an <strong>ideal experience</strong> for those who are <strong>interested in the history, culture and daily life of this city</strong> , and other topics they are passionate about.<br> We will visit <strong>Kalamari</strong> , a <strong>characteristic neighborhood in the center</strong> of the city, and thus see what daily life in the city is like. We will visit the Plaza de la Paz, Plaza de los Coches, Customs Square, San Pedro Claver Square, Santo Domingo Square, Bolivar Park, we will pass the Palace of the Inquisition, the Santa Catalina de Alejandria Cathedral, we will see the dominant architecture in Cartagena we will tour some of its streets and discuss topics such as the Inquisition, slavery, etc., in addition to a tour of the wall. All the time you will be accompanied by a guide who will provide you with all the information and answer all your questions.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [        {url: "https://media.guruwalk.com/ewsung2qb2kyigo2joq0f1zz7jq4"},
    {url: "https://media.guruwalk.com/wpkfymxiol584hktln78h7a8f15k"},
    {url: "https://media.guruwalk.com/fe3j6qkokhecpybs5klzplf6a4lr"},
    {url: "https://media.guruwalk.com/44776hdbu5t3xw1kyed6d8qyc2pg"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour through the Getsemani neighborhood (Available in English, Spanish)',
    latitude: '10.422855',
    longitude: '-75.54847',
    descripton: '<p><strong>Welcome to the amazing neighborhood of Getsemani!</strong><br> The walking tour through the streets and squares of Getsemani, in Cartagena de Indias, is <strong>one of the experiences that tourists who visit our city enjoy the most</strong> .<br> <strong>Kindness, warmth and solidarity are present in this neighborhood</strong> of the city, and in every corner of it. Without a doubt, <strong>what is most striking</strong> , and with which many foreigners agree, is the "party" of the <strong>colors yellow, orange, green, blue and red on the facades of their houses, and the canvases</strong> of great painters .<br> Walking through its narrow side streets with houses with flowery colonial balconies, you will be surprised by the harmony, beauty and tranquility of the landscape.<br> Only during this tour, the <strong>visitor will have the</strong> <strong>unique experience of observing the lifestyle of the locals</strong> , and visiting emblematic squares that <strong>will transport them to historical events</strong> linked to the <strong>Independence of Cartagena.</strong></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.0',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [   {url: "https://media.guruwalk.com/gp37iyuse25atepobo6ecccm2ou9"},
    {url: "https://media.guruwalk.com/42s4zprpq0ayyqhygqoar8eyt16w"},
    {url: "https://media.guruwalk.com/d9uboxbm7kx2ez2x1117hcdjr83e"},
    {url: "https://media.guruwalk.com/r2ayg3a3ix7ykmztnrxi6601b7cl"},
    {url: "https://media.guruwalk.com/z3ghenyspvgyoh8h0bj5c1jigl67"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Food Tour Cartagena de Indias, street food with a local (Available in English, Spanish)',
    latitude: '10.427072',
    longitude: '-75.545384',
    descripton: '<p>Join me on this tour full of flavors, where you will <strong>discover a delicious experience with our street cuisine.</strong><br> We will be <strong>accompanied by local people who, with their joy and work,</strong> will make it possible for this "itch" in Cartagena to be unique.<br> Magical fruity, sour and sweet flavors will surprise you.<br> On our tour <strong>you will feel part of our town, you will</strong> know and enjoy our gastronomic customs.<br> We will make stops at the gastronomic stations where <strong>tropical fruits</strong> full of color and flavor, <strong>fried typical</strong> of the city <strong>and other "street food" will be the protagonists</strong> of this meeting. We will toast to taste per person:</p><ul><li> <strong>Egg arepa</strong></li><li> <strong>Cheese arepas</strong></li><li> <strong>Coastal chorizo with clean bun</strong></li><li> <strong>cheese fritters</strong></li><li> <strong>Tropical fruits</strong></li><li> <strong>shrimp ceviche</strong></li><li> <strong>Patacon with cheese</strong></li><li> <strong>Typical sweets</strong></li><li> <strong>cold coconut water</strong></li><li> <strong>Typical drinks.</strong></li></ul><p> Do not lose this chance!!!</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.3',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [     {url: "https://media.guruwalk.com/1nsnryk7mis199a5a02ws8ncqiw0"},
    {url: "https://media.guruwalk.com/qseuo4g26xtwpren62z9uxkf5xu3"},
    {url: "https://media.guruwalk.com/wavr8pvemi0odt94bwgvokltston"},
    {url: "https://media.guruwalk.com/sbxtatzbhy6s34h955xgkq4e8dgn"},
    {url: "https://media.guruwalk.com/vyntn28vg5mypvyyg7hvbfnml6u2"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Getsemani District Tour by Beyond Colombia (Available in English, Spanish)',
    latitude: '10.422367',
    longitude: '-75.548643',
    descripton: '<p>Discover the untold history of the famous Getsemani neighborhood! Walk the most emblematic streets and its representative squares of a historically resistant town, its folklore, its colors, its music and its people. Get closer to the "getsemanisence" culture through this journey, where you will understand the importance of a segregated and insurgent people during the colony whose fighting spirit initiated the Colombian independence and over time spawned artistic movements in film, painting, sculpture, dance and, of course, the music. Today you will find a tourist district with original inhabitants inheritors of a rich culture that at first sight hides stories and legends of revolution, pride and tradition. Join this journey through time, culture and art discovering the other side of Cartagena de Indias - La Heroica!</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [       {url: "https://media.guruwalk.com/oa3060ppkqvaznmmg7ocak5h4wwm"},
    {url: "https://media.guruwalk.com/u73kywqfvi65aggvmrwrlqddo7vu"},
    {url: "https://media.guruwalk.com/e1snjhnvltq13jsj28fezidqm303"},
    {url: "https://media.guruwalk.com/6tfq2jjs5gug6un587izdci8ewny"},
    {url: "https://media.guruwalk.com/jwtzkvcmwdhf5hzjj3ch7fklq5ai"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour get the Nightlife Vibe in Old City! (Available in English, Spanish)',
    latitude: '10.423478',
    longitude: '-75.549094',
    descripton: "<p>Get the night vibe in Cartagena&nbsp; and enjoy to the fullest your holidays! <br><br>The city is full of history and iconic monuments and places but getting to know the key tips of night life will definitely make a difference. <br><br>In this evening Tour we walk you around the Old City and show all Kind of restaurants, bars and discos where tourists and locals go; giving you tips, recommendations and sugestions about the area. You'll also enjoy hearing about a few aspects of the history and culture of the City.<br><br>First, we'll step in a plaza and watch locals dancing mapale (Folklor dance). Then, move ahead to one of the busiest streets to see discos and bars there. Our next stop is a plaza with outdoor restaurants.<br><br>After that, we'll visit San Diego where you'll see nice outdoor&nbsp; places to eat. Finally we'll go to Getsemani and enjoy its awsome vibe finishing theTour in a recommended Disco. <br><br><strong>Itinerary:</strong></p><ul><li>Open Folklor Dance&nbsp;</li><li>Porvenir street</li><li>Santo Domingo Plaza</li><li>Fernández Madrid Plaza</li><li>San Diego plaza</li><li>Getsemani night life</li><li>Arsenal street</li></ul><p><br>Be our guest by booking with us, have fun in the city, make the best of your holiday and most important be safe.</p><p><br></p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.5',
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [       {url: "https://media.guruwalk.com/y8cueyq2m51fninopl15vep0gdci"},
    {url: "https://media.guruwalk.com/8la86v09hm9egahl1kcwz6mukyrs"},
    {url: "https://media.guruwalk.com/opke49nk7sr0wpvfokzobtrulv81"},
    {url: "https://media.guruwalk.com/65irc7a1i2pwwgfwxi7ul753gjnd"},
    {url: "https://media.guruwalk.com/l8zvy3gtvnb4y13b4llobrw2ezqp"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'San Diego Free Walking Tour (Available in English, Spanish)',
    latitude: '10.425487',
    longitude: '-75.549394',
    descripton: '<p>A walk through San Diego is an unique sensation, as if the walkers were the protagonists of a period film, the journey through this neighborhood is to travel through time. This is one of the most beautiful and traditional neighborhoods of Cartagena, getting lost among its streets is wonderful and visitors are not mistaken because this colorful neighborhood is the most stately and exclusive of the colonial era, inserted in the old city of Cartagena Within this tour we will find streets full of magic and charm, along with colonial and republican architecture, squares, Church, Museums, with the walled cord frozen in time and its valuable bastions.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [      {url: "https://media.guruwalk.com/v6jip424cy2l1cswxfjqzx1zox3h"},
    {url: "https://media.guruwalk.com/2smmw0lszia7oy09p1jqy1ps6cez"},
    {url: "https://media.guruwalk.com/bsr7q6p8l6qs4ff7apubkfcd934i"},
    {url: "https://media.guruwalk.com/6dbo5s8vwgknwp4ei1y3pql65jmv"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour 2 in 1: Historic Center and Getsemaní (Available in English, Spanish)',
    latitude: '10.422788',
    longitude: '-75.548707',
    descripton: `<p>Discover Historical Cartagena and Getsemaní in a single free tour through the scenarios of enslavement, pirates and corsairs, battles, graffiti, Salsa and Champeta and much more as a result of the mixture of indigenous, African and Spanish, libante migrants, libante migrants .<br><br></p><p> We start, at the agreed time, the free tour, in the <strong>Camellón de Los Mártires - Plaza de Cervantes</strong> we will learn about the indigenous people who were there before and during the arrival of the Spaniards. We move to the <strong>"Golden Key of Cartagena" or Clock Tower</strong> entering the <strong>Plaza del Ecuador</strong> , before the <strong>Plaza del Esclavo</strong> , prelude to continue part of the enslavement route through <strong>Porto Carrero and Candilejo streets</strong> . But first, about Founder Pedro de Heredía welcomes us.<br><br> We continue to <strong>the Portal de Los Dulces</strong> , a symbol of female activity in times of slavery and that their descendants still continue their traditions.</p><p><br> The commercialization process, of merchandise, including that of enslaved persons, in the old <strong>Plaza de la Contraloría</strong> , has been historically important, Andian National Corporation and the Mamonal refinery, the Municipal Mayor's Office.</p><p><br></p><p> Of course art is not alien to the tour, the <strong>Museum of Modern Art</strong> exponent of Caribbean and Latin American art of the 50's, the <strong>Gold Museum</strong> opens its doors with samples of indigenous pieces from the Colombian Caribbean and <strong>the Emerald Museum</strong> , stones of precious considered the most beautiful in the world, worn by celebrities</p><p><br></p><p> Religion is present with San Pedro Claver, Slave of Slaves, we will see the Architecture of the Church and Museum-Monastery that bear his name and is the Human Rights Headquarters.</p><p><br></p><p> <strong>Do you like the exploits of pirates and corsairs?</strong> We count them when visiting a Bastion, as a sample of Spanish military constructions and strategies, we continue to <strong>Plaza Bolívar, in homage to the precursor of Independence</strong> , a place to refresh ourselves.</p><p><br></p><p> We link the Plaza Bolívar, in homage to the forerunner of Independence and the Plaza de la Proclamación - Old Government Palace and the Centennial Park as scenes of the Independence of Cartagena and Colombia. Continuing along Calle Román is not only the symbol of the best drinks until it allows you to remember one of the Presidents of the Republic who has transcended in history.</p><p><br></p><p> <strong>Do you know the Sloth Bears, the squirrels, the iguanas?</strong> You will see them in one of the most important Lungs of Cartagena, <strong>Parque Centenari</strong> or, old Railway Station, which is a relict of Tropical Dry Forest where we cool off under the shade of beautiful trees.</p><p><br></p><p> We will enjoy one of the most important and colorful cultural corridors of Getsemaní, due to the umbrellas (symbol of the advertisement), the graffiti and the unparalleled architecture. Finally, <strong>we enter the Callejón Ancho</strong> , to reach the end of the route in Calle San Juan until the sound of salsa and African champeta; previously passing through the church and plaza de la Santísima Trinidad.</p><p>Free tour: Book for free and pay what you want at the end</p>`,
    stock: 0,
    minimunDuration: '2 hours 15 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [     {url: "https://media.guruwalk.com/m1g5rsr8j6f6i5iqxglg476mclpa"},
    {url: "https://media.guruwalk.com/4i778xz27vx0t8brcy1t1v5t1rt1"},
    {url: "https://media.guruwalk.com/6c8d08bm7nhzojyazuldl9wuq1n8"},
    {url: "https://media.guruwalk.com/94kxmnn44lknxgoz9q3v76prdp44"},
    {url: "https://media.guruwalk.com/6ce1oznybowx5kn4r8opllo07yxp"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour Cartagena de Indias: "A Jewel Under the Colony 489 years". (Available in Spanish)',
    latitude: '10.423479',
    longitude: '-75.549281',
    descripton: `<p><strong>It is a tour of the Jewel of the Spanish Crown in America, Cartagena de Indias; and its importance in the sixteenth century. XVII, XVIII, and XIX get ready to know the History of Cartagena de Indias.<br> It's a super tour!</strong><br><br> <strong>Discover more than 20 places where you will hear their story in my simple narratives.<br></strong><br> <strong>1. Plaza de Los Coches meeting point.<br> 2. Introduction to the History of Cartagena.<br> a. Clock Tower for 300 years was the main gate of the city.<br> 3. Plaza de los Coches.<br> 4. Portal of the Sweets.<br> 5. Customs Square.<br> 6. Weapons Room.<br> 7. Museum of Modern Art.<br> 8. Plaza and Church of San Pedro Clave.<br> 9. Calle de La Ronda." A street between two walls".<br> 10. Street of San Juan de Dios.<br> 11. Calle de Las Damas, Calle de la Amargura.<br> 12. Small Gold Museum Sinú. (Visit)<br> 13. Visit inside the Banco de la República building.<br> 14. Plaza de Bolivar.<br> 15. Palace of the Inquisition.<br> 16. Proclamation Square.<br> 17. Cathedral, Minor Basilica of Saint Catherine of Alexandria.<br> 18. Plaza Church and Convent of Santo Domingo.<br> 19. Alley of the Stirrups.<br> 20. Bastion of Santo Domingo. (Visit)<br> 21. De la Cruz Bastion (Visit).<br> 22.</strong> <strong>Plaza de La Merced with the buildings Teatro Heredia and Cloister of La Merced.<br> 23. Mausoleum of Gabriel García Marques and his wife Mercedes.<br></strong> <strong><br>END OF THE ROUTE:<br><br><br> TO CONSIDER:<br></strong><br> <strong>It is a paid tour, it is not a Free Tour, so the value of their work is expected to be delivered to the Professional Tourism Guide for their services offered. A recommended contribution on your part of ($ 18,000) Eighteen thousand pesos per PERSON, Take advantage of these story narratives you will love it.<br><br> If you consider giving a little more that's fine.<br></strong><br> <strong>Thank you.-</strong><br><br> I look forward to showing you my city!</p><p>Free tour: Book for free and pay what you want at the end</p>`,
    stock: 0,
    minimunDuration: '2 hours 45 minutes',
    rating: 0,
    cost: 0,
    country: 'Colombia',
    city: 'Cartagena de Indias',
    pictures: { create: [  {url: "https://media.guruwalk.com/6lmt57fwm4f7v8mxuoj7fxk1kvuf"},
    {url: "https://media.guruwalk.com/rlqixht3tgqrdesw13d83hhxk9vx"},
    {url: "https://media.guruwalk.com/s5bmipn1sb03i2pk3g9u23zdu4d2"},
    {url: "https://media.guruwalk.com/kesn3picuh4l51krcdm6yu33v5vl"},
    {url: "https://media.guruwalk.com/3xgoei0epa9gvk1gbtyuog219ml0"}] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'Free Tour Punta Del Este (Available in English, Spanish, Portuguese)',
    latitude: '-34.957948',
    longitude: '-54.937393',
    descripton: '<p><strong>Punta del Este</strong> , some call it <strong>Miami or the Saint Tropez of South America</strong> , we like to preserve its origins and <strong>show how it developed in the glamorous city that it is today</strong> .<br> Being the most touristic city in Uruguay, <strong>we want to tell you the secrets that made it the diva of summer in the Río de la Plata</strong> and why it is an excellent option for the whole year.<br> We are on the monument of "the hand" and from there we start a journey of two and a half hours to <strong>show you the best of Punta</strong> and <strong>talk about the Uruguayan idiosyncrasy.</strong><br> <strong>Some of the points visited are:</strong></p><ul><li> <strong>Hand</strong></li><li> <strong>Brava beach</strong></li><li> <strong>Mansa beach</strong></li><li> <strong>Gorlero Street</strong></li><li> <strong>Craftsmen Square</strong></li><li> <strong>The lighthouse</strong></li><li> <strong>Candelaria Church</strong></li><li> <strong>English Square</strong></li><li> <strong>Port</strong></li></ul><p> I wait for you!</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.6',
    cost: 0,
    country: 'Uruguay',
    city: 'Departamento de Maldonado',
    pictures: { create: [            {url: "https://media.guruwalk.com/t0q64mw3lo4gyz0q2hw1tv2q7h4a"},
    {url: "https://media.guruwalk.com/ueccra2vad7mo5xlmvgoyt3c1h3k"},
    {url: "https://media.guruwalk.com/kvrwl864jopyu1q276an0etg72qe"},
    {url: "https://media.guruwalk.com/2hxi3u7e3q6kek149sy1zyk0sbfu"},
    {url: "https://media.guruwalk.com/p99ebrkqfu5nmxs0wkikzzq12rq6"}] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'Maxi Free Tours Punta Del Este (Available in English, Spanish, Portuguese)',
    latitude: '-34.957844',
    longitude: '-54.937271',
    descripton: '3 differents Languages, English, Portuguese, Spanish!! The Tour includes a complete, didactic and fun walk through Punta Del Este knowing its main tourist attractions. We work based on tips that once you complete the tour will evaluate the work done by the Guide deciding the final price for the Free-Walking Tour.<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '5.0',
    cost: 0,
    country: 'Uruguay',
    city: 'Departamento de Maldonado',
    pictures: { create: [    {url: "https://media.guruwalk.com/jfjj2b8fr5c5iehhwi4h8ms7zd08"},
    {url: "https://media.guruwalk.com/p4l79itzzj4204k2zhq116j6jbvd"},
    {url: "https://media.guruwalk.com/o6d9dfe7437w0hxnzfkuwgod2i7n"},
    {url: "https://media.guruwalk.com/01r9gzvugiax8zz1xqur7lis7ax0"},
    {url: "https://media.guruwalk.com/k9r9wkp2m51ou8u88zwjwx8geszv"}] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'Iguazú free walks (Available in Spanish, Portuguese)',
    latitude: '-25.597146',
    longitude: '-54.577028',
    descripton: "We are what you won't see at Cataratas, we are what the forest won't tell you on his rivers whispering. We are people and stories that you can only met by walking with us.\n" +
      "Iguazú Free Walks is a guided walking tour with professional tour guides. You will see and learn things you won't have at the regular tour in the National Park.\n" +
      'It is a 1hs 30 to 2 hs walk through Iguazu down town and riverside wallking 2.5 km aprox.\n' +
      'You will lear about our Iguazu city, local identity, history, culture and nature.\n' +
      'This is not a tour in the Waterfalls, the waterfalls are 17km from downtown.\n' +
      '\n' +
      'We speak English    \n' +
      'A gente fala português<p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.3',
    cost: 0,
    country: 'Brasil',
    city: 'Foz de Iguazú',
    pictures: { create: [         {url: "https://media.guruwalk.com/f5daxgyajkuu5z6p0p06hi4l3mf5"},
    {url: "https://media.guruwalk.com/gwos7u34n4dupronqm9ck030mw1z"},
    {url: "https://media.guruwalk.com/octctrif803wcdffffq22pej1bbd"},
    {url: "https://media.guruwalk.com/vsdo9gw18hw59n38t7v8szjs2k5y"},
    {url: "https://media.guruwalk.com/lgqy262s892ddenue4ftaj01js8o"} ] },
    type: { connect: { id: 7 } }
  },

  {
    name: 'Cataratas de Iguazú: una maravilla de la madre naturaleza (Available in )',
    latitude: '-25.597164',
    longitude: '-54.578599',
    descripton: '<p>Uno de los lugares más destacados de Sudamérica, un lugar sin igual. <strong>Estar en las Cataratas del Iguazú es impresionante.</strong><br><br>Las Cataratas del Iguazú están <strong>consideradas como una de las cataratas más grandes del mundo</strong>, situadas en la <strong>frontera entre Brasil y Argentina</strong> y <strong>rodeadas</strong> por la <strong>Selva Atlántica</strong>, una de las más importantes junto a todas las demás de Sudamérica que no sólo ayudan a proporcionar el agua dulce sino que ayuda a fijar el oxígeno que todos respiramos.<br><br>En este tour virtual tendremos la <strong>oportunidad de ver algo de fauna</strong>, <strong>aprender </strong>sobre algo <strong>de flora</strong>, hablar sobre la historia y tendrás la <strong>oportunidad de conocer la historia de amor </strong>involucrada en la <strong>creación de esta Nueva Maravilla de la Naturaleza</strong>.<br><br><br></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour',
    rating: 0,
    cost: 0,
    country: 'Brasil',
    city: 'Foz de Iguazú',
    pictures: { create: [ {url: "https://media.guruwalk.com/nquucfx4u3uv1ra6ty2gc5q3cv3z"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'FREE WALKING TOUR COZUMEL (Available in English)',
    latitude: '20.51042',
    longitude: '-86.948818',
    descripton: '<p>We think that Cozumel is not only about sun, beaches and the amazing watersports, therefore we kindly invite any visitor to learn about the authentic Cozumel, its history and culture and all the other interesting things along the way of the Free Walking Tour Cozumel.&nbsp;<br><br>At a leisure pace you will stroll Cozumel´s downtown with our bilingual certified federal tour guide, explaining localism, history and traditions.&nbsp;<br><br>If you are enjoying your holidays in Cozumel or maybe you are on a cruise, we invite you to join our free experience tour, it’s the best way to learn the most about our island and to have a great time!&nbsp;<br><br>Highlights we visit: the local market, the historical center of Cozumel, streetart and the famous seawalls.&nbsp;<br>PRICE: You choose it at the end!</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '1 hour 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Mexico',
    city: 'Playa del Carmen',
    pictures: { create: [   {url: "https://media.guruwalk.com/d2jukbed8gizesll9bhwqz6uts80"},
    {url: "https://media.guruwalk.com/fl00022bqidzmm9esi6h6q35r8lg"},
    {url: "https://media.guruwalk.com/suqoxy3hm5d8w9owgn9ps92k4cjs"},
    {url: "https://media.guruwalk.com/j22lwsm4zvwqbymjzwntfa2nj1gv"},
    {url: "https://media.guruwalk.com/7693nc3bw4zh3xcndcu98dgc365c"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Meet Cozumel by my side - Free Tour (Available in English)',
    latitude: '20.510542',
    longitude: '-86.950585',
    descripton: '<p>In this tour you will know the city of San Miguel Cozumel by the hand of a person who is very proud of the place with knowledge of the history and culture of the place, you can try one of the most representative drinks of Mexico We will walk through the center of Cozumel and visit 1 .- the market 2.- the Tequila museum where you can taste organic tequila 3.- Museum of the island 4.- Airplanes 5.- Monument of the diver 5.- Source ixchel</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.6',
    cost: 0,
    country: 'Mexico',
    city: 'Playa del Carmen',
    pictures: { create: [     {url: "https://media.guruwalk.com/kti06ljj886uih5ogria27gd3thq"},
    {url: "https://media.guruwalk.com/2lhxff9pl3kctmdtps4g2cnfdnsv"},
    {url: "https://media.guruwalk.com/ike2mmvcg9baovc481rrskpeky64"},
    {url: "https://media.guruwalk.com/psghtgczsbj3x19p4d95gd74nh9u"},
    {url: "https://media.guruwalk.com/1ol0jbk0r7xxxjwqx7cy2sibezcn"} ] },
    type: { connect: { id: 7 } }
  },

{
  name: 'Iguazú free walks (Available in Spanish, Portuguese)',
  latitude: '-25.597146',
  longitude: '-54.577028',
  descripton: "We are what you won't see at Cataratas, we are what the forest won't tell you on his rivers whispering. We are people and stories that you can only met by walking with us.\n" +
    "Iguazú Free Walks is a guided walking tour with professional tour guides. You will see and learn things you won't have at the regular tour in the National Park.\n" +
    'It is a 1hs 30 to 2 hs walk through Iguazu down town and riverside wallking 2.5 km aprox.\n' +
    'You will lear about our Iguazu city, local identity, history, culture and nature.\n' +
    'This is not a tour in the Waterfalls, the waterfalls are 17km from downtown.\n' +
    '\n' +
    'We speak English    \n' +
    'A gente fala português<p>Free tour: Book for free and pay what you want at the end</p>',
  stock: 0,
  minimunDuration: '2 hours',
  rating: '4.3',
  cost: 0,
  country: 'Argentina',
  city: 'Puerto Iguazú',
  pictures: { create: [    {url: "https://media.guruwalk.com/f5daxgyajkuu5z6p0p06hi4l3mf5"},
  {url: "https://media.guruwalk.com/gwos7u34n4dupronqm9ck030mw1z"},
  {url: "https://media.guruwalk.com/octctrif803wcdffffq22pej1bbd"},
  {url: "https://media.guruwalk.com/vsdo9gw18hw59n38t7v8szjs2k5y"},
  {url: "https://media.guruwalk.com/lgqy262s892ddenue4ftaj01js8o"} ] },
  type: { connect: { id: 7 } }
},
{
  name: 'Cataratas de Iguazú: una maravilla de la madre naturaleza (Available in )',
  latitude: '-25.597164',
  longitude: '-54.578599',
  descripton: '<p>Uno de los lugares más destacados de Sudamérica, un lugar sin igual. <strong>Estar en las Cataratas del Iguazú es impresionante.</strong><br><br>Las Cataratas del Iguazú están <strong>consideradas como una de las cataratas más grandes del mundo</strong>, situadas en la <strong>frontera entre Brasil y Argentina</strong> y <strong>rodeadas</strong> por la <strong>Selva Atlántica</strong>, una de las más importantes junto a todas las demás de Sudamérica que no sólo ayudan a proporcionar el agua dulce sino que ayuda a fijar el oxígeno que todos respiramos.<br><br>En este tour virtual tendremos la <strong>oportunidad de ver algo de fauna</strong>, <strong>aprender </strong>sobre algo <strong>de flora</strong>, hablar sobre la historia y tendrás la <strong>oportunidad de conocer la historia de amor </strong>involucrada en la <strong>creación de esta Nueva Maravilla de la Naturaleza</strong>.<br><br><br></p><p>Free tour: Book for free and pay what you want at the end</p>',
  stock: 0,
  minimunDuration: '1 hour',
  rating: 0,
  cost: 0,
  country: 'Argentina',
  city: 'Puerto Iguazú',
  pictures: { create: [ {url: "https://media.guruwalk.com/nquucfx4u3uv1ra6ty2gc5q3cv3z"} ] },
  type: { connect: { id: 7 } }
},


  {
    name: ' Free Tour Pedra do sal: Samba and Resistance (Available in English, Spanish, Portuguese)',
    latitude: '-22.896656',
    longitude: '-43.181956',
    descripton: '<p>Cruise by the most important places of Rio de Janeiro African history. An immersion into Afro-Brazilian culture, gastronomy and traditions. In this Rio Walking Tour you’ll be learning about important black personalities who fought with all their hearts to end slavery in Brazil. After that, we’re visiting an important Samba school in Rio, where you will see and play with the most internationally known expression of the Afro culture in Rio. You’ll not only be able to experience the true carnival, see the allegoric cars and the feathered costumes, as one of the most interesting Rio de Janeiro Attractions. You’ll learn about the beautiful history of resistance that exists behind the party, of course, have a great caipirinha. DAYS: TUESDAYMEETPOINT: IN FRONT OF THEATRO MUNICIPAL - METRO STATION CINELÂNDIA</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.7',
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [               {url: "https://media.guruwalk.com/3l2gg5bwg50fr8pg0jy11k2gu7di"},
    {url: "https://media.guruwalk.com/rgs6ze4elioyj34evhtrnfgyx0jx"},
    {url: "https://media.guruwalk.com/gv6evm664usmyd3n8fiz47cebayj"},
    {url: "https://media.guruwalk.com/wdd569g31in8cx8539v3gs8h8g3l"},
    {url: "https://media.guruwalk.com/wws3wfv9arz7s3qwe8rpc93ub7f3"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: ' Free Tour Pedra do sal: Samba and Resistance (Available in English, Spanish, Portuguese)',
    latitude: '-22.896656',
    longitude: '-43.181956',
    descripton: '<p>Cruise by the most important places of Rio de Janeiro African history. An immersion into Afro-Brazilian culture, gastronomy and traditions. In this Rio Walking Tour you’ll be learning about important black personalities who fought with all their hearts to end slavery in Brazil. After that, we’re visiting an important Samba school in Rio, where you will see and play with the most internationally known expression of the Afro culture in Rio. You’ll not only be able to experience the true carnival, see the allegoric cars and the feathered costumes, as one of the most interesting Rio de Janeiro Attractions. You’ll learn about the beautiful history of resistance that exists behind the party, of course, have a great caipirinha. DAYS: TUESDAYMEETPOINT: IN FRONT OF THEATRO MUNICIPAL - METRO STATION CINELÂNDIA</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.7',
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [       {url: "https://media.guruwalk.com/kgspdxsoxlzfbenbtr50ojvkbeys"},
    {url: "https://media.guruwalk.com/fcsp9rf3byjmjbz4d0m0fbsxby3b"},
    {url: "https://media.guruwalk.com/j1u4cqzfwez9afmzs2un3btjy3nx"},
    {url: "https://media.guruwalk.com/1ji1mz731zwwr2vuqk6bj1qhenwm"},
    {url: "https://media.guruwalk.com/hri2uxvxyc1wd6pkn1i22pr6y02c"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Rocinha Lucky Free Walking Tour (Available in English, Portuguese)',
    latitude: '-22.985949',
    longitude: '-43.245218',
    descripton: "<p>The tours start at an easy to access meeting point and from there, the tourists won't just take pictures and sightsee as they will also <strong>enter the local Favela</strong> and see the<strong> real reality of the place</strong>, not what the media portrays.<br><br>The <strong>tours start at top of the Favela</strong>, a famous local touristic point, and then <strong>we walk down the hill to the São Conrado </strong>subway station where the tourists can pick to go back through subway or uber.&nbsp;<br><br>Straightforward walking from point A to B, sightseeing, pictures, and explanations about the Favela<br><br>As a local, my tour is real and far from scripted or artificial!</p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '1 hour 30 minutes',
    rating: '4.3',
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [   {url: "https://media.guruwalk.com/cxkanvqd9b5uh0u500elrp157gjn"},
    {url: "https://media.guruwalk.com/ejv4p3s5wjn5ojrf8srywm6slyfc"},
    {url: "https://media.guruwalk.com/iwsox5g94ltqt6w6fpolwh5xq97s"},
    {url: "https://media.guruwalk.com/jsmq3w91zpsngutjuysgprqduilf"},
    {url: "https://media.guruwalk.com/eba5euzdak3dbamo5xovrfw8icyv"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Cultural and language exchange at the MAR (Museum of Art of Rio) with a local expert (Available in )',
    latitude: '-22.896727',
    longitude: '-43.181921',
    descripton: "<p><strong>What if it's raining in the wonderful city when you get there?</strong> And if not? Did you know that <strong>Rio's museums have a high attendance rate?</strong> This proves that <strong>in addition to beaches and carnivals, every city also has many cultural attractions to offer.</strong> And imagine a guided tour with an art specialist in the local museums to help you understand our people through their material culture and art?<br> <strong>Join us for a linguistic and cultural immersion program in the city's most important museums.</strong> This cultural immersion program is an excellent <strong>opportunity for visitors to Rio interested in the history of art in Brazil, as well as for</strong> anyone interested <strong>in improving their English or Portuguese language skills.</strong> This is a great opportunity to practice both Portuguese and English while making friends from all over the world!</p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [    {url: "https://media.guruwalk.com/tolu70ln85ezp8pkbemk9esg20jd"},
    {url: "https://media.guruwalk.com/hm229ek95y3lkwiqkhjmgwqn8t4v"},
    {url: "https://media.guruwalk.com/9b68xo6hajiswsg1daa4z4mp87kn"},
    {url: "https://media.guruwalk.com/dcu1n2jgm3s8qvodo2x2vt0feeyp"},
    {url: "https://media.guruwalk.com/44rfwpp7jpedqbawvrt44r3yt5d6"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Historical Downtown - Free Walking Tour (Available in English, Spanish, Portuguese)',
    latitude: '-22.909463',
    longitude: '-43.176279',
    descripton: '<p>“Rio de Janeiro is still gorgeous”, is one of the most beautiful and simple quotes that portrays the Amazing Rio de Janeiro. The energy, monuments and the spectacular mix of sea and mountains, makes the landscape of Rio breathtaking. Did you know Rio is considered part of the world’s heritage? We from Rio By foot invite you to learn little bit more about the history and culture of the incredible Rio de Janeiro city. We’ll walk through historical downtown and take you back to times of kings and queens, emperors, freedom fighters and revolutionaries. We’re certain that you will fall in love with Rio de Janeiro even more. You’ll discover that Rio is not only home the most beautiful beaches of the world, but also the gorgeous architectural heritage of one of the most classical European courts. Rio By Foot is the only Free Tour company in Rio de Janeiro city with 5 stars on Trip Advisor. Walk through the historical downtown with us to learn about the city history in one of our Free Walking Tours in Rio. Our guides really love Rio and are going to enjoy showing you all Rio wonders and make your stay the most pleasant, interesting and economic as possible. What do you think about having a free taste of the different flavored handcrafted cachaça, the traditional spirit from Brazil? We have partnerships with some traditional restaurants that provides very special deals for our clients. Time to enjoy the famous Rio de Janeiro tourist attraction: Feijoada. Want to visit the Maracanã Football Stadium, a Samba School, or any other famous Rio de Janeiro Attractions? Our guides are going to help you to do that, and much more! Feel free to ask whatever you need, they are prepared to make certain that your experience in our beloved city it’s the best possible. We have a dedicated team with knowhow in tourism, theater, history, museology, plastic arts, samba... So get up this chair and come join our group for a Free Walking Tour. Its super easy to join our tours, just make your reservation here in this webpage and show up at our meeting point, we will be waiting for you wearing GREEN SHIRTS. You will walk with Rafael Pavão in this Free Walking Tour, besides a tour guide, he’s also a museology student and a geek talking about architecture, Brazilian history and culture. When not working, you can find him in Lapa by night with his friends or at the nearest bookstore, probably between the comics and classic arts sections.</p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [       {url: "https://media.guruwalk.com/zesb2mtu3h0qmwdq5ilyb2ok3ano"},
    {url: "https://media.guruwalk.com/w472kaeijtcg1tu6eq8buhtjpwg0"},
    {url: "https://media.guruwalk.com/tqoe521hko5f59pr8alz3h8de3ya"},
    {url: "https://media.guruwalk.com/4ekbh710lgut79zjchvkk1gn596a"},
    {url: "https://media.guruwalk.com/m7zc8dddi7t2tue830l7f4fhhrxm"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'The best Free Walking Tour of Downtown and Lapa (Available in English, Spanish, Portuguese)',
    latitude: '-22.906842',
    longitude: '-43.178147',
    descripton: '<p>Travel back in time in our Rio Free Walking Tour of Downtown and Lapa and <strong>relive the past while walking through the charming colonial streets of Rio</strong> and learning about the four centuries of the history of the city. Join our tour to <strong>understand more about the Brazilian culture</strong> and society since the colonization until today.<br>We will<strong> visit some of the most important places</strong> in Brazilian history as <strong>the Imperial Palace and ALERJ </strong>and some of the most famous places in Rio <strong>as Selaron Stairs and Lapa Arches</strong>. <br><strong>Come on and booking now this tour with us!</strong></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '3 hours',
    rating: 0,
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [     {url: "https://media.guruwalk.com/g3nv0u72r455oi2u6skq930phixs"},
    {url: "https://media.guruwalk.com/aqdj9wb2xn9stfi8zmmafanil42f"},
    {url: "https://media.guruwalk.com/g4v00z4rwbbo79nyf9hap3w67h3v"},
    {url: "https://media.guruwalk.com/g242vaq6ovmsjxvyn641imuekrxh"},
    {url: "https://media.guruwalk.com/szqspib9oig09wjarz7f7whjpsjs"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: "Free Tour Urca: Let's take beautiful photos in the most beautiful neighborhood in Rio (Available in English, Spanish)",
    latitude: '-22.954456',
    longitude: '-43.167576',
    descripton: '<p>Almost hidden under the Sugar Loaf is the <strong>most beautiful, quiet neighborhood with the best view of the city: Urca.<br></strong><br> First, <strong>we will meet Botafogo</strong> , where we will walk to <strong>Vermelha Beach,</strong> a beach that until a few years ago was closed by a large fort and now has a privileged view of the great Sugar Loaf, from there we will <strong>walk half of the Cláudio Coutinho promenade</strong> bordering the coast and at the foot of the hill.<strong><br></strong><br> Later, we will return to General Tibúrcio square and start walking to Urca where we will pass by the abandoned <strong>Cassino hotel</strong> and then by <strong>the Igreja Nossa Senhora do Brasil</strong> .<br><br> At the end of the tour, the best part: the mureta da Urca where as locals, we can share a beer<strong> </strong>(or some petiscos), from the prettiest spot in the neighborhood, where you can take a beautiful panoramic image of the entire city of Rio, <strong>in front of Christ the Redeemer</strong> of Corcovado that embraces the entire city.<br><br> ATTENTION: Although I have read and will tell you a lot about this neighborhood, I consider that my strong point is photos, so do not hesitate to ask me for 300 of them as a souvenir.<br><br> We are going to have a great time and I promise you an image with many likes on your social networks!<br></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: 0,
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [     {url: "https://media.guruwalk.com/mb58v5pju4ts2syg9zkqovek5ntg"},
    {url: "https://media.guruwalk.com/o2rsddnoqvz1d53a4061te04qhlc"},
    {url: "https://media.guruwalk.com/aefpdzpkxlt3qp4nuabs9x871yq3"},
    {url: "https://media.guruwalk.com/6h9hv9ou3qms8df3b2upuxzmmwmv"},
    {url: "https://media.guruwalk.com/oflgz36h29ejxeijz483jw3ncbhw"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'The Little Africa Black History Walks in Rio de Janeiro (Available in )',
    latitude: '-22.896927',
    longitude: '-43.18193',
    descripton: "<p><strong>There is a “Little Africa” in Rio that is still unknown by most people. </strong>You will learn about <strong>the history of the port and its role in the slave trade</strong>, its labor movements, and economic growth; Brazilian Black History Figures; <strong>This route is about Brazilian history and its African roots.</strong> It showcases archaeological sites and how they’re deeply connected with who we are as Brazilians. Here <strong>you will find out about one of the most prominent art hubs</strong> and hear about resilience, historic figures that helped to build up our wealth in the fields of science, philosophy, music, religion, gastronomy, and culture in general. Get to know about some of the people who fought for freedom and built the foundations of Black movements in Brasil.<br><br>We start in <strong>Praça Mauá </strong>where Tomorrow and Rio's Art Museums are located, we will <strong>walk through the historic Port area</strong> is located and <strong>stop at the old, slave market,</strong> archeological sites of <strong>Pedra do Sal</strong>, and the UNESCO world heritage site for the Transatlantic Slave Trade memorial.<br><br>The <strong>Port Area is full of secrets of a hidden history that once uncovered</strong>, can tell the forgotten stories of a fascinating part of the city. This is a key tour to understanding Brazilian people and culture. Unveil the myth of racial democracy in Brasil and find out our convergent points in the Diaspora, reasons why sharing, listening, and exchanging our stories empower ourselves and our communities as we travel. Embark on a life-changing experience with inspiring people who are proud of their work and eager to share their researches and cultural legacy.<br><br>Avarage market price note: Note if this tour was to be charged to its market price, for small groups, its cost would be USD$50./person&nbsp; This information will help to inform you on a fair compensation that will help the guide cover costs with transfer, food and have a compensation left for my work. Thanks<br><br>Meeting Point: In front of the MAR Museum, Praça Mauá,5<br>P.S.: It's NOT Museu do Amanhã<br><br><br></p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [      {url: "https://media.guruwalk.com/dfsder2hfixi9coi5wmo9xm55pr4"},
    {url: "https://media.guruwalk.com/ci4yjbn08mqus8idbx0q9rq9majv"},
    {url: "https://media.guruwalk.com/gcy40def69f09r9x3mgoh1jzxrn3"},
    {url: "https://media.guruwalk.com/4ae01rwhet3d7urinc66gysxdwny"},
    {url: "https://media.guruwalk.com/6ft4yday4amx2gr2ltrtjunmurk3"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Get to know Pedra do Telégrafo in Rio de Janeiro - Free Tour (Available in English, Spanish, Portuguese)',
    latitude: '-22.984682',
    longitude: '-43.19684',
    descripton: '<p><strong>We are going to visit the fantastic Pedra do Telegrafo and one of the virgin beaches of Guaratiba.<br><br> Guaratiba is a neighborhood in the western part of Rio de Janeiro, almost 60km from Ipanema, hidden between hills and is an atypical walk for international tourism.<br></strong><br> We will start by taking the metro to Barra da Tijuca, where we will make 3 small bus trips to <strong>get to Barra da Guaratiba.<br></strong><br> It is here where we will <strong>begin our walk of almost 1 hour and a half</strong> through the jungle, <strong>until we reach the Pedra do Telégrafo.</strong><br> There I will help you take all the photos you want so that your instagram explodes with likes and your mother gets scared!<br><br> <strong>IT IS IMPORTANT</strong> that you bring a bottle of water (or two), fruits and something to eat. Keep in mind that we will be in the jungle for almost 5 hours.<br><br> After being here for a few minutes, <strong>we will descend and stop at Perigoso beach,</strong> the first virgin beach in Guaratiba. At sunset, I <strong>recommend that we watch the sunset from Barra de Guaratiba</strong> and start our return to the city.<br><br> <strong>Note:</strong><br> <em>If you are willing to pay for an Uber, we can do that too.<br><br> The description of the tour says that it is 6 hours but that is from the beginning of the tour in Guaratiba.<br><br></em> <strong>The suggested TIP is +R$100</strong></p><p>Free tour: Book for free and pay what you want at the end</p>',
    stock: 0,
    minimunDuration: '6 hours',
    rating: 0,
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [  {url: "https://media.guruwalk.com/7zmie4qy1sl0fwqyvkaj065mirl9"},
    {url: "https://media.guruwalk.com/tlkcm3qlqrk8km6lr9wtu4rpciew"},
    {url: "https://media.guruwalk.com/2wspwcztoy0jm1p2zoxuo02b2d7q"},
    {url: "https://media.guruwalk.com/u5rqqb1aaiinxfxpxptw9chcu196"},
    {url: "https://media.guruwalk.com/teo12u4jjfnakefhw6rskus9wycv"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free walking tour through the Tijuca Forest along Vista Chinesa (Available in German, English)',
    latitude: '-22.966571',
    longitude: '-43.235591',
    descripton: "<p>This guided tour <strong>will take you to the Tijuca Forest,</strong> <strong>passing historical monuments and wonderful views over the city.</strong><br> For me this path is special because I can tell you:</p><ul><li> <strong>Flora and fauna.</strong></li><li> <strong>Colonial history and subsequent development in the 1950s and 1960s.</strong></li><li> <strong>The most important signs in the landscape.</strong></li></ul><p> Plus, you have unique views over the city that you won't get from anywhere else.<br><br> Difficulty: medium</p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '3 hours 30 minutes',
    rating: '4.2',
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [     {url: "https://media.guruwalk.com/ekgkbk2cl715nf6u33zm0r854yj5"},
    {url: "https://media.guruwalk.com/2lk05axob65bjhj8wuvheptsjjva"},
    {url: "https://media.guruwalk.com/1wzphf3os1w8qylpizbskeo3q8xc"},
    {url: "https://media.guruwalk.com/e37pdae804c94hudtpwxpal7govg"},
    {url: "https://media.guruwalk.com/tgp23ckxtfdq567ub2icm2ysnsqw"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: "The Carioca Experience. Rio's Finest Walking Tour. Let's Explore Rio By Foot And Tram Within 5 Hours. (Available in English)",
    latitude: '-22.91069',
    longitude: '-43.17623',
    descripton: "<ol><li><strong><em>LET'S EXPLORE THIS AMAZING CITY BY FOOT AND TRAM</em></strong></li></ol><p>(<strong>all public transportation fares are included</strong>)<br><br></p><blockquote><strong>IT'S SOUNDS LONG BUT, ITS WORTH EVERY SECOND OF IT</strong></blockquote><p><br><strong>WE DO STOP FOR BREAKFAST AT A LOCAL SPOT(BREAKFAST NOT INCLUDED)</strong><br><br><strong><em>THIS TOUR IS PROVIDED IN ENGLISH ONLY </em></strong><br><br><br><br></p><blockquote><strong><em>I DO ASK FOR A CONTRIBUTION OF R$80 REAIS PER PERSON</em></strong></blockquote><p><br><br><strong>THIS TOUR WILL NOT TAKE PLACE IF IT RAINS FOR SAFETY REASONS </strong><br><br><strong>&nbsp;</strong></p><p><br><strong><br></strong><strong><em>A MINIMUM OF 2 PEOPLE&nbsp; IS REQUIRED FOR THE TOUR TO TAKE PLACE AND A MAXIMUM OF 10 PEOPLE<br><br></em></strong><br>Let's meet in Cinelandia. <br>In this tour, we will visit and pass by some of the cities most historical places. The tour lasts about 5 hours, and we'll visit and pass by the following places.<br>Meeting point Cinelandia<br>&nbsp;<br><strong>We meet at Starbucks in CInelandia at 8:00am</strong>.<br><br></p><p><br></p><ul><li><strong>Cinelandia(Meeting Point)</strong></li></ul><p><br></p><ul><li><strong>Passeio Público&nbsp;</strong></li></ul><p><br></p><ul><li><strong>Selaron Stairs</strong></li></ul><p><br></p><ul><li><strong>Water Aqueduct</strong></li></ul><p><br></p><ul><li><strong>Lapa</strong></li></ul><p><br></p><ul><li><strong>Cathedral</strong></li></ul><p><br></p><ul><li><strong>Praça Tiradentes(BREAKFAST)</strong></li></ul><p><br>•&nbsp; <strong>Real Gabinete de Literatura Portuguesa<br><br>•&nbsp; Igreja de São Francisco de Paula&nbsp;<br></strong><br></p><ul><li><strong>Largo da Carioca</strong></li></ul><p><br>•&nbsp; <strong>Santuário e Convento</strong> <strong>de Santo Antônio</strong>&nbsp;<br><br></p><ul><li><strong>Avenida Rio Branco</strong></li></ul><p><br>•&nbsp; <strong>Igreja da Candelaria(Pass By Using VLT)<br><br>•&nbsp; Mosteiro de São Bento</strong></p><p><br></p><ul><li><strong>Praca Maua</strong></li></ul><p><br></p><ul><li><strong>Museu do Amanhã</strong></li></ul><p><br></p><ul><li><strong>Parts of Little Africa</strong></li></ul><p><br></p><ul><li><strong>Kobra’s Mural</strong></li></ul><p><br></p><ul><li><strong>AquaRio(Pass By Using VLT)</strong></li></ul><p><br></p><ul><li><strong>Rio Star(Pass By Using VLT)</strong></li></ul><p><br></p><ul><li><strong>Central do Brasil</strong></li></ul><p><br></p><ul><li><strong>Terminal Fontenelle-Favela Providencia(Last Stop)</strong></li></ul><p><br></p><p><br></p><p><strong>What are you waiting for? Book your tour with me and discover a side of the city that many tour guides never give you the chance to see. Find out why so many travelers gave me a 5-star review on TripAdvisor and GuruWalk! Thank you so much.</strong></p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '5 hours',
    rating: 0,
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [      {url: "https://media.guruwalk.com/aehzg64xrlbug71yg5jqoya4ke0t"},
    {url: "https://media.guruwalk.com/a144u0y5yhxp4v7lg9ooyokjrpha"},
    {url: "https://media.guruwalk.com/i19htw6smurqhxq4e85goidgkofn"},
    {url: "https://media.guruwalk.com/631q1rgo8hj8gk7vdxbspvx421e2"},
    {url: "https://media.guruwalk.com/aq6ljncgxk7jpwfydi5oy5nw1k9r"} ] },
    type: { connect: { id: 7 } }
  },
  {
    name: "Rio's Finest Walking Tour Downtown Edition (Available in English)",
    latitude: '-22.911662',
    longitude: '-43.175819',
    descripton: "<p>Let's meet at Cinelandia and explore the downtown area with places on the list such as the world famous Selaron Steps, the Water Aqueduct, the Metropolitan Cathedral, and many other places. We will finish our tour at a very traditional Brazilian restaurant located in the heart of Lapa.<br>We will visit the following locations.<br><br></p><ul><li><strong>Cinelandia(Meeting Point)</strong></li><li><strong>Passeio Público&nbsp;</strong></li><li><strong>Selaron Steps</strong></li><li><strong>Water Aqueduct&nbsp;</strong></li><li><strong>Cathedral of Saint Sebastian</strong></li><li><strong>Largo da Carioca</strong></li><li><strong>Confeitaria Colombo</strong></li><li><strong>Saara Street Market(Great For Cheap Souviniers)</strong></li><li><strong>Igreja de São Francisco de Paula</strong></li><li><strong>Real Gabinete de Literatura Portuguesa</strong></li><li><strong>Praça Tiradentes</strong></li><li><strong>Ximeninho Praça João Pessoa(Lunch And Ending Point)</strong></li></ul><p><br>--&gt;&nbsp;<strong><em>THIS TOUR WON'T TAKE PLACE IF IT RAINS</em></strong> &nbsp;</p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours 30 minutes',
    rating: '4.4',
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [     {url: "https://media.guruwalk.com/i4d0l2nweryf9o2lcma164xa6s4x"},
    {url: "https://media.guruwalk.com/wg75ebs4ltlo8r1p58xysoccr8c2"},
    {url: "https://media.guruwalk.com/tzgys9rk0cwvadmx2zvudltacq2n"},
    {url: "https://media.guruwalk.com/xeonr6yiac2c2ar0msczmue5bwtu"},
    {url: "https://media.guruwalk.com/4avicjc1uz3ex3vklb0vk6qw7lnh"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: 'Free Tour Copacabana & Ipanema (Available in English, Spanish)',
    latitude: '-22.985181',
    longitude: '-43.197818',
    descripton: "<p><strong>Copacabana and Ipanema, two of the most famous neighborhoods in the world.</strong> When we talk about Rio de Janeiro, we instantly think of the beaches, we invite you to discover the local culture and Carioca vibe.<br> Sports, music, dances, gastronomy, understand and fall in love with the daily life of Rio.<br><br> <strong>This tour begins in Copacabana, where we can stroll through the heart of its commercial area</strong> , Av. Nossa Senhora de Copacabana, and better understand local life. Your lifestyle and the nuances between the present and the past.<br> We will talk about the great influence that the proximity to the beach brings. Sports, New Year's Eve traditions, famous restaurants and bars.<br> <strong>In Ipanema we will talk about the famous Girl from Ipanema and the Bossa Nova movement, a musical style that goes far beyond its concept and has influenced the country's politics.</strong></p><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours',
    rating: '4.3',
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [    {url: "https://media.guruwalk.com/j8l1px0xwm17ub3puq6q37zwpo4b"},
    {url: "https://media.guruwalk.com/5lx94za59mgb9pxs0qh83v7k789a"},
    {url: "https://media.guruwalk.com/80bl2zijkjbddugp6cgmdvdd5wbd"},
    {url: "https://media.guruwalk.com/11o2oftn7uk8uv8o1naqv9eyk7tf"},
    {url: "https://media.guruwalk.com/1n8b8cuzgfyripggxvzerju1sfhq"}] },
    type: { connect: { id: 7 } }
  },
  {
    name: "Let's tour the center of Rio de Janeiro learning a little Portuguese! + photos for your rrss (Available in English, Spanish)",
    latitude: '-22.911156',
    longitude: '-43.17582',
    descripton: "<p>I have a fun proposal to offer you:<br><br> <strong>Let's tour the center of Rio de Janeiro learning a little Portuguese while taking beautiful photos for your social networks!<br></strong><br></p><p> Hi, I'm Pupi, an Argentine artist and comedian who loves this city and that's why he decided to move to Brazil more than six months ago.</p><p><br> Although I am interested in the history of Lapa, I think that my forte is not to tell but to enjoy the colors and sounds of the little streets of Lapa, that which cannot be found on Wikipedia.</p><p><br></p><p> <em>The idea is that we are a group of no more than 3 or 4 to be able to enjoy the tour and do it in a more personalized way.</em></p><p><br></p><p> We'll meet on the subway at <strong>Carioca</strong> station, from where we'll go to <strong>Escaderia Selarón</strong> , a pedestrian street shaped like a staircase that was intervened by a Chilean artist and is full of color. From there, we will walk to the <strong>Sao Sebastian Cathedral in Rio de Janeiro,</strong> passing through the famous <strong>Arcos da Lapa</strong> , an aqueduct built in the 18th century and today an iconic setting for this city. In the Cathedral it does not matter if you are religious or not, the stained glass windows and the imposing architecture will surely mobilize you. Afterwards, we will walk to the <strong>Real Gabinete Português de Leitura,</strong> whose main hall stands out for its lavishness and its neo-Manueline style ornaments (yes, it looks like a set from Harry Potter).</p><p><br></p><p> Along the way I will take photos of you and record some videos, as well as teach you some words that can make your stay in Brazil easier.<br> After that I will send you the photos, the videos and a compiled video that will surely be all the rage on your social networks.</p><p><br></p><p> <strong>ATTENTION:</strong></p><ul><li> Although the journeys are short, I recommend you to wear comfortable shoes, water and sunscreen.</li><li> Rio is not a dangerous city, it is a city where you have to be careful: I will tell you when it is not convenient for you to take out your cell phone.</li><li> Remind you that just because it is a free walking tour does not mean that it is free. Take into account my time and my money invested when giving your contribution.</li></ul><p>Free tour: Book for free and pay what you want at the end</p>",
    stock: 0,
    minimunDuration: '2 hours',
    rating: 0,
    cost: 0,
    country: 'Brasil',
    city: 'Rio de Janeiro',
    pictures: { create: [       {url: "https://media.guruwalk.com/lh5sr40gelhofomc3rg2nvm4d813"},
    {url: "https://media.guruwalk.com/mankifnafcbzai8qx5wlbj8katj7"},
    {url: "https://media.guruwalk.com/5yn8mcb24dz29yitkrhxvf11d3c1"},
    {url: "https://media.guruwalk.com/kdd3hxasw2y47tfgvrwytp2asz6o"},
    {url: "https://media.guruwalk.com/lp7ujqu4ib7cylvfnita7kb75in6"}] },
    type: { connect: { id: 7 } }
  },

{
  name: 'Free Tour discover the history of Bariloche (Available in Spanish)',
  latitude: '-41.134055',
  longitude: '-71.314443',
  descripton: '<p>The proposal places us in what is now <strong>San Carlos de Bariloche</strong> .</p><p> <strong>Yesterday</strong> the <strong>Nahuel Huapi</strong> region, an <strong>area</strong> of <strong>glacial geography close to</strong> the Andes <strong>Mountains.<br></strong> Meeting area where those from here and those from there transferred cultural and material elements, giving rise to <strong>Vurilofche</strong> today called <strong>Bariloche</strong> , the <strong>most visited city in Argentine Patagonia.</strong></p><p> Our tour focuses <strong>on the 20th century</strong> , when a <strong>company</strong> with <strong>German</strong> capital took absolute <strong>commercial power</strong> in the region.<br> What did they trade? What route did they use? What is the link between the city and the Old Continent?</p><p> We will look for answers in the <strong>European legacy of Bariloche</strong> , discovering constructions along the way that still bear witness to this logging era. We will see the most relevant constructions built since the creation of the National Park without overlooking the <strong>stories and legends</strong> related to the <strong>Nazis</strong> . who took <strong>refuge</strong> in this area of <strong>Argentina.</strong></p><p> During the Tour through "the Patagonian jewel" we will learn through old photographs the great evolution that Bariloche experienced <strong>,</strong> from being a <strong>town</strong> to<strong> </strong>become one of the <strong>main tourist destinations in Argentina.</strong></p><p> On the guided tour we begin by walking along the <strong>shores of Lake Nahuel Huapi,</strong> making<strong> </strong>geolocation and presenting the lake in numbers. Later, with the eyes of the architects who created it, we will see the <strong>Civic</strong> Center and the administration of <strong>the National Park</strong> with a brief visit to its gardens and then meet the <strong>Club Andino Bariloche</strong> and the surrounding buildings that testify of the town that was and the secrets that it hides<br> Up the hill we go to the neighborhood where the suspicions of neighbors closely related to National Socialism were confirmed, then there are winding streets and stairs that take us to the neo-Gothic <strong>Cathedral</strong> . The temple was <strong>designed by Alejandro Bustillo</strong> , one of the most prominent Argentine architects in the first half of the 20th century. We tour the center, I will leave you the best gastronomic recommendations<br> and my contact for whatever you need<br> I invite you to book this interesting Free Tour now. You just have to bring comfortable shoes, water, some cash and above all, a good attitude!<br><br> <strong>I wait for you in Bariloche!</strong></p><p>Free tour: Book for free and pay what you want at the end</p>',
  stock: 0,
  minimunDuration: '2 hours',
  rating: 0,
  cost: 0,
  country: 'Argentina',
  city: 'San Carlos de Bariloche',
  pictures: { create: [     {url: "https://media.guruwalk.com/w9ulk14zguya4uwpl0i28xz0yplh"},
  {url: "https://media.guruwalk.com/er0k161en5bbr61xymze4gcwhbeu"},
  {url: "https://media.guruwalk.com/k2s2qkgu59hxvyisyatuumehf3g8"},
  {url: "https://media.guruwalk.com/btwvvf8x2y763k6go0gpuebd3o4v"},
  {url: "https://media.guruwalk.com/rlqks73xbzg5mpay6a0qjehidd51"} ] },
  type: { connect: { id: 7 } }
},
{
  name: 'Natural Adventure through Cerro Otto! Active Bariloche (Available in Spanish)',
  latitude: '-41.138421',
  longitude: '-71.325839',
  descripton: '<p><br>Live Bariloche in a natural, active and full of adventure way!<br><br> I invite you to walk and climb <strong>Cerro Otto</strong> , one of the most beautiful and closest hills to the urban area. Just 2 km from the center, we will depart from km 1 of Avenida Pioneros taking the YPF Gas Station as a meeting point.<br><br> From there, we immerse ourselves in a beautiful trekking journey towards Cerro Otto to discover the <strong>vegetation,</strong> the forest in its maximum splendor, reaching <strong>viewpoints</strong> that will allow us to capture the best views of the region, <strong>mountains</strong> , <strong>lakes</strong> , and much more!<br><br> The walks are of medium to low difficulty.<br><br> The route of the trail will be developed always considering the physical state of the tourist and/or visitor who participates in the activity.<br><br> <strong>RECOMMENDATIONS:</strong><br> - Comfortable footwear (trekking shoes/boots)<br> - Breathable, comfortable clothing.<br> - Coat<br><br> <strong>CARRY:</strong><br> - 1 liter of water to hydrate.<br> - Energy food (fruits, banana / orange), cereal bar if you wish.<br> - Sunscreen and sunglasses if there is a lot of sun.<br> <strong><br>START AND ARRIVAL:</strong><br> Meeting point: YPF service station (km1 of Avenida Pioneros)<br><br> The tour rate is at the will of the tourist/visitor. For reference, $1,500 Argentines is the minimum required for any half-day excursion.</p><p>Free tour: Book for free and pay what you want at the end</p>',
  stock: 0,
  minimunDuration: '4 hours',
  rating: 0,
  cost: 0,
  country: 'Argentina',
  city: 'San Carlos de Bariloche',
  pictures: { create: [   {url: "https://media.guruwalk.com/giju81p86zeg4d4m3mvnz30deo7f"},
  {url: "https://media.guruwalk.com/799o9ures45f0tmhph7revf1i3ez"},
  {url: "https://media.guruwalk.com/azgve1o7u9cat3r0fdhfmh6uq6yf"},
  {url: "https://media.guruwalk.com/ko93pvyh7xyfmmilj8xlm3lh49ro"},
  {url: "https://media.guruwalk.com/a1l94mh1tx43ykiafyuz29yqfdm5"} ] },
  type: { connect: { id: 7 } }
},
{
  name: 'Free Tour Cerro San Martin (the old lady) (Available in Spanish)',
  latitude: '-41.161966',
  longitude: '-71.412402',
  descripton: '<p>Hello, I invite you to visit the San Martin hill (the old woman) We climbed from Villa Los Coihues (15 km from Bariloche on Lake Gutiérrez) up to 1200 meters high through a forest of coihues, cypresses and lengas and at its summit a 360 view degrees where <strong>we can see Cerro Catedral, Ventana, Pontoneros</strong> , and much more! <strong>Lagos Gutierrez, Nahuel Huapi, Moreno</strong> !!!<br><br> - It lasts an hour and a half, medium demanding for someone accustomed to walking on slopes and high for people with little experience in physical demands.<br> - We meet at the beach of Villa los cohiues and from there we leave.<br> - It is a drop of approximately 300 meters<br> - I will be waiting for you in the beach parking lot with a colorful hat and scarf so that you can identify me.<br> I wait for you!! They will not regret it!!!</p><p>Free tour: Book for free and pay what you want at the end</p>',
  stock: 0,
  minimunDuration: '3 hours 30 minutes',
  rating: 0,
  cost: 0,
  country: 'Argentina',
  city: 'San Carlos de Bariloche',
  pictures: { create: [       {url: "https://media.guruwalk.com/2dikpfm7ojow0t78d7pmdvoyvcsv"},
  {url: "https://media.guruwalk.com/kecr3nw70wbqdksid9obitlx3lmc"},
  {url: "https://media.guruwalk.com/7fscdqr1awosavn1p5seoa26my7c"},
  {url: "https://media.guruwalk.com/gvgsafx6o6ipu9yefwhl8k1ub9oc"}] },
  type: { connect: { id: 7 } }
},
{
  name: 'Treking Cerro Otto (Available in English)',
  latitude: '-41.139169',
  longitude: '-71.317496',
  descripton: '<p>Holaaa los invito a hacer un treking unico por el Cerro Otto!! A poca distancia del centro de Bariloloche, caminaremos por bosques y senderos llenos de historias , vistas de cerros y lagos!!!<br>Tiene un desnivel de 300 metros aprox. Dificultad tecnica, baja . Exigencia fisica media para principiantes, baja para los acostumbrados a caminar en montaña.<br>Salimos desde el km 1 de A venida Pioneros y llegamos al centro invernal Piedras Blancas.&nbsp;<br>Una hora y media aproximadamente de ida y otro tanto de vuelta. Los espero!!!<br>Segun el grupo podemos ampliar el recorrido y por ende el tiempo.<br>Saludoss!!!<br><br><br><br></p><p>Free tour: Book for free and pay what you want at the end</p>',
  stock: 0,
  minimunDuration: '3 hours 30 minutes',
  rating: 0,
  cost: 0,
  country: 'Argentina',
  city: 'San Carlos de Bariloche',
  pictures: { create: [    {url: "https://media.guruwalk.com/tv3dv4dfn7eob8stmj3gy31vagrl"},
  {url: "https://media.guruwalk.com/cm2j51cvzi1buthwlihmcjqeh4d5"},
  {url: "https://media.guruwalk.com/evcmuwiry7t325z37rqer95cxck1"},
  {url: "https://media.guruwalk.com/v9lon1ze2hov2vilcavz9ijf01ku"} ] },
  type: { connect: { id: 7 } }
},
{
  name: 'Free Treking Tour to Cerro Llao Llao (Available in Spanish)',
  latitude: '-41.052334',
  longitude: '-71.540055',
  descripton: '<p>Hello! I invite you to start in the world of trekking by <strong>ascending to the surprising Cerro Llao Llao</strong> , 300 meters of unevenness, through a <strong>forest of coihues and cypress trees</strong> to culminate in <strong>viewpoints with wonderful views of the hills</strong> , López, Capilla, Millaqueo and many more.<br> We will also see <strong>Lake Nahuel Huapi</strong> in all its beauty.<br><br> <strong>Useful information for the traveler:</strong><br> - 3 hours round trip.<br> - 300m of unevenness<br> - Just over 3.5 km of total distance<br> - Low difficulty<br> - It is important to bring comfortable clothes, drinks and food (you can ask me for any questions on the platform)<br> I wait for you!!</p><p>Free tour: Book for free and pay what you want at the end</p>',
  stock: 0,
  minimunDuration: '3 hours',
  rating: '4.7',
  cost: 0,
  country: 'Argentina',
  city: 'San Carlos de Bariloche',
  pictures: { create: [    {url: "https://media.guruwalk.com/coq0lljhdzm8b23p0b4b4qg4ov7f"},
  {url: "https://media.guruwalk.com/rnuwx30ge78jth27870iyvujfqfj"},
  {url: "https://media.guruwalk.com/kv4fz37l4zduw25d30p3y9vsq8lb"},
  {url: "https://media.guruwalk.com/4z8i8b9s4f7uxmolh7dq8jjsnh5a"},
  {url: "https://media.guruwalk.com/rs92xd7ued8tcegwclljsfiyu78p"}] },
  type: { connect: { id: 7 } }
},
{
  name: 'I discovered Bariloche. Its origin, buildings, its protagonists (Available in Spanish)',
  latitude: '-41.133328',
  longitude: '-71.310128',
  descripton: '<p>A visit to the beautiful city of Bariloche, an unforgettable experience! Know its history, most characteristic buildings, its identity and the current situation of this tourist center. Places of interest: CIVIC CENTER - NATIONAL PARKS BUILDINGS - PUERTO SAN CARLOS - CATHEDRAL CHURCH.<br> In addition, you will be informed about the most important places to visit and be part of nature. Mountain refuges, trekking paths, mountain biking, etc.<br> The tour fee is at the will of the tourist/visitor. For reference, $700 Argentines is the minimum that is requested in any excursion.</p><p>Free tour: Book for free and pay what you want at the end</p>',
  stock: 0,
  minimunDuration: '1 hour 30 minutes',
  rating: 0,
  cost: 0,
  country: 'Argentina',
  city: 'San Carlos de Bariloche',
  pictures: { create: [     {url: "https://media.guruwalk.com/cxvclm22w6f977pfogwwmiz65i1d"},
  {url: "https://media.guruwalk.com/jcktuowycxjb55tntm72eh8hp07q"},
  {url: "https://media.guruwalk.com/o6xh7bacr9xhg7lqz9uvhhvkm8tg"},
  {url: "https://media.guruwalk.com/z9nduzllssabci9uzbept1hamw3l"},
  {url: "https://media.guruwalk.com/vglcfsh30brmitmi1afqjal4zmb2"}] },
  type: { connect: { id: 7 } }
},

]

export async function main() {
    console.log(`Start Seeding...`)
    for (const u of activityData) {
        const data = await prisma.activity.create({
            data: u,
        })
        console.log(`Created type with id: ${data.id}`)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
            process.exit(1)        
    })