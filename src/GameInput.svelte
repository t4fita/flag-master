<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { checkAnswer, flags, currentFlag, score } from './flagGame';
  import { writable } from 'svelte/store';

  const dispatch = createEventDispatcher();
  const lives = writable(3);

  let feedback = '';
  let options:Array<{name: string, imageUrl: string}> = [];
  let gameOver = false;

  $: {
    const otherFlags = $flags.filter(flag => flag.name !== $currentFlag.name);
    const randomFlags = otherFlags.sort(() => 0.5 - Math.random()).slice(0, 3);
    options = [$currentFlag, ...randomFlags].sort(() => 0.5 - Math.random());
  }

  function handleSubmit(answer: string, event: Event) {
    event.preventDefault();
    const isCorrect = checkAnswer(answer);
    feedback = isCorrect ? 'Correct!' : 'Incorrect, try again.';
    if (isCorrect) {
      dispatch('scoreChanged');
    } else {
      lives.update(value => value - 1);
      if ($lives === 0) {
        gameOver = true;
      }
    }
  }

  $: hearts = '❤️ '.repeat($lives) + '🖤 '.repeat(3 - $lives);

</script>


<p class="hearts">{hearts}</p>
<form style="display: flex; flex-wrap: wrap; justify-content: center;">
  {#each options as option (option.name)}
    <button style="flex: 0 0 45%;" on:click|preventDefault={(event) => handleSubmit(option.name, event)}>{option.name}</button>
  {/each}
  <p>{feedback}</p>
</form>

<style>
  button {
    margin: 0.5rem;
    padding: 1rem;
  }

  .hearts {
    font-size: 2rem;
  }
</style>