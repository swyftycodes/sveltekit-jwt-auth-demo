<script>
	import '/src/app.css';

	export let data;
</script>

<nav>
  <ul>
  	<li><a href="/" class="contrast"><strong>hello world!</strong></a></li>
  </ul>
  <ul>
  	<li><a href="/protected">Protected</a></li>
	{#if data.username != undefined}
		<li><a href="/logout">Logout</a></li>
		<li>Logged in as <strong>{data.username}</strong></li>
	{:else}
    	<li><a href="/login">Login</a></li>
	{/if}
  </ul>
</nav>
<hr>

<slot></slot>
