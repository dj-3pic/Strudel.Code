setcps(.75)
// "Abandend Terminal"
// @by celadewallace474
// load sample pack...
samples({
  build_bass:  ['snd/bass/build_0.mp3', 'snd/bass/build_1.mp3', 'snd/bass/build_2.mp3', 'snd/bass/build_3.mp3'],
  build_synth: ['snd/synth/build_0.mp3','snd/synth/build_1.mp3','snd/synth/build_2.mp3','snd/synth/build_3.mp3'],
  build_vox:   ['snd/vox/build_0.mp3',  'snd/vox/build_1.mp3',  'snd/vox/build_2.mp3',  'snd/vox/build_3.mp3'],
  drop_vox:    ['snd/vox/drop_0.mp3',   'snd/vox/drop_1.mp3',   'snd/vox/drop_2.mp3',   'snd/vox/drop_3.mp3',
                'snd/vox/drop_4.mp3',   'snd/vox/drop_5.mp3',   'snd/vox/drop_6.mp3',   'snd/vox/drop_7.mp3',
                'snd/vox/drop_8.mp3'],
  verse_vox:   ['snd/vox/verse_0.mp3',  'snd/vox/verse_1.mp3',  'snd/vox/verse_2.mp3',  'snd/vox/verse_3.mp3',
                'snd/vox/verse_4.mp3',  'snd/vox/verse_5.mp3',  'snd/vox/verse_6.mp3',  'snd/vox/verse_7.mp3',
                'snd/vox/verse_8.mp3'],
  sub:    ['snd/bass/sub_0.mp3',  'snd/bass/sub_1.mp3',  'snd/bass/sub_2.mp3'],
  bass:   ['snd/bass/bass_0.mp3', 'snd/bass/bass_1.mp3', 'snd/bass/bass_2.mp3'],
  kick:    'snd/perc/kick.mp3',
  sn:      'snd/perc/sn.mp3',
  cp:     ['snd/perc/cp.mp3', 'snd/perc/cp2.mp3'],
  tom:     'snd/perc/tom.mp3',
  hc:      'snd/perc/hc.mp3',
  shaker:  'snd/perc/shaker.mp3',
  break:   'snd/perc/break.mp3',
  guitar: ['snd/perc/guit1.mp3', 'snd/perc/guit2.mp3'],
}, 'github:lil-data/dj_dave-array_remix/main/');

const loopAx = register('loopAx', 
  (l, pat) => pat.loopAt(l).chop(l*8).legato(1).mul(speed(0.99))
);

const BASS_SAW_GAIN = slider(1.1526, .1, 2)
const BASS_SAW_VEL_MIN = slider(0.405642044276, .1, .5)
const BASS_SAW_VEL_MAX = slider(1.5688, .6, 2)
const ARP_TWO_PHASE = sine.range(3,8).slow(8)
const GLOBAL_DELAY = slider(.25, .1, 1)
const GLOBAL_ROOM = slider(.75, .1, 4)
const BASS_DRUM_GAIN = slider(0.3489, .1, 2)

const BD_BEAT = s("bd".early(.1)).struct("<x*2><x x*4>")
  .slow(2)
  .gain(BASS_DRUM_GAIN).velocity(".2 .3")
  .room("<.4 .6>")
  .compressor("-20:20:10:.002:.02")
  .pan(sine.fast(4))
  .postgain(2).distort(1)
  .bank('yamahary30')

const BD_BEAT_2 = s("bd".early(.1)).struct("<[x*2 x*2]>")
  .slow(2)
  .gain(BASS_DRUM_GAIN).velocity(".4 .6")
  .room("<.4 .6>")
  .compressor("-20:20:10:.002:.02")
  .pan(sine.fast(4))
  .postgain(1).distort(1)
  .bank('yamahary30')

const BEEPA = s("<sawtooth square triangle sine>").note("g3")
  .seg(8)
  .beat("0,3,6,2?",16).slow(2).fm("<[0 1 2 8 32]>")
  .gain(slider(0.1133, .1, 2)).velocity(".3")
  .distort(2).fm(sine.range(5,20))
  .juxBy("2", rev)

_$: s("guitar").note("<[c2]*4 [bb1]*4 [d2]*4 [ab2]*4>")
  .seg(8)
  .beat("0,3,6,2?",16)
  .gain(.8).velocity(".7").postgain(2).distort(2)
  .juxBy("2", rev)

const WILDSAW = n("<0 2 4 <[6,8] [7,9] [4,6]>>").sound("supersaw").detune(1).scale("C:minor")
  .rel(5).beat(2, 32).slow(2).orbit(3).lpf(800)

const BASS_BONK = note("<[c2 c3]*4 [bb1 d3]*4 [d2 f3]*4 [ab2 eb3]*4>")
  .sound("gm_synth_bass_1").lpf(800).pan(sine.fast(4))
  .punchcard({fold:1,flipTime:1,vertical:1})
  .postgain(1)

const RAND_SAW = n(irand(10).sub(4).seg(16))
  .scale("c:minor")
  .rib(46,1).s("sawtooth")
  .gain(".4!1.6 1.5 .4!1.6 1 .3 1").velocity(".3 0.4")
  .lpf(200).fanchor(0)
  .lpenv(3).lpq(1)
  .ftype("<ladder 12db 24db>")
  .room(GLOBAL_ROOM).shape(.3).delay(GLOBAL_DELAY)
  .juxBy("1", rev)

const GUITR_WALK = s("gm_electric_guitar_muted:<0 1 2>".early(.2)).arp("<0 <4 6>*2 <5 3> 4 <6 2> 1>")
  .note("<[c2]*4 [bb1]*4 [d2]*4 [ab2]*4>")
  .pan(sine.slow(3))
  .room(GLOBAL_ROOM).shape(.3).delay(GLOBAL_DELAY)
  .phaser(ARP_TWO_PHASE).lpenv(4).lpf(500).ftype("<0 1 2>").lpq(1)
  .fm(sine.range(3,10).slow(8))
  .postgain(1)
  .distort("2")

const ORGAN_WALK = s("gm_rock_organ:<0 1 2>").n("<[c4] [ab5] [eb3] <c3 d2>>").distort("2")
  .pan(sine.slow(3)).scale("C:minor")
  .room(GLOBAL_ROOM).shape(.3).delay(GLOBAL_DELAY)
  .phaser(ARP_TWO_PHASE).lpenv(4).lpf(500).ftype("<0 1 2>").lpq(1)
  .fm(sine.range(3,10).slow(8))

const SLAP_WALK = note("c!2 [eb,<ab d bb ab><c4!2 [eb4!2 ab4!2]*4 [eb4!2 bb4!2]*4>]")
  .sound("shaker").clip(2)
  .pan(sine.slow(3)).scale("C:minor")
  .room(GLOBAL_ROOM).shape(.3)
  .phaser(ARP_TWO_PHASE).lpenv(4).lpf(500).ftype("<0 1 2>").lpq(1)
  .postgain(1)
  .distort(1)

const HH_CLICK = n("[0 <1 3> 1]*<4 2 4>").s("hh")
    .room("<.2 .4>").pan(sine.slow(3))
    .gain(perlin.range(1, 1.2)).velocity(".6 .8")
    //.bank('rolands50')

const SHAKER_ONE = s("sh:<3 4>".early(.1)).struct("<x*<3 2> x x:<2 3>>".fast(2))
    .gain(BASS_DRUM_GAIN).velocity(".6 .7")
    .room("<0 .2>")
    .delay(.5)
    //.compressor("-20:20:10:.002:.02")
    //.postgain(2)
    .bank('rolands50')

const SNARE_ONE = s("sd:<4 5> [rim, sd:<2 0>]").struct("<[x*<2 4>] x [x*<4 2>]>")
    .room("<0 .4>")
    .gain(perlin.range(.4, .5)).velocity(".4 .6")
    .coarse(16)
    .compressor("-20:20:10:.002:.02")
    .postgain(2)
    .bank('yamahary30').pan(sine.slow(3))

_$: note("<[c2]*4 [bb1]*4 [d2]*4 [ab2]*4>")
  .sound("sub:<0 1 2>").fast(2).lpf(800).pan(sine.fast(4))
  .gain(".4!1.6 1.5 .4!1.6 1 .3 1").velocity(".4")
  .room(GLOBAL_ROOM).shape(.3).delay(GLOBAL_DELAY)
  .fm(sine.range(3,10).slow(8))
  //.postgain(2).distort(1)

const LEAD_RUN = n(`<
  [~ 0] 2 [0 2] [~ 2]
  [~ 0] 1 [0 1] [~ 1]
  [~ 0] 4 [0 7] [~ 6]
  [~ 0] 6 [0 3] [~ 2]
  >*4`).scale("C4:minor")
  .sound("gm_synth_strings_1")
  .pan(sine.fast(4))
  .room(sine.range(GLOBAL_ROOM,2).shape(.3).delay(GLOBAL_DELAY))
  .phaser(ARP_TWO_PHASE).lpenv(4).lpf(500).ftype("<0 1 2>").lpq(1)
  .distort(1)
  .theme("[teletext terminal atomone aura bespin duotoneDark]/54")
  .color("[fuschia [aquamarine dodgerblue] [hotpink] blueviolet deeppink [cornsilk indigo] crimson cyan]/27")

_$: note("<c4@2 [ab4 bb3 eb4 c3] [c4 eb3]*2 <[bb4 d4 eb5]>>")
  .sound("gm_pad_new_age:<4 1 2 3 4 5>").lpf(800).pan(sine.fast(4))
  .gain(BASS_SAW_GAIN).velocity(".7")
  .phaser(ARP_TWO_PHASE).lpenv(4).lpf(500)
  .fm(sine.range(3,10).slow(8)).slide(2)
  .postgain(1).distort(2)
  .theme("[teletext terminal atomone aura bespin duotoneDark]/54")
  .color("[fuschia [aquamarine dodgerblue] [hotpink] blueviolet deeppink [cornsilk indigo] crimson cyan]/27")



const MAD_PULSE = stack(
  n("<0 1 2 3>").s("bass").bank("build").loopAx(4).fm(sine.range(10,20)),
  n("<0 1 2 3>").s("synth").bank("build").loopAx(4).coarse(16).gain(slider(0.1912, .1, 2)),
  n("<0 1 2 3>").s("vox").bank("build").loopAx(4),
).gain(BASS_SAW_GAIN).velocity(".7")//.compressor("-20:20:10:.002:.02")
//.pan(sine.fast(4))//.gain(".4!1.6 1.5 .4!1.6 1 .3 1").velocity(".3 0.4")




// the stack

stack (
  BD_BEAT.mask(   "<1 1 1 1 1 1 1 0 0 1 1 1>/16"),
  BD_BEAT_2.mask( "<0 0 0 0 0 0 0 1 1 1 1 1>/16"),
  BEEPA.mask(     "<1 1 1 1 1 1 1 0 1 1 1 1>/16"),
  WILDSAW.mask(   "<0 1 1 1 1 1 1 1 1 1 1 1>/16"),
  BASS_BONK.mask( "<0 0 0 1 1 1 1 1 1 1 1 1>/16"),
  RAND_SAW.mask(  "<0 0 0 0 0 1 1 1 1 1 1 1>/16"),
  GUITR_WALK.mask("<0 0 0 0 1 1 1 1 1 1 1 1>/16"),
  ORGAN_WALK.mask("<0 0 0 0 0 0 1 1 0 0 0 1>/16"),
  HH_CLICK.mask(  "<0 0 0 1 1 1 1 1 1 1 1 1>/16"),
  LEAD_RUN.mask(  "<0 0 0 0 0 0 0 1 1 1 1 1>/16"),
  MAD_PULSE.mask( "<0 0 0 0 0 0 0 0 1 1 1 1>/16"),
  SHAKER_ONE.mask("<0 0 0 0 0 1 1 0 0 0 0 0>/16"),
  SNARE_ONE.mask( "<0 0 0 0 0 0 1 1 1 1 1 1>/16")
)










 /*    algoboy 
       terminal 
       abcdef 
       androidstudio 
       atomone 
       aura 
       bespin 
       darcula 
       dracula
       duotoneDark 
       eclipse 
       githubDark 
       gruvboxDark 
       materialDark
       nord
       okaidia 
       solarizedDark 
       sublime
       tokyoNight 
       tokyoNightStorm
       vscodeDark
       xcodeDark 
       bbedit
       duotoneLight
       githubLight
       gruvboxLight 
       materialLight 
       noctisLilac
       solarizedLight
       tokyoNightDay
       xcodeLight]/54")*/
