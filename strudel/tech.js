// @title: All my teck
// @artist: negotrucky
// @bpm: 120


setcps(120/60/4)

// ---------- intro (4) ----------
const lead_intro = "~"
const bass_intro = "~"
const acid_intro = "~"
const nappe_intro = "g3"
const arp_intro = "~"
const drums_intro = "<[hh ~ ~ ~]*4>"
// ---------- montee (4) ----------
const lead_montee = "~"
const bass_montee = "<[~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~]>"
const acid_montee = "~"
const nappe_montee = "g3"
const arp_montee = "~"
const drums_montee = "<[bd*4, [hh ~ ~ ~]*4]>"
// ---------- couplet (8) ----------
const lead_couplet = "<[c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~]>"
const bass_couplet = "<[~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~]>"
const acid_couplet = "~"
const nappe_couplet = "~"
const arp_couplet = "~"
const drums_couplet = "<[bd*4, ~ cp ~ cp, [hh ~ oh ~]*4]>"
// ---------- acid (8) ----------
const lead_acid = "<[c4 ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ c4 ~ ~ ~ ~] [d#4 ~ ~ ~ ~ ~ g#4 ~ ~ ~ ~ c4 ~ ~ ~ ~] [c4 ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ c4 ~ ~ ~ ~] [d#4 ~ ~ ~ ~ ~ g#4 ~ ~ ~ ~ c4 ~ ~ ~ ~] [c4 ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ c4 ~ ~ ~ ~] [d#4 ~ ~ ~ ~ ~ g#4 ~ ~ ~ ~ c4 ~ ~ ~ ~] [c4 ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ c4 ~ ~ ~ ~] [d#4 ~ ~ ~ ~ ~ g#4 ~ ~ ~ ~ c4 ~ ~ ~ ~]>"
const bass_acid = "<[~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~]>"
const acid_acid = "<[c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [g#2 g#2 ~ g#3 d#3 b2 g#3 g#2 ~ g#2 g#2 g#3 g#2 d#3 b2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [g#2 g#2 ~ g#3 d#3 b2 g#3 g#2 ~ g#2 g#2 g#3 g#2 d#3 b2 ~]>"
const nappe_acid = "~"
const arp_acid = "~"
const drums_acid = "<[bd*4, ~ cp ~ cp, [hh hh oh hh]*4]>"
// ---------- coupure (4) ----------
const lead_coupure = "~"
const bass_coupure = "~"
const acid_coupure = "~"
const nappe_coupure = "g3"
const arp_coupure = "~"
const drums_coupure = "<[hh hh oh hh]*4>"
// ---------- refrain (16) ----------
const lead_refrain = "<[c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~]>"
const bass_refrain = "<[~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2]>"
const acid_refrain = "<[c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [g#2 g#2 ~ g#3 d#3 b2 g#3 g#2 ~ g#2 g#2 g#3 g#2 d#3 b2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [g#2 g#2 ~ g#3 d#3 b2 g#3 g#2 ~ g#2 g#2 g#3 g#2 d#3 b2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [g#2 g#2 ~ g#3 d#3 b2 g#3 g#2 ~ g#2 g#2 g#3 g#2 d#3 b2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [g#2 g#2 ~ g#3 d#3 b2 g#3 g#2 ~ g#2 g#2 g#3 g#2 d#3 b2 ~]>"
const nappe_refrain = "~"
const arp_refrain = "<[c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4] [d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4] [g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4] [g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4 d#5 g#5] [g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4] [c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4] [d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4] [d#5 g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4 d#5] [c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5] [g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4] [c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4] [b4 d#5 g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4] [g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4] [c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5] [g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4] [g#4 b4 d#5 g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4]>"
const drums_refrain = "<[bd*4, ~ cp ~ cp, [hh hh oh hh]*4]>"
// ---------- refrain2 (8) ----------
const lead_refrain2 = "<[c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~] [c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~]>"
const bass_refrain2 = "<[~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2 ~ c2 c2 c2] [~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2 ~ g#2 g#2 g#2]>"
const acid_refrain2 = "<[c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [g#2 g#2 ~ g#3 d#3 b2 g#3 g#2 ~ g#2 g#2 g#3 g#2 d#3 b2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [c2 c2 ~ c3 g2 d#2 c3 c2 ~ c2 c2 c3 c2 g2 d#2 ~] [g#2 g#2 ~ g#3 d#3 b2 g#3 g#2 ~ g#2 g#2 g#3 g#2 d#3 b2 ~]>"
const nappe_refrain2 = "~"
const arp_refrain2 = "<[c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4] [d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4] [g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4] [g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4 d#5 g#5] [g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4] [c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4] [d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4 g4 c5 g4 c4 d#4] [d#5 g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4 d#5 g#5 d#5 g#4 b4 d#5]>"
const drums_refrain2 = "<[bd*4, ~ cp ~ [cp cp], [hh hh oh hh]*4]>"
// ---------- fin (4) ----------
const lead_fin = "<[c4 ~ ~ g4 ~ ~ c4 ~ d4 ~ ~ c4 ~ ~ f4 ~] [d#4 ~ ~ g#4 ~ ~ g#4 ~ d#4 ~ ~ c4 ~ ~ c4 ~]>"
const bass_fin = "<[~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~ ~ ~ c2 ~] [~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~ ~ ~ g#2 ~]>"
const acid_fin = "~"
const nappe_fin = "~"
const arp_fin = "~"
const drums_fin = "<[bd*4, [hh ~ ~ ~]*4]>"

stack(
  // mélodie (la partition du jeu) : riff syncopé, entre à la mesure 9 (règle 2)
  note(arrange([4, lead_intro], [4, lead_montee], [8, lead_couplet], [8, lead_acid], [4, lead_coupure], [16, lead_refrain], [8, lead_refrain2], [4, lead_fin]))
    .s("sawtooth").lpf(2400).decay(0.12).sustain(0.5).release(0.1).gain(0.5).delay(0.3).delaytime(0.375).delayfeedback(0.35),

  // basse entre les kicks (règle 4)
  note(arrange([4, bass_intro], [4, bass_montee], [8, bass_couplet], [8, bass_acid], [4, bass_coupure], [16, bass_refrain], [8, bass_refrain2], [4, bass_fin])).s("sawtooth").lpf(450).decay(0.08).sustain(0.4).gain(0.6),

  // acid, filtre fermé (règle 6)
  note(arrange([4, "~"], [4, "~"], [8, "~"], [8, acid_acid], [4, "~"], [16, "~"], [8, "~"], [4, "~"])).s("sawtooth").lpf(600).lpq(12)
    .gain("[0.55 0.55 0.55 0.55 0.55 0.55 0.55 0.55 0.55 0.95 0.55 0.95 0.55 0.55 0.55 0.55]"),

  // acid, filtre ouvert (refrains)
  note(arrange([4, "~"], [4, "~"], [8, "~"], [8, "~"], [4, "~"], [16, acid_refrain], [8, acid_refrain2], [4, "~"])).s("sawtooth").lpf(1500).lpq(12)
    .gain("[0.55 0.55 0.55 0.55 0.55 0.55 0.55 0.55 0.55 0.95 0.55 0.95 0.55 0.55 0.55 0.55]"),

  // nappe : la quinte tenue (intro, montée, coupure : le vide, règle 8)
  note(arrange([4, nappe_intro], [4, nappe_montee], [8, nappe_couplet], [8, nappe_acid], [4, nappe_coupure], [16, nappe_refrain], [8, nappe_refrain2], [4, nappe_fin])).s("supersaw").lpf(900).attack(0.4).sustain(0.9).release(0.8).gain(0.18),

  // arpège en polymètre (règle 7)
  note(arrange([4, arp_intro], [4, arp_montee], [8, arp_couplet], [8, arp_acid], [4, arp_coupure], [16, arp_refrain], [8, arp_refrain2], [4, arp_fin])).s("square").lpf(2200).decay(0.08).sustain(0.3).gain(0.22),

  // batterie TR-909 (règles 1, 3, 5)
  s(arrange([4, drums_intro], [4, drums_montee], [8, drums_couplet], [8, drums_acid], [4, drums_coupure], [16, drums_refrain], [8, drums_refrain2], [4, drums_fin])).bank("RolandTR909").gain(0.9)
)
