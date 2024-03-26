<script lang="ts">
  import { currentFlag } from './flagGame';
</script>

{#if $currentFlag}
  <div class="flex flex-wrap justify-center rounded-lg">
    <div class="w-6/12 sm:w-4/12 px-4">
      <img
        src={$currentFlag.imageUrl}
        alt=""
        style="width: 300px; height: 125px; margin-top: 2rem; margin-bottom: 2rem;"        
      />
    </div>    
  </div>
{/if}

<style>
  img{
    border-radius: 10%;
  }
</style>
