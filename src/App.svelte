<script lang="ts">
  import FlagImage from './FlagImage.svelte';
  import { score } from './flagGame';
  import { gameOver, restartGame } from './flagGame';
  import GameInput from './GameInput.svelte';
  import GameOver from './GameOver.svelte';
  import Navbar from './Navbar.svelte';
  import "./app.css"

  function shareScore() {
    // Add logic to share the score
  }

</script> 


<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Barriecito&display=swap" rel="stylesheet">
</head>

<body>
  <Navbar/>

  <main class="flex justify-center h-screen">
    
    
      <div class="w-96">
        <h1 class="text-center">Flag Guessing Game</h1>
        <FlagImage />
        <GameInput on:scoreChanged={() => {}} />
        <h2 class="text-center">Score: {$score}</h2>
      </div>

      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
  </main>
</body>
{#if $gameOver}
  <div class="game-over-popup">
    <GameOver {restartGame} {shareScore} />
  </div>
{/if}



<style>
  :root {
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: hidden;
    background: linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
  }

  .w-96 {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 5.5rem;
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.125);    
    width: 50rem;
    height: 40rem;
  }

  .game-over-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  @keyframes gradient {
      0% {
          background-position: 0% 0%;
      }
      50% {
          background-position: 100% 100%;
      }
      100% {
          background-position: 0% 0%;
      }
  }

  .wave {
      background: rgb(255 255 255 / 25%);
      border-radius: 1000% 1000% 0 0;
      position: fixed;
      width: 200%;
      height: 12em;
      animation: wave 10s -3s linear infinite;
      transform: translate3d(0, 0, 0);
      opacity: 0.8;
      bottom: 0;
      left: 0;
      z-index: -1;
  }

  .wave:nth-of-type(2) {
      bottom: -1.25em;
      animation: wave 18s linear reverse infinite;
      opacity: 0.8;
  }

  .wave:nth-of-type(3) {
      bottom: -2.5em;
      animation: wave 20s -1s reverse infinite;
      opacity: 0.9;
  }

  @keyframes wave {
      2% {
          transform: translateX(1);
      }

      25% {
          transform: translateX(-25%);
      }

      50% {
          transform: translateX(-50%);
      }

      75% {
          transform: translateX(-25%);
      }

      100% {
          transform: translateX(1);
      }
  }
</style>