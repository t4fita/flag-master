<script lang="ts">
  import { onMount } from 'svelte';
  let user: { name: string } | null = null; // Placeholder for user data

  onMount(() => {
      // Fetch user data here
  });
</script>

<nav class="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-poppins">Your Company</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      {#if user}
          <div class="text-gray-900">{user.name}</div> <!-- Placeholder for user profile -->
      {:else}
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
      {/if}
  </div>
</div>
</nav>