// @title: All my Rave
// @artist: negotrucky
// @bpm: 144

setcps(144/60/4)

// ---------- intro (calme) : Fm A#m C# C ----------
const lead_intro = "<[~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~] [~ ~ a#4 ~ ~ a#4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~] [~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~] [~ ~ a#4 ~ ~ a#4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~]>"
const bass_intro = "<[f2 ~ ~ ~ ~ ~ ~ ~] [a#2 ~ ~ ~ ~ ~ ~ ~] [c#3 ~ ~ ~ ~ ~ ~ ~] [c3 ~ ~ ~ ~ ~ ~ ~]>"
const pad_intro = "<[g#3,c4] [c#4,f4] [g#3,f4] [g3,e4]>"
const arp_intro = "<~ ~ ~ ~>"
const drums_intro = "<[~ hh ~ hh] [~ hh ~ hh] [~ hh ~ hh] [~ hh ~ hh]>"

// ---------- montee (calme) : Fm A#m C# C ----------
const lead_montee = "<[~ ~ ~ ~ a#4 ~ ~ ~ ~ ~ a#4 ~ ~ ~ ~ ~] [c#5 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~] [~ ~ ~ ~ a#4 ~ ~ ~ ~ ~ a#4 ~ ~ ~ ~ ~] [c5 ~ ~ ~ ~ ~ c#5 ~ ~ ~ ~ ~ ~ ~ ~ ~]>"
const bass_montee = "<[f2 ~ ~ ~ ~ ~ ~ ~] [a#2 ~ ~ ~ ~ ~ ~ ~] [c#3 ~ ~ ~ ~ ~ ~ ~] [c3 ~ ~ ~ ~ ~ ~ ~]>"
const pad_montee = "<[g#3,c4] [c#4,f4] [g#3,f4] [g3,e4]>"
const arp_montee = "<~ ~ ~ ~>"
const drums_montee = "<[~ hh ~ hh] [~ hh ~ hh] [~ hh ~ hh] [~ hh ~ hh]>"

// ---------- couplet (moyen) : Fm A#m C# C ----------
const lead_couplet = "<[~ ~ a#4 ~ ~ a#4 ~ ~ c5 ~ ~ ~ ~ ~ ~ ~] [~ ~ a#4 ~ ~ a#4 ~ ~ c#5 ~ ~ c#5 ~ ~ ~ ~] [~ ~ g5 ~ ~ g5 ~ ~ g#5 ~ ~ ~ ~ ~ ~ ~] [~ ~ g5 ~ ~ g5 ~ ~ c6 ~ ~ a#5 ~ ~ ~ ~]>"
const bass_couplet = "<[f2 f2 f2 f2]*4 [a#2 a#2 a#2 a#2]*4 [c#3 c#3 c#3 c#3]*4 [c3 c3 c3 c3]*4>"
const pad_couplet = "<[g#3,c4] [c#4,f4] [g#3,f4] [g3,e4]>"
const arp_couplet = "<[g#3 c4 f4 g#4]*4 [a#3 c#4 f4 a#4]*4 [g#3 c#4 f4 g#4]*4 [g3 c4 e4 g4]*4>"
const drums_couplet = "<[bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ ~ ~, hh*8] [bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ ~ ~, hh*8] [bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ ~ ~, hh*8] [bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ ~ ~, hh*8]>"

// ---------- refrain (fort) : Fm A#m C# C ----------
const lead_refrain = "<[~ ~ f4 ~ ~ f4 ~ ~ g#4 ~ g#4 ~ ~ ~ ~ ~] [~ ~ f4 ~ ~ f4 ~ ~ a#4 ~ ~ g#4 ~ ~ ~ ~] [~ ~ c#5 ~ ~ c#5 ~ ~ c#5 ~ f5 ~ ~ ~ ~ ~] [~ ~ f4 ~ ~ f4 ~ ~ g4 ~ ~ ~ ~ ~ ~ ~]>"
const bass_refrain = "<[f2 f2 f2 f2]*4 [a#2 a#2 a#2 a#2]*4 [c#3 c#3 c#3 c#3]*4 [c3 c3 c3 c3]*4>"
const pad_refrain = "<[g#3,c4] [c#4,f4] [g#3,f4] [g3,e4]>"
const arp_refrain = "<[g#3 c4 f4 g#4]*4 [a#3 c#4 f4 a#4]*4 [g#3 c#4 f4 g#4]*4 [g3 c4 e4 g4]*4>"
const drums_refrain = "<[bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ bd ~, hh*16] [bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ bd ~, hh*16] [bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ bd ~, hh*16] [bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ bd ~, hh*16]>"

// ---------- pont (moyen) : C# C Fm A#m ----------
const lead_pont = "<[~ ~ a#4 ~ ~ a#4 ~ ~ g#4 ~ ~ ~ ~ ~ ~ ~] [~ ~ a#4 ~ ~ a#4 ~ ~ g4 ~ ~ g4 ~ ~ ~ ~] [~ ~ a#4 ~ ~ a#4 ~ ~ g#4 ~ ~ ~ ~ ~ ~ ~] [~ ~ a#4 ~ ~ a#4 ~ ~ f4 ~ ~ ~ ~ ~ ~ ~]>"
const bass_pont = "<[c#3 c#3 c#3 c#3]*4 [c3 c3 c3 c3]*4 [f2 f2 f2 f2]*4 [a#2 a#2 a#2 a#2]*4>"
const pad_pont = "<[g#3,f4] [g3,e4] [g#3,c4] [c#4,f4]>"
const arp_pont = "<[g#3 c#4 f4 g#4]*4 [g3 c4 e4 g4]*4 [g#3 c4 f4 g#4]*4 [a#3 c#4 f4 a#4]*4>"
const drums_pont = "<[bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ ~ ~, hh*8] [bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ ~ ~, hh*8] [bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ ~ ~, hh*8] [bd ~ ~ ~ [sd,cp] ~ ~ bd ~ ~ bd ~ [sd,cp] ~ ~ ~, hh*8]>"

// ---------- fin (calme) : Fm A#m C# Fm ----------
const lead_fin = "<[~ ~ a#4 ~ ~ a#4 ~ ~ c5 ~ ~ ~ ~ ~ ~ ~] [~ ~ a#4 ~ ~ a#4 ~ ~ c#5 ~ ~ c#5 ~ ~ ~ ~] [~ ~ a#4 ~ ~ a#4 ~ ~ c#5 ~ ~ ~ ~ ~ ~ ~] [~ ~ ~ ~ ~ ~ ~ ~ f5 ~ ~ ~ ~ ~ ~ ~]>"
const bass_fin = "<[f2 ~ ~ ~ ~ ~ ~ ~] [a#2 ~ ~ ~ ~ ~ ~ ~] [c#3 ~ ~ ~ ~ ~ ~ ~] [f2 ~ ~ ~ ~ ~ ~ ~]>"
const pad_fin = "<[g#3,c4] [c#4,f4] [g#3,f4] [g#3,c4]>"
const arp_fin = "<~ ~ ~ ~>"
const drums_fin = "<[~ hh ~ hh] [~ hh ~ hh] [~ hh ~ hh] [~ hh ~ hh]>"

stack(
  // mélodie
  note(arrange([4, lead_intro], [4, lead_montee], [4, lead_couplet], [4, lead_couplet], [4, lead_refrain], [4, lead_pont], [4, lead_refrain], [4, lead_refrain], [4, lead_fin]))
    .s("sawtooth").lpf(3000).decay(0.15).sustain(0.5).release(0.15).gain(0.5)
    .delay(0.35).delaytime(0.312).delayfeedback(0.4),

  // basse
  note(arrange([4, bass_intro], [4, bass_montee], [4, bass_couplet], [4, bass_couplet], [4, bass_refrain], [4, bass_pont], [4, bass_refrain], [4, bass_refrain], [4, bass_fin])).s("sawtooth").lpf(600).decay(0.1).sustain(0.5).gain(0.6),

  // nappe
  note(arrange([4, pad_intro], [4, pad_montee], [4, pad_couplet], [4, pad_couplet], [4, pad_refrain], [4, pad_pont], [4, pad_refrain], [4, pad_refrain], [4, pad_fin])).s("supersaw").lpf(1200).attack(0.3).sustain(0.9).release(0.6).gain(0.22).pan(0.3).room(0.6),

  // arpège
  note(arrange([4, arp_intro], [4, arp_montee], [4, arp_couplet], [4, arp_couplet], [4, arp_refrain], [4, arp_pont], [4, arp_refrain], [4, arp_refrain], [4, arp_fin])).s("square").lpf(1800).decay(0.1).sustain(0).gain(0.28).pan(0.7),

  // batterie
  s(arrange([4, drums_intro], [4, drums_montee], [4, drums_couplet], [4, drums_couplet], [4, drums_refrain], [4, drums_pont], [4, drums_refrain], [4, drums_refrain], [4, drums_fin])).gain(0.85)
)
