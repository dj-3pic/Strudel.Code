// "Falling stars" - Work In Progress
// script @by dj-3pic

setcps=(120/60/4)
const pattern = [
  "[e5 [g5 c5]] [b4 d5 g5 b5] [[c5  e5] [a5  e5]] [[f5 a5] c6 [a5 f5]]",
  "[g5 e5 c5] [d5 b4 g5] [a5 e5 c5] [c6 a5 f5]",
  "[[e5 g5] c6 e5] [g5 [b5 d5] g5] [[c5 a5] e5 a5] [[f5 c6] a5 f5]",
  "[c5 e5] [g5 b4] [e5 a5] [[f5 a5] c6]"
]
const base = stack (
  stack(
    note("<c2 g1 a1 f1>").sound("saw|sin|sqr"),
    note("<c3 g2 a2 f2>").sound("saw|sin|sqr").gain(0.5),
    note("<g3 d3 e3 c3>").sound("saw|sin|sqr").gain(0.25),
    note("<e4 b3 c4 a4>").sound("saw|sin|sqr").gain(0.125)
  ),
note("1|2|3|0".pick(pattern)).slow(2)
  .sound("saw|sin|sqr").gain(0.125)
).room(2/3).delay(1/3).sometimes(x=>x.room(3/4))

$:base.decay(1/4)
    .lpf(perlin.range(600,900).slow(4))
$:s("sbd*4").decay(0.5).gain(0.3)

all(x=>x.postgain(1/3))
