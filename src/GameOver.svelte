<script lang="ts">
    import { score } from './flagGame';
    export let restartGame: () => void;
    export let shareScore: () => void;

    
  </script>
  
  <div>
    <p>Your score is: {$score}</p>
    <button on:click={restartGame}>Restart</button>
    <button on:click={shareScore}>Share</button>
  </div>