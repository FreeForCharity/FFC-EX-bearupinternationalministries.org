export interface Scripture {
  text: string
  reference: string
}

/**
 * Encouraging, uplifting verses (World English Bible — public domain).
 * One is selected per ISO calendar week; see getWeeklyScripture().
 */
export const scriptures: Scripture[] = [
  {
    text: 'For I know the plans I have for you, says Yahweh, plans for welfare, and not for evil, to give you hope and a future.',
    reference: 'Jeremiah 29:11',
  },
  {
    text: 'I can do all things through Christ, who strengthens me.',
    reference: 'Philippians 4:13',
  },
  {
    text: "Don't be afraid, for I am with you. Don't be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.",
    reference: 'Isaiah 41:10',
  },
  {
    text: 'Yahweh is my shepherd; I shall lack nothing.',
    reference: 'Psalm 23:1',
  },
  {
    text: 'We know that all things work together for good for those who love God, for those who are called according to his purpose.',
    reference: 'Romans 8:28',
  },
  {
    text: 'Trust in Yahweh with all your heart, and don’t lean on your own understanding.',
    reference: 'Proverbs 3:5',
  },
  {
    text: 'But those who wait for Yahweh will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint.',
    reference: 'Isaiah 40:31',
  },
  {
    text: 'Be strong and courageous. Don’t be afraid or scared of them, for Yahweh your God himself is who goes with you. He will not fail you nor forsake you.',
    reference: 'Deuteronomy 31:6',
  },
  {
    text: 'And my God will supply every need of yours according to his riches in glory in Christ Jesus.',
    reference: 'Philippians 4:19',
  },
  {
    text: 'Cast all your worries on him, because he cares for you.',
    reference: '1 Peter 5:7',
  },
  {
    text: 'Yahweh is my light and my salvation. Whom shall I fear? Yahweh is the strength of my life. Of whom shall I be afraid?',
    reference: 'Psalm 27:1',
  },
  {
    text: 'For God gave us a spirit not of fear, but of power, love, and self-control.',
    reference: '2 Timothy 1:7',
  },
  {
    text: 'This is the day that Yahweh has made. We will rejoice and be glad in it.',
    reference: 'Psalm 118:24',
  },
  {
    text: 'Peace I leave with you. My peace I give to you; not as the world gives, give I to you. Don’t let your heart be troubled, neither let it be fearful.',
    reference: 'John 14:27',
  },
  {
    text: 'The joy of Yahweh is your strength.',
    reference: 'Nehemiah 8:10',
  },
  {
    text: 'In everything give thanks, for this is the will of God in Christ Jesus toward you.',
    reference: '1 Thessalonians 5:18',
  },
  {
    text: 'Come to me, all you who labor and are heavily burdened, and I will give you rest.',
    reference: 'Matthew 11:28',
  },
  {
    text: 'Delight yourself also in Yahweh, and he will give you the desires of your heart.',
    reference: 'Psalm 37:4',
  },
  {
    text: 'Don’t be anxious about anything, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God.',
    reference: 'Philippians 4:6',
  },
  {
    text: 'God is our refuge and strength, a very present help in trouble.',
    reference: 'Psalm 46:1',
  },
  {
    text: 'For with God, nothing will be impossible.',
    reference: 'Luke 1:37',
  },
  {
    text: 'Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.',
    reference: '2 Corinthians 5:17',
  },
  {
    text: 'Weeping may stay for the night, but joy comes in the morning.',
    reference: 'Psalm 30:5',
  },
  {
    text: 'Let your light shine before men, that they may see your good works, and glorify your Father who is in heaven.',
    reference: 'Matthew 5:16',
  },
  {
    text: 'He heals the broken in heart, and binds up their wounds.',
    reference: 'Psalm 147:3',
  },
  {
    text: 'For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.',
    reference: 'John 3:16',
  },
  {
    text: 'Now may the God of hope fill you with all joy and peace in believing, that you may abound in hope in the power of the Holy Spirit.',
    reference: 'Romans 15:13',
  },
  {
    text: 'The Lord is not slow concerning his promise, but is patient with us, not wishing that anyone should perish, but that all should come to repentance.',
    reference: '2 Peter 3:9',
  },
  {
    text: 'Be strong, all you people of the land, says Yahweh, and work, for I am with you.',
    reference: 'Haggai 2:4',
  },
  {
    text: 'Blessed is the man who trusts in Yahweh, and whose confidence is in Yahweh.',
    reference: 'Jeremiah 17:7',
  },
  {
    text: 'Yahweh will fight for you, and you shall be still.',
    reference: 'Exodus 14:14',
  },
  {
    text: 'Rejoice in the Lord always! Again I will say, rejoice!',
    reference: 'Philippians 4:4',
  },
  {
    text: 'For the mountains may depart, and the hills be removed, but my loving kindness will not depart from you.',
    reference: 'Isaiah 54:10',
  },
  {
    text: 'A cheerful heart makes good medicine, but a crushed spirit dries up the bones.',
    reference: 'Proverbs 17:22',
  },
  {
    text: 'He gives power to the weak. He increases the strength of him who has no might.',
    reference: 'Isaiah 40:29',
  },
  {
    text: 'Commit your way to Yahweh. Trust also in him, and he will do this.',
    reference: 'Psalm 37:5',
  },
  {
    text: 'Bring the whole tithe into the storehouse... and test me now in this, says Yahweh of Armies, if I will not open you the windows of heaven, and pour you out a blessing.',
    reference: 'Malachi 3:10',
  },
  {
    text: 'Every good gift and every perfect gift is from above, coming down from the Father of lights.',
    reference: 'James 1:17',
  },
  {
    text: 'The steadfast love of Yahweh never ceases; his mercies never come to an end. They are new every morning.',
    reference: 'Lamentations 3:22-23',
  },
  {
    text: 'For our light and momentary affliction is producing for us an everlasting weight of glory beyond all measure.',
    reference: '2 Corinthians 4:17',
  },
  {
    text: 'Above all things be earnest in your love among yourselves, for love covers a multitude of sins.',
    reference: '1 Peter 4:8',
  },
  {
    text: 'Let all that you do be done in love.',
    reference: '1 Corinthians 16:14',
  },
  {
    text: 'The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.',
    reference: 'Galatians 5:22-23',
  },
  {
    text: 'Blessed are those who hunger and thirst after righteousness, for they shall be filled.',
    reference: 'Matthew 5:6',
  },
  {
    text: 'And let us not be weary in doing good, for we will reap in due season, if we don’t give up.',
    reference: 'Galatians 6:9',
  },
  {
    text: 'Whoever is generous to the poor lends to Yahweh; he will reward him for his good deed.',
    reference: 'Proverbs 19:17',
  },
  {
    text: 'Freely you received, freely give.',
    reference: 'Matthew 10:8',
  },
  {
    text: 'Each man according as he has determined in his heart; not grudgingly, or under compulsion; for God loves a cheerful giver.',
    reference: '2 Corinthians 9:7',
  },
  {
    text: 'Whatever you do, work heartily, as for the Lord, and not for men.',
    reference: 'Colossians 3:23',
  },
  {
    text: 'Give, and it will be given to you: good measure, pressed down, shaken together, and running over, will be given to you.',
    reference: 'Luke 6:38',
  },
  {
    text: 'Let us hold fast the confession of our hope without wavering, for he who promised is faithful.',
    reference: 'Hebrews 10:23',
  },
  {
    text: 'Now to him who is able to do exceedingly abundantly above all that we ask or think, according to the power that works in us.',
    reference: 'Ephesians 3:20',
  },
]

function getISOWeekParts(date: Date): { year: number; week: number } {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNumber = (target.getUTCDay() + 6) % 7
  target.setUTCDate(target.getUTCDate() - dayNumber + 3)
  const isoYear = target.getUTCFullYear()
  const firstThursday = new Date(Date.UTC(isoYear, 0, 4))
  const firstThursdayDayNumber = (firstThursday.getUTCDay() + 6) % 7
  firstThursday.setUTCDate(firstThursday.getUTCDate() - firstThursdayDayNumber + 3)
  const week = 1 + Math.round((target.getTime() - firstThursday.getTime()) / (7 * 24 * 3600 * 1000))
  return { year: isoYear, week }
}

function seededIndex(seed: number, length: number): number {
  const fractional = Math.sin(seed) * 10000
  const frac = fractional - Math.floor(fractional)
  return Math.floor(frac * length)
}

/**
 * Picks the scripture for the ISO calendar week containing `date`.
 * Same verse for everyone all week; automatically rotates to a new
 * (pseudo-randomly chosen) verse the following week with no manual update.
 */
export function getWeeklyScripture(date: Date = new Date()): Scripture {
  const { year, week } = getISOWeekParts(date)
  const seed = year * 100 + week
  const index = seededIndex(seed, scriptures.length)
  return scriptures[index]
}
