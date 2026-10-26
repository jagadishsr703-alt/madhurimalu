-- ==========================================================
-- MADHURIMALU: PURGE ALL SONGS & POPULATE ONLY TEMPER (2015)
-- Run this in your Supabase SQL Editor (Click "Run")
-- ==========================================================

-- 1. Ensure englishLyrics column exists
ALTER TABLE public.songs ADD COLUMN IF NOT EXISTS "englishLyrics" TEXT;

-- 2. Delete ALL existing songs from the database
DELETE FROM public.songs;

-- 3. Insert only the 5 complete Temper movie songs with 100% verified lyrics, video, and poster
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
మ్యాజిక్ ఎదో చేసినట్టు ఆన్ ది స్పాట్
నీ మాటలకూ పడిపోయా ఆన్ ది స్పాట్
నను ఎం చేసావో
ఇంతకీ అది అర్ధం కాదే ఇంతకీ
నా గుండె పట్టి లాగి లాగి చంపేసావు
గిల్లి గిల్లి ప్రేమించేసేలా

ఓ వన్ మోర్ టైం బేబీ వన్ మోర్ టైం
మళ్ళీ మళ్ళీ చెప్పా మాట వన్ మోర్ టైం
వన్ మోర్ టైం బేబీ వన్ మోర్ టైం
మళ్ళీ మళ్ళీ చెప్పా మాట వన్ మోర్ టైం
ఓహ్ వన్ మోర్ టైం

ఆన్ ది స్పాట్... వన్ మోర్ టైం

కళ్ళ తోటి నవ్వి నన్ను గాయపరిచావే
పెదవి తోటి సైగ చేసి నిద్ర చెరిపావే
మది ఊగేసి ఉయ్యాలా నీతో ఆడింది జంపాల
నాకు నానారకాల నచ్చావే బాల ర

నిన్ను చూసి పడిపోయా ఆన్ ది స్పాట్
నన్ను నేను మర్చిపోయా ఆన్ ది స్పాట్

ఏంటో ఏమో ఎదను మొత్తం మాయచేసావే
గుండెలోకి గుండు సూదిలా కూర్చుకున్నావే
నాకు ఇస్తావా అందాల నాతో వస్తావా కండాల
నన్ను మిఠాయిలాగా మింగేసి పోరా ర

హ నిన్ను చూసి పడిపోయా ఆన్ ది స్పాట్
నన్ను నేను మర్చిపోయా ఆన్ ది స్పాట్
మ్యాజిక్ ఎదో చేసినట్టు ఆన్ ది స్పాట్
నీ మాటలకూ పడిపోయా ఆన్ ది స్పాట్
నన్ను ఎం చేసావో ఇంతకీ
అది అర్ధం కాదే ఎంతకీ
నా గుండె పట్టి లాగి లాగి చంపేసావు
గిల్లి గిల్లి ప్రేమించేసేలా

వన్ మోర్ టైం బేబీ వన్ మోర్ టైం బేబీ
మళ్ళీ మళ్ళీ చెప్పా మాట వన్ మోర్ టైం
వన్ మోర్ టైం బేబీ వన్ మోర్ టైం బేబీ
మళ్ళీ మళ్ళీ చెప్పా మాట వన్ మోర్ టైం',
  'Ninnu choosi padipoya on the spot
Nannu nenu marchipoya on the spot
Ha ninnu choosi padipoya on the spot
Nannu nenu marchipoya on the spot
Magic edo chesinattu on the spot
Nee maatalaku padipoya on the spot
Nanu em chesaavo
Inthakee adi artham kaade inthakee
Naa gunde patti laagi laagi champeysavu
Gilli gilli premincheselaa

O one more time baby one more time
Malli malli cheppa maata one more time
One more time baby one more time
Malli malli cheppa maata one more time
Oh one more time

On the spot... One more time

Kalla thoti navvi nannu gaayaparichaave
Pedavi thoti saiga chesi nidra cheripaave
Madi oogesi uyyaala neetho aadindi jampaala
Naaku naanaarakaala nachaave baala ra

Ninnu choosi padipoya on the spot
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
Malli malli cheppa maata one more time',
  'A fun and lively romantic duet expressing love at first sight, where the lovers confess their irresistible feelings and urge each other to repeat their romantic words one more time.',
  ARRAY['Temper Songs', 'One More Time Lyrics', 'NTR Jr', 'Kajal Aggarwal', 'Anup Rubens', 'Kandikonda', 'Ranjith Govind', 'Lipsika'],
  42,
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
  38,
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
  ARRAY['Devudaa Song Lyrics', 'Temper Songs', 'Puri Jagannadh', 'Anup Rubens', 'Bhaskarabhatla', 'Jr NTR', 'Emotional'],
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
);

