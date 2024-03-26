<script lang="ts">
    import { score } from './flagGame';
    export let restartGame: () => void;
    export let shareScore: () => void;

    
  </script>
  
  <div>
    <p class="bagel-fat flex justify-center">Your score is: {$score}</p>
    
    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" on:click={restartGame}>Restart</button>
    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" on:click={shareScore}>Share</button>
  </div>

  <style>
    p{
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    .bagel-fat{
        font-family: "Bagel Fat One", system-ui;
        font-weight: 400;
        font-style: normal;
        color: white;
    }

  </style>