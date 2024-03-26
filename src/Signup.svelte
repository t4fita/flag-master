<script lang="ts">
    let email: string = '';
    let password: string = '';
    
    function signUp(): void {
      // Placeholder for sign up logic
    }
  </script>
  
  <form on:submit|preventDefault={signUp}>
    <input bind:value={email} type="email" placeholder="Email" />
    <input bind:value={password} type="password" placeholder="Password" />
    <button type="submit">Sign Up</button>
  </form>