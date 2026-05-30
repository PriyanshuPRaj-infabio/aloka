/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EssaySection {
  title: string;
  subtitle?: string;
  paragraphs: string[];
}

export const IMAGES = {
  hero: "/landscapes/mountain.jpg",
  heroFallback: "/landscapes/turkey.jpg",
  moroccoFeatured: "/landscapes/bhutan.jpg",
  moroccoEssay: "/landscapes/azerbaijan.jpg",
  australiaFeatured: "/landscapes/australia.png",
  australiaOpener: "/landscapes/australia.png",
  australiaSpread1: "/landscapes/australia-1.jpg",
  australiaSpread2: "/landscapes/australia-2.jpg",
  poetryPairing: "/landscapes/kyrgyzstan.jpg",
  founderPortrait: "/alok.jpg",
  trustCover: "/landscapes/thimphu,bhutan.jpg",
};

export const ALL_LANDSCAPES = [
  "/landscapes/azerbaijan.jpg",
  "/landscapes/bdb8ee6a-7af5-4536-aa9d-bd79c5711af9_rw_1200.jpg",
  "/landscapes/bhutan-1.jpg",
  "/landscapes/bhutan.jpg",
  "/landscapes/denmark-1.jpg",
  "/landscapes/denmark.jpg",
  "/landscapes/finland-1.jpg",
  "/landscapes/finland.jpg",
  "/landscapes/georgia.jpg",
  "/landscapes/georgia1.jpg",
  "/landscapes/hong%20kong.jpg",
  "/landscapes/japan.jpg",
  "/landscapes/kyrgyzstan.jpg",
  "/landscapes/mountain.jpg",
  "/landscapes/seoul,south-korea.jpg",
  "/landscapes/sriLanka.jpg",
  "/landscapes/stockholm%20,%20sweden.jpg",
  "/landscapes/sweden.jpg",
  "/landscapes/thimphu,bhutan.jpg",
  "/landscapes/turkey-1.jpg",
  "/landscapes/turkey.jpg",
];

export const PORTRAITS_GALLERY = [
  { url: "/portraits/ea5ab334-3639-4b85-92b3-dd2388518fb7_carw_202x158x640.jpg", label: "Archival Portrait — Season of military service" },
  { url: "/portraits/77310923-4c12-46d4-a2c7-ba867a6cc93a_carw_202x158x640.jpg", label: "Institutional Continuity" },
  { url: "/portraits/929b839c-300c-444e-a90e-a31f85e42775_carw_202x158x640.jpg", label: "Dialogue & International Correspondence" },
  { url: "/portraits/90cffe3d-e497-40f3-8820-a1ee8d0e141b_carw_202x158x640.jpg", label: "Cultural Exploration & Global Travels" },
  { url: "/portraits/7031344e-7bc6-4e0e-81d7-ea797f5ddd04_carw_202x158x640.jpg", label: "Autobiographical Profile Framed at aloka" },
  { url: "/portraits/ef8f1de1-ae28-41ba-ba33-3b4acbe2287d_carw_202x158x640.jpg", label: "Preserving Memory through Slow Monographs" },
];

export const INST_EMAIL = "contact@aloka.world";

export const REFLECTION_MOROCCO = {
  title: "Morocco and the Memory of Landscapes",
  excerpt: "There are countries that impress through scale, and others that remain with you through atmosphere. Morocco belongs to the latter.",
  paragraphs: [
    "There are countries that impress through scale, and others that remain with you through atmosphere.",
    "Morocco belongs to the latter.",
    "Its landscapes do not merely appear beautiful; they feel inhabited by memory. Desert light, mountain silence, ancient cities, wind-shaped earth — everything seems connected by a continuity older than modern movement itself.",
    "In an age where many parts of the world are surrendering identity to speed and uniformity, Morocco appears to understand something increasingly rare: that landscapes and culture cannot be separated from one another.",
    "A nation’s relationship with beauty is never accidental.",
    "It reflects values.",
    "Restraint.",
    "Stewardship.",
    "Memory.",
    "The preservation of landscapes, heritage, and atmosphere requires intention across generations. It demands that development and continuity remain in conversation with each other rather than in conflict.",
    "These thoughts formed part of a recent discussion I had with H.E. the Ambassador of Morocco while presenting the vision behind the Wonderful World series — a long-horizon body of cultural work centred on nature, nations, memory, and conservation. During our conversation, the Ambassador also presented me with a signed copy of one of his own authored works — a gesture that quietly reflected the intellectual and cultural seriousness he brings to diplomacy.",
    "In an increasingly transactional world, such encounters remain deeply encouraging.",
    "What remained with me afterward was not simply the discussion of photography or books, but a deeper reflection on how nations choose to represent themselves to the world.",
    "Some promote modernity alone.",
    "Others understand that cultural depth itself becomes a form of enduring relevance.",
    "Morocco’s continuing investment in cultural identity, heritage, and environmental consciousness reflects this broader understanding.",
    "As the Wonderful World series evolves, I increasingly find myself drawn not only to dramatic landscapes, but to countries that recognise preservation itself as an act of civilisation.",
    "Because in the end, conservation is not only about protecting nature.",
    "It is also about protecting memory."
  ]
};

export const WONDERFUL_WORLD_AUSTRALIA = {
  seriesTitle: "Wonderful World: Australia’s Majestic Landscapes",
  headline: "Australia changes one’s understanding of scale.",
  paragraphs: [
    "Australia changes one’s understanding of scale.",
    "Not only physical scale, but civilisational scale — the scale at which a nation chooses whether wilderness will survive modernity intact.",
    "Travel through Australia gradually reveals something rare in the contemporary world: the recognition that nature is not merely a resource to be consumed, but an inheritance carrying ecological, cultural, and even spiritual significance.",
    "Across coastlines, forests, deserts, and vast open skies, one repeatedly encounters evidence of deliberate restraint. Preservation here is not accidental. It reflects long-term national choices, institutional effort, and a public consciousness that understands the fragility of unique ecosystems.",
    "What remains especially striking is that much of Australia’s beauty still retains silence.",
    "Silence is increasingly rare in the modern world. It survives only where societies consciously protect space, scale, and ecological dignity against the pressures of excess and speed.",
    "While creating Wonderful World: Australia’s Majestic Landscapes, I found myself increasingly drawn not merely to dramatic scenery, but to the deeper question of stewardship itself: what allows certain nations to preserve wonder while others gradually exhaust it?"
  ],
  dialogue: {
    title: "Institutional Dialogue",
    paragraphs: [
      "These reflections formed part of meaningful discussions I later had with senior representatives of the Australian mission in India, including Ms. Carly Partridge, Minister Counsellor, and His Excellency Mr. Philip Green, High Commissioner of Australia to India, while presenting the vision behind the Wonderful World series.",
      "What remained with me from those conversations was not only an exchange around photography and publishing, but a shared recognition that landscapes and national identity remain deeply connected.",
      "Countries are remembered not only through economic achievement or political influence, but also through what they choose to preserve.",
      "In Australia, one senses that the protection of natural beauty is understood not as nostalgia, but as responsibility toward future generations.",
      "And perhaps that is why the Australian landscape continues to evoke something increasingly precious in the modern world:",
      "wonder without noise."
    ]
  },
  poetry: {
    poem: [
      "You remain beside me—",
      "quiet as light,",
      "present in distant horizons,",
      "fleeting silences,",
      "and every place where beauty still survives.",
      "",
      "If these works carry wonder,",
      "it is because your memory walks within them."
    ]
  }
};

export const ABOUT_CONTENT = {
  title: "ABOUT",
  paragraphs: [
    "I did not begin my life intending to create books.",
    "Much of my early life was shaped instead by service, engineering, leadership, and movement across very different worlds.",
    "I was trained at the National Defence Academy and commissioned into the Indian Army, where I served for over two decades. The Army shaped my understanding of leadership, discipline, responsibility, and the deeper relationship between geography, culture, and nationhood. For my service, I was awarded the Vishisht Seva Medal (VSM).",
    "Alongside military service, I pursued studies in engineering and later management, eventually moving into leadership roles across the technology sector after leaving the Army. The work was demanding, fast-moving, and professionally rewarding, yet over time another question began to grow quietly beneath it all:",
    "What deserves to endure?",
    "Photography had long remained a parallel journey.",
    "Travel across more than sixty countries gradually revealed something that would later shape the direction of my work — that landscapes are not merely scenery. They are memory. Identity. Inheritance. They reveal how societies understand beauty, restraint, stewardship, and the responsibility of preservation.",
    "Over time, the act of photographing places evolved into something deeper: a desire to create lasting cultural works that honour both nature and the civilisations that choose to protect it.",
    "That journey eventually became the Wonderful World series — a long-horizon body of work centred on landscapes, nations, conservation, and memory.",
    "Each volume is conceived slowly and with care, not simply as a photography collection, but as a cultural work intended to preserve atmosphere, reverence, and a sense of place.",
    "My earlier photographic work was published internationally by Bloomsbury Publishing and continues to remain available years after publication.",
    "The current and future works within the Wonderful World series are being developed under Magnum Editions, an independent cultural publishing platform dedicated to long-form visual works and enduring editions.",
    "All these works are dedicated to my sister, Aloka, whose memory continues to quietly shape the emotional centre of this journey.",
    "In her name, I established the Aloka Memorial Trust to support initiatives connected with nature, conservation, and meaningful social contribution.",
    "Today, the work increasingly extends beyond books alone — into conversations with ambassadors, conservation advocates, cultural institutions, and individuals who believe that beauty, memory, and stewardship still matter in an increasingly transient world.",
    "I do not see this work as departure from my earlier life.",
    "Only as the point toward which it was always leading."
  ]
};

export const ALOKA_TRUST_CONTENT = {
  title: "Aloka Memorial Trust",
  paragraphs: [
    "Some journeys begin long before we understand their purpose.",
    "The Aloka Memorial Trust was established in memory of my sister, Aloka, whose absence quietly shaped much of the emotional direction of my later life and work.",
    "Over time, the Wonderful World series and the broader reflections surrounding nature, memory, and preservation gradually revealed a deeper responsibility beyond books alone — a responsibility toward stewardship.",
    "The Trust exists as an extension of that belief.",
    "Its purpose is to support thoughtful initiatives connected with nature, conservation, ecological awareness, and meaningful social contribution. The intention is not scale for its own sake, but sincerity, continuity, and long-term value.",
    "In an increasingly transient world, preservation has become more than an environmental concern. It is also a cultural and moral one.",
    "What societies choose to protect ultimately reflects what they choose to remember.",
    "The Trust therefore stands not only for conservation in the ecological sense, but also for the preservation of beauty, dignity, memory, and responsibility across generations.",
    "The work will evolve gradually and with care — guided less by visibility than by substance.",
    "Because some forms of contribution are most meaningful when pursued quietly."
  ]
};

export const PRESS_RECOGNITION_CONTENT = {
  intro: "The work presented through Wonderful World and related cultural initiatives exists at the intersection of landscape, visual storytelling, memory, and conservation-oriented thought.",
  description: "Over time, different aspects of this journey — including photography, publishing, cultural dialogue, and long-form creative work — have been featured across selected publications and institutions in India and internationally.",
  meaning: "What remains meaningful is not recognition itself, but the continued belief that thoughtful cultural work still carries relevance in an increasingly transient world.",
  publications: [
    { name: "Forbes India (forthcoming)", image: "/Press/7bb15cfd-a8af-426f-8fcb-15a27b9b654f_carw_202x158x640.png" },
    { name: "Hindustan Times", image: "/Press/5a6a7bfc-ffeb-4c62-99ab-63101899c1df_carw_202x158x640.jpg" },
    { name: "Bloomsbury", image: "/Press/6b659725-27ce-4d11-8473-e53c37937342_rwc_0x199x719x562x640.jpg" },
    { name: "Architect and Interiors India", image: "/Press/a2bb073d-ce05-4164-8399-ef929552e6e1_carw_202x158x640.png" },
    { name: "Decor Journal India", image: "/Press/35c94479-f1bb-4388-b7f0-5d2801748a20_carw_202x158x640.png" },
    { name: "Hospitality News", image: "/Press/bb44de9e-9ad6-4afb-8022-7da1376af98e_carw_202x158x640.jpg" }
  ],
  recognition: [
    "Awarded the Vishisht Seva Medal (VSM) for distinguished service in the Indian Army.",
    "Times Power Icon 2018.",
    "Honorable Mention — Monochrome Photography Awards 2020 (Professional Conceptual Category)."
  ]
};

export const PARALLAX_GALLERY_IMAGES = [
  "/gallary/569994424_18322393960213024_8127335861324505573_n.jpg",
  "/gallary/610792186_18331272175213024_5806605103139872633_n.jpg",
  "/gallary/620471239_18063977114268107_602920161613297363_n.jpg",
  "/gallary/622123165_18111814162713605_432448956656449913_n.jpg",
  "/gallary/622447974_18064726916271726_1689739416253209937_n.jpg",
  "/gallary/622992827_18080073650218561_8342577468918135915_n.jpg",
  "/gallary/625840960_18342027745210002_8244177940816060940_n.jpg",
  "/gallary/631816040_18336931024213024_5072068501816469880_n.jpg",
  "/gallary/634212697_18336591085213024_7314005890609311892_n.jpg",
  "/gallary/639723396_18338049739213024_1587124646960725738_n.jpg",
  "/gallary/649133138_18339297514213024_925914708381188931_n.jpg",
  "/gallary/652459352_18339711367213024_3029264298686826462_n.jpg",
];
