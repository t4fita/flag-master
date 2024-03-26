<script lang="ts">
    let email: string = '';
    let password: string = '';
    
    function logIn(): void {
      // Placeholder for log in logic
    }
  </script>
  
  <form on:submit|preventDefault={logIn}>
    <input bind:value={email} type="email" placeholder="Email" />
    <input bind:value={password} type="password" placeholder="Password" />
    <button type="submit">Log In</button>
  </form>