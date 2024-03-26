<script lang="ts">
  import { currentFlag } from './flagGame';
</script>

{#if $currentFlag}
  <div class="flex flex-wrap justify-center">
    <div class="w-6/12 sm:w-4/12 px-4">
      <img
        src={$currentFlag.imageUrl}
        alt={$currentFlag.name}
        class="rounded-lg object-contain h-64 w-64"
        style="width: 300px; height: 200px;"
      />
    </div>    
  </div>
{/if}