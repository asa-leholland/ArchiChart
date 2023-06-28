<script>
	let developerMode; // Property to store the developer mode toggle value

	// Sample data for apps and containers
	let apps = [
	  { name: 'App 1', alias: 'A1', description: 'Description of App 1', color: 'red', category: 'API' },
	  { name: 'App 2', alias: 'A2', description: 'Description of App 2', color: 'blue', category: 'Frontend' },
	  { name: 'App 3', alias: 'A3', description: 'Description of App 3', color: 'green', category: 'Database' },
	];

	let selectedApp = null;
	let containers = [];

	function selectApp(app) {
	  if (selectedApp === app) {
		// If the same app is clicked again, deselect it
		selectedApp = null;
	  } else {
		selectedApp = app;
		// Fetch containers for the selected app from the backend
		// and update the 'containers' array accordingly
	  }
	}

	function saveChanges() {
	  // Send the updated app, containers, and connections data to the backend
	  // to be saved in the private GitHub repository using the token from .env
	}
  </script>


<main>
	<div class="system-context-view">
	  {#each apps as app}
		{#if !developerMode && app.category !== 'Testing'}
		  <!-- Skip rendering if not in developer mode and app category is not 'Testing' -->
		  <div
			class="app-box"
			style="background-color: {app.color}"
			class:selected={selectedApp === app}
			on:click={() => selectApp(app)}
		  >
			<div>{app.name}</div>
		  </div>
		{/if}
		{#if developerMode}
		  <!-- Render all apps in developer mode -->
		  <div
			class="app-box"
			style="background-color: {app.color}"
			class:selected={selectedApp === app}
			on:click={() => selectApp(app)}
		  >
			<div>{app.name}</div>
		  </div>
		{/if}
	  {/each}
	</div>

	{#if selectedApp}
	  <div class="container-view">
		<div class="system-app-box" style="background-color: {selectedApp.color}">
		  <h2>{selectedApp.name}</h2>
		  <p>{selectedApp.description}</p>
		</div>

		{#each containers as container}
		  <div class="container-box" style="background-color: {container.color}">
			<h3>{container.name}</h3>
			<!-- Render connections for this container -->
		  </div>
		{/each}
	  </div>
	{/if}

	<div class="toggle-switch">
	  <label>
		<input type="checkbox" bind:checked={developerMode} />
		Developer Mode
	  </label>
	</div>

	<button on:click={saveChanges}>Save</button>
  </main>
  <style>
	/* CSS styles for the dashboard layout */

	.system-context-view {
	  display: flex;
	  flex-wrap: wrap;
	  gap: 10px;
	}

	.app-box {
	  padding: 10px;
	  border-radius: 10px;
	  cursor: pointer;
	}

	.system-app-box {
	  padding: 20px;
	  border-radius: 10px;
	  margin-bottom: 20px;
	}

	.container-box {
	  padding: 10px;
	  border-radius: 10px;
	  margin-bottom: 10px;
	}

	/* Additional styles for colors and other elements */
	/* ... */
  </style>