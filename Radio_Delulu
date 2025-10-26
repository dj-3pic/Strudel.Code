setcpm(120/4)

let var1 = "5 4 3 2 -1 2 3 4"
let var2 = " 7 7 4 4@2  0 3 5"
let var3 = "0 2 0 1 3 5 <7 3>@2"
let var4 = "5@32"
let b1 = "0 1 0 5"
let b2 = "0 1 0 [5|2|3]"
let b3 = "<9 7 5 <3 7>> 2 1 0"
let b4 = "0@32"

$: s("bd hh")
.bank("RolandTR909").swingBy(1/16, 16).gain(rand.range(0.4,0.6))
  //almostNever(x => x.s("cr").gain(0.2))

$: n(b1).scale("D2:minor:pentatonic").s("gm_synth_bass_2").gain(2).swingBy(1/16, 16)
//.slow(8)

$: n(var1.rarely(x => x.add("0.7"))).scale("D4:minor:pentatonic")
.s("gm_synth_bass_2").swingBy(1/16, 16).adsr("0:.1:0:0")
.slow(2)
.room(0.5)

$: s("rim").bank("RolandTR909").gain(0.7)

all(x => x.gain(sine.range(0.5,0) .slow(48)))
