;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    37: function (t, e, i) {
      t.exports = i(54)
    },
    54: function (t, e, i) {
      'use strict'
      i.r(e)
      var o = i(0),
        a = i(18),
        r = i(5),
        s = i(14),
        n = i(29),
        h = i(2),
        l = i(10),
        c = i.n(l),
        p = i(17),
        m = i(30),
        d = i(31),
        g = i(32),
        u = i(23)
      const w = (t) => t.filter((t, e, i) => i.indexOf(t) === e),
        f = [
          ['abolition', 'police', 'prison', 'cop', 'policing', 'jail'],
          ['anarchist', 'anarchism', 'anarchy'],
          ['british', 'english', 'britain', 'england', 'uk'],
          ['castro', 'fidel', 'cuba', 'che'],
          ['china', 'prc', 'deng', 'xiaoping', 'ccp', 'cpc'],
          ['covid', 'covid19', 'covid-19', 'coronavirus'],
          ['debunked', 'debunk', 'debunking', 'myth', 'lie'],
          ['deng', 'xiaoping'],
          ['glossary', 'definition', 'dictionary'],
          ['health', 'healthcare', 'health care'],
          ['hk', 'hongkong', 'hong-kong', 'hong kong'],
          ['imperialism', 'anti-imperialism', 'decolonization', 'colonization'],
          ['israel', 'palestine'],
          ['latin', 'latam'],
          ['library', 'libraries'],
          ['list', 'collection'],
          ['mao', 'zedong', 'tsetung'],
          [
            'ml',
            'marxist-leninist',
            'leninist',
            'stalinist',
            'marxist leninist',
            'leninism',
            'stalinism',
            'marxism-leninism',
            'marxism leninism',
          ],
          ['mlm', 'maoist', 'mao', 'maoism'],
          ['news', 'periodical', 'media', 'msm'],
          ['north-korea', 'dprk', 'korea', 'juche'],
          ['soviet-union', 'ussr', 'soviet'],
          ['sw', 'sex-work', 'sex work'],
          ['trostky', 'trot', 'troskyite', 'troskyism'],
          ['usa', 'us', 'america', 'united states', 'united-states'],
          ['uyghur', 'uighur', 'xinjiang'],
          ['xi', 'jinping'],
          ['zapatista', 'ezln'],
        ],
        b = (t) => {
          const e = ((t) => w(t.flatMap((t) => [u.plural(t), u.singular(t)])))(
              t
            ),
            i = f.filter((t) => t.find((t) => e.includes(t))).flat()
          return w([...e, ...i])
        }
      const y = m(new d('marxist.space'))
      y.defaults({
        resources: [
          {
            href: 'https://marxists.org',
            title: 'Marxists.org',
            tags: ['library'],
          },
          {
            href: 'https://monthlyreview.org/2009/05/01/why-socialism/',
            title: 'Why Socialism?',
            tags: ['beginner'],
          },
          {
            href: 'https://www.youtube.com/channel/UCOzQqWFt3BWJ0ToEyPgmZqg',
            title: 'Phuong DPRK Daily',
            tags: ['youtube', 'dprk'],
          },
          {
            href: 'https://communism.lemmy.ml',
            title: 'Communism on Lemmy.ml',
            description: 'FOSS Reddit-alike primarily for Communists',
            tags: ['social', 'reddit'],
          },
          {
            href: 'https://radical.town/about',
            title: 'radical.town',
            tags: ['mastodon', 'social'],
          },
          {
            href: 'https://www.youtube.com/channel/UCvfeZJmLFo2o90A0v3ce2_Q',
            title: 'Audible Socialism',
            description: 'On YouTube',
            tags: ['audiobooks', 'youtube'],
          },
          {
            href: 'https://www.marxists.org/audiobooks/',
            title: 'Audiobooks',
            description: 'On Marxists.org',
            tags: ['audiobooks'],
          },
          {
            href: 'https://www.youtube.com/channel/UCSuBGV3Qme4aZJajbYCXh0Q',
            title: 'Dank Audio Stash',
            description: 'On YouTube',
            tags: ['audiobooks', 'youtube'],
          },
          {
            href:
              'https://github.com/dessalines/essays/blob/master/audiobooks.md',
            title: "Dessaline's Audiobooks List",
            description: 'YouTube and Torrents',
            tags: ['audiobooks', 'youtube'],
          },
          {
            href: 'https://librivox.org/',
            title: 'LibriVox',
            description: 'Public Domain Audiobooks',
            tags: ['audiobooks'],
          },
          {
            href: 'https://mega.nz/#F!kQoj3aAB!pzO-m_eoVvBv1bSMj60NdQ',
            title: 'Mega Archive',
            tags: ['audiobooks'],
          },
          {
            href: 'https://ourhiddenhistory.org/',
            title: 'Our Hidden History',
            tags: ['audiobooks'],
          },
          {
            href: 'https://www.youtube.com/channel/UCbfzszfxZr4qmeZjZ_3R_Pw',
            title: 'Our Hidden History YouTube',
            tags: ['audiobooks', 'youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UClhvYkhCbuwnVT_H0gFP3OA',
            title: 'Marx Engels Lenin Institute Socialist AudioTexts',
            tags: ['audiobooks', 'youtube'],
          },
          {
            href:
              'https://docs.google.com/document/d/1Gxwhh-vdeB--47HM-20cEVRC9eAMhrapbNf0Sk8VSOs/edit',
            title: 'Anti-Communist Myths Debunked',
            description: 'Google doc',
            tags: ['misc', 'debunked'],
          },
          {
            href:
              'https://docs.google.com/document/d/1k-OPPy9UM9ApPuWVIsPcvX3zQh1LUsVbPQocD9mUhyA/edit',
            title: 'Collection of Reading Lists',
            description: 'Google doc',
            tags: ['collection', 'misc', 'list'],
          },
          {
            href: 'https://github.com/dessalines/essays',
            title: 'Dessalines Essays',
            tags: ['collection', 'essays', 'misc', 'list'],
          },
          {
            href: 'http://dialectics4kids.org/',
            title: 'Dialectics for Kids',
            tags: ['dialectics', 'beginner'],
          },
          {
            href: 'https://msuweb.montclair.edu/~furrg/',
            title: "Grover Furr's Website",
            tags: ['stalin', 'debunked'],
          },
          {
            href: 'https://leftypedia.org/wiki/Main_Page',
            title: 'Lefypedia',
            tags: ['wiki', 'misc'],
          },
          {
            href: 'http://ouleft.org/',
            title: 'Online University of the Left',
            tags: ['misc'],
          },
          {
            href:
              'http://www.counterpunch.org/2016/08/24/provoking-nuclear-war-by-media/',
            title: 'Provoking Nuclear War by Media',
            tags: ['article', 'war'],
          },
          {
            href:
              'http://www.counterpunch.org/2014/07/09/pushing-ukraine-to-the-brink/',
            title:
              'Pushing Ukraine to the Brink (about US interests in Middle East and Ukraine)',
            tags: ['ukraine', 'article', 'war'],
          },
          {
            href:
              'http://www.greanvillepost.com/2018/03/12/the-pentagon-hollywoods-successful-and-deadly-propaganda-alliance/',
            title:
              "The Pentagon & Hollywood's successful and deadly propaganda alliance",
            tags: ['article'],
          },
          {
            href: 'https://outline.com/tTTmh6',
            title: 'The Intelligence Coup Of The Century',
            tags: ['article', 'cia'],
          },
          {
            href:
              'https://docs.google.com/document/d/1KMAZopkLyjP74vOssz6XAdPxvMh-1rJRptFnFD54bPg/edit?usp=sharing',
            title: 'Socialism in Asia Master Source List',
            description: 'Google doc',
            tags: [
              'asia',
              'mao',
              'dprk',
              'vietnam',
              'laos',
              'list',
              'china',
              'xiaoping',
              'xi',
              'collection',
              'maoism',
            ],
          },
          {
            href: 'https://0xacab.org/snippets/802',
            title: "Radical Coder's Communist articles",
            tags: ['misc', 'article', 'list', 'collection'],
          },
          {
            href: 'https://www.youtube.com/channel/UC2xX2FI6s4i9xz3t9qjayhg',
            title: 'AfroMarxist',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCFEmOPY04flXH-QpMMAGeJA',
            title: 'BadMouseProductions',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCZ1zgx9IxzrMf545npclq1Q)',
            title: 'Black Internationalist',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCpYZYH_1VTB9q8Leg0TrROA)',
            title: 'Black Red Guard',
            tags: ['youtube', 'mao', 'maoism'],
          },
          {
            href: 'https://www.youtube.com/user/shanelawrence86',
            title: 'Juche Gang',
            tags: ['youtube', 'dprk'],
          },
          {
            href: 'https://www.youtube.com/channel/UCNalGyK3DaK37GTLIHSwmyA',
            title: 'Marxist Project',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCEzvnHqlIPv0QbXpdoH0f0Q',
            title: 'Marxist-Leninist Theory',
            tags: ['youtube', 'theory'],
          },
          {
            href: 'https://www.youtube.com/user/saraj00n',
            title: 'Means TV',
            tags: ['youtube'],
          },
          {
            href:
              'https://www.youtube.com/playlist?list=PLXIlvfed_WgkHz6aXkTXeWQb3E8WnNxbb',
            title: 'Michael Parenti Lectures',
            description: 'Playlist',
            tags: ['youtube', 'lectures'],
          },
          {
            href: 'https://www.youtube.com/channel/UCCN3WVjzdNd_CDgXn258FVw',
            title: 'Natalie Revolts',
            tags: ['youtube', 'dprk'],
          },
          {
            href: 'https://www.youtube.com/channel/UCi7apW6MGw6u3UlsJclkN3Q',
            title: 'New Anticapitalist Film Gallery',
            tags: ['youtube', 'documentary'],
          },
          {
            href: 'https://www.youtube.com/channel/UCkZFKKK-0YB0FvwoS8P7nHg',
            title: 'NonCompete',
            tags: ['youtube', 'anarchy'],
          },
          {
            href: 'https://www.youtube.com/channel/UCTVqVQpikHxgLaPf8kguMHg',
            title: 'Polinkazh',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCSX5GRWdk2Vxwqk0yRg7adg',
            title: 'Premier Liles',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCEBbylt9Rax3nOP_hyPnMPA',
            title: 'Prolekult',
            tags: ['youtube', 'documentary'],
          },
          {
            href: 'https://www.youtube.com/channel/UCPF2TnvBH88EKgmS-TAMM4w',
            title: 'Red Star Videos',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCSrad2ah3GKKDLK3_j0hogg',
            title: 'Tankie Talk',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/user/telesurenglish',
            title: 'TeleSUR English',
            tags: ['youtube', 'news'],
          },
          {
            href: 'https://www.youtube.com/channel/UCTG-iJm0HtjWVOAwN8sA4Xg',
            title: 'Tovarishch Endymion',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCd1Ze_UknxhxpK9Lvi5rjYw',
            title: 'Danov',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCP5_cAbRgjsZjkhrHBq84xQ',
            title: 'Echo DPRK',
            tags: ['youtube', 'dprk'],
          },
          {
            href: 'https://www.youtube.com/channel/UCG29FnXZm4F5U8xpqs1cs1Q',
            title: 'Empire Files',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCT669OCFMjwMzUdpoXl2FIw',
            title: 'Flea Market Socialist',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UChKGZBVdKbiBGgn2yhhcmSA',
            title: 'Garbage Bin of Ideas',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCPPZoYsfoSekIpLcz9plX1Q',
            title: 'Hakim',
            tags: ['youtube'],
          },
          {
            href:
              'https://leftistcritic.wordpress.com/2017/06/28/something-which-most-other-developing-countries-would-envy-the-dprks-healthcare-system/',
            title: 'Something which most other developing countries would envy',
            description: "The DPRK's healthcare system",
            tags: ['dprk', 'healthcare'],
          },
          {
            href:
              'http://www.greanvillepost.com/2018/03/12/blocking-peace-in-korea-by-lying-about-the-past/',
            title: 'Blocking Peace in Korea by Lying About the Past',
            tags: ['dprk', 'article'],
          },
          {
            href:
              'https://drive.google.com/file/d/1QQn3q4OZwMh44qTmYhzHYSpokYoOEa_v/view',
            title: 'DPRK Reading Guide',
            description: 'Google doc',
            tags: ['list', 'dprk', 'collection'],
          },
          {
            href: 'http://apjjf.org/2014/12/18/Henri-Feron/4113/article.html',
            title:
              "Doom and Gloom or Economic Boom? The Myth of the 'North Korean Collapse'",
            tags: ['dprk', 'article'],
          },
          {
            href:
              'https://ingaza.wordpress.com/2017/10/28/photo-report-the-north-korea-neither-trump-nor-western-media-wants-the-world-to-see/',
            title:
              'Photo-Report: The North Korea Neither Trump Nor Western Media Wants The World To See',
            tags: ['dprk', 'article', 'photo'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/7t51i4/south_korea_continues_to_violate_armistice',
            title: 'South Korea continues to violate armistice agreement',
            tags: ['dprk', 'reddit'],
          },
          {
            href:
              'https://medium.com/@w.aldrich/the-50-s-in-south-korea-what-happened-60f629ac3272',
            title:
              'The secret truth about South Korea and what really happened in Daejeon',
            tags: ['dprk', 'article'],
          },
          {
            href:
              'https://anti-imperialism.org/2018/01/25/west-backs-another-hero-defector-gets-another-criminal/',
            title: 'West Backs Another "Hero" Defector, Gets Another Criminal',
            tags: ['dprk', 'article', 'defector'],
          },
          {
            href:
              'https://www.theguardian.com/world/2015/oct/13/why-do-north-korean-defector-testimonies-so-often-fall-apart',
            title:
              'Why do North Korean defector testimonies so often fall apart?',
            tags: ['dprk', 'article', 'defector'],
          },
          {
            href:
              'https://www.counterpunch.org/2017/09/04/what-the-media-isnt-telling-you-about-north-koreas-missile-tests/',
            title:
              "What the Media isn't Telling You About North Korea's Missile Tests",
            tags: ['dprk', 'article'],
          },
          {
            href: 'https://www.youtube.com/watch?v=2aMsi-A56ds',
            title: 'How Democracy Works in Cuba',
            tags: ['cuba', 'latam', 'castro'],
          },
          {
            href:
              'https://www.mintpressnews.com/us-led-economic-war-not-socialism-tearing-venezuela-apart/218335/',
            title:
              'US-Led Economic War, Not Socialism, Is Tearing Venezuela Apart',
            tags: ['venezuela', 'latam'],
          },
          {
            href:
              'https://fair.org/home/venezuela-coverage-takes-us-back-to-golden-age-of-lying-about-latin-america/',
            title:
              'Venezuela Coverage Takes Us Back to Golden Age of Lying About Latin America',
            tags: ['venezuela', 'latam'],
          },
          {
            href:
              'https://www.marxists.org/history/cuba/archive/castro/1953/10/16.htm',
            title: 'History Will Absolve Me',
            tags: ['castro', 'cuba', 'latam'],
          },
          {
            href:
              'https://iaf-fai.org/2019/05/05/a-zapatista-response-to-the-ezln-is-not-anarchist/',
            title: 'A Zapatista Response to "The EZLN Is NOT Anarchist"',
            tags: ['zapatista', 'latam', 'anarchy'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/da8nbq/masterpost_on_the_zapatista_army_of_national/',
            title:
              'Masterpost on the Zapatista Army of National Liberation (EZLN)',
            tags: ['zapatista', 'latam'],
          },
          {
            href: 'https://en.wikipedia.org/wiki/13TH_(film)',
            title: '13th',
            tags: ['abolition', 'documentary', 'prison', 'police'],
          },
          {
            href:
              'https://theanarchistlibrary.org/library/angela-y-davis-are-prisons-obsolete',
            title: 'Are Prisons Obsolete?',
            tags: ['prison', 'abolition', 'essay', 'police'],
          },
          {
            href: 'https://collectiveliberation.org/',
            title: 'Catalyst Project',
            tags: ['prison', 'abolition', 'police'],
          },
          {
            href: 'http://kersplebedeb.com/posts/cops-are-gangsters/',
            title: 'Cops are Gangsters',
            tags: ['police', 'abolition', 'prison'],
          },
          {
            href:
              'https://www.nytimes.com/2019/04/17/magazine/prison-abolition-ruth-wilson-gilmore.html',
            title: 'Is Prison Necessary?',
            tags: ['prison', 'abolition', 'police'],
          },
          {
            href: 'https://killedbypolice.net/',
            title: 'Killed By Police',
            tags: ['police', 'abolition', 'prison'],
          },
          {
            href: 'https://mappingpoliceviolence.org/',
            title: 'Mapping Police Violence',
            tags: ['police', 'abolition', 'prison'],
          },
          {
            href:
              'https://blackmainstreet.net/never-forget-1985-bombing-west-philedelphia-pa/',
            title:
              'Never Forget: In 1985 US Police Dropped a Bomb on a Neighborhood; Killing 11 and Destroying 61 Homes',
            tags: ['police', 'abolition', 'prison'],
          },
          {
            href:
              'https://drive.google.com/file/d/1dDNc5I-vLsY2eVRXZBNJz2OPbsw5lfT5/view',
            title: 'No New Jails Plan',
            tags: ['prison', 'abolition', 'police'],
          },
          {
            href:
              'https://www.lawcha.org/2014/12/29/stop-kidding-police-created-control-working-class-poor-people/',
            title:
              'Stop Kidding Yourself: The Police Were Created to Control Working Class and Poor People',
            tags: ['police', 'abolition', 'prison'],
          },
          {
            href:
              'http://criticalresistance.org/resources/the-abolitionist-toolkit/',
            title: 'The Abolitionist Toolkit',
            tags: ['prison', 'abolition', 'police'],
          },
          {
            href: 'https://github.com/washingtonpost/data-police-shootings',
            title: 'Washington Post Police Shootings Data',
            tags: ['police', 'abolition', 'prison'],
          },
          {
            href:
              'https://www.teenvogue.com/story/what-is-prison-abolition-movement',
            title: 'What the Prison Abolition Movement Wants',
            tags: ['prison', 'abolition', 'police'],
          },
          {
            href: 'https://aworldwithoutpolice.org/',
            title: 'World Without Police',
            tags: ['police', 'abolition', 'prison'],
          },
          {
            href:
              'https://github.com/dessalines/essays/blob/master/us_atrocities.md#middle-east',
            title: 'US Atrocities in the Middle East',
            tags: ['iraq', 'iran', 'middle-east'],
          },
          {
            href:
              'https://medium.com/@geoffgolberg/state-sponsored-twitter-accounts-pushing-for-war-with-iran-732d3482b847',
            title: 'State Sponsored Twitter Accounts Pushing For War',
            tags: ['iran'],
          },
          {
            href:
              'https://nplusonemag.com/issue-26/reviews/why-are-we-in-the-middle-east/',
            title: 'Why Are We In The Middle East',
            tags: ['iraq', 'iran', 'middle-east'],
          },
          {
            href: 'https://www.youtube.com/watch?v=QYAlSNiFpTc',
            title: 'A Brief History of US Intervention in Iraq',
            tags: ['youtube', 'iraq'],
          },
          {
            href:
              'https://www.liberationnews.org/breaking-soleimani-was-in-iraq-to-ease-regional-tensions-then-trump-said-kill-him/',
            title: 'Soleimani Was In Iraq For Peace',
            tags: ['iran'],
          },
          {
            href: 'https://www.historyisaweapon.com/defcon1/iranprimer.html',
            title: 'A Short Primer On Iran',
            tags: ['iran'],
          },
          {
            href:
              'https://docs.google.com/document/d/1GmEGaiEYvxYe-8N31-l_aKs3xVD9eATZJhD__hVbptA/mobilebasic',
            title: 'Iran Readings',
            description: 'Google doc',
            tags: ['iran'],
          },
          {
            href: 'http://www.bannedthought.net/',
            title: 'Banned Thought',
            tags: ['library'],
          },
          {
            href:
              'https://drive.google.com/drive/folders/0B48PXBn7S_-MMVlaZjlrOEdKWFk',
            title: 'DPRK Literature Archive',
            tags: ['library', 'dprk'],
          },
          {
            href: 'https://www.korea-dpr.info/lib/',
            title: 'KFA Library 1',
            tags: ['library', 'dprk'],
          },
          {
            href: 'https://www.korea-dpr.com/e_library.html',
            title: 'KFA Library 2',
            tags: ['library', 'dprk'],
          },
          {
            href: 'https://archive.org/details/kimilsungworks/mode/2up',
            title: 'Kim Il Sung Works',
            tags: ['library', 'dprk'],
          },
          {
            href: 'http://marx2mao.phpwebhosting.com/',
            title: 'Marx2Mao',
            tags: ['library'],
          },
          {
            href:
              'https://drive.google.com/drive/folders/17LF3BwRsZx_Uj4VgztFX_TTYDEL4I5xz',
            title: 'Marxism Starter Kit',
            tags: ['library'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/ew0zn2/here_is_my_drive_full_of_sources/',
            title: 'Massive Google Drive Archive',
            tags: ['reddit', 'library'],
          },
          {
            href: 'https://ourhiddenhistory.org/',
            title: 'Our Hidden History',
            tags: ['library'],
          },
          {
            href: 'http://www.korean-books.com.kp/en/',
            title: 'Publications of the DPRK',
            tags: ['library', 'dprk'],
          },
          {
            href: 'http://www.readmarxeveryday.org/',
            title: 'Read Marx Every Day',
            tags: ['library'],
          },
          {
            href: 'http://library.redspark.nu/Main_Page',
            title: 'Redspark Library',
            tags: ['library', 'mao', 'maoism'],
          },
          {
            href: 'https://www.revolutionarydemocracy.org/archive/',
            title: 'Revolutionary Democracy archives',
            tags: ['library'],
          },
          {
            href: 'http://www.international.ucla.edu/asia/article/3838',
            title:
              'The Soviet Famine of 1931-33: Politically Motivated or Ecological Disaster?',
            tags: ['ukraine', 'ussr'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/2f3m7t/the_myth_of_trotsky_as_tragic_hero/',
            title: 'The Myth of Trotsky as Tragic Hero',
            tags: ['ussr', 'trotsky'],
          },
          {
            href:
              'https://web.archive.org/web/20001003073504/http://www.plp.org/cd_sup/ukfam1.html',
            title: 'The Hoax of the 1932-33 Ukraine Famine',
            tags: ['ukraine', 'ussr'],
          },
          {
            href:
              'https://www.telegraph.co.uk/news/worldnews/europe/russia/3223834/Stalin-planned-to-send-a-million-troops-to-stop-Hitler-if-Britain-and-France-agreed-pact.html',
            title:
              'Stalin planned to send a million troops to stop Hitler if Britain and France agreed',
            tags: ['stalin', 'ussr'],
          },
          {
            href:
              'https://docs.google.com/document/d/1qeYeYeLN7uKxfMdoe7TAmOMD2fmgyZdU_urvW6eAsRg/mobilebasic',
            title: 'Soviet Union Reading List',
            description: 'Google doc',
            tags: ['ussr', 'list', 'collection'],
          },
          {
            href:
              'https://theimmortalscience.wordpress.com/2017/02/27/the-state-and-revolution-an-overview/',
            title: 'The State and Revolution: An Overview',
            tags: ['theory', 'beginner', 'lenin'],
          },
          {
            href:
              'https://espressostalinist.com/2017/01/27/grover-furr-trotskys-lies-what-they-are-and-what-they-mean/',
            title: "Trotsky's Lies \u2013 What They Are, and What They Mean",
            tags: ['ussr', 'trotsky'],
          },
          {
            href:
              'http://www.globalresearch.ca/us-meddling-in-1996-russian-elections-in-support-of-boris-yeltsin/5568288',
            title:
              'US Meddling in 1996 Russian Elections in Support of Boris Yeltsin',
            tags: ['ussr'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/wisiw/basic_marxismleninism_study_plan/',
            title: 'r/communism Study Plan',
            tags: ['collection', 'list', 'theory', 'beginner'],
          },
          {
            href: 'https://www.socialism101.com/dictionary',
            title: 'Socialism101 Dictionary',
            tags: ['glossary', 'beginner'],
          },
          {
            href:
              'https://github.com/dessalines/essays/blob/master/crash_course_socialism.md',
            title: 'Crash Course Socialism',
            tags: ['beginner'],
          },
          {
            href:
              'https://www.marxists.org/archive/marx/works/1847/11/prin-com.htm',
            title: 'The Principles of Communism',
            tags: ['theory', 'beginner'],
          },
          {
            href: 'https://www.marxists.org/archive/lenin/works/1917/staterev/',
            title: 'The State And Revolution',
            tags: ['theory', 'beginner'],
          },
          {
            href:
              'https://www.marxists.org/reference/archive/stalin/works/1906/12/x01.htm',
            title: 'Anarchism or Socialism',
            tags: ['theory', 'beginner'],
          },
          {
            href:
              'https://www.marxists.org/archive/marx/works/1880/soc-utop/index.htm',
            title: 'Socialism: Utopian and Scientific',
            tags: ['theory', 'beginner'],
          },
          {
            href:
              'https://www.marxists.org/archive/marx/works/1847/wage-labour/',
            title: 'Wage Labour and Capital',
            tags: ['theory', 'beginner'],
          },
          {
            href:
              'https://www.marxists.org/archive/luxemburg/1900/reform-revolution/',
            title: 'Reform or Revolution',
            tags: ['theory', 'beginner'],
          },
          {
            href:
              'https://www.marxists.org/archive/marx/works/1865/value-price-profit/index.htm',
            title: 'Value, Price, and Profit',
            tags: ['theory', 'beginner'],
          },
          {
            href: 'https://www.marxists.org/archive/marx/works/1875/gotha/',
            title: 'Critique of the Gotha Programme',
            tags: ['theory', 'beginner'],
          },
          {
            href:
              'https://www.marxists.org/reference/archive/stalin/works/1938/09.htm',
            title: 'Dialectical and Historical Materialism',
            tags: ['theory', 'beginner'],
          },
          {
            href:
              'https://www.marxists.org/archive/lenin/works/1913/mar/x01.htm',
            title: 'The Three Sources and Three Component Parts of Marxism',
            tags: ['theory', 'beginner'],
          },
          {
            href: 'http://anticapitalismfaq.com/',
            title: 'Anticapitalism FAQ',
            tags: ['beginner'],
          },
          {
            href:
              'https://jiminykrix.wordpress.com/2016/09/14/what-maoism-has-to-offer-the-world-and-why-so-many-former-non-communists-think-its-dope/',
            title:
              "What Maoism has to offer the world and why so many former non-communists think it's dope",
            tags: ['maoism', 'beginner', 'mao'],
          },
          {
            href:
              'https://youtube.com/playlist?list=PL0-IkmzWbjobDdDbSC_YgZfV94BQiRIB8',
            title: 'Do publicly owned, planned economies work? (Audiobook)',
            tags: ['audiobooks', 'beginner'],
          },
          {
            href:
              'https://gowans.blog/2012/12/21/do-publicly-owned-planned-economies-work/',
            title: 'Do publicly owned, planned economies work?',
            tags: ['beginner'],
          },
          {
            href:
              'https://theredphoenixapl.org/2011/08/11/pacifism-how-to-do-the-enemys-job-for-them/',
            title: "Pacifism: How to Do The Enemy's Job For Them",
            tags: ['beginner'],
          },
          {
            href:
              'http://www.greanvillepost.com/2015/05/23/left-anticommunism-the-unkindest-cut/',
            title: 'Left anticommunism, the Unkindest Cut',
            tags: ['beginner'],
          },
          {
            href:
              'http://www.marxist.com/why-does-capitalism-go-into-crisis.htm',
            title: 'Why does Capitalism go into crisis?',
            tags: ['beginner'],
          },
          {
            href: 'https://www.reddit.com/r/communism101/',
            title: 'Communism101',
            tags: ['reddit', 'beginner'],
          },
          {
            href: 'https://www.reddit.com/r/communism/',
            title: 'Communism',
            tags: ['reddit'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/ea6av0/how_to_respond_to_communism_doesnt_work/',
            title: "Communism Doesn't Work",
            tags: ['reddit', 'debunked'],
          },
          {
            href: 'https://www.reddit.com/r/BeardTube/',
            title: 'BeardTube',
            description: 'BreadTube but with more communistm',
            tags: ['reddit', 'youtube'],
          },
          {
            href: 'https://www.reddit.com/r/DebateCommunism/',
            title: 'DebateCommunism',
            tags: ['reddit'],
          },
          {
            href:
              'https://www.reddit.com/r/FULLCOMMUNISM/comments/c60z5a/my_gift_to_you_a_giant_list_of_sources_for/',
            title: 'Resources for debating reactionaries',
            tags: ['reddit', 'debunked'],
          },
          {
            href:
              'https://www.reddit.com/r/FULLCOMMUNISM/comments/cc47kx/dprk_megathread_part_2/',
            title: 'FullCommunism DPRK Megathread Part Two',
            tags: ['reddit', 'dprk'],
          },
          {
            href:
              'https://www.reddit.com/r/FULLCOMMUNISM/comments/cc4703/dprk_megathread_part_1/',
            title: 'FullCommunism DPRK Megathread Part Two',
            tags: ['reddit', 'dprk'],
          },
          {
            href: 'https://www.reddit.com/r/sino/wiki/fakenews-china',
            title: 'Sino Fake News Debunked',
            tags: ['reddit', 'china', 'xi', 'debunked'],
          },
          {
            href: 'https://www.reddit.com/r/socialism/',
            title: 'Socialism',
            description:
              'Catchall Socialist sub, some demsocs and anarchists here',
            tags: ['reddit'],
          },
          {
            href: 'https://www.reddit.com/r/Socialism_101/',
            title: 'Socialism101',
            tags: ['reddit', 'beginner'],
          },
          {
            href: 'https://www.reddit.com/r/prisonabolition/',
            title: 'Prison Abolition',
            tags: ['reddit', 'abolition', 'police', 'prison'],
          },
          {
            href: 'https://sites.google.com/a/karlmarx.net/open/',
            title: 'KarlMarx.Net',
            tags: ['news', 'misc'],
          },
          {
            href: 'http://global.chinadaily.com.cn/',
            title: 'China Daily',
            tags: ['news', 'china'],
          },
          {
            href: 'https://www.counterpunch.org/',
            title: 'CounterPunch',
            tags: ['news'],
          },
          {
            href: 'https://www.dprktoday.com/',
            title: 'DPRK Today',
            tags: ['news', 'dprk'],
          },
          {
            href: 'https://www.idcommunism.com/',
            title: 'In Defense of Communism',
            tags: ['news'],
          },
          {
            href: 'https://www.fightbacknews.org/',
            title: 'Fight Back News',
            tags: ['news'],
          },
          {
            href: 'https://www.greanvillepost.com/',
            title: 'Greanville Post',
            tags: ['news'],
          },
          {
            href: 'http://dragonreport.com/Dragon_Report/home/home.html',
            title: 'Dragon Report',
            tags: ['news', 'china'],
          },
          {
            href: 'https://www.kcna.kp',
            title: 'Korean Central News Agency',
            tags: ['news', 'dprk'],
          },
          {
            href: 'https://fair.org/',
            title: 'FAIR',
            tags: ['news', 'watchdog'],
          },
          {
            href: 'https://www.liberationnews.org/',
            title: 'Liberation news',
            description: 'PSL',
            tags: ['news'],
          },
          {
            href: 'https://liberationschool.org/',
            title: 'Liberation School',
            description: 'PSL',
            tags: ['blog'],
          },
          {
            href:
              'http://mediaryugyong.com.kp/index.php/first/select_language/2/1',
            title: 'Media Ryugyong',
            tags: ['news', 'dprk'],
          },
          {
            href: 'http://www.mfa.gov.kp/en/',
            title: 'Ministry of Foreign Affairs',
            tags: ['news', 'dprk'],
          },
          {
            href: 'https://www.mintpressnews.com/',
            title: 'MintPress News',
            tags: ['news'],
          },
          {
            href: 'https://monthlyreview.org/',
            title: 'Monthly Review',
            tags: ['news'],
          },
          {
            href: 'https://www.naenara.com.kp/',
            title: 'Naenara',
            tags: ['news', 'dprk'],
          },
          {
            href: 'https://forpositivepeace.org/',
            title: 'Organization for Positive Peace',
            tags: ['news'],
          },
          {
            href: 'https://therealnews.com/',
            title: 'Real News Network',
            tags: ['news'],
          },
          {
            href: 'https://www.prwatch.org/',
            title: 'PRWatch',
            tags: ['news', 'watchdog'],
          },
          {
            href: 'https://pitchforkcosmonaut.org/',
            title: 'Pitchfork Cosmonaut',
            tags: ['news'],
          },
          {
            href: 'https://www.projectcensored.org/',
            title: 'Project Censored',
            tags: ['news', 'watchdog'],
          },
          {
            href: 'https://www.pyongyangtimes.com.kp/',
            title: 'Pyongyang Times',
            tags: ['news', 'dprk'],
          },
          {
            href: 'http://english.qstheory.cn/',
            title: 'Qiushi',
            tags: ['news', 'theory', 'china', 'xi'],
          },
          { href: 'http://www.redsun.org/', title: 'Red Sun', tags: ['news'] },
          {
            href: 'https://redfish.media/',
            title: 'Redfish Media',
            tags: ['news'],
          },
          {
            href: 'https://www.redspark.nu/en/',
            title: 'Redspark',
            tags: ['news', 'mao', 'maoism'],
          },
          {
            href: 'http://www.rodong.rep.kp/en/',
            title: 'Rodong Sinmun',
            tags: ['news', 'dprk'],
          },
          {
            href: 'https://shadowproof.com/',
            title: 'Shadowproof',
            tags: ['news'],
          },
          {
            href: 'https://gowans.blog/',
            title: 'Stephan Gowans Blog',
            tags: ['blog'],
          },
          {
            href: 'https://www.telesurenglish.net/',
            title: 'TeleSUR English',
            tags: ['news'],
          },
          {
            href: 'https://thegrayzone.com/',
            title: 'The Grayzone',
            tags: ['news'],
          },
          {
            href: 'https://www.vok.rep.kp/index.php?CHANNEL=2&lang=',
            title: 'Voice Of Korea',
            tags: ['news', 'dprk'],
          },
          {
            href: 'https://www.workers.org/',
            title: 'Workers World',
            tags: ['news'],
          },
          {
            href: 'http://www.xinhuanet.com/english/home.htm',
            title: 'Xinhua',
            tags: ['news', 'china'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/c2b7ma/china_megathread_everything_a_leftist_must_know/',
            title: 'China Megathread: Everything a Leftist Must Know',
            tags: ['china', 'reddit', 'xiaoping', 'mao', 'xi'],
          },
          {
            href:
              'https://drive.google.com/file/d/15I2LRlK-VofmD1FWmXS1ERltTwuYFZcC/view (Google doc)',
            title: 'China Reading Guide',
            tags: ['list', 'collection', 'china', 'xiaoping', 'xi', 'mao'],
          },
          {
            href:
              'https://cpcchina.chinadaily.com.cn/2010-10/21/content_13918311.htm',
            title: 'Building a Socialism with a Specifically Chinese Character',
            tags: ['china', 'xiaoping'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/5ku8dz/china_as_a_socialist_marxistleninist_state_a/',
            title: 'China as a Socialist State: A Defense',
            tags: ['china', 'reddit', 'xiaoping', 'xi'],
          },
          {
            href:
              'https://foreignpolicy.com/2018/11/16/chinas-orwellian-social-credit-score-isnt-real/',
            title: "China's Orwellian Social Credit Score Isn't Real",
            tags: ['china', 'xi'],
          },
          {
            href:
              'https://www.workers.org/2015/07/21/china-rising-wages-and-worker-militancy/',
            title: 'China, rising wages and worker militancy',
            tags: ['china', 'xi'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/dqrspr/chinese_imperialism/',
            title: 'Chinese "Imperialism"',
            tags: ['china', 'reddit', 'xiaoping'],
          },
          {
            href:
              'http://monthlyreview.org/commentary/did-mao-really-kill-millions-in-the-great-leap-forward/',
            title: 'Did Mao Really Kill Millions in the Great Leap Forward?',
            tags: ['china', 'mao', 'maoism'],
          },
          {
            href:
              'https://www.telesurenglish.net/opinion/China-Is-Most-Promising-Hope-for-Third-World-Fidel-20171128-0017.html',
            title: 'Fidel Castro: China Is Most Promising Hope for Third World',
            tags: ['china', 'castro', 'cuba', 'xiaoping'],
          },
          {
            href:
              'https://www.reddit.com/r/communism101/comments/7vrdz2/china/dtv6z3t/',
            title: 'History of China: Is it Capitalist Now?',
            tags: ['china', 'reddit', 'xiaoping', 'xi'],
          },
          {
            href:
              'http://www.unz.com/plee/how-it-all-began-the-belgrade-embassy-bombing/',
            title: 'How It All Began: The Belgrade Embassy Bombing',
            tags: ['china', 'xiaoping'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/5vkthe/is_china_socialist_my_response_to_antichina_claims/',
            title: 'Is China Socialist?',
            tags: ['china', 'reddit', 'xiaoping', 'mao', 'xi'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/fijvid/rcommunism_the_book_megamegamegathread/',
            title: 'r/communism: The Book? (mega-mega-MEGA-thread)',
            tags: [
              'reddit',
              'ussr',
              'debunked',
              'china',
              'bolivia',
              'zapatista',
            ],
          },
          {
            href:
              'https://medium.com/@leohezhao/notes-for-30th-anniversary-of-tiananmen-incident-f098ef6efbc2',
            title: 'Notes for 30th Anniversary of Tiananmen Incident',
            tags: ['china', 'xiaoping'],
          },
          {
            href:
              'http://www.greanvillepost.com/2015/08/20/the-myth-of-chinese-capitalism-2/',
            title: 'The Myth of Chinese Capitalism',
            tags: ['china', 'xiaoping', 'xi'],
          },
          {
            href:
              'https://www.thenation.com/article/the-us-is-already-at-war-with-china/',
            title: 'The US is already at war with China',
            tags: ['china', 'xi'],
          },
          {
            href: 'http://en.theorychina.org/',
            title: 'TheoryChina',
            tags: ['china', 'theory'],
          },
          {
            href:
              'https://medium.com/@wolf.aldrich/three-questions-about-china-and-the-communist-party-of-china-7056e40b40f3',
            title:
              'Three questions about China and the Communist Party of China',
            tags: ['china', 'xiaoping', 'xi'],
          },
          {
            href:
              'https://www.globalresearch.ca/us-trade-war-china-desperate-move-save-western-empire/5660991',
            title:
              'US Trade War with China: Desperate Move to Save Western Empire',
            tags: ['china', 'xi'],
          },
          {
            href:
              'https://www.theguardian.com/commentisfree/2009/feb/10/tibet-china-feudalism',
            title: "What we don't hear about Tibet",
            tags: ['china'],
          },
          {
            href:
              'https://www.theatlantic.com/international/archive/2013/01/why-do-chinese-billionaires-keep-ending-up-in-prison/272633/',
            title: 'Why Do Chinese Billionaires Keep Ending Up in Prison?',
            tags: ['china', 'xi'],
          },
          {
            href: 'https://linx.li/sopikyte.pdf',
            title: 'Mao For Beginners (mirror)',
            tags: ['graphic-novel', 'mao', 'beginner', 'maoism'],
          },
          {
            href: 'https://gofile.io/?c=RgAis0',
            title: 'Mao For Beginners (mirror)',
            tags: ['graphic-novel', 'mao', 'beginner', 'maoism'],
          },
          {
            href: 'https://file.io/kKTCpu',
            title: 'Mao For Beginners (mirror)',
            tags: ['graphic-novel', 'mao', 'beginner', 'maoism'],
          },
          {
            href: 'https://anonymousfiles.io/5SH0kRU5/',
            title: 'Mao For Beginners (mirror)',
            tags: ['graphic-novel', 'mao', 'beginner', 'maoism'],
          },
          {
            href: 'https://www100.zippyshare.com/v/S1nzDynl/file.html',
            title: 'Mao For Beginners (mirror)',
            tags: ['graphic-novel', 'mao', 'beginner', 'maoism'],
          },
          {
            href:
              'https://www.filehosting.org/file/details/844773/sopikyte.pdf',
            title: 'Mao For Beginners (mirror)',
            tags: ['graphic-novel', 'mao', 'beginner', 'maoism'],
          },
          {
            href:
              'https://ia800204.us.archive.org/1/items/MarxForBeginners-English/marx_for_beginners.pdf',
            title: 'Marx For Beginners (mirror)',
            tags: ['graphic-novel', 'beginner'],
          },
          {
            href: 'https://file.io/rjvB6D',
            title: 'Lenin For Beginners (mirror)',
            tags: ['graphic-novel', 'lenin', 'beginner'],
          },
          {
            href: 'https://gofile.io/?c=weVZjW',
            title: 'Lenin For Beginners (mirror)',
            tags: ['graphic-novel', 'lenin', 'beginner'],
          },
          {
            href:
              'https://www.filehosting.org/file/details/844774/du692tdj.pdf',
            title: 'Lenin For Beginners (mirror)',
            tags: ['graphic-novel', 'lenin', 'beginner'],
          },
          {
            href: 'https://linx.li/du692tdj.pdf',
            title: 'Lenin For Beginners (mirror)',
            tags: ['graphic-novel', 'lenin', 'beginner'],
          },
          {
            href: 'https://anonymousfiles.io/8Hf8MJU1/',
            title: 'Lenin For Beginners (mirror)',
            tags: ['graphic-novel', 'lenin', 'beginner'],
          },
          {
            href: 'https://www5.zippyshare.com/v/gjOnnA2K/file.html',
            title: 'Lenin For Beginners (mirror)',
            tags: ['graphic-novel', 'lenin', 'beginner'],
          },
          {
            href:
              'https://drive.google.com/drive/folders/1Ytll8_9XTHovwvxmY7KgTZYsRIbE8E9U',
            title: 'A Very Heavy Agenda',
            tags: ['documentary', 'news'],
          },
          {
            href:
              'https://drive.google.com/file/d/1doCBDm2fqgxRBSjRdhAL_F0TrBSnTQ-N/view',
            title: 'Afghan: The Soviet Experience',
            tags: ['documentary', 'middle-east'],
          },
          {
            href: 'https://www.youtube.com/watch?v=DxqK6eqwwLc',
            title: 'Black Gods with Guns',
            tags: ['documentary'],
          },
          {
            href:
              'https://www2.123-movies.com/movie/the-black-panthers-vanguard-of-the-revolution/',
            title: 'Black Panthers: Vanguard of the Revolution',
            tags: ['documentary'],
          },
          {
            href:
              'https://www.youtube.com/playlist?list=PLlhUKWQ5KKQr633F85NK5-menPlsWuAbB',
            title: 'China: Time Of Xi',
            tags: ['documentary', 'china', 'jinping', 'xi'],
          },
          {
            href: 'https://youtube.com/watch?v=BT5L4YU_Fl4',
            title: 'Empire Files: How Palestine Became Colonized',
            tags: ['documentary', 'palestine'],
          },
          {
            href:
              'https://peertube.social/videos/watch/97e50d71-9a2c-4a18-bb3b-fe7ffffd9d61',
            title: 'Fidel Castro, The Untold Story',
            tags: ['documentary', 'castro', 'cuba'],
          },
          {
            href: 'https://www.youtube.com/watch?v=P2Obp6YS4SY',
            title: 'Fidel Castro, The Untold Story',
            tags: ['documentary', 'castro', 'cuba'],
          },
          {
            href: 'https://www.youtube.com/watch?v=7z-AxNFx88o',
            title: 'Grenada: The Future Coming Towards Us',
            tags: ['documentary'],
          },
          {
            href:
              'https://www.youtube.com/playlist?list=PLMt0ncvnKoz3ar_f78qBeA29-0kwrsXvT',
            title: 'How Yukong Moved The Mountains',
            tags: ['documentary', 'china', 'xiaoping', 'mao'],
          },
          {
            href: 'https://www.youtube.com/playlist?list=PL35BC1713B4493483',
            title: 'Lenin',
            tags: ['documentary', 'lenin'],
          },
          {
            href: 'https://www.youtube.com/watch?v=ktE_3PrJZO0',
            title: 'Loyal Citizens of Pyongyang in Seoul',
            tags: ['documentary', 'dprk', 'defector'],
          },
          {
            href: 'https://www.youtube.com/watch?v=csWByunwVI8',
            title: 'Malcom X - Make It Plain',
            tags: ['documentary'],
          },
          {
            href: 'https://www.youtube.com/watch?v=cVvThDX4bbQ',
            title: 'Red Ant Dream',
            tags: ['documentary'],
          },
          {
            href: 'https://youtube.com/watch?v=qVHzAinRH4g',
            title: 'Semantics - The Rise and Fall of Muammar al Gaddafi',
            tags: ['documentary', 'middle-east'],
          },
          {
            href:
              'https://www.youtube.com/playlist?list=PLiizh2ZxteI5aQoy4x7YBkZE8bN0NNB2W',
            title: 'Soviet Storm/The Great Patriotic War',
            tags: ['documentary', 'ussr'],
          },
          {
            href: 'https://www.youtube.com/watch?v=-349HTKhPno',
            title: 'The Act Of Killing',
            description: 'Also see The Look Of Silence',
            tags: ['documentary', 'indonesia'],
          },
          {
            href: 'https://www.youtube.com/watch?v=9iNcQFPECDc',
            title: 'The Look Of Silence',
            description: 'Also see The Act Of Killing',
            tags: ['documentary', 'indonesia'],
          },
          {
            href: 'https://www.youtube.com/watch?v=XYHnd4boUoM',
            title: 'The Antifascists',
            tags: ['documentary'],
          },
          {
            href: 'https://www.youtube.com/watch?v=GDl9ecICIYg',
            title: 'The Coming War on China',
            tags: ['documentary', 'china', 'xi'],
          },
          {
            href: 'https://www.youtube.com/watch?v=d-7JIR1u9qw',
            title: 'The Murder of Fred Hampton',
            tags: ['documentary'],
          },
          {
            href: 'https://www.youtube.com/watch?v=iH5nzZU0qCc',
            title: 'The Revolution Will Not Be Televised',
            tags: ['documentary', 'venezuela'],
          },
          {
            href:
              'https://www.youtube.com/playlist?list=PLr7tdO3Zp0VFhTUH2LD9NYPzBh9uc3Kxb',
            title: 'The Unknown War',
            tags: ['documentary', 'ussr'],
          },
          {
            href: 'https://www.youtube.com/watch?v=G7Vlt41HPUE',
            title: 'Thomas Sankara, The Upright Man',
            tags: ['documentary'],
          },
          {
            href: 'https://vimeo.com/46137917',
            title: 'Thomas Sankara, The Upright Man',
            tags: ['documentary'],
          },
          {
            href: 'https://www.youtube.com/watch?v=egWLsEzaKiI',
            title: 'Tzar to Lenin',
            tags: ['documentary', 'ussr', 'lenin'],
          },
          {
            href: 'https://www.youtube.com/watch?v=2BO83Ig-E8E',
            title: 'We Went To DPRK To Get A Haircut',
            tags: ['documentary', 'dprk'],
          },
          {
            href: 'https://youtube.com/watch?v=ZIA7sKcFN44',
            title: 'Yellow Vest Fever',
            tags: ['documentary'],
          },
          {
            href:
              'https://www.cartamaior.com.br/?/Editoria/Pelo-Mundo/Bolivia-filtran-audios-de-lideres-opositores-llamando-a-un-golpe-de-estado-contra-Evo-Morales/6/45801',
            title:
              'Bolivia: filtran audios de l\xedderes opositores llamando a un golpe de estado contra Evo Morales',
            tags: ['bolivia'],
          },
          {
            href:
              'https://www.telesurenglish.net/news/Bolivia-Audios-Linking-Civic-Ex-Military-and-US-in-Coup-Plans-20191105-0001.html',
            title:
              'Bolivia: Audios Linking Civic, Ex-Military and US in Coup Plans',
            tags: ['bolivia'],
          },
          {
            href:
              'https://www.jornada.com.mx/2019/11/12/politica/006n1pol?fbclid=IwAR3ViRE1tsfInGnqNlWqT8WfQMCupbxrYGamzsd0Nv_WwgQYJQjnWwUMQIw',
            title:
              'Audios revelan complot opositor con apoyo de Washington para desconocer a Morales',
            tags: ['bolivia'],
          },
          {
            href:
              'https://www.primeralinea.info/informe-revela-que-eeuu-hackeo-sistema-electoral-el-20-de-octubre/',
            title:
              'Informe Revela Que Eeuu Hacke\xf3 Sistema Electoral El 20 De Octubre',
            tags: ['bolivia'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/cpm5q1/we_need_a_serious_discussion_on_the_overwhelming/',
            title:
              'We Need a Serious Discussion on the Overwhelming Misinformation on China and HK',
            tags: ['china', 'reddit', 'xi', 'hongkong'],
          },
          {
            href: 'https://bitbucket.org/TheCrypticMan/hong-kong-riots',
            title: 'TheCrypticMan Wiki',
            description: 'Mirror, possibly removed by US censors',
            tags: ['china', 'reddit', 'xi', 'hongkong'],
          },
          {
            href: 'https://bitbucket.org/TheCrypticMan/hong-kong-protests',
            title: 'TheCrypticMan Wiki',
            description: 'Mirror, possibly removed by US censors',
            tags: ['china', 'reddit', 'xi', 'hongkong'],
          },
          {
            href:
              'https://github.com/TheCrypticMan/Essays/wiki/Hong-Kong-Protests',
            title: 'TheCrypticMan Wiki',
            description: 'Mirror, possibly removed by US censors',
            tags: ['china', 'reddit', 'hongkong'],
          },
          {
            href:
              'https://www.reddit.com/r/Sino/wiki/faq/hong-kong-taiwan/summer-2019-protests',
            title: 'TheCrypticMan Wiki',
            description: 'Mirror, possibly removed by US censors',
            tags: ['china', 'reddit', 'hongkong'],
          },
          {
            href:
              'https://worldaffairs.blog/2019/07/05/xinjiang-and-uyghurs-what-youre-not-being-told/',
            title: "Xinjiang and Uyghurs, What You're Not Being Told",
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://docs.google.com/document/d/1XiHrkJ_zudQZP1hBIBCgJKKAfAILxEG0cmQGrNH8pIU/mobilebasic',
            title:
              'Resource Complitaion: Debunking imperialist propaganda WRT to Xinjiang',
            tags: ['china', 'xinjiang', 'uyghur', 'debunked'],
          },
          {
            href:
              'https://medium.com/@leohezhao/xinjiang-facts-vs-fiction-bdc2aa403c91',
            title: 'Xinjiang: Facts vs Fiction',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://www.quora.com/What-will-be-the-consequences-of-the-New-York-Times-expose-on-Xinjiang/answer/Jamin-Chen-1?ch=10&share=010b06f9&srid=hXpBn',
            title: 'Translation of documents in NYT "expose"',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://rainershea.com/f/the-biggest-lie-of-2019-that-china-is-putting-muslims-in-%E2%80%9Ccamps%E2%80%9D',
            title: 'The biggest lie of 2019: China putting Muslims in "Camps"',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://thegrayzone.com/2019/09/30/reports-china-organ-harvesting-cult-falun-gong/',
            title:
              'Reports on China organ harvesting come from far-right cult Falun Gong',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://www.irishtimes.com/news/world/asia-pacific/china-defends-xinjiang-camps-as-it-takes-reporters-on-tour-1.3750070',
            title: 'China defends Xinjiang camps',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://www.newcoldwar.org/the-uyghur-issue-how-dare-the-us-lecture-china-about-the-rights-of-muslims',
            title: 'How Dare the US Lecture China About the Rights of Muslims?',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://journal-neo.org/2019/11/20/nyts-leaked-chinese-files-story-covers-for-terrorism/',
            title: 'NYT "Leaked" Chinese Files Story Covers For Terrorism',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href: 'http://www.xinhuanet.com/english/2019-10/30/c_138515796.htm',
            title:
              "Dozens of Countries Oppose US Interfering in China's Internal Affairs",
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://www.thejakartapost.com/academia/2018/09/25/xinjiang-what-a-wonderful-place.html',
            title: 'Xinjiang, What A Wonderful Place',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href: 'https://www.globaltimes.cn/content/1159357.shtml',
            title: 'Fifty Ambassadors Throw Weight Behind China on Xinjiang',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://thegrayzone.com/2018/08/23/un-did-not-report-china-internment-camps-uighur-muslims/',
            title: 'UN Did Not Report China Has Internment Camps',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://medium.com/@sunfeiyang/breaking-down-the-bbcs-visit-to-hotan-xinjiang-e284934a7aab',
            title: "Breaking Down the BBC'S Visit to Xinjiang",
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href: 'https://www.globaltimes.cn/content/1134972.shtml',
            title: 'Foreign Diplomats Disover a True Xinjiang',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://www.theodysseyonline.com/most-what-hear-about-china-red-scare-yellow-peril-propaganda',
            title:
              'Most Of What We Hear About China Is Red Scare, Yellow Peril Propaganda',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://journal-neo.org/2019/01/30/is-china-building-a-police-state-or-countering-western-sponsored-terrorism/',
            title:
              'Is China Builing A Police State, Or Countering Western-Sponsored Terrorism?',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://thegrayzone.com/2019/12/21/china-detaining-millions-uyghurs-problems-claims-us-ngo-researcher/',
            title:
              'China Detaining Millons? Serious Problems With Claims by US-backed NGOs and "researcher" "led by God"',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://newrepublic.com/article/155076/obscure-newspaper-fueling-far-right-europe',
            title: 'The Obscure Newspaper Fueling the Far Right in Europe',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://news.cgtn.com/news/3d3d774d34457a4d30457a6333566d54/share_p.html',
            title: 'Xinjiang Vocational Training Centers',
            tags: ['china', 'xinjiang', 'uyghur'],
          },
          {
            href:
              'https://docs.google.com/document/d/1ido70LgXsEhxcnyXE7RVS0wYJZc6aeVTpujCUPQgTrE/edit',
            title: 'Ultimate Research Document',
            description: 'Google doc',
            tags: ['list', 'collection'],
          },
          {
            href:
              'https://docs.google.com/document/d/1kwDGZFH2-jFr4xZ2ynxQkihYwIVh_uZlp1-Q73uXzso/edit',
            title: 'Massive Reading List',
            description: 'Google doc',
            tags: ['list', 'collection', 'beginner'],
          },
          {
            href: 'https://impenetrable.fortress.promo/users/communistquotes',
            title: 'Communist Quotes Bot',
            tags: ['mastodon', 'social', 'quotes'],
          },
          {
            href: 'https://www.youtube.com/channel/UCs8mbJ-M142ZskR5VR0gBig',
            title: 'Yugopnik',
            tags: ['youtube'],
          },
          {
            href: 'https://www.youtube.com/watch?v=vyl2DeKT-Vs',
            title: 'The Difference Between Socialism, Communism, and Marxism',
            tags: ['beginner', 'youtube'],
          },
          {
            href: 'https://www.youtube.com/channel/UCnCitqw8cVeluc0tV0CFQjQ/',
            title: 'Red Star TV',
            tags: ['youtube', 'news', 'dprk'],
          },
          {
            href: 'https://www.youtube.com/channel/UCSukNkw4abtjBuumRZKMgCQ',
            title: 'Our Nation School',
            tags: ['youtube', 'dprk'],
          },
          {
            href: 'https://www.youtube.com/channel/UCy1886g0kTj-X_psPQQnAqg',
            title: 'DPRK Today',
            tags: ['news', 'dprk', 'youtube'],
          },
          {
            href: 'https://anonymousfiles.io/yI8hV8Me/',
            title: 'Brainwashing (Mirror)',
            tags: ['cia', 'prc', 'brainwashing'],
          },
          {
            href: 'https://linx.li/cyn5rzdd.pdf',
            title: 'Brainwashing (Mirror)',
            tags: ['cia', 'prc', 'brainwashing'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/ef9otz/debunk_of_chinas_crimes_against_uyghurs_by/',
            title: "Debunk of China's Crimes Against Uyghurs",
            tags: ['debunked', 'uyghurs', 'reddit', 'china'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/dape9t/an_assesment_of_the_primary_sources_regarding_the/',
            title:
              'An assesment of the primary sources regarding the situation in Xinjiang',
            tags: ['debunked', 'uyghurs', 'reddit', 'china'],
          },
          {
            href: 'https://www.reddit.com/r/communism/wiki/debunk',
            title: 'r/communism Debunking Anti-Communism Masterpost',
            tags: [
              'debunked',
              'reddit',
              'china',
              'ussr',
              'cuba',
              'dprk',
              'albania',
            ],
          },
          {
            href:
              'https://frso.org/main-documents/looking-back-at-tiananmen-square-the-defeat-of-counter-revolution-in-china/',
            title:
              'Looking back at Tiananmen Square, the defeat of counter-revolution in China',
            tags: ['china', 'tiananmen', 'deng', 'debunked'],
          },
          {
            href:
              'https://www.miaminewtimes.com/news/jfk-docs-cia-plotted-to-bomb-miami-kill-refugees-and-blame-castro-9782696',
            title: 'JFK Docs: CIA Plotted to Bomb Miami',
            tags: ['cia', 'castro', 'cuba'],
          },
          {
            href:
              'https://www.youtube.com/channel/UCkqdVHToEEHVpU4qlksJPjQ/feed',
            title: 'Rainer Shea',
            tags: ['youtube'],
          },
          {
            href: 'http://www.zoominkorea.org/',
            title: 'Zoom in Korea',
            tags: ['korea', 'news'],
          },
          {
            href: 'https://concentrationcamps.us/',
            title: 'Concentration Camps in the US',
            tags: ['us', 'immigration', 'prison'],
          },
          {
            href: 'http://www.bjreview.com/mindex.html',
            title: 'Beijing Review',
            tags: ['china', 'news'],
          },
          {
            href:
              'https://revolutionary-initiative.com/2015/08/12/class-analysis-and-class-structure-in-canada-second-version/',
            title: 'Class Analysis and Class Structure in Canada',
            tags: ['analysis', 'canada'],
          },
          {
            href:
              'https://monthlyreview.org/2006/07/01/harder-times-undocumented-workers-and-the-u-s-informal-economy/',
            title:
              'Harder Times: Undocumented Workers and the U.S. Informal Economy',
            tags: ['economy', 'us'],
          },
          {
            href:
              'https://www.marxists.org/history/etol/writers/callinicos/1983/xx/newmc.html',
            title: "The 'New Middle Class' and Socialist Politics",
            tags: ['theory'],
          },
          {
            href:
              'https://web.archive.org/web/20160501111622/http://anti-imperialism.com/2013/10/29/toward-a-concrete-class-analysis-of-the-united-states/',
            title: 'Toward a Concret Class Analysis of the United States',
            tags: ['analysis', 'us'],
          },
          {
            href:
              'https://archive.cpgb-ml.org/download/publications/ClassSocietyInBritain.pdf',
            title:
              'A Class Analysis of the British Society and the Start of the 21st Centry',
            description: 'PDF',
            tags: ['uk', 'analysis'],
          },
          {
            href:
              'https://archive.org/details/ClassStructureSzymanski/page/n3/mode/2up',
            title: 'Class Structure: A Critical Perspective',
            tags: ['analysis'],
          },
          {
            href: 'https://www.prisoncensorship.info/archive/etext/mt/imp97/',
            title: 'Imperialism and its Class Structure in 1997',
            tags: ['analysis', 'maoist'],
          },
          {
            href: 'https://www.prisoncensorship.info',
            title: 'The Maoist International Ministry of Prisons',
            tags: ['maoist'],
          },
          {
            href:
              'https://www.prisoncensorship.info/archive/books/Economics/DividedWorldDividedClass_ZakCope.pdf',
            title: 'Divided World, Divided Class',
            description: 'PDF',
            tags: ['analysis'],
          },
          {
            href:
              'https://www.prisoncensorship.info/archive/books/Economics/lumpen_in_the_united_states.pdf',
            title: 'Who is the Lumpen in the United States',
            description: 'PDF',
            tags: ['maoist', 'essay'],
          },
          {
            href: 'http://en.people.cn/n3/2020/0303/c90000-9664082.html',
            title: 'Firms slam forced labor report as full of lies',
            tags: ['xinjiang', 'china'],
          },
          {
            href: 'https://archive.org/details/BypassingCapitalism',
            title: 'By-Passing Capitalism',
            tags: ['history', 'mongolia'],
          },
          {
            href: 'https://archive.org/details/HistoryOfTheMPR/page/n1',
            title: "History of the Mongolian People's Republic",
            tags: ['history', 'mongolia'],
          },
          {
            href:
              'https://liberationschool.org/mung-lao-a-portrait-of-the-lao-peoples-democratic-republic/',
            title:
              'Mung Lao: A Portrait of The Lao People\u2019s Democratic Republic',
            tags: ['laos', 'history'],
          },
          {
            href: 'https://peoples-voice.org/',
            title: "The People's Voice",
            tags: ['blog', 'maoist'],
          },
          {
            href: 'https://www.reddit.com/r/PartyofCommunistsUSA/wiki/index',
            title: 'Party of Communists USA',
            description: 'Reddit Wiki',
            tags: ['reddit'],
          },
          {
            href: 'http://www.politicalaffairs.net/',
            title: 'Political Affairs',
            tags: ['news'],
          },
          {
            href: 'http://pitchforkcosmonaut.org/',
            title: 'Pitchfork Cosmonaut',
            tags: ['news'],
          },
          {
            href: 'https://www.ratical.org/ratville/CAH/warisaracket.html',
            title: 'War is a Racket',
            tags: ['war'],
          },
          {
            href:
              'https://www.reddit.com/r/communism/comments/e1uylv/green_socialism_stalins_great_plan_for_the/',
            title:
              "Green Socialism: Stalin's Great Plan and its Abandonment by Krushchev",
            tags: ['ussr', 'stalin', 'climate'],
          },
          {
            href: 'https://www.youtube.com/watch?v=rfXGIS3EKxs',
            title: 'Eyes of the Rainbow',
            tags: ['documentary', 'assata-shakur', 'cuba'],
          },
          {
            href:
              'https://www.chicagotribune.com/news/ct-xpm-1997-01-26-9701270002-story.html',
            title: "The CIA's Secret War in Tibet",
            tags: ['cia', 'china', 'tibet'],
          },
          {
            href:
              'https://www.reuters.com/article/us-china-tibet/dalai-lamas-pro-independence-brother-dies-in-u-s-idUSPEK19832520080906',
            title: "Dalai Lama's Brother Dies In US",
            tags: ['tibet', 'cia', 'china'],
          },
          {
            href:
              'https://www.nybooks.com/daily/2013/04/09/cias-cancelled-war-tibet/',
            title: "Tibet: The Cia's Cancelled War",
            tags: ['tibet', 'china', 'cia'],
          },
          {
            href: 'https://www.umsl.edu/~thomaskp/dalai.htm',
            title: 'The Dalai Lama, Slick Denials, and the CIA',
            tags: ['tibet', 'china', 'cia'],
          },
          {
            href: 'https://linx.li/c37la97l.pdf',
            title: 'Great Changes In Tibet',
            description: 'PDF',
            tags: ['tibet', 'china', 'cia'],
          },
          {
            href: 'https://www.youtube.com/channel/UCfix0TWJgJdBvdsAtXKfG3A',
            title: 'Politsturm International',
            tags: ['youtube', 'beginner'],
          },
          {
            href:
              'https://docs.google.com/document/d/1-DLnAY5r-f4DRLZgndR_Bu47nqHVtAOKem5QRmbz7bg/mobilebasic',
            title:
              'Treating Yellow Peril: Resources to Address Coronavirus Racism',
            tags: ['china', 'coronavirus'],
          },
          {
            href: 'https://dialecticalartist.wordpress.com/politicalresources/',
            title: 'Revolutionary Study Guide',
            tags: ['list', 'guide', 'blog'],
          },
          {
            href: 'https://twitter.com/izak_novak/status/1067473128950038534',
            title: 'Collection of threads and resources',
            tags: [
              'collection',
              'marxism',
              'dprk',
              'china',
              'ussr',
              'stalin',
              'twitter',
            ],
          },
          {
            href: 'https://twitter.com/jaybeware/status/1240634734914478080',
            title: 'Thread of syllabi and study guides',
            tags: ['abolition', 'twitter', 'marxism'],
          },
          {
            href: 'https://www.youtube.com/watch?v=gR3igiwaeyc',
            title: 'Karl Marx & Conflict Theory',
            description: 'Crash Course Sociology',
            tags: ['marxism', 'beginners', 'youtube'],
          },
          {
            href:
              'https://web.archive.org/web/20160501111622/http://anti-imperialism.com/2013/10/29/toward-a-concrete-class-analysis-of-the-united-states/',
            title: 'Toward a Concrete Class Analysis of the United States',
            tags: ['analysis', 'usa'],
          },
          {
            href:
              'https://www.liberationnews.org/why-has-no-one-in-vietnam-died-from-coronavirus/',
            title: 'Why has no one in Vietnam died from Coronavirus?',
            tags: ['coronavirus', 'vietnam'],
          },
          {
            href:
              'https://www.qiaocollective.com/home/internationalist-solidarity-in-the-age-of-coronavirus',
            title:
              'After the West: China\u2019s Internationalist Solidarity in the Age of Coronavirus',
            tags: ['coronavirus', 'china'],
          },
          {
            href: 'https://coronavirusinprisons.wordpress.com/',
            title: 'Coronavirus in Prisons',
            tags: ['coronavirus', 'prison'],
          },
          {
            href: 'https://covid19behindbars.com/',
            title: 'COVID-19 Behind Bars',
            tags: ['coronavirus', 'prison'],
          },
          {
            href: 'https://www.blackandpink.org/',
            title: 'Black And Pink',
            tags: ['abolition'],
          },
          {
            href: 'https://www.beyond-prisons.com/',
            title: 'Beyond Prisons',
            tags: ['abolition'],
          },
          {
            href: 'https://www.swopbehindbars.org/',
            title: 'SWOP Behind Bars',
            tags: ['sex-work', 'abolition'],
          },
          {
            href: 'https://survivedandpunished.org/',
            title: 'Survived + Punished',
            tags: ['abolition'],
          },
          {
            href: 'https://incarceratedworkers.org/',
            title: 'Incarcerated Workers Organizing Committee',
            tags: ['prison', 'iww'],
          },
          {
            href: 'https://shutdownicenow.org/',
            title: 'Shut Down Ice',
            tags: ['abolition', 'ice'],
          },
          {
            href:
              'https://www.thenews.com.pk/latest/467847-no-ban-on-muslims-for-fasting-in-ramadan-chinese-diplomat-clarifies-xinjiang-reports',
            title:
              'No ban on Muslims for fasting in Ramadan, Chinese diplomat clarifies Xinjiang reports',
            tags: ['xinjiang'],
          },
          {
            href:
              'https://www.peoplesworld.org/article/in-xinjiang-controversy-china-is-the-target-of-u-s-violence-against-muslims/',
            title:
              'U.S. public gets fake news about China\u2019s alleged anti-Muslim campaign ',
            tags: ['xinjiang'],
          },
          {
            href:
              'https://factcheck.afp.com/no-not-video-chinese-soldier-beating-uighur-muslim-having-copy-koran',
            title:
              'No, this is not a video of a Chinese soldier beating a Uighur Muslim for having a copy of the Koran',
            tags: ['xinjiang'],
          },
          {
            href:
              'https://www.snopes.com/fact-check/300-children-found-frozen-alive/',
            title: 'Were 300 Children Found Frozen Alive for Organ Harvesting?',
            tags: ['xinjiang'],
          },
          {
            href:
              'https://observers.france24.com/en/20200103-how-fake-images-uighur-persecution-are-hurting-cause',
            title:
              'How fake images of Uighur persecution are hurting their cause',
            tags: ['xinjiang'],
          },
          {
            href: 'https://www.youtube.com/watch?v=zjy_4xP5lpU',
            title: 'Uygur families fall victims to fake Xinjiang report',
            tags: ['xinjiang', 'youtube'],
          },
          {
            href: 'https://www.youtube.com/watch?v=soPJESgkE5k',
            title: 'Are Uygurs being tortured in China?',
            tags: ['xinjiang', 'youtube'],
          },
          {
            href: 'https://www.youtube.com/watch?v=Wb-MNi8E-TA',
            title:
              "CGTN Exclusive: Western propaganda on Xinjiang 'camps' rebutted",
            tags: ['xinjiang', 'youtube'],
          },
          {
            href: 'https://www.youtube.com/watch?v=eNfQ4wEfUxM',
            title: "Pompeo's deceptive Xinjiang claims busted",
            tags: ['xinjiang', 'youtube'],
          },
          {
            href:
              'https://rainershea.com/f/china-is-saving-the-uighurs-from-jihadist-indoctrination',
            title: 'China is saving the Uighurs from jihadist indoctrination',
            tags: ['xinjiang'],
          },
          {
            href:
              'https://blackagendareport.com/my-trip-china-exposed-shameful-lies-peddled-american-empire',
            title:
              'My Trip to China Exposed the Shamful Lies Peddled by the Empire',
            tags: ['xinjiang'],
          },
          {
            href: 'https://solitarywatch.org/',
            title: 'Solitary Watch',
            tags: ['prison'],
          },
          {
            href: 'https://www.youtube.com/watch?v=nSd48emp0lI',
            title: 'My Brothers and Sisters in the North',
            tags: ['youtube', 'documentary', 'dprk'],
          },
          {
            href:
              'https://peoplesworld.org/article/surviving-covid-19-in-vietnam-the-safest-place-in-the-world/',
            title: 'Surviving COVID-19 in Vietnam',
            description: 'The Safest Place in the World',
            tags: ['coronavirus', 'vietnam'],
          },
          {
            href: 'https://twitter.com/jhal9000/status/1222197952468226048',
            title: 'Thread on Coronavirus, US, etc',
            tags: ['twitter', 'coronavirus', 'usa'],
          },
          {
            href: 'https://www.redtexts.org/',
            title: 'red texts: communist text files',
            tags: ['library'],
          },
          {
            href: 'https://transformharm.org/',
            title: 'Transform Harm',
            tags: ['abolition'],
          },
          {
            href:
              'https://www.nybooks.com/daily/2020/06/06/cut-the-carceral-system-now/',
            title: 'Cut the Carceral System Now',
            tags: ['abolition', 'coronavirus'],
          },
          {
            href:
              'https://afroazizam.wordpress.com/2017/09/08/marxism-leninism-anti-imperialism-sources/',
            title: 'Marxism Leninism / Anti-imperialism sources',
            tags: ['list', 'collection', 'anti-imperialism', 'marxism'],
          },
          {
            href: 'http://users.rowan.edu/~mcinneshin/5120/wk15/decolzn.htm',
            title: 'Decolonization Documents',
            tags: ['imperialism'],
          },
          {
            href: 'http://readsettlers.org/',
            title: 'Read Settlers',
            tags: ['imperialism'],
          },
          {
            href: 'https://www.themarshallproject.org/',
            title: 'The Marshall Project',
            tags: ['police', 'prison'],
          },
          {
            href: 'http://dprkportal.kp/',
            title: 'DPRK Portal',
            tags: ['dprk', 'news'],
          },
          {
            href:
              'https://www.scmp.com/comment/opinion/article/3091438/us-has-been-exposed-funding-last-years-hong-kong-protests',
            title:
              'US has been exposed for funding last year\u2019s Hong Kong protests',
            tags: ['hongkong'],
          },
          {
            href: 'https://sundown.tougaloo.edu/sundowntowns.php',
            title: 'Sundown Towns Map',
            tags: ['racism', 'map'],
          },
          {
            href:
              'https://www.amwenglish.com/articles/george-floyd-uprisings-anatomy-of-a-counterinsurgency/',
            title: 'George Floyd Uprisings: Anatomy of a Counterinsurgency',
            tags: ['protests', 'police', 'usa'],
          },
          {
            href: 'https://www.amwenglish.com/',
            title: 'Abolition Media Worldwide English',
            tags: ['news', 'abolition'],
          },
        ],
      }).write()
      const v = [...y.get('resources').value()].reverse(),
        k = v.map((t) =>
          Object(h.a)(Object(h.a)({}, t), {}, { tags: b(t.tags) })
        ),
        x = (t) => v.filter((e) => t.includes(e.href)),
        C = new g(k, {
          shouldSort: !0,
          tokenize: !0,
          matchAllTokens: !0,
          threshold: 0.4,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 3,
          keys: ['href', 'title', 'tags', 'excerpts', 'description'],
        }),
        S = () => Promise.resolve(v),
        _ = () => Promise.resolve(w(v.flatMap(({ tags: t }) => t))),
        E = (t = '') =>
          Promise.resolve(
            ((t) => {
              const e = C.search(t).map(({ href: t }) => t)
              return x(e)
            })(t)
          ),
        T = (t = []) =>
          Promise.resolve(
            ((t) => {
              const e = k
                .filter((e) => t.every((t) => e.tags.includes(t)))
                .map(({ href: t }) => t)
              return x(e)
            })(t)
          ),
        R = { type: 'FETCH_RESOURCES_REQUEST' },
        j = (t) => ({ type: 'FETCH_RESOURCES_SUCCESS', resources: t }),
        P = (t) => ({ type: 'FILTER_RESOURCES_REQUEST', payload: t }),
        A = (t) => ({ type: 'FILTER_RESOURCES_SUCCESS', resources: t }),
        M = (t) => ({ type: 'SEARCH_RESOURCES_REQUEST', payload: t }),
        U = (t) => ({ type: 'SEARCH_RESOURCES_SUCCESS', resources: t }),
        O = { isFetching: !1, items: [] }
      const F = { type: 'FETCH_TAGS_REQUEST' },
        W = (t) => ({ type: 'FETCH_TAGS_SUCCESS', tags: t }),
        B = { isFetching: !1, items: [] }
      const I = (t) => (e) => {
          e(((t) => ({ type: 'SET_TAG', payload: t }))(t))
        },
        D = () => (t) => {
          t({ type: 'CLEAR_TAGS' })
        },
        L = { search: '', tags: [] }
      const N = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || s.d
      var z = Object(s.e)(
          Object(s.c)({
            resources: (t = O, e) => {
              switch (e.type) {
                case 'FETCH_RESOURCES_REQUEST':
                case 'FILTER_RESOURCES_REQUEST':
                case 'SEARCH_RESOURCES_REQUEST':
                  return Object(h.a)(
                    Object(h.a)({}, t),
                    {},
                    { isFetching: !0, resource: null }
                  )
                case 'FETCH_RESOURCES_SUCCESS':
                case 'FILTER_RESOURCES_SUCCESS':
                case 'SEARCH_RESOURCES_SUCCESS':
                  return Object(h.a)(
                    Object(h.a)({}, t),
                    {},
                    { isFetching: !1, items: e.resources }
                  )
                case 'FETCH_RESOURCES_ERROR':
                case 'FILTER_RESOURCES_ERROR':
                case 'SEARCH_RESOURCES_ERROR':
                  return Object(h.a)(Object(h.a)({}, t), {}, { isFetching: !1 })
                default:
                  return t
              }
            },
            tags: (t = B, e) => {
              switch (e.type) {
                case 'FETCH_TAGS_REQUEST':
                  return Object(h.a)(
                    Object(h.a)({}, t),
                    {},
                    { isFetching: !0, tags: null }
                  )
                case 'FETCH_TAGS_SUCCESS':
                  return Object(h.a)(
                    Object(h.a)({}, t),
                    {},
                    { isFetching: !1, items: e.tags }
                  )
                case 'FETCH_TAGS_ERROR':
                  return Object(h.a)(Object(h.a)({}, t), {}, { isFetching: !1 })
                default:
                  return t
              }
            },
            filterSearch: (t = L, e) => {
              switch (e.type) {
                case 'SET_TAG':
                  const i = e.payload,
                    o = t.tags.includes(i)
                      ? t.tags.filter((t) => t !== i)
                      : [...t.tags, i]
                  return Object(h.a)(
                    Object(h.a)({}, t),
                    {},
                    { tags: o, search: '' }
                  )
                case 'CLEAR_TAGS':
                  return Object(h.a)(Object(h.a)({}, t), {}, { tags: [] })
                case 'SET_SEARCH':
                  return Object(h.a)(
                    Object(h.a)({}, t),
                    {},
                    { search: e.payload, tags: [] }
                  )
                case 'CLEAR_SEARCH':
                  return Object(h.a)(Object(h.a)({}, t), {}, { search: '' })
                default:
                  return t
              }
            },
          }),
          N(Object(s.a)(n.a))
        ),
        H = i(1),
        K = i(4)
      var G = {
          error: '#f5222d',
          normalText: '#353c46',
          mutedText: '#64717d',
          border: '#ebedf0',
          accent: '#1890ff',
          pageBackground: '#f4f6f8',
          foreground: '#ffffff',
          activeBackground: '#fafafa',
          inputBackground: '#fcfcfc',
          shadow: 'rgba(0, 0, 0, 0.05)',
        },
        Q = i(7)
      var V = Object(Q.a)(),
        X = i(19),
        q = i(33)
      function Y() {
        const t = Object(X.a)([
          '\n  ',
          "\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    height: 100%;\n  }\n\n  body {\n    min-height: 100%;\n    padding-bottom: 24px;\n    font-family: 'Proxima Nova', 'Montserrat', 'Helvetica Neue', 'Noto Sans', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    background-color: ",
          ';\n  }\n',
        ])
        return (
          (Y = function () {
            return t
          }),
          t
        )
      }
      var Z = Object(H.b)(Y(), q.a, (t) => t.theme.pageBackground),
        J = i(11)
      const $ = Object(H.c)([
          'font-size:12px;font-weight:600;text-transform:uppercase;',
        ]),
        tt = Object(H.c)(['', ';font-weight:700;letter-spacing:0.05em;'], $),
        et = Object(H.e)(['from{opacity:0;}to{opacity:1;}']),
        it =
          (Object(H.c)(['animation:', ' 0.25s;'], et),
          (...t) => {
            let e = 'transition: '
            return (
              t.forEach((i, o) => {
                e = e.concat(
                  ''
                    .concat(i, ' 0.1s ease')
                    .concat(o === t.length - 1 ? ';' : ', ')
                )
              }),
              e
            )
          }),
        ot = Object(H.c)(['display:flex;align-items:center;flex-shrink:0;']),
        at = (t) =>
          Object(H.c)(
            [
              '',
              ';text-underline-position:under;text-decoration:none;color:',
              ';:hover{',
              ';color:',
              ';}',
            ],
            it('color'),
            (t) => t.theme.normalText,
            t.underline && 'text-decoration: underline',
            (t) => t.theme.accent
          ),
        rt =
          (Object(H.c)([
            'overflow:hidden;text-overflow:ellipsis;white-space:nowrap;',
          ]),
          Object(H.d)(J.a).withConfig({
            displayName: 'logo__Logo',
            componentId: 'sc-1io8raj-0',
          })(
            [
              '',
              ';font-size:24px;font-weight:500;color:',
              ';text-decoration:none;margin-left:42px;',
            ],
            ot,
            (t) => t.theme.normalText
          ))
      var st = () => o.createElement(rt, { to: '/' }, 'marxist.space')
      const nt = H.d.header.withConfig({
        displayName: 'header__Wrapper',
        componentId: 'sc-1hrgiqd-0',
      })(
        [
          'position:sticky;top:0;display:flex;align-items:stretch;margin-bottom:24px;box-shadow:0 4px 12px ',
          ';border-bottom:1px solid ',
          ';height:48px;background-color:',
          ';user-select:none;@media (max-width:600px){display:none;margin-bottom:16px;height:40px;}',
        ],
        (t) => t.theme.shadow,
        (t) => t.theme.border,
        (t) => t.theme.foreground
      )
      var ht = () => o.createElement(nt, null, o.createElement(st, null))
      const lt = H.d.a.withConfig({
        displayName: 'title__A',
        componentId: 'sc-1wa9v5f-0',
      })(
        [
          'display:flex;flex-direction:column;font-size:16px;line-height:21px;font-weight:500;text-decoration:none;color:',
          ';',
          ';small{font-size:12px;}',
        ],
        (t) => t.theme.normalText,
        at({ underline: !0 })
      )
      var ct = ({ title: t, href: e, description: i }) =>
        o.createElement(
          lt,
          { target: '_blank', rel: 'nofollow noopener noreferrer', href: e },
          t,
          i ? o.createElement('small', null, i) : null
        )
      var pt = H.d.div.withConfig({
        displayName: 'excerpt__Excerpt',
        componentId: 'sc-4pk9vj-0',
      })(
        [
          'max-width:800px;padding-bottom:1px;padding-left:8px;font-size:13px;line-height:19px;color:',
          ';',
        ],
        (t) => t.theme.mutedText
      )
      const mt = H.d.span.withConfig({
        displayName: 'tags__Span',
        componentId: 'sc-1jbaiul-0',
      })(
        ['font-size:12px;margin-top:auto;color:', ';'],
        (t) => t.theme.mutedText
      )
      var dt = (t) => o.createElement(mt, null, 'Tags: ', t.tags.join(' '))
      const gt = H.d.div.withConfig({
        displayName: 'resource__Wrapper',
        componentId: 'sc-14zyts-0',
      })(
        [
          'display:flex;height:auto;background-color:',
          ';flex:1;flex-direction:column;border-left:1px solid ',
          ';padding:8px;min-width:0;margin-bottom:8px;',
        ],
        (t) => t.theme.foreground,
        (t) => t.theme.border
      )
      class ut extends o.Component {
        render() {
          const t = this.props,
            e = t.href,
            i = t.title,
            a = t.description,
            r = t.tags,
            s = t.excerpts
          return o.createElement(
            gt,
            null,
            o.createElement(ct, { href: e, title: i, description: a }),
            s && s.length
              ? s.map((t, e) => o.createElement(pt, { key: e }, t))
              : null,
            o.createElement(dt, { tags: r })
          )
        }
      }
      const wt = H.d.li.withConfig({
        displayName: 'item__Item',
        componentId: 'sc-1qhbskl-0',
      })(
        [':not(:first-child){border-top:1px solid ', ';}'],
        (t) => t.theme.border
      )
      var ft = (t) => o.createElement(wt, null, o.createElement(ut, t))
      function bt() {
        const t = Object(X.a)([
          '\n  0% {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n\n  100% {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n',
        ])
        return (
          (bt = function () {
            return t
          }),
          t
        )
      }
      const yt = Object(H.e)(bt())
      var vt = H.d.div.withConfig({
        displayName: 'spinner__LoadingIndicatorSpinner',
        componentId: 'sc-1ukot1k-0',
      })(
        [
          'position:absolute;top:50%;left:50%;animation:',
          ' 1s infinite linear;border:0.3rem solid ',
          ';border-top-color:',
          ';border-radius:50%;width:48px;height:48px;',
        ],
        yt,
        (t) => ''.concat(t.theme.accent, '4d'),
        (t) => t.theme.accent
      )
      const kt = H.d.div.withConfig({
        displayName: 'box__Box',
        componentId: 'sc-14bi75-0',
      })(
        [
          'position:relative;margin:48px auto 0;border:1px solid ',
          ';border-radius:2px;width:72px;height:72px;background-color:',
          ';',
        ],
        (t) => t.theme.border,
        (t) => t.theme.foreground
      )
      var xt = () => o.createElement(kt, null, o.createElement(vt, null))
      const Ct = H.d.div.withConfig({
        displayName: 'empty__Wrapper',
        componentId: 'sc-1pr33f-0',
      })(
        [
          '',
          ';border:1px solid ',
          ';border-radius:2px;padding:48px 0;background-color:',
          ';text-align:center;color:',
          ';@media (max-width:600px){margin-top:-1px;border-left:none;border-right:none;border-radius:0;}',
        ],
        $,
        (t) => t.theme.border,
        (t) => t.theme.foreground,
        (t) => t.theme.mutedText
      )
      var St = () => o.createElement(Ct, null, "There's nothing here")
      const _t = H.d.ul.withConfig({
        displayName: 'resource-list__List',
        componentId: 'fc1hgj-0',
      })(
        [
          'list-style:none;border:1px solid ',
          ';border-radius:2px;@media (max-width:600px){border-top:none;border-left:none;border-right:none;border-radius:0;}',
        ],
        (t) => t.theme.border
      )
      class Et extends o.Component {
        constructor(...t) {
          super(...t),
            (this.loadResources = () => {
              const t = this.props,
                e = t.filters,
                i = t.search
              return i && i.length
                ? this.props.searchResources(i)
                : e && e.length
                ? this.props.filterResources(e)
                : this.props.fetchResources()
            }),
            (this.mapResources = () =>
              this.props.resources.map((t, e) =>
                o.createElement(ft, Object.assign({ key: e }, t))
              ))
        }
        componentDidMount() {
          this.loadResources()
        }
        componentDidUpdate(t) {
          ;(this.props.filters === t.filters &&
            this.props.search === t.search) ||
            this.loadResources()
        }
        render() {
          return this.props.isFetching
            ? o.createElement(xt, null)
            : this.props.resources && 0 !== this.props.resources.length
            ? o.createElement(_t, null, this.mapResources())
            : o.createElement(St, null)
        }
      }
      const Tt = {
        fetchResources: () =>
          (function () {
            var t = Object(p.a)(
              c.a.mark(function t(e) {
                var i
                return c.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return e(R), (t.prev = 1), (t.next = 4), S()
                        case 4:
                          ;(i = t.sent), e(j(i)), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8),
                            (t.t0 = t.catch(1)),
                            e({ type: 'FETCH_RESOURCES_ERROR', error: t.t0 })
                        case 11:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })(),
        filterResources: (t) =>
          (function () {
            var e = Object(p.a)(
              c.a.mark(function e(i) {
                var o
                return c.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return i(P(t)), (e.prev = 1), (e.next = 4), T(t)
                        case 4:
                          ;(o = e.sent), i(A(o)), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8),
                            (e.t0 = e.catch(1)),
                            i({ type: 'FILTER_RESOURCES_ERROR', error: e.t0 })
                        case 11:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                )
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
        searchResources: (t) =>
          (function () {
            var e = Object(p.a)(
              c.a.mark(function e(i) {
                var o
                return c.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return i(M(t)), (e.prev = 1), (e.next = 4), E(t)
                        case 4:
                          ;(o = e.sent), i(U(o)), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8),
                            (e.t0 = e.catch(1)),
                            i({ type: 'SEARCH_RESOURCES_ERROR', error: e.t0 })
                        case 11:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                )
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
      }
      var Rt = Object(r.b)(
        (t) => ({
          resources: t.resources.items,
          isFetching: t.resources.isFetching,
          filters: t.filterSearch.tags,
          search: t.filterSearch.search,
        }),
        Tt
      )(Et)
      const jt = H.d.main.withConfig({
          displayName: 'home__HomeMainSection',
          componentId: 'buhbew-0',
        })(['flex:1;min-width:0;max-width:100vw;']),
        Pt = H.d.div.withConfig({
          displayName: 'home__Wrapper',
          componentId: 'buhbew-1',
        })([
          'display:flex;align-items:flex-start;flex-direction:column;margin:0 16px;@media (min-width:600px){flex-direction:row;margin:0 42px;}',
        ])
      var At = () =>
          o.createElement(
            Pt,
            null,
            o.createElement(
              jt,
              null,
              o.createElement(K.a, { exact: !0, path: '/', component: Rt })
            )
          ),
        Mt = i(16),
        Ut = i.n(Mt)
      const Ot = H.d.div.withConfig({
          displayName: 'component__MainWrapper',
          componentId: 'q4cn7v-0',
        })(['background:', ';'], (t) => t.theme.pageBackground),
        Ft = {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
        },
        Wt = {
          zIndex: 2,
          position: 'absolute',
          top: 0,
          bottom: 0,
          transition: 'transform .3s ease-out',
          WebkitTransition: '-webkit-transform .3s ease-out',
          willChange: 'transform',
          overflowY: 'auto',
        },
        Bt = {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: 'auto',
          transition: 'left .3s ease-out, right .3s ease-out',
        },
        It = {
          zIndex: 1,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          visibility: 'hidden',
          transition: 'opacity .3s ease-out, visibility .3s ease-out',
          backgroundColor: 'rgba(0,0,0,.3)',
        }
      class Dt extends o.Component {
        constructor(...t) {
          super(...t),
            (this.sidebar = void 0),
            (this.state = { dragSupported: !1, sidebarWidth: 0 }),
            (this.overlayClicked = () => {
              this.props.open && this.props.onSetOpen(!1)
            }),
            (this.saveSidebarWidth = () => {
              if (this.sidebar) {
                const t = this.sidebar.offsetWidth
                t !== this.state.sidebarWidth &&
                  this.setState({ sidebarWidth: t })
              }
            }),
            (this.saveSidebarRef = (t) => {
              this.sidebar = t
            })
        }
        componentDidMount() {
          this.saveSidebarWidth()
        }
        componentDidUpdate() {
          this.saveSidebarWidth()
        }
        render() {
          const t = Object(h.a)({}, Wt),
            e = Object(h.a)({}, Bt),
            i = Object(h.a)({}, It),
            a = { style: Object(h.a)({}, Ft), role: 'navigation' },
            r = this.props.open || this.props.docked
          return (
            (t.left = 0),
            (t.transform = 'translateX(-100%)'),
            (t.WebkitTransform = 'translateX(-100%)'),
            r && (t.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.15)'),
            this.props.docked
              ? (0 !== this.state.sidebarWidth &&
                  ((t.transform = 'translateX(0%)'),
                  (t.WebkitTransform = 'translateX(0%)')),
                (e.left = ''.concat(this.state.sidebarWidth, 'px')))
              : this.props.open &&
                ((t.transform = 'translateX(0%)'),
                (t.WebkitTransform = 'translateX(0%)'),
                (i.opacity = 1),
                (i.visibility = 'visible')),
            o.createElement(
              'div',
              a,
              o.createElement(
                Ot,
                { style: t, ref: this.saveSidebarRef },
                this.props.sidebar
              ),
              o.createElement('div', {
                style: i,
                onClick: this.overlayClicked,
              }),
              o.createElement('div', { style: e }, this.props.children)
            )
          )
        }
      }
      var Lt = Dt
      const Nt = H.d.span.withConfig({
          displayName: 'item__Item',
          componentId: 'gwr8h8-0',
        })(
          [
            'padding:6px;font-size:14px;text-decoration:none;color:',
            ';font-weight:',
            ';cursor:pointer;text-decoration:underline;::after{left:-1px;top:0;bottom:0;border-left:3px solid ',
            ';}',
          ],
          (t) => t.theme.normalText,
          (t) => (t.isActive ? 'bold' : 'normal'),
          (t) => t.theme.accent
        ),
        zt = { set: I, clear: D }
      var Ht = Object(r.b)((t) => ({ currentTags: t.filterSearch.tags }), zt)(
        Object(K.f)(
          ({
            tag: t,
            set: e,
            clear: i,
            currentTags: a,
            history: { push: r },
            location: { search: s },
          }) => {
            const n = a.includes(t)
            return o.createElement(
              Nt,
              {
                isActive: n,
                onClick: () => {
                  if ('all' === t) i(), r('/')
                  else {
                    const i = (Ut()(s).tags || '').split(','),
                      o = (i.includes(t)
                        ? i.filter((e) => e !== t)
                        : [...i, t]
                      ).filter(Boolean)
                    o.length ? r('?tags='.concat(o.join(','))) : r('/'), e(t)
                  }
                },
              },
              t
            )
          }
        )
      )
      const Kt = H.d.aside.withConfig({
          displayName: 'tag-list__Aside',
          componentId: 'sc-2rofy7-0',
        })(
          [
            'border:1px solid ',
            ';border-radius:2px;background-color:',
            ';margin-top:16px;width:100%;max-width:250px;padding:8px;',
          ],
          (t) => t.theme.border,
          (t) => t.theme.foreground
        ),
        Gt = H.d.nav.withConfig({
          displayName: 'tag-list__TagListWrapper',
          componentId: 'sc-2rofy7-1',
        })(['display:flex;flex-direction:row;flex-wrap:wrap;'])
      class Qt extends o.Component {
        constructor(...t) {
          super(...t),
            (this.setTags = (t) => {
              this.props.history.push('?tags='.concat(t.join(','))),
                t.forEach((t) => {
                  this.props.setTag(t)
                })
            })
        }
        render() {
          return this.props.isFetching
            ? null
            : o.createElement(
                Kt,
                null,
                o.createElement(
                  Gt,
                  null,
                  [
                    'all',
                    ...[...this.props.tags].sort((t, e) => t.localeCompare(e)),
                  ].map((t, e) => o.createElement(Ht, { key: e, tag: t }))
                )
              )
        }
      }
      const Vt = { setTag: I, clearTags: D }
      var Xt = Object(r.b)(
        (t) => ({ tags: t.tags.items, isFetching: t.tags.isFetching }),
        Vt
      )(Object(K.f)(Qt))
      var qt = H.d.button.withConfig({
        displayName: 'button__Button',
        componentId: 'sc-3o94zp-0',
      })(
        [
          '',
          ';',
          ';border:none;border-radius:3px;padding:8px;background-color:',
          ';cursor:pointer;color:#ffffff;outline:none;:hover{filter:brightness(110%);}:active{filter:brightness(90%);}:focus{box-shadow:0 0 0 2px ',
          ';}',
        ],
        it('filter', 'box-shadow'),
        tt,
        (t) => t.theme.accent,
        (t) => ''.concat(t.theme.accent, '4d')
      )
      var Yt = Object(H.d)(qt).withConfig({
        displayName: 'submit-button__SubmitButton',
        componentId: 'dv0lmh-0',
      })(
        [
          '',
          ';cursor:pointer;background:',
          ';color:',
          ';@media (hover:hover){:hover path{fill:',
          ';}}',
        ],
        ot,
        (t) => t.theme.pageBackground,
        (t) => t.theme.normalText,
        (t) => t.theme.accent
      )
      var Zt = H.d.form.withConfig({
        displayName: 'form__Form',
        componentId: 'chtyc8-0',
      })(['margin-top:8px;display:flex;flex-direction:row;'])
      const Jt = H.d.label.withConfig({
          displayName: 'search__Label',
          componentId: 'bgbhx5-0',
        })(['width:0;height:0;']),
        $t = Object(H.d)(qt).withConfig({
          displayName: 'search__Clear',
          componentId: 'bgbhx5-1',
        })(
          ['', ';background:', ';color:', ';padding-left:8px;cursor:pointer;'],
          ot,
          (t) => t.theme.pageBackground,
          (t) => t.theme.normalText
        ),
        te = H.d.input.withConfig({
          displayName: 'search__Input',
          componentId: 'bgbhx5-2',
        })(
          [
            '',
            ';--border:',
            ';--shadow:',
            ';display:block;',
            ';border-radius:3px;width:100%;max-width:170px;padding:8px;background-color:',
            ';font-size:15px;color:',
            ';appearance:none;outline:none;resize:vertical;:hover,:focus{border:1px solid var(--border);}:focus{box-shadow:0 0 0 2px var(--shadow);}',
          ],
          it('border', 'box-shadow'),
          (t) => (t.error ? t.theme.error : t.theme.accent),
          (t) => ''.concat(t.error ? t.theme.error : t.theme.accent, '4d'),
          (t) =>
            t.error
              ? '\n    border: 1px solid var(--border)\n    '
              : '\n    border: 1px solid '.concat(t.theme.border, '\n  '),
          (t) => t.theme.inputBackground,
          (t) => t.theme.normalText
        )
      class ee extends o.Component {
        constructor(...t) {
          super(...t),
            (this.state = { search: '' }),
            (this.handleChange = (t) => {
              const e = t.target.value
              this.setState({ search: e })
            }),
            (this.clearSearch = () => {
              this.setState({ search: '' }),
                this.props.history.push('/'),
                this.props.clearSearch()
            }),
            (this.handleSubmit = (t) => {
              t.preventDefault(),
                this.state.search
                  ? (this.props.history.push(
                      '?search='.concat(this.state.search)
                    ),
                    this.props.setSearch(this.state.search))
                  : this.clearSearch()
            })
        }
        componentDidMount() {
          if (this.props.location.search) {
            const t = Ut()(this.props.location.search)
            t.search &&
              (this.setState({ search: t.search }),
              this.props.setSearch(t.search))
          }
        }
        render() {
          return o.createElement(
            Zt,
            { onSubmit: this.handleSubmit },
            o.createElement(Jt, { htmlFor: 'search' }, 'Search'),
            o.createElement(te, {
              onChange: this.handleChange,
              id: 'search',
              type: 'search',
              placeholder: 'Search',
              value: this.state.search,
            }),
            o.createElement(
              Yt,
              { title: 'Search ', type: 'submit' },
              '\ud83d\udd0e'
            ),
            o.createElement(
              $t,
              { title: 'Clear Search', onClick: this.clearSearch },
              'X'
            )
          )
        }
      }
      const ie = {
        setSearch: (t) => (e) => {
          e(((t) => ({ type: 'SET_SEARCH', payload: t }))(t))
        },
        clearSearch: () => (t) => {
          t({ type: 'CLEAR_SEARCH' })
        },
      }
      var oe = Object(r.b)(null, ie)(Object(K.f)(ee))
      const ae = H.d.article.withConfig({
          displayName: 'about__AboutSection',
          componentId: 'sc-19sucod-0',
        })(
          [
            'display:flex;flex-direction:column;margin-top:16px;font-size:14px;padding:0 16px;flex:1;min-width:0;a{',
            ';text-decoration:underline;}p{margin-bottom:16px;color:',
            ';line-height:1.5;}',
          ],
          at,
          (t) => t.theme.normalText
        ),
        re = ({ href: t, title: e }) =>
          o.createElement(
            'a',
            { href: t, target: '_blank', rel: 'nofollow noopener noreferrer' },
            e
          )
      var se = () =>
        o.createElement(
          ae,
          null,
          o.createElement(
            'p',
            null,
            'marxist.space is a',
            ' ',
            o.createElement(re, {
              href: 'https://prolesoft.github.io',
              title: 'ProleSoft',
            }),
            ' ',
            'project. Check out our',
            ' ',
            o.createElement(re, {
              href: 'https://prolesoft.github.io/blog',
              title: 'developer blog',
            }),
            '.'
          ),
          o.createElement(
            'p',
            null,
            'This project is',
            ' ',
            o.createElement(re, {
              href: 'https://github.com/prolesoft/marxist.space',
              title: 'free and open source',
            }),
            ' ',
            'under the',
            ' ',
            o.createElement(re, {
              href:
                'https://github.com/prolesoft/marxist.space/blob/master/LICENSE.md',
              title: 'LGPL-3.0',
            }),
            ' ',
            'license.',
            ' ',
            o.createElement(re, {
              href:
                'https://github.com/prolesoft/marxist.space/blob/master/.github/CONTRIBUTING.md',
              title: 'Contributions',
            }),
            ' ',
            'are welcome.'
          )
        )
      const ne = H.d.div.withConfig({
        displayName: 'collapse__CollapseHeader',
        componentId: 'sc-1oy3jgw-0',
      })(
        [
          'cursor:pointer;border:1px solid ',
          ';background-color:',
          ';color:',
          ';padding:16px;margin:4px 0;',
        ],
        (t) => t.theme.border,
        (t) => t.theme.foreground,
        (t) => t.theme.normalText
      )
      class he extends o.Component {
        constructor(...t) {
          super(...t),
            (this.state = { open: !1 }),
            (this.toggle = () => {
              this.setState(({ open: t }) => ({ open: !t }))
            })
        }
        render() {
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              ne,
              { onClick: this.toggle },
              ''
                .concat(this.state.open ? '\u2303' : '\u2304', ' ')
                .concat(this.props.title)
            ),
            this.state.open
              ? o.createElement(o.Fragment, null, this.props.children)
              : null
          )
        }
      }
      const le = H.d.header.withConfig({
          displayName: 'sidebar__ToggleWrapper',
          componentId: 'g5t5wt-0',
        })(
          [
            'position:sticky;top:0;display:flex;align-items:stretch;margin-bottom:24px;box-shadow:0 4px 12px ',
            ';border-bottom:1px solid ',
            ';height:48px;background-color:',
            ';user-select:none;margin-bottom:16px;height:40px;@media (min-width:600px){display:none;}',
          ],
          (t) => t.theme.shadow,
          (t) => t.theme.border,
          (t) => t.theme.foreground
        ),
        ce = Object(H.d)(qt).withConfig({
          displayName: 'sidebar__Toggle',
          componentId: 'g5t5wt-1',
        })(
          [
            '',
            ';background:',
            ';color:',
            ';padding:16px;cursor:pointer;@media (hover:hover){:hover path{fill:',
            ';}}',
          ],
          ot,
          (t) => t.theme.pageBackground,
          (t) => t.theme.normalText,
          (t) => t.theme.accent
        ),
        pe = H.d.aside.withConfig({
          displayName: 'sidebar__SidebarContentWrapper',
          componentId: 'g5t5wt-2',
        })(
          [
            'display:flex;padding-top:16px;flex-direction:column;width:250px;background:',
            ';',
          ],
          (t) => t.theme.pageBackground
        ),
        me = () =>
          o.createElement(
            pe,
            null,
            o.createElement(oe, null),
            o.createElement(he, { title: 'Tags' }, o.createElement(Xt, null)),
            o.createElement(he, { title: 'About' }, o.createElement(se, null))
          ),
        de = window.matchMedia('(min-width: 600px)')
      class ge extends o.Component {
        constructor(...t) {
          super(...t),
            (this.state = { docked: de.matches, open: !1 }),
            (this.setTags = (t) => {
              this.props.history.push('?tags='.concat(t.join(','))),
                t.forEach((t) => {
                  this.props.setTag(t)
                })
            }),
            (this.onSetOpen = (t) => {
              this.setState({ open: t })
            }),
            (this.mediaQueryChanged = () => {
              this.setState({ docked: de.matches, open: !1 })
            }),
            (this.toggleOpen = (t) => {
              t && t.preventDefault(),
                this.setState(({ open: t }) => ({ open: !t }))
            })
        }
        UNSAFE_componentWillMount() {
          de.addListener(this.mediaQueryChanged)
        }
        componentWillUnmount() {
          de.removeListener(this.mediaQueryChanged)
        }
        componentDidMount() {
          if (this.props.location.search) {
            const t = Ut()(this.props.location.search)
            if (t.tags) {
              const e = t.tags.split(',')
              this.setTags(e)
            }
          }
        }
        render() {
          const t = {
            sidebar: o.createElement(me, null),
            docked: this.state.docked,
            open: this.state.open,
            onSetOpen: this.onSetOpen,
          }
          return o.createElement(
            Lt,
            t,
            !this.state.docked &&
              o.createElement(
                le,
                null,
                o.createElement(ce, { onClick: this.toggleOpen }, '=')
              ),
            this.props.children
          )
        }
      }
      const ue = { setTag: I }
      var we = Object(r.b)(null, ue)(Object(K.f)(ge))
      class fe extends o.Component {
        componentDidMount() {
          this.props.fetchTags()
        }
        render() {
          return o.createElement(
            H.a,
            { theme: G },
            o.createElement(
              K.b,
              { history: V },
              o.createElement(
                o.Fragment,
                null,
                o.createElement(Z, null),
                o.createElement(
                  we,
                  null,
                  o.createElement(K.a, { component: ht }),
                  o.createElement(
                    K.c,
                    null,
                    o.createElement(K.a, { path: '/', component: At })
                  )
                )
              )
            )
          )
        }
      }
      const be = {
        fetchTags: () =>
          (function () {
            var t = Object(p.a)(
              c.a.mark(function t(e) {
                var i
                return c.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return e(F), (t.prev = 1), (t.next = 4), _()
                        case 4:
                          ;(i = t.sent), e(W(i)), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8),
                            (t.t0 = t.catch(1)),
                            e({ type: 'FETCH_TAGS_ERROR', error: t.t0 })
                        case 11:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })(),
      }
      var ye = Object(r.b)(null, be)(fe)
      const ve = Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})){3}$/
            )
        ),
        ke = (t, e) => {
          navigator.serviceWorker
            .register(t)
            .then((t) => {
              t.onupdatefound = () => {
                const i = t.installing
                null != i &&
                  (i.onstatechange = () => {
                    'installed' === i.state &&
                      (navigator.serviceWorker.controller
                        ? e && e.onUpdate && e.onUpdate(t)
                        : e && e.onSuccess && e.onSuccess(t))
                  })
              }
            })
            .catch((t) => {})
        }
      a.render(
        o.createElement(r.a, { store: z }, o.createElement(ye, null)),
        document.getElementById('root')
      ),
        ((t) => {
          if ('serviceWorker' in navigator) {
            if (
              new URL('', window.location.href).origin !==
              window.location.origin
            )
              return
            window.addEventListener('load', () => {
              const e = ''.concat('', '/service-worker.js')
              ve
                ? (((t, e) => {
                    fetch(t)
                      .then((i) => {
                        const o = i.headers.get('content-type')
                        404 === i.status ||
                        (null != o && !o.includes('javascript'))
                          ? navigator.serviceWorker.ready.then((t) => {
                              t.unregister().then(() => {
                                window.location.reload()
                              })
                            })
                          : ke(t, e)
                      })
                      .catch(() => {
                        console.warn(
                          'No internet connection found. App is running in offline mode.'
                        )
                      })
                  })(e, t),
                  navigator.serviceWorker.ready.then(() => {}))
                : ke(e, t)
            })
          }
        })()
    },
  },
  [[37, 1, 2]],
])
//# sourceMappingURL=main.2573acf3.chunk.js.map
