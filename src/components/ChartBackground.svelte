<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  focusable="false"
  style="position:fixed;inset:0;width:100%;height:100%;z-index:0;opacity:0.38;pointer-events:none"
  viewBox="0 0 1200 900"
  preserveAspectRatio="xMidYMid slice"
>
  <defs>
    <style>
      .water { fill: rgba(90,130,160,0.18); }
      .land  { fill: rgba(170,145,80,0.55); stroke: rgba(90,65,20,0.5); stroke-width:1.5; }
      .depth { fill: none; stroke: rgba(60,100,130,0.25); stroke-width:0.8; }
      .label { font-family:'IM Fell English SC','Georgia',serif; fill:rgba(50,35,10,0.65); }
      .soundings { font-family:'Georgia',serif; fill:rgba(50,80,110,0.5); font-size:9px; }
      .route { fill:none; stroke:rgba(120,80,30,0.3); stroke-width:1.2; stroke-dasharray:8 5; }
      .compass-fill  { fill:rgba(90,65,20,0.55); }
      .compass-empty { fill:rgba(210,190,130,0.8); stroke:rgba(90,65,20,0.4); stroke-width:0.7; }
    </style>
  </defs>
  <rect width="1200" height="900" class="water"/>
  <ellipse cx="600" cy="450" rx="520" ry="340" class="depth"/>
  <ellipse cx="600" cy="450" rx="420" ry="270" class="depth"/>
  <ellipse cx="600" cy="450" rx="310" ry="200" class="depth"/>
  <path class="land" d="M0,0 L1200,0 L1200,210 Q1080,195 980,220 Q880,240 780,215 Q700,200 640,230 Q580,258 510,240 Q440,220 360,248 Q260,270 160,245 Q80,228 0,245 Z"/>
  <path class="land" d="M0,900 L1200,900 L1200,640 Q1100,625 1000,650 Q900,668 820,645 Q740,622 660,648 Q580,668 500,645 Q420,622 340,648 Q240,668 140,645 Q70,628 0,648 Z"/>
  <path class="land" d="M1200,350 L1200,560 Q1160,555 1130,570 Q1090,580 1060,555 Q1040,538 1050,510 Q1065,478 1090,462 Q1120,445 1150,420 Q1175,400 1200,350 Z"/>
  <path class="land" d="M540,380 Q575,365 620,370 Q660,374 685,395 Q705,415 700,445 Q695,475 670,492 Q642,508 610,505 Q578,502 558,482 Q538,462 535,435 Q532,408 540,380 Z"/>
  <path class="land" d="M390,340 Q410,332 430,338 Q448,344 452,358 Q455,372 440,380 Q424,387 408,381 Q392,374 388,360 Q385,347 390,340 Z"/>
  <line x1="160" y1="450" x2="1040" y2="450" stroke="rgba(60,40,15,0.45)" stroke-width="3"/>
  <line x1="380" y1="340" x2="380" y2="470" stroke="rgba(60,40,15,0.5)" stroke-width="4"/>
  <line x1="380" y1="340" x2="240" y2="452" stroke="rgba(60,40,15,0.25)" stroke-width="1"/>
  <line x1="380" y1="340" x2="300" y2="452" stroke="rgba(60,40,15,0.25)" stroke-width="1"/>
  <line x1="380" y1="340" x2="460" y2="452" stroke="rgba(60,40,15,0.25)" stroke-width="1"/>
  <line x1="380" y1="340" x2="520" y2="452" stroke="rgba(60,40,15,0.25)" stroke-width="1"/>
  <line x1="820" y1="340" x2="820" y2="470" stroke="rgba(60,40,15,0.5)" stroke-width="4"/>
  <line x1="820" y1="340" x2="660" y2="452" stroke="rgba(60,40,15,0.25)" stroke-width="1"/>
  <line x1="820" y1="340" x2="740" y2="452" stroke="rgba(60,40,15,0.25)" stroke-width="1"/>
  <line x1="820" y1="340" x2="900" y2="452" stroke="rgba(60,40,15,0.25)" stroke-width="1"/>
  <line x1="820" y1="340" x2="960" y2="452" stroke="rgba(60,40,15,0.25)" stroke-width="1"/>
  <path class="route" d="M600,180 Q620,310 612,440 Q605,560 595,720"/>
  <text class="soundings" x="200" y="400">4</text>
  <text class="soundings" x="310" y="370">6</text>
  <text class="soundings" x="460" y="330">8</text>
  <text class="soundings" x="720" y="320">9</text>
  <text class="soundings" x="870" y="370">7</text>
  <text class="soundings" x="980" y="400">5</text>
  <text class="soundings" x="250" y="530">5</text>
  <text class="soundings" x="400" y="570">7</text>
  <text class="soundings" x="750" y="560">8</text>
  <text class="soundings" x="930" y="530">6</text>
  <text class="soundings" x="500" y="600">10</text>
  <text class="soundings" x="660" y="610">11</text>
  <text class="label" font-size="13" x="550" y="430" text-anchor="middle" font-style="italic">Farø</text>
  <text class="label" font-size="11" x="380" y="358" text-anchor="middle" font-style="italic">Lilleø</text>
  <text class="label" font-size="16" x="600" y="150" text-anchor="middle">Storstrømmen</text>
  <text class="label" font-size="13" x="200" y="140" text-anchor="middle" font-style="italic">Sjælland</text>
  <text class="label" font-size="13" x="200" y="800" text-anchor="middle" font-style="italic">Falster</text>
  <text class="label" font-size="13" x="1000" y="800" text-anchor="middle" font-style="italic">Lolland</text>
  <text class="label" font-size="11" x="1140" y="500" text-anchor="middle" font-style="italic">Møn</text>
  <text class="label" font-size="10" x="600" y="466" text-anchor="middle" opacity="0.7">Farøbroerne</text>
  <g transform="translate(1080,130)">
    <circle cx="0" cy="0" r="52" fill="none" stroke="rgba(90,65,20,0.4)" stroke-width="1.2"/>
    <circle cx="0" cy="0" r="44" fill="none" stroke="rgba(90,65,20,0.3)" stroke-width="0.7"/>
    <polygon points="0,-44 6,-20 0,-10 -6,-20" class="compass-fill"/>
    <polygon points="0,44 6,20 0,10 -6,20" class="compass-empty"/>
    <polygon points="44,0 20,6 10,0 20,-6" class="compass-empty"/>
    <polygon points="-44,0 -20,6 -10,0 -20,-6" class="compass-fill"/>
    <polygon points="0,-28 3,-20 0,-14 -3,-20" class="compass-fill" transform="rotate(45)"/>
    <polygon points="0,-28 3,-20 0,-14 -3,-20" class="compass-fill" transform="rotate(135)"/>
    <polygon points="0,-28 3,-20 0,-14 -3,-20" class="compass-fill" transform="rotate(225)"/>
    <polygon points="0,-28 3,-20 0,-14 -3,-20" class="compass-fill" transform="rotate(315)"/>
    <circle cx="0" cy="0" r="3.5" class="compass-fill"/>
    <text x="0" y="-54" text-anchor="middle" font-family="Cinzel,serif" font-size="11" fill="rgba(50,35,10,0.8)" font-weight="600">N</text>
  </g>
  <rect x="30" y="780" width="340" height="100" rx="4" fill="rgba(210,185,115,0.5)" stroke="rgba(90,65,20,0.35)" stroke-width="1.2"/>
  <text x="200" y="810" text-anchor="middle" font-family="Cinzel,serif" font-size="13" fill="rgba(50,35,10,0.75)" font-weight="600">CHART OF STORSTRØMMEN</text>
  <text x="200" y="830" text-anchor="middle" font-family="Georgia,serif" font-size="10" font-style="italic" fill="rgba(50,35,10,0.6)">Showing the Island of Farø &amp; its Bridges</text>
  <text x="200" y="848" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="rgba(50,35,10,0.5)">Depths in Metres · Not for Navigation</text>
  <text x="200" y="865" text-anchor="middle" font-family="Georgia,serif" font-size="9" font-style="italic" fill="rgba(50,35,10,0.45)">55°18'N  11°59'E</text>
</svg>
