-- ==========================================================
-- MADHURIMALU: POPULATE 100% COMPLETE & ACCURATE FULL LYRICS
-- Movies: Temper (2015) & Ala Vaikunthapurramuloo (2020)
-- Run this in your Supabase SQL Editor
-- ==========================================================

-- 1. Ensure table schema has englishLyrics column
ALTER TABLE public.songs ADD COLUMN IF NOT EXISTS "englishLyrics" TEXT;

-- 2. Clear old incomplete songs
DELETE FROM public.songs;

-- 3. Insert complete full lyrics for all 10 tracks
INSERT INTO public.songs (
  id, slug, title, movie, singers, lyricist, "musicDirector", cast, year, language, "posterUrl", "youtubeUrl", lyrics, "englishLyrics", meaning, tags, views, featured, status
) VALUES 
(
  'temper-01-one-more-time',
  'one-more-time-temper',
  'One More Time',
  'Temper',
  'Ranjith Govind, Lipsika Bhashyam',
  'Kandikonda',
  'Anup Rubens',
  'Jr NTR, Kajal Aggarwal',
  2015,
  'Telugu',
  'https://raghavmv.wordpress.com/wp-content/uploads/2015/02/temper-movie-poster_142181589800.jpg',
  'https://www.youtube.com/watch?v=QYOCqHcj2xc',
  'నిన్ను చూసి పడిపోయా ఆన్ ది స్పాట్
నన్ను నేను మర్చిపోయా ఆన్ ది స్పాట్
హ నిన్ను చూసి పడిపోయా ఆన్ ది స్పాట్
నన్ను నేను మర్చిపోయా ఆన్ ది స్పాట్
మ్యాజిక్ ఏదో చేసినట్టు ఆన్ ది స్పాట్
నీ మాటలకూ పడిపోయా ఆన్ ది స్పాట్

నను ఏం చేసావో ఇంతకీ
అది అర్థం కాదే ఎంతకీ
నా గుండె పట్టి లాగి లాగి చంపేసావు
గిల్లి గిల్లి ప్రేమించేసేలా

ఓ వన్ మోర్ టైమ్ బేబీ వన్ మోర్ టైమ్
మళ్ళీ మళ్ళీ చెప్పా మాట వన్ మోర్ టైమ్
వన్ మోర్ టైమ్ బేబీ వన్ మోర్ టైమ్
మళ్ళీ మళ్ళీ చెప్పా మాట వన్ మోర్ టైమ్
ఓహ్ వన్ మోర్ టైమ్... ఆన్ ది స్పాట్
వన్ మోర్ టైమ్...

కళ్ళ తోటి నవ్వి నన్ను గాయపరిచావే
పెదవి తోటి సైగ చేసి నిద్ర చెరిపావే
మది ఊగేసి ఉయ్యాలా నీతో ఆడింది జంపాలా
నాకు నానారకాల నచ్చావే బాల ర

హా నిన్ను చూసి పడిపోయా ఆన్ ది స్పాట్
నన్ను నేను మర్చిపోయా ఆన్ ది స్పాట్

ఏంటో ఏమో ఎదను మొత్తం మాయచేసావే
గుండెలోకి గుండు సూదిలా కూర్చుకున్నావే
నాకు ఇస్తావా అందాల నాతో వస్తావా కండాల
నన్ను మిఠాయిలాగా మింగేసి పోరా ర

హా నిన్ను చూసి పడిపోయా ఆన్ ది స్పాట్
నన్ను నేను మర్చిపోయా ఆన్ ది స్పాట్
మ్యాజిక్ ఏదో చేసినట్టు ఆన్ ది స్పాట్
నీ మాటలకూ పడిపోయా ఆన్ ది స్పాట్

నన్ను ఏం చేసావో ఇంతకీ
అది అర్థం కాదే ఎంతకీ
నా గుండె పట్టి లాగి లాగి చంపేసావు
గిల్లి గిల్లి ప్రేమించేసేలా

వన్ మోర్ టైమ్ బేబీ వన్ మోర్ టైమ్ బేబీ
మళ్ళీ మళ్ళీ చెప్పా మాట వన్ మోర్ టైమ్
వన్ మోర్ టైమ్ బేబీ వన్ మోర్ టైమ్ బేబీ
మళ్ళీ మళ్ళీ చెప్పా మాట వన్ మోర్ టైమ్!',
  'Ninnu choosi padipoya on the spot
Nannu nenu marchipoya on the spot
Ha ninnu choosi padipoya on the spot
Nannu nenu marchipoya on the spot
Magic edo chesinattu on the spot
Nee maatalaku padipoya on the spot

Nanu em chesaavo inthakee
Adi artham kaade enthakee
Naa gunde patti laagi laagi champeysavu
Gilli gilli premincheselaa

O one more time baby one more time
Malli malli cheppa maata one more time
One more time baby one more time
Malli malli cheppa maata one more time
Oh one more time... On the spot
One more time...

Kalla thoti navvi nannu gaayaparichaave
Pedavi thoti saiga chesi nidra cheripaave
Madi oogesi uyyaala neetho aadindi jampaala
Naaku naanaarakaala nachaave baala ra

Ha ninnu choosi padipoya on the spot
Nannu nenu marchipoya on the spot

Ento emo edanu motham maayachesaave
Gundeloki gundu soodilaa goorchukunnaave
Naaku isthaava andaala naatho vasthaava kandaala
Nannu mithaayilaaga mingesi pora ra

Ha ninnu choosi padipoya on the spot
Nannu nenu marchipoya on the spot
Magic edo chesinattu on the spot
Nee maatalaku padipoya on the spot

Nannu em chesaavo inthakee
Adi artham kaade enthakee
Naa gunde patti laagi laagi champeysavu
Gilli gilli premincheselaa

One more time baby one more time baby
Malli malli cheppa maata one more time
One more time baby one more time baby
Malli malli cheppa maata one more time!',
  'A fun and lively romantic duet expressing love at first sight, where the lovers confess their irresistible feelings and urge each other to repeat their romantic words one more time.',
  ARRAY['Temper Songs', 'One More Time Lyrics', 'NTR Jr', 'Kajal Aggarwal', 'Anup Rubens', 'Kandikonda', 'Ranjith Govind', 'Lipsika'],
  43,
  true,
  'published'
),
(
  'temper-02-choolenge-aasma',
  'choolenge-aasma-temper',
  'Choolenge Aasma',
  'Temper',
  'Adnan Sami, Ramya Behara, Veena Ghantasala',
  'Viswa',
  'Anup Rubens',
  'Jr NTR, Kajal Aggarwal',
  2015,
  'Telugu',
  'https://raghavmv.wordpress.com/wp-content/uploads/2015/02/temper-movie-poster_142181589800.jpg',
  'https://www.youtube.com/watch?v=hLrqJTN7Gmo',
  'అయ్ లైలా లైలా లైలా లయ తప్పె గుండెలోనా
సరికొత్త పుంతలో పడ్డా లవ్ లోనా
ఆ నువ్వు పెదవి విప్పకున్నా నీ నవ్వు తెలిపి జానా
నా వలపు సీమకే ఆహ్వానిస్తున్నా...

తొలి చూపే ఎద నువ్వే తత్తుతర తత్తరబాటే
మనసేమో వశకాదే నీ బంధీనైపోయా

చూలేంగే ఆస్మా జానేమన్ జానేజా
కెహ్ రహ ప్యార్ కర్ ఏ సమా
చూలేంగే ఆస్మా జానేమన్ జానేజా
కెహ్ రహ ప్యార్ కర్ ఏ సమా

అవ్.. చెలి ప్రతిమని పికాసో లా ఎద పలకం నింపేశా
పరువానికి పట్టమే నేడిలా
అవ్.. తలమునకల తపస్సేల తమకిది మహా భరోసా
మనసిస్తే సాగన నీడలా

అయ్యయ్య చెలి వరమిచ్చే సెలవీరు తెగ నచ్చాలే నీ తీరు
మరి ఇందరు ఉన్నా నీ సరి రాలేరు

చూలేంగే ఆస్మా జానేమన్ జానేజా
కెహ్ రహ ప్యార్ కర్ ఏ సమా
మది గెలిచే దృశ్యమా ఎద లయలో లాస్యమో
మనసంతా నీకిలా ఆవశ్యమా

హూ చిటుకున దరి సమీపిస్తూ పెనవేయగా పిలిస్తే
అలజడులే రేగవ ఎదలో
అవ్.. తొలి తికమక తమయిస్తూ సుముఖతతో స్మరిస్తే
పరుగున జని చేరెనే జతలో

పద పద నెగ్గకు పరువాలు మొదలెట్టుకో మురిపాలు
కనికట్టు లేవో చూపే నీ బాడీ లో

తొలి చూపే ఎద నువ్వే తత్తుతర తత్తరబాటే
మనసేమో వశకాదే నీ బంధీనైపోయా
చూలేంగే ఆస్మా జానేమన్ జానేజా
కెహ్ రహ ప్యార్ కర్ ఏ సమా
మది గెలిచే దృశ్యమా ఎద లయలో లాస్యమో
మనసంతా నీకిలా ఆవశ్యమా...',
  'Ayy Laila Laila Laila laya thappe gundelona
Sarikotha punthalo paddaa love lona
Aa nuvvu pedavi vippakunnaa nee navvu thelipi jaanaa
Naa valapu seemake aahvaanisthunnaa...

Tholi choope yedha nuvve thatthuthara thattharabate
Manasemo vasakaade nee bandheenaipoyaa

Choolenge aasma jaaneman jaanejaa
Keh raha pyaar kar ye samaa
Choolenge aasma jaaneman jaanejaa
Keh raha pyaar kar ye samaa

Awe.. Cheli prathimani Picasso laa yedha palakam nimpesaa
Paruvaaniki pattame nedilaa
Awe.. Thalamunakala thapassela thamakidi mahaa bharosaa
Manasisthe saagana needalaa

Ayyayya cheli varamicche selaveeru thega nachaale nee theeru
Mari indaru unnaa nee sari raaleru

Choolenge aasma jaaneman jaanejaa
Keh raha pyaar kar ye samaa
Madhi geliche drushyamaa yedha layalo laasyamo
Manasanthaa neekilaa aavasyamaa

Hooo chitukuna dhari sameepisthoo penaveyagaa pilisthe
Alajadule regava yedhalo
Awe.. Tholi thikamaka thamayisthoo sumukhathatho smaristhe
Paruguna jani cherene jathalo

Pada pada neggaku paruvaalu modalettuko muripaalu
Kanikattulevo choope nee body lo

Tholi choope yedha nuvve thatthuthara thattharabate
Manasemo vasakaade nee bandheenaipoyaa
Choolenge aasma jaaneman jaanejaa
Keh raha pyaar kar ye samaa
Madhi geliche drushyamaa yedha layalo laasyamo
Manasanthaa neekilaa aavasyamaa...',
  'A breezy, stylish melody sung by Adnan Sami describing irresistible love, feeling on top of the world (touching the sky), and being totally captivated by beauty.',
  ARRAY['Choolenge Aasma Lyrics', 'Temper Songs', 'Adnan Sami', 'Jr NTR', 'Kajal Aggarwal', 'Anup Rubens', 'Viswa', 'Ramya Behara'],
  39,
  true,
  'published'
),
(
  'temper-03-title-track',
  'temper-title-song-temper',
  'Temper (Title Track)',
  'Temper',
  'Uma Neha, M. L. R. Karthikeyan, Bhargavi Pillai, Simha, Roll Rida',
  'Bhaskarabhatla',
  'Anup Rubens',
  'Jr NTR, Kajal Aggarwal',
  2015,
  'Telugu',
  'https://raghavmv.wordpress.com/wp-content/uploads/2015/02/temper-movie-poster_142181589800.jpg',
  'https://www.youtube.com/watch?v=Igj7daqD7bs',
  'టెంప్.. టెంప్.. టెంపర్.. టెంప్ టెంప్ టెంపర్..
టెంప్.. టెంప్.. టెంపర్.. టెంప్ టెంప్ టెంపర్..

He''s got the temper.. He''s got the pamper..
And the girls go crazy yo!

నే తాత టెంపర్.. నే అయ్య టెంపర్..
బాబాయ్ టెంపర్.. నువ్వింకా టెంపర్!
బ్లడ్ లోనే ఉన్నదమ్మో బెండ్‌ తీసే టెంపరే..
దమ్మున్నోడి ప్రతివోడికి ఉండాల్సింది టెంపరే..

హో ఎవడైనా గెలికాడో లేచిపోద్ది టెంపరే..
కంట్రోల్ తప్పిందంటే మాట వినదే టెంపరే..
ఓలమ్మి అమ్మి అమ్మి ఆమి తుమి టెంపర్ చూస్తావా..

సబ్ కో పటాలే.. సబ్ కో బచాలే.. నాచ్ నాచ్ నాచ్ నాచ్..
సబ్ కో పటాలే.. సబ్ కో బచాలే.. నాచ్ నాచ్ నాచ్ నాచ్..

నే తాత టెంపర్.. నే అయ్య టెంపర్..
బాబాయ్ టెంపర్.. నువ్వింకా టెంపర్!

తాకి చూస్తూ ఉంటే కండల్.. అందాల పాపికొండల్..
అరే వింటర్ లోను వేడెక్కిస్తాయే..
అట్టా మండుతుంటే ఎండల్.. ఒంపుల్లో నీళ్ల కుండల్..
గొంతుండే దాహం పుట్టిస్తున్నాయే హేయ్..

నీ మాటల్ టెంపర్.. చూపులు టెంపర్..
చేతలు టెంపర్.. ఓయ్ ఒరబ్బా..
నీచే టెంపర్.. ఉపేర్ టెంపర్..
టోటల్ టెంపర్.. ఓయ్..
టెంపరేచర్ నే పెంచేసినావే..

సబ్ కో పటాలే.. సబ్ కో బచాలే.. నాచ్ నాచ్ నాచ్ నాచ్..
సబ్ కో పటాలే.. సబ్ కో బచాలే.. నాచ్ నాచ్ నాచ్ నాచ్..

ఆగలేను గంటల్.. పరువాల పాడిపంటల్..
నిఖారంగా నీకే ఇచ్చేసుకుంటలే..
అట్టా రేపుతుంటే మంటల్.. ఎక్కుద్దే నాకు మెంటల్..
నువ్వివ్వకపోతే లాగేసుకుంటలే..

నీ ఇంటా టెంపర్.. బైటా టెంపర్..
అంతా టెంపర్.. ఓయ్ ఒరబ్బా..
ఆగే టెంపర్.. పీచే టెంపర్..
పూరా టెంపర్.. ఓయ్..
టెంప్ట్ చేస్తూ ఉంటే ఆగేదేలాగే..

సబ్ కో పటాలే.. సబ్ కో బచాలే.. నాచ్ నాచ్ నాచ్ నాచ్..
సబ్ కో పటాలే.. సబ్ కో బచాలే.. నాచ్ నాచ్ నాచ్ నాచ్..

నే తాత టెంపర్.. నే అయ్య టెంపర్..
బాబాయ్ టెంపర్.. నువ్వింకా టెంపర్!',
  'Temp.. Temp.. Temper.. Temp temp temper..
Temp.. Temp.. Temper.. Temp temp temper..

He''s got the temper.. He''s got the pamper..
And the girls go crazy yo!

Ne thaatha temper.. Ne ayya temper..
Baabaai temper.. Nuvvinkaa temper!
Blood lone unnadhammo bend-u theese tempare..
Dammunnodi prathivodiki undaalsindi tempare..

Ho evadainaa gelikaado lechipoddhi tempare..
Control thappindante maata vinadhe tempare..
Olammi ammi ammi aami thumi temper choosthaavaa..

Sab ko pataale.. Sab ko bachaale.. Naach naach naach naach..
Sab ko pataale.. Sab ko bachaale.. Naach naach naach naach..

Ne thaatha temper.. Ne ayya temper..
Baabaai temper.. Nuvvinkaa temper!

Thaaki choosthoo unte kandal.. Andaala paapikondal..
Are winter lonu vedekkistaaye..
Attaa manduthunte endal.. Ompullo neella kundal..
Gonthunde daaham puttistthunnaaye hey..

Nee maatal temper.. Choopulu temper..
Chethalu temper.. Oy orabba..
Neeche temper.. Uper temper..
Total temper.. Oy..
Temperature ne penchesinaave..

Sab ko pataale.. Sab ko bachaale.. Naach naach naach naach..
Sab ko pataale.. Sab ko bachaale.. Naach naach naach naach..

Aagalenu gantal.. Paruvaala paadipantal..
Nikhaaranga neeke icchesukuntale..
Attaa reputhunte mantal.. Ekkuddhe naaku mental..
Nuvvivvakapothe laagesukuntale..

Nee intaa temper.. Baita temper..
Anthaa temper.. Oy orabba..
Aage temper.. Peeche temper..
Pooraa temper.. Oy..
Tempt chesthoo unte aagedhelaage..

Sab ko pataale.. Sab ko bachaale.. Naach naach naach naach..
Sab ko pataale.. Sab ko bachaale.. Naach naach naach naach..

Ne thaatha temper.. Ne ayya temper..
Baabaai temper.. Nuvvinkaa temper!',
  'The high-voltage title anthem celebrating raw power, swagger, fearless attitude, and unapologetic anger of the cop protagonist Daya.',
  ARRAY['Temper Title Song', 'Temper Songs', 'Jr NTR', 'Anup Rubens', 'Bhaskarabhatla', 'Roll Rida', 'Uma Neha', 'Mass Song'],
  55,
  true,
  'published'
),
(
  'temper-04-devudaa',
  'devudaa-temper',
  'Devudaa',
  'Temper',
  'Puri Jagannadh, Anup Rubens',
  'Bhaskarabhatla',
  'Anup Rubens',
  'Jr NTR, Kajal Aggarwal',
  2015,
  'Telugu',
  'https://raghavmv.wordpress.com/wp-content/uploads/2015/02/temper-movie-poster_142181589800.jpg',
  'https://www.youtube.com/watch?v=yWWQ49XEyyM',
  'దేవుడా దేవుడా దేవుడా దేవుడా...
దేవుడా దేవుడా దేవుడా...

హే భగవాన్ నే పనికిమాలిన ఎదవా
హే భగవాన్ నే చెయ్యని తప్పు లేదే భగవాన్
ఓ చెయ్యి జారిపోయింది మంటగలిసిపోయింది ఈ నా జీవితం దేవుడా
హో ఇంకోసారి ఇవ్వవా నా జీవితాన్ని నాకివ్వవా
రిపేరు రిపేరు కర్ లూంగా...
రిపేరు రిపేరు కర్ లూంగా...

ఓ దేవుడా ఓ దేవుడా దేవుడా...
ఓ దేవుడా ఓ దేవుడా...

నే తప్పు చేస్తే తిట్టేటోడు బెల్టు పట్టి అడిగేటోడు
ముందు యెనక లేదే ఎవడు దేవుడా
ఏ దిక్కులేని వాళ్ళకి దేవుడా నువ్వు పెద్ద దిక్కు కదరా దేవుడా
నే అడ్డదారి తొక్కుతుంటే పీకోదా నన్ను దేవుడా
దేవుడా దేవుడా దేవుడా...

రిపేరు రిపేరు కర్ లూంగా...
రిపేరు రిపేరు కర్ లూంగా...
ఓహ్ దేవుడా ఓహ్ దేవుడా

దేవ దేవ దేవా దేవా దేవ దేవ ఓహ్ దేవుడా ఓ దేవ దేవ...

ఒక్క తప్పు జరిగితే ఏమవుతాదో ఎన్ని బతుకులు బుగ్గవుతాయో
నీకు తప్ప ఇంకెవడికి తెలుసురా దేవుడా
మేం దేవుళ్ళం కాదు కదా దేవుడా మేం బుర్ర తక్కువ వాళ్ళం దేవుడా
నువ్వు చూసి కూడా ఆపకుంటే తిట్టొద్ద నిన్ను దేవుడా
దేవుడా దేవుడా దేవుడా దేవుడా

రిపేరు రిపేరు కర్ లూంగా...
రిపేరు రిపేరు కర్ లూంగా...
ఓహ్ దేవుడా ఓహ్ దేవుడా
ఓహ్ దేవుడా ఓహ్ దేవుడా',
  'Devudaa devudaa devudaa devudaa...
Devudaa devudaa devudaa...

Hey bhagawaan ne panikimaalina yedavaa
Hey bhagawaan ne cheyyani thappu lede bhagawaan
O cheyyi jaaripoyindi mantagalisipoyindi ee naa jeevitham devudaa
Ho inkosaari ivvavaa naa jeevithaanni naakivvavaa
Repair repair kar loonga...
Repair repair kar loonga...

O devudaa o devudaa devudaa...
O devudaa o devudaa...

Ne thappu chesthe thittetodu belt-u patti adigetodu
Mundu yenaka lede evadu devudaa
E dikkuleeni vaallaki devudaa nuvvu pedda dikku kadaraa devudaa
Ne addadaari thokkutunte peekodaa nannu devudaa
Devudaa devudaa devudaa...

Repair repair kar loonga...
Repair repair kar loonga...
Oh devudaa oh devudaa

Deva deva devaa devaa deva deva oh devudaa o deva deva...

Okka thappu jarigithe emauthaado enni bathukulu buggavuthaayo
Neeku thappa inkevadiki thelusuraa devudaa
Mem devullam kaadu kadaa devudaa mem burra thakkuva vaallam devudaa
Nuvvu choosi koodaa aapakunte thittoddhaa ninnu devudaa
Devudaa devudaa devudaa devudaa

Repair repair kar loonga...
Repair repair kar loonga...
Oh devudaa oh devudaa
Oh devudaa oh devudaa',
  'A poignant, philosophical dialogue with God sung uniquely by director Puri Jagannadh, where a flawed man laments his past sins and pleads for one chance to repair his life.',
  ARRAY['Devudaa Song Lyrics', 'Temper Songs', 'Puri Jagannadh', 'Anup Rubens', 'Bhaskarabhatla', 'Jr NTR', 'Telugu Song Lyrics', 'Emotional'],
  49,
  true,
  'published'
),
(
  'temper-05-ittage-recchipodham',
  'ittage-recchipodham-temper',
  'Ittage Recchipodham',
  'Temper',
  'Geetha Madhuri, Dhanunjay, Anudeep Dev, Arun',
  'Bhaskarabhatla',
  'Anup Rubens',
  'Jr NTR, Nora Fatehi, Kajal Aggarwal',
  2015,
  'Telugu',
  'https://raghavmv.wordpress.com/wp-content/uploads/2015/02/temper-movie-poster_142181589800.jpg',
  'https://www.youtube.com/watch?v=kqDGjOs0ajk',
  'Boys this is an item song!

నేల బెంచ్ మాస్ కి బాల్కనీ లో క్లాస్ కి 
ఐటెం సాంగ్ ఏ వచ్చిందంటే డాన్స్ డాన్స్ డాన్స్ డాన్స్
హీరో గారి పక్కన ఆడే ఐటెం పాప కి 
చెప్పాలంటే చానా మందే ఫాన్స్ ఫాన్స్ ఫాన్స్ ఫాన్స్
అరెయ్ సిటీలు కొడతారే గాల్లో పేపర్లు జల్లుతారే 
పూనకాలు వచ్చినట్టు పోరా గాళ్ళు ఊగిపోరా ఐటెం సాంగ్ అంటే!

హొయ్ ఇట్టాగే రెచ్చిపోదాం పిల్ల ఇట్టాగే రెచ్చిపోదాం 
ఇట్టాగే రెచ్చిపోదాం పిల్ల రోజంతా రెచ్చిపోదాం

ఆ చుమ్మా చుమ్మా అరేయ్ చుమ్మా 
హో చుమ్మా చుమ్మా లేలే చుమ్మా 
హో తమ తమ తమ తంతం తన 
హో ఆ లింగ లింగ లింగ్ ఆ లింగ లింగ లింగ్

యా ఇప్పటికింకా అంటే అరెయ్ గుటకలు మింగేస్తారే 
లే లే రాజా అంటే లుంగీలే ఎగ్గెడతారే 
రింగ రింగ అంటే హాల్ అందుర్సే 
పూవై పూవై ఫుల్ విసిల్స్య్ ఏ
ఒంపు సొంపు లేని బొమ్మ నీరు లేని చేప లెక్క గిల గిల కొట్టుకుంటాదే
అరెయ్ ఇట్టాగే అరేయ్ ఇట్టాగే 
హాయ్ ఇట్టాగే రెచ్చిపోనా హోయ్...

ఇట్టాగే రెచ్చిపోదాం పిల్ల ఇట్టాగే రెచ్చిపోదాం 
ఇట్టాగే రెచ్చిపోదాం పిల్ల రోజంతా రెచ్చిపోదాం

యా జయమాలిని జ్యోతిలక్ష్మి అనురాధ డిస్కో శాంతి 
సిల్క్ ముమైత్ ఖాన్ సరి కొత్తగా సన్నీ లియోన్ 
పొట్టి పొట్టి బట్టలే కట్టుకొస్తే 
కత్తి లాంటి ఫిగర్ స్టెప్ వేస్తే 
కుర్రకారు గుండె జల్లు ఆల్ షోస్ హౌస్ ఫుల్ 
జంక్షన్ లో పెద్ద జాతరే!

అరెయ్ ఇట్టాగే అరేయ్ ఇట్టాగే 
హాయ్ ఇట్టాగే రెచ్చిపోనా హోయ్...
ఇట్టాగే రెచ్చిపోదాం పిల్ల ఇట్టాగే రెచ్చిపోదాం 
ఇట్టాగే రెచ్చిపోదాం పిల్ల రోజంతా రెచ్చిపోదాం',
  'Boys this is an item song!

Nela bench mass ki balcony lo class ki 
Item song-e vacchindante dance dance dance dance
Hero gaari pakkana aade item paapa ki 
Cheppaalante chaanaa mandhe fans fans fans fans
Arey seeteelu kodathaare gaallo paper-lu jalluthaare 
Poonakaalu vacchinattu poragaallu oogiporaa item song ante!

Hoy ittaage recchipodhaam pilla ittaage recchipodhaam 
Ittaage recchipodhaam pilla rojanthaa recchipodhaam

Aa chumma chumma arey chumma 
Ho chumma chumma lele chumma 
Ho thama thama thama thamtham thana 
Ho aa linga linga ling aa linga linga ling

Yaa ippatikinkaa ante arey gutakalu mingesthaare 
Le le raajaa ante lungilee eggedathaare 
Ringa ringa ante hall andurse 
Poovai poovai full whistles-e
Ompu sompu leni bomma neeru leni chepa lekka gila gila kottukuntaadhe
Arey ittaage arey ittaage 
Haai ittaage recchiponaa hoy...

Ittaage recchipodhaam pilla ittaage recchipodhaam 
Ittaage recchipodhaam pilla rojanthaa recchipodhaam

Yaa Jayamalini Jyothilakshmi Anuradha Disco Shanti 
Silk Mumaith Khan sari kothagaa Sunny Leone 
Potti potti battale kattukosthe 
Katthi laanti figure step vesthe 
Kurrakaaru gunde jallu all shows house full 
Junction lo pedda jaathare!

Arey ittaage arey ittaage 
Haai ittaage recchiponaa hoy...
Ittaage recchipodhaam pilla ittaage recchipodhaam 
Ittaage recchipodhaam pilla rojanthaa recchipodhaam',
  'A blockbuster mass item dance number featuring Nora Fatehi and Jr NTR celebrating the unmatched craze, whistle-blowing and paper-tossing energy of theatrical mass songs in Telugu cinema.',
  ARRAY['Ittage Recchipodham Lyrics', 'Temper Songs', 'Geetha Madhuri', 'Dhanunjay', 'Jr NTR', 'Nora Fatehi', 'Anup Rubens'],
  67,
  true,
  'published'
),
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
  'నీ కాళ్ళని పట్టుకు వదలనన్నవి చూడే నా కళ్ళు
ఆ చూపులనల్లా తొక్కుకు వెళ్లకు దయలేదా అసలు
నీ కళ్ళకి కావలి కాస్తాయే కాటుకలా నా కలలు
నువ్వు నులుముతుంటే ఎర్రగ కంది చిందేనే సెగలు

నా ఊపిరి గాలికి ఉయ్యాలలూగుతూ ఉంటే ముంగురులు
నువ్వు నెట్టేస్తే ఎలా నిట్టూర్చవటే నిష్టూరపు విలవిలలు

సామజవరగమనా.. నిను చూసి ఆగగలనా
మనసు మీద వయసుకున్న అదుపు చెప్పతగునా
సామజవరగమనా.. నిను చూసి ఆగగలనా
మనసు మీద వయసుకున్న అదుపు చెప్పతగునా

నీ కాళ్ళని పట్టుకు వదలనన్నవి చూడే నా కళ్ళు
ఆ చూపులనల్లా తొక్కుకు వెళ్లకు దయలేదా అసలు

మల్లెల మాసమా.. మంజుల హాసమా
ప్రతి మలుపులోన ఎదురుపడిన వన్నెల వనమా
విరిసిన పించమా.. విరుల ప్రపంచమా
ఎన్నెన్ని వన్నెచిన్నెలంటే ఎన్నగ వశమా

అరె'' నా గాలే తగిలినా.. నా నీడే తరిమినా
ఉలకవా పలకవా భామా..
ఎంతో బతిమాలినా.. ఇంతేనా అంగనా
మదిని మీటు మధురమైన మనవిని వినుమా

సామజవరగమనా.. నిను చూసి ఆగగలనా
మనసు మీద వయసుకున్న అదుపు చెప్పతగునా

నీ కాళ్ళని పట్టుకు వదలనన్నవి చూడే నా కళ్ళు
ఆ చూపులనల్లా తొక్కుకు వెళ్లకు దయలేదా అసలు',
  'Nee kaallani pattuku vadalanannavi choode naa kallu
Aa choopulanallaa thokkuku vellaku dayaledhaa asalu
Nee kallaki kaavali kaasthaaye kaatukalaa naa kalalu
Nuvvu nulumuthunte erraga kandi chindhene segalu

Naa oopiri gaaliki uyyaalaluguthoo unte mungurulu
Nuvvu netthesthe elaa nittoorchavate nishtoorapu vilavilalu

Samajavaragamana.. Ninu choosi aagagalanaa
Manasu meedha vayasukunna adupu cheppathagunaa
Samajavaragamana.. Ninu choosi aagagalanaa
Manasu meedha vayasukunna adupu cheppathagunaa

Nee kaallani pattuku vadalanannavi choode naa kallu
Aa choopulanallaa thokkuku vellaku dayaledhaa asalu

Mallela maasamaa.. Manjula haasamaa
Prathi malupulona edhurupadina vannela vanamaa
Virisina pinchamaa.. Virula prapanchamaa
Ennenni vannechinnelante ennaga vasamaa

Are'' naa gaale thagilinaa.. Naa neede thariminaa
Ulakavaa palakavaa bhaamaa..
Entho bathimaalinaa.. Inthenaa anganaa
Madhini meetu madhuramaina manavini vinumaa

Samajavaragamana.. Ninu choosi aagagalanaa
Manasu meedha vayasukunna adupu cheppathagunaa

Nee kaallani pattuku vadalanannavi choode naa kallu
Aa choopulanallaa thokkuku vellaku dayaledhaa asalu',
  'Samajavaragamana is Sirivennela''s poetic masterpiece celebrating the divine charm and mesmerizing grace of a woman''s footsteps, comparing her beauty to classical divine music.',
  ARRAY['Samajavaragamana Lyrics', 'Ala Vaikunthapurramuloo Songs', 'Sid Sriram', 'Thaman S', 'Allu Arjun', 'Pooja Hegde', 'Sirivennela', 'Telugu Melody'],
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
  'ఇంతకన్నా మంచి పోలికేది నాకు తట్టలేదు గాని అమ్ము
ఈ లవ్ అనేది బబుల్-ఉ గమ్-మ్మో అంటుకున్నదంటే పోదు నమ్మో
ముందు నుంచి అందరన్న మాటే గాని మళ్ళీ అంటన్నానే అమ్ము
ఇది చెప్పకుండా వచ్చే తుమ్మో ప్రేమనాపలేవు నన్ను నమ్మో

ఎట్టాగ నాయీ ఎదురు చూపుకి తగినట్టుగా నువ్వు బదులు చెబితివే
అరేయ్ దేవుడా ఇదేందనెలెంత లోపటె పిల్లడాట దెగ్గరయి నిన్ను చేరదీస్తివే

బుట్టబొమ్మ బుట్టబొమ్మ నన్ను సుట్టుకుంటివే 
జిందగీకెయ్ అట్టబొమ్మై జంట కట్టుకుంటివే
బుట్టబొమ్మ బుట్టబొమ్మ నన్ను సుట్టుకుంటివే 
జిందగీకెయ్ అట్టబొమ్మై జంట కట్టుకుంటివే

మల్టీప్లెక్స్ లోని ఆడియన్స్ లాగ మౌనంగున్న గాని అమ్ము
లోన దండనక జరిగిందే నమ్మో దిమ్మ దిరిగినదే మైండ్ సిమ్-మ్మో
రాజుల కాలం కాదు రథము గుర్రం లేవూ
అద్దం ముందర నాతో నేనే యుద్ధం చేస్తానంటే
గాజుల చేతులు జాపి దెగ్గరకొచ్చింది నువ్వు
చెంపల్లో చిటికేసి చక్కరవద్ధిని చేసావే

చిన్నగా చినుకు తుంపరడిగితేయ్ కుండపోతగా తుఫాను తెస్తివే
మాటగా ఓ మల్లెపువ్వునడిగితేయ్ మూటగా పూల తోటగా పైనొచ్చి పడితివే

బుట్టబొమ్మ బుట్టబొమ్మ నన్ను సుట్టుకుంటివే 
జిందగీకెయ్ అట్టబొమ్మై జంట కట్టుకుంటివే
వేలి నిండా నన్ను తీసి బొట్టు పెట్టుకుంటివే 
కాళ్ళ కిందికి పువ్వు నేను నెత్తినెట్టుకుంటివే!',
  'Inthakanna manchi polikedi naaku thattaleedu gaani Ammu
Ee love anedhi bubble-u gum-mmo antukunnadhante podhu nammo
Mundhu nunchi andharanna maate gaani malli antannaane Ammu
Idi cheppakundaa vacche thummo premanaapalevu nannu nammo

Etthaaga naayee edhuru choopuki thaginattugaa nuvvu badhulu chebithive
Arey devudaa idhendhanelentha lopate pilladaata deggharayi ninnu cheradheesthive

Butta bomma butta bomma nannu suttukuntive
Zindagi key atta bommai janta kattukuntive
Butta bomma butta bomma nannu suttukuntive
Zindagi key atta bommai janta kattukuntive

Multiplex loni audience laaga maunamgunna gaani Ammu
Lona dandanaka jarigindhe nammo dimma thiriginadhe mind sim-mmo
Raajula kaalam kaadu rathamu gurram levu
Addham mundhara naatho nene yuddham chesthaanante
Gaajula chethulu jaapi deggharakocchindhi nuvvu
Chempallo chitikesi chakkaravaddhini chesaave

Chinnagaa chinuku thumparadigithey kundapothagaa thuphaanu thesthive
Maatagaa o mallepuwunadigithey mootagaa poola thotagaa painocchi padithive

Butta bomma butta bomma nannu suttukuntive
Zindagi key atta bommai janta kattukuntive
Veli nindaa nannu theesi bottu pettukuntive
Kaalla kindhiki puvvu nenu netthinettukuntive!',
  'An infectious, joyful romantic dance anthem comparing modern romance to bubblegum, celebrating the hero''s adoration for his darling doll-like lover.',
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
  'బంటు గానికి ట్వంటీ టూ.. బస్తీల మస్తు కట్-ఔటూ
బచ్చగాండ్ల బ్యాచ్ ఉండేది వొచ్చినమంటే సూట్టు
కిక్కే సాలక ఓ నైట్ ఉ ఎక్కి దోక్కు బుల్లెట్టు
సందు సందుల మందు కోసం ఎత్తుకుతాంటే రూటూ

సిల్కు శీర కట్టుకొని చిల్డ్ బీరు మెరిసినట్టు
పొట్లం కట్టిన బిర్యానీకి బొట్టు బిళ్ళ వెట్టినట్టు
బంగ్లా మీద నిలుసోనున్దిరో ఓ సందమామ 
సుక్క దాగాక షక్కరొచెరో ఎం అందం మామ 
జింక లెక్క దూకుతుంటేరో ఆ సందమావ 
జుంకీ జారీ చిక్కుకుందిరో నా దిలుకు మావ

రాములో రాములా నన్ను ఆగం చేసిందిరో
రాములో రాములా నా పాణం తీసిందిరో
రాములో రాములా నన్ను ఆగం చేసిందిరో
రాములో రాములా నా పాణం తీసిందిరో!

ఏయ్ తమ్మలపాకె ఎస్తుంటే కమ్మగా వాసన వొస్తావే
ఎర్రగా పండిన బుగ్గలు రెండు యాదియికొస్తాయే
అరేయ్ పువ్వుల అంగీ ఎస్తుంటే గుండీ నువ్వై పూస్తావే
పండూకున్న గుండెల దూరి లొల్లే చేస్తావే

అరేయ్ ఇంటి ముందు లైటు మిళుకు మిళుకు మంటుంటే
నువ్వు కన్ను కొట్టినట్టు సిగ్గు పుట్టిందే
సీరకొంగు తలుపు సాటు సిక్కుకుంటే
ఏహేయ్ నువ్వు లాగినట్టు వొళ్ళు జల్లుమంటాందే

నాగస్వరం ఊదుతుంటే నాగుపాము ఊగినట్టు
ఏంటబడి వస్తున్న నీ పట్టగొలుసు సప్పూడింటు
పట్టనట్టే తిరుగుతున్నవే.. 
ఓ సందామావ పక్కకు పోయి తొంగిజూస్తవె ఎం టెక్కురా మావ!

రాములో రాములా నన్ను ఆగం చేసిందిరో
రాములో రాములా నా పాణం తీసిందిరో!',
  'Bantu gaaniki twenty two.. Basteela masthu cut-out-u
Bacchagaandla batch undedhi vocchinamante soottu
Kikke saalaka o night-u ekki dhokku bullet-u
Sandhu sandhula mandhu kosam ethukuthaante root-u

Silku sheera kattukoni chilled beer-u merisinattu
Potlam kattina biryani ki bottu billa vettinattu
Bangla meedha nilusonundhiro o sandhamaama
Sukka dhaagaka shakkarocchero em andham maama
Jinka lekka dookuthuntero aa sandhamaava
Jumkee jaaree chikkukundhiro naa diluku maava

Ramuloo ramulaa nannu aagam chesindhiro
Ramuloo ramulaa naa paanam theesindhiro
Ramuloo ramulaa nannu aagam chesindhiro
Ramuloo ramulaa naa paanam theesindhiro!

Ey thammalapaake esthunte kammagaa vaasana vosthaave
Erragaa pandina buggalu rendu yaadhiyikosthaaye
Arey puvvula angee esthunte gundee nuwvai poosthaave
Pandukunna gundela dhoori lolle chesthaave

Arey inti mundhu light-u miluku miluku mantunte
Nuvvu kannu kottinattu siggu puttindhe
Seerakongu thalupu saatu sikkukunte
Ehēy nuvvu laaginattu vollu jallumantaandhe

Naagaswaram oodhuthunte naagupaamu ooginattu
Entabadi vasthunna nee pattagolusu sappoodintu
Pattanatte thiruguthunnave..
O sandhaamaava pakkaku poyi thongijoosthave em tekkuraa maava!

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
  'ల ల ల లా ల ల ల ల ల లా 
ల ల ల ల లా ల ల ల ల ల

నా స్టోరీ చెప్పలేను నా బాధకంతు లేదు 
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

అడివేమో బాక్యార్డ్ లో పెట్టలేవు మచ్చ 
పావురాన్ని పేపర్ వెయిట్ చెయ్యలేవు పిచ్చ 
వాల్కెనోతో చలి మంటే వెయ్యలేవు చిచ్చ 
బ్లాంక్ ఛెక్కే రా మనం చెప్పి మరి వచ్చా

He Isn''t Always Right! Spy Daddy Spy Daddy
He Isn''t Always Right! Spy Daddy Spy Daddy

సన్ ఆఫ్ వాల్మీకి అంటే కేర్ ఆఫ్ కష్టాలున్నట్టే 
ఈ ఇంట్లో నవ్వాలంటే థానోస్ చిటికెయ్యాలంతే!
ఓహ్ ఓహ్ ఓహ్ మమ్మీ మొగుడు 
ఓహ్ ఓహ్ ఓహ్ డమ్మీ గాడు

Oh My GOD Daddy Just Stop Being My Baddy
Oh My GOD Daddy Just Stop Being My Baddy
Oh My GOD Daddy Just Stop Being My Baddy
Don''t Be So Hardy That Will Make Me Saddy!',
  'La la la laa la la la la la laa
La la la la laa la la la la la

Naa story cheppalenu naa baadhakanthu ledu
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

Adivanemo backyard lo pettalevu maccha
Paavuraanni paper weight cheyyalevu piccha
Volcano tho chali mante veyyalevu chiccha
Blank cheque-e raa manam cheppi mari vacchaa

He Isn''t Always Right! Spy Daddy Spy Daddy
He Isn''t Always Right! Spy Daddy Spy Daddy

Son of Valmiki ante care of kashtaalunnatte
Ee intlo navvaalante Thanos chitikeyyaalanthe!
Oh oh oh mummy mogudu
Oh oh oh dummy gaadu

Oh My GOD Daddy Just Stop Being My Baddy
Oh My GOD Daddy Just Stop Being My Baddy
Oh My GOD Daddy Just Stop Being My Baddy
Don''t Be So Hardy That Will Make Me Saddy!',
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
అడుగడుగు వేసినాడ అద్రేను అవతలొడు!

సిత్తరాల సిరపడు.. సిత్తరాల సిరపడు
ఉత్తరాన ఊరి సివర.. సిత్తరాల సిరపడూ
గందుపిల్లి సూపులతో గుండెలోన గుచ్చాడు..
సక్కనమ్మ వెనకబడ్డ పోకిరోళ్ల ఇరగదీసి..
సక్కనమ్మ కళ్లల్లో ఏల ఏల సుక్కలొచ్చే!',
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
Adugadugu vesinaada adrenu avathalodu!

Sittharala sirapadu.. Sittharala sirapadu
Uttharaana oori sivara.. Sittharala sirapadoo
Gandupilli soopulatho gundelona gucchaadu..
Sakkanamma venakabadda pokirolla iragadeesi..
Sakkanamma kallallo ela ela sukkalocche!',
  'A high-spirited North Andhra rustic folk ballad sung in Srikakulam dialect that celebrates the invincible heroism, unmatched physical strength, and unyielding will of the hero.',
  ARRAY['Sittharala Sirapadu Lyrics', 'Ala Vaikunthapurramuloo', 'Thaman S', 'Sooranna', 'Saketh', 'Allu Arjun', 'Folk Song'],
  110,
  true,
  'published'
);
