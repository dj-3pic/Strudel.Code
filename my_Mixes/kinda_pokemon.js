setcpm(1.0*120/2)

$:s("bd").beat("0,2",4)
$:s("hh*8").degradeBy("0.2 | 0.1")
$:s("cp").struct("0 0 0 <1 1*2>")
$:note("c3 <c3 c4> [c5 c4] <c3 c5>") .sound("square") .transpose("0 | -1 | 3")
  .lpf("900 | 1200 | 1500")
  .room(0.3) .gain(0.7)
  .scope({pos: 0.5, scale: 0.3})



$:s("saw").beat("1, 3", 4) .note("c f#") .trans("0 | -1 | 3")
