<script>
  import picks from './data/picks.js';
  import ChartBackground from './components/ChartBackground.svelte';
  import PickCard from './components/PickCard.svelte';
</script>

<svelte:head>
  <title>Kite Session — Farø · May 30 2026 · Poster Picks</title>
</svelte:head>

<ChartBackground />

<main class="page">
  <header>
    <p class="chart-label">Kite Session · Storstrømmen · Denmark</p>
    <h1>Poster Picks</h1>
    <p class="subtitle">30th May, 2026 — Farø, Sjælland</p>
    <p class="position-line">
      55° 18' N &nbsp;·&nbsp; 11° 59' E &nbsp;·&nbsp; Wind SSW · Force 4–5
    </p>
  </header>

  <section class="intro" aria-labelledby="intro-title">
    <h2 id="intro-title" class="visually-hidden">About the selection</h2>
    <p>
      From a session of 459 photographs taken on the waters off Farø, these ten images stand apart —
      each telling a distinct story of wind, water and the Farø bridges. Two cameras, one location,
      one day on Storstrømmen.
    </p>
  </section>

  <h2 id="selection-title" class="section-title"><span>The Selection</span></h2>

  <section class="picks" aria-labelledby="selection-title">
    {#each picks as pick, index}
      <PickCard {pick} priority={index === 0} />
    {/each}
  </section>

  <div class="compass-wrap">
    <svg
      width="80"
      height="80"
      viewBox="-50 -50 100 100"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="46" fill="none" stroke="rgba(100,75,30,0.3)" stroke-width="1" />
      <polygon points="0,-40 5,-15 0,-8 -5,-15" fill="rgba(100,75,30,0.55)" />
      <polygon
        points="0,40 5,15 0,8 -5,15"
        fill="rgba(210,185,115,0.9)"
        stroke="rgba(100,75,30,0.35)"
        stroke-width="0.5"
      />
      <polygon
        points="0,-25 4,-14 0,-8 -4,-14"
        fill="rgba(100,75,30,0.55)"
        transform="rotate(45)"
      />
      <polygon
        points="0,-25 4,-14 0,-8 -4,-14"
        fill="rgba(100,75,30,0.55)"
        transform="rotate(135)"
      />
      <polygon
        points="0,-25 4,-14 0,-8 -4,-14"
        fill="rgba(100,75,30,0.55)"
        transform="rotate(225)"
      />
      <polygon
        points="0,-25 4,-14 0,-8 -4,-14"
        fill="rgba(100,75,30,0.55)"
        transform="rotate(315)"
      />
      <circle cx="0" cy="0" r="3" fill="rgba(100,75,30,0.7)" />
    </svg>
  </div>

  <footer>
    <p>Farø · Storstrømmen · Denmark &nbsp;·&nbsp; 30 May 2026</p>
    <p class="footer-detail">459 Photographs Reviewed &nbsp;·&nbsp; 10 Selected</p>
  </footer>
</main>
