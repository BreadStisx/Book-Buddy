'use client'

import { useState } from 'react';
import BookModal from './components/BookModal';

const moods = [
    {
        name: 'adventurous',
        description: 'Epic journeys and thrilling quests await',
        icon: '🗺️',
        color: 'bg-orange-50'
    },
    {
        name: 'romantic',
        description: 'Love stories and heartwarming tales',
        icon: '💝',
        color: 'bg-pink-50'
    },
    {
        name: 'mysterious',
        description: 'Intriguing puzzles and suspenseful narratives',
        icon: '🔍',
        color: 'bg-purple-50'
    },
    {
        name: 'peaceful',
        description: 'Calming stories for relaxation',
        icon: '🌸',
        color: 'bg-green-50'
    },
    {
        name: 'melancholic',
        description: 'Deep, thoughtful stories that touch the soul',
        icon: '🌧️',
        color: 'bg-blue-50'
    },
    {
        name: 'inspiring',
        description: 'Stories that motivate and uplift',
        icon: '✨',
        color: 'bg-yellow-50'
    },
    {
        name: 'humorous',
        description: 'Light-hearted tales full of wit and laughter',
        icon: '😄',
        color: 'bg-red-50'
    },
    {
        name: 'nostalgic',
        description: 'Stories that remind us of simpler times',
        icon: '📷',
        color: 'bg-indigo-50'
    },
    {
        name: 'curious',
        description: 'Books that satisfy your thirst for knowledge',
        icon: '🔮',
        color: 'bg-teal-50'
    },
    {
        name: 'determined',
        description: 'Tales of perseverance and achievement',
        icon: '💪',
        color: 'bg-emerald-50'
    },
    {
        name: 'energetic',
        description: 'Fast-paced stories that keep you on your toes',
        icon: '⚡',
        color: 'bg-amber-50'
    },
    {
        name: 'contemplative',
        description: 'Philosophical tales that make you think deeply',
        icon: '🤔',
        color: 'bg-slate-50'
    },
    {
        name: 'whimsical',
        description: 'Magical stories full of wonder and delight',
        icon: '🌟',
        color: 'bg-fuchsia-50'
    },
    {
        name: 'hopeful',
        description: 'Uplifting stories of optimism and possibility',
        icon: '🌅',
        color: 'bg-rose-50'
    },
    {
        name: 'creative',
        description: 'Stories that spark imagination and innovation',
        icon: '🎨',
        color: 'bg-violet-50'
    },
    {
        name: 'cozy',
        description: 'Warm, comforting tales for quiet moments',
        icon: '☕',
        color: 'bg-amber-50'
    },
    {
        name: 'rebellious',
        description: 'Stories of breaking free and challenging norms',
        icon: '✊',
        color: 'bg-zinc-50'
    },
    {
        name: 'enchanted',
        description: 'Tales of magic and otherworldly wonders',
        icon: '🔮',
        color: 'bg-cyan-50'
    },
    {
        name: 'determined',
        description: 'Stories of grit and unwavering resolve',
        icon: '🎯',
        color: 'bg-lime-50'
    },
    {
        name: 'wanderlust',
        description: 'Tales of travel and discovering new worlds',
        icon: '✈️',
        color: 'bg-sky-50'
    }
];

const sampleBooks = {
    adventurous: [
        {
            title: "The Lost City of Z",
            author: "David Grann",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1400078458.01.L.jpg",
            summary: "A fascinating tale of adventure and exploration in the Amazon rainforest, following Percy Fawcett's quest for an ancient civilization.",
            rating: 4,
            genre: "Adventure/Non-fiction",
            pages: 352,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Lost-City-Deadly-Obsession-Amazon/dp/1400078458"
        },
        {
            title: "Into Thin Air",
            author: "Jon Krakauer",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0385494785.01.L.jpg",
            summary: "A personal account of the 1996 Mount Everest disaster, where eight climbers lost their lives in a tragic expedition.",
            rating: 5,
            genre: "Adventure/Memoir",
            pages: 368,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Into-Thin-Air-Personal-Disaster/dp/0385494785"
        },
        {
            title: "Endurance",
            author: "Alfred Lansing",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0465062881.01.L.jpg",
            summary: "The incredible true story of Ernest Shackleton's survival after his ship was trapped in Antarctic ice.",
            rating: 5,
            genre: "Adventure/History",
            pages: 357,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Endurance-Shackletons-Incredible-Alfred-Lansing/dp/0465062881"
        },
        {
            title: "Kon-Tiki",
            author: "Thor Heyerdahl",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0671726528.01.L.jpg",
            summary: "The thrilling account of a 4,300-mile journey across the Pacific Ocean on a primitive raft.",
            rating: 4,
            genre: "Adventure/Travel",
            pages: 240,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Kon-Tiki-Across-Pacific-Thor-Heyerdahl/dp/0671726528"
        },
        {
            title: "In the Heart of the Sea",
            author: "Nathaniel Philbrick",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0141001828.01.L.jpg",
            summary: "The tragic true story that inspired Moby-Dick, following the crew of the Essex after a whale attack.",
            rating: 5,
            genre: "Adventure/Maritime",
            pages: 320,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Heart-Sea-Tragedy-Whaleship-Essex/dp/0141001828"
        },
        {
            title: "Touching the Void",
            author: "Joe Simpson",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0060730552.01.L.jpg",
            summary: "A harrowing tale of survival in the Peruvian Andes after a climbing accident.",
            rating: 5,
            genre: "Adventure/Survival",
            pages: 224,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Touching-Void-True-Story-Miraculous/dp/0060730552"
        },
        {
            title: "Alive",
            author: "Piers Paul Read",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1844153096.01.L.jpg",
            summary: "The story of survival after a plane crash in the Andes Mountains.",
            rating: 4,
            genre: "Adventure/Survival",
            pages: 318,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Alive-Sixteen-Survivors-Assistance-Universe/dp/1844153096"
        },
        {
            title: "Shadow Divers",
            author: "Robert Kurson",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0375760989.01.L.jpg",
            summary: "Two divers discover a World War II U-boat off the coast of New Jersey.",
            rating: 4,
            genre: "Adventure/History",
            pages: 375,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Shadow-Divers-Adventure-Americans-Everything/dp/0375760989"
        },
        {
            title: "The Perfect Storm",
            author: "Sebastian Junger",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/006101351X.01.L.jpg",
            summary: "The true story of the Andrea Gail and the massive storm that claimed her crew.",
            rating: 4,
            genre: "Adventure/Maritime",
            pages: 248,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Perfect-Storm-True-Story-Against/dp/006101351X"
        },
        {
            title: "Into the Wild",
            author: "Jon Krakauer",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0385486804.01.L.jpg",
            summary: "The story of Christopher McCandless and his journey into the Alaskan wilderness.",
            rating: 5,
            genre: "Adventure/Biography",
            pages: 224,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Into-Wild-Jon-Krakauer/dp/0385486804"
        }
    ],
    romantic: [
        {
            title: "The Love Hypothesis",
            author: "Ali Hazelwood",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0593336828.01.L.jpg",
            summary: "A fake-dating romance between a Ph.D. candidate and a young professor turns into something real in this charming academic romance.",
            rating: 5,
            genre: "Romance/Contemporary",
            pages: 384,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/Love-Hypothesis-Ali-Hazelwood/dp/0593336828"
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0141439513.01.L.jpg",
            summary: "The timeless classic following Elizabeth Bennet and Mr. Darcy's journey from pride and prejudice to love.",
            rating: 5,
            genre: "Romance/Classic",
            pages: 432,
            price: "$9.99",
            amazonLink: "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/0141439513"
        },
        {
            title: "Beach Read",
            author: "Emily Henry",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1984806734.01.L.jpg",
            summary: "Two writers with opposite styles swap genres for a summer, discovering love along the way.",
            rating: 4,
            genre: "Romance/Contemporary",
            pages: 384,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Beach-Read-Emily-Henry/dp/1984806734"
        },
        {
            title: "The Time Traveler's Wife",
            author: "Audrey Niffenegger",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1476764832.01.L.jpg",
            summary: "A unique love story about a man with a genetic disorder that causes him to time travel unpredictably.",
            rating: 5,
            genre: "Romance/Science Fiction",
            pages: 546,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Time-Travelers-Wife-Audrey-Niffenegger/dp/1476764832"
        },
        {
            title: "Outlander",
            author: "Diana Gabaldon",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0440212561.01.L.jpg",
            summary: "A WWII nurse finds herself transported to 18th-century Scotland, where she falls in love with a Highland warrior.",
            rating: 5,
            genre: "Romance/Historical",
            pages: 850,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Outlander-Diana-Gabaldon/dp/0440212561"
        },
        {
            title: "The Notebook",
            author: "Nicholas Sparks",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0553156497.01.L.jpg",
            summary: "A heartwarming tale of enduring love between Noah and Allie, spanning decades and circumstances.",
            rating: 4,
            genre: "Romance/Contemporary",
            pages: 224,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Notebook-Nicholas-Sparks/dp/0553156497"
        },
        {
            title: "Red, White & Royal Blue",
            author: "Casey McQuiston",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1250316774.01.L.jpg",
            summary: "The First Son falls in love with the Prince of Wales in this charming contemporary romance.",
            rating: 5,
            genre: "Romance/LGBTQ+",
            pages: 432,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Red-White-Royal-Blue-Novel/dp/1250316774"
        },
        {
            title: "The Seven Husbands of Evelyn Hugo",
            author: "Taylor Jenkins Reid",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1501161938.01.L.jpg",
            summary: "A reclusive Hollywood legend reveals her life story and greatest love to an unknown journalist.",
            rating: 5,
            genre: "Romance/Historical Fiction",
            pages: 400,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Seven-Husbands-Evelyn-Hugo-Novel/dp/1501161938"
        },
        {
            title: "Me Before You",
            author: "Jojo Moyes",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0143124544.01.L.jpg",
            summary: "A small-town girl becomes a caregiver for a quadriplegic man, changing both their lives forever.",
            rating: 4,
            genre: "Romance/Contemporary",
            pages: 400,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Me-Before-You-Jojo-Moyes/dp/0143124544"
        },
        {
            title: "One Day",
            author: "David Nicholls",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307474712.01.L.jpg",
            summary: "Following two people on the same day each year for two decades as their lives and relationship evolve.",
            rating: 4,
            genre: "Romance/Literary Fiction",
            pages: 448,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/One-Day-David-Nicholls/dp/0307474712"
        }
    ],
    mysterious: [
        {
            title: "The Silent Patient",
            author: "Alex Michaelides",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1250301696.01.L.jpg",
            summary: "A woman shoots her husband and never speaks again. A criminal psychotherapist becomes obsessed with uncovering her motive.",
            rating: 5,
            genre: "Mystery/Psychological Thriller",
            pages: 339,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Silent-Patient-Alex-Michaelides/dp/1250301696"
        },
        {
            title: "Gone Girl",
            author: "Gillian Flynn",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307588378.01.L.jpg",
            summary: "A woman disappears on her wedding anniversary, leaving her husband as the prime suspect in a twisted tale of psychological manipulation.",
            rating: 5,
            genre: "Mystery/Thriller",
            pages: 432,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Gone-Girl-Gillian-Flynn/dp/0307588378"
        },
        {
            title: "The Da Vinci Code",
            author: "Dan Brown",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307474275.01.L.jpg",
            summary: "A Harvard symbologist uncovers a centuries-old secret society and a conspiracy involving the Catholic Church.",
            rating: 4,
            genre: "Mystery/Thriller",
            pages: 597,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Da-Vinci-Code-Dan-Brown/dp/0307474275"
        },
        {
            title: "And Then There Were None",
            author: "Agatha Christie",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062073486.01.L.jpg",
            summary: "Ten strangers are lured to an island mansion and start dying one by one in this classic mystery.",
            rating: 5,
            genre: "Mystery/Classic",
            pages: 264,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/Then-There-Were-None/dp/0062073486"
        },
        {
            title: "The Girl with the Dragon Tattoo",
            author: "Stieg Larsson",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307454541.01.L.jpg",
            summary: "A journalist and a brilliant hacker investigate a decades-old disappearance in Sweden.",
            rating: 5,
            genre: "Mystery/Crime",
            pages: 672,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Girl-Dragon-Tattoo-Millennium/dp/0307454541"
        },
        {
            title: "In the Woods",
            author: "Tana French",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0143113496.01.L.jpg",
            summary: "A detective investigates a murder case that eerily parallels his own traumatic childhood experience.",
            rating: 4,
            genre: "Mystery/Police Procedural",
            pages: 464,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Woods-Dublin-Murder-Squad-Book/dp/0143113496"
        },
        {
            title: "The Woman in the Window",
            author: "A.J. Finn",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062678418.01.L.jpg",
            summary: "An agoraphobic woman witnesses a crime in her neighbor's house, but no one believes her.",
            rating: 4,
            genre: "Mystery/Psychological Thriller",
            pages: 427,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Woman-Window-Novel-J-Finn/dp/0062678418"
        },
        {
            title: "Sharp Objects",
            author: "Gillian Flynn",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307341550.01.L.jpg",
            summary: "A reporter returns to her hometown to cover a series of murders, confronting her own dark past.",
            rating: 4,
            genre: "Mystery/Psychological Thriller",
            pages: 254,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Sharp-Objects-Novel-Gillian-Flynn/dp/0307341550"
        },
        {
            title: "The 7½ Deaths of Evelyn Hardcastle",
            author: "Stuart Turton",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1492657964.01.L.jpg",
            summary: "A man must solve a murder by experiencing the same day through eight different witnesses' perspectives.",
            rating: 5,
            genre: "Mystery/Science Fiction",
            pages: 432,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/7%C2%BD-Deaths-Evelyn-Hardcastle/dp/1492657964"
        },
        {
            title: "Big Little Lies",
            author: "Liane Moriarty",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0425274861.01.L.jpg",
            summary: "Three women's lives intersect at their children's school, leading to a deadly climax at a school fundraiser.",
            rating: 4,
            genre: "Mystery/Contemporary",
            pages: 460,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Big-Little-Lies-Liane-Moriarty/dp/0425274861"
        }
    ],
    peaceful: [
        {
            title: "The Secret Garden",
            author: "Frances Hodgson Burnett",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0142437050.01.L.jpg",
            summary: "A young girl discovers a magical garden that helps heal her family's emotional wounds.",
            rating: 5,
            genre: "Classic/Children's Literature",
            pages: 331,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/Secret-Garden-Frances-Hodgson-Burnett/dp/0142437050"
        },
        {
            title: "A Year in Provence",
            author: "Peter Mayle",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0679731148.01.L.jpg",
            summary: "A charming memoir about life in the French countryside, filled with local characters and culinary adventures.",
            rating: 4,
            genre: "Memoir/Travel",
            pages: 310,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Year-Provence-Peter-Mayle/dp/0679731148"
        },
        {
            title: "The Wind in the Willows",
            author: "Kenneth Grahame",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0143039091.01.L.jpg",
            summary: "A gentle tale of friendship between the animals of the riverbank.",
            rating: 5,
            genre: "Classic/Children's Literature",
            pages: 256,
            price: "$11.99",
            amazonLink: "https://www.amazon.com/Wind-Willows-Penguin-Classics/dp/0143039091"
        },
        {
            title: "Under the Tuscan Sun",
            author: "Frances Mayes",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0767900383.01.L.jpg",
            summary: "A woman's journey of restoring an abandoned villa in the beautiful Tuscan countryside.",
            rating: 4,
            genre: "Memoir/Travel",
            pages: 304,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Under-Tuscan-Sun-Italy/dp/0767900383"
        },
        {
            title: "The Lake House",
            author: "Kate Morton",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1451649355.01.L.jpg",
            summary: "A detective uncovers the secrets of an abandoned estate in Cornwall.",
            rating: 4,
            genre: "Historical Fiction/Mystery",
            pages: 512,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Lake-House-Novel-Kate-Morton/dp/1451649355"
        },
        {
            title: "The Shell Seekers",
            author: "Rosamunde Pilcher",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0312985401.01.L.jpg",
            summary: "A family saga centered around a valuable painting and the memories it holds.",
            rating: 4,
            genre: "Fiction/Family Saga",
            pages: 688,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Shell-Seekers-Rosamunde-Pilcher/dp/0312985401"
        },
        {
            title: "The Guernsey Literary and Potato Peel Pie Society",
            author: "Mary Ann Shaffer",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0385341008.01.L.jpg",
            summary: "A writer discovers the remarkable wartime story of an island's book club.",
            rating: 5,
            genre: "Historical Fiction",
            pages: 290,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Guernsey-Literary-Potato-Peel-Society/dp/0385341008"
        },
        {
            title: "The No. 1 Ladies' Detective Agency",
            author: "Alexander McCall Smith",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1400034779.01.L.jpg",
            summary: "A woman opens Botswana's first and only female-run detective agency.",
            rating: 4,
            genre: "Mystery/Fiction",
            pages: 235,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/No-1-Ladies-Detective-Agency/dp/1400034779"
        },
        {
            title: "Major Pettigrew's Last Stand",
            author: "Helen Simonson",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0812981227.01.L.jpg",
            summary: "A retired major finds unexpected romance in a small English village.",
            rating: 4,
            genre: "Fiction/Romance",
            pages: 384,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Major-Pettigrews-Last-Stand-Novel/dp/0812981227"
        },
        {
            title: "The Enchanted April",
            author: "Elizabeth von Arnim",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1590172256.01.L.jpg",
            summary: "Four women rent an Italian castle for a peaceful holiday away from their London lives.",
            rating: 4,
            genre: "Classic/Fiction",
            pages: 376,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Enchanted-April-York-Review-Classics/dp/1590172256"
        }
    ],
    melancholic: [
        {
            title: "Norwegian Wood",
            author: "Haruki Murakami",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0375704027.01.L.jpg",
            summary: "A nostalgic story of loss and sexuality in 1960s Japan, exploring themes of love, death, and memory.",
            rating: 4,
            genre: "Literary Fiction",
            pages: 296,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Norwegian-Wood-Haruki-Murakami/dp/0375704027"
        },
        {
            title: "Never Let Me Go",
            author: "Kazuo Ishiguro",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1400078776.01.L.jpg",
            summary: "A haunting tale about three friends discovering the truth about their special upbringing at an English boarding school.",
            rating: 5,
            genre: "Literary Fiction/Science Fiction",
            pages: 288,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Never-Let-Me-Kazuo-Ishiguro/dp/1400078776"
        },
        {
            title: "A Little Life",
            author: "Hanya Yanagihara",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0804172706.01.L.jpg",
            summary: "An epic tale of four college friends in New York City, focusing on their relationships and past traumas.",
            rating: 5,
            genre: "Literary Fiction",
            pages: 816,
            price: "$17.99",
            amazonLink: "https://www.amazon.com/Little-Life-Hanya-Yanagihara/dp/0804172706"
        },
        {
            title: "The Road",
            author: "Cormac McCarthy",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307387895.01.L.jpg",
            summary: "A father and son journey through a post-apocalyptic America, maintaining their humanity against all odds.",
            rating: 5,
            genre: "Post-Apocalyptic Fiction",
            pages: 287,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Road-Cormac-McCarthy/dp/0307387895"
        },
        {
            title: "The Bell Jar",
            author: "Sylvia Plath",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0060837020.01.L.jpg",
            summary: "A young woman's descent into mental illness set against the backdrop of 1950s America.",
            rating: 4,
            genre: "Literary Fiction/Classic",
            pages: 244,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Bell-Jar-Sylvia-Plath/dp/0060837020"
        },
        {
            title: "On Earth We're Briefly Gorgeous",
            author: "Ocean Vuong",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0525562028.01.L.jpg",
            summary: "A letter from a son to a mother who cannot read, exploring family history, trauma, and identity.",
            rating: 5,
            genre: "Literary Fiction",
            pages: 256,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Earth-Were-Briefly-Gorgeous-Novel/dp/0525562028"
        },
        {
            title: "The Heart's Invisible Furies",
            author: "John Boyne",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1524760838.01.L.jpg",
            summary: "The life story of an adopted Irish man, spanning seven decades of personal struggle and social change.",
            rating: 5,
            genre: "Literary Fiction",
            pages: 592,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Hearts-Invisible-Furies-Novel/dp/1524760838"
        },
        {
            title: "Atonement",
            author: "Ian McEwan",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/038572179X.01.L.jpg",
            summary: "A young girl's misunderstanding leads to a tragic series of events that changes multiple lives forever.",
            rating: 4,
            genre: "Literary Fiction/Historical",
            pages: 351,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Atonement-Novel-Ian-McEwan/dp/038572179X"
        },
        {
            title: "The Remains of the Day",
            author: "Kazuo Ishiguro",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0679731725.01.L.jpg",
            summary: "A butler reflects on his life of service and missed opportunities for love and personal fulfillment.",
            rating: 5,
            genre: "Literary Fiction",
            pages: 256,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Remains-Day-Kazuo-Ishiguro/dp/0679731725"
        },
        {
            title: "The Hours",
            author: "Michael Cunningham",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0312243022.01.L.jpg",
            summary: "Three generations of women are connected by Virginia Woolf's 'Mrs. Dalloway' in this meditation on life and loss.",
            rating: 4,
            genre: "Literary Fiction",
            pages: 240,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Hours-Novel-Michael-Cunningham/dp/0312243022"
        }
    ],
    inspiring: [
        {
            title: "Educated",
            author: "Tara Westover",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0399590501.01.L.jpg",
            summary: "A memoir about a woman who leaves her survivalist family to pursue education, eventually earning a PhD from Cambridge.",
            rating: 5,
            genre: "Memoir/Biography",
            pages: 334,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501"
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062315005.01.L.jpg",
            summary: "A shepherd boy's journey to find his Personal Legend, teaching universal truths about following one's dreams.",
            rating: 5,
            genre: "Philosophical Fiction",
            pages: 208,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005"
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0735211299.01.L.jpg",
            summary: "A practical guide to breaking bad habits and building good ones through tiny changes.",
            rating: 5,
            genre: "Self-Help/Personal Development",
            pages: 320,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
        },
        {
            title: "Man's Search for Meaning",
            author: "Viktor E. Frankl",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0807014273.01.L.jpg",
            summary: "A Holocaust survivor's account of finding purpose and meaning in the most dire circumstances.",
            rating: 5,
            genre: "Psychology/Memoir",
            pages: 192,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273"
        },
        {
            title: "Becoming",
            author: "Michelle Obama",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0525633758.01.L.jpg",
            summary: "The former First Lady's journey from the South Side of Chicago to the White House.",
            rating: 5,
            genre: "Autobiography",
            pages: 448,
            price: "$17.99",
            amazonLink: "https://www.amazon.com/Becoming-Michelle-Obama/dp/0525633758"
        },
        {
            title: "The Last Lecture",
            author: "Randy Pausch",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1401323251.01.L.jpg",
            summary: "A terminally ill professor shares life lessons about achieving your childhood dreams.",
            rating: 5,
            genre: "Memoir/Self-Help",
            pages: 206,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Last-Lecture-Randy-Pausch/dp/1401323251"
        },
        {
            title: "Born a Crime",
            author: "Trevor Noah",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0399588191.01.L.jpg",
            summary: "Trevor Noah's story of growing up in South Africa during apartheid as a mixed-race child.",
            rating: 5,
            genre: "Autobiography/Humor",
            pages: 304,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Born-Crime-Stories-African-Childhood/dp/0399588191"
        },
        {
            title: "The Power of Now",
            author: "Eckhart Tolle",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1577314808.01.L.jpg",
            summary: "A guide to spiritual enlightenment through living in the present moment.",
            rating: 4,
            genre: "Spirituality/Self-Help",
            pages: 236,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808"
        },
        {
            title: "Wild",
            author: "Cheryl Strayed",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307476073.01.L.jpg",
            summary: "A woman's transformative solo hike along the Pacific Crest Trail after personal tragedy.",
            rating: 4,
            genre: "Memoir/Adventure",
            pages: 336,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Wild-Found-Pacific-Crest-Trail/dp/0307476073"
        },
        {
            title: "The Happiness of Pursuit",
            author: "Chris Guillebeau",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0385348843.01.L.jpg",
            summary: "Stories of people who found purpose through pursuing extraordinary life quests.",
            rating: 4,
            genre: "Self-Help/Adventure",
            pages: 304,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Happiness-Pursuit-Finding-Quest-Change/dp/0385348843"
        }
    ],
    humorous: [
        {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0345391802.01.L.jpg",
            summary: "A hilarious journey through space following the last surviving human after Earth's destruction.",
            rating: 5,
            genre: "Science Fiction/Comedy",
            pages: 216,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/Hitchhikers-Guide-Galaxy-Douglas-Adams/dp/0345391802"
        },
        {
            title: "Good Omens",
            author: "Terry Pratchett & Neil Gaiman",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0060853980.01.L.jpg",
            summary: "An angel and a demon team up to prevent Armageddon because they've grown quite fond of Earth.",
            rating: 5,
            genre: "Fantasy/Comedy",
            pages: 400,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Good-Omens-Accurate-Prophecies-Nutter/dp/0060853980"
        },
        {
            title: "Three Men in a Boat",
            author: "Jerome K. Jerome",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0140621334.01.L.jpg",
            summary: "A comic account of three friends' boating holiday on the Thames, with their dog.",
            rating: 4,
            genre: "Classic/Humor",
            pages: 224,
            price: "$11.99",
            amazonLink: "https://www.amazon.com/Three-Men-Boat-Jerome-K/dp/0140621334"
        },
        {
            title: "Catch-22",
            author: "Joseph Heller",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1451621175.01.L.jpg",
            summary: "A satirical masterpiece about the absurdity of war and military bureaucracy.",
            rating: 5,
            genre: "Satire/War Fiction",
            pages: 453,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Catch-22-50th-Anniversary-Joseph-Heller/dp/1451621175"
        },
        {
            title: "A Confederacy of Dunces",
            author: "John Kennedy Toole",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0802130208.01.L.jpg",
            summary: "The misadventures of an eccentric, self-styled scholar in New Orleans.",
            rating: 4,
            genre: "Literary Fiction/Comedy",
            pages: 416,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Confederacy-Dunces-John-Kennedy-Toole/dp/0802130208"
        },
        {
            title: "The Thursday Murder Club",
            author: "Richard Osman",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1984880985.01.L.jpg",
            summary: "Four retirees meet weekly to solve cold cases, bringing warmth and wit to mystery-solving.",
            rating: 4,
            genre: "Mystery/Humor",
            pages: 384,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Thursday-Murder-Club-Novel/dp/1984880985"
        },
        {
            title: "Cold Comfort Farm",
            author: "Stella Gibbons",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0141441593.01.L.jpg",
            summary: "A satirical tale of a young woman who moves to her relatives' dramatically dysfunctional farm.",
            rating: 4,
            genre: "Classic/Comedy",
            pages: 256,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/Cold-Comfort-Farm-Penguin-Classics/dp/0141441593"
        },
        {
            title: "The Hundred-Year-Old Man Who Climbed Out the Window and Disappeared",
            author: "Jonas Jonasson",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0786891459.01.L.jpg",
            summary: "A centenarian's hilarious adventure after escaping his retirement home.",
            rating: 4,
            genre: "Humor/Adventure",
            pages: 400,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Hundred-Year-Old-Climbed-Window-Disappeared/dp/0786891459"
        },
        {
            title: "Where'd You Go, Bernadette",
            author: "Maria Semple",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0316415863.01.L.jpg",
            summary: "A witty story about an agoraphobic architect who disappears before a family trip to Antarctica.",
            rating: 4,
            genre: "Contemporary Fiction/Humor",
            pages: 352,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Whered-You-Go-Bernadette-Novel/dp/0316415863"
        },
        {
            title: "Three Bags Full",
            author: "Leonie Swann",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0767927052.01.L.jpg",
            summary: "A flock of sheep investigate their shepherd's murder in this charming mystery.",
            rating: 4,
            genre: "Mystery/Humor",
            pages: 352,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Three-Bags-Full-Sheep-Detective/dp/0767927052"
        }
    ],
    nostalgic: [
        {
            title: "The House at Pooh Corner",
            author: "A.A. Milne",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0140361227.01.L.jpg",
            summary: "The beloved tales of Winnie-the-Pooh and his friends in the Hundred Acre Wood.",
            rating: 5,
            genre: "Children's Literature/Classic",
            pages: 180,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/House-Pooh-Corner-Milne/dp/0140361227"
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0446310786.01.L.jpg",
            summary: "A timeless story of childhood innocence and racial injustice in the American South.",
            rating: 5,
            genre: "Literary Fiction/Classic",
            pages: 281,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0446310786"
        },
        {
            title: "Anne of Green Gables",
            author: "L.M. Montgomery",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0141321598.01.L.jpg",
            summary: "The beloved story of an orphan girl finding her place in Prince Edward Island.",
            rating: 5,
            genre: "Children's Literature/Classic",
            pages: 320,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Anne-Green-Gables-Puffin-Classics/dp/0141321598"
        },
        {
            title: "Little Women",
            author: "Louisa May Alcott",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0316489271.01.L.jpg",
            summary: "The timeless tale of the March sisters growing up in Civil War-era New England.",
            rating: 5,
            genre: "Classic Literature",
            pages: 528,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Little-Women-Louisa-May-Alcott/dp/0316489271"
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0316769177.01.L.jpg",
            summary: "The iconic story of teenage alienation and rebellion in 1950s New York.",
            rating: 4,
            genre: "Literary Fiction/Classic",
            pages: 234,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769177"
        },
        {
            title: "The Adventures of Tom Sawyer",
            author: "Mark Twain",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0143039563.01.L.jpg",
            summary: "The classic tale of a mischievous boy's adventures along the Mississippi River.",
            rating: 4,
            genre: "Classic Literature",
            pages: 244,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/Adventures-Tom-Sawyer-Penguin-Classics/dp/0143039563"
        },
        {
            title: "The Secret Garden",
            author: "Frances Hodgson Burnett",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0142437018.01.L.jpg",
            summary: "A young girl discovers a magical garden and helps heal her broken family.",
            rating: 5,
            genre: "Children's Literature/Classic",
            pages: 331,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Secret-Garden-Penguin-Classics/dp/0142437018"
        },
        {
            title: "A Tree Grows in Brooklyn",
            author: "Betty Smith",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0060736267.01.L.jpg",
            summary: "A young girl comes of age in early 20th century Brooklyn.",
            rating: 5,
            genre: "Literary Fiction/Coming of Age",
            pages: 496,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Tree-Grows-Brooklyn-Betty-Smith/dp/0060736267"
        },
        {
            title: "The Secret Life of Bees",
            author: "Sue Monk Kidd",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0142001740.01.L.jpg",
            summary: "A young girl finds solace and healing with three beekeeping sisters in 1960s South Carolina.",
            rating: 4,
            genre: "Literary Fiction",
            pages: 336,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Secret-Life-Bees-Monk-Kidd/dp/0142001740"
        },
        {
            title: "The Yearling",
            author: "Marjorie Kinnan Rawlings",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0020449313.01.L.jpg",
            summary: "A boy's coming-of-age story in the Florida backwoods with his pet fawn.",
            rating: 4,
            genre: "Classic Literature",
            pages: 428,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Yearling-Marjorie-Kinnan-Rawlings/dp/0020449313"
        }
    ],
    curious: [
        {
            title: "A Short History of Nearly Everything",
            author: "Bill Bryson",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/076790818X.01.L.jpg",
            summary: "A fascinating journey through science, from the Big Bang to human civilization, explained in engaging prose.",
            rating: 5,
            genre: "Science/History",
            pages: 544,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Short-History-Nearly-Everything/dp/076790818X"
        },
        {
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062316117.01.L.jpg",
            summary: "An exploration of how Homo sapiens became Earth's dominant species through biological and cultural evolution.",
            rating: 5,
            genre: "History/Anthropology",
            pages: 464,
            price: "$17.99",
            amazonLink: "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117"
        },
        {
            title: "The Hidden Life of Trees",
            author: "Peter Wohlleben",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1771642483.01.L.jpg",
            summary: "Discover how trees communicate, nurture their young, and create communities in this eye-opening exploration.",
            rating: 4,
            genre: "Nature/Science",
            pages: 288,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Hidden-Life-Trees-Communicate-Discoveries/dp/1771642483"
        },
        {
            title: "Cosmos",
            author: "Carl Sagan",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0345539435.01.L.jpg",
            summary: "A stunning journey through space and time, exploring the universe's greatest mysteries.",
            rating: 5,
            genre: "Science/Astronomy",
            pages: 396,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Cosmos-Carl-Sagan/dp/0345539435"
        },
        {
            title: "The Brain That Changes Itself",
            author: "Norman Doidge",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0143113100.01.L.jpg",
            summary: "Stories of personal triumph from the frontiers of brain science and neuroplasticity.",
            rating: 5,
            genre: "Science/Psychology",
            pages: 448,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Brain-That-Changes-Itself-Frontiers/dp/0143113100"
        },
        {
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0374533555.01.L.jpg",
            summary: "An exploration of the two systems that drive the way we think: fast, intuitive thinking and slower, more deliberative thinking.",
            rating: 5,
            genre: "Psychology/Economics",
            pages: 499,
            price: "$17.99",
            amazonLink: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555"
        },
        {
            title: "The Code Book",
            author: "Simon Singh",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0385495323.01.L.jpg",
            summary: "A fascinating history of codes and codebreaking, from ancient Egypt to quantum cryptography.",
            rating: 4,
            genre: "History/Science",
            pages: 432,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Code-Book-Science-Secrecy-Cryptography/dp/0385495323"
        },
        {
            title: "The Immortal Life of Henrietta Lacks",
            author: "Rebecca Skloot",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1400052181.01.L.jpg",
            summary: "The story of HeLa cells, ethics in medical research, and one family's journey to understand their mother's legacy.",
            rating: 5,
            genre: "Science/Biography",
            pages: 381,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Immortal-Life-Henrietta-Lacks/dp/1400052181"
        },
        {
            title: "Guns, Germs, and Steel",
            author: "Jared Diamond",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0393354326.01.L.jpg",
            summary: "Why did different civilizations around the world develop at different rates? A comprehensive look at human history.",
            rating: 5,
            genre: "History/Anthropology",
            pages: 528,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Guns-Germs-Steel-Fates-Societies/dp/0393354326"
        },
        {
            title: "The Elegant Universe",
            author: "Brian Greene",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/039333810X.01.L.jpg",
            summary: "An exploration of string theory and the quest to unite quantum mechanics and general relativity.",
            rating: 4,
            genre: "Science/Physics",
            pages: 464,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Elegant-Universe-Superstrings-Dimensions-Ultimate/dp/039333810X"
        }
    ],
    determined: [
        {
            title: "Unbroken",
            author: "Laura Hillenbrand",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0812974492.01.L.jpg",
            summary: "The incredible story of Louis Zamperini's survival as an Olympic runner turned WWII airman.",
            rating: 5,
            genre: "Biography/History",
            pages: 473,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Unbroken-World-Survival-Resilience-Redemption/dp/0812974492"
        },
        {
            title: "Grit",
            author: "Angela Duckworth",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1501111116.01.L.jpg",
            summary: "Why passion and perseverance are more crucial than talent for achieving success.",
            rating: 5,
            genre: "Psychology/Self-Help",
            pages: 352,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Grit-Passion-Perseverance-Angela-Duckworth/dp/1501111116"
        },
        {
            title: "The Boys in the Boat",
            author: "Daniel James Brown",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0143125478.01.L.jpg",
            summary: "Nine Americans and their epic quest for gold at the 1936 Berlin Olympics.",
            rating: 5,
            genre: "Sports/History",
            pages: 404,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Boys-Boat-Americans-Berlin-Olympics/dp/0143125478"
        },
        {
            title: "Can't Hurt Me",
            author: "David Goggins",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1544507852.01.L.jpg",
            summary: "A Navy SEAL's journey from depression to becoming one of the world's top endurance athletes.",
            rating: 5,
            genre: "Memoir/Self-Help",
            pages: 364,
            price: "$17.99",
            amazonLink: "https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544507852"
        },
        {
            title: "Endurance",
            author: "Scott Kelly",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1524731595.01.L.jpg",
            summary: "An astronaut's year-long mission in space and the challenges of long-term spaceflight.",
            rating: 4,
            genre: "Memoir/Science",
            pages: 400,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Endurance-Year-Space-Lifetime-Discovery/dp/1524731595"
        },
        {
            title: "The Long Walk to Freedom",
            author: "Nelson Mandela",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0316548189.01.L.jpg",
            summary: "Nelson Mandela's journey from prisoner to president of South Africa.",
            rating: 5,
            genre: "Autobiography/History",
            pages: 656,
            price: "$18.99",
            amazonLink: "https://www.amazon.com/Long-Walk-Freedom-Autobiography-Mandela/dp/0316548189"
        },
        {
            title: "The Wright Brothers",
            author: "David McCullough",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1476728747.01.L.jpg",
            summary: "The dramatic story of the bicycle mechanics who changed the world with powered flight.",
            rating: 5,
            genre: "Biography/History",
            pages: 336,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Wright-Brothers-David-McCullough/dp/1476728747"
        },
        {
            title: "The Rise of Theodore Roosevelt",
            author: "Edmund Morris",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0375756787.01.L.jpg",
            summary: "The transformation of a sickly boy into one of America's most vigorous presidents.",
            rating: 5,
            genre: "Biography/History",
            pages: 920,
            price: "$19.99",
            amazonLink: "https://www.amazon.com/Rise-Theodore-Roosevelt-Edmund-Morris/dp/0375756787"
        },
        {
            title: "Shoe Dog",
            author: "Phil Knight",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1501135929.01.L.jpg",
            summary: "The founder of Nike shares his journey from selling shoes from his car to building a global brand.",
            rating: 5,
            genre: "Memoir/Business",
            pages: 400,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike/dp/1501135929"
        },
        {
            title: "The Pursuit of Happyness",
            author: "Chris Gardner",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0060744871.01.L.jpg",
            summary: "A struggling salesman's journey from homelessness to Wall Street success while raising his son.",
            rating: 4,
            genre: "Memoir/Inspiration",
            pages: 320,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Pursuit-Happyness-Chris-Gardner/dp/0060744871"
        }
    ],
    energetic: [
        {
            title: "Born to Run",
            author: "Christopher McDougall",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307279189.01.L.jpg",
            summary: "An epic adventure exploring the world's greatest distance runners and the secrets of their endurance.",
            rating: 5,
            genre: "Sports/Adventure",
            pages: 287,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Born-Run-Hidden-Superathletes-Greatest/dp/0307279189"
        },
        {
            title: "Ready Player One",
            author: "Ernest Cline",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307887448.01.L.jpg",
            summary: "A high-stakes virtual reality contest in a dystopian future filled with 80s pop culture references.",
            rating: 5,
            genre: "Science Fiction/Adventure",
            pages: 384,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Ready-Player-One-Ernest-Cline/dp/0307887448"
        },
        {
            title: "The Fast and the Dead",
            author: "Day Keene",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0843961236.01.L.jpg",
            summary: "A pulse-pounding thriller about a race against time to prevent a global catastrophe.",
            rating: 4,
            genre: "Thriller/Action",
            pages: 320,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Fast-Dead-Day-Keene/dp/0843961236"
        },
        {
            title: "Relentless",
            author: "Tim S. Grover",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1476714207.01.L.jpg",
            summary: "The elite trainer of Michael Jordan and Kobe Bryant reveals what it takes to achieve peak performance.",
            rating: 5,
            genre: "Self-Help/Sports",
            pages: 256,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Relentless-Unstoppable-Tim-S-Grover/dp/1476714207"
        },
        {
            title: "The Power of One",
            author: "Bryce Courtenay",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/034553980X.01.L.jpg",
            summary: "A young boxer's journey through apartheid South Africa, fighting for justice and self-discovery.",
            rating: 5,
            genre: "Historical Fiction/Sports",
            pages: 544,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Power-One-Novel-Bryce-Courtenay/dp/034553980X"
        },
        {
            title: "Ender's Game",
            author: "Orson Scott Card",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0812550706.01.L.jpg",
            summary: "A brilliant young strategist trains in zero gravity combat to save humanity from alien invasion.",
            rating: 5,
            genre: "Science Fiction",
            pages: 324,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Enders-Game-Ender-Quintet-Book/dp/0812550706"
        },
        {
            title: "The Martian",
            author: "Andy Weir",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0553418025.01.L.jpg",
            summary: "An astronaut uses his ingenuity to survive alone on Mars after being accidentally left behind.",
            rating: 5,
            genre: "Science Fiction/Adventure",
            pages: 387,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Martian-Andy-Weir/dp/0553418025"
        },
        {
            title: "Red Rising",
            author: "Pierce Brown",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/034553980X.01.L.jpg",
            summary: "A young miner infiltrates the ruling class of a color-coded society on Mars to spark revolution.",
            rating: 5,
            genre: "Science Fiction/Action",
            pages: 382,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Red-Rising-Pierce-Brown/dp/034553980X"
        },
        {
            title: "The Perfect Mile",
            author: "Neal Bascomb",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0618562095.01.L.jpg",
            summary: "Three athletes' quest to break the four-minute mile barrier in the 1950s.",
            rating: 4,
            genre: "Sports History",
            pages: 352,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Perfect-Mile-Athletes-Greatest-Sports/dp/0618562095"
        },
        {
            title: "Altered Carbon",
            author: "Richard K. Morgan",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0345457684.01.L.jpg",
            summary: "A high-octane cyberpunk thriller where consciousness can be transferred between bodies.",
            rating: 4,
            genre: "Science Fiction/Thriller",
            pages: 384,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Altered-Carbon-Takeshi-Kovacs-Novels/dp/0345457684"
        }
    ],
    contemplative: [
        {
            title: "The Book of Joy",
            author: "Dalai Lama and Desmond Tutu",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0399185046.01.L.jpg",
            summary: "Two spiritual leaders explore the nature of true joy and confront life's obstacles with wisdom and compassion.",
            rating: 5,
            genre: "Philosophy/Spirituality",
            pages: 384,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Book-Joy-Lasting-Happiness-Changing/dp/0399185046"
        },
        {
            title: "Zen and the Art of Motorcycle Maintenance",
            author: "Robert M. Pirsig",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0060839872.01.L.jpg",
            summary: "A philosophical journey exploring the metaphysics of quality through a motorcycle trip across America.",
            rating: 5,
            genre: "Philosophy/Memoir",
            pages: 464,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060839872"
        },
        {
            title: "The Midnight Library",
            author: "Matt Haig",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0525559477.01.L.jpg",
            summary: "A woman discovers a library between life and death where she can try different versions of her life.",
            rating: 4,
            genre: "Literary Fiction/Philosophy",
            pages: 304,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Midnight-Library-Matt-Haig/dp/0525559477"
        },
        {
            title: "Siddhartha",
            author: "Hermann Hesse",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0553208845.01.L.jpg",
            summary: "A spiritual journey of self-discovery set in the time of the Buddha.",
            rating: 5,
            genre: "Philosophical Fiction",
            pages: 152,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/Siddhartha-Hermann-Hesse/dp/0553208845"
        },
        {
            title: "When Breath Becomes Air",
            author: "Paul Kalanithi",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/081298840X.01.L.jpg",
            summary: "A neurosurgeon confronts his own mortality and contemplates what makes life meaningful.",
            rating: 5,
            genre: "Memoir/Philosophy",
            pages: 256,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/When-Breath-Becomes-Paul-Kalanithi/dp/081298840X"
        },
        {
            title: "The Prophet",
            author: "Kahlil Gibran",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0394404289.01.L.jpg",
            summary: "Poetic essays on life's deepest questions about love, work, joy, and sorrow.",
            rating: 5,
            genre: "Poetry/Philosophy",
            pages: 127,
            price: "$11.99",
            amazonLink: "https://www.amazon.com/Prophet-Kahlil-Gibran/dp/0394404289"
        },
        {
            title: "The Untethered Soul",
            author: "Michael A. Singer",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1572245379.01.L.jpg",
            summary: "An exploration of consciousness and the journey to inner freedom.",
            rating: 5,
            genre: "Spirituality/Psychology",
            pages: 200,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Untethered-Soul-Journey-Beyond-Yourself/dp/1572245379"
        },
        {
            title: "The Art of Stillness",
            author: "Pico Iyer",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1476784728.01.L.jpg",
            summary: "A meditation on the unexpected adventure of staying still in our fast-paced world.",
            rating: 4,
            genre: "Philosophy/Self-Help",
            pages: 96,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Art-Stillness-Adventures-Going-Nowhere/dp/1476784728"
        },
        {
            title: "The Tao of Pooh",
            author: "Benjamin Hoff",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0140067477.01.L.jpg",
            summary: "An exploration of Taoist principles through the lens of Winnie the Pooh characters.",
            rating: 4,
            genre: "Philosophy/Spirituality",
            pages: 158,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/Tao-Pooh-Benjamin-Hoff/dp/0140067477"
        },
        {
            title: "The Consolations of Philosophy",
            author: "Alain de Botton",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0679779175.01.L.jpg",
            summary: "Ancient philosophical wisdom applied to modern everyday problems.",
            rating: 4,
            genre: "Philosophy",
            pages: 272,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Consolations-Philosophy-Alain-Botton/dp/0679779175"
        }
    ],
    whimsical: [
        {
            title: "The House in the Cerulean Sea",
            author: "TJ Klune",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1250217288.01.L.jpg",
            summary: "A magical story about a caseworker who discovers love and family at an orphanage for unusual children.",
            rating: 5,
            genre: "Fantasy/LGBTQ+",
            pages: 396,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/House-Cerulean-Sea-TJ-Klune/dp/1250217288"
        },
        {
            title: "Howl's Moving Castle",
            author: "Diana Wynne Jones",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0061478784.01.L.jpg",
            summary: "A young woman is transformed into an old lady by a witch and finds refuge in a mysterious moving castle.",
            rating: 5,
            genre: "Fantasy",
            pages: 336,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Howls-Moving-Castle-Diana-Wynne/dp/0061478784"
        },
        {
            title: "Stardust",
            author: "Neil Gaiman",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0061689246.01.L.jpg",
            summary: "A young man's adventure beyond the wall of his village into a magical realm to catch a fallen star.",
            rating: 4,
            genre: "Fantasy/Romance",
            pages: 256,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Stardust-Neil-Gaiman/dp/0061689246"
        },
        {
            title: "The Night Circus",
            author: "Erin Morgenstern",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307744434.01.L.jpg",
            summary: "A magical competition between two illusionists plays out in a mysterious circus that only opens at night.",
            rating: 5,
            genre: "Fantasy/Romance",
            pages: 516,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Night-Circus-Erin-Morgenstern/dp/0307744434"
        },
        {
            title: "A Gentleman in Moscow",
            author: "Amor Towles",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0143110438.01.L.jpg",
            summary: "A Russian count creates a rich life within the confines of a luxury hotel where he is under house arrest.",
            rating: 5,
            genre: "Historical Fiction",
            pages: 462,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Gentleman-Moscow-Novel-Amor-Towles/dp/0143110438"
        },
        {
            title: "The Hundred-Year-Old Man Who Climbed Out the Window and Disappeared",
            author: "Jonas Jonasson",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0786891459.01.L.jpg",
            summary: "A centenarian's hilarious adventure after escaping his retirement home.",
            rating: 4,
            genre: "Humor/Adventure",
            pages: 400,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Hundred-Year-Old-Climbed-Window-Disappeared/dp/0786891459"
        },
        {
            title: "The Invisible Life of Addie LaRue",
            author: "V.E. Schwab",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0765387565.01.L.jpg",
            summary: "A woman makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets.",
            rating: 5,
            genre: "Fantasy/Historical Fiction",
            pages: 448,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Invisible-Life-Addie-LaRue/dp/0765387565"
        },
        {
            title: "The Ocean at the End of the Lane",
            author: "Neil Gaiman",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062255657.01.L.jpg",
            summary: "A man returns to his childhood home and remembers a magical and dangerous adventure from his youth.",
            rating: 4,
            genre: "Fantasy/Literary Fiction",
            pages: 181,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Ocean-End-Lane-Novel/dp/0062255657"
        },
        {
            title: "The Starless Sea",
            author: "Erin Morgenstern",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/038554121X.01.L.jpg",
            summary: "A graduate student discovers a mysterious book that leads him to an ancient underground library.",
            rating: 4,
            genre: "Fantasy/Literary Fiction",
            pages: 512,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Starless-Sea-Novel-Erin-Morgenstern/dp/038554121X"
        },
        {
            title: "Sourdough",
            author: "Robin Sloan",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0374203105.01.L.jpg",
            summary: "A software engineer inherits a magical sourdough starter that changes her life in unexpected ways.",
            rating: 4,
            genre: "Magical Realism",
            pages: 272,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Sourdough-Novel-Robin-Sloan/dp/0374203105"
        }
    ],
    hopeful: [
        {
            title: "The Midnight Library",
            author: "Matt Haig",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0525559477.01.L.jpg",
            summary: "A story about second chances and finding hope in life's infinite possibilities.",
            rating: 5,
            genre: "Literary Fiction/Fantasy",
            pages: 304,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Midnight-Library-Matt-Haig/dp/0525559477"
        },
        {
            title: "A Man Called Ove",
            author: "Fredrik Backman",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1476738025.01.L.jpg",
            summary: "A grumpy widower's life is transformed by his quirky new neighbors.",
            rating: 5,
            genre: "Contemporary Fiction",
            pages: 337,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Man-Called-Ove-Novel/dp/1476738025"
        },
        {
            title: "The Boy, the Mole, the Fox and the Horse",
            author: "Charlie Mackesy",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062976583.01.L.jpg",
            summary: "A beautiful illustrated book about friendship, love, and hope in uncertain times.",
            rating: 5,
            genre: "Inspirational/Art",
            pages: 128,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Boy-Mole-Fox-Horse/dp/0062976583"
        },
        {
            title: "Where the Crawdads Sing",
            author: "Delia Owens",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0735219109.01.L.jpg",
            summary: "An unforgettable story of resilience, hope, and the power of the human spirit.",
            rating: 5,
            genre: "Literary Fiction",
            pages: 384,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219109"
        },
        {
            title: "The Authenticity Project",
            author: "Clare Pooley",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1984878638.01.L.jpg",
            summary: "A notebook brings together six strangers, leading to unexpected friendships and second chances.",
            rating: 4,
            genre: "Contemporary Fiction",
            pages: 368,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Authenticity-Project-Novel-Clare-Pooley/dp/1984878638"
        },
        {
            title: "The Giver of Stars",
            author: "Jojo Moyes",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0399562494.01.L.jpg",
            summary: "Based on a true story of the Pack Horse Librarians who brought books to remote Kentucky.",
            rating: 5,
            genre: "Historical Fiction",
            pages: 400,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Giver-Stars-Novel-Jojo-Moyes/dp/0399562494"
        },
        {
            title: "The House We Grew Up In",
            author: "Lisa Jewell",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1476776881.01.L.jpg",
            summary: "A family finds hope and healing as they confront their past and rebuild their relationships.",
            rating: 4,
            genre: "Contemporary Fiction",
            pages: 400,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/House-We-Grew-Up-Novel/dp/1476776881"
        },
        {
            title: "The Light We Cannot See",
            author: "Anthony Doerr",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1501173219.01.L.jpg",
            summary: "A story of hope and humanity during World War II through the eyes of two remarkable children.",
            rating: 5,
            genre: "Historical Fiction",
            pages: 544,
            price: "$17.99",
            amazonLink: "https://www.amazon.com/All-Light-We-Cannot-See/dp/1501173219"
        },
        {
            title: "The Humans",
            author: "Matt Haig",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1476730598.01.L.jpg",
            summary: "An alien discovers the beauty and hope in human imperfection.",
            rating: 4,
            genre: "Literary Fiction/Science Fiction",
            pages: 304,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Humans-Novel-Matt-Haig/dp/1476730598"
        },
        {
            title: "The Book of Delights",
            author: "Ross Gay",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1616207922.01.L.jpg",
            summary: "A collection of essays celebrating the everyday joys and hope in our world.",
            rating: 4,
            genre: "Essays/Memoir",
            pages: 288,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Book-Delights-Essays-Ross-Gay/dp/1616207922"
        }
    ],
    creative: [
        {
            title: "Big Magic",
            author: "Elizabeth Gilbert",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1594634726.01.L.jpg",
            summary: "A guide to embracing creativity and overcoming the fears that hold us back from making art.",
            rating: 5,
            genre: "Self-Help/Creativity",
            pages: 288,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Big-Magic-Creative-Living-Beyond/dp/1594634726"
        },
        {
            title: "The Artist's Way",
            author: "Julia Cameron",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0143129252.01.L.jpg",
            summary: "A twelve-week program to recover your creativity and overcome creative blocks.",
            rating: 5,
            genre: "Self-Help/Art",
            pages: 272,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Artists-Way-25th-Anniversary/dp/0143129252"
        },
        {
            title: "Letters to a Young Poet",
            author: "Rainer Maria Rilke",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0393310396.01.L.jpg",
            summary: "Timeless wisdom about creativity, solitude, and the artistic life through personal letters.",
            rating: 5,
            genre: "Letters/Poetry",
            pages: 160,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/Letters-Young-Poet-Rainer-Maria/dp/0393310396"
        },
        {
            title: "Steal Like an Artist",
            author: "Austin Kleon",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0761169253.01.L.jpg",
            summary: "Ten transformative principles about the creative life and making your own art.",
            rating: 4,
            genre: "Self-Help/Art",
            pages: 160,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Steal-Like-Artist-Things-Creative/dp/0761169253"
        },
        {
            title: "The War of Art",
            author: "Steven Pressfield",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1936891026.01.L.jpg",
            summary: "A guide to overcoming creative resistance and unleashing your inner artist.",
            rating: 5,
            genre: "Self-Help/Creativity",
            pages: 190,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/War-Art-Through-Creative-Battles/dp/1936891026"
        },
        {
            title: "Daily Rituals",
            author: "Mason Currey",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0307273601.01.L.jpg",
            summary: "How great minds make time, find inspiration, and get to work - examining artists' daily routines.",
            rating: 4,
            genre: "Biography/Art",
            pages: 304,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Daily-Rituals-How-Artists-Work/dp/0307273601"
        },
        {
            title: "Art & Fear",
            author: "David Bayles & Ted Orland",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0961454733.01.L.jpg",
            summary: "Observations on the perils and rewards of artmaking and overcoming creative doubts.",
            rating: 5,
            genre: "Art/Psychology",
            pages: 122,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Art-Fear-Observations-Rewards-Artmaking/dp/0961454733"
        },
        {
            title: "The Creative Habit",
            author: "Twyla Tharp",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0743235274.01.L.jpg",
            summary: "A practical guide to making creativity a habit, from legendary choreographer Twyla Tharp.",
            rating: 4,
            genre: "Self-Help/Art",
            pages: 256,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Creative-Habit-Learn-Use-Life/dp/0743235274"
        },
        {
            title: "Bird by Bird",
            author: "Anne Lamott",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0385480016.01.L.jpg",
            summary: "Instructions on writing and life, with wisdom about the creative process.",
            rating: 5,
            genre: "Writing/Creativity",
            pages: 256,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Bird-Some-Instructions-Writing-Life/dp/0385480016"
        },
        {
            title: "Show Your Work!",
            author: "Austin Kleon",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/076117897X.01.L.jpg",
            summary: "Ten ways to share your creativity and get discovered in the digital age.",
            rating: 4,
            genre: "Self-Help/Art",
            pages: 224,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X"
        }
    ],
    cozy: [
        {
            title: "The Thursday Murder Club",
            author: "Richard Osman",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1984880985.01.L.jpg",
            summary: "Four retirees meet weekly to solve cold cases in their peaceful retirement village.",
            rating: 4,
            genre: "Cozy Mystery",
            pages: 384,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Thursday-Murder-Club-Novel/dp/1984880985"
        },
        {
            title: "84, Charing Cross Road",
            author: "Helene Hanff",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0140143505.01.L.jpg",
            summary: "A charming collection of letters between a New York writer and a London bookshop.",
            rating: 5,
            genre: "Non-fiction/Letters",
            pages: 97,
            price: "$12.99",
            amazonLink: "https://www.amazon.com/84-Charing-Cross-Road-Hanff/dp/0140143505"
        },
        {
            title: "The Bookshop on the Corner",
            author: "Jenny Colgan",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062467255.01.L.jpg",
            summary: "A librarian starts a mobile bookshop in the Scottish Highlands, finding community and romance.",
            rating: 4,
            genre: "Contemporary Fiction",
            pages: 368,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Bookshop-Corner-Novel-Jenny-Colgan/dp/0062467255"
        },
        {
            title: "The Storied Life of A.J. Fikry",
            author: "Gabrielle Zevin",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1616204516.01.L.jpg",
            summary: "A bookstore owner's life is transformed when an unexpected package arrives.",
            rating: 4,
            genre: "Literary Fiction",
            pages: 288,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Storied-Life-J-Fikry-Novel/dp/1616204516"
        },
        {
            title: "The Little Paris Bookshop",
            author: "Nina George",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0553418777.01.L.jpg",
            summary: "A bookseller prescribes novels for his customers' emotional ailments from his floating bookstore.",
            rating: 4,
            genre: "Literary Fiction",
            pages: 392,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Little-Paris-Bookshop-Novel/dp/0553418777"
        },
        {
            title: "The Lido",
            author: "Libby Page",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1501182056.01.L.jpg",
            summary: "An unlikely friendship forms between a young journalist and an elderly swimmer trying to save their local pool.",
            rating: 4,
            genre: "Contemporary Fiction",
            pages: 384,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Lido-Novel-Libby-Page/dp/1501182056"
        },
        {
            title: "The Café by the Sea",
            author: "Jenny Colgan",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062662996.01.L.jpg",
            summary: "A woman returns to her Scottish island hometown to open a café and rediscover her roots.",
            rating: 4,
            genre: "Romance/Contemporary",
            pages: 416,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Cafe-Sea-Novel-Jenny-Colgan/dp/0062662996"
        },
        {
            title: "The Reading List",
            author: "Sara Nisha Adams",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0063025280.01.L.jpg",
            summary: "An unlikely friendship forms over a mysterious list of novels in a London suburb.",
            rating: 4,
            genre: "Contemporary Fiction",
            pages: 384,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Reading-List-Novel-Sara-Nisha/dp/0063025280"
        },
        {
            title: "The Bookshop of Second Chances",
            author: "Jackie Fraser",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1529392292.01.L.jpg",
            summary: "A woman inherits a bookshop in Scotland and finds a second chance at life and love.",
            rating: 4,
            genre: "Romance/Contemporary",
            pages: 448,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Bookshop-Second-Chances-Jackie-Fraser/dp/1529392292"
        },
        {
            title: "The Library of Lost and Found",
            author: "Phaedra Patrick",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0778369358.01.L.jpg",
            summary: "A librarian discovers a mysterious book that leads her to uncover family secrets.",
            rating: 4,
            genre: "Contemporary Fiction",
            pages: 352,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Library-Lost-Found-Phaedra-Patrick/dp/0778369358"
        }
    ],
    rebellious: [
        {
            title: "Fight Club",
            author: "Chuck Palahniuk",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0393355942.01.L.jpg",
            summary: "An insomniac office worker forms an underground fight club as a radical form of psychotherapy.",
            rating: 5,
            genre: "Literary Fiction/Thriller",
            pages: 208,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Fight-Club-Novel-Chuck-Palahniuk/dp/0393355942"
        },
        {
            title: "The Handmaid's Tale",
            author: "Margaret Atwood",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/038549081X.01.L.jpg",
            summary: "A woman's resistance against a dystopian regime that has stripped away women's rights.",
            rating: 5,
            genre: "Dystopian Fiction",
            pages: 311,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Handmaids-Tale-Margaret-Atwood/dp/038549081X"
        },
        {
            title: "1984",
            author: "George Orwell",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0451524934.01.L.jpg",
            summary: "A man rebels against a totalitarian government that controls people's thoughts and actions.",
            rating: 5,
            genre: "Dystopian Fiction",
            pages: 328,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934"
        },
        {
            title: "The Hunger Games",
            author: "Suzanne Collins",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0439023521.01.L.jpg",
            summary: "A young woman sparks a rebellion against an oppressive regime through an act of defiance.",
            rating: 5,
            genre: "Young Adult/Dystopian",
            pages: 374,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Hunger-Games-Book-1/dp/0439023521"
        },
        {
            title: "V for Vendetta",
            author: "Alan Moore",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/140120841X.01.L.jpg",
            summary: "A masked vigilante fights against a fascist government in a future dystopian Britain.",
            rating: 5,
            genre: "Graphic Novel",
            pages: 296,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/V-Vendetta-Alan-Moore/dp/140120841X"
        },
        {
            title: "The Rebel",
            author: "Albert Camus",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0679733841.01.L.jpg",
            summary: "A philosophical exploration of rebellion and revolution throughout history.",
            rating: 4,
            genre: "Philosophy",
            pages: 320,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Rebel-Essay-Man-Revolt/dp/0679733841"
        },
        {
            title: "Red Rising",
            author: "Pierce Brown",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/034553980X.01.L.jpg",
            summary: "A lowborn miner infiltrates the ruling class to bring down a color-coded society from within.",
            rating: 5,
            genre: "Science Fiction",
            pages: 382,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Red-Rising-Pierce-Brown/dp/034553980X"
        },
        {
            title: "The Power",
            author: "Naomi Alderman",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0316547611.01.L.jpg",
            summary: "Women develop the ability to release electrical jolts, leading to a dramatic shift in global power dynamics.",
            rating: 4,
            genre: "Science Fiction",
            pages: 386,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Power-Naomi-Alderman/dp/0316547611"
        },
        {
            title: "Fahrenheit 451",
            author: "Ray Bradbury",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0345342968.01.L.jpg",
            summary: "A fireman whose job is burning books begins to question his society's censorship.",
            rating: 5,
            genre: "Science Fiction",
            pages: 249,
            price: "$13.99",
            amazonLink: "https://www.amazon.com/Fahrenheit-451-Ray-Bradbury/dp/0345342968"
        },
        {
            title: "Little Brother",
            author: "Cory Doctorow",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0765323117.01.L.jpg",
            summary: "A teenage hacker fights back against government surveillance after a terrorist attack.",
            rating: 4,
            genre: "Young Adult/Science Fiction",
            pages: 384,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Little-Brother-Cory-Doctorow/dp/0765323117"
        }
    ],
    enchanted: [
        {
            title: "The Name of the Wind",
            author: "Patrick Rothfuss",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0756404746.01.L.jpg",
            summary: "A young man grows to become the most notorious wizard his world has ever seen.",
            rating: 5,
            genre: "Fantasy",
            pages: 722,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Name-Wind-Patrick-Rothfuss/dp/0756404746"
        },
        {
            title: "Jonathan Strange & Mr Norrell",
            author: "Susanna Clarke",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0765356155.01.L.jpg",
            summary: "Two magicians attempt to restore magic to England during the Napoleonic Wars.",
            rating: 5,
            genre: "Historical Fantasy",
            pages: 1006,
            price: "$17.99",
            amazonLink: "https://www.amazon.com/Jonathan-Strange-Mr-Norrell-Novel/dp/0765356155"
        },
        {
            title: "Uprooted",
            author: "Naomi Novik",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0804179034.01.L.jpg",
            summary: "A young woman discovers her magical abilities while apprenticed to a mysterious wizard.",
            rating: 5,
            genre: "Fantasy",
            pages: 448,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Uprooted-Naomi-Novik/dp/0804179034"
        },
        {
            title: "The Bear and the Nightingale",
            author: "Katherine Arden",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1101885939.01.L.jpg",
            summary: "A magical tale set in medieval Russia, where old magic meets Christian faith.",
            rating: 4,
            genre: "Historical Fantasy",
            pages: 336,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Bear-Nightingale-Novel-Winternight-Trilogy/dp/1101885939"
        },
        {
            title: "The Priory of the Orange Tree",
            author: "Samantha Shannon",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1635570298.01.L.jpg",
            summary: "An epic tale of dragons, magic, and political intrigue in a richly-built fantasy world.",
            rating: 4,
            genre: "Fantasy",
            pages: 848,
            price: "$18.99",
            amazonLink: "https://www.amazon.com/Priory-Orange-Tree-Samantha-Shannon/dp/1635570298"
        },
        {
            title: "The Starless Sea",
            author: "Erin Morgenstern",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/038554121X.01.L.jpg",
            summary: "A graduate student discovers a mysterious book that leads him to an ancient underground library.",
            rating: 5,
            genre: "Literary Fantasy",
            pages: 512,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Starless-Sea-Novel-Erin-Morgenstern/dp/038554121X"
        },
        {
            title: "A Court of Thorns and Roses",
            author: "Sarah J. Maas",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1619634449.01.L.jpg",
            summary: "A huntress enters a magical realm of faeries after killing a wolf in the woods.",
            rating: 4,
            genre: "Fantasy Romance",
            pages: 432,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Court-Thorns-Roses-Sarah-Maas/dp/1619634449"
        },
        {
            title: "The Ten Thousand Doors of January",
            author: "Alix E. Harrow",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0316421995.01.L.jpg",
            summary: "A young woman discovers doors to other worlds and her own magical heritage.",
            rating: 4,
            genre: "Historical Fantasy",
            pages: 384,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Ten-Thousand-Doors-January/dp/0316421995"
        },
        {
            title: "The Invisible Life of Addie LaRue",
            author: "V.E. Schwab",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0765387565.01.L.jpg",
            summary: "A woman makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets.",
            rating: 5,
            genre: "Fantasy/Historical Fiction",
            pages: 448,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Invisible-Life-Addie-LaRue/dp/0765387565"
        },
        {
            title: "Caraval",
            author: "Stephanie Garber",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1250095263.01.L.jpg",
            summary: "Two sisters enter a magical performance where nothing is quite what it seems.",
            rating: 4,
            genre: "Young Adult Fantasy",
            pages: 407,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Caraval-Stephanie-Garber/dp/1250095263"
        }
    ],
    wanderlust: [
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062315005.01.L.jpg",
            summary: "A shepherd boy's journey across the desert in search of his Personal Legend and treasure.",
            rating: 5,
            genre: "Literary Fiction/Adventure",
            pages: 208,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005"
        },
        {
            title: "In a Sunburned Country",
            author: "Bill Bryson",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0767903862.01.L.jpg",
            summary: "A humorous and insightful exploration of Australia's history, wildlife, and culture.",
            rating: 4,
            genre: "Travel/Humor",
            pages: 352,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Sunburned-Country-Bill-Bryson/dp/0767903862"
        },
        {
            title: "Seven Years in Tibet",
            author: "Heinrich Harrer",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0874778883.01.L.jpg",
            summary: "An Austrian mountaineer's escape from a British internment camp and his journey through Tibet.",
            rating: 5,
            genre: "Travel/Memoir",
            pages: 368,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Seven-Years-Tibet-Heinrich-Harrer/dp/0874778883"
        },
        {
            title: "Eat, Pray, Love",
            author: "Elizabeth Gilbert",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0143038419.01.L.jpg",
            summary: "One woman's search for everything across Italy, India, and Indonesia.",
            rating: 4,
            genre: "Travel/Memoir",
            pages: 352,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Eat-Pray-Love-Everything-Indonesia/dp/0143038419"
        },
        {
            title: "The Beach",
            author: "Alex Garland",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1573226521.01.L.jpg",
            summary: "A backpacker's search for an idyllic beach leads to a hidden community in Thailand.",
            rating: 4,
            genre: "Fiction/Adventure",
            pages: 436,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Beach-Alex-Garland/dp/1573226521"
        },
        {
            title: "Tracks",
            author: "Robyn Davidson",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0679762876.01.L.jpg",
            summary: "A woman's solo trek across 1,700 miles of Australian desert with four camels and a dog.",
            rating: 4,
            genre: "Travel/Memoir",
            pages: 288,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Tracks-Womans-Journey-Across-Australian/dp/0679762876"
        },
        {
            title: "The Lost City of Z",
            author: "David Grann",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/1400078458.01.L.jpg",
            summary: "A tale of deadly obsession in the Amazon as a journalist traces the steps of a lost explorer.",
            rating: 5,
            genre: "Travel/History",
            pages: 352,
            price: "$16.99",
            amazonLink: "https://www.amazon.com/Lost-City-Z-Deadly-Obsession/dp/1400078458"
        },
        {
            title: "In Patagonia",
            author: "Bruce Chatwin",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0142437190.01.L.jpg",
            summary: "A masterpiece of travel writing about adventures in the southern tip of South America.",
            rating: 4,
            genre: "Travel Literature",
            pages: 240,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Patagonia-Penguin-Classics-Bruce-Chatwin/dp/0142437190"
        },
        {
            title: "Shadow of the Silk Road",
            author: "Colin Thubron",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0061231770.01.L.jpg",
            summary: "A journey along the ancient trade route from China to the Mediterranean.",
            rating: 4,
            genre: "Travel Literature",
            pages: 384,
            price: "$15.99",
            amazonLink: "https://www.amazon.com/Shadow-Silk-Road-Colin-Thubron/dp/0061231770"
        },
        {
            title: "The Art of Travel",
            author: "Alain de Botton",
            coverImage: "https://images-na.ssl-images-amazon.com/images/P/0375725342.01.L.jpg",
            summary: "A philosophical look at why we travel and how we can do it better.",
            rating: 4,
            genre: "Philosophy/Travel",
            pages: 272,
            price: "$14.99",
            amazonLink: "https://www.amazon.com/Art-Travel-Alain-Botton/dp/0375725342"
        }
    ]
};

export default function Home() {
    const [selectedMood, setSelectedMood] = useState(null);
    const [hiddenBooks, setHiddenBooks] = useState([]);

    const handleMoodClick = (mood) => {
        setSelectedMood(mood);
    };

    const handleHideBook = (bookTitle) => {
        setHiddenBooks([...hiddenBooks, bookTitle]);
    };

    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    {/* Hero Section */}
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
                            Find Your Perfect Book
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                            Choose your mood and discover your next reading adventure
                        </p>
                    </div>
                    
                    {/* Mood Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {moods.map((mood) => (
                            <div 
                                key={mood.name}
                                className={`mood-card p-6 ${mood.color} rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                                    hiddenBooks.includes(mood.name) ? 'opacity-50' : ''
                                }`}
                                onClick={() => handleMoodClick(mood)}
                            >
                                <div className="mood-icon text-4xl mb-4">{mood.icon}</div>
                                <h2 className="text-2xl font-bold capitalize mb-2">
                                    {mood.name}
                                </h2>
                                <p className="text-gray-600 text-sm">{mood.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {selectedMood && sampleBooks[selectedMood.name] && (
                <BookModal
                    books={sampleBooks[selectedMood.name].filter(book => !hiddenBooks.includes(book.title))}
                    mood={selectedMood}
                    onClose={() => setSelectedMood(null)}
                    onHide={handleHideBook}
                />
            )}
        </>
    );
} 