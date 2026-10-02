/**
 * =========================================================================
 * 🎀 PARTNER'S WEBSITE CONFIGURATION & TEASING ENGINE 🎀
 * =========================================================================
 * Ultra-customizable texts, mini-games, tease scanners, letter modals,
 * and the Wheel of Shenanigans.
 * =========================================================================
 */

const CONFIG = {
  // General details
  friendName: "Partner",
  websiteTitle: "Partner's Little Corner 💗",

  // 1. Welcome Screen
  welcome: {
    heading: "Welcome to Your Little Corner 💗",
    subheading: "Warning: this website contains maximum cuteness, severe teasing, and zero boring reading!",
    enterButton: "Enter The Chaos ✨"
  },

  // 2. Hero Section
  hero: {
    badge: "Certified Special Delivery 💌",
    heading: "Hey, <span class='text-gradient'>Partner!</span> 🎀",
    subheading: "Someone made an entire interactive website just to tease you, appreciate you, and celebrate your signature chaos.",
    exploreBtn: "Explore The Fun 👀"
  },

  // 3. Photo Scrapbook (Interactive Polaroids)
  scrapbook: [
    {
      id: 1,
      image: "scrapbook-flower-ear.jpg",
      caption: "Flower in hair & unlimited pure aura 🌸✨",
      tag: "Her Aura Is Illegal",
      date: "Certified Pretty 💖",
      rotation: "-2.5deg"
    },
    {
      id: 2,
      image: "scrapbook-salon-pout.jpg",
      caption: "The legendary salon drama & signature pout 💇‍♀️😭",
      tag: "Drama Queen",
      date: "Caught in 4K 📸",
      rotation: "2.5deg"
    },
    {
      id: 3,
      image: "scrapbook-baby-tongue.jpg",
      caption: "Chaotic & mischievous since day one 👶👅🌼",
      tag: "Baby Shenanigans",
      date: "Certified Troublemaker",
      rotation: "-3deg"
    },
    {
      id: 4,
      image: "scrapbook-hello-kitty-car.jpg",
      caption: "Serving main character poses by the ride 😎🚗🎀",
      tag: "Hello Kitty Era",
      date: "Elite Posing 💅",
      rotation: "3deg"
    },
    {
      id: 5,
      image: "scrapbook-striped-event.jpg",
      caption: "Caught in 4K looking effortlessly cute 🤍✨",
      tag: "Golden Vibes",
      date: "Top Secret Lore 🤫",
      rotation: "-2deg"
    },
    {
      id: 6,
      image: "scrapbook-flower-wall.jpg",
      caption: "Admirer of flowers & certified sweet soul 🌸🌿",
      tag: "Flower Aesthetic",
      date: "Partner For Life 🫶🏻",
      rotation: "2.5deg"
    }
  ],

  // 4. Facts About U (Flip cards)
  funnyThings: [
    {
      title: "The Girl With Unlimited Aura ✨🌸",
      icon: "🌸",
      frontText: "Her Aura Is Illegal",
      backText: "Pretty like a flower, sweet when she wants to be, and somehow capable of making every room feel less boring. She doesn't even try — the aura just exists. 😭🌷"
    },
    {
      title: "Her Actual Favorite Person 🐱",
      icon: "🐱",
      frontText: "The Great Luna",
      backText: "She has a luna and let's be honest... I already know where I stand. Luna gets the VIP treatment, the premium membership, and probably more love than everyone else combined. 😭🐾"
    },
    {
      title: "\"Partner Ek Kaam Tha...\" 📞😭",
      icon: "📞",
      frontText: "The Emergency Hotline",
      backText: "She calls whenever she needs help, especially when it's time to get some safarish from apooo. Somehow I went from best partner to a full-time emergency contact. 💀😂"
    },
    {
      title: "Your VMs Need Their Own Documentary 🎤😭",
      icon: "🎤",
      frontText: "The VM Department",
      backText: "The VMs make absolutely no sense. None. Zero. Yet somehow I listen to the entire thing like it's the most interesting story ever recorded. Pure nonsense."
    },
    {
      title: "When Things Go Wrong, She Gets It 🧠🤍",
      icon: "🧠",
      frontText: "The Unexpected Therapist",
      backText: "Whenever I have a fight with apooo, somehow I end up talking to u And instead of making things worse, uactually understands me, explains things, and makes everything feel a little easier."
    },
    {
      title: "Never Boring. Literally Never. 🫶🏻",
      icon: "😂",
      frontText: "The Partner Energy",
      backText: "u are  funny, clever, full of good vibes, and somehow never boring. One minute we're having a normal conversation, the next we're laughing at something that makes absolutely no sense. That's what makes being your partner so fun. 💗"
    }
  ],

  // 5. "DO NOT PRESS" FORBIDDEN BUTTON & SPECIAL PARTNER LETTER 💌
  forbiddenSection: {
    badge: "Extremely Hazardous Curiosity 🚨",
    heading: "The Forbidden Button 🚨",
    subtitle: "I specifically wrapped this in hazard tape. Do NOT touch this button!",
    buttonText: "DO NOT PRESS 🚨",
    letter: {
      alertBadge: "🚨 SIREN ALERT: CAUGHT IN 4K!",
      alertTitle: "I SAID DO NOT PRESS IT... BUT OF COURSE YOU DID! 😂🎀",
      subtitle: "Zero impulse control detected. But since your curiosity won, here is your letter...",
      toText: "To My Best Partner 💌",
      body: `I literally wrapped the button in hazard tape.
I made it glowing bright red.
I wrote in bold letters: "DO NOT PRESS".

And what was the first thing you did? You pressed it without a second of hesitation. 😭

Honestly... I wouldn't expect anything less from you. Your stubbornness and curiosity are part of your signature charm, and I secretly knew you were going to press it anyway.

So jokes aside, I wanted to hide this special letter right here where only someone as curious and chaotic as you would find it:

You have a heart and a nature that are genuinely rare. The way you understand people, listen without judging, and somehow know what to say when someone needs it makes you someone truly special. You’re naturally caring, incredibly thoughtful, and even with your little mood swings, there’s something so genuine about the way you care for the people close to you. Never forget that your kindness, your understanding, and the person you are make you much more special than you probably realize. 🌸🤍.

You are 100% certified irreplaceable. Stay sweet, hilarious, Aurafull, Smart as u are and never stop pressing buttons you're warned not to touch. 💖`,
      signature: "Forever Your Favorite Partner  ✨",
      forgiveBtn: "Acknowledge My Chaos 🥺💖",
      rereadHint: "You can re-open this letter anytime by clicking the button again!"
    },
    // Teasing escalation if she clicks repeatedly
    teasingClickReplies: [
      "I literally warned you! Now read your letter! 💌😂",
      "Click #2: Still pressing it? You really don't follow rules, huh? 😭",
      "Click #3: Your stubbornness score just increased to 999% 📊",
      "Click #4: Stop tickling the button! 🫣",
      "Click #5: Okay, you're officially addicted to this button. 💅",
      "Click #6: Self-destruct sequence aborted because you're too cute. 🌸",
      "Click #7: A wild Partner is spamming buttons! Level 100 Boss. 👑",
      "Click #8: Warning: FBI (Friendship Bureau of Investigation) is watching. 🕵️",
      "Click #9: You just won the Lifetime Award for Zero Self-Control! 🏆",
      "Click #10: Unlocked VIP Partner Pass: Infinite hugs and snacks forever! 💖"
    ]
  },

  // 6. MINI-GAME: "CATCH THE BOBA & TREATS!" 🧋⚡ (Action Arcade Game)
  arcadeGame: {
    title: "Catch The Boba & Treats! 🧋⚡",
    subtitle: "Fast-paced arcade game! Tap or catch delicious treats & hearts while dodging drama and alarm clocks!",
    gameDuration: 25, // seconds per round
    items: [
      { id: 'boba', emoji: '🧋', points: 10, type: 'good', label: 'Boba +10' },
      { id: 'bow', emoji: '🎀', points: 15, type: 'good', label: 'Pink Bow +15' },
      { id: 'heart', emoji: '💖', points: 25, type: 'good', label: 'Partner Heart +25' },
      { id: 'fries', emoji: '🍟', points: 20, type: 'good', label: 'Midnight Fries +20' },
      { id: 'crown', emoji: '👑', points: 50, type: 'good', label: 'Queen Crown +50' },
      { id: 'alarm', emoji: '⏰', points: -15, type: 'bad', label: 'Early Alarm -15' },
      { id: 'drama', emoji: '🚨', points: -25, type: 'bad', label: 'Unnecessary Drama -25' }
    ],
    comboComments: [
      { minCombo: 3, text: "Combo x3! Quick fingers! ⚡" },
      { minCombo: 6, text: "Combo x6! Faster than replying to gossip! ☕🔥" },
      { minCombo: 10, text: "Combo x10! UNSTOPPABLE CHAOS QUEEN! 👑✨" }
    ],
    ranks: [
      {
        minScore: 350,
        rank: "SSS",
        title: "Grandmaster of Boba & Chaos 👑",
        desc: "Legendary reflexes! Scientists confirm your fingers move faster than light when snacks are on the line.",
        emoji: "👑✨"
      },
      {
        minScore: 240,
        rank: "S",
        title: "Certified Pro Snack Hunter 🧋",
        desc: "Elite performance! You dodged all the drama and secured all the partner treats with maximum style.",
        emoji: "💅🎀"
      },
      {
        minScore: 140,
        rank: "A",
        title: "Speedy Partner in Training 🍟",
        desc: "Solid effort! A few boba cups escaped, but your determination and cute vibes carried the team.",
        emoji: "🌸✨"
      },
      {
        minScore: 0,
        rank: "B",
        title: "Brain Still Buffering 🐌",
        desc: "Were you distracted by something shiny? It's okay, you're still certified cute. Try again!",
        emoji: "😴💖"
      }
    ]
  },

  // 7. LIE DETECTOR & TEASE-O-METER 🔍🤖
  teaseOMeter: {
    badge: "100% Scientifically Questionable 🔍",
    heading: "The Partner Lie Detector & Tease-O-Meter",
    subtitle: "Place your finger on the scanner below to analyze your current chaos levels, drama radar, and hidden partner truths!",
    scanStats: [
      {
        name: "Stubbornness Rating",
        value: 99.8,
        icon: "😤",
        barColor: "#e11d48",
        desc: "Once she makes up her mind, changing it is basically a mission impossible😭❤️."
      },
      {
        name: "Cuteness & Charm Factor",
        value: 1000,
        isOverMax: true,
        icon: "🎀",
        barColor: "#ff758f",
        desc: "WARNING: Exceeds safe legal limits. Unfair advantage in every situation."
      },
      {
        name: "Gossip & Drama Radar",
        value: 94.5,
        icon: "☕",
        barColor: "#c084fc",
        desc: "Can detect unspilled tea and whispered drama from 3 neighboring countries."
      },
      {
        name: "Text Reply Punctuality",
        value: 12.0,
        icon: "📱",
        barColor: "#fbbf24",
        desc: "Brain takes 4 to 7 business days to process and reply to simple messages."
      },
      {
        name: "Partner Worth & Loyalty",
        value: 100,
        icon: "💖",
        barColor: "#ec4899",
        desc: "Off the charts! 100/10 irreplaceable human being."
      }
    ],
    soundboard: [
      { icon: "😴", label: "I was sleeping!", quote: "Standard alibi for being offline for 14 hours straight." },
      { icon: "🍟", label: "clg thi !", quote: "Apparently college is a full-time job with absolutely no time for replying. 😂" },
      { icon: "📱", label: "Mama se daant pari thi", quote: "One minute she is replying normally, next minute she has entered survival mode. 😭" },
      { icon: "💅", label: "Is par kaam kar rahi thi", quote: "The mysterious project that suddenly becomes more important than every pending message. 😂" },
      { icon: "🧋", label: "Reply nahi kar payi", quote: "Not ignoring you, just somehow forgetting to reply after seeing the message. 😭" },
      { icon: "😇", label: "Bas thori busy thi", quote: "Three simple words that can explain absolutely anything and everything. 😂" }
    ],
    scratchCards: [
      {
        id: 1,
        title: "Scratch For A Secret Roast 🤫",
        secret: "You take 45 selfies, delete 44, and still say you hate all of them. (You looked cute in every single one though! 🎀)"
      },
      {
        id: 2,
        title: "Scratch For A Special Partner Perk 🎁",
        secret: "UNLOCKED: Free pass to demand unlimited snacks and complain about random things for 24 hours! 🧋👑"
      },
      {
        id: 3,
        title: "Scratch For A Wholesome Truth 💖",
        secret: "Jokes aside, you genuinely make my life 1000x happier just by being around. Never change! ✨"
      }
    ]
  },

  // 8. WHEEL OF SHENANIGANS 🎡
  chaosStudio: {
    badge: "Interactive Shenanigans 🎡",
    heading: "The Wheel of Shenanigans 🎡",
    subtitle: "No boring reading! Spin the wheel to receive your comedic partner dare, perks, and cosmic prophecies!",
    wheelItems: [
      { label: "Owes Me pizza 🍕", color: "#ff758f", text: "Destiny has spoken! You officially owe me a pizza party." },
      { label: "Admit I'm Cooler 👑", color: "#c084fc", text: "You must verbally declare that I am the cooler partner for the next 24 hours!" },
      { label: "Send Derp Selfie 📸", color: "#f472b6", text: "Camera roll check: Send the goofiest selfie currently saved on your phone!" },
      { label: "Free Drama Pass 💅", color: "#fb7185", text: "You are legally entitled to be 100% dramatic and extra today with zero judgment." },
      { label: "Expose Yourself 💀", color: "#fde047", text: "Tell me the most embarrassing thing you've done recently. No skipping, no editing, no 'I don't remember.." },
      { label: "Spill The Lore ☕", color: "#a855f7", text: "Tell me the most random, unhinged thought currently lingering in your head." },
      { label: "Sing 10 Seconds 🎤", color: "#fb923c", text: "Send a 10-second voice note singing any song of your choice!" },
      { label: "Infinite Good Luck 🍀", color: "#34d399", text: "The universe smiles upon you. You are certified 100% blessed today!" }
    ]
  },

  // 9. PARTNER AWARDS 🏆
 awards: [

  {
    title: "Queen of Nonsense VMs",
    icon: "🎤",
    subtitle: "Awarded for sending completely senseless voice messages that somehow become the funniest part of the day.",
    category: "Chaos Hall of Fame"
  },

  {
    title: "Official Safarish Specialist",
    icon: "📞",
    subtitle: "Awarded for mastering the ancient art of calling when a little help from her best partner is urgently required.",
    category: "Elite Service Award"
  },

  {
    title: "Best Advice Department",
    icon: "🧠",
    subtitle: "Awarded for always knowing how to explain things, understand the situation, and somehow make everything feel a little easier.",
    category: "Wisdom Medal"
  },

  {
    title: "Certified Good Vibes Provider",
    icon: "✨",
    subtitle: "Awarded for making conversations fun, random, and impossible to describe without eventually laughing.",
    category: "Golden Vibes Award"
  },

  {
    title: "Most Adorably Offended",
    icon: "😤",
    subtitle: "Awarded for getting offended over the smallest things and somehow making it impossible to stay serious about it.",
    category: "Drama Excellence Award"
  },

  {
    title: "Lifetime Partner Award",
    icon: "🎀",
    subtitle: "The highest friendship decoration. Non-transferable, valid for infinite adventures.",
    category: "Grand Hall of Fame"
  }

],
  // 10. Choose Your Fate Options
  fateOptions: [
    {
      id: "A",
      symbol: "🎀",
      label: "Option A (Cute & Classy)",
      fortunes: [
        "You chose wisely. Your fortune today includes 100% good vibes and a spontaneous dessert in your near future! 🍰✨",
        "Interesting choice! The cosmos predicts you will look exceptionally photogenic in your next picture. 📸💅",
        "A cute choice for a cute human. You have unlocked unlimited good luck and positive energy! 🌸"
      ]
    },
    {
      id: "B",
      symbol: "🌸",
      label: "Option B (Mystery Blossom)",
      fortunes: [
        "Congratulations! You have unlocked absolutely nothing except this cute popup message. 😭🎁",
        "The tea leaves reveal: You are going to procrastinate on something today and it will still work out fine. ☕💀",
        "Prophecy fulfilled: You are certified 200% partner material for the next 100 years. 📜✨"
      ]
    },
    {
      id: "C",
      symbol: "✨",
      label: "Option C (Pure Sparkles)",
      fortunes: [
        "A star has blessed your day! You will laugh really hard at a completely stupid meme within 24 hours. 😂🌟",
        "You chose Option C! That means you owe your partner (me) a free bubble tea or a funny selfie. 🧋👀",
        "Plot twist: This was secretly the best option of all three. Take a screenshot and claim your glory! 🏆💖"
      ]
    }
  ],

  // 11. Final Section
  final: {
    heading: "That's All... For Now 👀",
    subtext: "Thanks for exploring this little corner of the internet made just for you.",
    startAgainBtn: "Back to Top 🔄",
    footerText:"Made with a pure heart, just to remind you how truly special you are. 🌸" 
  }
};
