// ── TIMELINE CONFIG ──────────────────────────────────────────────
const TIMELINE_CONFIG = {
  startYear: 2020,
  endYear: 2027,
  currentYear: 2026.23
};

// ── TIMELINE DATA ─────────────────────────────────────────────────
// itemType: 'work' (close to axis) | 'education' (far above, umbrella bracket) | 'annotation' (grey handwritten)
// position: 'above' | 'below'
// verticalOffset: 0 (default) | 1 | 2

const TIMELINE_DATA = [
  // ─── WORK (close to axis) ───
  {
    id: 'highschool-1on1',
    title: 'Co-founded\nHighSchool 1-on-1',
    startYear: 2020.0,
    endYear: 2021.1,
    position: 'below',
    itemType: 'work',
    colorClass: 'pill-teal',
    barColor: '#A8D8EA',
    labelColor: '#1A5276',
    verticalOffset: 0,
    details: {
      years: '2020 – 2021',
      summary: 'Co-founding an academic upskilling initiative for IB students.',
      bullets: [
        'Ran Facebook Manager, WhatsApp, and Instagram campaigns',
        'Built partnerships with coaching institutes',
        'Mentored 15+ students to stronger IA/EE outcomes'
      ],
      images: [],
      results: [
        '50+ students counselled across business and college prep',
        'Raised 35k INR for COVID relief through community fundraising'
      ],
      tools: ['Google Meet', 'Notion', 'Google Docs', 'WhatsApp'],
      links: []
    }
  },
  {
    id: 'radarr',
    title: 'Digital intelligence\nat Radarr',
    startYear: 2021.1,
    endYear: 2023.5,
    position: 'below',
    itemType: 'work',
    colorClass: 'pill-pink',
    barColor: '#F8C4C9',
    labelColor: '#7D2638',
    verticalOffset: 0,
    details: {
      years: '2022 – 2023',
      summary: '',
      bullets: [
        'In charge of GTM for academy@radarr (their social listening certification)',
        'Managed Twitter',
        'Managed AIA',
        'Managed Prudential'
      ],
      images: [],
      results: [
        '150+ cold calls, 500+ cold emails per month with 80-120 leads — 18% qualification rate',
        'Resubscribing clients'
      ],
      tools: [],
      links: []
    }
  },
  {
    id: 'loreal',
    title: 'IT at L\'Oreal',
    startYear: 2023.5,
    endYear: 2024.08,
    position: 'above',
    itemType: 'work',
    colorClass: 'pill-orange',
    barColor: '#F5A623',
    labelColor: '#7A4400',
    verticalOffset: 0,
    details: {
      years: '2023 – 2025',
      summary: '',
      bullets: [
        'streamlined compliance workflows and tracking across 1,500 contracts',
        'created a vendor onboarding dashboard, mcd 6+ events with 4,000 attendees'
      ],
      images: [],
      results: [
        '30% increase in efficiency',
        'ranked #1 out of 13 IT interns'
      ],
      tools: [],
      links: []
    }
  },
  {
    id: 'peaktew',
    title: 'BD at PeakTew',
    startYear: 2024.1,
    endYear: 2025.6,
    position: 'below',
    itemType: 'work',
    colorClass: 'pill-green',
    barColor: '#C4EDCA',
    labelColor: '#1A5E24',
    verticalOffset: 0,
    details: {
      years: '2024 – 2025',
      summary: '',
      bullets: [
        'used heyreach, lemlist, and buffer to run outbound outreach campaigns',
        'led a team of 5 business developers',
        'pitched to 5+ ventures'
      ],
      images: [],
      results: [
        'grew brand from 3,000 to 20,000 linkedin followers in 4 months',
        'secured funding from 3 [investors/VCs — please confirm]'
      ],
      tools: ['HeyReach', 'Lemlist', 'Buffer'],
      links: []
    }
  },
  {
    id: 'invigilo',
    title: 'GTM at Invigilo.ai',
    startYear: 2025.7,
    endYear: 2026.3,
    labelOffset: 9,
    position: 'above',
    itemType: 'work',
    colorClass: 'pill-peach',
    barColor: '#FBCFAA',
    labelColor: '#7D3A10',
    verticalOffset: 0,
    details: {
      years: '2025 – present',
      summary: 'Led GTM engineering at an AI security startup.',
      bullets: [
        'Automated outbound across Apollo, Lemlist, and HubSpot',
        'Created processes for post-sales and dormant leads on HubSpot',
        'Drove LinkedIn founder content strategy'
      ],
      images: [],
      results: [
        'Major increase in cost and time efficiency',
        'Predictable lead flow and pipeline',
        'Inbound leads generated through LinkedIn'
      ],
      tools: ['HubSpot', 'Apollo', 'Lemlist', 'n8n', 'Claude', 'LinkedIn'],
      links: []
    }
  },

  // ─── EDUCATION (umbrella, far above with brackets) ───
  {
    id: 'essec-bba',
    title: 'Global BBA from ESSEC, France',
    startYear: 2020.0,
    endYear: 2024.42,
    position: 'above',
    itemType: 'education',
    colorClass: 'pill-outline',
    bracketColor: '#F97316',
    verticalOffset: 0,
    details: {
      years: '2020 – 2024',
      summary: 'Global BBA from ESSEC Business School, France.',
      bullets: [
        'Courses: Data Analytics, Consumer Behaviour, Accounting & Finance, Entrepreneurship, Mandarin, French'
      ],
      images: [],
      resultsLabel: 'achievements',
      results: [
        'Merit scholarship for 2 consecutive years',
        'Student ambassador and designer of official ESSEC stickers and merch'
      ],
      links: []
    }
  },
  {
    id: 'nus-masters',
    title: 'Masters in NUS',
    startYear: 2025.0,
    endYear: 2026.23,
    position: 'above',
    itemType: 'education',
    colorClass: 'pill-outline',
    bracketColor: '#E53935',
    verticalOffset: 0,
    details: {
      years: '2025 – 2026',
      summary: 'Masters in Business Analytics and Marketing at NUS.',
      bullets: [
        'Courses: R, Python, SQL, Tableau, AI in Marketing'
      ],
      images: [],
      resultsLabel: 'achievements',
      results: [
        'Passed R'
      ],
      links: []
    }
  },

  // ─── ANNOTATIONS (grey handwritten font) ───
  {
    id: 'newa-creatives',
    title: 'Newa Creatives',
    startYear: 2024.1,
    endYear: 2025.0,
    position: 'above',
    itemType: 'annotation',
    hasBar: true,
    barPattern: 'checkered',
    barColor: '#1A3A5C',
    colorClass: 'pill-annotation',
    verticalOffset: 0,
    customModal: 'clients',
    description: 'Helped startup founders and professionals build their LinkedIn inbound presence and SEO credibility.',
    details: {
      years: '2024 – 2025',
      summary: 'Helped startup founders and professionals build their LinkedIn inbound presence and SEO credibility.',
      results: [
        '1M+ impressions combined across clients',
        'A senior software engineer received a job offer because of project posts I made'
      ]
    },
    clients: [
      {
        name: 'Cloka',
        url: 'https://www.cloka.in/',
        logoSrc: '',
        bgColor: '#F0F0F0',
        images: [],
        stats: ''
      },
      {
        name: 'Mind In The Mountains',
        url: 'https://www.linkedin.com/in/talyashelley/',
        logoSrc: '',
        bgColor: '#FCE8F0',
        images: [],
        stats: ''
      },
      {
        name: 'Naseer Khan — Senior Software Engineer',
        url: 'https://www.linkedin.com/in/naseer-ahmed-khan-ntu/',
        logoSrc: '',
        bgColor: '#FFF3E0',
        images: [],
        stats: '4,081 impressions · 2,273 members reached'
      },
      {
        name: 'invideo.io',
        url: 'https://invideo.io/',
        logoSrc: '',
        bgColor: '#EEF4FF',
        images: [],
        stats: ''
      }
    ]
  },
  {
    id: 'women-ai',
    title: 'Women in AI mentor',
    startYear: 2025.25,
    endYear: 2025.4,
    position: 'below',
    itemType: 'annotation',
    hasBar: true,
    barPattern: 'checkered',
    barColor: '#C0392B',
    colorClass: 'pill-annotation',
    verticalOffset: 0,
    details: {
      years: '2025',
      summary: '',
      bullets: [
        'mentored 15+ undergraduate students in the NUS school of computing',
        'moderated fireside chats with leadership from google, amazon'
      ],
      images: ['assets/images/mentee_sxuan_1.png', 'assets/images/mentee_sxuan_2.png'],
      hoverImage: 'assets/images/mentee_sxuan_1.png',
      results: [],
      links: []
    }
  }
];

// ── WORKFLOWS DATA ────────────────────────────────────────────────
const WORKFLOWS_DATA = [
  {
    id: 'workflow-outreach',
    title: 'Complete Outreach Automation',
    coverImage: 'assets/images/workflows/invigilo_outreach.png',
    coverColor: '#F0F4FF',
    customModal: 'workflow',
    video: 'assets/videos/outreach.mov',
    objective: 'build a web app to automate end-to-end outreach for Invigilo.',
    whatIDid: 'used a SQLite database with Claude Code as the orchestration layer and Tailscale for secure multi-user access. Connected Apollo, Lemlist, and PhantomBuster to Outlook and HubSpot for prospecting, sequencing, and follow-ups.',
    results: '100% reduction in agency costs — stopped using third-party outreach agencies like 1000 Steps and Nuggt.io, and 90% increase in efficiency writing outreach emails and follow-ups for events.',
    tools: ['Apollo', 'Lemlist', 'PhantomBuster', 'Claude Code', 'SQLite', 'Tailscale', 'Outlook', 'HubSpot']
  },
  {
    id: 'workflow-claude-hubspot',
    title: 'Claude x HubSpot',
    coverImage: 'assets/images/workflows/claude_x_hubspot.png',
    coverPosition: 'right',
    coverColor: '#EFF6FF',
    customModal: 'workflow',
    objective: 'build an AI email assistant in Outlook that eliminates context-switching between inbox and CRM.',
    whatIDid: 'built and deployed on Azure, integrating WhisperFlow, HubSpot, and Outlook via a custom API layer with Fireflies call notes as input.',
    results: 'reduced follow-up drafting time, eliminated manual CRM entry after calls, and improved reply tracking across the team.',
    tools: ['Claude', 'Azure', 'WhisperFlow', 'HubSpot', 'n8n']
  },
  {
    id: 'workflow-claude-dispatch',
    title: 'Claude Dispatch',
    coverImage: 'assets/images/workflows/claude_dispatch.jpg',
    coverColor: '#F5F0FF',
    customModal: 'workflow',
    objective: 'replace manual CRM navigation with a single Telegram chat interface for pipeline intelligence, reminders, and reports.',
    whatIDid: 'built a Telegram bot connected to HubSpot via n8n, with Claude as the intelligence layer interpreting and routing natural language commands.',
    results: '90% reduction in time spent on reminders, deal analytics, and proposals — deal intelligence delivered directly to Telegram.',
    tools: ['Claude', 'n8n', 'HubSpot', 'Telegram']
  },
  {
    id: 'workflow-lemlist',
    title: 'Lemlist',
    coverImage: 'assets/images/workflows/lemlist.png',
    coverColor: '#FFF0F0',
    customModal: 'workflow',
    objective: 'run a scalable outbound campaign targeting high-risk industries in India with strong deliverability across 1,000 leads.',
    whatIDid: 'built a qualified lead list on Apollo, then set up Lemlist for automated email and LinkedIn outreach with analytics tracking.',
    results: '84% deliverability rate across 1,000 leads sent, with 630 messages delivered and strong open rates.',
    tools: ['Apollo', 'Lemlist', 'LinkedIn']
  },
  {
    id: 'workflow-reddit',
    title: 'Reddit',
    coverImage: 'assets/images/workflows/reddit_cover.png',
    coverColor: '#FFF0EC',
    modalImage: 'assets/images/workflows/reddits.png',
    customModal: 'workflow',
    objective: 'build Invigilo\'s credibility in niche B2B communities to generate organic inbound leads.',
    whatIDid: 'posted practical, non-promotional content on AI, automation, and GTM across r/construction, r/sales, and industry-specific subreddits.',
    results: 'strong SEO lift, GEO presence in AI-generated search results, and inbound interest from relevant communities.',
    tools: ['Reddit']
  },
  {
    id: 'workflow-n8n',
    title: 'n8n',
    coverImage: 'assets/images/workflows/n8n.jpg',
    coverColor: '#FFF4F0',
    customModal: 'workflow',
    objective: 'stay up to date with industry news about high-risk industries and turn it into timely content and outreach.',
    whatIDid: 'used RSS feeds from news platforms and connected the Anthropic API to filter and summarise the news. Used Twilio to push daily updates via WhatsApp and email.',
    results: 'real-time, contextual outreach and content — always updated with the latest industry news.',
    tools: ['n8n', 'Anthropic API', 'Twilio', 'WhatsApp', 'RSS']
  },
  {
    id: 'workflow-linkedin-buffer',
    title: 'LinkedIn x Buffer',
    coverImage: 'assets/images/workflows/linkedin.png',
    coverPosition: 'left',
    modalImage: 'assets/images/workflows/linkedin_modal.png',
    coverColor: '#EFF6FF',
    customModal: 'workflow',
    objective: 'build authority in AI and GTM to generate inbound leads without paid ads.',
    whatIDid: 'posted on LinkedIn via the founder\'s account and my own on AI automation, sales, and GTM strategy — scheduled via Buffer.',
    results: 'organic Business Times feature, inbound partnership leads, and conference sign-ups driven entirely through content.',
    tools: ['LinkedIn', 'Buffer']
  }
];

// ── SIDE QUESTS DATA ──────────────────────────────────────────────
const SIDE_QUESTS_DATA = [
  {
    id: 'public-speaking',
    title: 'Speaking',
    description: 'yapping on stage',
    cta: 'View talks',
    coverImage: 'assets/images/public-speaking.jpg',
    coverColor: '#F97316',
    customModal: 'speaking',
    speakingEntries: [
      {
        type: 'images',
        images: ['assets/images/ps6.jpg', 'assets/images/ps8.jpg'],
        caption: 'presenting my N8N X claude workflow at the Women in AI festival',
        link: 'https://www.linkedin.com/posts/thenehalagrawal_spent-my-saturday-at-the-women-in-ai-for-activity-7439308382471352320-SAOa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB9HVqEBVXIXpUOWFkQRPaLsRf-LbhMg0i8',
        linkLabel: 'See more'
      },
      {
        type: 'images-split',
        items: [
          { src: 'assets/images/ps5.jpg', caption: 'won top intern award amongst 13 IT interns' },
          { src: 'assets/images/ps7.jpg', caption: 'represented l\'oreal in front of IT vendors' }
        ],
        link: 'https://www.linkedin.com/posts/thenehalagrawal_beautytech-internshipjourney-vmo-activity-7135158150986403840-qp4y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB9HVqEBVXIXpUOWFkQRPaLsRf-LbhMg0i8',
        linkLabel: 'See more'
      },
      {
        type: 'images',
        images: ['assets/images/ps4.png'],
        caption: 'hosted and moderated events for Women in Tech with speakers from AWS, Google, Grab',
        link: 'https://www.linkedin.com/posts/namithamathews_earlier-this-week-i-had-the-joy-of-kicking-activity-7364455549339439104-6jDM/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB9HVqEBVXIXpUOWFkQRPaLsRf-LbhMg0i8',
        linkLabel: 'See more'
      },
      {
        type: 'video-image',
        videoSrc: 'https://www.youtube.com/embed/lbMdwWY-sSE',
        imageSrc: 'assets/images/ps3.png',
        caption: 'slam poetry written and delivered by me'
      }
    ],
    details: {
      text: '',
      media: [
        { type: 'video', src: 'https://www.youtube.com/embed/lbMdwWY-sSE' }
      ],
      links: []
    }
  },
  {
    id: 'illustrations',
    title: 'Illustrations',
    description: 'my ipad and me against the world',
    cta: 'View gallery',
    coverImage: 'assets/images/illustrations.jpg',
    coverColor: '#E2E8F0',
    details: {
      text: '',
      media: [
        'assets/images/art/233.jpg',
        'assets/images/art/5.png',
        'assets/images/art/6.png',
        'assets/images/art/IMG_1435.JPG',
        'assets/images/art/LOGO.png',
        'assets/images/art/Skincare.jpg',
        'assets/images/art/Untitled_Artwork_12_copy.JPG',
        'assets/images/art/Untitled_Artwork_12.jpg',
        'assets/images/art/Untitled_Artwork_15.jpg',
        'assets/images/art/Screenshot_2026-03-28_at_10.23.39_AM.png',
        'assets/images/art/Screenshot_2026-03-28_at_10.23.57_AM.png',
        'assets/images/art/Screenshot_2026-03-28_at_10.24.23_AM.png',
        'assets/images/art/Screenshot_2026-03-28_at_10.24.44_AM.png',
        'assets/images/art/Screenshot_2026-03-28_at_10.25.03_AM.png',
        'assets/images/art/Screenshot_2026-03-28_at_10.25.13_AM.png',
        'assets/images/art/Screenshot_2026-03-28_at_10.25.22_AM.png',
        'assets/images/art/Screenshot_2026-03-28_at_10.25.30_AM.png',
        'assets/images/art/Screenshot_2026-03-28_at_10.25.43_AM.png'
      ],
      links: [],
      tools: ['Procreate'],
      hideGalleryLabel: true
    }
  },
  {
    id: 'blogs-reviews',
    title: 'Book Reviews',
    description: 'my thoughts on books i\'ve read',
    cta: 'Read posts',
    coverImage: 'assets/images/blogs-cover.png',
    coverColor: '#E0E7FF',
    customModal: 'blog',
    blogPosts: [
      {
        title: 'Wordslut by Amanda Montell: A Linguistic Revolution',
        date: 'Dec 30, 2024',
        rating: '⭐⭐⭐⭐⭐',
        thumbnail: 'https://nehalagrawal867163731.wordpress.com/wp-content/uploads/2024/10/screenshot-2024-11-12-at-1.17.07e280afpm.png?w=1024',
        body: '<blockquote>"I think the golden rule for men should be: If you\'re a man, don\'t say anything to a woman on the street that you wouldn\'t want a man saying to you in prison."<br>— from <em>Wordslut</em> by Amanda Montell</blockquote>' +
          '<p>As a sincere fan and regular user of the English language, learning about the etymologies of certain words/phrases never gets old. The only way it gets better is through a lens of sociolinguistics to learn the way language and gender intersect. The author, Amanda Montell, describes this book as "the psychedelic universe that exists behind the English language" as it takes us through the impact of speech styles in our daily interactions, the semantical disparity between the insults used for males and females and historically skewed evolutions of some of our favourite phrases.</p>' +
          '<p>It\'s a humbling yet conflicting experience to disagree with parts of a book and still emerge from its pages with newfound, eye-opening perspectives. Montell\'s hilarious writing style had me laughing out loud multiple times, while the questions she put forth made me review the inadvertent use of language biases.</p>' +
          '<h3>Male until otherwise-indicated</h3>' +
          '<p>We know that <em>man</em> and <em>person</em> are oftentimes synonymous in English. We see it in phrases like "no man is an island" or "a dog is a man\'s best friend" or "need every man on deck". While it is commonplace to use in idioms and historic literature, this pervasive assumption becomes harmful when it is extrapolated to professions like actors, scientists, lawyers, and doctors. Such a disparity is further reflected when we use terms like "female doctor" or "woman scientist."</p>' +
          '<p>You know the scene in Modern Family when Alex attends a seminar for "being your own SHE-EO"? Montell reminds us that terms like SHE-EO and girlboss just illuminate that words like <em>entrepreneur</em> and <em>CEO</em> are not inherently gender-neutral terms but are tacitly coded as male. Similarly, for words like \'Mompreneur\' or \'Fempreneur\', she argues that while they make for trendy hashtags, they don\'t work towards undoing implicit sexism in language, they reinforce them instead.</p>' +
          '<p>While I do agree that such diminutive language can be counter-productive (and infantilise women\'s leadership positions), I wonder if it\'s actually doing more harm than good. In male-dominated industries, terms like SHE-EO and Mompreneur are often used for empowerment and community building in a landscape where woman representation is lacking, celebrating the unique experiences of being a woman in business. Perhaps there is a balance where the fight to reclaim the gender-neutral lexicon persists while differentiating the branding of SHE-EOs and Mompreneurs.</p>' +
          '<img src="https://nehalagrawal867163731.wordpress.com/wp-content/uploads/2024/12/wordslut.jpeg?w=955" alt="Wordslut">' +
          '<h3>Bitch, Please!</h3>' +
          '<blockquote>"If you want to insult a woman, call her a prostitute. If you want to insult a man, call him a woman."<br>— from <em>Wordslut</em> by Amanda Montell</blockquote>' +
          '<p>A survey of gendered insults at UCLA revealed that almost 90% of all recorded slangs for women were negative, compared to only 46% for men. In fact, even the "positive" terms compared women to food: peach, treat, cupcake. Some of my favourite fill-me-with-rage evolutions were:</p>' +
          '<ul>' +
          '<li>The evolution of <strong>master</strong> and <strong>mistress</strong>: formerly indicated people of authority in the old French. Over time, only the feminine term got contaminated to mean a sexually promiscuous woman with a married man. Meanwhile, <em>master</em> continues to mean \'in charge\' or even \'conquer a difficult skill\'.</li>' +
          '<li>Similarly, <strong>buddy</strong> and <strong>sissy</strong>, which were originally abbreviations of brother and sister, evolved unevenly. <em>Buddy</em> came to mean a close pal, whereas <em>sissy</em> refers to a weak or an overly effeminate man.</li>' +
          '<li><strong>Hussy</strong>, originally a shorter version of Old English <em>husewif</em> (female head of household), is now used to describe a lewd woman or prostitute.</li>' +
          '<li>The word <strong>Slut</strong>: the Middle English term used to be <em>slutte</em>, which merely meant \'untidy\' woman, which soon enough extended to mean a sexually loose woman and got fortified in pornography by the late 1990s. Interestingly, there is a male equivalent — <em>manslut</em> — which not only has a lighter connotation but also reinforces that <em>slut</em> with no modifier is inherently female and implies, as Montell puts it, "promiscuity is only contemptible when women do it."</li>' +
          '</ul>' +
          '<img src="https://nehalagrawal867163731.wordpress.com/wp-content/uploads/2024/12/wordslut-2.jpeg?w=947" alt="Wordslut 2">' +
          '<p>Montell links this sexually-centred semantic evolution to human history. When homo sapiens lived free, nomadic lifestyles wandering from place to place, men and women had multiple sexual partners and female sexuality was normal and encouraged. Then humans stopped moving, owning land became desirable, the idea of passing it down to children arose, and in order for men to know their children, female monogamy became a must. Goddess-like female sexual liberation went kaput.</p>' +
          '<p>Do such terms ever ameliorate? Why, yes they do! For men, mostly.</p>' +
          '<ul>' +
          '<li>The word <strong>stud</strong>, originally a male breeding animal, turned into a slang for a hot, manly dude.</li>' +
          '<li><strong>Knight</strong>, originally meant as a young boy or servant, now is a gallant gentleman.</li>' +
          '<li>Interestingly, the word <strong>queer</strong> used to be exclusively a homophobic insult, but it has gone through an impressive self-affirming turnabout by academics and the LGBTQ+ community.</li>' +
          '</ul>' +
          '<p>Montell outlines the ways females have been reclaiming some of these insults. For instance, Black female recording artists pioneered <em>bad bitch</em> to mean a confident, sassy woman. Feminist mogul Andi Zeisler mentions that the way to reduce harm of gendered insults is to avoid using them abusively ("Wow, impressive, she\'s a bad bitch!"). Another way is to take the so-called "contemptible promiscuity" out of words like <em>slut</em> or <em>whore</em> ("Zack is such a slut for McDonald\'s fries").</p>' +
          '<h3>Can you, like, not?</h3>' +
          '<p>When I think \'girl talk\' I think the banal assumption of superficial gossip and intimate conversation. When linguists think \'girl talk\' they think <em>genderlects</em>: speech styles evolving differently between men and women.</p>' +
          '<p>UC Berkeley\'s Robin Lakoff observed some characteristics of women\'s speech: vocal fry, valley girl talk (think Kim Kardashian), saying <em>like</em> after every other word, apologising too much, using hyperbolic internet slang (OMG I AM LITERALLY DYING), speaking with uptalk (ending a declarative sentence with the upward intonation of a question), ultra-polite language (would you mind if I…), tag questions (this movie was good, wasn\'t it?). He claimed that this happens because women are socialised to be deferential and unassertive. Contrastingly, Montell claims that people see aspects like softening hedges as signs of uncertainty and hesitancy but they\'re actually used to help create trust and empathy. They\'ve been used to save face of all participants, negotiate sensitive topics and encourage participation of others. For instance, females use minimal responses like <em>yeah, right, mh-hmm</em> to demonstrate active listening and consensus.</p>' +
          '<p>Having been trained in public speaking, and grown up hearing Indian English, hedging or any form of \'uncertainty\' in language was shamed out of me pretty early on. So it was interesting to see Montell\'s reasoning for why these are good: Vocal fry is low in pitch so it turns out to be a way for women to compete with men\'s voices. Using \'like\' can be used as a discourse marker to help a person connect, organise or express a certain attitude with their speech ("Like, this suit isn\'t even new"). Uptalk can be a way to state an opinion confidently while opening for others\' responses.</p>' +
          '<p>So whether you like it or not, the idea is that instead of deploring the way women speak, focus on the context behind their proclivities, or better yet, their content.</p>' +
          '<blockquote>"One of our culture\'s least helpful pieces of advice is that women need to change the way they speak to sound less \'like women\' (or that queer people need to sound straighter, or that people of colour need to sound whiter)."<br>— Amanda Montell</blockquote>' +
          '<blockquote>"I\'ve heard the satirical argument that women were given purses to hold and high heels to wear to physically slow them down. While I don\'t take this sentiment literally, I think you can compare it to the critique of women\'s voices, which are there to steal the focus away from the content of their statements, while distracting women with the anxiety of how their speech sounds to other people."<br>— Amanda Montell</blockquote>' +
          '<p>Montell covers much more in her book, including the gender changes in different languages and what they reveal about culture, the history of the English lexicon, and how various social communities interact with language. It may seem like I\'ve spoiled the book, but truly, reading it is an experience in itself.</p>' +
          '<p>What I took away from this is that small changes matter. Simple, mindful corrections can lead to shifts in society\'s social fabric. However, social media can be tricky to navigate. For instance, reels of "#womeninmalefields" show satirizing behaviors usually associated with men; it\'s light-hearted and fun, but at some point, we have to ask if it unintentionally risks deepening the chasm between genders on a macro scale or reinforcing those behaviors. Are other hashtags like "girlmath" or "Imjustagirl" implicitly denigrating the experience of being a woman? The good thing is that we have the opportunity to engage in digital consciousness-raising by resharing humorous content while also fostering inclusive dialogue and being mindful of our impact.</p>' +
          '<p>Let\'s create change, one word at a time. Because, like, it\'s important?</p>'
      },
      {
        title: 'The Strength of Panchaali: A Book Review of The Palace of Illusions',
        date: 'Aug 28, 2024',
        rating: '⭐⭐⭐⭐',
        thumbnail: 'https://nehalagrawal867163731.wordpress.com/wp-content/uploads/2024/08/business-models-in-singapore-3-1.png?w=900',
        body: '<blockquote>"She is a woman trying to forge a destiny in a man\'s world. And so am I."<br>— from <em>A Palace of Illusions</em> by Chitra Banerjee Divakaruni</blockquote>' +
          '<p>It is a daring endeavour to attempt to rewrite one of the world\'s most enduring stories and Chitra Banerjee Divakaruni does this beautifully. She gives Draupadi, also known as Panchaali, a voice that shouts the struggles of contemporary women, experiences gut-wrenching situations while trying to cement her identity in a male-dominated world.</p>' +
          '<p>While there are some creative liberties that changed the content of the original Mahabharata (like Panchaali being cherished by King Drupad in the original Mahabharata while in Palace of Illusions, she\'s seen as a burden), the book covers most of the events in the Mahabharata, but keeps Draupadi\'s perspective as a focal point.</p>' +
          '<p>Somehow, as a reader, I knew what to expect and was still left struck by eye-opening revelations. Having grown up with a singular version of the Mahabharata, it was like getting my hands on precious behind-the-scenes footage of a revered TV character. I had added this remarkable book to my TBR list in 2022 and I am grateful that I finally got around to reading it.</p>' +
          '<h3>Impressions</h3>' +
          '<h4>Conflicting Eras</h4>' +
          '<p>Initially, I had conflicting feelings about the overt portrayal of Draupadi as having anthropogenic emotions such as crude jealousy, superficial romanticisation and blinding anger. It seemed to go against my intrinsic belief in viewing her and other mythical figures as transcendent beings, believing them to be larger than life itself. At times, the dialogues felt as if the author exercised too much of artistic license in infusing these contemporary feelings into a narrative that was fundamentally rooted in antiquity. Having said that, the fact that Draupadi was portrayed to be so flawed added depth to her character, which was perhaps the intention of the author. Plus can I really blame her for seething with anger for the majority of her life?</p>' +
          '<h4>Refreshing Perspectives</h4>' +
          '<p>I found myself comparing what I knew from the original telling of Mahabharata, going into personal tides of side-lined research and marvelling at how one can simply disregard a perspective by not questioning it. For instance, Draupadi\'s resistance to polyandry, a seemingly traditionally accepted norm, consisted of going to extreme lengths like starving herself and breaking expensive items. The way the original Mahabharata has been told, or at least, the way I\'ve remembered it, was more of an objective recounting of events of Draupadi marrying the 5 Pandavas, rather than a genuine portrayal of fully-realised beings with opinions and feelings. This exposure to the breadth of perspectives allowed me to understand the justifications of their actions better, while realising that sometimes the clarity only comes with hindsight.</p>' +
          '<h4>Writing Style</h4>' +
          '<p>I was skeptical that the writing style would be overly complex but it turned out to be extremely accessible and pleasing. I especially liked the easter eggs (for the lack of a better term) of Vyasa, the all-knowing sage. While his portrayal was still full of gravitas and mystical foreboding, there was a playfulness with which his banter with Draupadi is explored. As I mentioned before, given that the readers are already familiar with the epic\'s events, the dramatic irony was enough to heighten the tension and anticipation throughout the narrative.</p>' +
          '<p>Overall, I couldn\'t stop reading the book and really enjoyed it. At the risk of sounding like a broken record, I definitely recommend it. It\'s a relatively light read of 384 pages and amazing writing.</p>' +
          '<h3>Who Should Read It?</h3>' +
          '<p>Anyone who has an interest in Hindu mythology or would just like to brush up on the Mahabharata from a different perspective. It is also a must-read for those who appreciate strong female protagonists and seek a deeper understanding of the complexities of gender and power within narratives.</p>' +
          '<h3>My Top Quotes</h3>' +
          '<blockquote>"Can\'t you ever be serious?" I said, mortified. "It\'s difficult," he said. "There\'s so little in life that\'s worth it."</blockquote>' +
          '<blockquote>"Wait for a man to avenge your honor, and you\'ll wait forever."</blockquote>' +
          '<blockquote>"All this time I\'d believed in my power over my husbands. I\'d believed that because they loved me they would do anything for me. But now I saw that though they did love me – as much perhaps as any man can love – there were other things they loved more. Their notions of honour, of loyalty toward each other, of reputation were more important to them than my suffering. They would avenge me later, yes, but only when they felt the circumstances would bring them heroic fame… The choice they made in the moment of my need changed something in our relationship. I no longer depended on them so completely in the future. And when I took care to guard myself from hurt, it was as much from them as from our enemies."</blockquote>'
      },
      {
        title: 'Educated: Tara Westover\'s Transformative Memoir',
        date: 'Aug 11, 2024',
        rating: '⭐⭐⭐⭐⭐',
        thumbnail: 'https://nehalagrawal867163731.wordpress.com/wp-content/uploads/2024/08/business-models-in-singapore-2.png?w=900',
        body: '<blockquote>"My life was narrated for me by others. Their voices were forceful, emphatic, absolute. It had never occurred to me that my voice might be as strong as theirs."<br>— Tara Westover, <em>Educated</em></blockquote>' +
          '<p>This was one of those books I\'d seen people read in airports, the front-row contender in the "self-help, memoir" row and now I know why. It\'s one of those books that, by the end of it, leaves you smiling and warm and transforms you into a different person than you were when you first started reading it.</p>' +
          '<p>This is a warning to stop and read the book (if you haven\'t already) and avoid the following spoilers (I 100% recommend it).</p>' +
          '<p>This is the journey of Tara being born in rural Idaho, to an orthodox family of Mormon survivalists. Her parents don\'t believe in public education, the government, or modern medicine. This resulted in Tara being "homeschooled", working in her father\'s junkyard. In this line of work, members of the family often got injured while working with heavy metals and machinery, and were treated with her mother\'s homeopathic remedies. Despite having no formal education and a violent, abusive brother, she strives to provide an education for herself, even if it means severing ties with her family. Her educational journey takes her from trying to learn algebra at 18 to BYU to Harvard and eventually getting a PhD at Cambridge. While perhaps easier to write on paper, it\'s a story filled with horrifying instances of violence, religious extremism and struggle and makes you wonder how one can take the seemingly little privileges in life for granted.</p>' +
          '<h3>Impressions</h3>' +
          '<h4>Resonating with the Author</h4>' +
          '<p>I had to remind myself multiple times that the book is not a piece of fiction. When I did remember it\'s a memoir, I had the urge to hug the author and tell her "I don\'t know you but I\'m so proud of you".</p>' +
          '<p>As the only member of my family who\'s not a doctor, and as the only one who is seeking further education abroad with a vision of life that diverges significantly from my family\'s expectations, I find it hard not to relate to the feelings of 22-year-old Tara. Her journey reinforces my belief in prioritising my own path while still honouring my parents\' perspectives and values, and one day — a fine balance will be struck.</p>' +
          '<h4>Powerful Writing</h4>' +
          '<p>Having gone through what Tara has gone through, she was strong enough to not just publish her life learnings but also do it in a way that projected no blame — only a factual recount of events. This has to be one of the strongest story-telling I\'ve ever read, filled with humility and maturity.</p>' +
          '<p>I quickly fell in love with her writing. It reminded me of Daniel Keyes\' style in <em>Flowers for Algernon</em> as both authors subtly convey the character growth through the protagonist\'s minute actions and slip ups, rather than explicitly stating them. As Tara witnessed the "outside world" more and more, the writing got more nuanced, and for the reader, all the more immersive.</p>' +
          '<p>Like I mentioned at the outset, it transforms you as a reader. Suddenly, cribbing about the assigned readings for your Global Management class feels trivial and frivolous.</p>' +
          '<h3>Who Should Read It?</h3>' +
          '<p>Unless you happen to be Rory Gilmore with Lorelai as your mother, I believe everyone should read <em>Educated</em> by Tara Westover. Regardless of your nationality, race, or generation, this book offered prized insights into the universal human condition. While the specific cultural and familial dynamics may differ, I\'m sure the generational differences will resonate across diverse backgrounds.</p>' +
          '<h3>My Top Quotes</h3>' +
          '<blockquote>"It\'s strange how you give the people you love so much power over you. But Shawn had more power over me than I could possibly have imagined. He had defined me to myself, and there\'s no greater power than that."</blockquote>' +
          '<blockquote>"My father and I looked at the temple. He saw God; I saw granite. We looked at each other. He saw a woman damned; I saw an unhinged old man, literally disfigured by his beliefs."</blockquote>' +
          '<blockquote>"All my studying, reading, thinking, traveling, had it transformed me into someone who no longer belonged anywhere?"</blockquote>' +
          '<blockquote>"That night I called on her and she didn\'t answer. She left me. She stayed in the mirror. The decisions I made after that moment were not the ones she would have made. They were the choices of a changed person, a new self. You could call this selfhood many things. Transformation. Metamorphosis. Falsity. Betrayal. I call it an education."</blockquote>'
      },
      {
        title: 'Transforming Beliefs: Insights from The Big Questions of Life by Om Swami',
        date: 'Jul 14, 2024',
        rating: '⭐⭐⭐⭐',
        thumbnail: 'https://nehalagrawal867163731.wordpress.com/wp-content/uploads/2024/07/business-models-in-singapore-1.png?w=900',
        body: '<p>When asked if I believe in God, I have usually replied with, "I believe in the power of belief, so I do think there\'s a higher entity in the universe, regardless of what name we give it."</p>' +
          '<p>While this belief was somewhat supported in my recent read of <em>The Big Questions of Life</em> by Om Swami, it was also given a fundamentally new perspective along with many other profound insights that I\'m excited to share in this article. I found this book to be one of the few self-help books that are succinct, objective and provide examples and inspirations from various cultures (rather than encouraging the Western hegemony). I hope this article inspires you to pick up the book and give it a shot!</p>' +
          '<h3>About the Author</h3>' +
          '<p>Om Swami is a serial tech entrepreneur turned monk. He received his BBA and MBA degrees from Australia, founded a multi-million dollar startup, after which he went on a journey of renunciation in the Himalayan foothills. He has written 15 best-selling books, including <em>The Big Questions of Life</em> where he attempts to answer some of life\'s most fundamental queries.</p>' +
          '<p>I divided his teachings into 3 main themes.</p>' +
          '<h3>1. Our Interpretation of Grief/Pain/Struggle (Reality vs Perception)</h3>' +
          '<p>Om Swami makes a clear distinction between pain and suffering, where pain is the objective truth of what\'s happening to us while suffering is our (often exaggerated) interpretation of what\'s happening.</p>' +
          '<blockquote>"As is the way of loss, it is rarely about the absolute nature of the loss itself or its magnitude, and more about how victimised we feel."</blockquote>' +
          '<p>He goes on to explain the nature of struggle itself. He mentions that while pain is inevitable, suffering is optional, and it depends on our perspective of how we interpret "struggle".</p>' +
          '<blockquote>"Our struggles shape us, they define us. I\'m not saying all struggle is good, but I\'m asking if it\'s really struggle. How does a bodybuilder build his body? He has to undergo resistance training if he\'s serious about growing and chiseling his muscles. He can look upon lifting weights as a struggle or a rewarding task."</blockquote>' +
          '<h3>2. Healthy Detachment and Expectations</h3>' +
          '<p>\'Detachment\' is a prominent theme explored throughout the book, equating true freedom and sense of peace with \'letting go\' of people and material possessions because \'the only truth of this world being impermanence\'. As someone who admittedly struggles with the fear of \'losing anyone I love\', this philosophical perspective on detachment was a bittersweet lesson. Detachment to material possessions and the idea of a higher salary, better luxuries, even to success and to failure etc. however, was far easier to digest.</p>' +
          '<blockquote>"O, the finest archer!\' Krishna says to Arjuna, \'the yoga of equanimity is to maintain your steadfastness in the face of both success and failure, it is to act with a degree of detachment.\' (Bhagavad Gita 2.48)"</blockquote>' +
          '<p>He also differentiates between detachment and resignation:</p>' +
          '<blockquote>"I\'m often asked, shouldn\'t we be passionate about our pursuits? Of course, you should be, that\'s correct. But detachment is not resignation, but the understanding that to make objective decisions, I must, now and again, distance myself from my pursuit so I may gain a different and a better frame of reference. It is only then that you get to see the complete picture, the three sides of the coin: left, right and the edge of the coin."</blockquote>' +
          '<blockquote>"At the breakfast table, a woman said to her husband, \'Honey, last night, I dreamed that you gave me a necklace of pearls. What do you think it means?\' Smiling, the man kissed his wife and whispered, \'You\'ll know tonight.\' Surely enough, that evening, he came home with a small, beautifully wrapped package. She undid the tape, and unwrapped the package to see a book titled \'The Meaning of Dreams\'. We dream of life giving us a necklace of pearls when it\'s actually planning to give us the meaning of our dream. This mismatch is the chief cause behind why most people are forever riding an emotional roller-coaster."</blockquote>' +
          '<h3>3. Being Kind to Yourself</h3>' +
          '<p>Another major theme is the importance of looking inwards and freeing oneself from external judgments, vices and fears. Om Swami stresses the importance of being kind to yourself — if you make a mistake, apologize earnestly; if you are overthinking, first stop and identify that you are, and then meditate. There is no reason to keep unkempt thoughts inside you to rot, and there\'s usually an easier method to stop the overflowing fervors of the mind.</p>' +
          '<blockquote>"When cells take the wrong path and start to attack the organ they live in, we call it cancer. Tearing thoughts are a kind of autoimmune failure of the mental body."</blockquote>' +
          '<p>He also shares a quote from the Buddhist Layman Pang (740–808): "When the mind is at peace, the world too is at peace. Nothing real, nothing absent. Not holding on to reality, not getting stuck in the void, you are neither holy nor wise, just an ordinary fellow who has completed his work."</p>' +
          '<p>Coming back to the question of existence of God, Om Swami whole-heartedly agrees with the idea that God exists. However, this God is not responsible for our successes, not our failures. He is not to be blamed or to be praised. He is objective, impartial and \'Nature of being\' itself. He states, "Nature runs its course most indiscriminately and dispassionately, with the greatest detachment." When I mentioned that there is power in belief during tough situations, I do maintain it. However, there\'s a scary relief in understanding that the strength ultimately lies with you, your thoughts and your interpretations.</p>' +
          '<p>To conclude, <em>The Big Questions of Life</em> by Om Swami proved to be a concise yet a profound read with a diverse set of perspectives from spiritual leaders and social thinkers. I would definitely recommend it for your next TBR.</p>'
      },
      {
        title: 'Godmen, Politics and Women',
        date: 'Jul 12, 2024',
        rating: '',
        thumbnail: 'assets/images/blog-godmen.png',
        body: '<blockquote>"Societies are like human beings: things that happen to them in their formative years tend to shape their decisions and character long after those events have lost their context."<br>— Edward Luce, in <em>In Spite of the Gods</em>.</blockquote>' +
          '<h3>Boundaries of Faith and Politics</h3>' +
          '<p>You know you\'re in India when the roads are congested not with cars (well, that too) but with posters of political leaders, movies and ads for UPSC coaching. These 3 components are perhaps quite indicative of Contemporary India: Religion, Production houses and Politics.</p>' +
          '<p>Sadly, the inclusion of the term \'Secular\' in the Preamble of India\'s constitution did little in its purpose to establish the state as a \'separate and neutral entity\' from religion. This has been evident in the differentiation of Indian political parties based on their stances on religion and caste, rather than their political ideology. After all, the running joke being "Indians don\'t cast their vote, they vote their caste."</p>' +
          '<p>This porous intermingling of religion and politics has often led to tragic consequences, usually over the backdrop of superstition, and with women baring the brunt of the impact. In fact, surveys have shown that even educated women are extremely susceptible to superstitious beliefs, with 80% of female employees being comfortable with superstitious practices in the workplace. One of the prominent superstitions in today\'s society, is in the blind-faith of self-styled God-men (supposed intermediaries between the divine and their followers).</p>' +
          '<h3>Trampled Voices</h3>' +
          '<p>The recent Hathras stampede, for instance, was a damning indictment of the failures of public administration and the far-reaching extent of blind faith. For context, it features a religious gathering featuring Godman \'Bhole Baba\', lack of proper crowd control measures, inadequate exit routes, and poor planning by the event organizers. Chaos ensued when the \'bhakts\' ran to collect the mud near Godman\'s feet for blessings and led to a stampede that killed 121 people, 113 of them being women.</p>' +
          '<p>As devastating as this preventable tragedy was, the reactions of the bereaved families and the aforementioned \'baba\' didn\'t help.</p>' +
          '<blockquote>"We are very disturbed and distressed after the July 2 incident. But, who can avoid the inevitable? Whoever has come to this Earth will have to depart one day, although the timing may differ."<br>— Bhole Baba</blockquote>' +
          '<p>This was coupled with some facts that, again, were objectively avoidable yet dismissed as mere hindsight — the permitted capacity of 80,000 people was instead filled with 2,50,000 occupants. The venue and the muddy, slippery floor was not inspected before getting the necessary approval by the authorities.</p>' +
          '<h3>Dealing in bad faith</h3>' +
          '<p>Another example is of Dr. Narendra Dhadholkar, who was a rationalist aiming to eradicate superstition and black-magic practices in Maharashtra, but was instead tragically shot in cold blood by Hindu extremists instead. His legacy, however, remains alive though the Anti-Superstition and Black Magic Act which now criminalises practices of alleged black magic, exorcism and such practices. Sadly, even this law was met with criticism that it infringes upon cultural beliefs and practices. If we\'re seeing a pattern, the concept of God-men in India, intertwined with bureaucratic actions and public outcry, has formed a sensitive and recurring cycle in the nation\'s narrative.</p>' +
          '<p>The recent OTT release of \'Maharaj\' recounts the legal battle of the Maharaj Libel Case during British colonial rule. While the plot itself highlights the detriment of valuing deeply entrenched orthodox beliefs over rational decisions, it serves another significant purpose. It showcased the reaction and the inability of certain religious sects to accept a negative portrayal of Godmen or \'Hindutva\', which led to widespread boycotts, delays, and petitions against the film\'s release.</p>' +
          '<blockquote>"If you think Education is expensive, try ignorance."<br>— Eppie Lederer, American Columnist</blockquote>' +
          '<p>Now, it\'s important to mention that the purpose of this article isn\'t to demean anyone\'s idea of religion, faith or even superstition. As a believer myself, my issue isn\'t with practices of religion or customary practices themselves, but with blind-faith that propagates at the expense of rational thinking.</p>' +
          '<p>From a societal perspective, there needs to be a widespread awakening among dogmatic households; however, this is merely wishful thinking unless it is accompanied by grassroots measures such as public safety education and the promotion of scientific reasoning over blind adherence to traditional beliefs for all individuals, regardless of gender, age, or religion. While the state has to balance the fine line of implementing rational governance while respecting faith and religion of the masses, it is equally our duty to keep ourselves accountable.</p>'
      },
      {
        title: 'The 4-Hour Workweek by Tim Ferriss',
        date: 'Nov 17, 2020',
        rating: '',
        thumbnail: '',
        body: '<blockquote>"By working faithfully eight hours a day, you may eventually get to be a boss and work twelve hours a day."<br>— Robert Frost</blockquote>' +
          '<h3>The Book in Three Lines</h3>' +
          '<ul>' +
          '<li>Our aim should be to abandon the deferred life plan (of a laborious 9–5 cycle) and create a luxury lifestyle using the currency of the "new rich" — time and mobility — by increasing output with the same input and gaining negotiating power.</li>' +
          '<li>Risk is perhaps the most essential yet most avoided aspect when crafting a "successful" life (whatever your definition of success might be).</li>' +
          '<li>Being productive means understanding the difference between being efficient vs effective. Doing something unimportant well does not make it important. Neither does requiring a lot of time make a task important.</li>' +
          '</ul>' +
          '<h3>Impressions</h3>' +
          '<p>As a novice to "lifestyle design," I didn\'t have many expectations from the book, despite hearing great reviews. Even so — or perhaps because of that — the ideas and values felt both new and comforting.</p>' +
          '<p>Tim Ferriss manages to stay relatable while offering practical methods for:</p>' +
          '<ul>' +
          '<li>improving productivity</li>' +
          '<li>overcoming risk aversion</li>' +
          '<li>taking ownership of your life</li>' +
          '</ul>' +
          '<p>This is definitely a book worth revisiting, and I plan to do so.</p>' +
          '<p>Out of all the books I read in 2020, this ranks in my top 5, narrowly beating <em>Never Eat Alone</em> by Keith Ferrazzi and <em>How to Win Friends and Influence People</em> by Dale Carnegie.</p>' +
          '<blockquote>"The worst case would be a tolerant and comfortable existence doing something unfulfilling."<br>— Tim Ferriss</blockquote>' +
          '<h3>Who Should Read It?</h3>' +
          '<p>Initially, I described this as a book for "anyone who fears a boring 9–5 job." But honestly — even if you have your life fully planned or love your current path, I would still 100% recommend it. No matter your stage in life, this book is worth picking up.</p>' +
          '<h3>How the Book Changed Me</h3>' +
          '<h4>1. Taking More Risks</h4>' +
          '<p>After a long day of online classes, I was scrolling through Instagram when my favourite polyglot influencer, Lindie Botes, went live and started accepting video requests. Normally, I would\'ve ignored it — but this time, the quote "You miss 100% of the shots you don\'t take" stuck with me.</p>' +
          '<p>I sent the request. She accepted. We spoke for 20 minutes — and even planned to meet for lunch when I move to Singapore.</p>' +
          '<p><em>Many a false step was made by standing still.</em></p>' +
          '<h4>2. Radical Task Prioritization</h4>' +
          '<p>One of my goals has always been to read one book per week, but I struggled to follow through — until this book. Previously, I overloaded my to-do list, felt productive crossing off small tasks, and ended up completing only 2 out of 10 tasks → guilt.</p>' +
          '<p>The book introduced a simple but powerful rule: <strong>"If I only complete this task today, will I be satisfied?"</strong> And a constraint: <strong>maximum 2 tasks per day</strong>. These should be high-impact, time-consuming, and urgent. This method drastically improved my focus and productivity. 10/10 recommend.</p>' +
          '<h3>Top 5 Quotes</h3>' +
          '<ul>' +
          '<li>There is a direct correlation between an increased sphere of discomfort and getting what you want. — Tim Ferriss</li>' +
          '<li>The fishing is best where the fewest go… there is less competition for bigger goals. — Tim Ferriss</li>' +
          '<li>Man is so made that he can only find relaxation from one kind of labor by taking up another. — Anatole France</li>' +
          '<li>It is fatal to know too much at the outcome… — Paul Theroux</li>' +
          '<li>I am an old man and have known a great many troubles, but most of them never happened. — Mark Twain</li>' +
          '</ul>' +
          '<h3>Final Thoughts</h3>' +
          '<p>I wouldn\'t be surprised if you\'ve already read this book. If you have, I\'d love to hear your thoughts. If not, let me know if you decide to give it a shot!</p>'
      },
      {
        title: 'Show Your Work by Austin Kleon',
        date: 'Nov 2020',
        rating: '',
        thumbnail: '',
        body: '<h3>The Book in Three Sentences</h3>' +
          '<ul>' +
          '<li>Sharing your work doesn\'t require you to be a genius, just consistent and generous, open and not secretive.</li>' +
          '<li>You will attract the people synonymous to the kind of work you put out.</li>' +
          '<li>The more you share the more criticisms you will have — you need to ignore what you have to and learn to power through.</li>' +
          '</ul>' +
          '<h3>Impressions</h3>' +
          '<p>With around 150 pages and an extremely easy-to-read writing style, this book was a straightforward and effortless read. I was able to finish it in a day (during a normal day at uni) and would highly recommend everyone to pick it up without hesitation.</p>' +
          '<p>While hyping it up to my best friend, I remember describing it as if a baby was giving me advice — but it was the kind of advice that I wished someone would give me after I post literally anything.</p>' +
          '<blockquote>"Stock and flow: Flow is the feed. It\'s the posts and the tweets. It\'s the stream of daily updates that remind people you exist. Stock is the durable stuff. It\'s the content you produce that\'s as interesting in two months (or two years) as it is today. The magic formula is to maintain your flow while working on your stock in the background."<br>— Robin Sloan</blockquote>' +
          '<h3>Who Should Read It?</h3>' +
          '<p>People who are planning or keen on sharing their work but feel hesitant, shy, or insecure.</p>' +
          '<p>I used to be someone who checked who viewed my story and based my mood on the amount of responses and interaction it got. This book completely changed my perspective on why, how, and when we should post — and what to expect (or rather, not expect).</p>' +
          '<h3>How I Discovered the Book</h3>' +
          '<p>Considering Ali Abdaal has been one of my favourite YouTubers/influencers, I decided to read his recommendations of "life-changing" books. This is one of the three he recommends.</p>' +
          '<h3>How the Book Changed Me</h3>' +
          '<p>Previously, I believed in "becoming successful in secret," which meant never sharing what I was doing because others might copy it — and even do it better than me.</p>' +
          '<p>The most useful advice I gained from this book was understanding that sharing your journey is part of the journey itself. It allows you to bring others along and helps you find like-minded people — even if you\'ve never met before.</p>' +
          '<blockquote>"If you take photos, you\'re not an \'aspiring\' photographer, and you\'re not an \'amazing\' photographer, either. You\'re a photographer. Don\'t get cute. Don\'t brag. Just state the facts."</blockquote>' +
          '<p>I removed all the adjectives from my LinkedIn bio and suddenly felt much more professional.</p>' +
          '<p><strong>Before:</strong> An avid debater and a passionate artist</p>' +
          '<h3>Top 5 Quotes</h3>' +
          '<ul>' +
          '<li>You can move from mediocrity to good in increments. The real gap is between doing nothing and doing something.</li>' +
          '<li>You can\'t find your voice if you don\'t use it.</li>' +
          '<li>Amateurs, because they have little to lose, are willing to try anything and share the results. They take chances, experiment, and follow their whims.</li>' +
          '<li>"Carving out a space for yourself online… is still one of the best possible investments you can make with your time." — Andy Baio</li>' +
          '<li>"The impulse to keep to yourself what you have learned is not only shameful, it is destructive… Anything you do not give freely becomes lost to you." — Annie Dillard</li>' +
          '</ul>'
      },
      {
        title: 'Steal Like an Artist by Austin Kleon',
        date: 'Oct 25, 2020',
        rating: '',
        thumbnail: '',
        body: '<h3>The Book in Two Sentences</h3>' +
          '<ul>' +
          '<li>There\'s no such thing as "original art". You steal from <strong>many</strong> sources and make it something better.</li>' +
          '<li>The people, objects, and inspirations you surround yourself with make up who you are.</li>' +
          '</ul>' +
          '<h3>Impressions</h3>' +
          '<p>Extremely easy to read yet essential philosophies on your outlook towards your "creative" work.</p>' +
          '<h3>Who Should Read It?</h3>' +
          '<p>Anyone who considers art/creativity to be a part of their lives.</p>' +
          '<h3>How I Discovered the Book</h3>' +
          '<p>One of Lana Blakely\'s life-changing books.</p>' +
          '<h3>How the Book Changed Me</h3>' +
          '<p>Evolved my creative process. Next time I look at an artist, I\'ll try to understand their perspectives and purpose for making that art, instead of simply imitating it. <em>"That\'s what you really want — to internalise their way of looking at the world."</em></p>' +
          '<p>Logbook, swipe file. Writing fan letters: Hugh MacLeod says, <em>"The best way to get approval is to not need it."</em></p>' +
          '<h3>Top 5 Quotes</h3>' +
          '<ul>' +
          '<li>Chew on one thinker — study everything there is to know about that thinker. Find three people that thinker loved and find out everything about them. Repeat. Seeing yourself as part of a creative lineage will help you feel less alone as you start making your own stuff.</li>' +
          '<li>The more open you are about sharing your passions, the closer people will feel to your work. Artists aren\'t magicians. There\'s no penalty for revealing your secrets.</li>' +
          '<li>Cartoonist Gary Panter says, "If you have one person you\'re influenced by, everyone will say you\'re the next whoever. But if you rip off a hundred people, everyone will say you\'re so original!"</li>' +
          '<li>The classroom is a wonderful, if artificial, place: Your professor gets paid to pay attention to your ideas, and your classmates are paying to pay attention to your ideas. Never again in your life will you have such a captive audience. Writer Steven Pressfield says, "It\'s not that people are mean or cruel, they\'re just busy."</li>' +
          '<li>French writer André Gide said, "Everything that needs to be said has already been said. But since no one was listening, everything must be said again."</li>' +
          '<li>Harold Ramis, actor and director of Ghostbusters, says "Find the most talented person in the room, and if it\'s not you, go stand next to him. Hang out with him. Try to be helpful."</li>' +
          '</ul>' +
          '<blockquote>"Start copying what you love. Copy copy copy copy. At the end of the copy you will find yourself."<br>— Yohji Yamamoto</blockquote>' +
          '<p>You are who you meet. You are, in fact, a mashup of what you choose to let into your life. You are the sum of your influences. The German writer Goethe said, "We are shaped and fashioned by what we love."</p>' +
          '<p>Ask anybody doing truly creative work, and they\'ll tell you the truth: They don\'t know where the good stuff comes from. They just show up to do their thing. Every day.</p>'
      },
      {
        title: '101 Secrets for Your Twenties by Paul Angone',
        date: 'Sep 2020',
        rating: '',
        thumbnail: '',
        body: '<h3>Impressions</h3>' +
          '<p>A really nice book to have read just before going to uni (I\'m leaving for France in a week). Reaffirmed my beliefs on making a website, taking risks, and encouraged me to do both of these things with more persuasive arguments (and flawless analogies).</p>' +
          '<h3>How the Book Changed Me</h3>' +
          '<p>Made me create a personal website as soon as I finished reading it.</p>' +
          '<h3>Top 5 Quotes</h3>' +
          '<blockquote>"The possibility for greatness and embarrassment both exist in the same space. If you\'re not willing to be embarrassed, you\'re probably not willing to be great."</blockquote>' +
          '<blockquote>"But you have to be on the stage to win. They weren\'t going to give the guitar to the bystander in the front row who swore he could\'ve done it better."</blockquote>' +
          '<blockquote>"It\'s difficult to remove one and not the other. When you do, you exist in the middle. Mediocrity your brand. No one saying a thing about you — good or bad. Why would they?"</blockquote>' +
          '<blockquote>"Creating Your Own Website is the #1 biggest, baddest, and boldest amplifier of all job searching, platform building, brand-bolstering efforts."</blockquote>' +
          '<blockquote>"Building your brand with a legit online presence amplifies all your existing personal branding, networking, job-searching efforts × 117."</blockquote>' +
          '<blockquote>"The outlook may be bleak, but there are some who are choosing not to wallow but to walk confidently forward — a band of people who have chosen to follow another word, forcing cynicism on a raft and shoving it out to sea. That word? Create. Complaining and creating have a direct correlation. The more you create, the less you complain. The more you complain, the less you create. It\'s a pretty simple formula."</blockquote>' +
          '<blockquote>"Complaining is passive and powerless. Creating is proactive and powerful. People gravitate toward Passionate Pursuers. On the other hand, people run like the plague from Complacent Complainers."</blockquote>' +
          '<blockquote>"God wants you to banter back and forth with Him, dream the next plotline — heck, even argue with Him about what should happen next because you\'re so passionate about the story you are writing together. I don\'t think God wants us to just watch our own lives with a bag of popcorn and then complain when the story isn\'t turning out like we thought it should. I think God wants us to help write the dang thing."</blockquote>' +
          '<blockquote>"Your 20s are this crazy unique season where complete freedom meets overwhelming opportunity."</blockquote>' +
          '<blockquote>"Don\'t wait for confidence before you move. Don\'t wait to be cast into the lead role before you start playing the part. Don\'t wait, act. Raise your hand. Say, \'Sure I can do that.\' Then figure it out from there. You\'ll be surprised how quickly the act becomes a reality."</blockquote>' +
          '<blockquote>"Explorers get lost on purpose, with purpose. Explorers only find something greater if they first lose sight of the familiar."</blockquote>'
      }
    ],
    details: {
      text: '',
      media: [],
      links: []
    }
  },
  {
    id: 'failures',
    title: 'Failures',
    description: 'incomplete/failed projects',
    cta: 'Read reflections',
    coverImage: 'assets/images/failures-cover.png',
    coverColor: '#F1F5F9',
    customModal: 'failures',
    failureEntries: [
      {
        title: 'Figma X Claude',
        video: 'assets/videos/figma-claude.mov',
        whatIDid: 'Used Claude Code to build a Figma website with vertical scrolling and an interactive element for a portfolio.',
        whatFailed: 'It was over-indexed on visual novelty without clear user value or usability.',
        whatNext: 'Prioritize usability testing early, even with rough coded prototypes before investing in complex builds.'
      },
      {
        title: 'All-in-One Sales Platform',
        video: 'assets/videos/all-in-one-sales.mov',
        whatIDid: 'Wanted to solve the fragmented tooling problem so I built a prototype for an all-in-one, integration-heavy sales platform.',
        whatFailed: 'Stitching multiple APIs on a loosely structured codebase led to brittle integrations and unreliable deployments.',
        whatNext: 'Modular agents handling specific workflows are far better.'
      }
    ],
    details: {
      text: '',
      media: [],
      links: []
    }
  }
];
