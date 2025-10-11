setcpm (93/4)
// DRUMS
  $:sound("bd - sd [bd bd] - - sd -") .bank("circuitsdrumtracks").gain(.8).room(.1).orbit(2)
  $:sound("hh*4").bank("alesishr16").gain(.3).pan(.3).orbit(2)
// E-piano
$:n("<[2 4 4 8 4 0 6 0]*.5> 0 4 <[6,8] [7,9]>").scale("D3:dorian").sound("gm_epiano1").gain(slider(0.671925,0,.775)).pan(.25)
  .rib(46,1).room(.1)
  .orbit(2)
// Piano
$:arrange(
  [1, "<[0,3,6] [0,5,8] >(1,8)"],
  [1, "<3 [0 3] 5 0>(1,8)"]
).n().scale("D3:dorian").sound("piano").gain(.4).pan(.75).room(.8).orbit(2)
//arp
$:n("<[0,3,6]> 0 0 <[3,5]>").scale("D3:dorian").sound("gm_synth_brass_1").decay(.5).gain(.2).pan(.6).orbit(2)
