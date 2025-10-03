// tidbit 10 jun 25, evolved from online example

// drums
$: s("[bd <hh hh*1 oh>]*4").bank("RolandD70").dec(0.7).color("black")
$: s("bd:0 bd:1 bd:0:0.3 bd:1:1.1").delay(0.23).gain(.45)

//string chords
$: note("<[c,eb,g] [bb,d,f] [f,ab,c] [eb,g,bb]>")
.sound("gm_string_ensemble_2")
.decay(4.0)
.gain(0.7)
.room(0.5)
.color("skyblue")

//bass 
$: note("<c2*8 bb2*8 f2*8 eb2*8>").sound("gm_synth_bass_1")
.decay(0.8).lpf(sine.range(500,1500).fast(2)).lpq(4).lpd(0.3)
.gain(1.2)
.color("#660066")
._scope({thickness: 5, width:800})

//piano arp
$: note("c6 bb5 f5 eb5").fast(1)
.decay(.5)
.sound("piano").gain(slider (0.9492,0,1.2)).delay(".3 1.6 2 4")
.color("#0066ff")
 ._punchcard()
