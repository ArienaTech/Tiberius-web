export default function Stage() {
  return (
    <>
<canvas id="gl"></canvas>
<div id="gl-dim" aria-hidden="true"></div>
<div className="vignette"></div>

<div id="cursor"><span className="cursor-label">VIEW</span></div>
<div id="cursor-dot"></div>
    </>
  );
}
