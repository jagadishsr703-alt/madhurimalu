-- ==========================================================
-- MADHURIMALU: ADD COMPLETE "ALA VAIKUNTHAPURRAMULOO" (2020) ALBUM
-- Run this in your Supabase SQL Editor (Click "Run")
-- ==========================================================

INSERT INTO public.songs (
  id, slug, title, movie, singers, lyricist, "musicDirector", cast, year, language, "posterUrl", "youtubeUrl", lyrics, "englishLyrics", meaning, tags, views, featured, status
) VALUES 
(
  'avpl-01-samajavaragamana',
  'samajavaragamana-ala-vaikunthapurramuloo',
  'Samajavaragamana',
  'Ala Vaikunthapurramuloo',
  'Sid Sriram',
  'Sirivennela Seetharama Sastry',
  'Thaman S',
  'Allu Arjun, Pooja Hegde',
  2020,
  'Telugu',
  'https://upload.wikimedia.org/wikipedia/en/2/28/Ala_Vaikunthapurramuloo.jpeg',
  'https://www.youtube.com/watch?v=ZUXPP3Z_iTA',
  'కళ్ళతో మాట్లాడే కమ్మని చిన్నదానా
మనసునే దోచావే మాయల మారెమ్మ
వయ్యారి నడకలతో హృదయం మీటినావే
నీ చూపే నా ప్రాణం నిలిపే అమృతమాయే

సామజవరగమనా నిను చూసి ఆగలేనా
నీ అందం వర్ణించ పదాలు చాలకున్నా
సామజవరగమనా మదిలోన నిండిపోవా
నీ జ్ఞాపకం తోడై నన్నే నడిపించగా

కురులనే తాకే గాలికి ఈర్ష్య పుడుతుందే
పెదవులపై చేరే చిరునవ్వే వెన్నెలవుతుందే
అడుగులో అడుగేసి నాతో నడుస్తావా
కలలనే నిజం చేసి జతగా ఉంటావా

సామజవరగమనా నిను చూసి ఆగలేనా
నీ అందం వర్ణించ పదాలు చాలకున్నా
సామజవరగమనా మదిలోన నిండిపోవా
నీ జ్ఞాపకం తోడై నన్నే నడిపించగా',
  'Kallatho maatlaade kammani chinnadaanaa
Manasune dochaave maayala maaremma
Vayyaari nadakalatho hrudayam meetinaave
Nee choope naa praanam nilipe amruthamaye

Samajavaragamana ninu choosi aagalena
Nee andam varnincha padaalu chaalakunna
Samajavaragamana madilona nindipova
Nee gnaapakam thodai nanne nadipinchaga

Kurulane thaake gaaliki eershya puduthunde
Pedavulapai chere chirunavve vennelavuthunde
Adugulo adugesi naatho nadusthaava
Kalalane nijam chesi jathagaa untaava

Samajavaragamana ninu choosi aagalena
Nee andam varnincha padaalu chaalakunna
Samajavaragamana madilona nindipova
Nee gnaapakam thodai nanne nadipinchaga',
  'Samajavaragamana is a poetic classical tribute expressing profound admiration for a woman''s graceful walk, celestial charm, and timeless elegance.',
  ARRAY['Samajavaragamana Lyrics', 'Ala Vaikunthapurramuloo Songs', 'Sid Sriram', 'Thaman S', 'Allu Arjun', 'Pooja Hegde', 'Sirivennela'],
  120,
  true,
  'published'
),
(
  'avpl-02-butta-bomma',
  'butta-bomma-ala-vaikunthapurramuloo',
  'Butta Bomma',
  'Ala Vaikunthapurramuloo',
  'Armaan Malik',
  'Ramajogayya Sastry',
  'Thaman S',
  'Allu Arjun, Pooja Hegde',
  2020,
  'Telugu',
  'https://upload.wikimedia.org/wikipedia/en/2/28/Ala_Vaikunthapurramuloo.jpeg',
  'https://www.youtube.com/watch?v=rOirJKJoE0o',
  'ఇంతకన్నా మంచి పోలికేది
నాకు తట్టలేదు గాని అమ్ము
ఈ లంగా వోణీల్లోన
లచ్చిందేవల్లే ఉన్నావే పోరి

బుట్టబొమ్మ బుట్టబొమ్మ
నన్ను సుట్టుకుంటివే
జిందగీకే అట్టబొమ్మ
నన్ను సెసికుంటివే

ముల్టీ కలరు పూల చొక్కా
ఎగరేసుకున్న బాకులాగ
మళ్ళీ మళ్ళీ గుచ్చుతావే
గుండెల్లోన బాకులాగ

చిన్నగా చిన్నగా నవ్వుతూనే
మాయజేసి చంపినావే
బుట్టబొమ్మ బుట్టబొమ్మ
నన్ను సుట్టుకుంటివే!',
  'Inthakanna manchi polikedi
Naaku thattaleedu gaani Ammu
Ee langa vonillona
Lacchindevallae unnaave pori

Butta bomma butta bomma
Nannu suttukuntive
Zindagi ke atta bomma
Nannu sesikuntive

Multi color-u poola chokka
Egaresukunna baakulaaga
Malli malli gucchutaave
Gundellona baakulaaga

Chinnagaa chinnagaa navvuthoone
Maayajesi champinaave
Butta bomma butta bomma
Nannu suttukuntive!',
  'An infectious, joyful romantic dance anthem celebrating traditional South Indian beauty, comparing the beloved to a delicate festive doll.',
  ARRAY['Butta Bomma Lyrics', 'Ala Vaikunthapurramuloo', 'Armaan Malik', 'Allu Arjun', 'Pooja Hegde', 'Thaman S', 'Ramajogayya Sastry'],
  180,
  true,
  'published'
),
(
  'avpl-03-ramuloo-ramulaa',
  'ramuloo-ramulaa-ala-vaikunthapurramuloo',
  'Ramuloo Ramulaa',
  'Ala Vaikunthapurramuloo',
  'Anurag Kulkarni, Mangli',
  'Kasarla Shyam',
  'Thaman S',
  'Allu Arjun, Pooja Hegde',
  2020,
  'Telugu',
  'https://upload.wikimedia.org/wikipedia/en/2/28/Ala_Vaikunthapurramuloo.jpeg',
  'https://www.youtube.com/watch?v=3oMZeuGz7og',
  'బంటు గానికి ట్వెంటీటూ.. బస్తిల మస్తు కట్-ఔటూ
బచ్చాగాన్ల బ్యాచుండేది వచ్చినమంటే సుట్టు
కిక్కే జాలక ఓ నైటూ.. ఎక్కి డొక్కు బుల్లెటూ
సందు సందుల మందు కోసం ఎతుకుతాంటే రూటు
సిల్కు చీర గట్టుకొని చిల్డు బీరు మెరిసినట్టు
పొట్లంగట్టిన బిర్యానికి బొట్టు బిల్ల వెట్టినట్టు

బంగ్ల మీద నిల్సొనుందిరో ఓ సందామావ
సుక్క తాగక సక్కరొచ్చరో ఎం అందం మావ
జింక లెక్క దుంకుతుంటెరో ఆ సందామావ
జుంకి జారి చిక్కుకుందిరో నా దిల్లుకు మావ

రాములో రాములా నన్ను ఆగం చేసిందిరో
రాములో రాములా నా పానం తీసిందిరో
రాములో రాములా నన్ను ఆగం చేసిందిరో
రాములో రాములా నా పానం తీసిందిరో!

హెయ్! తమ్మలపాకే ఎస్తుంటే కమ్మగ వాసన ఒస్తావే
ఎర్రగ పండిన బుగ్గలు రెండు యాదీ కొస్తాయే
అరె పువ్వుల అంగీ ఎస్తుంటే గుండీ నువ్వై పూస్తావే
పండుకున్న గుండెలొ దూరి లొల్లే చెస్తావే

అరెయ్ ఇంటి ముందు లైటు మినుకు మినుకుమంటాంటే
నువ్వు కన్ను కొట్టినట్టు సిగ్గుపుట్టిందే
సీరకొంగు తలుపు సాటు సిక్కుకుంటాంటే
ఎహె.. నువ్వు లాగినట్టు ఒళ్ళు జల్లుమంటాందే

రాములో రాములా నన్ను ఆగం చేసిందిరో
రాములో రాములా నా పానం తీసిందిరో!',
  'Bantu gaaniki twenty two.. Bastila masthu cut-out-u
Bacchagaanla batch undedhi vacchinamante suttu
Kikke jaalaka o night-u.. Ekki dokku bullet-u
Sandhu sandhula mandhu kosam ethukuthaante route-u
Silku cheera gattukoni chilled beer-u merisinattu
Potlamgattina biryani ki bottu billa vettinattu

Bangla meedha nilsonundhiro o sandaamaava
Sukka thaagaka sakkaroccharo em andham maava
Jinka lekka dunkuthuntero aa sandaamaava
Jumki jaari chikkukundhiro naa dilluku maava

Ramuloo ramulaa nannu aagam chesindhiro
Ramuloo ramulaa naa paanam theesindhiro
Ramuloo ramulaa nannu aagam chesindhiro
Ramuloo ramulaa naa paanam theesindhiro!

Hey! Thammalapaake esthunte kammaga vaasana osthaave
Erraga pandina buggalu rendu yaadee kosthaaye
Are puvvula angee esthunte gundee nuvvai poosthaave
Pandukunna gundelo dhoori lolle chesthaave

Arey inti mundhu light-u minuku minukumantaante
Nuvvu kannu kottinattu sigguputtindhe
Seerakongu thalupu saatu sikkukuntaante
Ehe.. Nuvvu laaginattu ollu jallumantaandhe

Ramuloo ramulaa nannu aagam chesindhiro
Ramuloo ramulaa naa paanam theesindhiro!',
  'A high-octane folk-fusion mass party anthem depicting a local youth smitten by a neighborhood beauty that drives his senses wild.',
  ARRAY['Ramuloo Ramulaa Lyrics', 'Ala Vaikunthapurramuloo', 'Mangli', 'Anurag Kulkarni', 'Allu Arjun', 'Thaman S', 'Kasarla Shyam'],
  155,
  true,
  'published'
),
(
  'avpl-04-omg-daddy',
  'omg-daddy-ala-vaikunthapurramuloo',
  'OMG Daddy',
  'Ala Vaikunthapurramuloo',
  'Rahul Sipligunj, Roll Rida, Rahul Nambiar, Lady Kash, Blaaze',
  'Krishna Chaitanya',
  'Thaman S',
  'Allu Arjun, Murali Sharma, Pooja Hegde',
  2020,
  'Telugu',
  'https://upload.wikimedia.org/wikipedia/en/2/28/Ala_Vaikunthapurramuloo.jpeg',
  'https://www.youtube.com/watch?v=gdt-yIgm2zc',
  'నా స్టోరీ చెప్పలేను నా బాధకంతు లేదు 
ఈ డాడీ లందురు ఎందుకిత్త పీక్కుతింటున్నారు 
మాట వినిపించుకోరు అస్సలు అర్థం చేసుకోరు 
ఆలోచిస్తేనే నాన్న పేరు రాలుతుంది నా హెయిర్ -ఉ

వందరూపాయలివ్వమంటే మనమేమన్న రిచ్ ఆహ్ 
అని క్లాస్ పీకుతుంటే ఏమైనా పిచ్చా అనుకుంటూ 
ఏడ్చుకుంటూ నేను బైటికొచ్చా 
అందరింట సేమ్ సీన్ ఏమంటావ్ చిచ్చా

Oh My GOD Daddy Just Stop Being My Baddy
Oh My GOD Daddy Just Stop Being My Baddy
Oh My GOD Daddy Just Stop Being My Baddy
Don''t Be So Hardy That Will Make Me Saddy

మేర నామ్ బంటు కానీ పేరుకి కొట్టారు ఇటు
చార్ సౌ బేస్ డాడీ తోనే చేశా నీ ఫైట్ డే అండ్ నైట్ -ఉ
ఓహ్ ఓహ్ ఓహ్ అమ్మకి మొగుడు 
ఓహ్ ఓహ్ ఓహ్ నాన్నయినాడు

వర్షాన్ని ఓ చిట్టి బాటిల్ లో నింపలేవు 
సంతోషాన్ని కుట్టి నువ్వు యూనిఫామ్ వెయ్యలేవు 
స్వేచ్ఛకేమి షార్ట్కట్ కనిపెట్టలేదు ఒట్టు 
కాదంటే నన్ను తిట్టు లేదా నా జట్టు కట్టు

Oh My GOD Daddy Just Stop Being My Baddy
Oh My GOD Daddy Just Stop Being My Baddy!',
  'Naa story cheppalenu naa baadhakanthu ledu
Ee daddy landharu endhukittha peekkuthintunnaaru
Maata vinpinchukoru assalu artham chesukoru
Aalochisthene naanna peru raaluthundi naa hair-u

Vanda roopaayalivvamante manamemanna rich aah
Ani class peekuthunte emainaa picchaa anukuntoo
Edchukuntoo nenu baitikocchaa
Andharinta same scene emantaav chicchaa

Oh My GOD Daddy Just Stop Being My Baddy
Oh My GOD Daddy Just Stop Being My Baddy
Oh My GOD Daddy Just Stop Being My Baddy
Don''t Be So Hardy That Will Make Me Saddy

Mera naam Bantu kaanee peruki kottaaru itu
Chaar sau bees daddy thone chesaa nee fight day and night-u
Oh oh oh ammaki mogudu
Oh oh oh naannayinaadu

Varshaanni o chitti bottle lo nimpalevu
Santhoshaanni kutti nuvvu uniform veyyalevu
Swecchakkemi shortcut kanipettaledhu ottu
Kaadhante nannu thittu ledhaa naa jattu kattu

Oh My GOD Daddy Just Stop Being My Baddy
Oh My GOD Daddy Just Stop Being My Baddy!',
  'A playful, modern rap-pop track highlighting generational banter and humorous grievances between an ambitious youth and his strict, conservative father.',
  ARRAY['OMG Daddy Lyrics', 'Ala Vaikunthapurramuloo', 'Rahul Sipligunj', 'Roll Rida', 'Allu Arjun', 'Thaman S'],
  95,
  false,
  'published'
),
(
  'avpl-05-sittharala-sirapadu',
  'sittharala-sirapadu-ala-vaikunthapurramuloo',
  'Sittharala Sirapadu',
  'Ala Vaikunthapurramuloo',
  'Sooranna, Saketh Komanduri',
  'Vijay Kumar Bhalla',
  'Thaman S',
  'Allu Arjun, Pooja Hegde',
  2020,
  'Telugu',
  'https://upload.wikimedia.org/wikipedia/en/2/28/Ala_Vaikunthapurramuloo.jpeg',
  'https://www.youtube.com/watch?v=yWG5bYvKARE',
  'సిత్తరాల సిరపడు.. సిత్తరాల సిరపడు
ఉత్తరాన ఊరి సివర.. సిత్తరాల సిరపడూ
పట్టుపట్టినాడ ఒగ్గనే ఒగ్గడు..
పెత్తనాలు నడిపేడు సిత్తరాల సిరపడు
మంతనాలు చేసినాడు సిత్తరాల సిరపడు..
ఊరూరు ఒగ్గేసినా ఉడుం పట్టు ఒగ్గడు

బుగతోటి ఆంబోతూ రంకేసి కుమ్మబోతే..
కొమ్ములూడదీసి మరీ పీపాలూధినాడూరో..
జడలిప్పి మర్రిచెట్టు దయ్యాల కొంపైతే..
దయ్యముతో కయ్యానికి తొడకొట్టి దిగాడు.. ఆ.. ఆ..

అమ్మోరి జాతరలో ఒంటి తల రావణుడు..
గుంటలెంట్ల పడితేను గుద్ది గుండ చేసినాడు
పొన్నూరు వస్తాడు.. ధమ్లుంటే రమ్మంటూ..
రొమ్ము మీదొక్కటిచ్చి కుమ్మి కుమ్మి పోయాడు.. ఆ.. ఆ..

పదిమంది లాగలేని పదిమూరల సొరచేప..
ఒడుపుగా ఒంటిసెత్తో ఒడ్డుకట్టుకొచ్చినాడూ..
సాముజేసే కండటోటి.. దేనికైనా గట్టిపోటీ..
అడుగడుగు వేసినాడ అద్రేను అవతలొడు!',
  'Sittharala sirapadu.. Sittharala sirapadu
Uttharaana oori sivara.. Sittharala sirapadoo
Pattupattinaada oggane oggadu..
Petthanaalu nadipedu sittharala sirapadu
Manthanaalu chesinaadu sittharala sirapadu..
Oorooru oggesinaa udum pattu oggadu

Bugathoti aambothoo rankesi kummabothe..
Kommooloodadeesi maree peepaloodhinaadooro..
Jadalippi marrichettu dayyaala kompaite..
Dayyamutho kayyaaniki thodakotti digaadu.. Aa.. aa..

Ammori jaatharalo onti thala raavanudu..
Guntalentla padithenu guddhi gunda chesinaadu
Ponnuru vasthaadu.. Dhamlunte rammantoo..
Rommu meedhokkaticchi kummi kummi poyaadu.. Aa.. aa..

Padhimandi laagaleni padhimoorala sorachepa..
Odupugaa ontisetho oddukattukocchinaadoo..
Saamujese kandathoti.. Dhenikainaa gattipoti..
Adugadugu vesinaada adrenu avathalodu!',
  'A high-spirited North Andhra rustic folk ballad sung in Srikakulam dialect that celebrates the invincible heroism, unmatched physical strength, and unyielding will of the hero.',
  ARRAY['Sittharala Sirapadu Lyrics', 'Ala Vaikunthapurramuloo', 'Thaman S', 'Sooranna', 'Saketh', 'Allu Arjun', 'Folk Song'],
  110,
  true,
  'published'
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  movie = EXCLUDED.movie,
  singers = EXCLUDED.singers,
  lyricist = EXCLUDED.lyricist,
  "musicDirector" = EXCLUDED."musicDirector",
  cast = EXCLUDED.cast,
  year = EXCLUDED.year,
  "posterUrl" = EXCLUDED."posterUrl",
  "youtubeUrl" = EXCLUDED."youtubeUrl",
  lyrics = EXCLUDED.lyrics,
  "englishLyrics" = EXCLUDED."englishLyrics",
  meaning = EXCLUDED.meaning,
  tags = EXCLUDED.tags,
  "updatedAt" = now();
