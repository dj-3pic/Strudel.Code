// "ACIDDDDDD" 
// script @by SWITCH ANGLE

setcps(140/60/4)
$: s("sbd!4") .distort("3:.3") ._scope()
.duck ("2:3:4").duckattack(.2).duckdepth(slider( 48.4,0, 100))

$bass:n(irand(10).sub(7).seg(16)).scale("c:minor")
.rib(46,1).s("sawtooth").lpf(800).hpe("<4 2 1 0 -1 -2 -4>/4").lpq("<12 0 5>").orbit(3)

$: s("supersaw").detune(1).rel(0).beat(2,32).slow(2).orbit(12).fm(7) .fmh(2.04) .room(1).roomsize(10)

$: s("anvil").beat(0,2).room(10).roomsize(10).gain(9).orbit(3)

$: s("pulse").orbit(32).seg(16).dec(.1).fm(time).fmh(time) .roomsize(0.7)
